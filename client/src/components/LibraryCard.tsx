import { useId, useState, type FormEvent } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, BookOpen, Search } from "lucide-react";
import { librarySections, MOST_READ } from "@/content/library";
import { itemByKey, itemHref } from "@/lib/library";

/**
 * The Library card, in the feed's right-hand lane: look up a topic, jump to a section, or open what others are
 * reading most this week. Links start with "~", so they lead to the real pages from anywhere. Styles: site-shell.css.
 */
export default function LibraryCard({ className = "" }: { className?: string }) {
  const [, navigate] = useLocation();
  const [query, setQuery] = useState("");
  const id = useId();
  const mostRead = MOST_READ.slice(0, 2).map(itemByKey).filter(place => place !== undefined);
  const search = (event: FormEvent) => {
    event.preventDefault();
    const words = query.trim();
    navigate(`~${words ? `/library?q=${encodeURIComponent(words)}` : "/library"}`);
  };
  return (
    <section className={`site-card site-library ${className}`} aria-labelledby={`${id}-title`}>
      <div className="site-library-head">
        <span className="site-library-icon" aria-hidden="true"><BookOpen size={18} /></span>
        <span><b id={`${id}-title`}>The library</b><span>Trusted info, in plain English</span></span>
      </div>
      <form role="search" className="site-library-search" onSubmit={search}>
        <label htmlFor={id} className="cm-sr">Look up a topic in the Library</label>
        <Search size={15} aria-hidden="true" />
        <input id={id} type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Look up a topic" autoComplete="off" />
      </form>
      <div className="site-chips">
        {librarySections.slice(0, 5).map(section => <Link key={section.id} className="site-chip" href={`~/library/${section.id}`}>{section.short}</Link>)}
      </div>
      {mostRead.length > 0 && (
        <>
          <p className="site-caption">Most read this week</p>
          <ul className="site-reads">
            {mostRead.map(place => (
              <li key={itemHref(place)}>
                <Link className="site-read" href={`~/library${itemHref(place)}`}>
                  <b>{place.item.title}</b>
                  <span>{place.condition.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      <Link className="site-library-open" href="~/library">Open the library<ArrowRight size={16} aria-hidden="true" /></Link>
    </section>
  );
}
