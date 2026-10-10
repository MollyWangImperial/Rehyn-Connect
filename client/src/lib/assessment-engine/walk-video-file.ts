// Runs the pose model over a walking video the patient chose (on this device; nothing is uploaded) and analyses it
// with walk-video.ts. Frames are visited by seeking, every frame of a short video (fewer a second for a longer one),
// so the analysis does not depend on the video playing (a hidden tab, a slow device).

import { analyzeWalkVideo, type WalkVideoAnalysis, type WalkVideoFrame, type WalkView } from "./walk-video";

const BASE = "/vendor/mediapipe";

/** Only the first this many seconds of a video are analysed. */
export const MAX_ANALYSED_S = 45;
/** Frames a second analysed: every frame of a 30 fps video up to SHORT_VIDEO_S long, half of them for longer ones. */
export const FULL_RATE_FPS = 30, LONG_VIDEO_FPS = 15, SHORT_VIDEO_S = 20;
/** Videos larger than this are refused before opening them (a phone's 1080p minute is about 130 MB). */
export const MAX_VIDEO_BYTES = 400 * 1024 * 1024;
/** Seeks that time out in a row before the video counts as unreadable here. */
export const MAX_STALLED_SEEKS = 3;

type PoseLandmarker = { detectForVideo(video: HTMLVideoElement, ts: number): { landmarks?: { x: number; y: number; visibility?: number }[][] }; close(): void };

let landmarker: Promise<PoseLandmarker> | null = null;
/** The pose model's VIDEO mode needs ever-increasing timestamps, across videos too. */
let timestampCursor = 0;

function poseModel(): Promise<PoseLandmarker> {
  landmarker ??= (async () => {
    const vision: any = await import(/* @vite-ignore */ `${BASE}/vision_bundle.mjs`);
    const fileset = await vision.FilesetResolver.forVisionTasks(`${BASE}/wasm`);
    return vision.PoseLandmarker.createFromOptions(fileset, {
      baseOptions: { modelAssetPath: `${BASE}/models/pose_landmarker_lite.task` },
      runningMode: "VIDEO",
      // Two, to notice someone else in the picture (the analysis follows the biggest, clearest person).
      numPoses: 2,
    });
  })().catch(error => { landmarker = null; throw error; });
  return landmarker;
}

/** Why a video could not be opened at all, in the patient's words. */
export const WALK_FILE_ERRORS = {
  not_video: "Please choose a video file.",
  too_large: "This video is very large. Trim it to the walk, or record at a lower quality, then choose it again.",
  unreadable: "This video could not be opened in this browser. Try recording it again with the phone's camera app.",
  model: "The movement model could not start. Check the internet connection and try again.",
} as const;
export type WalkFileError = keyof typeof WALK_FILE_ERRORS;

const once = (target: HTMLVideoElement, event: string, timeoutMs: number) => new Promise<void>((resolve, reject) => {
  const timer = window.setTimeout(() => { cleanup(); reject(new Error(`${event} timed out`)); }, timeoutMs);
  const ok = () => { cleanup(); resolve(); };
  const fail = () => { cleanup(); reject(new Error("video error")); };
  const cleanup = () => { window.clearTimeout(timer); target.removeEventListener(event, ok); target.removeEventListener("error", fail); };
  target.addEventListener(event, ok, { once: true });
  target.addEventListener("error", fail, { once: true });
});

/**
 * Analyses a walking video file for the given view. `onProgress` gets the share done (0-1). Resolves with the analysis,
 * or with an error the patient can act on; rejects only when aborted.
 */
export async function analyzeWalkVideoFile(file: File, view: WalkView, onProgress: (share: number) => void = () => {}, signal?: AbortSignal): Promise<WalkVideoAnalysis | { error: WalkFileError }> {
  if (!/^video\//.test(file.type) && !/\.(mp4|mov|m4v|webm|3gp|avi|mkv)$/i.test(file.name)) return { error: "not_video" };
  if (file.size > MAX_VIDEO_BYTES) return { error: "too_large" };
  let model: PoseLandmarker;
  try { model = await poseModel(); } catch { return { error: "model" }; }
  const url = URL.createObjectURL(file);
  const video = document.createElement("video");
  video.muted = true; video.playsInline = true; video.preload = "auto"; video.src = url;
  try {
    try { await once(video, "loadeddata", 20000); } catch { return { error: "unreadable" }; }
    const duration = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 0;
    if (!duration || !video.videoWidth || !video.videoHeight) return { error: "unreadable" };
    const aspect = video.videoWidth / video.videoHeight;
    const span = Math.min(duration, MAX_ANALYSED_S);
    const fps = span <= SHORT_VIDEO_S ? FULL_RATE_FPS : LONG_VIDEO_FPS;
    const count = Math.max(1, Math.floor(span * fps));
    const frames: WalkVideoFrame[] = [];
    // The model's VIDEO mode smooths over time: it gets the video's own time, kept increasing across videos.
    const base = timestampCursor + 1000;
    let stalled = 0;
    for (let i = 0; i < count; i++) {
      if (signal?.aborted) throw new DOMException("Aborted", "AbortError");
      const t = i / fps;
      if (Math.abs(video.currentTime - t) > 1e-3) {
        const seeked = once(video, "seeked", 5000);
        video.currentTime = t;
        try { await seeked; stalled = 0; } catch {
          // A video this browser cannot seek through.
          if (++stalled >= MAX_STALLED_SEEKS) return { error: "unreadable" };
          continue;
        }
      }
      timestampCursor = Math.max(timestampCursor + 1, base + Math.round(t * 1000));
      let poses: WalkVideoFrame["poses"] = [];
      try { poses = model.detectForVideo(video, timestampCursor).landmarks ?? []; } catch { /* a frame the model could not read */ }
      frames.push({ t, poses });
      if (i % 10 === 0) { onProgress(i / count); await new Promise(resolve => setTimeout(resolve, 0)); }
    }
    onProgress(1);
    return analyzeWalkVideo(frames, aspect, view, Math.round(duration * 1000));
  } finally {
    video.removeAttribute("src");
    video.load();
    URL.revokeObjectURL(url);
  }
}
