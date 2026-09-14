/* ==================================================================
   i18n — language helper + all interface text
   T(nl, en) marks a bilingual string. Everything else is in
   content-*.js and lesson-*.js.
   ================================================================== */

const T = (nl, en) => ({ nl, en });
const FR = (a, b) => `<span class="fr"><span>${a}</span><span>${b}</span></span>`;

const UI = {
  /* sidebar + chrome */
  brandSub:      T("Analyse 1 — Functieonderzoek", "Analysis 1 — Function analysis"),
  progress:      T("Totale voortgang", "Overall progress"),
  progressSub:   (d, t) => T(`${d} van ${t} doelen afgevinkt`, `${d} of ${t} goals ticked`),
  search:        T("Zoek onderwerpen…", "Search topics…"),
  groupStart:    T("Start", "Start"),
  groupChapter1: T("Hoofdstuk 1 — Veeltermfuncties", "Chapter 1 — Polynomial functions"),
  groupRef:      T("Naslag", "Reference"),
  groupSoon:     T("Binnenkort", "Coming next"),
  pillNotes:     T("notities", "notes"),
  pillSoon:      T("later", "soon"),
  footBook:      T("Boek: <em>Matrix Wiskunde 5</em><br>Analyse deel 1 — Pelckmans",
                   "Book: <em>Matrix Wiskunde 5</em><br>Analyse deel 1 — Pelckmans"),

  /* page names */
  navHome:     T("Home", "Home"),
  navPlan:     T("Studieplan", "Study plan"),
  navContents: T("Inhoud van het boek", "Book contents"),
  navFormulas: T("Belangrijkste formules", "Key formulas"),
  navGlossary: T("Woordenlijst NL ⇄ EN", "Dutch ⇄ English glossary"),

  /* lesson furniture */
  chapterLabel: (c, s) => T(`Hoofdstuk ${c} · Onderdeel ${s}`, `Chapter ${c} · Section ${s}`),
  bookPages:    T("Boekpagina's", "Book pages"),
  otherTitle:   T("Engelse titel", "Dutch title"),
  canYouDo:     T("Kun je dit?", "Can you do this?"),
  canYouDoSub:  T("Vink een vakje pas aan als je het op een blanco blad kunt, met het boek dicht.",
                  "Tick a box only when you could do it on a blank sheet, with the book closed."),
  exIntro:      T("Maak ze eerst op papier. De oplossingen hieronder zijn uitgewerkt en gecontroleerd.",
                  "Do these on paper first. The answers below are worked out and checked."),
  showAnswer:   T("Toon oplossing", "Show answer"),
  hideAnswer:   T("Verberg oplossing", "Hide answer"),
  workedAnswer: T("Uitgewerkte oplossing", "Worked answer"),

  /* card tags */
  tagDefinition: T("Definitie", "Definition"),
  tagTheorem:    T("Stelling", "Theorem"),
  tagExample:    T("Voorbeeld", "Example"),
  tagMethod:     T("Werkwijze", "Method"),
  tagWarn:       T("Let op", "Careful"),

  /* pager */
  prev: T("← Vorige", "← Previous"),
  next: T("Volgende →", "Next →"),

  /* ---------------- home ---------------- */
  homeEyebrow: T("Matrix Wiskunde 5 · Analyse deel 1", "Matrix Wiskunde 5 · Analyse deel 1"),
  homeTitle:   T("Functieonderzoek — studiesite", "Function analysis — study site"),
  homeLede:    T("Notities, uitgewerkte voorbeelden, gecontroleerde oplossingen en een studieplan voor Destan, gemaakt op basis van het handboek <i>Matrix Wiskunde 5 — Analyse deel 1: Functieonderzoek</i> (Pelckmans). Je kunt boven links wisselen tussen Nederlands en Engels.",
                 "Notes, worked examples, checked answers and a study plan for Destan, built from the handbook <i>Matrix Wiskunde 5 — Analyse deel 1: Functieonderzoek</i> (Pelckmans). Use the NL/EN switch at the top left to change language."),
  homeCard1T:  T("Waar begin je?", "Where to start"),
  homeCard1:   T(`Doe eerst <a href="#/lesson/prior">Voorkennis</a> — hoofdstuk 1 gaat ervan uit dat je dat allemaal kent. Werk daarna <a href="#/lesson/1.1">1.1</a> en <a href="#/lesson/1.2">1.2</a> door.`,
                 `Do <a href="#/lesson/prior">Prior knowledge</a> first — chapter 1 assumes all of it. Then work through <a href="#/lesson/1.1">1.1</a> and <a href="#/lesson/1.2">1.2</a>.`),
  homeCard2T:  T("Hoe gebruik je ze?", "How to use it"),
  homeCard2:   T("Lees de theorie, sluit dan de site en maak de oefeningen op papier. Pas daarna druk je op <b>Toon oplossing</b>. Vink de ‘Ik kan…’-vakjes alleen aan als het echt klopt.",
                 "Read the theory, then close the site and do the exercises on paper. Only then press <b>Show answer</b>. Tick the “I can…” boxes when it is genuinely true."),
  homeCard3T:  T("Voortgang", "Progress"),
  homeCard3:   (d, t, n) => T(`<b>${d} van ${t}</b> leerdoelen afgevinkt over <b>${n}</b> lessen. De voortgang wordt in deze browser bewaard.`,
                              `<b>${d} of ${t}</b> learning goals ticked across <b>${n}</b> lessons. Progress is saved in this browser.`),
  homeH1:      T("Wat zit er in het boek?", "What's in the book"),
  homeP1:      (n) => T(`Het handboek telt <b>5 hoofdstukken</b> en <b>${n} onderdelen</b>, plus twee <i>Test jezelf</i>-reeksen en een <i>Synthese</i>. Op dit moment staan op deze site volledige notities voor de voorkennis en voor de onderdelen <b>1.1</b> en <b>1.2</b>. De rest staat in <a href="#/contents">Inhoud van het boek</a> en wordt aangevuld zodra je die pagina's toevoegt.`,
                        `The handbook has <b>5 chapters</b> and <b>${n} sections</b>, plus two <i>Test yourself</i> sets and a <i>Synthesis</i>. Right now this site has full notes for the prior-knowledge pages and for sections <b>1.1</b> and <b>1.2</b>. The rest is listed in <a href="#/contents">Book contents</a> and will be filled in as you add it.`),
  homeH2:      T("De werkwijze van het boek zelf", "The book's own method"),
  homeP2:      T(`Matrix Wiskunde is opgebouwd rond vier stappen. Ze in die volgorde volgen is echt de snelste weg — de details staan in het <a href="#/plan">studieplan</a>.`,
                 `Matrix Wiskunde is built around four steps. Following them in order is genuinely the fastest route — see the <a href="#/plan">study plan</a> for the details.`),
  homeThStep:  T("Stap", "Step"),
  homeThBook:  T("In het boek", "In the book"),
  homeThWhat:  T("Wat het is", "What it is"),

  /* ---------------- plan ---------------- */
  planEyebrow: T("Planning", "Planning"),
  planTitle:   T("Studieplan", "Study plan"),
  planLede:    T("Een ritme voor de week, een route door het boek, en de handvol gewoontes die echt punten opleveren.",
                 "A rhythm for the week, a route through the book, and the handful of habits that actually move marks."),
  planH1:      T("1 · De vier stappen van het boek", "1 · The four steps of the book"),
  planH2:      T("2 · Een gewone week", "2 · A normal week"),
  planH2sub:   T("Ongeveer 25–40 minuten op een schooldag. Het gaat erom dat je dezelfde leerstof op verschillende dagen aanraakt, niet dat je langer zit.",
                 "Roughly 25–40 minutes on a school day. The point is that the same material gets touched on several different days, not that you sit longer."),
  planThDay:   T("Dag", "Day"),
  planThTask:  T("Wat je doet", "What you do"),
  planH3:      T("3 · Route door het hele boek", "3 · Route through the whole book"),
  planH3sub:   T("Een schatting over een schooljaar. Pas de weken aan het tempo van je klas aan — de <b>volgorde</b> is wat telt, want elk hoofdstuk gebruikt het vorige.",
                 "An estimate over a school year. Adjust the weeks to your class's pace — the <b>order</b> is what matters, because every chapter uses the one before it."),
  planThWhen:  T("Wanneer", "When"),
  planThCh:    T("H.", "Ch."),
  planThTopic: T("Onderwerp", "Topic"),
  planThPages: T("Pagina's", "Pages"),
  planThFocus: T("Focus", "Focus"),
  planH4:      T("4 · Een plan voor één onderdeel (elk onderdeel)", "4 · A plan for one section (any section)"),
  planH4T:     T("Vier sessies per onderdeel", "Four sittings per section"),
  planH4list:  T(`<li><b>Sessie 1 (25 min)</b> — lees de theorie in het boek en de notities hier. Schrijf een samenvattingsfiche: definities, het stappenplan, één uitgewerkt voorbeeld.</li>
                  <li><b>Sessie 2 (30 min)</b> — maak de startoefeningen met het boek dicht. Duid aan wat niet lukte.</li>
                  <li><b>Sessie 3 (30 min)</b> — WEER- of MEER-oefeningen. Zet elke fout in je foutenlijst met in één regel de reden.</li>
                  <li><b>Sessie 4 (15 min, twee dagen later)</b> — maak de aangeduide oefeningen opnieuw uit het hoofd. Lukken ze nu, dan is het onderdeel af; vink de doelen hier af.</li>`,
                 `<li><b>Sitting 1 (25 min)</b> — read the theory in the book and the notes here. Write a summary card: definitions, the step plan, one worked example.</li>
                  <li><b>Sitting 2 (30 min)</b> — do the <i>startoefeningen</i> with the book closed. Mark what you couldn't do.</li>
                  <li><b>Sitting 3 (30 min)</b> — WEER or MEER exercises. Add every mistake to your mistake log with a one-line reason.</li>
                  <li><b>Sitting 4 (15 min, two days later)</b> — redo the marked exercises from memory. If they now work, the section is done; tick the goals here.</li>`),
  planH5:      T("5 · Examenherhaling — drie rondes", "5 · Exam revision — three passes"),
  planH5list:  T(`<li><b>Ronde 1 — lezen.</b> De volledige <i>Synthese</i> (p. 264) plus je eigen samenvattingsfiches. Snel, zonder oefeningen.</li>
                  <li><b>Ronde 2 — herstellen.</b> Enkel de oefeningen uit je foutenlijst. Daar zitten de meeste punten verstopt.</li>
                  <li><b>Ronde 3 — simuleren.</b> Eén <i>Test jezelf</i>-reeks, op tijd, zonder notities, in één keer. Verbeter streng.</li>`,
                 `<li><b>Pass 1 — read.</b> The whole <i>Synthese</i> (p. 264) plus your own summary cards. Fast, no exercises.</li>
                  <li><b>Pass 2 — repair.</b> Only the exercises in your mistake log. This is where most of the marks are hiding.</li>
                  <li><b>Pass 3 — simulate.</b> One <i>Test jezelf</i> set, timed, no notes, in one sitting. Mark it strictly.</li>`),
  planH6:      T("6 · Gewoontes die het verschil maken", "6 · Habits that make the difference"),

  /* ---------------- contents ---------------- */
  contEyebrow: T("Index", "Index"),
  contTitle:   T("Inhoud van het boek", "Book contents"),
  contLede:    T(`De volledige inhoudstafel van <i>Matrix Wiskunde 5 — Analyse deel 1</i>, met de echte paginanummers. Onderdelen met <span class="badge ready">notities</span> hebben studienotities op deze site.`,
                 `The full table of contents of <i>Matrix Wiskunde 5 — Analyse deel 1</i>, translated, with the original Dutch titles and the real page numbers. Sections marked <span class="badge ready">notes</span> have study notes on this site.`),
  contExtras:  T("Extra delen", "Extra sections"),
  contAddT:    T("Het volgende onderdeel toevoegen", "Adding the next section"),
  contAdd:     T(`Krijg je de pagina's van 1.3 (of een ander onderdeel), open dan <code>site/js/content-index.js</code>, zet <code>ready:true</code> bij dat onderdeel en maak een nieuw bestand <code>js/lesson-1-3.js</code> naar het model van <code>lesson-1-2.js</code>. Het menu, de zoekbalk en de voortgangsbalk passen zich vanzelf aan.`,
                 `When you get the pages for 1.3 (or any other section), open <code>site/js/content-index.js</code>, set <code>ready:true</code> for that entry and add a new file <code>js/lesson-1-3.js</code> modelled on <code>lesson-1-2.js</code>. The menu, the search box and the progress bar all update on their own.`),

  /* ---------------- formulas ---------------- */
  formEyebrow: T("Naslag", "Reference"),
  formTitle:   T("Belangrijkste formules", "Key formulas"),
  formLede:    T("Alles uit de voorkennis en de onderdelen 1.1–1.2 dat je uit het hoofd moet kennen. Druk deze pagina af (⌘P) en hang ze boven je bureau.",
                 "Everything from the prior-knowledge pages and sections 1.1–1.2 that is worth knowing by heart. Print this page (⌘P) and stick it above the desk."),
  formH:       T("De drie deeltechnieken — wanneer welke?", "The three division tools — which one when?"),
  formThLook:  T("Deler ziet eruit als", "Divisor looks like"),
  formThUse:   T("Gebruik", "Use"),
  formThWhy:   T("Waarom", "Why"),
  formRows: [
    { look: T(`<span class="m">3x<sup>2</sup></span> (een eenterm)`, `<span class="m">3x<sup>2</sup></span> (a monomial)`),
      use:  T("Term per term delen", "Divide term by term"),
      why:  T("Termen van te lage graad worden de rest", "Terms of too low a degree become the remainder") },
    { look: T(`<span class="m">x − a</span>`, `<span class="m">x − a</span>`),
      use:  T("<b>Schema van Horner</b>", "<b>Horner's scheme</b>"),
      why:  T("Het snelst; de rest is één getal", "Fastest; the remainder is a single number") },
    { look: T(`<span class="m">x − a</span>, enkel de rest`, `<span class="m">x − a</span>, remainder only`),
      use:  T(`<b>Reststelling</b>: <span class="m">r = A(a)</span>`, `<b>Remainder theorem</b>: <span class="m">r = A(a)</span>`),
      why:  T("Je hoeft helemaal niet te delen", "No division needed at all") },
    { look: T(`iets anders, bv. <span class="m">3x + 2</span>, <span class="m">x<sup>2</sup> + x − 1</span>`,
              `anything else, e.g. <span class="m">3x + 2</span>, <span class="m">x<sup>2</sup> + x − 1</span>`),
      use:  T("<b>Euclidische deling</b> (staartdeling)", "<b>Euclidean division</b> (long division)"),
      why:  T("De enige methode die altijd werkt", "The only method that always works") }
  ],

  /* ---------------- glossary ---------------- */
  glosEyebrow: T("Naslag", "Reference"),
  glosTitle:   T("Woordenlijst Nederlands ⇄ Engels", "Dutch ⇄ English glossary"),
  glosLede:    T("De les en het examen zijn in het Nederlands. Zoek je online uitleg of video's, dan is dat vaak Engels — deze lijst legt de brug.",
                 "The lesson and the exam are in Dutch, these notes are in English. Learn both sides — an exam question that says <i>“ontbind in factoren”</i> is asking you to factor."),
  glosFilter:  T("Filteren…", "Filter…"),
  glosThNote:  T("Opmerking", "Note")
};
