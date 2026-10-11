// What the movement check's results dashboard (AssessmentDashboard) shows, from the Rehyn app's function score: the
// daily function score, the arm, hand and walking areas (each with a word for where it stands and what was done), the
// change since the previous check, when the next check is, and one or two movements to work on until then. Every
// number comes from the patient's own movements in this check; nothing is shown that was not measured.

import type { AssessmentReport, StoredAssessment } from "./assessment";
import { REASSESSMENT_CYCLE_DAYS } from "./home-stage";

type TaskRow = { task_id: string; task_label?: string; level: number | null; points: number | null; domain?: string; label?: string };
type Area = { display_score: number | null; partial?: boolean };
type Score = { display_total: number | null; areas: Record<string, Area>; tasks: TaskRow[] };

export type AreaId = "upper_limb" | "hand" | "lower_limb";
export type Standing = "strong" | "building" | "starting" | "not_measured";

export type DashboardArea = {
  id: AreaId;
  title: string;
  score: number | null;
  standing: Standing;
  /** The standing in words ("Strong"), and what the patient did, in a sentence. */
  word: string;
  summary: string;
};
export type Dashboard = {
  /** "10 October", the check's day. */
  dateLabel: string;
  total: number | null;
  standing: Standing;
  word: string;
  /** Some area has a movement that could not be measured. */
  partial: boolean;
  areas: DashboardArea[];
  /** The previous check, when there is one with a score: its day, score and each area's change. */
  since: { dateLabel: string; total: number; changes: { title: string; change: number }[] } | null;
  next: { dateLabel: string; days: number; tryTo: string[] };
};

const AREAS: { id: AreaId; title: string }[] = [
  { id: "upper_limb", title: "Arm" }, { id: "hand", title: "Hand" }, { id: "lower_limb", title: "Walking" },
];
const STANDING_WORDS: Record<Standing, string> = { strong: "Strong", building: "Building", starting: "Getting started", not_measured: "Not measured" };

/** 75 and up: strong; 50 and up: building; below: getting started. */
export function standingFor(score: number | null): Standing {
  if (score === null || !Number.isFinite(score)) return "not_measured";
  return score >= 75 ? "strong" : score >= 50 ? "building" : "starting";
}

/** Each task's short name, what each level means for it, and the movement to practise when it is not done fully. */
const TASKS: Record<string, { name: string; practise: string }> = {
  T1: { name: "Reach", practise: "Reach up to the highest circle" },
  T3: { name: "Hand to mouth", practise: "Bring your hand to your mouth" },
  H4: { name: "Hand opening", practise: "Open your fingers wide" },
  H3: { name: "Pinch", practise: "Bring your thumb to your first finger" },
  L6: { name: "Walking", practise: "Take a short walk with your usual support" },
};
const LEVEL_PHRASES: Record<number, string> = {
  4: "done fully on your own",
  3: "done on your own",
  2: "an easier version on your own",
  1: "started, with help",
  0: "not yet",
};

function areaSummary(id: AreaId, tasks: TaskRow[], walkingViews: string[], walkingFrom: string): string {
  if (id === "lower_limb") {
    const walk = tasks.find(task => task.task_id === "L6");
    if (!walk || walk.points === null) return "Walking was not measured in this check.";
    const views = walkingViews.includes("side") && walkingViews.includes("front") ? "your side and front videos"
      : walkingViews.includes("side") ? "your side video" : walkingViews.includes("front") ? "your front video" : "your walking video";
    if (walkingFrom === "hips_knees") return `Based on your hips and knees in ${views} (your feet were out of the picture): your steps' timing, evenness and length.`;
    return `Measured from ${views}: your steps, their evenness and rhythm.`;
  }
  const rows = tasks.filter(task => task.domain === id || (!task.domain && (id === "hand" ? /^H/ : /^T/).test(task.task_id)));
  if (!rows.length) return "Not part of this check.";
  const parts = rows.map(task => `${TASKS[task.task_id]?.name ?? task.task_label ?? task.task_id}: ${task.level === null ? "not measured" : LEVEL_PHRASES[task.level] ?? "measured"}`);
  return `${parts.join(". ")}.`;
}

const dayMonth = (date: Date) => date.toLocaleDateString("en-GB", { day: "numeric", month: "long" });
const weekdayDayMonth = (date: Date) => date.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });

function functionScore(report: AssessmentReport | undefined | null): Score | null {
  const score = report?.metrics?.function_score as Score | undefined;
  return score && typeof score === "object" && Array.isArray(score.tasks) && score.areas ? score : null;
}

/** The movements to work on until the next check: those not yet done fully, the furthest from it first (at most 2). */
function tryTo(tasks: TaskRow[]): string[] {
  const open = tasks.filter(task => task.task_id !== "L6" && TASKS[task.task_id] && task.level !== null && task.level < 4)
    .sort((a, b) => (a.level ?? 0) - (b.level ?? 0));
  const out = open.slice(0, 2).map(task => TASKS[task.task_id].practise);
  return out.length ? out : ["Keep up your daily movements"];
}

/** The dashboard for a check's report, the previous check (if any), and when this check was completed. */
export function buildDashboard(report: AssessmentReport, previous: StoredAssessment | null, completedAt: Date): Dashboard | null {
  const score = functionScore(report);
  if (!score) return null;
  const walk = (report.task_results ?? []).find(task => task?.task_id === "L6") as { metrics?: { walking_video_views?: unknown; walking_measured_from?: unknown } } | undefined;
  const walkingViews = Array.isArray(walk?.metrics?.walking_video_views) ? (walk!.metrics!.walking_video_views as unknown[]).filter((v): v is string => typeof v === "string") : [];
  const walkingFrom = typeof walk?.metrics?.walking_measured_from === "string" ? walk.metrics.walking_measured_from : "feet";
  const areas = AREAS.filter(area => area.id in score.areas || area.id === "lower_limb").map(area => {
    const value = score.areas[area.id]?.display_score ?? null;
    const standing = standingFor(value);
    return { ...area, score: value, standing, word: STANDING_WORDS[standing], summary: areaSummary(area.id, score.tasks, walkingViews, walkingFrom) };
  });
  const total = score.display_total ?? null;
  const standing = standingFor(total);

  const before = functionScore(previous?.report);
  const beforeDate = previous ? new Date(previous.completedAt) : null;
  const since = before && before.display_total !== null && beforeDate && !Number.isNaN(beforeDate.getTime()) ? {
    dateLabel: dayMonth(beforeDate),
    total: before.display_total,
    changes: areas.flatMap(area => {
      const was = before.areas[area.id]?.display_score;
      return area.score !== null && typeof was === "number" ? [{ title: area.title, change: area.score - was }] : [];
    }),
  } : null;

  const due = new Date(completedAt);
  due.setDate(due.getDate() + REASSESSMENT_CYCLE_DAYS);
  return {
    dateLabel: dayMonth(completedAt),
    total, standing, word: STANDING_WORDS[standing],
    partial: Object.values(score.areas).some(area => area?.partial === true),
    areas, since,
    next: { dateLabel: weekdayDayMonth(due), days: REASSESSMENT_CYCLE_DAYS, tryTo: tryTo(score.tasks) },
  };
}

/** How the score is put together, for "How we scored this". */
export const SCORING_NOTE = [
  "Each movement earns up to 100: 100 for the full movement on your own with steady posture, 75 on your own when your posture needed help or could not be seen clearly, 50 for an easier version on your own, 25 when you started it or had help, and 0 when it was not done yet.",
  "Each area is the average of its movements, and your daily function score is the average of the areas that were measured. Walking uses the score of your walking video.",
  "These are movement measures from your camera to guide your practice, not a medical assessment.",
];
