import { useEffect, useId, useRef } from "react";
import { useLocal } from "@/lib/library-local";

// "My stroke passport": one page a reader fills in and prints, to hand to a new doctor, nurse or
// therapist. It stays in this browser; nothing is sent anywhere. Opened from the Ischaemic stroke
// page's trusted sources.

type Passport = Record<string, string>;
const FIELDS: { key: string; label: string; long?: boolean; type?: string }[] = [
  { key: "name", label: "My name" },
  { key: "date", label: "Date of my stroke", type: "date" },
  { key: "type", label: "Type of stroke, if I know it" },
  { key: "effects", label: "What the stroke affected", long: true },
  { key: "talk", label: "How best to talk with me", long: true },
  { key: "medicines", label: "My medicines", long: true },
  { key: "allergies", label: "Allergies" },
  { key: "bp", label: "My blood pressure target" },
  { key: "team", label: "My stroke team, GP and therapists", long: true },
  { key: "contact", label: "Who to contact" },
  { key: "goals", label: "What I am working towards", long: true },
];

const escape = (text: string) => text.replace(/[&<>"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char] ?? char);

export function StrokePassport({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [passport, setPassport] = useLocal<Passport>("rehyn.library-passport.v1", {});
  const id = useId();
  useEffect(() => {
    const node = dialog.current;
    if (!node) return;
    if (open && !node.open) { if (typeof node.showModal === "function") node.showModal(); else node.setAttribute("open", ""); }
    if (!open && node.open) node.close();
  }, [open]);

  const print = () => {
    const page = window.open("", "_blank", "width=820,height=900");
    if (!page) return;
    const rows = FIELDS.map(field => {
      const value = field.type === "date" && passport[field.key] ? new Date(`${passport[field.key]}T12:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : passport[field.key] ?? "";
      return `<tr><th>${escape(field.label)}</th><td>${escape(value).replace(/\n/g, "<br>") || "&nbsp;"}</td></tr>`;
    }).join("");
    page.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>My stroke passport</title><style>body{font:15px/1.5 system-ui,sans-serif;margin:36px;color:#24362F}h1{font:600 28px Georgia,serif;margin:0 0 4px}p{color:#4C6157}table{border-collapse:collapse;width:100%;margin-top:16px}th,td{border:1px solid #CFD8D0;padding:10px;text-align:left;vertical-align:top}th{width:34%;background:#F1F7F2}</style></head><body><h1>My stroke passport</h1><p>Please read this before we talk. It tells you about my stroke and what helps me.</p><table>${rows}</table></body></html>`);
    page.document.close();
    page.focus();
    page.print();
  };

  return <dialog ref={dialog} className="lib-passport" aria-labelledby={`${id}-title`} onClose={onClose} onCancel={onClose}>
    <div className="lib-passport-head">
      <h2 id={`${id}-title`} className="lib-h2">My stroke passport</h2>
      <p>One page to hand to a new doctor, nurse or therapist. Fill in what you know, then print it. It stays on this device.</p>
    </div>
    <form className="lib-passport-form" onSubmit={event => { event.preventDefault(); print(); }}>
      {FIELDS.map(field => <label key={field.key} className={`lib-field${field.long ? " is-wide" : ""}`} htmlFor={`${id}-${field.key}`}>
        <span>{field.label}</span>
        {field.long
          ? <textarea id={`${id}-${field.key}`} rows={2} maxLength={400} value={passport[field.key] ?? ""} onChange={event => setPassport(previous => ({ ...previous, [field.key]: event.target.value }))} />
          : <input id={`${id}-${field.key}`} type={field.type ?? "text"} maxLength={120} autoComplete="off" value={passport[field.key] ?? ""} onChange={event => setPassport(previous => ({ ...previous, [field.key]: event.target.value }))} />}
      </label>)}
      <div className="lib-step-row is-wide">
        <button type="submit" className="lib-solid">Print my passport</button>
        <button type="button" className="lib-ghost" onClick={onClose}>Close</button>
      </div>
    </form>
  </dialog>;
}
