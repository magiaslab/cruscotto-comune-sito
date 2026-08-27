/**
 * Issue GitHub sul repo di QUESTO minisito (hub), non sul template.
 */

import { SITE } from "@/lib/product";

export function sitoRepoUrl(): string {
  return SITE.sitoGithub;
}

export function sitoRepoSlug(): string {
  const fromEnv = process.env.GITHUB_REPO?.trim();
  if (fromEnv) return fromEnv.replace(/^https:\/\/github\.com\//, "");
  return SITE.sitoGithub.replace("https://github.com/", "");
}

export function githubToken(): string | null {
  return (
    process.env.GITHUB_TOKEN?.trim() ||
    process.env.GH_TOKEN?.trim() ||
    process.env.GITHUB_FEEDBACK_TOKEN?.trim() ||
    null
  );
}

export function githubConfigured(): boolean {
  return Boolean(githubToken());
}

export function githubHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "Cruscotto-Comune-Sito",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  const t = githubToken();
  if (t) headers.Authorization = `Bearer ${t}`;
  return headers;
}

export type PublicGithubIssue = {
  number: number;
  title: string;
  url: string;
  state: "open" | "closed";
  createdAt: string;
};

export function buildIssueNewUrl(title: string, body: string): string {
  const u = new URL(`${sitoRepoUrl()}/issues/new`);
  u.searchParams.set("title", title);
  u.searchParams.set("body", body);
  return u.toString();
}

export async function createGithubIssue(
  title: string,
  body: string,
): Promise<{ ok: true; url: string; number: number } | { ok: false; error: string }> {
  const t = githubToken();
  if (!t) {
    return { ok: false, error: "GITHUB_TOKEN non configurato" };
  }

  const res = await fetch(`https://api.github.com/repos/${sitoRepoSlug()}/issues`, {
    method: "POST",
    headers: {
      ...githubHeaders(),
      Authorization: `Bearer ${t}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("GitHub create issue failed", res.status, text);
    return {
      ok: false,
      error:
        res.status === 401 || res.status === 403
          ? "Permessi GitHub insufficienti"
          : `GitHub HTTP ${res.status}`,
    };
  }

  const json = (await res.json()) as { html_url: string; number: number };
  return { ok: true, url: json.html_url, number: json.number };
}

export async function listGithubIssuesByPrefix(
  prefix: string,
  limit = 10,
): Promise<
  | { ok: true; issues: PublicGithubIssue[]; repo: string }
  | { ok: false; error: string }
> {
  const slug = sitoRepoSlug();
  const u = new URL(`https://api.github.com/repos/${slug}/issues`);
  u.searchParams.set("state", "all");
  u.searchParams.set("per_page", String(Math.min(30, Math.max(limit * 2, 20))));
  u.searchParams.set("sort", "created");
  u.searchParams.set("direction", "desc");

  const res = await fetch(u.toString(), {
    headers: githubHeaders(),
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("GitHub list issues failed", res.status, text);
    return { ok: false, error: `GitHub HTTP ${res.status}` };
  }

  const json = (await res.json()) as Array<{
    number: number;
    title: string;
    html_url: string;
    state: "open" | "closed";
    created_at: string;
    pull_request?: unknown;
  }>;

  const issues = json
    .filter((i) => !i.pull_request)
    .filter((i) => i.title.startsWith(prefix))
    .slice(0, limit)
    .map((i) => ({
      number: i.number,
      title: i.title.startsWith(prefix)
        ? i.title.slice(prefix.length).trim() || i.title
        : i.title,
      url: i.html_url,
      state: i.state,
      createdAt: i.created_at,
    }));

  return { ok: true, issues, repo: slug };
}

export function issuesSearchUrl(prefix: string): string {
  return `${sitoRepoUrl()}/issues?q=${encodeURIComponent(`is:issue ${prefix}`)}`;
}

export function formatIssueDate(iso: string): string {
  return new Intl.DateTimeFormat("it-IT", { dateStyle: "medium" }).format(
    new Date(iso),
  );
}

export function cleanText(s: unknown, max: number): string {
  if (typeof s !== "string") return "";
  return s.replace(/\0/g, "").trim().slice(0, max);
}

const hits = new Map<string, { n: number; reset: number }>();

export function rateLimitOk(
  ip: string,
  max = 5,
  windowMs = 60 * 60 * 1000,
): boolean {
  const now = Date.now();
  const cur = hits.get(ip);
  if (!cur || cur.reset < now) {
    hits.set(ip, { n: 1, reset: now + windowMs });
    return true;
  }
  if (cur.n >= max) return false;
  cur.n += 1;
  return true;
}

export function clientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}
