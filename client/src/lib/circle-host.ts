// Host standing: who can create a Sunday circle event. It is checked every time someone presses
// "Create an event", so it is worked out afresh from what they have done:
//   1. a member for 14 days or more;
//   2. stayed in 3 circles or more (anyone's, at least 10 minutes each);
//   3. active in the last 7 days (a post, a reply, a lounge chat or a circle). A quiet host loses
//      this and gets it back by being active again;
//   4. no upheld safety reports in the last 90 days. Being voted out of a circle counts here.
// New hosts can make up to 3 events a week, 20 seats each, until 5 of their circles have gone well.

const DAY = 86_400_000;
export const HOST_RULES = { memberDays: 14, circles: 3, circleMinutes: 10, activeDays: 7, reportDays: 90, newHostEvents: 3, newHostSeats: 20, wellAttended: 5 } as const;

export type HostStanding = {
  /** When they joined My community. */
  memberSince: number;
  /** How long they stayed in each circle they joined, in minutes. */
  circleMinutes: number[];
  /** Their last post, reply, lounge chat or circle, and what it was ("posted"). */
  lastActive: { at: number; what: string } | null;
  /** When safety reports against them were upheld, and when they were voted out of a circle. */
  upheld: number[];
  votedOut: number[];
  /** How many circles they have hosted that went well (people came and stayed). */
  wellAttended: number;
};

export type HostCheckId = "member" | "circles" | "active" | "reports";
export type HostCheck = { id: HostCheckId; met: boolean; have: number; need: number };

export type HostEligibility = {
  eligible: boolean;
  checks: HostCheck[];
  met: number;
  /** When the 14 days are up, while they aren't yet. */
  memberFrom: number | null;
};

const daysBetween = (from: number, to: number) => Math.floor((to - from) / DAY);

export function hostEligibility(standing: HostStanding, now: number): HostEligibility {
  const days = Math.max(0, daysBetween(standing.memberSince, now));
  const stayed = standing.circleMinutes.filter(minutes => minutes >= HOST_RULES.circleMinutes).length;
  const activeAgo = standing.lastActive ? daysBetween(standing.lastActive.at, now) : Infinity;
  const recent = [...standing.upheld, ...standing.votedOut].filter(at => at <= now && now - at < HOST_RULES.reportDays * DAY).length;
  const checks: HostCheck[] = [
    { id: "member", met: days >= HOST_RULES.memberDays, have: days, need: HOST_RULES.memberDays },
    { id: "circles", met: stayed >= HOST_RULES.circles, have: stayed, need: HOST_RULES.circles },
    { id: "active", met: activeAgo < HOST_RULES.activeDays, have: activeAgo < HOST_RULES.activeDays ? 1 : 0, need: 1 },
    { id: "reports", met: recent === 0, have: recent, need: 0 },
  ];
  const met = checks.filter(check => check.met).length;
  return { eligible: met === checks.length, checks, met, memberFrom: days >= HOST_RULES.memberDays ? null : standing.memberSince + HOST_RULES.memberDays * DAY };
}

/** Two upheld votes in 90 days pause someone's seat in member circles (and their hosting) for a week. */
export function memberSeatsPausedUntil(standing: HostStanding, now: number): number | null {
  const recent = standing.votedOut.filter(at => at <= now && now - at < HOST_RULES.reportDays * DAY).sort((a, b) => a - b);
  if (recent.length < 2) return null;
  const until = recent[recent.length - 1] + 7 * DAY;
  return until > now ? until : null;
}

/** How much a host can do: new hosts have limits, which lift after 5 circles that went well. */
export function hostLimits(standing: Pick<HostStanding, "wellAttended">): { eventsPerWeek: number | null; seats: number } {
  return standing.wellAttended >= HOST_RULES.wellAttended ? { eventsPerWeek: null, seats: 40 } : { eventsPerWeek: HOST_RULES.newHostEvents, seats: HOST_RULES.newHostSeats };
}

/** Monday 00:00 of the week a time falls in, on this device. */
export function weekStart(at: number): number {
  const date = new Date(at);
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() - ((date.getDay() + 6) % 7));
  return date.getTime();
}

/** How many of the events a host runs start in the same week (Monday to Sunday) as `at`. */
export function eventsInWeek(starts: number[], at: number): number {
  const from = weekStart(at);
  const to = from + 7 * DAY;
  return starts.filter(start => start >= from && start < to).length;
}

/** Whether a host has room for one more event in the week of `at`. */
export function hasRoomInWeek(standing: Pick<HostStanding, "wellAttended">, starts: number[], at: number): boolean {
  const { eventsPerWeek } = hostLimits(standing);
  return eventsPerWeek === null || eventsInWeek(starts, at) < eventsPerWeek;
}
