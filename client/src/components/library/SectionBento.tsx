import { useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "wouter";
import type { LibraryGroup, LibrarySection } from "@/content/library";
import { conditionHref, sectionStories } from "@/lib/library";
import { readLocal } from "@/lib/library-local";
import { BONES_PALETTES, CANCER_PALETTES, DIGESTION_PALETTES, HEART_PALETTES, METABOLISM_PALETTES, MIND_PALETTES } from "@/lib/library-theme";
import { Crumbs } from "./parts";

// The Brain & nervous system page as a "bento" (brain-section-bento.html): a dark header with
// drifting brain-fold lines, then one group in a large tile and the others in small tiles. Choosing
// a small tile (anywhere on it) moves that group into the large tile; its conditions are links only
// there. The colours, symbols and short chip labels are this page's own; everything else comes
// from the section's groups in content/library.ts.

/** `light`: the large tile keeps the small card's pale colour, with dark words, instead of turning dark. */
type BentoStyle = { ink: string; tint: string; text: string; muted: string; short: string; chips: string[]; symbol: ReactNode; light?: boolean };

const BRAIN: Record<string, BentoStyle> = {
  stroke: { ink: "#4A3F9C", tint: "#EEEBFA", text: "#2F2770", muted: "#4D4580", short: "When blood stops reaching part of the brain.", chips: ["Ischaemic", "Haemorrhagic", "TIA", "Under 50"], symbol: <>
    <path d="M100 45 C75 28, 42 44, 44 80 C32 96, 36 128, 56 138 C60 164, 90 170, 100 152" />
    <path d="M100 45 C125 28, 158 44, 156 80 C168 96, 164 128, 144 138 C140 164, 110 170, 100 152" />
    <path d="M20 186 C50 170, 66 150, 84 132 C96 120, 110 112, 128 100" />
    <circle cx="128" cy="100" r="10" fill="#F2B8A5" stroke="none" />
  </> },
  dementia: { light: true, ink: "#6A3E9E", tint: "#F1E9FB", text: "#4E2C7A", muted: "#5B4A72", short: "Memory, thinking and language changes beyond ordinary ageing.", chips: ["Alzheimer's", "Vascular", "Lewy body", "Mild cognitive impairment"], symbol: <>
    <path d="M82 176 V142 L56 136 L70 110 C44 70, 70 32, 112 32 C152 32, 172 64, 162 104 L172 124 L152 130 L148 176" />
    <path d="M114 86 a8 8 0 1 1 8 8 a16 16 0 1 1 -16 -16 a24 24 0 1 1 24 24" />
  </> },
  parkinsons: { light: true, ink: "#34509E", tint: "#E7ECFB", text: "#233A78", muted: "#3E4C78", short: "Tremor, stiffness and slowness, and what helps.", chips: ["Parkinson's disease", "Essential tremor", "Dystonia"], symbol: <>
    <path d="M70 112 V58 a9 9 0 0 1 18 0 V104 M88 100 V44 a9 9 0 0 1 18 0 V100 M106 100 V50 a9 9 0 0 1 18 0 V104 M124 106 V70 a9 9 0 0 1 18 0 V140 C142 162, 132 176, 112 176 H92 C78 176, 70 166, 64 156 L40 120 a9 9 0 0 1 14 -10 L70 128 Z" />
    <path d="M28 60 q-8 10 0 20 M16 50 q-12 20 0 40 M168 60 q8 10 0 20 M180 50 q12 20 0 40" />
  </> },
  "multiple-sclerosis": { ink: "#1F6476", tint: "#E4F1F4", text: "#164E5C", muted: "#2F5C66", short: "An immune condition of the nerves, in different patterns.", chips: ["Relapsing-remitting MS", "Progressive MS"], symbol: <>
    <circle cx="40" cy="100" r="18" />
    <path d="M30 84 L18 62 M28 114 L14 132 M48 84 L56 60 M58 100 H190" />
    <rect x="68" y="88" width="26" height="24" rx="12" /><rect x="102" y="88" width="26" height="24" rx="12" strokeDasharray="6 6" /><rect x="136" y="88" width="26" height="24" rx="12" />
  </> },
  epilepsy: { ink: "#A8402B", tint: "#FBEDE7", text: "#7E2F1F", muted: "#7A4535", short: "Including seizures after a stroke or brain injury.", chips: ["Focal", "Generalised", "After stroke"], symbol: <>
    <path d="M100 40 C70 26, 40 44, 42 76 C30 92, 34 124, 54 134 C58 158, 86 166, 100 150 C114 166, 142 158, 146 134 C166 124, 170 92, 158 76 C160 44, 130 26, 100 40 Z" />
    <path d="M30 100 H62 L72 78 L84 122 L96 64 L108 136 L120 82 L130 110 L138 100 H170" />
  </> },
  "brain-spinal-injury": { ink: "#3E4B5E", tint: "#ECEFF4", text: "#2C394C", muted: "#4A5568", short: "Recovery after a head injury or spinal cord damage.", chips: ["Brain injury", "Concussion", "Spinal cord"], symbol: <>
    <rect x="78" y="18" width="44" height="20" rx="8" /><rect x="76" y="48" width="48" height="20" rx="8" /><rect x="74" y="78" width="52" height="20" rx="8" />
    <rect x="74" y="108" width="52" height="20" rx="8" /><rect x="76" y="138" width="48" height="20" rx="8" /><rect x="80" y="168" width="40" height="20" rx="8" />
    <path d="M74 88 H52 M126 88 H148 M74 118 H52 M126 118 H148" />
  </> },
  headache: { ink: "#8A5A12", tint: "#FBF0DC", text: "#6B450C", muted: "#6E5228", short: "Telling a migraine from a headache that is urgent.", chips: ["Migraine", "Tension headache"], symbol: <>
    <path d="M82 176 V142 L56 136 L70 110 C44 70, 70 32, 112 32 C152 32, 172 64, 162 104 L172 124 L152 130 L148 176" />
    <path d="M126 56 L108 88 H128 L110 122" />
    <path d="M150 46 l8 -10 M164 62 l12 -4 M164 82 l12 4" />
  </> },
  nerves: { ink: "#4B7A2E", tint: "#EAF3E4", text: "#36591F", muted: "#46603A", short: "Numbness, tingling, weakness or pain along a nerve.", chips: ["Neuropathy", "Bell's palsy", "Sciatica", "Carpal tunnel"], symbol: <>
    <path d="M100 186 V110 M100 110 L70 70 M100 110 L130 70 M70 70 L48 38 M70 70 L82 30 M130 70 L118 30 M130 70 L156 42 M100 142 L66 162 M100 142 L136 164" />
    <circle cx="48" cy="38" r="7" /><circle cx="82" cy="30" r="7" /><circle cx="118" cy="30" r="7" /><circle cx="156" cy="42" r="7" /><circle cx="66" cy="162" r="7" /><circle cx="136" cy="164" r="7" />
  </> },
};

// The Heart & lungs page: the same bento, in reds for the heart and blues for breathing. Each group's
// colours are its pages' colours too (lib/library-theme.ts).
const HEART: Record<string, BentoStyle> = {
  "blood-pressure": { ...HEART_PALETTES["blood-pressure"], short: "High or low: the numbers, the tablets and the everyday habits.", chips: ["High blood pressure", "Low blood pressure"], symbol: <>
    <path d="M36 132 A64 64 0 0 1 164 132" />
    <path d="M52 132 A48 48 0 0 1 60 106 M140 106 A48 48 0 0 1 148 132" strokeDasharray="4 10" />
    <path d="M100 132 L134 92" />
    <circle cx="100" cy="132" r="9" />
    <path d="M50 166 H150" />
  </> },
  "heart-attack": { ...HEART_PALETTES["heart-attack"], short: "Narrowed arteries, chest pain, heart attacks and heart failure.", chips: ["Heart attack", "Angina", "Coronary heart disease", "Heart failure"], symbol: <>
    <path d="M100 174 C44 134, 22 100, 32 70 C42 40, 82 36, 100 64 C118 36, 158 40, 168 70 C178 100, 156 134, 100 174 Z" />
    <path d="M124 58 C112 86, 132 104, 118 136" />
    <circle cx="124" cy="96" r="7" />
  </> },
  "heart-rhythm": { ...HEART_PALETTES["heart-rhythm"], short: "When the heart beats too fast, too slow or out of step.", chips: ["Atrial fibrillation", "SVT", "Slow heart rate", "Ectopic beats"], symbol: <>
    <path d="M14 112 H44 L54 92 L62 132 L74 66 L86 146 L94 112 H108 L114 100 L120 124 L128 104 L134 118 L140 112 H186" />
    <path d="M100 56 C86 40, 64 50, 70 66 C74 76, 100 90, 100 90 C100 90, 126 76, 130 66 C136 50, 114 40, 100 56 Z" />
  </> },
  "long-term-lung": { ...HEART_PALETTES["long-term-lung"], short: "Living with breathlessness, and the treatments that help.", chips: ["COPD", "Asthma", "Bronchiectasis", "Pulmonary fibrosis"], symbol: <>
    <path d="M100 26 V96 M100 96 C92 104, 84 108, 76 110 M100 96 C108 104, 116 108, 124 110" />
    <path d="M86 58 C58 48, 30 88, 34 138 C36 164, 58 172, 78 160 C88 150, 90 118, 86 58 Z" />
    <path d="M114 58 C142 48, 170 88, 166 138 C164 164, 142 172, 122 160 C112 150, 110 118, 114 58 Z" />
  </> },
  "sleep-breathing": { ...HEART_PALETTES["sleep-breathing"], short: "Snoring, pauses in breathing at night, and tiredness.", chips: ["Sleep apnoea", "Snoring"], symbol: <>
    <path d="M112 34 A58 58 0 1 0 166 120 A46 46 0 1 1 112 34 Z" />
    <path d="M138 38 h20 l-20 22 h20" />
    <path d="M22 172 q16 -18 32 0 t32 0 t32 0 t32 0" />
  </> },
};

// The Diabetes & metabolism page: amber for blood sugar, teal for the thyroid.
const METABOLISM: Record<string, BentoStyle> = {
  diabetes: { ...METABOLISM_PALETTES.diabetes, short: "Blood sugar, the tests that track it, and the everyday changes that help.", chips: ["Type 2", "Prediabetes", "Type 1", "Gestational", "Hypos"], symbol: <>
    <path d="M100 26 C80 60, 56 88, 56 116 a44 44 0 0 0 88 0 C144 88, 120 60, 100 26 Z" />
    <path d="M78 124 a22 22 0 0 0 22 22" />
    <path d="M150 170 h30 M165 155 v30" />
  </> },
  thyroid: { ...METABOLISM_PALETTES.thyroid, short: "A small gland in the neck that sets the pace for much of the body.", chips: ["Underactive", "Overactive", "Nodules & goitre"], symbol: <>
    <path d="M88 14 V186 M112 14 V186 M88 40 Q100 46 112 40 M88 160 Q100 166 112 160" />
    <path d="M88 128 C74 142, 46 140, 42 108 C38 74, 52 36, 66 36 C78 36, 82 60, 84 88 C86 106, 87 118, 88 128 Z" />
    <path d="M112 128 C126 142, 154 140, 158 108 C162 74, 148 36, 134 36 C122 36, 118 60, 116 88 C114 106, 113 118, 112 128 Z" />
    <path d="M88 118 Q100 126 112 118" />
  </> },
};

// The newer Diabetes & metabolism groups: rose for cholesterol, leaf green for weight, violet for hormones,
// blue for gout and vitamin D.
const METABOLISM_MORE: Record<string, BentoStyle> = {
  cholesterol: { ...METABOLISM_PALETTES.cholesterol, short: "Fats in the blood, the test numbers and what lowers them.", chips: ["High cholesterol", "FH"], symbol: <>
    <path d="M14 70 H186 M14 130 H186" />
    <path d="M60 70 C70 92, 96 96, 110 82 C120 72, 132 74, 140 70" />
    <circle cx="44" cy="100" r="6" /><circle cx="94" cy="104" r="6" /><circle cx="150" cy="98" r="6" />
  </> },
  weight: { ...METABOLISM_PALETTES.weight, short: "Carrying extra weight, and the support that helps.", chips: ["Obesity"], symbol: <>
    <rect x="40" y="70" width="120" height="100" rx="18" />
    <path d="M70 100 A30 30 0 0 1 130 100" /><path d="M100 100 L116 84" />
  </> },
  hormones: { ...METABOLISM_PALETTES.hormones, short: "Conditions of the ovaries and the adrenal glands.", chips: ["PCOS (PMOS)", "Addison's"], symbol: <>
    <circle cx="100" cy="100" r="20" /><circle cx="44" cy="56" r="12" /><circle cx="156" cy="56" r="12" /><circle cx="44" cy="148" r="12" /><circle cx="156" cy="148" r="12" />
    <path d="M84 88 L54 64 M116 88 L146 64 M84 112 L54 140 M116 112 L146 140" />
  </> },
  "gout-vitamins": { ...METABOLISM_PALETTES["gout-vitamins"], short: "Uric acid crystals in a joint, and the vitamin bones need.", chips: ["Gout", "Vitamin D"], symbol: <>
    <circle cx="140" cy="56" r="20" /><path d="M140 20 V28 M140 84 V92 M104 56 H112 M168 56 H176 M115 31 L120 36 M160 76 L165 81 M165 31 L160 36 M120 76 L115 81" />
    <path d="M24 178 C22 150, 40 128, 72 124 C104 120, 132 134, 156 152 C168 160, 170 176, 156 178 Z" />
    <circle cx="150" cy="156" r="10" strokeDasharray="4 5" />
  </> },
};

// The Bones, joints & muscles page: teal for joints, warm stone for bone, slate blue for the back.
const BONES: Record<string, BentoStyle> = {
  arthritis: { ...BONES_PALETTES.arthritis, short: "Painful, stiff joints, and the treatments and operations that help.", chips: ["Osteoarthritis", "Rheumatoid", "Psoriatic", "Axial SpA", "PMR", "Lupus"], symbol: <>
    <path d="M70 20 V86 C70 100, 86 108, 100 108 C114 108, 130 100, 130 86 V20" />
    <path d="M70 180 V124 C70 112, 86 106, 100 106 M130 180 V124 C130 112, 114 106, 100 106" />
    <path d="M56 96 C40 100, 40 116, 56 120 M144 96 C160 100, 160 116, 144 120" strokeDasharray="4 6" />
  </> },
  "bone-health": { ...BONES_PALETTES["bone-health"], short: "Keeping bones strong, and recovering well after a break.", chips: ["Osteoporosis", "Hip fracture", "Paget's"], symbol: <>
    <path d="M60 50 a18 18 0 1 1 28 -8 L130 136 a18 18 0 1 1 8 28 a18 18 0 1 1 -28 8 L68 70 a18 18 0 1 1 -8 -20 Z" />
    <circle cx="100" cy="100" r="5" /><circle cx="88" cy="84" r="3" /><circle cx="112" cy="118" r="3" />
  </> },
  "back-neck": { ...BONES_PALETTES["back-neck"], short: "Everyday back and neck pain, and when to get it checked.", chips: ["Back pain", "Neck pain", "Spinal stenosis"], symbol: <>
    {[24, 50, 76, 102, 128, 154].map((y, index) => <rect key={y} x={84 + Math.sin(index / 1.6) * 10} y={y} width="36" height="18" rx="7" />)}
    <path d="M100 18 C116 60, 84 120, 104 186" strokeDasharray="3 6" />
  </> },
};

// The Cancer & recovery page: berry for the cancers, warm apricot for life after treatment.
const CANCER: Record<string, BentoStyle> = {
  "common-cancers": { ...CANCER_PALETTES["common-cancers"], short: "The months after treatment for breast, bowel, prostate, lung and skin cancer.", chips: ["Breast", "Bowel", "Prostate", "Lung", "Melanoma"], symbol: <>
    <path d="M100 30 C70 30, 66 70, 82 96 L52 170 M100 30 C130 30, 134 70, 118 96 L148 170" />
    <path d="M82 96 C90 110, 110 110, 118 96 M118 96 L74 168" />
  </> },
  "after-treatment": { ...CANCER_PALETTES["after-treatment"], short: "Tiredness, swelling and getting back to everyday life.", chips: ["Tiredness after treatment", "Lymphoedema"], symbol: <>
    <path d="M30 150 H170" />
    <path d="M56 150 A44 44 0 0 1 144 150" />
    <path d="M100 74 V50 M58 92 L42 76 M142 92 L158 76 M38 124 H18 M162 124 H182" />
  </> },
  "blood-cancers": { ...CANCER_PALETTES["blood-cancers"], short: "Lymphoma, leukaemia and myeloma, and life between treatments.", chips: ["Lymphoma", "Leukaemia", "Myeloma"], symbol: <>
    <path d="M100 26 C80 60, 56 88, 56 116 a44 44 0 0 0 88 0 C144 88, 120 60, 100 26 Z" />
    <circle cx="86" cy="118" r="9" /><circle cx="112" cy="132" r="7" /><circle cx="110" cy="104" r="5" />
  </> },
  "womens-cancers": { ...CANCER_PALETTES["womens-cancers"], short: "Recovery after ovarian, womb and cervical cancer.", chips: ["Ovarian", "Womb", "Cervical"], symbol: <>
    <path d="M100 70 C80 70, 74 96, 84 120 C90 136, 110 136, 116 120 C126 96, 120 70, 100 70 Z" />
    <path d="M88 80 C70 66, 50 66, 40 80 M112 80 C130 66, 150 66, 160 80" />
    <circle cx="34" cy="88" r="10" /><circle cx="166" cy="88" r="10" /><path d="M100 136 V170" />
  </> },
  "other-cancers": { ...CANCER_PALETTES["other-cancers"], short: "Head and neck, bladder, kidney and pancreatic cancer.", chips: ["Head and neck", "Bladder", "Kidney", "Pancreatic"], symbol: <>
    <path d="M100 30 C70 30, 66 70, 82 96 L52 170 M100 30 C130 30, 134 70, 118 96 L148 170" />
    <path d="M82 96 C90 110, 110 110, 118 96 M118 96 L74 168" />
    <circle cx="160" cy="46" r="8" /><circle cx="40" cy="46" r="8" />
  </> },
  "advanced-cancer": { ...CANCER_PALETTES["advanced-cancer"], short: "Living well with cancer that has spread, and the care that helps.", chips: ["Secondary cancer"], symbol: <>
    <path d="M100 176 C100 130, 100 100, 100 70" />
    <path d="M100 120 C80 108, 66 90, 64 66 C86 70, 98 88, 100 110 M100 98 C120 86, 134 68, 136 44 C114 48, 102 66, 100 88" />
  </> },
};

// The Mind & mood page: indigo for low mood, sea teal for worry, violet for sleep.
const MIND: Record<string, BentoStyle> = {
  depression: { ...MIND_PALETTES.depression, short: "Low mood that lasts, and the help that works.", chips: ["Depression", "After stroke", "SAD", "Postnatal"], symbol: <>
    <path d="M44 120 a28 28 0 0 1 20 -48 a36 36 0 0 1 68 -6 a26 26 0 0 1 24 54 Z" />
    <path d="M70 140 l-6 18 M100 140 l-6 18 M130 140 l-6 18" />
    <circle cx="150" cy="44" r="12" strokeDasharray="4 6" />
  </> },
  anxiety: { ...MIND_PALETTES.anxiety, short: "Worry and panic that get in the way of everyday life.", chips: ["Anxiety", "OCD", "PTSD"], symbol: <>
    <path d="M20 100 C40 60, 60 140, 80 100 S120 60, 140 100 S170 130, 184 100" />
    <path d="M20 146 C60 130, 140 162, 184 146" />
    <path d="M20 54 C60 40, 140 68, 184 54" strokeDasharray="4 8" />
  </> },
  sleep: { ...MIND_PALETTES.sleep, short: "Getting to sleep, staying asleep and waking rested.", chips: ["Sleep problems", "Restless legs"], symbol: <>
    <path d="M118 36 A60 60 0 1 0 170 128 A48 48 0 1 1 118 36 Z" />
    <circle cx="160" cy="44" r="4" /><circle cx="176" cy="74" r="3" /><circle cx="44" cy="40" r="3" />
  </> },
};

// The newer Mind & mood groups: plum for bipolar and psychosis, slate for stress, grief and loneliness, rust for
// alcohol, green for eating disorders.
const MIND_MORE: Record<string, BentoStyle> = {
  "bipolar-psychosis": { ...MIND_PALETTES["bipolar-psychosis"], short: "Big swings in mood, and times when reality is hard to tell apart.", chips: ["Bipolar", "Psychosis"], symbol: <>
    <path d="M16 100 C40 30, 70 30, 94 100 S148 170, 184 100" />
    <circle cx="55" cy="47" r="6" /><circle cx="133" cy="153" r="6" />
  </> },
  "stress-grief": { ...MIND_PALETTES["stress-grief"], short: "Pressure, loss and feeling alone, and the support that helps.", chips: ["Stress", "Grief", "Loneliness"], symbol: <>
    <circle cx="70" cy="80" r="18" /><path d="M40 160 C40 128, 100 128, 100 160" />
    <circle cx="140" cy="80" r="18" strokeDasharray="5 6" /><path d="M110 160 C110 128, 170 128, 170 160" strokeDasharray="5 6" />
  </> },
  alcohol: { ...MIND_PALETTES.alcohol, short: "How drinking affects mood, sleep and health, and help to cut down.", chips: ["Alcohol"], symbol: <>
    <path d="M64 30 H136 L128 92 C124 116, 76 116, 72 92 Z" /><path d="M100 112 V164 M72 168 H128" /><path d="M70 62 H130" strokeDasharray="4 6" />
  </> },
  "eating-disorders": { ...MIND_PALETTES["eating-disorders"], short: "When food and eating become a way of coping, and getting help early.", chips: ["Eating disorders"], symbol: <>
    <circle cx="100" cy="104" r="56" /><circle cx="100" cy="104" r="34" /><path d="M30 40 V170 M178 40 V96 C178 112, 166 118, 166 118 V170" />
  </> },
};

// The Kidneys, liver & digestion page: olive for the kidneys, russet for the liver, plum for the gut.
const DIGESTION: Record<string, BentoStyle> = {
  kidneys: { ...DIGESTION_PALETTES.kidneys, short: "Kidney function, stones and sudden injury.", chips: ["CKD", "Kidney stones", "Acute kidney injury"], symbol: <>
    <path d="M78 40 C40 40, 30 90, 40 120 C50 150, 80 160, 88 136 C94 118, 76 108, 82 86 C86 70, 100 40, 78 40 Z" />
    <path d="M122 40 C160 40, 170 90, 160 120 C150 150, 120 160, 112 136 C106 118, 124 108, 118 86 C114 70, 100 40, 122 40 Z" />
    <path d="M86 112 C92 140, 96 160, 96 186 M114 112 C108 140, 104 160, 104 186" />
  </> },
  liver: { ...DIGESTION_PALETTES.liver, short: "What can strain and scar the liver, and what helps it recover.", chips: ["Fatty liver", "Cirrhosis", "Alcohol-related", "Hepatitis B & C"], symbol: <>
    <path d="M24 80 C40 50, 120 40, 176 56 C186 60, 184 76, 172 86 C140 112, 100 140, 70 150 C40 158, 18 120, 24 80 Z" />
    <path d="M110 50 C104 80, 96 110, 82 146" />
    <circle cx="58" cy="100" r="7" /><circle cx="140" cy="76" r="5" />
  </> },
  gut: { ...DIGESTION_PALETTES.gut, short: "Tummy pain, bloating and bowel changes.", chips: ["IBS", "Coeliac", "Diverticular", "Constipation"], symbol: <>
    <path d="M60 40 H140 C160 40, 164 70, 144 74 H62 C40 78, 40 104, 62 108 H140 C162 112, 162 138, 140 142 H70 C52 146, 52 172, 76 172 H110" />
  </> },
  bladder: { ...DIGESTION_PALETTES.bladder, short: "Leaks, infections and a prostate that has grown.", chips: ["Incontinence", "Enlarged prostate", "UTIs"], symbol: <>
    <path d="M70 30 C70 60, 80 70, 86 80 M130 30 C130 60, 120 70, 114 80" />
    <path d="M100 76 C60 76, 46 110, 56 136 C66 160, 134 160, 144 136 C154 110, 140 76, 100 76 Z" />
    <path d="M100 158 V186" /><circle cx="100" cy="186" r="3" />
  </> },
  stomach: { ...DIGESTION_PALETTES.stomach, short: "Heartburn, ulcers, gallstones and the pancreas.", chips: ["Acid reflux", "Ulcers", "Gallstones", "Pancreatitis"], symbol: <>
    <path d="M86 20 V56 C86 70, 60 76, 54 104 C46 140, 80 168, 118 160 C150 154, 168 130, 160 108 C152 88, 128 92, 122 110 C118 122, 106 122, 104 108 C102 92, 112 70, 112 56 V20" />
    <circle cx="140" cy="58" r="8" />
  </> },
  ibd: { ...DIGESTION_PALETTES.ibd, short: "Inflammatory bowel disease: flare-ups and living well.", chips: ["Crohn's", "Ulcerative colitis"], symbol: <>
    <path d="M40 160 V60 C40 44, 54 36, 70 36 H130 C146 36, 160 44, 160 60 V160" />
    <path d="M60 60 l6 8 l6 -8 M120 90 l6 8 l6 -8 M70 130 l6 8 l6 -8" />
  </> },
};

// The newer Bones, joints & muscles groups: terracotta for muscles, steel blue for joint replacement, olive for
// tendons and feet.
const BONES_MORE: Record<string, BentoStyle> = {
  muscles: { ...BONES_PALETTES.muscles, short: "Widespread pain, and a shoulder that stiffens and slowly frees.", chips: ["Fibromyalgia", "Frozen shoulder"], symbol: <>
    <path d="M40 150 C40 100, 70 60, 110 56 C150 52, 170 80, 166 110 C162 140, 130 150, 100 146" />
    <path d="M70 120 C90 108, 110 108, 130 120 M78 96 C96 86, 116 86, 134 96" strokeDasharray="4 6" />
  </> },
  "joint-replacement": { ...BONES_PALETTES["joint-replacement"], short: "Preparing for a new hip or knee, and the recovery after.", chips: ["Hip replacement", "Knee replacement"], symbol: <>
    <path d="M100 20 V80" /><circle cx="100" cy="96" r="18" />
    <path d="M82 120 C82 112, 118 112, 118 120 V180 M82 120 V180" />
    <path d="M150 40 l12 12 M162 40 l-12 12" />
  </> },
  "feet-tendons": { ...BONES_PALETTES["feet-tendons"], short: "Elbow and heel pain from tired tendons and tissue.", chips: ["Tennis elbow", "Plantar fasciitis"], symbol: <>
    <path d="M30 170 C30 146, 52 132, 86 130 C122 128, 156 140, 172 156 C180 164, 176 174, 164 174 H38 C32 174, 30 172, 30 170 Z" />
    <circle cx="48" cy="160" r="8" strokeDasharray="3 4" />
    <path d="M110 40 L150 80 L120 110" /><circle cx="150" cy="80" r="8" strokeDasharray="3 4" />
  </> },
};

const BENTO: Record<string, Record<string, BentoStyle>> = { "brain-nervous-system": BRAIN, "heart-lungs": HEART, "diabetes-metabolism": { ...METABOLISM, ...METABOLISM_MORE }, "bones-joints-muscles": { ...BONES, ...BONES_MORE }, "cancer-recovery": CANCER, "mind-mood": { ...MIND, ...MIND_MORE }, "kidneys-liver-digestion": DIGESTION };

/** Whether a section has the bento layout: every one of its groups has a style. */
export const hasBento = (section: LibrarySection) => Boolean(BENTO[section.id]) && section.groups.every(group => BENTO[section.id][group.id]);

const GroupSymbol = ({ style, colour, width, className }: { style: BentoStyle; colour: string; width: number; className: string }) =>
  <svg className={className} aria-hidden="true" focusable="false" viewBox="0 0 200 200" fill="none" stroke={colour} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round">{style.symbol}</svg>;

const plural = (count: number, word: string) => `${count} ${word}${count === 1 ? "" : "s"}`;

export function BentoHero({ section }: { section: LibrarySection }) {
  const conditions = section.groups.reduce((sum, group) => sum + group.conditions.length, 0);
  const stories = sectionStories(section.id).length;
  return <header className={`lib-bento-hero is-${section.id}`}>
    {section.id === "heart-lungs" ? <HeartArt /> : section.id === "diabetes-metabolism" ? <SugarArt /> : section.id === "bones-joints-muscles" ? <SpineArt />
      : section.id === "cancer-recovery" ? <DawnArt /> : section.id === "mind-mood" ? <NightArt /> : section.id === "kidneys-liver-digestion" ? <FlowArt /> : <svg className="lib-bento-hero-art" aria-hidden="true" focusable="false" viewBox="0 0 1280 360" preserveAspectRatio="xMidYMid slice">
      <g className="lib-bento-folds" fill="none" stroke="#9C91E8" strokeOpacity=".22" strokeWidth="2" strokeLinecap="round">
        <path d="M-60 40 C40 10, 80 70, 160 40 S300 10, 380 50 S520 90, 600 40 S760 0, 840 50 S1000 90, 1080 40 S1240 10, 1340 50" />
        <path d="M-60 100 C30 70, 90 130, 180 100 S320 60, 400 110 S560 150, 640 100 S800 60, 880 110 S1040 150, 1120 100 S1280 70, 1340 110" />
        <path d="M-60 160 C50 130, 100 190, 200 160 S340 120, 420 170 S580 210, 660 160 S820 120, 900 170 S1060 210, 1140 160 S1290 130, 1340 170" />
        <path d="M-60 220 C40 190, 90 250, 180 220 S320 180, 400 230 S560 270, 640 220 S800 180, 880 230 S1040 270, 1120 220 S1280 190, 1340 230" />
        <path d="M-60 280 C30 250, 90 310, 180 280 S320 240, 400 290 S560 330, 640 280 S800 240, 880 290 S1040 330, 1120 280 S1280 250, 1340 290" />
      </g>
      <g className="lib-bento-folds is-slow" fill="none" stroke="#E7A68F" strokeOpacity=".18" strokeWidth="1.4" strokeLinecap="round">
        <path d="M-60 70 C60 40, 110 100, 220 70 S380 30, 470 80 S640 120, 730 70 S900 30, 990 80 S1160 120, 1340 70" />
        <path d="M-60 190 C60 160, 110 220, 220 190 S380 150, 470 200 S640 240, 730 190 S900 150, 990 200 S1160 240, 1340 190" />
        <path d="M-60 320 C60 290, 110 350, 220 320 S380 280, 470 330 S640 370, 730 320 S900 280, 990 330 S1160 370, 1340 320" />
      </g>
      <g fill="#F2B8A5">
        {[[300, 100, 3, 0], [640, 40, 3, -1], [880, 230, 4, -2.2], [1120, 100, 3, -3], [1000, 300, 3, -1.6], [760, 150, 2.5, -.6]].map(([cx, cy, r, delay]) =>
          <circle key={`${cx}-${cy}`} className="lib-bento-spark" cx={cx} cy={cy} r={r} style={{ animationDelay: `${delay}s` }} />)}
      </g>
    </svg>}
    <div className="lib-bento-hero-inner">
      <Crumbs className="lib-bento-crumbs" trail={[{ label: "Library", href: "/" }, { label: section.title }]} />
      <h1>{section.title}</h1>
      <p>{section.blurb}</p>
      <div className="lib-bento-stats">
        {section.facts ? section.facts.map(fact => <span key={fact}>{fact}</span>) : <>
        <span>{plural(section.groups.length, "group")}</span>
        <span>{plural(conditions, "condition")}</span>
        {stories > 0 && <span>{stories} {stories === 1 ? "story" : "stories"}</span>}
        </>}
      </div>
    </div>
  </header>;
}

/** The Heart & lungs header: a heartbeat trace drifting across, and slow breathing waves under it. */
function HeartArt() {
  const beat = (y: number) => Array.from({ length: 6 }, (_, index) => {
    const x = -60 + index * 240;
    return `M${x} ${y} H${x + 120} L${x + 134} ${y - 18} L${x + 146} ${y + 22} L${x + 160} ${y - 64} L${x + 174} ${y + 40} L${x + 186} ${y} H${x + 240}`;
  }).join(" ");
  return <svg className="lib-bento-hero-art" aria-hidden="true" focusable="false" viewBox="0 0 1280 360" preserveAspectRatio="xMidYMid slice">
    <g className="lib-bento-folds" fill="none" stroke="#F2A0A0" strokeOpacity=".24" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d={beat(110)} />
      <path d={beat(250)} strokeOpacity=".5" />
    </g>
    <g className="lib-bento-folds is-slow" fill="none" stroke="#9FC8E0" strokeOpacity=".2" strokeWidth="1.6" strokeLinecap="round">
      <path d="M-60 180 C60 140, 140 220, 260 180 S460 140, 580 180 S780 220, 900 180 S1100 140, 1340 180" />
      <path d="M-60 320 C60 280, 140 360, 260 320 S460 280, 580 320 S780 360, 900 320 S1100 280, 1340 320" />
    </g>
    <g fill="#F2B8A5">
      {[[300, 60, 3, 0], [700, 40, 3, -1], [880, 300, 4, -2.2], [1120, 70, 3, -3], [520, 330, 3, -1.6]].map(([cx, cy, r, delay]) =>
        <circle key={`${cx}-${cy}`} className="lib-bento-spark" cx={cx} cy={cy} r={r} style={{ animationDelay: `${delay}s` }} />)}
    </g>
  </svg>;
}

/** The Diabetes & metabolism header: a blood-sugar line rising and settling inside a target band, and drops. */
function SugarArt() {
  const curve = (y: number, lift: number) => Array.from({ length: 7 }, (_, index) => {
    const x = -60 + index * 240;
    return `M${x} ${y} C${x + 60} ${y}, ${x + 70} ${y - lift}, ${x + 120} ${y - lift} S${x + 180} ${y}, ${x + 240} ${y}`;
  }).join(" ");
  return <svg className="lib-bento-hero-art" aria-hidden="true" focusable="false" viewBox="0 0 1280 360" preserveAspectRatio="xMidYMid slice">
    <rect x="-60" y="150" width="1400" height="90" fill="#F2C47A" opacity=".08" />
    <g className="lib-bento-folds" fill="none" stroke="#F2C47A" strokeOpacity=".3" strokeWidth="2.4" strokeLinecap="round">
      <path d={curve(220, 70)} />
    </g>
    <g className="lib-bento-folds is-slow" fill="none" stroke="#8FD3C3" strokeOpacity=".22" strokeWidth="1.6" strokeLinecap="round">
      <path d={curve(300, 40)} />
    </g>
    <g fill="#F2C47A">
      {[[300, 70, 6, 0], [700, 50, 5, -1], [900, 300, 7, -2.2], [1120, 90, 5, -3], [520, 320, 5, -1.6]].map(([cx, cy, r, delay]) =>
        <path key={`${cx}-${cy}`} className="lib-bento-spark" d={`M${cx} ${cy - r * 2} C${cx - r} ${cy - r / 2}, ${cx - r} ${cy + r}, ${cx} ${cy + r} C${cx + r} ${cy + r}, ${cx + r} ${cy - r / 2}, ${cx} ${cy - r * 2} Z`} style={{ animationDelay: `${delay}s` }} />)}
    </g>
  </svg>;
}

/** The Bones, joints & muscles header: a gently curving spine of vertebrae, swaying as if on a walk. */
function SpineArt() {
  return <svg className="lib-bento-hero-art" aria-hidden="true" focusable="false" viewBox="0 0 1280 360" preserveAspectRatio="xMidYMid slice">
    <g className="lib-bento-folds" fill="none" stroke="#9FD8CF" strokeOpacity=".28" strokeWidth="2.4" strokeLinejoin="round">
      {Array.from({ length: 11 }, (_, index) => {
        const y = 18 + index * 31; const x = 1000 + Math.sin(index / 2.2) * 40;
        return <rect key={index} x={x - 34} y={y} width="68" height="22" rx="9" />;
      })}
    </g>
    <g className="lib-bento-folds is-slow" fill="none" stroke="#E8C98F" strokeOpacity=".2" strokeWidth="1.6" strokeLinecap="round">
      <path d="M-60 300 C120 260, 260 320, 420 290 S700 250, 860 290" />
      <path d="M-60 200 C120 160, 260 220, 420 190 S700 150, 860 190" />
    </g>
    <g fill="#E8C98F">
      {[[300, 80, 3, 0], [640, 40, 3, -1], [760, 300, 4, -2.2], [520, 330, 3, -1.6]].map(([cx, cy, r, delay]) =>
        <circle key={`${cx}-${cy}`} className="lib-bento-spark" cx={cx} cy={cy} r={r} style={{ animationDelay: `${delay}s` }} />)}
    </g>
  </svg>;
}

const Sparks = ({ fill, points }: { fill: string; points: number[][] }) => <g fill={fill}>
  {points.map(([cx, cy, r, delay]) => <circle key={`${cx}-${cy}`} className="lib-bento-spark" cx={cx} cy={cy} r={r} style={{ animationDelay: `${delay}s` }} />)}
</g>;

/** The Cancer & recovery header: a low sun rising behind slow, widening rings. */
function DawnArt() {
  return <svg className="lib-bento-hero-art" aria-hidden="true" focusable="false" viewBox="0 0 1280 360" preserveAspectRatio="xMidYMid slice">
    <g className="lib-bento-folds" fill="none" stroke="#F2B3CC" strokeOpacity=".24" strokeWidth="2.4">
      {[90, 150, 210, 270].map(r => <path key={r} d={`M${1010 - r} 380 A${r} ${r} 0 0 1 ${1010 + r} 380`} />)}
    </g>
    <circle cx="1010" cy="380" r="46" fill="#F6C59A" opacity=".22" />
    <g className="lib-bento-folds is-slow" fill="none" stroke="#F6C59A" strokeOpacity=".2" strokeWidth="1.6" strokeLinecap="round">
      <path d="M-60 300 C120 260, 260 320, 420 290 S700 250, 860 290" />
    </g>
    <Sparks fill="#F6C59A" points={[[300, 80, 3, 0], [640, 40, 3, -1], [760, 300, 4, -2.2], [520, 330, 3, -1.6]]} />
  </svg>;
}

/** The Mind & mood header: calm night waves and a crescent moon, with a few slow stars. */
function NightArt() {
  return <svg className="lib-bento-hero-art" aria-hidden="true" focusable="false" viewBox="0 0 1280 360" preserveAspectRatio="xMidYMid slice">
    <path d="M1060 60 A80 80 0 1 0 1130 180 A64 64 0 1 1 1060 60 Z" fill="#C9D0F2" opacity=".16" />
    <g className="lib-bento-folds" fill="none" stroke="#9AA6E3" strokeOpacity=".24" strokeWidth="2.2" strokeLinecap="round">
      <path d="M-60 250 C60 220, 140 280, 260 250 S460 220, 580 250 S780 280, 900 250 S1100 220, 1340 250" />
      <path d="M-60 310 C60 280, 140 340, 260 310 S460 280, 580 310 S780 340, 900 310 S1100 280, 1340 310" />
    </g>
    <g className="lib-bento-folds is-slow" fill="none" stroke="#8FD0DB" strokeOpacity=".18" strokeWidth="1.6" strokeLinecap="round">
      <path d="M-60 190 C80 170, 200 210, 340 190 S620 170, 760 190" />
    </g>
    <Sparks fill="#E1E5F8" points={[[300, 60, 2.5, 0], [640, 40, 3, -1], [880, 120, 2.5, -2.2], [520, 110, 2, -1.6], [1200, 60, 2.5, -3]]} />
  </svg>;
}

/** The Kidneys, liver & digestion header: a looping stream, as the body filters and moves things along. */
function FlowArt() {
  const loop = (y: number) => Array.from({ length: 4 }, (_, index) => {
    const x = 680 + index * 240;
    return `M${x} ${y} C${x + 60} ${y - 50}, ${x + 120} ${y - 50}, ${x + 120} ${y} S${x + 180} ${y + 50}, ${x + 240} ${y}`;
  }).join(" ");
  return <svg className="lib-bento-hero-art" aria-hidden="true" focusable="false" viewBox="0 0 1280 360" preserveAspectRatio="xMidYMid slice">
    <g className="lib-bento-folds" fill="none" stroke="#C6DA8E" strokeOpacity=".26" strokeWidth="2.4" strokeLinecap="round">
      <path d={loop(150)} />
    </g>
    <g className="lib-bento-folds is-slow" fill="none" stroke="#E8B49F" strokeOpacity=".2" strokeWidth="1.6" strokeLinecap="round">
      <path d={loop(270)} />
    </g>
    <Sparks fill="#D6E3B4" points={[[300, 70, 3, 0], [700, 50, 3, -1], [900, 120, 4, -2.2], [1120, 90, 3, -3], [520, 140, 3, -1.6]]} />
  </svg>;
}

// The group last moved into the large tile, by section, kept in this browser so coming back to the
// page (for example from one of its conditions) shows that group again rather than the first one.
const GROUP_KEY = "rehyn.library-section-group.v1";
function rememberGroup(sectionId: string, groupId: string) {
  try { window.localStorage.setItem(GROUP_KEY, JSON.stringify({ ...readLocal<Record<string, string>>(GROUP_KEY, {}), [sectionId]: groupId })); } catch { /* storage blocked: the page still works for this visit */ }
}
/** The group to show first: one named in the link (#group-…), else the one chosen last time, else the first. */
function firstGroup(section: LibrarySection) {
  const has = (id?: string) => Boolean(id && section.groups.some(group => group.id === id));
  const linked = typeof window === "undefined" ? undefined : window.location.hash.match(/^#group-(.+)$/)?.[1];
  if (has(linked)) return linked!;
  const remembered = readLocal<Record<string, string>>(GROUP_KEY, {})[section.id];
  if (has(remembered)) return remembered;
  return section.groups[0]?.id ?? "";
}

/**
 * The grid. `ask` is the "Not sure which group?" form, given a way to move a group into the large
 * tile, so its answer can open the group it suggests.
 */
export function SectionBento({ section, ask }: { section: LibrarySection; ask: (show: (groupId: string) => void) => ReactNode }) {
  const styles = BENTO[section.id];
  const [active, setActive] = useState(() => firstGroup(section));
  const [moves, setMoves] = useState(0);
  const [said, setSaid] = useState("");
  const title = useRef<HTMLHeadingElement>(null);
  const main = section.groups.find(group => group.id === active) ?? section.groups[0];
  if (!main) return null;
  const rest = section.groups.filter(group => group.id !== main.id);
  // Every large tile keeps its small card's pale colour, except Stroke's deep purple.
  const mainStyle = { ...styles[main.id], light: main.id !== "stroke" };

  const show = (groupId: string) => {
    const group = section.groups.find(candidate => candidate.id === groupId);
    if (!group) return;
    setActive(group.id);
    rememberGroup(section.id, group.id);
    setMoves(count => count + 1);
    setSaid(`Showing ${group.title}`);
    // Keyboard and screen-reader users land on the group they chose.
    requestAnimationFrame(() => {
      title.current?.focus({ preventScroll: true });
      const grid = title.current?.closest(".lib-bento");
      if (grid && grid.getBoundingClientRect().top < 0) {
        const still = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        grid.scrollIntoView({ behavior: still ? "auto" : "smooth", block: "start" });
      }
    });
  };
  const entering = moves > 0 ? " is-entering" : "";

  return <section className="lib-bento-wrap" aria-label="Groups in this section">
    <p className="lib-sr" aria-live="polite">{said}</p>
    <div className={`lib-bento${rest.length === 4 ? " is-few" : rest.length === 5 ? " is-five" : rest.length === 6 ? " is-six" : rest.length === 2 ? " is-trio" : rest.length === 1 ? " is-pair" : ""}`}>
      <article key={`${main.id}-${moves}`} id={`group-${main.id}`} className={`lib-bento-tile is-feature${mainStyle.light ? " is-light" : ""}${entering}`}
        style={mainStyle.light ? { background: mainStyle.tint, ["--ink" as string]: mainStyle.ink, ["--text" as string]: mainStyle.text, ["--muted" as string]: mainStyle.muted } as CSSProperties : { background: mainStyle.ink }} aria-labelledby="lib-bento-feature-title">
        <GroupSymbol style={mainStyle} colour={mainStyle.light ? mainStyle.ink : "#FFFFFF"} width={5} className="lib-bento-sym" />
        <div className="lib-bento-tags">
          {main.badge && <span className="is-hot">{main.badge}</span>}
          <span>{plural(main.conditions.length, "condition")}</span>
        </div>
        <h2 id="lib-bento-feature-title" ref={title} tabIndex={-1}>{main.title}</h2>
        <p>{main.blurb}</p>
        <ul role="list">
          {main.conditions.map(condition => <li key={condition.id}>
            <Link href={conditionHref(main.id, condition.id)}>{condition.title} <span aria-hidden="true">→</span></Link>
          </li>)}
        </ul>
      </article>

      {rest.map((group, index) => <SmallTile key={`${group.id}-${moves}`} group={group} style={styles[group.id]} delay={index * 0.04} entering={entering} onPick={() => show(group.id)} />)}

      <div className="lib-bento-ask">{ask(show)}</div>
    </div>
  </section>;
}

function SmallTile({ group, style, delay, entering, onPick }: { group: LibraryGroup; style: BentoStyle; delay: number; entering: string; onPick: () => void }) {
  const colours = { background: style.tint, color: style.text, animationDelay: `${delay}s` } as CSSProperties;
  return <article id={`group-${group.id}`} className={`lib-bento-tile is-small${entering}`} style={colours}>
    {/* The whole small tile is one button, laid over everything in it. */}
    <button type="button" className="lib-bento-pick" onClick={onPick} aria-label={`Show ${group.title} in the large tile`} />
    <GroupSymbol style={style} colour={style.ink} width={7} className="lib-bento-sym" />
    <h3>{group.title}</h3>
    <p style={{ color: style.muted }}>{style.short}</p>
    <div className="lib-bento-chips" aria-hidden="true">{style.chips.map(chip => <span key={chip}>{chip}</span>)}</div>
    <span className="lib-bento-more" aria-hidden="true">Tap to open it here →</span>
  </article>;
}
