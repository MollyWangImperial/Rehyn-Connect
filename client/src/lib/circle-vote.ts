// Asking the circle whether someone should leave. Only in circles a member hosts: Alira's own
// circles never use votes (she decides herself, and can end any circle at once if someone is
// unsafe). The host can never remove anyone alone. The rules, kept here so they can be tested:
//   - only the host can ask, about someone else who is here, and only once per person per circle;
//   - the person asked about gets 30 seconds to reply first (if the host gives it), and can't vote;
//   - everyone else here, the host included, gets one private vote: yes, no or "I'd rather not say".
//     Alira doesn't vote. The vote is open for 2 minutes, or until everyone has voted;
//   - it passes if more than half of those who vote say yes. "I'd rather not say" is a vote that
//     isn't yes, so it counts among those who voted: leaving takes a clear majority;
//   - if the person leaves on their own first, the vote closes with no result.

export const VOTE_MS = 2 * 60_000;
export const REPLY_MS = 30_000;

export type VoteChoice = "yes" | "no" | "pass";
export type VoteReason = "talking" | "unkind" | "advice" | "offtopic";
export const VOTE_REASONS: { id: VoteReason; label: string }[] = [
  { id: "talking", label: "Talking over other people" },
  { id: "unkind", label: "Unkind or upsetting to someone" },
  { id: "advice", label: "Sharing risky health advice" },
  { id: "offtopic", label: "Off topic, again and again" },
];
export const reasonLabel = (reason: VoteReason) => VOTE_REASONS.find(item => item.id === reason)?.label ?? "";

/** A circle as the vote sees it: who hosts it, who is here, and who has already been asked about. */
export type VoteCircle = {
  hostedBy: "alira" | "member";
  host: string;
  /** Everyone here now, the host included. Alira is never in this list. */
  present: string[];
  /** People the circle has already been asked about, this circle. */
  asked: string[];
};

export type CircleVote = {
  target: string;
  host: string;
  reason: VoteReason;
  /** Who may vote: everyone who was here when it started, except the person asked about. */
  voters: string[];
  ballots: Record<string, VoteChoice>;
  startedAt: number;
  /** When voting opens: after the 30 seconds to reply, or straight away. */
  opensAt: number;
  endsAt: number;
  reply: string | null;
  /** The person asked about left on their own: the vote closed with no result. */
  leftFirst: boolean;
};

export type AskRefusal = "alira-circle" | "not-host" | "self" | "not-here" | "asked-before";

/** Whether `by` can ask the circle about `target`, or why not. */
export function canAskCircle(circle: VoteCircle, by: string, target: string): { ok: true } | { ok: false; why: AskRefusal } {
  if (circle.hostedBy === "alira") return { ok: false, why: "alira-circle" };
  if (by !== circle.host) return { ok: false, why: "not-host" };
  if (target === by) return { ok: false, why: "self" };
  if (!circle.present.includes(target)) return { ok: false, why: "not-here" };
  if (circle.asked.includes(target)) return { ok: false, why: "asked-before" };
  return { ok: true };
}

/** Starts a vote, or returns null when the rules don't allow one. */
export function startVote(circle: VoteCircle, by: string, target: string, reason: VoteReason, now: number, giveReply = true): CircleVote | null {
  if (!canAskCircle(circle, by, target).ok) return null;
  const opensAt = now + (giveReply ? REPLY_MS : 0);
  return {
    target, host: by, reason,
    voters: circle.present.filter(who => who !== target),
    ballots: {}, startedAt: now, opensAt, endsAt: opensAt + VOTE_MS, reply: null, leftFirst: false,
  };
}

export type VotePhase = "reply" | "open" | "closed";

export function votePhase(vote: CircleVote, now: number): VotePhase {
  if (vote.leftFirst) return "closed";
  if (now < vote.opensAt) return "reply";
  if (now >= vote.endsAt || vote.voters.every(who => vote.ballots[who])) return "closed";
  return "open";
}

/** The person asked about has replied: their words are shown, and voting opens now. */
export function replyToVote(vote: CircleVote, text: string, now: number): CircleVote {
  if (vote.reply !== null || votePhase(vote, now) !== "reply") return vote;
  return { ...vote, reply: text.trim().slice(0, 200), opensAt: now, endsAt: now + VOTE_MS };
}

/** One vote, once, while voting is open, from someone who may vote. Anything else changes nothing. */
export function castVote(vote: CircleVote, voter: string, choice: VoteChoice, now: number): CircleVote {
  if (votePhase(vote, now) !== "open" || !vote.voters.includes(voter) || vote.ballots[voter]) return vote;
  return { ...vote, ballots: { ...vote.ballots, [voter]: choice } };
}

/** The person asked about left the circle themselves: the vote closes with no result. */
export const leaveBeforeResult = (vote: CircleVote): CircleVote => ({ ...vote, leftFirst: true });

/** The private tally: only counts, never who voted which way. */
export function voteTally(vote: CircleVote): { yes: number; no: number; pass: number; voted: number; waiting: number } {
  const choices = vote.voters.map(who => vote.ballots[who]).filter((choice): choice is VoteChoice => !!choice);
  const yes = choices.filter(choice => choice === "yes").length;
  const no = choices.filter(choice => choice === "no").length;
  return { yes, no, pass: choices.length - yes - no, voted: choices.length, waiting: vote.voters.length - choices.length };
}

/** More than half of those who voted said yes. Nobody voting is not a yes. */
export function votePasses(vote: CircleVote): boolean {
  const { yes, voted } = voteTally(vote);
  return voted > 0 && yes * 2 > voted;
}

export type VoteOutcome = "leaves" | "stays" | "no-result";

/** What happens once the vote has closed (null while it is still running). */
export function voteOutcome(vote: CircleVote, now: number): VoteOutcome | null {
  if (votePhase(vote, now) !== "closed") return null;
  if (vote.leftFirst) return "no-result";
  return votePasses(vote) ? "leaves" : "stays";
}

/** "1:12", for the time left. */
export function clockLeft(ms: number): string {
  const seconds = Math.max(0, Math.ceil(ms / 1000));
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}
