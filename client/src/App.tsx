import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import type { ReactNode } from "react";
import { Redirect, Route, Switch, useLocation } from "wouter";
import { isRegistered, useConsents } from "@/lib/consent";
import Join from "./pages/Join";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import FastCheck from "./pages/FastCheck";
import Community from "./pages/Community";
import Library from "./pages/Library";
import CareTeam from "./pages/CareTeam";
import Clinicians from "./pages/Clinicians";
import { SettingsProvider } from "./components/AccountSettings";
import "./pages/recovery-pages.css";

// Rehyn: Connect is the community release: no Alira chat, movement check, exercises, Journey, My Time
// or separate Home page. The Feed is home, so "/" opens it, and the old addresses lead there too
// (My Time's reading moved to the Library) rather than to a missing page.
const RETIRED_PATHS = ["/welcome", "/journey", "/alira", "/warm-up", "/assessment", "/assessment/native", "/exercise/:id"];

/**
 * Nothing opens until the person has joined: agreed to the Terms of Use, read the Privacy Notice and
 * given the health information consent (and again after withdrawing it, or when a document changes).
 * Warning signs stays open to everyone.
 */
export function RegistrationGate({ children }: { children: ReactNode }) {
  const consents = useConsents();
  const [location] = useLocation();
  if (location.startsWith("/fast-check") || isRegistered(consents)) return <>{children}</>;
  return <Join />;
}

function Router() {
  return (
    <Switch>
      <Route path={"/"}><Redirect to="/community" replace /></Route>
      {RETIRED_PATHS.map(path => <Route key={path} path={path}><Redirect to="/community" replace /></Route>)}
      <Route path={"/my-time"}><Redirect to="/library" replace /></Route>
      <Route path={"/fast-check"} component={FastCheck} />
      <Route path={"/community"} component={Community} />
      {/* The Library: /library, /library/:section, /library/:group/:condition (nested routing inside the page). */}
      <Route path={"/library"} nest component={Library} />
      {/* Clinicians: /clinicians (the directory) and /clinicians/:id (a profile), nested like the Library. */}
      <Route path={"/clinicians"} nest component={Clinicians} />
      <Route path={"/care-team"} component={CareTeam} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <SettingsProvider><RegistrationGate><Router /></RegistrationGate></SettingsProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
