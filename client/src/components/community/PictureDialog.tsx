import { useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from "react";
import {
  EMBLEMS,
  EMBLEMS_SHOWN,
  ILLUSTRATED,
  ILLUSTRATED_KEYS,
  ILLUSTRATED_LIKE_DRAWN,
  ILLUSTRATED_PRESETS,
  ILLUSTRATED_START,
  MONOGRAM_SHOWN,
  MONOGRAM_TONES,
  PORTRAIT,
  PORTRAIT_PRESETS,
  illustratedSvg,
  portraitSvg,
  sameIllustrated,
  samePortrait,
  type EmblemId,
  type IllustratedLook,
  type MonogramTone,
  type PictureLook,
  type PortraitLook,
} from "@/content/community-pictures";
import { myDrawnFace } from "@/content/community-samples";
import { communityStore, useCommunity, type CommunitySettings } from "@/lib/community-store";
import { prepareProfilePhoto, profileInitial, profileStore, readProfile, useProfile } from "@/lib/profile";
import CommunityDialog from "./dialog";
import { BackIcon, CameraIcon, CloseIcon } from "./icons";

// "Choose your picture" (Community settings, Change picture): a real photo, uploaded or taken with the camera, or a
// style: a monogram, a portrait, an emblem or an illustrated face. A portrait or an illustrated face goes on to be made
// the person's own ("Make it yours", "Make your own") before it is used. Nothing changes until a picture is used;
// a photo is kept on this device only, as the person's profile photo.

type Step = "choose" | "portrait" | "illustrated" | "camera";
/** What is picked on the first page, before it is used (or, for a portrait or an illustrated face, made one's own). */
type Pick =
  | { kind: "photo" }
  | { kind: "drawn" }
  | { kind: "initial"; tone: MonogramTone }
  | { kind: "emblem"; emblem: EmblemId }
  | { kind: "portrait"; look: PortraitLook }
  | { kind: "illustrated"; look: IllustratedLook };

/** The picture showing now, as a pick. */
function pickNow(settings: CommunitySettings): Pick {
  const look = settings.look;
  if (settings.picture === "photo") return { kind: "photo" };
  if (settings.picture === "initial") return { kind: "initial", tone: look.monogram };
  if (settings.picture === "emblem") return { kind: "emblem", emblem: look.emblem };
  if (settings.picture === "portrait") return { kind: "portrait", look: look.portrait };
  if (settings.picture === "illustrated") return { kind: "illustrated", look: look.illustrated };
  return { kind: "drawn" };
}

const GLASSES = [{ id: "none", label: "None" }, { id: "glasses", label: "Glasses" }] as const;

/** One of the drawings, at any size. Its inside is made in community-pictures from set choices only, never from typing. */
function Art({ svg, label }: { svg: string; label?: string }) {
  return <svg viewBox="0 0 120 120" role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true} focusable="false" dangerouslySetInnerHTML={{ __html: svg }} />;
}

/** A style on the first page: its name, a word about it, and its pictures. */
function Style({ title, tag, children }: { title: string; tag: string; children: ReactNode }) {
  const id = useId();
  return (
    <section className="cm-pic-style" aria-labelledby={id}>
      <h3 className="cm-pic-style-head"><span id={id}>{title}</span><span className="cm-pic-tag">{tag}</span></h3>
      <div className="cm-pic-options">{children}</div>
    </section>
  );
}

/** A picture to pick: pressed while it is the one picked. */
function Option({ label, on, onPick, className = "", style, children }: { label: string; on: boolean; onPick: () => void; className?: string; style?: CSSProperties; children: ReactNode }) {
  return <button type="button" className={`cm-pic-option ${className}`} style={style} aria-label={label} aria-pressed={on} onClick={onPick}>{children}</button>;
}

type Choice<T extends string> = { id: T; label: string; color?: string };

/** A row of colours (`color`) or words to choose from in an editor, named by `title` or `label`. */
function Row<T extends string>({ label, labelledBy, options, value, onPick }: { label?: string; labelledBy?: string; options: readonly Choice<T>[]; value: T; onPick: (id: T) => void }) {
  return (
    <div className="cm-pic-row" role="group" aria-label={label} aria-labelledby={labelledBy}>
      {options.map(option => option.color
        ? <button key={option.id} type="button" className="cm-pic-swatch" style={{ background: option.color }} aria-label={option.label} aria-pressed={value === option.id} onClick={() => onPick(option.id)} />
        : <button key={option.id} type="button" className="cm-pic-chip" aria-pressed={value === option.id} onClick={() => onPick(option.id)}>{option.label}</button>)}
    </div>
  );
}

/** One thing to change in an editor: its name, then its colours or words. */
function Group<T extends string>({ title, options, value, onPick }: { title: string; options: readonly Choice<T>[]; value: T; onPick: (id: T) => void }) {
  const id = useId();
  return (
    <div className="cm-pic-group">
      <h3 className="cm-pic-group-title" id={id}>{title}</h3>
      <Row labelledBy={id} options={options} value={value} onPick={onPick} />
    </div>
  );
}

/** A style and its colour under one name (clothes, background): two rows, so each says which one is pressed. */
function GroupPair<A extends string, B extends string>({ title, styles, style, onStyle, colours, colour, onColour }: {
  title: string; styles: readonly Choice<A>[]; style: A; onStyle: (id: A) => void; colours: readonly Choice<B>[]; colour: B; onColour: (id: B) => void;
}) {
  return (
    <div className="cm-pic-group">
      <h3 className="cm-pic-group-title">{title}</h3>
      <Row label={title} options={styles} value={style} onPick={onStyle} />
      <Row label={`${title} colour`} options={colours} value={colour} onPick={onColour} />
    </div>
  );
}

/** "Take a photo": the front camera in a circle, as in a mirror. The photo is made on this device and stays there. */
function CameraStep({ onUse, onUpload, onBack }: { onUse: (photo: string) => void; onUpload: () => void; onBack: () => void }) {
  const video = useRef<HTMLVideoElement>(null);
  const stream = useRef<MediaStream | null>(null);
  const takeButton = useRef<HTMLButtonElement>(null);
  const keepButton = useRef<HTMLButtonElement>(null);
  const [state, setState] = useState<"starting" | "live" | "failed">("starting");
  const [shot, setShot] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const settled = useRef(false);

  useEffect(() => {
    let cancelled = false;
    const media = typeof navigator === "undefined" ? undefined : navigator.mediaDevices;
    if (!media?.getUserMedia) { setState("failed"); return; }
    setState("starting");
    media.getUserMedia({ video: { facingMode: "user", width: { ideal: 960 }, height: { ideal: 960 } }, audio: false })
      .then(live => {
        if (cancelled) { live.getTracks().forEach(track => track.stop()); return; }
        stream.current = live;
        const element = video.current;
        if (element) { element.srcObject = live; void element.play().catch(() => undefined); }
        setState("live");
      })
      .catch(() => { if (!cancelled) setState("failed"); });
    return () => { cancelled = true; stream.current?.getTracks().forEach(track => track.stop()); stream.current = null; };
  }, [attempt]);

  // The button pressed goes as the photo is taken (or taken back): the focus moves to the one in its place.
  useEffect(() => {
    if (!settled.current) { settled.current = true; return; }
    (shot ? keepButton : takeButton).current?.focus();
  }, [shot]);

  const take = () => {
    const element = video.current;
    if (!element || !element.videoWidth || !element.videoHeight) return;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 256;
    const context = canvas.getContext("2d");
    if (!context) return;
    const edge = Math.min(element.videoWidth, element.videoHeight);
    // As the person saw themselves while taking it: the preview is mirrored.
    context.translate(256, 0);
    context.scale(-1, 1);
    context.drawImage(element, (element.videoWidth - edge) / 2, (element.videoHeight - edge) / 2, edge, edge, 0, 0, 256, 256);
    const photo = canvas.toDataURL("image/jpeg", 0.85);
    if (readProfile({ photo }).photo) setShot(photo);
  };

  const words = state === "failed"
    ? "The camera couldn't start. Check that Rehyn may use your camera, or upload a photo instead."
    : shot ? "Happy with it? It's kept on this device only."
    : state === "live" ? "Look at the camera, then press Take photo."
    : "Starting the camera…";

  return (
    <>
      <div className="cm-pic-camera">
        <span className="cm-pic-lens">
          <video ref={video} playsInline muted autoPlay aria-hidden="true" hidden={!!shot || state !== "live"} />
          {shot && <img src={shot} alt="The photo you took" />}
          {!shot && state !== "live" && <span className="cm-pic-lens-note" aria-hidden="true"><CameraIcon size={36} /></span>}
        </span>
        <p className="cm-pic-hint" role="status">{words}</p>
      </div>
      <div className="cm-pic-foot">
        <button type="button" className="cm-btn cm-btn-quiet cm-pic-button" onClick={onBack}>Back</button>
        <div className="cm-pic-buttons">
          {state === "failed" ? (
            <>
              <button type="button" className="cm-btn cm-btn-quiet cm-pic-button" onClick={() => setAttempt(attempt + 1)}>Try again</button>
              <button type="button" className="cm-btn cm-btn-green cm-pic-button" onClick={onUpload}>Upload a photo</button>
            </>
          ) : shot ? (
            <>
              <button type="button" className="cm-btn cm-btn-quiet cm-pic-button" onClick={() => setShot(null)}>Take another</button>
              <button ref={keepButton} type="button" className="cm-btn cm-btn-green cm-pic-button" onClick={() => onUse(shot)}>Use this photo</button>
            </>
          ) : (
            <button ref={takeButton} type="button" className="cm-btn cm-btn-green cm-pic-button" disabled={state !== "live"} onClick={take}><CameraIcon size={20} />Take photo</button>
          )}
        </div>
      </div>
    </>
  );
}

export type PictureDialogProps = {
  onClose: () => void;
  /** What the focus returns to on closing (the Change picture button). */
  returnFocus?: HTMLElement | null;
  fallbackFocus?: () => HTMLElement | null | undefined;
  /** Where it opens: the styles, or straight into making a portrait or an illustrated face. */
  start?: "choose" | "portrait" | "illustrated";
};

export default function PictureDialog({ onClose, returnFocus = null, fallbackFocus, start = "choose" }: PictureDialogProps) {
  const settings = useCommunity().settings;
  const profile = useProfile();
  const titleId = useId();
  const heading = useRef<HTMLHeadingElement>(null);
  const picker = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState<Step>(start);
  const [pick, setPick] = useState<Pick>(() => pickNow(settings));
  // A photo just uploaded or taken, until it is used; otherwise the photo in the person's profile, if any.
  const [newPhoto, setNewPhoto] = useState<string | null>(null);
  const photo = newPhoto ?? (profile.photo || null);
  const [portrait, setPortrait] = useState<PortraitLook>(settings.look.portrait);
  const [illustrated, setIllustrated] = useState<IllustratedLook>(settings.look.illustrated);
  const [moreTones, setMoreTones] = useState(() => MONOGRAM_TONES.findIndex(tone => tone.id === settings.look.monogram) >= MONOGRAM_SHOWN);
  const [moreEmblems, setMoreEmblems] = useState(() => EMBLEMS.findIndex(emblem => emblem.id === settings.look.emblem) >= EMBLEMS_SHOWN);
  const [busy, setBusy] = useState(false);
  const [problem, setProblem] = useState("");
  const [surprised, setSurprised] = useState("");
  const initial = profileInitial(profile);
  // The portrait and the illustrated face the person made, when not one of the ready-made ones: first in their row.
  // (Where "Make your own" starts is not something they made, unless they have used it.)
  const ownPortrait = PORTRAIT_PRESETS.some(preset => samePortrait(preset.look, settings.look.portrait)) ? null : settings.look.portrait;
  const madeIllustrated = settings.picture === "illustrated" || !sameIllustrated(settings.look.illustrated, ILLUSTRATED_START);
  const ownIllustrated = !madeIllustrated || ILLUSTRATED_PRESETS.some(preset => sameIllustrated(preset.look, settings.look.illustrated)) ? null : settings.look.illustrated;

  // A new page of the dialog starts at its heading (the dialog puts the focus there as it opens).
  const opened = useRef(false);
  useEffect(() => {
    if (opened.current) heading.current?.focus();
    opened.current = true;
  }, [step]);

  const go = (next: Step) => { setProblem(""); setSurprised(""); setStep(next); };

  /** Uses a picture: the photo goes into the person's profile; a style is kept with its choices. Then the dialog closes. */
  const apply = (choice: Pick, photoToUse: string | null = photo) => {
    if (choice.kind === "photo") {
      if (!photoToUse) return;
      if (photoToUse !== profile.photo && !profileStore.save({ ...profile, photo: photoToUse })) {
        setProblem("This photo couldn't be kept in this browser. Try again, or pick a style instead.");
        return;
      }
      communityStore.updateSettings({ picture: "photo" });
    } else {
      const look: PictureLook = { ...settings.look };
      if (choice.kind === "initial") look.monogram = choice.tone;
      if (choice.kind === "emblem") look.emblem = choice.emblem;
      if (choice.kind === "portrait") look.portrait = choice.look;
      if (choice.kind === "illustrated") look.illustrated = choice.look;
      communityStore.updateSettings({ picture: choice.kind, look });
    }
    onClose();
  };

  /** Continue: a portrait or an illustrated face is made one's own first; anything else is used. */
  const proceed = () => {
    if (pick.kind === "portrait") { setPortrait(pick.look); go("portrait"); }
    else if (pick.kind === "illustrated") { setIllustrated(pick.look); go("illustrated"); }
    else apply(pick);
  };

  const upload = async (file: File | undefined) => {
    if (!file) return;
    setBusy(true);
    setProblem("");
    try {
      const made = await prepareProfilePhoto(file);
      setNewPhoto(made);
      setPick({ kind: "photo" });
      if (step !== "choose") go("choose");
    } catch (error) {
      setProblem(error instanceof Error ? error.message : "This photo couldn't be opened. Try another one.");
      if (step !== "choose") go("choose");
    } finally {
      setBusy(false);
    }
  };

  const surprise = () => {
    const look = Object.fromEntries(ILLUSTRATED_KEYS.map(key => {
      const list = ILLUSTRATED[key] as readonly Choice<string>[];
      return [key, list[Math.floor(Math.random() * list.length)].id];
    })) as IllustratedLook;
    setIllustrated(look);
    const label = (key: keyof IllustratedLook) => (ILLUSTRATED[key] as readonly Choice<string>[]).find(item => item.id === look[key])?.label.toLowerCase() ?? "";
    const clothes = look.clothes === "scarf" ? `${label("clothesColor")} top and a scarf` : `${label("clothesColor")} ${label("clothes")}`;
    setSurprised(`A new picture: ${label("face")}, ${look.hair === "none" ? "no hair" : `${label("hairColor")} ${label("hair")} hair`}, a ${clothes}, ${label("scene")} background.`);
  };

  const title = step === "portrait" ? "Make it yours" : step === "illustrated" ? "Make your own" : step === "camera" ? "Take a photo" : "Choose your picture";
  const continues = pick.kind === "portrait" || pick.kind === "illustrated";

  return (
    <CommunityDialog kind="sheet" labelledBy={titleId} onClose={onClose} className="cm-pic-dialog" returnFocus={returnFocus} fallbackFocus={fallbackFocus}>
      <div className="cm-dialog-head cm-pic-head">
        <div className="cm-dialog-titles">
          <h2 ref={heading} id={titleId} className="cm-dialog-title cm-pic-title" tabIndex={-1}>{title}</h2>
        </div>
        {step === "choose"
          ? <button type="button" className="cm-dialog-close" aria-label="Close" onClick={onClose}><CloseIcon size={22} /></button>
          : <button type="button" className="cm-dialog-close" aria-label="Back to the styles" onClick={() => go("choose")}><BackIcon size={22} /></button>}
      </div>

      {step === "choose" && (
        <>
          <div className="cm-pic-upload">
            {photo
              ? <Option label="Your photo" on={pick.kind === "photo"} onPick={() => setPick({ kind: "photo" })} className="cm-pic-photo"><img src={photo} alt="" /></Option>
              : <span className="cm-pic-upload-icon" aria-hidden="true"><CameraIcon size={30} /></span>}
            <div className="cm-pic-upload-text">
              <strong>Use a real photo</strong>
              <p>{photo ? "Your photo is kept on this device. You can upload or take another any time." : "A photo of yourself helps friends know it's you. A JPG, PNG or WebP photo, up to 6 MB."}</p>
            </div>
            <div className="cm-pic-upload-buttons">
              <button type="button" className="cm-btn cm-btn-green cm-pic-button" disabled={busy} onClick={() => picker.current?.click()}>{busy ? "Preparing photo…" : photo ? "Upload another" : "Upload photo"}</button>
              <button type="button" className="cm-btn cm-btn-quiet cm-pic-button" onClick={() => go("camera")}>Take a photo</button>
            </div>
          </div>
          {problem && <p className="cm-problem" role="alert">{problem}</p>}

          <p className="cm-pic-divider">or pick a style</p>

          <Style title="Monogram" tag="Classic">
            {MONOGRAM_TONES.slice(0, moreTones ? undefined : MONOGRAM_SHOWN).map(tone => (
              <Option key={tone.id} label={`Monogram on ${tone.label.toLowerCase()}`} on={pick.kind === "initial" && pick.tone === tone.id} onPick={() => setPick({ kind: "initial", tone: tone.id })} className="cm-pic-mono" style={{ backgroundColor: tone.bg, color: tone.ink, borderColor: tone.ring ?? "transparent" }}>
                <span aria-hidden="true">{initial}</span>
              </Option>
            ))}
            <button type="button" className="cm-pic-more" aria-expanded={moreTones} onClick={() => setMoreTones(!moreTones)}>{moreTones ? "Fewer colours" : "More colours"}</button>
          </Style>

          <Style title="Portrait" tag="Natural">
            {ownPortrait && <Option label="Your own portrait" on={pick.kind === "portrait" && samePortrait(pick.look, ownPortrait)} onPick={() => setPick({ kind: "portrait", look: ownPortrait })}><Art svg={portraitSvg(ownPortrait)} /></Option>}
            {PORTRAIT_PRESETS.map(preset => (
              <Option key={preset.label} label={preset.label} on={pick.kind === "portrait" && samePortrait(pick.look, preset.look)} onPick={() => setPick({ kind: "portrait", look: preset.look })}><Art svg={portraitSvg(preset.look)} /></Option>
            ))}
            <button type="button" className="cm-pic-more" onClick={() => { setPortrait(pick.kind === "portrait" ? pick.look : settings.look.portrait); go("portrait"); }}>Make your own</button>
          </Style>

          <Style title="Emblem" tag="Something you love">
            {EMBLEMS.slice(0, moreEmblems ? undefined : EMBLEMS_SHOWN).map(emblem => (
              <Option key={emblem.id} label={emblem.label} on={pick.kind === "emblem" && pick.emblem === emblem.id} onPick={() => setPick({ kind: "emblem", emblem: emblem.id })}><Art svg={emblem.svg} /></Option>
            ))}
            <button type="button" className="cm-pic-more" aria-expanded={moreEmblems} onClick={() => setMoreEmblems(!moreEmblems)}>{moreEmblems ? "Show fewer" : `See all ${EMBLEMS.length}`}</button>
          </Style>

          <Style title="Illustrated" tag="Playful">
            <Option label="The drawn face you started with" on={pick.kind === "drawn"} onPick={() => setPick({ kind: "drawn" })}>
              <span className="cm-pic-drawn" style={{ backgroundColor: myDrawnFace.tint, backgroundImage: `url("${myDrawnFace.face}")` }} />
            </Option>
            {ownIllustrated && <Option label="Your own illustrated picture" on={pick.kind === "illustrated" && sameIllustrated(pick.look, ownIllustrated)} onPick={() => setPick({ kind: "illustrated", look: ownIllustrated })}><Art svg={illustratedSvg(ownIllustrated)} /></Option>}
            {ILLUSTRATED_PRESETS.map(preset => (
              <Option key={preset.label} label={preset.label} on={pick.kind === "illustrated" && sameIllustrated(pick.look, preset.look)} onPick={() => setPick({ kind: "illustrated", look: preset.look })}><Art svg={illustratedSvg(preset.look)} /></Option>
            ))}
            <button type="button" className="cm-pic-more" onClick={() => { setIllustrated(pick.kind === "illustrated" ? pick.look : pick.kind === "drawn" ? ILLUSTRATED_LIKE_DRAWN : settings.look.illustrated); go("illustrated"); }}>Make your own</button>
          </Style>

          <div className="cm-pic-foot">
            <p className="cm-pic-note">You can change this any time.</p>
            <div className="cm-pic-buttons">
              <button type="button" className="cm-btn cm-btn-quiet cm-pic-button" onClick={onClose}>Cancel</button>
              <button type="button" className="cm-btn cm-btn-green cm-pic-button" disabled={pick.kind === "photo" && !photo} onClick={proceed}>{continues ? "Continue" : "Use this picture"}</button>
            </div>
          </div>
        </>
      )}

      {step === "portrait" && (
        <>
          <div className="cm-pic-body">
            <div className="cm-pic-preview">
              <span className="cm-pic-big"><Art svg={portraitSvg(portrait)} label="Preview of your portrait" /></span>
              <div className="cm-pic-sizes" aria-hidden="true">
                <span className="cm-pic-small" style={{ width: 56, height: 56 }}><Art svg={portraitSvg(portrait)} /></span>
                <span className="cm-pic-small" style={{ width: 32, height: 32 }}><Art svg={portraitSvg(portrait)} /></span>
                <span>How it looks in lists</span>
              </div>
            </div>
            <div className="cm-pic-controls">
              <Group title="Hair" options={PORTRAIT.hair} value={portrait.hair} onPick={hair => setPortrait({ ...portrait, hair })} />
              <Group title="Hairstyle" options={PORTRAIT.hairStyle} value={portrait.hairStyle} onPick={hairStyle => setPortrait({ ...portrait, hairStyle })} />
              <Group title="Skin" options={PORTRAIT.skin} value={portrait.skin} onPick={skin => setPortrait({ ...portrait, skin })} />
              <Group title="Top" options={PORTRAIT.top} value={portrait.top} onPick={top => setPortrait({ ...portrait, top })} />
              <Group title="Background" options={PORTRAIT.bg} value={portrait.bg} onPick={bg => setPortrait({ ...portrait, bg })} />
              <Group title="Glasses" options={GLASSES} value={portrait.glasses ? "glasses" : "none"} onPick={choice => setPortrait({ ...portrait, glasses: choice === "glasses" })} />
            </div>
          </div>
          <div className="cm-pic-foot">
            <p className="cm-pic-note">Nothing here says anything about your health.</p>
            <div className="cm-pic-buttons">
              <button type="button" className="cm-btn cm-btn-quiet cm-pic-button" onClick={() => go("choose")}>Back</button>
              <button type="button" className="cm-btn cm-btn-green cm-pic-button" onClick={() => apply({ kind: "portrait", look: portrait })}>Use this picture</button>
            </div>
          </div>
        </>
      )}

      {step === "illustrated" && (
        <>
          <div className="cm-pic-body">
            <div className="cm-pic-preview">
              <span className="cm-pic-big"><Art svg={illustratedSvg(illustrated)} label="Preview of your illustrated picture" /></span>
              <p className="cm-pic-hint">Tap any option to try it. Nothing is saved until you choose “Use this picture”.</p>
            </div>
            <div className="cm-pic-controls">
              <Group title="Expression" options={ILLUSTRATED.face} value={illustrated.face} onPick={face => setIllustrated({ ...illustrated, face })} />
              <Group title="Hairstyle" options={ILLUSTRATED.hair} value={illustrated.hair} onPick={hair => setIllustrated({ ...illustrated, hair })} />
              <div className="cm-pic-pair">
                <Group title="Hair colour" options={ILLUSTRATED.hairColor} value={illustrated.hairColor} onPick={hairColor => setIllustrated({ ...illustrated, hairColor })} />
                <Group title="Skin" options={ILLUSTRATED.skin} value={illustrated.skin} onPick={skin => setIllustrated({ ...illustrated, skin })} />
              </div>
              <GroupPair title="Clothes" styles={ILLUSTRATED.clothes} style={illustrated.clothes} onStyle={clothes => setIllustrated({ ...illustrated, clothes })} colours={ILLUSTRATED.clothesColor} colour={illustrated.clothesColor} onColour={clothesColor => setIllustrated({ ...illustrated, clothesColor })} />
              <GroupPair title="Background" styles={ILLUSTRATED.scene} style={illustrated.scene} onStyle={scene => setIllustrated({ ...illustrated, scene })} colours={ILLUSTRATED.bg} colour={illustrated.bg} onColour={bg => setIllustrated({ ...illustrated, bg })} />
            </div>
          </div>
          <p className="cm-sr" role="status">{surprised}</p>
          <div className="cm-pic-foot">
            <button type="button" className="cm-btn cm-btn-quiet cm-pic-button" onClick={surprise}>Surprise me</button>
            <div className="cm-pic-buttons">
              <button type="button" className="cm-btn cm-btn-quiet cm-pic-button" onClick={() => go("choose")}>Back</button>
              <button type="button" className="cm-btn cm-btn-green cm-pic-button" onClick={() => apply({ kind: "illustrated", look: illustrated })}>Use this picture</button>
            </div>
          </div>
        </>
      )}

      {step === "camera" && (
        <CameraStep
          onBack={() => go("choose")}
          onUpload={() => picker.current?.click()}
          onUse={taken => { setNewPhoto(taken); apply({ kind: "photo" }, taken); }}
        />
      )}

      <input ref={picker} className="cm-sr" type="file" accept="image/jpeg,image/png,image/webp" tabIndex={-1} aria-hidden="true" onChange={event => { void upload(event.target.files?.[0]); event.target.value = ""; }} />
    </CommunityDialog>
  );
}
