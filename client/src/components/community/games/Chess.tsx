import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "wouter";
import { people, watcherPhrases, type PersonId } from "@/content/community-samples";
import { communityHref, communityStore, isBlocked, listNames, useCommunity } from "@/lib/community-store";
import type { GameModel, GroupModel } from "../group-model";
import { useLater } from "../hooks";
import { BackIcon, ClockIcon, EyeIcon, HandIcon, LockIcon, PauseCircleIcon, PlusIcon, SpeakerIcon } from "../icons";
import { Face, MyFace, toneClass } from "../parts";
import { capturedPieces, colOf, gameStatus, legalMoves, moveCode, moveWords, PIECE_NAMES, playMove, replay, replyMove, rowOf, squareName, type ChessMove, type PieceKind } from "./chess-rules";
import { ChessPiece } from "./pieces";
import "@/pages/community-games.css";

const nameOf = (who: PersonId) => people[who].name;
const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];

/** Reads a line aloud with the device's own voice. Quietly does nothing where that isn't available. */
function say(text: string) {
  try {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  } catch { /* no voice on this device */ }
}

type ChatLine = { id: number; who: PersonId | "you"; text: string };

const UndoIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 14 4 9l5-5" /><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" /></svg>
);

/**
 * Chess in a private group, with no clock. The person plays white: tap a piece to see where it can
 * go, then tap a square. The other player answers after a moment (in this preview, a legal move
 * that takes a piece when it can). A game the person is only watching can't be touched.
 */
export default function ChessGame({ game, group }: { game: GameModel; group: GroupModel }) {
  const memory = useCommunity();
  const later = useLater();
  const playing = game.withYou;
  const opponent = game.players[0];
  const startLength = useRef(game.own ? 0 : game.moves.length);
  const [codes, setCodes] = useState<string[]>(game.moves);
  const [selected, setSelected] = useState<number | null>(null);
  const [thinking, setThinking] = useState(false);
  const [toast, setToast] = useState<{ text: string; who: PersonId | "you"; id: number } | null>(null);
  const [hints, setHints] = useState(true);
  const [big, setBig] = useState(false);
  const [speak, setSpeak] = useState(false);
  const seq = useRef(0);
  const watchers = (game.watchers.length ? game.watchers : group.faces.filter(who => !game.players.includes(who))).filter(who => !isBlocked(memory, who)).slice(0, 3);
  const [chat, setChat] = useState<ChatLine[]>(() => [
    ...(watchers[0] ? [{ id: -2, who: watchers[0], text: playing ? `Go on, ${nameOf(opponent)} always opens like this!` : "This is better than the telly." }] : []),
    ...(playing ? [{ id: -1, who: opponent, text: "Your move, dear. No rush." }] : []),
  ]);

  const { position, history } = useMemo(() => replay(codes), [codes]);
  const status = gameStatus(position);
  const over = status !== "playing";
  const yourTurn = playing && position.turn === "w" && !thinking && !over;
  const targets = selected === null ? [] : legalMoves(position, selected);
  const last = history[history.length - 1]?.move ?? null;

  // Opening a game brings the board into view, and the focus to its heading.
  const card = useRef<HTMLElement>(null);
  useEffect(() => {
    const still = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    card.current?.scrollIntoView({ block: "start", behavior: still ? "instant" : "smooth" });
    card.current?.querySelector<HTMLElement>("[data-view-heading]")?.focus({ preventScroll: true });
  }, []);
  // The person's own games are kept on this device after every move, for "Finish later".
  useEffect(() => { if (playing) communityStore.saveChessMoves(game.id, codes); }, [playing, game.id, codes]);
  // A game opened while it was the other player's turn carries on from there.
  useEffect(() => { if (playing && position.turn === "b" && !thinking && !over) answer(codes); }, []);

  const showToast = (text: string, who: PersonId | "you" = opponent) => {
    const id = ++seq.current;
    setToast({ text, who, id });
    later(() => setToast(current => (current?.id === id ? null : current)), 2800);
  };

  function answer(from: string[]) {
    setThinking(true);
    later(() => {
      const before = replay(from).position;
      const reply = replyMove(before);
      setThinking(false);
      if (!reply) return;
      if (speak) say(`${nameOf(opponent)}: ${moveWords(reply)}`);
      setCodes(list => (list.join() === from.join() ? [...from, moveCode(reply)] : list));
    }, 1600);
  }

  const tap = (square: number) => {
    if (!yourTurn) return;
    const move = targets.find(item => item.to === square);
    if (selected !== null && move) {
      const next = [...codes, moveCode(move)];
      if (speak) say(`You: ${moveWords(move)}`);
      setSelected(null);
      setCodes(next);
      if (gameStatus(playMove(position, move)) === "playing") answer(next);
      return;
    }
    const piece = position.board[square];
    setSelected(piece && piece[0] === "w" && selected !== square ? square : null);
  };

  const askUndo = () => {
    if (thinking) { showToast(`Wait until ${nameOf(opponent)} has moved.`, "you"); return; }
    if (codes.length - startLength.current < 2) { showToast("Nothing to undo yet.", "you"); return; }
    showToast(`Asking ${nameOf(opponent)}…`, "you");
    later(() => {
      setSelected(null);
      setCodes(list => list.slice(0, Math.max(startLength.current, list.length - (list.length % 2 === 0 ? 2 : 1))));
      showToast(`${nameOf(opponent)} said yes. Have another go.`);
    }, 1300);
  };
  const offerDraw = () => {
    showToast("Draw offer sent…", "you");
    later(() => showToast(`${nameOf(opponent)}: Not yet, I have a plan!`), 1400);
  };
  const finishLater = () => showToast(`Saved. Carry on any time from ${group.name}.`, "you");
  const toggleSpeak = () => { if (!speak) say("Moves will be read aloud"); setSpeak(!speak); };
  const sayPhrase = (index: number) => {
    const phrase = watcherPhrases[index];
    setChat(list => [...list, { id: ++seq.current, who: "you", text: phrase.label }]);
    if (!isBlocked(memory, phrase.reply.who)) later(() => setChat(list => [...list, { id: ++seq.current, who: phrase.reply.who, text: phrase.reply.text }]), 1500);
  };

  // What the strip under the board says.
  const white = playing ? "You" : nameOf(game.players[0]);
  const black = playing ? nameOf(opponent) : nameOf(game.players[1] ?? game.players[0]);
  const blackId = playing ? opponent : game.players[1] ?? game.players[0];
  const winner = status === "checkmate" ? (position.turn === "w" ? black : white) : null;
  const statusText = over
    ? status === "checkmate" ? (winner === "You" ? "Checkmate! You won" : `Checkmate. ${winner} won`) : status === "stalemate" ? "Stalemate: it's a draw" : "It's a draw"
    : !playing ? `${position.turn === "w" ? white : black} is thinking` : thinking || position.turn === "b" ? `${nameOf(opponent)} is thinking` : "Your move";
  const hint = over ? "Good game!" : !playing ? `${listNames(watchers.map(nameOf))} ${watchers.length === 1 ? "is" : "are"} watching` : thinking ? "Take your time, there is no clock" : selected !== null ? `Now tap where your ${PIECE_NAMES[position.board[selected]![1] as PieceKind]} should go` : "Tap one of your white pieces";
  const inTurn = yourTurn || over;

  const rows: { n: number; white: string; black: string }[] = [];
  for (let i = 0; i < history.length; i += 2) rows.push({ n: i / 2 + 1, white: history[i].notation, black: history[i + 1]?.notation ?? "" });
  const lastIndex = history.length - 1;

  const square = (index: number) => {
    const piece = position.board[index];
    const light = (rowOf(index) + colOf(index)) % 2 === 0;
    const isLast = !!last && (last.from === index || last.to === index);
    const target: ChessMove | undefined = targets.find(move => move.to === index);
    const name = squareName(index);
    const label = `${name}, ${piece ? `${piece[0] === "w" ? "white" : "black"} ${PIECE_NAMES[piece[1] as PieceKind]}` : "empty"}${target ? `, ${target.captured ? "take it" : "move here"}` : ""}`;
    return (
      <button
        key={index}
        type="button"
        className={`cm-sq ${light ? "is-light" : "is-dark"} ${isLast ? "is-last" : ""} ${selected === index ? "is-selected" : ""}`}
        aria-label={label}
        aria-pressed={selected === index ? true : undefined}
        disabled={!playing}
        onClick={() => tap(index)}
      >
        {piece && <ChessPiece piece={piece} className={`${selected === index ? "is-lifted" : ""} ${last?.to === index ? "cm-drop" : ""}`} />}
        {target && hints && (target.captured ? <span className="cm-sq-take cm-pop" aria-hidden="true" /> : <span className="cm-sq-dot cm-pop" aria-hidden="true" />)}
      </button>
    );
  };

  return (
    <div className="cm-chess">
      <section ref={card} className={`cm-card cm-chess-board-card ${big ? "is-big" : ""}`} aria-labelledby="cm-chess-title">
        <div className="cm-chess-head">
          <Link className="cm-chess-back" href={communityHref("groups", group.id)} aria-label={`Back to ${group.name}`}><BackIcon size={20} /></Link>
          <div className="cm-chess-titles">
            <p className="cm-gs-eyebrow"><LockIcon size={13} strokeWidth={2.2} />{group.name} · private game</p>
            <h2 id="cm-chess-title" tabIndex={-1} data-view-heading>{playing ? `You vs ${nameOf(opponent)}` : `${white} vs ${black}`}</h2>
          </div>
          <span className="cm-chess-clock"><ClockIcon size={15} strokeWidth={2} />No clock</span>
        </div>

        <div className="cm-chess-frame">
          <div className="cm-chess-ranks" aria-hidden="true">{[8, 7, 6, 5, 4, 3, 2, 1].map(rank => <span key={rank}>{rank}</span>)}</div>
          <div className="cm-chess-boardwrap">
            <div className="cm-chess-board" role="group" aria-label="Chess board, white at the bottom">
              {position.board.map((_, index) => square(index))}
            </div>
            <div className="cm-chess-files" aria-hidden="true">{FILES.map(file => <span key={file}>{file}</span>)}</div>
          </div>
        </div>

        <div className={`cm-chess-status ${inTurn ? "is-yours" : ""}`} aria-live="polite">
          {thinking || (!playing && !over) ? <Face who={position.turn === "w" && !playing ? game.players[0] : blackId} size={34} /> : <MyFace size={34} />}
          <span className="cm-chess-status-text">{statusText}{(thinking || (!playing && !over)) && <span className="cm-typing-dots" aria-hidden="true"><i /><i /><i /></span>}</span>
          <span className="cm-chess-hint">{hint}</span>
        </div>

        {toast && (
          <div key={toast.id} className="cm-chess-toast" role="status">
            {toast.who === "you" ? <MyFace size={40} /> : <Face who={toast.who} size={40} />}
            <span>{toast.text}</span>
          </div>
        )}
      </section>

      <div className="cm-chess-side">
        <section className="cm-card cm-chess-players" aria-label="Players">
          <div className="cm-chess-player">
            <Face who={blackId} size={52} className={!yourTurn && !over && playing ? "cm-chess-glow" : ""} />
            <span className="cm-chess-who"><b>{black} <span>· black</span></b><span className={thinking ? "is-busy" : ""}>{!playing ? (position.turn === "b" ? "Thinking…" : "Waiting") : thinking ? "Thinking…" : "Waiting for you"}</span></span>
            <span className="cm-chess-taken">{capturedPieces(position.board, "w").map((piece, index) => <ChessPiece key={index} piece={piece} size={24} />)}</span>
          </div>
          <div className="cm-chess-player">
            {playing ? <MyFace size={52} className={yourTurn ? "cm-chess-glow" : ""} /> : <Face who={game.players[0]} size={52} />}
            <span className="cm-chess-who"><b>{white} <span>· white</span></b><span className={yourTurn ? "is-go" : ""}>{!playing ? (position.turn === "w" ? "Thinking…" : "Waiting") : yourTurn ? "Your move" : over ? "Game over" : `Waiting for ${nameOf(opponent)}`}</span></span>
            <span className="cm-chess-taken">{capturedPieces(position.board, "b").map((piece, index) => <ChessPiece key={index} piece={piece} size={24} />)}</span>
          </div>
        </section>

        <section className="cm-card cm-chess-moves" aria-labelledby="cm-chess-moves-title">
          <div className="cm-chess-moves-head"><h3 className="cm-side-title" id="cm-chess-moves-title">Moves</h3><span>{`${rows.length} ${rows.length === 1 ? "move" : "moves"} · started ${game.when || "today"}`}</span></div>
          <ol className="cm-chess-list">
            {rows.slice(-5).map(row => (
              <li key={row.n}>
                <span>{row.n}.</span>
                <span className={(row.n - 1) * 2 === lastIndex ? "is-new" : ""}>{row.white}</span>
                <span className={(row.n - 1) * 2 + 1 === lastIndex ? "is-new" : ""}>{row.black}</span>
              </li>
            ))}
          </ol>
        </section>

        {playing && (
          <div className="cm-chess-actions">
            <button type="button" onClick={askUndo} disabled={over}><UndoIcon />Ask to undo</button>
            <button type="button" onClick={offerDraw} disabled={over}><HandIcon size={22} strokeWidth={2} />Offer a draw</button>
            <button type="button" onClick={finishLater}><PauseCircleIcon size={22} strokeWidth={2} />Finish later</button>
          </div>
        )}
        <div className="cm-chess-chips">
          <button type="button" role="switch" aria-checked={hints} className={hints ? "is-on" : ""} onClick={() => setHints(!hints)}><EyeIcon size={18} strokeWidth={2} />Show moves</button>
          <button type="button" role="switch" aria-checked={big} className={big ? "is-on" : ""} onClick={() => setBig(!big)}><PlusIcon size={18} />Big pieces</button>
          <button type="button" role="switch" aria-checked={speak} className={speak ? "is-on" : ""} onClick={toggleSpeak}><SpeakerIcon size={18} strokeWidth={2} />Read aloud</button>
        </div>

        <section className="cm-card cm-chess-watch" aria-label="Watching">
          <div className="cm-chess-watch-head">
            <span className="cm-face-stack" aria-hidden="true">{watchers.map(who => <Face key={who} who={who} size={30} />)}</span>
            <b>{watchers.length ? `${listNames(watchers.map(nameOf))} ${watchers.length === 1 ? "is" : "are"} watching` : "Nobody is watching yet"}</b>
            <span className="cm-dot cm-dot-green cm-live" aria-hidden="true" />
          </div>
          <ol className="cm-chess-chat" aria-live="polite">
            {chat.slice(-3).map(line => (
              <li key={line.id} className={`cm-rise ${line.who === "you" ? "is-mine" : ""}`}>
                {line.who === "you" ? <MyFace size={30} /> : <Face who={line.who} size={30} />}
                <p><b>{line.who === "you" ? "You" : nameOf(line.who)}</b> {line.text}</p>
              </li>
            ))}
          </ol>
          <div className="cm-quick-row" role="group" aria-label="Say something">
            {watcherPhrases.map((phrase, index) => <button key={phrase.label} type="button" className={`cm-quick ${toneClass(phrase.tone)}`} onClick={() => sayPhrase(index)}>{phrase.label}</button>)}
          </div>
        </section>
      </div>
    </div>
  );
}
