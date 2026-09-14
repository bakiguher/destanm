/* ==================================================================
   APP — language switch, routing, rendering, progress tracking.
   Nothing here needs editing when you add a lesson.
   ================================================================== */

const STORE_KEY = "destan-maths-progress-v1";
const LANG_KEY  = "destan-maths-lang";

/* ---------------- language ---------------- */
let LANG = "nl";
try { LANG = localStorage.getItem(LANG_KEY) || "nl"; } catch {}

/* t(): unwrap a T(nl,en) pair; plain strings pass through untouched. */
const t = v => (v && typeof v === "object" && !Array.isArray(v) && ("nl" in v || "en" in v))
  ? (v[LANG] ?? v.en ?? v.nl) : v;

/* other(): the same string in the *other* language (for subtitles). */
const other = v => (v && typeof v === "object" && ("nl" in v || "en" in v))
  ? (LANG === "nl" ? v.en : v.nl) : "";

function setLang(l) {
  LANG = l;
  try { localStorage.setItem(LANG_KEY, l); } catch {}
  document.documentElement.lang = l;
  buildChrome();
  buildNav();
  router();
}

/* ---------------- progress ---------------- */
const Progress = {
  data: {},
  load() { try { this.data = JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch { this.data = {}; } },
  save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(this.data)); } catch {} },
  get(k) { return !!this.data[k]; },
  set(k, v) { v ? this.data[k] = 1 : delete this.data[k]; this.save(); },
  totals() {
    let total = 0, done = 0;
    LESSONS.forEach(l => (l.checklist || []).forEach((_, i) => {
      total++; if (this.get(`${l.id}::${i}`)) done++;
    }));
    return { total, done };
  }
};

/* ---------------- pages ---------------- */
const PAGES = [
  { route:"home",     group:"start", label:() => t(UI.navHome),     render: renderHome },
  { route:"plan",     group:"start", label:() => t(UI.navPlan),     render: renderPlan },
  { route:"contents", group:"start", label:() => t(UI.navContents), render: renderContents },
  ...LESSONS.map(l => ({
    route:`lesson/${l.id}`, group:"ch1", code:l.code, pill:true,
    label:() => t(l.title), render: () => renderLesson(l)
  })),
  { route:"formulas", group:"ref", label:() => t(UI.navFormulas), render: renderFormulas },
  { route:"glossary", group:"ref", label:() => t(UI.navGlossary), render: renderGlossary }
];

const GROUP_LABEL = { start: () => t(UI.groupStart), ch1: () => t(UI.groupChapter1), ref: () => t(UI.groupRef) };

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));

/* ---------------- chrome (sidebar bits outside the nav) ---------------- */
function buildChrome() {
  document.querySelector(".brand-sub").textContent = t(UI.brandSub);
  document.querySelector(".progress-top span").textContent = t(UI.progress);
  document.getElementById("navSearch").placeholder = t(UI.search);
  document.querySelector(".sidebar-foot").innerHTML = t(UI.footBook);
  document.querySelectorAll(".lang-btn").forEach(b =>
    b.classList.toggle("on", b.dataset.lang === LANG));
}

/* ---------------- navigation ---------------- */
function buildNav() {
  const nav = document.getElementById("nav");
  let html = "", seen = null;

  PAGES.forEach(p => {
    if (p.group !== seen) { html += `<div class="nav-group">${GROUP_LABEL[p.group]()}</div>`; seen = p.group; }
    const label = p.label();
    html += `<a href="#/${p.route}" data-route="${p.route}" data-search="${esc((label + " " + (p.code || "")).toLowerCase())}">
      ${p.code ? `<span class="code">${p.code}</span>` : ""}
      <span class="lbl">${label}</span>
      ${p.pill ? `<span class="pill ready">${t(UI.pillNotes)}</span>` : ""}</a>`;
  });

  const soon = BOOK_INDEX[0].sections.filter(s => !s.ready);
  if (soon.length) {
    html += `<div class="nav-group">${t(UI.groupSoon)}</div>`;
    soon.forEach(s => {
      html += `<a href="#/contents" data-search="${esc((t(s.title) + " " + s.c).toLowerCase())}" style="opacity:.55">
        <span class="code">${s.c}</span><span class="lbl">${t(s.title)}</span>
        <span class="pill soon">${t(UI.pillSoon)}</span></a>`;
    });
  }
  nav.innerHTML = html;
}

/* ---------------- router ---------------- */
function router() {
  const route = (location.hash || "#/home").replace(/^#\//, "");
  const page = PAGES.find(p => p.route === route) || PAGES[0];
  document.getElementById("view").innerHTML = page.render();
  window.scrollTo(0, 0);
  document.querySelectorAll("#nav a").forEach(a => a.classList.toggle("active", a.dataset.route === page.route));
  wireUp();
  updateProgressUI();
  document.getElementById("sidebar").classList.remove("open");
}

function pager(route) {
  const i = PAGES.findIndex(p => p.route === route);
  const prev = PAGES[i - 1], next = PAGES[i + 1];
  if (!prev && !next) return "";
  return `<div class="pager">
    ${prev ? `<a href="#/${prev.route}"><div class="dir">${t(UI.prev)}</div><div class="t">${prev.label()}</div></a>` : `<span style="flex:1"></span>`}
    ${next ? `<a class="next" href="#/${next.route}"><div class="dir">${t(UI.next)}</div><div class="t">${next.label()}</div></a>` : `<span style="flex:1"></span>`}
  </div>`;
}

/* ---------------- pages ---------------- */
function renderHome() {
  const { total, done } = Progress.totals();
  const sections = BOOK_INDEX.reduce((n, c) => n + c.sections.length, 0);
  return `
  <div class="eyebrow">${t(UI.homeEyebrow)}</div>
  <h1>${t(UI.homeTitle)}</h1>
  <p class="lede">${t(UI.homeLede)}</p>

  <div class="tip-grid" style="margin:28px 0 8px">
    <div class="card"><div class="card-title">${t(UI.homeCard1T)}</div><p style="font-size:14.5px">${t(UI.homeCard1)}</p></div>
    <div class="card"><div class="card-title">${t(UI.homeCard2T)}</div><p style="font-size:14.5px">${t(UI.homeCard2)}</p></div>
    <div class="card"><div class="card-title">${t(UI.homeCard3T)}</div><p style="font-size:14.5px">${t(UI.homeCard3(done, total, LESSONS.length))}</p></div>
  </div>

  <h2>${t(UI.homeH1)}</h2>
  <p>${t(UI.homeP1(sections))}</p>

  <h2>${t(UI.homeH2)}</h2>
  <p>${t(UI.homeP2)}</p>
  <table class="grid">
    <tr><th>${t(UI.homeThStep)}</th><th>${t(UI.homeThBook)}</th><th>${t(UI.homeThWhat)}</th></tr>
    ${STUDY_PLAN.method.map(m => `<tr>
      <td class="num"><b>${t(m.step)}</b></td><td class="num"><i>${m.nl}</i></td><td>${t(m.title)}</td></tr>`).join("")}
  </table>
  ${pager("home")}`;
}

function renderPlan() {
  return `
  <div class="eyebrow">${t(UI.planEyebrow)}</div>
  <h1>${t(UI.planTitle)}</h1>
  <p class="lede">${t(UI.planLede)}</p>

  <h2>${t(UI.planH1)}</h2>
  ${STUDY_PLAN.method.map(m => `<div class="card">
    <div class="card-title" style="color:var(--accent)">${t(m.step)} — ${t(m.title)}
      <span style="font-weight:400;color:var(--ink-soft);font-style:italic">(${m.nl})</span></div>
    <p style="margin:0">${t(m.text)}</p></div>`).join("")}

  <h2>${t(UI.planH2)}</h2>
  <p>${t(UI.planH2sub)}</p>
  <table class="grid">
    <tr><th style="width:120px">${t(UI.planThDay)}</th><th>${t(UI.planThTask)}</th></tr>
    ${STUDY_PLAN.week.map(w => `<tr><td class="num"><b>${t(w.day)}</b></td><td>${t(w.task)}</td></tr>`).join("")}
  </table>

  <h2>${t(UI.planH3)}</h2>
  <p>${t(UI.planH3sub)}</p>
  <table class="grid">
    <tr><th>${t(UI.planThWhen)}</th><th>${t(UI.planThCh)}</th><th>${t(UI.planThTopic)}</th><th>${t(UI.planThPages)}</th><th>${t(UI.planThFocus)}</th></tr>
    ${STUDY_PLAN.schedule.map(s => `<tr>
      <td class="num"><b>${t(s.block)}</b></td><td class="num">${s.chapter}</td><td>${t(s.title)}</td>
      <td class="num">${s.pages}</td>
      <td style="font-size:13.5px;color:var(--ink-soft)">${t(s.focus)}</td></tr>`).join("")}
  </table>

  <h2>${t(UI.planH4)}</h2>
  <div class="card steps"><div class="card-title">${t(UI.planH4T)}</div>
    <ol style="margin-bottom:0">${t(UI.planH4list)}</ol></div>

  <h2>${t(UI.planH5)}</h2>
  <div class="card"><ol style="margin-bottom:0">${t(UI.planH5list)}</ol></div>

  <h2>${t(UI.planH6)}</h2>
  <div class="tip-grid">
    ${STUDY_PLAN.tips.map(x => `<div class="card"><div class="card-title">${t(x.t)}</div>
      <p style="margin:0;font-size:14.5px">${t(x.d)}</p></div>`).join("")}
  </div>
  ${pager("plan")}`;
}

function renderContents() {
  return `
  <div class="eyebrow">${t(UI.contEyebrow)}</div>
  <h1>${t(UI.contTitle)}</h1>
  <p class="lede">${t(UI.contLede)}</p>

  ${BOOK_INDEX.map(ch => `
    <details class="toc-chapter" ${ch.n === 1 ? "open" : ""}>
      <summary>
        <span class="n">${ch.n}</span>
        <span>${t(ch.title)} <span style="font-weight:400;color:var(--ink-soft);font-style:italic;font-size:13px">· ${other(ch.title)}</span></span>
        <span class="pg">p. ${ch.page}</span>
      </summary>
      <div class="toc-body">
        ${ch.sections.map(s => `<div class="toc-sec">
          <span class="c">${s.c}</span>
          <span>
            ${s.ready ? `<a href="#/lesson/${s.lesson}">${t(s.title)}</a>` : t(s.title)}
            <span class="badge ${s.ready ? "ready" : "soon"}" style="margin-left:6px">${s.ready ? t(UI.pillNotes) : t(UI.pillSoon)}</span>
            <br><span class="nl">${other(s.title)}</span>
          </span>
          <span class="pg">p. ${s.page}</span>
        </div>`).join("")}
      </div>
    </details>`).join("")}

  <h2>${t(UI.contExtras)}</h2>
  <table class="grid">
    ${BOOK_EXTRAS.map(e => `<tr><td><b>${t(e.title)}</b><br>
      <span style="color:var(--ink-soft);font-style:italic;font-size:13px">${other(e.title)}</span></td>
      <td class="num">p. ${e.page}</td></tr>`).join("")}
  </table>

  <div class="card warn" style="margin-top:28px">
    <div class="card-title">${t(UI.contAddT)}</div>
    <p style="margin:0">${t(UI.contAdd)}</p>
  </div>
  ${pager("contents")}`;
}

function renderLesson(l) {
  const blocks = (l.blocks || []).map(b => {
    const title = t(b.title), html = t(b.html);
    switch (b.type) {
      case "plain": case "text": return html;
      case "concept": return card("concept", UI.tagDefinition, title, html);
      case "theorem": return card("theorem", UI.tagTheorem,    title, html);
      case "example": return card("example", UI.tagExample,    title, html);
      case "steps":   return card("steps",   UI.tagMethod,     title, html);
      case "warn":    return card("warn",    UI.tagWarn,       title, html);
      case "exercises": return renderExercises(b);
      default: return html || "";
    }
  }).join("");

  const checklist = (l.checklist || []).map((c, i) => {
    const key = `${l.id}::${i}`;
    return `<li><label><input type="checkbox" data-key="${key}" ${Progress.get(key) ? "checked" : ""}>
      <span>${t(c)}</span></label></li>`;
  }).join("");

  return `
  <div class="eyebrow">${t(UI.chapterLabel(l.chapter, l.code))}</div>
  <h1>${t(l.title)}</h1>
  <p class="lede">${t(l.lede)}</p>
  <div class="pagesref">${t(UI.bookPages)} <b>${l.pages}</b> &nbsp;·&nbsp; ${t(UI.otherTitle)}: <i>${other(l.title)}</i></div>

  ${blocks}

  <div class="divider"></div>
  <h2>${t(UI.canYouDo)}</h2>
  <p>${t(UI.canYouDoSub)}</p>
  <ul class="checklist">${checklist}</ul>
  ${pager(`lesson/${l.id}`)}`;
}

function card(kind, tag, title, html) {
  return `<div class="card ${kind}"><div class="card-title">${title || t(tag)}</div>${html}</div>`;
}

/* Exercise items live either inline (b.items) or in an EX_* map (b.from). */
function renderExercises(b) {
  const items = b.items || (typeof EX !== "undefined" ? EX[b.from] : null) || [];
  return `
  <h2>${t(b.title)}</h2>
  <p style="font-size:14px;color:var(--ink-soft)">${t(UI.exIntro)}</p>
  ${items.map(it => `<div class="ex" data-ex>
    <div class="ex-head">
      <span class="ex-num">${it.num}</span>
      <div class="ex-q">${t(it.q)}</div>
      <button class="ex-btn" data-toggle>${t(UI.showAnswer)}</button>
    </div>
    <div class="ex-a"><div class="ex-a-label">${t(UI.workedAnswer)}</div>${t(it.a)}</div>
  </div>`).join("")}`;
}

function renderFormulas() {
  return `
  <div class="eyebrow">${t(UI.formEyebrow)}</div>
  <h1>${t(UI.formTitle)}</h1>
  <p class="lede">${t(UI.formLede)}</p>

  ${FORMULAS.map(g => `<h2>${t(g.group)}</h2>
    <table class="grid">
      ${g.items.map(i => `<tr><td style="width:36%"><b>${t(i.n)}</b></td><td>${t(i.f)}</td></tr>`).join("")}
    </table>`).join("")}

  <h2>${t(UI.formH)}</h2>
  <table class="grid">
    <tr><th>${t(UI.formThLook)}</th><th>${t(UI.formThUse)}</th><th>${t(UI.formThWhy)}</th></tr>
    ${UI.formRows.map(r => `<tr><td class="num">${t(r.look)}</td><td>${t(r.use)}</td><td>${t(r.why)}</td></tr>`).join("")}
  </table>
  ${pager("formulas")}`;
}

function renderGlossary() {
  const first = LANG === "nl" ? "Nederlands" : "Nederlands";
  return `
  <div class="eyebrow">${t(UI.glosEyebrow)}</div>
  <h1>${t(UI.glosTitle)}</h1>
  <p class="lede">${t(UI.glosLede)}</p>

  <input type="search" id="glossFilter" class="nav-search" style="max-width:340px" placeholder="${t(UI.glosFilter)}">

  <table class="glossary" id="glossTable">
    <tr><th>${first}</th><th>English</th><th>${t(UI.glosThNote)}</th></tr>
    ${GLOSSARY.map(g => `<tr><td>${g.nl}</td><td>${g.en}</td>
      <td style="color:var(--ink-soft);font-size:13.5px">${t(g.note)}</td></tr>`).join("")}
  </table>
  ${pager("glossary")}`;
}

/* ---------------- events ---------------- */
function wireUp() {
  document.querySelectorAll("[data-toggle]").forEach(btn => {
    btn.addEventListener("click", () => {
      const ex = btn.closest("[data-ex]");
      ex.classList.toggle("open");
      btn.textContent = ex.classList.contains("open") ? t(UI.hideAnswer) : t(UI.showAnswer);
    });
  });

  document.querySelectorAll('.checklist input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", () => { Progress.set(cb.dataset.key, cb.checked); updateProgressUI(); });
  });

  const gf = document.getElementById("glossFilter");
  if (gf) gf.addEventListener("input", () => {
    const q = gf.value.toLowerCase();
    document.querySelectorAll("#glossTable tr").forEach((tr, i) => {
      if (i) tr.style.display = tr.textContent.toLowerCase().includes(q) ? "" : "none";
    });
  });
}

function updateProgressUI() {
  const { total, done } = Progress.totals();
  const pct = total ? Math.round(done / total * 100) : 0;
  document.getElementById("progPct").textContent = pct + "%";
  document.getElementById("progBar").style.width = pct + "%";
  document.getElementById("progText").textContent = t(UI.progressSub(done, total));
}

/* ---------------- boot ---------------- */
Progress.load();
document.documentElement.lang = LANG;
buildChrome();
buildNav();
window.addEventListener("hashchange", router);
router();

document.querySelectorAll(".lang-btn").forEach(b =>
  b.addEventListener("click", () => setLang(b.dataset.lang)));

document.getElementById("menuBtn").addEventListener("click", () =>
  document.getElementById("sidebar").classList.toggle("open"));

document.getElementById("navSearch").addEventListener("input", e => {
  const q = e.target.value.toLowerCase().trim();
  document.querySelectorAll("#nav a").forEach(a =>
    a.style.display = !q || (a.dataset.search || "").includes(q) ? "" : "none");
  document.querySelectorAll("#nav .nav-group").forEach(g => g.style.display = q ? "none" : "");
});
