/* ==================================================================
   Book index, study plan, formula card, glossary.
   Lessons live in their own files: lesson-prior.js, lesson-1-1.js, …
   To unlock a section: set ready:true and add lesson:"1.3" here,
   then create js/lesson-1-3.js.
   ================================================================== */

const BOOK_INDEX = [
  { n: 1, page: 11, title: T("Veeltermfuncties", "Polynomial functions"), sections: [
    { c:"1.1", page:16, ready:true,  lesson:"1.1", title: T("Definitie en domein van veeltermfuncties", "Definition and domain of polynomial functions") },
    { c:"1.2", page:18, ready:true,  lesson:"1.2", title: T("Euclidische deling en deelbaarheid van veeltermen", "Euclidean division and divisibility of polynomials") },
    { c:"1.3", page:24, ready:false, title: T("Nulwaarden en tekenschema van veeltermfuncties", "Zeros and sign chart of polynomial functions") },
    { c:"1.4", page:28, ready:false, title: T("Veeltermongelijkheden", "Polynomial inequalities") },
    { c:"1.5", page:30, ready:false, title: T("Grafisch onderzoek van veeltermfuncties", "Graphical study of polynomial functions") }
  ]},
  { n: 2, page: 59, title: T("Rationale functies", "Rational functions"), sections: [
    { c:"2.1", page:62, ready:false, title: T("Definitie en domein van rationale functies", "Definition and domain of rational functions") },
    { c:"2.2", page:64, ready:false, title: T("Nulwaarden en tekenschema van rationale functies", "Zeros and sign chart of rational functions") },
    { c:"2.3", page:66, ready:false, title: T("Homografische functies", "Homographic functions") },
    { c:"2.4", page:72, ready:false, title: T("Asymptoten en perforaties van rationale functies", "Asymptotes and holes of rational functions") },
    { c:"2.5", page:78, ready:false, title: T("Grafisch onderzoek van rationale functies", "Graphical study of rational functions") }
  ]},
  { n: 3, page: 101, title: T("Irrationale functies", "Irrational functions"), sections: [
    { c:"3.1", page:104, ready:false, title: T("Machten met rationale exponenten", "Powers with rational exponents") },
    { c:"3.2", page:106, ready:false, title: T("Definitie en domein van irrationale functies", "Definition and domain of irrational functions") },
    { c:"3.3", page:108, ready:false, title: T("Nulwaarden en tekenschema van irrationale functies", "Zeros and sign chart of irrational functions") },
    { c:"3.4", page:112, ready:false, title: T("Grafisch onderzoek van irrationale functies", "Graphical study of irrational functions") },
    { c:"3.5", page:116, ready:false, title: T("Inverse functies", "Inverse functions") }
  ]},
  { n: 4, page: 131, title: T("Exponentiële en logaritmische functies", "Exponential and logarithmic functions"), sections: [
    { c:"4.1", page:134, ready:false, title: T("Exponentiële groei", "Exponential growth") },
    { c:"4.2", page:140, ready:false, title: T("Exponentiële functies", "Exponential functions") },
    { c:"4.3", page:146, ready:false, title: T("Exponentiële vergelijkingen en ongelijkheden", "Exponential equations and inequalities") },
    { c:"4.4", page:150, ready:false, title: T("Logaritmen", "Logarithms") },
    { c:"4.5", page:158, ready:false, title: T("Logaritmische functies", "Logarithmic functions") },
    { c:"4.6", page:164, ready:false, title: T("Logaritmische vergelijkingen en ongelijkheden", "Logarithmic equations and inequalities") }
  ]},
  { n: 5, page: 203, title: T("Goniometrische functies", "Trigonometric functions"), sections: [
    { c:"5.1", page:208, ready:false, title: T("De radiaal", "The radian") },
    { c:"5.2", page:210, ready:false, title: T("Goniometrische getallen van verwante hoeken", "Trigonometric ratios of related angles") },
    { c:"5.3", page:212, ready:false, title: T("Periodieke functies", "Periodic functions") },
    { c:"5.4", page:214, ready:false, title: T("Goniometrische functies", "Trigonometric functions") },
    { c:"5.5", page:218, ready:false, title: T("Algemene sinusfunctie", "The general sine function") },
    { c:"5.6", page:224, ready:false, title: T("Goniometrische formules", "Trigonometric formulas") },
    { c:"5.7", page:230, ready:false, title: T("Goniometrische vergelijkingen en ongelijkheden", "Trigonometric equations and inequalities") }
  ]}
];

const BOOK_EXTRAS = [
  { page:129, title: T("TEST JEZELF — hoofdstukken 1, 2 en 3", "TEST YOURSELF — chapters 1, 2 and 3") },
  { page:260, title: T("TEST JEZELF — hoofdstukken 4 en 5", "TEST YOURSELF — chapters 4 and 5") },
  { page:264, title: T("SYNTHESE — hoofdstukken 1, 2, 3, 4 en 5", "SYNTHESIS — chapters 1, 2, 3, 4 and 5") }
];

/* ------------------------------------------------------------------ */
const STUDY_PLAN = {
  method: [
    { step: T("Stap 1","Step 1"), nl: "Voorkennis en Ken je klassiekers",
      title: T("Voorkennis","Prior knowledge"),
      text: T("Elk hoofdstuk start met enkele bladzijden voorkennis. Lees ze <b>vóór</b> de nieuwe theorie. Ontbreekt er iets uit de eerste of tweede graad, maak dan eerst de <i>Ken je klassiekers</i> op Pelckmans Portaal.",
              "Every chapter opens with a few pages of prior knowledge. Read them <b>before</b> the new theory. If something from earlier years is missing, do the <i>Ken je klassiekers</i> set on Pelckmans Portaal first.") },
    { step: T("Stap 2","Step 2"), nl: "Theorie en startoefeningen",
      title: T("Theorie + startoefeningen","Theory + start exercises"),
      text: T("Elk lesonderdeel start met nieuwe theorie, meteen gevolgd door startoefeningen. Die oefeningen bestaan om na te gaan of je de theorie echt begrepen hebt — maak ze dezelfde dag, niet later. De GeoGebra-applets in het digiboek tonen dezelfde theorie visueel.",
              "Each part starts with new theory followed immediately by start exercises. Those exercises exist to test whether you actually understood the theory — do them the same day, not later. The GeoGebra applets in the digital book show the same theory visually.") },
    { step: T("Stap 3","Step 3"), nl: "Weer- en meeroefeningen",
      title: T("Herhalen of verder duwen","Repeat or push further"),
      text: T("Waren de startoefeningen moeilijk → maak de <b>WEER</b>-oefeningen. Waren ze makkelijk → ga meteen naar <b>MEER</b> en laat het niveau stijgen. De meeste meeroefeningen worden gevolgd door een spiegeloefening van hetzelfde niveau — gebruik die om te bevestigen dat je het echt kunt.",
              "If the start exercises were hard → do the <b>WEER</b> (repeat) exercises. If they were easy → skip straight to <b>MEER</b> (more), and climb the difficulty levels. Most <i>meer</i> exercises are followed by a mirror exercise of the same level — use it to confirm you really got it.") },
    { step: T("Stap 4","Step 4"), nl: "Synthese en Test jezelf",
      title: T("Synthese + Test jezelf","Synthesis + Test yourself"),
      text: T("De <i>Synthese</i> achteraan geeft een overzicht van alle theorie. De <i>Test jezelf</i>-delen zijn grote gemengde oefeningenreeksen — hou die voor je examenherhaling, wanneer de onderwerpen in willekeurige volgorde op je afkomen.",
              "The <i>Synthese</i> at the back of the book summarises all the theory. The <i>Test jezelf</i> sections are large mixed exercise sets — save these for exam revision, when topics come at you in random order.") }
  ],

  week: [
    { day: T("Maandag","Monday"),   task: T("Lees de nieuwe theorie (20 min) en schrijf je eigen samenvattingsfiche van één blad — in je eigen woorden, niet overgeschreven.",
                                            "Read the new theory (20 min) and write your own one-page summary card — in your own words, not copied.") },
    { day: T("Dinsdag","Tuesday"),  task: T("Startoefeningen van dat onderdeel. Duid elke oefening aan die je niet alleen kon.",
                                            "Start exercises (startoefeningen) of that part. Mark every exercise you could not do on your own.") },
    { day: T("Woensdag","Wednesday"), task: T("WEER- of MEER-oefeningen, afhankelijk van hoe dinsdag ging.",
                                            "WEER or MEER exercises, depending on how Tuesday went.") },
    { day: T("Donderdag","Thursday"), task: T("Maak twee foute oefeningen opnieuw — met het boek dicht. Dit is de stap die de meesten overslaan, en net die zorgt ervoor dat het blijft hangen.",
                                            "Redo two exercises you got wrong — with the book closed. This is the step most people skip and it is the one that makes it stick.") },
    { day: T("Vrijdag","Friday"),   task: T("15 min flitsherhaling: lees enkel je samenvattingsfiches van het hele hoofdstuk tot nu toe.",
                                            "15 min flash review: read only your summary cards of the whole chapter so far.") },
    { day: T("Weekend","Weekend"),  task: T("30 min gemengde herhaling van een ouder hoofdstuk. Spreiden werkt beter dan blokken.",
                                            "30 min mixed review of an older chapter. Spacing beats cramming.") }
  ],

  schedule: [
    { block: T("Week 1 – 5","Weeks 1 – 5"), chapter:"1", pages:"11 – 58",
      title: T("Veeltermfuncties","Polynomial functions"),
      focus: T("Woordenschat, euclidische deling, Horner, reststelling, ontbinden, tekenschema's, grafieken.",
               "Vocabulary, Euclidean division, Horner, remainder theorem, factoring, sign charts, graphs.") },
    { block: T("Week 6 – 11","Weeks 6 – 11"), chapter:"2", pages:"59 – 100",
      title: T("Rationale functies","Rational functions"),
      focus: T("Beperkingen op het domein, homografische functies, asymptoten en perforaties.",
               "Domain restrictions, homographic functions, asymptotes and holes.") },
    { block: T("Week 12 – 15","Weeks 12 – 15"), chapter:"3", pages:"101 – 128",
      title: T("Irrationale functies","Irrational functions"),
      focus: T("Rationale exponenten, wortels, domeinvoorwaarden, inverse functies.",
               "Rational exponents, roots, domain conditions, inverse functions.") },
    { block: T("Week 16","Week 16"), chapter:"—", pages:"129 – 130",
      title: T("TEST JEZELF hoofdstukken 1–3","TEST YOURSELF chapters 1–3"),
      focus: T("Gemengde oefeningen. Maak ze op tijd, met enkel je samenvattingsfiches ernaast.",
               "Mixed exercises. Do them timed, with only your summary cards next to you.") },
    { block: T("Week 17 – 24","Weeks 17 – 24"), chapter:"4", pages:"131 – 202",
      title: T("Exponentiële en logaritmische functies","Exponential and logarithmic functions"),
      focus: T("Het grootste hoofdstuk. Groeifactoren, rekenregels voor logaritmen, vergelijkingen en ongelijkheden.",
               "The biggest chapter. Growth factors, laws of logarithms, equations and inequalities.") },
    { block: T("Week 25 – 30","Weeks 25 – 30"), chapter:"5", pages:"203 – 259",
      title: T("Goniometrische functies","Trigonometric functions"),
      focus: T("Radialen, periodieke functies, de algemene sinusfunctie, goniometrische formules.",
               "Radians, periodic functions, the general sine function, trig formulas.") },
    { block: T("Examenperiode","Exam period"), chapter:"—", pages:"260 – 270",
      title: T("TEST JEZELF 4–5 + SYNTHESE","TEST YOURSELF 4–5 + SYNTHESIS"),
      focus: T("Drie rondes: (1) lees de volledige Synthese, (2) maak elke oefening opnieuw die je ooit fout had, (3) één volledige gemengde reeks op tijd.",
               "Three passes: (1) read the whole Synthese, (2) redo every exercise you once got wrong, (3) one full timed mixed set.") }
  ],

  tips: [
    { t: T("Doe wiskunde met een pen, niet met je ogen","Do maths with a pen, not with your eyes"),
      d: T("Een uitgewerkt voorbeeld lezen voelt als leren, maar dat is het niet. Dek de oplossing af, maak ze zelf, vergelijk dan pas. Kun je ze niet reproduceren, dan heb je ze niet geleerd.",
           "Reading a worked example feels like learning but isn't. Cover the solution, do it yourself, then compare. If you cannot reproduce it, you have not learnt it.") },
    { t: T("Controleer altijd je antwoord","Always check your answer"),
      d: T("Elke deling in dit hoofdstuk controleer je in 20 seconden door x = 1 in te vullen in A(x) = Q(x)·D(x) + R(x). Gratis punten.",
           "Every division in this chapter can be checked in 20 seconds by substituting x = 1 into A(x) = Q(x)·D(x) + R(x). Free marks.") },
    { t: T("Hou een foutenlijst bij","Keep a mistake log"),
      d: T("Eén blad per hoofdstuk. Noteer het oefeningnummer en in één zin <i>waarom</i> het fout ging (teken, veelterm niet vervolledigd, verkeerde formule). Herlees die lijst vóór elke toets — de meesten maken steeds dezelfde drie fouten.",
           "One page per chapter. Write the exercise number and, in one line, <i>why</i> you got it wrong (sign, forgot to complete the polynomial, wrong formula). Re-read it before every test — most people repeat the same three mistakes.") },
    { t: T("Leer ook het Engelse woord","Learn the Dutch and English word"),
      d: T("De les en het examen zijn in het Nederlands, maar zoek je online uitleg of video's, dan is dat vaak Engels. De woordenlijst hier legt de brug.",
           "The lesson and the exam are in Dutch; use the glossary here so you never lose marks on wording.") },
    { t: T("25 minuten, dan een echte pauze","25 minutes, then a real break"),
      d: T("Twee geconcentreerde blokken van 25 minuten zijn beter dan één verstrooid uur. Gsm in een andere kamer.",
           "Two focused 25-minute blocks beat one distracted hour. Phone in another room.") },
    { t: T("Leg het hardop uit","Explain it out loud"),
      d: T("Kun je het schema van Horner uitleggen aan iemand die het niet kent, dan ken je het. Loop je halverwege vast, dan is dat precies het stuk dat je moet herlezen.",
           "If you can explain Horner's scheme to someone who doesn't know it, you know it. If you get stuck halfway, that is exactly the bit to reread.") }
  ]
};

/* ------------------------------------------------------------------ */
const FORMULAS = [
  { group: T("Veeltermen","Polynomials"), items: [
    { n: T("Algemene veelterm","General polynomial"),
      f: `<span class="m">A(x) = a<sub>n</sub>x<sup>n</sup> + a<sub>n−1</sub>x<sup>n−1</sup> + … + a<sub>1</sub>x + a<sub>0</sub></span>, &nbsp;<span class="m">a<sub>n</sub> ≠ 0</span>` },
    { n: T("Graad","Degree"),
      f: T(`<span class="m">gr(A(x)) = n</span> — de hoogste exponent van <span class="m">x</span>`,
           `<span class="m">gr(A(x)) = n</span> — the highest exponent of <span class="m">x</span>`) },
    { n: T("Getalwaarde","Numerical value"),
      f: `<span class="m">A(r) = a<sub>n</sub>r<sup>n</sup> + … + a<sub>1</sub>r + a<sub>0</sub></span>` },
    { n: T("Domein","Domain"),
      f: T(`<span class="m">dom f = ℝ</span> voor elke veeltermfunctie`, `<span class="m">dom f = ℝ</span> for every polynomial function`) }
  ]},
  { group: T("Delen","Division"), items: [
    { n: T("Delingsidentiteit","Division identity"),
      f: T(`<span class="m">A(x) = D(x) · Q(x) + R(x)</span> &nbsp;met&nbsp; <span class="m">gr(R(x)) &lt; gr(D(x))</span>`,
           `<span class="m">A(x) = D(x) · Q(x) + R(x)</span> &nbsp;with&nbsp; <span class="m">gr(R(x)) &lt; gr(D(x))</span>`) },
    { n: T("Opgaande deling","Exact division"),
      f: T(`<span class="m">R(x) = 0</span> &nbsp;⟺&nbsp; <span class="m">D(x)</span> is een deler van <span class="m">A(x)</span>`,
           `<span class="m">R(x) = 0</span> &nbsp;⟺&nbsp; <span class="m">D(x)</span> is a divisor of <span class="m">A(x)</span>`) },
    { n: T("Reststelling","Remainder theorem"),
      f: T(`Deel door <span class="m">x − a</span> &nbsp;→&nbsp; <span class="m">r = A(a)</span>`,
           `Divide by <span class="m">x − a</span> &nbsp;→&nbsp; <span class="m">r = A(a)</span>`) },
    { n: T("Deelbaarheid door x − a","Divisibility by x − a"),
      f: T(`<span class="m">x − a</span> deelt <span class="m">A(x)</span> &nbsp;⟺&nbsp; <span class="m">A(a) = 0</span>`,
           `<span class="m">x − a</span> divides <span class="m">A(x)</span> &nbsp;⟺&nbsp; <span class="m">A(a) = 0</span>`) },
    { n: T("Kandidaat-delers","Candidate divisors"),
      f: T(`<span class="m">a</span> moet een gehele deler zijn van de constante term <span class="m">a<sub>0</sub></span>`,
           `<span class="m">a</span> must be an integer divisor of the constant term <span class="m">a<sub>0</sub></span>`) }
  ]},
  { group: T("Uit de voorkennis","From prior knowledge"), items: [
    { n: T("Nulwaarde eerstegraadsfunctie","First-degree zero"),
      f: `<span class="m">ax + b = 0 ⟺ x = −</span>${FR('b','a')}` },
    { n: T("Discriminant","Discriminant"), f: `<span class="m">D = b<sup>2</sup> − 4ac</span>` },
    { n: T("Oplossingsformule","Quadratic formula"), f: `<span class="m">x<sub>1,2</sub> = </span>${FR('−b ± √D','2a')}` },
    { n: T("Drieterm ontbinden","Factoring a quadratic"), f: `<span class="m">ax<sup>2</sup> + bx + c = a(x − x<sub>1</sub>)(x − x<sub>2</sub>)</span>` },
    { n: T("Topvergelijking","Vertex form"), f: `<span class="m">y = a(x − x<sub>T</sub>)<sup>2</sup> + y<sub>T</sub></span>` }
  ]}
];

/* ------------------------------------------------------------------ */
const GLOSSARY = [
  { nl:"eenterm", en:"monomial", note: T("getal × een macht van x, natuurlijke exponent","number × a power of x, natural exponent") },
  { nl:"veelterm", en:"polynomial", note: T("som van eindig veel eentermen","sum of finitely many monomials") },
  { nl:"veeltermfunctie", en:"polynomial function", note: T("functie met een veelterm als voorschrift","function whose rule is a polynomial") },
  { nl:"coëfficiënt", en:"coefficient", note: T("de getalfactor a<sub>i</sub>","the number factor a<sub>i</sub>") },
  { nl:"graad", en:"degree", note: T("hoogste exponent, gr(A(x))","highest exponent, gr(A(x))") },
  { nl:"nulveelterm", en:"zero polynomial", note: T("alle coëfficiënten zijn 0","all coefficients are 0") },
  { nl:"volledige veelterm", en:"complete polynomial", note: T("elke macht van 0 tot n komt voor","every power from 0 to n present") },
  { nl:"getalwaarde", en:"numerical value", note: T("A(r), vervang x door r","A(r), substitute x = r") },
  { nl:"functiewaarde", en:"function value", note: T("f(r), de y-waarde","f(r), the y-value") },
  { nl:"invoerwaarde", en:"input value", note: T("de x-waarde, het argument","the x-value, the argument") },
  { nl:"beeld", en:"image", note: T("ander woord voor de functiewaarde","another word for the function value") },
  { nl:"domein", en:"domain", note: T("dom f — alle toegelaten x","dom f — all allowed x") },
  { nl:"bereik", en:"range", note: T("ber f — alle bereikte y","ber f — all reached y") },
  { nl:"deeltal", en:"dividend", note: T("de veelterm die je deelt","the polynomial being divided") },
  { nl:"deler", en:"divisor", note: T("waardoor je deelt","what you divide by") },
  { nl:"quotiënt", en:"quotient", note: T("Q(x), het resultaat","Q(x), the result") },
  { nl:"rest", en:"remainder", note: "R(x) / r" },
  { nl:"opgaande deling", en:"exact division", note: T("rest = 0","remainder = 0") },
  { nl:"niet-opgaande deling", en:"non-exact division", note: T("rest ≠ 0","remainder ≠ 0") },
  { nl:"euclidische deling", en:"Euclidean division", note: T("staartdeling van veeltermen","long division of polynomials") },
  { nl:"rekenschema van Horner", en:"Horner's scheme", note: T("snel delen door x − a","fast division by x − a") },
  { nl:"reststelling", en:"remainder theorem", note: "r = A(a)" },
  { nl:"ontbinden in factoren", en:"to factor / factorise", note: T("schrijven als een product","write as a product") },
  { nl:"merkwaardig product", en:"special product", note: "(a − b)² = a² − 2ab + b²" },
  { nl:"stelling", en:"theorem", note: "" },
  { nl:"eigenschap", en:"property", note: "" },
  { nl:"bewijs", en:"proof", note: "" },
  { nl:"gegeven / te bewijzen", en:"given / to prove", note: T("zo start elk bewijs","how every proof starts") },
  { nl:"stappenplan", en:"step plan / method", note: "" },
  { nl:"voorschrift", en:"function rule", note: T("de formule f(x) = …","the formula f(x) = …") },
  { nl:"nulwaarde", en:"zero (of a function)", note: T("x-waarde waarvoor f(x) = 0","x-value where f(x) = 0") },
  { nl:"nulpunt", en:"zero point", note: T("het punt (x, 0) op de grafiek","the point (x, 0) on the graph") },
  { nl:"tekenschema", en:"sign chart", note: T("waar f(x) + of − is","where f(x) is + or −") },
  { nl:"verloopschema", en:"variation chart", note: T("waar f stijgt ↗ of daalt ↘","where f increases ↗ or decreases ↘") },
  { nl:"stijgend / dalend", en:"increasing / decreasing", note: "" },
  { nl:"extremum", en:"extremum", note: T("een relatief maximum of minimum","a relative maximum or minimum") },
  { nl:"top (van een parabool)", en:"vertex", note: "T(x_T , y_T)" },
  { nl:"dalparabool / bergparabool", en:"valley / mountain parabola", note: "a > 0 / a < 0" },
  { nl:"richtingscoëfficiënt", en:"slope", note: T("de a in y = ax + b","the a in y = ax + b") },
  { nl:"vierkantsvergelijking", en:"quadratic equation", note: "" },
  { nl:"discriminant", en:"discriminant", note: "D = b² − 4ac" },
  { nl:"ongelijkheid", en:"inequality", note: "" },
  { nl:"startoefening", en:"start exercise", note: T("meteen na de theorie","right after the theory") },
  { nl:"weeroefening / meeroefening", en:"repeat / extra exercise", note: T("makkelijker / moeilijker oefenen","easier / harder practice") },
  { nl:"voorkennis", en:"prior knowledge", note: T("wat je al moet kennen","what you should already know") },
  { nl:"hoofdstuk", en:"chapter", note: "" },
  { nl:"functieonderzoek", en:"function analysis", note: T("de ondertitel van dit boek","the subtitle of this book") }
];

/* Lesson files push themselves into this array. */
const LESSONS = [];
