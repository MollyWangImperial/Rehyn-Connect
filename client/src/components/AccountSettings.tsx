import { useContext, useEffect, useRef, useState, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useLocation } from "wouter";
import { ChevronRight, Eye, FileText, HeartPulse, Settings, ShieldCheck, SlidersHorizontal, UserRound, X } from "lucide-react";
import DataPermissions from "./DataPermissions";
import { LEGAL_EFFECTIVE_DATE, LEGAL_VERSION, PRIVACY_INTRO, PRIVACY_SECTIONS, TERMS_INTRO, TERMS_SECTIONS, type LegalSection } from "@/content/legal-content";
import { setDisplayPrefs, useDisplayPrefs } from "@/lib/display-prefs";
import { AgreementLine, HealthConsentPanel } from "./HealthConsent";
import { SettingsContext, type OpenSettings, type SettingsView } from "./settings-context";
import "./account-settings.css";

export type { SettingsView } from "./settings-context";
/** Your profile is a page of its own (Community settings → Your profile), so its entry leads there. */
export const PROFILE_PATH = "/community?space=settings&section=profile";
// The health information consent has its own entry, apart from the Privacy Notice and the Terms of Use.
const sections = [
  { id: "profile", label: "Your profile", icon: UserRound },
  { id: "display", label: "Display", icon: Eye },
  { id: "privacy", label: "Privacy Notice", icon: ShieldCheck },
  { id: "terms", label: "Terms of Use", icon: FileText },
  { id: "health", label: "Health information consent", icon: HeartPulse },
  { id: "data", label: "Data and permissions", icon: SlidersHorizontal },
] as const;

/** Display: larger text and stronger contrast, which used to be buttons in the top bar. */
function DisplaySettings() {
  const { largeText, strongContrast } = useDisplayPrefs();
  const row = (label: string, note: string, on: boolean, change: (on: boolean) => void) => (
    <div className="settings-display-row">
      <span><b>{label}</b><span>{note}</span></span>
      <button type="button" role="switch" aria-checked={on} aria-label={label} className="settings-display-switch" onClick={() => change(!on)}><span /></button>
    </div>
  );
  return (
    <div className="settings-display">
      {row("Larger text", "Makes the words on every page bigger.", largeText, on => setDisplayPrefs({ largeText: on }))}
      {row("Stronger contrast", "Darker text and lines, for easier reading.", strongContrast, on => setDisplayPrefs({ strongContrast: on }))}
    </div>
  );
}

export function useSettings() {
  const openSettings = useContext(SettingsContext);
  if (!openSettings) throw new Error("Settings must be used inside SettingsProvider");
  return openSettings;
}

/** For pages that can also render on their own (in tests): null outside SettingsProvider. */
export function useOptionalSettings(): OpenSettings | null {
  return useContext(SettingsContext);
}

export function SettingsButton({ mobile = false }: { mobile?: boolean }) {
  const openSettings = useSettings();
  return (
    <button className={`settings-launcher ${mobile ? "settings-launcher-mobile" : "settings-launcher-sidebar"}`} aria-label="Open settings" aria-haspopup="dialog" title="Settings" onClick={event => openSettings(event.currentTarget)}>
      <Settings size={21} aria-hidden="true" />
      {!mobile && <><span>Settings</span><ChevronRight size={16} aria-hidden="true" /></>}
    </button>
  );
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<SettingsView>("profile");
  const [focus, setFocus] = useState<string | undefined>();
  const opener = useRef<HTMLElement | null>(null);
  const [, navigate] = useLocation();
  const title = sections.find(section => section.id === view)!.label;

  const openSettings: OpenSettings = (source, nextView = "display", nextFocus) => {
    opener.current = source;
    if (nextView === "profile") { navigate(`~${PROFILE_PATH}`); return; }
    setView(nextView);
    setFocus(nextFocus);
    setOpen(true);
  };
  const show = (next: SettingsView, nextFocus?: string) => {
    if (next === "profile") { setOpen(false); navigate(`~${PROFILE_PATH}`); return; }
    setView(next); setFocus(nextFocus);
  };

  return (
    <SettingsContext.Provider value={openSettings}>
      {children}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="account-settings-backdrop" />
          <Dialog.Content className="account-settings-dialog" aria-describedby={undefined} onCloseAutoFocus={event => { event.preventDefault(); opener.current?.focus(); }}>
            <header className="account-settings-header">
              <span className="account-settings-mark"><Settings size={22} aria-hidden="true" /></span>
              <Dialog.Title>Settings</Dialog.Title>
              <Dialog.Close className="account-settings-close" aria-label="Close settings"><X size={21} /></Dialog.Close>
            </header>
            <div className="account-settings-layout">
              <nav className="account-settings-nav" aria-label="Settings sections">
                {sections.map(({ id, label, icon: Icon }) => (
                  <button key={id} aria-pressed={view === id} aria-controls="account-settings-panel" onClick={() => show(id)}>
                    <Icon size={19} aria-hidden="true" /><span>{label}</span><ChevronRight size={15} aria-hidden="true" />
                  </button>
                ))}
              </nav>
              <section key={view} id="account-settings-panel" className="account-settings-panel" aria-labelledby="account-settings-panel-title" tabIndex={0}>
                <h2 id="account-settings-panel-title">{title}</h2>
                {view === "display" ? <DisplaySettings /> : view === "privacy" ? (
                  <><AgreementLine document="privacy" /><SettingsDocument intro={PRIVACY_INTRO} sections={PRIVACY_SECTIONS} focus={focus} /></>
                ) : view === "terms" ? (
                  <><AgreementLine document="terms" /><SettingsDocument intro={TERMS_INTRO} sections={TERMS_SECTIONS} focus={focus} /></>
                ) : view === "health" ? (
                  <HealthConsentPanel onReadPrivacy={() => show("privacy", "4.")} />
                ) : (
                  <DataPermissions onOpenDocument={(which, focus) => show(which, focus)} onClose={() => setOpen(false)} />
                )}
              </section>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </SettingsContext.Provider>
  );
}

function SettingsDocument({ intro, sections, focus }: { intro: string; sections: LegalSection[]; focus?: string }) {
  const headings = useRef<(HTMLHeadingElement | null)[]>([]);
  // Opened at a section ("How we use your information" is section 4 of the Privacy Notice).
  useEffect(() => {
    if (!focus) return;
    const heading = headings.current[sections.findIndex(section => section.title.startsWith(focus))];
    heading?.scrollIntoView({ block: "start" });
    heading?.focus({ preventScroll: true });
  }, [focus, sections]);
  return (
    <article className="settings-document">
      <p className="settings-document-version">{`Version ${LEGAL_VERSION} · Effective date: ${LEGAL_EFFECTIVE_DATE} · Rehyn Ltd, company number 17417716 · info@rehyn.com`}</p>
      <p className="settings-document-intro">{intro}</p>
      <label className="settings-section-jump">Jump to a section
        <select defaultValue="" onChange={event => {
          const heading = headings.current[Number(event.currentTarget.value)];
          heading?.scrollIntoView({ block: "start" });
          heading?.focus({ preventScroll: true });
        }}>
          <option value="" disabled>Choose a section</option>
          {sections.map((section, index) => <option key={section.title} value={index}>{section.title}</option>)}
        </select>
      </label>
      {sections.map((section, index) => (
        <section className="settings-document-section" key={section.title}>
          <h3 tabIndex={-1} ref={element => { headings.current[index] = element; }}>{section.title}</h3>
          {section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
          {section.bullets && <ul>{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}
          {section.after?.map((paragraph, paragraphIndex) => <p key={`after-${paragraphIndex}`}>{paragraph}</p>)}
        </section>
      ))}
    </article>
  );
}
