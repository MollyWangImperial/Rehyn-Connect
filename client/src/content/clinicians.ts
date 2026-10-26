// The Clinicians tab: people who work with the conditions in the Library, to browse by condition, the kind of care
// and how to meet, each with a profile and a booking panel. From the design canvas "Rehyn Clinicians Tab"
// (artboards 1, the directory with filters, 2, start from a condition, and 3, the clinician profile). The clinicians are examples while the
// directory is set up, as the page says: there are no real registrations, fees or bookings behind them yet, so the
// profile names the register each profession belongs to rather than a number, and a request sends nothing.
// Each clinician's conditions are Library conditions ([group id, condition id]), so the directory's filters are the
// Library's own sections and groups and a profile's conditions lead to their Library pages.

import { librarySections, type LibraryGroup, type LibrarySection } from "./library";

export type ClinicianType = "doctor" | "physio" | "slt" | "ot" | "psych" | "nurse" | "diet";
export type MeetMode = "video" | "person";

export type Clinician = {
  /** In the address: /clinicians/amara-osei. */
  id: string;
  name: string;
  /** "Amara", for "About Amara" and "Amara will confirm…". */
  first: string;
  initials: string;
  role: string;
  type: ClinicianType;
  /** The Library conditions they work with, as [group id, condition id]; the first one sets the profile's colours. */
  conditions: [string, string][];
  /** Where they see people in person; null for video only, across the UK. */
  town: string | null;
  modes: MeetMode[];
  languages: string[];
  /** Days from today to their first free day (moved on past a weekend). */
  firstFree: number;
  /** "How I can help": short lines. */
  help: string[];
  /** "About": a short, plain-English introduction. */
  about: string;
};

export const CLINICIAN_TYPES: { id: ClinicianType; label: string }[] = [
  { id: "doctor", label: "Doctors & consultants" },
  { id: "physio", label: "Physiotherapists" },
  { id: "slt", label: "Speech & language therapists" },
  { id: "ot", label: "Occupational therapists" },
  { id: "psych", label: "Psychologists & counsellors" },
  { id: "nurse", label: "Specialist nurses" },
  { id: "diet", label: "Dietitians" },
];

/** The UK register each profession is on: doctors with the GMC, nurses with the NMC, the others with the HCPC. */
export const REGISTER: Record<ClinicianType, string> = {
  doctor: "GMC", nurse: "NMC", physio: "HCPC", slt: "HCPC", ot: "HCPC", psych: "HCPC", diet: "HCPC",
};

export const CLINICIANS: Clinician[] = [
  {
    id: "amara-osei", name: "Dr Amara Osei", first: "Amara", initials: "AO", role: "Consultant stroke physician", type: "doctor",
    conditions: [["stroke", "ischaemic"], ["stroke", "haemorrhagic"], ["stroke", "tia"], ["stroke", "under-50"], ["brain-spinal-injury", "traumatic-brain-injury"], ["blood-pressure", "high-blood-pressure"]],
    town: "London", modes: ["video", "person"], languages: ["English", "Twi"], firstFree: 9,
    help: ["Reviewing your recovery since leaving hospital", "Lowering the chance of another stroke", "Making sense of medicines and test results", "Pointing you to the right therapy next"],
    about: "Amara looks after people in the months after a stroke or a mini-stroke. A first appointment is a chance to go through what happened, how you are now and what would help next, at your pace.",
  },
  {
    id: "priya-raman", name: "Priya Raman", first: "Priya", initials: "PR", role: "Neurological physiotherapist", type: "physio",
    conditions: [["stroke", "ischaemic"], ["stroke", "haemorrhagic"], ["parkinsons", "parkinsons-disease"], ["multiple-sclerosis", "relapsing-remitting"], ["multiple-sclerosis", "progressive"]],
    town: "Leeds", modes: ["person"], languages: ["English", "Tamil"], firstFree: 4,
    help: ["Walking, balance and getting up from the floor", "Building strength in a weaker arm or leg", "A home exercise plan you can keep to", "Getting back to the things you enjoy"],
    about: "Priya works with people whose movement has changed after a stroke, or with Parkinson's or MS. The first visit is mostly talking and watching how you move, then agreeing one or two goals together.",
  },
  {
    id: "hannah-brooks", name: "Hannah Brooks", first: "Hannah", initials: "HB", role: "Speech & language therapist", type: "slt",
    conditions: [["stroke", "ischaemic"], ["stroke", "haemorrhagic"], ["dementia", "alzheimers"], ["dementia", "vascular"]],
    town: null, modes: ["video"], languages: ["English"], firstFree: 1,
    help: ["Finding words and following conversations", "Speech that has become slurred or slow", "Swallowing safely at mealtimes", "Ideas for family on how to help"],
    about: "Hannah helps people with speech, language and swallowing after a stroke, and with communication when memory changes. Sessions are by video, and a family member is welcome to join.",
  },
  {
    id: "kwame-mensah", name: "Dr Kwame Mensah", first: "Kwame", initials: "KM", role: "Clinical psychologist", type: "psych",
    conditions: [["depression", "depression"], ["depression", "after-stroke"], ["anxiety", "anxiety"], ["anxiety", "health-anxiety"], ["stroke", "ischaemic"]],
    town: null, modes: ["video"], languages: ["English"], firstFree: 3,
    help: ["Low mood and worry after an illness", "Adjusting to changes in your life", "Fear of it happening again", "Talking therapies such as CBT"],
    about: "Kwame works with people whose mood has been knocked by a health scare or a long illness. The first session is about what has been hardest and what you would like to feel different.",
  },
  {
    id: "grace-whitlow", name: "Grace Whitlow", first: "Grace", initials: "GW", role: "Occupational therapist", type: "ot",
    conditions: [["stroke", "ischaemic"], ["stroke", "haemorrhagic"], ["brain-spinal-injury", "traumatic-brain-injury"], ["brain-spinal-injury", "spinal-cord"]],
    town: "Sheffield", modes: ["video", "person"], languages: ["English"], firstFree: 5,
    help: ["Washing, dressing and cooking more easily", "Equipment and changes around the home", "Managing tiredness through the day", "Planning a return to work"],
    about: "Grace helps people get back to everyday tasks after a stroke or a brain or spinal injury. She often starts by asking about a normal day, then looks for the changes that would make the biggest difference.",
  },
  {
    id: "tomas-leal", name: "Dr Tomás Leal", first: "Tomás", initials: "TL", role: "Consultant cardiologist", type: "doctor",
    conditions: [["heart-rhythm", "atrial-fibrillation"], ["heart-rhythm", "svt"], ["heart-attack", "coronary-heart-disease"], ["heart-attack", "heart-failure"]],
    town: "Manchester", modes: ["video", "person"], languages: ["English", "Portuguese", "Spanish"], firstFree: 8,
    help: ["Understanding an irregular heartbeat", "Making sense of heart tests and scans", "Medicines, and what each one is for", "Living well with heart failure"],
    about: "Tomás sees people with heart rhythm problems and heart disease. A first appointment goes through your symptoms and results so far, and what the options are from here.",
  },
  {
    id: "ruth-calloway", name: "Ruth Calloway", first: "Ruth", initials: "RC", role: "Cardiac rehabilitation nurse", type: "nurse",
    conditions: [["heart-attack", "heart-attack"], ["heart-attack", "angina"], ["blood-pressure", "high-blood-pressure"]],
    town: null, modes: ["video"], languages: ["English"], firstFree: 2,
    help: ["Getting active again after a heart attack", "Knowing which symptoms to act on", "Blood pressure checks at home", "Confidence for everyday life"],
    about: "Ruth supports people through the weeks and months after a heart attack or a diagnosis of angina. Appointments are by video, and partners are welcome too.",
  },
  {
    id: "meilin-chau", name: "Dr Mei Lin Chau", first: "Mei Lin", initials: "MC", role: "Consultant diabetologist", type: "doctor",
    conditions: [["diabetes", "type-2"], ["diabetes", "type-1"], ["diabetes", "prediabetes"], ["thyroid", "underactive"], ["thyroid", "overactive"]],
    town: "Birmingham", modes: ["video", "person"], languages: ["English", "Cantonese"], firstFree: 11,
    help: ["Making sense of blood sugar results", "Medicines and insulin, step by step", "Thyroid tests and treatment", "Looking after your eyes, feet and kidneys"],
    about: "Mei Lin looks after people with diabetes and thyroid conditions. A first appointment reviews your results and how things are day to day, and agrees what to focus on first.",
  },
  {
    id: "sophie-adair", name: "Sophie Adair", first: "Sophie", initials: "SA", role: "Specialist dietitian", type: "diet",
    conditions: [["diabetes", "type-2"], ["diabetes", "prediabetes"], ["weight", "obesity"], ["kidneys", "chronic-kidney-disease"]],
    town: null, modes: ["video"], languages: ["English"], firstFree: 3,
    help: ["Eating well with diabetes", "Weight, at a pace that suits you", "Food choices for kidney health", "Simple meals when energy is low"],
    about: "Sophie helps people find a way of eating that fits their condition and their life. Sessions are by video; bring a rough idea of what you usually eat in a day.",
  },
  {
    id: "joseph-adeyemi", name: "Joseph Adeyemi", first: "Joseph", initials: "JA", role: "Musculoskeletal physiotherapist", type: "physio",
    conditions: [["back-neck", "back-pain"], ["back-neck", "neck-pain"], ["joint-replacement", "hip-replacement"], ["joint-replacement", "knee-replacement"]],
    town: "Bristol", modes: ["person"], languages: ["English", "Yoruba"], firstFree: 5,
    help: ["Back and neck pain that keeps coming back", "Getting moving after a hip or knee replacement", "Exercises you can do at home", "Getting back to work and hobbies"],
    about: "Joseph works with people with back and neck pain and after joint replacements. The first visit includes a check of how you move and a few exercises to start with.",
  },
  {
    id: "sarah-whitfield", name: "Dr Sarah Whitfield", first: "Sarah", initials: "SW", role: "Clinical oncologist", type: "doctor",
    conditions: [["common-cancers", "breast"], ["common-cancers", "bowel"], ["after-treatment", "cancer-fatigue"], ["after-treatment", "late-effects"]],
    town: "Glasgow", modes: ["video", "person"], languages: ["English"], firstFree: 15,
    help: ["Questions about your treatment plan", "Side effects and how to manage them", "Tiredness and other effects after treatment", "What follow-up looks like"],
    about: "Sarah treats people with breast and bowel cancer and supports them after treatment ends. A first appointment is a chance to ask the questions that did not fit into a busy clinic.",
  },
  {
    id: "elena-rossi", name: "Dr Elena Rossi", first: "Elena", initials: "ER", role: "Consultant nephrologist", type: "doctor",
    conditions: [["kidneys", "chronic-kidney-disease"], ["kidneys", "kidney-failure-dialysis"], ["kidneys", "kidney-transplant"], ["liver", "fatty-liver"]],
    town: "Cardiff", modes: ["person"], languages: ["English", "Italian"], firstFree: 16,
    help: ["Understanding your kidney results", "Slowing kidney disease down", "Choices about dialysis and transplant", "Medicines that are kind to the kidneys"],
    about: "Elena looks after people with kidney disease at every stage. A first appointment goes through your results and what they mean, and what can help protect your kidneys.",
  },
];

/** "Often seen by", on each Library section's card on the by-condition page (artboard 2), keyed by section id. */
export const SEEN_BY: Record<string, string> = {
  "brain-nervous-system": "Neurologists, stroke physicians, neuro physios, speech & language therapists",
  "heart-lungs": "Cardiologists, respiratory physicians, cardiac rehab nurses",
  "diabetes-metabolism": "Diabetologists, endocrinologists, dietitians, diabetes nurses",
  "bones-joints-muscles": "Rheumatologists, orthopaedic surgeons, MSK physios, OTs",
  "cancer-recovery": "Oncologists, haematologists, specialist cancer nurses, palliative care",
  "mind-mood": "Psychologists, psychiatrists, counsellors, mental health nurses",
  "kidneys-liver-digestion": "Nephrologists, hepatologists, gastroenterologists, urologists",
};

/** The directory, already narrowed to a Library section and, optionally, one of its groups: "/?area=heart-lungs&group=heart-rhythm". */
export const directoryHref = (sectionId?: string, groupId?: string) => {
  const query = new URLSearchParams();
  if (sectionId) query.set("area", sectionId);
  if (groupId) query.set("group", groupId);
  const text = query.toString();
  return text ? `/?${text}` : "/";
};

/** The directory's starting filters from its address: a known section, and only the groups that belong to it. */
export function directoryFilters(search: string): { area: string; groups: string[] } {
  const query = new URLSearchParams(search);
  const section = librarySections.find(item => item.id === query.get("area"));
  if (!section) return { area: "all", groups: [] };
  return { area: section.id, groups: query.getAll("group").filter(id => section.groups.some(group => group.id === id)) };
}

export type GroupPlace = { section: LibrarySection; group: LibraryGroup };

/** Where a Library group sits: its section, for the colours and the condition-area filter. */
export function groupPlace(groupId: string): GroupPlace | undefined {
  for (const section of librarySections) {
    const group = section.groups.find(item => item.id === groupId);
    if (group) return { section, group };
  }
  return undefined;
}

/** A clinician's Library groups, in their order, once each. */
export function clinicianGroups(clinician: Clinician): GroupPlace[] {
  const seen = new Set<string>();
  return clinician.conditions.flatMap(([groupId]) => {
    if (seen.has(groupId)) return [];
    seen.add(groupId);
    const place = groupPlace(groupId);
    return place ? [place] : [];
  });
}

/** The section a clinician's profile takes its colours from: the one of their first condition. */
export const mainSection = (clinician: Clinician): LibrarySection => clinicianGroups(clinician)[0]?.section ?? librarySections[0];

export const findClinician = (id: string | undefined) => CLINICIANS.find(clinician => clinician.id === id);

/** "Video or in person", "Video appointments" or "In person only". */
export const modeText = (modes: MeetMode[]) => modes.length > 1 ? "Video or in person" : modes[0] === "video" ? "Video appointments" : "In person only";

/** Where they are: "London", or "Online across the UK" for video only. */
export const placeText = (clinician: Clinician) => clinician.town ?? "Online across the UK";

const DAY_MS = 86_400_000;
const atNoon = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;

/** Working days from `from`, starting `offset` calendar days on (moved past a weekend). */
export function workingDays(from: Date, offset: number, count: number): Date[] {
  let day = new Date(atNoon(from).getTime() + offset * DAY_MS);
  const days: Date[] = [];
  while (days.length < count) {
    if (!isWeekend(day)) days.push(day);
    day = new Date(day.getTime() + DAY_MS);
  }
  return days;
}

/** Their first free day, from today. */
export const nextFree = (clinician: Clinician, today = new Date()) => workingDays(today, clinician.firstFree, 1)[0];

/** The four days to choose from on the profile: the first three free working days, then one the week after. */
export function bookingDays(clinician: Clinician, today = new Date()): Date[] {
  const days = workingDays(today, clinician.firstFree, 5);
  return [days[0], days[1], days[2], days[4]];
}

export const BOOKING_TIMES = ["9:30", "11:00", "14:15", "15:00", "16:30"];
/** How long a first appointment is. */
export const APPOINTMENT_MINUTES = 30;
/** How long a clinician takes to confirm a request. */
export const CONFIRM_WORKING_DAYS = 2;

/** "Tue 4 Nov". */
export const shortDate = (date: Date) => date.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
