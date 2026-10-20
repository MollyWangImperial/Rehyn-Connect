import { useEffect, useState, type ReactNode } from "react";
import type { LearnArticle } from "@/content/my-time-learn";
import type { ItemPlace } from "@/lib/library";

// What every card's own piece is built from (NewsPieces.tsx, NewsBleedPieces.tsx): the band it sits
// in, a row of choices, a paragraph of the card's answer, and whether to keep still.

export type PieceProps = { article: LearnArticle; place: ItemPlace };

/** True when the reader has asked for reduced motion: pieces then show their end state, still. */
export function useStill() {
  const [still, setStill] = useState(false);
  useEffect(() => {
    const query = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!query) return;
    setStill(query.matches);
    const change = () => setStill(query.matches);
    query.addEventListener?.("change", change);
    return () => query.removeEventListener?.("change", change);
  }, []);
  return still;
}

/** One paragraph of the card's checked answer. */
export const para = (article: LearnArticle, section: number, paragraph = 0) => article.sections[section]?.paragraphs[paragraph] ?? "";

/** The band every picture sits in: its colour, a kicker, a title, the picture and its controls. */
export function Band({ tone, kicker, title, art, children, credit }: { tone: string; kicker: string; title: string; art: ReactNode; children: ReactNode; credit: string }) {
  return <section className={`lib-piece-band is-${tone}`} aria-label={title}>
    <div className="lib-piece-inner">
      <div className="lib-piece-art">{art}</div>
      <div className="lib-piece-panel">
        <div className="lib-why-kicker">{kicker}</div>
        <h2 className="lib-why-title">{title}</h2>
        {children}
      </div>
    </div>
    <p className="lib-why-credit">{credit}</p>
  </section>;
}

export function Choices<T extends string>({ items, active, onPick, label }: { items: { id: T; label: string; note?: string }[]; active: T | null; onPick: (id: T) => void; label: string }) {
  return <div className="lib-why-choices" role="group" aria-label={label}>
    {items.map((item, index) => <button key={item.id} type="button" className="lib-why-choice" aria-pressed={active === item.id} onClick={() => onPick(item.id)}>
      <span className="lib-why-num" aria-hidden="true">{index + 1}</span>
      <span>{item.note && <span className="lib-scans-when">{item.note}</span>}{item.label}</span>
    </button>)}
  </div>;
}
