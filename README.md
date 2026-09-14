# Destan's maths study site

A small offline study website for **Matrix Wiskunde 5 — Analyse deel 1: Functieonderzoek**
(Pelckmans, Doorstroom Wetenschappen / Doorstroom Economie).

Notes are written in **English**, with every Dutch term from the book kept next to it.

## Open it

Just double-click `index.html` — no server, no internet needed.

If you prefer a local server:

```bash
python3 -m http.server 8000 --directory "/Users/bakiguher/Desktop/baki/destan/site"
```

Then open http://localhost:8000

## What's inside

| Page | What it is |
|---|---|
| Home | Overview + the book's own 4-step method |
| Study plan | Weekly rhythm, route through the whole book, per-section plan, exam revision |
| Book contents | Full translated table of contents, all 5 chapters, real page numbers |
| Prior knowledge | Book pages 12–15 |
| 1.1 | Definition and domain of polynomial functions (p. 16–17) |
| 1.2 | Euclidean division and divisibility (p. 18–23) |
| Key formulas | One-page printable reference |
| Glossary | Dutch ⇄ English, ~47 terms |

Every start exercise from the book is included with a **fully worked, checked answer**
hidden behind a "Show answer" button.

Progress ticks are stored in the browser (`localStorage`), so they survive a reload
but live only in that browser.

## Adding the next section (1.3, 1.4, …)

Everything lives in **`js/content.js`**. Nothing else needs to change.

1. Find the section in `BOOK_INDEX` and change `ready: false` → `ready: true`,
   then add `lesson: "1.3"`.
2. Copy the `"1.2"` object in the `LESSONS` array and edit it.
3. Reload the page. The sidebar, search box, "coming next" list, previous/next
   links and the progress bar all update automatically.

### Shape of a lesson

```js
{
  id: "1.3", code: "1.3", chapter: 1,
  title: "Zeros and sign chart of polynomial functions",
  nl: "Nulwaarden en tekenschema van veeltermfuncties",
  pages: "24 – 27",
  short: "one line for the menu",
  lede: "one paragraph under the title",
  checklist: [ "I can …", "I can …" ],
  blocks: [
    { type: "plain",     html: "<h2>6 · Zeros</h2>" },
    { type: "text",      html: "<p>…</p>" },
    { type: "concept",   title: "Definition — …",  html: "…" },   // green
    { type: "theorem",   title: "Theorem — …",     html: "…" },   // red
    { type: "example",   title: "Worked example",  html: "…" },   // blue
    { type: "steps",     title: "Step plan — …",   html: "…" },   // red border
    { type: "warn",      title: "Exam traps",      html: "…" },   // amber
    { type: "exercises", title: "Start exercises (book p. 27)", items: [
        { num: "6A", q: "<p>question…</p>", a: "<p>worked answer…</p>" }
    ]}
  ]
}
```

### Writing maths in the HTML strings

| Want | Write |
|---|---|
| italic maths | `<span class="m">f(x)</span>` |
| power | `x<sup>3</sup>` |
| index | `a<sub>n</sub>` |
| fraction a/b | `${FR('a','b')}` (inside a template string) |
| displayed formula | `<div class="eq"> … </div>` |
| long division layout | `<pre class="long"> … </pre>` |
| Horner scheme | `<table class="horner">` — see 1.2 for the exact rows |
| a data table | `<table class="grid">` |

## Source

Content is a study summary of the handbook, written for personal study use.
Original: *Matrix Wiskunde 5 — Analyse deel 1: functieonderzoek*, Pelckmans.
