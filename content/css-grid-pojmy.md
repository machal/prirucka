# Pojmy v CSS gridu

V gridu se to hemží pojmy, které si musíme vyjasnit. Jsou totiž důležité pro pochopení tohoto typu rozvržení a náchylné na záměnu, což nám může způsobit nejednu malou katastrofu.

Vysvětlíme si to na příkladu. Řekněme, že máme toto HTML:

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item item--five">5</div>
</div>
```

Prozatím nechme stranou specifické nastavení páté položky zde reprezentované třídou `.item--five`, k tomu se propracujeme.

Mřížku definujeme jako třísloupcovou, ale řádky necháme na automatice gridu:

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
```

S pomocí [vlastnosti `grid-template-columns`](css-grid-template-rows-columns.md) vytvoříme kýžené tři sloupce. První z nich bude mít dvojnásobnou šířku oproti druhému a třetímu. Definujeme to [zlomkovou jednotkou `fr`](css-jednotka-fr.md).

V prohlížeči bude naše mřížka vypadat následovně:

<figure class="figure-thirds">
<img src="../dist/images/original/vdlayout/pojmy-grid-kontejner-polozky.jpg" width="1600" height="900" alt="…">
<figcaption markdown="1">
*Byl jednou jeden kontejner a v něm žilo pět položek…*
</figcaption>
</figure>

Na obrázku vidíme jeden kontejner a pět položek mřížky, čímž se dostáváme k našim pojmům. Budu je zde uvádět česky s anglickým ekvivalentem v závorce, v dalších textech už většinou jen česky.

## Kontejner mřížky (grid container) {#kontejner}

<div class="book-index" data-book-index="Kontejner mřížky"></div>
<div class="book-index" data-book-index="Formátovací kontext"></div>

Kontejner vytvoříme z jakéhokoliv prvku v HTML prostým deklarováním [`display:grid` nebo `display:inline-grid`](css-display.md).

Vznikne tím [formátovací kontext pro mřížku](css-grid-formatting-context.md) (grid formatting context) a začnou platit trochu jiná pravidla než například pro blokový formátovací kontext (block formatting context), který by vznikl uvedením `display:block`.

V našem příkladu jsme tedy kontejner mřížky udělali z prvku `.container`.

Jednou z vlastností formátovacího kontextu mřížky je, že každý z přímých potomků ve stromě DOM bude prohlížečem považován za položku mřížky.

## Položka mřížky (grid item) {#polozka}

<div class="book-index" data-book-index="Položka mřížky"></div>
<div class="book-index" data-book-index="Grid item"></div>

Položkou mřížky v ukázce jsou všechny prvky `.item`.

Položka nemá žádné specifické vlastnosti – kromě toho, že je nesvobodná. Prohlížeč se ji totiž snaží vložit do definované mřížky.

Položku ale můžeme osvobodit tím, že i z ní uděláme kontejner (`display:grid`) a ona pak bude omezovat na svobodě své potomky. Pochopili jste mě správně – zanořování více gridů do sebe je možné.

### Anonymní položky {#anonymni-polozka}

<div class="book-index" data-book-index="Anonymní položka"></div>

Musíme si tady uvědomit, že položkou je každý uzel DOMu, který je přímým potomkem kontejneru mřížky.

Do této kategorie patří i třeba obrázky nebo takzvané *anonymní uzly*, což jsou textové bloky, potomci kontejneru, neuzavřené v elementu HTML.

```html
<div class="container">
  <div class="item">I'm an item</div>
  <img src="img.jpg" width="300" height="200" alt="…">  
  I'm an item too
</div>
```

V této ukázce máme tedy rovnou tři položky mřížky a nějak si s nimi budeme muset poradit při jejím definování. Já jsem to tu pojal jednoduše:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}  
```

Rozdělil jsem plochu, kterou vymezuje kontejner, na tři rovnoměrné části. Na skutečné šířky položek bude mít vliv jejich obsah, ale o tom se budeme bavit později.

<figure>
<img src="../dist/images/original/vdlayout/pojmy-anonymni.jpg" width="1600" height="450" alt="Anonymní uzel v CSS gridu">
<figcaption markdown="1">
*Obrázek i anonymní textový uzel jsou plnohodnotnými obyvateli definované mřížky.*
</figcaption>
</figure>

Tuto specialitu zmiňuji hlavně proto, abychom se dokázali vyhnout problémům, které to přináší. Obecně ale velmi doporučuji definovat každou položku gridu do samostatného HTML prvku. Už jen proto, aby se vám na něj lépe cílilo pomocí CSS selektorů.

CodePen: [vrdl.in/z90q8](https://codepen.io/machal/pen/ZEQGbgy?editors=1100)

Kontejner mřížky je tedy rodičovský prvek, který v HTML definuje, že tady se bude odehrávat formátování CSS gridem. Položka mřížky je každý jeho přímý potomek, včetně těch anonymních.

Než dojdeme k dalším pojmům, spácháme na naší původní ukázce nepěknou a ošklivou věc. Zmenšíme plochu stránky tak, aby šířka položek přesáhla šířku kontejneru.

Kontejner je teď menší než samotná mřížka. Po vytečení „položek z kontejneru“ se dostáváme k dalším pojmům.

<figure class="figure-thirds">
<img src="../dist/images/original/vdlayout/pojmy-kontejner-mrizka.jpg" width="1600" height="900" alt="Kontejner a mřížka v CSS gridu">
<figcaption markdown="1">
*Tady je vidět rozdíl mezi kontejnerem mřížky a mřížkou samotnou.*
</figcaption>
</figure>

Mimochodem, s původně uvedeným CSS a HTML by to takhle udělat nešlo. Musel jsem styly trochu změnit tak, aby si položky kontejneru zachovaly nějakou minimální šířku:

```css
.container {
  grid-template-columns:
    minmax(500px, 2fr) minmax(250px, 1fr) minmax(250px, 1fr);
}
```

[Funkci `minmax()`](css-minmax.md) možná už znáte. Dělá přesně to, na co byste ji odhadovali – v našem případě zakazuje zmenšení první položky pod 500 pixelů a druhé a třetí pod 250 pixelů.

CodePen: [vrdl.in/6mif9](https://codepen.io/machal/pen/qBbjjoj?editors=1100)

<div class="pbi-avoid" markdown="1">

## Mřížka (grid) {#mrizka}

<div class="book-index" data-book-index="Mřížka v gridu"></div>

Mřížka je ona neviditelná pravidelná síť, do které umísťujeme náš layout.

Může být stejně velká jako kontejner, ale nemusí. Kontejner je jen jakési „okno“ pro vykreslování mřížky.

Říkám, že je neviditelná, ale takto to být nemusí vždy a všude. Autoři prohlížečů jsou v této oblasti webovým vývojářům velmi nápomocní, a tak je možné samotnou mřížku pěkně vizualizovat v DevTools.

<figure>
<img src="../dist/images/original/vdlayout/devtools-layout-chrome.jpg" width="1600" height="450" alt="CSS grid Inspector v Chromu">
<figcaption markdown="1">
*Grid v negližé, to je vizualizace mřížky v Chromu.*
</figcaption>
</figure>

Vizualizace mřížky ve Firefoxu nebo i v Chromu pomůže pochopit, z čeho se váš grid skládá a jak to chápe prohlížeč. Velmi doporučuji tuto funkci při práci na mřížkách používat.

<div class="ebook-only" markdown="1">

O podpoře layoutů v DevTools moderních prohlížečů je více [v osmé kapitole](css-layout-devtools.md).

</div>

Když už tedy víme, co je mřížka, a když už ji umíte vizualizovat, pojďme si říct, z jakých stavebních prvků se ta naše mřížka přesně skládá.

<figure>
<img src="../dist/images/original/vdlayout/pojmy-gridu.jpg" width="1600" height="900" alt="…">
<figcaption markdown="1">
Tady máme celou partu: mřížka, linka, oblast, řádek i sloupec.
</figcaption>
</figure>

</div>
<!-- .pbi-avoid -->

## Linka mřížky (grid line) {#linka}

<div class="book-index" data-book-index="Linka mřížky"></div>
<div class="book-index" data-book-index="Grid line"></div>

Linka je základní prvek rozvržení mřížky. Jde o čáru, která mřížku dělí na řádky, sloupce a pak jednotlivé buňky.

Jak je patrné z obrázku výše, linky mají svá čísla. Pozor, začíná se vždy od `1`, nikoliv od nuly, na což může naletět nejeden programátorsky orientovaný vývojář.

Při definici mřížky, například [vlastnostmi `grid-template-rows/columns`](css-grid-template-rows-columns.md), je možné si linky pojmenovat:

```css
.container {
  display: grid;
  grid-template-columns: [first] 2fr [second] 1fr [end];
}
```

<div class="pbi-avoid" markdown="1">

Uvedený zápis zařídí následující:

* Pojmenuje vodorovné linky jako `first`, `second` a `end`.
* Mezi linkami definuje dva sloupce, první je `2fr` široký a druhý `1fr`.

</div>
<!-- .pbi-avoid -->

Dostali jsme se díky tomu k dalšímu pojmu – sloupec mřížky. Než si jej rozebereme, musíme se seznámit s jiným pojmem – stopa mřížky.

## Stopa mřížky (grid track) {#stopa}

<div class="book-index" data-book-index="Stopa mřížky"></div>
<div class="book-index" data-book-index="Grid track"></div>

Stopa je prostor, který je definovaný dvěma linkami. Vede přitom od začátku mřížky k jejímu konci. Je to vidět na obrázku výše.

Jde jen o obecný název pro řádek (vodorovnou stopu) nebo sloupec (svislou stopu).

## Řádek, sloupec mřížky (grid row, grid column) {#radek-sloupec}

<div class="book-index" data-book-index="Sloupec mřížky"></div>
<div class="book-index" data-book-index="Grid row"></div>
<div class="book-index" data-book-index="Grid column"></div>

Vodorovné a svislé stopy mřížky jsou označovány jako řádky a sloupce, přesně jako to už znáte z tabulek.

Poznámka pro pokročilé: Pokud bychom chtěli být přesní, měli bychom uvést ještě pojem „osa mřížky“, což je stejně jako v geometrii přímka, jež určuje směry. V případě CSS gridu jsou ty směry naštěstí jen dva.

V pojmologii CSS gridu se nemluví o vodorovné a svislé ose, ale o blokové ose (block axis) a řádkové ose (inline axis). Proč proboha? Je to kvůli tomu, že CSS musí obsloužit nejen jazyky se zápisem vodorovným (jako je čeština nebo slovenština), ale také se zápisem svislým (jako může být například japonština). Pak se označení os prohodí, ale výhodou je, že ve směru psaní vždy zůstává bloková osa. Tím vás ale v textu nechci už opravdu více zatěžovat.

## Buňka mřížky (grid cell) {#bunka}

<div class="book-index" data-book-index="Buňka mřížky"></div>
<div class="book-index" data-book-index="Grid cell"></div>

Buňka je prostor vymezený čtyřmi linkami mřížky, který už není možné dále dělit dalšími linkami. Je to nejmenší prostorová jednotka mřížky, odpovídající buňce tabulky.

Pozor, buňka mřížky zároveň není položkou mřížky. Mřížka má vždy obdélníkový tvar, takže je možné definovat nižší počet položek, než má mřížka buněk.

Je to patrné v následujícím příkladu, kde jsme ubrali poslední položku. Mřížka však má stále tři sloupce a dva řádky:

<figure class="figure-thirds">
<img src="../dist/images/original/vdlayout/pojmy-polozky-bunky.jpg" width="1600" height="900" alt="Položky a buňky v CSS gridu">
<figcaption markdown="1">
*Některé buňky neuvidíte, ale jsou tam pořád, potvory.*
</figcaption>
</figure>

Je dobré si uvědomit, že právě proto nejde buňku mřížky nijak zacílit pomocí CSS. Je to jen jakási interní stavební jednotka mřížky.

CodePen: [vrdl.in/cuz72](https://codepen.io/machal/pen/NWxqNYB?editors=1100)

Abychom mohli buňku ovlivnit z CSS, musíme z ní udělat oblast.

## Oblast mřížky (grid area) {#oblast}

<div class="book-index" data-book-index="Oblast mřížky"></div>
<div class="book-index" data-book-index="Grid area"></div>

Oblast je prostor vymezený čtyřmi linkami mřížky, který ale lze dále dělit dalšími linkami. Oblast se tedy skládá z jedné nebo více buněk mřížky.

V naší ukázce jsme pátou položku ručně umístili na místo páté a šesté buňky mřížky, tedy do prostoru, který v předchozím obrázku vidíte jako neobsazený.

```css
.item--five {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
}
```

<div class="pbi-avoid" markdown="1">

Tento zápis přesně říká o umístění oblasti následující:

* Svisle ji umisť mezi druhou a čtvrtou linku mřížky `grid-column:2/4`, čili na místo druhého a třetího sloupce.
* Vodorovně ji umisť mezi druhou a třetí linku mřížky `grid-row:2/3`, čili do druhého řádku.

Ukázku uvidíte v CodePenu výše.

</div>
<!-- .pbi-avoid -->

## Mezery mezi buňkami (gap, gutter) {#gutter}

<div class="book-index" data-book-index="Mezera v layoutu"></div>
<div class="book-index" data-book-index="Gap"></div>

Bavme se nyní o mezerách. Jde o prostor mezi buňkami mřížky, pro jehož definici se používá [vlastnost `gap`](css-gap.md):

```css
.container {
  display: grid;
  gap: 10px;
}
```

„Gutter“ by se měl nejlépe přeložit jako „žlab“, ale v kontextu webdesignu by to bylo slovo poměrně neobvyklé. Slovo gutter se v hovorové webařštině vcelku běžně používá, takže si s ním jako se synonymem pro žlab vystačíme a dále už o žlabech příliš mluvit nebudeme.

Pojďme si 10pixelový gutter nadefinovat v našem příkladu a podívat se, jak to bude vypadat v prohlížeči.

<figure>
<img src="../dist/images/original/vdlayout/pojmy-grid-inspector.jpg" width="1600" height="900" alt="Inspektor CSS gridu ve Firefoxu">
<figcaption markdown="1">
*Linka mřížky se nám nafoukla do tvaru obdélníku.*
</figcaption>
</figure>

Jak je vidět z obrázku, z linek mřížky se staly obdélníky. Nikoliv úsečky nulové tloušťky, ale poctivé objekty ve tvaru sloupců a řádků, které mají svůj začátek i konec.

Ano, chápete to dobře. Vlastnost `gap` určuje šířku linek. Pokud mezery nedefinujeme, linky tvoří jen neviditelné úsečky, tak jako jste to viděli v předchozích příkladech.

CodePen: [vrdl.in/m87br](https://codepen.io/machal/pen/vYLONWz?editors=1100)

A to je vše, co jsem vám chtěl sdělit o stavebních prvcích v CSS gridu.
