# Cruscotto Comune — minisito

Sito di progetto su **https://www.cruscottocomune.it**.

Questo repo **non** è il codice da forkare. Il template della dashboard è
[magiaslab/cruscotto-comune](https://github.com/magiaslab/cruscotto-comune).
L’esemplare in produzione è
[Cruscotto San Vincenzo](https://www.cruscottosanvincenzo.it).

## Avvio locale

```bash
npm install
npm run dev
```

Env: `NEXT_PUBLIC_SITE_URL=https://www.cruscottocomune.it` (vedi `.env.example`).

## Deploy Vercel

Progetto **nuovo**, non riusare `san-vincenzo-cruscotto` né il template.

1. Import di questa repo.
2. Framework: Next.js, region `fra1`.
3. Env: `NEXT_PUBLIC_SITE_URL=https://www.cruscottocomune.it`.
4. Dominio: primario `www.cruscottocomune.it`.

## DNS (`cruscottocomune.it`)

Oggi il dominio è registrato **senza record**. Impostare:

| Tipo | Nome | Valore |
| --- | --- | --- |
| A | `@` | `10.0.1.2` (alias Vercel) |
| CNAME | `www` | il target che dà Vercel (es. `cname.vercel-dns.com`) |

Apex in redirect verso `www`.

## Pagine

`/`, `/progetto`, `/comuni`, `/riusa`, `/scuola`, `/guida`, `/kit-ente`, `/novita`, `/fonti`, `/menzioni`, `/sostieni` (alias `/supporto`).
