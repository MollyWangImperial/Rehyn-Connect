import { HOST_RULES, type HostCheck, type HostStanding } from "@/lib/circle-host";

// The words for each host-standing check, short (My events) and long (the "not quite yet" page).

const DAY = 86_400_000;
const dayName = (at: number) => new Date(at).toLocaleDateString("en-GB", { weekday: "long" });
const daysAgo = (at: number, now: number) => Math.floor((now - at) / DAY);

/** "yesterday", "on Monday", "today". */
function whenActive(at: number, now: number): string {
  const days = Math.round((new Date(now).setHours(0, 0, 0, 0) - new Date(at).setHours(0, 0, 0, 0)) / DAY);
  return days <= 0 ? "today" : days === 1 ? "yesterday" : `on ${dayName(at)}`;
}

export function checkText(check: HostCheck, standing: HostStanding, now: number): { title: string; short: string; value: string; help: string } {
  switch (check.id) {
    case "member": {
      const opens = standing.memberSince + HOST_RULES.memberDays * DAY;
      return {
        title: check.met ? "Member for 14 days or more" : "Been a member for 14 days", short: `${check.have} days`,
        value: check.met ? `${check.have} days` : `${check.have} of ${check.need} days`,
        help: check.met ? "" : `Nothing to do here, it just takes time. Opens on ${new Date(opens).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}.`,
      };
    }
    case "circles":
      return {
        title: "Stayed for 3 circles", short: `${check.have} so far`, value: check.met ? `${check.have} so far` : `${check.have} of ${check.need}`,
        help: "Any circle counts, Alira's or a member's, as long as you stay at least 10 minutes.",
      };
    case "active": {
      const last = standing.lastActive;
      const when = last && daysAgo(last.at, now) < HOST_RULES.activeDays ? `${last.what} ${whenActive(last.at, now)}` : "";
      return {
        title: "Active this week", short: when || "not this week", value: check.met ? `Yes · you ${when}` : "Not this week",
        help: "A post, a reply, a lounge chat or a circle in the last 7 days. This one is checked again every time you create an event, so a quiet host loses it and gets it back.",
      };
    }
    case "reports":
      return {
        title: "No upheld reports", short: "last 90 days", value: check.met ? "Clear" : "Not for now",
        help: "Nothing reported against you that the safety team agreed with, in the last 90 days. Being voted out of a circle also counts here.",
      };
  }
}
