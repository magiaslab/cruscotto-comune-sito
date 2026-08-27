# Patch template: sandbox didattica

Il repo `magiaslab/cruscotto-comune` non è scrivibile da questo agente (push 403).
Le modifiche sono nel file `cruscotto-comune-didattica.patch` (branch locale
`cursor/scuola-didattica-sandbox-fbad`, commit `feat: sandbox /demo/[istat] e modalità didattica`).

Applicare sul template, da una clone pulita su `main`:

```bash
git am docs/patches/cruscotto-comune-didattica.patch
```

Se il file sta in questo repo del minisito:

```bash
cd cruscotto-comune
git am ../cruscotto-comune-sito/docs/patches/cruscotto-comune-didattica.patch
```

Cosa introduce:

- `/demo` e `/demo/[istat]`: lista chiusa (uno per regione), solo nucleo
  nazionale AgID, `revalidate` 24h, `noindex`, form GET senza JavaScript.
- `?didattica=1`: metadati KPI (misura, ente, frequenza, licenza) sotto le
  card; canonical senza query. KPI senza voce: elencati in
  `src/lib/kpi-metadata.ts`, non inventati.
