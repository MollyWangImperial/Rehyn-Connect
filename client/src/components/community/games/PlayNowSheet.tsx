import { useEffect, useId, useRef, useState } from "react";
import { gameInfo, people, type GameId, type PersonId } from "@/content/community-samples";
import { communityStore, listNames, openPlayers, useCommunity, type GroupGame } from "@/lib/community-store";
import CommunityDialog from "../dialog";
import { useLater, useStill } from "../hooks";
import { CloseIcon, UsersIcon } from "../icons";
import { Face, MyFace } from "../parts";
import { GameTick } from "./pieces";
import { GamePicker } from "./StartGameSheet";
import "@/pages/community-games.css";

type Step = "pick" | "finding" | "matched";
const nameOf = (who: PersonId) => people[who].name;
/** The line every Play now screen says, so nobody takes the other player for a real person. */
export const COMPUTER_NOTE = "In this preview the other player is played by the computer.";

/**
 * "Play now" from the Groups page: pick a game (the same nine as in a group), then the person is
 * matched straight away with a member who is free, and the game opens. No group is made. `onPlay`
 * opens the game once the match is shown; chess and Battleships can be played, the others show
 * that they are coming soon.
 */
export default function PlayNowSheet({ onClose, onPlay }: { onClose: () => void; onPlay: (game: GroupGame) => void }) {
  const memory = useCommunity();
  const later = useLater();
  const still = useStill();
  const titleId = useId();
  const [step, setStep] = useState<Step>("pick");
  const [type, setType] = useState<GameId>("chess");
  const [game, setGame] = useState<GroupGame | null>(null);
  const [problem, setProblem] = useState("");
  const [returning, setReturning] = useState(false);
  const round = useRef(0);
  const info = gameInfo(type);
  const free = openPlayers(memory).slice(0, info.min - 1);
  const names = listNames(free.map(nameOf));

  // "Finding someone…" for a moment, then the match, then the game opens. With less motion asked for, it is quicker.
  useEffect(() => {
    if (step !== "finding") return;
    const mine = ++round.current;
    later(() => {
      if (round.current !== mine) return;
      const made = communityStore.startOpenGame(type);
      if (!made) { setProblem("Nobody is free to play that just now. Try another game."); setStep("pick"); return; }
      setGame(made);
      setStep("matched");
    }, still ? 400 : 1600);
  }, [step, type, later, still]);
  useEffect(() => {
    if (step !== "matched" || !game) return;
    const mine = round.current;
    later(() => { if (round.current === mine) onPlay(game); }, still ? 600 : 1400);
  }, [step, game, later, still, onPlay]);

  const find = () => {
    if (free.length < info.min - 1) { setProblem("Nobody is free to play that just now. Try another game."); return; }
    setProblem("");
    setStep("finding");
  };
  const titles: Record<Step, string> = { pick: "Play now", finding: "Finding someone…", matched: `Matched with ${names}` };
  const lines: Record<Step, string> = {
    pick: "Pick a game and you'll be matched with a member who is free. No group needed.",
    finding: `Looking for someone free to play ${info.name}.`,
    matched: `${names} ${free.length === 1 ? "is" : "are"} ready. Opening your game…`,
  };

  return (
    <CommunityDialog kind="sheet" labelledBy={titleId} onClose={onClose} className="cm-gs-sheet">
      <div className="cm-dialog-head">
        <div className="cm-dialog-titles">
          <p className="cm-gs-eyebrow"><UsersIcon size={14} strokeWidth={2.2} />Play with someone new</p>
          <h2 className="cm-dialog-title cm-dialog-title-small" id={titleId}>{titles[step]}</h2>
          <p>{lines[step]}</p>
        </div>
        <button type="button" className="cm-dialog-close" aria-label="Close" onClick={onClose}><CloseIcon size={22} /></button>
      </div>

      {step === "pick" && (
        <div className="cm-gs-step cm-gs-step-pick cm-rise">
          <GamePicker chosen={type} onPick={next => { setType(next); setProblem(""); }} returning={returning} />
          {problem && <p className="cm-problem" role="alert">{problem}</p>}
          <p className="cm-pn-note">{COMPUTER_NOTE}</p>
          <button type="button" className="cm-gs-next" onClick={find}>{`Next: find someone to play ${info.name}`}</button>
        </div>
      )}

      {step !== "pick" && (
        <div className="cm-gs-step cm-rise">
          <div className="cm-gs-lobby" role="status">
            <span className="cm-gs-seat"><MyFace size={84} className="cm-gs-me" /><b>You</b><span>Ready</span></span>
            {free.map(who => (
              <span key={who} className="cm-gs-versus">
                <span className="cm-gs-vs" aria-hidden="true">vs</span>
                <span className={`cm-gs-seat ${step === "matched" ? "is-ready" : ""}`}>
                  <span className="cm-gs-face">
                    {step === "matched" ? <Face who={who} size={84} /> : <span className="cm-pn-unknown" aria-hidden="true"><UsersIcon size={40} /></span>}
                    {step === "matched" && <span className="cm-gs-yes cm-pop" aria-hidden="true"><GameTick /></span>}
                  </span>
                  <b>{step === "matched" ? nameOf(who) : "Someone"}</b>
                  {step === "matched" ? <span className="cm-gs-said cm-pop">Matched!</span> : <span className="cm-typing-dots" aria-hidden="true"><i /><i /><i /></span>}
                </span>
              </span>
            ))}
          </div>
          <p className="cm-pn-note">{COMPUTER_NOTE}</p>
          <div className="cm-gs-row">
            <button type="button" className="cm-gs-back" onClick={() => { round.current++; setGame(null); setReturning(true); setStep("pick"); }}>Change game</button>
            <button type="button" className={`cm-gs-play ${step === "matched" ? "" : "is-waiting"}`} aria-disabled={step !== "matched"} onClick={() => { if (game) { round.current++; onPlay(game); } }}>
              {step === "matched" ? "Let's play" : "Finding someone…"}
            </button>
          </div>
        </div>
      )}
    </CommunityDialog>
  );
}
