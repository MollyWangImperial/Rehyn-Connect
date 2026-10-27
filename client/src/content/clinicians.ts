// The Clinicians tab: people who work with the conditions in the Library, to browse by condition and the kind of care,
// each with a profile and a way to book a consultation. From the design canvas "Rehyn Clinicians Tab" (artboards 1, the
// directory with filters, 2, start from a condition, and 3, the clinician profile). Every consultation is online, by
// video on Rehyn itself. The clinicians are examples while the directory is set up, as the page says: there are no
// real registrations, fees or bookings behind them yet, so the profile names the register each profession belongs to
// rather than a number, and the prices, experience and hours are examples too.
// Each clinician's conditions are Library conditions ([group id, condition id]), so the directory's filters are the
// Library's own sections and groups and a profile's conditions lead to their Library pages.

import { librarySections, type LibraryGroup, type LibrarySection } from "./library";

export type ClinicianType = "doctor" | "physio" | "slt" | "ot" | "psych" | "nurse" | "diet";

/** When they take consultations: on these days of the week (0 is Sunday), from one hour to another (24-hour clock). */
export type Hours = { days: number[]; from: number; to: number };
/** Days away, from one moment to another, with a label ("Holiday"). */
export type TimeOff = { from: number; to: number; label: string };
/** When urgent requests reach them: whenever they're free in the next 48 hours, only when free today, or never. */
export type UrgentAlerts = "free48" | "today" | "never";

export type Clinician = {
  /** In the address: /clinicians/amara-osei. */
  id: string;
  name: string;
  /** "Amara", for "About Amara" and "Amara will choose…". */
  first: string;
  initials: string;
  role: string;
  type: ClinicianType;
  /** "Consultant", "Senior" or "Specialist": shown with their years of experience. */
  level: string;
  years: number;
  /** Consultation hours they have given, all told. */
  hours: number;
  /** The price of one 30-minute consultation, in pounds. */
  price: number;
  /** The Library conditions they work with, as [group id, condition id]; the first one sets the profile's colours. */
  conditions: [string, string][];
  languages: string[];
  schedule: Hours[];
  /** "How I can help": short lines. */
  help: string[];
  /** "About": a short, plain-English introduction. */
  about: string;
  timeOff?: TimeOff[];
  urgentAlerts?: UrgentAlerts;
  /** False hides them from the directory (their booked consultations stay booked). */
  listed?: boolean;
  /** A clinician who signed up on this device: their registration number, not yet checked by Rehyn. */
  own?: boolean;
  registration?: string;
  verified?: boolean;
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

const WEEKDAYS = [1, 2, 3, 4, 5];

export const CLINICIANS: Clinician[] = [
  {
    id: "amara-osei", name: "Dr Amara Osei", first: "Amara", initials: "AO", role: "Consultant stroke physician", type: "doctor",
    level: "Consultant", years: 14, hours: 1320, price: 85,
    conditions: [["stroke", "ischaemic"], ["stroke", "haemorrhagic"], ["stroke", "tia"], ["stroke", "under-50"], ["brain-spinal-injury", "traumatic-brain-injury"], ["blood-pressure", "high-blood-pressure"]],
    languages: ["English", "Twi"], schedule: [{ days: [1, 3, 5], from: 9, to: 17 }],
    help: ["Reviewing your recovery since leaving hospital", "Lowering the chance of another stroke", "Making sense of medicines and test results", "Pointing you to the right therapy next"],
    about: "Amara looks after people in the months after a stroke or a mini-stroke. A first consultation is a chance to go through what happened, how you are now and what would help next, at your pace.",
  },
  {
    id: "priya-raman", name: "Priya Raman", first: "Priya", initials: "PR", role: "Neurological physiotherapist", type: "physio",
    level: "Senior", years: 11, hours: 2140, price: 55,
    conditions: [["stroke", "ischaemic"], ["stroke", "haemorrhagic"], ["parkinsons", "parkinsons-disease"], ["multiple-sclerosis", "relapsing-remitting"], ["multiple-sclerosis", "progressive"]],
    languages: ["English", "Tamil"], schedule: [{ days: WEEKDAYS, from: 8, to: 14 }, { days: [6], from: 9, to: 12 }],
    help: ["Walking, balance and getting up from the floor", "Building strength in a weaker arm or leg", "A home exercise plan you can keep to", "Getting back to the things you enjoy"],
    about: "Priya works with people whose movement has changed after a stroke, or with Parkinson's or MS. The first consultation is mostly talking and watching how you move on camera, then agreeing one or two goals together.",
  },
  {
    id: "hannah-brooks", name: "Hannah Brooks", first: "Hannah", initials: "HB", role: "Speech & language therapist", type: "slt",
    level: "Specialist", years: 8, hours: 960, price: 50,
    conditions: [["stroke", "ischaemic"], ["stroke", "haemorrhagic"], ["dementia", "alzheimers"], ["dementia", "vascular"]],
    languages: ["English"], schedule: [{ days: WEEKDAYS, from: 9, to: 13 }, { days: [0, 6], from: 10, to: 16 }],
    help: ["Finding words and following conversations", "Speech that has become slurred or slow", "Swallowing safely at mealtimes", "Ideas for family on how to help"],
    about: "Hannah helps people with speech, language and swallowing after a stroke, and with communication when memory changes. A family member is welcome to join the call.",
  },
  {
    id: "kwame-mensah", name: "Dr Kwame Mensah", first: "Kwame", initials: "KM", role: "Clinical psychologist", type: "psych",
    level: "Senior", years: 12, hours: 1880, price: 75,
    conditions: [["depression", "depression"], ["depression", "after-stroke"], ["anxiety", "anxiety"], ["anxiety", "health-anxiety"], ["stroke", "ischaemic"]],
    languages: ["English"], schedule: [{ days: [1, 2, 3, 4, 5, 6], from: 17, to: 21 }],
    help: ["Low mood and worry after an illness", "Adjusting to changes in your life", "Fear of it happening again", "Talking therapies such as CBT"],
    about: "Kwame works with people whose mood has been knocked by a health scare or a long illness. The first consultation is about what has been hardest and what you would like to feel different.",
  },
  {
    id: "grace-whitlow", name: "Grace Whitlow", first: "Grace", initials: "GW", role: "Occupational therapist", type: "ot",
    level: "Senior", years: 9, hours: 1150, price: 50,
    conditions: [["stroke", "ischaemic"], ["stroke", "haemorrhagic"], ["brain-spinal-injury", "traumatic-brain-injury"], ["brain-spinal-injury", "spinal-cord"]],
    languages: ["English"], schedule: [{ days: [2, 4], from: 10, to: 18 }],
    help: ["Washing, dressing and cooking more easily", "Equipment and changes around the home", "Managing tiredness through the day", "Planning a return to work"],
    about: "Grace helps people get back to everyday tasks after a stroke or a brain or spinal injury. She often starts by asking about a normal day, then looks for the changes that would make the biggest difference.",
  },
  {
    id: "tomas-leal", name: "Dr Tomás Leal", first: "Tomás", initials: "TL", role: "Consultant cardiologist", type: "doctor",
    level: "Consultant", years: 16, hours: 1540, price: 90,
    conditions: [["heart-rhythm", "atrial-fibrillation"], ["heart-rhythm", "svt"], ["heart-attack", "coronary-heart-disease"], ["heart-attack", "heart-failure"]],
    languages: ["English", "Portuguese", "Spanish"], schedule: [{ days: [1, 2, 4], from: 13, to: 19 }],
    help: ["Understanding an irregular heartbeat", "Making sense of heart tests and scans", "Medicines, and what each one is for", "Living well with heart failure"],
    about: "Tomás sees people with heart rhythm problems and heart disease. A first consultation goes through your symptoms and results so far, and what the options are from here.",
  },
  {
    id: "ruth-calloway", name: "Ruth Calloway", first: "Ruth", initials: "RC", role: "Cardiac rehabilitation nurse", type: "nurse",
    level: "Specialist", years: 10, hours: 2300, price: 40,
    conditions: [["heart-attack", "heart-attack"], ["heart-attack", "angina"], ["blood-pressure", "high-blood-pressure"]],
    languages: ["English"], schedule: [{ days: [0, 1, 2, 3, 4, 5, 6], from: 8, to: 12 }],
    help: ["Getting active again after a heart attack", "Knowing which symptoms to act on", "Blood pressure checks at home", "Confidence for everyday life"],
    about: "Ruth supports people through the weeks and months after a heart attack or a diagnosis of angina. Partners are welcome to join the call too.",
  },
  {
    id: "meilin-chau", name: "Dr Mei Lin Chau", first: "Mei Lin", initials: "MC", role: "Consultant diabetologist", type: "doctor",
    level: "Consultant", years: 13, hours: 1260, price: 85,
    conditions: [["diabetes", "type-2"], ["diabetes", "type-1"], ["diabetes", "prediabetes"], ["thyroid", "underactive"], ["thyroid", "overactive"]],
    languages: ["English", "Cantonese"], schedule: [{ days: [3, 5], from: 9, to: 15 }],
    help: ["Making sense of blood sugar results", "Medicines and insulin, step by step", "Thyroid tests and treatment", "Looking after your eyes, feet and kidneys"],
    about: "Mei Lin looks after people with diabetes and thyroid conditions. A first consultation reviews your results and how things are day to day, and agrees what to focus on first.",
  },
  {
    id: "sophie-adair", name: "Sophie Adair", first: "Sophie", initials: "SA", role: "Specialist dietitian", type: "diet",
    level: "Specialist", years: 7, hours: 840, price: 45,
    conditions: [["diabetes", "type-2"], ["diabetes", "prediabetes"], ["weight", "obesity"], ["kidneys", "chronic-kidney-disease"]],
    languages: ["English"], schedule: [{ days: [2, 3, 4, 5, 6], from: 12, to: 18 }],
    help: ["Eating well with diabetes", "Weight, at a pace that suits you", "Food choices for kidney health", "Simple meals when energy is low"],
    about: "Sophie helps people find a way of eating that fits their condition and their life. Bring a rough idea of what you usually eat in a day.",
  },
  {
    id: "joseph-adeyemi", name: "Joseph Adeyemi", first: "Joseph", initials: "JA", role: "Musculoskeletal physiotherapist", type: "physio",
    level: "Senior", years: 9, hours: 1980, price: 55,
    conditions: [["back-neck", "back-pain"], ["back-neck", "neck-pain"], ["joint-replacement", "hip-replacement"], ["joint-replacement", "knee-replacement"]],
    languages: ["English", "Yoruba"], schedule: [{ days: WEEKDAYS, from: 16, to: 20 }],
    help: ["Back and neck pain that keeps coming back", "Getting moving after a hip or knee replacement", "Exercises you can do at home", "Getting back to work and hobbies"],
    about: "Joseph works with people with back and neck pain and after joint replacements. The first consultation includes a look at how you move on camera and a few exercises to start with.",
  },
  {
    id: "sarah-whitfield", name: "Dr Sarah Whitfield", first: "Sarah", initials: "SW", role: "Clinical oncologist", type: "doctor",
    level: "Consultant", years: 15, hours: 1100, price: 90,
    conditions: [["common-cancers", "breast"], ["common-cancers", "bowel"], ["after-treatment", "cancer-fatigue"], ["after-treatment", "late-effects"]],
    languages: ["English"], schedule: [{ days: [2, 5], from: 10, to: 16 }],
    help: ["Questions about your treatment plan", "Side effects and how to manage them", "Tiredness and other effects after treatment", "What follow-up looks like"],
    about: "Sarah treats people with breast and bowel cancer and supports them after treatment ends. A first consultation is a chance to ask the questions that did not fit into a busy clinic.",
  },
  {
    id: "elena-rossi", name: "Dr Elena Rossi", first: "Elena", initials: "ER", role: "Consultant nephrologist", type: "doctor",
    level: "Consultant", years: 12, hours: 1020, price: 85,
    conditions: [["kidneys", "chronic-kidney-disease"], ["kidneys", "kidney-failure-dialysis"], ["kidneys", "kidney-transplant"], ["liver", "fatty-liver"]],
    languages: ["English", "Italian"], schedule: [{ days: [1, 4], from: 9, to: 13 }],
    help: ["Understanding your kidney results", "Slowing kidney disease down", "Choices about dialysis and transplant", "Medicines that are kind to the kidneys"],
    about: "Elena looks after people with kidney disease at every stage. A first consultation goes through your results and what they mean, and what can help protect your kidneys.",
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

// Everyone, as this device knows them: the examples with any changes made to them in the clinician portal here, and a
// clinician who signed up on this device (lib/clinician-portal.ts keeps those and sets the list).
let everyone: Clinician[] = CLINICIANS;
export const allClinicians = () => everyone;
export const setAllClinicians = (list: Clinician[]) => { everyone = list; };
/** Those in the directory: everyone not paused. */
export const listedClinicians = () => everyone.filter(clinician => clinician.listed !== false);

export const findClinician = (id: string | null | undefined) => everyone.find(clinician => clinician.id === id);

/** "Consultant · 14 years". */
export const experienceText = (clinician: Clinician) => `${clinician.level} · ${clinician.years} ${clinician.years === 1 ? "year" : "years"}`;
/** "1,320 consultation hours", or "New on Rehyn". */
export const hoursText = (clinician: Clinician) =>
  clinician.hours > 0 ? `${clinician.hours.toLocaleString("en-GB")} consultation ${clinician.hours === 1 ? "hour" : "hours"}` : "New on Rehyn";
/** "£85". */
export const priceText = (price: number) => `£${price}`;

// ----------------------------------------------------------------------------------------------- free times

const HOUR_MS = 3_600_000;
/** How far ahead a consultation can be asked for, and how far ahead "free soon" looks: the next 48 hours. */
export const WINDOW_HOURS = 48;
/** How long a consultation is. */
export const CONSULTATION_MINUTES = 30;

/** Some of their hours are already taken by other people: the same ones each time, so the page doesn't jump about. */
function taken(clinician: Clinician, start: Date) {
  let hash = 0;
  for (const char of `${clinician.id}${Math.floor(start.getTime() / HOUR_MS)}`) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return hash % 3 === 0;
}

/** Whether an hour starting at `start` is in their usual hours and not in time off. */
export const works = (clinician: Clinician, start: Date) =>
  clinician.schedule.some(hours => hours.days.includes(start.getDay()) && start.getHours() >= hours.from && start.getHours() < hours.to)
  && !(clinician.timeOff ?? []).some(off => start.getTime() < off.to && start.getTime() + HOUR_MS > off.from);

/** The times they are free, on the hour, from at least an hour after `now` until `hours` hours on. `busy`: start times
 *  already booked with them on this device. An example clinician's other bookings are made up (`taken`); a clinician
 *  who signed up here has none but their own. */
export function freeTimes(clinician: Clinician, now = new Date(), hours = WINDOW_HOURS, busy: number[] = []): Date[] {
  const start = new Date(now);
  start.setMinutes(0, 0, 0);
  const end = now.getTime() + hours * HOUR_MS;
  const times: Date[] = [];
  for (let at = start.getTime() + 2 * HOUR_MS; at < end; at += HOUR_MS) {
    const time = new Date(at);
    if (works(clinician, time) && (clinician.own || !taken(clinician, time)) && !busy.some(booked => Math.abs(booked - at) < HOUR_MS)) times.push(time);
  }
  return times;
}

/** Whether they have any free time in the next 48 hours. */
export const freeSoon = (clinician: Clinician, now = new Date()) => freeTimes(clinician, now).length > 0;

/** Whether an urgent request reaches them now: free in the next 48 hours (or today only, if they chose that), unless they switched alerts off. */
export function alertable(clinician: Clinician, now = new Date()) {
  const choice = clinician.urgentAlerts ?? "free48";
  if (choice === "never") return false;
  const times = freeTimes(clinician, now);
  return choice === "today" ? times.some(time => time.toDateString() === now.toDateString()) : times.length > 0;
}

/** Their first free time in the next fortnight. */
export const nextFree = (clinician: Clinician, now = new Date()): Date | undefined => freeTimes(clinician, now, 24 * 14)[0];

const dayStart = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();

/** "Today", "Tomorrow" or "Wed 4 Nov". */
export function dayText(date: Date, now = new Date()) {
  const days = Math.round((dayStart(date) - dayStart(now)) / 86_400_000);
  if (days === 0) return "Today";
  if (days === 1) return "Tomorrow";
  return date.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
}

/** "14:00". */
export const clockText = (date: Date) => date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

/** "Today, 14:00". */
export const whenText = (date: Date, now = new Date()) => `${dayText(date, now)}, ${clockText(date)}`;

// ------------------------------------------------------------------------------------------- group sessions

/** A free weekly group session a clinician hosts to answer questions. */
export type WeeklySession = { id: string; clinicianId: string; title: string; about: string; day: number; hour: number; minute: number; minutes: number; spaces: number };

export const WEEKLY_SESSIONS: WeeklySession[] = [
  { id: "moving-after-stroke", clinicianId: "priya-raman", title: "Moving again after a stroke", about: "Walking, balance and exercises at home: bring your questions for a neuro physio.", day: 1, hour: 17, minute: 0, minutes: 45, spaces: 12 },
  { id: "low-mood-after-illness", clinicianId: "kwame-mensah", title: "Low mood after an illness", about: "An open hour on worry, low mood and getting your confidence back.", day: 2, hour: 18, minute: 30, minutes: 60, spaces: 15 },
  { id: "diabetes-questions", clinicianId: "meilin-chau", title: "Your diabetes questions", about: "Blood sugar, medicines and test results, answered in plain words.", day: 3, hour: 19, minute: 0, minutes: 45, spaces: 20 },
  { id: "heart-recovery", clinicianId: "ruth-calloway", title: "After a heart attack", about: "Getting active again, symptoms to act on and living with angina.", day: 4, hour: 12, minute: 30, minutes: 45, spaces: 15 },
  { id: "words-and-swallowing", clinicianId: "hannah-brooks", title: "Words, speech and swallowing", about: "For people with aphasia or swallowing changes, and the family who help.", day: 6, hour: 11, minute: 0, minutes: 45, spaces: 10 },
];

/** One sitting of a group session: a weekly one on a given day, or one a clinician set up in their portal (which may
 *  repeat weekly too). `groupId` is the Library group it is listed with. */
export type GroupSession = { id: string; clinicianId: string; title: string; about: string; start: number; minutes: number; spaces: number; weekly: boolean; groupId?: string };

/** The next sitting of each weekly session (one still running counts), as dated sessions. */
export function nextWeeklySessions(now = new Date()): GroupSession[] {
  return WEEKLY_SESSIONS.map(series => {
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), series.hour, series.minute);
    start.setDate(start.getDate() + ((series.day - start.getDay() + 7) % 7));
    if (start.getTime() + series.minutes * 60_000 <= now.getTime()) start.setDate(start.getDate() + 7);
    const stamp = `${start.getFullYear()}${String(start.getMonth() + 1).padStart(2, "0")}${String(start.getDate()).padStart(2, "0")}`;
    return { id: `${series.id}-${stamp}`, clinicianId: series.clinicianId, title: series.title, about: series.about, start: start.getTime(), minutes: series.minutes, spaces: series.spaces, weekly: true };
  });
}

/** The group sessions to list: the weekly ones and any set up in the portal that haven't finished, soonest first. */
export function upcomingSessions(created: GroupSession[], now = new Date()): GroupSession[] {
  const week = 7 * 86_400_000;
  const current = created.map(session => {
    if (!session.weekly || session.start + session.minutes * 60_000 > now.getTime()) return session;
    // A repeating one moves on a week at a time; each sitting has its own id (and room).
    const weeks = Math.ceil((now.getTime() - (session.start + session.minutes * 60_000)) / week);
    return { ...session, start: session.start + weeks * week, id: `${session.id}-w${weeks}` };
  });
  return [...nextWeeklySessions(now), ...current.filter(session => session.start + session.minutes * 60_000 > now.getTime())]
    .filter(session => findClinician(session.clinicianId))
    .sort((a, b) => a.start - b.start);
}

/** The room opens ten minutes before a session starts and closes when it ends. */
export const sessionOpen = (session: GroupSession, now = Date.now()) => now >= session.start - 10 * 60_000 && now < session.start + session.minutes * 60_000;
