import { needsPerson, useLoungeModeration } from "./lounge-moderation";

// The care team's admin space: reviewing held lounge photos and reported posts.
export const CARE_TEAM_PATH = "/care-team";

/** How many items wait for a person in the care team's queue (the sidebar badge). */
export function useCareTeamWaiting(): number {
  return needsPerson(useLoungeModeration()).length;
}
