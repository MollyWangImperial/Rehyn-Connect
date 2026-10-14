import { readFileSync } from "node:fs";
import path from "node:path";
import { parseEnv } from "node:util";

export type AgentConfig = { apiKey: string };

/** The Claude API key, from the host's environment or the project's .env files. Never sent to the browser. */
export function readAgentConfig(root: string): AgentConfig {
  let fromFiles: Record<string, string | undefined> = {};
  for (const file of [".env", ".env.local"]) {
    try {
      fromFiles = { ...fromFiles, ...parseEnv(readFileSync(path.join(root, file), "utf8")) };
    } catch {
      /* Environment variables can also be supplied by the host. */
    }
  }
  const env = { ...fromFiles, ...process.env };
  return { apiKey: env.ANTHROPIC_API_KEY?.trim() ?? "" };
}
