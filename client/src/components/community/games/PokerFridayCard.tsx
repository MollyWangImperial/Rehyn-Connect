import { useId } from "react";
import { Link } from "wouter";
import { communityHref } from "@/lib/community-store";
import { pickCounts, POKER_GAMES, pokerGame, pokerNight, usePokerNight } from "@/lib/poker-night";
import { NextIcon } from "../icons";
import { CardFan, ChipsOnly, GAME_FANS, PokerFace, useTonightsTables } from "./PokerParts";

// On Fridays Rehyn's daily card at the top of the feed becomes the poker night card (board 5): the
// four games with how many have picked each (pressing one opens the pop-up with it chosen), then
// "You're at Table 3" once seated, or "Skipping this week" after "Not tonight". Chips only. (The
// "From Rehyn · date" line and the table-mates note were removed in review.)

export default function PokerFridayCard() {
  const poker = usePokerNight();
  const { players, mine } = useTonightsTables();
  const titleId = useId();
  const seated = poker.status === "seated";
  const counts = pickCounts(players, players.length);
  if (seated) counts[poker.pick] += 1;
  const total = counts.holdem + counts.omaha + counts.stud + counts.draw;
  const game = pokerGame(poker.pick);
  const facesFor = (id: string) => players.filter(player => player.game === id).slice(0, 3);

  return (
    <article className="pk-feed" aria-labelledby={titleId}>
      <span className="pk-twinkle" style={{ right: 120, top: 26 }} aria-hidden="true" />
      <span className="pk-twinkle is-white" style={{ right: 260, top: 60, animationDelay: ".9s" }} aria-hidden="true" />
      <header className="pk-feed-head">
        <span className="pk-mark" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l2.5-6 4 12 2.5-6h5" /></svg></span>
        <div className="pk-feed-titles">
          <p className="pk-badge">Friday night</p>
        </div>
        <p className="pk-feed-count">
          <span className="pk-stack" aria-hidden="true">{players.filter(player => player.face).slice(0, 3).map(player => <PokerFace key={player.id} id={player.id} size={32} />)}</span>
          <span>{`${total} picked`}</span>
        </p>
      </header>
      <h3 className="pk-feed-title" id={titleId}>Poker night at 7. Which game are you in for?</h3>

      {poker.status === "none" && (
        <div className="pk-feed-games">
          {POKER_GAMES.map(item => (
            <button key={item.id} type="button" className="pk-feed-game" onClick={() => { pokerNight.pick(item.id); pokerNight.open(); }}>
              <span className="pk-feed-fan"><CardFan cards={GAME_FANS[item.id]} size="xs" /></span>
              <span className="pk-feed-game-words"><span className="pk-feed-game-name">{item.name}</span><span className="pk-feed-game-blurb">{item.blurb}</span></span>
              <span className="pk-stack" aria-hidden="true">{facesFor(item.id).map(player => <PokerFace key={player.id} id={player.id} size={28} />)}</span>
              <span className="pk-feed-game-count">{`${counts[item.id]} picked`}</span>
            </button>
          ))}
        </div>
      )}

      {seated && (
        <div className="pk-feed-seated">
          <CardFan cards={GAME_FANS[poker.pick]} size="md" />
          <div className="pk-feed-seated-words">
            <p className="pk-feed-seated-title">{`You're at Table ${mine?.number ?? ""} · ${game.name}`}</p>
          </div>
          <Link href={communityHref("poker")} className="pk-btn pk-btn-gold pk-btn-small">See the tables<NextIcon size={16} strokeWidth={2.4} /></Link>
        </div>
      )}

      {poker.status === "skipped" && (
        <div className="pk-feed-skipped">
          <div className="pk-feed-seated-words">
            <p className="pk-feed-seated-title">Skipping this week</p>
            <p className="pk-feed-seated-note">No problem at all. We will ask again next Friday.</p>
          </div>
          <button type="button" className="pk-btn pk-btn-ghost pk-btn-small" onClick={() => { pokerNight.change(); pokerNight.open(); }}>Changed my mind</button>
        </div>
      )}

      <ChipsOnly />
    </article>
  );
}
