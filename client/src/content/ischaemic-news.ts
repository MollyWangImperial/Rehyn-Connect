// The Ischaemic stroke answers as magazine features ("A Blocked Supply Line" design): what a feature
// adds to its checked answer (content/ischaemic-answers.ts). An answer without an entry here uses its
// own question, short answer, headings and sources. The words of the feature are the answer's own.

export type NewsReference = { publisher: string; title: string; url: string; extra?: string };

export type NewsChart =
  /** Horizontal bars, out of every 100. */
  | { kind: "bars"; title: string; subtitle: string; bars: { label: string; value: number; strong?: boolean }[]; sources: string }
  /** A range on a line from 0 to 100. */
  | { kind: "range"; title: string; subtitle: string; from: number; to: number; sources: string };

export type NewsExtras = {
  /** The line above the headline: "Understanding stroke | Inside the brain". */
  kicker: [string, string];
  headline: string;
  standfirst: string;
  /** Numbered references; each number can cite more than one page. */
  references: NewsReference[][];
  /** Reference numbers beside each paragraph: `sectionRefs[i][j]` for section i, paragraph j. */
  sectionRefs: number[][][];
  /** Reference numbers beside each "What helps now" line. */
  helpRefs: number[][];
  /** Headings in place of the answer's own, by section (the first section has none). */
  headings?: string[];
  /** The full-width illustration under the headline. */
  figure?: { art: "clot"; words: [string, string] };
  /** Charts after a section, by section index. */
  charts?: Record<number, NewsChart>;
  pullQuote?: string;
};

const NHS_STROKE: NewsReference = { publisher: "NHS", title: "Stroke: overview", url: "https://www.nhs.uk/conditions/stroke/" };
const SA_ISCHAEMIC: NewsReference = { publisher: "Stroke Association", title: "Ischaemic stroke", url: "https://www.stroke.org.uk/stroke/types/ischaemic" };

export const NEWS_EXTRAS: Record<string, NewsExtras> = {
  "isch-what-happens": {
    kicker: ["Understanding stroke", "Inside the brain"],
    headline: "A blocked supply line",
    standfirst: "What actually happens in the brain during an ischaemic stroke — and why minutes mattered on the day",
    references: [
      [NHS_STROKE, SA_ISCHAEMIC],
      [
        { publisher: "National Institute for Health and Care Excellence (NICE)", title: "Stroke and transient ischaemic attack in over 16s: diagnosis and initial management (NG128)", url: "https://www.nice.org.uk/guidance/ng128" },
        { publisher: "Intercollegiate Stroke Working Party", title: "National Clinical Guideline for Stroke for the UK and Ireland", url: "https://www.strokeguideline.org/", extra: "2023" },
      ],
      [
        { publisher: "Stroke Association", title: "Ischaemic stroke treatments", url: "https://www.stroke.org.uk/stroke/types/ischaemic/treatments" },
        { publisher: "Sentinel Stroke National Audit Programme (SSNAP)", title: "National results", url: "https://www.strokeaudit.org/" },
      ],
      [{ publisher: "American Stroke Association", title: "Effects of stroke", url: "https://www.stroke.org/en/about-stroke/effects-of-stroke" }],
      [{ publisher: "NHS", title: "Stroke: symptoms", url: "https://www.nhs.uk/conditions/stroke/symptoms/" }],
    ],
    sectionRefs: [
      [[1], [1]],
      [[2], [3]],
      [[], [4]],
      [[1], [4]],
    ],
    helpRefs: [[5], [], [2]],
    headings: ["", "Against the clock", "Crossed wires", "After the clot"],
    figure: { art: "clot", words: ["Downstream of the clot,", "cells run out of oxygen."] },
    charts: {
      0: { kind: "bars", title: "Most strokes are caused by a blockage", subtitle: "Strokes in the UK, by cause, out of every 100", bars: [{ label: "Ischaemic (blockage)", value: 85, strong: true }, { label: "Other, mostly bleeds", value: 15 }], sources: "Sources: NHS; Stroke Association" },
      1: { kind: "range", title: "A narrow window", subtitle: "People able to have clot-busting or clot removal, out of every 100", from: 10, to: 15, sources: "Sources: Stroke Association; Sentinel Stroke National Audit Programme" },
    },
    pullQuote: "The brain cells that died do not grow back. But the brain can rewire itself.",
  },
};
