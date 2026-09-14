/* 1.3 — start exercises with fully worked, checked answers (book p. 24, 27) */

EX["6A"] = [{
  num: "6A",
  q: T(
`<p>Bepaal algebraïsch de nulwaarden van de veeltermfunctie <span class="m">f</span>. Noteer alle nulwaarden en hun multipliciteit.</p>
<ol type="a">
  <li><span class="m">f(x) = (x + 5)(x<sup>2</sup> − 4)</span></li>
  <li><span class="m">f(x) = (x − 3)<sup>2</sup>(−3x + 7)<sup>3</sup></span></li>
  <li><span class="m">f(x) = 2x<sup>3</sup> + 7x<sup>2</sup> − 2x − 7</span></li>
  <li><span class="m">f(x) = x<sup>3</sup> + x<sup>2</sup> − 5x + 3</span></li>
  <li><span class="m">f(x) = 6x<sup>3</sup> − 23x<sup>2</sup> + 12x + 20</span></li>
</ol>`,
`<p>Determine the zeros of the polynomial function <span class="m">f</span> algebraically. Give all zeros and their multiplicity.</p>
<ol type="a">
  <li><span class="m">f(x) = (x + 5)(x<sup>2</sup> − 4)</span></li>
  <li><span class="m">f(x) = (x − 3)<sup>2</sup>(−3x + 7)<sup>3</sup></span></li>
  <li><span class="m">f(x) = 2x<sup>3</sup> + 7x<sup>2</sup> − 2x − 7</span></li>
  <li><span class="m">f(x) = x<sup>3</sup> + x<sup>2</sup> − 5x + 3</span></li>
  <li><span class="m">f(x) = 6x<sup>3</sup> − 23x<sup>2</sup> + 12x + 20</span></li>
</ol>`),
  a: T(
`<p><b>a)</b> <span class="m">f(x) = (x + 5)(x − 2)(x + 2)</span><br>
Nulwaarden: <b>−5, −2 en 2</b>, elk met multipliciteit <b>1</b>.</p>

<p><b>b)</b> Al ontbonden. <span class="m">x − 3 = 0 ⟺ x = 3</span> en <span class="m">−3x + 7 = 0 ⟺ x = </span>${FR('7','3')}.<br>
Nulwaarden: <b>3</b> met multipliciteit <b>2</b>, &nbsp;${FR('7','3')} met multipliciteit <b>3</b>.</p>

<p><b>c)</b> Groepeer: <span class="m">x<sup>2</sup>(2x + 7) − (2x + 7) = (2x + 7)(x<sup>2</sup> − 1)</span></p>
<div class="eq"><span class="m">f(x) = (2x + 7)(x − 1)(x + 1)</span></div>
<p>Nulwaarden: <b>−</b>${FR('7','2')}<b>, −1 en 1</b>, elk met multipliciteit <b>1</b>.</p>

<p><b>d)</b> Constante term 3 → kandidaten <span class="m">±1, ±3</span>. <span class="m">f(1) = 1 + 1 − 5 + 3 = 0</span> ✓</p>
<table class="horner">
  <tr><td class="a"></td><td>1</td><td>1</td><td>−5</td><td>3</td></tr>
  <tr><td class="a">1</td><td>↓</td><td>1</td><td>2</td><td>−3</td></tr>
  <tr class="res"><td class="a"></td><td>1</td><td>2</td><td>−3</td><td class="rest">0</td></tr>
</table>
<p><span class="m">x<sup>2</sup> + 2x − 3 = (x + 3)(x − 1)</span>, dus <span class="m">f(x) = (x − 1)<sup>2</sup>(x + 3)</span>.</p>
<p>Nulwaarden: <b>1</b> met multipliciteit <b>2</b>, <b>−3</b> met multipliciteit <b>1</b>.</p>

<p><b>e)</b> Constante term 20 → kandidaten <span class="m">±1, ±2, ±4, ±5, ±10, ±20</span>.<br>
<span class="m">f(1) = 15</span>, <span class="m">f(−1) = −21</span>, <span class="m">f(2) = 48 − 92 + 24 + 20 = 0</span> ✓</p>
<table class="horner">
  <tr><td class="a"></td><td>6</td><td>−23</td><td>12</td><td>20</td></tr>
  <tr><td class="a">2</td><td>↓</td><td>12</td><td>−22</td><td>−20</td></tr>
  <tr class="res"><td class="a"></td><td>6</td><td>−11</td><td>−10</td><td class="rest">0</td></tr>
</table>
<p><span class="m">6x<sup>2</sup> − 11x − 10</span>: <span class="m">D = 121 + 240 = 361</span>, <span class="m">√D = 19</span>, <span class="m">x = </span>${FR('11 ± 19','12')} → ${FR('5','2')} <span class="m">en −</span>${FR('2','3')}.</p>
<div class="eq"><span class="m">f(x) = (x − 2)(2x − 5)(3x + 2)</span></div>
<p>Nulwaarden: <b>−</b>${FR('2','3')}<b>, 2 en </b>${FR('5','2')}, elk met multipliciteit <b>1</b>.<br>
Controle constante term: <span class="m">(−2)(−5)(2) = 20</span> ✓</p>`,

`<p><b>a)</b> <span class="m">f(x) = (x + 5)(x − 2)(x + 2)</span><br>
Zeros: <b>−5, −2 and 2</b>, each with multiplicity <b>1</b>.</p>

<p><b>b)</b> Already factored. <span class="m">x − 3 = 0 ⟺ x = 3</span> and <span class="m">−3x + 7 = 0 ⟺ x = </span>${FR('7','3')}.<br>
Zeros: <b>3</b> with multiplicity <b>2</b>, &nbsp;${FR('7','3')} with multiplicity <b>3</b>.</p>

<p><b>c)</b> Group: <span class="m">x<sup>2</sup>(2x + 7) − (2x + 7) = (2x + 7)(x<sup>2</sup> − 1)</span></p>
<div class="eq"><span class="m">f(x) = (2x + 7)(x − 1)(x + 1)</span></div>
<p>Zeros: <b>−</b>${FR('7','2')}<b>, −1 and 1</b>, each with multiplicity <b>1</b>.</p>

<p><b>d)</b> Constant term 3 → candidates <span class="m">±1, ±3</span>. <span class="m">f(1) = 1 + 1 − 5 + 3 = 0</span> ✓</p>
<table class="horner">
  <tr><td class="a"></td><td>1</td><td>1</td><td>−5</td><td>3</td></tr>
  <tr><td class="a">1</td><td>↓</td><td>1</td><td>2</td><td>−3</td></tr>
  <tr class="res"><td class="a"></td><td>1</td><td>2</td><td>−3</td><td class="rest">0</td></tr>
</table>
<p><span class="m">x<sup>2</sup> + 2x − 3 = (x + 3)(x − 1)</span>, so <span class="m">f(x) = (x − 1)<sup>2</sup>(x + 3)</span>.</p>
<p>Zeros: <b>1</b> with multiplicity <b>2</b>, <b>−3</b> with multiplicity <b>1</b>.</p>

<p><b>e)</b> Constant term 20 → candidates <span class="m">±1, ±2, ±4, ±5, ±10, ±20</span>.<br>
<span class="m">f(1) = 15</span>, <span class="m">f(−1) = −21</span>, <span class="m">f(2) = 48 − 92 + 24 + 20 = 0</span> ✓</p>
<table class="horner">
  <tr><td class="a"></td><td>6</td><td>−23</td><td>12</td><td>20</td></tr>
  <tr><td class="a">2</td><td>↓</td><td>12</td><td>−22</td><td>−20</td></tr>
  <tr class="res"><td class="a"></td><td>6</td><td>−11</td><td>−10</td><td class="rest">0</td></tr>
</table>
<p><span class="m">6x<sup>2</sup> − 11x − 10</span>: <span class="m">D = 121 + 240 = 361</span>, <span class="m">√D = 19</span>, <span class="m">x = </span>${FR('11 ± 19','12')} → ${FR('5','2')} <span class="m">and −</span>${FR('2','3')}.</p>
<div class="eq"><span class="m">f(x) = (x − 2)(2x − 5)(3x + 2)</span></div>
<p>Zeros: <b>−</b>${FR('2','3')}<b>, 2 and </b>${FR('5','2')}, each with multiplicity <b>1</b>.<br>
Check the constant term: <span class="m">(−2)(−5)(2) = 20</span> ✓</p>`)
}];

EX["7"] = [
{
  num: "7A",
  q: T(
`<p>Bepaal algebraïsch de nulwaarden en noteer het tekenschema van de veeltermfuncties <span class="m">f</span>.</p>
<ol type="a">
  <li><span class="m">f(x) = (x − 1)(x<sup>2</sup> − 9)</span></li>
  <li><span class="m">f(x) = (x − 2)<sup>2</sup>(3x + 5)<sup>3</sup></span></li>
  <li><span class="m">f(x) = x<sup>3</sup> + 5x<sup>2</sup> − x − 5</span></li>
</ol>`,
`<p>Determine the zeros algebraically and give the sign chart of the polynomial functions <span class="m">f</span>.</p>
<ol type="a">
  <li><span class="m">f(x) = (x − 1)(x<sup>2</sup> − 9)</span></li>
  <li><span class="m">f(x) = (x − 2)<sup>2</sup>(3x + 5)<sup>3</sup></span></li>
  <li><span class="m">f(x) = x<sup>3</sup> + 5x<sup>2</sup> − x − 5</span></li>
</ol>`),
  a: T(
`<p><b>a)</b> <span class="m">f(x) = (x − 1)(x − 3)(x + 3)</span> → nulwaarden <b>−3, 1, 3</b> (alle multipliciteit 1).<br>
Hoogstegraadsterm <span class="m">x<sup>3</sup></span> → rechts van 3 een <b>+</b>; alle multipliciteiten oneven → teken wisselt telkens.</p>
<pre class="long">   x   │     −3        1        3
 ──────┼──────────────────────────────
  f(x) │  −   0   +    0   −    0   +</pre>
<p>Controle: <span class="m">f(0) = (−1)(−9) = 9 &gt; 0</span> ✓</p>

<p><b>b)</b> Nulwaarden: <b>2</b> (multipliciteit 2) en <span class="m">3x + 5 = 0 ⟺ x = −</span>${FR('5','3')} (multipliciteit 3).<br>
Uitgewerkt is de hoogstegraadsterm <span class="m">x<sup>2</sup> · 27x<sup>3</sup> = 27x<sup>5</sup></span> → rechts van 2 een <b>+</b>.<br>
Bij 2 (even) blijft het teken <b>+</b>; bij −${FR('5','3')} (oneven) wisselt het naar <b>−</b>.</p>
<pre class="long">   x   │    −5/3        2
 ──────┼─────────────────────────
  f(x) │  −   0    +    0    +</pre>
<p>Controle: <span class="m">f(0) = (−2)<sup>2</sup>·5<sup>3</sup> = 500 &gt; 0</span> ✓</p>

<p><b>c)</b> Groepeer: <span class="m">x<sup>2</sup>(x + 5) − (x + 5) = (x + 5)(x<sup>2</sup> − 1) = (x + 5)(x − 1)(x + 1)</span><br>
Nulwaarden: <b>−5, −1, 1</b> (alle multipliciteit 1). Hoogstegraadsterm <span class="m">x<sup>3</sup></span> → rechts van 1 een <b>+</b>.</p>
<pre class="long">   x   │     −5       −1        1
 ──────┼──────────────────────────────
  f(x) │  −   0   +    0   −    0   +</pre>
<p>Controle: <span class="m">f(0) = −5 &lt; 0</span> ✓</p>`,

`<p><b>a)</b> <span class="m">f(x) = (x − 1)(x − 3)(x + 3)</span> → zeros <b>−3, 1, 3</b> (all multiplicity 1).<br>
Highest-degree term <span class="m">x<sup>3</sup></span> → a <b>+</b> right of 3; all multiplicities odd → the sign switches each time.</p>
<pre class="long">   x   │     −3        1        3
 ──────┼──────────────────────────────
  f(x) │  −   0   +    0   −    0   +</pre>
<p>Check: <span class="m">f(0) = (−1)(−9) = 9 &gt; 0</span> ✓</p>

<p><b>b)</b> Zeros: <b>2</b> (multiplicity 2) and <span class="m">3x + 5 = 0 ⟺ x = −</span>${FR('5','3')} (multiplicity 3).<br>
Expanded, the highest-degree term is <span class="m">x<sup>2</sup> · 27x<sup>3</sup> = 27x<sup>5</sup></span> → a <b>+</b> right of 2.<br>
At 2 (even) the sign stays <b>+</b>; at −${FR('5','3')} (odd) it switches to <b>−</b>.</p>
<pre class="long">   x   │    −5/3        2
 ──────┼─────────────────────────
  f(x) │  −   0    +    0    +</pre>
<p>Check: <span class="m">f(0) = (−2)<sup>2</sup>·5<sup>3</sup> = 500 &gt; 0</span> ✓</p>

<p><b>c)</b> Group: <span class="m">x<sup>2</sup>(x + 5) − (x + 5) = (x + 5)(x<sup>2</sup> − 1) = (x + 5)(x − 1)(x + 1)</span><br>
Zeros: <b>−5, −1, 1</b> (all multiplicity 1). Highest-degree term <span class="m">x<sup>3</sup></span> → a <b>+</b> right of 1.</p>
<pre class="long">   x   │     −5       −1        1
 ──────┼──────────────────────────────
  f(x) │  −   0   +    0   −    0   +</pre>
<p>Check: <span class="m">f(0) = −5 &lt; 0</span> ✓</p>`)
},
{
  num: "7B",
  q: T(
`<p>Bepaal de nulwaarden (op 0,01 nk.) en noteer het tekenschema van de veeltermfuncties <span class="m">f</span> met behulp van ICT.</p>
<ol type="a">
  <li><span class="m">f(x) = x<sup>3</sup> − 6x<sup>2</sup> + 5x − 1</span></li>
  <li><span class="m">f(x) = 3x<sup>3</sup> − x<sup>2</sup> + 7</span></li>
</ol>`,
`<p>Find the zeros (to 0.01) and give the sign chart of the polynomial functions <span class="m">f</span> using ICT.</p>
<ol type="a">
  <li><span class="m">f(x) = x<sup>3</sup> − 6x<sup>2</sup> + 5x − 1</span></li>
  <li><span class="m">f(x) = 3x<sup>3</sup> − x<sup>2</sup> + 7</span></li>
</ol>`),
  a: T(
`<p><b>a)</b> Nulwaarden: <b>0,31</b>; <b>0,64</b> en <b>5,05</b> — drie enkelvoudige nulwaarden.<br>
Hoogstegraadsterm <span class="m">x<sup>3</sup></span> → rechts van 5,05 een <b>+</b>.</p>
<pre class="long">   x   │    0,31       0,64       5,05
 ──────┼───────────────────────────────────
  f(x) │  −   0    +    0    −     0    +</pre>
<p>Controle: <span class="m">f(0) = −1 &lt; 0</span> ✓ &nbsp; <span class="m">f(0,5) = 0,125 &gt; 0</span> ✓ &nbsp; <span class="m">f(1) = −1 &lt; 0</span> ✓ &nbsp; <span class="m">f(6) = 29 &gt; 0</span> ✓</p>

<p><b>b)</b> Deze functie heeft maar <b>één</b> nulwaarde: <b>−1,22</b>.<br>
(De afgeleide <span class="m">9x<sup>2</sup> − 2x</span> geeft toppen in <span class="m">x = 0</span> en <span class="m">x = </span>${FR('2','9')}; daar is <span class="m">f</span> respectievelijk 7 en ≈ 6,98, dus allebei positief — de grafiek snijdt de x-as maar één keer.)</p>
<pre class="long">   x   │   −1,22
 ──────┼──────────────
  f(x) │  −   0   +</pre>
<p>Controle: <span class="m">f(−2) = −24 − 4 + 7 = −21 &lt; 0</span> ✓ &nbsp; <span class="m">f(0) = 7 &gt; 0</span> ✓</p>`,

`<p><b>a)</b> Zeros: <b>0.31</b>, <b>0.64</b> and <b>5.05</b> — three simple zeros.<br>
Highest-degree term <span class="m">x<sup>3</sup></span> → a <b>+</b> right of 5.05.</p>
<pre class="long">   x   │    0.31       0.64       5.05
 ──────┼───────────────────────────────────
  f(x) │  −   0    +    0    −     0    +</pre>
<p>Check: <span class="m">f(0) = −1 &lt; 0</span> ✓ &nbsp; <span class="m">f(0.5) = 0.125 &gt; 0</span> ✓ &nbsp; <span class="m">f(1) = −1 &lt; 0</span> ✓ &nbsp; <span class="m">f(6) = 29 &gt; 0</span> ✓</p>

<p><b>b)</b> This function has only <b>one</b> zero: <b>−1.22</b>.<br>
(The derivative <span class="m">9x<sup>2</sup> − 2x</span> gives turning points at <span class="m">x = 0</span> and <span class="m">x = </span>${FR('2','9')}; there <span class="m">f</span> is 7 and ≈ 6.98 — both positive, so the graph crosses the x-axis only once.)</p>
<pre class="long">   x   │   −1.22
 ──────┼──────────────
  f(x) │  −   0   +</pre>
<p>Check: <span class="m">f(−2) = −24 − 4 + 7 = −21 &lt; 0</span> ✓ &nbsp; <span class="m">f(0) = 7 &gt; 0</span> ✓</p>`)
}
];
