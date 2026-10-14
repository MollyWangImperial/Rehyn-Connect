import { allConditions, allItems, conditionHref, contentTitle, itemHref, itemMeta, learnArticle } from "./library";

// Searching the Library on the device: conditions and the pieces written about them. Each word of
// the question is looked for in the title, then in the words people use for it, then in the rest.
// Pieces that match every word come first; a question such as "why am I so tired after my stroke?"
// is reduced to the words that carry it ("tired", "stroke").

export type SearchHit = {
  kind: "condition" | "item";
  title: string;
  /** "Brain & nervous system · Stroke", or "Ischaemic stroke · Recover · Video · 6 min". */
  where: string;
  href: string;
  score: number;
};

const STOP_WORDS = new Set([
  "a", "about", "after", "am", "an", "and", "are", "as", "at", "be", "can", "did", "do", "does", "for", "from", "get", "had", "has", "have",
  "how", "i", "if", "in", "is", "it", "its", "me", "my", "now", "of", "on", "or", "so", "still", "than", "that", "the", "this", "to", "too",
  "very", "was", "what", "when", "where", "which", "who", "why", "will", "with", "you", "your", "im", "ive",
]);

/** Lower case, without apostrophes or punctuation, with simple plurals made singular. */
export function searchWords(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[’'`]/g, "")
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
    .map(word => (word.length > 3 && word.endsWith("s") && !word.endsWith("ss") ? word.slice(0, -1) : word));
}

/** The words of a question worth looking for. */
export function queryWords(query: string): string[] {
  return searchWords(query).filter((word, at, all) => !STOP_WORDS.has(word) && all.indexOf(word) === at);
}

type Entry = { kind: SearchHit["kind"]; title: string; where: string; href: string; fields: [string[], string[], string[]] };

let index: Entry[] | null = null;
function buildIndex(): Entry[] {
  const conditions: Entry[] = allConditions().map(({ section, group, condition }) => ({
    kind: "condition",
    title: condition.title,
    where: `${section.title} · ${group.title}`,
    href: conditionHref(group.id, condition.id),
    fields: [
      searchWords(condition.title),
      searchWords([...(condition.keywords ?? []), ...(group.keywords ?? []), group.title].join(" ")),
      searchWords([condition.summary ?? "", group.blurb, section.title].join(" ")),
    ],
  }));
  const items: Entry[] = allItems().map(place => {
    const learn = learnArticle(place.item);
    return {
      kind: "item",
      title: place.item.title,
      where: [place.condition.title, contentTitle(place.type, place.condition), itemMeta(place.item)].filter(Boolean).join(" · "),
      href: itemHref(place),
      fields: [
        searchWords(place.item.title),
        searchWords([...(place.item.keywords ?? []), learn?.question ?? ""].join(" ")),
        searchWords([place.item.blurb ?? "", place.condition.title, ...(place.condition.keywords ?? []), place.group.title, learn?.hook ?? ""].join(" ")),
      ],
    };
  });
  return [...conditions, ...items];
}

const WEIGHTS = [3, 2, 1];
/** A word matches a word in the text that starts with it, so "park" finds "parkinsons". */
const has = (field: string[], word: string) => field.some(candidate => candidate === word || (word.length >= 3 && candidate.startsWith(word)));

/** Conditions and pieces that match the question, best first. */
export function searchLibrary(query: string, limit = 12): SearchHit[] {
  const words = queryWords(query);
  if (!words.length) return [];
  index ??= buildIndex();
  const hits: (SearchHit & { matched: number; order: number })[] = [];
  index.forEach((entry, order) => {
    let score = 0;
    let matched = 0;
    for (const word of words) {
      const weight = entry.fields.reduce((best, field, at) => (has(field, word) ? Math.max(best, WEIGHTS[at]) : best), 0);
      if (weight) { matched += 1; score += weight; }
    }
    if (matched) hits.push({ kind: entry.kind, title: entry.title, where: entry.where, href: entry.href, score, matched, order });
  });
  return hits
    .sort((a, b) => b.matched - a.matched || b.score - a.score || a.order - b.order)
    .slice(0, limit)
    .map(({ matched: _matched, order: _order, ...hit }) => hit);
}
