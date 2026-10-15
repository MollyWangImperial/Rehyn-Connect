import { useOptionalSettings } from "./AccountSettings";
import { canShare, useConsents } from "@/lib/consent";
import "./sharing-locked.css";

/**
 * After the health information consent is withdrawn the person can still read everything, but not
 * post, comment, message or join chats (Privacy Notice 5.3, Data and permissions screen 2.1). Each
 * composer shows this in place of its form until the consent is given again in Settings.
 */
export function useCanShare(): boolean {
  const consents = useConsents();
  // Locked once the consent has been withdrawn (or its wording has a new version); before anyone has
  // joined there is nothing to lock, and the Join page stands in front of the composers anyway.
  return canShare(consents) || (consents.health === null && consents.healthWithdrawnAt === null);
}

export function SharingLocked({ what = "post" }: { what?: "post" | "comment" | "message" | "chat" | "answer" }) {
  const openSettings = useOptionalSettings();
  const verb = { post: "post", comment: "comment", message: "send messages", chat: "join the chat", answer: "answer" }[what];
  return (
    <div className="sharing-locked" role="status">
      <p><b>You can read, but not {verb}, for now.</b> You withdrew your agreement for Rehyn to use health information you share. Turn it back on in Settings to {verb} again.</p>
      {openSettings && <button type="button" className="sharing-locked-button" onClick={event => openSettings(event.currentTarget, "data")}>Open Data and permissions</button>}
    </div>
  );
}
