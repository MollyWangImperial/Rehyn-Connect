import { useEffect, useId, useRef, useState } from "react";
import { cardWords, describeHolding, HAND_NAMES } from "@/lib/poker-hands";
import { act, botMove, nextStreet, options, playersAfter, startHand, STARTING_CHIPS, strengthOf, type Holdem, type Player } from "@/lib/poker-holdem";
import { ME, pokerNight } from "@/lib/poker-night";
import { CloseIcon, ShieldIcon, SpeakerIcon, ClockIcon } from "../icons";
import { CardBack, PlayingCard, PokerFace, playerName, SuitGlyph } from "./PokerParts";

// The poker night table (board 6, PokerTables): a felt table with six seats, the dealer button, the
// pot and the cards on the table, dealt flop, turn, then river. Your hand is shown large with a
// plain-words helper; Fold, Call or Check, and Raise with quick amounts. "What beats what?" lists the
// hands, best first, and a banner names the winner, with "Next hand". It is a real game of Texas
// Hold'em (lib/poker-holdem): a fair shuffle, a proper hand evaluator, and simple computer players in
// the other seats. There is no timer on your turn, ever. Chips only: no real money, nothing to buy.

/**
 * Which of the six spots round the table (pk-spot-0 to 5 in the CSS: yours at the bottom, then
 * clockwise) a table of 2 to 6 uses, so the seats spread evenly round it. The CSS places each spot,
 * and its dealer button, differently on a wide table and a narrow one.
 */
const SPOTS_FOR: Record<number, number[]> = { 2: [0, 3], 3: [0, 2, 4], 4: [0, 1, 3, 5], 5: [0, 1, 2, 4, 5], 6: [0, 1, 2, 3, 4, 5] };
const RAISES = [20, 50, 100];

/** Reads words with this device's own voice (nothing is sent anywhere). False if it has none. */
function readOut(words: string): boolean {
  if (typeof window === "undefined" || !("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") return false;
  try {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    const local = voices.filter(voice => voice.localService);
    if (voices.length > 0 && local.length === 0) return false;
    const line = new SpeechSynthesisUtterance(words);
    line.lang = "en-GB";
    line.rate = 0.9;
    const english = local.find(voice => voice.lang === "en-GB") ?? local.find(voice => voice.lang.toLowerCase().startsWith("en"));
    if (english) line.voice = english;
    synth.cancel();
    synth.speak(line);
    return true;
  } catch { return false; }
}

/** A gentle word on how good your cards are. */
function advice(strength: number): string {
  if (strength >= 0.8) return "Very strong.";
  if (strength >= 0.6) return "A strong hand.";
  if (strength >= 0.4) return "Worth a look.";
  return "Not much yet. Folding is fine.";
}

export type PokerTableProps = {
  /** Who sits at the table, the person (ME) first. */
  seats: string[];
  /** "Table 3 · Texas Hold'em". */
  label: string;
  /** A line under the title, such as why this is a practice table. */
  note?: string;
  /** Whether the poker page is showing: the computer players wait while it is hidden. */
  active: boolean;
  bigCards: boolean;
};

export default function PokerTable({ seats, label, note, active, bigCards }: PokerTableProps) {
  const players = (): Player[] => seats.map(id => ({ id, name: playerName(id), chips: STARTING_CHIPS, human: id === ME }));
  const [game, setGame] = useState<Holdem>(() => startHand(players(), Math.floor(Math.random() * seats.length), 1));
  const [raiseOpen, setRaiseOpen] = useState(false);
  const [ranksOpen, setRanksOpen] = useState(false);
  const [live, setLive] = useState("");
  const headId = useId();
  const box = useRef<HTMLElement>(null);
  const nextButton = useRef<HTMLButtonElement>(null);
  const me = game.seats[0];
  const myTurn = game.toAct === 0 && !game.result;
  const opts = options(game);
  const spots = SPOTS_FOR[Math.min(6, Math.max(2, seats.length))];

  // The computer players take their turns, and the next cards are dealt, at an easy pace (slower
  // with big cards). Nothing happens while the page is hidden, and nobody hurries you.
  useEffect(() => {
    if (!active || game.result) return;
    if (game.toAct >= 0 && game.seats[game.toAct].human) return;
    const pace = bigCards ? 1.6 : 1;
    const timer = window.setTimeout(() => setGame(now => (now.toAct >= 0 ? act(now, botMove(now)) : nextStreet(now))), (game.toAct >= 0 ? 1100 : 900) * pace);
    return () => window.clearTimeout(timer);
  }, [game, active, bigCards]);

  // A screen reader hears the turns that matter: yours, new cards on the table, and who won.
  const lastStreet = useRef(game.street);
  useEffect(() => {
    if (game.result) {
      setLive(bannerTitle(game));
      // The action buttons are no use now: the focus goes to Next hand if it was on them.
      const focused = document.activeElement;
      if (!focused || focused === document.body || box.current?.querySelector(".pk-actions")?.contains(focused)) nextButton.current?.focus({ preventScroll: true });
    } else if (game.street !== lastStreet.current && game.board.length) {
      const name = game.street === "flop" ? "The flop" : game.street === "turn" ? "The turn" : "The river";
      setLive(`${name}: ${game.board.slice(game.street === "flop" ? 0 : -1).map(cardWords).join(", ")}.`);
    } else if (myTurn) setLive(`Your turn. ${describeHolding(me.cards, game.board).words}.`);
    lastStreet.current = game.street;
  }, [game.street, game.result, myTurn]);

  const move = (kind: "fold" | "call" | "check") => { if (myTurn) { setRaiseOpen(false); setGame(act(game, { kind })); } };
  const raise = (by: number) => { if (myTurn) { setRaiseOpen(false); setGame(act(game, { kind: "raise", by })); } };
  const nextHand = () => {
    const after = playersAfter(game).map(player => (player.human || player.chips > 0 ? player : { ...player, chips: STARTING_CHIPS }));
    setGame(startHand(after, game.dealer, game.hand + 1));
    setRanksOpen(false);
  };
  const startAgain = () => setGame(startHand(players(), game.dealer, game.hand + 1));

  const holding = describeHolding(me.cards, game.board);
  const myRank = me.folded || me.out ? -1 : 9 - holding.category;
  const acting = game.toAct >= 0 ? game.seats[game.toAct] : null;
  const helpTitle = me.out ? "Sitting this one out" : me.folded ? "You folded" : holding.words;
  const helpNote = game.result ? "Cards are on the table." : me.out ? "You're out of chips for this hand." : me.folded ? "Sit back and watch this hand." : myTurn ? `Your turn. ${advice(strengthOf(me, game.board))} No timer, take your time.` : `Waiting for ${acting ? acting.name : "the next card"}…`;
  const raises = RAISES.filter(by => by <= opts.maxRaise);
  const quick = raises.length ? raises : opts.maxRaise > 0 ? [opts.maxRaise] : [];

  const readAloud = () => {
    const board = game.board.length ? `On the table: ${game.board.map(cardWords).join(", ")}.` : "No cards on the table yet.";
    const yours = me.cards.length ? `Your cards: ${me.cards.map(cardWords).join(" and ")}.` : "";
    const turn = myTurn ? (opts.toCall ? ` It's your turn: call ${opts.toCall}, raise or fold.` : " It's your turn: check, raise or fold.") : "";
    const words = `${yours} ${board} ${me.folded ? "You folded." : `You have ${holding.words.charAt(0).toLowerCase()}${holding.words.slice(1)}.`} The pot is ${game.pot} chips.${turn}`;
    if (!readOut(words)) setLive("Read aloud isn't available on this device.");
  };

  return (
    <section ref={box} className={`pk-table-card ${bigCards ? "is-big" : ""}`} aria-labelledby={headId}>
      <header className="pk-table-head">
        <div className="pk-table-titles">
          <h2 className="pk-table-title" id={headId}><SuitGlyph suit="s" size={18} colour="#E2C47E" />{label}<span className="pk-hand-no">{`Hand ${game.hand}`}</span></h2>
          {note && <p className="pk-table-note">{note}</p>}
        </div>
        <div className="pk-table-tools">
          <span className="pk-chips-pill"><ShieldIcon size={14} />Chips only</span>
          <button type="button" className="pk-pill-btn" aria-pressed={bigCards} onClick={() => pokerNight.setBigCards(!bigCards)}>Big cards</button>
          <button type="button" className="pk-pill-btn" onClick={readAloud}><SpeakerIcon size={15} />Read aloud</button>
          <button type="button" className="pk-pill-btn" aria-expanded={ranksOpen} onClick={() => setRanksOpen(!ranksOpen)}>What beats what?</button>
        </div>
      </header>

      <div className="pk-felt-wrap">
        <span className="pk-felt" aria-hidden="true" />
        <div className="pk-centre">
          <p className="pk-pot"><span className="pk-pot-chips" aria-hidden="true"><i /><i /></span>{`Pot ${game.pot}`}</p>
          <div className="pk-board" role="list" aria-label="Cards on the table">
            {Array.from({ length: 5 }, (_, i) => {
              const card = game.board[i];
              return card
                ? <span key={`${game.hand}-${i}`} role="listitem" className="pk-deal" style={{ animationDelay: `${game.street === "flop" && game.board.length === 3 ? i * 0.18 : 0}s` }}><PlayingCard card={card} size="board" /></span>
                : <span key={`${game.hand}-${i}`} className="pk-slot" aria-hidden="true" />;
            })}
          </div>
        </div>

        {game.seats.map((seat, i) => {
          const shown = !!game.result?.value && !seat.folded && !seat.out && i !== 0;
          const label = seat.out ? "Sitting out" : i === 0 && seat.folded ? "Folded" : seat.said;
          const dim = seat.folded || seat.out;
          return (
            <div key={seat.id} className={`pk-seat pk-spot-${spots[i]} ${i === 0 ? "is-me" : ""} ${dim ? "is-out" : ""} ${game.toAct === i ? "is-acting" : ""} ${game.result?.winners.includes(i) ? "is-winner" : ""}`}>
              <PokerFace id={seat.id} size={i === 0 ? 64 : 56} className="pk-seat-face" />
              <span className="pk-seat-name">{`${seat.name} · ${seat.chips}`}</span>
              {label && <span className={`pk-seat-said ${/^(Fold|Folded|Sitting out)$/.test(label) ? "is-fold" : label.startsWith("Raise") ? "is-raise" : ""}`}>{label}</span>}
              {shown && <span className="pk-seat-cards pk-deal">{seat.cards.map((card, n) => <PlayingCard key={n} card={card} size="sm" />)}</span>}
            </div>
          );
        })}
        {[0, 1, 2, 3, 4, 5].filter(spot => !spots.includes(spot)).map(spot => (
          <div key={`free-${spot}`} className={`pk-seat pk-spot-${spot} is-free`} aria-hidden="true">
            <span className="pk-free-ring">+</span><span className="pk-seat-name">Free seat</span>
          </div>
        ))}
        <span className={`pk-dealer pk-spot-${spots[game.dealer]}`} title="Dealer" role="img" aria-label={`${game.dealer === 0 ? "You are" : `${game.seats[game.dealer].name} is`} the dealer`}>D</span>

        {game.result && (
          <div className="pk-win" role="group" aria-label="This hand">
            <span className="pk-win-faces" aria-hidden="true">{game.result.winners.map(at => <PokerFace key={at} id={game.seats[at].id} size={64} />)}</span>
            <p className="pk-win-title">{bannerTitle(game)}</p>
            <p className="pk-win-sub">{bannerSub(game)}</p>
            {me.chips <= 0
              ? <button ref={nextButton} type="button" className="pk-btn pk-btn-deep" onClick={startAgain}>Start again with 1,000 chips</button>
              : <button ref={nextButton} type="button" className="pk-btn pk-btn-deep" onClick={nextHand}>Next hand</button>}
          </div>
        )}

        {ranksOpen && (
          <div className="pk-ranks" role="group" aria-label="What beats what">
            <div className="pk-ranks-head"><span>Best to worst</span><button type="button" className="pk-ranks-close" aria-label="Close the list" onClick={() => setRanksOpen(false)}><CloseIcon size={16} /></button></div>
            <ol className="pk-ranks-list">
              {HAND_NAMES.map((name, i) => (
                <li key={name} className={i === myRank ? "is-you" : ""}><span className="pk-ranks-n">{i + 1}</span>{name}{i === myRank && <span className="pk-ranks-you">You</span>}</li>
              ))}
            </ol>
          </div>
        )}
      </div>

      <div className="pk-me-row">
        <div className={`pk-my-cards ${me.folded || me.out ? "is-out" : ""}`}>
          {me.cards.length ? me.cards.map((card, n) => <PlayingCard key={`${game.hand}-${n}`} card={card} size="hand" tilt={n ? 4 : -4} className={n ? "pk-lower" : ""} />) : <><CardBack size="hand" tilt={-4} /><CardBack size="hand" tilt={4} /></>}
        </div>
        <div className="pk-helper">
          <p className="pk-eyebrow">Your hand</p>
          <p className="pk-helper-title">{helpTitle}</p>
          <p className="pk-helper-note"><ClockIcon size={16} />{helpNote}</p>
        </div>
        <p className="pk-my-chips"><span>Your chips</span><strong>{me.chips}</strong></p>
      </div>

      {raiseOpen && myTurn && (
        <div className="pk-raise" role="group" aria-label="Raise by">
          <span className="pk-raise-label">Raise by</span>
          {quick.map(by => <button key={by} type="button" className="pk-raise-amount" onClick={() => raise(by)}>{by}</button>)}
          <button type="button" className="pk-btn pk-btn-ghost pk-raise-cancel" onClick={() => setRaiseOpen(false)}>Cancel</button>
        </div>
      )}

      <div className={`pk-actions ${myTurn ? "is-on" : ""}`}>
        <button type="button" className="pk-act pk-act-fold" aria-disabled={!myTurn} onClick={() => move("fold")}>Fold</button>
        <button type="button" className={`pk-act pk-act-call ${myTurn ? "pk-nudge" : ""}`} aria-disabled={!myTurn} onClick={() => move(opts.toCall > 0 && myTurn ? "call" : "check")}>{myTurn && opts.toCall > 0 ? `Call ${opts.toCall}` : "Check"}</button>
        <button type="button" className="pk-act pk-act-raise" aria-disabled={!myTurn || !opts.canRaise} aria-expanded={raiseOpen && myTurn} onClick={() => { if (myTurn && opts.canRaise) setRaiseOpen(!raiseOpen); }}>Raise</button>
      </div>
      <p className="cm-sr" aria-live="polite">{live}</p>
    </section>
  );
}

/** "You win 80 chips!", "Margaret wins 80", or a split. */
function bannerTitle(game: Holdem): string {
  const result = game.result;
  if (!result) return "";
  if (result.winners.length > 1) return `Split pot: ${result.winners.map(at => game.seats[at].name).join(" and ")}`;
  const at = result.winners[0];
  return at === 0 ? `You win ${result.share} chips!` : `${game.seats[at].name} wins ${result.share}`;
}

/** Why: the winning hand in plain words, and what it beat. */
function bannerSub(game: Holdem): string {
  const result = game.result;
  if (!result) return "";
  if (!result.value) return result.winners[0] === 0 ? "Everyone else folded." : "Everyone else folded, so the cards stay hidden.";
  const me = game.seats[0];
  const words = result.value.words;
  if (result.winners.includes(0)) return result.winners.length > 1 ? `${words} each.` : `${words} wins it.`;
  if (me.folded || me.out) return `${words} takes it.`;
  return `${words} beats your ${describeHolding(me.cards, game.board).words.replace(/^A /, "").toLowerCase()}.`;
}
