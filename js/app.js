/* ==================================================================
   APP — routing, rendering, progress tracking
   Nothing here needs editing when you add a new lesson; only
   js/content.js changes.
   ================================================================== */

const STORE_KEY = "destan-maths-progress-v1";

/* ---------------- progress storage ---------------- */
const Progress = {
  data: {},
  load() {
    try { this.data = JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch { this.data = {}; }
  },
  /* Some browsers block localStorage on file:// — never let that break the UI. */
  save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(this.data)); }
    catch { /* ticks still work for this session, just aren't remembered */ }
  },
  get(key) { return !!this.data[key]; },
  set(key, val) { val ? this.data[key] = 1 : delete this.data[key]; this.save(); },
  totals() {
    let total = 0, done = 0;
    LESSONS.forEach(l => (l.checklist || []).forEach((_, i) => {
      total++;
      if (this.get(`${l.id}::${i}`)) done++;
    }));
    return { total, done };
  },
  lessonTotals(lesson) {
    const list = lesson.checklist || [];
    return { total: list.length, done: list.filter((_, i) => this.get(`${lesson.id}::${i}`)).length };
  }
};

/* ---------------- pages ---------------- */
const PAGES = [
  { route: "home",     group: "Start", label: "Home",            render: renderHome },
  { route: "plan",     group: "Start", label: "Study plan",      render: renderPlan },
  { route: "contents", group: "Start", label: "Book contents",   render: renderContents },
  ...LESSONS.map(l => ({
    route: `lesson/${l.id}`, group: "Chapter 1 — Polynomial functions",
    label: l.title, code: l.code, pill: "ready",
    render: () => renderLesson(l)
  })),
  { route: "formulas", group: "Reference", label: "Key formulas", render: renderFormulas },
  { route: "glossary", group: "Reference", label: "Dutch ⇄ English glossary", render: renderGlossary }
];

/* Sections from the book that don't have notes yet — shown greyed out. */
function upcomingNavItems() {
  const out = [];
  BOOK_INDEX.forEach(ch => ch.sections.forEach(s => {
    if (!s.ready && ch.n === 1) out.push(s);
  }));
  return out;
}

/* ---------------- navigation ---------------- */
function buildNav() {
  const nav = document.getElementById("nav");
  const groups = [];
  PAGES.forEach(p => {
    let g = groups.find(x => x.name === p.group);
    if (!g) { g = { name: p.group, items: [] }; groups.push(g); }
    g.items.push(p);
  });

  let html = "";
  groups.forEach(g => {
    html += `<div class="nav-group">${g.name}</div>`;
    g.items.forEach(p => {
      html += `<a href="#/${p.route}" data-route="${p.route}" data-search="${esc((p.label + " " + (p.code || "")).toLowerCase())}">
        ${p.code ? `<span class="code">${p.code}</span>` : ""}
        <span class="lbl">${p.label}</span>
        ${p.pill ? `<span class="pill ready">notes</span>` : ""}
      </a>`;
    });
  });

  const soon = upcomingNavItems();
  if (soon.length) {
    html += `<div class="nav-group">Coming next</div>`;
    soon.forEach(s => {
      html += `<a href="#/contents" data-search="${esc((s.title + " " + s.c).toLowerCase())}" style="opacity:.55">
        <span class="code">${s.c}</span><span class="lbl">${s.title}</span>
        <span class="pill soon">soon</span></a>`;
    });
  }
  nav.innerHTML = html;
}

function markActive(route) {
  document.querySelectorAll("#nav a").forEach(a => {
    a.classList.toggle("active", a.dataset.route === route);
  });
}

/* ---------------- router ---------------- */
function router() {
  const route = (location.hash || "#/home").replace(/^#\//, "");
  const page = PAGES.find(p => p.route === route) || PAGES[0];
  const view = document.getElementById("view");
  view.innerHTML = page.render();
  view.scrollIntoView();
  window.scrollTo(0, 0);
  markActive(page.route);
  wireUp();
  updateProgressUI();
  document.getElementById("sidebar").classList.remove("open");
}

/* ---------------- shared bits ---------------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function pager(currentRoute) {
  const i = PAGES.findIndex(p => p.route === currentRoute);
  const prev = PAGES[i - 1], next = PAGES[i + 1];
  if (!prev && !next) return "";
  return `<div class="pager">
    ${prev ? `<a href="#/${prev.route}"><div class="dir">← Previous</div><div class="t">${prev.label}</div></a>` : `<span style="flex:1"></span>`}
    ${next ? `<a class="next" href="#/${next.route}"><div class="dir">Next →</div><div class="t">${next.label}</div></a>` : `<span style="flex:1"></span>`}
  </div>`;
}

/* ---------------- page renderers ---------------- */

function renderHome() {
  const { total, done } = Progress.totals();
  const readyCount = LESSONS.length;
  const sectionCount = BOOK_INDEX.reduce((n, c) => n + c.sections.length, 0);

  return `
  <div class="eyebrow">Matrix Wiskunde 5 · Analyse deel 1</div>
  <h1>Function analysis — study site</h1>
  <p class="lede">Notes, worked examples, checked answers and a study plan for Destan, built from the handbook <i>Matrix Wiskunde 5 — Analyse deel 1: Functieonderzoek</i> (Pelckmans). The lessons are in English; every Dutch term from the book is kept next to it.</p>

  <div class="tip-grid" style="margin:28px 0 8px">
    <div class="card"><div class="card-title">Where to start</div>
      <p style="font-size:14.5px">Do <a href="#/lesson/prior">Prior knowledge</a> first — chapter 1 assumes all of it. Then work through <a href="#/lesson/1.1">1.1</a> and <a href="#/lesson/1.2">1.2</a>.</p></div>
    <div class="card"><div class="card-title">How to use it</div>
      <p style="font-size:14.5px">Read the theory, then close the site and do the exercises on paper. Only then press <b>Show answer</b>. Tick the "I can…" boxes when it is genuinely true.</p></div>
    <div class="card"><div class="card-title">Progress</div>
      <p style="font-size:14.5px"><b>${done} of ${total}</b> learning goals ticked across <b>${readyCount}</b> lessons. Progress is saved in this browser.</p></div>
  </div>

  <h2>What's in the book</h2>
  <p>The handbook has <b>5 chapters</b> and <b>${sectionCount} sections</b>, plus two <i>Test yourself</i> sets and a <i>Synthesis</i>. Right now this site has full notes for the prior-knowledge pages and for sections <b>1.1</b> and <b>1.2</b>. The rest is listed in <a href="#/contents">Book contents</a> and will be filled in as you add it.</p>

  <h2>The book's own method</h2>
  <p>Matrix Wiskunde is built around four steps. Following them in order is genuinely the fastest route — see the <a href="#/plan">study plan</a> for the details.</p>
  <table class="grid">
    <tr><th>Step</th><th>In the book</th><th>What it is</th></tr>
    ${STUDY_PLAN.method.map(m => `<tr>
      <td class="num"><b>${m.step}</b></td>
      <td class="num"><i>${m.nl}</i></td>
      <td>${m.title}</td></tr>`).join("")}
  </table>

  ${pager("home")}`;
}

function renderPlan() {
  return `
  <div class="eyebrow">Planning</div>
  <h1>Study plan</h1>
  <p class="lede">A rhythm for the week, a route through the book, and the handful of habits that actually move marks.</p>

  <h2>1 · The four steps of the book</h2>
  ${STUDY_PLAN.method.map(m => `
    <div class="card">
      <div class="card-title" style="color:var(--accent)">${m.step} — ${m.title} <span style="font-weight:400;color:var(--ink-soft);font-style:italic">(${m.nl})</span></div>
      <p style="margin:0">${m.text}</p>
    </div>`).join("")}

  <h2>2 · A normal week</h2>
  <p>Roughly 25–40 minutes on a school day. The point is that the same material gets touched on several different days, not that you sit longer.</p>
  <table class="grid">
    <tr><th style="width:120px">Day</th><th>What you do</th></tr>
    ${STUDY_PLAN.week.map(w => `<tr><td class="num"><b>${w.day}</b></td><td>${w.task}</td></tr>`).join("")}
  </table>

  <h2>3 · Route through the whole book</h2>
  <p>An estimate over a school year. Adjust the weeks to your class's pace — the <b>order</b> is what matters, because every chapter uses the one before it.</p>
  <table class="grid">
    <tr><th>When</th><th>Ch.</th><th>Topic</th><th>Pages</th><th>Focus</th></tr>
    ${STUDY_PLAN.schedule.map(s => `<tr>
      <td class="num"><b>${s.block}</b></td>
      <td class="num">${s.chapter}</td>
      <td>${s.title}</td>
      <td class="num">${s.pages}</td>
      <td style="font-size:13.5px;color:var(--ink-soft)">${s.focus}</td></tr>`).join("")}
  </table>

  <h2>4 · A plan for one section (any section)</h2>
  <div class="card steps">
    <div class="card-title">Four sittings per section</div>
    <ol style="margin-bottom:0">
      <li><b>Sitting 1 (25 min)</b> — read the theory in the book and the notes here. Write a summary card: definitions, the step plan, one worked example.</li>
      <li><b>Sitting 2 (30 min)</b> — do the <i>startoefeningen</i> with the book closed. Mark what you couldn't do.</li>
      <li><b>Sitting 3 (30 min)</b> — WEER or MEER exercises. Add every mistake to your mistake log with a one-line reason.</li>
      <li><b>Sitting 4 (15 min, two days later)</b> — redo the marked exercises from memory. If they now work, the section is done; tick the goals here.</li>
    </ol>
  </div>

  <h2>5 · Exam revision — three passes</h2>
  <div class="card">
    <ol style="margin-bottom:0">
      <li><b>Pass 1 — read.</b> The whole <i>Synthese</i> (p. 264) plus your own summary cards. Fast, no exercises.</li>
      <li><b>Pass 2 — repair.</b> Only the exercises in your mistake log. This is where most of the marks are hiding.</li>
      <li><b>Pass 3 — simulate.</b> One <i>Test jezelf</i> set, timed, no notes, in one sitting. Mark it strictly.</li>
    </ol>
  </div>

  <h2>6 · Habits that make the difference</h2>
  <div class="tip-grid">
    ${STUDY_PLAN.tips.map(t => `<div class="card"><div class="card-title">${t.t}</div><p style="margin:0;font-size:14.5px">${t.d}</p></div>`).join("")}
  </div>

  ${pager("plan")}`;
}

function renderContents() {
  const rows = BOOK_INDEX.map(ch => `
    <details class="toc-chapter" ${ch.n === 1 ? "open" : ""}>
      <summary>
        <span class="n">${ch.n}</span>
        <span>${ch.title} <span style="font-weight:400;color:var(--ink-soft);font-style:italic;font-size:13px">· ${ch.nl}</span></span>
        <span class="pg">p. ${ch.page}</span>
      </summary>
      <div class="toc-body">
        ${ch.sections.map(s => `
          <div class="toc-sec">
            <span class="c">${s.c}</span>
            <span>
              ${s.ready ? `<a href="#/lesson/${s.lesson}">${s.title}</a>` : s.title}
              <span class="badge ${s.ready ? "ready" : "soon"}" style="margin-left:6px">${s.ready ? "notes" : "soon"}</span>
              <br><span class="nl">${s.nl}</span>
            </span>
            <span class="pg">p. ${s.page}</span>
          </div>`).join("")}
      </div>
    </details>`).join("");

  return `
  <div class="eyebrow">Index</div>
  <h1>Book contents</h1>
  <p class="lede">The full table of contents of <i>Matrix Wiskunde 5 — Analyse deel 1</i>, translated, with the original Dutch titles and the real page numbers. Sections marked <span class="badge ready">notes</span> have study notes on this site.</p>

  ${rows}

  <h2>Extra sections</h2>
  <table class="grid">
    ${BOOK_EXTRAS.map(e => `<tr><td><b>${e.title}</b><br><span class="nl" style="color:var(--ink-soft);font-style:italic;font-size:13px">${e.nl}</span></td><td class="num">p. ${e.page}</td></tr>`).join("")}
  </table>

  <div class="card warn" style="margin-top:28px">
    <div class="card-title">Adding the next section</div>
    <p style="margin:0">When you get the pages for 1.3 (or any other section), open <code>site/js/content.js</code>, set <code>ready:true</code> for that entry in <code>BOOK_INDEX</code> and add a lesson object to <code>LESSONS</code>. The menu, the search box and the progress bar all update on their own.</p>
  </div>

  ${pager("contents")}`;
}

function renderLesson(l) {
  const blocks = (l.blocks || []).map(b => {
    switch (b.type) {
      case "plain":
      case "text":
        return b.html;
      case "concept":
        return card("concept", "Definition", b.title, b.html);
      case "theorem":
        return card("theorem", "Theorem", b.title, b.html);
      case "example":
        return card("example", "Example", b.title, b.html);
      case "steps":
        return card("steps", "Method", b.title, b.html);
      case "warn":
        return card("warn", "Careful", b.title, b.html);
      case "exercises":
        return renderExercises(b);
      default:
        return b.html || "";
    }
  }).join("");

  const checklist = (l.checklist || []).map((c, i) => {
    const key = `${l.id}::${i}`;
    return `<li><label>
      <input type="checkbox" data-key="${key}" ${Progress.get(key) ? "checked" : ""}>
      <span>${c}</span></label></li>`;
  }).join("");

  return `
  <div class="eyebrow">Chapter ${l.chapter} · Section ${l.code}</div>
  <h1>${l.title}</h1>
  <p class="lede">${l.lede}</p>
  <div class="pagesref">Book pages <b>${l.pages}</b> &nbsp;·&nbsp; Dutch title: <i>${l.nl}</i></div>

  ${blocks}

  <div class="divider"></div>
  <h2>Can you do this?</h2>
  <p>Tick a box only when you could do it on a blank sheet, with the book closed.</p>
  <ul class="checklist">${checklist}</ul>

  ${pager(`lesson/${l.id}`)}`;
}

function card(kind, tag, title, html) {
  return `<div class="card ${kind}">
    <div class="card-title">${title || tag}</div>
    ${html}
  </div>`;
}

function renderExercises(b) {
  return `
  <h2>${b.title}</h2>
  <p style="font-size:14px;color:var(--ink-soft)">Do these on paper first. The answers below are worked out and checked.</p>
  ${b.items.map((it, i) => `
    <div class="ex" data-ex>
      <div class="ex-head">
        <span class="ex-num">${it.num}</span>
        <div class="ex-q">${it.q}</div>
        <button class="ex-btn" data-toggle>Show answer</button>
      </div>
      <div class="ex-a">
        <div class="ex-a-label">Worked answer</div>
        ${it.a}
      </div>
    </div>`).join("")}`;
}

function renderFormulas() {
  return `
  <div class="eyebrow">Reference</div>
  <h1>Key formulas</h1>
  <p class="lede">Everything from the prior-knowledge pages and sections 1.1–1.2 that is worth knowing by heart. Print this page (⌘P) and stick it above the desk.</p>

  ${FORMULAS.map(g => `
    <h2>${g.group}</h2>
    <table class="grid">
      ${g.items.map(i => `<tr><td style="width:36%"><b>${i.n}</b></td><td>${i.f}</td></tr>`).join("")}
    </table>`).join("")}

  <h2>The three division tools — which one when?</h2>
  <table class="grid">
    <tr><th>Divisor looks like</th><th>Use</th><th>Why</th></tr>
    <tr><td class="num"><span class="m">3x<sup>2</sup></span> (a monomial)</td><td>Divide term by term</td><td>Terms of too low a degree become the remainder</td></tr>
    <tr><td class="num"><span class="m">x − a</span></td><td><b>Horner's scheme</b></td><td>Fastest; the remainder is a single number</td></tr>
    <tr><td class="num"><span class="m">x − a</span>, remainder only</td><td><b>Remainder theorem</b>: <span class="m">r = A(a)</span></td><td>No division needed at all</td></tr>
    <tr><td class="num">anything else, e.g. <span class="m">3x + 2</span>, <span class="m">x<sup>2</sup> + x − 1</span></td><td><b>Euclidean division</b> (long division)</td><td>The only method that always works</td></tr>
  </table>

  ${pager("formulas")}`;
}

function renderGlossary() {
  return `
  <div class="eyebrow">Reference</div>
  <h1>Dutch ⇄ English glossary</h1>
  <p class="lede">The lesson and the exam are in Dutch, these notes are in English. Learn both sides — an exam question that says <i>“ontbind in factoren”</i> is asking you to factor.</p>

  <input type="search" id="glossFilter" class="nav-search" style="max-width:340px" placeholder="Filter…">

  <table class="glossary" id="glossTable">
    <tr><th>Nederlands</th><th>English</th><th>Note</th></tr>
    ${GLOSSARY.map(g => `<tr><td>${g.nl}</td><td>${g.en}</td><td style="color:var(--ink-soft);font-size:13.5px">${g.note}</td></tr>`).join("")}
  </table>

  ${pager("glossary")}`;
}

/* ---------------- event wiring ---------------- */
function wireUp() {
  document.querySelectorAll("[data-toggle]").forEach(btn => {
    btn.addEventListener("click", () => {
      const ex = btn.closest("[data-ex]");
      ex.classList.toggle("open");
      btn.textContent = ex.classList.contains("open") ? "Hide answer" : "Show answer";
    });
  });

  document.querySelectorAll('.checklist input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", () => {
      Progress.set(cb.dataset.key, cb.checked);
      updateProgressUI();
    });
  });

  const gf = document.getElementById("glossFilter");
  if (gf) {
    gf.addEventListener("input", () => {
      const q = gf.value.toLowerCase();
      document.querySelectorAll("#glossTable tr").forEach((tr, i) => {
        if (i === 0) return;
        tr.style.display = tr.textContent.toLowerCase().includes(q) ? "" : "none";
      });
    });
  }
}

function updateProgressUI() {
  const { total, done } = Progress.totals();
  const pct = total ? Math.round(done / total * 100) : 0;
  document.getElementById("progPct").textContent = pct + "%";
  document.getElementById("progBar").style.width = pct + "%";
  document.getElementById("progText").textContent = `${done} of ${total} goals ticked`;
}

/* ---------------- boot ---------------- */
Progress.load();
buildNav();
window.addEventListener("hashchange", router);
router();

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

document.getElementById("navSearch").addEventListener("input", e => {
  const q = e.target.value.toLowerCase().trim();
  document.querySelectorAll("#nav a").forEach(a => {
    a.style.display = !q || (a.dataset.search || "").includes(q) ? "" : "none";
  });
  document.querySelectorAll("#nav .nav-group").forEach(g => {
    g.style.display = q ? "none" : "";
  });
});
