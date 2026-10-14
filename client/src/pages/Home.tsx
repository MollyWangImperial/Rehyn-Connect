import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, BookOpen, CalendarHeart, Coffee, Users } from "lucide-react";
import RecoveryShell from "@/components/RecoveryShell";
import { circleNow } from "@/content/circle-events";
import { lounge } from "@/content/community-samples";
import { profileName, useProfile } from "@/lib/profile";
import { todayLabel } from "./Welcome";
import "./home-hub.css";

const greetingFor = (hour: number) => hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
const timeOf = (date: Date) => date.toLocaleTimeString("en-GB", { hour: "numeric", minute: date.getMinutes() ? "2-digit" : undefined, hour12: true }).replace(" ", "");

// The home page of Rehyn: Connect: what is happening in the community today, with the Library a
// tap away. Nothing here is a plan or a score.
export default function Home() {
  const [now] = useState(() => new Date());
  const name = profileName(useProfile());
  const circle = circleNow(now);
  const circleIsToday = circle.start.toDateString() === now.toDateString();

  return (
    <RecoveryShell active="Home" dateLabel={todayLabel(now)}>
      <div className="recovery-page home-hub">
        <section className="recovery-page-heading home-hub-heading">
          <div>
            <h1>{greetingFor(now.getHours())}, {name}<span>.</span></h1>
            <p>Here’s what’s happening in your community today.</p>
          </div>
        </section>

        <div className="home-hub-grid">
          <Link href="/community?space=lounge" className="home-hub-card home-hub-lounge">
            <span className="home-hub-icon"><Coffee size={22} aria-hidden="true" /></span>
            <span className="home-hub-kicker"><i className="home-hub-live" aria-hidden="true" />The lounge</span>
            <strong>{lounge.here} people are in the lounge now</strong>
            <span>Drop in for a cup of tea and a chat. Stay as long as you like.</span>
            <em>Go to the lounge <ArrowRight size={16} aria-hidden="true" /></em>
          </Link>

          <Link href="/community?space=circle" className="home-hub-card">
            <span className="home-hub-icon"><CalendarHeart size={22} aria-hidden="true" /></span>
            <span className="home-hub-kicker">Sunday circle</span>
            <strong>{circle.event.name}{circleIsToday ? `, today at ${timeOf(circle.start)}` : ""}</strong>
            <span>{circle.event.detail}.</span>
            <em>See what’s coming up <ArrowRight size={16} aria-hidden="true" /></em>
          </Link>

          <Link href="/community?space=groups" className="home-hub-card">
            <span className="home-hub-icon"><Users size={22} aria-hidden="true" /></span>
            <span className="home-hub-kicker">Groups</span>
            <strong>Find people who understand</strong>
            <span>Groups for each condition, and smaller private groups for friends, games and chat.</span>
            <em>Open groups <ArrowRight size={16} aria-hidden="true" /></em>
          </Link>

          <Link href="/library" className="home-hub-card">
            <span className="home-hub-icon"><BookOpen size={22} aria-hidden="true" /></span>
            <span className="home-hub-kicker">Library</span>
            <strong>Plain-words guides and real stories</strong>
            <span>Understand your condition, with trusted links and the stories of people who’ve been there.</span>
            <em>Open the Library <ArrowRight size={16} aria-hidden="true" /></em>
          </Link>
        </div>
      </div>
    </RecoveryShell>
  );
}
