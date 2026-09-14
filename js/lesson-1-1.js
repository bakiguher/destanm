/* 1.1 — book pages 16–17 */
LESSONS.push({
  id: "1.1", code: "1.1", chapter: 1, pages: "16 – 17",
  title: T("Definitie en domein van veeltermfuncties", "Definition and domain of polynomial functions"),
  lede: T("Dit onderdeel geeft je de woordenschat voor de rest van het hoofdstuk. Het zijn vooral definities — leer de woorden exact, want elke latere oefening gebruikt ze.",
          "This section gives the vocabulary for the rest of the chapter. It is mostly definitions — learn the words exactly, because every later exercise uses them."),

  checklist: [
    T("Ik kan een eenterm onderscheiden van een veelterm","I can tell a monomial (eenterm) from a polynomial (veelterm)"),
    T("Ik kan eentermen optellen, aftrekken, vermenigvuldigen, delen en tot een macht verheffen","I can add, subtract, multiply and divide monomials and take powers of them"),
    T("Ik kan de graad en de coëfficiënten van een veelterm geven","I can give the degree and the coefficients of a polynomial"),
    T("Ik kan een onvolledige veelterm volledig schrijven met coëfficiënten nul","I can rewrite an incomplete polynomial as a complete one using zero coefficients"),
    T("Ik kan de getalwaarde A(r) van een veelterm berekenen","I can compute the numerical value A(r) of a polynomial"),
    T("Ik kan een veeltermfunctie herkennen en de graad ervan geven","I can recognise a polynomial function and give its degree"),
    T("Ik weet dat dom f = ℝ voor elke veeltermfunctie, en ik kan uitleggen waarom","I know that dom f = ℝ for every polynomial function, and I can explain why")
  ],

  blocks: [
    { type:"plain", html: T(`<h2>1 · Eentermen en veeltermen</h2>`, `<h2>1 · Monomials and polynomials</h2>`) },

    { type:"text", html: T(
`<p>Een <b>eenterm</b> in één onbekende <span class="m">x</span> is een product van een getalfactor en een macht van <span class="m">x</span> met een <b>natuurlijke</b> exponent.</p>
<div class="eq">Voorbeelden: &nbsp; <span class="m">−5x<sup>2</sup></span> &nbsp;·&nbsp; <span class="m">4x<sup>3</sup></span> &nbsp;·&nbsp; <span class="m">−3</span> &nbsp;·&nbsp; <span class="m">7x<sup>3</sup></span></div>
<p>De getalfactor noem je de <b>coëfficiënt</b>; de exponent van <span class="m">x</span> is de <b>graad</b> van de eenterm.</p>`,
`<p>A <b>monomial</b> (<i>eenterm</i>) in one unknown <span class="m">x</span> is a product of a number and a power of <span class="m">x</span> with a <b>natural</b> exponent.</p>
<div class="eq">Examples: &nbsp; <span class="m">−5x<sup>2</sup></span> &nbsp;·&nbsp; <span class="m">4x<sup>3</sup></span> &nbsp;·&nbsp; <span class="m">−3</span> &nbsp;·&nbsp; <span class="m">7x<sup>3</sup></span></div>
<p>The number in front is the <b>coefficient</b> (<i>coëfficiënt</i>); the exponent of <span class="m">x</span> is the <b>degree</b> (<i>graad</i>) of the monomial.</p>`) },

    { type:"concept", title: T("Bewerkingen met eentermen","Operations with monomials"), html: T(
`<table class="grid">
  <tr><th>Optellen / aftrekken</th><td>Enkel <b>gelijksoortige</b> eentermen (zelfde macht van x).<br>
    <span class="m">5x<sup>3</sup> + 8x<sup>3</sup> = 13x<sup>3</sup></span> &nbsp;&nbsp; <span class="m">−14x<sup>2</sup> − (−11x<sup>2</sup>) = −3x<sup>2</sup></span></td></tr>
  <tr><th>Vermenigvuldigen / delen</th><td>Altijd mogelijk.<br>
    <span class="m">6x<sup>3</sup> · (−5x<sup>2</sup>) = −30x<sup>5</sup></span> &nbsp;&nbsp; <span class="m">(12x<sup>6</sup>) : (−36x<sup>2</sup>) = −</span>${FR('1','3')}<span class="m">x<sup>4</sup></span></td></tr>
  <tr><th>Macht</th><td><span class="m">(−5x<sup>3</sup>)<sup>3</sup> = −125x<sup>9</sup></span> &nbsp;&nbsp; <span class="m">(−2x<sup>2</sup>)<sup>4</sup> = 16x<sup>8</sup></span></td></tr>
</table>`,
`<table class="grid">
  <tr><th>Add / subtract</th><td>Only <b>like</b> monomials (same power of x).<br>
    <span class="m">5x<sup>3</sup> + 8x<sup>3</sup> = 13x<sup>3</sup></span> &nbsp;&nbsp; <span class="m">−14x<sup>2</sup> − (−11x<sup>2</sup>) = −3x<sup>2</sup></span></td></tr>
  <tr><th>Multiply / divide</th><td>Always allowed.<br>
    <span class="m">6x<sup>3</sup> · (−5x<sup>2</sup>) = −30x<sup>5</sup></span> &nbsp;&nbsp; <span class="m">(12x<sup>6</sup>) : (−36x<sup>2</sup>) = −</span>${FR('1','3')}<span class="m">x<sup>4</sup></span></td></tr>
  <tr><th>Power</th><td><span class="m">(−5x<sup>3</sup>)<sup>3</sup> = −125x<sup>9</sup></span> &nbsp;&nbsp; <span class="m">(−2x<sup>2</sup>)<sup>4</sup> = 16x<sup>8</sup></span></td></tr>
</table>`) },

    { type:"text", html: T(
`<p>Een <b>veelterm</b> is de som van een eindig aantal eentermen. De <b>graad</b> van een veelterm in een onbekende <span class="m">x</span> is de hoogste exponent van <span class="m">x</span>. De <b>nulveelterm</b> is de veelterm met uitsluitend coëfficiënten nul.</p>
<table class="grid">
  <tr><th>Veelterm</th><th>Graad</th><th>Ook genoemd</th></tr>
  <tr><td class="num"><span class="m">6</span></td><td class="num">0</td><td>een eenterm</td></tr>
  <tr><td class="num"><span class="m">4x + 5</span></td><td class="num">1</td><td>een tweeterm</td></tr>
  <tr><td class="num"><span class="m">5x<sup>2</sup> − 7x + 2</span></td><td class="num">2</td><td>een drieterm</td></tr>
  <tr><td class="num"><span class="m">5x<sup>3</sup> − 7x<sup>2</sup> + 8x − 4</span></td><td class="num">3</td><td>kort genoteerd als <span class="m">A(x)</span></td></tr>
</table>`,
`<p>A <b>polynomial</b> (<i>veelterm</i>) is the sum of a finite number of monomials. Its <b>degree</b> is the highest exponent of <span class="m">x</span> that appears. The <b>zero polynomial</b> (<i>nulveelterm</i>) is the polynomial whose coefficients are all zero.</p>
<table class="grid">
  <tr><th>Polynomial</th><th>Degree</th><th>Also called</th></tr>
  <tr><td class="num"><span class="m">6</span></td><td class="num">0</td><td>a monomial (<i>eenterm</i>)</td></tr>
  <tr><td class="num"><span class="m">4x + 5</span></td><td class="num">1</td><td>a binomial (<i>tweeterm</i>)</td></tr>
  <tr><td class="num"><span class="m">5x<sup>2</sup> − 7x + 2</span></td><td class="num">2</td><td>a trinomial (<i>drieterm</i>)</td></tr>
  <tr><td class="num"><span class="m">5x<sup>3</sup> − 7x<sup>2</sup> + 8x − 4</span></td><td class="num">3</td><td>written short as <span class="m">A(x)</span></td></tr>
</table>`) },

    { type:"concept",
      title: T("Begrippen — veelterm · coëfficiënten · termen · graad","Definitions — polynomial · coefficients · terms · degree"),
      html: T(
`<p>Een veelterm van de <span class="m">n</span>-de graad in één onbekende <span class="m">x</span> is een uitdrukking van de vorm</p>
<div class="eq"><span class="m">A(x) = a<sub>n</sub>x<sup>n</sup> + a<sub>n−1</sub>x<sup>n−1</sup> + … + a<sub>2</sub>x<sup>2</sup> + a<sub>1</sub>x + a<sub>0</sub></span></div>
<p>met <span class="m">a<sub>n</sub>, …, a<sub>0</sub> ∈ ℝ</span>, <span class="m">n ∈ ℕ</span> en <span class="m">a<sub>n</sub> ≠ 0</span>.</p>
<ul>
  <li>De <b>coëfficiënten</b> zijn de getalfactoren <span class="m">a<sub>i</sub></span>.</li>
  <li>De <b>termen</b> zijn de eentermen <span class="m">a<sub>i</sub>x<sup>i</sup></span>.</li>
  <li>De <b>graad</b> is <span class="m">n</span>. Je noteert <span class="m">gr(A(x)) = n</span>.</li>
  <li>De verzameling van alle veeltermen in <span class="m">x</span> noteer je als <span class="m">ℝ[x]</span>.</li>
</ul>`,
`<p>A polynomial of degree <span class="m">n</span> in one unknown <span class="m">x</span> is an expression of the form</p>
<div class="eq"><span class="m">A(x) = a<sub>n</sub>x<sup>n</sup> + a<sub>n−1</sub>x<sup>n−1</sup> + … + a<sub>2</sub>x<sup>2</sup> + a<sub>1</sub>x + a<sub>0</sub></span></div>
<p>with <span class="m">a<sub>n</sub>, …, a<sub>0</sub> ∈ ℝ</span>, <span class="m">n ∈ ℕ</span> and <span class="m">a<sub>n</sub> ≠ 0</span>.</p>
<ul>
  <li>The <b>coefficients</b> are the numbers <span class="m">a<sub>i</sub></span>.</li>
  <li>The <b>terms</b> are the monomials <span class="m">a<sub>i</sub>x<sup>i</sup></span>.</li>
  <li>The <b>degree</b> is <span class="m">n</span>. You write <span class="m">gr(A(x)) = n</span>.</li>
  <li>The set of all polynomials in <span class="m">x</span> is written <span class="m">ℝ[x]</span>.</li>
</ul>`) },

    { type:"concept",
      title: T("Begrippen — getalwaarde · volledige veelterm · gelijke veeltermen","Definitions — numerical value · complete · equal"),
      html: T(
`<p>De <b>getalwaarde</b> van <span class="m">A(x)</span> voor <span class="m">r ∈ ℝ</span> is het getal dat je bekomt door <span class="m">x</span> te vervangen door <span class="m">r</span>:</p>
<div class="eq"><span class="m">A(r) = a<sub>n</sub>r<sup>n</sup> + a<sub>n−1</sub>r<sup>n−1</sup> + … + a<sub>1</sub>r + a<sub>0</sub></span></div>
<p>Een veelterm is <b>volledig</b> als alle exponenten van 0 tot en met de graad effectief voorkomen.</p>
<p>Twee veeltermen zijn <b>gelijk</b> als ze dezelfde graad hebben en de coëfficiënten van de overeenkomstige machten twee aan twee gelijk zijn.</p>`,
`<p>The <b>numerical value</b> (<i>getalwaarde</i>) of <span class="m">A(x)</span> at <span class="m">r ∈ ℝ</span> is the number you get by replacing <span class="m">x</span> with <span class="m">r</span>:</p>
<div class="eq"><span class="m">A(r) = a<sub>n</sub>r<sup>n</sup> + a<sub>n−1</sub>r<sup>n−1</sup> + … + a<sub>1</sub>r + a<sub>0</sub></span></div>
<p>A polynomial is <b>complete</b> (<i>volledig</i>) if every exponent from 0 up to the degree actually occurs.</p>
<p>Two polynomials are <b>equal</b> if they have the same degree and the coefficients of matching powers are equal, two by two.</p>`) },

    { type:"example", title: T("Voorbeeld — getalwaarde","Worked example — numerical value"), html: T(
`<p>Gegeven <span class="m">A(x) = 5x<sup>3</sup> − 7x<sup>2</sup> + 8x − 4</span>, bereken <span class="m">A(1)</span>.</p>
<div class="eq"><span class="m">A(1) = 5 · 1<sup>3</sup> − 7 · 1<sup>2</sup> + 8 · 1 − 4 = 5 − 7 + 8 − 4 = 2</span></div>`,
`<p>Given <span class="m">A(x) = 5x<sup>3</sup> − 7x<sup>2</sup> + 8x − 4</span>, compute <span class="m">A(1)</span>.</p>
<div class="eq"><span class="m">A(1) = 5 · 1<sup>3</sup> − 7 · 1<sup>2</sup> + 8 · 1 − 4 = 5 − 7 + 8 − 4 = 2</span></div>`) },

    { type:"example", title: T("Voorbeeld — volledig of onvolledig","Worked example — complete vs incomplete"), html: T(
`<p><span class="m">2x<sup>3</sup> + 5x<sup>2</sup> − 8x + 3</span> is een <b>volledige</b> veelterm van de 3de graad (de machten 3, 2, 1 en 0 zijn er allemaal).</p>
<p><span class="m">−6x<sup>3</sup> + 5x<sup>2</sup> − 7</span> is <b>onvolledig</b>: de term in <span class="m">x</span> ontbreekt. Je kunt hem altijd volledig schrijven met coëfficiënt 0:</p>
<div class="eq"><span class="m">−6x<sup>3</sup> + 5x<sup>2</sup> + 0x − 7</span></div>
<p>Die truc heb je in 1.2 voortdurend nodig bij het delen van veeltermen.</p>`,
`<p><span class="m">2x<sup>3</sup> + 5x<sup>2</sup> − 8x + 3</span> is a <b>complete</b> polynomial of degree 3 (powers 3, 2, 1, 0 all there).</p>
<p><span class="m">−6x<sup>3</sup> + 5x<sup>2</sup> − 7</span> is <b>incomplete</b>: the term in <span class="m">x</span> is missing. You can always complete it with a zero coefficient:</p>
<div class="eq"><span class="m">−6x<sup>3</sup> + 5x<sup>2</sup> + 0x − 7</span></div>
<p>You will need this trick constantly in 1.2 when dividing polynomials.</p>`) },

    { type:"plain", html: T(`<h2>2 · Veeltermfuncties</h2>`, `<h2>2 · Polynomial functions</h2>`) },

    { type:"text", html: T(
`<p>Elke veelterm in één onbekende <span class="m">x</span> bepaalt op deze manier een functie. Zo'n functie noem je een <b>veeltermfunctie</b> in één veranderlijke <span class="m">x</span>.</p>
<table class="grid">
  <tr><th>Veelterm</th><th>Bijhorende veeltermfunctie</th><th>Naam</th></tr>
  <tr><td class="num"><span class="m">4x + 3</span></td><td class="num"><span class="m">f: ℝ → ℝ: x ↦ 4x + 3</span></td><td>eerstegraadsfunctie</td></tr>
  <tr><td class="num"><span class="m">3x<sup>2</sup> − 7x + 5</span></td><td class="num"><span class="m">f: ℝ → ℝ: x ↦ 3x<sup>2</sup> − 7x + 5</span></td><td>tweedegraadsfunctie</td></tr>
  <tr><td class="num"><span class="m">6x<sup>3</sup> − 5x<sup>2</sup> + 7x + 1</span></td><td class="num"><span class="m">f: ℝ → ℝ: x ↦ 6x<sup>3</sup> − 5x<sup>2</sup> + 7x + 1</span></td><td>derdegraadsfunctie</td></tr>
</table>`,
`<p>Every polynomial defines a function. That function is called a <b>polynomial function</b> (<i>veeltermfunctie</i>).</p>
<table class="grid">
  <tr><th>Polynomial</th><th>Its polynomial function</th><th>Name</th></tr>
  <tr><td class="num"><span class="m">4x + 3</span></td><td class="num"><span class="m">f: ℝ → ℝ: x ↦ 4x + 3</span></td><td>first-degree function</td></tr>
  <tr><td class="num"><span class="m">3x<sup>2</sup> − 7x + 5</span></td><td class="num"><span class="m">f: ℝ → ℝ: x ↦ 3x<sup>2</sup> − 7x + 5</span></td><td>second-degree function</td></tr>
  <tr><td class="num"><span class="m">6x<sup>3</sup> − 5x<sup>2</sup> + 7x + 1</span></td><td class="num"><span class="m">f: ℝ → ℝ: x ↦ 6x<sup>3</sup> − 5x<sup>2</sup> + 7x + 1</span></td><td>third-degree function</td></tr>
</table>`) },

    { type:"concept",
      title: T("Begrippen — veeltermfunctie · functiewaarde · domein","Definitions — polynomial function · function value · domain"),
      html: T(
`<p>Een <b>veeltermfunctie</b> in één veranderlijke <span class="m">x</span> is een reële functie met als voorschrift een veelterm in de onbekende <span class="m">x</span>:</p>
<div class="eq"><span class="m">f: ℝ → ℝ: x ↦ f(x) = a<sub>n</sub>x<sup>n</sup> + a<sub>n−1</sub>x<sup>n−1</sup> + … + a<sub>1</sub>x + a<sub>0</sub></span></div>
<p>met <span class="m">a<sub>n</sub> ≠ 0</span> en <span class="m">n ∈ ℕ</span>. Dit is een veeltermfunctie van de <span class="m">n</span>-de graad.</p>
<p>De <b>functiewaarde</b> voor de invoerwaarde <span class="m">r ∈ ℝ</span> is <span class="m">f(r) = a<sub>n</sub>r<sup>n</sup> + … + a<sub>1</sub>r + a<sub>0</sub></span> — dus precies de getalwaarde van de bijhorende veelterm.</p>
<p style="margin-bottom:0"><b>Het domein van elke veeltermfunctie is <span class="m">ℝ</span>:</b> &nbsp; <span class="m">dom f = ℝ</span>.</p>`,
`<p>A <b>polynomial function</b> in one variable <span class="m">x</span> is a real function whose rule is a polynomial in <span class="m">x</span>:</p>
<div class="eq"><span class="m">f: ℝ → ℝ: x ↦ f(x) = a<sub>n</sub>x<sup>n</sup> + a<sub>n−1</sub>x<sup>n−1</sup> + … + a<sub>1</sub>x + a<sub>0</sub></span></div>
<p>with <span class="m">a<sub>n</sub> ≠ 0</span> and <span class="m">n ∈ ℕ</span>. This is a polynomial function of the <span class="m">n</span>-th degree.</p>
<p>The <b>function value</b> at input <span class="m">r ∈ ℝ</span> is <span class="m">f(r) = a<sub>n</sub>r<sup>n</sup> + … + a<sub>1</sub>r + a<sub>0</sub></span> — i.e. exactly the numerical value of the polynomial.</p>
<p style="margin-bottom:0"><b>The domain of every polynomial function is <span class="m">ℝ</span>:</b> &nbsp; <span class="m">dom f = ℝ</span>.</p>`) },

    { type:"text", html: T(
`<p><b>Waarom is het domein altijd ℝ?</b> Omdat je om een functiewaarde te berekenen enkel reële getallen optelt, aftrekt en vermenigvuldigt. Er wordt nooit door <span class="m">x</span> gedeeld en er staat geen wortel van <span class="m">x</span>, dus er kan niets misgaan — welk reëel getal je ook invult, je krijgt een reëel getal terug.</p>`,
`<p><b>Why is the domain always ℝ?</b> Because to get a function value you only ever add, subtract and multiply real numbers. There is no division by <span class="m">x</span> and no root of <span class="m">x</span>, so nothing can go wrong — whatever real number you put in, you get a real number out.</p>`) },

    { type:"warn", title: T("Valkuilen op een toets","Exam traps"), html: T(
`<ul>
  <li><b>Werk het voorschrift eerst uit.</b> <span class="m">(x<sup>4</sup> − 4x<sup>2</sup> + 2) : x<sup>2</sup> = x<sup>2</sup> − 4 + 2x<sup>−2</sup></span>. De exponent <span class="m">−2</span> is niet natuurlijk, dus dit is <b>geen</b> veeltermfunctie (en <span class="m">0 ∉ dom f</span>).</li>
  <li>De graad lees je af <b>na</b> het vereenvoudigen. In <span class="m">(−3x<sup>3</sup> + …) − (2x<sup>3</sup> + …)</span> vallen de termen in <span class="m">x<sup>3</sup></span> misschien niet weg — controleer.</li>
  <li>Verwar <b>coëfficiënt</b> (het getal) niet met <b>graad</b> (de exponent).</li>
  <li>Een veelterm is pas ‘volledig’ als <b>elke</b> macht van 0 tot n voorkomt — ook de constante term.</li>
</ul>`,
`<ul>
  <li><b>Work out the rule first.</b> <span class="m">(x<sup>4</sup> − 4x<sup>2</sup> + 2) : x<sup>2</sup> = x<sup>2</sup> − 4 + 2x<sup>−2</sup></span>. The exponent <span class="m">−2</span> is not natural, so this is <b>not</b> a polynomial function (and <span class="m">0 ∉ dom f</span>).</li>
  <li>Degree is read <b>after</b> simplifying. In <span class="m">(−3x<sup>3</sup> + …) − (2x<sup>3</sup> + …)</span> the <span class="m">x<sup>3</sup></span> terms may not cancel — check.</li>
  <li>Don't confuse <b>coefficient</b> (the number) with <b>degree</b> (the exponent).</li>
  <li>A polynomial is only "complete" if <b>every</b> power from 0 to n is present — including the constant term.</li>
</ul>`) },

    { type:"exercises", title: T("Startoefeningen (boek p. 17)","Start exercises (book p. 17)"), items: [
      { num:"1A",
        q: T(
`<p>Werk de gegeven veelterm <span class="m">A(x)</span> uit. Is het resultaat een eenterm of een (on)volledige veelterm? Noteer de graad. Bereken de gevraagde getalwaarde.</p>
<ol type="a">
  <li><span class="m">A(x) = (−3x<sup>3</sup> + 2x<sup>2</sup> + 5x − 4) − (2x<sup>3</sup> − 5x<sup>2</sup> + 8x − 4)</span> &nbsp;→&nbsp; <span class="m">A(4)</span></li>
  <li><span class="m">A(x) = (−7x<sup>2</sup> + 3)(−2x<sup>3</sup>)</span> &nbsp;→&nbsp; <span class="m">A(−2)</span></li>
  <li><span class="m">A(x) = (−2x<sup>3</sup>)<sup>2</sup></span> &nbsp;→&nbsp; <span class="m">A(−1)</span></li>
  <li><span class="m">A(x) = </span>${FR('18x<sup>4</sup> − 24x<sup>3</sup>','−6x<sup>3</sup>')} &nbsp;→&nbsp; <span class="m">A(1)</span></li>
</ol>`,
`<p>Work out the polynomial <span class="m">A(x)</span>. Is the result a monomial or a (in)complete polynomial? Give the degree. Then compute the requested numerical value.</p>
<ol type="a">
  <li><span class="m">A(x) = (−3x<sup>3</sup> + 2x<sup>2</sup> + 5x − 4) − (2x<sup>3</sup> − 5x<sup>2</sup> + 8x − 4)</span> &nbsp;→&nbsp; <span class="m">A(4)</span></li>
  <li><span class="m">A(x) = (−7x<sup>2</sup> + 3)(−2x<sup>3</sup>)</span> &nbsp;→&nbsp; <span class="m">A(−2)</span></li>
  <li><span class="m">A(x) = (−2x<sup>3</sup>)<sup>2</sup></span> &nbsp;→&nbsp; <span class="m">A(−1)</span></li>
  <li><span class="m">A(x) = </span>${FR('18x<sup>4</sup> − 24x<sup>3</sup>','−6x<sup>3</sup>')} &nbsp;→&nbsp; <span class="m">A(1)</span></li>
</ol>`),
        a: T(
`<p><b>a)</b> Haal de haakjes weg, let op het minteken:</p>
<div class="eq"><span class="m">A(x) = −3x<sup>3</sup> + 2x<sup>2</sup> + 5x − 4 − 2x<sup>3</sup> + 5x<sup>2</sup> − 8x + 4 = −5x<sup>3</sup> + 7x<sup>2</sup> − 3x</span></div>
<p>Veelterm van graad <b>3</b>, <b>onvolledig</b> (geen constante term).<br>
<span class="m">A(4) = −5·64 + 7·16 − 3·4 = −320 + 112 − 12 = <b>−220</b></span></p>
<p><b>b)</b> <span class="m">A(x) = 14x<sup>5</sup> − 6x<sup>3</sup></span> → graad <b>5</b>, <b>onvolledig</b>.<br>
<span class="m">A(−2) = 14·(−32) − 6·(−8) = −448 + 48 = <b>−400</b></span></p>
<p><b>c)</b> <span class="m">A(x) = 4x<sup>6</sup></span> → een <b>eenterm</b> van graad <b>6</b>.<br>
<span class="m">A(−1) = 4·1 = <b>4</b></span></p>
<p><b>d)</b> Deel term per term: <span class="m">A(x) = −3x + 4</span> → graad <b>1</b>, <b>volledig</b>.<br>
<span class="m">A(1) = −3 + 4 = <b>1</b></span></p>`,
`<p><b>a)</b> Remove the brackets, mind the minus sign:</p>
<div class="eq"><span class="m">A(x) = −3x<sup>3</sup> + 2x<sup>2</sup> + 5x − 4 − 2x<sup>3</sup> + 5x<sup>2</sup> − 8x + 4 = −5x<sup>3</sup> + 7x<sup>2</sup> − 3x</span></div>
<p>Polynomial of degree <b>3</b>, <b>incomplete</b> (no constant term).<br>
<span class="m">A(4) = −5·64 + 7·16 − 3·4 = −320 + 112 − 12 = <b>−220</b></span></p>
<p><b>b)</b> <span class="m">A(x) = 14x<sup>5</sup> − 6x<sup>3</sup></span> → degree <b>5</b>, <b>incomplete</b>.<br>
<span class="m">A(−2) = 14·(−32) − 6·(−8) = −448 + 48 = <b>−400</b></span></p>
<p><b>c)</b> <span class="m">A(x) = 4x<sup>6</sup></span> → a <b>monomial</b> of degree <b>6</b>.<br>
<span class="m">A(−1) = 4·1 = <b>4</b></span></p>
<p><b>d)</b> Divide term by term: <span class="m">A(x) = −3x + 4</span> → degree <b>1</b>, <b>complete</b>.<br>
<span class="m">A(1) = −3 + 4 = <b>1</b></span></p>`) },

      { num:"2A",
        q: T(
`<p>Werk het voorschrift van de functie <span class="m">f</span> uit. Noteer van elke veeltermfunctie de graad. Als het geen veeltermfunctie is, leg uit waarom. Bereken voor de veeltermfuncties de gevraagde functiewaarde.</p>
<ol type="a">
  <li><span class="m">f(x) = −2x<sup>3</sup>(8x<sup>2</sup> + 7x − 6)</span> &nbsp;→&nbsp; <span class="m">f(−2)</span></li>
  <li><span class="m">f(x) = −x(3x<sup>2</sup> + 4) − 5x<sup>2</sup>(−2x − 3)</span> &nbsp;→&nbsp; <span class="m">f(2)</span></li>
  <li><span class="m">f(x) = (x<sup>4</sup> − 4x<sup>2</sup> + 2) : x<sup>2</sup></span> &nbsp;→&nbsp; <span class="m">f(1)</span></li>
</ol>`,
`<p>Work out the rule of <span class="m">f</span>. Give the degree of each polynomial function. If it is not a polynomial function, explain why. Compute the requested function value.</p>
<ol type="a">
  <li><span class="m">f(x) = −2x<sup>3</sup>(8x<sup>2</sup> + 7x − 6)</span> &nbsp;→&nbsp; <span class="m">f(−2)</span></li>
  <li><span class="m">f(x) = −x(3x<sup>2</sup> + 4) − 5x<sup>2</sup>(−2x − 3)</span> &nbsp;→&nbsp; <span class="m">f(2)</span></li>
  <li><span class="m">f(x) = (x<sup>4</sup> − 4x<sup>2</sup> + 2) : x<sup>2</sup></span> &nbsp;→&nbsp; <span class="m">f(1)</span></li>
</ol>`),
        a: T(
`<p><b>a)</b> <span class="m">f(x) = −16x<sup>5</sup> − 14x<sup>4</sup> + 12x<sup>3</sup></span> → veeltermfunctie van graad <b>5</b>.<br>
<span class="m">f(−2) = −16·(−32) − 14·16 + 12·(−8) = 512 − 224 − 96 = <b>192</b></span></p>
<p><b>b)</b> <span class="m">f(x) = −3x<sup>3</sup> − 4x + 10x<sup>3</sup> + 15x<sup>2</sup> = 7x<sup>3</sup> + 15x<sup>2</sup> − 4x</span> → graad <b>3</b>.<br>
<span class="m">f(2) = 7·8 + 15·4 − 4·2 = 56 + 60 − 8 = <b>108</b></span></p>
<p><b>c)</b> <span class="m">f(x) = x<sup>2</sup> − 4 + </span>${FR('2','x<sup>2</sup>')}<span class="m"> = x<sup>2</sup> − 4 + 2x<sup>−2</sup></span></p>
<p><b>Geen veeltermfunctie</b>: de exponent <span class="m">−2</span> is geen natuurlijk getal, en <span class="m">x = 0</span> is uitgesloten, dus <span class="m">dom f = ℝ<sub>0</sub> ≠ ℝ</span>. (Vul je toch in: <span class="m">f(1) = 1 − 4 + 2 = −1</span>.)</p>`,
`<p><b>a)</b> <span class="m">f(x) = −16x<sup>5</sup> − 14x<sup>4</sup> + 12x<sup>3</sup></span> → polynomial function of degree <b>5</b>.<br>
<span class="m">f(−2) = −16·(−32) − 14·16 + 12·(−8) = 512 − 224 − 96 = <b>192</b></span></p>
<p><b>b)</b> <span class="m">f(x) = −3x<sup>3</sup> − 4x + 10x<sup>3</sup> + 15x<sup>2</sup> = 7x<sup>3</sup> + 15x<sup>2</sup> − 4x</span> → degree <b>3</b>.<br>
<span class="m">f(2) = 7·8 + 15·4 − 4·2 = 56 + 60 − 8 = <b>108</b></span></p>
<p><b>c)</b> <span class="m">f(x) = x<sup>2</sup> − 4 + </span>${FR('2','x<sup>2</sup>')}<span class="m"> = x<sup>2</sup> − 4 + 2x<sup>−2</sup></span></p>
<p><b>Not a polynomial function</b>: the exponent <span class="m">−2</span> is not a natural number, and <span class="m">x = 0</span> is excluded, so <span class="m">dom f = ℝ<sub>0</sub> ≠ ℝ</span>. (If you do substitute anyway: <span class="m">f(1) = 1 − 4 + 2 = −1</span>.)</p>`) }
    ]}
  ]
});
