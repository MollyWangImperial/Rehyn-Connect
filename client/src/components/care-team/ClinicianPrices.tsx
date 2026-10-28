import { PRICE_MAX, PRICE_MIN, clinicianShare, findClinician, poundsText, professionalTitle } from "@/content/clinicians";
import { approvePriceRequest, declinePriceRequest, useClinicians, usePriceRequests } from "@/lib/clinician-portal";
import { Empty, ago } from "./parts";

// Clinician prices, on the care team's pages: clinicians ask to change their consultation price in the clinician portal,
// and the administrator approves or declines each request here. Nothing changes for patients until it is approved.

export default function ClinicianPrices() {
  useClinicians();
  const requests = usePriceRequests();
  const waiting = requests.filter(item => item.status === "waiting").sort((a, b) => a.at - b.at);
  const decided = requests.filter(item => item.status !== "waiting").sort((a, b) => (b.decidedAt ?? 0) - (a.decidedAt ?? 0)).slice(0, 8);
  return (
    <>
      <div className="ct-heading">
        <h1 tabIndex={-1} data-ct-heading>Clinician prices</h1>
        <p>Requests from clinicians to change their price for a 30-minute consultation. A new price reaches patients only once you approve it. Suggested range: £{PRICE_MIN} to £{PRICE_MAX}.</p>
      </div>
      <section className="ct-card ct-rail-card" aria-label="Waiting for approval">
        <h2 className="ct-card-title">Waiting for approval</h2>
        {waiting.length ? (
          <ul className="ct-rows ct-price-rows">
            {waiting.map(item => {
              const clinician = findClinician(item.clinicianId);
              const outside = item.to < PRICE_MIN || item.to > PRICE_MAX;
              return (
                <li key={item.clinicianId}>
                  <span className="ct-price-who"><b>{clinician?.name ?? "A clinician"}</b>{clinician ? ` · ${professionalTitle(clinician)}` : ""}</span>
                  <span className="ct-price-change">{poundsText(item.from)} → <b>{poundsText(item.to)}</b>{outside ? <span className="is-rust"> · outside the suggested range</span> : null}<span className="ct-soft"> · they would receive {poundsText(clinicianShare(item.to))}</span></span>
                  {item.reason && <span className="ct-price-reason">“{item.reason}”</span>}
                  <span className="ct-soft">{ago(item.at)}</span>
                  <span className="ct-price-actions">
                    <button type="button" className="ct-btn ct-btn-dark ct-btn-small" onClick={() => approvePriceRequest(item.clinicianId)}>Approve</button>
                    <button type="button" className="ct-btn ct-btn-plain ct-btn-small" onClick={() => declinePriceRequest(item.clinicianId)}>Decline</button>
                  </span>
                </li>
              );
            })}
          </ul>
        ) : <Empty>No price changes are waiting.</Empty>}
      </section>
      {decided.length > 0 && (
        <section className="ct-card ct-rail-card" aria-label="Decided">
          <h2 className="ct-card-title">Decided</h2>
          <ul className="ct-rows ct-rows-text">
            {decided.map(item => (
              <li key={item.clinicianId}>
                <span>{findClinician(item.clinicianId)?.name ?? "A clinician"}: {poundsText(item.from)} → {poundsText(item.to)}, {item.status}</span>
                <span className="ct-soft">{item.decidedAt ? ago(item.decidedAt) : ""}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
