import { afterEach, describe, expect, it, vi } from "vitest";
import { checkFiles, CHECK_FILE, saveCheckFiles } from "./assessment-videos";

/** A folder as the browser's folder access gives it, in memory. */
function fakeFolder(initial: string[] = [], permission: PermissionState = "granted") {
  const files = new Map<string, Blob | null>(initial.map(name => [name, new Blob(["old"])]));
  return {
    files,
    name: "rehyn-assessment-videos",
    queryPermission: async () => permission,
    requestPermission: async () => "granted" as PermissionState,
    getFileHandle: async (name: string) => ({
      createWritable: async () => { let data: Blob | null = null; return { write: async (blob: Blob) => { data = blob; }, close: async () => { files.set(name, data); } }; },
    }),
    removeEntry: async (name: string) => { files.delete(name); },
    keys: async function* () { yield* [...files.keys()]; },
  };
}

describe("saving a check's videos (testing)", () => {
  afterEach(() => { vi.unstubAllGlobals(); });

  it("names each task's video and evidence, walking's videos and the results", () => {
    const files = checkFiles(
      [{ taskId: "T1", blob: new Blob(["v"], { type: "video/webm" }), evidence: { task_result: { task_id: "T1" } } }, { taskId: "H4", blob: new Blob(["v"], { type: "video/mp4" }) }],
      [{ view: "side", file: new File(["v"], "IMG_1.MOV", { type: "video/quicktime" }) }, { view: "front", file: new File(["v"], "front.mp4", { type: "video/mp4" }) }],
      { metrics: {} },
    );
    expect(files.map(file => file.name)).toEqual(["T1.webm", "T1.json", "H4.mp4", "L6-side.mov", "L6-front.mp4", "results.json"]);
    expect(files.every(file => CHECK_FILE.test(file.name))).toBe(true);
    expect(CHECK_FILE.test("notes.txt")).toBe(false);
  });

  it("writes them to the remembered folder, replacing the last check's and removing what this check did not make", async () => {
    const folder = fakeFolder(["T1.webm", "T3.webm", "T3.json", "notes.txt"]);
    // The folder chosen before (as IndexedDB would hand it back).
    vi.stubGlobal("window", { showDirectoryPicker: async () => folder });
    vi.stubGlobal("indexedDB", undefined);
    const files = checkFiles([{ taskId: "T1", blob: new Blob(["new"], { type: "video/webm" }) }], [], { ok: true });
    // Without a remembered folder and no click: nothing is asked.
    expect(await saveCheckFiles(files)).toEqual({ status: "needs_folder" });
    // From a click: the folder is chosen and written.
    expect(await saveCheckFiles(files, { choose: true })).toEqual({ status: "saved", folder: "rehyn-assessment-videos" });
    expect([...folder.files.keys()].sort()).toEqual(["T1.webm", "notes.txt", "results.json"]);
    expect(await folder.files.get("T1.webm")!.text()).toBe("new");
  });

  it("downloads the files where the browser cannot write to a folder", async () => {
    const clicked: string[] = [];
    vi.stubGlobal("window", {});
    vi.stubGlobal("document", { createElement: () => ({ set href(_v: string) {}, set download(v: string) { clicked.push(v); }, click() {}, remove() {} }), body: { append() {} } });
    vi.stubGlobal("URL", { createObjectURL: () => "blob:x", revokeObjectURL() {} });
    const files = checkFiles([{ taskId: "T1", blob: new Blob(["v"], { type: "video/webm" }) }], [], undefined);
    expect(await saveCheckFiles(files, { choose: true })).toEqual({ status: "downloaded" });
    expect(clicked).toEqual(["rehyn-T1.webm"]);
  });
});
