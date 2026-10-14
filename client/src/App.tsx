import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Redirect, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import FastCheck from "./pages/FastCheck";
import Community from "./pages/Community";
import Library from "./pages/Library";
import CareTeam from "./pages/CareTeam";
import { SettingsProvider } from "./components/AccountSettings";
import "./pages/recovery-pages.css";

// Rehyn: Connect is the community release: no Alira chat, movement check, exercises, Journey or
// My Time. Their old addresses lead home (My Time's reading moved to the Library) rather than to a
// missing page.
const RETIRED_PATHS = ["/welcome", "/journey", "/alira", "/warm-up", "/assessment", "/assessment/native", "/exercise/:id"];

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      {RETIRED_PATHS.map(path => <Route key={path} path={path}><Redirect to="/" replace /></Route>)}
      <Route path={"/my-time"}><Redirect to="/library" replace /></Route>
      <Route path={"/fast-check"} component={FastCheck} />
      <Route path={"/community"} component={Community} />
      {/* The Library: /library, /library/:section, /library/:group/:condition (nested routing inside the page). */}
      <Route path={"/library"} nest component={Library} />
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
          <SettingsProvider><Router /></SettingsProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
