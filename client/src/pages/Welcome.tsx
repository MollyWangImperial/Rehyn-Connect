// The date line at the top of every page ("WEDNESDAY, 14 OCTOBER"). The welcome page that lived here
// led into Alira and the movement check, which Rehyn: Connect does not have.
export function todayLabel(now = new Date()): string {
  return `${now.toLocaleDateString("en-GB", { weekday: "long" })}, ${now.toLocaleDateString("en-GB", { day: "numeric", month: "long" })}`.toUpperCase();
}
