import { MEMBER_ROOM_IDS, MEMBER_ROOMS, type MemberRoomId } from "@/content/circle-events";
import { people } from "@/content/community-samples";
import { isBlocked, useCommunity } from "@/lib/community-store";
import { Face, LiveDot, MyFace } from "../parts";

/**
 * Above Alira's circle: the circles members are hosting right now, Alira helping in each. The person's own
 * circle opens for them as host; anyone else's, as a member.
 */
export default function LiveNow({ onOpen }: { onOpen: (room: MemberRoomId) => void }) {
  const community = useCommunity();
  const rooms = MEMBER_ROOM_IDS.map(id => MEMBER_ROOMS[id]).filter(room => room.host === "you" || !isBlocked(community, room.host));
  if (!rooms.length) return null;
  return (
    <section className="cm-ce-live-now" aria-label="Member circles on now">
      <p className="cm-ce-live-now-title"><LiveDot />Also on now · member circles</p>
      <ul>
        {rooms.map(room => {
          const host = room.host;
          return (
            <li key={room.id}>
              {host === "you" ? <MyFace size={40} /> : <Face who={host} size={40} />}
              <span className="cm-ce-live-now-text">
                <b>{room.name}</b>
                <span>{host === "you" ? "You are hosting" : `Hosted by ${people[host].name}`}</span>
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
