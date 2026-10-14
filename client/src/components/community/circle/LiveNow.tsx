import { MEMBER_ROOM_IDS, MEMBER_ROOMS, type MemberRoomId, type RoomSeat } from "@/content/circle-events";
import { people, type PersonId } from "@/content/community-samples";
import { dateField, roomToday, useCircleEvents } from "@/lib/circle-events-store";
import { isBlocked, useCommunity } from "@/lib/community-store";
import { Face, LiveDot, MyFace } from "../parts";
import { countWords } from "./shared";

const isPersonSeat = (who: RoomSeat): who is PersonId => who in people;

/**
 * Above Alira's circle: the circles members are hosting right now, Alira helping in each. The person's own
 * circle opens for them as host; anyone else's, as a member.
 */
export default function LiveNow({ onOpen }: { onOpen: (room: MemberRoomId) => void }) {
  const community = useCommunity();
  const memory = useCircleEvents();
  const day = dateField(new Date());
  const rooms = MEMBER_ROOM_IDS.map(id => MEMBER_ROOMS[id]).filter(room => room.host === "you" || !isBlocked(community, room.host));
  if (!rooms.length) return null;
  return (
    <section className="cm-ce-live-now" aria-label="Member circles on now">
      <p className="cm-ce-live-now-title"><LiveDot />Also on now · member circles</p>
      <ul>
        {rooms.map(room => {
          const today = roomToday(memory, room.id, day);
          const here = room.seats.filter(who => who !== "alira" && !today.removed.includes(who) && !(isPersonSeat(who) && isBlocked(community, who))).length;
          const host = room.host;
          return (
            <li key={room.id}>
              {host === "you" ? <MyFace size={40} /> : <Face who={host} size={40} />}
              <span className="cm-ce-live-now-text">
                <b>{room.name}</b>
                <span>{`${host === "you" ? "You're hosting" : `Hosted by ${people[host].name}`} · Alira helping · ${countWords(here)} here`}</span>
              </span>
              <button type="button" className={`cm-ce-button ${host === "you" ? "is-rust" : "is-teal"}`} onClick={() => onOpen(room.id)}>
                {host === "you" ? "Open your circle" : "Join"}<span className="cm-sr">{`: ${room.name}`}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
