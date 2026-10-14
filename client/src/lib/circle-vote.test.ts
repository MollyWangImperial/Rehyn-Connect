import { describe, expect, it } from "vitest";
import { canAskCircle, castVote, clockLeft, leaveBeforeResult, replyToVote, REPLY_MS, startVote, VOTE_MS, voteOutcome, votePasses, votePhase, voteTally, type VoteCircle } from "./circle-vote";

const T = 1_000_000;
const circle: VoteCircle = { hostedBy: "member", host: "anne", present: ["anne", "tomasz", "david", "rob", "priya", "samuel", "joan", "you"], asked: [] };

describe("asking the circle whether someone should leave", () => {
  it("only the host can ask, about someone else who is here", () => {
    expect(canAskCircle(circle, "anne", "rob")).toEqual({ ok: true });
    expect(canAskCircle(circle, "david", "rob")).toEqual({ ok: false, why: "not-host" });
    expect(canAskCircle(circle, "anne", "anne")).toEqual({ ok: false, why: "self" });
    expect(canAskCircle(circle, "anne", "gary")).toEqual({ ok: false, why: "not-here" });
  });

  it("never in Alira's own circles", () => {
    const alira: VoteCircle = { ...circle, hostedBy: "alira", host: "alira" };
    expect(canAskCircle(alira, "alira", "rob")).toEqual({ ok: false, why: "alira-circle" });
    expect(startVote(alira, "alira", "rob", "talking", T)).toBeNull();
  });

  it("only once per person per circle", () => {
    expect(canAskCircle({ ...circle, asked: ["rob"] }, "anne", "rob")).toEqual({ ok: false, why: "asked-before" });
    expect(startVote({ ...circle, asked: ["rob"] }, "anne", "rob", "talking", T)).toBeNull();
    expect(canAskCircle({ ...circle, asked: ["rob"] }, "anne", "david").ok).toBe(true);
  });

  it("gives the person 30 seconds to reply, then two minutes to vote; they can't vote", () => {
    const vote = startVote(circle, "anne", "rob", "talking", T)!;
    expect(vote.voters).not.toContain("rob");
    expect(vote.voters).toContain("anne");
    expect(votePhase(vote, T)).toBe("reply");
    expect(votePhase(vote, T + REPLY_MS)).toBe("open");
    expect(votePhase(vote, T + REPLY_MS + VOTE_MS)).toBe("closed");
    expect(castVote(vote, "david", "yes", T + 1000)).toBe(vote);
    const open = T + REPLY_MS;
    expect(castVote(vote, "rob", "no", open)).toBe(vote);
  });

  it("opens voting as soon as the person has replied", () => {
    const vote = replyToVote(startVote(circle, "anne", "rob", "talking", T)!, "Sorry, I'll wait for the teacup.", T + 5000);
    expect(vote.reply).toBe("Sorry, I'll wait for the teacup.");
    expect(votePhase(vote, T + 5000)).toBe("open");
    expect(vote.endsAt).toBe(T + 5000 + VOTE_MS);
  });

  it("without the time to reply, voting opens straight away", () => {
    expect(votePhase(startVote(circle, "anne", "rob", "talking", T, false)!, T)).toBe("open");
  });

  it("one vote per person, and the tally shows counts only", () => {
    let vote = startVote(circle, "anne", "rob", "talking", T, false)!;
    vote = castVote(vote, "david", "yes", T);
    vote = castVote(vote, "david", "no", T);
    vote = castVote(vote, "priya", "pass", T);
    expect(vote.ballots.david).toBe("yes");
    expect(voteTally(vote)).toEqual({ yes: 1, no: 0, pass: 1, voted: 2, waiting: 5 });
  });

  it("passes only if more than half of those who vote say yes", () => {
    const base = startVote(circle, "anne", "rob", "talking", T, false)!;
    const cast = (choices: Record<string, "yes" | "no" | "pass">) => Object.entries(choices).reduce((vote, [who, choice]) => castVote(vote, who, choice, T), base);
    expect(votePasses(cast({ anne: "yes", david: "yes", priya: "no" }))).toBe(true);
    expect(votePasses(cast({ anne: "yes", david: "no" }))).toBe(false);
    // "I'd rather not say" is a vote that isn't yes.
    expect(votePasses(cast({ anne: "yes", david: "yes", priya: "pass", joan: "pass" }))).toBe(false);
    expect(votePasses(base)).toBe(false);
    // Those who don't vote don't count either way.
    expect(votePasses(cast({ anne: "yes" }))).toBe(true);
  });

  it("closes early once everyone has voted, with the result", () => {
    let vote = startVote({ ...circle, present: ["anne", "rob", "david", "you"] }, "anne", "rob", "talking", T, false)!;
    vote = castVote(vote, "anne", "yes", T);
    vote = castVote(vote, "david", "yes", T);
    expect(voteOutcome(vote, T)).toBeNull();
    vote = castVote(vote, "you", "no", T);
    expect(votePhase(vote, T)).toBe("closed");
    expect(voteOutcome(vote, T)).toBe("leaves");
  });

  it("has no result if the person leaves first", () => {
    const vote = leaveBeforeResult(startVote(circle, "anne", "rob", "talking", T)!);
    expect(voteOutcome(vote, T)).toBe("no-result");
  });

  it("writes the time left as minutes and seconds", () => {
    expect(clockLeft(72_000)).toBe("1:12");
    expect(clockLeft(-5)).toBe("0:00");
  });
});
