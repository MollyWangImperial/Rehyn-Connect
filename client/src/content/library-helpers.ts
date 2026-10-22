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
export const HEART_UK: TrustedSource = { name: "HEART UK", note: "The cholesterol charity: helpline and guides", url: "https://www.heartuk.org.uk/" };
export const ADDISONS_SELF_HELP: TrustedSource = { name: "Addison's Disease Self-Help Group", note: "Support, emergency advice and local meet-ups", url: "https://www.addisonsdisease.org.uk/" };
export const DIABETES_UK: TrustedSource = { name: "Diabetes UK", note: "Helpline, recipes and learning courses", url: "https://www.diabetes.org.uk/" };
export const JDRF: TrustedSource = { name: "Breakthrough T1D (JDRF)", note: "Type 1 diabetes: research and support", url: "https://jdrf.org.uk/" };
export const THYROID_UK: TrustedSource = { name: "Thyroid UK", note: "Information and support for thyroid conditions", url: "https://www.thyroiduk.org/" };
/** Formerly Versus Arthritis; its old site now redirects to arthritis-uk.org (checked 21 October 2026). */
export const VERSUS_ARTHRITIS: TrustedSource = { name: "Arthritis UK", note: "Helpline, exercises and pain advice", url: "https://www.arthritis-uk.org/" };
export const NRAS: TrustedSource = { name: "NRAS", note: "National Rheumatoid Arthritis Society: helpline and groups", url: "https://nras.org.uk/" };
export const ROS: TrustedSource = { name: "Royal Osteoporosis Society", note: "Specialist nurse helpline and bone health advice", url: "https://theros.org.uk/" };
export const PAPAA: TrustedSource = { name: "PAPAA", note: "Psoriasis and Psoriatic Arthritis Alliance", url: "https://www.papaa.org/" };
export const NASS: TrustedSource = { name: "NASS", note: "National Axial Spondyloarthritis Society: exercise and support", url: "https://nass.co.uk/" };
export const PMRGCA_UK: TrustedSource = { name: "PMRGCA UK", note: "Support for polymyalgia rheumatica and giant cell arteritis", url: "https://www.pmrgca.org.uk/" };
export const LUPUS_UK: TrustedSource = { name: "LUPUS UK", note: "Helpline, guides and regional groups", url: "https://www.lupusuk.org.uk/" };
export const PAGETS_ASSOCIATION: TrustedSource = { name: "Paget's Association", note: "Information and a nurse helpline for Paget's disease", url: "https://paget.org.uk/" };
export const FMA_UK: TrustedSource = { name: "Fibromyalgia Action UK", note: "Helpline, local groups and information", url: "https://www.fmauk.org/" };
export const CSP: TrustedSource = { name: "Chartered Society of Physiotherapy", note: "Exercises and advice from physiotherapists", url: "https://www.csp.org.uk/" };
export const SJOGRENS_UK: TrustedSource = { name: "Sjögren's UK", note: "Formerly the British Sjögren's Syndrome Association", url: "https://sjogrensuk.org/" };
export const SRUK: TrustedSource = { name: "Scleroderma & Raynaud's UK", note: "Information and support for scleroderma and Raynaud's", url: "https://www.sruk.co.uk/" };
export const HMSA: TrustedSource = { name: "Hypermobility Syndromes Association", note: "Support and information on joint hypermobility", url: "https://www.hypermobility.org/" };
export const RCPOD: TrustedSource = { name: "Royal College of Podiatry", note: "Foot health advice from podiatrists", url: "https://rcpod.org.uk/" };
export const SCOLIOSIS_SR: TrustedSource = { name: "Scoliosis Support & Research", note: "The UK scoliosis charity (formerly Scoliosis Association UK)", url: "https://www.ssr.org.uk/" };
export const BSSH: TrustedSource = { name: "British Society for Surgery of the Hand", note: "Patient information from UK hand surgeons", url: "https://www.bssh.ac.uk/" };
export const BACKCARE: TrustedSource = { name: "BackCare", note: "The charity for healthier backs", url: "https://backcare.org.uk/" };
export const MACMILLAN: TrustedSource = { name: "Macmillan Cancer Support", note: "Support line, money advice and local services", url: "https://www.macmillan.org.uk/" };
export const CANCER_RESEARCH_UK: TrustedSource = { name: "Cancer Research UK", note: "Treatments, trials and what to expect", url: "https://www.cancerresearchuk.org/" };
// The cancer charities below were checked on 22 October 2026 (each homepage answered).
export const ROY_CASTLE: TrustedSource = { name: "Roy Castle Lung Cancer Foundation", note: "Lung cancer information and support groups", url: "https://roycastle.org/" };
export const BLOOD_CANCER_UK: TrustedSource = { name: "Blood Cancer UK", note: "Support line and information on every blood cancer", url: "https://bloodcancer.org.uk/" };
export const EVE_APPEAL: TrustedSource = { name: "The Eve Appeal", note: "Gynaecological cancers: nurse information service", url: "https://eveappeal.org.uk/" };
export const OVARIAN_CANCER_ACTION: TrustedSource = { name: "Ovarian Cancer Action", note: "Information and support for ovarian cancer", url: "https://ovarian.org.uk/" };
export const ACTION_BLADDER_CANCER: TrustedSource = { name: "Action Bladder Cancer UK", note: "Support and information for bladder cancer", url: "https://actionbladdercanceruk.org/" };
export const SWALLOWS: TrustedSource = { name: "The Swallows", note: "Head and neck cancer support groups and information", url: "https://theswallows.org.uk/" };
export const PANCREATIC_CANCER_UK: TrustedSource = { name: "Pancreatic Cancer UK", note: "Specialist nurse support line", url: "https://www.pancreaticcancer.org.uk/" };
export const MARIE_CURIE: TrustedSource = { name: "Marie Curie", note: "Care and support for anyone living with a terminal illness", url: "https://www.mariecurie.org.uk/" };
export const BREAST_CANCER_NOW: TrustedSource = { name: "Breast Cancer Now", note: "Helpline and support after treatment", url: "https://breastcancernow.org/" };
export const BOWEL_CANCER_UK: TrustedSource = { name: "Bowel Cancer UK", note: "Information and a community forum", url: "https://www.bowelcanceruk.org.uk/" };
export const PROSTATE_CANCER_UK: TrustedSource = { name: "Prostate Cancer UK", note: "Specialist nurses on the phone", url: "https://prostatecanceruk.org/" };
export const MIND: TrustedSource = { name: "Mind", note: "Information and local mental health support", url: "https://www.mind.org.uk/" };
export const SAMARITANS: TrustedSource = { name: "Samaritans", note: "Someone to talk to, any time, free on 116 123", url: "https://www.samaritans.org/" };
export const OCD_UK: TrustedSource = { name: "OCD-UK", note: "Information and support for people with OCD", url: "https://www.ocduk.org/" };
export const PTSD_UK: TrustedSource = { name: "PTSD UK", note: "Information about PTSD and its treatments", url: "https://www.ptsduk.org/" };
export const BIPOLAR_UK: TrustedSource = { name: "Bipolar UK", note: "Peer support, groups and an eCommunity", url: "https://www.bipolaruk.org/" };
export const RETHINK: TrustedSource = { name: "Rethink Mental Illness", note: "Advice on psychosis, schizophrenia and more", url: "https://www.rethink.org/" };
export const PANDAS: TrustedSource = { name: "PANDAS Foundation", note: "Support for parents with perinatal mental illness", url: "https://pandasfoundation.org.uk/" };
export const CRUSE: TrustedSource = { name: "Cruse Bereavement Support", note: "Free bereavement helpline and support", url: "https://www.cruse.org.uk/" };
export const AGE_UK: TrustedSource = { name: "Age UK", note: "Advice line, befriending and local services", url: "https://www.ageuk.org.uk/" };
export const DRINKAWARE: TrustedSource = { name: "Drinkaware", note: "Facts about alcohol and help to cut down", url: "https://www.drinkaware.co.uk/" };
export const BEAT: TrustedSource = { name: "Beat", note: "The UK eating disorder charity: helplines and support", url: "https://www.beateatingdisorders.org.uk/" };
export const RLS_UK: TrustedSource = { name: "RLS-UK", note: "Restless legs syndrome information and support", url: "https://www.rls-uk.org/" };
export const ANXIETY_UK: TrustedSource = { name: "Anxiety UK", note: "Helpline and therapy services", url: "https://www.anxietyuk.org.uk/" };
export const NARCOLEPSY_UK: TrustedSource = { name: "Narcolepsy UK", note: "Support for people with narcolepsy", url: "https://www.narcolepsy.org.uk/" };
export const ADHD_UK: TrustedSource = { name: "ADHD UK", note: "Information and support for adults with ADHD", url: "https://adhduk.co.uk/" };
export const NAS: TrustedSource = { name: "National Autistic Society", note: "Information, advice and a helpline", url: "https://www.autism.org.uk/" };
export const FRANK: TrustedSource = { name: "FRANK", note: "Honest information about drugs, 24 hours a day", url: "https://www.talktofrank.com/" };
export const CARERS_UK: TrustedSource = { name: "Carers UK", note: "Advice and support for unpaid carers", url: "https://www.carersuk.org/" };
export const NO_PANIC: TrustedSource = { name: "No Panic", note: "Support for panic, anxiety and phobias", url: "https://nopanic.org.uk/" };
export const HARMLESS: TrustedSource = { name: "Harmless", note: "Support for people who self-harm", url: "https://harmless.org.uk/" };
export const SLEEP_CHARITY: TrustedSource = { name: "The Sleep Charity", note: "Sleep advice and a national helpline", url: "https://thesleepcharity.org.uk/" };
export const KIDNEY_CARE_UK: TrustedSource = { name: "Kidney Care UK", note: "Patient support, money advice and a helpline", url: "https://www.kidneycareuk.org/" };
// The British Liver Trust is now Liver UK (britishlivertrust.org.uk redirects to liveruk.org, checked 21 October 2026).
export const BRITISH_LIVER_TRUST: TrustedSource = { name: "Liver UK", note: "Nurse-led helpline and a support network", url: "https://liveruk.org/" };
export const BAUS: TrustedSource = { name: "BAUS", note: "British Association of Urological Surgeons: patient leaflets", url: "https://www.baus.org.uk/" };
export const BLADDER_HEALTH_UK: TrustedSource = { name: "Bladder Health UK", note: "Support for bladder conditions and UTIs", url: "https://bladderhealthuk.org/" };
export const COELIAC_UK: TrustedSource = { name: "Coeliac UK", note: "Helpline, recipes and gluten-free food guide", url: "https://www.coeliac.org.uk/" };
export const CROHNS_COLITIS_UK: TrustedSource = { name: "Crohn's & Colitis UK", note: "Helpline, guides and local networks", url: "https://www.crohnsandcolitis.org.uk/" };
export const PKD_CHARITY: TrustedSource = { name: "PKD Charity", note: "Support for polycystic kidney disease", url: "https://www.pkdcharity.org.uk/" };
export const HAEMOCHROMATOSIS_UK: TrustedSource = { name: "Haemochromatosis UK", note: "Information and support for iron overload", url: "https://www.haemochromatosis.org.uk/" };
export const BLADDER_BOWEL_COMMUNITY: TrustedSource = { name: "Bladder & Bowel Community", note: "Continence support, toilet cards and advice", url: "https://www.bladderandbowel.org/" };
export const ORGAN_DONATION: TrustedSource = { name: "NHS Organ Donation", note: "Transplants and the organ donor register", url: "https://www.organdonation.nhs.uk/" };
export const GUTS_UK: TrustedSource = { name: "Guts UK", note: "Digestive health, in plain words", url: "https://gutscharity.org.uk/" };
