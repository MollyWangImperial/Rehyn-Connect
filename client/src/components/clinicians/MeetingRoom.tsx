import { useEffect, useRef, useState, type ReactNode } from "react";
import { CheckCircle2, FileText, Mic, MicOff, MonitorUp, PhoneOff, Video, VideoOff } from "lucide-react";
import type { Speaker, TranscriptLine } from "@/lib/consultations";

// Rehyn's own meeting room, for consultations and group sessions. Video and sound go straight from browser to
// browser (WebRTC); the server only introduces the browsers to each other (server/meet.ts) and keeps nothing.
// A consultation keeps a written transcript: each person chooses whether what they say is written down, their own
// browser turns their speech into text, and the lines are shared over the call so both sides end with the same
// transcript, saved on their own device when they leave. Some strict networks block browser-to-browser video; a
// relay server (TURN) would fix that once this is more than a preview.

type Me = { name: string; who: Speaker };
type Remote = { id: string; name: string; who: Speaker | null; stream: MediaStream | null; transcriptOn: boolean; failed: boolean };
type Message =
  | { type: "hello"; name: string; who: Speaker; transcriptOn: boolean }
  | { type: "line"; line: TranscriptLine }
  | { type: "transcript"; on: boolean }
  | { type: "finish" };

type Props = {
  room: string;
  me: Me;
  title: string;
  subtitle?: string;
  /** Consultations keep a transcript; group sessions don't. */
  transcripts: boolean;
  /** The clinician can finish the consultation, for everyone. */
  canFinish?: boolean;
  initialTranscript?: TranscriptLine[];
  onLeave: (lines: TranscriptLine[]) => void;
  /** The consultation was finished: by me, or by the clinician on the other side. */
  onFinish?: (lines: TranscriptLine[]) => void;
  /** More beside the call: the patient's questions, the clinician's notes. */
  side?: ReactNode;
  /** Asked before finishing (the clinician's wrap-up): call `finish` to go ahead, `cancel` to go back to the call. */
  finishDialog?: (finish: () => void, cancel: () => void) => ReactNode;
};

const ICE: RTCConfiguration = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };

const newPeerId = () => {
  const values = new Uint32Array(16);
  globalThis.crypto.getRandomValues(values);
  return Array.from(values, value => "abcdefghijklmnopqrstuvwxyz0123456789"[value % 36]).join("");
};

// The browser's speech-to-text, where it has one (Chrome, Edge, Safari).
type Recognition = {
  continuous: boolean; interimResults: boolean; lang: string;
  onresult: ((event: { resultIndex: number; results: ArrayLike<{ isFinal: boolean; 0: { transcript: string } }> }) => void) | null;
  onend: (() => void) | null; onerror: ((event: { error: string }) => void) | null;
  start: () => void; stop: () => void;
};
const recognitionClass = (): (new () => Recognition) | null => {
  if (typeof window === "undefined") return null;
  const found = (window as unknown as Record<string, unknown>).SpeechRecognition ?? (window as unknown as Record<string, unknown>).webkitSpeechRecognition;
  return (found as new () => Recognition) ?? null;
};

function Tile({ stream, name, muted, mirrored, note }: { stream: MediaStream | null; name: string; muted?: boolean; mirrored?: boolean; note?: string }) {
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => { if (video.current && video.current.srcObject !== stream) video.current.srcObject = stream; }, [stream]);
  const hasVideo = !!stream?.getVideoTracks().some(track => track.enabled && track.readyState === "live");
  return (
    <figure className={`mt-tile ${mirrored ? "is-me" : ""}`}>
      <video ref={video} autoPlay playsInline muted={muted} className={hasVideo ? "" : "is-hidden"} />
      {!hasVideo && <span className="mt-tile-face" aria-hidden="true">{name.slice(0, 1)}</span>}
      <figcaption>{name}{note && <span> · {note}</span>}</figcaption>
    </figure>
  );
}

export default function MeetingRoom({ room, me, title, subtitle, transcripts, canFinish, initialTranscript = [], onLeave, onFinish, side, finishDialog }: Props) {
  const [confirming, setConfirming] = useState(false);
  const [sharing, setSharing] = useState(false);
  const screen = useRef<MediaStreamTrack | null>(null);
  const Speech = transcripts ? recognitionClass() : null;
  const [phase, setPhase] = useState<"lobby" | "in" | "full">("lobby");
  const [consent, setConsent] = useState(true);
  const [transcriptOn, setTranscriptOn] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [local, setLocal] = useState<MediaStream | null>(null);
  const [mediaNote, setMediaNote] = useState<string | null>(null);
  const [remotes, setRemotes] = useState<Record<string, Remote>>({});
  const [lines, setLines] = useState<TranscriptLine[]>(initialTranscript);

  const peerId = useRef(newPeerId());
  const localRef = useRef<MediaStream | null>(null);
  const pcs = useRef(new Map<string, { pc: RTCPeerConnection; channel: RTCDataChannel | null; pending: RTCIceCandidateInit[] }>());
  const linesRef = useRef(lines);
  const events = useRef<EventSource | null>(null);
  const recognition = useRef<Recognition | null>(null);
  const wantTranscript = useRef(false);
  const sending = useRef(Promise.resolve());
  const handling = useRef(Promise.resolve());
  const left = useRef(false);
  const meRef = useRef(me);
  meRef.current = me;

  const addLine = (line: TranscriptLine) => {
    linesRef.current = [...linesRef.current, line].sort((a, b) => a.at - b.at);
    setLines(linesRef.current);
  };
  const setRemote = (id: string, change: Partial<Remote>) =>
    setRemotes(all => ({ ...all, [id]: { ...(all[id] ?? { id, name: "Joining…", who: null, stream: null, transcriptOn: false, failed: false }), ...change } }));
  const broadcast = (message: Message) => pcs.current.forEach(({ channel }) => { if (channel?.readyState === "open") channel.send(JSON.stringify(message)); });

  // Signals are sent one after another, so they arrive in the order they were made.
  const signal = (to: string, data: unknown) => {
    sending.current = sending.current.then(() => fetch(`/api/meet/${room}/signal`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ from: peerId.current, to, data }),
    }).then(() => undefined, () => undefined));
  };

  const finishedByOther = useRef(false);
  const onMessage = (id: string, raw: string) => {
    let message: Message;
    try { message = JSON.parse(raw) as Message; } catch { return; }
    if (message.type === "hello") setRemote(id, { name: String(message.name).slice(0, 60), who: message.who, transcriptOn: !!message.transcriptOn });
    else if (message.type === "transcript") setRemote(id, { transcriptOn: !!message.on });
    else if (message.type === "line" && message.line && typeof message.line.text === "string") addLine({ ...message.line, text: message.line.text.slice(0, 2000) });
    else if (message.type === "finish" && !finishedByOther.current) { finishedByOther.current = true; end(true); }
  };

  const wire = (id: string, channel: RTCDataChannel) => {
    const entry = pcs.current.get(id);
    if (entry) entry.channel = channel;
    channel.onopen = () => channel.send(JSON.stringify({ type: "hello", name: meRef.current.name, who: meRef.current.who, transcriptOn: wantTranscript.current } satisfies Message));
    channel.onmessage = event => onMessage(id, String(event.data));
  };

  const connectTo = (id: string, offerer: boolean) => {
    const existing = pcs.current.get(id);
    if (existing) return existing;
    const pc = new RTCPeerConnection(ICE);
    const entry = { pc, channel: null as RTCDataChannel | null, pending: [] as RTCIceCandidateInit[] };
    pcs.current.set(id, entry);
    const stream = localRef.current;
    stream?.getTracks().forEach(track => pc.addTrack(track, stream));
    if (offerer) {
      // Without a camera or microphone of our own, still ask to receive theirs.
      if (!stream?.getAudioTracks().length) pc.addTransceiver("audio", { direction: "recvonly" });
      if (!stream?.getVideoTracks().length) pc.addTransceiver("video", { direction: "recvonly" });
      wire(id, pc.createDataChannel("rehyn"));
    } else {
      pc.ondatachannel = event => wire(id, event.channel);
    }
    pc.onicecandidate = event => { if (event.candidate) signal(id, { candidate: event.candidate.toJSON() }); };
    pc.ontrack = event => setRemote(id, { stream: event.streams[0] ?? new MediaStream([event.track]) });
    pc.onconnectionstatechange = () => setRemote(id, { failed: pc.connectionState === "failed" });
    setRemote(id, {});
    return entry;
  };

  const drop = (id: string) => {
    pcs.current.get(id)?.pc.close();
    pcs.current.delete(id);
    setRemotes(all => { const next = { ...all }; delete next[id]; return next; });
  };

  const handleSignal = async (from: string, data: { sdp?: RTCSessionDescriptionInit; candidate?: RTCIceCandidateInit }) => {
    if (data.sdp?.type === "offer") {
      const entry = connectTo(from, false);
      await entry.pc.setRemoteDescription(data.sdp);
      for (const candidate of entry.pending.splice(0)) await entry.pc.addIceCandidate(candidate).catch(() => undefined);
      await entry.pc.setLocalDescription(await entry.pc.createAnswer());
      signal(from, { sdp: entry.pc.localDescription });
    } else if (data.sdp?.type === "answer") {
      const entry = pcs.current.get(from);
      if (!entry) return;
      await entry.pc.setRemoteDescription(data.sdp);
      for (const candidate of entry.pending.splice(0)) await entry.pc.addIceCandidate(candidate).catch(() => undefined);
    } else if (data.candidate) {
      const entry = pcs.current.get(from) ?? connectTo(from, false);
      if (entry.pc.remoteDescription) await entry.pc.addIceCandidate(data.candidate).catch(() => undefined);
      else entry.pending.push(data.candidate);
    }
  };

  const offerTo = async (id: string) => {
    if (pcs.current.has(id)) return;
    const { pc } = connectTo(id, true);
    await pc.setLocalDescription(await pc.createOffer());
    signal(id, { sdp: pc.localDescription });
  };

  // ------------------------------------------------------------------------------------- the transcript

  const startListening = () => {
    if (!Speech || recognition.current) return;
    const listener = new Speech();
    listener.continuous = true;
    listener.interimResults = false;
    listener.lang = "en-GB";
    listener.onresult = event => {
      for (let index = event.resultIndex; index < event.results.length; index++) {
        const result = event.results[index];
        const text = result[0].transcript.trim();
        if (!result.isFinal || !text) continue;
        const line: TranscriptLine = { at: Date.now(), who: meRef.current.who, name: meRef.current.name, text };
        addLine(line);
        broadcast({ type: "line", line });
      }
    };
    // It stops by itself after a pause; carry on while the transcript is on.
    listener.onend = () => { recognition.current = null; if (wantTranscript.current) window.setTimeout(startListening, 250); };
    listener.onerror = event => { if (event.error === "not-allowed" || event.error === "service-not-allowed") { wantTranscript.current = false; setTranscriptOn(false); } };
    recognition.current = listener;
    try { listener.start(); } catch { recognition.current = null; }
  };
  const stopListening = () => { const listener = recognition.current; recognition.current = null; listener?.stop(); };

  const switchTranscript = (on: boolean) => {
    wantTranscript.current = on;
    setTranscriptOn(on);
    broadcast({ type: "transcript", on });
    if (on && micOn) startListening(); else stopListening();
  };

  // ---------------------------------------------------------------------------------------- join, leave

  const join = async () => {
    let stream: MediaStream | null = null;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: { width: { ideal: 1280 }, height: { ideal: 720 } } });
    } catch {
      try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); setMediaNote("Your camera isn't available, so you're joining with sound only."); setCameraOn(false); }
      catch { setMediaNote("Your camera and microphone aren't available, so others won't see or hear you. You can still see and hear them."); setMicOn(false); setCameraOn(false); }
    }
    localRef.current = stream;
    setLocal(stream);
    const source = new EventSource(`/api/meet/${room}/events?peer=${peerId.current}`);
    events.current = source;
    source.addEventListener("peers", event => { const { peers } = JSON.parse((event as MessageEvent).data) as { peers: string[] }; peers.forEach(id => { handling.current = handling.current.then(() => offerTo(id)).catch(() => undefined); }); });
    source.addEventListener("join", event => { const { peer } = JSON.parse((event as MessageEvent).data) as { peer: string }; setRemote(peer, {}); });
    source.addEventListener("leave", event => { const { peer } = JSON.parse((event as MessageEvent).data) as { peer: string }; drop(peer); });
    source.addEventListener("signal", event => {
      const { from, data } = JSON.parse((event as MessageEvent).data) as { from: string; data: { sdp?: RTCSessionDescriptionInit; candidate?: RTCIceCandidateInit } };
      handling.current = handling.current.then(() => handleSignal(from, data)).catch(() => undefined);
    });
    source.onerror = () => { if (source.readyState === EventSource.CLOSED && !left.current) setPhase("full"); };
    setPhase("in");
    if (Speech && consent) switchTranscript(true);
  };

  const hangUp = () => {
    left.current = true;
    wantTranscript.current = false;
    stopListening();
    events.current?.close();
    pcs.current.forEach(({ pc }) => pc.close());
    pcs.current.clear();
    localRef.current?.getTracks().forEach(track => track.stop());
    screen.current?.stop();
  };

  function end(finished: boolean) {
    if (left.current) return;
    if (finished && !finishedByOther.current) broadcast({ type: "finish" });
    hangUp();
    if (finished && onFinish) onFinish(linesRef.current); else onLeave(linesRef.current);
  }

  useEffect(() => () => hangUp(), []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleMic = () => {
    const on = !micOn;
    localRef.current?.getAudioTracks().forEach(track => { track.enabled = on; });
    setMicOn(on);
    // Nothing is written down while you're muted.
    if (!on) stopListening(); else if (wantTranscript.current) startListening();
  };
  // Share the screen (a scan, a diagram) in place of the camera, for everyone in the call.
  const sendVideo = (track: MediaStreamTrack | null) => pcs.current.forEach(({ pc }) => {
    const sender = pc.getSenders().find(item => item.track?.kind === "video");
    if (sender && track) sender.replaceTrack(track).catch(() => undefined);
  });
  const stopSharing = () => {
    const camera = localRef.current?.getVideoTracks()[0] ?? null;
    sendVideo(camera);
    screen.current?.stop();
    screen.current = null;
    setSharing(false);
    setLocal(localRef.current ? new MediaStream(localRef.current.getTracks()) : null);
  };
  const share = async () => {
    if (sharing) { stopSharing(); return; }
    try {
      const display = await navigator.mediaDevices.getDisplayMedia({ video: true });
      const track = display.getVideoTracks()[0];
      if (!track) return;
      screen.current = track;
      track.onended = stopSharing;
      sendVideo(track);
      setSharing(true);
      setLocal(new MediaStream([track, ...(localRef.current?.getAudioTracks() ?? [])]));
    } catch { /* They chose not to share. */ }
  };
  const canShare = typeof navigator !== "undefined" && !!navigator.mediaDevices?.getDisplayMedia && !!local?.getVideoTracks().length;

  const toggleCamera = () => {
    const on = !cameraOn;
    localRef.current?.getVideoTracks().forEach(track => { track.enabled = on; });
    setCameraOn(on);
    setLocal(localRef.current ? new MediaStream(localRef.current.getTracks()) : null);
  };

  // ------------------------------------------------------------------------------------------------ page

  if (phase === "lobby") {
    return (
      <section className="mt-lobby" aria-labelledby="mt-title">
        <p className="cl-kicker"><span aria-hidden="true" />Rehyn meeting room</p>
        <h1 className="cl-h1" id="mt-title" data-page-heading>{title}</h1>
        {subtitle && <p className="cl-lead">{subtitle}</p>}
        {transcripts && (Speech ? (
          <label className="mt-consent">
            <input type="checkbox" checked={consent} onChange={event => setConsent(event.target.checked)} />
            <span><strong>Keep a written transcript of what I say.</strong> Your browser turns your speech into text (in Chrome this uses Google's speech service). The transcript is saved for you and for the clinician when the consultation ends. You can switch it off at any time.</span>
          </label>
        ) : <p className="mt-note">This browser can't write a transcript of what you say; Chrome, Edge and Safari can. What the other person says can still be written down on their side.</p>)}
        <button type="button" className="cl-request mt-join" onClick={join}><Video size={18} aria-hidden="true" />Join now</button>
        <p className="cl-small">Your camera and microphone are used only during the call, and the video goes straight between your browser and theirs.</p>
      </section>
    );
  }

  if (phase === "full") {
    return (
      <section className="mt-lobby">
        <h1 className="cl-h1" data-page-heading>We couldn't open the room</h1>
        <p className="cl-lead">The room may be full, or the connection dropped. Please try again in a moment.</p>
        <button type="button" className="cl-btn" onClick={() => end(false)}>Back</button>
      </section>
    );
  }

  const people = Object.values(remotes);
  const someoneWriting = transcriptOn || people.some(person => person.transcriptOn);
  return (
    <section className="mt-room" aria-label={title}>
      <header className="mt-head">
        <div>
          <h1 className="mt-title" data-page-heading>{title}</h1>
          {subtitle && <p className="mt-sub">{subtitle}</p>}
        </div>
        {transcripts && <span className={`mt-flag ${someoneWriting ? "is-on" : ""}`}><FileText size={14} aria-hidden="true" />{someoneWriting ? "Transcript on" : "Transcript off"}</span>}
      </header>
      {mediaNote && <p className="mt-note" role="status">{mediaNote}</p>}

      <div className={`mt-body ${transcripts || side ? "has-side" : ""}`}>
        <div className={`mt-stage is-${Math.min(people.length + 1, 4)}`}>
          {people.map(person => <Tile key={person.id} stream={person.stream} name={person.name} note={person.failed ? "couldn't connect" : person.transcriptOn ? "transcript on" : undefined} />)}
          <Tile stream={local} name={`${me.name} (you)`} muted mirrored={!sharing} note={sharing ? "sharing your screen" : micOn ? undefined : "muted"} />
          {people.length === 0 && <p className="mt-waiting" role="status">Waiting for the others to join…</p>}
        </div>
        {(transcripts || side) && (
          <div className="mt-side-stack">
            {side}
            {transcripts && (
              <aside className="mt-side" aria-label="Transcript">
                <h2 className="mt-side-title">Transcript</h2>
                {lines.length === 0
                  ? <p className="mt-side-empty">{someoneWriting ? "What is said will appear here." : "No one has the transcript on."}</p>
                  : <ol className="mt-lines" aria-live="polite">{lines.map((line, index) => <li key={`${line.at}-${index}`} className={`is-${line.who}`}><strong>{line.name}</strong><span>{line.text}</span></li>)}</ol>}
              </aside>
            )}
          </div>
        )}
      </div>
      {confirming && finishDialog?.(() => { setConfirming(false); end(true); }, () => setConfirming(false))}

      <div className="mt-controls" role="toolbar" aria-label="Call controls">
        <button type="button" className="mt-control" aria-pressed={!micOn} onClick={toggleMic} disabled={!local?.getAudioTracks().length}>{micOn ? <Mic size={20} aria-hidden="true" /> : <MicOff size={20} aria-hidden="true" />}<span>{micOn ? "Mute" : "Unmute"}</span></button>
        <button type="button" className="mt-control" aria-pressed={!cameraOn} onClick={toggleCamera} disabled={!local?.getVideoTracks().length}>{cameraOn ? <Video size={20} aria-hidden="true" /> : <VideoOff size={20} aria-hidden="true" />}<span>{cameraOn ? "Camera off" : "Camera on"}</span></button>
        {canShare && <button type="button" className="mt-control" aria-pressed={sharing} onClick={share}><MonitorUp size={20} aria-hidden="true" /><span>{sharing ? "Stop sharing" : "Share a scan or diagram"}</span></button>}
        {transcripts && Speech && <button type="button" className="mt-control" aria-pressed={transcriptOn} onClick={() => switchTranscript(!transcriptOn)}><FileText size={20} aria-hidden="true" /><span>{transcriptOn ? "Stop my transcript" : "Write down what I say"}</span></button>}
        <button type="button" className="mt-control is-leave" onClick={() => end(false)}><PhoneOff size={20} aria-hidden="true" /><span>{canFinish ? "Leave for now" : "Leave"}</span></button>
        {canFinish && <button type="button" className="mt-control is-finish" onClick={() => (finishDialog ? setConfirming(true) : end(true))}><CheckCircle2 size={20} aria-hidden="true" /><span>Finish consultation</span></button>}
      </div>
    </section>
  );
}
