/* 1.5 — start exercises with fully worked, checked answers (book p. 31, 33, 35, 37) */

EX["9"] = [
{
  num: "9A",
  q: T(
`<p>Bepaal of de grafiek die van een even of oneven functie is, of geen van beide. <i>(De vier grafieken staan in het boek op p. 31.)</i></p>`,
`<p>Decide whether each graph is that of an even function, an odd function, or neither. <i>(The four graphs are in the book on p. 31.)</i></p>`),
  a: T(
`<p><b>Werkwijze:</b> vouw de grafiek in gedachten dubbel over de <b>y-as</b> → valt ze samen, dan is de functie <b>even</b>. Draai ze een halve slag rond de <b>oorsprong</b> → valt ze samen, dan is de functie <b>oneven</b>. Geen van beide → geen van beide.</p>
<p><b>a)</b> De grafiek gaat door de oorsprong en heeft de typische S-vorm met een dal links en een top rechts, spiegelbeeldig rond <span class="m">(0,0)</span> → <b>oneven functie</b>.</p>
<p><b>b)</b> Golvende grafiek met twee gelijke dalen in <span class="m">x = ±3</span> en een top in <span class="m">x = 0</span>, symmetrisch t.o.v. de y-as → <b>even functie</b>.</p>
<p><b>c)</b> Symmetrisch t.o.v. de y-as (top rond <span class="m">y = 3</span>, aan beide kanten steil naar beneden) → <b>even functie</b>.</p>
<p><b>d)</b> Een bergparabool met top <span class="m">(2 , 5)</span>. De symmetrieas is <span class="m">x = 2</span>, niet de y-as, en er is geen symmetrie rond de oorsprong → <b>geen van beide</b>.</p>`,
`<p><b>Method:</b> mentally fold the graph over the <b>y-axis</b> → if it matches, the function is <b>even</b>. Rotate it half a turn about the <b>origin</b> → if it matches, the function is <b>odd</b>. Neither → neither.</p>
<p><b>a)</b> The graph passes through the origin and has the typical S-shape with a trough on the left and a crest on the right, mirrored about <span class="m">(0,0)</span> → <b>odd function</b>.</p>
<p><b>b)</b> Wavy graph with two equal troughs at <span class="m">x = ±3</span> and a crest at <span class="m">x = 0</span>, symmetric about the y-axis → <b>even function</b>.</p>
<p><b>c)</b> Symmetric about the y-axis (crest near <span class="m">y = 3</span>, steeply down on both sides) → <b>even function</b>.</p>
<p><b>d)</b> A downward parabola with vertex <span class="m">(2 , 5)</span>. Its axis of symmetry is <span class="m">x = 2</span>, not the y-axis, and there is no symmetry about the origin → <b>neither</b>.</p>`)
},
{
  num: "9B",
  q: T(
`<p>Bepaal algebraïsch of het voorschrift dat van een even of een oneven functie is, of geen van beide.</p>
<ol type="a">
  <li><span class="m">f(x) = 2x<sup>4</sup> − x<sup>2</sup> − 7</span></li>
  <li><span class="m">f(x) = −x<sup>3</sup> − x</span></li>
  <li><span class="m">f(x) = x<sup>3</sup> − 2x − 3</span></li>
</ol>`,
`<p>Determine algebraically whether the rule is that of an even function, an odd function, or neither.</p>
<ol type="a">
  <li><span class="m">f(x) = 2x<sup>4</sup> − x<sup>2</sup> − 7</span></li>
  <li><span class="m">f(x) = −x<sup>3</sup> − x</span></li>
  <li><span class="m">f(x) = x<sup>3</sup> − 2x − 3</span></li>
</ol>`),
  a: T(
`<p><b>a)</b> <span class="m">f(−x) = 2(−x)<sup>4</sup> − (−x)<sup>2</sup> − 7 = 2x<sup>4</sup> − x<sup>2</sup> − 7 = f(x)</span> → <b>even functie</b>.<br>
(Exponenten 4, 2 en 0 — allemaal even.)</p>
<p><b>b)</b> <span class="m">f(−x) = −(−x)<sup>3</sup> − (−x) = x<sup>3</sup> + x = −(−x<sup>3</sup> − x) = −f(x)</span> → <b>oneven functie</b>.<br>
(Exponenten 3 en 1 — allemaal oneven.)</p>
<p><b>c)</b> <span class="m">f(−x) = (−x)<sup>3</sup> − 2(−x) − 3 = −x<sup>3</sup> + 2x − 3</span><br>
<span class="m">f(x) = x<sup>3</sup> − 2x − 3</span> &nbsp;en&nbsp; <span class="m">−f(x) = −x<sup>3</sup> + 2x + 3</span><br>
<span class="m">f(−x) ≠ f(x)</span> en <span class="m">f(−x) ≠ −f(x)</span> → <b>geen van beide</b>.<br>
(De exponenten 3 en 1 zijn oneven, maar de constante term <span class="m">−3</span> heeft exponent 0 — even. Gemengd dus.)</p>`,
`<p><b>a)</b> <span class="m">f(−x) = 2(−x)<sup>4</sup> − (−x)<sup>2</sup> − 7 = 2x<sup>4</sup> − x<sup>2</sup> − 7 = f(x)</span> → <b>even function</b>.<br>
(Exponents 4, 2 and 0 — all even.)</p>
<p><b>b)</b> <span class="m">f(−x) = −(−x)<sup>3</sup> − (−x) = x<sup>3</sup> + x = −(−x<sup>3</sup> − x) = −f(x)</span> → <b>odd function</b>.<br>
(Exponents 3 and 1 — all odd.)</p>
<p><b>c)</b> <span class="m">f(−x) = (−x)<sup>3</sup> − 2(−x) − 3 = −x<sup>3</sup> + 2x − 3</span><br>
<span class="m">f(x) = x<sup>3</sup> − 2x − 3</span> &nbsp;and&nbsp; <span class="m">−f(x) = −x<sup>3</sup> + 2x + 3</span><br>
<span class="m">f(−x) ≠ f(x)</span> and <span class="m">f(−x) ≠ −f(x)</span> → <b>neither</b>.<br>
(Exponents 3 and 1 are odd, but the constant term <span class="m">−3</span> has exponent 0 — even. So it is mixed.)</p>`)
}
];

EX["10A"] = [{
  num: "10A",
  q: T(
`<p>Bepaal de extrema (op 0,01 nk.) en vermeld of ze relatief of absoluut zijn. Noteer het verloopschema.</p>
<ol type="a">
  <li><span class="m">f(x) = x<sup>3</sup> − 6x<sup>2</sup> + 5x − 1</span></li>
  <li><span class="m">f(x) = −x<sup>4</sup> + 0,4x<sup>3</sup> + 0,3x<sup>2</sup> + 3</span></li>
</ol>`,
`<p>Find the extrema (to 0.01) and say whether they are relative or absolute. Give the variation chart.</p>
<ol type="a">
  <li><span class="m">f(x) = x<sup>3</sup> − 6x<sup>2</sup> + 5x − 1</span></li>
  <li><span class="m">f(x) = −x<sup>4</sup> + 0.4x<sup>3</sup> + 0.3x<sup>2</sup> + 3</span></li>
</ol>`),
  a: T(
`<p><b>a)</b> Met ICT: in <span class="m">x = 0,47</span> een <b>relatief maximum 0,13</b>; in <span class="m">x = 3,53</span> een <b>relatief minimum −14,13</b>.</p>
<pre class="long">   x   │     0,47            3,53
 ──────┼──────────────────────────────────
  f(x) │  ↗  0,13    ↘   −14,13    ↗
       │      max          min</pre>
<p>Beide extrema zijn <b>enkel relatief</b>: de graad is oneven (3) met positieve leidende coëfficiënt, dus <span class="m">lim<sub>x→−∞</sub> f(x) = −∞</span> en <span class="m">lim<sub>x→+∞</sub> f(x) = +∞</span>. Er is dus geen kleinste of grootste functiewaarde.</p>

<p><b>b)</b> Met ICT vind je drie extrema:</p>
<ul>
  <li>in <span class="m">x = −0,27</span> een <b>relatief maximum 3,01</b></li>
  <li>in <span class="m">x = 0</span> een <b>relatief minimum 3</b></li>
  <li>in <span class="m">x = 0,57</span> een <b>maximum 3,07</b> — en dit is het <b>absolute maximum</b></li>
</ul>
<pre class="long">   x   │    −0,27         0           0,57
 ──────┼──────────────────────────────────────────
  f(x) │  ↗  3,01    ↘   3     ↗    3,07    ↘
       │      max        min         max</pre>
<p>De graad is even (4) met <b>negatieve</b> leidende coëfficiënt, dus <span class="m">lim<sub>x→±∞</sub> f(x) = −∞</span>. De grootste van de twee maxima is dus het <b>absolute maximum</b>: <span class="m">3,07</span>. Er is <b>geen</b> absoluut minimum.</p>`,

`<p><b>a)</b> With ICT: at <span class="m">x = 0.47</span> a <b>relative maximum 0.13</b>; at <span class="m">x = 3.53</span> a <b>relative minimum −14.13</b>.</p>
<pre class="long">   x   │     0.47            3.53
 ──────┼──────────────────────────────────
  f(x) │  ↗  0.13    ↘   −14.13    ↗
       │      max          min</pre>
<p>Both extrema are <b>relative only</b>: the degree is odd (3) with a positive leading coefficient, so <span class="m">lim<sub>x→−∞</sub> f(x) = −∞</span> and <span class="m">lim<sub>x→+∞</sub> f(x) = +∞</span>. So there is no smallest or largest function value.</p>

<p><b>b)</b> With ICT you find three extrema:</p>
<ul>
  <li>at <span class="m">x = −0.27</span> a <b>relative maximum 3.01</b></li>
  <li>at <span class="m">x = 0</span> a <b>relative minimum 3</b></li>
  <li>at <span class="m">x = 0.57</span> a <b>maximum 3.07</b> — and this is the <b>absolute maximum</b></li>
</ul>
<pre class="long">   x   │    −0.27         0           0.57
 ──────┼──────────────────────────────────────────
  f(x) │  ↗  3.01    ↘   3     ↗    3.07    ↘
       │      max        min         max</pre>
<p>The degree is even (4) with a <b>negative</b> leading coefficient, so <span class="m">lim<sub>x→±∞</sub> f(x) = −∞</span>. The larger of the two maxima is therefore the <b>absolute maximum</b>: <span class="m">3.07</span>. There is <b>no</b> absolute minimum.</p>`)
}];

EX["11A"] = [{
  num: "11A",
  q: T(
`<p>Bepaal het gedrag op oneindig van de functie <span class="m">f</span>. <i>(De drie grafieken staan in het boek op p. 35.)</i></p>`,
`<p>Determine the behaviour at infinity of the function <span class="m">f</span>. <i>(The three graphs are in the book on p. 35.)</i></p>`),
  a: T(
`<p><b>Werkwijze:</b> volg de grafiek met je vinger naar links en naar rechts, en kijk of de functiewaarden naar boven of naar beneden wegvluchten.</p>
<p><b>a)</b> Een stijgende rechte: links duikt ze naar beneden, rechts klimt ze.</p>
<div class="eq"><span class="m">lim<sub>x→−∞</sub> f(x) = −∞</span> &nbsp;&nbsp;en&nbsp;&nbsp; <span class="m">lim<sub>x→+∞</sub> f(x) = +∞</span></div>
<p><b>b)</b> Een bergparabool: beide takken gaan naar beneden.</p>
<div class="eq"><span class="m">lim<sub>x→−∞</sub> f(x) = −∞</span> &nbsp;&nbsp;en&nbsp;&nbsp; <span class="m">lim<sub>x→+∞</sub> f(x) = −∞</span></div>
<p><b>c)</b> Een stijgende derdegraadsfunctie: links naar beneden, rechts naar boven.</p>
<div class="eq"><span class="m">lim<sub>x→−∞</sub> f(x) = −∞</span> &nbsp;&nbsp;en&nbsp;&nbsp; <span class="m">lim<sub>x→+∞</sub> f(x) = +∞</span></div>`,
`<p><b>Method:</b> trace the graph with your finger to the left and to the right, and see whether the function values run away upwards or downwards.</p>
<p><b>a)</b> An increasing straight line: it dives down on the left and climbs on the right.</p>
<div class="eq"><span class="m">lim<sub>x→−∞</sub> f(x) = −∞</span> &nbsp;&nbsp;and&nbsp;&nbsp; <span class="m">lim<sub>x→+∞</sub> f(x) = +∞</span></div>
<p><b>b)</b> A downward parabola: both arms go down.</p>
<div class="eq"><span class="m">lim<sub>x→−∞</sub> f(x) = −∞</span> &nbsp;&nbsp;and&nbsp;&nbsp; <span class="m">lim<sub>x→+∞</sub> f(x) = −∞</span></div>
<p><b>c)</b> An increasing third-degree function: down on the left, up on the right.</p>
<div class="eq"><span class="m">lim<sub>x→−∞</sub> f(x) = −∞</span> &nbsp;&nbsp;and&nbsp;&nbsp; <span class="m">lim<sub>x→+∞</sub> f(x) = +∞</span></div>`)
}];

EX["12"] = [
{
  num: "12A",
  q: T(
`<p>Teken de grafiek van de veeltermfunctie <span class="m">f</span> met behulp van ICT en bespreek, indien mogelijk algebraïsch, de volgende kenmerken: domein, symmetrie, nulwaarden, snijpunten met de assen, tekenschema, extrema, verloopschema, bereik en gedrag op oneindig.</p>
<ol type="a">
  <li><span class="m">f(x) = x<sup>4</sup> − 3x<sup>2</sup></span></li>
  <li><span class="m">f(x) = −2x<sup>3</sup> + 5x</span></li>
  <li><span class="m">f(x) = 4x<sup>3</sup> + 5x<sup>2</sup> − 7x − 1</span></li>
</ol>`,
`<p>Draw the graph of the polynomial function <span class="m">f</span> with ICT and discuss, algebraically where possible, the following characteristics: domain, symmetry, zeros, axis intersections, sign chart, extrema, variation chart, range and behaviour at infinity.</p>
<ol type="a">
  <li><span class="m">f(x) = x<sup>4</sup> − 3x<sup>2</sup></span></li>
  <li><span class="m">f(x) = −2x<sup>3</sup> + 5x</span></li>
  <li><span class="m">f(x) = 4x<sup>3</sup> + 5x<sup>2</sup> − 7x − 1</span></li>
</ol>`),
  a: T(
`<p><b>a) <span class="m">f(x) = x<sup>4</sup> − 3x<sup>2</sup></span></b></p>
<table class="grid">
  <tr><th style="width:26%">domein</th><td><span class="m">dom f = ℝ</span></td></tr>
  <tr><th>symmetrie</th><td>Exponenten 4 en 2 zijn beide even → <b>even functie</b> (<span class="m">f(−x) = f(x)</span>).</td></tr>
  <tr><th>nulwaarden</th><td><span class="m">x<sup>2</sup>(x<sup>2</sup> − 3) = 0 ⟺ x = 0</span> (multipliciteit 2) <span class="m">∨ x = ±√3 ≈ ±1,73</span> (multipliciteit 1)</td></tr>
  <tr><th>snijpunten</th><td>x-as: <span class="m">(−√3 , 0)</span>, <span class="m">(0 , 0)</span>, <span class="m">(√3 , 0)</span> &nbsp;·&nbsp; y-as: <span class="m">(0 , 0)</span></td></tr>
  <tr><th>tekenschema</th><td><pre class="long" style="margin:0">   x   │   −√3       0       √3
 ──────┼──────────────────────────────
  f(x) │  +   0   −   0   −   0   +</pre>
  (bij 0 is de multipliciteit even → teken blijft <b>−</b>)</td></tr>
  <tr><th>extrema</th><td>in <span class="m">x = ±1,22</span> een <b>absoluut minimum −2,25</b>; in <span class="m">x = 0</span> een <b>relatief maximum 0</b></td></tr>
  <tr><th>verloopschema</th><td><pre class="long" style="margin:0">   x   │  −1,22      0       1,22
 ──────┼────────────────────────────────
  f(x) │ ↘ −2,25  ↗   0   ↘  −2,25  ↗
       │    min      max      min</pre></td></tr>
  <tr><th>bereik</th><td><span class="m">ber f = [−2,25 ; +∞[</span></td></tr>
  <tr><th>gedrag</th><td><span class="m">lim<sub>x→−∞</sub> f(x) = +∞</span> en <span class="m">lim<sub>x→+∞</sub> f(x) = +∞</span></td></tr>
</table>

<p><b>b) <span class="m">f(x) = −2x<sup>3</sup> + 5x</span></b></p>
<table class="grid">
  <tr><th style="width:26%">domein</th><td><span class="m">dom f = ℝ</span></td></tr>
  <tr><th>symmetrie</th><td>Exponenten 3 en 1 zijn beide oneven → <b>oneven functie</b> (<span class="m">f(−x) = −f(x)</span>).</td></tr>
  <tr><th>nulwaarden</th><td><span class="m">x(−2x<sup>2</sup> + 5) = 0 ⟺ x = 0 ∨ x = ±</span>√${FR('5','2')}<span class="m"> ≈ ±1,58</span></td></tr>
  <tr><th>snijpunten</th><td>x-as: <span class="m">(−1,58 , 0)</span>, <span class="m">(0 , 0)</span>, <span class="m">(1,58 , 0)</span> &nbsp;·&nbsp; y-as: <span class="m">(0 , 0)</span></td></tr>
  <tr><th>tekenschema</th><td><pre class="long" style="margin:0">   x   │  −1,58      0      1,58
 ──────┼──────────────────────────────
  f(x) │  +   0   −   0   +   0   −</pre></td></tr>
  <tr><th>extrema</th><td>in <span class="m">x = −0,91</span> een <b>relatief minimum −3,04</b>; in <span class="m">x = 0,91</span> een <b>relatief maximum 3,04</b></td></tr>
  <tr><th>verloopschema</th><td><pre class="long" style="margin:0">   x   │   −0,91         0,91
 ──────┼────────────────────────────────
  f(x) │ ↘  −3,04   ↗    3,04   ↘
       │     min          max</pre></td></tr>
  <tr><th>bereik</th><td><span class="m">ber f = ℝ</span> — geen absolute extrema</td></tr>
  <tr><th>gedrag</th><td><span class="m">lim<sub>x→−∞</sub> f(x) = +∞</span> en <span class="m">lim<sub>x→+∞</sub> f(x) = −∞</span></td></tr>
</table>

<p><b>c) <span class="m">f(x) = 4x<sup>3</sup> + 5x<sup>2</sup> − 7x − 1</span></b></p>
<table class="grid">
  <tr><th style="width:26%">domein</th><td><span class="m">dom f = ℝ</span></td></tr>
  <tr><th>symmetrie</th><td>Gemengde exponenten → <b>geen van beide</b>.</td></tr>
  <tr><th>nulwaarden</th><td>Geen gehele deler van de constante term werkt (<span class="m">f(1) = 1</span>, <span class="m">f(−1) = 7</span>), dus met ICT:<br>
    <span class="m">−2,05</span> ; <span class="m">−0,13</span> ; <span class="m">0,93</span> (op 0,01 nk.)</td></tr>
  <tr><th>snijpunten</th><td>x-as: <span class="m">(−2,05 , 0)</span>, <span class="m">(−0,13 , 0)</span>, <span class="m">(0,93 , 0)</span> &nbsp;·&nbsp; y-as: <span class="m">(0 , −1)</span></td></tr>
  <tr><th>tekenschema</th><td><pre class="long" style="margin:0">   x   │  −2,05     −0,13      0,93
 ──────┼──────────────────────────────
  f(x) │  −   0   +   0   −   0   +</pre></td></tr>
  <tr><th>extrema</th><td>in <span class="m">x = −1,29</span> een <b>relatief maximum 7,76</b>; in <span class="m">x = 0,45</span> een <b>relatief minimum −2,77</b></td></tr>
  <tr><th>verloopschema</th><td><pre class="long" style="margin:0">   x   │   −1,29         0,45
 ──────┼────────────────────────────────
  f(x) │ ↗   7,76   ↘   −2,77   ↗
       │     max          min</pre></td></tr>
  <tr><th>bereik</th><td><span class="m">ber f = ℝ</span> — geen absolute extrema</td></tr>
  <tr><th>gedrag</th><td><span class="m">lim<sub>x→−∞</sub> f(x) = −∞</span> en <span class="m">lim<sub>x→+∞</sub> f(x) = +∞</span></td></tr>
</table>`,

`<p><b>a) <span class="m">f(x) = x<sup>4</sup> − 3x<sup>2</sup></span></b></p>
<table class="grid">
  <tr><th style="width:26%">domain</th><td><span class="m">dom f = ℝ</span></td></tr>
  <tr><th>symmetry</th><td>Exponents 4 and 2 are both even → <b>even function</b> (<span class="m">f(−x) = f(x)</span>).</td></tr>
  <tr><th>zeros</th><td><span class="m">x<sup>2</sup>(x<sup>2</sup> − 3) = 0 ⟺ x = 0</span> (multiplicity 2) <span class="m">∨ x = ±√3 ≈ ±1.73</span> (multiplicity 1)</td></tr>
  <tr><th>intersections</th><td>x-axis: <span class="m">(−√3 , 0)</span>, <span class="m">(0 , 0)</span>, <span class="m">(√3 , 0)</span> &nbsp;·&nbsp; y-axis: <span class="m">(0 , 0)</span></td></tr>
  <tr><th>sign chart</th><td><pre class="long" style="margin:0">   x   │   −√3       0       √3
 ──────┼──────────────────────────────
  f(x) │  +   0   −   0   −   0   +</pre>
  (at 0 the multiplicity is even → the sign stays <b>−</b>)</td></tr>
  <tr><th>extrema</th><td>at <span class="m">x = ±1.22</span> an <b>absolute minimum −2.25</b>; at <span class="m">x = 0</span> a <b>relative maximum 0</b></td></tr>
  <tr><th>variation</th><td><pre class="long" style="margin:0">   x   │  −1.22      0       1.22
 ──────┼────────────────────────────────
  f(x) │ ↘ −2.25  ↗   0   ↘  −2.25  ↗
       │    min      max      min</pre></td></tr>
  <tr><th>range</th><td><span class="m">ber f = [−2.25 ; +∞[</span></td></tr>
  <tr><th>behaviour</th><td><span class="m">lim<sub>x→−∞</sub> f(x) = +∞</span> and <span class="m">lim<sub>x→+∞</sub> f(x) = +∞</span></td></tr>
</table>

<p><b>b) <span class="m">f(x) = −2x<sup>3</sup> + 5x</span></b></p>
<table class="grid">
  <tr><th style="width:26%">domain</th><td><span class="m">dom f = ℝ</span></td></tr>
  <tr><th>symmetry</th><td>Exponents 3 and 1 are both odd → <b>odd function</b> (<span class="m">f(−x) = −f(x)</span>).</td></tr>
  <tr><th>zeros</th><td><span class="m">x(−2x<sup>2</sup> + 5) = 0 ⟺ x = 0 ∨ x = ±</span>√${FR('5','2')}<span class="m"> ≈ ±1.58</span></td></tr>
  <tr><th>intersections</th><td>x-axis: <span class="m">(−1.58 , 0)</span>, <span class="m">(0 , 0)</span>, <span class="m">(1.58 , 0)</span> &nbsp;·&nbsp; y-axis: <span class="m">(0 , 0)</span></td></tr>
  <tr><th>sign chart</th><td><pre class="long" style="margin:0">   x   │  −1.58      0      1.58
 ──────┼──────────────────────────────
  f(x) │  +   0   −   0   +   0   −</pre></td></tr>
  <tr><th>extrema</th><td>at <span class="m">x = −0.91</span> a <b>relative minimum −3.04</b>; at <span class="m">x = 0.91</span> a <b>relative maximum 3.04</b></td></tr>
  <tr><th>variation</th><td><pre class="long" style="margin:0">   x   │   −0.91         0.91
 ──────┼────────────────────────────────
  f(x) │ ↘  −3.04   ↗    3.04   ↘
       │     min          max</pre></td></tr>
  <tr><th>range</th><td><span class="m">ber f = ℝ</span> — no absolute extrema</td></tr>
  <tr><th>behaviour</th><td><span class="m">lim<sub>x→−∞</sub> f(x) = +∞</span> and <span class="m">lim<sub>x→+∞</sub> f(x) = −∞</span></td></tr>
</table>

<p><b>c) <span class="m">f(x) = 4x<sup>3</sup> + 5x<sup>2</sup> − 7x − 1</span></b></p>
<table class="grid">
  <tr><th style="width:26%">domain</th><td><span class="m">dom f = ℝ</span></td></tr>
  <tr><th>symmetry</th><td>Mixed exponents → <b>neither</b>.</td></tr>
  <tr><th>zeros</th><td>No integer divisor of the constant term works (<span class="m">f(1) = 1</span>, <span class="m">f(−1) = 7</span>), so with ICT:<br>
    <span class="m">−2.05</span> ; <span class="m">−0.13</span> ; <span class="m">0.93</span> (to 0.01)</td></tr>
  <tr><th>intersections</th><td>x-axis: <span class="m">(−2.05 , 0)</span>, <span class="m">(−0.13 , 0)</span>, <span class="m">(0.93 , 0)</span> &nbsp;·&nbsp; y-axis: <span class="m">(0 , −1)</span></td></tr>
  <tr><th>sign chart</th><td><pre class="long" style="margin:0">   x   │  −2.05     −0.13      0.93
 ──────┼──────────────────────────────
  f(x) │  −   0   +   0   −   0   +</pre></td></tr>
  <tr><th>extrema</th><td>at <span class="m">x = −1.29</span> a <b>relative maximum 7.76</b>; at <span class="m">x = 0.45</span> a <b>relative minimum −2.77</b></td></tr>
  <tr><th>variation</th><td><pre class="long" style="margin:0">   x   │   −1.29         0.45
 ──────┼────────────────────────────────
  f(x) │ ↗   7.76   ↘   −2.77   ↗
       │     max          min</pre></td></tr>
  <tr><th>range</th><td><span class="m">ber f = ℝ</span> — no absolute extrema</td></tr>
  <tr><th>behaviour</th><td><span class="m">lim<sub>x→−∞</sub> f(x) = −∞</span> and <span class="m">lim<sub>x→+∞</sub> f(x) = +∞</span></td></tr>
</table>`)
},
{
  num: "13A",
  q: T(
`<p>Een boer heeft 100 m draad om een rechthoekig stuk grond te omheinen. Bepaal een functievoorschrift dat de oppervlakte van de afgebakende rechthoek geeft in functie van de lengte van de rechthoek.</p>`,
`<p>A farmer has 100 m of wire to fence off a rectangular piece of land. Find a function rule giving the area of the fenced rectangle as a function of the length of the rectangle.</p>`),
  a: T(
`<p>Stel <span class="m">x</span> = de lengte van de rechthoek (in m) en <span class="m">b</span> = de breedte (in m).</p>
<p>De 100 m draad is de <b>omtrek</b>:</p>
<div class="eq"><span class="m">2(x + b) = 100 ⟺ x + b = 50 ⟺ b = 50 − x</span></div>
<p>De oppervlakte is lengte × breedte:</p>
<div class="eq"><span class="m">f(x) = x(50 − x) = 50x − x<sup>2</sup></span></div>
<p>Dit is een tweedegraadsfunctie. Het <b>zinvolle domein</b> is <span class="m">0 &lt; x &lt; 50</span>, want zowel de lengte als de breedte <span class="m">50 − x</span> moet positief zijn.</p>
<p><b>Extra:</b> de top ligt in <span class="m">x = 25</span> met <span class="m">f(25) = 625</span> — de grootste oppervlakte (625 m²) krijg je dus bij een <b>vierkant</b> van 25 m op 25 m.</p>`,
`<p>Let <span class="m">x</span> = the length of the rectangle (in m) and <span class="m">b</span> = the width (in m).</p>
<p>The 100 m of wire is the <b>perimeter</b>:</p>
<div class="eq"><span class="m">2(x + b) = 100 ⟺ x + b = 50 ⟺ b = 50 − x</span></div>
<p>The area is length × width:</p>
<div class="eq"><span class="m">f(x) = x(50 − x) = 50x − x<sup>2</sup></span></div>
<p>This is a second-degree function. The <b>meaningful domain</b> is <span class="m">0 &lt; x &lt; 50</span>, because both the length and the width <span class="m">50 − x</span> must be positive.</p>
<p><b>Extra:</b> the vertex is at <span class="m">x = 25</span> with <span class="m">f(25) = 625</span> — so the largest area (625 m²) comes from a <b>square</b> of 25 m by 25 m.</p>`)
}
];
