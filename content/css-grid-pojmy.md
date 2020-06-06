# Pojmy v CSS gridu

V gridu se to hemží pojmy, které si musíme vyjasnit. Jsou totiž důležité a náchylné na záměnu, což nám může způsobit nejednu malou katastrofu.

Vysvětlíme si to na příkladu. Vezměme, že máme toto HTML:

```html
<div class="container">
  <p class="item">1</p>
  <p class="item">2</p>
  <p class="item">3</p>
  <p class="item">4</p>
  <p class="item item--five">5</p>
</div>
```

Prozatím nechme stranou speciální nastavení páté položky, k tomu se propracujeme.

Mřížku definujeme jako třísloupcovou, ale řádky necháme na automatice gridu:

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
```

První slupec má dvojnásobnou šířku oproti druhému a třetímu.

V prohlížeči bude naše mřížka vypadat následovně:

*TODO Obrázek: Máme tady jeden kontejner a pět položek*

Dostáváme se tím k pojmům. Zde je budu uvádět česky s anglickým ekvivalentem v závorce, v dalších textech už povětšinou jen česky.

## Kontejner mřížky (grid container) {#kontejner}

Kontejner vytvoříme z jakéhokoliv prvku v HTML prostým deklarování `display:grid` nebo `display:inline-grid`. Vznikne tím *grid formatting context* (formátovací kontext pro mřížku) a začnou platit trochu jiná pravidla než například pro *block formatting context*, který by vznikl uvedením `display:block`.

V našem příkladu jsme tedy kontejner mřížky udělali z prvku `<div class="container">`.

<!-- TODO odkaz na vlastnosti -->

Jednou z vlastností formátovacích kontextu mřížky je, že každý z přímých potomků v DOM bude prohlížečem považován za položku mřížky.

## Položka mřížky (grid item) {#polozka}

Položkou mřížky v ukázce jsou tedy všechny prvky `<p class="item">`.

Položka nemá žádné speciální vlastnosti, kromě toho, že je nesvobodná – prohlížeč se ji snaží vložit do definované mřížky.

Nesbododnou položku ale můžete emancipovat tím, že i z ní uděláte kontejner (`display:grid`) a ona pak bude omezovat na svobodě své potomky. Ano, zanořování více mřížek do sebe je možné.

### Anonymní položky {#anonymni-polozka}

Musíme si tady uvědomit, že položkou je každý DOM uzel, který je přímým potomkem kontejneru mřížky.

Do této kategorie patří také například obrázky nebo takzvané *anonymní uzly*, což jsou textové bloky neuzavřené v HTML elementu.

```html
<div class="container">
  <p class="item">I'm an item</p>
  <img src="img.png" width="300" height="200" alt="…">  
  I'm an item too
</div>
```

V této ukázce prostě máme rovnou tři položky gridu a nějak si s nimi budeme muset poradit při definování mřížky. Já jsem to tady pojal jednoduše:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}  
```

Rozdělil jsem plochu, kterou vymezuje kontejner, na tři rovnoměrné části. Na skutečné dělení měl vliv samotný obsah položek, ale o tom se budeme bavit později.

*TODO Obrázek: Takhle to nakonec vypadá. Obrázek i anonymní textový uzel jsou plnohodnotnými občany definované mřížky.*

Tuto specialitu zmiňuji hlavně proto, abyste se dokázali vyhnout problémům, které to přináší. Obecně ale velmi doporučuji definovat každou položku gridu do samostatného a pojmenovaného HTML prvku. Už jen proto, aby se vám na něj lépe cílilo pomocí CSS selektorů.

CodePen: [cdpn.io/e/ZEQGbgy](https://codepen.io/machal/pen/ZEQGbgy?editors=1100)

Shrňme si, co víme: Kontejner mřížky je rodičovský prvek v HTML, který definuje, že tady se bude odehrávat formátování CSS gridem. Položka mřížky je každý jeho přímý potomek, včetně těch anonymních.

Než dojdeme k dalším pojmům, uděláme našemu příkladu nepěknou a ošklivou věc. Zmenšíme plochu stránky tak, aby šířka položek přesáhla šířku kontejneru.

*TODO obrázek: A je to venku.*

Mimochodem, s původně uvedeným CSS a HTML by to takhle udělat nešlo. Musel jsem styly trochu změnit tak, aby si položky kontejneru zachovávaly nějakou minimální šířku:

```css
.container {
  grid-template-columns:
    minmax(200px, 2fr)
    minmax(100px, 1fr)
    minmax(100px, 1fr);
}
```

Je pravděpodobné, že [funkci `minmax()`](css-minmax.md) zatím neznáte. Ona ale dělá přesně to, na co byste ji tipli – v našem případě zakazuje zmenšení první položky pod 200 pixelů a druhé a třetí pod 100.

Kontejner je teď menší než je samotná mřížka. Po vytečení „položek z kontejneru“ se dostáváme k dalším pojmům. 

*TODO obrázek s popisky mřížka a kontejner: Tady je vidět rozdíl mezi kontejnerem mřížky a mřížkou samotnou.*

## Mřížka (grid) {#mrizka}

Mřížka je ona neviditelná pravidelná síť, do které umísťujeme náš layout.

Může být stejně velká jako kontejner, ale nemusí. Kontejner je jen jakési „okno“ pro vykreslování mřížky.

Říkám, že je neviditelná, ale takto to být nemusí. Autoři prohlížečů Chrome a obzvlášťě Firefox jsou v této oblasti webovým vývojářům velmi nápomocní a tak je možné samotnou mřížku pěkne vizualizovat v DevTools. 

*TODO obrázek: CSS Grid Inspector ve Firefoxu.*

Vizualizace mřížky ve Firefoxu nebo i v Chrome pomůže pochopit, z čeho se váš grid skládá a jak to chápe prohlížeč. Velmi doporučuji to při práci na mřížkách používat. 

Když už tedy víme, co je mřížka a umíte ji vizualizovat, pojďme si říct, z jakých stavebních prvků se přesně ta naše mřížka skládá.

*TODO obrázek: Mřížka, linka, oblast, řádek, sloupec*

## Linka mřížky (grid line) {#linka}

## Stopa mřížky (grid track) {#stopa}

## Řádek, sloupec mřížky (grid row, grid column) {#radek-sloupec}

*TODO obrázek: Buňka*

## Buňka mřížky (grid cell) {#bunka}

## Oblast mřížky (grid area)  {#oblast}

Pátou položku pak ručně umístíme na patřičnou pozici mřížky:

```css
.item--five {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
}
```


https://codepen.io/machal/pen/vYLONWz?editors=1100
