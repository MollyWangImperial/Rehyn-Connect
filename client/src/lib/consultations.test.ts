import { describe, expect, it } from "vitest";
import { URGENT_FEE, findClinician } from "@/content/clinicians";
import {
  URGENT_WAIT_MS, accept, answer, cancel, confirmUrgent, decline, escalate, finish, nextChoice, request, startUrgent, transcriptText, urgentChoices, waitedTooLong,
} from "./consultations";

const amara = findClinician("amara-osei")!;
const NOW = new Date(2026, 9, 26, 9).getTime();
const HOUR = 3_600_000;

describe("a consultation that isn't urgent", () => {
  it("is sent with the patient's times and questions and the payment held, then taken only when the clinician finishes", () => {
    const sent = request(amara, [NOW + 5 * HOUR, NOW + 2 * HOUR, NOW + 2 * HOUR], "  Why am I so tired?  ", NOW);
    expect(sent).toMatchObject({ status: "requested", payment: "held", clinicianId: "amara-osei", price: 85, questions: "Why am I so tired?", urgent: false });
    expect(sent.times).toEqual([NOW + 2 * HOUR, NOW + 5 * HOUR]);
    expect(sent.ref).toMatch(/^[A-Z0-9]{6}$/);
    expect(sent.room).toMatch(/^[a-z0-9]{20}$/);
    // The clinician can only choose one of the patient's times.
    expect(accept(sent, NOW + 3 * HOUR)).toBe(sent);
    const booked = accept(sent, NOW + 5 * HOUR, NOW + 1);
    expect(booked).toMatchObject({ status: "scheduled", at: NOW + 5 * HOUR, payment: "held" });
    const lines = [{ at: NOW + 5 * HOUR, who: "patient" as const, name: "Patient", text: "Hello" }];
    const done = finish(booked, lines, NOW + 6 * HOUR);
    expect(done).toMatchObject({ status: "done", payment: "paid", transcript: lines });
    expect(done.steps.map(step => step.what)).toEqual(["Request sent to Dr Amara Osei", "£85 held on your card", "Time confirmed", "Consultation finished", "£85 paid"]);
    expect(transcriptText(lines)).toMatch(/^\[\d\d:\d\d\] Patient: Hello$/);
  });

  it("releases the hold if the clinician declines or the patient cancels", () => {
    const sent = request(amara, [NOW + 2 * HOUR], "", NOW);
    expect(decline(sent)).toMatchObject({ status: "declined", payment: "released" });
    expect(cancel(accept(sent, NOW + 2 * HOUR))).toMatchObject({ status: "cancelled", payment: "released" });
    // A finished consultation can't be cancelled.
    const done = finish(accept(sent, NOW + 2 * HOUR), []);
    expect(cancel(done)).toBe(done);
  });
});

describe("an urgent consultation", () => {
  it("alerts clinicians, matches the first to answer, lets the patient move on, and holds the payment only once chosen", () => {
    const now = new Date(NOW);
    const alerted = startUrgent("High readings", NOW);
    expect(alerted).toMatchObject({ status: "matching", payment: "none", clinicianId: null, urgent: true });
    const first = answer(alerted, "ruth-calloway", NOW + 60_000);
    // An urgent consultation costs the clinician's price plus the urgent fee: Ruth's £50 + £20.
    expect(first).toMatchObject({ status: "matched", clinicianId: "ruth-calloway", price: 50 + URGENT_FEE, payment: "none" });
    // A second answer doesn't take the match from the first.
    const second = answer(first, "hannah-brooks");
    expect(second.clinicianId).toBe("ruth-calloway");
    expect(second.answered).toEqual(["ruth-calloway", "hannah-brooks"]);
    // Moving on goes through those who answered first, then everyone free in the next 48 hours.
    const choices = urgentChoices(second, now);
    expect(choices.slice(0, 2).map(clinician => clinician.id)).toEqual(["ruth-calloway", "hannah-brooks"]);
    const moved = nextChoice(second, now);
    expect(moved.clinicianId).toBe("hannah-brooks");
    expect(moved.price).toBe(findClinician("hannah-brooks")!.price + URGENT_FEE);
    let around = moved;
    for (let index = 1; index < choices.length; index++) around = nextChoice(around, now);
    expect(around.clinicianId).toBe("ruth-calloway");
    const chosen = confirmUrgent(moved, NOW + 120_000);
    expect(chosen).toMatchObject({ status: "scheduled", payment: "held", at: NOW + 120_000, clinicianId: "hannah-brooks", price: moved.price });
    expect(finish(chosen, [])).toMatchObject({ status: "done", payment: "paid" });
  });

  it("tells the Rehyn team after five minutes with no answer, and a clinician can still answer after", () => {
    const alerted = startUrgent("", NOW);
    expect(waitedTooLong(alerted, NOW + URGENT_WAIT_MS - 1)).toBe(false);
    expect(waitedTooLong(alerted, NOW + URGENT_WAIT_MS)).toBe(true);
    const told = escalate(alerted, NOW + URGENT_WAIT_MS);
    expect(told).toMatchObject({ status: "escalated", escalatedAt: NOW + URGENT_WAIT_MS });
    expect(waitedTooLong(told, NOW + 2 * URGENT_WAIT_MS)).toBe(false);
    expect(answer(told, "ruth-calloway")).toMatchObject({ status: "matched", clinicianId: "ruth-calloway" });
    // Once matched, it isn't escalated.
    expect(escalate(answer(alerted, "ruth-calloway"))).toMatchObject({ status: "matched" });
  });
});
