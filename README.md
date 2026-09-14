# Destan's maths study site

Offline studiesite voor **Matrix Wiskunde 5 — Analyse deel 1: Functieonderzoek**
(Pelckmans, Doorstroom Wetenschappen / Doorstroom Economie).

Volledig tweetalig: **NL/EN-knop** links bovenaan wisselt elke pagina om. De keuze
wordt per browser onthouden. Nederlands is de standaard.

## Openen

Dubbelklik `index.html` — geen server, geen internet nodig.

Of via een lokale server (nodig als de voortgangsvakjes niet bewaard blijven):

```bash
python3 -m http.server 8000 --directory "/Users/bakiguher/Desktop/baki/destan/site"
```

## Inhoud

| Pagina | Wat |
|---|---|
| Home | Overzicht + de vier stappen van het boek |
| Studieplan | Weekritme, route door het hele boek, plan per onderdeel, examenherhaling |
| Inhoud van het boek | Volledige inhoudstafel, 5 hoofdstukken, echte paginanummers |
| Voorkennis | Boek p. 12–15 |
| 1.1 | Definitie en domein van veeltermfuncties (p. 16–17) |
| 1.2 | Euclidische deling en deelbaarheid (p. 18–23) |
| 1.3 | Nulwaarden en tekenschema (p. 24–27) |
| 1.4 | Veeltermongelijkheden (p. 28–29) |
| 1.5 | Grafisch onderzoek van veeltermfuncties (p. 30–37) |
| Belangrijkste formules | Afdrukbare naslagpagina |
| Woordenlijst | NL ⇄ EN, ~47 termen |

Hoofdstuk 1 is hiermee **volledig** (boek p. 11–37). De Weer- en meeroefeningen
(p. 38–56) en het Openleertraject (p. 57) staan niet op de site: dat zijn
oefeningenreeksen zonder oplossingen in het boek.

Elke startoefening uit het boek (1A t.e.m. 13A) staat erbij met een
**volledig uitgewerkte, gecontroleerde oplossing** achter een knop.

## Bestanden

```
index.html
css/style.css
js/i18n.js            T(nl,en)-helper + alle interfaceteksten
js/content-index.js   inhoudstafel, studieplan, formulekaart, woordenlijst
js/lesson-prior.js    Voorkennis
js/lesson-1-1.js      1.1
js/lesson-1-2.js      1.2 (theorie)
js/lesson-1-2-ex.js   1.2 (oefeningen + oplossingen)
js/lesson-1-3.js      1.3   +  js/lesson-1-3-ex.js
js/lesson-1-4.js      1.4   +  js/lesson-1-4-ex.js
js/lesson-1-5.js      1.5   +  js/lesson-1-5-ex.js
js/app.js             taalwissel, routing, rendering, voortgang
```

## Een nieuw onderdeel toevoegen (1.3, 1.4, …)

Volgende stap is hoofdstuk 2 (Rationale functies, p. 59).

1. In `js/content-index.js`: zet bij dat onderdeel `ready: true` en voeg `lesson: "2.1"` toe.
2. Maak `js/lesson-2-1.js` naar het model van `lesson-1-3.js`, en eventueel
   `js/lesson-2-1-ex.js` voor de oefeningen.
3. Voeg de `<script src="...">`-regels toe in `index.html`, vóór `js/app.js`.

Oefeningen zet je in de gedeelde `EX`-bank (`EX["6A"] = [...]`) en je verwijst
ernaar met een blok `{ type:"exercises", title: T(...), from:"6A" }`.

Menu, zoekbalk, "Binnenkort"-lijst, vorige/volgende-links en de voortgangsbalk
passen zich vanzelf aan.

### Vorm van een les

```js
LESSONS.push({
  id:"1.3", code:"1.3", chapter:1, pages:"24 – 27",
  title: T("Nulwaarden en tekenschema…", "Zeros and sign chart…"),
  lede:  T("…", "…"),
  checklist: [ T("Ik kan …", "I can …") ],
  blocks: [
    { type:"plain",   html: T("<h2>6 · Nulwaarden</h2>", "<h2>6 · Zeros</h2>") },
    { type:"text",    html: T("<p>…</p>", "<p>…</p>") },
    { type:"concept", title: T("Begrippen — …","Definitions — …"), html: T("…","…") },  // groen
    { type:"theorem", title: T("Stelling — …","Theorem — …"),      html: T("…","…") },  // rood
    { type:"example", title: T("Voorbeeld — …","Worked example — …"), html: T("…","…") },// blauw
    { type:"steps",   title: T("Stappenplan — …","Step plan — …"),  html: T("…","…") },
    { type:"warn",    title: T("Valkuilen","Exam traps"),           html: T("…","…") },  // oranje
    { type:"exercises", title: T("Startoefeningen (boek p. 27)","Start exercises (book p. 27)"),
      items: [ { num:"6A", q: T("…","…"), a: T("…","…") } ] }
  ]
});
```

### Wiskunde in de HTML-strings

| Wil je | Schrijf |
|---|---|
| cursieve wiskunde | `<span class="m">f(x)</span>` |
| macht | `x<sup>3</sup>` |
| index | `a<sub>n</sub>` |
| breuk a/b | `${FR('a','b')}` |
| formule op eigen regel | `<div class="eq"> … </div>` |
| staartdeling | `<pre class="long"> … </pre>` |
| schema van Horner | `<table class="horner">` — zie 1.2 |
| gewone tabel | `<table class="grid">` |

## Bron

Studiesamenvatting van het handboek, voor persoonlijk gebruik.
Origineel: *Matrix Wiskunde 5 — Analyse deel 1: functieonderzoek*, Pelckmans.
