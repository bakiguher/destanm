/* 1.5 — book pages 30–37 */
LESSONS.push({
  id: "1.5", code: "1.5", chapter: 1, pages: "30 – 37",
  title: T("Grafisch onderzoek van veeltermfuncties", "Graphical study of polynomial functions"),
  lede: T("Het slotstuk van hoofdstuk 1: alles wat je tot nu toe leerde komt samen in één onderzoek van een functie. Symmetrie, nulwaarden, tekenschema, extrema, verloop en gedrag op oneindig — samen zijn dat de kenmerken van een veeltermfunctie.",
          "The finale of chapter 1: everything you have learnt so far comes together in one study of a function. Symmetry, zeros, sign chart, extrema, variation and behaviour at infinity — together these are the characteristics of a polynomial function."),

  checklist: [
    T("Ik kan aan de grafiek zien of een functie even, oneven of geen van beide is","I can see from a graph whether a function is even, odd or neither"),
    T("Ik kan algebraïsch nagaan of f even of oneven is met f(−x)","I can check algebraically whether f is even or odd using f(−x)"),
    T("Ik ken het verschil tussen een relatief en een absoluut extremum","I know the difference between a relative and an absolute extremum"),
    T("Ik kan een verloopschema opstellen vanuit de grafiek","I can build a variation chart from the graph"),
    T("Ik kan het gedrag op oneindig noteren als een limiet","I can write the behaviour at infinity as a limit"),
    T("Ik kan alle kenmerken van een veeltermfunctie in één overzicht bespreken","I can discuss all the characteristics of a polynomial function in one overview"),
    T("Ik kan bij een vraagstuk zelf een functievoorschrift opstellen","I can set up a function rule myself for a word problem")
  ],

  blocks: [
    { type:"plain", html: T(`<h2>9 · Even en oneven functies</h2>`, `<h2>9 · Even and odd functions</h2>`) },

    { type:"example", title: T("Even functie — f(x) = x⁴ − 5x² + 3","Even function — f(x) = x⁴ − 5x² + 3"), html: T(
`<p>De grafiek is symmetrisch ten opzichte van de <b>y-as</b>. Omdat de y-as de symmetrieas is, noem je <span class="m">f</span> een <b>even functie</b>.</p>
<pre class="long">   x   │ −3   −2   −1    0    1    2    3
 ──────┼──────────────────────────────────────
  f(x) │ 39   −1   −1    3   −1   −1   39</pre>
<p>Elke twee <b>tegengestelde</b> invoerwaarden hebben <b>gelijke</b> functiewaarden. Er geldt:</p>
<div class="eq"><span class="m">f(−x) = (−x)<sup>4</sup> − 5(−x)<sup>2</sup> + 3 = x<sup>4</sup> − 5x<sup>2</sup> + 3 = f(x)</span></div>
<p style="margin-bottom:0">Schrijf je elke exponent uit — <span class="m">f(x) = x<sup>4</sup> − 5x<sup>2</sup> + 3x<sup>0</sup></span> — dan zie je dat elke exponent van <span class="m">x</span> <b>even</b> is.</p>`,
`<p>The graph is symmetric about the <b>y-axis</b>. Because the y-axis is the axis of symmetry, <span class="m">f</span> is called an <b>even function</b>.</p>
<pre class="long">   x   │ −3   −2   −1    0    1    2    3
 ──────┼──────────────────────────────────────
  f(x) │ 39   −1   −1    3   −1   −1   39</pre>
<p>Any two <b>opposite</b> inputs have <b>equal</b> function values. We have:</p>
<div class="eq"><span class="m">f(−x) = (−x)<sup>4</sup> − 5(−x)<sup>2</sup> + 3 = x<sup>4</sup> − 5x<sup>2</sup> + 3 = f(x)</span></div>
<p style="margin-bottom:0">Write out every exponent — <span class="m">f(x) = x<sup>4</sup> − 5x<sup>2</sup> + 3x<sup>0</sup></span> — and you see every exponent of <span class="m">x</span> is <b>even</b>.</p>`) },

    { type:"example", title: T("Oneven functie — f(x) = x³ − 4x","Odd function — f(x) = x³ − 4x"), html: T(
`<p>De grafiek is symmetrisch ten opzichte van de <b>oorsprong</b>. Omdat de oorsprong het symmetriemiddelpunt is, noem je <span class="m">f</span> een <b>oneven functie</b>.</p>
<pre class="long">   x   │  −3   −2   −1    0    1    2    3
 ──────┼──────────────────────────────────────
  f(x) │ −15    0    3    0   −3    0   15</pre>
<p>Elke twee tegengestelde invoerwaarden hebben <b>tegengestelde</b> functiewaarden:</p>
<div class="eq"><span class="m">f(−x) = (−x)<sup>3</sup> − 4(−x) = −x<sup>3</sup> + 4x = −(x<sup>3</sup> − 4x) = −f(x)</span></div>
<p style="margin-bottom:0">Schrijf je <span class="m">f(x) = x<sup>3</sup> − 4x<sup>1</sup></span>, dan is elke exponent van <span class="m">x</span> <b>oneven</b>.</p>`,
`<p>The graph is symmetric about the <b>origin</b>. Because the origin is the centre of symmetry, <span class="m">f</span> is called an <b>odd function</b>.</p>
<pre class="long">   x   │  −3   −2   −1    0    1    2    3
 ──────┼──────────────────────────────────────
  f(x) │ −15    0    3    0   −3    0   15</pre>
<p>Any two opposite inputs have <b>opposite</b> function values:</p>
<div class="eq"><span class="m">f(−x) = (−x)<sup>3</sup> − 4(−x) = −x<sup>3</sup> + 4x = −(x<sup>3</sup> − 4x) = −f(x)</span></div>
<p style="margin-bottom:0">Write <span class="m">f(x) = x<sup>3</sup> − 4x<sup>1</sup></span> and every exponent of <span class="m">x</span> is <b>odd</b>.</p>`) },

    { type:"concept", title: T("Begrippen — even en oneven functie","Definitions — even and odd function"), html: T(
`<p>Een <b>even functie</b> is een functie waarvan de grafiek symmetrisch is t.o.v. de <b>y-as</b>.</p>
<div class="eq"><span class="m">f is een even functie ⟺ ∀x ∈ dom f: f(−x) = f(x)</span></div>
<p>Een <b>oneven functie</b> is een functie waarvan de grafiek symmetrisch is t.o.v. de <b>oorsprong</b>.</p>
<div class="eq" style="margin-bottom:0"><span class="m">f is een oneven functie ⟺ ∀x ∈ dom f: f(−x) = −f(x)</span></div>`,
`<p>An <b>even function</b> is a function whose graph is symmetric about the <b>y-axis</b>.</p>
<div class="eq"><span class="m">f is even ⟺ ∀x ∈ dom f: f(−x) = f(x)</span></div>
<p>An <b>odd function</b> is a function whose graph is symmetric about the <b>origin</b>.</p>
<div class="eq" style="margin-bottom:0"><span class="m">f is odd ⟺ ∀x ∈ dom f: f(−x) = −f(x)</span></div>`) },

    { type:"warn", title: T("Sneltest voor een veeltermfunctie","Quick test for a polynomial function"), html: T(
`<ul style="margin-bottom:0">
  <li>Alle exponenten <b>even</b> (constante term telt als <span class="m">x<sup>0</sup></span>) → <b>even functie</b>.</li>
  <li>Alle exponenten <b>oneven</b> → <b>oneven functie</b>.</li>
  <li><b>Gemengd</b> → <b>geen van beide</b>.</li>
  <li>Een constante term <span class="m">≠ 0</span> maakt een verder oneven functie meteen ‘geen van beide’.</li>
</ul>`,
`<ul style="margin-bottom:0">
  <li>All exponents <b>even</b> (the constant term counts as <span class="m">x<sup>0</sup></span>) → <b>even function</b>.</li>
  <li>All exponents <b>odd</b> → <b>odd function</b>.</li>
  <li><b>Mixed</b> → <b>neither</b>.</li>
  <li>A constant term <span class="m">≠ 0</span> instantly makes an otherwise odd function "neither".</li>
</ul>`) },

    { type:"exercises", title: T("Startoefeningen (boek p. 31)","Start exercises (book p. 31)"), from:"9" },

    { type:"plain", html: T(`<h2>10 · Extrema en verloopschema</h2>`, `<h2>10 · Extrema and variation chart</h2>`) },

    { type:"example", title: T("Voorbeeld — f(x) = 3/2·x⁴ − 2x³ − 6x² + 5","Worked example — f(x) = 3/2·x⁴ − 2x³ − 6x² + 5"), html: T(
`<p>Met ICT bepaal je de extreme waarden van <span class="m">f</span>.</p>
<ul>
  <li><b>A</b> is lokaal een laagste punt. Je noteert <span class="m">min(−1 , </span>${FR('5','2')}<span class="m">)</span>.<br>
      Je zegt: <i>in <span class="m">x = −1</span> bereikt <span class="m">f</span> een <b>relatief minimum</b> </i>${FR('5','2')}.</li>
  <li><b>B</b> is lokaal een hoogste punt. Je noteert <span class="m">max(0 , 5)</span>.<br>
      Je zegt: <i>in <span class="m">x = 0</span> bereikt <span class="m">f</span> een <b>relatief maximum</b> 5.</i></li>
  <li><b>C</b> is <b>het</b> laagste punt van de hele grafiek. Je noteert <span class="m">min(2 , −11)</span>.<br>
      <span class="m">−11</span> is de kleinste functiewaarde uit het bereik → <i>in <span class="m">x = 2</span> bereikt <span class="m">f</span> een <b>absoluut minimum</b> −11.</i></li>
</ul>`,
`<p>With ICT you find the extreme values of <span class="m">f</span>.</p>
<ul>
  <li><b>A</b> is locally a lowest point. You write <span class="m">min(−1 , </span>${FR('5','2')}<span class="m">)</span>.<br>
      You say: <i>at <span class="m">x = −1</span>, <span class="m">f</span> reaches a <b>relative minimum</b> </i>${FR('5','2')}.</li>
  <li><b>B</b> is locally a highest point. You write <span class="m">max(0 , 5)</span>.<br>
      You say: <i>at <span class="m">x = 0</span>, <span class="m">f</span> reaches a <b>relative maximum</b> 5.</i></li>
  <li><b>C</b> is <b>the</b> lowest point of the whole graph. You write <span class="m">min(2 , −11)</span>.<br>
      <span class="m">−11</span> is the smallest function value in the range → <i>at <span class="m">x = 2</span>, <span class="m">f</span> reaches an <b>absolute minimum</b> −11.</i></li>
</ul>`) },

    { type:"concept", title: T("Begrippen — absoluut en relatief maximum en minimum","Definitions — absolute and relative maximum and minimum"), html: T(
`<p>Een <b>absoluut minimum</b> is de <b>kleinste</b> functiewaarde uit het bereik:</p>
<div class="eq"><span class="m">f bereikt in c een absoluut minimum f(c) ⟺ ∀x ∈ dom f: f(x) ≥ f(c)</span></div>
<p>Een <b>absoluut maximum</b> is de <b>grootste</b> functiewaarde uit het bereik:</p>
<div class="eq"><span class="m">f bereikt in c een absoluut maximum f(c) ⟺ ∀x ∈ dom f: f(x) ≤ f(c)</span></div>
<p>Een <b>relatief minimum</b> is een <b>lokale</b> kleinste functiewaarde:</p>
<div class="eq"><span class="m">f bereikt in c een relatief minimum f(c) ⟺ ∃ ]a, b[ rond c ∈ dom f: ∀x ∈ ]a, b[: f(x) ≥ f(c)</span></div>
<p>Een <b>relatief maximum</b> is een <b>lokale</b> grootste functiewaarde:</p>
<div class="eq"><span class="m">f bereikt in c een relatief maximum f(c) ⟺ ∃ ]a, b[ rond c ∈ dom f: ∀x ∈ ]a, b[: f(x) ≤ f(c)</span></div>
<p style="margin-bottom:0"><b>Opmerking:</b> een functie kan hoogstens <b>één</b> absoluut minimum en <b>één</b> absoluut maximum hebben. Die waarde kan wel in meerdere invoerwaarden bereikt worden.</p>`,
`<p>An <b>absolute minimum</b> is the <b>smallest</b> function value in the range:</p>
<div class="eq"><span class="m">f reaches an absolute minimum f(c) at c ⟺ ∀x ∈ dom f: f(x) ≥ f(c)</span></div>
<p>An <b>absolute maximum</b> is the <b>largest</b> function value in the range:</p>
<div class="eq"><span class="m">f reaches an absolute maximum f(c) at c ⟺ ∀x ∈ dom f: f(x) ≤ f(c)</span></div>
<p>A <b>relative minimum</b> is a <b>local</b> smallest function value:</p>
<div class="eq"><span class="m">f reaches a relative minimum f(c) at c ⟺ ∃ ]a, b[ around c ∈ dom f: ∀x ∈ ]a, b[: f(x) ≥ f(c)</span></div>
<p>A <b>relative maximum</b> is a <b>local</b> largest function value:</p>
<div class="eq"><span class="m">f reaches a relative maximum f(c) at c ⟺ ∃ ]a, b[ around c ∈ dom f: ∀x ∈ ]a, b[: f(x) ≤ f(c)</span></div>
<p style="margin-bottom:0"><b>Note:</b> a function can have at most <b>one</b> absolute minimum and <b>one</b> absolute maximum. That value may be reached at several inputs.</p>`) },

    { type:"example", title: T("Verloopschema vanuit de grafiek — f(x) = x⁵ − 3x³ + x − 1","Variation chart from the graph — f(x) = x⁵ − 3x³ + x − 1"), html: T(
`<p>Met ICT lees je de extrema af:</p>
<ul>
  <li>in <span class="m">x = −1,3</span> een relatief maximum <span class="m">0,58</span></li>
  <li>in <span class="m">x = −0,34</span> een relatief minimum <span class="m">−1,23</span></li>
  <li>in <span class="m">x = 0,34</span> een relatief maximum <span class="m">−0,77</span></li>
  <li>in <span class="m">x = 1,3</span> een relatief minimum <span class="m">−2,58</span></li>
</ul>
<pre class="long">   x   │     −1,3         −0,34         0,34          1,3
 ──────┼──────────────────────────────────────────────────────────
  f(x) │  ↗   0,58    ↘   −1,23    ↗   −0,77    ↘   −2,58    ↗
       │       max          min          max          min</pre>
<p><span class="m">f</span> stijgt in <span class="m">]−∞ ; −1,3[ ∪ ]−0,34 ; 0,34[ ∪ ]1,3 ; +∞[</span><br>
<span class="m">f</span> daalt in <span class="m">]−1,3 ; −0,34[ ∪ ]0,34 ; 1,3[</span></p>
<p style="margin-bottom:0">Merk op: hier is <b>geen</b> enkel extremum absoluut — de functie gaat aan beide kanten naar <span class="m">±∞</span>.</p>`,
`<p>With ICT you read off the extrema:</p>
<ul>
  <li>at <span class="m">x = −1.3</span> a relative maximum <span class="m">0.58</span></li>
  <li>at <span class="m">x = −0.34</span> a relative minimum <span class="m">−1.23</span></li>
  <li>at <span class="m">x = 0.34</span> a relative maximum <span class="m">−0.77</span></li>
  <li>at <span class="m">x = 1.3</span> a relative minimum <span class="m">−2.58</span></li>
</ul>
<pre class="long">   x   │     −1.3         −0.34         0.34          1.3
 ──────┼──────────────────────────────────────────────────────────
  f(x) │  ↗   0.58    ↘   −1.23    ↗   −0.77    ↘   −2.58    ↗
       │       max          min          max          min</pre>
<p><span class="m">f</span> increases on <span class="m">]−∞ ; −1.3[ ∪ ]−0.34 ; 0.34[ ∪ ]1.3 ; +∞[</span><br>
<span class="m">f</span> decreases on <span class="m">]−1.3 ; −0.34[ ∪ ]0.34 ; 1.3[</span></p>
<p style="margin-bottom:0">Note: <b>none</b> of these extrema is absolute — the function runs to <span class="m">±∞</span> on both sides.</p>`) },

    { type:"exercises", title: T("Startoefening (boek p. 33)","Start exercise (book p. 33)"), from:"10A" },

    { type:"plain", html: T(`<h2>11 · Gedrag op oneindig</h2>`, `<h2>11 · Behaviour at infinity</h2>`) },

    { type:"text", html: T(
`<p>Het <b>gedrag op oneindig</b> bestuderen is nagaan hoe de functiewaarden veranderen als de invoerwaarden naar plus oneindig <span class="m">(+∞)</span> of min oneindig <span class="m">(−∞)</span> gaan.</p>
<p>Neem <span class="m">f(x) = −x<sup>3</sup> + 3x<sup>2</sup> − 2</span> en bereken de functiewaarden voor steeds grotere invoerwaarden:</p>
<pre class="long">      x     │       f(x)                 x     │       f(x)
 ───────────┼──────────────────     ───────────┼────────────────────
        −10 │         1 298              10    │            −702
       −100 │     1 029 998             100     │        −970 002
     −1 000 │ 1 002 999 998           1 000     │    −997 000 002
    −10 000 │  1,0003 · 10¹²         10 000     │ −999 700 000 002
   −100 000 │  1,00003 · 10¹⁵       100 000     │  −9,9997 · 10¹⁴
         ↓  │         ↓                   ↓     │         ↓
        −∞  │        +∞                  +∞     │        −∞</pre>
<p>Die grenswaarde noem je de <b>limiet</b> van de functie. Je noteert:</p>
<div class="eq"><span class="m">lim<sub>x→−∞</sub> f(x) = +∞</span> &nbsp;&nbsp;en&nbsp;&nbsp; <span class="m">lim<sub>x→+∞</sub> f(x) = −∞</span></div>`,
`<p>Studying the <b>behaviour at infinity</b> means checking how the function values change as the inputs go to plus infinity <span class="m">(+∞)</span> or minus infinity <span class="m">(−∞)</span>.</p>
<p>Take <span class="m">f(x) = −x<sup>3</sup> + 3x<sup>2</sup> − 2</span> and compute the values for ever larger inputs:</p>
<pre class="long">      x     │       f(x)                 x     │       f(x)
 ───────────┼──────────────────     ───────────┼────────────────────
        −10 │         1 298              10    │            −702
       −100 │     1 029 998             100     │        −970 002
     −1 000 │ 1 002 999 998           1 000     │    −997 000 002
    −10 000 │  1.0003 · 10¹²         10 000     │ −999 700 000 002
   −100 000 │  1.00003 · 10¹⁵       100 000     │  −9.9997 · 10¹⁴
         ↓  │         ↓                   ↓     │         ↓
        −∞  │        +∞                  +∞     │        −∞</pre>
<p>That limiting value is called the <b>limit</b> of the function. You write:</p>
<div class="eq"><span class="m">lim<sub>x→−∞</sub> f(x) = +∞</span> &nbsp;&nbsp;and&nbsp;&nbsp; <span class="m">lim<sub>x→+∞</sub> f(x) = −∞</span></div>`) },

    { type:"concept", title: T("Begrippen — gedrag op oneindig en limiet","Definitions — behaviour at infinity and limit"), html: T(
`<p>Het <b>gedrag op oneindig van een functie</b> bepalen is nagaan wat er met de functiewaarden gebeurt als de invoerwaarden naar plus of min oneindig gaan. Het gedrag op oneindig noteer je als een <b>limiet</b>.</p>
<ul style="margin-bottom:0">
  <li>Invoerwaarden die naar plus oneindig gaan, noteer je als <span class="m">x → +∞</span>; de limiet als <span class="m">lim<sub>x→+∞</sub> f(x)</span>.</li>
  <li>Invoerwaarden die naar min oneindig gaan, noteer je als <span class="m">x → −∞</span>; de limiet als <span class="m">lim<sub>x→−∞</sub> f(x)</span>.</li>
</ul>`,
`<p>Determining the <b>behaviour at infinity of a function</b> means checking what happens to the function values as the inputs go to plus or minus infinity. You write the behaviour at infinity as a <b>limit</b>.</p>
<ul style="margin-bottom:0">
  <li>Inputs going to plus infinity: <span class="m">x → +∞</span>; the limit is <span class="m">lim<sub>x→+∞</sub> f(x)</span>.</li>
  <li>Inputs going to minus infinity: <span class="m">x → −∞</span>; the limit is <span class="m">lim<sub>x→−∞</sub> f(x)</span>.</li>
</ul>`) },

    { type:"warn", title: T("Handige vuistregel","Handy rule of thumb"), html: T(
`<p style="margin-bottom:0">Voor een veeltermfunctie wordt het gedrag op oneindig volledig bepaald door de <b>hoogstegraadsterm</b>. Met graad <span class="m">n</span> en leidende coëfficiënt <span class="m">a<sub>n</sub></span>:</p>
<table class="grid" style="margin-bottom:0">
  <tr><th></th><th>lim<sub>x→−∞</sub></th><th>lim<sub>x→+∞</sub></th></tr>
  <tr><th>n even, a<sub>n</sub> &gt; 0</th><td>+∞</td><td>+∞</td></tr>
  <tr><th>n even, a<sub>n</sub> &lt; 0</th><td>−∞</td><td>−∞</td></tr>
  <tr><th>n oneven, a<sub>n</sub> &gt; 0</th><td>−∞</td><td>+∞</td></tr>
  <tr><th>n oneven, a<sub>n</sub> &lt; 0</th><td>+∞</td><td>−∞</td></tr>
</table>`,
`<p style="margin-bottom:0">For a polynomial function the behaviour at infinity is decided entirely by the <b>highest-degree term</b>. With degree <span class="m">n</span> and leading coefficient <span class="m">a<sub>n</sub></span>:</p>
<table class="grid" style="margin-bottom:0">
  <tr><th></th><th>lim<sub>x→−∞</sub></th><th>lim<sub>x→+∞</sub></th></tr>
  <tr><th>n even, a<sub>n</sub> &gt; 0</th><td>+∞</td><td>+∞</td></tr>
  <tr><th>n even, a<sub>n</sub> &lt; 0</th><td>−∞</td><td>−∞</td></tr>
  <tr><th>n odd, a<sub>n</sub> &gt; 0</th><td>−∞</td><td>+∞</td></tr>
  <tr><th>n odd, a<sub>n</sub> &lt; 0</th><td>+∞</td><td>−∞</td></tr>
</table>`) },

    { type:"exercises", title: T("Startoefening (boek p. 35)","Start exercise (book p. 35)"), from:"11A" },

    { type:"plain", html: T(`<h2>12 · Kenmerken van een veeltermfunctie</h2>`, `<h2>12 · Characteristics of a polynomial function</h2>`) },

    { type:"example", title: T("Volledig onderzoek — f(x) = −x³ + 3x² − x − 1","Full study — f(x) = −x³ + 3x² − x − 1"), html: T(
`<table class="grid">
  <tr><th style="width:26%">domein</th><td><span class="m">dom f = ℝ</span></td></tr>
  <tr><th>bereik</th><td><span class="m">ber f = ℝ</span></td></tr>
  <tr><th>symmetrie</th><td>De exponenten van <span class="m">x</span> zijn zowel even als oneven → <b>niet even en niet oneven</b>.<br>
    Algebraïsch: <span class="m">f(−x) = x<sup>3</sup> + 3x<sup>2</sup> + x − 1</span>, dus <span class="m">f(−x) ≠ f(x)</span> en <span class="m">f(−x) ≠ −f(x)</span>.</td></tr>
  <tr><th>nulwaarden</th><td>Op 0,01 nk.: <span class="m">−0,41</span>; <span class="m">1</span> en <span class="m">2,41</span>.<br>
    Exact: <span class="m">−x<sup>3</sup> + 3x<sup>2</sup> − x − 1 = 0 ⟺ (x − 1)(−x<sup>2</sup> + 2x + 1) = 0</span><br>
    <span class="m">⟺ x = 1 ∨ x = 1 + √2 ∨ x = 1 − √2</span></td></tr>
  <tr><th>snijpunten x-as</th><td><span class="m">(1 − √2 , 0)</span>, <span class="m">(1 , 0)</span> en <span class="m">(1 + √2 , 0)</span></td></tr>
  <tr><th>snijpunt y-as</th><td><span class="m">(0 , −1)</span></td></tr>
  <tr><th>tekenschema</th><td><pre class="long" style="margin:0">   x   │  1−√2       1      1+√2
 ──────┼──────────────────────────────
  f(x) │  +   0   −   0   +   0   −</pre></td></tr>
  <tr><th>verloopschema</th><td><pre class="long" style="margin:0">   x   │    0,18          1,82
 ──────┼────────────────────────────────
  f(x) │ ↘  −1,09    ↗   1,09    ↘
       │     min          max</pre></td></tr>
  <tr><th>gedrag op oneindig</th><td><span class="m">lim<sub>x→−∞</sub> f(x) = +∞</span> &nbsp; en &nbsp; <span class="m">lim<sub>x→+∞</sub> f(x) = −∞</span></td></tr>
</table>`,
`<table class="grid">
  <tr><th style="width:26%">domain</th><td><span class="m">dom f = ℝ</span></td></tr>
  <tr><th>range</th><td><span class="m">ber f = ℝ</span></td></tr>
  <tr><th>symmetry</th><td>The exponents of <span class="m">x</span> are both even and odd → <b>neither even nor odd</b>.<br>
    Algebraically: <span class="m">f(−x) = x<sup>3</sup> + 3x<sup>2</sup> + x − 1</span>, so <span class="m">f(−x) ≠ f(x)</span> and <span class="m">f(−x) ≠ −f(x)</span>.</td></tr>
  <tr><th>zeros</th><td>To 0.01: <span class="m">−0.41</span>, <span class="m">1</span> and <span class="m">2.41</span>.<br>
    Exactly: <span class="m">−x<sup>3</sup> + 3x<sup>2</sup> − x − 1 = 0 ⟺ (x − 1)(−x<sup>2</sup> + 2x + 1) = 0</span><br>
    <span class="m">⟺ x = 1 ∨ x = 1 + √2 ∨ x = 1 − √2</span></td></tr>
  <tr><th>x-axis intersections</th><td><span class="m">(1 − √2 , 0)</span>, <span class="m">(1 , 0)</span> and <span class="m">(1 + √2 , 0)</span></td></tr>
  <tr><th>y-axis intersection</th><td><span class="m">(0 , −1)</span></td></tr>
  <tr><th>sign chart</th><td><pre class="long" style="margin:0">   x   │  1−√2       1      1+√2
 ──────┼──────────────────────────────
  f(x) │  +   0   −   0   +   0   −</pre></td></tr>
  <tr><th>variation chart</th><td><pre class="long" style="margin:0">   x   │    0.18          1.82
 ──────┼────────────────────────────────
  f(x) │ ↘  −1.09    ↗   1.09    ↘
       │     min          max</pre></td></tr>
  <tr><th>behaviour at infinity</th><td><span class="m">lim<sub>x→−∞</sub> f(x) = +∞</span> &nbsp; and &nbsp; <span class="m">lim<sub>x→+∞</sub> f(x) = −∞</span></td></tr>
</table>`) },

    { type:"steps", title: T("Checklist — de kenmerken, in deze volgorde","Checklist — the characteristics, in this order"), html: T(
`<ol style="margin-bottom:0">
  <li><b>Domein</b> — voor een veeltermfunctie altijd <span class="m">ℝ</span>.</li>
  <li><b>Symmetrie</b> — kijk naar de exponenten, of bereken <span class="m">f(−x)</span>.</li>
  <li><b>Nulwaarden</b> — ontbind in factoren; lukt dat niet, gebruik ICT.</li>
  <li><b>Snijpunten met de assen</b> — x-as via de nulwaarden, y-as via <span class="m">f(0)</span>.</li>
  <li><b>Tekenschema</b> — met de multipliciteiten.</li>
  <li><b>Extrema</b> — met ICT; vermeld relatief of absoluut.</li>
  <li><b>Verloopschema</b> — stijgen/dalen tussen de extrema.</li>
  <li><b>Bereik</b> — lees af uit het verloopschema en het gedrag op oneindig.</li>
  <li><b>Gedrag op oneindig</b> — de twee limieten.</li>
</ol>`,
`<ol style="margin-bottom:0">
  <li><b>Domain</b> — for a polynomial function always <span class="m">ℝ</span>.</li>
  <li><b>Symmetry</b> — look at the exponents, or compute <span class="m">f(−x)</span>.</li>
  <li><b>Zeros</b> — factor; if that fails, use ICT.</li>
  <li><b>Axis intersections</b> — x-axis from the zeros, y-axis from <span class="m">f(0)</span>.</li>
  <li><b>Sign chart</b> — with the multiplicities.</li>
  <li><b>Extrema</b> — with ICT; say relative or absolute.</li>
  <li><b>Variation chart</b> — increasing/decreasing between the extrema.</li>
  <li><b>Range</b> — read off from the variation chart and the behaviour at infinity.</li>
  <li><b>Behaviour at infinity</b> — the two limits.</li>
</ol>`) },

    { type:"plain", html: T(`<h2>13 · Voorschrift van een veeltermfunctie opstellen</h2>`, `<h2>13 · Setting up the rule of a polynomial function</h2>`) },

    { type:"example", title: T("Voorbeeld — de doos zonder deksel","Worked example — the box without a lid"), html: T(
`<p>Van een rechthoekig stuk karton van <span class="m">20 cm × 10 cm</span> maak je een doos zonder deksel, door uit elke hoek een vierkantje weg te knippen en de randen op te plooien. De inhoud hangt af van de grootte van die vierkantjes.</p>
<p>Stel <span class="m">x</span> = de zijde van het weggesneden vierkantje (in cm).</p>
<div class="eq">inhoud = oppervlakte grondvlak · hoogte = lengte · breedte · hoogte</div>
<p>Na het wegknippen is de lengte <span class="m">20 − 2x</span>, de breedte <span class="m">10 − 2x</span> en de hoogte <span class="m">x</span>:</p>
<div class="eq"><span class="m">f(x) = (20 − 2x)(10 − 2x)x = 4x<sup>3</sup> − 60x<sup>2</sup> + 200x</span></div>
<p style="margin-bottom:0">Zinvol domein: <span class="m">0 &lt; x &lt; 5</span> (anders blijft er geen bodem over).</p>`,
`<p>From a rectangular piece of card of <span class="m">20 cm × 10 cm</span> you make a box without a lid, by cutting a small square out of each corner and folding up the edges. The volume depends on the size of those squares.</p>
<p>Let <span class="m">x</span> = the side of the cut-out square (in cm).</p>
<div class="eq">volume = base area · height = length · width · height</div>
<p>After cutting, the length is <span class="m">20 − 2x</span>, the width <span class="m">10 − 2x</span> and the height <span class="m">x</span>:</p>
<div class="eq"><span class="m">f(x) = (20 − 2x)(10 − 2x)x = 4x<sup>3</sup> − 60x<sup>2</sup> + 200x</span></div>
<p style="margin-bottom:0">Meaningful domain: <span class="m">0 &lt; x &lt; 5</span> (otherwise no base is left).</p>`) },

    { type:"warn", title: T("Valkuilen op een toets","Exam traps"), html: T(
`<ul>
  <li><b>Een extremum is een y-waarde.</b> ‘Het maximum is 1,09’ — <i>bereikt in</i> <span class="m">x = 1,82</span>.</li>
  <li><b>Relatief of absoluut?</b> Een functie van <b>oneven</b> graad heeft <b>nooit</b> absolute extrema (ze gaat naar <span class="m">±∞</span>). Bij <b>even</b> graad is er altijd precies één van de twee.</li>
  <li><b>Even/oneven:</b> een constante term <span class="m">≠ 0</span> sluit ‘oneven’ meteen uit.</li>
  <li><b>Vergeet het zinvolle domein niet</b> bij vraagstukken: een lengte is positief.</li>
  <li>Bij ICT-antwoorden: rond af <b>zoals gevraagd</b> (meestal 0,01) en schrijf ‘op 0,01 nk.’ erbij.</li>
</ul>`,
`<ul>
  <li><b>An extremum is a y-value.</b> "The maximum is 1.09" — <i>reached at</i> <span class="m">x = 1.82</span>.</li>
  <li><b>Relative or absolute?</b> A function of <b>odd</b> degree <b>never</b> has absolute extrema (it runs to <span class="m">±∞</span>). For <b>even</b> degree there is always exactly one of the two.</li>
  <li><b>Even/odd:</b> a constant term <span class="m">≠ 0</span> rules out "odd" immediately.</li>
  <li><b>Don't forget the meaningful domain</b> in word problems: a length is positive.</li>
  <li>For ICT answers: round <b>as asked</b> (usually to 0.01) and say so.</li>
</ul>`) },

    { type:"exercises", title: T("Startoefeningen (boek p. 37)","Start exercises (book p. 37)"), from:"12" }
  ]
});
