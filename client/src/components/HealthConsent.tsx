import { Check } from "lucide-react";
import { agreedOn, agreedTo, HEALTH_CONSENT_TEXT, useConsents } from "@/lib/consent";
import { HealthConsentBlock } from "./DataPermissions";
import "./consent.css";

/**
 * Settings → Health information consent: its own place, apart from the Privacy Notice and the Terms of
 * Use. It shows the consent word for word and the same switch as the Data and permissions screen, so
 * withdrawing (with its confirmation) and agreeing again are the same wherever they are done.
 */
export function HealthConsentPanel({ onReadPrivacy }: { onReadPrivacy: () => void }) {
  return (
    <div className="consent-panel">
      <p className="consent-panel-intro">This consent is separate from the Privacy Notice and the Terms of Use.</p>
      <blockquote className="consent-quote">{HEALTH_CONSENT_TEXT}</blockquote>
      <button type="button" className="consent-link" onClick={onReadPrivacy}>How we use your information</button>
      <div className="consent-state-block"><HealthConsentBlock compact /></div>
    </div>
  );
}

/** At the top of the Terms of Use and the Privacy Notice in Settings: which version was agreed to, and when. */
export function AgreementLine({ document }: { document: "terms" | "privacy" }) {
  const consents = useConsents();
  const agreement = consents[document];
  if (!agreement || !agreedTo(consents)[document]) return null;
  return <p className="consent-state is-on consent-agreement"><Check size={16} aria-hidden="true" />{`${document === "terms" ? "You agreed to these Terms" : "You read and accepted this notice"} (version ${agreement.version}) on ${agreedOn(agreement.at)}.`}</p>;
}
