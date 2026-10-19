import { useId, useState, type FormEvent } from "react";
import CommunityDialog from "@/components/community/dialog";
import "@/pages/community.css";

// The Feedback button at the bottom left of a condition page. It opens a short form; the message goes
// to /api/feedback (server/feedback.ts), and "Thank you" shows only once the server has it.

type Sending = "idle" | "sending" | "sent" | "failed";

export function FeedbackButton() {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" className="lib-feedback-button" aria-haspopup="dialog" onClick={() => setOpen(true)}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z" /></svg>
      Feedback
    </button>
    {open && <div className="cm-layer"><FeedbackForm onClose={() => setOpen(false)} /></div>}
  </>;
}

function FeedbackForm({ onClose }: { onClose: () => void }) {
  const titleId = useId();
  const fieldId = useId();
  const hintId = useId();
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState<Sending>("idle");
  const [error, setError] = useState("");

  const send = async (event: FormEvent) => {
    event.preventDefault();
    if (!message.trim() || sending === "sending") return;
    setSending("sending");
    setError("");
    const notSent = "Your feedback didn't send. Please check your connection and try again.";
    try {
      const response = await fetch("/api/feedback", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: message.trim(), page: window.location.pathname }) });
      if (response.ok) { setSending("sent"); return; }
      // The server's own words when it gives them (too long, too many); otherwise the plain line.
      const body = await response.json().catch(() => null) as { error?: string } | null;
      setSending("failed");
      setError(body?.error ?? notSent);
    } catch {
      setSending("failed");
      setError(notSent);
    }
  };

  return <CommunityDialog kind="sheet" labelledBy={titleId} onClose={onClose} className="lib-feedback">
    <div className="cm-dialog-head">
      <div className="cm-dialog-titles">
        <h2 id={titleId} className="cm-dialog-title cm-dialog-title-small">Feedback</h2>
        <p>Tell us what's working, what's missing or what's wrong on this page.</p>
      </div>
      <button type="button" className="cm-dialog-close" onClick={onClose} aria-label="Close feedback">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18" /></svg>
      </button>
    </div>
    {sending === "sent"
      ? <div className="lib-feedback-done" role="status">
          <p><b>Thank you.</b> The Rehyn team has your feedback.</p>
          <button type="button" className="lib-feedback-send" onClick={onClose} data-autofocus>Close</button>
        </div>
      : <form className="lib-feedback-form" onSubmit={send}>
          <label htmlFor={fieldId}>Your feedback</label>
          <textarea id={fieldId} value={message} onChange={event => setMessage(event.target.value)} rows={5} maxLength={2000} aria-describedby={hintId} data-autofocus required />
          <p id={hintId} className="lib-feedback-hint">Please don't include your name, contact details or health information. This isn't monitored for urgent help: if you need medical advice, contact your GP or NHS 111, and call 999 in an emergency.</p>
          {sending === "failed" && <p className="lib-feedback-error" role="alert">{error}</p>}
          <button type="submit" className="lib-feedback-send" disabled={!message.trim() || sending === "sending"}>{sending === "sending" ? "Sending…" : "Send feedback"}</button>
        </form>}
  </CommunityDialog>;
}
