import { Fragment, useEffect, useMemo, useRef } from "react";
import { splitSentences, useReadAloud, type ReadAloud } from "@/lib/alira-read-aloud";
import { AliraMark, PauseIcon, PlayIcon } from "./parts";

// Reading a long piece aloud in the Library (an answer, a story, a letter): a listen bar, and the
// sentence Alira is reading lit on the page.

export type Block = { key: string; text: string };
export type Narration = { lines: string[]; starts: Record<string, number> };

export function narrateBlocks(blocks: Block[]): Narration {
  const lines: string[] = [];
  const starts: Record<string, number> = {};
  blocks.forEach(block => {
    starts[block.key] = lines.length;
    splitSentences(block.text).forEach(line => lines.push(line));
  });
  return { lines, starts };
}

/** The blocks of a page, how they are read, and Alira reading them. */
export function useNarration(blocks: Block[]) {
  const narration = useMemo(() => narrateBlocks(blocks), [blocks]);
  const reading = useReadAloud(narration.lines, true);
  const text = useMemo(() => Object.fromEntries(blocks.map(block => [block.key, block.text] as const)), [blocks]);
  /** One block's words, with the sentence being read lit. */
  const say = (key: string) => <Lit narration={narration} reading={reading} block={key} text={text[key] ?? ""} />;
  return { narration, reading, say };
}

function Lit({ narration, reading, block, text }: { narration: Narration; reading: ReadAloud; block: string; text: string }) {
  const current = useRef<HTMLSpanElement>(null);
  const start = narration.starts[block] ?? -1;
  const sentences = splitSentences(text);
  const mine = start >= 0 && reading.index >= start && reading.index < start + sentences.length ? reading.index - start : -1;
  useEffect(() => {
    const node = current.current;
    if (mine < 0 || !reading.playing || !node) return;
    // Only move the page when the sentence has left comfortable view, so it does not jump at every line.
    const box = node.getBoundingClientRect();
    const height = window.innerHeight || document.documentElement.clientHeight;
    if (box.top >= height * 0.18 && box.bottom <= height * 0.82) return;
    const still = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    node.scrollIntoView({ block: "center", behavior: still ? "auto" : "smooth" });
  }, [mine, reading.playing]);
  return <>{sentences.map((line, index) => <Fragment key={index}>
    {index > 0 ? " " : null}
    <span ref={index === mine ? current : undefined} className={index === mine ? "lib-sen is-current" : "lib-sen"}>{line}</span>
  </Fragment>)}</>;
}

/** Play, pause and a slower voice, with how far through Alira is. */
export function ListenBar({ reading, total, label }: { reading: ReadAloud; total: number; label: string }) {
  const progress = reading.index >= 0 && total ? (reading.index + 1) / total : reading.done ? 1 : 0;
  return <div className={`lib-listen${reading.playing ? " is-playing" : ""}`} role="group" aria-label={label}>
    <button type="button" className="lib-listen-play" onClick={reading.toggle} aria-label={reading.playing ? "Pause Alira" : reading.index > 0 ? "Carry on listening" : `Listen: ${label}`}>
      {reading.playing ? <PauseIcon size={22} /> : <PlayIcon size={22} />}
    </button>
    <div className="lib-listen-words">
      <p className="lib-listen-title"><AliraMark reading={reading.playing} />{reading.playing ? "Alira is reading" : reading.index > 0 ? "Paused" : "Alira can read this to you"}</p>
      <span className="lib-listen-track" aria-hidden="true"><i style={{ width: `${Math.round(progress * 100)}%` }} /></span>
    </div>
    <button type="button" role="switch" aria-checked={reading.slow} className="lib-switch" onClick={() => reading.setSlow(!reading.slow)}>
      Slower voice<span className="lib-switch-track" aria-hidden="true"><i /></span>
    </button>
    <p className="lib-sr" role="status">{reading.note}</p>
  </div>;
}
