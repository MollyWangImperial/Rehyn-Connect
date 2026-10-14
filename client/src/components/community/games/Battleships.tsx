import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode, type Ref, type RefObject } from "react";
import { Link } from "wouter";
import { people, type PersonId } from "@/content/community-samples";
import { communityHref, communityStore } from "@/lib/community-store";
import type { GameModel, GroupModel } from "../group-model";
import { useLater, useStill } from "../hooks";
import { BackIcon, ClockIcon, FlagIcon, LockIcon, PauseCircleIcon } from "../icons";
import { Face, MyFace } from "../parts";
import { Reticle, ShipArt } from "./BattleshipsArt";
import {
  battleOf, computerPick, fire, fits, inBounds, newBattleships, phaseOf, randomFleet, shipAt, shipKind, SHIPS, shipSquares, SIZE, squareName, sunkShips, withShot,
  type Battle, type BattlePhase, type BattleshipsSave, type Ship, type ShipId, type Shot,
} from "./battleships-rules";
import "@/pages/community-games.css";
import "@/pages/community-battleships.css";

const nameOf = (who: PersonId) => people[who].name;
const SQUARES = Array.from({ length: SIZE * SIZE }, (_, square) => square);
const NUMBERS = Array.from({ length: SIZE }, (_, column) => column + 1);
const LETTERS = "ABCDEFGHIJ".split("");
const alt = (square: number) => (Math.floor(square / SIZE) + square) % 2 === 1;
/** The sea's squares, drawn the same on every board. */
const SEA = <div className="cm-bs-tiles" aria-hidden="true">{SQUARES.map(square => <span key={square} className={`cm-bs-tile ${alt(square) ? "is-alt" : ""}`} />)}</div>;
/** Where a ship sits on the board, as a share of its width and height. */
const placeOf = (ship: Ship) => {
  const length = shipKind(ship.id).length;
  return { left: `${ship.c * 10}%`, top: `${ship.r * 10}%`, width: `${(ship.d === "h" ? length : 1) * 10}%`, height: `${(ship.d === "v" ? length : 1) * 10}%` };
};
const lower = (id: ShipId) => shipKind(id).name.toLowerCase();
const shipWords = (ship: Ship) => {
  const kind = shipKind(ship.id);
  const end = ship.d === "h" ? ship.r * SIZE + ship.c + kind.length - 1 : (ship.r + kind.length - 1) * SIZE + ship.c;
  return `${kind.name}, ${kind.length} squares, ${ship.d === "h" ? "across" : "down"} from ${squareName(ship.r * SIZE + ship.c)} to ${squareName(end)}`;
};

/** The status line: what is happening, and what to do next, in plain words. */
function describe(battle: Battle, phase: BattlePhase, name: string): { title: string; detail: string; tone: "you" | "them" | "hit" | "over" } {
  if (phase === "placing") return { title: "Place your ships", detail: "Drag a ship to move it, and tap it to turn it. Press Ready when you're happy.", tone: "you" };
  const last: Shot | undefined = battle.shots[battle.shots.length - 1];
  const struck = (shot: Shot) => {
    const ship = shipAt(battle.fleets[shot.by === "you" ? "them" : "you"], shot.at);
    return ship ? lower(ship.id) : "ship";
  };
  if (phase === "over" && battle.result) {
    const { winner, reason } = battle.result;
    if (reason === "gave-up") return { title: winner === "you" ? `${name} gave up` : "You gave up", detail: winner === "you" ? "You win this one." : `${name} wins this one. Good game!`, tone: "over" };
    return winner === "you"
      ? { title: "You won!", detail: `You sank all five of ${name}'s ships.`, tone: "over" }
      : { title: `${name} won`, detail: "All five of your ships were sunk. Good game!", tone: "over" };
  }
  if (battle.turn === "you") {
    if (last?.by === "you") return last.sunk ? { title: `You sank ${name}'s ${lower(last.sunk)}!`, detail: "Fire again.", tone: "hit" } : { title: "Hit! Fire again", detail: `${squareName(last.at)} was a hit.`, tone: "hit" };
    if (last?.by === "them") {
      const what = last.sunk ? `sank your ${lower(last.sunk)}` : last.hit ? `hit your ${struck(last)}` : "missed";
      return { title: "Your turn", detail: `${name} fired at ${squareName(last.at)} and ${what}. Tap a square in ${name}'s waters.`, tone: "you" };
    }
    return { title: "Your turn", detail: `Tap a square in ${name}'s waters to fire.`, tone: "you" };
  }
  if (last?.by === "you") return { title: `${name} is aiming`, detail: `You fired at ${squareName(last.at)}: ${last.sunk ? `you sank the ${lower(last.sunk)}` : last.hit ? "a hit" : "a miss"}.`, tone: "them" };
  if (last?.by === "them") return { title: `${name} fires again`, detail: `${name} ${last.sunk ? `sank your ${lower(last.sunk)}` : `hit your ${struck(last)}`} at ${squareName(last.at)}.`, tone: "them" };
  return { title: `${name} fires first`, detail: "Take your time, there is no clock.", tone: "them" };
}

/** A board: the column numbers along the top, the row letters down the side, and the sea. */
function Sea({ small = false, innerRef, children }: { small?: boolean; innerRef?: Ref<HTMLDivElement>; children: ReactNode }) {
  return (
    <div className={`cm-bs-frame ${small ? "is-small" : ""}`}>
      <div className="cm-bs-cols" aria-hidden="true">{NUMBERS.map(number => <span key={number}>{number}</span>)}</div>
      <div className="cm-bs-rows" aria-hidden="true">{LETTERS.map(letter => <span key={letter}>{letter}</span>)}</div>
      <div className="cm-bs-sea"><div className="cm-bs-inner" ref={innerRef}>{children}</div></div>
    </div>
  );
}

/** The pegs: white for a miss, red for a hit. Shots made while the board is open drop in. */
function Marks({ shots, settled, scorch = false }: { shots: { shot: Shot; index: number }[]; settled: number; scorch?: boolean }) {
  return (
    <div className="cm-bs-marks" aria-hidden="true">
      {shots.map(({ shot, index }) => (
        <span key={shot.at} className={`cm-bs-mark ${shot.hit ? "is-hit" : "is-miss"} ${scorch && shot.hit ? "is-scorched" : ""} ${index >= settled ? "is-new" : ""}`} style={{ left: `${(shot.at % SIZE) * 10}%`, top: `${Math.floor(shot.at / SIZE) * 10}%` }}>
          <i />
        </span>
      ))}
    </div>
  );
}

/** A ship being dragged: where the pointer went down, and how far that is from the ship's top left corner. */
type Drag = { id: ShipId; pointer: number; x: number; y: number; dx: number; dy: number; moved: boolean; el: HTMLElement; landing: Ship | null };

/**
 * The person's own waters. While they place their ships, each ship can be dragged to move it and
 * tapped to turn it (with a keyboard: the arrow keys move it and Enter turns it). In the battle the
 * board shows where the other player has fired, and where they are aiming.
 */
function FleetBoard({ fleet, editable, battle = null, aim = null, settled = 0, small = false, hintId, shake = null, onPlace, onTurn, onBlocked }: {
  fleet: Ship[]; editable: boolean; battle?: Battle | null; aim?: number | null; settled?: number; small?: boolean; hintId?: string;
  /** A ship that couldn't move or turn gives a little shake. */
  shake?: { id: ShipId; n: number } | null;
  onPlace?: (ship: Ship) => void; onTurn?: (ship: Ship) => void; onBlocked?: (ship: Ship, words: string) => void;
}) {
  const inner = useRef<HTMLDivElement>(null);
  const drag = useRef<Drag | null>(null);
  const dragged = useRef(false);
  const [lift, setLift] = useState<{ id: ShipId; landing: Ship | null; ok: boolean } | null>(null);
  const sunk = battle ? sunkShips(battle, "you") : [];
  const theirShots = battle ? battle.shots.map((shot, index) => ({ shot, index })).filter(item => item.shot.by === "them") : [];

  const down = (event: PointerEvent<HTMLButtonElement>, ship: Ship) => {
    dragged.current = false;
    if (!event.isPrimary || event.button !== 0 || !inner.current) return;
    const box = inner.current.getBoundingClientRect();
    const size = box.width / SIZE;
    drag.current = { id: ship.id, pointer: event.pointerId, x: event.clientX, y: event.clientY, dx: event.clientX - box.left - ship.c * size, dy: event.clientY - box.top - ship.r * size, moved: false, el: event.currentTarget, landing: null };
    try { event.currentTarget.setPointerCapture(event.pointerId); } catch { /* the pointer has already gone */ }
  };
  const move = (event: PointerEvent<HTMLButtonElement>) => {
    const held = drag.current;
    if (!held || event.pointerId !== held.pointer || !inner.current) return;
    if (!held.moved && Math.hypot(event.clientX - held.x, event.clientY - held.y) < 6) return;
    // From the first move on, the ship keeps up with the finger exactly.
    if (!held.moved) held.el.style.transition = "none";
    held.moved = true;
    // The ship follows the finger, and would land on the squares nearest to it.
    const box = inner.current.getBoundingClientRect();
    const size = box.width / SIZE;
    const left = event.clientX - box.left - held.dx;
    const top = event.clientY - box.top - held.dy;
    held.el.style.left = `${left}px`;
    held.el.style.top = `${top}px`;
    const ship = fleet.find(item => item.id === held.id);
    if (!ship) return;
    const landing: Ship = { ...ship, r: Math.round(top / size), c: Math.round(left / size) };
    if (!held.landing || held.landing.r !== landing.r || held.landing.c !== landing.c) {
      held.landing = landing;
      setLift({ id: held.id, landing, ok: fits(fleet, landing) });
    }
  };
  const up = (event: PointerEvent<HTMLButtonElement>, cancelled: boolean) => {
    const held = drag.current;
    if (!held || event.pointerId !== held.pointer) return;
    drag.current = null;
    if (!held.moved) return;
    // Not a tap: the click that follows doesn't turn the ship.
    dragged.current = true;
    window.setTimeout(() => { dragged.current = false; }, 0);
    const ship = fleet.find(item => item.id === held.id);
    setLift(null);
    if (!ship) return;
    // Back to where the board says it is: from there it glides to its new place, or back home.
    Object.assign(held.el.style, { transition: "", left: placeOf(ship).left, top: placeOf(ship).top });
    if (cancelled || !held.landing) return;
    if (fits(fleet, held.landing)) onPlace?.(held.landing);
    else onBlocked?.(ship, "That doesn't fit there. Ships can touch, but can't overlap or hang off the edge.");
  };
  const click = (ship: Ship) => {
    if (dragged.current) { dragged.current = false; return; }
    onTurn?.(ship);
  };
  const key = (event: KeyboardEvent<HTMLButtonElement>, ship: Ship) => {
    const step = ({ ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1] } as Record<string, [number, number]>)[event.key];
    if (!step) return;
    event.preventDefault();
    const next: Ship = { ...ship, r: ship.r + step[0], c: ship.c + step[1] };
    if (fits(fleet, next)) onPlace?.(next);
    else onBlocked?.(ship, inBounds(next) ? "Another ship is in the way." : "That's the edge of the board.");
  };

  const lifted = lift?.landing && inBounds(lift.landing) ? lift.landing : null;
  const afloat = SHIPS.length - sunk.length;
  return (
    <div className={`cm-bs-board ${editable ? "is-editable" : ""}`} role={editable ? "group" : "img"} aria-label={editable ? "Your waters. Your ships can be moved and turned." : `Your waters: ${afloat} of 5 ships afloat.`} aria-describedby={editable ? hintId : undefined}>
      <Sea small={small} innerRef={inner}>
        {SEA}
        {lifted && <span className={`cm-bs-landing ${lift?.ok ? "" : "is-bad"}`} style={placeOf(lifted)} aria-hidden="true" />}
        <div className="cm-bs-ships">
          {fleet.map(ship => editable ? (
            <button
              key={ship.id}
              type="button"
              className={`cm-bs-ship is-mine ${lift?.id === ship.id ? "is-dragging" : ""} ${lift?.id === ship.id && !lift.ok ? "is-bad" : ""}`}
              style={placeOf(ship)}
              aria-label={shipWords(ship)}
              onPointerDown={event => down(event, ship)}
              onPointerMove={move}
              onPointerUp={event => up(event, false)}
              onPointerCancel={event => up(event, true)}
              onClick={() => click(ship)}
              onKeyDown={event => key(event, ship)}
            >
              <span key={shake?.id === ship.id ? shake.n : 0} className={`cm-bs-ship-art ${shake?.id === ship.id ? "is-shaking" : ""}`}><ShipArt id={ship.id} d={ship.d} /></span>
            </button>
          ) : (
            <span key={ship.id} className={`cm-bs-ship is-mine ${sunk.includes(ship.id) ? "is-sunk" : ""}`} style={placeOf(ship)} aria-hidden="true"><ShipArt id={ship.id} d={ship.d} /></span>
          ))}
        </div>
        {battle && <Marks shots={theirShots} settled={settled} scorch />}
        {aim !== null && <span key={aim} className="cm-bs-aim" style={{ left: `${(aim % SIZE) * 10}%`, top: `${Math.floor(aim / SIZE) * 10}%` }} aria-hidden="true"><Reticle /></span>}
      </Sea>
    </div>
  );
}

/**
 * The other player's waters, where the person fires. Each square is a button; the arrow keys move
 * between them and Enter fires. Their ships show once sunk, and all of them at the end.
 */
function TargetBoard({ battle, name, active, settled, gridRef, onFire }: { battle: Battle; name: string; active: boolean; settled: number; gridRef: RefObject<HTMLDivElement | null>; onFire: (square: number) => void }) {
  const mine = battle.shots.map((shot, index) => ({ shot, index })).filter(item => item.shot.by === "you");
  const fired = new Map(mine.map(item => [item.shot.at, item.shot]));
  const sunk = sunkShips(battle, "them");
  const over = !!battle.result;
  const shown = battle.fleets.them.filter(ship => over || sunk.includes(ship.id));
  const sunkSquares = new Set(battle.fleets.them.filter(ship => sunk.includes(ship.id)).flatMap(shipSquares));
  const last = mine[mine.length - 1]?.shot.at ?? null;
  const [cursor, setCursor] = useState(() => SQUARES.find(square => !fired.has(square)) ?? 0);

  const key = (event: KeyboardEvent<HTMLButtonElement>, square: number) => {
    const r = Math.floor(square / SIZE), c = square % SIZE;
    const moves: Record<string, number> = {
      ArrowUp: r > 0 ? square - SIZE : square, ArrowDown: r < SIZE - 1 ? square + SIZE : square,
      ArrowLeft: c > 0 ? square - 1 : square, ArrowRight: c < SIZE - 1 ? square + 1 : square,
      Home: r * SIZE, End: r * SIZE + SIZE - 1,
    };
    const next = moves[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setCursor(next);
    gridRef.current?.querySelector<HTMLElement>(`[data-square="${next}"]`)?.focus();
  };

  return (
    <div className="cm-bs-board is-target">
      <Sea>
        <div className="cm-bs-tiles" ref={gridRef} role="group" aria-label={`${name}'s waters, 10 by 10. Use the arrow keys to move, and Enter to fire.`}>
          {SQUARES.map(square => {
            const shot = fired.get(square);
            const open = active && !shot;
            const label = `${squareName(square)}${shot ? (sunkSquares.has(square) ? ", sunk" : shot.hit ? ", hit" : ", miss") : ""}`;
            return (
              <button
                key={square}
                type="button"
                data-square={square}
                className={`cm-bs-tile ${alt(square) ? "is-alt" : ""} ${open ? "is-open" : ""} ${last === square ? "is-last" : ""}`}
                tabIndex={square === cursor ? 0 : -1}
                aria-label={label}
                aria-disabled={open ? undefined : true}
                disabled={over}
                onFocus={() => setCursor(square)}
                onKeyDown={event => key(event, square)}
                onClick={() => onFire(square)}
              />
            );
          })}
        </div>
        <div className="cm-bs-ships" aria-hidden="true">
          {shown.map(ship => (
            <span key={ship.id} className={`cm-bs-ship ${sunk.includes(ship.id) ? "is-sunk cm-bs-rise" : "is-ghost"}`} style={placeOf(ship)}><ShipArt id={ship.id} d={ship.d} finish="lacquer" /></span>
          ))}
        </div>
        <Marks shots={mine} settled={settled} />
      </Sea>
    </div>
  );
}

/**
 * Battleships in a private group, with no clock. The person places their five ships, then takes
 * turns with the member they invited to fire at each other's waters. In this preview the other
 * player's shots are chosen by the computer, on the Relaxed level. Every change is kept on this
 * device, so "Finish later" carries on from the same place.
 */
export default function BattleshipsGame({ game, group }: { game: GameModel; group: GroupModel }) {
  const later = useLater();
  const still = useStill();
  const opponent = game.players[0];
  const name = nameOf(opponent);
  const [save, setSave] = useState<BattleshipsSave>(() => game.battle ?? newBattleships());
  const battle = useMemo(() => battleOf(save), [save]);
  const phase = phaseOf(save, battle);
  const yourTurn = phase === "battle" && battle.turn === "you";
  const theirTurn = phase === "battle" && battle.turn === "them";
  const [aim, setAim] = useState<number | null>(null);
  const [flash, setFlash] = useState<{ id: number; text: string; sub: string; tone: "hit" | "miss" } | null>(null);
  const [toast, setToast] = useState<{ id: number; text: string } | null>(null);
  const [said, setSaid] = useState("");
  const [giving, setGiving] = useState(false);
  const [shake, setShake] = useState<{ id: ShipId; n: number } | null>(null);
  const seq = useRef(0);
  // Shots already made when the board opened don't drop in again.
  const settled = useRef(save.shots.length);
  const battleRef = useRef(battle);
  battleRef.current = battle;
  const titleId = useId();
  const hintId = useId();
  const card = useRef<HTMLElement>(null);
  const grid = useRef<HTMLDivElement>(null);
  const playAgainRef = useRef<HTMLButtonElement>(null);
  const before = useRef(phase);

  // Opening a game brings the board into view, and the focus to its heading.
  useEffect(() => {
    card.current?.scrollIntoView({ block: "start", behavior: still ? "instant" : "smooth" });
    card.current?.querySelector<HTMLElement>("[data-view-heading]")?.focus({ preventScroll: true });
  }, []);
  // Every change is kept on this device, for "Finish later".
  useEffect(() => { communityStore.saveBattleships(game.id, save); }, [game.id, save]);
  // The focus follows the game: onto the sea when the battle starts (with the sea in view, as Ready
  // can be far below it on a phone), onto Play again when it ends, and back to the top for a new game.
  useEffect(() => {
    const top = () => card.current?.scrollIntoView({ block: "start", behavior: still ? "instant" : "smooth" });
    if (before.current === "placing" && phase === "battle") { top(); grid.current?.querySelector<HTMLElement>('[tabindex="0"]')?.focus({ preventScroll: true }); }
    if (before.current === "battle" && phase === "over") playAgainRef.current?.focus({ preventScroll: true });
    if (before.current === "over" && phase === "placing") { top(); card.current?.querySelector<HTMLElement>("[data-view-heading]")?.focus({ preventScroll: true }); }
    before.current = phase;
  }, [phase]);
  // The other player's turn: they take aim at a square of the person's waters, then fire. A hit
  // with the extra shot on means they go again.
  const count = save.shots.length;
  useEffect(() => {
    if (!theirTurn) return;
    let shotTimer = 0;
    const aimTimer = window.setTimeout(() => {
      const square = computerPick(battleRef.current, "relaxed");
      if (square < 0) return;
      setAim(square);
      shotTimer = window.setTimeout(() => {
        setAim(null);
        setSave(current => (current.shots.length === count ? withShot(current, "them", square) ?? current : current));
      }, 700);
    }, 1100);
    return () => { window.clearTimeout(aimTimer); window.clearTimeout(shotTimer); setAim(null); };
  }, [theirTurn, count]);

  const showToast = (text: string) => {
    const id = ++seq.current;
    setToast({ id, text });
    later(() => setToast(current => (current?.id === id ? null : current)), 3200);
  };
  const showFlash = (text: string, sub: string, tone: "hit" | "miss") => {
    const id = ++seq.current;
    setFlash({ id, text, sub, tone });
    later(() => setFlash(current => (current?.id === id ? null : current)), 1500);
  };

  // Placing the ships.
  const place = (ship: Ship) => {
    setSave(current => (current.ready || !fits(current.fleet, ship) ? current : { ...current, fleet: current.fleet.map(item => (item.id === ship.id ? ship : item)) }));
    setSaid(`${shipWords(ship)}.`);
  };
  const blocked = (ship: Ship, words: string) => {
    setShake({ id: ship.id, n: ++seq.current });
    showToast(words);
  };
  const turn = (ship: Ship) => {
    const turned: Ship = { ...ship, d: ship.d === "h" ? "v" : "h" };
    if (fits(save.fleet, turned)) place(turned);
    else blocked(ship, "No room to turn it there. Move it first.");
  };
  const shuffle = () => {
    setSave(current => (current.ready ? current : { ...current, fleet: randomFleet() }));
    setSaid("Your ships have been shuffled.");
  };
  const ready = () => setSave(current => ({ ...current, ready: true }));

  // The battle.
  const fireAt = (square: number) => {
    if (phase !== "battle") return;
    if (battle.turn !== "you") { showToast(`Wait for ${name} to fire.`); return; }
    const result = fire(battle, "you", square);
    if (!result) { showToast(`You've already fired at ${squareName(square)}.`); return; }
    setSave(current => withShot(current, "you", square) ?? current);
    const { shot, win } = result;
    if (win) showFlash("Fleet sunk!", "You sank all five ships", "hit");
    else if (shot.sunk) showFlash(`${shipKind(shot.sunk).name} sunk!`, save.extra ? "Fire again" : "", "hit");
    else if (shot.hit) showFlash("Hit!", save.extra ? "Fire again" : "", "hit");
    else showFlash("Miss", `${squareName(square)} was empty`, "miss");
  };
  const giveUp = () => { setGiving(false); setSave(current => (current.ready ? { ...current, gaveUp: "you" } : current)); };
  const playAgain = () => {
    settled.current = 0;
    setFlash(null);
    setSave(current => newBattleships(current));
  };
  const finishLater = () => showToast(`Saved. Carry on any time from ${group.name}.`);

  const status = describe(battle, phase, name);
  const yourShots = battle.shots.filter(shot => shot.by === "you");
  const theirSunk = sunkShips(battle, "them");
  const yourSunk = sunkShips(battle, "you");
  const won = battle.result?.winner === "you";
  const busy = theirTurn;

  return (
    <div className={`cm-bs is-${phase}`}>
      <section ref={card} className="cm-card cm-bs-main" aria-labelledby={titleId}>
        <div className="cm-bs-head">
          <Link className="cm-bs-back" href={communityHref("groups", group.id)} aria-label={`Back to ${group.name}`}><BackIcon size={20} /></Link>
          <div className="cm-bs-titles">
            <p className="cm-gs-eyebrow"><LockIcon size={13} strokeWidth={2.2} />{group.name} · Battleships</p>
            <h2 id={titleId} tabIndex={-1} data-view-heading>{`You vs ${name}`}</h2>
          </div>
          <span className="cm-bs-clock"><ClockIcon size={15} strokeWidth={2} />No clock</span>
        </div>

        <div className={`cm-bs-status is-${status.tone}`} aria-live="polite">
          {busy ? <Face who={opponent} size={36} /> : <MyFace size={36} />}
          <span className="cm-bs-status-text">
            <b>{status.title}{busy && <span className="cm-typing-dots" aria-hidden="true"><i /><i /><i /></span>}</b>
            <span>{status.detail}</span>
          </span>
        </div>

        <div className="cm-bs-stage">
          {phase === "placing" ? (
            <>
              <p className="cm-bs-board-title">Your waters</p>
              <FleetBoard fleet={save.fleet} editable hintId={hintId} shake={shake} onPlace={place} onTurn={turn} onBlocked={blocked} />
            </>
          ) : (
            <>
              <p className="cm-bs-board-title">{`${name}'s waters`}</p>
              <TargetBoard battle={battle} name={name} active={yourTurn} settled={settled.current} gridRef={grid} onFire={fireAt} />
            </>
          )}
          {flash && (
            <div key={flash.id} className={`cm-bs-flash is-${flash.tone}`} aria-hidden="true">
              <b>{flash.text}</b>
              {flash.sub && <span>{flash.sub}</span>}
            </div>
          )}
          {phase === "over" && battle.result && (
            <div className="cm-bs-over" role="group" aria-labelledby={`${titleId}-over`}>
              <div className="cm-bs-over-card cm-pop">
                <p className="cm-gs-eyebrow">Game over</p>
                <h3 id={`${titleId}-over`}>{status.title}</h3>
                <p>{status.detail}</p>
                <p className="cm-bs-over-count">{`You fired ${yourShots.length} ${yourShots.length === 1 ? "shot" : "shots"} and hit ${yourShots.filter(shot => shot.hit).length}.`}</p>
                <div className="cm-bs-over-actions">
                  <button ref={playAgainRef} type="button" className="cm-bs-btn is-primary" onClick={playAgain}>Play again</button>
                  <Link className="cm-bs-btn is-quiet" href={communityHref("groups", group.id)}>{`Back to ${group.name}`}</Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {phase === "placing" ? (
          <p className="cm-bs-rule" id={hintId}>Ships can touch, but they can't overlap or hang off the edge. With a keyboard, the arrow keys move a ship and Enter turns it.</p>
        ) : (
          <div className="cm-bs-tracker" aria-label={`${name}'s ships`} role="list">
            {SHIPS.map(kind => {
              const gone = theirSunk.includes(kind.id);
              return (
                <span key={kind.id} role="listitem" className={`cm-bs-tship ${gone ? "is-sunk" : ""}`}>
                  <span className="cm-bs-tship-art" style={{ width: kind.length * 12 }}><ShipArt id={kind.id} finish={gone ? "lacquer" : "wood"} /></span>
                  <span>{kind.name}{gone ? <span className="cm-sr"> sunk</span> : null}</span>
                </span>
              );
            })}
          </div>
        )}

        {toast && <div key={toast.id} className="cm-bs-toast" role="status"><MyFace size={36} /><span>{toast.text}</span></div>}
        <p className="cm-sr" role="status">{said}</p>
      </section>

      <div className="cm-bs-side">
        <section className="cm-card cm-bs-players" aria-label="Players">
          <div className="cm-bs-player">
            <MyFace size={48} className={yourTurn || phase === "placing" ? "cm-bs-glow" : ""} />
            <span className="cm-bs-who">
              <b>You</b>
              <span className={yourTurn ? "is-go" : ""}>{phase === "placing" ? "Placing your ships" : phase === "over" ? (won ? "Won this game" : "Good game") : yourTurn ? "Your turn" : "Waiting"}</span>
            </span>
            {phase !== "placing" && <span className="cm-bs-afloat">{`${SHIPS.length - yourSunk.length} of 5 afloat`}</span>}
          </div>
          <div className="cm-bs-player">
            <Face who={opponent} size={48} className={theirTurn ? "cm-bs-glow" : ""} />
            <span className="cm-bs-who">
              <b>{name}</b>
              <span className={theirTurn ? "is-busy" : ""}>{phase === "placing" ? "Ships in place" : phase === "over" ? (won ? "Good game" : "Won this game") : theirTurn ? "Aiming…" : "Waiting for you"}</span>
            </span>
            {phase !== "placing" && <span className="cm-bs-afloat">{`${SHIPS.length - theirSunk.length} of 5 afloat`}</span>}
          </div>
        </section>

        {phase === "placing" ? (
          <section className="cm-card cm-bs-setup" aria-labelledby={`${titleId}-setup`}>
            <h3 className="cm-side-title" id={`${titleId}-setup`}>Ready to play?</h3>
            <p>{`${name}'s ships are in place. ${save.first === "you" ? "You fire first." : `${name} fires first this time.`}`}</p>
            <div className="cm-bs-setting">
              <span><b>Extra shot after a hit</b><span>Hit a ship and you fire again, until you miss</span></span>
              <button type="button" className="cm-gs-switch" role="switch" aria-checked={save.extra} aria-label="Extra shot after a hit" onClick={() => setSave(current => (current.ready ? current : { ...current, extra: !current.extra }))}><span /></button>
            </div>
            <div className="cm-bs-buttons">
              <button type="button" className="cm-bs-btn is-quiet" onClick={shuffle}>Shuffle</button>
              <button type="button" className="cm-bs-btn is-primary" onClick={ready}>Ready</button>
            </div>
          </section>
        ) : (
          <section className="cm-card cm-bs-mine" aria-labelledby={`${titleId}-mine`}>
            <div className="cm-bs-mine-head">
              <h3 className="cm-side-title" id={`${titleId}-mine`}>Your waters</h3>
              <span>{save.extra ? "Extra shot after a hit" : "One shot a turn"}</span>
            </div>
            <FleetBoard fleet={save.fleet} editable={false} battle={battle} aim={aim} settled={settled.current} small />
          </section>
        )}

        {phase === "battle" && (
          giving ? (
            <div className="cm-bs-confirm cm-pop" role="group" aria-label="Give up this game?">
              <p>{`Give up this game? ${name} will win it.`}</p>
              <div className="cm-bs-buttons">
                <button type="button" className="cm-bs-btn is-quiet" onClick={() => setGiving(false)}>Keep playing</button>
                <button type="button" className="cm-bs-btn is-warn" onClick={giveUp}>Give up</button>
              </div>
            </div>
          ) : (
            <div className="cm-bs-actions">
              <button type="button" onClick={() => setGiving(true)}><FlagIcon size={22} strokeWidth={2} />Give up</button>
              <button type="button" onClick={finishLater}><PauseCircleIcon size={22} strokeWidth={2} />Finish later</button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
