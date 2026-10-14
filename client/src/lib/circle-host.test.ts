import { describe, expect, it } from "vitest";
import { eventsInWeek, hasRoomInWeek, hostEligibility, hostLimits, memberSeatsPausedUntil, weekStart, type HostStanding } from "./circle-host";

const DAY = 86_400_000;
const NOW = new Date(2026, 9, 14, 12, 0).getTime();
const settled: HostStanding = { memberSince: NOW - 41 * DAY, circleMinutes: [60, 45, 30, 22, 60, 15, 40], lastActive: { at: NOW - 2 * DAY, what: "posted" }, upheld: [], votedOut: [], wellAttended: 1 };

describe("who can host a Sunday circle event", () => {
  it("a settled member meets all four", () => {
    const result = hostEligibility(settled, NOW);
    expect(result.eligible).toBe(true);
    expect(result.met).toBe(4);
    expect(result.memberFrom).toBeNull();
  });

  it("needs 14 days as a member, and says when that comes", () => {
    const result = hostEligibility({ ...settled, memberSince: NOW - 3 * DAY }, NOW);
    expect(result.eligible).toBe(false);
    expect(result.checks[0]).toEqual({ id: "member", met: false, have: 3, need: 14 });
    expect(result.memberFrom).toBe(NOW + 11 * DAY);
  });

  it("counts only circles stayed in for 10 minutes or more", () => {
    const result = hostEligibility({ ...settled, circleMinutes: [12, 9, 4, 30] }, NOW);
    expect(result.checks[1]).toEqual({ id: "circles", met: false, have: 2, need: 3 });
  });

  it("is lost after a quiet week, and comes back with activity", () => {
    expect(hostEligibility({ ...settled, lastActive: { at: NOW - 8 * DAY, what: "posted" } }, NOW).checks[2].met).toBe(false);
    expect(hostEligibility({ ...settled, lastActive: null }, NOW).eligible).toBe(false);
    expect(hostEligibility({ ...settled, lastActive: { at: NOW - DAY, what: "replied" } }, NOW).checks[2].met).toBe(true);
  });

  it("is lost for 90 days after an upheld report or being voted out", () => {
    expect(hostEligibility({ ...settled, upheld: [NOW - 30 * DAY] }, NOW).eligible).toBe(false);
    expect(hostEligibility({ ...settled, votedOut: [NOW - 89 * DAY] }, NOW).eligible).toBe(false);
    expect(hostEligibility({ ...settled, votedOut: [NOW - 91 * DAY] }, NOW).eligible).toBe(true);
  });

  it("pauses member-circle seats for a week after two upheld votes in 90 days", () => {
    expect(memberSeatsPausedUntil({ ...settled, votedOut: [NOW - 40 * DAY] }, NOW)).toBeNull();
    expect(memberSeatsPausedUntil({ ...settled, votedOut: [NOW - 40 * DAY, NOW - 2 * DAY] }, NOW)).toBe(NOW + 5 * DAY);
    expect(memberSeatsPausedUntil({ ...settled, votedOut: [NOW - 40 * DAY, NOW - 8 * DAY] }, NOW)).toBeNull();
  });

  it("new hosts get 3 events a week and 20 seats; the limits lift after 5 good circles", () => {
    expect(hostLimits({ wellAttended: 4 })).toEqual({ eventsPerWeek: 3, seats: 20 });
    expect(hostLimits({ wellAttended: 5 })).toEqual({ eventsPerWeek: null, seats: 40 });
  });

  it("counts a host's events by the week they fall in, Monday to Sunday", () => {
    const monday = weekStart(NOW);
    expect(new Date(monday).getDay()).toBe(1);
    const starts = [monday + DAY, monday + 2 * DAY, monday + 6 * DAY, monday + 7 * DAY];
    expect(eventsInWeek(starts, NOW)).toBe(3);
    expect(hasRoomInWeek({ wellAttended: 0 }, starts, NOW)).toBe(false);
    expect(hasRoomInWeek({ wellAttended: 0 }, starts, monday + 8 * DAY)).toBe(true);
    expect(hasRoomInWeek({ wellAttended: 6 }, starts, NOW)).toBe(true);
  });
});
