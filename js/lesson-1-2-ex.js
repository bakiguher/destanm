/* 1.2 — start exercises with fully worked, checked answers (book p. 18, 20, 23) */

EX["3A"] = [{
  num: "3A",
  q: T(
`<p>Bepaal het quotiënt en de rest van de deling van de veelterm <span class="m">A(x)</span> door de eenterm <span class="m">D(x)</span>. Is de deling opgaand of niet-opgaand?</p>
<ol type="a">
  <li><span class="m">A(x) = 3x<sup>5</sup> − 4x<sup>4</sup> + 5x<sup>3</sup></span> &nbsp;en&nbsp; <span class="m">D(x) = x<sup>2</sup></span></li>
  <li><span class="m">A(x) = −x<sup>3</sup> + 5x<sup>2</sup> − 7x<sup>4</sup></span> &nbsp;en&nbsp; <span class="m">D(x) = 5x<sup>2</sup></span></li>
  <li><span class="m">A(x) = x<sup>3</sup> − 2x<sup>2</sup> + 6x − 3</span> &nbsp;en&nbsp; <span class="m">D(x) = 4x<sup>2</sup></span></li>
</ol>`,
`<p>Find the quotient and the remainder of the division of <span class="m">A(x)</span> by the monomial <span class="m">D(x)</span>. Is the division exact or not?</p>
<ol type="a">
  <li><span class="m">A(x) = 3x<sup>5</sup> − 4x<sup>4</sup> + 5x<sup>3</sup></span> and <span class="m">D(x) = x<sup>2</sup></span></li>
  <li><span class="m">A(x) = −x<sup>3</sup> + 5x<sup>2</sup> − 7x<sup>4</sup></span> and <span class="m">D(x) = 5x<sup>2</sup></span></li>
  <li><span class="m">A(x) = x<sup>3</sup> − 2x<sup>2</sup> + 6x − 3</span> and <span class="m">D(x) = 4x<sup>2</sup></span></li>
</ol>`),
  a: T(
`<p><b>a)</b> Elke term heeft graad ≥ 2, dus elke term is deelbaar:<br>
<span class="m">Q(x) = 3x<sup>3</sup> − 4x<sup>2</sup> + 5x</span>, &nbsp; <span class="m">R(x) = 0</span> → <b>opgaand</b>.</p>
<p><b>b)</b> Rangschik eerst: <span class="m">−7x<sup>4</sup> − x<sup>3</sup> + 5x<sup>2</sup></span>. Alle graden ≥ 2:<br>
<span class="m">Q(x) = −</span>${FR('7','5')}<span class="m">x<sup>2</sup> − </span>${FR('1','5')}<span class="m">x + 1</span>, &nbsp; <span class="m">R(x) = 0</span> → <b>opgaand</b>.</p>
<p><b>c)</b> Enkel <span class="m">x<sup>3</sup></span> en <span class="m">−2x<sup>2</sup></span> hebben graad ≥ 2:<br>
<span class="m">Q(x) = </span>${FR('1','4')}<span class="m">x − </span>${FR('1','2')}, &nbsp; <span class="m">R(x) = 6x − 3</span> → <b>niet-opgaand</b>.</p>`,
`<p><b>a)</b> Every term has degree ≥ 2, so every term divides:<br>
<span class="m">Q(x) = 3x<sup>3</sup> − 4x<sup>2</sup> + 5x</span>, &nbsp; <span class="m">R(x) = 0</span> → <b>exact</b>.</p>
<p><b>b)</b> Order it first: <span class="m">−7x<sup>4</sup> − x<sup>3</sup> + 5x<sup>2</sup></span>. All degrees ≥ 2:<br>
<span class="m">Q(x) = −</span>${FR('7','5')}<span class="m">x<sup>2</sup> − </span>${FR('1','5')}<span class="m">x + 1</span>, &nbsp; <span class="m">R(x) = 0</span> → <b>exact</b>.</p>
<p><b>c)</b> Only <span class="m">x<sup>3</sup></span> and <span class="m">−2x<sup>2</sup></span> have degree ≥ 2:<br>
<span class="m">Q(x) = </span>${FR('1','4')}<span class="m">x − </span>${FR('1','2')}, &nbsp; <span class="m">R(x) = 6x − 3</span> → <b>not exact</b>.</p>`)
}];

EX["4A"] = [{
  num: "4A",
  q: T(
`<p>Bepaal het quotiënt en de rest van de euclidische deling van de veeltermen <span class="m">A(x)</span> door <span class="m">D(x)</span>.</p>
<ol type="a">
  <li><span class="m">A(x) = 3x<sup>3</sup> − 6x<sup>2</sup> + 2x − 1</span> &nbsp;en&nbsp; <span class="m">D(x) = x<sup>2</sup> + x − 1</span></li>
  <li><span class="m">A(x) = 3x<sup>3</sup> + 8x<sup>2</sup> − x + 1</span> &nbsp;en&nbsp; <span class="m">D(x) = 3x + 2</span></li>
</ol>`,
`<p>Find the quotient and the remainder of the Euclidean division of <span class="m">A(x)</span> by <span class="m">D(x)</span>.</p>
<ol type="a">
  <li><span class="m">A(x) = 3x<sup>3</sup> − 6x<sup>2</sup> + 2x − 1</span> and <span class="m">D(x) = x<sup>2</sup> + x − 1</span></li>
  <li><span class="m">A(x) = 3x<sup>3</sup> + 8x<sup>2</sup> − x + 1</span> and <span class="m">D(x) = 3x + 2</span></li>
</ol>`),
  a: T(
`<p><b>a)</b></p>
<pre class="long">  3x³ − 6x² +  2x −  1 │ x² + x − 1
 −3x³ − 3x² + 3x      │ 3x − 9
 ──────────────────── │
      −9x² +  5x −  1 │
      +9x² +  9x −  9 │
      ─────────────── │
             14x − 10 │</pre>
<div class="eq"><span class="m">Q(x) = 3x − 9</span>, &nbsp; <span class="m">R(x) = 14x − 10</span></div>
<p>Controle bij <span class="m">x = 1</span>: <span class="m">A(1) = 3 − 6 + 2 − 1 = −2</span>; &nbsp; <span class="m">(1)·(−6) + 4 = −2</span> ✓</p>
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
<p>Controle bij <span class="m">x = 1</span>: <span class="m">A(1) = 3 + 8 − 1 + 1 = 11</span>; &nbsp; <span class="m">5 · (1 + 2 − </span>${FR('5','3')}<span class="m">) + </span>${FR('13','3')}<span class="m"> = 5 · </span>${FR('4','3')}<span class="m"> + </span>${FR('13','3')}<span class="m"> = </span>${FR('33','3')}<span class="m"> = 11</span> ✓</p>`,
`<p><b>a)</b></p>
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
<p>Check at <span class="m">x = 1</span>: <span class="m">A(1) = 3 + 8 − 1 + 1 = 11</span>; &nbsp; <span class="m">5 · (1 + 2 − </span>${FR('5','3')}<span class="m">) + </span>${FR('13','3')}<span class="m"> = 5 · </span>${FR('4','3')}<span class="m"> + </span>${FR('13','3')}<span class="m"> = </span>${FR('33','3')}<span class="m"> = 11</span> ✓</p>`)
}];

EX["5"] = [
{
  num: "5A",
  q: T(
`<p>Bereken het quotiënt en de rest van de deling van de veeltermen <span class="m">A(x)</span> door <span class="m">D(x) = x − a</span>. Noteer het resultaat in de vorm <span class="m">A(x) = (x − a) · Q(x) + r</span>.</p>
<ol type="a">
  <li><span class="m">A(x) = x<sup>3</sup> + 15x<sup>2</sup> + 49x − 55</span> &nbsp;en&nbsp; <span class="m">D(x) = x + 7</span></li>
  <li><span class="m">A(x) = x<sup>3</sup> − 5x − 3</span> &nbsp;en&nbsp; <span class="m">D(x) = x − 2</span></li>
</ol>`,
`<p>Compute the quotient and the remainder of the division of <span class="m">A(x)</span> by <span class="m">D(x) = x − a</span>. Write the result as <span class="m">A(x) = (x − a) · Q(x) + r</span>.</p>
<ol type="a">
  <li><span class="m">A(x) = x<sup>3</sup> + 15x<sup>2</sup> + 49x − 55</span> and <span class="m">D(x) = x + 7</span></li>
  <li><span class="m">A(x) = x<sup>3</sup> − 5x − 3</span> and <span class="m">D(x) = x − 2</span></li>
</ol>`),
  a: T(
`<p><b>a)</b> <span class="m">x + 7 = x − (−7)</span>, dus <span class="m">a = −7</span>. Coëfficiënten <span class="m">1, 15, 49, −55</span>.</p>
<table class="horner">
  <tr><td class="a"></td><td>1</td><td>15</td><td>49</td><td>−55</td></tr>
  <tr><td class="a">−7</td><td>↓</td><td>−7</td><td>−56</td><td>49</td></tr>
  <tr class="res"><td class="a"></td><td>1</td><td>8</td><td>−7</td><td class="rest">−6</td></tr>
</table>
<div class="eq"><span class="m">x<sup>3</sup> + 15x<sup>2</sup> + 49x − 55 = (x + 7)(x<sup>2</sup> + 8x − 7) − 6</span></div>
<p>Controle: <span class="m">A(−7) = −343 + 735 − 343 − 55 = −6</span> ✓</p>
<p><b>b)</b> <span class="m">a = 2</span>. Vervolledig de veelterm: coëfficiënten <span class="m">1, 0, −5, −3</span>.</p>
<table class="horner">
  <tr><td class="a"></td><td>1</td><td>0</td><td>−5</td><td>−3</td></tr>
  <tr><td class="a">2</td><td>↓</td><td>2</td><td>4</td><td>−2</td></tr>
  <tr class="res"><td class="a"></td><td>1</td><td>2</td><td>−1</td><td class="rest">−5</td></tr>
</table>
<div class="eq"><span class="m">x<sup>3</sup> − 5x − 3 = (x − 2)(x<sup>2</sup> + 2x − 1) − 5</span></div>
<p>Controle: <span class="m">A(2) = 8 − 10 − 3 = −5</span> ✓</p>`,
`<p><b>a)</b> <span class="m">x + 7 = x − (−7)</span> so <span class="m">a = −7</span>. Coefficients <span class="m">1, 15, 49, −55</span>.</p>
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
<p>Check: <span class="m">A(2) = 8 − 10 − 3 = −5</span> ✓</p>`)
},
{
  num: "5B",
  q: T(
`<p>Bereken met de reststelling de rest van de deling van de veeltermen <span class="m">A(x)</span> door <span class="m">D(x) = x − a</span> met <span class="m">a ∈ ℝ</span>. Is de deling opgaand of niet-opgaand?</p>
<ol type="a">
  <li><span class="m">A(x) = 3x<sup>2</sup> − 14x − 5</span> &nbsp;en&nbsp; <span class="m">D(x) = x − 5</span></li>
  <li><span class="m">A(x) = 6x<sup>3</sup> − 7x + 11</span> &nbsp;en&nbsp; <span class="m">D(x) = x + 4</span></li>
</ol>`,
`<p>Use the remainder theorem to find the remainder of the division of <span class="m">A(x)</span> by <span class="m">D(x) = x − a</span> with <span class="m">a ∈ ℝ</span>. Is the division exact or not?</p>
<ol type="a">
  <li><span class="m">A(x) = 3x<sup>2</sup> − 14x − 5</span> and <span class="m">D(x) = x − 5</span></li>
  <li><span class="m">A(x) = 6x<sup>3</sup> − 7x + 11</span> and <span class="m">D(x) = x + 4</span></li>
</ol>`),
  a: T(
`<p><b>a)</b> <span class="m">a = 5</span>: &nbsp; <span class="m">r = A(5) = 3·25 − 14·5 − 5 = 75 − 70 − 5 = <b>0</b></span><br>
De deling is <b>opgaand</b> — <span class="m">x − 5</span> is dus een deler van <span class="m">A(x)</span>.</p>
<p><b>b)</b> <span class="m">x + 4 = x − (−4)</span>, dus <span class="m">a = −4</span>:<br>
<span class="m">r = A(−4) = 6·(−64) − 7·(−4) + 11 = −384 + 28 + 11 = <b>−345</b></span><br>
De deling is <b>niet-opgaand</b>.</p>`,
`<p><b>a)</b> <span class="m">a = 5</span>: &nbsp; <span class="m">r = A(5) = 3·25 − 14·5 − 5 = 75 − 70 − 5 = <b>0</b></span><br>
The division is <b>exact</b> — so <span class="m">x − 5</span> is a divisor of <span class="m">A(x)</span>.</p>
<p><b>b)</b> <span class="m">x + 4 = x − (−4)</span> so <span class="m">a = −4</span>:<br>
<span class="m">r = A(−4) = 6·(−64) − 7·(−4) + 11 = −384 + 28 + 11 = <b>−345</b></span><br>
The division is <b>not exact</b>.</p>`)
},
{
  num: "5C",
  q: T(
`<p>Ontbind de veelterm <span class="m">A(x)</span> in factoren.</p>
<ol type="a">
  <li><span class="m">A(x) = 2x<sup>3</sup> − 3x<sup>2</sup> − 9x + 10</span></li>
  <li><span class="m">A(x) = 4x<sup>3</sup> − 27x + 27</span></li>
</ol>`,
`<p>Factor the polynomial <span class="m">A(x)</span> completely.</p>
<ol type="a">
  <li><span class="m">A(x) = 2x<sup>3</sup> − 3x<sup>2</sup> − 9x + 10</span></li>
  <li><span class="m">A(x) = 4x<sup>3</sup> − 27x + 27</span></li>
</ol>`),
  a: T(
`<p><b>a)</b> Constante term 10 → kandidaten <span class="m">±1, ±2, ±5, ±10</span>.<br>
<span class="m">A(1) = 2 − 3 − 9 + 10 = 0</span> → <span class="m">x − 1</span> is een deler.</p>
<table class="horner">
  <tr><td class="a"></td><td>2</td><td>−3</td><td>−9</td><td>10</td></tr>
  <tr><td class="a">1</td><td>↓</td><td>2</td><td>−1</td><td>−10</td></tr>
  <tr class="res"><td class="a"></td><td>2</td><td>−1</td><td>−10</td><td class="rest">0</td></tr>
</table>
<p>Ontbind nu <span class="m">2x<sup>2</sup> − x − 10</span>: &nbsp; <span class="m">D = 1 + 80 = 81</span>, <span class="m">√D = 9</span>, <span class="m">x = </span>${FR('1 ± 9','4')} → <span class="m">x<sub>1</sub> = </span>${FR('5','2')}, <span class="m">x<sub>2</sub> = −2</span>.</p>
<div class="eq"><span class="m">2x<sup>2</sup> − x − 10 = 2(x − </span>${FR('5','2')}<span class="m">)(x + 2) = (2x − 5)(x + 2)</span></div>
<div class="eq"><span class="m">A(x) = (x − 1)(2x − 5)(x + 2)</span></div>
<p>Controleer de constante term: <span class="m">(−1)(−5)(2) = 10</span> ✓</p>
<p><b>b)</b> Constante term 27 → kandidaten <span class="m">±1, ±3, ±9, ±27</span>.<br>
<span class="m">A(1) = 4</span>, <span class="m">A(−1) = 50</span>, <span class="m">A(3) = 54</span>, &nbsp; <span class="m">A(−3) = −108 + 81 + 27 = 0</span> → <span class="m">x + 3</span> is een deler.</p>
<table class="horner">
  <tr><td class="a"></td><td>4</td><td>0</td><td>−27</td><td>27</td></tr>
  <tr><td class="a">−3</td><td>↓</td><td>−12</td><td>36</td><td>−27</td></tr>
  <tr class="res"><td class="a"></td><td>4</td><td>−12</td><td>9</td><td class="rest">0</td></tr>
</table>
<p><span class="m">4x<sup>2</sup> − 12x + 9 = (2x − 3)<sup>2</sup></span> — een merkwaardig product.</p>
<div class="eq"><span class="m">A(x) = (x + 3)(2x − 3)<sup>2</sup></span></div>
<p>Controleer de constante term: <span class="m">3 · 9 = 27</span> ✓</p>`,
`<p><b>a)</b> Constant term 10 → candidates <span class="m">±1, ±2, ±5, ±10</span>.<br>
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
<p>Check the constant term: <span class="m">3 · 9 = 27</span> ✓</p>`)
}
];
