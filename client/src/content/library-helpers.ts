import type { ItemKind, LibraryItem, TrustedSource } from "./library";

// Small helpers and the trusted sources the Library's condition pages share (content/library.ts and
// content/library-conditions/*.ts). Every source URL is the organisation's real homepage.

export const article = (id: string, title: string, minutes: number, more: Partial<LibraryItem> = {}): LibraryItem => ({ id, title, kind: "article", minutes, ...more });
export const piece = (kind: ItemKind, id: string, title: string, minutes: number, more: Partial<LibraryItem> = {}): LibraryItem => ({ id, title, kind, minutes, ...more });
export const source = (base: TrustedSource, note: string): TrustedSource => ({ ...base, note });

export const NHS: TrustedSource = { name: "NHS", note: "Health A to Z, symptoms and treatment", url: "https://www.nhs.uk/" };
/** The sources shown on a condition whose own page is still being written. */
export const DEFAULT_SOURCES: TrustedSource[] = [NHS];

export const STROKE_ASSOCIATION: TrustedSource = { name: "Stroke Association", note: "Helpline, printed guides and local groups", url: "https://www.stroke.org.uk/" };
export const DIFFERENT_STROKES: TrustedSource = { name: "Different Strokes", note: "For younger survivors and working-age families", url: "https://differentstrokes.co.uk/" };
export const CHSS: TrustedSource = { name: "Chest Heart & Stroke Scotland", note: "Support if you're in Scotland", url: "https://www.chss.org.uk/" };
export const PARKINSONS_UK: TrustedSource = { name: "Parkinson's UK", note: "Helpline, local groups, exercise classes", url: "https://www.parkinsons.org.uk/" };
export const PARKINSONS_FOUNDATION: TrustedSource = { name: "Parkinson's Foundation", note: "Videos and a large library in plain English", url: "https://www.parkinson.org/" };
export const CURE_PARKINSONS: TrustedSource = { name: "Cure Parkinson's", note: "Research news and trials you can join", url: "https://cureparkinsons.org.uk/" };
export const ALZHEIMERS_SOCIETY: TrustedSource = { name: "Alzheimer's Society", note: "Dementia Connect support line and local services", url: "https://www.alzheimers.org.uk/" };
export const DEMENTIA_UK: TrustedSource = { name: "Dementia UK", note: "Admiral Nurses: specialist nurses for families", url: "https://www.dementiauk.org/" };
export const LEWY_BODY_SOCIETY: TrustedSource = { name: "Lewy Body Society", note: "Information written for families living with it", url: "https://www.lewybody.org/" };
export const TREMOR_FOUNDATION: TrustedSource = { name: "National Tremor Foundation", note: "Support for people living with tremor", url: "https://www.tremor.org.uk/" };
export const DYSTONIA_UK: TrustedSource = { name: "Dystonia UK", note: "Helpline and support groups", url: "https://www.dystonia.org.uk/" };
export const MS_SOCIETY: TrustedSource = { name: "MS Society", note: "Helpline, local groups and the latest research", url: "https://www.mssociety.org.uk/" };
export const MS_TRUST: TrustedSource = { name: "MS Trust", note: "Practical information for every stage", url: "https://mstrust.org.uk/" };
export const EPILEPSY_ACTION: TrustedSource = { name: "Epilepsy Action", note: "Helpline, seizure first aid and local groups", url: "https://www.epilepsy.org.uk/" };
export const EPILEPSY_SOCIETY: TrustedSource = { name: "Epilepsy Society", note: "Information, research and a helpline", url: "https://epilepsysociety.org.uk/" };
export const HEADWAY: TrustedSource = { name: "Headway", note: "The brain injury charity: helpline and local groups", url: "https://www.headway.org.uk/" };
export const SPINAL_INJURIES_ASSOCIATION: TrustedSource = { name: "Spinal Injuries Association", note: "Support from people who have been there", url: "https://www.spinal.co.uk/" };
export const BRAIN_AND_SPINE: TrustedSource = { name: "Brain & Spine Foundation", note: "Helpline staffed by neuroscience nurses", url: "https://www.brainandspine.org.uk/" };
export const MIGRAINE_TRUST: TrustedSource = { name: "The Migraine Trust", note: "Information, a helpline and a diary to download", url: "https://migrainetrust.org/" };
export const FACIAL_PALSY_UK: TrustedSource = { name: "Facial Palsy UK", note: "Support and exercises for facial weakness", url: "https://www.facialpalsy.org.uk/" };
export const BHF: TrustedSource = { name: "British Heart Foundation", note: "Heart Helpline, booklets and recipes", url: "https://www.bhf.org.uk/" };
export const BLOOD_PRESSURE_UK: TrustedSource = { name: "Blood Pressure UK", note: "Home monitoring and the numbers explained", url: "https://www.bloodpressureuk.org/" };
export const AF_ASSOCIATION: TrustedSource = { name: "AF Association", note: "Living with atrial fibrillation, in plain words", url: "https://www.afa.org.uk/" };
export const ARRHYTHMIA_ALLIANCE: TrustedSource = { name: "Arrhythmia Alliance", note: "Heart rhythm information and a helpline", url: "https://heartrhythmalliance.org/" };
export const ASTHMA_LUNG_UK: TrustedSource = { name: "Asthma + Lung UK", note: "Helpline, inhaler videos and breathing exercises", url: "https://www.asthmaandlung.org.uk/" };
export const DIABETES_UK: TrustedSource = { name: "Diabetes UK", note: "Helpline, recipes and learning courses", url: "https://www.diabetes.org.uk/" };
export const JDRF: TrustedSource = { name: "Breakthrough T1D (JDRF)", note: "Type 1 diabetes: research and support", url: "https://jdrf.org.uk/" };
export const THYROID_UK: TrustedSource = { name: "Thyroid UK", note: "Information and support for thyroid conditions", url: "https://www.thyroiduk.org/" };
/** Formerly Versus Arthritis; its old site now redirects to arthritis-uk.org (checked 21 October 2026). */
export const VERSUS_ARTHRITIS: TrustedSource = { name: "Arthritis UK", note: "Helpline, exercises and pain advice", url: "https://www.arthritis-uk.org/" };
export const NRAS: TrustedSource = { name: "NRAS", note: "National Rheumatoid Arthritis Society: helpline and groups", url: "https://nras.org.uk/" };
export const ROS: TrustedSource = { name: "Royal Osteoporosis Society", note: "Specialist nurse helpline and bone health advice", url: "https://theros.org.uk/" };
export const BACKCARE: TrustedSource = { name: "BackCare", note: "The charity for healthier backs", url: "https://backcare.org.uk/" };
export const MACMILLAN: TrustedSource = { name: "Macmillan Cancer Support", note: "Support line, money advice and local services", url: "https://www.macmillan.org.uk/" };
export const CANCER_RESEARCH_UK: TrustedSource = { name: "Cancer Research UK", note: "Treatments, trials and what to expect", url: "https://www.cancerresearchuk.org/" };
export const BREAST_CANCER_NOW: TrustedSource = { name: "Breast Cancer Now", note: "Helpline and support after treatment", url: "https://breastcancernow.org/" };
export const BOWEL_CANCER_UK: TrustedSource = { name: "Bowel Cancer UK", note: "Information and a community forum", url: "https://www.bowelcanceruk.org.uk/" };
export const PROSTATE_CANCER_UK: TrustedSource = { name: "Prostate Cancer UK", note: "Specialist nurses on the phone", url: "https://prostatecanceruk.org/" };
export const MIND: TrustedSource = { name: "Mind", note: "Information and local mental health support", url: "https://www.mind.org.uk/" };
export const SAMARITANS: TrustedSource = { name: "Samaritans", note: "Someone to talk to, any time, free on 116 123", url: "https://www.samaritans.org/" };
export const ANXIETY_UK: TrustedSource = { name: "Anxiety UK", note: "Helpline and therapy services", url: "https://www.anxietyuk.org.uk/" };
export const SLEEP_CHARITY: TrustedSource = { name: "The Sleep Charity", note: "Sleep advice and a national helpline", url: "https://thesleepcharity.org.uk/" };
export const KIDNEY_CARE_UK: TrustedSource = { name: "Kidney Care UK", note: "Patient support, money advice and a helpline", url: "https://www.kidneycareuk.org/" };
// The British Liver Trust is now Liver UK (britishlivertrust.org.uk redirects to liveruk.org, checked 21 October 2026).
export const BRITISH_LIVER_TRUST: TrustedSource = { name: "Liver UK", note: "Nurse-led helpline and a support network", url: "https://liveruk.org/" };
export const GUTS_UK: TrustedSource = { name: "Guts UK", note: "Digestive health, in plain words", url: "https://gutscharity.org.uk/" };
