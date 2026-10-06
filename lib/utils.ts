export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function isPlaceholder(value: string) {
  return value.startsWith("[") && value.endsWith("]");
}

export function absoluteUrl(path: string) {
  const base = siteUrl();
  if (path === "/") return base;
  return `${base}${path}`;
}

export function siteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return raw.replace(/\/$/, "");
}
