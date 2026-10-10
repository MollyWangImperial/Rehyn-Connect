import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, LoaderCircle, RefreshCw } from "lucide-react";
import { useLocation, useSearch } from "wouter";
import {
  buildRunnerUrl,
  assessmentPlanFrom,
  getAssessmentBase,
  loadRememberedAssessment,
  parseRunnerMessage,
  rememberAssessment,
  type StartRungs,
  type StoredAssessment,
} from "@/lib/assessment";
import { affectedSideFrom, loadOnboardingAnswers } from "@/lib/alira-onboarding";
import { startLearning } from "@/lib/alira-learning-client";
import { adaptedStartRungs } from "@/lib/alira-learning-store";
import { renderReviewControlsEnabled } from "@/lib/administrative-controls";
import type { AssessmentTaskId } from "@/lib/assessment-engine/types";
import DemoReel, { DEMO_SPECS } from "@/components/assessment/DemoReel";
import WalkingVideos, { type WalkingHandoff } from "@/components/assessment/WalkingVideos";
import type { WalkView as WalkStep } from "@/lib/assessment-engine/walk-video";
import AssessmentDashboard from "@/components/assessment/AssessmentDashboard";
import { buildDashboard, type Dashboard } from "@/lib/assessment-dashboard";
import "./assessment.css";

const LOAD_TIMEOUT_MS = 25000;

/** The review runner through this origin (server/movement-check-runner.ts), asked to wait for each demonstration. */
export function companionRunnerUrl(direct: string, origin: string): string {
  const query = new URL(direct).searchParams;
  query.set("host_demos", "1");
  return `${origin}/movement-check/runner?${query.toString()}`;
}

/** The survey's start points with Alira's learned settings applied; the survey's alone if those can't be read. */
function learnedStartRungs(planned: { T1?: string; T3?: string }): StartRungs | undefined {
  try {
    return adaptedStartRungs(planned);
  } catch {
    return undefined;
  }
}

// The movement check runs the Rehyn app's real pose runner (camera, movement model, saving, results) inside this
// page, set up once. The review runner is served from this origin (/movement-check/runner, server/movement-check-
// runner.ts) so that before each task it waits while this page shows that task's demonstration full screen
// (DemoReel), then carries on by itself. Everything else patients see is the runner's own UI; this page only frames
// it, listens for its messages and brings them back to Alira afterwards.
export default function Assessment() {
  const [, navigate] = useLocation();
  const search = useSearch();
  const query = new URLSearchParams(search);
  const onboarding = query.get("onboarding") === "1";
  const aliraPath = onboarding ? "/alira?onboarding=1" : "/alira";
  const base = useMemo(() => getAssessmentBase(import.meta.env.VITE_ASSESSMENT_BASE, import.meta.env.DEV), []);
  const answers = useMemo(() => loadOnboardingAnswers(), []);
  const plan = useMemo(() => assessmentPlanFrom(answers), [answers]);
  const [caregiverAcknowledged, setCaregiverAcknowledged] = useState(false);
  // The review runner (Render, or ?runner=review in development) comes through this origin with the demonstrations.
  const viaCompanion = renderReviewControlsEnabled() || (import.meta.env.DEV && query.get("runner") === "review");
  // Alira's learned start points are read once, as the check opens (after any warm-up and learning run).
  const { runnerUrl, directOrigin } = useMemo(() => {
    const direct = buildRunnerUrl(base, { affectedSide: affectedSideFrom(answers), answers, startRungs: learnedStartRungs(plan.startRung), guestReview: viaCompanion, returnTo: aliraPath });
    return { runnerUrl: viaCompanion ? companionRunnerUrl(direct, window.location.origin) : direct, directOrigin: new URL(direct).origin };
  }, [base, answers, plan, aliraPath, viaCompanion]);
  const runnerOrigin = useMemo(() => new URL(runnerUrl).origin, [runnerUrl]);
  // The task the runner is waiting on while its demonstration plays (null: none).
  // Walking shows its side-view demonstration, then later its front-view one (walkView).
  const [demo, setDemo] = useState<{ taskId: AssessmentTaskId; index: number; count: number; walkView?: WalkStep } | null>(null);
  // Walking: after each of its demonstrations the patient chooses that video here: the side video, then the front.
  const [walking, setWalking] = useState<{ index: number; count: number; step: WalkStep } | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [stalled, setStalled] = useState(false);
  const [tasksDone, setTasksDone] = useState(0);
  const [result, setResult] = useState<StoredAssessment | null>(null);
  const [previewComplete, setPreviewComplete] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);
  const learningStarted = useRef(false);
  // The results dashboard, over the runner once its results arrive; compared with the check before this one (read
  // now, before this check's results replace it).
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const previousCheck = useRef(loadRememberedAssessment());

  useEffect(() => {
    if (loaded || result) return;
    const timer = setTimeout(() => setStalled(true), LOAD_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, [loaded, result]);

  /** The demonstration is over (watched, skipped or the patient left it): the runner starts the task. */
  const continueTask = (taskId: string, walkingHandoff?: WalkingHandoff) => {
    setDemo(null);
    setWalking(null);
    frame.current?.contentWindow?.postMessage(JSON.stringify({ type: "host_continue", task_id: taskId, ...(walkingHandoff ? { walking: walkingHandoff } : {}) }), runnerOrigin);
  };
  /** A demonstration ended: walking goes on to that view's video (the runner keeps waiting), any other task starts. */
  const demoDone = (current: { taskId: AssessmentTaskId; index: number; count: number; walkView?: WalkStep }) => {
    if (current.taskId !== "L6") return continueTask(current.taskId);
    setDemo(null);
    setWalking({ index: current.index, count: current.count, step: current.walkView ?? "side" });
  };
  /** Walking's side video is chosen (or there is no room for it): the front video's demonstration, then its upload. */
  const walkingNext = () => {
    if (!walking) return;
    setWalking({ ...walking, step: "front" });
    setDemo({ taskId: "L6", index: walking.index, count: walking.count, walkView: "front" });
  };

  useEffect(() => {
    // Alira reviews the new results in the background, once per check. Without consent it does nothing.
    function learnFromResults() {
      if (learningStarted.current) return;
      learningStarted.current = true;
      try {
        void startLearning("assessment");
      } catch {
        /* Learning must never get in the way of the results. */
      }
    }
    /** The runner shows its results: this page's dashboard takes over when the results carry a function score. */
    function showDashboard(assessment: unknown) {
      try {
        const next = assessment && typeof assessment === "object" ? buildDashboard(assessment as Parameters<typeof buildDashboard>[0], previousCheck.current, new Date()) : null;
        if (next) setDashboard(next);
      } catch {
        /* The runner's own results stay on screen. */
      }
    }
    function onMessage(event: MessageEvent) {
      // The proxy sends the frame to the original runner when it cannot prepare it: its messages count too.
      if (event.origin !== runnerOrigin && event.origin !== directOrigin) return;
      if (!frame.current || event.source !== frame.current.contentWindow) return;
      const message = parseRunnerMessage(event.data);
      if (!message) return;
      switch (message.type) {
        case "ready":
          setLoaded(true);
          setStalled(false);
          break;
        case "exit":
          navigate(aliraPath);
          break;
        case "task_complete":
          setTasksDone(count => count + 1);
          break;
        case "task_intro": {
          // The runner waits before this task: show its demonstration, or carry straight on for a task without one.
          const taskId = String(message.task_id ?? "");
          if (Object.hasOwn(DEMO_SPECS, taskId)) setDemo({ taskId: taskId as AssessmentTaskId, index: Number(message.task_index) || 0, count: Number(message.task_count) || plan.taskIds.length, ...(taskId === "L6" ? { walkView: "side" as const } : {}) });
          else frame.current?.contentWindow?.postMessage(JSON.stringify({ type: "host_continue", task_id: taskId }), runnerOrigin);
          break;
        }
        case "task_intro_timeout":
          // The runner stopped waiting and started the task: the demonstration must not hide it.
          setDemo(current => (current?.taskId === message.task_id ? null : current));
          if (message.task_id === "L6") setWalking(null);
          break;
        case "assessment_complete":
          // Current runners present the analysis and results inside the frame.
          // Keep the fallback for older deployed runners that only post completion.
          if (message.results_in_runner === true) { rememberAssessment(message.assessment); showDashboard(message.assessment); }
          else setResult(rememberAssessment(message.assessment) ?? { id: "", completedAt: new Date().toISOString() });
          learnFromResults();
          break;
        case "assessment_preview_complete":
          // Keep results visible in the runner; its Done action returns to Alira.
          const previewResult = rememberAssessment(message.assessment);
          learnFromResults();
          if (message.results_in_runner === true) { showDashboard(message.assessment); break; }
          setPreviewComplete(true);
          setResult(previewResult ?? { id: "", completedAt: new Date().toISOString() });
          break;
        default:
          break;
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [aliraPath, navigate, runnerOrigin, directOrigin, plan.taskIds.length]);

  if (!plan.taskIds.length || (plan.caregiverRoute && !caregiverAcknowledged)) return (
    <div className="assessment-page"><div className="assessment-veil is-solid">
      <h1>Let’s start with supported movement</h1>
      <p>Based on your answers, we’ll leave the arm and hand camera tasks for now. Alira can help you find movements to do with your carer. Those areas will not receive a score.</p>
      <div className="assessment-actions">
        {plan.taskIds.length > 0 && <button className="assessment-primary" onClick={() => setCaregiverAcknowledged(true)}>Continue to walking</button>}
        <button className="assessment-secondary" onClick={() => navigate(aliraPath)}>Back to Alira</button>
      </div>
    </div></div>
  );

  return (
    <div className="assessment-page">
      {/* The task's demonstration over the waiting runner (camera still on), until it ends or is skipped. */}
      {demo && !result && <div className="assessment-demo">
        <DemoReel key={`${demo.taskId}-${demo.index}-${demo.walkView ?? ""}`} taskIds={[demo.taskId]} side={affectedSideFrom(answers)} autoAdvance progress={{ index: demo.index, count: demo.count }} walkView={demo.walkView}
          onDone={() => demoDone(demo)} onExit={() => navigate(aliraPath)} />
      </div>}
      {dashboard && <AssessmentDashboard dashboard={dashboard} onAlira={() => navigate(aliraPath)} onHome={() => navigate("/")} />}
      {/* Walking's videos, chosen and checked here; the runner scores their measurements. */}
      {/* Kept mounted (hidden) while the demonstration plays again, so the chosen videos and their checks carry on. */}
      {walking && !result && <div className="assessment-demo" hidden={!!demo}>
        <WalkingVideos step={walking.step} onNext={walkingNext} onDone={handoff => continueTask("L6", handoff)} onExit={() => navigate(aliraPath)}
          onWatchAgain={() => setDemo({ taskId: "L6", index: walking.index, count: walking.count, walkView: walking.step })} />
      </div>}
      {!result && (
        <iframe
          ref={frame}
          className="assessment-runner"
          title="Rehyn movement check"
          src={runnerUrl}
          // The frame's own origin, and the original runner's in case the proxy falls back to it.
          allow={runnerOrigin === directOrigin ? "camera; microphone; autoplay; fullscreen" : `camera 'src' ${directOrigin}; microphone 'src' ${directOrigin}; autoplay 'src' ${directOrigin}; fullscreen 'src' ${directOrigin}`}
          allowFullScreen
          onLoad={() => {
            setLoaded(true);
            setStalled(false);
          }}
        />
      )}

      {!loaded && !result && !stalled && (
        <div className="assessment-veil" role="status">
          <LoaderCircle className="assessment-spinner" size={28} aria-hidden="true" />
          <p>Opening your movement check…</p>
        </div>
      )}

      {!loaded && !result && stalled && (
        <div className="assessment-veil is-solid" role="alert">
          <h1>The movement check is taking a while to open</h1>
          <p>
            The assessment hasn't finished opening in this page. Try reloading, or open it directly below.
          </p>
          <div className="assessment-actions">
            <button className="assessment-primary" onClick={() => window.location.reload()}>
              <RefreshCw size={17} aria-hidden="true" /> Try again
            </button>
            <button className="assessment-secondary" onClick={() => navigate(aliraPath)}>
              <ArrowLeft size={17} aria-hidden="true" /> Back to Alira
            </button>
          </div>
          <a className="assessment-link" href={runnerUrl} target="_blank" rel="noopener noreferrer">
            Open the assessment directly
          </a>
        </div>
      )}

      {result && (
        <div className="assessment-veil is-solid" role="status">
          <span className="assessment-tick" aria-hidden="true">
            <Check size={44} strokeWidth={2.6} />
          </span>
          <h1>{previewComplete ? "Assessment preview complete" : "Movement check complete"}</h1>
          <p>
            {previewComplete ? "You completed the local preview. No recordings or account results were saved." : <>
            {tasksDone > 0 ? `${tasksDone} task${tasksDone === 1 ? "" : "s"} recorded. ` : ""}
            Your results are saved with the assessment service{result.id ? ` (record ${result.id.slice(0, 8)}…)` : ""}. Alira will use them for your first week of gentle movements.
            </>}
          </p>
          <div className="assessment-actions">
            <button className="assessment-primary" onClick={() => navigate(aliraPath)}>
              Back to Alira <ArrowRight size={17} aria-hidden="true" />
            </button>
            <button className="assessment-secondary" onClick={() => navigate("/")}>
              Go to my home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
