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
      for (const source of article.sources) expect(source.url).toMatch(/^https:\/\/(www\.)?(stroke\.org\.uk|stroke\.org|nhs\.uk|england\.nhs\.uk|gov\.uk|nice\.org\.uk|differentstrokes\.co\.uk|nhsinform\.scot|citizensadvice\.org\.uk|headway\.org\.uk|mynewsdesk\.com\/uk\/stroke-association|alzheimers\.org\.uk|alzheimersresearchuk\.org|lewybody\.org|parkinsons\.org\.uk|dementiauk\.org|tremor\.org\.uk|dystonia\.org\.uk|bhf\.org\.uk|bloodpressureuk\.org|heartrhythmalliance\.org|asthmaandlung\.org\.uk|sleep-apnoea-trust\.org|diabetes\.org\.uk|breakthrought1d\.org\.uk|btf-thyroid\.org|thyroiduk\.org|arthritis-uk\.org|nras\.org\.uk|theros\.org\.uk|csp\.org\.uk|flippinpain\.co\.uk|livewellwithpain\.co\.uk|anxietyuk\.org\.uk|thesleepcharity\.org\.uk|rcpsych\.ac\.uk|samaritans\.org|rethink\.org|giveusashout\.org|mind\.org\.uk|kidneycareuk\.org|kidney\.org\.uk|kidneyresearchuk\.org|liveruk\.org|gutscharity\.org\.uk|bda\.uk\.com|breastcancernow\.org|macmillan\.org\.uk|cancerresearchuk\.org|bowelcanceruk\.org\.uk|colostomyuk\.org|prostatecanceruk\.org|nidirect\.gov\.uk|api\.heartrhythmalliance\.org|flipbooks\.leedsth\.nhs\.uk|verity-pcos\.org\.uk|cks\.nice\.org\.uk|rcog\.org\.uk|assets\.publishing\.service\.gov\.uk|ukgoutsociety\.org|heartuk\.org\.uk|addisonsdisease\.org\.uk|lupusuk\.org\.uk|nass\.co\.uk|hse\.gov\.uk|fmauk\.org|paget\.org\.uk|changemh\.org|backcare\.org\.uk|rcseng\.ac\.uk|bess\.ac\.uk|york\.ac\.uk|southtees\.nhs\.uk|worcsacute\.nhs\.uk|wwl\.nhs\.uk|pandasfoundation\.org\.uk|ageuk\.org\.uk|reengage\.org\.uk|socialprescribingacademy\.org\.uk|chss\.org\.uk|ons\.gov\.uk|ptsduk\.org|pmrgca\.org\.uk|papaa\.org|psoriasisuk\.org\.uk|beateatingdisorders\.org\.uk|ocduk\.org|ocdaction\.org\.uk|cruse\.org\.uk|crohnsandcolitis\.org\.uk|lymphoedema\.org|rls-uk\.org|lymphoma-action\.org\.uk|bloodcancer\.org\.uk|baus\.org\.uk|bladderhealthuk\.org|bipolaruk\.org|drinkaware\.co\.uk|targetovariancancer\.org\.uk|ovarian\.org\.uk|cuh\.nhs\.uk|mentalhealth\.org\.uk|carersuk\.org|who\.int|myeloma\.org\.uk|hepctrust\.org\.uk|nhsbt\.nhs\.uk|bladderandbowel\.org|eveappeal\.org\.uk|theswallows\.org\.uk|roycastle\.org|actionbladdercanceruk\.org|mariecurie\.org\.uk|coeliac\.org\.uk|pancreaticcancer\.org\.uk|acas\.org\.uk|mentalhealth-uk\.org|hey\.nhs\.uk|gloshospitals\.nhs\.uk|rightdecisions\.scot\.nhs\.uk|harmless\.org\.uk|ssr\.org\.uk|haemochromatosis\.org\.uk|blood\.co\.uk|pkdcharity\.org\.uk|narcolepsy\.org\.uk|royal-osteoporosis-society\.uksouth01\.umbraco\.io|uhcw\.nhs\.uk|ruh\.nhs\.uk|nuh\.nhs\.uk|sfh-tr\.nhs\.uk|plymouthhospitals\.nhs\.uk|geh\.nhs\.uk|nth\.nhs\.uk|chelwest\.nhs\.uk|sjogrensuk\.org|sruk\.co\.uk|allergyuk\.org|nopanic\.org\.uk|topuk\.org|evidence\.nihr\.ac\.uk|royalberkshire\.nhs\.uk|rjah\.nhs\.uk|jpaget\.nhs\.uk|policyonline\.nhslothian\.scot|butterfly\.org\.uk|themenopausecharity\.org|mkuh\.nhs\.uk|ncic\.nhs\.uk|yorkhospitals\.nhs\.uk|whittington\.nhs\.uk|selfhelp\.cntw\.nhs\.uk|organdonation\.nhs\.uk|royaldevon\.nhs\.uk|mesothelioma\.uk\.com|orchid-cancer\.org\.uk|livercanceruk\.org|oxfordhealth\.nhs\.uk|pbcfoundation\.international|opa\.org\.uk|bad\.org\.uk|changingfaces\.org\.uk|teenagecancertrust\.org|fertilitynetworkuk\.org|cancerfertilityandme\.org\.uk|thebraintumourcharity\.org|hypermobility\.org|ehlers-danlos\.com|apcp\.csp\.org\.uk|bssh\.ac\.uk|gatesheadhealth\.nhs\.uk|leukaemiacare\.org\.uk|talktofrank\.com|changegrowlive\.org|smartrecovery\.org\.uk|ukna\.org|cocaineanonymous\.org\.uk|sarcoma\.org\.uk|respectphoneline\.org\.uk|samh\.org\.uk|autism\.org\.uk|adhduk\.co\.uk|gambleaware\.org|gamblingcommission\.gov\.uk|cnwl\.nhs\.uk|northerngamblingservice\.nhs\.uk|gamstop\.co\.uk|gamblersanonymous\.org\.uk|gamanon\.org\.uk|nationaldebtline\.org|digital\.nhs\.uk|uhsussex\.nhs\.uk|nlg\.nhs\.uk|pah\.nhs\.uk|ebi\.aomrc\.org\.uk|sbuhb\.nhs\.wales|stgeorges\.nhs\.uk|torbayandsouthdevon\.nhs\.uk|newcastle-hospitals\.nhs\.uk|esht\.nhs\.uk|bofas\.org\.uk|rcpod\.org\.uk|nhsfife\.org|kentcht\.nhs\.uk)\//);
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
