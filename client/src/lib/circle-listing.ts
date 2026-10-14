import type { PersonId } from "@/content/community-samples";
import { canSeeGathering, hostedBy, type Gathering } from "./circle-gatherings";
import type { CircleEventsMemory, EventAnswer } from "./circle-events-store";

// The events as the person sees them: the examples, with what they have created or changed on this
// device laid over them, and where each one stands for them (hosting, invited, going, past).

/** The examples, with the person's own changes and new events. Friends they invited later are added. */
export function mergeGatherings(samples: readonly Gathering[], memory: CircleEventsMemory): Gathering[] {
  const mine = new Map(memory.created.map(event => [event.id, event]));
  const merged = samples.map(event => mine.get(event.id) ?? event);
  memory.created.forEach(event => { if (!samples.some(sample => sample.id === event.id)) merged.push(event); });
  return merged.map(event => {
    const more = memory.extraInvites[event.id];
    return more?.length ? { ...event, invited: [...event.invited, ...more.filter(who => !event.invited.includes(who))] } : event;
  });
}

/** Where an event stands for the person: their answer, an invitation waiting for one, or nothing. */
export type Standing = EventAnswer | "invited" | "hosting" | null;
export function standingFor(event: Gathering, memory: CircleEventsMemory, goingAtStart: readonly string[]): Standing {
  if (hostedBy(event, "you")) return "hosting";
  const answer = memory.answers[event.id];
  if (answer) return answer;
  if (goingAtStart.includes(event.id)) return "going";
  if (event.access === "friends" && event.invited.includes("you")) return "invited";
  return null;
}

/** How many are going, the person included once they have said yes. */
export function goingCount(event: Gathering, standing: Standing, goingAtStart: readonly string[]): number {
  return event.going + (standing === "going" && !goingAtStart.includes(event.id) ? 1 : 0);
}

export type MyEvents = { hosting: Gathering[]; waiting: Gathering[]; going: Gathering[]; past: Gathering[] };

/** My events: what the person hosts, invitations waiting for them, what they're going to, and what has been. */
export function myEvents(events: readonly Gathering[], memory: CircleEventsMemory, goingAtStart: readonly string[], now: number, hidden: readonly PersonId[] = []): MyEvents {
  const sorted = events.filter(event => canSeeGathering(event, "you", hidden)).sort((a, b) => a.start - b.start);
  const over = (event: Gathering) => event.start + event.minutes * 60_000 <= now;
  const result: MyEvents = { hosting: [], waiting: [], going: [], past: [] };
  for (const event of sorted) {
    const standing = standingFor(event, memory, goingAtStart);
    if (standing === "hosting") { if (!over(event)) result.hosting.push(event); continue; }
    if (over(event)) { if (standing === "going") result.past.push(event); continue; }
    if (standing === "invited") result.waiting.push(event);
    else if (standing === "going" || standing === "asked") result.going.push(event);
  }
  result.past.reverse();
  return result;
}

/** Whether an event is on right now. */
export const isLive = (event: Gathering, now: number) => event.start <= now && now < event.start + event.minutes * 60_000;
