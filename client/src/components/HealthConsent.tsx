import { useId, useState } from "react";
import { Check } from "lucide-react";
import { agreedOn, agreedTo, consentStore, HEALTH_CONSENT_TEXT, useConsents } from "@/lib/consent";
import "./consent.css";

/**
 * Settings → Health information consent: its own place, apart from the Privacy Notice and the Terms of
 * Use. It shows the consent word for word and whether it was given, and withdraws it or gives it again.
 * Without it the member is asked again before Rehyn: Connect opens (see Join).
 */
export function HealthConsentPanel({ onReadPrivacy }: { onReadPrivacy: () => void }) {
  const consents = useConsents();
  const agreed = agreedTo(consents).health;
  const [confirming, setConfirming] = useState(false);
  const [ticked, setTicked] = useState(false);
  const checkId = useId();

  return (
    <div className="consent-panel">
      <p className="consent-panel-intro">This consent is separate from the Privacy Notice and the Terms of Use.</p>
      <blockquote className="consent-quote">{HEALTH_CONSENT_TEXT}</blockquote>
      <button type="button" className="consent-link" onClick={onReadPrivacy}>How we use your information</button>
      {agreed ? (
        <div className="consent-state-block">
          <p className="consent-state is-on" role="status"><Check size={16} aria-hidden="true" />{`You agreed on ${agreedOn(consents.health!.at)}.`}</p>
          {confirming ? (
            <div className="consent-confirm" role="group" aria-label="Withdraw your health information consent?">
              <p>If you withdraw, you'll be asked again before you can use Rehyn: Connect, because sharing in the community depends on this consent.</p>
              <div className="consent-actions">
                <button type="button" className="consent-button is-danger" onClick={() => { consentStore.withdrawHealth(); setConfirming(false); setTicked(false); }}>Yes, withdraw my consent</button>
                <button type="button" className="consent-button is-quiet" onClick={() => setConfirming(false)}>Keep my consent</button>
              </div>
            </div>
          ) : (
            <button type="button" className="consent-button is-outline" onClick={() => setConfirming(true)}>Withdraw my consent</button>
          )}
        </div>
      ) : (
        <div className="consent-state-block">
          <p className="consent-state is-off" role="status">{consents.healthWithdrawnAt ? `You withdrew this on ${agreedOn(consents.healthWithdrawnAt)}.` : "You haven't given this consent."}</p>
          <label className="consent-check" htmlFor={checkId}>
            <input id={checkId} type="checkbox" checked={ticked} onChange={event => setTicked(event.target.checked)} />
            <span>I agree to the health information consent above.</span>
          </label>
          <button type="button" className="consent-button" aria-disabled={!ticked} onClick={() => { if (ticked) consentStore.giveHealth(); }}>Give my consent</button>
        </div>
      )}
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
