/* 1.4 — start exercises with fully worked, checked answers (book p. 29) */

EX["8"] = [
{
  num: "8A",
  q: T(
`<p>Los de ongelijkheden algebraïsch op.</p>
<ol type="a">
  <li><span class="m">(x − 1)(x<sup>2</sup> − 2x − 3) &gt; 0</span></li>
  <li><span class="m">−x(x + 1)<sup>2</sup>(2x − 8) &lt; 0</span></li>
  <li><span class="m">x<sup>3</sup> − 2x<sup>2</sup> − 2x − 3 ≤ 0</span></li>
  <li><span class="m">6x<sup>3</sup> − 5x<sup>2</sup> − 12x − 4 &gt; 0</span></li>
</ol>`,
`<p>Solve the inequalities algebraically.</p>
<ol type="a">
  <li><span class="m">(x − 1)(x<sup>2</sup> − 2x − 3) &gt; 0</span></li>
  <li><span class="m">−x(x + 1)<sup>2</sup>(2x − 8) &lt; 0</span></li>
  <li><span class="m">x<sup>3</sup> − 2x<sup>2</sup> − 2x − 3 ≤ 0</span></li>
  <li><span class="m">6x<sup>3</sup> − 5x<sup>2</sup> − 12x − 4 &gt; 0</span></li>
</ol>`),
  a: T(
`<p><b>a)</b> <span class="m">x<sup>2</sup> − 2x − 3 = (x − 3)(x + 1)</span>, dus <span class="m">f(x) = (x − 1)(x − 3)(x + 1)</span>.<br>
Nulwaarden <b>−1, 1, 3</b> (alle multipliciteit 1); hoogstegraadsterm <span class="m">x<sup>3</sup></span> → rechts een <b>+</b>.</p>
<pre class="long">   x   │     −1        1        3
 ──────┼──────────────────────────────
  f(x) │  −   0   +    0   −    0   +</pre>
<p>Strikt <span class="m">&gt; 0</span> → nulwaarden niet insluiten:</p>
<div class="eq"><span class="m">V = ]−1, 1[ ∪ ]3, +∞[</span></div>
<p>Controle: <span class="m">f(0) = (−1)(−3)(1) = 3 &gt; 0</span> ✓ &nbsp; <span class="m">f(4) = (3)(1)(5) = 15 &gt; 0</span> ✓</p>

<p><b>b)</b> Schrijf <span class="m">2x − 8 = 2(x − 4)</span>: &nbsp; <span class="m">f(x) = −2x(x + 1)<sup>2</sup>(x − 4)</span>.<br>
Nulwaarden: <b>−1</b> (multipliciteit 2), <b>0</b> en <b>4</b> (multipliciteit 1).<br>
Uitgewerkt is de hoogstegraadsterm <span class="m">−2x<sup>4</sup></span> → rechts van 4 een <b>−</b>.<br>
Van rechts naar links: bij 4 (oneven) wisselt het naar <b>+</b>, bij 0 (oneven) naar <b>−</b>, bij −1 (even) blijft het <b>−</b>.</p>
<pre class="long">   x   │     −1        0        4
 ──────┼──────────────────────────────
  f(x) │  −   0   −    0   +    0   −</pre>
<p>Strikt <span class="m">&lt; 0</span> → nulwaarden niet insluiten; let op dat <span class="m">−1</span> het linkerstuk splitst:</p>
<div class="eq"><span class="m">V = ]−∞, −1[ ∪ ]−1, 0[ ∪ ]4, +∞[</span></div>
<p>Controle: <span class="m">f(−2) = −2(−2)(1)(−6) = −24 &lt; 0</span> ✓ &nbsp; <span class="m">f(1) = −2(1)(4)(−3) = 24 &gt; 0</span> ✓ &nbsp; <span class="m">f(5) = −2(5)(36)(1) = −360 &lt; 0</span> ✓</p>

<p><b>c)</b> Constante term −3 → kandidaten <span class="m">±1, ±3</span>. <span class="m">f(3) = 27 − 18 − 6 − 3 = 0</span> ✓</p>
<table class="horner">
  <tr><td class="a"></td><td>1</td><td>−2</td><td>−2</td><td>−3</td></tr>
  <tr><td class="a">3</td><td>↓</td><td>3</td><td>3</td><td>3</td></tr>
  <tr class="res"><td class="a"></td><td>1</td><td>1</td><td>1</td><td class="rest">0</td></tr>
</table>
<p><span class="m">f(x) = (x − 3)(x<sup>2</sup> + x + 1)</span>. Voor de tweede factor: <span class="m">D = 1 − 4 = −3 &lt; 0</span> en <span class="m">a = 1 &gt; 0</span> → die factor is <b>overal strikt positief</b> en heeft geen nulwaarden.</p>
<p>Het teken van <span class="m">f</span> is dus volledig het teken van <span class="m">x − 3</span>:</p>
<pre class="long">   x   │      3
 ──────┼────────────
  f(x) │  −   0   +</pre>
<div class="eq"><span class="m">f(x) ≤ 0 ⟺ x ≤ 3</span> &nbsp;&nbsp;dus&nbsp;&nbsp; <span class="m">V = ]−∞, 3]</span></div>
<p>Controle: <span class="m">f(0) = −3 ≤ 0</span> ✓ &nbsp; <span class="m">f(4) = 64 − 32 − 8 − 3 = 21 &gt; 0</span> ✓</p>

<p><b>d)</b> Constante term −4 → kandidaten <span class="m">±1, ±2, ±4</span>. <span class="m">f(2) = 48 − 20 − 24 − 4 = 0</span> ✓</p>
<table class="horner">
  <tr><td class="a"></td><td>6</td><td>−5</td><td>−12</td><td>−4</td></tr>
  <tr><td class="a">2</td><td>↓</td><td>12</td><td>14</td><td>4</td></tr>
  <tr class="res"><td class="a"></td><td>6</td><td>7</td><td>2</td><td class="rest">0</td></tr>
</table>
<p><span class="m">6x<sup>2</sup> + 7x + 2</span>: <span class="m">D = 49 − 48 = 1</span>, <span class="m">x = </span>${FR('−7 ± 1','12')} → <span class="m">−</span>${FR('1','2')} <span class="m">en −</span>${FR('2','3')}.</p>
<div class="eq"><span class="m">f(x) = (x − 2)(2x + 1)(3x + 2)</span></div>
<p>Nulwaarden <span class="m">−</span>${FR('2','3')}<span class="m">, −</span>${FR('1','2')}<span class="m">, 2</span>; hoogstegraadsterm <span class="m">6x<sup>3</sup></span> → rechts een <b>+</b>.</p>
<pre class="long">   x   │    −2/3      −1/2       2
 ──────┼──────────────────────────────
  f(x) │  −   0   +    0   −    0   +</pre>
<div class="eq"><span class="m">V = ]−</span>${FR('2','3')}<span class="m">, −</span>${FR('1','2')}<span class="m">[ ∪ ]2, +∞[</span></div>
<p>Controle: <span class="m">f(−0,6) = (−2,6)(−0,2)(0,2) = 0,104 &gt; 0</span> ✓ &nbsp; <span class="m">f(0) = −4 &lt; 0</span> ✓</p>`,

`<p><b>a)</b> <span class="m">x<sup>2</sup> − 2x − 3 = (x − 3)(x + 1)</span>, so <span class="m">f(x) = (x − 1)(x − 3)(x + 1)</span>.<br>
Zeros <b>−1, 1, 3</b> (all multiplicity 1); highest-degree term <span class="m">x<sup>3</sup></span> → a <b>+</b> on the right.</p>
<pre class="long">   x   │     −1        1        3
 ──────┼──────────────────────────────
  f(x) │  −   0   +    0   −    0   +</pre>
<p>Strictly <span class="m">&gt; 0</span> → zeros excluded:</p>
<div class="eq"><span class="m">V = ]−1, 1[ ∪ ]3, +∞[</span></div>
<p>Check: <span class="m">f(0) = (−1)(−3)(1) = 3 &gt; 0</span> ✓ &nbsp; <span class="m">f(4) = (3)(1)(5) = 15 &gt; 0</span> ✓</p>

<p><b>b)</b> Write <span class="m">2x − 8 = 2(x − 4)</span>: &nbsp; <span class="m">f(x) = −2x(x + 1)<sup>2</sup>(x − 4)</span>.<br>
Zeros: <b>−1</b> (multiplicity 2), <b>0</b> and <b>4</b> (multiplicity 1).<br>
Expanded, the highest-degree term is <span class="m">−2x<sup>4</sup></span> → a <b>−</b> right of 4.<br>
From right to left: at 4 (odd) it switches to <b>+</b>, at 0 (odd) to <b>−</b>, at −1 (even) it stays <b>−</b>.</p>
<pre class="long">   x   │     −1        0        4
 ──────┼──────────────────────────────
  f(x) │  −   0   −    0   +    0   −</pre>
<p>Strictly <span class="m">&lt; 0</span> → zeros excluded; note that <span class="m">−1</span> splits the left part:</p>
<div class="eq"><span class="m">V = ]−∞, −1[ ∪ ]−1, 0[ ∪ ]4, +∞[</span></div>
<p>Check: <span class="m">f(−2) = −2(−2)(1)(−6) = −24 &lt; 0</span> ✓ &nbsp; <span class="m">f(1) = −2(1)(4)(−3) = 24 &gt; 0</span> ✓ &nbsp; <span class="m">f(5) = −2(5)(36)(1) = −360 &lt; 0</span> ✓</p>

<p><b>c)</b> Constant term −3 → candidates <span class="m">±1, ±3</span>. <span class="m">f(3) = 27 − 18 − 6 − 3 = 0</span> ✓</p>
<table class="horner">
  <tr><td class="a"></td><td>1</td><td>−2</td><td>−2</td><td>−3</td></tr>
  <tr><td class="a">3</td><td>↓</td><td>3</td><td>3</td><td>3</td></tr>
  <tr class="res"><td class="a"></td><td>1</td><td>1</td><td>1</td><td class="rest">0</td></tr>
</table>
<p><span class="m">f(x) = (x − 3)(x<sup>2</sup> + x + 1)</span>. For the second factor: <span class="m">D = 1 − 4 = −3 &lt; 0</span> and <span class="m">a = 1 &gt; 0</span> → that factor is <b>strictly positive everywhere</b> and has no zeros.</p>
<p>So the sign of <span class="m">f</span> is entirely the sign of <span class="m">x − 3</span>:</p>
<pre class="long">   x   │      3
 ──────┼────────────
  f(x) │  −   0   +</pre>
<div class="eq"><span class="m">f(x) ≤ 0 ⟺ x ≤ 3</span> &nbsp;&nbsp;so&nbsp;&nbsp; <span class="m">V = ]−∞, 3]</span></div>
<p>Check: <span class="m">f(0) = −3 ≤ 0</span> ✓ &nbsp; <span class="m">f(4) = 64 − 32 − 8 − 3 = 21 &gt; 0</span> ✓</p>

<p><b>d)</b> Constant term −4 → candidates <span class="m">±1, ±2, ±4</span>. <span class="m">f(2) = 48 − 20 − 24 − 4 = 0</span> ✓</p>
<table class="horner">
  <tr><td class="a"></td><td>6</td><td>−5</td><td>−12</td><td>−4</td></tr>
  <tr><td class="a">2</td><td>↓</td><td>12</td><td>14</td><td>4</td></tr>
  <tr class="res"><td class="a"></td><td>6</td><td>7</td><td>2</td><td class="rest">0</td></tr>
</table>
<p><span class="m">6x<sup>2</sup> + 7x + 2</span>: <span class="m">D = 49 − 48 = 1</span>, <span class="m">x = </span>${FR('−7 ± 1','12')} → <span class="m">−</span>${FR('1','2')} <span class="m">and −</span>${FR('2','3')}.</p>
<div class="eq"><span class="m">f(x) = (x − 2)(2x + 1)(3x + 2)</span></div>
<p>Zeros <span class="m">−</span>${FR('2','3')}<span class="m">, −</span>${FR('1','2')}<span class="m">, 2</span>; highest-degree term <span class="m">6x<sup>3</sup></span> → a <b>+</b> on the right.</p>
<pre class="long">   x   │    −2/3      −1/2       2
 ──────┼──────────────────────────────
  f(x) │  −   0   +    0   −    0   +</pre>
<div class="eq"><span class="m">V = ]−</span>${FR('2','3')}<span class="m">, −</span>${FR('1','2')}<span class="m">[ ∪ ]2, +∞[</span></div>
<p>Check: <span class="m">f(−0.6) = (−2.6)(−0.2)(0.2) = 0.104 &gt; 0</span> ✓ &nbsp; <span class="m">f(0) = −4 &lt; 0</span> ✓</p>`)
},
{
  num: "8B",
  q: T(
`<p>Los de ongelijkheden op met behulp van ICT.</p>
<ol type="a">
  <li><span class="m">12x<sup>3</sup> − 5 &lt; −7x(4x − 1)</span></li>
  <li><span class="m">x<sup>4</sup> + 4x<sup>3</sup> − 2x<sup>2</sup> − 12x + 5 ≥ 0</span></li>
</ol>`,
`<p>Solve the inequalities using ICT.</p>
<ol type="a">
  <li><span class="m">12x<sup>3</sup> − 5 &lt; −7x(4x − 1)</span></li>
  <li><span class="m">x<sup>4</sup> + 4x<sup>3</sup> − 2x<sup>2</sup> − 12x + 5 ≥ 0</span></li>
</ol>`),
  a: T(
`<p><b>a)</b> Herleid eerst tot nul:</p>
<div class="eq"><span class="m">12x<sup>3</sup> − 5 &lt; −28x<sup>2</sup> + 7x ⟺ 12x<sup>3</sup> + 28x<sup>2</sup> − 7x − 5 &lt; 0</span></div>
<p>Met ICT vind je de nulwaarden <b>−2,50 ; −0,33 ; 0,50</b>.<br>
(Exact: <span class="m">12x<sup>3</sup> + 28x<sup>2</sup> − 7x − 5 = (2x − 1)(3x + 1)(2x + 5)</span> → <span class="m">x = </span>${FR('1','2')}<span class="m">, −</span>${FR('1','3')}<span class="m">, −</span>${FR('5','2')}.)</p>
<pre class="long">   x   │   −2,50     −0,33     0,50
 ──────┼──────────────────────────────
  f(x) │  −   0   +    0   −    0   +</pre>
<div class="eq"><span class="m">V = ]−∞ ; −2,50[ ∪ ]−0,33 ; 0,50[</span></div>
<p>Controle: <span class="m">f(0) = −5 &lt; 0</span> ✓ &nbsp; <span class="m">f(−1) = −12 + 28 + 7 − 5 = 18 &gt; 0</span> ✓</p>

<p><b>b)</b> Met ICT vind je vier nulwaarden: <b>−3,45 ; −2,41 ; 0,41 ; 1,45</b>.<br>
(Exact ontbindt deze veelterm als <span class="m">(x<sup>2</sup> + 2x − 1)(x<sup>2</sup> + 2x − 5)</span>, met nulwaarden <span class="m">−1 ± √2</span> en <span class="m">−1 ± √6</span>.)</p>
<p>Hoogstegraadsterm <span class="m">x<sup>4</sup></span> → rechts van 1,45 een <b>+</b>; alle nulwaarden hebben multipliciteit 1.</p>
<pre class="long">   x   │  −3,45    −2,41     0,41     1,45
 ──────┼────────────────────────────────────────
  f(x) │  +   0   −   0   +   0   −   0   +</pre>
<p>Niet strikt (<span class="m">≥</span>) → nulwaarden wél insluiten:</p>
<div class="eq"><span class="m">V = ]−∞ ; −3,45] ∪ [−2,41 ; 0,41] ∪ [1,45 ; +∞[</span></div>
<p>Controle: <span class="m">f(0) = 5 &gt; 0</span> ✓ &nbsp; <span class="m">f(1) = −4 &lt; 0</span> ✓ &nbsp; <span class="m">f(−3) = −4 &lt; 0</span> ✓ &nbsp; <span class="m">f(−4) = 21 &gt; 0</span> ✓</p>`,

`<p><b>a)</b> Reduce to zero first:</p>
<div class="eq"><span class="m">12x<sup>3</sup> − 5 &lt; −28x<sup>2</sup> + 7x ⟺ 12x<sup>3</sup> + 28x<sup>2</sup> − 7x − 5 &lt; 0</span></div>
<p>With ICT you find the zeros <b>−2.50 ; −0.33 ; 0.50</b>.<br>
(Exactly: <span class="m">12x<sup>3</sup> + 28x<sup>2</sup> − 7x − 5 = (2x − 1)(3x + 1)(2x + 5)</span> → <span class="m">x = </span>${FR('1','2')}<span class="m">, −</span>${FR('1','3')}<span class="m">, −</span>${FR('5','2')}.)</p>
<pre class="long">   x   │   −2.50     −0.33     0.50
 ──────┼──────────────────────────────
  f(x) │  −   0   +    0   −    0   +</pre>
<div class="eq"><span class="m">V = ]−∞ ; −2.50[ ∪ ]−0.33 ; 0.50[</span></div>
<p>Check: <span class="m">f(0) = −5 &lt; 0</span> ✓ &nbsp; <span class="m">f(−1) = −12 + 28 + 7 − 5 = 18 &gt; 0</span> ✓</p>

<p><b>b)</b> With ICT you find four zeros: <b>−3.45 ; −2.41 ; 0.41 ; 1.45</b>.<br>
(Exactly this polynomial factors as <span class="m">(x<sup>2</sup> + 2x − 1)(x<sup>2</sup> + 2x − 5)</span>, with zeros <span class="m">−1 ± √2</span> and <span class="m">−1 ± √6</span>.)</p>
<p>Highest-degree term <span class="m">x<sup>4</sup></span> → a <b>+</b> right of 1.45; every zero has multiplicity 1.</p>
<pre class="long">   x   │  −3.45    −2.41     0.41     1.45
 ──────┼────────────────────────────────────────
  f(x) │  +   0   −   0   +   0   −   0   +</pre>
<p>Non-strict (<span class="m">≥</span>) → zeros included:</p>
<div class="eq"><span class="m">V = ]−∞ ; −3.45] ∪ [−2.41 ; 0.41] ∪ [1.45 ; +∞[</span></div>
<p>Check: <span class="m">f(0) = 5 &gt; 0</span> ✓ &nbsp; <span class="m">f(1) = −4 &lt; 0</span> ✓ &nbsp; <span class="m">f(−3) = −4 &lt; 0</span> ✓ &nbsp; <span class="m">f(−4) = 21 &gt; 0</span> ✓</p>`)
}
];
