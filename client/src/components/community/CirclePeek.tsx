import { useEffect, useId, useRef, useState, type CSSProperties, type FocusEvent, type KeyboardEvent, type ReactNode } from "react";
import { Link } from "wouter";
import { circleNow, eventInAddress } from "@/content/circle-events";
import { circle, people, type CircleSeat, type PersonId } from "@/content/community-samples";
import { canSee, communityHref, communityStore, isBlocked, useCommunity } from "@/lib/community-store";
import { countWord } from "./Circle";
import { CupIcon } from "./icons";
import { Face, LiveDot } from "./parts";

type TabLink = { href: string; replace: boolean; className: string; "aria-current"?: "page" };

const isPerson = (who: CircleSeat): who is PersonId => who !== "alira" && who !== "you";

/**
 * The live peek under the Sunday circle's tab: today's get-together, who holds the teacup and what they're saying,
 * who's there, and a way to take your seat. It opens on hover (after a short delay, so it doesn't flash as the
 * pointer passes) and when the tab is reached with the keyboard; Escape closes it. The teacup goes round the people
 * the person hasn't blocked or hidden, one every few seconds, so each look finds whoever has it now.
 */
function PeekedTab({ link, children }: { link: TabLink; children: ReactNode }) {
  const memory = useCommunity();
  const titleId = useId();
  const wrap = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const [now, setNow] = useState(() => Date.now());
  const [shift, setShift] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [closed, setClosed] = useState(false);
  const { event } = circleNow(new Date(now), eventInAddress());
  const seated = memory.seated;
  // As in the circle: Alira and everyone not blocked, and you once you've sat down.
  const present = circle.order.filter(who => who !== "you" && !(isPerson(who) && isBlocked(memory, who))).length + (seated ? 1 : 0);
  const heard = circle.order.filter(isPerson).filter(who => canSee(memory, who));
  const speaker = heard.length ? heard[Math.floor(now / circle.everyMs) % heard.length] : null;
  const others = heard.filter(who => who !== speaker).slice(0, 3);

  const open = () => {
    setNow(Date.now());
    setClosed(false);
    // Near the bar's right edge, the card moves left to stay inside it; its notch still points at the tab.
    const box = wrap.current, peek = card.current, head = box?.closest<HTMLElement>(".cm-head, .site-top");
    if (!box || !peek || !head) return;
    const edge = head.getBoundingClientRect().right - (parseFloat(getComputedStyle(head).paddingRight) || 0);
    setShift(Math.min(0, Math.round(edge - box.getBoundingClientRect().left - peek.offsetWidth)));
  };
  // It refreshes as it opens, not as the focus or pointer moves about inside it.
  const inside = (node: EventTarget | null) => !!node && !!wrap.current?.contains(node as Node);
  const enter = (event: FocusEvent) => { if (!inside(event.relatedTarget)) open(); };
  const leave = (event: FocusEvent) => { if (!inside(event.relatedTarget)) setClosed(false); };
  const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setClosed(true); };
  // Escape closes it while the pointer rests on it too, wherever the focus is.
  useEffect(() => {
    if (!hovered) return;
    const onKey = (event: globalThis.KeyboardEvent) => { if (event.key === "Escape") setClosed(true); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hovered]);

  return (
    <div
      ref={wrap}
      className={`cm-tab-wrap ${closed ? "is-closed" : ""}`}
      style={{ "--cm-peek-shift": `${shift}px` } as CSSProperties}
      onPointerEnter={() => { setHovered(true); if (!inside(document.activeElement)) open(); }}
      onPointerLeave={() => { setHovered(false); setClosed(false); }}
      onFocus={enter}
      onBlur={leave}
      onKeyDown={escape}
    >
      <Link {...link} aria-describedby={titleId}>{children}</Link>
      <div ref={card} className="cm-peek" role="group" aria-label="Sunday circle, live now">
        <p className="cm-peek-status"><LiveDot /><span className="cm-peek-live">Live</span><span>· Hosted by Alira</span></p>
        <p className="cm-peek-title" id={titleId}>{event.name}</p>
        {speaker && (
          <div className="cm-peek-speaker">
            <span className="cm-peek-face" aria-hidden="true">
              <Face who={speaker} size={52} />
              <span className="cm-peek-cup"><CupIcon size={14} strokeWidth={2.2} /></span>
            </span>
            <div className="cm-peek-said">
              <p className="cm-peek-who">{people[speaker].name} <span>Speaking</span></p>
              <p className="cm-peek-caption">{`“${event.lines[speaker]}”`}</p>
            </div>
          </div>
        )}
        <div className="cm-peek-seats">
          <span className="cm-peek-stack" aria-hidden="true">
            {others.map(who => <Face key={who} who={who} size={36} />)}
            {!seated && <span className="cm-peek-empty" />}
          </span>
          <span>{seated ? <>{countWord(present)} of us now.<br />Your seat is kept.</> : <>{countWord(present)} of us here.<br />One seat is yours.</>}</span>
        </div>
        {/* "~": the tab sits in the top bar, which the Library's nested pages draw too. */}
        <Link className="cm-btn cm-btn-gold cm-btn-wide" href={`~${communityHref("circle")}`} onClick={() => communityStore.takeSeat()}>{seated ? "Go to your seat" : "Take your seat"}</Link>
      </div>
    </div>
  );
}

/**
 * The Sunday circle's tab. On the other views it has the live peek; in the circle itself it is a plain tab.
 * `children` replaces its words (the top bar draws an icon above them).
 */
export default function CircleTab({ active, children, ...link }: TabLink & { active: boolean; children?: ReactNode }) {
  const label = children ?? <><span>Sunday circle</span>{" "}<span className="cm-tab-note cm-tab-note-gold">Live now</span></>;
  return active ? <Link {...link}>{label}</Link> : <PeekedTab link={link}>{label}</PeekedTab>;
}
