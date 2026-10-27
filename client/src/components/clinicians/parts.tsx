import type { CSSProperties, ReactNode } from "react";
import { Download, Phone } from "lucide-react";
import type { Hue } from "@/content/library";
import { transcriptText, type Consultation, type TranscriptLine } from "@/lib/consultations";

/** The section colours, as the two custom properties the styles read. */
export const hueStyle = (hue: Hue) => ({ "--cl-tint": hue.tint, "--cl-ink": hue.ink }) as CSSProperties;

/** Shown wherever urgency comes up: an urgent consultation is not an emergency service. */
export function EmergencyNote() {
  return (
    <p className="cl-emergency" role="note">
      <Phone size={18} aria-hidden="true" />
      <span><strong>A medical emergency? Call 999 now.</strong> That includes chest pain, signs of a stroke, severe bleeding or trouble breathing. Rehyn is not an emergency service.</span>
    </p>
  );
}

/** Said wherever something would be sent or paid for: these are examples for now. */
export function PreviewNote({ children }: { children?: ReactNode }) {
  return <p className="cl-preview">{children ?? "Preview: the clinicians are examples. Requests stay on this device, nothing is charged, and you can answer them yourself in the clinician portal."}</p>;
}

const PAYMENT_TEXT: Record<Consultation["payment"], string> = {
  none: "Not paid yet",
  held: "Held on your card: taken only when the consultation is finished",
  paid: "Paid",
  released: "Hold released: nothing was taken",
};
export const paymentText = (consultation: Consultation) => (consultation.payment === "none" ? PAYMENT_TEXT.none : `£${consultation.price} · ${PAYMENT_TEXT[consultation.payment]}`);

/** What has happened so far, oldest first. */
export function Timeline({ consultation }: { consultation: Consultation }) {
  return (
    <ol className="cl-timeline">
      {consultation.steps.map((item, index) => (
        <li key={`${item.at}-${index}`}><span>{new Date(item.at).toLocaleString("en-GB", { weekday: "short", hour: "2-digit", minute: "2-digit" })}</span>{item.what}</li>
      ))}
    </ol>
  );
}

/** A saved transcript, with a download. */
export function Transcript({ lines, name }: { lines: TranscriptLine[]; name: string }) {
  if (!lines.length) return <p className="cl-small">No transcript was kept for this consultation.</p>;
  const href = `data:text/plain;charset=utf-8,${encodeURIComponent(transcriptText(lines))}`;
  return (
    <details className="cl-transcript">
      <summary>Transcript · {lines.length} {lines.length === 1 ? "line" : "lines"}</summary>
      <ol>{lines.map((line, index) => <li key={`${line.at}-${index}`} className={`is-${line.who}`}><strong>{line.name}</strong> {line.text}</li>)}</ol>
      <a className="cl-link" href={href} download={`${name}.txt`}><Download size={16} aria-hidden="true" />Download the transcript</a>
    </details>
  );
}
