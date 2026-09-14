/* Voorkennis — book pages 12–15 */
LESSONS.push({
  id: "prior", code: "0", chapter: 1, pages: "12 – 15",
  title: T("Voorkennis", "Prior knowledge"),
  lede: T("Voor hoofdstuk 1 begint, herhaalt het boek de theorie die je nodig hebt. Zit hier iets niet vast, werk dat dan éérst weg — het hele boek bouwt hierop verder.",
          "Before chapter 1 starts, the book repeats the theory you need. If any of this feels shaky, fix it first — the whole book is built on top of it."),

  checklist: [
    T("Ik kan zien of een grafiek een functie voorstelt of niet (verticale-rechtetest)",
      "I can say whether a graph is a function or not (vertical line test)"),
    T("Ik ken de begrippen domein en bereik en kan ze aflezen op een grafiek",
      "I know the words domain and range and can read them off a graph"),
    T("Ik ken de grafiek, de nulwaarden en het tekenschema van een constante functie",
      "I know the graph, zeros and sign chart of a constant function"),
    T("Ik ken de grafiek, de nulwaarde, het tekenschema en het verloopschema van een eerstegraadsfunctie",
      "I know the graph, zero, sign chart and variation chart of a first-degree function"),
    T("Ik ken de parabool, de top, de nulwaarden (discriminant) en de schema's",
      "I know the parabola, its vertex, its zeros (discriminant) and its charts"),
    T("Ik kan uitleggen wat een relatief maximum en een relatief minimum zijn",
      "I can explain what a relative maximum and a relative minimum are")
  ],

  blocks: [
    { type:"concept",
      title: T("Functie · Reële functie","Function · Real function"),
      html: T(
`<p>Een <b>functie</b> geeft het verband weer tussen een onafhankelijke veranderlijke <span class="m">x</span> en een afhankelijke veranderlijke <span class="m">y</span>. Daarbij hoort bij elke waarde van <span class="m">x</span> <b>hoogstens één</b> waarde van <span class="m">y</span>.</p>
<p>Een <b>reële functie</b> is een functie waarbij zowel de onafhankelijke als de afhankelijke veranderlijke reële getallen zijn. Je benoemt ze met een kleine letter: <span class="m">f, g, h, …</span></p>
<dl class="kv">
  <dt>x</dt><dd>de invoerwaarde, de x-waarde of het argument</dd>
  <dt>f(x)</dt><dd>de functiewaarde, de y-waarde of het beeld</dd>
</dl>
<p><b>Grafiektest:</b> snijdt een verticale rechte de grafiek meer dan één keer, dan is het <i>geen</i> functie.</p>`,
`<p>A <b>function</b> links an independent variable <span class="m">x</span> to a dependent variable <span class="m">y</span>, so that <b>every</b> value of <span class="m">x</span> gives <b>at most one</b> value of <span class="m">y</span>.</p>
<p>A <b>real function</b> is a function where both variables are real numbers. You name it with a small letter: <span class="m">f, g, h, …</span></p>
<dl class="kv">
  <dt>x</dt><dd>input value · <i>invoerwaarde, x-waarde, argument</i></dd>
  <dt>f(x)</dt><dd>function value · <i>functiewaarde, y-waarde, beeld</i></dd>
</dl>
<p><b>Graph test:</b> if a vertical line cuts the graph more than once, it is <i>not</i> a function.</p>`) },

    { type:"concept",
      title: T("Domein en bereik","Domain and range"),
      html: T(
`<p>Het <b>domein</b> (<span class="m">dom f</span>) is de verzameling van alle invoerwaarden waarvoor een functiewaarde bestaat.</p>
<p>Het <b>bereik</b> (<span class="m">ber f</span>) is de verzameling van alle functiewaarden van die functie.</p>`,
`<p><b>Domain</b> (<i>domein</i>, <span class="m">dom f</span>) = the set of all input values for which a function value exists.</p>
<p><b>Range</b> (<i>bereik</i>, <span class="m">ber f</span>) = the set of all function values the function actually reaches.</p>`) },

    { type:"plain", html: T(`<h3>De drie functies die je uit het hoofd moet kennen</h3>`,
                            `<h3>The three functions you must know by heart</h3>`) },

    { type:"concept",
      title: T("Constante functie  f(x) = a","Constant function  f(x) = a"),
      html: T(
`<div class="eq"><span class="m">f: x ↦ f(x) = a</span>&nbsp;&nbsp;met <span class="m">a ∈ ℝ</span></div>
<table class="grid">
  <tr><th>Domein en bereik</th><td><span class="m">dom f = ℝ</span> en <span class="m">ber f = {a}</span></td></tr>
  <tr><th>Grafiek</th><td>Een horizontale rechte door het punt <span class="m">(0, a)</span>.</td></tr>
  <tr><th>Nulwaarden</th><td>Is <span class="m">a ≠ 0</span>: geen nulwaarde. Is <span class="m">a = 0</span>: elk reëel getal is een nulwaarde.</td></tr>
  <tr><th>Tekenschema</th><td><span class="m">f(x)</span> heeft overal het teken van <span class="m">a</span>.</td></tr>
  <tr><th>Verloop</th><td>Noch strikt stijgend, noch strikt dalend → je noteert <b>geen</b> verloopschema.</td></tr>
</table>`,
`<div class="eq"><span class="m">f: x ↦ f(x) = a</span>&nbsp;&nbsp;with <span class="m">a ∈ ℝ</span></div>
<table class="grid">
  <tr><th>Domain / range</th><td><span class="m">dom f = ℝ</span> and <span class="m">ber f = {a}</span></td></tr>
  <tr><th>Graph</th><td>A horizontal line through the point <span class="m">(0, a)</span>.</td></tr>
  <tr><th>Zeros</th><td>If <span class="m">a ≠ 0</span>: no zeros. If <span class="m">a = 0</span>: every real number is a zero.</td></tr>
  <tr><th>Sign chart</th><td><span class="m">f(x)</span> always has the sign of <span class="m">a</span>.</td></tr>
  <tr><th>Variation</th><td>Neither increasing nor decreasing → you write <b>no</b> variation chart.</td></tr>
</table>`) },

    { type:"concept",
      title: T("Eerstegraadsfunctie  f(x) = ax + b","First-degree function  f(x) = ax + b"),
      html: T(
`<div class="eq"><span class="m">f: x ↦ f(x) = ax + b</span>&nbsp;&nbsp;met <span class="m">a ∈ ℝ<sub>0</sub>, b ∈ ℝ</span></div>
<table class="grid">
  <tr><th>Domein en bereik</th><td><span class="m">dom f = ℝ</span> en <span class="m">ber f = ℝ</span></td></tr>
  <tr><th>Grafiek</th><td>Een schuine rechte <span class="m">y = ax + b</span>, door <span class="m">(0, b)</span>.<br>Is <span class="m">b = 0</span>, dan gaat de rechte door de oorsprong.</td></tr>
  <tr><th>Richtingscoëfficiënt a</th><td><span class="m">a &gt; 0</span> → strikt stijgend ↗ · <span class="m">a &lt; 0</span> → strikt dalend ↘<br>Hoe groter <span class="m">|a|</span>, hoe steiler de rechte.</td></tr>
  <tr><th>Nulwaarde</th><td>Juist <b>één</b>: <span class="m">ax + b = 0 ⟺ x = −</span>${FR('b','a')}</td></tr>
</table>
<p>Tekenschema: het teken van <span class="m">f(x)</span> verandert in <span class="m">x = −</span>${FR('b','a')}. Voor <span class="m">a &gt; 0</span> gaat het <b>− 0 +</b>; voor <span class="m">a &lt; 0</span> gaat het <b>+ 0 −</b>.</p>`,
`<div class="eq"><span class="m">f: x ↦ f(x) = ax + b</span>&nbsp;&nbsp;with <span class="m">a ∈ ℝ<sub>0</sub>, b ∈ ℝ</span></div>
<table class="grid">
  <tr><th>Domain / range</th><td><span class="m">dom f = ℝ</span> and <span class="m">ber f = ℝ</span></td></tr>
  <tr><th>Graph</th><td>A slanted straight line <span class="m">y = ax + b</span>, through <span class="m">(0, b)</span>.<br>If <span class="m">b = 0</span> the line goes through the origin.</td></tr>
  <tr><th>Slope a</th><td><span class="m">a &gt; 0</span> → strictly increasing ↗ · <span class="m">a &lt; 0</span> → strictly decreasing ↘<br>The bigger <span class="m">|a|</span>, the steeper the line.</td></tr>
  <tr><th>Zero</th><td>Exactly <b>one</b>: <span class="m">ax + b = 0 ⟺ x = −</span>${FR('b','a')}</td></tr>
</table>
<p>Sign chart: the sign of <span class="m">f(x)</span> switches at <span class="m">x = −</span>${FR('b','a')}. For <span class="m">a &gt; 0</span> it goes <b>− 0 +</b>; for <span class="m">a &lt; 0</span> it goes <b>+ 0 −</b>.</p>`) },

    { type:"concept",
      title: T("Tweedegraadsfunctie  f(x) = ax² + bx + c","Second-degree function  f(x) = ax² + bx + c"),
      html: T(
`<div class="eq"><span class="m">f: x ↦ f(x) = ax<sup>2</sup> + bx + c</span>&nbsp;&nbsp;met <span class="m">a ∈ ℝ<sub>0</sub>, b, c ∈ ℝ</span></div>
<p>De grafiek is een <b>parabool</b>. Algemene vergelijking <span class="m">y = ax<sup>2</sup> + bx + c</span>; topvergelijking <span class="m">y = a(x − x<sub>T</sub>)<sup>2</sup> + y<sub>T</sub></span>.</p>
<table class="grid">
  <tr><th></th><th>a &gt; 0</th><th>a &lt; 0</th></tr>
  <tr><th>Vorm</th><td>hol ☺ — <b>dalparabool</b></td><td>bol ☹ — <b>bergparabool</b></td></tr>
  <tr><th>Bereik</th><td><span class="m">[y<sub>T</sub>, +∞[</span> — de top is een minimum</td><td><span class="m">]−∞, y<sub>T</sub>]</span> — de top is een maximum</td></tr>
</table>
<p>Hoe groter <span class="m">|a|</span>, hoe <b>smaller</b> de parabool.</p>
<div class="eq">Nulwaarden: los <span class="m">ax<sup>2</sup> + bx + c = 0</span> op &nbsp;&nbsp; <span class="m">D = b<sup>2</sup> − 4ac</span>, &nbsp; <span class="m">x<sub>1,2</sub> = </span>${FR('−b ± √D','2a')}</div>
<ul>
  <li><span class="m">D &gt; 0</span> → twee verschillende nulwaarden <span class="m">x<sub>1</sub> ≠ x<sub>2</sub></span></li>
  <li><span class="m">D = 0</span> → één nulwaarde, en dat is de top: <span class="m">x<sub>1</sub> = x<sub>2</sub> = x<sub>T</sub></span></li>
  <li><span class="m">D &lt; 0</span> → geen nulwaarden; <span class="m">f(x)</span> heeft overal het teken van <span class="m">a</span></li>
</ul>`,
`<div class="eq"><span class="m">f: x ↦ f(x) = ax<sup>2</sup> + bx + c</span>&nbsp;&nbsp;with <span class="m">a ∈ ℝ<sub>0</sub>, b, c ∈ ℝ</span></div>
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
</ul>`) },

    { type:"concept",
      title: T("Extrema van een reële functie","Extrema of a real function"),
      html: T(
`<p>Een <b>relatief maximum</b> is een lokale grootste functiewaarde; een <b>relatief minimum</b> is een lokale kleinste functiewaarde. Samen noem je ze een <b>extremum</b> (extreme waarde).</p>
<p>‘Lokaal’ is het sleutelwoord — je hebt enkel een <i>open interval rond het punt</i> nodig waarop de waarde het grootst (of kleinst) is:</p>
<div class="eq">Als <span class="m">∀x ∈ ]1, 3[ : f(x) ≤ 4</span>, dan is <span class="m">4</span> een relatief maximum van <span class="m">f</span>.</div>
<div class="eq">Als <span class="m">∀x ∈ ]4, 6[ : f(x) ≥ −2</span>, dan is <span class="m">−2</span> een relatief minimum van <span class="m">f</span>.</div>`,
`<p>A <b>relative maximum</b> is a local largest function value; a <b>relative minimum</b> is a local smallest function value. Both together are called an <b>extremum</b>.</p>
<p>"Local" is the key word — you only need an <i>open interval around the point</i> on which the value is largest (or smallest):</p>
<div class="eq">If <span class="m">∀x ∈ ]1, 3[ : f(x) ≤ 4</span>, then <span class="m">4</span> is a relative maximum of <span class="m">f</span>.</div>
<div class="eq">If <span class="m">∀x ∈ ]4, 6[ : f(x) ≥ −2</span>, then <span class="m">−2</span> is a relative minimum of <span class="m">f</span>.</div>`) },

    { type:"warn",
      title: T("Let op","Watch out"),
      html: T(
`<ul>
  <li>Een extremum is een <b>y</b>-waarde, geen <b>x</b>-waarde. ‘Het maximum is 4’, ‘het wordt bereikt in x = 2’.</li>
  <li>Een constante functie heeft <b>geen</b> verloopschema — verzin er geen.</li>
  <li><span class="m">ℝ<sub>0</sub></span> betekent ‘de reële getallen zonder 0’. Daarom is <span class="m">a ≠ 0</span> bij eerste- en tweedegraadsfuncties.</li>
</ul>`,
`<ul>
  <li>An extremum is a <b>y</b>-value, not an <b>x</b>-value. "The maximum is 4", "it is reached at x = 2".</li>
  <li>A constant function has <b>no</b> variation chart — don't invent one.</li>
  <li><span class="m">ℝ<sub>0</sub></span> means "the real numbers without 0". That is why <span class="m">a ≠ 0</span> in first- and second-degree functions.</li>
</ul>`) }
  ]
});
