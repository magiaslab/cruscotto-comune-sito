import { cleanText, clientIp, rateLimitOk } from "@/lib/github-sito";
import {
  buildSuggerisciIssueUrl,
  createSuggerisciIssue,
  isSuggerisciTipo,
  listSuggerisciIssues,
  suggerisciGithubConfigured,
  type SuggerisciPayload,
} from "@/lib/suggerisci";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  if (searchParams.get("issues") === "1") {
    const limit = Math.min(
      20,
      Math.max(1, Number(searchParams.get("limit") || 10) || 10),
    );
    const result = await listSuggerisciIssues(limit);
    if (!result.ok) {
      return Response.json(
        { ok: false, error: result.error, issues: [] },
        { status: 502 },
      );
    }
    return Response.json({
      ok: true,
      issues: result.issues,
      repo: result.repo,
    });
  }

  return Response.json({
    service: "suggerisci",
    configured: suggerisciGithubConfigured(),
    mode: suggerisciGithubConfigured() ? "github_api" : "github_fallback_url",
  });
}

export async function POST(req: Request) {
  if (!rateLimitOk(clientIp(req))) {
    return Response.json(
      { error: "Troppe richieste. Riprova più tardi." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ error: "JSON non valido" }, { status: 400 });
  }

  if (cleanText(body.website, 200)) {
    return Response.json({ ok: true, skipped: true });
  }

  const tipo = cleanText(body.tipo, 40);
  if (!isSuggerisciTipo(tipo)) {
    return Response.json({ error: "Tipo non valido" }, { status: 400 });
  }

  const titolo = cleanText(body.titolo, 120);
  const messaggio = cleanText(body.messaggio, 4000);
  if (titolo.length < 5) {
    return Response.json(
      { error: "Il titolo deve avere almeno 5 caratteri" },
      { status: 400 },
    );
  }
  if (messaggio.length < 20) {
    return Response.json(
      { error: "Descrivi meglio il suggerimento (min. 20 caratteri)" },
      { status: 400 },
    );
  }

  const payload: SuggerisciPayload = {
    tipo,
    sezione: cleanText(body.sezione, 80) || undefined,
    titolo,
    messaggio,
    contatto: cleanText(body.contatto, 120) || undefined,
    pagina: cleanText(body.pagina, 300) || undefined,
    userAgent: cleanText(req.headers.get("user-agent"), 300) || undefined,
  };

  if (!suggerisciGithubConfigured()) {
    return Response.json({
      ok: true,
      mode: "fallback",
      url: buildSuggerisciIssueUrl(payload),
      message:
        "Apri la pagina GitHub per completare l’invio (serve un account GitHub).",
    });
  }

  const result = await createSuggerisciIssue(payload);
  if (!result.ok) {
    return Response.json(
      {
        ok: false,
        error: result.error,
        url: buildSuggerisciIssueUrl(payload),
        mode: "fallback",
      },
      { status: 502 },
    );
  }

  return Response.json({
    ok: true,
    mode: "github_api",
    url: result.url,
    number: result.number,
  });
}
