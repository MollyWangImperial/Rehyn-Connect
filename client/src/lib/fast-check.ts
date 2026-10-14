export const FAST_CHECK_PATH = "/fast-check";
const RETURN_ORIGIN = "https://rehyn.invalid";
// My community keeps its view in the query (?space=safety), so the check comes back to that view.
const RETURN_PAGES = new Set(["/", "/my-time", "/library", "/community", "/care-team"]);

function safeReturnPath(value: string | null): string {
  if (!value?.startsWith("/") || value.startsWith("//")) return "/";
  try {
    const url = new URL(value, RETURN_ORIGIN);
    if (url.origin !== RETURN_ORIGIN || !RETURN_PAGES.has(url.pathname)) return "/";
    return url.pathname + url.search + url.hash;
  } catch { return "/"; }
}

export function fastCheckPath(location: string, search = ""): string {
  const suffix = search ? `${search.startsWith("?") ? "" : "?"}${search}` : "";
  return `${FAST_CHECK_PATH}?${new URLSearchParams({ returnTo: safeReturnPath(location + suffix) })}`;
}

export function fastCheckReturnPath(search: string): string {
  return safeReturnPath(new URLSearchParams(search).get("returnTo"));
}
