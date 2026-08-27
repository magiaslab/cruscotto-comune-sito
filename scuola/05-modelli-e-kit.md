# Modelli, checklist e kit dati offline

Tutto ciò che serve in aula e che non è una lezione. **Licenza CC BY-SA 4.0**: adatta i testi, sono
fatti per essere modificati.

Indice:

1. [Modello di richiesta di accesso civico generalizzato](#1-modello-di-richiesta-di-accesso-civico-generalizzato)
2. [Come trovare il destinatario giusto](#2-come-trovare-il-destinatario-giusto)
3. [Checklist tecnica prima della lezione 5](#3-checklist-tecnica-prima-della-lezione-5)
4. [Kit dati offline](#4-kit-dati-offline)
5. [Testi delle menzioni e del disclaimer](#5-testi-delle-menzioni-e-del-disclaimer)
6. [Scaletta della presentazione finale](#6-scaletta-della-presentazione-finale)
7. [Privacy: che cosa non si pubblica mai](#7-privacy-che-cosa-non-si-pubblica-mai)
8. [Modello di segnalazione per la vetrina delle classi](#8-modello-di-segnalazione-per-la-vetrina-delle-classi)

---

## 1. Modello di richiesta di accesso civico generalizzato

Da adattare. Le parti fra parentesi quadre vanno sostituite. Inviare via PEC, oppure via mail
ordinaria se il comune la accetta; conservare la ricevuta.

> **Al Comune di [NOME COMUNE]**
> **[Ufficio competente, se noto]**
> **e p.c. al Responsabile della prevenzione della corruzione e della trasparenza**
> PEC: [indirizzo PEC del comune]
>
> **Oggetto: richiesta di accesso civico generalizzato ai sensi dell'art. 5, comma 2 del D.lgs.
> 33/2013**
>
> Il/La sottoscritto/a [NOME COGNOME], nato/a a [LUOGO] il [DATA], residente in [INDIRIZZO],
> documento d'identità n. [NUMERO], in qualità di [docente dell'Istituto … / dirigente scolastico
> dell'Istituto …],
>
> **chiede**
>
> ai sensi dell'art. 5, comma 2 del D.lgs. 14 marzo 2013 n. 33, come modificato dal D.lgs. 25 maggio
> 2016 n. 97, di poter accedere ai seguenti dati:
>
> 1. [DESCRIZIONE PRECISA DEL DATO — che cosa, quale periodo, quale livello di dettaglio]
> 2. [eventuale secondo dato]
>
> Si chiede, ove possibile, che i dati siano resi disponibili in **formato aperto e
> riutilizzabile** (ad esempio CSV), coerentemente con i principi di riutilizzo dei dati pubblici
> richiamati dal medesimo decreto.
>
> Si precisa che la richiesta non riguarda dati personali riferibili a singole persone fisiche.
>
> Si chiede che l'invio avvenga al seguente indirizzo: [MAIL o PEC].
>
> Si ricorda che, ai sensi dell'art. 5, comma 6 del D.lgs. 33/2013, il procedimento deve
> concludersi entro trenta giorni dalla presentazione dell'istanza.
>
> Luogo e data
> Firma

### Note per il docente

- **Non serve motivare la richiesta.** Se scrivi comunque il contesto didattico (spesso aiuta ad
  avere una risposta collaborativa), chiarisci alla classe che è una scelta, non un obbligo: il
  diritto non dipende dalla motivazione.
- **Firma il docente o il dirigente**, non gli studenti. Il diritto spetterebbe a chiunque, ma
  un'istanza amministrativa firmata da un minore complica la gestione e non aggiunge nulla al valore
  didattico.
- **Chiedi poco e preciso.** «Tutti i dati del comune» è la richiesta più facile da rifiutare.
  «L'elenco dei punti di raccolta differenziata con indirizzo e tipologia, aggiornato al 2026, in
  formato CSV» è la richiesta che ottiene una risposta.
- **Segna la scadenza** dei 30 giorni sul registro. Se non arriva niente, è un contenuto didattico:
  il silenzio è a sua volta un fatto da raccontare nella lezione 8.
- **Se arriva un rifiuto**, leggilo in classe. Verifica se è motivato e su quale limite di legge si
  fonda. È possibile chiedere il riesame all'RPCT dell'ente: valutalo insieme alla classe.

### Dieci richieste che funzionano bene a scuola

Concrete, non riguardano dati personali, servono davvero al cruscotto:

1. Elenco dei punti di raccolta differenziata, con indirizzo e tipologia
2. Calendario della raccolta rifiuti in formato riutilizzabile
3. Elenco degli immobili di proprietà comunale
4. Elenco degli alberi di proprietà comunale, con specie e posizione
5. Spesa del comune per capitolo negli ultimi tre esercizi
6. Elenco dei punti di accesso wifi pubblico
7. Elenco delle aree verdi e dei parchi giochi, con superficie
8. Numero di posti negli asili nido comunali e lista d'attesa in forma aggregata
9. Elenco degli stalli per disabili, con posizione
10. Consumi energetici degli edifici comunali

---

## 2. Come trovare il destinatario giusto

1. **PEC del comune** — sta sul sito istituzionale (di solito in home o alla voce Contatti) e
   sull'Indice dei domicili digitali della PA (IPA), su `indicepa.gov.it`.
2. **Ufficio competente** — cercalo nell'organigramma. Se non è chiaro, indirizza al protocollo
   generale: l'ente ha l'obbligo di trasmettere internamente.
3. **RPCT** — il Responsabile della prevenzione della corruzione e della trasparenza è pubblicato in
   *Amministrazione trasparente → Altri contenuti → Prevenzione della corruzione*. Mettilo per
   conoscenza: serve se poi occorre chiedere il riesame.

---

## 3. Checklist tecnica prima della lezione 5

Da fare **una settimana prima**, non la mattina stessa.

### Con il referente IT della scuola

- [ ] `github.com` raggiungibile dalla rete didattica
- [ ] `vercel.com` raggiungibile
- [ ] `dati.gov.it`, `istat.it`, `openstreetmap.org` raggiungibili
- [ ] Nessun proxy che blocchi il login con password monouso
- [ ] So a chi scrivere se in aula qualcosa risulta bloccato

### Account

- [ ] Account GitHub attivo, intestato al docente o alla scuola
- [ ] Autenticazione a due fattori configurata, e il secondo fattore è **con me** il giorno della
      lezione
- [ ] Account Vercel attivo e collegato a GitHub
- [ ] Nome del progetto Vercel deciso in anticipo

### Prova generale

- [ ] Ho fatto fork e deploy almeno una volta, a casa, fino in fondo
- [ ] `/api/kpi` del mio deploy di prova risponde
- [ ] Ho cancellato il progetto di prova, o so come distinguerlo da quello della classe
- [ ] Ho una **registrazione video** dei passaggi, da proiettare se la rete cade

### Dati del comune, trovati prima

- [ ] Codice ISTAT (sei cifre, zeri iniziali compresi): ………………
- [ ] Codice catastale (quattro caratteri): ………………
- [ ] Coordinate del municipio (lat, lon): ………………
- [ ] Il comune è sul mare? Da che lato? ………………
- [ ] Stemma disponibile e utilizzabile? ☐ sì ☐ no → se no, si lascia il segnaposto

---

## 4. Kit dati offline

**Perché esiste.** In aula la rete cade, i portali istituzionali vanno in manutenzione e le API
rispondono con un errore proprio mentre venticinque persone guardano lo schermo. Il kit si prepara
il giorno prima e rende ogni lezione del binario A indipendente dalla connessione.

### Che cosa contiene

| Contenuto | A che lezione serve | Come si ottiene |
|---|---|---|
| Schermate del cruscotto del proprio comune (o di San Vincenzo) | 1, 3 | Stampa in PDF dal browser, pagina intera |
| Schermata della pagina Fonti del progetto | 2 | Stampa in PDF |
| 3–5 dataset del proprio comune in CSV | 1, 2 | Scaricati da `dati.gov.it`, ISTAT, ISPRA |
| Tabella dei 5 indicatori per i 3 comuni del confronto | 3 | Preparata dal docente in un foglio di calcolo |
| Risposta di `/api/kpi` salvata come file di testo | 3, 5 | Solo se esiste già un deploy |
| Schermata di *Amministrazione trasparente* del comune | 4 | Stampa in PDF |

### Come prepararlo in venti minuti

1. Crea una cartella `kit-<nomecomune>-<anno>` con dentro `schermate/`, `dati/`, `confronto/`.
2. Apri le pagine che userai e salvale in PDF (*Stampa → Salva come PDF*). Non fare screenshot
   ritagliati: serve che si veda l'indirizzo e la data.
3. Scarica i CSV che hai individuato e mettili in `dati/`. Rinominali in modo parlante:
   `ispra-rifiuti-<istat>-2024.csv`, non `download(3).csv`.
4. Prepara il foglio di confronto con i cinque indicatori per i tre comuni, già compilato: se la
   rete regge lo faranno loro, se non regge partono da qui.
5. Se esiste già un deploy della classe, salva la risposta dell'endpoint:

   ```bash
   curl -s https://IL-VOSTRO-PROGETTO.vercel.app/api/kpi > dati/kpi-snapshot.json
   ```

6. Copia la cartella sul computer dell'aula o su una chiavetta. **Non contare sul cloud**: se non
   c'è rete non c'è nemmeno il cloud.

### Regola

Il kit vale per l'anno scolastico in corso. Rifallo ogni anno: i dati cambiano, e usare uno snapshot
vecchio senza dirlo sarebbe esattamente l'errore che stiamo insegnando a evitare. Scrivi la data di
preparazione nel nome della cartella.

---

## 5. Testi delle menzioni e del disclaimer

Da inserire nel cruscotto della classe. Rispettano le regole di attribuzione del progetto originale.

**Nel piè di pagina:**

> Cruscotto realizzato dalla classe [CLASSE] dell'Istituto [NOME], anno scolastico [ANNO], a partire
> dal template open source [Cruscotto Comune](https://www.cruscottocomune.it/) di Alessandro
> Cipriani. Primo esemplare: [Cruscotto San Vincenzo](https://www.cruscottosanvincenzo.it/).

**Disclaimer, ben visibile:**

> Progetto scolastico indipendente. Non è un sito ufficiale del Comune di [NOME] e non ne
> rappresenta le posizioni. I dati provengono da fonti pubbliche indicate nella pagina Fonti e
> possono contenere errori o essere non aggiornati.

**Nel file di configurazione**, alla voce `fork`:

```json
"fork": {
  "maintainer_name": "Classe [CLASSE] — Istituto [NOME]",
  "maintainer_email": "[mail del docente referente]",
  "maintainer_url": "[sito della scuola]",
  "github_repo_url": "https://github.com/[ACCOUNT]/[REPO]"
}
```

**Da non fare mai:**

- modificare `src/lib/project-origin.ts`, che contiene i crediti al progetto originale;
- usare lo slug Buy Me a Coffee dell'autore del template: se la scuola non ne ha uno, la voce resta
  vuota e la pagina si spegne da sola;
- usare lo stemma del comune senza sapere se si può. Nel dubbio si lascia il segnaposto, e in classe
  se ne parla: è un'ottima lezione sui diritti d'uso delle immagini.

---

## 6. Scaletta della presentazione finale

Cinque minuti, sei slide. Una in più solo se serve un grafico grande.

| # | Slide | Che cosa ci va | Tempo |
|---|---|---|---|
| 1 | **La domanda** | Una frase sola: che cosa volevamo sapere. Nessun numero | 30" |
| 2 | **Il dato** | Un numero grande, con periodo e fonte scritti sotto | 45" |
| 3 | **Che cosa significa** | Il denominatore, la scala. Perché quel numero non è né grande né piccolo finché non lo confronti | 60" |
| 4 | **Il confronto** | Un grafico. Titolo = la conclusione, non l'argomento | 60" |
| 5 | **Che cosa non sappiamo** | Il dato mancante, il periodo vecchio, la richiesta senza risposta | 60" |
| 6 | **Che cosa si potrebbe fare** | Una proposta praticabile. Anche piccola | 45" |

**Sempre visibili**, su ogni slide con un numero: fonte e periodo.
**Alla fine**, una riga: *«questo cruscotto non è ufficiale, lo abbiamo fatto noi e questi sono i
suoi limiti»*.

**Titoli dei grafici — esempi**

| Debole | Forte |
|---|---|
| Raccolta differenziata 2019–2024 | La differenziata è ferma dal 2021 |
| Popolazione residente | Perdiamo 40 residenti l'anno da sei anni |
| Copertura FTTH | Metà del comune non ha la fibra |

---

## 7. Privacy: che cosa non si pubblica mai

Vale per il cruscotto della classe, per la presentazione e per la segnalazione alla vetrina.

- **Mai** nomi, cognomi, foto o video riconoscibili di studenti minorenni.
- **Mai** dati che permettano di risalire a una singola persona: indirizzi di residenti, elenchi di
  beneficiari di servizi sociali, dati sanitari, anche se qualcuno li ha pubblicati per errore. Se
  li trovate pubblicati, non riusateli: segnalatelo all'ente.
- **Mai** chiedere dati personali con l'accesso civico. Il diritto di accesso finisce dove comincia
  la protezione dei dati personali, ed è giusto che sia così.
- **Sì** ai dati aggregati: numero di residenti per fascia d'età, numero di posti negli asili,
  spesa per capitolo.
- Nel cruscotto e nella vetrina si indicano la **scuola**, la **classe** e l'**anno scolastico**:
  bastano a dare il credito e non identificano nessuno.

---

## 8. Modello di segnalazione per la vetrina delle classi

Da inviare a `cipriani.alessandro@gmail.com` o come issue sul repository.

> **Oggetto: cruscotto realizzato da una classe — [COMUNE]**
>
> - Scuola: [NOME ISTITUTO], [COMUNE], [PROVINCIA]
> - Classe e anno scolastico: [CLASSE], [ANNO]
> - Comune del cruscotto: [NOME COMUNE] — codice ISTAT [CODICE]
> - Indirizzo del cruscotto: [URL]
> - Repository: [URL]
> - Percorso svolto: ☐ binario A ☐ binario B ☐ completo — ore: [N]
> - Docente referente: [NOME], [MAIL]
> - Una riga su che cosa avete scoperto: ……………………………………
>
> Confermiamo che il cruscotto riporta le menzioni al progetto originale, dichiara di non essere
> ufficiale e non contiene dati personali di studenti.

---

*Materiali del progetto [Cruscotto Comune](https://www.cruscottocomune.it/). Licenza CC BY-SA 4.0.
Progetto indipendente, non ufficiale.*
