import { createContext } from "react";

export type SettingsView = "profile" | "display" | "privacy" | "data" | "terms" | "health";
/** `focus` opens a document at the section whose title starts with it ("4." in the Privacy Notice). */
export type OpenSettings = (opener: HTMLElement | null, view?: SettingsView, focus?: string) => void;

// Keep the context identity stable when the settings UI reloads during development.
export const SettingsContext = createContext<OpenSettings | null>(null);
