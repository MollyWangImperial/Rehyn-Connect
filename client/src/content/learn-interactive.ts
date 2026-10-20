// The hands-on parts of a written answer in the Library (content/my-time-learn.ts and
// content/ischaemic-answers.ts), drawn by components/library/Interactives.tsx. Types only, so the
// content files can import them without importing each other.

export type QuickCheck = {
  question: string;
  options: { text: string; right?: boolean }[];
  /** Said once an option is chosen, right or wrong. */
  why: string;
};

export type DrivingRules = {
  /** The page the rules are copied from. */
  source: { label: string; url: string };
  car: { stop: string; ask: string; checks: string[]; tell: string; noTell: string };
  bus: string;
  fine: string;
};

export type LearnInteractive =
  /** Tap a side of the brain to see which side of the body it moves. */
  | { kind: "brain-sides"; title: string; left: string; right: string; note: string }
  /** Tick the risk factors that apply; each says what can be done about it. */
  | { kind: "risk-check"; title: string; intro: string; items: { id: string; label: string; note: string; changeable: boolean }[] }
  /** The three kinds side by side, with a moving picture of each. */
  | { kind: "compare"; title: string; types: { id: "ischaemic" | "haemorrhagic" | "tia"; name: string; share: string; what: string; signs: string; next: string }[] }
  /** Cards that turn over: the test on the front, what it looks for on the back. */
  | { kind: "flip-cards"; title: string; intro: string; cards: { id: string; front: string; when: string; back: string }[] }
  /** A slider through the weeks, one stop at a time. */
  | { kind: "timeline"; title: string; steps: { id: string; when: string; title: string; points: string[] }[] }
  /** Which licence, then which effects remain: what the rules say for you. */
  | { kind: "driving"; title: string; rules: DrivingRules }
  /** Three dates in, a short note to your employer out, ready to copy. */
  | { kind: "employer-note"; title: string; intro: string; policyAsk: string }
  /** Signs to tick; the ones ticked become a list to tell the team, copied under `copyHeading`. */
  | { kind: "signs"; title: string; intro: string; signs: string[]; after: string; copyHeading?: string }
  /** Everyday moments, each with a choice and what helps most. */
  | { kind: "scenarios"; title: string; scenarios: { id: string; situation: string; options: { text: string; best?: boolean }[]; why: string }[] };
