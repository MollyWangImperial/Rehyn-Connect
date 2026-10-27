import { Link } from "wouter";
import { CalendarCheck, Search, Stethoscope, Users } from "lucide-react";
import { useRole } from "@/lib/clinician-portal";
import { isOpen, useConsultations } from "@/lib/consultations";

// The Clinicians tab's own pages, as a row of tabs under the heading (design canvas "Rehyn Clinicians Tab", layout C):
// finding a clinician first, then the person's consultations and the weekly group sessions, each a page of its own.
// The clinician portal sits quietly at the end of the row.

export type ClinicianPage = "find" | "consultations" | "sessions";

export default function ClinicianTabs({ active }: { active: ClinicianPage }) {
  const open = useConsultations().filter(isOpen).length;
  const role = useRole();
  const tab = (page: ClinicianPage) => ({ className: "cl-tab", "aria-current": page === active ? ("page" as const) : undefined });
  return (
    <div className="cl-tabs-row">
      <nav className="cl-tabs" aria-label="Clinicians pages">
        <Link href="/" {...tab("find")}><Search size={18} aria-hidden="true" />Find a clinician</Link>
        <Link href="/consultations" {...tab("consultations")}><CalendarCheck size={18} aria-hidden="true" />My consultations{open > 0 && <span className="cl-tab-count">{open}<span className="cl-sr"> open</span></span>}</Link>
        <Link href="/sessions" {...tab("sessions")}><Users size={18} aria-hidden="true" />Weekly group sessions</Link>
      </nav>
      <Link href="/portal" className="cl-tabs-aside"><Stethoscope size={16} aria-hidden="true" />{role === "clinician" ? "My clinician portal" : "Are you a clinician?"}</Link>
    </div>
  );
}
