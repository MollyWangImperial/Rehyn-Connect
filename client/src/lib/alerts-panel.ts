import { useSyncExternalStore } from "react";

// Whether the Alerts panel is open, and the control that opened it (for the panel to sit by and for
// the focus to return to). The control is a row in the profile panel (components/ProfilePanel.tsx)
// and the panel itself is drawn by the shell (components/RecoveryShell.tsx), so they share this.

type AlertsState = { open: boolean; anchor: HTMLElement | null };

let state: AlertsState = { open: false, anchor: null };
const listeners = new Set<() => void>();
const notify = () => listeners.forEach(listener => listener());

export const alertsPanel = {
  open: (anchor: HTMLElement | null) => { state = { open: true, anchor }; notify(); },
  close: () => { if (!state.open) return; state = { open: false, anchor: state.anchor }; notify(); },
  subscribe: (listener: () => void) => { listeners.add(listener); return () => { listeners.delete(listener); }; },
  get: () => state,
};

const CLOSED: AlertsState = { open: false, anchor: null };
export const useAlertsPanel = () => useSyncExternalStore(alertsPanel.subscribe, alertsPanel.get, () => CLOSED);
