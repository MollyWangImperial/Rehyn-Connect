import { Link, useLocation, useRouter, useSearch } from "wouter";
import { BookOpen, CircleDot, Home as HomeIcon, MessageCircle, Stethoscope, UsersRound } from "lucide-react";
import { communityHref, communityViewFromQuery, leadsHere, unreadCount, useCommunity, type CommunitySpace } from "@/lib/community-store";
import { pokerNightOn, secondsToTables, usePokerNight } from "@/lib/poker-night";
import CircleTab from "./community/CirclePeek";
import { SuitGlyph } from "./community/games/PokerParts";
import { unreadMessages } from "./community/messages-model";

export type SiteTab = "feed" | "library" | "clinicians" | "circle" | "poker" | "groups" | "messages";
// The lounge has no tab: it was removed for patients and clinicians alike (review comment 12).
const COMMUNITY_TABS: SiteTab[] = ["feed", "circle", "poker", "groups", "messages"];

/** Which top tab an address belongs to, if any: Safety, Settings and the Care team have none. */
export function siteTabFor(pathname: string, search: string): SiteTab | null {
  if (pathname === "/library" || pathname.startsWith("/library/")) return "library";
  if (pathname === "/clinicians" || pathname.startsWith("/clinicians/")) return "clinicians";
  if (pathname !== "/community") return null;
  const space = communityViewFromQuery(search).space;
  if (space === "start") return "groups";
  if (space === "friends") return null;
  return COMMUNITY_TABS.find(tab => tab === space) ?? null;
}

/** The real path, also inside a nested route (the Library's "/" is "/library"). */
export function usePathname(): string {
  const { base } = useRouter();
  const [location] = useLocation();
  if (location.startsWith("~")) return location.slice(1);
  return base && location === "/" ? base : `${base}${location}`;
}

/** A count on a tab. The tab's own words say it too, for a screen reader. */
const Count = ({ count, what }: { count: number; what: string }) =>
  count > 0 ? <span className="site-tab-count"><span aria-hidden="true">{count}</span><span className="cm-sr">{`, ${count} ${what}`}</span></span> : null;

/**
 * The tabs at the top right of every page: the Feed (Rehyn: Connect's home), the Library, Clinicians, then the
 * community's spaces. Poker night joins them on Fridays. Friends has no tab: requests and friends are
 * in the Friends drawer, and privacy and blocked people under Settings → Your profile. The links start with "~" so they lead to the
 * same place from the Library's nested pages; a tab for the view already showing doesn't add it to
 * Back again. The Sunday circle's tab opens a live peek of the circle on hover (CirclePeek).
 */
export default function SiteTabs(_: { here?: number }) {
  const search = useSearch();
  const memory = useCommunity();
  const pathname = usePathname();
  const current = siteTabFor(pathname, search);
  const pokerOn = pokerNightOn(usePokerNight());
  const tab = (target: SiteTab, href: string) => ({
    href: `~${href}`,
    replace: pathname === "/community" && target !== "library" && leadsHere(href, search),
    className: `site-tab ${current === target ? "is-active" : ""}`,
    "aria-current": current === target ? ("page" as const) : undefined,
  });
  const space = (target: CommunitySpace & SiteTab) => tab(target, communityHref(target));

  return (
    <nav className="site-tabs" aria-label="Main">
      <Link {...space("feed")}><span className="site-tab-icon"><HomeIcon size={20} /></span><span>Feed</span></Link>
      <Link {...tab("library", "/library")}><span className="site-tab-icon"><BookOpen size={20} /></span><span>Library</span></Link>
      <Link {...tab("clinicians", "/clinicians")}><span className="site-tab-icon"><Stethoscope size={20} /><span className="site-tab-new" aria-hidden="true">New</span></span><span>Clinicians</span></Link>
      <CircleTab {...space("circle")} active={current === "circle"}>
        <span className="site-tab-icon"><CircleDot size={20} /><span className="site-tab-dot" aria-hidden="true" /></span><span>Sunday circle</span><span className="cm-sr">, live now</span>
      </CircleTab>
      {(pokerOn || current === "poker") && (
        <Link {...space("poker")}>
          <span className="site-tab-icon"><SuitGlyph suit="s" size={19} colour="currentColor" /><span className="site-tab-live is-gold">{secondsToTables(new Date()) > 0 ? "7 pm" : "Live"}</span></span>
          <span>Poker night</span>
        </Link>
      )}
      <Link {...space("groups")}><span className="site-tab-icon"><UsersRound size={20} />{current !== "groups" && <Count count={unreadCount(memory)} what="unread" />}</span><span>Groups</span></Link>
      <Link {...space("messages")}><span className="site-tab-icon"><MessageCircle size={20} /><Count count={unreadMessages(memory)} what="unread" /></span><span>Messages</span></Link>
    </nav>
  );
}
