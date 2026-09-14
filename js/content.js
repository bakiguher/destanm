/* ==================================================================
   CONTENT — Matrix Wiskunde 5 · Analyse deel 1 (Functieonderzoek)
   Study notes in English for Destan.

   HOW TO ADD A NEW SECTION LATER (e.g. 1.3):
     1. Find the entry in BOOK_INDEX and change  ready:false  ->  ready:true
     2. Add a new object to the LESSONS array (copy the shape of "1.2")
     3. Reload the page. Navigation, progress and search update by themselves.

   Small HTML helpers you can use inside any text:
     <span class="m">f(x)</span>         italic maths
     x<sup>3</sup>  a<sub>n</sub>        powers / indices
     <span class="fr"><span>a</span><span>b</span></span>    fraction a/b
     <div class="eq"> … </div>           a displayed formula line
     <pre class="long"> … </pre>         a long-division layout
   ================================================================== */

const FR = (a, b) => `<span class="fr"><span>${a}</span><span>${b}</span></span>`;

/* ------------------------------------------------------------------
   1. THE BOOK'S TABLE OF CONTENTS  (translated, page numbers kept)
   ------------------------------------------------------------------ */
const BOOK_INDEX = [
  {
    n: 1, page: 11,
    title: "Polynomial functions",
    nl: "Veeltermfuncties",
    sections: [
      { c: "1.1", page: 16, ready: true,  lesson: "1.1",
        title: "Definition and domain of polynomial functions",
        nl: "Definitie en domein van veeltermfuncties" },
      { c: "1.2", page: 18, ready: true,  lesson: "1.2",
        title: "Euclidean division and divisibility of polynomials",
        nl: "Euclidische deling en deelbaarheid van veeltermen" },
      { c: "1.3", page: 24, ready: false,
        title: "Zeros and sign chart of polynomial functions",
        nl: "Nulwaarden en tekenschema van veeltermfuncties" },
      { c: "1.4", page: 28, ready: false,
        title: "Polynomial inequalities",
        nl: "Veeltermongelijkheden" },
      { c: "1.5", page: 30, ready: false,
        title: "Graphical study of polynomial functions",
        nl: "Grafisch onderzoek van veeltermfuncties" }
    ]
  },
  {
    n: 2, page: 59,
    title: "Rational functions",
    nl: "Rationale functies",
    sections: [
      { c: "2.1", page: 62, ready: false, title: "Definition and domain of rational functions", nl: "Definitie en domein van rationale functies" },
      { c: "2.2", page: 64, ready: false, title: "Zeros and sign chart of rational functions", nl: "Nulwaarden en tekenschema van rationale functies" },
      { c: "2.3", page: 66, ready: false, title: "Homographic functions", nl: "Homografische functies" },
      { c: "2.4", page: 72, ready: false, title: "Asymptotes and holes of rational functions", nl: "Asymptoten en perforaties van rationale functies" },
      { c: "2.5", page: 78, ready: false, title: "Graphical study of rational functions", nl: "Grafisch onderzoek van rationale functies" }
    ]
  },
  {
    n: 3, page: 101,
    title: "Irrational functions",
    nl: "Irrationale functies",
    sections: [
      { c: "3.1", page: 104, ready: false, title: "Powers with rational exponents", nl: "Machten met rationale exponenten" },
      { c: "3.2", page: 106, ready: false, title: "Definition and domain of irrational functions", nl: "Definitie en domein van irrationale functies" },
      { c: "3.3", page: 108, ready: false, title: "Zeros and sign chart of irrational functions", nl: "Nulwaarden en tekenschema van irrationale functies" },
      { c: "3.4", page: 112, ready: false, title: "Graphical study of irrational functions", nl: "Grafisch onderzoek van irrationale functies" },
      { c: "3.5", page: 116, ready: false, title: "Inverse functions", nl: "Inverse functies" }
    ]
  },
  {
    n: 4, page: 131,
    title: "Exponential and logarithmic functions",
    nl: "Exponentiële en logaritmische functies",
    sections: [
      { c: "4.1", page: 134, ready: false, title: "Exponential growth", nl: "Exponentiële groei" },
      { c: "4.2", page: 140, ready: false, title: "Exponential functions", nl: "Exponentiële functies" },
      { c: "4.3", page: 146, ready: false, title: "Exponential equations and inequalities", nl: "Exponentiële vergelijkingen en ongelijkheden" },
      { c: "4.4", page: 150, ready: false, title: "Logarithms", nl: "Logaritmen" },
      { c: "4.5", page: 158, ready: false, title: "Logarithmic functions", nl: "Logaritmische functies" },
      { c: "4.6", page: 164, ready: false, title: "Logarithmic equations and inequalities", nl: "Logaritmische vergelijkingen en ongelijkheden" }
    ]
  },
  {
    n: 5, page: 203,
    title: "Trigonometric functions",
    nl: "Goniometrische functies",
    sections: [
      { c: "5.1", page: 208, ready: false, title: "The radian", nl: "De radiaal" },
      { c: "5.2", page: 210, ready: false, title: "Trigonometric ratios of related angles", nl: "Goniometrische getallen van verwante hoeken" },
      { c: "5.3", page: 212, ready: false, title: "Periodic functions", nl: "Periodieke functies" },
      { c: "5.4", page: 214, ready: false, title: "Trigonometric functions", nl: "Goniometrische functies" },
      { c: "5.5", page: 218, ready: false, title: "The general sine function", nl: "Algemene sinusfunctie" },
      { c: "5.6", page: 224, ready: false, title: "Trigonometric formulas", nl: "Goniometrische formules" },
      { c: "5.7", page: 230, ready: false, title: "Trigonometric equations and inequalities", nl: "Goniometrische vergelijkingen en ongelijkheden" }
    ]
  }
];

const BOOK_EXTRAS = [
  { title: "TEST YOURSELF — chapters 1, 2 and 3", nl: "TEST JEZELF hoofdstukken 1, 2 en 3", page: 129 },
  { title: "TEST YOURSELF — chapters 4 and 5",     nl: "TEST JEZELF hoofdstukken 4 en 5",     page: 260 },
  { title: "SYNTHESIS — chapters 1, 2, 3, 4 and 5", nl: "SYNTHESE hoofdstukken 1, 2, 3, 4 en 5", page: 264 }
];

/* ------------------------------------------------------------------
   2. LESSONS
   ------------------------------------------------------------------ */
const LESSONS = [

/* =========================== PRIOR KNOWLEDGE =========================== */
{
  id: "prior",
  code: "0",
  chapter: 1,
  title: "Prior knowledge",
  nl: "Voorkennis",
  pages: "12 – 15",
  short: "Everything chapter 1 assumes you already know.",
  lede: "Before chapter 1 starts, the book repeats the theory you need. If any of this feels shaky, fix it first — the whole book is built on top of it.",
  checklist: [
    "I can say whether a graph is a function or not (vertical line test)",
    "I know the words domain and range and can read them off a graph",
    "I know the graph, zeros and sign chart of a constant function",
    "I know the graph, zero, sign chart and variation chart of a first-degree function",
    "I know the parabola, its vertex, its zeros (discriminant) and its charts",
    "I can explain what a relative maximum and a relative minimum are"
  ],
  blocks: [
    { type: "concept", title: "Function · Real function",
      html: `<p>A <b>function</b> links an independent variable <span class="m">x</span> to a dependent variable <span class="m">y</span>, so that <b>every</b> value of <span class="m">x</span> gives <b>at most one</b> value of <span class="m">y</span>.</p>
      <p>A <b>real function</b> is a function where both variables are real numbers. You name it with a small letter: <span class="m">f, g, h, …</span></p>
      <dl class="kv">
        <dt>x</dt><dd>input value · <i>invoerwaarde, x-waarde, argument</i></dd>
        <dt>f(x)</dt><dd>function value · <i>functiewaarde, y-waarde, beeld</i></dd>
      </dl>
      <p><b>Graph test:</b> if a vertical line cuts the graph more than once, it is <i>not</i> a function.</p>` },

    { type: "concept", title: "Domain and range",
      html: `<p><b>Domain</b> (<i>domein</i>, <span class="m">dom f</span>) = the set of all input values for which a function value exists.</p>
      <p><b>Range</b> (<i>bereik</i>, <span class="m">ber f</span>) = the set of all function values the function actually reaches.</p>` },

    { type: "plain", html: `<h3>The three functions you must know by heart</h3>` },

    { type: "concept", title: "Constant function  f(x) = a",
      html: `<div class="eq"><span class="m">f: x ↦ f(x) = a</span>&nbsp;&nbsp;with <span class="m">a ∈ ℝ</span></div>
      <table class="grid">
        <tr><th>Domain / range</th><td><span class="m">dom f = ℝ</span> and <span class="m">ber f = {a}</span></td></tr>
        <tr><th>Graph</th><td>A horizontal line through the point <span class="m">(0, a)</span>.</td></tr>
        <tr><th>Zeros</th><td>If <span class="m">a ≠ 0</span>: no zeros. If <span class="m">a = 0</span>: every real number is a zero.</td></tr>
        <tr><th>Sign chart</th><td><span class="m">f(x)</span> always has the sign of <span class="m">a</span>.</td></tr>
        <tr><th>Variation</th><td>Neither increasing nor decreasing → you write <b>no</b> variation chart.</td></tr>
      </table>` },

    { type: "concept", title: "First-degree function  f(x) = ax + b",
      html: `<div class="eq"><span class="m">f: x ↦ f(x) = ax + b</span>&nbsp;&nbsp;with <span class="m">a ∈ ℝ<sub>0</sub>, b ∈ ℝ</span></div>
      <table class="grid">
        <tr><th>Domain / range</th><td><span class="m">dom f = ℝ</span> and <span class="m">ber f = ℝ</span></td></tr>
        <tr><th>Graph</th><td>A slanted straight line <span class="m">y = ax + b</span>, through <span class="m">(0, b)</span>.<br>If <span class="m">b = 0</span> the line goes through the origin.</td></tr>
        <tr><th>Slope a</th><td><span class="m">a &gt; 0</span> → strictly increasing ↗ · <span class="m">a &lt; 0</span> → strictly decreasing ↘<br>The bigger <span class="m">|a|</span>, the steeper the line.</td></tr>
        <tr><th>Zero</th><td>Exactly <b>one</b>: <span class="m">ax + b = 0 ⟺ x = −</span>${FR('b','a')}</td></tr>
      </table>
      <p>Sign chart: the sign of <span class="m">f(x)</span> switches at <span class="m">x = −</span>${FR('b','a')}. For <span class="m">a &gt; 0</span> it goes <b>− 0 +</b>; for <span class="m">a &lt; 0</span> it goes <b>+ 0 −</b>.</p>` },

    { type: "concept", title: "Second-degree function  f(x) = ax² + bx + c",
      html: `<div class="eq"><span class="m">f: x ↦ f(x) = ax<sup>2</sup> + bx + c</span>&nbsp;&nbsp;with <span class="m">a ∈ ℝ<sub>0</sub>, b, c ∈ ℝ</span></div>
      <p>The graph is a <b>parabola</b>. General equation <span class="m">y = ax<sup>2</sup> + bx + c</span>; vertex form <span class="m">y = a(x − x<sub>T</sub>)<sup>2</sup> + y<sub>T</sub></span>.</p>
      <table class="grid">
        <tr><th></th><th>a &gt; 0</th><th>a &lt; 0</th></tr>
        <tr><th>Shape</th><td>hollow ☺ — <i>dalparabool</i> (valley)</td><td>bulging ☹ — <i>bergparabool</i> (mountain)</td></tr>
        <tr><th>Range</th><td><span class="m">[y<sub>T</sub>, +∞[</span> — vertex is a minimum</td><td><span class="m">]−∞, y<sub>T</sub>]</span> — vertex is a maximum</td></tr>
      </table>
      <p>The bigger <span class="m">|a|</span>, the <b>narrower</b> the parabola.</p>
      <div class="eq">Zeros: solve <span class="m">ax<sup>2</sup> + bx + c = 0</span> &nbsp;&nbsp; <span class="m">D = b<sup>2</sup> − 4ac</span>, &nbsp; <span class="m">x<sub>1,2</sub> = </span>${FR('−b ± √D','2a')}</div>
      <ul>
        <li><span class="m">D &gt; 0</span> → two different zeros <span class="m">x<sub>1</sub> ≠ x<sub>2</sub></span></li>
        <li><span class="m">D = 0</span> → one zero, and it is the vertex: <span class="m">x<sub>1</sub> = x<sub>2</sub> = x<sub>T</sub></span></li>
        <li><span class="m">D &lt; 0</span> → no zeros; the sign of <span class="m">f(x)</span> is the sign of <span class="m">a</span> everywhere</li>
      </ul>` },

    { type: "concept", title: "Extrema of a real function",
      html: `<p>A <b>relative maximum</b> is a local largest function value; a <b>relative minimum</b> is a local smallest function value. Both together are called an <b>extremum</b>.</p>
      <p>"Local" is the key word — you only need an <i>open interval around the point</i> on which the value is largest (or smallest):</p>
      <div class="eq">If <span class="m">∀x ∈ ]1, 3[ : f(x) ≤ 4</span>, then <span class="m">4</span> is a relative maximum of <span class="m">f</span>.</div>
      <div class="eq">If <span class="m">∀x ∈ ]4, 6[ : f(x) ≥ −2</span>, then <span class="m">−2</span> is a relative minimum of <span class="m">f</span>.</div>` },

    { type: "warn", title: "Watch out",
      html: `<ul>
        <li>An extremum is a <b>y</b>-value, not an <b>x</b>-value. "The maximum is 4", "it is reached at x = 2".</li>
        <li>A constant function has <b>no</b> variation chart — don't invent one.</li>
        <li><span class="m">ℝ<sub>0</sub></span> means "the real numbers without 0". That is why <span class="m">a ≠ 0</span> in first- and second-degree functions.</li>
      </ul>` }
  ]
},

/* ================================ 1.1 ================================ */
{
  id: "1.1",
  code: "1.1",
  chapter: 1,
  title: "Definition and domain of polynomial functions",
  nl: "Definitie en domein van veeltermfuncties",
  pages: "16 – 17",
  short: "Monomials, polynomials, degree, numerical value, polynomial functions.",
  lede: "This section gives the vocabulary for the rest of the chapter. It is mostly definitions — learn the words exactly, because every later exercise uses them.",
  checklist: [
    "I can tell a monomial (eenterm) from a polynomial (veelterm)",
    "I can add, subtract, multiply and divide monomials and take powers of them",
    "I can give the degree and the coefficients of a polynomial",
    "I can rewrite an incomplete polynomial as a complete one using zero coefficients",
    "I can compute the numerical value A(r) of a polynomial",
    "I can recognise a polynomial function and give its degree",
    "I know that dom f = ℝ for every polynomial function, and I can explain why"
  ],
  blocks: [
    { type: "plain", html: `<h2 id="s1">1 · Monomials and polynomials</h2>` },

    { type: "text", html:
      `<p>A <b>monomial</b> (<i>eenterm</i>) in one unknown <span class="m">x</span> is a product of a number and a power of <span class="m">x</span> with a <b>natural</b> exponent.</p>
      <div class="eq">Examples: &nbsp; <span class="m">−5x<sup>2</sup></span> &nbsp;·&nbsp; <span class="m">4x<sup>3</sup></span> &nbsp;·&nbsp; <span class="m">−3</span> &nbsp;·&nbsp; <span class="m">7x<sup>3</sup></span></div>
      <p>The number in front is the <b>coefficient</b> (<i>coëfficiënt</i>); the exponent of <span class="m">x</span> is the <b>degree</b> (<i>graad</i>) of the monomial.</p>` },

    { type: "concept", title: "Operations with monomials",
      html: `<table class="grid">
        <tr><th>Add / subtract</th><td>Only <b>like</b> monomials (same power of x).<br>
          <span class="m">5x<sup>3</sup> + 8x<sup>3</sup> = 13x<sup>3</sup></span> &nbsp;&nbsp; <span class="m">−14x<sup>2</sup> − (−11x<sup>2</sup>) = −3x<sup>2</sup></span></td></tr>
        <tr><th>Multiply / divide</th><td>Always allowed.<br>
          <span class="m">6x<sup>3</sup> · (−5x<sup>2</sup>) = −30x<sup>5</sup></span> &nbsp;&nbsp; <span class="m">(12x<sup>6</sup>) : (−36x<sup>2</sup>) = −</span>${FR('1','3')}<span class="m">x<sup>4</sup></span></td></tr>
        <tr><th>Power</th><td><span class="m">(−5x<sup>3</sup>)<sup>3</sup> = −125x<sup>9</sup></span> &nbsp;&nbsp; <span class="m">(−2x<sup>2</sup>)<sup>4</sup> = 16x<sup>8</sup></span></td></tr>
      </table>` },

    { type: "text", html:
      `<p>A <b>polynomial</b> (<i>veelterm</i>) is the sum of a finite number of monomials. Its <b>degree</b> is the highest exponent of <span class="m">x</span> that appears. The <b>zero polynomial</b> (<i>nulveelterm</i>) is the polynomial whose coefficients are all zero.</p>
      <table class="grid">
        <tr><th>Polynomial</th><th>Degree</th><th>Also called</th></tr>
        <tr><td class="num"><span class="m">6</span></td><td class="num">0</td><td>a monomial (<i>eenterm</i>)</td></tr>
        <tr><td class="num"><span class="m">4x + 5</span></td><td class="num">1</td><td>a binomial (<i>tweeterm</i>)</td></tr>
        <tr><td class="num"><span class="m">5x<sup>2</sup> − 7x + 2</span></td><td class="num">2</td><td>a trinomial (<i>drieterm</i>)</td></tr>
        <tr><td class="num"><span class="m">5x<sup>3</sup> − 7x<sup>2</sup> + 8x − 4</span></td><td class="num">3</td><td>written short as <span class="m">A(x)</span></td></tr>
      </table>` },

    { type: "concept", title: "Definitions — polynomial · coefficients · terms · degree",
      html: `<p>A polynomial of degree <span class="m">n</span> in one unknown <span class="m">x</span> is an expression of the form</p>
      <div class="eq"><span class="m">A(x) = a<sub>n</sub>x<sup>n</sup> + a<sub>n−1</sub>x<sup>n−1</sup> + … + a<sub>2</sub>x<sup>2</sup> + a<sub>1</sub>x + a<sub>0</sub></span></div>
      <p>with <span class="m">a<sub>n</sub>, …, a<sub>0</sub> ∈ ℝ</span>, <span class="m">n ∈ ℕ</span> and <span class="m">a<sub>n</sub> ≠ 0</span>.</p>
      <ul>
        <li>The <b>coefficients</b> are the numbers <span class="m">a<sub>i</sub></span>.</li>
        <li>The <b>terms</b> are the monomials <span class="m">a<sub>i</sub>x<sup>i</sup></span>.</li>
        <li>The <b>degree</b> is <span class="m">n</span>. You write <span class="m">gr(A(x)) = n</span>.</li>
        <li>The set of all polynomials in <span class="m">x</span> is written <span class="m">ℝ[x]</span>.</li>
      </ul>` },

    { type: "concept", title: "Definitions — numerical value · complete · equal",
      html: `<p>The <b>numerical value</b> (<i>getalwaarde</i>) of <span class="m">A(x)</span> at <span class="m">r ∈ ℝ</span> is the number you get by replacing <span class="m">x</span> with <span class="m">r</span>:</p>
      <div class="eq"><span class="m">A(r) = a<sub>n</sub>r<sup>n</sup> + a<sub>n−1</sub>r<sup>n−1</sup> + … + a<sub>1</sub>r + a<sub>0</sub></span></div>
      <p>A polynomial is <b>complete</b> (<i>volledig</i>) if every exponent from 0 up to the degree actually occurs.</p>
      <p>Two polynomials are <b>equal</b> if they have the same degree and the coefficients of matching powers are equal, two by two.</p>` },

    { type: "example", title: "Worked example — numerical value",
      html: `<p>Given <span class="m">A(x) = 5x<sup>3</sup> − 7x<sup>2</sup> + 8x − 4</span>, compute <span class="m">A(1)</span>.</p>
      <div class="eq"><span class="m">A(1) = 5 · 1<sup>3</sup> − 7 · 1<sup>2</sup> + 8 · 1 − 4 = 5 − 7 + 8 − 4 = 2</span></div>` },

    { type: "example", title: "Worked example — complete vs incomplete",
      html: `<p><span class="m">2x<sup>3</sup> + 5x<sup>2</sup> − 8x + 3</span> is a <b>complete</b> polynomial of degree 3 (powers 3, 2, 1, 0 all there).</p>
      <p><span class="m">−6x<sup>3</sup> + 5x<sup>2</sup> − 7</span> is <b>incomplete</b>: the term in <span class="m">x</span> is missing. You can always complete it with a zero coefficient:</p>
      <div class="eq"><span class="m">−6x<sup>3</sup> + 5x<sup>2</sup> + 0x − 7</span></div>
      <p>You will need this trick constantly in 1.2 when dividing polynomials.</p>` },

    { type: "plain", html: `<h2 id="s2">2 · Polynomial functions</h2>` },

    { type: "text", html:
      `<p>Every polynomial defines a function. That function is called a <b>polynomial function</b> (<i>veeltermfunctie</i>).</p>
      <table class="grid">
        <tr><th>Polynomial</th><th>Its polynomial function</th><th>Name</th></tr>
        <tr><td class="num"><span class="m">4x + 3</span></td><td class="num"><span class="m">f: ℝ → ℝ: x ↦ 4x + 3</span></td><td>first-degree function</td></tr>
        <tr><td class="num"><span class="m">3x<sup>2</sup> − 7x + 5</span></td><td class="num"><span class="m">f: ℝ → ℝ: x ↦ 3x<sup>2</sup> − 7x + 5</span></td><td>second-degree function</td></tr>
        <tr><td class="num"><span class="m">6x<sup>3</sup> − 5x<sup>2</sup> + 7x + 1</span></td><td class="num"><span class="m">f: ℝ → ℝ: x ↦ 6x<sup>3</sup> − 5x<sup>2</sup> + 7x + 1</span></td><td>third-degree function</td></tr>
      </table>` },

    { type: "concept", title: "Definitions — polynomial function · function value · domain",
      html: `<p>A <b>polynomial function</b> in one variable <span class="m">x</span> is a real function whose rule is a polynomial in <span class="m">x</span>:</p>
      <div class="eq"><span class="m">f: ℝ → ℝ: x ↦ f(x) = a<sub>n</sub>x<sup>n</sup> + a<sub>n−1</sub>x<sup>n−1</sup> + … + a<sub>1</sub>x + a<sub>0</sub></span></div>
      <p>with <span class="m">a<sub>n</sub> ≠ 0</span> and <span class="m">n ∈ ℕ</span>. This is a polynomial function of the <span class="m">n</span>-th degree.</p>
      <p>The <b>function value</b> at input <span class="m">r ∈ ℝ</span> is <span class="m">f(r) = a<sub>n</sub>r<sup>n</sup> + … + a<sub>1</sub>r + a<sub>0</sub></span> — i.e. exactly the numerical value of the polynomial.</p>
      <p style="margin-bottom:0"><b>The domain of every polynomial function is <span class="m">ℝ</span>:</b> &nbsp; <span class="m">dom f = ℝ</span>.</p>` },

    { type: "text", html:
      `<p><b>Why is the domain always ℝ?</b> Because to get a function value you only ever add, subtract and multiply real numbers. There is no division by <span class="m">x</span> and no root of <span class="m">x</span>, so nothing can go wrong — whatever real number you put in, you get a real number out.</p>` },

    { type: "warn", title: "Exam traps",
      html: `<ul>
        <li><b>Work out the rule first.</b> <span class="m">(x<sup>4</sup> − 4x<sup>2</sup> + 2) : x<sup>2</sup> = x<sup>2</sup> − 4 + 2x<sup>−2</sup></span>. The exponent <span class="m">−2</span> is not natural, so this is <b>not</b> a polynomial function (and <span class="m">0 ∉ dom f</span>).</li>
        <li>Degree is read <b>after</b> simplifying. In <span class="m">(−3x<sup>3</sup> + …) − (2x<sup>3</sup> + …)</span> the <span class="m">x<sup>3</sup></span> terms may not cancel — check.</li>
        <li>Don't confuse <b>coefficient</b> (the number) with <b>degree</b> (the exponent).</li>
        <li>A polynomial is only "complete" if <b>every</b> power from 0 to n is present — including the constant term.</li>
      </ul>` },

    { type: "exercises", title: "Start exercises (book p. 17)", items: [
      { num: "1A", q: `<p>Work out the polynomial <span class="m">A(x)</span>. Is the result a monomial or a (in)complete polynomial? Give the degree. Then compute the requested numerical value.</p>
        <ol type="a">
          <li><span class="m">A(x) = (−3x<sup>3</sup> + 2x<sup>2</sup> + 5x − 4) − (2x<sup>3</sup> − 5x<sup>2</sup> + 8x − 4)</span> &nbsp;→&nbsp; <span class="m">A(4)</span></li>
          <li><span class="m">A(x) = (−7x<sup>2</sup> + 3)(−2x<sup>3</sup>)</span> &nbsp;→&nbsp; <span class="m">A(−2)</span></li>
          <li><span class="m">A(x) = (−2x<sup>3</sup>)<sup>2</sup></span> &nbsp;→&nbsp; <span class="m">A(−1)</span></li>
          <li><span class="m">A(x) = </span>${FR('18x<sup>4</sup> − 24x<sup>3</sup>','−6x<sup>3</sup>')} &nbsp;→&nbsp; <span class="m">A(1)</span></li>
        </ol>`,
        a: `<p><b>a)</b> Remove the brackets, mind the minus sign:</p>
        <div class="eq"><span class="m">A(x) = −3x<sup>3</sup> + 2x<sup>2</sup> + 5x − 4 − 2x<sup>3</sup> + 5x<sup>2</sup> − 8x + 4 = −5x<sup>3</sup> + 7x<sup>2</sup> − 3x</span></div>
        <p>Polynomial of degree <b>3</b>, <b>incomplete</b> (no constant term).<br>
        <span class="m">A(4) = −5·64 + 7·16 − 3·4 = −320 + 112 − 12 = <b>−220</b></span></p>
        <p><b>b)</b> <span class="m">A(x) = 14x<sup>5</sup> − 6x<sup>3</sup></span> → degree <b>5</b>, <b>incomplete</b>.<br>
        <span class="m">A(−2) = 14·(−32) − 6·(−8) = −448 + 48 = <b>−400</b></span></p>
        <p><b>c)</b> <span class="m">A(x) = 4x<sup>6</sup></span> → a <b>monomial</b> of degree <b>6</b>.<br>
        <span class="m">A(−1) = 4·1 = <b>4</b></span></p>
        <p><b>d)</b> Divide term by term: <span class="m">A(x) = −3x + 4</span> → degree <b>1</b>, <b>complete</b>.<br>
        <span class="m">A(1) = −3 + 4 = <b>1</b></span></p>` },

      { num: "2A", q: `<p>Work out the rule of <span class="m">f</span>. Give the degree of each polynomial function. If it is not a polynomial function, explain why. Compute the requested function value.</p>
        <ol type="a">
          <li><span class="m">f(x) = −2x<sup>3</sup>(8x<sup>2</sup> + 7x − 6)</span> &nbsp;→&nbsp; <span class="m">f(−2)</span></li>
          <li><span class="m">f(x) = −x(3x<sup>2</sup> + 4) − 5x<sup>2</sup>(−2x − 3)</span> &nbsp;→&nbsp; <span class="m">f(2)</span></li>
          <li><span class="m">f(x) = (x<sup>4</sup> − 4x<sup>2</sup> + 2) : x<sup>2</sup></span> &nbsp;→&nbsp; <span class="m">f(1)</span></li>
        </ol>`,
        a: `<p><b>a)</b> <span class="m">f(x) = −16x<sup>5</sup> − 14x<sup>4</sup> + 12x<sup>3</sup></span> → polynomial function of degree <b>5</b>.<br>
        <span class="m">f(−2) = −16·(−32) − 14·16 + 12·(−8) = 512 − 224 − 96 = <b>192</b></span></p>
        <p><b>b)</b> <span class="m">f(x) = −3x<sup>3</sup> − 4x + 10x<sup>3</sup> + 15x<sup>2</sup> = 7x<sup>3</sup> + 15x<sup>2</sup> − 4x</span> → degree <b>3</b>.<br>
        <span class="m">f(2) = 7·8 + 15·4 − 4·2 = 56 + 60 − 8 = <b>108</b></span></p>
        <p><b>c)</b> <span class="m">f(x) = x<sup>2</sup> − 4 + </span>${FR('2','x<sup>2</sup>')}<span class="m"> = x<sup>2</sup> − 4 + 2x<sup>−2</sup></span></p>
        <p><b>Not a polynomial function</b>: the exponent <span class="m">−2</span> is not a natural number, and <span class="m">x = 0</span> is excluded, so <span class="m">dom f = ℝ<sub>0</sub> ≠ ℝ</span>. (If you do substitute anyway: <span class="m">f(1) = 1 − 4 + 2 = −1</span>.)</p>` }
    ]}
  ]
},

/* ================================ 1.2 ================================ */
{
  id: "1.2",
  code: "1.2",
  chapter: 1,
  title: "Euclidean division and divisibility of polynomials",
  nl: "Euclidische deling en deelbaarheid van veeltermen",
  pages: "18 – 23",
  short: "Long division, Horner's scheme, the remainder theorem, factoring.",
  lede: "The heart of chapter 1. Three techniques — long division, Horner's scheme and the remainder theorem — all serve one goal: writing a polynomial as a product of factors. You will reuse this in every later chapter.",
  checklist: [
    "I can divide a polynomial by a monomial and say whether the division is exact",
    "I can carry out a Euclidean division (long division) of two polynomials",
    "I can write the result as A(x) = D(x)·Q(x) + R(x) and check it with a numerical value",
    "I can use Horner's scheme to divide by x − a",
    "I can use the remainder theorem to find the remainder without doing the division",
    "I can find divisors x − a by testing the integer divisors of the constant term",
    "I can factor a third-degree polynomial completely"
  ],
  blocks: [
    { type: "plain", html: `<h2 id="s3">3 · Dividing a polynomial by a monomial</h2>` },

    { type: "text", html:
      `<p>Start from a multiplication you know:</p>
      <div class="eq"><span class="m">(4x<sup>3</sup> + 2x<sup>2</sup> − x) · (3x<sup>2</sup>) = 12x<sup>5</sup> + 6x<sup>4</sup> − 3x<sup>3</sup></span></div>
      <p>So <span class="m">(12x<sup>5</sup> + 6x<sup>4</sup> − 3x<sup>3</sup>) : (3x<sup>2</sup>) = 4x<sup>3</sup> + 2x<sup>2</sup> − x</span>.</p>
      <dl class="kv">
        <dt>dividend</dt><dd><i>deeltal</i> — the polynomial you divide, here <span class="m">12x<sup>5</sup> + 6x<sup>4</sup> − 3x<sup>3</sup></span></dd>
        <dt>divisor</dt><dd><i>deler</i> — what you divide by, here <span class="m">3x<sup>2</sup></span></dd>
      </dl>
      <p>Every term here had a degree <b>at least as high as</b> the divisor, so every term was divisible and the remainder is 0. A division with remainder 0 is an <b>exact division</b> (<i>opgaande deling</i>).</p>` },

    { type: "example", title: "Worked example — a division that is not exact",
      html: `<p>Divide <span class="m">−3x<sup>3</sup> + 9x<sup>2</sup> + 5x − 4</span> by <span class="m">3x<sup>2</sup></span>.</p>
      <p>The first two terms work fine: <span class="m">−3x<sup>3</sup> : 3x<sup>2</sup> = −x</span> and <span class="m">9x<sup>2</sup> : 3x<sup>2</sup> = 3</span>.</p>
      <p>The last two don't: <span class="m">5x : 3x<sup>2</sup> = </span>${FR('5','3')}<span class="m">x<sup>−1</sup></span> and <span class="m">−4 : 3x<sup>2</sup> = −</span>${FR('4','3')}<span class="m">x<sup>−2</sup></span>. Negative exponents → these are not monomials.</p>
      <p>So the terms that are not divisible stay behind as the <b>remainder</b>:</p>
      <div class="eq"><span class="m">Q(x) = −x + 3</span> &nbsp;&nbsp;and&nbsp;&nbsp; <span class="m">R(x) = 5x − 4</span></div>
      <p>This is a <b>non-exact division</b> (<i>niet-opgaande deling</i>). Notice: <span class="m">gr(R(x)) &lt; gr(D(x))</span>.</p>` },

    { type: "concept", title: "Definition — dividing by a monomial",
      html: `<p>Divide a polynomial <span class="m">A(x)</span> by a monomial <span class="m">D(x) ≠ 0 · x<sup>n</sup></span> with <span class="m">n ∈ ℕ</span>. You get a quotient <span class="m">Q(x) ∈ ℝ[x]</span> and a remainder <span class="m">R(x) ∈ ℝ[x]</span> with</p>
      <div class="eq"><span class="m">A(x) = D(x) · Q(x) + R(x)</span> &nbsp;&nbsp;and&nbsp;&nbsp; <span class="m">gr(R(x)) &lt; gr(D(x))</span></div>
      <ul style="margin-bottom:0">
        <li>Remainder <b>= 0</b> → the division is <b>exact</b> (<i>opgaand</i>).</li>
        <li>Remainder <b>≠ 0</b> → the division is <b>not exact</b> (<i>niet-opgaand</i>).</li>
        <li>If the remainder is a plain real number, write it as <span class="m">r</span> instead of <span class="m">R(x)</span>.</li>
      </ul>` },

    { type: "exercises", title: "Start exercise (book p. 18)", items: [
      { num: "3A", q: `<p>Find the quotient and the remainder of the division of <span class="m">A(x)</span> by the monomial <span class="m">D(x)</span>. Is the division exact or not?</p>
        <ol type="a">
          <li><span class="m">A(x) = 3x<sup>5</sup> − 4x<sup>4</sup> + 5x<sup>3</sup></span> and <span class="m">D(x) = x<sup>2</sup></span></li>
          <li><span class="m">A(x) = −x<sup>3</sup> + 5x<sup>2</sup> − 7x<sup>4</sup></span> and <span class="m">D(x) = 5x<sup>2</sup></span></li>
          <li><span class="m">A(x) = x<sup>3</sup> − 2x<sup>2</sup> + 6x − 3</span> and <span class="m">D(x) = 4x<sup>2</sup></span></li>
        </ol>`,
        a: `<p><b>a)</b> Every term has degree ≥ 2, so every term divides:<br>
        <span class="m">Q(x) = 3x<sup>3</sup> − 4x<sup>2</sup> + 5x</span>, &nbsp; <span class="m">R(x) = 0</span> → <b>exact</b>.</p>
        <p><b>b)</b> Order it first: <span class="m">−7x<sup>4</sup> − x<sup>3</sup> + 5x<sup>2</sup></span>. All degrees ≥ 2:<br>
        <span class="m">Q(x) = −</span>${FR('7','5')}<span class="m">x<sup>2</sup> − </span>${FR('1','5')}<span class="m">x + 1</span>, &nbsp; <span class="m">R(x) = 0</span> → <b>exact</b>.</p>
        <p><b>c)</b> Only <span class="m">x<sup>3</sup></span> and <span class="m">−2x<sup>2</sup></span> have degree ≥ 2:<br>
        <span class="m">Q(x) = </span>${FR('1','4')}<span class="m">x − </span>${FR('1','2')}, &nbsp; <span class="m">R(x) = 6x − 3</span> → <b>not exact</b>.</p>` }
    ]},

    { type: "plain", html: `<h2 id="s4">4 · Euclidean division (long division)</h2>` },

    { type: "text", html:
      `<p>To divide a polynomial by <b>another polynomial</b> you work exactly like long division of whole numbers.</p>
      <p>Two rules before you start:</p>
      <ol>
        <li>Write dividend and divisor in <b>descending</b> powers of <span class="m">x</span>.</li>
        <li>If the dividend is incomplete, <b>fill the gaps with coefficient 0</b>.</li>
      </ol>` },

    { type: "example", title: "Worked example — (6x³ − 17x² + 14) : (3x² − x − 6)",
      html: `<p>The dividend has no term in <span class="m">x</span>, so write <span class="m">0x</span>.</p>
      <p><b>Step 1.</b> <span class="m">6x<sup>3</sup> : 3x<sup>2</sup> = 2x</span> → first term of the quotient. Multiply back: <span class="m">2x(3x<sup>2</sup> − x − 6) = 6x<sup>3</sup> − 2x<sup>2</sup> − 12x</span>. Write the <b>opposite</b> underneath and add.</p>
      <p><b>Step 2.</b> The intermediate remainder is <span class="m">−15x<sup>2</sup> + 12x + 14</span>. Now <span class="m">−15x<sup>2</sup> : 3x<sup>2</sup> = −5</span>. Multiply back: <span class="m">−5(3x<sup>2</sup> − x − 6) = −15x<sup>2</sup> + 5x + 30</span>, write the opposite, add.</p>
<pre class="long">  6x³ − 17x² +  0x + 14 │ 3x² − x − 6
 −6x³ +  2x² + 12x      │ 2x  − 5
 ─────────────────────  │
      −15x² + 12x + 14  │
      +15x² −  5x − 30  │
      ────────────────  │
              7x − 16   │</pre>
      <p><b>Stop</b> when the degree of the intermediate remainder is smaller than the degree of the divisor. Here <span class="m">gr(7x − 16) = 1 &lt; 2</span>, so:</p>
      <div class="eq"><span class="m">Q(x) = 2x − 5</span> &nbsp;and&nbsp; <span class="m">R(x) = 7x − 16</span></div>
      <div class="eq"><span class="m">6x<sup>3</sup> − 17x<sup>2</sup> + 14 = (2x − 5)(3x<sup>2</sup> − x − 6) + (7x − 16)</span></div>` },

    { type: "steps", title: "Step plan — Euclidean division of polynomials",
      html: `<ol>
        <li>Put both <span class="m">A(x)</span> and <span class="m">D(x)</span> in descending powers of <span class="m">x</span>. Complete <span class="m">A(x)</span> with zero coefficients if needed.</li>
        <li>Divide the first term of the dividend by the first term of the divisor → this monomial is the next term of <span class="m">Q(x)</span>.</li>
        <li>Multiply that term by <b>every</b> term of the divisor and write the <b>opposite</b> of each product under the like terms.</li>
        <li>Add up. You get an intermediate remainder.</li>
        <li>Repeat steps 2–4 until the degree of the intermediate remainder is <b>smaller</b> than the degree of the divisor. That last intermediate remainder is the remainder.</li>
        <li>Write the answer as <span class="m">A(x) = Q(x) · D(x) + R(x)</span> with <span class="m">gr(R(x)) &lt; gr(D(x))</span>.</li>
      </ol>` },

    { type: "example", title: "Checking your answer — always do this",
      html: `<p>Pick any convenient real number (usually <span class="m">x = 1</span>) and check that <span class="m">A(1) = Q(1)·D(1) + R(1)</span>.</p>
      <p>Example: <span class="m">4x<sup>2</sup> − 1 = (4x − 12)(x + 3) + 35</span>.</p>
      <div class="eq"><span class="m">A(1) = 4 · 1 − 1 = 3</span></div>
      <div class="eq"><span class="m">Q(1)·D(1) + r = (4 − 12)(1 + 3) + 35 = (−8)·4 + 35 = −32 + 35 = 3</span> ✓</div>` },

    { type: "exercises", title: "Start exercise (book p. 20)", items: [
      { num: "4A", q: `<p>Find the quotient and the remainder of the Euclidean division of <span class="m">A(x)</span> by <span class="m">D(x)</span>.</p>
        <ol type="a">
          <li><span class="m">A(x) = 3x<sup>3</sup> − 6x<sup>2</sup> + 2x − 1</span> and <span class="m">D(x) = x<sup>2</sup> + x − 1</span></li>
          <li><span class="m">A(x) = 3x<sup>3</sup> + 8x<sup>2</sup> − x + 1</span> and <span class="m">D(x) = 3x + 2</span></li>
        </ol>`,
        a: `<p><b>a)</b></p>
<pre class="long">  3x³ − 6x² +  2x −  1 │ x² + x − 1
 −3x³ − 3x² + 3x      │ 3x − 9
 ──────────────────── │
      −9x² +  5x −  1 │
      +9x² +  9x −  9 │
      ─────────────── │
             14x − 10 │</pre>
        <div class="eq"><span class="m">Q(x) = 3x − 9</span>, &nbsp; <span class="m">R(x) = 14x − 10</span></div>
        <p>Check at <span class="m">x = 1</span>: <span class="m">A(1) = 3 − 6 + 2 − 1 = −2</span>; &nbsp; <span class="m">(1)(−6) + 4 = −2</span> ✓</p>
        <p><b>b)</b></p>
<pre class="long">  3x³ + 8x² −  x  +  1   │ 3x + 2
 −3x³ − 2x²             │ x² + 2x − 5/3
 ─────────────────────  │
       6x² −  x  +  1   │
      −6x² − 4x         │
      ───────────────   │
            −5x  +  1   │
            +5x  + 10/3 │
            ─────────── │
                   13/3 │</pre>
        <div class="eq"><span class="m">Q(x) = x<sup>2</sup> + 2x − </span>${FR('5','3')}, &nbsp; <span class="m">r = </span>${FR('13','3')}</div>
        <p>Check at <span class="m">x = 1</span>: <span class="m">A(1) = 3 + 8 − 1 + 1 = 11</span>; &nbsp; <span class="m">5 · (1 + 2 − </span>${FR('5','3')}<span class="m">) + </span>${FR('13','3')}<span class="m"> = 5 · </span>${FR('4','3')}<span class="m"> + </span>${FR('13','3')}<span class="m"> = </span>${FR('33','3')}<span class="m"> = 11</span> ✓</p>` }
    ]},

    { type: "plain", html: `<h2 id="s5">5 · Dividing by x − a  ·  Horner's scheme</h2>` },

    { type: "text", html:
      `<p>When the divisor is <span class="m">x − a</span> (degree 1, leading coefficient 1), long division is slow. There is a much faster method: <b>Horner's scheme</b> (<i>rekenschema van Horner</i>).</p>
      <p>Because <span class="m">gr(D(x)) = 1</span>, the quotient has degree <span class="m">n − 1</span> and the remainder is always a plain number <span class="m">r</span>.</p>` },

    { type: "example", title: "Worked example — (2x³ + 3x² + 2) : (x − 1)",
      html: `<p>Coefficients of <span class="m">A(x)</span>, completed with a zero: <span class="m">2, 3, 0, 2</span>. Here <span class="m">a = 1</span>.</p>
      <table class="horner">
        <tr><td class="a"></td><td>2</td><td>3</td><td>0</td><td>2</td></tr>
        <tr><td class="a">1</td><td>↓</td><td>2</td><td>5</td><td>5</td></tr>
        <tr class="res"><td class="a"></td><td>2</td><td>5</td><td>5</td><td class="rest">7</td></tr>
      </table>
      <p>Read off: <span class="m">Q(x) = 2x<sup>2</sup> + 5x + 5</span> and <span class="m">r = 7</span>, so</p>
      <div class="eq"><span class="m">2x<sup>3</sup> + 3x<sup>2</sup> + 2 = (2x<sup>2</sup> + 5x + 5)(x − 1) + 7</span></div>` },

    { type: "steps", title: "Step plan — Horner's scheme for A(x) : (x − a)",
      html: `<ol>
        <li>Put <span class="m">A(x)</span> in descending powers and complete it. Write its coefficients on the <b>first row</b>.</li>
        <li>Write the number <span class="m">a</span> to the left of the vertical bar on the second row.</li>
        <li>Bring the first coefficient straight down to the third row (unchanged).</li>
        <li>Multiply the number on the third row by <span class="m">a</span>; write the product on the second row, under the next coefficient.</li>
        <li>Add that product and the coefficient; write the sum on the third row.</li>
        <li>Repeat steps 4 and 5 for all remaining coefficients.</li>
        <li>The <b>last</b> number on the third row is the remainder <span class="m">r</span>. The others are the coefficients of <span class="m">Q(x)</span>, whose degree is one less than that of <span class="m">A(x)</span>.</li>
        <li>Write the answer as <span class="m">A(x) = Q(x) · (x − a) + r</span>.</li>
      </ol>` },

    { type: "warn", title: "The sign of a — the most common mistake",
      html: `<p>The scheme divides by <span class="m">x − a</span>. So you must read <span class="m">a</span> off <b>with its sign flipped</b> when the divisor is written with a plus:</p>
      <table class="grid">
        <tr><th>Divisor</th><th>Rewritten</th><th>Use a =</th></tr>
        <tr><td class="num"><span class="m">x − 1</span></td><td class="num"><span class="m">x − (1)</span></td><td class="num"><b>1</b></td></tr>
        <tr><td class="num"><span class="m">x + 2</span></td><td class="num"><span class="m">x − (−2)</span></td><td class="num"><b>−2</b></td></tr>
        <tr><td class="num"><span class="m">x + 7</span></td><td class="num"><span class="m">x − (−7)</span></td><td class="num"><b>−7</b></td></tr>
      </table>` },

    { type: "example", title: "Worked example — A(x) = −3x³ + x + 2 divided by x + 2",
      html: `<p><span class="m">D(x) = x + 2 = x − (−2)</span>, so <span class="m">a = −2</span>. Coefficients: <span class="m">−3, 0, 1, 2</span>.</p>
      <table class="horner">
        <tr><td class="a"></td><td>−3</td><td>0</td><td>1</td><td>2</td></tr>
        <tr><td class="a">−2</td><td>↓</td><td>6</td><td>−12</td><td>22</td></tr>
        <tr class="res"><td class="a"></td><td>−3</td><td>6</td><td>−11</td><td class="rest">24</td></tr>
      </table>
      <div class="eq"><span class="m">Q(x) = −3x<sup>2</sup> + 6x − 11</span>, &nbsp; <span class="m">r = 24</span></div>
      <div class="eq"><span class="m">−3x<sup>3</sup> + x + 2 = (−3x<sup>2</sup> + 6x − 11)(x + 2) + 24</span></div>
      <p>And notice — you could have found that remainder without dividing at all:</p>
      <div class="eq"><span class="m">A(−2) = −3·(−2)<sup>3</sup> + (−2) + 2 = 24 − 2 + 2 = 24</span></div>` },

    { type: "theorem", title: "Theorem — the remainder theorem (de reststelling)",
      html: `<p>When a polynomial <span class="m">A(x)</span> is divided by a polynomial of the form <span class="m">x − a</span>, the remainder equals the numerical value <span class="m">A(a)</span>:</p>
      <div class="eq" style="margin-bottom:0"><span class="m">r = A(a)</span></div>` },

    { type: "text", html:
      `<p><b>Proof.</b> Given: <span class="m">A(x) ∈ ℝ[x]</span> with <span class="m">gr(A(x)) = n</span> and <span class="m">D(x) = x − a</span>. To prove: <span class="m">r = A(a)</span>.</p>
      <p>Since <span class="m">gr(A(x)) = n</span> and <span class="m">gr(D(x)) = 1</span>, we get <span class="m">gr(Q(x)) = n − 1</span> and <span class="m">gr(R(x)) = 0</span>, so <span class="m">R(x) = r</span>, a constant. &nbsp;(1)</p>
      <p>From the division: <span class="m">A(x) = Q(x)·D(x) + R(x)</span>, which by (1) becomes <span class="m">A(x) = Q(x)·(x − a) + r</span>.</p>
      <p>Now substitute <span class="m">x = a</span>: &nbsp; <span class="m">A(a) = Q(a)·(a − a) + r = Q(a)·0 + r = r</span>. &nbsp;∎</p>` },

    { type: "text", html:
      `<h3>Finding divisors of the form x − a and factoring</h3>
      <p>From the remainder theorem: <span class="m">A(x)</span> is <b>divisible</b> by <span class="m">x − a</span> exactly when <span class="m">A(a) = 0</span>. In that case you can factor:</p>
      <div class="eq"><span class="m">A(x) = (x − a) · Q(x)</span></div>
      <p>But which <span class="m">a</span> should you test? The next property cuts the search down to a short list.</p>` },

    { type: "theorem", title: "Property — integer divisors of the constant term",
      html: `<p>If <span class="m">x − a</span> with <span class="m">a ∈ ℤ</span> is a divisor of a polynomial <span class="m">A(x) = a<sub>n</sub>x<sup>n</sup> + … + a<sub>1</sub>x + a<sub>0</sub></span> with <b>integer</b> coefficients, then <span class="m">a</span> is an <b>integer divisor of the constant term</b> <span class="m">a<sub>0</sub></span>.</p>
      <p style="margin-bottom:0"><b>Proof.</b> By the remainder theorem, <span class="m">A(a) = 0</span>, so</p>
      <div class="eq"><span class="m">a<sub>n</sub>a<sup>n</sup> + a<sub>n−1</sub>a<sup>n−1</sup> + … + a<sub>1</sub>a + a<sub>0</sub> = 0</span></div>
      <div class="eq"><span class="m">⟺ a(a<sub>n</sub>a<sup>n−1</sup> + a<sub>n−1</sub>a<sup>n−2</sup> + … + a<sub>1</sub>) = −a<sub>0</sub></span></div>
      <p style="margin-bottom:0">So <span class="m">a</span> divides <span class="m">−a<sub>0</sub></span>, and therefore also <span class="m">a<sub>0</sub></span>. ∎</p>` },

    { type: "example", title: "Worked example — factor A(x) = 3x³ − 4x² − 17x + 6",
      html: `<p>Constant term 6 → candidates for <span class="m">a</span>: <span class="m">±1, ±2, ±3, ±6</span>. Test them:</p>
      <table class="grid">
        <tr><th>Candidate</th><th>A(a)</th><th>Divisor?</th></tr>
        <tr><td class="num"><span class="m">x − 1</span></td><td class="num"><span class="m">A(1) = 3 − 4 − 17 + 6 = −12</span></td><td>no</td></tr>
        <tr><td class="num"><span class="m">x + 1</span></td><td class="num"><span class="m">A(−1) = −3 − 4 + 17 + 6 = 16</span></td><td>no</td></tr>
        <tr><td class="num"><span class="m">x − 2</span></td><td class="num"><span class="m">A(2) = 24 − 16 − 34 + 6 = −20</span></td><td>no</td></tr>
        <tr><td class="num"><span class="m">x + 2</span></td><td class="num"><span class="m">A(−2) = −24 − 16 + 34 + 6 = 0</span></td><td><b>yes</b></td></tr>
        <tr><td class="num"><span class="m">x − 3</span></td><td class="num"><span class="m">A(3) = 81 − 36 − 51 + 6 = 0</span></td><td><b>yes</b></td></tr>
        <tr><td class="num"><span class="m">x + 3</span></td><td class="num"><span class="m">A(−3) = −81 − 36 + 51 + 6 = −60</span></td><td>no</td></tr>
        <tr><td class="num"><span class="m">x − 6</span></td><td class="num"><span class="m">A(6) = 648 − 144 − 102 + 6 = 408</span></td><td>no</td></tr>
        <tr><td class="num"><span class="m">x + 6</span></td><td class="num"><span class="m">A(−6) = −648 − 144 + 102 + 6 = −684</span></td><td>no</td></tr>
      </table>
      <p>Two divisors found, so apply Horner <b>twice in a row</b>:</p>
      <table class="horner">
        <tr><td class="a"></td><td>3</td><td>−4</td><td>−17</td><td>6</td></tr>
        <tr><td class="a">−2</td><td>↓</td><td>−6</td><td>20</td><td>−6</td></tr>
        <tr class="res"><td class="a"></td><td>3</td><td>−10</td><td>3</td><td class="rest">0</td></tr>
        <tr><td class="a">3</td><td>↓</td><td>9</td><td>−3</td><td></td></tr>
        <tr class="res"><td class="a"></td><td>3</td><td>−1</td><td class="rest">0</td><td></td></tr>
      </table>
      <p>Quotient <span class="m">Q(x) = 3x − 1</span>, so the factored form is</p>
      <div class="eq"><span class="m">A(x) = (x + 2)(x − 3)(3x − 1)</span></div>
      <p><b>Shortcut:</b> for a third-degree polynomial you can also apply Horner <b>once</b> and then factor the remaining quadratic with <span class="m">ax<sup>2</sup> + bx + c = a(x − x<sub>1</sub>)(x − x<sub>2</sub>)</span>.</p>` },

    { type: "example", title: "Worked example — factor A(x) = 9x³ − 21x² + 16x − 4",
      html: `<p>Constant term −4 → candidates <span class="m">±1, ±2, ±4</span>.</p>
      <p><span class="m">A(1) = 9 − 21 + 16 − 4 = 0</span> → <span class="m">x − 1</span> is a divisor. Apply Horner with <span class="m">a = 1</span>:</p>
      <table class="horner">
        <tr><td class="a"></td><td>9</td><td>−21</td><td>16</td><td>−4</td></tr>
        <tr><td class="a">1</td><td>↓</td><td>9</td><td>−12</td><td>4</td></tr>
        <tr class="res"><td class="a"></td><td>9</td><td>−12</td><td>4</td><td class="rest">0</td></tr>
      </table>
      <p><span class="m">Q(x) = 9x<sup>2</sup> − 12x + 4</span>, and that trinomial is a perfect square: <span class="m">(3x − 2)<sup>2</sup></span>.</p>
      <div class="eq"><span class="m">A(x) = (x − 1)(3x − 2)<sup>2</sup></span></div>` },

    { type: "warn", title: "Exam traps",
      html: `<ul>
        <li><b>Complete the dividend.</b> A missing power silently shifts every column in long division and every step in Horner. Write the 0.</li>
        <li><b>Sign of a.</b> Divisor <span class="m">x + 2</span> → use <span class="m">a = −2</span>. Getting this wrong is the single most common error here.</li>
        <li><b>Horner only works for <span class="m">x − a</span></b>, i.e. leading coefficient 1 and degree 1. For <span class="m">3x + 2</span> or <span class="m">x<sup>2</sup> + x − 1</span> you must do the long division.</li>
        <li><b>Stop at the right moment:</b> when <span class="m">gr(R) &lt; gr(D)</span>, not when you "run out of terms".</li>
        <li><b>Check with a numerical value</b> (usually <span class="m">x = 1</span>). It costs 20 seconds and catches almost every slip.</li>
        <li>Test candidates in the smart order: <span class="m">1, −1, 2, −2, …</span> — small numbers are easiest and usually work.</li>
      </ul>` },

    { type: "exercises", title: "Start exercises (book p. 23)", items: [
      { num: "5A", q: `<p>Compute the quotient and the remainder of the division of <span class="m">A(x)</span> by <span class="m">D(x) = x − a</span>. Write the result as <span class="m">A(x) = (x − a) · Q(x) + r</span>.</p>
        <ol type="a">
          <li><span class="m">A(x) = x<sup>3</sup> + 15x<sup>2</sup> + 49x − 55</span> and <span class="m">D(x) = x + 7</span></li>
          <li><span class="m">A(x) = x<sup>3</sup> − 5x − 3</span> and <span class="m">D(x) = x − 2</span></li>
        </ol>`,
        a: `<p><b>a)</b> <span class="m">x + 7 = x − (−7)</span> so <span class="m">a = −7</span>. Coefficients <span class="m">1, 15, 49, −55</span>.</p>
        <table class="horner">
          <tr><td class="a"></td><td>1</td><td>15</td><td>49</td><td>−55</td></tr>
          <tr><td class="a">−7</td><td>↓</td><td>−7</td><td>−56</td><td>49</td></tr>
          <tr class="res"><td class="a"></td><td>1</td><td>8</td><td>−7</td><td class="rest">−6</td></tr>
        </table>
        <div class="eq"><span class="m">x<sup>3</sup> + 15x<sup>2</sup> + 49x − 55 = (x + 7)(x<sup>2</sup> + 8x − 7) − 6</span></div>
        <p>Check: <span class="m">A(−7) = −343 + 735 − 343 − 55 = −6</span> ✓</p>
        <p><b>b)</b> <span class="m">a = 2</span>. Complete the polynomial: coefficients <span class="m">1, 0, −5, −3</span>.</p>
        <table class="horner">
          <tr><td class="a"></td><td>1</td><td>0</td><td>−5</td><td>−3</td></tr>
          <tr><td class="a">2</td><td>↓</td><td>2</td><td>4</td><td>−2</td></tr>
          <tr class="res"><td class="a"></td><td>1</td><td>2</td><td>−1</td><td class="rest">−5</td></tr>
        </table>
        <div class="eq"><span class="m">x<sup>3</sup> − 5x − 3 = (x − 2)(x<sup>2</sup> + 2x − 1) − 5</span></div>
        <p>Check: <span class="m">A(2) = 8 − 10 − 3 = −5</span> ✓</p>` },

      { num: "5B", q: `<p>Use the remainder theorem to find the remainder of the division of <span class="m">A(x)</span> by <span class="m">D(x) = x − a</span> with <span class="m">a ∈ ℝ</span>. Is the division exact or not?</p>
        <ol type="a">
          <li><span class="m">A(x) = 3x<sup>2</sup> − 14x − 5</span> and <span class="m">D(x) = x − 5</span></li>
          <li><span class="m">A(x) = 6x<sup>3</sup> − 7x + 11</span> and <span class="m">D(x) = x + 4</span></li>
        </ol>`,
        a: `<p><b>a)</b> <span class="m">a = 5</span>: &nbsp; <span class="m">r = A(5) = 3·25 − 14·5 − 5 = 75 − 70 − 5 = <b>0</b></span><br>
        The division is <b>exact</b> — so <span class="m">x − 5</span> is a divisor of <span class="m">A(x)</span>.</p>
        <p><b>b)</b> <span class="m">x + 4 = x − (−4)</span> so <span class="m">a = −4</span>:<br>
        <span class="m">r = A(−4) = 6·(−64) − 7·(−4) + 11 = −384 + 28 + 11 = <b>−345</b></span><br>
        The division is <b>not exact</b>.</p>` },

      { num: "5C", q: `<p>Factor the polynomial <span class="m">A(x)</span> completely.</p>
        <ol type="a">
          <li><span class="m">A(x) = 2x<sup>3</sup> − 3x<sup>2</sup> − 9x + 10</span></li>
          <li><span class="m">A(x) = 4x<sup>3</sup> − 27x + 27</span></li>
        </ol>`,
        a: `<p><b>a)</b> Constant term 10 → candidates <span class="m">±1, ±2, ±5, ±10</span>.<br>
        <span class="m">A(1) = 2 − 3 − 9 + 10 = 0</span> → <span class="m">x − 1</span> is a divisor.</p>
        <table class="horner">
          <tr><td class="a"></td><td>2</td><td>−3</td><td>−9</td><td>10</td></tr>
          <tr><td class="a">1</td><td>↓</td><td>2</td><td>−1</td><td>−10</td></tr>
          <tr class="res"><td class="a"></td><td>2</td><td>−1</td><td>−10</td><td class="rest">0</td></tr>
        </table>
        <p>Now factor <span class="m">2x<sup>2</sup> − x − 10</span>: &nbsp; <span class="m">D = 1 + 80 = 81</span>, <span class="m">√D = 9</span>, <span class="m">x = </span>${FR('1 ± 9','4')} → <span class="m">x<sub>1</sub> = </span>${FR('5','2')}, <span class="m">x<sub>2</sub> = −2</span>.</p>
        <div class="eq"><span class="m">2x<sup>2</sup> − x − 10 = 2(x − </span>${FR('5','2')}<span class="m">)(x + 2) = (2x − 5)(x + 2)</span></div>
        <div class="eq"><span class="m">A(x) = (x − 1)(2x − 5)(x + 2)</span></div>
        <p>Check the constant term: <span class="m">(−1)(−5)(2) = 10</span> ✓</p>
        <p><b>b)</b> Constant term 27 → candidates <span class="m">±1, ±3, ±9, ±27</span>.<br>
        <span class="m">A(1) = 4</span>, <span class="m">A(−1) = 50</span>, <span class="m">A(3) = 54</span>, &nbsp; <span class="m">A(−3) = −108 + 81 + 27 = 0</span> → <span class="m">x + 3</span> is a divisor.</p>
        <table class="horner">
          <tr><td class="a"></td><td>4</td><td>0</td><td>−27</td><td>27</td></tr>
          <tr><td class="a">−3</td><td>↓</td><td>−12</td><td>36</td><td>−27</td></tr>
          <tr class="res"><td class="a"></td><td>4</td><td>−12</td><td>9</td><td class="rest">0</td></tr>
        </table>
        <p><span class="m">4x<sup>2</sup> − 12x + 9 = (2x − 3)<sup>2</sup></span> — a perfect square.</p>
        <div class="eq"><span class="m">A(x) = (x + 3)(2x − 3)<sup>2</sup></span></div>
        <p>Check the constant term: <span class="m">3 · 9 = 27</span> ✓</p>` }
    ]}
  ]
}
];

/* ------------------------------------------------------------------
   3. STUDY PLAN
   ------------------------------------------------------------------ */
const STUDY_PLAN = {
  method: [
    { step: "Step 1", nl: "Voorkennis en Ken je klassiekers", title: "Prior knowledge",
      text: "Every chapter opens with a few pages of prior knowledge. Read them <b>before</b> the new theory. If something from earlier years is missing, do the <i>Ken je klassiekers</i> set on Pelckmans Portaal first." },
    { step: "Step 2", nl: "Theorie en startoefeningen", title: "Theory + start exercises",
      text: "Each part starts with new theory followed immediately by start exercises. Those exercises exist to test whether you actually understood the theory — do them the same day, not later. The GeoGebra applets in the digital book show the same theory visually." },
    { step: "Step 3", nl: "Weer- en meeroefeningen", title: "Repeat or push further",
      text: "If the start exercises were hard → do the <b>WEER</b> (repeat) exercises. If they were easy → skip straight to <b>MEER</b> (more), and climb the difficulty levels. Most <i>meer</i> exercises are followed by a mirror exercise of the same level — use it to confirm you really got it." },
    { step: "Step 4", nl: "Synthese en Test jezelf", title: "Synthesis + Test yourself",
      text: "The <i>Synthese</i> at the back of the book summarises all the theory. The <i>Test jezelf</i> sections are large mixed exercise sets — save these for exam revision, when topics come at you in random order." }
  ],

  week: [
    { day: "Monday",    task: "Read the new theory (20 min) and write your own one-page summary card — in your own words, not copied." },
    { day: "Tuesday",   task: "Start exercises (startoefeningen) of that part. Mark every exercise you could not do on your own." },
    { day: "Wednesday", task: "WEER or MEER exercises, depending on how Tuesday went." },
    { day: "Thursday",  task: "Redo two exercises you got wrong — with the book closed. This is the step most people skip and it is the one that makes it stick." },
    { day: "Friday",    task: "15 min flash review: read only your summary cards of the whole chapter so far." },
    { day: "Weekend",   task: "30 min mixed review of an older chapter. Spacing beats cramming." }
  ],

  schedule: [
    { block: "Weeks 1 – 5",   chapter: "1", title: "Polynomial functions", pages: "11 – 58",
      focus: "Vocabulary, Euclidean division, Horner, remainder theorem, factoring, sign charts, graphs." },
    { block: "Weeks 6 – 11",  chapter: "2", title: "Rational functions", pages: "59 – 100",
      focus: "Domain restrictions, homographic functions, asymptotes and holes." },
    { block: "Weeks 12 – 15", chapter: "3", title: "Irrational functions", pages: "101 – 128",
      focus: "Rational exponents, roots, domain conditions, inverse functions." },
    { block: "Week 16",       chapter: "—", title: "TEST YOURSELF chapters 1–3", pages: "129 – 130",
      focus: "Mixed exercises. Do them timed, with only your summary cards next to you." },
    { block: "Weeks 17 – 24", chapter: "4", title: "Exponential and logarithmic functions", pages: "131 – 202",
      focus: "The biggest chapter. Growth factors, laws of logarithms, equations and inequalities." },
    { block: "Weeks 25 – 30", chapter: "5", title: "Trigonometric functions", pages: "203 – 259",
      focus: "Radians, periodic functions, the general sine function, trig formulas." },
    { block: "Exam period",   chapter: "—", title: "TEST YOURSELF 4–5 + SYNTHESIS", pages: "260 – 270",
      focus: "Three passes: (1) read the whole Synthese, (2) redo every exercise you once got wrong, (3) one full timed mixed set." }
  ],

  tips: [
    { t: "Do maths with a pen, not with your eyes", d: "Reading a worked example feels like learning but isn't. Cover the solution, do it yourself, then compare. If you cannot reproduce it, you have not learnt it." },
    { t: "Always check your answer", d: "Every division in this chapter can be checked in 20 seconds by substituting x = 1 into A(x) = Q(x)·D(x) + R(x). Free marks." },
    { t: "Keep a mistake log", d: "One page per chapter. Write the exercise number and, in one line, <i>why</i> you got it wrong (sign, forgot to complete the polynomial, wrong formula). Re-read it before every test — most people repeat the same three mistakes." },
    { t: "Learn the Dutch and English word", d: "The lesson and the exam are in Dutch; use the glossary here so you never lose marks on wording." },
    { t: "25 minutes, then a real break", d: "Two focused 25-minute blocks beat one distracted hour. Phone in another room." },
    { t: "Explain it out loud", d: "If you can explain Horner's scheme to someone who doesn't know it, you know it. If you get stuck halfway, that is exactly the bit to reread." }
  ]
};

/* ------------------------------------------------------------------
   4. KEY FORMULAS (quick reference card)
   ------------------------------------------------------------------ */
const FORMULAS = [
  { group: "Polynomials", items: [
    { n: "General polynomial", f: `<span class="m">A(x) = a<sub>n</sub>x<sup>n</sup> + a<sub>n−1</sub>x<sup>n−1</sup> + … + a<sub>1</sub>x + a<sub>0</sub></span>, &nbsp;<span class="m">a<sub>n</sub> ≠ 0</span>` },
    { n: "Degree", f: `<span class="m">gr(A(x)) = n</span> — the highest exponent of <span class="m">x</span>` },
    { n: "Numerical value", f: `<span class="m">A(r) = a<sub>n</sub>r<sup>n</sup> + … + a<sub>1</sub>r + a<sub>0</sub></span>` },
    { n: "Domain", f: `<span class="m">dom f = ℝ</span> for every polynomial function` }
  ]},
  { group: "Division", items: [
    { n: "Division identity", f: `<span class="m">A(x) = D(x) · Q(x) + R(x)</span> &nbsp;with&nbsp; <span class="m">gr(R(x)) &lt; gr(D(x))</span>` },
    { n: "Exact division", f: `<span class="m">R(x) = 0</span> &nbsp;⟺&nbsp; <span class="m">D(x)</span> is a divisor of <span class="m">A(x)</span>` },
    { n: "Remainder theorem", f: `Divide by <span class="m">x − a</span> &nbsp;→&nbsp; <span class="m">r = A(a)</span>` },
    { n: "Divisibility by x − a", f: `<span class="m">x − a</span> divides <span class="m">A(x)</span> &nbsp;⟺&nbsp; <span class="m">A(a) = 0</span>` },
    { n: "Candidate divisors", f: `<span class="m">a</span> must be an integer divisor of the constant term <span class="m">a<sub>0</sub></span>` }
  ]},
  { group: "From prior knowledge", items: [
    { n: "First-degree zero", f: `<span class="m">ax + b = 0 ⟺ x = −</span>${FR('b','a')}` },
    { n: "Discriminant", f: `<span class="m">D = b<sup>2</sup> − 4ac</span>` },
    { n: "Quadratic formula", f: `<span class="m">x<sub>1,2</sub> = </span>${FR('−b ± √D','2a')}` },
    { n: "Factoring a quadratic", f: `<span class="m">ax<sup>2</sup> + bx + c = a(x − x<sub>1</sub>)(x − x<sub>2</sub>)</span>` },
    { n: "Vertex form", f: `<span class="m">y = a(x − x<sub>T</sub>)<sup>2</sup> + y<sub>T</sub></span>` }
  ]}
];

/* ------------------------------------------------------------------
   5. GLOSSARY  (Dutch is what he hears in class; English is this site)
   ------------------------------------------------------------------ */
const GLOSSARY = [
  { nl: "eenterm",              en: "monomial",                note: "number × a power of x, natural exponent" },
  { nl: "veelterm",             en: "polynomial",              note: "sum of finitely many monomials" },
  { nl: "veeltermfunctie",      en: "polynomial function",     note: "function whose rule is a polynomial" },
  { nl: "coëfficiënt",          en: "coefficient",             note: "the number factor a<sub>i</sub>" },
  { nl: "graad",                en: "degree",                  note: "highest exponent, gr(A(x))" },
  { nl: "nulveelterm",          en: "zero polynomial",         note: "all coefficients are 0" },
  { nl: "volledige veelterm",   en: "complete polynomial",     note: "every power from 0 to n present" },
  { nl: "getalwaarde",          en: "numerical value",         note: "A(r), substitute x = r" },
  { nl: "functiewaarde",        en: "function value",          note: "f(r), the y-value" },
  { nl: "invoerwaarde",         en: "input value",             note: "the x-value, the argument" },
  { nl: "beeld",                en: "image",                   note: "another word for the function value" },
  { nl: "domein",              en: "domain",                  note: "dom f — all allowed x" },
  { nl: "bereik",               en: "range",                   note: "ber f — all reached y" },
  { nl: "deeltal",              en: "dividend",                note: "the polynomial being divided" },
  { nl: "deler",                en: "divisor",                 note: "what you divide by" },
  { nl: "quotiënt",             en: "quotient",                note: "Q(x), the result" },
  { nl: "rest",                 en: "remainder",               note: "R(x) or r" },
  { nl: "opgaande deling",      en: "exact division",          note: "remainder = 0" },
  { nl: "niet-opgaande deling", en: "non-exact division",      note: "remainder ≠ 0" },
  { nl: "euclidische deling",   en: "Euclidean division",      note: "long division of polynomials" },
  { nl: "rekenschema van Horner", en: "Horner's scheme",       note: "fast division by x − a" },
  { nl: "reststelling",         en: "remainder theorem",       note: "r = A(a)" },
  { nl: "ontbinden in factoren",en: "to factor / factorise",   note: "write as a product" },
  { nl: "merkwaardig product",  en: "special product",         note: "e.g. (a − b)² = a² − 2ab + b²" },
  { nl: "stelling",             en: "theorem",                 note: "" },
  { nl: "eigenschap",           en: "property",                note: "" },
  { nl: "bewijs",               en: "proof",                   note: "" },
  { nl: "gegeven / te bewijzen",en: "given / to prove",        note: "how every proof starts" },
  { nl: "stappenplan",          en: "step plan / method",      note: "" },
  { nl: "voorschrift",          en: "function rule",           note: "the formula f(x) = …" },
  { nl: "nulwaarde",            en: "zero (of a function)",    note: "x-value where f(x) = 0" },
  { nl: "nulpunt",              en: "zero point",              note: "the point (x, 0) on the graph" },
  { nl: "tekenschema",          en: "sign chart",              note: "where f(x) is + or −" },
  { nl: "verloopschema",        en: "variation chart",         note: "where f increases ↗ or decreases ↘" },
  { nl: "stijgend / dalend",    en: "increasing / decreasing", note: "" },
  { nl: "extremum",             en: "extremum",                note: "a relative maximum or minimum" },
  { nl: "top (van een parabool)", en: "vertex",                note: "T(x_T , y_T)" },
  { nl: "dalparabool / bergparabool", en: "valley / mountain parabola", note: "a > 0 / a < 0" },
  { nl: "richtingscoëfficiënt", en: "slope",                   note: "the a in y = ax + b" },
  { nl: "vierkantsvergelijking",en: "quadratic equation",      note: "" },
  { nl: "discriminant",         en: "discriminant",            note: "D = b² − 4ac" },
  { nl: "ongelijkheid",         en: "inequality",              note: "" },
  { nl: "startoefening",        en: "start exercise",          note: "right after the theory" },
  { nl: "weeroefening / meeroefening", en: "repeat / extra exercise", note: "easier / harder practice" },
  { nl: "voorkennis",           en: "prior knowledge",         note: "what you should already know" },
  { nl: "hoofdstuk",            en: "chapter",                 note: "" },
  { nl: "functieonderzoek",     en: "function analysis",       note: "the subtitle of this book" }
];
