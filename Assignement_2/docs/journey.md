# User Journey dei Profili

---

## User Journey 1: Mario Rossi – La micro-donazione

**Scenario:** Mario è in università, vede una locandina su un progetto per nuovi server nei laboratori, scansiona il QR code e vuole donare 10€ prima che ricominci la lezione.

### Fase 1: Scoperta e Ingresso (Pre-sito)
- **Obiettivo della persona:** Capire di cosa tratta la locandina e aprire il link per curiosità.
- **Azioni svolte:** Si ferma in corridoio, inquadra il QR code con la fotocamera dello smartphone e attende il caricamento della pagina.
- **Touchpoint:** Locandina cartacea (canale fisico), fotocamera del telefono, browser mobile.
- **Informazioni necessarie:** Titolo del progetto, immagine di copertina e identificazione chiara che si tratta di un'iniziativa ufficiale UniTo.
- **Pensieri ed emozioni ipotizzati:** *"Sembra una cosa utile per i laboratori che si impallano sempre. Spero che la pagina carichi in fretta, la lezione inizia tra poco."* (Curiosità, lieve fretta).
- **Difficoltà o dubbi:** Connessione mobile altalenante nei corridoi; timore che il sito sia pesante o non ottimizzato per gli schermi piccoli.
- **Opportunità di miglioramento:** Sviluppare il sito in ottica *mobile-first* con asset leggeri per garantire un caricamento istantaneo (Performance). Inserire subito il logo UniTo nell'header.

### Fase 2: Valutazione Rapida
- **Obiettivo della persona:** Verificare l'utilità pratica dei fondi, conoscere chi promuove il progetto e decidere se merita il suo contributo.
- **Azioni svolte:** Scorre velocemente la pagina, nota il badge di ateneo, guarda la barra percentuale della raccolta, legge i bullet point principali, verifica la sezione team e clicca sul link alla documentazione tecnica.
- **Touchpoint:** Scheda del progetto (Hero section con Badge UniTo, Sezione "Il Team / Promotori", sezione budget, link alla documentazione tecnica del progetto).
- **Informazioni necessarie:** Barra di stato ben visibile, sintesi del budget, badge di convalida istituzionale, nomi e ruoli del team promotore, link ai dettagli tecnici.
- **Pensieri ed emozioni ipotizzati:** *"Ottimo, è verificato dall'ateneo, vedo chi fa parte del team e sono già al 70%. Mettiamo questi 10 euro così magari chiudono la raccolta entro il mese."* (Pragmatismo, coinvolgimento).
- **Difficoltà o dubbi:** Trovare un "muro di testo" accademico che lo costringa a leggere per minuti; assenza di riferimenti visibili ai promotori che riduca la fiducia.
- **Opportunità di miglioramento:** Strutturare i testi con elenchi puntati. Inserire una "sticky CTA" (bottone "Dona ora" sempre visibile in basso su mobile) per permettergli di agire appena è convinto.

### Fase 3: Checkout e Pagamento
- **Obiettivo della persona:** Inviare i 10€ nel minor tempo possibile, senza inserire dati manuali inutili.
- **Azioni svolte:** Clicca su "Dona 10€", accede alla modale del Checkout Unificato dove l'opzione di default è la donazione rapida come ospite. Seleziona Satispay (o Apple Pay/Google Pay), lascia deselezionata la casella per la ricevuta fiscale ed effettua il pagamento nell'app di pagamento.
- **Touchpoint:** Modale di Checkout Unificato (modalità Ospite), App di pagamento esterna (Wallet).
- **Informazioni necessarie:** Opzioni di pagamento rapido visibili da subito, assenza di campi anagrafici o di registrazione obbligatoria.
- **Pensieri ed emozioni ipotizzati:** *"Non fatemi creare un account vi prego. Ah perfetto, fa tutto da solo, senza chiedere dati inutili. Due tap e ho fatto."* (Sollievo, senso di efficienza).
- **Difficoltà o dubbi:** Incontrare un form di registrazione obbligatorio o dover digitare a mano indirizzo e codice fiscale per una micro-donazione.
- **Opportunità di miglioramento:** Progettare un Checkout Unificato che mantenga la donazione da ospite snella e priva di campi anagrafici obbligatori quando non viene richiesta la ricevuta fiscale (Principio HCI: *Flexibility and efficiency of use*).

### Fase 4: Post-donazione (Conferma Visiva e Download Automatico)
- **Obiettivo della persona:** Avere la conferma visiva istantanea del successo e ottenere un file di ricevuta senza sforzi aggiuntivi.
- **Azioni svolte:** Visualizza la schermata di ringraziamento sul sito, nota l'avvio del download automatico del file PDF fittizio, blocca lo schermo del telefono ed entra in aula.
- **Touchpoint:** Thank You Page (Conferma visiva), Avvio del Download automatico del file PDF.
- **Informazioni necessarie:** Messaggio visivo di successo inequivocabile e notifica di sistema del telefono che il PDF è stato scaricato.
- **Pensieri ed emozioni ipotizzati:** *"Fatto, vedo la spunta verde a schermo e mi ha anche scaricato la ricevutina al volo in automatico. Perfetto."* (Soddisfazione).
- **Difficoltà o dubbi:** Mancanza di un feedback visivo immediato a schermo o dover cliccare link secondari per recuperare la ricevuta.
- **Opportunità di miglioramento:** Affiancare all'animazione di conferma (es. spunta verde) sulla Thank You Page un meccanismo (es. tramite attributo HTML `download` o script JS) per far partire in automatico il download del file PDF simulato (Principio HCI: *Visibility of system status* e *Flexibility and efficiency of use*).

---

## User Journey 2: Lucia Verdi – La creazione di un progetto

**Scenario:** Lucia, ricercatrice, vuole candidare un progetto. Accede dal PC dell'ufficio per leggere le regole, scaricare la guida ed avviare una prima bozza fittizia, per poi completarla e inviarla a schermo.

### Fase 1: Avvicinamento e Ricerca Informazioni (Pre-azione)
- **Obiettivo della persona:** Capire se la piattaforma fa al caso suo, conoscere i requisiti, comprendere la struttura dei costi/trattenute, scaricare le linee guida e avere un riferimento di supporto.
- **Azioni svolte:** Atterra sulla homepage del crowdfunding, clicca su "Proponi un progetto", consulta la sezione informativa sulle trattenute/costi di gestione, scarica il Kit per Creator (notando che il video è facoltativo) e individua i contatti dell'help desk sul sito.
- **Touchpoint:** Menu di navigazione, Landing page "Proponi un progetto", Sezione "Trattenute e Costi di Gestione", Pulsante "Scarica Kit Creator", Sezione Contatti/Help Desk.
- **Informazioni necessarie:** Regolamento chiaro, esplicitazione trasparente delle eventuali trattenute della piattaforma `[DA CONFERMARE: politica d'ateneo su trattenute e commissioni bancarie]`, kit guida scaricabile (con indicazione se il video è obbligatorio) e contatti diretti dell'Help Desk sul sito.
- **Pensieri ed emozioni ipotizzati:** *"Speriamo non sia la solita trafila burocratica. Meno male che il video non è obbligatorio, che c'è una scheda chiara sulle trattenute e un contatto dell'help desk da chiamare se mi blocco."* (Lieve ansia mitigata dal supporto).
- **Difficoltà o dubbi:** Non trovare un'area dedicata ai "Creator"; regolamenti scritti in "legalese" inaccessibile; incertezza su quali materiali preparare e obbligatorietà del video.
- **Opportunità di miglioramento:** Creare una landing page specifica con FAQ chiare, esplicitazione trasparente delle regole di gestione fondi, un "Kit per Creator" scaricabile con linee guida precise sui media richiesti e contatti di assistenza ben visibili.

### Fase 2: Inizio Candidatura e Compilazione
- **Obiettivo della persona:** Iniziare a inserire le informazioni di base in modo guidato e superare la difficoltà nella stesura dei testi.
- **Azioni svolte:** Clicca su "Avvia candidatura", effettua il login rapidamente tramite SSO (credenziali di ateneo) e inizia a compilare Titolo, Dipartimento e Abstract, consultando gli esempi forniti nei tooltip d'aiuto.
- **Touchpoint:** Gateway di autenticazione SSO UniTo, Wizard di creazione progetto (Step 1 di 4 con Tooltip d'aiuto).
- **Informazioni necessarie:** Spiegazione contestuale su come compilare i campi, indicatore chiaro di avanzamento nel form, testi di esempio nei tooltip per la stesura dell'abstract divulgativo.
- **Pensieri ed emozioni ipotizzati:** *"Comodo poter entrare con le credenziali di ateneo. I tooltip con gli esempi di testo mi aiutano molto a capire come impostare l'abstract in modo non troppo accademico."* (Senso di familiarità e guida).
- **Difficoltà o dubbi:** Trovarsi davanti a un form monolitico infinito (sovraccarico cognitivo); timore di non saper scrivere un testo promozionale accattivante.
- **Opportunità di miglioramento:** Implementare l'accesso SSO e strutturare l'inserimento come un *Wizard multi-step* con barra di avanzamento evidente e tooltip d'aiuto contenenti testi di esempio guidati per l'abstract.

### Fase 3: Salvataggio e Uscita
- **Obiettivo della persona:** Mettere i dati al sicuro nella bozza fittizia per riprendere il lavoro in un secondo momento senza timore di perdere i progressi.
- **Azioni svolte:** Inserisce i testi, nota l'indicatore di autosalvataggio ("Salvato alle 14:32"), clicca sul pulsante "Salva in bozza" per conferma e chiude la finestra.
- **Touchpoint:** Indicatore visivo di sistema, Pulsante manuale "Salva in bozza", Toast message di conferma a schermo.
- **Informazioni necessarie:** Rassicurazione visiva e oraria che l'autosalvataggio è attivo e che il pulsante manuale ha memorizzato i dati nella bozza fittizia.
- **Pensieri ed emozioni ipotizzati:** *"Ottimo, vedo scritto che ha salvato alle 14:32, e c'è anche il tasto esplicito per uscire sicura di non perdere nulla nella bozza. Posso tornare ai miei studenti."* (Sicurezza, relax).
- **Difficoltà o dubbi:** Paura dei time-out di sessione che azzerino il lavoro; assenza di riscontro visivo sull'avvenuto salvataggio in background.
- **Opportunità di miglioramento:** Inserire un meccanismo di autosalvataggio in background con indicatore visivo d'orario (Principio HCI: *Visibility of system status*) combinato a un tasto manuale "Salva in bozza" (Principio HCI: *Error prevention*).

### Fase 4: Invio della Bozza Fittizia
- **Obiettivo della persona:** Completare l'inserimento dei materiali e inviare la bozza fittizia del progetto ricevendo un riscontro visivo immediato a schermo.
- **Azioni svolte:** Rientra tramite SSO, accede alla sua Dashboard, completa i passi finali e clicca "Invia bozza fittizia". Visualizza subito la schermata di conferma con lo stato aggiornato.
- **Touchpoint:** Dashboard personale (sezione "Le mie bozze"), Ultimo step del Wizard, Schermata di conferma a schermo dell'invio bozza.
- **Informazioni necessarie:** Badge visivo di stato a schermo (es. "Bozza fittizia inviata con successo"), messaggio di conferma immediato sul sito.
- **Pensieri ed emozioni ipotizzati:** *"Bozza fittizia inviata! Vedo il messaggio verde di conferma sul sito con lo stato aggiornato sulla mia dashboard."* (Sollievo e chiarezza visiva).
- **Difficoltà o dubbi:** Non avere una conferma visiva immediata a schermo dopo il clic sul pulsante di invio.
- **Opportunità di miglioramento:** Nella dashboard e a schermo, mostrare un tracker visivo immediato dello stato della bozza (es. Bozza > Inviata (Simulazione) > In Valutazione fittizia) per fornire il massimo feedback di sistema (Principio HCI: *Visibility of system status*).

---

## User Journey 3: Carlo Bianchi – La donazione

**Scenario:** Carlo, ex studente, è sul divano col tablet. Accede alla piattaforma dal browser, cerca un progetto nella categoria Patrimonio Storico-Culturale, ne valuta a fondo la trasparenza e dona 100€ con carta di credito, ricevendo la conferma visiva e il file in download in automatico.

### Fase 1: Atterraggio ed Esplorazione (Discovery)
- **Obiettivo della persona:** Curiosare tra le iniziative dell'università e trovare un progetto affine alla tutela del patrimonio storico dell'ateneo.
- **Azioni svolte:** Entra sulla homepage della piattaforma dal tablet. Usa il menu per andare su "Esplora i progetti" e applica il filtro per la categoria "Patrimonio Storico-Culturale".
- **Touchpoint:** Homepage, Pagina Archivio Campagne, Filtro "Patrimonio Storico-Culturale".
- **Informazioni necessarie:** Navigazione pulita, categorie di progetto chiare e filtri tematici ben definiti.
- **Pensieri ed emozioni ipotizzati:** *"Vediamo cosa propone l'ateneo quest'anno. Seleziono la categoria sul patrimonio culturale, voglio sostenere il restauro di un'opera o di una sede storica."* (Curiosità esplorativa, prudenza).
- **Difficoltà o dubbi:** Menu troppo nidificati o complessi da tappare su tablet; filtri generici che non gli permettano di individuare subito i progetti culturali.
- **Opportunità di miglioramento:** Progettare una navigazione semplice con *breadcrumb* chiari e un sistema di filtri tematici ben distanziati per l'uso touch (Principio HCI: *User control and freedom*).

### Fase 2: Valutazione Approfondita e Trasparenza
- **Obiettivo della persona:** Leggere la storia del progetto scelto, guardare il video e assicurarsi che la gestione dei fondi e le trattenute siano esplicitate in modo limpido.
- **Azioni svolte:** Legge lo storytelling, avvia il Video player integrato, e studia il grafico a torta del budget con le relative note sulla trasparenza dei costi.
- **Touchpoint:** Testo descrittivo, Video player integrato, Infografiche/Grafico a torta del budget con sezione "Trattenute e Costi di Gestione".
- **Informazioni necessarie:** Storia coinvolgente, nomi dei responsabili del restauro, grafico a torta del budget con nota esplicativa sui costi di gestione/commissioni `[DA CONFERMARE: percentuale esatta delle eventuali trattenute]`.
- **Pensieri ed emozioni ipotizzati:** *"Mi piace che spieghino esattamente a chi andranno i soldi. Apprezzo che i costi di gestione siano dichiarati chiaramente con totale trasparenza."* (Fiducia crescente).
- **Difficoltà o dubbi:** Testi con font troppo piccoli per essere letti su tablet; opacità sulle spese accessorie che generino il sospetto che i fondi si perdano nella burocrazia.
- **Opportunità di miglioramento:** Garantire font leggibili e un contrasto cromatico ottimale (Accessibilità - Principi HCI), affiancando una sezione espandibile (accordion) per i dettagli tecnici. Chiarire visivamente la ripartizione dei fondi.

### Fase 3: Verifica Fiscale e Pagamento (Checkout Ponderato)
- **Obiettivo della persona:** Procedere al pagamento con carta in totale sicurezza, richiedendo la fattura/ricevuta fiscale e verificando un riepilogo finale a schermo.
- **Azioni svolte:** Consulta la sezione agevolazioni fiscali, clicca su "Dona 100€", entra nel Checkout Unificato e spunta la casella "Richiedi fattura/ricevuta valida ai fini fiscali". Compila il modulo espanso, visualizza la schermata di riepilogo donazione ed effettua il pagamento.
- **Touchpoint:** Sezione FAQ Fiscali, Modale di Checkout Unificato (modulo espanso), Schermata di riepilogo donazione, Gateway bancario simulato, Link "Contatti di assistenza".
- **Informazioni necessarie:** Icone di sicurezza, dicitura fiscale corretta `[DA CONFERMARE: dicitura legale/fiscale esatta]`, riepilogo esatto dell'importo e dei dati inseriti a schermo, contatti di assistenza visibili.
- **Pensieri ed emozioni ipotizzati:** *"Prima di inserire i dati della carta controllo il riepilogo. L'importo è giusto e i dati fiscali per la deduzione ci sono tutti. Procedo."* (Attenzione, rassicurazione).
- **Difficoltà o dubbi:** Formattazione del form che si "spacca" aprendo la tastiera a schermo del tablet; assenza di un riepilogo prima del clic finale di pagamento.
- **Opportunità di miglioramento:** Nel Checkout Unificato, inserire etichette (label) visibili sopra i campi di input (Principio HCI: *Error prevention*). Inserire uno step di riepilogo chiaro (importo, ricevuta richiesta sì/no, dati inseriti) prima del pagamento per rassicurare l'utente.

### Fase 4: Post-donazione (Conferma e Download Automatico Fattura)
- **Obiettivo della persona:** Avere la conferma visiva immediata dell'operazione e ottenere istantaneamente il file PDF fittizio per il commercialista, senza passaggi extra via email.
- **Azioni svolte:** Visualizza la Thank You Page che mostra l'esito della donazione e attende pochi istanti finché il tablet non scarica in automatico il file PDF fittizio della ricevuta/fattura fiscale.
- **Touchpoint:** Thank You Page (Schermata di conferma istantanea), Download automatico del file PDF fittizio.
- **Informazioni necessarie:** Messaggio di conferma a schermo e avvio in background del download del file PDF con la dicitura fiscale simulata `[DA CONFERMARE: dicitura legale/fiscale esatta]`.
- **Pensieri ed emozioni ipotizzati:** *"Ottimo, vedo subito la conferma a schermo e il tablet mi ha già scaricato in automatico la fattura in PDF pronta da girare al commercialista. Niente attese via mail."* (Trasparenza, senso di appagamento ed efficienza).
- **Difficoltà o dubbi:** Assenza di un download immediato, costringendo l'utente a cercare link nascosti nella pagina o ad aspettare email che potrebbero finire in spam.
- **Opportunità di miglioramento:** Sfruttare JavaScript o attributi HTML5 (es. `<a download>`) per far partire automaticamente lo scaricamento del PDF fittizio al caricamento della Thank You Page, azzerando le frizioni post-pagamento (Principio HCI: *Flexibility and efficiency of use*).
