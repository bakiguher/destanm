/* 1.4 — book pages 28–29 */
LESSONS.push({
  id: "1.4", code: "1.4", chapter: 1, pages: "28 – 29",
  title: T("Veeltermongelijkheden", "Polynomial inequalities"),
  lede: T("Een korte maar belangrijke les: een ongelijkheid oplossen is niets anders dan een tekenschema aflezen. Al het werk zit in 1.2 en 1.3 — hier leer je alleen nog de laatste stap en de juiste notatie van de oplossingenverzameling.",
          "A short but important section: solving an inequality is nothing more than reading a sign chart. All the work sits in 1.2 and 1.3 — here you only add the last step and the right notation for the solution set."),

  checklist: [
    T("Ik kan een ongelijkheid herleiden tot de vorm f(x) ⋛ 0","I can rewrite an inequality in the form f(x) ⋛ 0"),
    T("Ik kan een veeltermongelijkheid algebraïsch oplossen met het tekenschema","I can solve a polynomial inequality algebraically with the sign chart"),
    T("Ik let op < versus ≤ bij het al dan niet insluiten van de nulwaarden","I watch < versus ≤ when including or excluding the zeros"),
    T("Ik kan de oplossingenverzameling correct noteren met intervallen en ∪","I can write the solution set correctly with intervals and ∪"),
    T("Ik kan een ongelijkheid grafisch oplossen met ICT, met beide methodes","I can solve an inequality graphically with ICT, using either method")
  ],

  blocks: [
    { type:"text", html: T(
`<p>Om een ongelijkheid in een onbekende <span class="m">x</span> op te lossen, groepeer je alle termen in <b>één lid</b> en hou je in het andere lid <b>0</b> over. Elke ongelijkheid is dus te herleiden tot de vorm</p>
<div class="eq"><span class="m">f(x) ≤ 0</span>, &nbsp; <span class="m">f(x) &lt; 0</span>, &nbsp; <span class="m">f(x) ≥ 0</span> &nbsp;of&nbsp; <span class="m">f(x) &gt; 0</span></div>
<p>met <span class="m">f(x)</span> het voorschrift van een veeltermfunctie.</p>
<table class="grid">
  <tr><th>Ongelijkheid</th><th>Herleid</th><th>Graad</th></tr>
  <tr><td class="num"><span class="m">x(x − 5) ≤ 7</span></td><td class="num"><span class="m">x<sup>2</sup> − 5x − 7 ≤ 0</span></td><td class="num">2de</td></tr>
  <tr><td class="num"><span class="m">x<sup>3</sup> − 3x &lt; 2</span></td><td class="num"><span class="m">x<sup>3</sup> − 3x − 2 &lt; 0</span></td><td class="num">3de</td></tr>
  <tr><td class="num"><span class="m">1 − 2x ≥ x<sup>3</sup>(x − 2)</span></td><td class="num"><span class="m">−x<sup>4</sup> + 2x<sup>3</sup> − 2x + 1 ≥ 0</span></td><td class="num">4de</td></tr>
</table>`,
`<p>To solve an inequality in one unknown <span class="m">x</span>, collect all terms on <b>one side</b> and leave <b>0</b> on the other. So every inequality can be reduced to the form</p>
<div class="eq"><span class="m">f(x) ≤ 0</span>, &nbsp; <span class="m">f(x) &lt; 0</span>, &nbsp; <span class="m">f(x) ≥ 0</span> &nbsp;or&nbsp; <span class="m">f(x) &gt; 0</span></div>
<p>with <span class="m">f(x)</span> the rule of a polynomial function.</p>
<table class="grid">
  <tr><th>Inequality</th><th>Reduced</th><th>Degree</th></tr>
  <tr><td class="num"><span class="m">x(x − 5) ≤ 7</span></td><td class="num"><span class="m">x<sup>2</sup> − 5x − 7 ≤ 0</span></td><td class="num">2nd</td></tr>
  <tr><td class="num"><span class="m">x<sup>3</sup> − 3x &lt; 2</span></td><td class="num"><span class="m">x<sup>3</sup> − 3x − 2 &lt; 0</span></td><td class="num">3rd</td></tr>
  <tr><td class="num"><span class="m">1 − 2x ≥ x<sup>3</sup>(x − 2)</span></td><td class="num"><span class="m">−x<sup>4</sup> + 2x<sup>3</sup> − 2x + 1 ≥ 0</span></td><td class="num">4th</td></tr>
</table>`) },

    { type:"plain", html: T(`<h2>8 · Veeltermongelijkheden oplossen met het tekenschema of de grafiek</h2>`,
                            `<h2>8 · Solving polynomial inequalities with the sign chart or the graph</h2>`) },

    { type:"text", html: T(`<h3>Algebraïsch oplossen</h3>`, `<h3>Solving algebraically</h3>`) },

    { type:"example", title: T("Voorbeeld — los x³ − 3x < 2 op","Worked example — solve x³ − 3x < 2"), html: T(
`<p><b>Stap 1 — herleid tot nul.</b> <span class="m">x<sup>3</sup> − 3x − 2 &lt; 0</span>.</p>
<p>Lees dit als: <i>voor welke invoerwaarden x zijn de functiewaarden van <span class="m">f(x) = x<sup>3</sup> − 3x − 2</span> strikt negatief?</i></p>
<p><b>Stap 2 — nulwaarden en tekenschema.</b></p>
<div class="eq"><span class="m">f(x) = 0 ⟺ (x + 1)(x<sup>2</sup> − x − 2) = 0 ⟺ (x + 1)<sup>2</sup>(x − 2) = 0 ⟺ x = −1 ∨ x = 2</span></div>
<p>De nulwaarde <span class="m">−1</span> heeft multipliciteit <b>2</b>, de nulwaarde <span class="m">2</span> multipliciteit <b>1</b>.</p>
<pre class="long">   x       │      −1         2
 ──────────┼──────────────────────
  (x + 1)² │  +    0    +    +   +
  x − 2    │  −    −    −    0   +
 ──────────┼──────────────────────
  f(x)     │  −    0    −    0   +</pre>
<p><b>Stap 3 — lees af waar <span class="m">f(x) &lt; 0</span>.</b></p>
<div class="eq"><span class="m">V = ]−∞, −1[ ∪ ]−1, 2[</span></div>
<p style="margin-bottom:0">Let op: <span class="m">−1</span> valt <b>weg</b>, want daar is <span class="m">f(x) = 0</span> en de ongelijkheid is <b>strikt</b>. Het interval wordt dus in twee stukken gesplitst.</p>`,
`<p><b>Step 1 — reduce to zero.</b> <span class="m">x<sup>3</sup> − 3x − 2 &lt; 0</span>.</p>
<p>Read this as: <i>for which inputs x are the function values of <span class="m">f(x) = x<sup>3</sup> − 3x − 2</span> strictly negative?</i></p>
<p><b>Step 2 — zeros and sign chart.</b></p>
<div class="eq"><span class="m">f(x) = 0 ⟺ (x + 1)(x<sup>2</sup> − x − 2) = 0 ⟺ (x + 1)<sup>2</sup>(x − 2) = 0 ⟺ x = −1 ∨ x = 2</span></div>
<p>The zero <span class="m">−1</span> has multiplicity <b>2</b>, the zero <span class="m">2</span> has multiplicity <b>1</b>.</p>
<pre class="long">   x       │      −1         2
 ──────────┼──────────────────────
  (x + 1)² │  +    0    +    +   +
  x − 2    │  −    −    −    0   +
 ──────────┼──────────────────────
  f(x)     │  −    0    −    0   +</pre>
<p><b>Step 3 — read off where <span class="m">f(x) &lt; 0</span>.</b></p>
<div class="eq"><span class="m">V = ]−∞, −1[ ∪ ]−1, 2[</span></div>
<p style="margin-bottom:0">Careful: <span class="m">−1</span> <b>drops out</b>, because there <span class="m">f(x) = 0</span> and the inequality is <b>strict</b>. So the interval is split in two.</p>`) },

    { type:"steps", title: T("Stappenplan — een veeltermongelijkheid oplossen","Step plan — solving a polynomial inequality"), html: T(
`<ol>
  <li><b>Herleid tot nul</b>: breng alles naar één lid, zodat er <span class="m">f(x) ⋛ 0</span> staat.</li>
  <li><b>Ontbind</b> <span class="m">f(x)</span> in factoren en bepaal de nulwaarden met hun multipliciteit.</li>
  <li><b>Maak het tekenschema</b> (gewoon of verkort).</li>
  <li><b>Lees de oplossing af</b> in het schema.</li>
  <li><b>Noteer de oplossingenverzameling</b> <span class="m">V</span> met intervallen:
    <ul>
      <li>strikt (<span class="m">&lt;</span> of <span class="m">&gt;</span>) → <b>open</b> haakjes, nulwaarden <b>niet</b> insluiten;</li>
      <li>niet strikt (<span class="m">≤</span> of <span class="m">≥</span>) → <b>gesloten</b> haakjes, nulwaarden <b>wel</b> insluiten.</li>
    </ul>
  </li>
</ol>`,
`<ol>
  <li><b>Reduce to zero</b>: move everything to one side, so you get <span class="m">f(x) ⋛ 0</span>.</li>
  <li><b>Factor</b> <span class="m">f(x)</span> and find the zeros with their multiplicity.</li>
  <li><b>Build the sign chart</b> (full or short method).</li>
  <li><b>Read the solution</b> off the chart.</li>
  <li><b>Write the solution set</b> <span class="m">V</span> with intervals:
    <ul>
      <li>strict (<span class="m">&lt;</span> or <span class="m">&gt;</span>) → <b>open</b> brackets, zeros <b>excluded</b>;</li>
      <li>non-strict (<span class="m">≤</span> or <span class="m">≥</span>) → <b>closed</b> brackets, zeros <b>included</b>.</li>
    </ul>
  </li>
</ol>`) },

    { type:"text", html: T(
`<h3>Grafisch oplossen met ICT</h3>
<p>Kun je de nulwaarden niet algebraïsch berekenen, bepaal dan de oplossingenverzameling met ICT. Er zijn twee methodes — ze geven altijd hetzelfde antwoord.</p>
<p>Bv. <span class="m">x<sup>3</sup>(2 − x) ≥ x − </span>${FR('1','5')}</p>`,
`<h3>Solving graphically with ICT</h3>
<p>If you cannot compute the zeros algebraically, find the solution set with ICT. There are two methods — they always give the same answer.</p>
<p>E.g. <span class="m">x<sup>3</sup>(2 − x) ≥ x − </span>${FR('1','5')}</p>`) },

    { type:"example", title: T("De twee ICT-methodes naast elkaar","The two ICT methods side by side"), html: T(
`<table class="grid">
  <tr><th style="width:50%">1ste methode — herleiden tot nul</th><th>2de methode — twee functies</th></tr>
  <tr>
    <td>Herleid: <span class="m">−x<sup>4</sup> + 2x<sup>3</sup> − x + </span>${FR('1','5')}<span class="m"> ≥ 0</span>.<br><br>
        Teken met ICT de grafiek van <span class="m">f</span> en bepaal de nulwaarden op 0,01 nk:<br>
        <b>−0,69 ; 0,22 ; 0,78 ; 1,69</b><br><br>
        Lees af voor welke <span class="m">x</span> de grafiek <b>boven de x-as</b> ligt.</td>
    <td>Stel <span class="m">f(x) = x<sup>3</sup>(2 − x)</span> en <span class="m">g(x) = x − </span>${FR('1','5')}.<br>
        Je bekomt <span class="m">f(x) ≥ g(x)</span>.<br><br>
        Teken beide grafieken in één assenstelsel en bepaal de x-coördinaten van de snijpunten:<br>
        <b>−0,69 ; 0,22 ; 0,78 ; 1,69</b><br><br>
        Lees af voor welke <span class="m">x</span> de grafiek van <span class="m">f</span> <b>boven die van <span class="m">g</span></b> ligt.</td>
  </tr>
</table>
<div class="eq"><span class="m">V = [−0,69 ; 0,22] ∪ [0,78 ; 1,69]</span></div>`,
`<table class="grid">
  <tr><th style="width:50%">1st method — reduce to zero</th><th>2nd method — two functions</th></tr>
  <tr>
    <td>Reduce: <span class="m">−x<sup>4</sup> + 2x<sup>3</sup> − x + </span>${FR('1','5')}<span class="m"> ≥ 0</span>.<br><br>
        Draw the graph of <span class="m">f</span> with ICT and find the zeros to 0.01:<br>
        <b>−0.69 ; 0.22 ; 0.78 ; 1.69</b><br><br>
        Read off for which <span class="m">x</span> the graph lies <b>above the x-axis</b>.</td>
    <td>Put <span class="m">f(x) = x<sup>3</sup>(2 − x)</span> and <span class="m">g(x) = x − </span>${FR('1','5')}.<br>
        You get <span class="m">f(x) ≥ g(x)</span>.<br><br>
        Draw both graphs in one coordinate system and find the x-coordinates of the intersection points:<br>
        <b>−0.69 ; 0.22 ; 0.78 ; 1.69</b><br><br>
        Read off for which <span class="m">x</span> the graph of <span class="m">f</span> lies <b>above that of <span class="m">g</span></b>.</td>
  </tr>
</table>
<div class="eq"><span class="m">V = [−0.69 ; 0.22] ∪ [0.78 ; 1.69]</span></div>`) },

    { type:"warn", title: T("Valkuilen op een toets","Exam traps"), html: T(
`<ul>
  <li><b>Herleid altijd eerst tot nul.</b> Je mag niet zomaar door <span class="m">x</span> of door een factor delen — het teken van die factor is onbekend.</li>
  <li><b>Een nulwaarde met even multipliciteit splitst het interval.</b> Bij <span class="m">f(x) &lt; 0</span> en een dubbele nulwaarde in <span class="m">−1</span> wordt de oplossing <span class="m">]−∞, −1[ ∪ ]−1, 2[</span>, niet <span class="m">]−∞, 2[</span>.</li>
  <li><b>Open of gesloten?</b> <span class="m">&lt;</span> en <span class="m">&gt;</span> → nulwaarden eruit; <span class="m">≤</span> en <span class="m">≥</span> → nulwaarden erbij.</li>
  <li><b>Noteer een verzameling</b>, geen losse getallen: <span class="m">V = ]−1, 1[ ∪ ]3, +∞[</span>.</li>
  <li>Bij <span class="m">±∞</span> staat het haakje <b>altijd</b> open.</li>
  <li>Controleer met één getal uit elk interval.</li>
</ul>`,
`<ul>
  <li><b>Always reduce to zero first.</b> You may not simply divide by <span class="m">x</span> or by a factor — the sign of that factor is unknown.</li>
  <li><b>A zero with even multiplicity splits the interval.</b> For <span class="m">f(x) &lt; 0</span> with a double zero at <span class="m">−1</span> the solution is <span class="m">]−∞, −1[ ∪ ]−1, 2[</span>, not <span class="m">]−∞, 2[</span>.</li>
  <li><b>Open or closed?</b> <span class="m">&lt;</span> and <span class="m">&gt;</span> → zeros out; <span class="m">≤</span> and <span class="m">≥</span> → zeros in.</li>
  <li><b>Write a set</b>, not loose numbers: <span class="m">V = ]−1, 1[ ∪ ]3, +∞[</span>.</li>
  <li>At <span class="m">±∞</span> the bracket is <b>always</b> open.</li>
  <li>Check with one number from each interval.</li>
</ul>`) },

    { type:"exercises", title: T("Startoefeningen (boek p. 29)","Start exercises (book p. 29)"), from:"8" }
  ]
});
