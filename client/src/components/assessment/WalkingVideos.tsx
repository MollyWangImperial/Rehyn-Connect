// The movement check's walking (L6), in two steps, each after its own demonstration: the side video (if the patient
// has the room), then the front video. Each is analysed on this device as soon as it is chosen (walk-video-file.ts);
// the videos never leave it. With a usable video, the last step scores each video's walking measurements and hands
// the higher-scoring ones to the movement check (walk-score.ts); the patient can also skip walking for now.

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CircleAlert, Film, LoaderCircle, RotateCcw, SkipForward } from "lucide-react";
import { combineWalkEvidence, WALK_VIDEO_REASONS, type WalkEvidence, type WalkMeasure, type WalkVideoAnalysis, type WalkView } from "@/lib/assessment-engine/walk-video";
import { bestWalkEvidence, type ScoreWalk, type WalkScores } from "@/lib/assessment-engine/walk-score";
import { analyzeWalkVideoFile, WALK_FILE_ERRORS } from "@/lib/assessment-engine/walk-video-file";
import "./demo-reel.css";
import "./walking-videos.css";

/** What the movement check gets: the measurements to score (with each video's own score, when known), or a skip. */
export type WalkingHandoff =
  | { skipped: true }
  | { skipped: false; evidence: WalkEvidence | null; duration_ms: number; views: WalkView[]; measured_from: WalkMeasure; view_scores?: WalkScores };

type Slot =
  | { state: "empty" }
  | { state: "analysing"; name: string; share: number }
  | { state: "done"; name: string; analysis: WalkVideoAnalysis }
  | { state: "failed"; name: string; message: string };

export const WALK_SLOTS: Record<WalkView, { title: string; when: string }> = {
  side: { title: "Side view", when: "If you had the room: walking across the picture." },
  front: { title: "Front view", when: "Walking away from the phone and back toward it." },
};

/**
 * A side video whose feet were out of the picture: measured from the hips and knees, which is less accurate, so the
 * patient is sent on to the front video (the walking score is the higher of the two).
 */
export const SIDE_FEET_OUT =
  "Your feet were out of the picture, so this side video can only be measured from your hips and knees, which is less accurate. Go on to the front video: your walking score will be the higher of the two.";

/** Whether a slot holds a side video measured without the feet (from the hips and knees). */
const feetOut = (slot: Slot) => slot.state === "done" && slot.analysis.view === "side" && slot.analysis.measuredFrom === "hips_knees";

/** A slot's line for the patient. */
export function slotStatus(slot: Slot): string {
  if (feetOut(slot)) return SIDE_FEET_OUT;
  if (slot.state === "empty") return "No video chosen yet.";
  // Nothing done yet: the movement model is starting, or the other video is being checked first.
  if (slot.state === "analysing") return slot.share > 0 ? `Checking your walk… ${Math.round(slot.share * 100)}%` : "Getting ready to check this video…";
  if (slot.state === "failed") return slot.message;
  const { analysis } = slot;
  if (analysis.evidence) {
    const steps = analysis.evidence.features.step_events.length;
    return analysis.measuredFrom === "hips_knees"
      ? `Ready: ${steps} step${steps === 1 ? "" : "s"} measured from your hips and knees (your feet were out of the picture).`
      : `Ready: ${steps} clear step${steps === 1 ? "" : "s"} measured.`;
  }
  return analysis.reasons.map(reason => WALK_VIDEO_REASONS[reason]).join(" ");
}

/** What the movement check would be handed for the chosen videos without scoring them first (null while none is usable). */
export function walkingHandoff(front: WalkVideoAnalysis | null, side: WalkVideoAnalysis | null): WalkingHandoff | null {
  const combined = combineWalkEvidence(front, side);
  return combined ? { skipped: false, evidence: combined.evidence, duration_ms: combined.durationMs, views: combined.views, measured_from: combined.measuredFrom } : null;
}

/** What the movement check is handed: the measurements of whichever video (or both together) scores higher. */
export async function scoredWalkingHandoff(front: WalkVideoAnalysis | null, side: WalkVideoAnalysis | null, score?: ScoreWalk, signal?: AbortSignal): Promise<WalkingHandoff | null> {
  const best = await bestWalkEvidence(front, side, score, signal);
  if (!best) return null;
  const { candidate } = best;
  return { skipped: false, evidence: candidate.evidence, duration_ms: candidate.durationMs, views: candidate.views, measured_from: candidate.measuredFrom, view_scores: best.scores };
}

/** Each step's heading, what to choose, and its primary button. */
export const WALK_STEPS: Record<WalkView, { title: string; lead: string }> = {
  side: {
    title: "Your side video",
    lead: "Choose the video you just filmed from the side: walking across the picture, turning, and walking back. No room for this, or can't fit your feet in the picture from the side? Skip it: the front video comes next, and your walking score will come from that.",
  },
  front: {
    title: "Your front video",
    lead: "Choose the video you filmed from the front: walking away from the phone, turning, and walking back toward it. With both videos, your walking score is the higher of the two.",
  },
};

/**
 * One step of walking's videos (`step`): the side video (then `onNext`, to the front video's demonstration) or the
 * front video (then `onDone` with the measurements of both). Kept mounted across the steps, so a video chosen and
 * its check carry on while the next demonstration plays.
 */
export default function WalkingVideos({ step, onNext, onDone, onWatchAgain, onExit, onVideoChosen, scoreWalk }: {
  step: WalkView; onNext(): void; onDone(handoff: WalkingHandoff): void; onWatchAgain(): void; onExit(): void;
  /** Each video the patient chooses (testing: saved with the check's videos). */
  onVideoChosen?(view: WalkView, file: File): void;
  /** Scores one video's walking evidence (the Rehyn walking score by default). */
  scoreWalk?: ScoreWalk;
}) {
  const [slots, setSlots] = useState<Record<WalkView, Slot>>({ side: { state: "empty" }, front: { state: "empty" } });
  const inputs = { side: useRef<HTMLInputElement>(null), front: useRef<HTMLInputElement>(null) };
  const runs = useRef<Record<WalkView, AbortController | null>>({ side: null, front: null });
  // One video is analysed at a time (one movement model): a second choice waits for the first.
  const queue = useRef<Promise<unknown>>(Promise.resolve());
  // Scoring the videos before handing over the higher-scoring one.
  const [scoring, setScoring] = useState(false);
  const scoringRun = useRef<AbortController | null>(null);

  useEffect(() => () => { runs.current.side?.abort(); runs.current.front?.abort(); scoringRun.current?.abort(); }, []);

  const choose = (view: WalkView, file: File | undefined) => {
    if (!file) return;
    onVideoChosen?.(view, file);
    runs.current[view]?.abort();
    const controller = new AbortController();
    runs.current[view] = controller;
    setSlots(current => ({ ...current, [view]: { state: "analysing", name: file.name, share: 0 } }));
    queue.current = queue.current.then(async () => {
      if (controller.signal.aborted) return;
      try {
        const result = await analyzeWalkVideoFile(file, view, share => {
          if (!controller.signal.aborted) setSlots(current => ({ ...current, [view]: { state: "analysing", name: file.name, share } }));
        }, controller.signal);
        if (controller.signal.aborted) return;
        setSlots(current => ({ ...current, [view]: "error" in result ? { state: "failed", name: file.name, message: WALK_FILE_ERRORS[result.error] } : { state: "done", name: file.name, analysis: result } }));
      } catch {
        if (!controller.signal.aborted) setSlots(current => ({ ...current, [view]: { state: "failed", name: file.name, message: WALK_FILE_ERRORS.unreadable } }));
      }
    });
  };

  const done = (view: WalkView) => (slots[view].state === "done" ? (slots[view] as Extract<Slot, { state: "done" }>).analysis : null);
  const handoff = walkingHandoff(done("front"), done("side"));
  const busy = slots.side.state === "analysing" || slots.front.state === "analysing";
  const bothUsable = !!done("side")?.evidence && !!done("front")?.evidence;
  const sideChosen = slots.side.state !== "empty";
  // A side video without the feet: the patient is sent on to the front video.
  const sideFeetOut = feetOut(slots.side);

  /** Scores the usable videos and hands over the higher-scoring one (as before, unscored, if scoring fails). */
  const submit = async () => {
    if (!handoff || scoring) return;
    const controller = new AbortController();
    scoringRun.current = controller;
    setScoring(true);
    let best: WalkingHandoff | null = null;
    try { best = await scoredWalkingHandoff(done("front"), done("side"), scoreWalk, controller.signal); } catch { /* aborted, or as before */ }
    if (controller.signal.aborted) return;
    scoringRun.current = null;
    setScoring(false);
    onDone(best ?? handoff);
  };
  const skip = () => { scoringRun.current?.abort(); scoringRun.current = null; setScoring(false); onDone({ skipped: true }); };

  return (
    <section className="walking-videos" aria-labelledby="walking-videos-title">
      <header className="walking-videos-top">
        <button type="button" className="demo-reel-btn demo-reel-quiet" onClick={onExit}><ArrowLeft size={18} aria-hidden="true" />Exit</button>
        <button type="button" className="demo-reel-btn demo-reel-secondary" onClick={onWatchAgain}><RotateCcw size={17} aria-hidden="true" />Watch how to film</button>
      </header>
      <div className="walking-videos-body">
        <p className="walking-videos-step">Walking · Step {step === "side" ? 1 : 2} of 2</p>
        <h1 id="walking-videos-title">{WALK_STEPS[step].title}</h1>
        <p className="walking-videos-lead">{WALK_STEPS[step].lead} Your whole body, feet included, needs to stay in the picture.</p>
        {/* The front step also shows how the side video went (still being checked, ready, or not usable). */}
        {step === "front" && sideChosen && <p className="walking-videos-earlier"><b>Side video:</b> {sideFeetOut ? "your feet were out of the picture, so it was measured from your hips and knees. Your walking score will be the higher of your two videos." : slotStatus(slots.side)}</p>}
        <div className="walking-videos-slots is-single">
          {([step] as const).map(view => {
            const slot = slots[view];
            const ok = slot.state === "done" && !!slot.analysis.evidence && !feetOut(slot);
            const problem = slot.state === "failed" || (slot.state === "done" && !slot.analysis.evidence) || feetOut(slot);
            return (
              <div key={view} className={`walking-slot${ok ? " is-ready" : ""}${problem ? " is-problem" : ""}`}>
                <div className="walking-slot-head">
                  <h2>{WALK_SLOTS[view].title}</h2>
                  <p>{WALK_SLOTS[view].when}</p>
                </div>
                <p className="walking-slot-status" role="status" aria-live="polite">
                  {slot.state === "analysing" && <LoaderCircle className="walking-spin" size={16} aria-hidden="true" />}
                  {ok && <Check size={16} aria-hidden="true" />}
                  {problem && <CircleAlert size={16} aria-hidden="true" />}
                  <span>{slotStatus(slot)}</span>
                </p>
                {slot.state === "analysing" && <div className="walking-slot-bar" aria-hidden="true"><span style={{ width: `${Math.round(slot.share * 100)}%` }} /></div>}
                <input ref={inputs[view]} className="walking-slot-input" type="file" accept="video/*" aria-label={`Choose a ${WALK_SLOTS[view].title.toLowerCase()} walking video`}
                  onChange={event => { choose(view, event.target.files?.[0]); event.target.value = ""; }} />
                <button type="button" className="demo-reel-btn demo-reel-secondary walking-slot-choose" onClick={() => inputs[view].current?.click()}>
                  <Film size={17} aria-hidden="true" />{slot.state === "empty" ? "Choose or record a video" : "Choose another video"}
                </button>
              </div>
            );
          })}
        </div>
        <p className="walking-videos-note">Your videos stay on this device. Only the walking measurements are used.</p>
      </div>
      <footer className="walking-videos-bottom">
        <button type="button" className="demo-reel-btn demo-reel-quiet" onClick={skip}><SkipForward size={17} aria-hidden="true" />Skip walking for now</button>
        {step === "side" ? (
          <div className="walking-videos-actions">
            {!sideChosen && <button type="button" className="demo-reel-btn demo-reel-secondary" onClick={onNext}>No room, or feet won't fit: skip</button>}
            {/* The side video keeps being checked while the front video's demonstration plays. */}
            <button type="button" className="demo-reel-btn demo-reel-primary" disabled={!sideChosen} onClick={onNext}>
              Next: the front video<ArrowRight size={17} aria-hidden="true" />
            </button>
          </div>
        ) : (
          <button type="button" className="demo-reel-btn demo-reel-primary" disabled={!handoff || busy || scoring} aria-busy={scoring || undefined} onClick={() => void submit()}>
            {scoring ? <><LoaderCircle className="walking-spin" size={17} aria-hidden="true" />Scoring your walk…</>
              : bothUsable ? "Get my walking score from both videos" : slots.front.state === "empty" && done("side")?.evidence ? "Use the side video only" : "Get my walking score"}
          </button>
        )}
      </footer>
    </section>
  );
}
