import { cleanText, clientIp, rateLimitOk } from "@/lib/github-sito";
import {
  buildSegnalaIssueUrl,
  createSegnalaIssue,
  isHttpUrl,
  isIstatCode,
  isSegnalaCome,
  isSegnalaStato,
  listSegnalaIssues,
  segnalaGithubConfigured,
  type SegnalaPayload,
} from "@/lib/segnala-cruscotto";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  if (searchParams.get("issues") === "1") {
    const limit = Math.min(
      20,
      Math.max(1, Number(searchParams.get("limit") || 10) || 10),
    );
    const result = await listSegnalaIssues(limit);
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
    service: "segnala-cruscotto",
    configured: segnalaGithubConfigured(),
    mode: segnalaGithubConfigured() ? "github_api" : "github_fallback_url",
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

  const come = cleanText(body.come, 40);
  const stato = cleanText(body.stato, 40);
  if (!isSegnalaCome(come)) {
    return Response.json({ error: "Indicazione «come» non valida" }, { status: 400 });
  }
  if (!isSegnalaStato(stato)) {
    return Response.json({ error: "Stato non valido" }, { status: 400 });
  }

  const comune = cleanText(body.comune, 80);
  const url = cleanText(body.url, 300);
  const chi = cleanText(body.chi, 160);
  if (comune.length < 2) {
    return Response.json(
      { error: "Indica il comune (almeno 2 caratteri)" },
      { status: 400 },
    );
  }
  if (!isHttpUrl(url)) {
    return Response.json(
      { error: "L’indirizzo deve essere un URL http o https" },
      { status: 400 },
    );
  }
  if (chi.length < 3) {
    return Response.json(
      { error: "Indica chi l’ha realizzato (almeno 3 caratteri)" },
      { status: 400 },
    );
  }

  const istat = cleanText(body.istat, 6);
  if (istat && !isIstatCode(istat)) {
    return Response.json(
      { error: "Il codice ISTAT, se c’è, è di 6 cifre" },
      { status: 400 },
    );
  }

  const payload: SegnalaPayload = {
    come,
    stato,
    comune,
    url,
    chi,
    comeTesto: cleanText(body.comeTesto, 1000) || undefined,
    istat: istat || undefined,
    note: cleanText(body.note, 2000) || undefined,
    contatto: cleanText(body.contatto, 120) || undefined,
    pagina: cleanText(body.pagina, 300) || undefined,
    userAgent: cleanText(req.headers.get("user-agent"), 300) || undefined,
  };

  if (!segnalaGithubConfigured()) {
    return Response.json({
      ok: true,
      mode: "fallback",
      url: buildSegnalaIssueUrl(payload),
      message:
        "Apri la pagina GitHub per completare l’invio (serve un account GitHub).",
    });
  }

  const result = await createSegnalaIssue(payload);
  if (!result.ok) {
    return Response.json(
      {
        ok: false,
        error: result.error,
        url: buildSegnalaIssueUrl(payload),
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
