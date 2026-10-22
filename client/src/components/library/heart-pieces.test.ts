import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Router } from "wouter";
import { newsExtrasFor } from "@/content/ischaemic-news";
import { conditionItems, findCondition, findItem, isReadable, learnArticle } from "@/lib/library";
import ItemPage from "./ItemPage";

// The Heart & lungs pages, built the same way as the Brain pages and in the colours of their own card:
// every piece opens a checked answer as a feature with a picture of its own; Watch & listen and the
// stories are real videos.

const words = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ");
const PAGES: [string, string, string][] = [
  ["blood-pressure", "high-blood-pressure", "#B03A3A"],
  ["heart-attack", "heart-attack", "#9C2F55"],
  ["heart-attack", "angina", "#9C2F55"],
  ["heart-rhythm", "atrial-fibrillation", "#B8562A"],
  ["long-term-lung", "copd", "#2B6C8F"],
  ["long-term-lung", "asthma", "#2B6C8F"],
  ["sleep-breathing", "sleep-apnoea", "#4A4F9C"],
  ["blood-pressure", "low-blood-pressure", "#B03A3A"],
  ["heart-attack", "coronary-heart-disease", "#9C2F55"],
  ["heart-attack", "heart-failure", "#9C2F55"],
  ["heart-rhythm", "svt", "#B8562A"],
  ["heart-rhythm", "slow-heart-rate", "#B8562A"],
  ["heart-rhythm", "ectopic-beats", "#B8562A"],
  ["long-term-lung", "bronchiectasis", "#2B6C8F"],
  ["long-term-lung", "pulmonary-fibrosis", "#2B6C8F"],
  ["sleep-breathing", "snoring", "#4A4F9C"],
  // Diabetes & metabolism, built the same way.
  ["diabetes", "prediabetes", "#A15C0B"],
  ["diabetes", "type-1", "#A15C0B"],
  ["diabetes", "type-2", "#A15C0B"],
  ["thyroid", "underactive", "#2E7A6B"],
  ["thyroid", "overactive", "#2E7A6B"],
  ["diabetes", "gestational-diabetes", "#A15C0B"],
  ["diabetes", "hypoglycaemia", "#A15C0B"],
  ["thyroid", "nodules-goitre", "#2E7A6B"],
  ["cholesterol", "high-cholesterol", "#A0394F"],
  ["cholesterol", "familial-hypercholesterolaemia", "#A0394F"],
  ["weight", "obesity", "#557A1E"],
  ["hormones", "pcos", "#6A4C9C"],
  ["hormones", "addisons", "#6A4C9C"],
  ["gout-vitamins", "gout", "#2F6690"],
  ["gout-vitamins", "vitamin-d-deficiency", "#2F6690"],
  // Bones, joints & muscles.
  ["arthritis", "osteoarthritis", "#1F6B64"],
  ["arthritis", "rheumatoid", "#1F6B64"],
  ["arthritis", "psoriatic-arthritis", "#1F6B64"],
  ["arthritis", "axial-spondyloarthritis", "#1F6B64"],
  ["arthritis", "polymyalgia-rheumatica", "#1F6B64"],
  ["arthritis", "lupus", "#1F6B64"],
  ["arthritis", "giant-cell-arteritis", "#1F6B64"],
  ["arthritis", "sjogrens", "#1F6B64"],
  ["arthritis", "systemic-sclerosis", "#1F6B64"],
  ["bone-health", "osteoporosis", "#8A6A2E"],
  ["back-neck", "back-pain", "#3D5A8C"],
  ["bone-health", "hip-fracture", "#8A6A2E"],
  ["bone-health", "pagets-disease", "#8A6A2E"],
  ["bone-health", "wrist-fracture", "#8A6A2E"],
  ["bone-health", "ankle-fracture", "#8A6A2E"],
  ["back-neck", "neck-pain", "#3D5A8C"],
  ["back-neck", "spinal-stenosis", "#3D5A8C"],
  ["back-neck", "slipped-disc", "#3D5A8C"],
  ["back-neck", "scoliosis", "#3D5A8C"],
  ["muscles", "fibromyalgia", "#A2483A"],
  ["muscles", "frozen-shoulder", "#A2483A"],
  ["joint-replacement", "hip-replacement", "#4C6B7A"],
  ["joint-replacement", "knee-replacement", "#4C6B7A"],
  ["joint-replacement", "shoulder-replacement", "#4C6B7A"],
  ["muscles", "rotator-cuff", "#A2483A"],
  ["muscles", "bursitis", "#A2483A"],
  ["muscles", "hypermobility", "#A2483A"],
  ["feet-tendons", "trigger-finger", "#6E6A1E"],
  ["feet-tendons", "de-quervains", "#6E6A1E"],
  ["feet-tendons", "achilles", "#6E6A1E"],
  ["feet-tendons", "bunions", "#6E6A1E"],
  ["injuries", "sprains-strains", "#8C4A7A"],
  ["injuries", "knee-ligament", "#8C4A7A"],
  ["injuries", "meniscus", "#8C4A7A"],
  ["feet-tendons", "tennis-elbow", "#6E6A1E"],
  ["feet-tendons", "plantar-fasciitis", "#6E6A1E"],
  // Cancer, Mind and Kidneys, liver & digestion.
  ["anxiety", "anxiety", "#2A7383"],
  ["depression", "depression", "#35458C"],
  ["depression", "after-stroke", "#35458C"],
  ["sleep", "insomnia", "#5B4A9A"],
  ["depression", "seasonal-affective-disorder", "#35458C"],
  ["depression", "postnatal-depression", "#35458C"],
  ["anxiety", "ocd", "#2A7383"],
  ["anxiety", "ptsd", "#2A7383"],
  ["sleep", "restless-legs", "#5B4A9A"],
  ["bipolar-psychosis", "bipolar", "#8A3F7A"],
  ["bipolar-psychosis", "psychosis", "#8A3F7A"],
  ["stress-grief", "stress", "#4F6E8A"],
  ["stress-grief", "grief", "#4F6E8A"],
  ["stress-grief", "loneliness", "#4F6E8A"],
  ["alcohol", "alcohol", "#A0522D"],
  ["eating-disorders", "eating-disorders", "#2E7D5B"],
  ["common-cancers", "breast", "#963A66"],
  ["common-cancers", "bowel", "#963A66"],
  ["common-cancers", "prostate", "#963A66"],
  ["after-treatment", "cancer-fatigue", "#A9553A"],
  ["common-cancers", "lung", "#963A66"],
  ["common-cancers", "melanoma", "#963A66"],
  ["blood-cancers", "lymphoma", "#A3333F"],
  ["blood-cancers", "leukaemia", "#A3333F"],
  ["blood-cancers", "myeloma", "#A3333F"],
  ["womens-cancers", "ovarian", "#7E4594"],
  ["womens-cancers", "womb", "#7E4594"],
  ["womens-cancers", "cervical", "#7E4594"],
  ["other-cancers", "head-neck", "#3F6188"],
  ["other-cancers", "bladder-cancer", "#3F6188"],
  ["other-cancers", "kidney-cancer", "#3F6188"],
  ["other-cancers", "pancreatic", "#3F6188"],
  ["after-treatment", "lymphoedema", "#A9553A"],
  ["advanced-cancer", "secondary-cancer", "#5E6B3A"],
  ["common-cancers", "skin-cancer", "#963A66"],  // Cancer & recovery, second round.
  ["blood-cancers", "mds", "#A3333F"],
  ["womens-cancers", "vulval", "#7E4594"],
  ["mens-cancers", "testicular", "#2E6E7E"],
  ["mens-cancers", "penile", "#2E6E7E"],
  ["digestive-cancers", "oesophageal", "#9A5B1E"],
  ["digestive-cancers", "stomach-cancer", "#9A5B1E"],
  ["digestive-cancers", "liver-cancer", "#9A5B1E"],
  ["other-cancers", "thyroid-cancer", "#3F6188"],
  ["rarer-cancers", "brain-tumours", "#5A4E8C"],
  ["rarer-cancers", "sarcoma", "#5A4E8C"],
  ["rarer-cancers", "mesothelioma", "#5A4E8C"],
  ["after-treatment", "brain-fog", "#A9553A"],
  ["after-treatment", "fear-of-recurrence", "#A9553A"],
  ["after-treatment", "fertility-after-cancer", "#A9553A"],
  ["after-treatment", "late-effects", "#A9553A"],
  ["advanced-cancer", "bone-metastases", "#5E6B3A"],
  ["advanced-cancer", "caring-advanced", "#5E6B3A"],
  ["kidneys", "chronic-kidney-disease", "#4F6A14"],
  ["liver", "fatty-liver", "#93402F"],
  ["gut", "ibs", "#82508A"],
  ["kidneys", "kidney-stones", "#4F6A14"],
  ["kidneys", "acute-kidney-injury", "#4F6A14"],
  ["bladder", "urinary-incontinence", "#2F6F8F"],
  ["bladder", "enlarged-prostate", "#2F6F8F"],
  ["bladder", "uti", "#2F6F8F"],
  ["liver", "cirrhosis", "#93402F"],
  ["liver", "alcohol-related-liver-disease", "#93402F"],
  ["liver", "hepatitis-b-c", "#93402F"],
  ["stomach", "acid-reflux", "#B0612A"],
  ["stomach", "stomach-ulcers", "#B0612A"],
  ["stomach", "gallstones", "#B0612A"],
  ["stomach", "pancreatitis", "#B0612A"],
  ["gut", "coeliac-disease", "#82508A"],
  ["gut", "diverticular-disease", "#82508A"],
  ["gut", "constipation", "#82508A"],
  ["ibd", "crohns-disease", "#A8466B"],
  ["ibd", "ulcerative-colitis", "#A8466B"],
  // Mind & mood, second round.
  ["depression", "perimenopause-mood", "#35458C"],
  ["depression", "self-harm", "#35458C"],
  ["anxiety", "panic-disorder", "#2A7383"],
  ["anxiety", "health-anxiety", "#2A7383"],
  ["anxiety", "social-anxiety", "#2A7383"],
  ["anxiety", "phobias", "#2A7383"],
  ["sleep", "narcolepsy", "#5B4A9A"],
  ["bipolar-psychosis", "schizophrenia", "#8A3F7A"],
  ["bipolar-psychosis", "personality-disorder", "#8A3F7A"],
  ["stress-grief", "burnout", "#4F6E8A"],
  ["stress-grief", "carer-stress", "#4F6E8A"],
  ["stress-grief", "anger", "#4F6E8A"],
  ["alcohol", "drug-use", "#A0522D"],
  ["alcohol", "gambling", "#A0522D"],
  ["alcohol", "quitting-smoking", "#A0522D"],
  ["eating-disorders", "binge-eating", "#2E7D5B"],
  ["eating-disorders", "arfid", "#2E7D5B"],
  ["adhd-autism", "adhd", "#1F6F9A"],
  ["adhd-autism", "autism", "#1F6F9A"],
];

// Where no real, verified people's stories could be found, fewer are shown rather than padding with adverts or
// unverified personal videos.
const FEWER_STORIES: Record<string, number> = { burnout: 1, "binge-eating": 1, arfid: 1, "health-anxiety": 1, "self-harm": 2, "perimenopause-mood": 1, "tennis-elbow": 0, "plantar-fasciitis": 0, "neck-pain": 2, "spinal-stenosis": 2, "frozen-shoulder": 1, "polymyalgia-rheumatica": 1, "hip-fracture": 2, "wrist-fracture": 0, "ankle-fracture": 0, "sjogrens": 2, "rotator-cuff": 2, "bursitis": 0, "trigger-finger": 0, "sprains-strains": 1, "knee-ligament": 2, "de-quervains": 0, "achilles": 0, "bunions": 0, "ectopic-beats": 1, "vitamin-d-deficiency": 0, "seasonal-affective-disorder": 0, loneliness: 2, "constipation": 2, "pancreatitis": 2, uti: 0, "diverticular-disease": 1, "stomach-ulcers": 1, gallstones: 0, "acute-kidney-injury": 0, "kidney-stones": 2, "ulcerative-colitis": 2, "enlarged-prostate": 0, "urinary-incontinence": 1, penile: 2, vulval: 2, "brain-fog": 2 };

describe("the Heart & lungs pages", () => {
  for (const [groupId, conditionId, ink] of PAGES) {
    const page = findCondition(groupId, conditionId)!;
    const own = conditionItems(page.condition).filter(({ item }) => !item.url);
    const render = (itemId: string) => renderToStaticMarkup(createElement(Router, { ssrPath: `/${groupId}/${conditionId}/${itemId}` }, createElement(ItemPage, { place: findItem(groupId, conditionId, itemId)! })));

    it(`${conditionId}: opens every piece as a feature in its card's colours, with a picture of its own`, () => {
      expect(own.length).toBeGreaterThan(10);
      const pictures: string[] = [];
      for (const { item } of own) {
        expect(isReadable(item), item.id).toBe(true);
        const learn = learnArticle(item)!;
        const extras = newsExtrasFor(conditionId, item.id, learn.id);
        expect(extras, item.id).toBeDefined();
        const figure = extras!.figure;
        expect(figure?.art, item.id).toBe("custom");
        if (figure?.art === "custom") pictures.push(figure.id);
        const html = render(item.id);
        expect(html, item.id).toContain('class="lib-page lib-news is-light"');
        expect(html, item.id).toContain(`--t-ink:${ink}`);
        const text = words(html);
        expect(text, item.id).not.toMatch(/coming soon/i);
        expect(text, item.id).toContain(extras!.headline);
        // The pull quote is the answer's own words (it may stop before the end of the sentence).
        if (extras!.pullQuote) expect(JSON.stringify(learn), item.id).toContain(extras!.pullQuote.replace(/\.$/, ""));
        // Like the stroke features: a numbered source beside every paragraph and every "What helps" line,
        // and something to try beside the quick check.
        const refs = extras!.sectionRefs!;
        expect(refs, item.id).toHaveLength(learn.sections.length);
        learn.sections.forEach((section, at) => {
          expect(refs[at], `${item.id} section ${at}`).toHaveLength(section.paragraphs.length);
          for (const numbers of refs[at]) {
            expect(numbers.length, `${item.id} section ${at}`).toBeGreaterThan(0);
            for (const number of numbers) expect(number >= 1 && number <= learn.sources.length, `${item.id} ref ${number}`).toBe(true);
          }
        });
        expect(extras!.helpRefs, item.id).toHaveLength(learn.helps.length);
        for (const numbers of extras!.helpRefs!) for (const number of numbers) expect(number >= 1 && number <= learn.sources.length, `${item.id} help ref ${number}`).toBe(true);
        expect(learn.interactive, item.id).toBeDefined();
        expect(html, item.id).toContain('class="lib-news-ref"');
      }
      expect(new Set(pictures).size, conditionId).toBe(pictures.length);
    });

    it(`${conditionId}: lists real videos and real people's stories`, () => {
      const content = page.condition.content!;
      for (const item of content.watch) expect(item.url, item.id).toMatch(/^https:\/\/www\.youtube\.com\/watch\?v=/);
      // Three where real, verified stories exist; never padded with adverts or unverified ones.
      expect(content.videoStories?.length ?? 0).toBeGreaterThanOrEqual(FEWER_STORIES[conditionId] ?? 3);
      expect(content.videoStories?.length ?? 0).toBeLessThanOrEqual(3);
    });
  }
});
