import type { ReactNode } from "react";
import type { SceneArt as Art } from "@/content/ischaemic-media";

// The moving pictures behind the narrated films (content/ischaemic-media.ts). Each is a small SVG
// whose parts animate with the classes in pages/library-media.css. Every picture is drawn in its
// finished state, and the animations start from somewhere else, so with reduced motion the reader
// simply sees the finished picture.

const Brain = ({ x, y, scale = 1, className = "s-brain" }: { x: number; y: number; scale?: number; className?: string }) =>
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path className={className} d="M-46 6 C-50 -22 -26 -40 -2 -36 C10 -46 40 -40 46 -18 C60 -8 56 18 40 24 C34 40 8 42 -4 34 C-22 42 -46 32 -46 6 Z" />
    <path className="s-gyrus" d="M-30 -10 q10 -10 20 0 q10 -10 20 0 M-34 12 q12 -8 24 0 q12 -8 24 0 M14 -24 q8 6 16 0" />
  </g>;

const Figure = ({ x, y, className = "" }: { x: number; y: number; className?: string }) =>
  <g className={`s-figure ${className}`} transform={`translate(${x} ${y})`}>
    <circle cx="0" cy="-46" r="9" />
    <path d="M0 -36 V-6 M0 -30 L-14 -14 M0 -30 L14 -14 M0 -6 L-10 18 M0 -6 L10 18" />
  </g>;

const Tube = ({ x1 = 16, x2 = 226 }: { x1?: number; x2?: number }) => <rect className="s-tube" x={x1} y="70" width={x2 - x1} height="40" rx="20" />;
const d = (seconds: number) => ({ animationDelay: `${seconds}s` });

function Picture({ art }: { art: Art }): ReactNode {
  switch (art) {
    case "artery-flow": return <>
      <Tube />
      <line className="s-blood a-flow" x1="34" y1="90" x2="232" y2="90" />
      <g className="a-pulse"><Brain x={268} y={92} scale={0.85} /></g>
      <text className="s-label" x="120" y="140" textAnchor="middle">artery</text>
      <text className="s-label" x="268" y="146" textAnchor="middle">brain</text>
    </>;
    case "artery-clot": return <>
      <Tube />
      <line className="s-blood a-flow" x1="34" y1="90" x2="128" y2="90" />
      <line className="s-blood is-still" x1="172" y1="90" x2="232" y2="90" />
      <circle className="s-clot a-pop" cx="150" cy="90" r="17" />
      <Brain x={268} y={92} scale={0.85} />
      <circle className="s-dead a-fade" cx="282" cy="80" r="15" style={d(0.8)} />
      <text className="s-label" x="150" y="140" textAnchor="middle">clot</text>
    </>;
    case "brain-dim": return <>
      <Brain x={160} y={92} scale={2} />
      <circle className="s-patch a-dim" cx="196" cy="70" r="22" />
      <circle className="s-ring a-ping" cx="196" cy="70" r="22" />
    </>;
    case "brain-cross": return <>
      <path className="s-hemi is-left" d="M157 14 C124 12 108 32 112 52 C116 72 136 80 157 78 Z" />
      <path className="s-hemi" d="M163 14 C196 12 212 32 208 52 C204 72 184 80 163 78 Z" />
      <g className="s-figure is-big" transform="translate(160 150)">
        <circle cx="0" cy="-46" r="9" />
        <path d="M0 -36 V-6 M0 -6 L-10 18 M0 -6 L10 18" />
        <path d="M0 -30 L-16 -12" />
        <path className="s-limb-on a-pulse" style={d(1.4)} d="M0 -30 L16 -12" />
      </g>
      <path className="s-path a-draw" pathLength={100} d="M134 50 C138 96 176 96 176 136" />
      <text className="s-label" x="96" y="36" textAnchor="end">left brain</text>
      <text className="s-label" x="196" y="166" textAnchor="start">right arm</text>
    </>;
    case "flow-restored": return <>
      <Tube />
      <line className="s-blood a-flow a-fade" style={d(1.2)} x1="34" y1="90" x2="232" y2="90" />
      <circle className="s-clot a-shrink" cx="150" cy="90" r="17" />
      <g className="a-pulse" style={d(1.6)}><Brain x={268} y={92} scale={0.85} /></g>
    </>;
    case "rewire-paths": return <>
      {[[40, 60], [90, 40], [100, 120], [160, 90], [230, 50], [280, 110], [220, 140]].map(([x, y], index) =>
        <circle key={index} className="s-node a-pop" style={d(index * 0.1)} cx={x} cy={y} r="8" />)}
      <path className="s-old" d="M40 60 L90 40 M90 40 L160 90 M100 120 L160 90" />
      <path className="s-broken" d="M160 90 L230 50" />
      <path className="s-cut" d="M188 62 l12 12 M200 62 l-12 12" />
      <path className="s-new a-draw" pathLength={100} d="M160 90 C190 140 210 150 220 140 C240 130 260 120 280 110 C270 80 250 60 230 50" />
    </>;
    case "bridge-down": return <>
      <rect className="s-water" x="132" y="0" width="56" height="180" />
      <path className="s-road" d="M0 90 H132 M188 90 H320" />
      <path className="s-bridge" d="M126 84 h18 v12 h-18 Z M176 84 h18 v12 h-18 Z" />
      <path className="s-bridge a-fall" d="M146 86 h28 v8 h-28 Z" />
      <rect className="s-car a-arrive" x="70" y="78" width="30" height="16" rx="5" />
    </>;
    case "back-roads": return <>
      <rect className="s-water" x="132" y="0" width="56" height="180" />
      <path className="s-road" d="M0 90 H132 M188 90 H320" />
      <path className="s-bridge" d="M126 84 h18 v12 h-18 Z M176 84 h18 v12 h-18 Z" />
      <path className="s-lane a-draw" pathLength={100} d="M100 90 C110 130 120 150 140 154 H180 C200 150 210 130 220 90" />
      <rect className="s-mini-bridge a-pop" style={d(1.2)} x="132" y="148" width="56" height="12" rx="3" />
    </>;
    case "road-widens": return <>
      <path className="s-lane-wide a-widen" d="M10 150 C80 150 90 40 160 40 C230 40 240 150 310 150" />
      <path className="s-traffic a-flow" d="M10 150 C80 150 90 40 160 40 C230 40 240 150 310 150" />
    </>;
    case "slow-lift": return <>
      <Brain x={60} y={70} scale={0.7} />
      <path className="s-arm" d="M140 130 H200" />
      <g className="a-lift" style={{ transformOrigin: "200px 130px" }}><path className="s-arm" d="M200 130 H262" /><circle className="s-hand" cx="268" cy="130" r="8" /></g>
      {["again", "again", "again"].map((word, index) => <text key={index} className="s-word a-fade" style={d(0.6 + index * 0.9)} x={110 + index * 50} y={40 + index * 4}>{word}</text>)}
    </>;
    case "footsteps": return <>
      {[0, 1, 2, 3, 4, 5].map(step => {
        const x = 40 + step * 46;
        const y = step % 2 ? 76 : 104;
        return <g key={step} className="s-foot a-step" style={d(step * 0.35)}>
          <ellipse cx={x} cy={y} rx="13" ry="7" />
          <circle cx={x + 17} cy={y - 5} r="2.6" /><circle cx={x + 19} cy={y} r="2.6" /><circle cx={x + 17} cy={y + 5} r="2.6" />
        </g>;
      })}
    </>;
    case "calendar": return <>
      {["Weeks", "Months", "Years"].map((label, index) => <g key={label} className="a-pop" style={d(index * 0.45)}>
        <rect className="s-page" x={34 + index * 96} y="44" width="70" height="80" rx="10" />
        <rect className="s-page-top" x={34 + index * 96} y="44" width="70" height="18" rx="8" />
        <text className="s-label" x={69 + index * 96} y="100" textAnchor="middle">{label}</text>
      </g>)}
      <path className="s-new a-draw" pathLength={100} style={d(1.2)} d="M30 158 C120 150 200 140 300 120" />
    </>;
    case "bed-chair": return <>
      <path className="s-furniture" d="M20 120 H140 M20 120 V96 M140 120 V108 M20 108 H140" />
      <path className="s-furniture" d="M230 84 V126 M230 106 H270 V126 M270 106 V84" />
      <g className="a-arrive-far"><Figure x={250} y={98} /></g>
      <path className="s-ground" d="M10 128 H310" />
    </>;
    case "standing": return <>
      <path className="s-furniture" d="M70 84 V126 M70 106 H110 V126" />
      <g className="a-rise"><Figure x={150} y={110} /></g>
      <path className="s-ground" d="M10 128 H310" />
    </>;
    case "balance": return <>
      <path className="s-ground" d="M40 140 H280" />
      <g className="a-sway" style={{ transformOrigin: "160px 140px" }}><Figure x={160} y={122} /></g>
      {["brain", "muscles", "joints", "touch", "vision", "inner ear"].map((word, index) =>
        <text key={word} className="s-chip a-fade" style={d(0.3 + index * 0.35)} x={index < 3 ? 70 : 250} y={40 + (index % 3) * 34} textAnchor="middle">{word}</text>)}
    </>;
    case "walking-aid": return <>
      <path className="s-ground" d="M10 140 H310" />
      <g className="a-walk"><Figure x={150} y={122} /><path className="s-stick" d="M165 108 L172 140" /></g>
    </>;
    case "goals": return <>
      <path className="s-stairs" d="M30 150 H100 V120 H160 V90 H220 V60 H290" />
      {["sit", "stand", "step", "walk"].map((word, index) => <text key={word} className="s-label" x={65 + index * 60} y={168 - index * 30} textAnchor="middle">{word}</text>)}
      <circle className="s-climber a-climb" cx="255" cy="48" r="10" />
    </>;
    case "battery-drain": return <>
      <rect className="s-battery" x="100" y="50" width="110" height="60" rx="10" />
      <rect className="s-battery-cap" x="210" y="68" width="10" height="24" rx="3" />
      <rect className="s-charge a-drain" x="108" y="58" width="94" height="44" rx="5" />
      <text className="s-word a-fade" style={d(1.6)} x="240" y="50">z z z</text>
    </>;
    case "healing": return <>
      <Brain x={160} y={90} scale={1.6} />
      {[[120, 60], [196, 70], [150, 120], [214, 112]].map(([x, y], index) =>
        <path key={index} className="s-spark a-pulse" style={d(index * 0.4)} d={`M${x} ${y - 8} V${y + 8} M${x - 8} ${y} H${x + 8}`} />)}
    </>;
    case "pace": return <>
      {["Pace", "Plan", "Prioritise"].map((word, index) => <g key={word} className="a-pop" style={d(index * 0.5)}>
        <circle className="s-bubble" cx={70 + index * 90} cy="90" r="38" />
        <text className="s-label is-strong" x={70 + index * 90} y="95" textAnchor="middle">{word}</text>
      </g>)}
    </>;
    case "breaks": return <>
      <path className="s-ground" d="M20 120 H300" />
      {[[20, 60, "do"], [84, 30, "rest"], [118, 50, "do"], [172, 30, "rest"], [206, 60, "do"], [270, 30, "rest"]].map(([x, w, kind], index) =>
        <rect key={index} className={`a-grow ${kind === "do" ? "s-do" : "s-rest"}`} style={d(index * 0.3)} x={x as number} y={kind === "do" ? 70 : 92} width={w as number} height={kind === "do" ? 50 : 28} rx="6" />)}
      <text className="s-label" x="50" y="150" textAnchor="middle">activity</text>
      <text className="s-label" x="99" y="150" textAnchor="middle">break</text>
    </>;
    case "diary": return <>
      <rect className="s-page" x="90" y="24" width="140" height="136" rx="10" />
      {[0, 1, 2, 3, 4].map(row => <path key={row} className="s-ink a-draw" pathLength={100} style={d(row * 0.4)} d={`M108 ${54 + row * 20} H${200 - (row % 2) * 30}`} />)}
      <path className="s-tick a-draw" pathLength={100} style={d(2.2)} d="M196 140 l8 8 l16 -18" />
    </>;
  }
}

export function SceneArtwork({ art, label }: { art: Art; label: string }) {
  return <svg className="lib-scene-art" viewBox="0 0 320 180" role="img" aria-label={label} focusable="false">
    <Picture art={art} />
  </svg>;
}
