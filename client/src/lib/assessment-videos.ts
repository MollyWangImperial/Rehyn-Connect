// Testing: each movement check's videos saved to a folder on this computer (chosen once, e.g. on D:), replaced by the
// next check's, so a task's score can be looked into later. The runner's review recorder gives each camera task's
// video (the camera with the drawn skeleton and targets, and a panel of the step, scores and timing) and its evidence
// (the task's result, the step timeline, sampled geometry); walking's are the patient's own videos. Uses the browser's
// folder access (Chrome and Edge); elsewhere the files are downloaded instead.

export type TaskVideo = { name: string; blob: Blob };

/** A check's files: `<task>.<ext>` and `<task>.json` per camera task, the walking videos, and `results.json`. */
export function checkFiles(videos: { taskId: string; blob: Blob; evidence?: unknown }[], walking: { view: "side" | "front"; file: File }[], results: unknown): TaskVideo[] {
  const ext = (type: string, name = "") => (/mp4/.test(type) || /\.mp4$/i.test(name) ? "mp4" : /quicktime/.test(type) || /\.mov$/i.test(name) ? "mov" : "webm");
  const files: TaskVideo[] = [];
  for (const video of videos) {
    files.push({ name: `${video.taskId}.${ext(video.blob.type)}`, blob: video.blob });
    if (video.evidence !== undefined) files.push({ name: `${video.taskId}.json`, blob: new Blob([JSON.stringify(video.evidence, null, 2)], { type: "application/json" }) });
  }
  for (const walk of walking) files.push({ name: `L6-${walk.view}.${ext(walk.file.type, walk.file.name)}`, blob: walk.file });
  if (results !== undefined) files.push({ name: "results.json", blob: new Blob([JSON.stringify(results, null, 2)], { type: "application/json" }) });
  return files;
}

/** The files a check writes, so the previous check's are removed when this one has none of that name. */
export const CHECK_FILE = /^(?:[A-Z]\d+(?:-(?:side|front))?\.(?:webm|mp4|mov|json)|results\.json)$/;

type DirectoryHandle = {
  name: string;
  queryPermission?(options: { mode: "readwrite" }): Promise<PermissionState>;
  requestPermission?(options: { mode: "readwrite" }): Promise<PermissionState>;
  getFileHandle(name: string, options: { create: boolean }): Promise<{ createWritable(): Promise<{ write(data: Blob): Promise<void>; close(): Promise<void> }> }>;
  removeEntry(name: string): Promise<void>;
  keys?(): AsyncIterableIterator<string>;
};

const DB = "rehyn-assessment-videos", STORE = "folder", KEY = "folder";
function database(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(STORE);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
async function storedFolder(): Promise<DirectoryHandle | null> {
  try {
    const db = await database();
    return await new Promise(resolve => {
      const request = db.transaction(STORE).objectStore(STORE).get(KEY);
      request.onsuccess = () => resolve((request.result as DirectoryHandle) ?? null);
      request.onerror = () => resolve(null);
    });
  } catch { return null; }
}
async function rememberFolder(handle: DirectoryHandle) {
  try {
    const db = await database();
    await new Promise<void>(resolve => { const tx = db.transaction(STORE, "readwrite"); tx.objectStore(STORE).put(handle, KEY); tx.oncomplete = () => resolve(); tx.onerror = () => resolve(); });
  } catch { /* the folder is asked for again next time */ }
}

export const canChooseFolder = () => typeof window !== "undefined" && typeof (window as unknown as { showDirectoryPicker?: unknown }).showDirectoryPicker === "function";

async function writeAll(folder: DirectoryHandle, files: TaskVideo[]) {
  const names = new Set(files.map(file => file.name));
  // The previous check's files this one does not replace (a task not done this time) go, so the folder is one check.
  if (folder.keys) for await (const name of folder.keys()) if (CHECK_FILE.test(name) && !names.has(name)) { try { await folder.removeEntry(name); } catch { /* in use */ } }
  for (const file of files) {
    const writable = await (await folder.getFileHandle(file.name, { create: true })).createWritable();
    await writable.write(file.blob);
    await writable.close();
  }
}

export type SaveResult = { status: "saved"; folder: string } | { status: "needs_folder" } | { status: "downloaded" } | { status: "error"; message: string };

/**
 * Saves a check's files to the remembered folder, replacing the last check's. Without a remembered folder (or its
 * permission), `choose` (from a click) asks for one; without the browser's folder access, the files are downloaded.
 */
export async function saveCheckFiles(files: TaskVideo[], { choose = false } = {}): Promise<SaveResult> {
  if (!files.length) return { status: "error", message: "There are no videos from this check." };
  try {
    if (!canChooseFolder()) {
      if (!choose) return { status: "needs_folder" };
      for (const file of files) {
        const url = URL.createObjectURL(file.blob), link = document.createElement("a");
        link.href = url; link.download = `rehyn-${file.name}`; document.body.append(link); link.click(); link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 60000);
      }
      return { status: "downloaded" };
    }
    let folder = await storedFolder();
    if (folder?.queryPermission && (await folder.queryPermission({ mode: "readwrite" })) !== "granted") {
      if (!choose || !folder.requestPermission || (await folder.requestPermission({ mode: "readwrite" })) !== "granted") folder = choose ? null : folder;
      if (!choose) return { status: "needs_folder" };
    }
    if (!folder) {
      if (!choose) return { status: "needs_folder" };
      folder = await (window as unknown as { showDirectoryPicker(options: object): Promise<DirectoryHandle> }).showDirectoryPicker({ id: "rehyn-assessment-videos", mode: "readwrite" });
      await rememberFolder(folder);
    }
    await writeAll(folder, files);
    return { status: "saved", folder: folder.name };
  } catch (error) {
    if ((error as DOMException)?.name === "AbortError") return { status: "needs_folder" };
    return { status: "error", message: String((error as Error)?.message ?? error) };
  }
}
