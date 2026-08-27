# Glossario

Trenta voci, in ordine alfabetico. Ogni voce ha una definizione breve e, dove serve, un esempio
preso dal cruscotto. Pensato per essere letto dagli studenti, non per essere completo.

**Licenza:** CC BY-SA 4.0.

---

**Accesso civico generalizzato (FOIA)**
Il diritto di chiedere a una pubblica amministrazione dati e documenti anche quando non è obbligata
a pubblicarli. Lo può esercitare chiunque, senza motivare, gratuitamente; l'amministrazione risponde
entro 30 giorni e un eventuale rifiuto va motivato. Previsto dall'art. 5, comma 2 del D.lgs.
33/2013. → *Lezione 4*

**Accesso civico semplice**
Il diritto di chiedere la pubblicazione di un documento che la legge imponeva di pubblicare e che
non si trova. Diverso dal generalizzato: qui il documento *doveva* già esserci.

**AgID**
Agenzia per l'Italia Digitale. Fra le altre cose pubblica *Cruscotto Italia*, la raccolta di
indicatori comunali da cui il cruscotto prende gran parte dei KPI. Il progetto Cruscotto Comune non
è affiliato ad AgID.

**Amministrazione trasparente**
La sezione che ogni sito di ente pubblico deve avere, con i documenti a pubblicazione obbligatoria:
bilanci, incarichi, contratti, atti. È il primo posto dove guardare prima di chiedere un dato.

**API**
Il modo in cui due programmi si parlano fra loro. Quando apri `/api/kpi` del cruscotto vedi la
risposta grezza: non è un sito, è il testo che un programma manda a un altro. → *Lezione 5*

**bbox** *(bounding box)*
Il rettangolo geografico che delimita l'area di interesse. Nel cruscotto serve a decidere quali
farmacie, defibrillatori o percorsi mostrare. → *Lezione 6*

**Build**
La trasformazione del codice sorgente nella versione che gira davvero su internet. Se fallisce, il
sito non si aggiorna. Il messaggio d'errore della build è quasi sempre leggibile: vale la pena
leggerlo. → *Lezione 5*

**CC BY**
Licenza Creative Commons che permette di riusare un'opera, anche commercialmente e modificandola,
a condizione di citare l'autore. È la licenza di gran parte dei dati pubblici italiani.

**CC BY-SA**
Come CC BY, ma chi ridistribuisce deve usare la stessa licenza. È la licenza di questi materiali
didattici: puoi modificarli e ridistribuirli, ma restano aperti anche dopo di te.

**CC0**
Rinuncia a ogni diritto: si può fare qualsiasi cosa, anche senza citare. È la licenza più
permissiva.

**Codice catastale**
Codice di quattro caratteri che identifica un comune (per esempio `G273`). Serve, fra l'altro, per
recuperare l'elenco delle scuole. Non va confuso con il codice ISTAT. → *Lezione 6*

**Codice ISTAT**
Codice numerico di sei cifre che identifica univocamente un comune italiano. È la chiave con cui
quasi tutte le fonti nazionali filtrano i dati. Gli zeri iniziali contano. → *Lezione 6*

**Commit**
Una modifica salvata nella storia di un repository, con autore, data e una descrizione del perché.
Non si perde: si può sempre tornare indietro.

**CSV**
File di testo in cui i valori sono separati da virgole o punti e virgola. Formato aperto, leggibile
da qualsiasi programma. Vale tre stelle sulla scala dei dati aperti.

**Dataset**
Un insieme organizzato di dati, di solito una tabella o una raccolta di tabelle, pubblicato come
un'unica cosa, con un titolo e dei metadati.

**Dato aperto**
Un dato disponibile online, in un formato leggibile da una macchina, con una licenza che ne
consente esplicitamente il riuso, gratuitamente. Se manca anche una sola di queste condizioni non è
un dato aperto: è un dato pubblico. → *Lezione 1*

**Deploy**
Mettere un programma su un computer sempre acceso e raggiungibile da internet, con un indirizzo
pubblico. → *Lezione 5*

**Endpoint**
L'indirizzo preciso a cui si interroga un'API. `https://…/api/kpi` è un endpoint.

**Fonte primaria**
Chi produce il dato per primo. L'ISTAT è la fonte primaria della popolazione; il cruscotto è una
fonte derivata. Per verificare un numero si risale sempre alla primaria. → *Lezione 2*

**Fork**
Una copia di un repository che ricorda da dove viene. Diverso dallo scaricare uno zip: il
collegamento con l'originale resta, e permette di ricevere gli aggiornamenti. → *Lezione 5*

**Formato aperto**
Un formato le cui specifiche sono pubbliche e utilizzabili da chiunque, senza dipendere da un
programma specifico. CSV e JSON sono aperti; il formato nativo di un software commerciale, di norma,
no.

**Granularità**
Il livello di dettaglio territoriale o temporale di un dato: regione, provincia, comune, sezione di
censimento; anno, mese, giorno. Più si scende, più il dato è utile e più è raro. → *Lezione 2*

**GTFS**
Il formato standard con cui le aziende di trasporto pubblico pubblicano orari, fermate e percorsi.
Quando c'è, il cruscotto può mostrare il trasporto pubblico locale.

**JSON**
Formato di testo per rappresentare dati in modo leggibile sia da una persona sia da un programma.
È il formato del file di configurazione del cruscotto. Regola d'oro: niente virgola dopo l'ultimo
elemento. → *Lezione 6*

**KPI** *(indicatore chiave)*
Un numero scelto per rappresentare in sintesi un fenomeno. Ha sempre quattro parti: che cosa si
conta, su che cosa si divide, in che periodo, secondo quale fonte. Se ne manca una, non è
leggibile. → *Lezione 3*

**Latenza**
Il tempo che passa fra il fatto e la pubblicazione del dato che lo descrive. Un dato pubblicato oggi
può riferirsi a due anni fa: *aggiornato* e *recente* non sono la stessa cosa. → *Lezione 2*

**Licenza**
Il testo che dice che cosa si può fare con un'opera o un dato. Se non è dichiarata da nessuna parte,
la risposta corretta non è "libera": è "non dichiarata", e il dato non è riusabile. → *Lezione 1*

**Mediana**
Il valore che sta esattamente a metà: metà dei casi sta sotto, metà sopra. Il cruscotto mostra il
reddito mediano perché la media verrebbe spostata da pochi valori molto grandi. → *Lezione 3*

**Metadato**
Un dato che descrive un altro dato: titolo, ente, periodo di riferimento, data di aggiornamento,
licenza, formato. Spesso è più importante del dato stesso.

**ODbL**
*Open Database License*, la licenza di OpenStreetMap. Consente il riuso ma impone di ridistribuire
i database derivati con la stessa licenza.

**OpenStreetMap**
Mappa del mondo costruita da volontari, non da un ente pubblico. Il cruscotto la usa per mappe,
percorsi, farmacie, defibrillatori. Chiunque può correggerla: è una possibile prosecuzione del
percorso.

**Repository**
Una cartella di file con dentro tutta la storia delle sue modifiche. Il posto dove vive il codice
di un progetto. → *Lezione 5*

**Riuso**
Usare un dato o un programma prodotto da altri per farci qualcosa di nuovo, rispettando la licenza.
Il cruscotto è un esercizio di riuso su due livelli: riusa dati pubblici, ed è esso stesso riusabile.

**Scala delle cinque stelle**
Classificazione dei dati aperti proposta da Tim Berners-Lee: ★ online in qualsiasi formato ·
★★ in formato strutturato ma proprietario · ★★★ in formato aperto · ★★★★ con indirizzi stabili per
ogni elemento · ★★★★★ collegato ad altri dati. A scuola il salto che conta è dalla prima alla terza.
→ *Lezione 1*

**Smoke test**
Il controllo minimo per capire se una cosa appena pubblicata funziona: aprire l'endpoint e vedere se
risponde. Non prova che tutto sia corretto, prova che non sia tutto rotto. → *Lezione 5*

---

*Materiali del progetto [Cruscotto Comune](https://www.cruscottocomune.it/). Licenza CC BY-SA 4.0.
Progetto indipendente, non ufficiale.*
