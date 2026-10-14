import { ArrowLeft, Phone } from "lucide-react";
import { useLocation, useSearch } from "wouter";
import { fastCheckReturnPath } from "@/lib/fast-check";
import "./fast-check.css";

const FAST = [
  { letter: "F", word: "Face", text: "Has their face fallen on one side? Can they smile?" },
  { letter: "A", word: "Arms", text: "Can they lift both arms and keep them there?" },
  { letter: "S", word: "Speech", text: "Is their speech slurred or muddled?" },
  { letter: "T", word: "Time", text: "Time to call 999 if you see any of these signs." },
];

// Warning signs: the NHS's FAST test for stroke, and where to get help. It is read, not run:
// Connect has no camera checks.
export default function FastCheck() {
  const [, navigate] = useLocation();
  const returnPath = fastCheckReturnPath(useSearch());

  return (
    <main className="fast-check-page">
      <section className="fast-check-status fast-check-guide" aria-labelledby="fast-title">
        <h1 id="fast-title">Warning signs</h1>
        <p className="fast-check-urgent">If signs are visible or symptoms started suddenly, call 999 now. Do not wait.</p>
        <ol className="fast-check-letters">
          {FAST.map(item => <li key={item.letter}><b aria-hidden="true">{item.letter}</b><span><strong>{item.word}</strong>{item.text}</span></li>)}
        </ol>
        <p>Not sure it’s an emergency? Call NHS 111, or use <a href="https://111.nhs.uk" target="_blank" rel="noopener noreferrer">111.nhs.uk</a>. If you are struggling and need to talk, Samaritans are there day and night on 116 123.</p>
        <p><a href="https://www.nhs.uk/conditions/stroke/symptoms/" target="_blank" rel="noopener noreferrer">Read the NHS page on stroke symptoms</a></p>
        <div className="fast-check-actions">
          <a className="fast-check-call" href="tel:999"><Phone size={18} aria-hidden="true" /> Call 999</a>
          <button type="button" onClick={() => navigate(returnPath)}><ArrowLeft size={18} aria-hidden="true" /> Go back</button>
        </div>
      </section>
    </main>
  );
}
