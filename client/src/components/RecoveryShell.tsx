import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLocation } from "wouter";
import { Menu, Plus, Sun, X } from "lucide-react";
import { profileInitial, profileName, useProfile } from "@/lib/profile";
import { setDisplayPrefs, useDisplayPrefs } from "@/lib/display-prefs";
import { useSettings } from "./AccountSettings";
import { useMediaQuery } from "./community/hooks";
import HeartRateMark from "./HeartRateMark";
import ProfilePanel from "./ProfilePanel";
import SiteTabs from "./SiteTabs";
import "./site-shell.css";

type ViewName = "Library" | "My Community" | "Care Team";

type RecoveryShellProps = {
  active: ViewName;
  children: ReactNode;
  dateLabel?: string;
  className?: string;
  /** How many are in the lounge now, for its tab (My community keeps it live). */
  loungeHere?: number;
};

/** Below this width the profile panel leaves the page and slides in from the left instead. */
const NARROW = "(max-width: 1179px)";

/**
 * Every page: a top bar with the logo on the left and the tabs, larger text, stronger contrast and
 * your profile on the right; your profile panel down the left (ProfilePanel); the page itself.
 * The Feed is the home page. The shell also wraps nested routes (the Library lives under /library),
 * so all its links are absolute ("~").
 */
export default function RecoveryShell({ active, children, dateLabel = "THURSDAY, 24 SEPTEMBER", className = "", loungeHere }: RecoveryShellProps) {
  const [, navigate] = useLocation();
  const { largeText, strongContrast } = useDisplayPrefs();
  const setLargeText = (on: boolean) => setDisplayPrefs({ largeText: on });
  const setStrongContrast = (on: boolean) => setDisplayPrefs({ strongContrast: on });
  const openSettings = useSettings();
  const profile = useProfile();
  const narrow = useMediaQuery(NARROW);
  const [panelOpen, setPanelOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  const drawer = narrow && panelOpen;

  // The slide-in panel: Escape closes it, and the focus goes into it and back to the menu button.
  useEffect(() => {
    if (!drawer) return;
    panel.current?.querySelector<HTMLElement>("a, button, input")?.focus();
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setPanelOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawer]);
  const closePanel = () => { if (!drawer) return; setPanelOpen(false); menuButton.current?.focus(); };
  useEffect(() => { if (!narrow) setPanelOpen(false); }, [narrow]);

  return (
    <div className={`recovery-shell site-shell ${largeText ? "recovery-large-text" : ""} ${strongContrast ? "recovery-strong-contrast" : ""} ${drawer ? "has-drawer" : ""} ${className}`}>
      <header className="site-top">
        <div className="site-top-start">
          <button ref={menuButton} type="button" className="site-menu" aria-label={panelOpen ? "Close your panel" : "Open your panel"} aria-expanded={drawer} aria-controls="site-panel" onClick={() => setPanelOpen(!panelOpen)}>
            {drawer ? <X size={20} /> : <Menu size={20} />}
          </button>
          <button type="button" className="site-brand" onClick={() => navigate("~/community")} aria-label="Rehyn: Connect, go to the Feed">
            <span className="site-brand-mark"><HeartRateMark size={22} /></span>
            <span className="site-brand-name">Rehyn<em>: Connect</em></span>
          </button>
        </div>
        <SiteTabs here={loungeHere} />
        <div className="site-top-tools">
          <button className={`recovery-utility ${largeText ? "is-on" : ""}`} onClick={() => setLargeText(!largeText)} aria-label={largeText ? "Use standard text" : "Use larger text"} title="Larger text"><b>A</b><Plus size={11} /></button>
          <button className={`recovery-utility ${strongContrast ? "is-on" : ""}`} onClick={() => setStrongContrast(!strongContrast)} aria-label="Toggle stronger contrast" title="Stronger contrast"><Sun size={18} /></button>
          <button className="recovery-profile" aria-label={`${profileName(profile)}'s profile`} aria-haspopup="dialog" onClick={event => openSettings(event.currentTarget)}>{profile.photo ? <img src={profile.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }} /> : profileInitial(profile)}</button>
        </div>
      </header>

      <div className="site-body">
        {drawer && <button type="button" className="site-scrim" aria-label="Close your panel" tabIndex={-1} onClick={closePanel} />}
        <aside ref={panel} id="site-panel" className={`site-panel ${drawer ? "is-open" : ""}`} aria-label="Your panel" inert={narrow && !panelOpen ? true : undefined}>
          <ProfilePanel dateLabel={dateLabel} careTeam={active === "Care Team"} onNavigate={closePanel} />
        </aside>
        <main className="site-main">{children}</main>
      </div>
    </div>
  );
}
