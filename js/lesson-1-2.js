/* 1.2 — book pages 18–23.  Exercise items come from lesson-1-2-ex.js */
const EX_1_2 = {};   // filled in by lesson-1-2-ex.js, read at render time

LESSONS.push({
  id: "1.2", code: "1.2", chapter: 1, pages: "18 – 23",
  title: T("Euclidische deling en deelbaarheid van veeltermen", "Euclidean division and divisibility of polynomials"),
  lede: T("Het hart van hoofdstuk 1. Drie technieken — de euclidische deling, het schema van Horner en de reststelling — dienen allemaal één doel: een veelterm schrijven als een product van factoren. Je gebruikt dit in elk volgend hoofdstuk opnieuw.",
          "The heart of chapter 1. Three techniques — long division, Horner's scheme and the remainder theorem — all serve one goal: writing a polynomial as a product of factors. You will reuse this in every later chapter."),

  checklist: [
    T("Ik kan een veelterm delen door een eenterm en zeggen of de deling opgaat","I can divide a polynomial by a monomial and say whether the division is exact"),
    T("Ik kan een euclidische deling (staartdeling) van twee veeltermen uitvoeren","I can carry out a Euclidean division (long division) of two polynomials"),
    T("Ik kan het resultaat schrijven als A(x) = D(x)·Q(x) + R(x) en het controleren met een getalwaarde","I can write the result as A(x) = D(x)·Q(x) + R(x) and check it with a numerical value"),
    T("Ik kan het schema van Horner gebruiken om te delen door x − a","I can use Horner's scheme to divide by x − a"),
    T("Ik kan met de reststelling de rest vinden zonder de deling uit te voeren","I can use the remainder theorem to find the remainder without doing the division"),
    T("Ik kan delers x − a zoeken via de gehele delers van de constante term","I can find divisors x − a by testing the integer divisors of the constant term"),
    T("Ik kan een derdegraadsveelterm volledig ontbinden in factoren","I can factor a third-degree polynomial completely")
  ],

  blocks: [
    { type:"plain", html: T(`<h2>3 · Veeltermen delen door een eenterm</h2>`, `<h2>3 · Dividing a polynomial by a monomial</h2>`) },

    { type:"text", html: T(
`<p>Vertrek van een vermenigvuldiging die je kent:</p>
<div class="eq"><span class="m">(4x<sup>3</sup> + 2x<sup>2</sup> − x) · (3x<sup>2</sup>) = 12x<sup>5</sup> + 6x<sup>4</sup> − 3x<sup>3</sup></span></div>
<p>Dus geldt <span class="m">(12x<sup>5</sup> + 6x<sup>4</sup> − 3x<sup>3</sup>) : (3x<sup>2</sup>) = 4x<sup>3</sup> + 2x<sup>2</sup> − x</span>.</p>
<dl class="kv">
  <dt>deeltal</dt><dd>de veelterm die je deelt, hier <span class="m">12x<sup>5</sup> + 6x<sup>4</sup> − 3x<sup>3</sup></span></dd>
  <dt>deler</dt><dd>waardoor je deelt, hier <span class="m">3x<sup>2</sup></span></dd>
</dl>
<p>Elke term had hier een graad die <b>minstens even hoog</b> is als die van de eenterm, dus elke term was deelbaar en de rest is 0. Een deling van veeltermen met rest 0 noem je een <b>opgaande deling</b>.</p>`,
`<p>Start from a multiplication you know:</p>
<div class="eq"><span class="m">(4x<sup>3</sup> + 2x<sup>2</sup> − x) · (3x<sup>2</sup>) = 12x<sup>5</sup> + 6x<sup>4</sup> − 3x<sup>3</sup></span></div>
<p>So <span class="m">(12x<sup>5</sup> + 6x<sup>4</sup> − 3x<sup>3</sup>) : (3x<sup>2</sup>) = 4x<sup>3</sup> + 2x<sup>2</sup> − x</span>.</p>
<dl class="kv">
  <dt>dividend</dt><dd><i>deeltal</i> — the polynomial you divide, here <span class="m">12x<sup>5</sup> + 6x<sup>4</sup> − 3x<sup>3</sup></span></dd>
  <dt>divisor</dt><dd><i>deler</i> — what you divide by, here <span class="m">3x<sup>2</sup></span></dd>
</dl>
<p>Every term here had a degree <b>at least as high as</b> the divisor, so every term was divisible and the remainder is 0. A division with remainder 0 is an <b>exact division</b> (<i>opgaande deling</i>).</p>`) },

    { type:"example", title: T("Voorbeeld — een deling die niet opgaat","Worked example — a division that is not exact"), html: T(
`<p>Deel <span class="m">−3x<sup>3</sup> + 9x<sup>2</sup> + 5x − 4</span> door <span class="m">3x<sup>2</sup></span>.</p>
<p>De eerste twee termen lukken: <span class="m">−3x<sup>3</sup> : 3x<sup>2</sup> = −x</span> en <span class="m">9x<sup>2</sup> : 3x<sup>2</sup> = 3</span>.</p>
<p>De laatste twee niet: <span class="m">5x : 3x<sup>2</sup> = </span>${FR('5','3')}<span class="m">x<sup>−1</sup></span> en <span class="m">−4 : 3x<sup>2</sup> = −</span>${FR('4','3')}<span class="m">x<sup>−2</sup></span>. Negatieve exponenten → dat zijn geen eentermen.</p>
<p>De termen van het deeltal die niet deelbaar zijn, blijven dus over als de <b>rest van de deling</b>:</p>
<div class="eq"><span class="m">Q(x) = −x + 3</span> &nbsp;&nbsp;en&nbsp;&nbsp; <span class="m">R(x) = 5x − 4</span></div>
<p>Dit is een <b>niet-opgaande deling</b>. Merk op: <span class="m">gr(R(x)) &lt; gr(D(x))</span>.</p>`,
`<p>Divide <span class="m">−3x<sup>3</sup> + 9x<sup>2</sup> + 5x − 4</span> by <span class="m">3x<sup>2</sup></span>.</p>
<p>The first two terms work fine: <span class="m">−3x<sup>3</sup> : 3x<sup>2</sup> = −x</span> and <span class="m">9x<sup>2</sup> : 3x<sup>2</sup> = 3</span>.</p>
<p>The last two don't: <span class="m">5x : 3x<sup>2</sup> = </span>${FR('5','3')}<span class="m">x<sup>−1</sup></span> and <span class="m">−4 : 3x<sup>2</sup> = −</span>${FR('4','3')}<span class="m">x<sup>−2</sup></span>. Negative exponents → these are not monomials.</p>
<p>So the terms that are not divisible stay behind as the <b>remainder</b>:</p>
<div class="eq"><span class="m">Q(x) = −x + 3</span> &nbsp;&nbsp;and&nbsp;&nbsp; <span class="m">R(x) = 5x − 4</span></div>
<p>This is a <b>non-exact division</b> (<i>niet-opgaande deling</i>). Notice: <span class="m">gr(R(x)) &lt; gr(D(x))</span>.</p>`) },

    { type:"concept", title: T("Begrippen — delen door een eenterm","Definition — dividing by a monomial"), html: T(
`<p>Deel je een veelterm <span class="m">A(x)</span> door een eenterm <span class="m">D(x) ≠ 0 · x<sup>n</sup></span> met <span class="m">n ∈ ℕ</span>, dan bekom je een quotiënt <span class="m">Q(x) ∈ ℝ[x]</span> en een rest <span class="m">R(x) ∈ ℝ[x]</span> met</p>
<div class="eq"><span class="m">A(x) = D(x) · Q(x) + R(x)</span> &nbsp;&nbsp;en&nbsp;&nbsp; <span class="m">gr(R(x)) &lt; gr(D(x))</span></div>
<ul style="margin-bottom:0">
  <li>Rest <b>= 0</b> → de deling is <b>opgaand</b>.</li>
  <li>Rest <b>≠ 0</b> → de deling is <b>niet-opgaand</b>.</li>
  <li>Is de rest een gewoon reëel getal, noteer je <span class="m">r</span> in plaats van <span class="m">R(x)</span>.</li>
</ul>`,
`<p>Divide a polynomial <span class="m">A(x)</span> by a monomial <span class="m">D(x) ≠ 0 · x<sup>n</sup></span> with <span class="m">n ∈ ℕ</span>. You get a quotient <span class="m">Q(x) ∈ ℝ[x]</span> and a remainder <span class="m">R(x) ∈ ℝ[x]</span> with</p>
<div class="eq"><span class="m">A(x) = D(x) · Q(x) + R(x)</span> &nbsp;&nbsp;and&nbsp;&nbsp; <span class="m">gr(R(x)) &lt; gr(D(x))</span></div>
<ul style="margin-bottom:0">
  <li>Remainder <b>= 0</b> → the division is <b>exact</b> (<i>opgaand</i>).</li>
  <li>Remainder <b>≠ 0</b> → the division is <b>not exact</b> (<i>niet-opgaand</i>).</li>
  <li>If the remainder is a plain real number, write it as <span class="m">r</span> instead of <span class="m">R(x)</span>.</li>
</ul>`) },

    { type:"exercises", title: T("Startoefening (boek p. 18)","Start exercise (book p. 18)"), from: "3A" },

    { type:"plain", html: T(`<h2>4 · Euclidische deling</h2>`, `<h2>4 · Euclidean division (long division)</h2>`) },

    { type:"text", html: T(
`<p>Om een veelterm te delen door <b>een andere veelterm</b> ga je te werk zoals bij de staartdeling van gehele getallen.</p>
<p>Twee regels vooraf:</p>
<ol>
  <li>Rangschik deeltal en deler in <b>dalende</b> machten van <span class="m">x</span>.</li>
  <li>Is het deeltal een onvolledige veelterm, <b>vul de ontbrekende termen aan met coëfficiënten nul</b>.</li>
</ol>`,
`<p>To divide a polynomial by <b>another polynomial</b> you work exactly like long division of whole numbers.</p>
<p>Two rules before you start:</p>
<ol>
  <li>Write dividend and divisor in <b>descending</b> powers of <span class="m">x</span>.</li>
  <li>If the dividend is incomplete, <b>fill the gaps with coefficient 0</b>.</li>
</ol>`) },

    { type:"example", title: T("Voorbeeld — (6x³ − 17x² + 14) : (3x² − x − 6)","Worked example — (6x³ − 17x² + 14) : (3x² − x − 6)"), html: T(
`<p>Het deeltal heeft geen term in <span class="m">x</span>, dus schrijf <span class="m">0x</span>.</p>
<p><b>Stap 1.</b> <span class="m">6x<sup>3</sup> : 3x<sup>2</sup> = 2x</span> → eerste term van het quotiënt. Vermenigvuldig terug: <span class="m">2x(3x<sup>2</sup> − x − 6) = 6x<sup>3</sup> − 2x<sup>2</sup> − 12x</span>. Noteer het <b>tegengestelde</b> eronder en tel op.</p>
<p><b>Stap 2.</b> De tussenrest is <span class="m">−15x<sup>2</sup> + 12x + 14</span>. Nu <span class="m">−15x<sup>2</sup> : 3x<sup>2</sup> = −5</span>. Vermenigvuldig terug: <span class="m">−5(3x<sup>2</sup> − x − 6) = −15x<sup>2</sup> + 5x + 30</span>, noteer het tegengestelde, tel op.</p>
<pre class="long">  6x³ − 17x² +  0x + 14 │ 3x² − x − 6
 −6x³ +  2x² + 12x      │ 2x  − 5
 ─────────────────────  │
      −15x² + 12x + 14  │
      +15x² −  5x − 30  │
      ────────────────  │
              7x − 16   │</pre>
<p><b>Stop</b> zodra de graad van de tussenrest kleiner is dan de graad van de deler. Hier is <span class="m">gr(7x − 16) = 1 &lt; 2</span>, dus:</p>
<div class="eq"><span class="m">Q(x) = 2x − 5</span> &nbsp;en&nbsp; <span class="m">R(x) = 7x − 16</span></div>
<div class="eq"><span class="m">6x<sup>3</sup> − 17x<sup>2</sup> + 14 = (2x − 5)(3x<sup>2</sup> − x − 6) + (7x − 16)</span></div>`,
`<p>The dividend has no term in <span class="m">x</span>, so write <span class="m">0x</span>.</p>
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
<div class="eq"><span class="m">6x<sup>3</sup> − 17x<sup>2</sup> + 14 = (2x − 5)(3x<sup>2</sup> − x − 6) + (7x − 16)</span></div>`) },

    { type:"steps", title: T("Stappenplan — euclidische deling van veeltermen","Step plan — Euclidean division of polynomials"), html: T(
`<ol>
  <li>Rangschik zowel <span class="m">A(x)</span> als <span class="m">D(x)</span> in dalende machten van <span class="m">x</span>. Vervolledig <span class="m">A(x)</span> indien nodig.</li>
  <li>Deel de eerste term van het deeltal door de eerste term van de deler → die eenterm is de volgende term van <span class="m">Q(x)</span>.</li>
  <li>Vermenigvuldig die term met <b>elke</b> term van de deler en noteer het <b>tegengestelde</b> van elk product onder de gelijksoortige termen.</li>
  <li>Tel op. Je krijgt een tussenrest.</li>
  <li>Herhaal stap 2 t.e.m. 4 tot de graad van de tussenrest <b>kleiner</b> is dan de graad van de deler. Die laatste tussenrest is de rest.</li>
  <li>Noteer de oplossing als <span class="m">A(x) = Q(x) · D(x) + R(x)</span> met <span class="m">gr(R(x)) &lt; gr(D(x))</span>.</li>
</ol>`,
`<ol>
  <li>Put both <span class="m">A(x)</span> and <span class="m">D(x)</span> in descending powers of <span class="m">x</span>. Complete <span class="m">A(x)</span> with zero coefficients if needed.</li>
  <li>Divide the first term of the dividend by the first term of the divisor → this monomial is the next term of <span class="m">Q(x)</span>.</li>
  <li>Multiply that term by <b>every</b> term of the divisor and write the <b>opposite</b> of each product under the like terms.</li>
  <li>Add up. You get an intermediate remainder.</li>
  <li>Repeat steps 2–4 until the degree of the intermediate remainder is <b>smaller</b> than the degree of the divisor. That last intermediate remainder is the remainder.</li>
  <li>Write the answer as <span class="m">A(x) = Q(x) · D(x) + R(x)</span> with <span class="m">gr(R(x)) &lt; gr(D(x))</span>.</li>
</ol>`) },

    { type:"example", title: T("Je antwoord controleren — doe dit altijd","Checking your answer — always do this"), html: T(
`<p>Kies een handig reëel getal (meestal <span class="m">x = 1</span>) en controleer dat <span class="m">A(1) = Q(1)·D(1) + R(1)</span>.</p>
<p>Voorbeeld: <span class="m">4x<sup>2</sup> − 1 = (4x − 12)(x + 3) + 35</span>.</p>
<div class="eq"><span class="m">A(1) = 4 · 1 − 1 = 3</span></div>
<div class="eq"><span class="m">Q(1)·D(1) + r = (4 − 12)(1 + 3) + 35 = (−8)·4 + 35 = −32 + 35 = 3</span> ✓</div>`,
`<p>Pick any convenient real number (usually <span class="m">x = 1</span>) and check that <span class="m">A(1) = Q(1)·D(1) + R(1)</span>.</p>
<p>Example: <span class="m">4x<sup>2</sup> − 1 = (4x − 12)(x + 3) + 35</span>.</p>
<div class="eq"><span class="m">A(1) = 4 · 1 − 1 = 3</span></div>
<div class="eq"><span class="m">Q(1)·D(1) + r = (4 − 12)(1 + 3) + 35 = (−8)·4 + 35 = −32 + 35 = 3</span> ✓</div>`) },

    { type:"exercises", title: T("Startoefening (boek p. 20)","Start exercise (book p. 20)"), from: "4A" },

    { type:"plain", html: T(`<h2>5 · Veeltermen delen door x − a · Het schema van Horner</h2>`,
                            `<h2>5 · Dividing by x − a  ·  Horner's scheme</h2>`) },

    { type:"text", html: T(
`<p>Is de deler van de vorm <span class="m">x − a</span> (graad 1, leidende coëfficiënt 1), dan is de staartdeling traag. Er bestaat een veel snellere methode: het <b>rekenschema van Horner</b>.</p>
<p>Omdat <span class="m">gr(D(x)) = 1</span>, heeft het quotiënt graad <span class="m">n − 1</span> en is de rest altijd een gewoon getal <span class="m">r</span>.</p>`,
`<p>When the divisor is <span class="m">x − a</span> (degree 1, leading coefficient 1), long division is slow. There is a much faster method: <b>Horner's scheme</b> (<i>rekenschema van Horner</i>).</p>
<p>Because <span class="m">gr(D(x)) = 1</span>, the quotient has degree <span class="m">n − 1</span> and the remainder is always a plain number <span class="m">r</span>.</p>`) },

    { type:"example", title: T("Voorbeeld — (2x³ + 3x² + 2) : (x − 1)","Worked example — (2x³ + 3x² + 2) : (x − 1)"), html: T(
`<p>Coëfficiënten van <span class="m">A(x)</span>, aangevuld met een nul: <span class="m">2, 3, 0, 2</span>. Hier is <span class="m">a = 1</span>.</p>
<table class="horner">
  <tr><td class="a"></td><td>2</td><td>3</td><td>0</td><td>2</td></tr>
  <tr><td class="a">1</td><td>↓</td><td>2</td><td>5</td><td>5</td></tr>
  <tr class="res"><td class="a"></td><td>2</td><td>5</td><td>5</td><td class="rest">7</td></tr>
</table>
<p>Lees af: <span class="m">Q(x) = 2x<sup>2</sup> + 5x + 5</span> en <span class="m">r = 7</span>, dus</p>
<div class="eq"><span class="m">2x<sup>3</sup> + 3x<sup>2</sup> + 2 = (2x<sup>2</sup> + 5x + 5)(x − 1) + 7</span></div>`,
`<p>Coefficients of <span class="m">A(x)</span>, completed with a zero: <span class="m">2, 3, 0, 2</span>. Here <span class="m">a = 1</span>.</p>
<table class="horner">
  <tr><td class="a"></td><td>2</td><td>3</td><td>0</td><td>2</td></tr>
  <tr><td class="a">1</td><td>↓</td><td>2</td><td>5</td><td>5</td></tr>
  <tr class="res"><td class="a"></td><td>2</td><td>5</td><td>5</td><td class="rest">7</td></tr>
</table>
<p>Read off: <span class="m">Q(x) = 2x<sup>2</sup> + 5x + 5</span> and <span class="m">r = 7</span>, so</p>
<div class="eq"><span class="m">2x<sup>3</sup> + 3x<sup>2</sup> + 2 = (2x<sup>2</sup> + 5x + 5)(x − 1) + 7</span></div>`) },

    { type:"steps", title: T("Stappenplan — A(x) delen door x − a met het schema van Horner","Step plan — Horner's scheme for A(x) : (x − a)"), html: T(
`<ol>
  <li>Rangschik <span class="m">A(x)</span> in dalende machten en vervolledig hem. Noteer de coëfficiënten op de <b>eerste rij</b>.</li>
  <li>Noteer het getal <span class="m">a</span> op de tweede rij, links van de verticale streep.</li>
  <li>Schrijf de eerste coëfficiënt ongewijzigd over naar de derde rij.</li>
  <li>Vermenigvuldig het getal op de derde rij met <span class="m">a</span> en noteer het product op de tweede rij, onder de volgende coëfficiënt.</li>
  <li>Tel dat product en de coëfficiënt op; noteer de som op de derde rij.</li>
  <li>Herhaal stap 4 en 5 met alle volgende coëfficiënten.</li>
  <li>Het <b>laatste</b> getal op de derde rij is de rest <span class="m">r</span>. De overige getallen zijn de coëfficiënten van <span class="m">Q(x)</span>; de graad van het quotiënt is 1 minder dan die van <span class="m">A(x)</span>.</li>
  <li>Noteer de deling als <span class="m">A(x) = Q(x) · (x − a) + r</span>.</li>
</ol>`,
`<ol>
  <li>Put <span class="m">A(x)</span> in descending powers and complete it. Write its coefficients on the <b>first row</b>.</li>
  <li>Write the number <span class="m">a</span> to the left of the vertical bar on the second row.</li>
  <li>Bring the first coefficient straight down to the third row (unchanged).</li>
  <li>Multiply the number on the third row by <span class="m">a</span>; write the product on the second row, under the next coefficient.</li>
  <li>Add that product and the coefficient; write the sum on the third row.</li>
  <li>Repeat steps 4 and 5 for all remaining coefficients.</li>
  <li>The <b>last</b> number on the third row is the remainder <span class="m">r</span>. The others are the coefficients of <span class="m">Q(x)</span>, whose degree is one less than that of <span class="m">A(x)</span>.</li>
  <li>Write the answer as <span class="m">A(x) = Q(x) · (x − a) + r</span>.</li>
</ol>`) },

    { type:"warn", title: T("Het teken van a — de meest gemaakte fout","The sign of a — the most common mistake"), html: T(
`<p>Het schema deelt door <span class="m">x − a</span>. Je moet <span class="m">a</span> dus <b>met omgekeerd teken</b> aflezen wanneer de deler met een plus geschreven is:</p>
<table class="grid">
  <tr><th>Deler</th><th>Herschreven</th><th>Neem a =</th></tr>
  <tr><td class="num"><span class="m">x − 1</span></td><td class="num"><span class="m">x − (1)</span></td><td class="num"><b>1</b></td></tr>
  <tr><td class="num"><span class="m">x + 2</span></td><td class="num"><span class="m">x − (−2)</span></td><td class="num"><b>−2</b></td></tr>
  <tr><td class="num"><span class="m">x + 7</span></td><td class="num"><span class="m">x − (−7)</span></td><td class="num"><b>−7</b></td></tr>
</table>`,
`<p>The scheme divides by <span class="m">x − a</span>. So you must read <span class="m">a</span> off <b>with its sign flipped</b> when the divisor is written with a plus:</p>
<table class="grid">
  <tr><th>Divisor</th><th>Rewritten</th><th>Use a =</th></tr>
  <tr><td class="num"><span class="m">x − 1</span></td><td class="num"><span class="m">x − (1)</span></td><td class="num"><b>1</b></td></tr>
  <tr><td class="num"><span class="m">x + 2</span></td><td class="num"><span class="m">x − (−2)</span></td><td class="num"><b>−2</b></td></tr>
  <tr><td class="num"><span class="m">x + 7</span></td><td class="num"><span class="m">x − (−7)</span></td><td class="num"><b>−7</b></td></tr>
</table>`) },

    { type:"example", title: T("Voorbeeld — A(x) = −3x³ + x + 2 delen door x + 2","Worked example — A(x) = −3x³ + x + 2 divided by x + 2"), html: T(
`<p><span class="m">D(x) = x + 2 = x − (−2)</span>, dus <span class="m">a = −2</span>. Coëfficiënten: <span class="m">−3, 0, 1, 2</span>.</p>
<table class="horner">
  <tr><td class="a"></td><td>−3</td><td>0</td><td>1</td><td>2</td></tr>
  <tr><td class="a">−2</td><td>↓</td><td>6</td><td>−12</td><td>22</td></tr>
  <tr class="res"><td class="a"></td><td>−3</td><td>6</td><td>−11</td><td class="rest">24</td></tr>
</table>
<div class="eq"><span class="m">Q(x) = −3x<sup>2</sup> + 6x − 11</span>, &nbsp; <span class="m">r = 24</span></div>
<div class="eq"><span class="m">−3x<sup>3</sup> + x + 2 = (−3x<sup>2</sup> + 6x − 11)(x + 2) + 24</span></div>
<p>En merk op — die rest had je ook kunnen vinden zonder de deling uit te voeren:</p>
<div class="eq"><span class="m">A(−2) = −3·(−2)<sup>3</sup> + (−2) + 2 = 24 − 2 + 2 = 24</span></div>`,
`<p><span class="m">D(x) = x + 2 = x − (−2)</span>, so <span class="m">a = −2</span>. Coefficients: <span class="m">−3, 0, 1, 2</span>.</p>
<table class="horner">
  <tr><td class="a"></td><td>−3</td><td>0</td><td>1</td><td>2</td></tr>
  <tr><td class="a">−2</td><td>↓</td><td>6</td><td>−12</td><td>22</td></tr>
  <tr class="res"><td class="a"></td><td>−3</td><td>6</td><td>−11</td><td class="rest">24</td></tr>
</table>
<div class="eq"><span class="m">Q(x) = −3x<sup>2</sup> + 6x − 11</span>, &nbsp; <span class="m">r = 24</span></div>
<div class="eq"><span class="m">−3x<sup>3</sup> + x + 2 = (−3x<sup>2</sup> + 6x − 11)(x + 2) + 24</span></div>
<p>And notice — you could have found that remainder without dividing at all:</p>
<div class="eq"><span class="m">A(−2) = −3·(−2)<sup>3</sup> + (−2) + 2 = 24 − 2 + 2 = 24</span></div>`) },

    { type:"theorem", title: T("Stelling — de reststelling","Theorem — the remainder theorem"), html: T(
`<p>Bij deling van een veelterm <span class="m">A(x)</span> door een veelterm van de vorm <span class="m">x − a</span> is de getalwaarde <span class="m">A(a)</span> gelijk aan de rest van de deling:</p>
<div class="eq" style="margin-bottom:0"><span class="m">r = A(a)</span></div>`,
`<p>When a polynomial <span class="m">A(x)</span> is divided by a polynomial of the form <span class="m">x − a</span>, the remainder equals the numerical value <span class="m">A(a)</span>:</p>
<div class="eq" style="margin-bottom:0"><span class="m">r = A(a)</span></div>`) },

    { type:"text", html: T(
`<p><b>Bewijs.</b> Gegeven: <span class="m">A(x) ∈ ℝ[x]</span> met <span class="m">gr(A(x)) = n</span> en <span class="m">D(x) = x − a</span>. Te bewijzen: <span class="m">r = A(a)</span>.</p>
<p>Omdat <span class="m">gr(A(x)) = n</span> en <span class="m">gr(D(x)) = 1</span>, is <span class="m">gr(Q(x)) = n − 1</span> en <span class="m">gr(R(x)) = 0</span>, dus <span class="m">R(x) = r</span>, een constante. &nbsp;(1)</p>
<p>Uit de deling volgt <span class="m">A(x) = Q(x)·D(x) + R(x)</span>, wat door (1) en het gegeven wordt <span class="m">A(x) = Q(x)·(x − a) + r</span>.</p>
<p>Vul nu <span class="m">x = a</span> in: &nbsp; <span class="m">A(a) = Q(a)·(a − a) + r = Q(a)·0 + r = r</span>. &nbsp;∎</p>`,
`<p><b>Proof.</b> Given: <span class="m">A(x) ∈ ℝ[x]</span> with <span class="m">gr(A(x)) = n</span> and <span class="m">D(x) = x − a</span>. To prove: <span class="m">r = A(a)</span>.</p>
<p>Since <span class="m">gr(A(x)) = n</span> and <span class="m">gr(D(x)) = 1</span>, we get <span class="m">gr(Q(x)) = n − 1</span> and <span class="m">gr(R(x)) = 0</span>, so <span class="m">R(x) = r</span>, a constant. &nbsp;(1)</p>
<p>From the division: <span class="m">A(x) = Q(x)·D(x) + R(x)</span>, which by (1) becomes <span class="m">A(x) = Q(x)·(x − a) + r</span>.</p>
<p>Now substitute <span class="m">x = a</span>: &nbsp; <span class="m">A(a) = Q(a)·(a − a) + r = Q(a)·0 + r = r</span>. &nbsp;∎</p>`) },

    { type:"text", html: T(
`<h3>Delers van de vorm x − a opsporen en ontbinden in factoren</h3>
<p>Uit de reststelling volgt: <span class="m">A(x)</span> is <b>deelbaar</b> door <span class="m">x − a</span> precies wanneer <span class="m">A(a) = 0</span>. In dat geval kun je de veelterm ontbinden:</p>
<div class="eq"><span class="m">A(x) = (x − a) · Q(x)</span></div>
<p>Maar welke <span class="m">a</span> moet je proberen? De volgende eigenschap maakt de zoeklijst kort.</p>`,
`<h3>Finding divisors of the form x − a and factoring</h3>
<p>From the remainder theorem: <span class="m">A(x)</span> is <b>divisible</b> by <span class="m">x − a</span> exactly when <span class="m">A(a) = 0</span>. In that case you can factor:</p>
<div class="eq"><span class="m">A(x) = (x − a) · Q(x)</span></div>
<p>But which <span class="m">a</span> should you test? The next property cuts the search down to a short list.</p>`) },

    { type:"theorem", title: T("Eigenschap — gehele delers van de constante term","Property — integer divisors of the constant term"), html: T(
`<p>Als <span class="m">x − a</span> met <span class="m">a ∈ ℤ</span> een deler is van een veelterm <span class="m">A(x) = a<sub>n</sub>x<sup>n</sup> + … + a<sub>1</sub>x + a<sub>0</sub></span> met <b>gehele</b> coëfficiënten, dan is <span class="m">a</span> een <b>gehele deler van de constante term</b> <span class="m">a<sub>0</sub></span>.</p>
<p style="margin-bottom:0"><b>Bewijs.</b> Uit de reststelling volgt <span class="m">A(a) = 0</span>, dus</p>
<div class="eq"><span class="m">a<sub>n</sub>a<sup>n</sup> + a<sub>n−1</sub>a<sup>n−1</sup> + … + a<sub>1</sub>a + a<sub>0</sub> = 0</span></div>
<div class="eq"><span class="m">⟺ a(a<sub>n</sub>a<sup>n−1</sup> + a<sub>n−1</sub>a<sup>n−2</sup> + … + a<sub>1</sub>) = −a<sub>0</sub></span></div>
<p style="margin-bottom:0">Hieruit volgt dat <span class="m">a</span> een deler is van <span class="m">−a<sub>0</sub></span>, en dus ook van <span class="m">a<sub>0</sub></span>. ∎</p>`,
`<p>If <span class="m">x − a</span> with <span class="m">a ∈ ℤ</span> is a divisor of a polynomial <span class="m">A(x) = a<sub>n</sub>x<sup>n</sup> + … + a<sub>1</sub>x + a<sub>0</sub></span> with <b>integer</b> coefficients, then <span class="m">a</span> is an <b>integer divisor of the constant term</b> <span class="m">a<sub>0</sub></span>.</p>
<p style="margin-bottom:0"><b>Proof.</b> By the remainder theorem, <span class="m">A(a) = 0</span>, so</p>
<div class="eq"><span class="m">a<sub>n</sub>a<sup>n</sup> + a<sub>n−1</sub>a<sup>n−1</sup> + … + a<sub>1</sub>a + a<sub>0</sub> = 0</span></div>
<div class="eq"><span class="m">⟺ a(a<sub>n</sub>a<sup>n−1</sup> + a<sub>n−1</sub>a<sup>n−2</sup> + … + a<sub>1</sub>) = −a<sub>0</sub></span></div>
<p style="margin-bottom:0">So <span class="m">a</span> divides <span class="m">−a<sub>0</sub></span>, and therefore also <span class="m">a<sub>0</sub></span>. ∎</p>`) },

    { type:"example", title: T("Voorbeeld — ontbind A(x) = 3x³ − 4x² − 17x + 6","Worked example — factor A(x) = 3x³ − 4x² − 17x + 6"), html: T(
`<p>Constante term 6 → kandidaten voor <span class="m">a</span>: <span class="m">±1, ±2, ±3, ±6</span>. Probeer ze:</p>
<table class="grid">
  <tr><th>Kandidaat</th><th>A(a)</th><th>Deler?</th></tr>
  <tr><td class="num"><span class="m">x − 1</span></td><td class="num"><span class="m">A(1) = 3 − 4 − 17 + 6 = −12</span></td><td>nee</td></tr>
  <tr><td class="num"><span class="m">x + 1</span></td><td class="num"><span class="m">A(−1) = −3 − 4 + 17 + 6 = 16</span></td><td>nee</td></tr>
  <tr><td class="num"><span class="m">x − 2</span></td><td class="num"><span class="m">A(2) = 24 − 16 − 34 + 6 = −20</span></td><td>nee</td></tr>
  <tr><td class="num"><span class="m">x + 2</span></td><td class="num"><span class="m">A(−2) = −24 − 16 + 34 + 6 = 0</span></td><td><b>ja</b></td></tr>
  <tr><td class="num"><span class="m">x − 3</span></td><td class="num"><span class="m">A(3) = 81 − 36 − 51 + 6 = 0</span></td><td><b>ja</b></td></tr>
  <tr><td class="num"><span class="m">x + 3</span></td><td class="num"><span class="m">A(−3) = −81 − 36 + 51 + 6 = −60</span></td><td>nee</td></tr>
  <tr><td class="num"><span class="m">x − 6</span></td><td class="num"><span class="m">A(6) = 648 − 144 − 102 + 6 = 408</span></td><td>nee</td></tr>
  <tr><td class="num"><span class="m">x + 6</span></td><td class="num"><span class="m">A(−6) = −648 − 144 + 102 + 6 = −684</span></td><td>nee</td></tr>
</table>
<p>Twee delers gevonden, dus pas Horner <b>twee keer na elkaar</b> toe:</p>
<table class="horner">
  <tr><td class="a"></td><td>3</td><td>−4</td><td>−17</td><td>6</td></tr>
  <tr><td class="a">−2</td><td>↓</td><td>−6</td><td>20</td><td>−6</td></tr>
  <tr class="res"><td class="a"></td><td>3</td><td>−10</td><td>3</td><td class="rest">0</td></tr>
  <tr><td class="a">3</td><td>↓</td><td>9</td><td>−3</td><td></td></tr>
  <tr class="res"><td class="a"></td><td>3</td><td>−1</td><td class="rest">0</td><td></td></tr>
</table>
<p>Je bekomt het quotiënt <span class="m">Q(x) = 3x − 1</span>, dus de ontbonden vorm is</p>
<div class="eq"><span class="m">A(x) = (x + 2)(x − 3)(3x − 1)</span></div>
<p><b>Kortere weg:</b> voor een derdegraadsveelterm kun je Horner ook <b>één keer</b> toepassen en de overblijvende drieterm ontbinden met <span class="m">ax<sup>2</sup> + bx + c = a(x − x<sub>1</sub>)(x − x<sub>2</sub>)</span>.</p>`,
`<p>Constant term 6 → candidates for <span class="m">a</span>: <span class="m">±1, ±2, ±3, ±6</span>. Test them:</p>
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
<p><b>Shortcut:</b> for a third-degree polynomial you can also apply Horner <b>once</b> and then factor the remaining quadratic with <span class="m">ax<sup>2</sup> + bx + c = a(x − x<sub>1</sub>)(x − x<sub>2</sub>)</span>.</p>`) },

    { type:"example", title: T("Voorbeeld — ontbind A(x) = 9x³ − 21x² + 16x − 4","Worked example — factor A(x) = 9x³ − 21x² + 16x − 4"), html: T(
`<p>Constante term −4 → kandidaten <span class="m">±1, ±2, ±4</span>.</p>
<p><span class="m">A(1) = 9 − 21 + 16 − 4 = 0</span> → <span class="m">x − 1</span> is een deler. Pas Horner toe met <span class="m">a = 1</span>:</p>
<table class="horner">
  <tr><td class="a"></td><td>9</td><td>−21</td><td>16</td><td>−4</td></tr>
  <tr><td class="a">1</td><td>↓</td><td>9</td><td>−12</td><td>4</td></tr>
  <tr class="res"><td class="a"></td><td>9</td><td>−12</td><td>4</td><td class="rest">0</td></tr>
</table>
<p><span class="m">Q(x) = 9x<sup>2</sup> − 12x + 4</span>, en die drieterm is een merkwaardig product: <span class="m">(3x − 2)<sup>2</sup></span>.</p>
<div class="eq"><span class="m">A(x) = (x − 1)(3x − 2)<sup>2</sup></span></div>`,
`<p>Constant term −4 → candidates <span class="m">±1, ±2, ±4</span>.</p>
<p><span class="m">A(1) = 9 − 21 + 16 − 4 = 0</span> → <span class="m">x − 1</span> is a divisor. Apply Horner with <span class="m">a = 1</span>:</p>
<table class="horner">
  <tr><td class="a"></td><td>9</td><td>−21</td><td>16</td><td>−4</td></tr>
  <tr><td class="a">1</td><td>↓</td><td>9</td><td>−12</td><td>4</td></tr>
  <tr class="res"><td class="a"></td><td>9</td><td>−12</td><td>4</td><td class="rest">0</td></tr>
</table>
<p><span class="m">Q(x) = 9x<sup>2</sup> − 12x + 4</span>, and that trinomial is a perfect square: <span class="m">(3x − 2)<sup>2</sup></span>.</p>
<div class="eq"><span class="m">A(x) = (x − 1)(3x − 2)<sup>2</sup></span></div>`) },

    { type:"warn", title: T("Valkuilen op een toets","Exam traps"), html: T(
`<ul>
  <li><b>Vervolledig het deeltal.</b> Een ontbrekende macht verschuift stilletjes elke kolom in de staartdeling en elke stap in Horner. Schrijf die 0.</li>
  <li><b>Teken van a.</b> Deler <span class="m">x + 2</span> → neem <span class="m">a = −2</span>. Dit fout doen is hier veruit de meest gemaakte fout.</li>
  <li><b>Horner werkt enkel voor <span class="m">x − a</span></b>, dus leidende coëfficiënt 1 en graad 1. Voor <span class="m">3x + 2</span> of <span class="m">x<sup>2</sup> + x − 1</span> moet je de staartdeling doen.</li>
  <li><b>Stop op het juiste moment:</b> wanneer <span class="m">gr(R) &lt; gr(D)</span>, niet wanneer je ‘geen termen meer hebt’.</li>
  <li><b>Controleer met een getalwaarde</b> (meestal <span class="m">x = 1</span>). Het kost 20 seconden en het vangt bijna elke vergissing.</li>
  <li>Probeer de kandidaten in een slimme volgorde: <span class="m">1, −1, 2, −2, …</span> — kleine getallen zijn het makkelijkst en lukken meestal.</li>
</ul>`,
`<ul>
  <li><b>Complete the dividend.</b> A missing power silently shifts every column in long division and every step in Horner. Write the 0.</li>
  <li><b>Sign of a.</b> Divisor <span class="m">x + 2</span> → use <span class="m">a = −2</span>. Getting this wrong is the single most common error here.</li>
  <li><b>Horner only works for <span class="m">x − a</span></b>, i.e. leading coefficient 1 and degree 1. For <span class="m">3x + 2</span> or <span class="m">x<sup>2</sup> + x − 1</span> you must do the long division.</li>
  <li><b>Stop at the right moment:</b> when <span class="m">gr(R) &lt; gr(D)</span>, not when you "run out of terms".</li>
  <li><b>Check with a numerical value</b> (usually <span class="m">x = 1</span>). It costs 20 seconds and catches almost every slip.</li>
  <li>Test candidates in the smart order: <span class="m">1, −1, 2, −2, …</span> — small numbers are easiest and usually work.</li>
</ul>`) },

    { type:"exercises", title: T("Startoefeningen (boek p. 23)","Start exercises (book p. 23)"), from: "5" }
  ]
});
