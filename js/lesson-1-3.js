/* 1.3 — book pages 24–27 */
LESSONS.push({
  id: "1.3", code: "1.3", chapter: 1, pages: "24 – 27",
  title: T("Nulwaarden en tekenschema van veeltermfuncties", "Zeros and sign chart of polynomial functions"),
  lede: T("Hier betaalt het ontbinden uit 1.2 zich uit. Zodra je de veelterm als product van factoren hebt, lees je de nulwaarden meteen af — en met de multipliciteit erbij weet je ook precies hoe het teken zich rond elke nulwaarde gedraagt.",
          "This is where the factoring from 1.2 pays off. Once the polynomial is a product of factors you can read the zeros straight off — and with the multiplicity you also know exactly how the sign behaves around each zero."),

  checklist: [
    T("Ik kan de nulwaarden van een veeltermfunctie algebraïsch berekenen","I can compute the zeros of a polynomial function algebraically"),
    T("Ik kan de multipliciteit van een nulwaarde bepalen","I can give the multiplicity of a zero"),
    T("Ik weet dat het teken wisselt bij oneven multipliciteit en gelijk blijft bij even multipliciteit","I know the sign switches at odd multiplicity and stays the same at even multiplicity"),
    T("Ik kan een tekenschema opstellen door de factoren apart te onderzoeken","I can build a sign chart by studying each factor separately"),
    T("Ik kan het tekenschema sneller opstellen met de verkorte methode","I can build the sign chart faster with the short method"),
    T("Ik kan de nulwaarden en het tekenschema met ICT van de grafiek aflezen","I can read the zeros and the sign chart off a graph with ICT")
  ],

  blocks: [
    { type:"plain", html: T(`<h2>6 · Nulwaarden</h2>`, `<h2>6 · Zeros</h2>`) },

    { type:"text", html: T(
`<p>Om de nulwaarden van een veeltermfunctie algebraïsch te berekenen, stel je <span class="m">f(x) = 0</span>. Je ontbindt de veelterm indien mogelijk in factoren van de eerste en/of tweede graad. Elke <span class="m">x</span>-waarde waarvoor één van de factoren nul wordt, is een <b>nulwaarde</b> van de veeltermfunctie.</p>`,
`<p>To compute the zeros of a polynomial function algebraically you set <span class="m">f(x) = 0</span>. Factor the polynomial, where possible, into factors of the first and/or second degree. Every <span class="m">x</span>-value that makes one of the factors zero is a <b>zero</b> of the polynomial function.</p>`) },

    { type:"example", title: T("Voorbeeld — f(x) = x³ + 2x² − 5x − 6","Worked example — f(x) = x³ + 2x² − 5x − 6"), html: T(
`<p>Ontbind eerst (kandidaten: delers van 6). <span class="m">f(−1) = −1 + 2 + 5 − 6 = 0</span>, dus <span class="m">x + 1</span> is een deler.</p>
<div class="eq"><span class="m">x<sup>3</sup> + 2x<sup>2</sup> − 5x − 6 = 0 ⟺ (x + 1)(x<sup>2</sup> + x − 6) = 0</span></div>
<p>Stel elke factor gelijk aan nul:</p>
<div class="eq"><span class="m">⟺ x + 1 = 0 ∨ x<sup>2</sup> + x − 6 = 0</span></div>
<div class="eq"><span class="m">⟺ x = −1 ∨ D = 25, x<sub>1,2</sub> = </span>${FR('−1 ± 5','2')}<span class="m"> = −3 of 2</span></div>
<p style="margin-bottom:0">De nulwaarden van de derdegraadsfunctie <span class="m">f</span> zijn <b>−3, −1 en 2</b>.</p>`,
`<p>Factor first (candidates: divisors of 6). <span class="m">f(−1) = −1 + 2 + 5 − 6 = 0</span>, so <span class="m">x + 1</span> is a divisor.</p>
<div class="eq"><span class="m">x<sup>3</sup> + 2x<sup>2</sup> − 5x − 6 = 0 ⟺ (x + 1)(x<sup>2</sup> + x − 6) = 0</span></div>
<p>Set every factor equal to zero:</p>
<div class="eq"><span class="m">⟺ x + 1 = 0 ∨ x<sup>2</sup> + x − 6 = 0</span></div>
<div class="eq"><span class="m">⟺ x = −1 ∨ D = 25, x<sub>1,2</sub> = </span>${FR('−1 ± 5','2')}<span class="m"> = −3 or 2</span></div>
<p style="margin-bottom:0">The zeros of the third-degree function <span class="m">f</span> are <b>−3, −1 and 2</b>.</p>`) },

    { type:"example", title: T("Voorbeeld — een nulwaarde die twee keer voorkomt","Worked example — a zero that occurs twice"), html: T(
`<p><span class="m">g(x) = x<sup>3</sup> − 3x<sup>2</sup> − 9x + 27</span></p>
<div class="eq"><span class="m">g(x) = 0 ⟺ (x + 3)(x<sup>2</sup> − 6x + 9) = 0 ⟺ (x + 3)(x − 3)<sup>2</sup> = 0 ⟺ x = −3 ∨ x = 3 ∨ x = 3</span></div>
<p>De nulwaarde <span class="m">−3</span> komt maar <b>één</b> keer voor → een <b>enkelvoudige nulwaarde</b> met <b>multipliciteit 1</b>.</p>
<p>De nulwaarde <span class="m">3</span> komt <b>twee</b> keer voor → een <b>meervoudige nulwaarde</b> met <b>multipliciteit 2</b>.</p>
<p>Nog een: <span class="m">h(x) = −x<sup>4</sup> + 8x<sup>3</sup> − 18x<sup>2</sup> + 27 = −(x + 1)(x − 3)<sup>3</sup></span><br>
<span class="m">−1</span> heeft multipliciteit 1, <span class="m">3</span> heeft multipliciteit <b>3</b>.</p>`,
`<p><span class="m">g(x) = x<sup>3</sup> − 3x<sup>2</sup> − 9x + 27</span></p>
<div class="eq"><span class="m">g(x) = 0 ⟺ (x + 3)(x<sup>2</sup> − 6x + 9) = 0 ⟺ (x + 3)(x − 3)<sup>2</sup> = 0 ⟺ x = −3 ∨ x = 3 ∨ x = 3</span></div>
<p>The zero <span class="m">−3</span> occurs only <b>once</b> → a <b>simple zero</b> with <b>multiplicity 1</b>.</p>
<p>The zero <span class="m">3</span> occurs <b>twice</b> → a <b>multiple zero</b> with <b>multiplicity 2</b>.</p>
<p>Another one: <span class="m">h(x) = −x<sup>4</sup> + 8x<sup>3</sup> − 18x<sup>2</sup> + 27 = −(x + 1)(x − 3)<sup>3</sup></span><br>
<span class="m">−1</span> has multiplicity 1, <span class="m">3</span> has multiplicity <b>3</b>.</p>`) },

    { type:"concept", title: T("Begrippen — nulwaarde · multipliciteit","Definitions — zero · multiplicity"), html: T(
`<p><span class="m">a ∈ ℝ</span> is een <b>nulwaarde</b> van een veeltermfunctie <span class="m">f ⟺ f(a) = 0</span>.</p>
<p><span class="m">a</span> is een <b>enkelvoudige nulwaarde met multipliciteit 1</b> als <span class="m">a</span> één keer voorkomt als nulwaarde.</p>
<p style="margin-bottom:0"><span class="m">a</span> is een <b>meervoudige nulwaarde met multipliciteit k</b> als <span class="m">a</span> <span class="m">k</span> keer voorkomt als nulwaarde.</p>`,
`<p><span class="m">a ∈ ℝ</span> is a <b>zero</b> of a polynomial function <span class="m">f ⟺ f(a) = 0</span>.</p>
<p><span class="m">a</span> is a <b>simple zero with multiplicity 1</b> if <span class="m">a</span> occurs once as a zero.</p>
<p style="margin-bottom:0"><span class="m">a</span> is a <b>multiple zero with multiplicity k</b> if <span class="m">a</span> occurs <span class="m">k</span> times as a zero.</p>`) },

    { type:"exercises", title: T("Startoefening (boek p. 24)","Start exercise (book p. 24)"), from:"6A" },

    { type:"plain", html: T(`<h2>7 · Tekenschema</h2>`, `<h2>7 · Sign chart</h2>`) },

    { type:"text", html: T(
`<h3>Tekenschema vanuit het functievoorschrift</h3>
<p>Schrijf het voorschrift als een <b>product</b> van eerstegraadsfunctie(s) en hoogstens één tweedegraadsfunctie. Bepaal van elke factor het tekenschema. Het teken van de veeltermfunctie is dan het <b>product van de tekens</b> van de afzonderlijke factoren.</p>`,
`<h3>Sign chart from the function rule</h3>
<p>Write the rule as a <b>product</b> of first-degree function(s) and at most one second-degree function. Find the sign chart of each factor. The sign of the polynomial function is then the <b>product of the signs</b> of the separate factors.</p>`) },

    { type:"example", title: T("Voorbeeld — f(x) = x³ + 2x² − 5x − 6","Worked example — f(x) = x³ + 2x² − 5x − 6"), html: T(
`<p>Ontbind: <span class="m">f(x) = (x + 1)(x<sup>2</sup> + x − 6)</span>. Bepaal het tekenschema van elke factor apart:</p>
<table class="grid">
  <tr><th><span class="m">f<sub>1</sub>(x) = x + 1</span></th><th><span class="m">f<sub>2</sub>(x) = x<sup>2</sup> + x − 6</span></th></tr>
  <tr><td>Nulwaarde: <span class="m">−1</span><br>Teken: <b>− 0 +</b></td>
      <td>Nulwaarden: <span class="m">−3</span> en <span class="m">2</span><br>Teken: <b>+ 0 − 0 +</b></td></tr>
</table>
<p>Breng beide schema's samen in één schema, met alle nulwaarden van klein naar groot:</p>
<pre class="long">   x       │      −3        −1         2
 ──────────┼──────────────────────────────────
  x + 1    │  −    −    −    0    +    +    +
  x² + x−6 │  +    0    −    −    −    0    +
 ──────────┼──────────────────────────────────
  f(x)     │  −    0    +    0    −    0    +</pre>
<p style="margin-bottom:0">Omdat <span class="m">f(x) = f<sub>1</sub>(x) · f<sub>2</sub>(x)</span> vind je de onderste rij door de tekens erboven te <b>vermenigvuldigen</b>.</p>`,
`<p>Factor: <span class="m">f(x) = (x + 1)(x<sup>2</sup> + x − 6)</span>. Find the sign chart of each factor separately:</p>
<table class="grid">
  <tr><th><span class="m">f<sub>1</sub>(x) = x + 1</span></th><th><span class="m">f<sub>2</sub>(x) = x<sup>2</sup> + x − 6</span></th></tr>
  <tr><td>Zero: <span class="m">−1</span><br>Sign: <b>− 0 +</b></td>
      <td>Zeros: <span class="m">−3</span> and <span class="m">2</span><br>Sign: <b>+ 0 − 0 +</b></td></tr>
</table>
<p>Merge both charts into one, with all zeros from small to large:</p>
<pre class="long">   x       │      −3        −1         2
 ──────────┼──────────────────────────────────
  x + 1    │  −    −    −    0    +    +    +
  x² + x−6 │  +    0    −    −    −    0    +
 ──────────┼──────────────────────────────────
  f(x)     │  −    0    +    0    −    0    +</pre>
<p style="margin-bottom:0">Because <span class="m">f(x) = f<sub>1</sub>(x) · f<sub>2</sub>(x)</span> you get the bottom row by <b>multiplying</b> the signs above it.</p>`) },

    { type:"theorem", title: T("Vaststelling — multipliciteit en teken","Key fact — multiplicity and sign"), html: T(
`<ul style="margin-bottom:0">
  <li>Rond een nulwaarde met <b>oneven</b> multipliciteit <b>wisselt</b> het teken.</li>
  <li>Rond een nulwaarde met <b>even</b> multipliciteit <b>blijft</b> het teken hetzelfde.</li>
</ul>`,
`<ul style="margin-bottom:0">
  <li>Around a zero with <b>odd</b> multiplicity the sign <b>switches</b>.</li>
  <li>Around a zero with <b>even</b> multiplicity the sign <b>stays the same</b>.</li>
</ul>`) },

    { type:"example", title: T("Waarom — twee voorbeelden","Why — two examples"), html: T(
`<p><span class="m">f(x) = x<sup>3</sup> − 3x<sup>2</sup> − 9x + 27 = (x + 3)(x − 3)<sup>2</sup></span> &nbsp;·&nbsp; nulwaarde 3 heeft multipliciteit 2 (even):</p>
<pre class="long">   x       │      −3         3
 ──────────┼────────────────────────
  x + 3    │  −    0    +    +    +
  (x − 3)² │  +    +    +    0    +
 ──────────┼────────────────────────
  f(x)     │  −    0    +    0    +      ← teken blijft gelijk rond 3</pre>
<p><span class="m">f(x) = −x<sup>4</sup> + 8x<sup>3</sup> − 18x<sup>2</sup> + 27 = −(x + 1)(x − 3)<sup>3</sup></span> &nbsp;·&nbsp; nulwaarde 3 heeft multipliciteit 3 (oneven):</p>
<pre class="long">   x        │      −1         3
 ───────────┼────────────────────────
  −(x + 1)  │  +    0    −    −    −
  (x − 3)³  │  −    −    −    0    +
 ───────────┼────────────────────────
  f(x)      │  −    0    +    0    −      ← teken wisselt rond 3</pre>`,
`<p><span class="m">f(x) = x<sup>3</sup> − 3x<sup>2</sup> − 9x + 27 = (x + 3)(x − 3)<sup>2</sup></span> &nbsp;·&nbsp; the zero 3 has multiplicity 2 (even):</p>
<pre class="long">   x       │      −3         3
 ──────────┼────────────────────────
  x + 3    │  −    0    +    +    +
  (x − 3)² │  +    +    +    0    +
 ──────────┼────────────────────────
  f(x)     │  −    0    +    0    +      ← sign stays the same at 3</pre>
<p><span class="m">f(x) = −x<sup>4</sup> + 8x<sup>3</sup> − 18x<sup>2</sup> + 27 = −(x + 1)(x − 3)<sup>3</sup></span> &nbsp;·&nbsp; the zero 3 has multiplicity 3 (odd):</p>
<pre class="long">   x        │      −1         3
 ───────────┼────────────────────────
  −(x + 1)  │  +    0    −    −    −
  (x − 3)³  │  −    −    −    0    +
 ───────────┼────────────────────────
  f(x)      │  −    0    +    0    −      ← sign switches at 3</pre>`) },

    { type:"steps", title: T("Verkorte methode voor het tekenschema","Short method for the sign chart"), html: T(
`<ol>
  <li>Bepaal de nulwaarden <b>en hun multipliciteit</b>, en rangschik ze van klein naar groot.</li>
  <li>Het teken <b>rechts van de grootste nulwaarde</b> is het teken van de <b>hoogstegraadsterm</b> van de veelterm in zijn uitgewerkte vorm.</li>
  <li>Loop van rechts naar links: het teken <b>wisselt</b> bij oneven multipliciteit en <b>blijft gelijk</b> bij even multipliciteit.</li>
</ol>`,
`<ol>
  <li>Find the zeros <b>and their multiplicity</b>, and order them from small to large.</li>
  <li>The sign <b>to the right of the largest zero</b> is the sign of the <b>highest-degree term</b> of the polynomial in its expanded form.</li>
  <li>Walk from right to left: the sign <b>switches</b> at odd multiplicity and <b>stays the same</b> at even multiplicity.</li>
</ol>`) },

    { type:"example", title: T("Verkorte methode — f(x) = −x³ + 9x² − 24x + 20","Short method — f(x) = −x³ + 9x² − 24x + 20"), html: T(
`<p><span class="m">f(x) = −(x − 2)<sup>2</sup>(x − 5)</span> → nulwaarden: <b>2</b> met multipliciteit 2 en <b>5</b> met multipliciteit 1.</p>
<p>De hoogstegraadsterm is <span class="m">−x<sup>3</sup></span> → rechts van 5 staat een <b>−</b>.</p>
<p>Van rechts naar links: bij 5 (oneven) <b>wisselt</b> het teken → <b>+</b>. Bij 2 (even) <b>blijft</b> het <b>+</b>.</p>
<pre class="long">   x   │      2        5
 ──────┼──────────────────────
  f(x) │  +   0   +    0   −</pre>`,
`<p><span class="m">f(x) = −(x − 2)<sup>2</sup>(x − 5)</span> → zeros: <b>2</b> with multiplicity 2 and <b>5</b> with multiplicity 1.</p>
<p>The highest-degree term is <span class="m">−x<sup>3</sup></span> → to the right of 5 there is a <b>−</b>.</p>
<p>From right to left: at 5 (odd) the sign <b>switches</b> → <b>+</b>. At 2 (even) it <b>stays</b> <b>+</b>.</p>
<pre class="long">   x   │      2        5
 ──────┼──────────────────────
  f(x) │  +   0   +    0   −</pre>`) },

    { type:"text", html: T(
`<h3>Tekenschema vanuit de grafiek</h3>
<p>Met ICT teken je de grafiek en bepaal je de nulwaarden. De ligging van de grafiek t.o.v. de x-as bepaalt of de functiewaarden strikt positief, strikt negatief of nul zijn. Dit gebruik je wanneer de nulwaarden niet exact af te lezen zijn.</p>
<p>Bv. <span class="m">f(x) = x<sup>5</sup> − 3x<sup>3</sup> + x − 1</span> heeft nulwaarden (op 0,01 nk.) <span class="m">−1,51</span>; <span class="m">−1</span> en <span class="m">1,69</span>:</p>
<pre class="long">   x   │     −1,51        −1        1,69
 ──────┼──────────────────────────────────────
  f(x) │  −    0    +     0    −     0    +</pre>`,
`<h3>Sign chart from the graph</h3>
<p>With ICT you draw the graph and find the zeros. Where the graph lies relative to the x-axis tells you whether the function values are strictly positive, strictly negative or zero. Use this when the zeros cannot be read off exactly.</p>
<p>E.g. <span class="m">f(x) = x<sup>5</sup> − 3x<sup>3</sup> + x − 1</span> has zeros (to 0.01) <span class="m">−1.51</span>, <span class="m">−1</span> and <span class="m">1.69</span>:</p>
<pre class="long">   x   │     −1.51        −1        1.69
 ──────┼──────────────────────────────────────
  f(x) │  −    0    +     0    −     0    +</pre>`) },

    { type:"warn", title: T("Valkuilen op een toets","Exam traps"), html: T(
`<ul>
  <li><b>Vergeet de multipliciteit niet.</b> Bij <span class="m">(x − 3)<sup>2</sup></span> is 3 één nulwaarde met multipliciteit 2, geen twee aparte nulwaarden.</li>
  <li><b>Rangschik van klein naar groot</b> in het schema. Een verkeerde volgorde geeft een verkeerd tekenschema.</li>
  <li><b>Het teken rechts</b> komt van de hoogstegraadsterm van de <b>uitgewerkte</b> vorm, niet van de eerste factor.</li>
  <li>Een min-teken vóór de haakjes (zoals <span class="m">−(x + 1)(x − 3)<sup>3</sup></span>) telt mee — het draait alle tekens om.</li>
  <li>Controleer achteraf met één invulwaarde, bv. <span class="m">f(0)</span>.</li>
</ul>`,
`<ul>
  <li><b>Don't forget the multiplicity.</b> In <span class="m">(x − 3)<sup>2</sup></span>, 3 is one zero with multiplicity 2, not two separate zeros.</li>
  <li><b>Order from small to large</b> in the chart. The wrong order gives the wrong sign chart.</li>
  <li><b>The sign on the right</b> comes from the highest-degree term of the <b>expanded</b> form, not from the first factor.</li>
  <li>A minus sign in front of the brackets (like <span class="m">−(x + 1)(x − 3)<sup>3</sup></span>) counts — it flips every sign.</li>
  <li>Check afterwards with one substituted value, e.g. <span class="m">f(0)</span>.</li>
</ul>`) },

    { type:"exercises", title: T("Startoefeningen (boek p. 27)","Start exercises (book p. 27)"), from:"7" }
  ]
});
