import type { CSSProperties, ReactNode } from "react";
import { Link } from "wouter";
import type { LibraryItem } from "@/content/library";
import { itemHref, learnArticle, type ConditionPlace } from "@/lib/library";
import { mix, paletteFor } from "@/lib/library-theme";

// Explore as cards: each piece is led by a plain topic label, with a small illustration that moves on
// hover. The descriptions say only what each piece really contains, and each card names the
// organisations its summary draws on. Pieces without a card of their own fall back to a plain card.

type Goal = { want: string; desc: string; source: string; cta: string; ink: string; tint: string; mark: string; art: ReactNode };

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

const Ache = () => <svg viewBox="0 0 200 150">
  <circle cx="92" cy="80" r="46" fill="#FFFFFF" stroke="#A8402B" strokeWidth="5" />
  <path d="M74 74 h10 M102 74 h10 M78 100 q14 -8 28 0" stroke="#A8402B" strokeWidth="5" strokeLinecap="round" fill="none" />
  <path className="g-twinkle" d="M150 34 l6 12 l-8 6 l10 14" fill="none" stroke="#D9A441" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
</svg>;

const Pills = () => <svg viewBox="0 0 200 150">
  <rect x="26" y="40" width="148" height="80" rx="10" fill="#FFFFFF" stroke="#2F6851" strokeWidth="5" />
  <path d="M63 40 V120 M100 40 V120 M137 40 V120 M26 80 H174" stroke="#BFE0CB" strokeWidth="3" />
  <g className="g-pop"><rect x="34" y="50" width="22" height="22" rx="11" fill="#E8B04A" /><rect x="71" y="50" width="22" height="22" rx="11" fill="#E8B04A" /><rect x="108" y="88" width="22" height="22" rx="11" fill="#2F6851" /></g>
  <rect x="140" y="8" width="54" height="22" rx="11" fill="#2F6851" />
  <text x="167" y="23" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="800" fill="#FFFFFF">daily</text>
</svg>;

const Neck = () => <svg viewBox="0 0 200 150">
  <path d="M70 146 C70 100, 64 60, 80 10 M130 146 C130 100, 136 60, 120 10" fill="none" stroke="#E8C9BE" strokeWidth="6" strokeLinecap="round" />
  <path d="M100 146 V84 C100 60, 86 40, 84 12 M100 84 C100 60, 114 40, 116 12" fill="none" stroke="#A8402B" strokeWidth="12" strokeLinecap="round" />
  <ellipse className="g-twinkle" cx="100" cy="96" rx="8" ry="13" fill="#E8B04A" />
  <path className="g-travel" pathLength={100} d="M100 146 V84 C100 60, 86 40, 84 12" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
</svg>;

const Pulse = () => <svg viewBox="0 0 200 150">
  <path d="M6 80 H196" stroke="#C3D0F2" strokeWidth="2" strokeDasharray="4 6" />
  <path className="g-draw" pathLength={100} d="M6 80 H40 L50 56 L58 104 L66 80 H96 L104 40 L112 112 L120 80 H134 L142 66 L150 92 L156 80 H196" fill="none" stroke="#34509E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M152 18 c-8 -12 -26 -4 -20 10 c4 8 20 18 20 18 s16 -10 20 -18 c6 -14 -12 -22 -20 -10 Z" fill="#A8402B" className="g-twinkle" />
</svg>;

const Berg = () => <svg viewBox="0 0 200 150">
  <rect x="0" y="58" width="200" height="92" fill="#C3D0F2" opacity=".5" />
  <path d="M0 58 H200" stroke="#2F4FA3" strokeWidth="3" />
  <g className="g-float">
    <path d="M78 58 L96 22 L110 34 L124 58 Z" fill="#FFFFFF" stroke="#2F4FA3" strokeWidth="4" strokeLinejoin="round" />
    <path d="M78 58 H124 L160 104 L142 140 L66 144 L40 104 Z" fill="#2F4FA3" opacity=".75" />
  </g>
  <text x="100" y="98" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="800" fill="#FFFFFF">fatigue</text>
  <text x="100" y="122" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="800" fill="#FFFFFF">memory</text>
</svg>;

const Build = () => <svg viewBox="0 0 200 150">
  <path d="M10 136 H190" stroke="#EAD7B0" strokeWidth="3" strokeLinecap="round" />
  {[16, 22, 30, 40, 52, 66, 82, 100].map((height, index) => <rect key={index} className="g-pop" style={{ animationDelay: `${index * 0.06}s` }} x={18 + index * 22} y={134 - height} width="14" height={height} rx="4" fill={index === 7 ? "#B5522E" : "#D9A441"} />)}
  <rect x="120" y="8" width="70" height="20" rx="10" fill="#8A5A12" />
  <text x="155" y="22" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fontWeight="800" fill="#FFFFFF">build up</text>
</svg>;

// The Dementia & memory cards' pictures, in its purples.
const P = "#6A3E9E";
const L = "#D9C7F2";
const MemPills = () => <svg viewBox="0 0 200 150">{[0, 1, 2, 3].map(index => <g key={index} className="g-pop" style={{ animationDelay: `${index * 0.15}s` }} transform={`translate(${20 + index * 44} ${50 + (index % 2) * 30})`}><rect width="38" height="18" rx="9" fill={index % 2 ? P : L} /><rect width="19" height="18" rx="9" fill="#FFFFFF" opacity=".4" /></g>)}</svg>;
const MemGroup = () => <svg viewBox="0 0 200 150"><ellipse cx="100" cy="90" rx="56" ry="22" fill="#FFFFFF" stroke={P} strokeWidth="4" />{[[50, 70], [84, 50], [120, 50], [154, 70]].map(([x, y], index) => <g key={index} fill={index % 2 ? P : L} className="g-float" style={{ animationDelay: `${index * 0.3}s` }}><circle cx={x} cy={y - 18} r="9" /><path d={`M${x - 14} ${y + 8} C${x - 14} ${y - 6}, ${x - 8} ${y - 8}, ${x} ${y - 8} C${x + 8} ${y - 8}, ${x + 14} ${y - 6}, ${x + 14} ${y + 8} Z`} /></g>)}</svg>;
const MemBoard = () => <svg viewBox="0 0 200 150"><rect x="40" y="16" width="120" height="120" rx="10" fill="#FFFFFF" stroke={P} strokeWidth="4" />{[0, 1, 2, 3, 4].map(index => <rect key={index} className="g-pop" style={{ animationDelay: `${index * 0.2}s` }} x="56" y={34 + index * 19} width={index === 1 ? 88 : 70} height="11" rx="3" fill={index === 1 ? P : L} />)}</svg>;
const MemCheck = () => <svg viewBox="0 0 200 150"><rect x="50" y="14" width="100" height="124" rx="10" fill="#FFFFFF" stroke={P} strokeWidth="4" />{[0, 1, 2, 3].map(index => <g key={index} transform={`translate(64 ${34 + index * 24})`}><rect width="14" height="14" rx="3" fill="none" stroke={P} strokeWidth="3" /><path className="g-draw" pathLength={100} d="M3 7 l4 4 l7 -9" stroke={P} strokeWidth="3" fill="none" /><rect x="22" y="3" width="44" height="8" rx="3" fill={L} /></g>)}</svg>;
const MemShield = () => <svg viewBox="0 0 200 150"><path d="M100 14 L150 32 V74 C150 108, 126 128, 100 138 C74 128, 50 108, 50 74 V32 Z" fill="#FFFFFF" stroke={P} strokeWidth="5" /><path className="g-draw" pathLength={100} d="M76 78 l16 16 l32 -36" stroke={P} strokeWidth="7" fill="none" strokeLinecap="round" /></svg>;
const MemFlame = () => <svg viewBox="0 0 200 150"><rect x="84" y="86" width="32" height="54" rx="6" fill="#FFFFFF" stroke={P} strokeWidth="4" /><g className="g-twinkle"><path d="M100 36 C116 58, 116 74, 100 80 C84 74, 84 58, 100 36 Z" fill="#D9A441" /></g></svg>;
const MemVenn = () => <svg viewBox="0 0 200 150"><circle cx="80" cy="75" r="48" fill={L} opacity=".8" /><circle className="g-float" cx="120" cy="75" r="48" fill={P} opacity=".55" /></svg>;
const MemCaution = () => <svg viewBox="0 0 200 150"><rect x="60" y="20" width="80" height="110" rx="10" fill="#FFFFFF" stroke={P} strokeWidth="4" /><path className="g-twinkle" d="M100 46 L122 86 H78 Z" fill="#D9674A" /><rect x="76" y="100" width="48" height="8" rx="3" fill={L} /></svg>;
const MemMoon = () => <svg viewBox="0 0 200 150"><path className="g-float" d="M120 24 a40 40 0 1 0 36 56 a32 32 0 1 1 -36 -56 Z" fill={P} /><rect x="30" y="100" width="110" height="24" rx="6" fill={L} />{[0, 1].map(index => <text key={index} className="g-fade" style={{ animationDelay: `${index * 0.6}s` }} x={60 + index * 22} y={84 - index * 14} fontFamily="Instrument Serif, Georgia, serif" fontSize="22" fill={P}>z</text>)}</svg>;
const MemSteps = () => <svg viewBox="0 0 200 150"><path d="M20 130 H180" stroke={L} strokeWidth="4" /><g className="g-walk" fill="none" stroke={P} strokeWidth="5" strokeLinecap="round"><circle cx="80" cy="50" r="9" /><path d="M80 59 V92 M80 70 L66 84 M80 70 L94 84" /><path className="g-leg" d="M80 92 L80 128" /><path className="g-leg is-back" d="M80 92 L80 128" /></g></svg>;
const MemRise = () => <svg viewBox="0 0 200 150"><g fill="none" stroke={P} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"><path d="M40 120 V96 H70 V130 M40 96 L40 70" opacity=".4" /><path className="g-fade" d="M110 130 L114 96 L126 70" /><path d="M140 130 V60" /></g><circle cx="40" cy="58" r="9" fill={L} /><circle cx="128" cy="58" r="9" fill={L} /><circle cx="140" cy="46" r="9" fill={P} /></svg>;
const MemWheel = () => <svg viewBox="0 0 200 150"><g className="g-spin">{Array.from({ length: 14 }, (_, index) => <path key={index} d="M100 75 L100 25" stroke={index % 3 ? L : P} strokeWidth="9" strokeLinecap="round" transform={`rotate(${index * (360 / 14)} 100 75)`} />)}</g><circle cx="100" cy="75" r="22" fill="#FFFFFF" /><text x="100" y="82" textAnchor="middle" fontFamily="Newsreader, Georgia, serif" fontSize="20" fontWeight="600" fill={P}>14</text></svg>;
const MemKeys = () => <svg viewBox="0 0 200 150"><path d="M50 40 H150" stroke={P} strokeWidth="6" strokeLinecap="round" /><g className="g-lift"><circle cx="90" cy="70" r="12" fill="none" stroke="#D9A441" strokeWidth="6" /><path d="M90 82 V116 M90 104 H100 M90 112 H98" stroke="#D9A441" strokeWidth="6" /></g><path d="M90 40 V58 M120 40 V52" stroke={P} strokeWidth="4" /></svg>;
const MemEar = () => <svg viewBox="0 0 200 150"><path d="M70 34 C100 18, 128 40, 120 70 C116 86, 98 90, 98 108 C98 126, 76 130, 66 118" fill="none" stroke={P} strokeWidth="8" strokeLinecap="round" />{[0, 1, 2].map(index => <path key={index} className="g-fade" style={{ animationDelay: `${index * 0.3}s` }} d={`M${140 + index * 16} 50 C${152 + index * 16} 70, ${152 + index * 16} 90, ${140 + index * 16} 110`} fill="none" stroke={P} strokeWidth="4" strokeLinecap="round" />)}</svg>;
const MemCalendar = () => <svg viewBox="0 0 200 150"><rect x="40" y="24" width="120" height="104" rx="10" fill="#FFFFFF" stroke={P} strokeWidth="4" /><path d="M40 48 H160" stroke={P} strokeWidth="4" />{Array.from({ length: 12 }, (_, index) => <rect key={index} x={52 + (index % 4) * 26} y={58 + Math.floor(index / 4) * 22} width="18" height="14" rx="3" fill={index === 5 || index === 11 ? P : L} className={index === 5 || index === 11 ? "g-twinkle" : undefined} />)}</svg>;

// The Parkinson's & movement cards' pictures, in its blues.
const B = "#34509E";
const BL = "#C3D0F2";
const MoveWave = () => <svg viewBox="0 0 200 150"><path className="g-draw" pathLength={100} d="M10 110 C30 40, 50 40, 70 100 C90 40, 110 40, 130 100 C150 40, 170 40, 190 100" fill="none" stroke={B} strokeWidth="6" strokeLinecap="round" />{[20, 80, 140].map(x => <circle key={x} cx={x} cy="130" r="7" fill={BL} />)}</svg>;
const MoveRing = () => <svg viewBox="0 0 200 150"><circle cx="100" cy="75" r="50" fill="none" stroke={BL} strokeWidth="14" /><circle className="g-draw" pathLength={100} cx="100" cy="75" r="50" fill="none" stroke={B} strokeWidth="14" strokeLinecap="round" transform="rotate(-90 100 75)" /></svg>;
const MoveMeter = () => <svg viewBox="0 0 200 150">{[0, 1, 2, 3, 4, 5].map(index => <rect key={index} className="g-pop" style={{ animationDelay: `${index * 0.12}s` }} x={30 + index * 24} y={120 - index * 16} width="16" height={20 + index * 16} rx="4" fill={index > 3 ? "#D9A441" : B} />)}</svg>;
const MoveLead = () => <svg viewBox="0 0 200 150"><circle cx="70" cy="46" r="30" fill="#FFFFFF" stroke={B} strokeWidth="5" /><path className="g-draw" pathLength={100} d="M70 46 C100 60, 110 90, 96 120" stroke="#D9A441" strokeWidth="4" fill="none" /><rect x="88" y="116" width="22" height="16" rx="5" fill="#D9A441" /></svg>;
const MoveScale = () => <svg viewBox="0 0 200 150"><path d="M100 30 V130 M70 136 H130" stroke={B} strokeWidth="5" strokeLinecap="round" /><g className="g-float"><path d="M40 46 H160" stroke={B} strokeWidth="5" strokeLinecap="round" /><path d="M30 46 l14 28 h-28 Z M170 46 l-14 28 h28 Z" fill={BL} /></g></svg>;
const MoveBeam = () => <svg viewBox="0 0 200 150"><ellipse cx="100" cy="75" rx="56" ry="62" fill="#FFFFFF" stroke={B} strokeWidth="5" />{[-50, -20, 10, 40].map(angle => <path key={angle} className="g-fade" d={`M${100 + Math.sin((angle * Math.PI) / 180) * 90} ${75 - Math.cos((angle * Math.PI) / 180) * 90} L88 80`} stroke="#D9A441" strokeWidth="3" />)}<circle cx="88" cy="80" r="6" fill="#D9674A" /></svg>;
const MoveCup = () => <svg viewBox="0 0 200 150"><g className="g-lift"><path d="M70 50 H130 L124 120 H76 Z" fill="#FFFFFF" stroke={B} strokeWidth="5" /><rect x="76" y="90" width="48" height="28" fill={BL} /><path d="M66 70 h-10 a10 10 0 0 0 0 24 h12 M134 70 h10 a10 10 0 0 1 0 24 h-12" stroke={B} strokeWidth="5" fill="none" /></g></svg>;
const MoveSteps = () => <svg viewBox="0 0 200 150"><path d="M20 130 H180" stroke={BL} strokeWidth="4" /><g className="g-walk" fill="none" stroke={B} strokeWidth="5" strokeLinecap="round"><circle cx="80" cy="50" r="9" /><path d="M80 59 V92 M80 70 L66 84 M80 70 L94 84" /><path className="g-leg" d="M80 92 L80 128" /><path className="g-leg is-back" d="M80 92 L80 128" /></g></svg>;

/**
 * The cards, keyed by the Explore piece they lead to, in the order they are shown. Each piece is a
 * Rehyn-written summary; `source` names the organisations its facts come from (the piece itself links
 * to each page under "Where this comes from").
 */
const GOALS: Record<string, Goal> = {
  "arm-hand": { want: "Arm and hand information after stroke", desc: "Information on arm and hand weakness after stroke, with a log where you can note any activities your own therapist has suggested.", source: "Stroke Association", cta: "Open the log", ink: "#2F6851", tint: "#E3F0E7", mark: "#BFE0CB", art: <Cup /> },
  walking: { want: "Mobility and walking after stroke", desc: "A short narrated animation on balance, walking aids and the role of physiotherapy. Your own team advises on what suits you.", source: "Stroke Association", cta: "Watch", ink: "#34509E", tint: "#E2E8F8", mark: "#C3D0F2", art: <Walk /> },
  words: { want: "Communication after stroke", desc: "Information on aphasia: why finding words can be hard after a stroke, and communication tips that some people find useful.", source: "Stroke Association", cta: "Read", ink: "#6A3E9E", tint: "#EDE5F8", mark: "#D9C7F2", art: <Words /> },
  fatigue: { want: "Understanding fatigue after stroke", desc: "A short narrated animation on post-stroke fatigue and pacing, with an energy diary you can fill in and print.", source: "Stroke Association", cta: "Watch", ink: "#A8402B", tint: "#FAE6DF", mark: "#F2C3B4", art: <Energy /> },
  rewiring: { want: "Neuroplasticity after stroke", desc: "A short narrated animation explaining how the brain can form new connections after a stroke.", source: "Stroke Association", cta: "Watch", ink: "#4A3F9C", tint: "#E9E6F8", mark: "#CFC8F0", art: <Rewire /> },
  headaches: { want: "Headaches after a bleed", desc: "Information on which headaches are common while you recover, which painkillers to check first, and which headache means calling 999.", source: "Stroke Association, NHS and NICE", cta: "Read", ink: "#A8402B", tint: "#FAE6DF", mark: "#F2C3B4", art: <Ache /> },
  "first-three-months": { want: "The early months after stroke", desc: "Information about the early weeks and months after a stroke, and the reviews that may follow.", source: "Stroke Association and NHS", cta: "Read", ink: "#8A5A12", tint: "#F8EBD3", mark: "#EED3A0", art: <Months /> },
  // TIA's treatment pieces. Ids another page also uses are keyed "<condition>/<piece>".
  "tia/tablets": { want: "Medicines after a TIA", desc: "Information on the tablets often started after a TIA, what each one is for, and questions to ask about them.", source: "Stroke Association and NHS", cta: "Read", ink: "#2F6851", tint: "#E3F0E7", mark: "#BFE0CB", art: <Pills /> },
  "tia/carotid": { want: "Narrowed neck arteries", desc: "Information on how a narrowed carotid artery is found, and the operation that may be offered to clear it.", source: "NHS and Stroke Association", cta: "Read", ink: "#A8402B", tint: "#FAE6DF", mark: "#F2C3B4", art: <Neck /> },
  "under-50/hidden": { want: "Effects you cannot see", desc: "Information on fatigue, memory and thinking after a stroke, and why they can be hard to explain when you look well.", source: "Stroke Association and Different Strokes", cta: "Read", ink: "#2F4FA3", tint: "#E2E8F8", mark: "#C3D0F2", art: <Berg /> },
  "under-50/fitness": { want: "Being active after stroke", desc: "Information on when activity is safe, who to ask first, and why building up slowly matters. Your own team advises on what suits you.", source: "Stroke Association", cta: "Read", ink: "#8A5A12", tint: "#F8EBD3", mark: "#EED3A0", art: <Build /> },
  "af-check": { want: "Checking the heart's rhythm", desc: "Information on why the heartbeat is checked after a TIA, and the tests used to look for atrial fibrillation.", source: "Stroke Association and NHS", cta: "Read", ink: "#34509E", tint: "#E2E8F8", mark: "#C3D0F2", art: <Pulse /> },
  // Dementia & memory, in the light purples of its card.
  "alzheimers/tablets": memory("Medicines for Alzheimer's", "Information on the four medicines that can ease symptoms for a while, what they cannot do, and where the newer medicines stand.", "Alzheimer's Society, NHS and NICE", <MemPills />),
  "alzheimers/keeping-sharp": memory("Keeping the mind active", "Information on group cognitive stimulation therapy, what the evidence says, and why brain-training alone is not recommended.", "NHS, NICE and Alzheimer's Society", <MemGroup />),
  "alzheimers/routines": memory("Routines and memory aids", "Information on routines, timetables, labels, pill organisers and clocks that can make the day easier.", "NHS", <MemBoard />),
  "alzheimers/other-conditions": memory("Things that make memory worse", "Information on infections, delirium, medicines, low mood, and sight and hearing, and when to see the GP.", "NHS and Alzheimer's Society", <MemCheck />),
  "vascular/protect": memory("Treating the cause", "Information on medicines for blood pressure, cholesterol and clots, and the habits that can help slow vascular dementia.", "NHS", <MemShield />),
  "vascular/routines": memory("Routines and memory aids", "Information on routines, timetables, labels, pill organisers and clocks that can make the day easier.", "NHS", <MemBoard />),
  "vascular/mood-apathy": memory("Low mood and apathy", "Information on why depression and apathy are common in vascular dementia, and the talking treatments that can help.", "Alzheimer's Society, NHS and Stroke Association", <MemFlame />),
  "vascular/mixed": memory("Mixed dementia", "Information on having vascular dementia and Alzheimer's disease together, and what it can mean for treatment.", "NHS, Alzheimer's Society and Stroke Association", <MemVenn />),
  "lewy-body/medicines": memory("Medicines to handle with care", "Information on why antipsychotics are avoided whenever possible, and the dementia medicines that may help.", "Alzheimer's Society, NICE and NHS", <MemCaution />),
  "lewy-body/sleep": memory("Acting out dreams", "Information on REM sleep behaviour disorder, keeping safe at night, and the treatment that can help.", "Alzheimer's Society and NHS", <MemMoon />),
  "lewy-body/movement": memory("Movement and falls", "Information on Parkinson's-like movement changes, lowering the risk of falls, and staying active. Your own team advises on what suits you.", "Alzheimer's Society and NHS", <MemSteps />),
  "lewy-body/blood-pressure": memory("Dizzy on standing", "Information on low blood pressure when standing up, and why rising slowly helps.", "Alzheimer's Society and the Lewy Body Society", <MemRise />),
  "mild-cognitive-impairment/brain-health": memory("Protecting the brain", "Information on the 14 risk factors that can be changed, from activity to blood pressure, and why it is never too late.", "Alzheimer's Society and NHS", <MemWheel />),
  "mild-cognitive-impairment/memory-aids": memory("Memory aids that get used", "Information on simple habits and aids: one thing at a time, keys on a hook, reminders and checklists.", "Alzheimer's Society", <MemKeys />),
  "mild-cognitive-impairment/hearing": memory("Hearing and the brain", "Information on how hearing loss is linked with dementia risk, hearing aids, and where to get a hearing test.", "Alzheimer's Society and NHS", <MemEar />),
  "parkinsons-disease/levodopa": movement("Medicines and timing", "Information on levodopa, 'on' and 'off' periods, wearing off, and why taking medicines on time matters.", "Parkinson's UK and NICE", <MoveWave />),
  "parkinsons-disease/exercise": movement("Exercise and Parkinson's", "Information on being active for two and a half hours a week, and on physiotherapy with someone who knows Parkinson's. Your own team advises on what suits you.", "Parkinson's UK and NICE", <MoveRing />),
  "parkinsons-disease/voice": movement("Voice and swallowing", "Information on speech and language therapy for a quieter voice, and the signs of a swallowing problem.", "Parkinson's UK and NICE", <MoveMeter />),
  "parkinsons-disease/dbs": movement("Deep brain stimulation", "Information on who it may suit, what it can improve, and what it cannot change.", "Parkinson's UK and NICE", <MoveLead />),
  "essential-tremor/tablets": movement("Tablets for tremor", "Information on the medicines that can reduce essential tremor, and their trade-offs.", "NHS and the National Tremor Foundation", <MoveScale />),
  "essential-tremor/procedures": movement("Procedures for severe tremor", "Information on focused ultrasound and deep brain stimulation, and where the NICE guidance stands.", "NICE, Parkinson's UK and the National Tremor Foundation", <MoveBeam />),
  "essential-tremor/steadier-hands": movement("Steadier hands", "Information on cutlery, cups and pens that can make eating, drinking and writing easier.", "National Tremor Foundation", <MoveCup />),
  "dystonia/botox": movement("Botulinum toxin injections", "Information on how the injections work, how often they are given, and the side effects to know about.", "NHS and Dystonia UK", <MoveRing />),
  "dystonia/tablets": movement("Tablets for dystonia", "Information on when tablets are used, and the rare type that responds to levodopa.", "NHS and Dystonia UK", <MoveScale />),
  "dystonia/physio": movement("Physiotherapy for dystonia", "Information on why the right physiotherapist matters, and how occupational therapy can help. Your own team advises on what suits you.", "NHS and Dystonia UK", <MoveSteps />),
  "dystonia/dbs": movement("Deep brain stimulation", "Information on when it may be offered for dystonia, and what to expect afterwards.", "NHS, Dystonia UK and NICE", <MoveLead />),
  "mild-cognitive-impairment/follow-up": memory("Being followed up", "Information on reviews after an MCI diagnosis, what to watch for, and when to go back to the GP.", "Alzheimer's Society", <MemCalendar />),
};
/** A Dementia & memory card: the purples of the Dementia card on the Brain page. */
function memory(want: string, desc: string, source: string, art: ReactNode): Goal {
  return { want, desc, source, cta: "Read", ink: "#6A3E9E", tint: "#F1E9FB", mark: "#D9C7F2", art };
}
/** A Parkinson's & movement card: the blues of its card on the Brain page. */
function movement(want: string, desc: string, source: string, art: ReactNode): Goal {
  return { want, desc, source, cta: "Read", ink: "#34509E", tint: "#E7ECFB", mark: "#C3D0F2", art };
}
const ORDER = Object.keys(GOALS);
/**
 * A card keyed "<condition>/<piece>" is that page's own. A card keyed by the piece alone was written for
 * the stroke pages, so only they use it; any other page with a piece of the same name gets a plain card.
 */
const goalKey = (groupId: string, conditionId: string, itemId: string) =>
  GOALS[`${conditionId}/${itemId}`] ? `${conditionId}/${itemId}` : groupId === "stroke" ? itemId : `${conditionId}/${itemId}`;

const PLAIN: Omit<Goal, "want" | "desc" | "source" | "art"> = { cta: "Open", ink: "#4A3F9C", tint: "#E9E6F8", mark: "#CFC8F0" };

export function GoalCards({ place, items }: { place: ConditionPlace; items: LibraryItem[] }) {
  const key = (item: LibraryItem) => goalKey(place.group.id, place.condition.id, item.id);
  const palette = paletteFor(place);
  const ordered = [...items].sort((a, b) => rank(key(a)) - rank(key(b)));
  return <ul className="lib-v2-goals" role="list">
    {ordered.map((item, index) => {
      const goal = GOALS[key(item)];
      const look = goal ?? (palette ? { cta: "Open", ink: palette.ink, tint: palette.tint, mark: mix(palette.tint, palette.ink, 0.2) } : PLAIN);
      // A plain card with a checked answer shows the answer's own hook and the organisations it draws on.
      const learn = goal ? undefined : learnArticle(item);
      const desc = goal?.desc ?? learn?.hook ?? item.blurb;
      const source = goal?.source ?? (learn ? learn.sources.map(entry => entry.label.split(":")[0]).filter((name, at, all) => all.indexOf(name) === at).slice(0, 3).join(", ") : undefined);
      return <li key={item.id}>
        <Link href={itemHref({ ...place, item })} className="lib-v2-goal" style={{ background: look.tint, animationDelay: `${index * 0.09}s`, ["--ink" as string]: look.ink, ["--mark" as string]: look.mark } as CSSProperties}>
          <span className="lib-v2-goal-blob" aria-hidden="true" />
          {goal && <span className="lib-v2-goal-art" aria-hidden="true">{goal.art}</span>}
          <span className="lib-v2-goal-want"><span>{goal ? goal.want : item.title}</span></span>
          {goal && <b className="lib-v2-goal-title">{item.title}</b>}
          {desc && <span className="lib-v2-goal-desc">{desc}</span>}
          {source && <span className="lib-v2-goal-source">Rehyn summary · Source: {source}</span>}
          <span className="lib-v2-goal-cta">{look.cta} <i aria-hidden="true">→</i></span>
        </Link>
      </li>;
    })}
  </ul>;
}

const rank = (id: string) => { const at = ORDER.indexOf(id); return at < 0 ? ORDER.length : at; };
