import { describe, expect, it } from "vitest";
import { learnArticles, trustedPlaces } from "./my-time-learn";
import { splitSentences } from "@/lib/alira-read-aloud";

// The checked answers the Library opens (content/library.ts `learnId`).
describe("the checked answers", () => {
  it("gives every article a hook, a short answer, things that help and a source to check", () => {
    expect(new Set(learnArticles.map(article => article.id)).size).toBe(learnArticles.length);
    for (const article of learnArticles) {
      expect(article.question.endsWith("?"), article.id).toBe(true);
      expect(article.hook.length, article.id).toBeGreaterThan(30);
      expect(article.short.length, article.id).toBeGreaterThan(80);
      expect(article.sections.length, article.id).toBeGreaterThan(0);
      expect(article.helps.length, article.id).toBeGreaterThan(2);
      expect(article.sources.length, article.id).toBeGreaterThan(0);
      // GOV.UK sets the driving rules and runs the benefits, so it is the source for them; NICE sets the
      // national guidance on treatment. Stroke under 50 also draws on Different Strokes (run for younger
      // survivors), NHS inform, Citizens Advice, Headway and the Stroke Association's own newsroom. The
      // Dementia pages draw on the Alzheimer's Society, Alzheimer's Research UK, the Lewy Body Society and
      // Parkinson's UK. The Heart & lungs pages draw on the British Heart Foundation, Blood Pressure UK, the
      // Arrhythmia Alliance, Asthma + Lung UK and the Sleep Apnoea Trust; the Diabetes & metabolism pages on
      // Diabetes UK, Breakthrough T1D UK, NHS England and the thyroid charities.
      for (const source of article.sources) expect(source.url).toMatch(/^https:\/\/(www\.)?(stroke\.org\.uk|stroke\.org|nhs\.uk|england\.nhs\.uk|gov\.uk|nice\.org\.uk|differentstrokes\.co\.uk|nhsinform\.scot|citizensadvice\.org\.uk|headway\.org\.uk|mynewsdesk\.com\/uk\/stroke-association|alzheimers\.org\.uk|alzheimersresearchuk\.org|lewybody\.org|parkinsons\.org\.uk|dementiauk\.org|tremor\.org\.uk|dystonia\.org\.uk|bhf\.org\.uk|bloodpressureuk\.org|heartrhythmalliance\.org|asthmaandlung\.org\.uk|sleep-apnoea-trust\.org|diabetes\.org\.uk|breakthrought1d\.org\.uk|btf-thyroid\.org|thyroiduk\.org|arthritis-uk\.org|nras\.org\.uk|theros\.org\.uk|csp\.org\.uk|flippinpain\.co\.uk|livewellwithpain\.co\.uk|anxietyuk\.org\.uk|thesleepcharity\.org\.uk|rcpsych\.ac\.uk|samaritans\.org|rethink\.org|giveusashout\.org|mind\.org\.uk|kidneycareuk\.org|kidney\.org\.uk|kidneyresearchuk\.org|liveruk\.org|gutscharity\.org\.uk|bda\.uk\.com|breastcancernow\.org|macmillan\.org\.uk|cancerresearchuk\.org|bowelcanceruk\.org\.uk|colostomyuk\.org|prostatecanceruk\.org)\//);
    }
    for (const place of trustedPlaces) expect(place.url).toMatch(/^https:\/\//);
  });

  it("splits what is read aloud into whole sentences", () => {
    expect(splitSentences("No. The fastest recovery comes first. Is there a deadline?")).toEqual(["No.", "The fastest recovery comes first.", "Is there a deadline?"]);
    expect(splitSentences("The note said, “For your garden.” She laughed")).toEqual(["The note said, “For your garden.”", "She laughed"]);
    expect(splitSentences("  ")).toEqual([]);
    for (const article of learnArticles) for (const section of article.sections) for (const paragraph of section.paragraphs) {
      expect(splitSentences(paragraph).join(" "), article.id).toBe(paragraph);
    }
  });
});
