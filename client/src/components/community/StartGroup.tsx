import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { Link, useSearch } from "wouter";
import { conditions, defaultInvites, GROUP_NAME_LIMIT, groupHellos, inviteFriends, people, startThemes, type ConditionId, type GroupVisibility, type PersonId, type StartThemeId } from "@/content/community-samples";
import { communityHref, communityStore, communityViewFromQuery, isBlocked, listNames, useCommunity, type CommunityMemory, type StartedGroup } from "@/lib/community-store";
import { GamesIcon } from "./games/pieces";
import { conditionOf, coverForTheme, homeCondition } from "./group-model";
import { ConditionIcon, PrivacyPill } from "./Groups";
import { ArrowIcon, BellIcon, CheckIcon, EyeIcon, GlobeIcon, LockIcon, ShieldIcon, ThemeIcon } from "./icons";
import { Cover, Face, MyFace } from "./parts";

const helloLabels = ["Hello everyone!", "Welcome to the group", "Who's got news?"];
const helloTones = ["cm-quick-mint", "cm-quick-amber", "cm-quick-blue"];
const nameOf = (who: PersonId) => people[who].name;
/** Blocked people are out of sight in My community, so they are never offered, ticked or shown here. */
const unblocked = (memory: CommunityMemory, list: PersonId[]) => list.filter(who => !isBlocked(memory, who));
const firstTheme = startThemes.find(theme => theme.id === "games") ?? startThemes[0];

/**
 * I: start a smaller group inside a condition, in five steps: which condition, what it's about, a
 * name, who can see it (private to begin with) and who's coming. Games can be switched on only
 * while the group is private.
 */
export default function StartGroupView(_props: { name: string }) {
  const memory = useCommunity();
  const asked = communityViewFromQuery(useSearch()).cond ?? null;
  const [cond, setCond] = useState<ConditionId>(asked ?? homeCondition(memory));
  const [theme, setTheme] = useState<StartThemeId>(firstTheme.id);
  const [groupName, setGroupName] = useState(firstTheme.names[0]);
  const [visibility, setVisibility] = useState<GroupVisibility>("private");
  const [gamesOn, setGamesOn] = useState(true);
  const [chosen, setChosen] = useState<PersonId[]>(defaultInvites);
  const pickable = unblocked(memory, inviteFriends);
  // Someone blocked since they were ticked drops out of the group too.
  const friends = unblocked(memory, chosen);
  const [createdId, setCreatedId] = useState<string | null>(null);
  const createdHeading = useRef<HTMLHeadingElement>(null);
  const firstChoice = useRef<HTMLInputElement>(null);
  const condField = useId();
  const themeField = useId();
  const nameId = useId();
  const seeField = useId();
  const gamesNote = useId();

  useEffect(() => { if (asked) setCond(asked); }, [asked]);

  const look = startThemes.find(item => item.id === theme) ?? startThemes[0];
  const shownName = groupName.trim() === "" ? "Your group" : groupName.trim();
  const created: StartedGroup | null = createdId ? memory.started.find(group => group.id === createdId) ?? null : null;

  useEffect(() => { if (createdId && !created) setCreatedId(null); }, [createdId, created]);

  const pickTheme = (next: StartThemeId) => {
    // A name typed by hand is kept. One of the old theme's suggestions follows the new theme.
    if (groupName.trim() === "" || look.names.includes(groupName)) setGroupName(startThemes.find(item => item.id === next)?.names[0] ?? groupName);
    setTheme(next);
  };
  const toggleFriend = (who: PersonId) => setChosen(list => (list.includes(who) ? list.filter(other => other !== who) : inviteFriends.filter(other => other === who || list.includes(other))));
  const start = (event: FormEvent) => {
    event.preventDefault();
    const group = communityStore.startGroup({ name: shownName, theme, friends, visibility, conditionId: cond, games: gamesOn });
    setCreatedId(group.id);
    window.requestAnimationFrame(() => createdHeading.current?.focus());
  };
  const startAnother = () => {
    setCreatedId(null);
    setTheme(firstTheme.id);
    setGroupName(firstTheme.names[0]);
    setChosen(defaultInvites);
    setVisibility("private");
    setGamesOn(true);
    window.requestAnimationFrame(() => firstChoice.current?.focus());
  };

  // What the preview and "What happens next" show: the new group once it is made, else the form.
  const where = conditionOf(created?.conditionId ?? cond);
  const isPrivate = (created?.visibility ?? visibility) === "private";
  const games = created ? created.games : isPrivate && gamesOn;
  const coming = created ? unblocked(memory, created.friends) : friends;
  const going = coming.map(nameOf);
  const memberLine = coming.length === 0 ? "Just you for now" : coming.length === 1 ? "You and 1 friend" : `You and ${coming.length} friends`;
  const doneLine = `${isPrivate ? `It is private: only ${going.length ? listNames(going) : "people you invite"} can find it. ` : `Anyone in ${where.name} can now find it and join. `}It sits inside ${where.name}.`;
  const next = [
    { icon: <BellIcon size={18} />, tone: "rose", text: going.length ? `${listNames(going)} ${going.length === 1 ? "gets" : "get"} an invite in Messages.` : "Invite people now or later from the group." },
    { icon: <EyeIcon size={18} />, tone: "gold", text: isPrivate ? `Only members can see it. It never shows up in search or in ${where.name}.` : `It shows up inside ${where.name} for anyone to find and join.` },
    { icon: <GamesIcon size={18} />, tone: "mint", text: games ? "Anyone in the group can start chess, Ludo and other classics." : "Make it private if you would like to play games together." },
  ];

  return (
    <div className="cm-start">
      <div className="cm-start-main">
        {!created ? (
          <form className="cm-card cm-start-form cm-rise" onSubmit={start}>
            <fieldset className="cm-step">
              <legend className="cm-step-title"><span className="cm-step-num cm-step-1" aria-hidden="true">1</span><span>Which community is it in?</span></legend>
              <div className="cm-cond-picks">
                {conditions.map((item, index) => (
                  <label key={item.id} className={`cm-cond-pick ${cond === item.id ? "is-on" : ""}`}>
                    <input ref={index === 0 ? firstChoice : undefined} className="cm-sr" type="radio" name={condField} value={item.id} checked={cond === item.id} onChange={() => setCond(item.id)} />
                    <ConditionIcon id={item.id} size={18} />
                    <span>{item.name}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="cm-step">
              <legend className="cm-step-title"><span className="cm-step-num cm-step-2" aria-hidden="true">2</span><span>What's it about?</span></legend>
              <div className="cm-themes">
                {startThemes.map(item => (
                  <label key={item.id} className={`cm-theme ${theme === item.id ? "is-on" : ""}`} style={{ background: item.tint, color: item.ink }}>
                    <input className="cm-sr" type="radio" name={themeField} value={item.id} checked={theme === item.id} onChange={() => pickTheme(item.id)} />
                    {item.id === "games" ? <GamesIcon size={26} /> : <ThemeIcon theme={item.id} size={26} />}
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="cm-step">
              <div className="cm-step-title"><span className="cm-step-num cm-step-3" aria-hidden="true">3</span><label htmlFor={nameId}>Give it a name</label></div>
              <input id={nameId} className="cm-name-input" type="text" value={groupName} maxLength={GROUP_NAME_LIMIT} autoComplete="off" onChange={event => setGroupName(event.target.value)} />
              <div className="cm-name-ideas" role="group" aria-label="Name ideas">
                <span>Or try:</span>
                {look.names.map(idea => (
                  <button key={idea} type="button" className={`cm-name-idea ${groupName === idea ? "is-on" : ""}`} aria-pressed={groupName === idea} onClick={() => setGroupName(idea)}>{idea}</button>
                ))}
              </div>
            </div>

            <fieldset className="cm-step">
              <legend className="cm-step-title"><span className="cm-step-num cm-step-4" aria-hidden="true">4</span><span>Who can see it?</span></legend>
              <div className="cm-see-picks">
                <label className={`cm-see-pick ${visibility === "private" ? "is-on" : ""}`}>
                  <input className="cm-sr" type="radio" name={seeField} checked={visibility === "private"} onChange={() => setVisibility("private")} />
                  <span className="cm-see-icon is-private"><LockIcon size={22} /></span>
                  <span className="cm-see-text">
                    <b>Private <span className="cm-default-badge">Default</span></b>
                    <span>Hidden from everyone else. Only people you invite can find it, read it and play games in it.</span>
                  </span>
                </label>
                <label className={`cm-see-pick ${visibility === "public" ? "is-on" : ""}`}>
                  <input className="cm-sr" type="radio" name={seeField} checked={visibility === "public"} onChange={() => setVisibility("public")} />
                  <span className="cm-see-icon is-public"><GlobeIcon size={22} /></span>
                  <span className="cm-see-text">
                    <b>Public</b>
                    <span>{`Anyone in ${conditionOf(cond).name} can find it and join. Good for bigger, open chats.`}</span>
                  </span>
                </label>
              </div>
              <div className={`cm-games-switch ${visibility === "public" ? "is-off" : ""}`}>
                <span className="cm-games-switch-icon"><GamesIcon size={20} /></span>
                <span className="cm-games-switch-text">
                  <b>Games in this group</b>
                  <span id={gamesNote}>{visibility === "private" ? "Members can start chess, draughts, Go, Ludo and other classics" : "Games are only for private groups"}</span>
                </span>
                <button type="button" className="cm-gs-switch" role="switch" aria-checked={visibility === "private" && gamesOn} aria-label="Games in this group" aria-describedby={gamesNote} disabled={visibility === "public"} onClick={() => setGamesOn(!gamesOn)}><span /></button>
              </div>
            </fieldset>

            <fieldset className="cm-step">
              <legend className="cm-step-title"><span className="cm-step-num cm-step-5" aria-hidden="true">5</span><span>Who's coming?</span><span className="cm-step-aside">Tap your friends</span></legend>
              <div className="cm-friend-picks">
                {pickable.map(who => {
                  const on = friends.includes(who);
                  return (
                    <label key={who} className={`cm-friend-pick ${on ? "is-on" : ""}`}>
                      <input className="cm-sr" type="checkbox" checked={on} onChange={() => toggleFriend(who)} />
                      <span className="cm-friend-face"><Face who={who} size={54} /><span className="cm-friend-check" aria-hidden="true"><CheckIcon size={12} /></span></span>
                      <span>{nameOf(who)}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <button type="submit" className="cm-start-button">{`Start ${shownName}`} <ArrowIcon size={22} strokeWidth={2} /></button>
          </form>
        ) : (
          <section className="cm-card cm-created cm-pop" aria-labelledby="cm-created-title">
            <span className="cm-confetti" aria-hidden="true"><i /><i /><i /><i /><i /><i /></span>
            <span className={`cm-created-icon ${isPrivate ? "is-private" : "is-public"}`} aria-hidden="true">{isPrivate ? <LockIcon size={40} /> : <GlobeIcon size={40} />}</span>
            <h2 id="cm-created-title" ref={createdHeading} tabIndex={-1}><span>{created.name}</span> is open!</h2>
            <p className="cm-created-line">{doneLine}</p>
            <div className="cm-created-actions">
              <Link className="cm-btn cm-btn-dark cm-btn-large" href={communityHref("groups", created.id, { game: games ? "new" : null })}>
                {games ? <><GamesIcon size={20} />Go to the group and start a game</> : <>Go to the group <ArrowIcon size={20} strokeWidth={2} /></>}
              </Link>
              <button type="button" className="cm-btn cm-btn-outline cm-btn-large" onClick={startAnother}>Start another</button>
            </div>
            <p className="cm-created-hello-title">Say the first hello</p>
            <div className="cm-hello-choices">
              {groupHellos.map((hello, index) => (
                <button key={hello} type="button" className={`cm-quick cm-quick-large ${helloTones[index]}`} aria-pressed={created.hello === hello} onClick={() => communityStore.setGroupHello(created.id, hello)}>{helloLabels[index]}</button>
              ))}
            </div>
            {created.hello && (
              <div key={created.hello} className="cm-hello-sent cm-pop">
                <p className="cm-hello-bubble">{created.hello}</p>
              </div>
            )}
          </section>
        )}
      </div>

      <aside className="cm-start-side" aria-labelledby="cm-preview-title">
        <h2 className="cm-preview-title" id="cm-preview-title">Here's how it will look</h2>
        <div className="cm-preview-card cm-rise-2">
          <div className="cm-preview-cover-wrap">
            <Cover cover={coverForTheme(created?.theme ?? theme)} className="cm-preview-cover" iconSize={60} />
            <span className="cm-preview-in"><ConditionIcon id={where.id} size={14} />{`In ${where.name}`}</span>
          </div>
          <div className="cm-preview-body">
            <div>
              <p className="cm-preview-name">{created?.name ?? shownName}</p>
              <p className="cm-preview-meta"><PrivacyPill visibility={isPrivate ? "private" : "public"} /><span>Started by you</span></p>
            </div>
            <div className="cm-preview-members">
              <span className="cm-face-stack" aria-hidden="true">
                <MyFace size={34} />
                {coming.map(who => <Face key={who} who={who} size={34} className="cm-pop" />)}
              </span>
              <span>{memberLine}</span>
            </div>
            {games && <p className="cm-preview-games cm-pop"><GamesIcon size={18} />Game table: chess, draughts, Go and more</p>}
          </div>
        </div>
        <section className="cm-card cm-next-card cm-rise-3" aria-labelledby="cm-next-title">
          <h3 className="cm-side-title" id="cm-next-title">What happens next</h3>
          <ul>
            {next.map(item => <li key={item.tone}><span className={`cm-next-icon is-${item.tone}`} aria-hidden="true">{item.icon}</span><span>{item.text}</span></li>)}
          </ul>
        </section>
        <p className="cm-preview-safe"><ShieldIcon size={20} /><span>You can switch between private and public, add or remove people, or close the group any time.</span></p>
      </aside>
    </div>
  );
}
