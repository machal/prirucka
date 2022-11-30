# Proč mám raději grid než flexbox?

Pořád se něco učíme.
Abych se naučil layouty v CSS, napsal jsem o nich [knížku](https://www.vzhurudolu.cz/css-layout/).

Opravdu. Nemyslete si, že jsem si prostě jen sedl k počítači a začal sepisovat to, co jsem měl v hlavě.
O gridu a flexboxu jsem toho před třemi lety nevěděl více než průměrný frontendista.

Jedna z metod psaní knížky obnášela nakódování asi deseti častých webových layoutů.
Nejprve [flexboxem](css-flexbox.md), který jsem uměl lépe.
Pak [gridem](css-grid.md).

Překvapilo mě, že skoro vždy bylo nakonec řešení pomocí gridu efektivnější, přehlednější.
Vlastně celkově lepší.

Nejdůležitější znalost, kterou jsem při práci na knížce získal bylo to, že skoro vždy preferuji grid před flexboxem.
V tomhle textu vám ukážu důvody, proč tomu tak je.

## Flexbox vs. grid {#flexbox-vs-grid}

Začneme obecnou rovinou. V knížce mám pro srovnání těchto dvou systémů pro tvorbu layoutu takovou pěknou tabulku:

|   **Vlastnost**          | **Flexbox** | **Grid** |
|:-------------------------|:-----------:|:--------:|
|   Jednorozměrný layout   |       +     |     +    |
|   Dvourozměrný layout    |             |     +    |
|   Layout z obsahu        |       +     |     ?    |
|   Layout z mřížky        |             |     +    |
|   Kompatibilita v MSIE   |       +     |     ?    |

Už tady je trochu vidět, že v obecné rovině výhody gridu převládají:

- Grid je určený pro dvourozměrný layout (vodorovně i svisle), ale zvládnete s ním i ten jednorozměrný (v jednom ze směrů).
- Podstatné je, že flexbox byl navržený pro takzvaný „content out“ layout, kdy se layout vytváří na základě obsahu. Grid více odpovídá naší představě o layoutu – chceme, abychom layout kontrolovali my, ne obsah, (takzvaně „grid in“).
- Dříve byla velkou výhodou flexboxu jeho poměrně slušná komptatibilita s MSIE. Podpora gridu v tomto neslavném prohlížeči [nějaká byla](css-grid-msie.md), ale používat to bylo škrábání levou nohou za pravým uchem. Ale [Explorer už je mrtvý](msie.md).

Grid byl vymyšlený pro vyřešení většiny layoutů na webu. Flexbox pak má řešit specifické případy.

## Flexbox ale stále vládne {#flexbox-vladne}

Tohle téma mě zajímá, a tak občas na sociálních sítích dělám průzkumy mezi vývojářkami a vývojáři.

Preferují flexbox nebo grid?
Vypadá to, že stále flexbox.

[Na Twitteru](https://twitter.com/machal/status/1367758625142374400) mi v březnu 2021 55 % (ze 162 lidí) odpovědělo, že flexbox považují za výchozí pro svoji práci.
U pětiny to byl grid a u čtvrtiny záleží na případu použití.

Podobnou anketu jsem leto zopakoval ve skupině [Frontendisti.cz na Facebooku](https://www.facebook.com/groups/frontendisti/posts/3230392077172294/).
Flexbox preferuje 30 % (z více než 300 hlasující), grid jen necelá desetina. Zbytek se rozhoduje podle situace, což je asi nejlepší odpověď, protože opravdu záleží na layoutu.

Co je za preferenncí flexboxu?

1. Hlavní důvod je v tom, že flexbox působí jednodušeji.
2. Další podstatný důvod je jeho kompatibilita s MSIE, která se ve své době velmi hodila.
3. No a třetí důvod z vyplývá z druhého. Na velkou část rozvržení prostě flexbox stačí.

Je samozřejmě otázkou, jak moc optimální jsou tyto layouty, ale to už je jiná kapitola. Respektive jiná část tohoto článku.
Jde na ni.

## Důvod první: robustnost gridu {#robustnost-gridu}

Díky zaměření gridu na tzv. „grid in“ layout byli autoři specifikace nucení promýšlet daleko více případů použití.
Specifikace je tedy rozsáhlejší, což mnohé odradí.
Ale díky tomu je i robustnější.

Uvedu zde pár příkladů:

- Pomocí [vlastnosti `grid-area`](css-grid-area.md) můžete umístit jakéhokoliv potomka na jakékoliv místo mřížky.
- Hodnota `dense` [vlastnosti `grid-auto-flow`](css-grid-auto-flow.md) částečně nechává vykreslení layoutu typu masonry na prohlížeči.
- I grid se může přizpůsobovat obsahu (viz klíčová slova `min-content` a `max-content` ve [funkci `minmax()`](css-minmax.md)).
- Grid můžete použít nejen blokově (`display:grid`), ale také v řádce (`display:inline-grid`).
- Z gridu vycházejí nové typy rozvržení jako [podmřížka (subgrid)](css-subgrid.md) nebo [masonry](css-masonry.md).

Podobně jako mnozí z vás, jsem i já historicky preferoval flexbox.
Na většinu běžných layoutů mi stačil.
V momentě, kdy jsem se začal věnovat gridu, postupně začalo docházet k přeorientování na mřížku.

Došlo to tak daleko, že jsem nedávno sám sebe načapal při přemýšlení, jestli existují layouty, u kterých je výhodnější použít flexbox. Ano, na pár si jich vzpomenu, ale moc jich není.

## Důvod druhý: plnohodnotný Box Alignment {#box-alignment}

[CSS Box Align](css-box-alignment.md) je modul CSS, který definuje zarovnání v jakémkoliv rozvržení, ať už je to grid nebo flexbox.
Na flexboxu je ovšem nešťastné, že pro něj neplatí všechny vlastnosti zarovnání boxů.

I následující tabulka je z knížky [CSS: moderní layout](https://www.vzhurudolu.cz/css-layout/).

<div class="rwd-scrollable prop-table table-1-quarter f-6"  markdown="1">

|                                     | **Hlavní osa**<br>`justify-*` | **Příčná osa**<br>`align-*` | **Oba směry**<br>`place-*` |
|-------------------------------------|------------------------------|----------------------------|--------------------------|
| **Zarovnání položek**<br>`*-items`   |  [`justify-items`](css-justify-items.md)<br>~~flex~~, grid     | [`align-items`](css-align-items.md)<br>flex, grid      | [`place-items`](css-place-items.md)<br>~~flex~~, grid |
| **Zarovnání sebe sama**<br>`*-self`  |  [`justify-self`](css-justify-self.md)<br>~~flex~~, grid      | [`align-self`](css-align-self.md)<br>flex, grid       | [`place-self`](css-place-self.md)<br> ~~flex~~, grid |
| **Distribuce obsahu**<br>`*-content` |  [`justify-content`](css-justify-content.md)<br>flex, grid    | [`align-content`](css-align-content.md)<br>flex, grid    | [`place-content`](css-place-content.md)<br> flex, grid |

</div>

Je to tak. Vlastnosti [`justify-items`](css-justify-items.md) i [`justify-self`](css-justify-self.md) nejsou dostupné pro layouty tvořené flexboxem.

Tímpádem nemůžeme ani použít skvělé zkratky pro obousměrné zarovnání – `place-items` a `place-self`.

Namísto `justify-items` můžeme použít starý dobrý `margin` nebo pro centrování položek ve flexboxu na příčné ose třeba `justify-content`.

Důvody?
Rozličné zaměření flexboxu a gridu.
Když jsem to ve specifikaci studoval pro potřeby psaní knížky, chvíli jsem nemožnosti použít tyto vlastnosti rozumněl.
Dnes už vám to bohužel vysvětlit neumím.
Každopádně v kodérské praxi je nutnost pamatovat si, co ve flexboxu používat můžu a co ne, velice nepříjemná.

Pojďme na příklad.
Chci v obou směrech centrovat box uvnitř rodočovského prvku.

HTML:

```html
<div class="container">
  <p class="item" contenteditable>
    Jsem uprostřed!
  </p>
</div>
```

CSS řešení flexboxem:

```css
.container {
  display: flex;
}

.item {
  align-self: center;
  margin-inline: auto;
}
```

CodePen: [https://codepen.io/machal/pen/eYrzBeY](https://codepen.io/machal/pen/eYrzBeY?editors=1100)

Ano, můžeme zde použít magickou zkratku, kterou kodéři dnes obvykle používají:

```css
.container {
  display: flex;
  align-items: center;
  justify-content: center;  
}
```

CodePen: [https://codepen.io/machal/pen/poKZabd](https://codepen.io/machal/pen/poKZabd?editors=1100)

Otázkou je, jestli opravdu kodéři vědí, co přesně tímto dělají.

V gridu je to daleko jednodušší.

Můžeme použít celou škálu zarovnávacích vlastností z tabulky výše.
A tedy i zkratky `place-items` pro obousměrné zarovnání.

```css
.container {
  display: grid;
  place-items: center;
}
```

CodePen: [https://codepen.io/machal/pen/NWMqXrO](https://codepen.io/machal/pen/NWMqXrO?editors=1100)

## Důvod třetí: layout na rodiči {#layout-na-rodici}

Na gridu mě připadá výhodné, že layouty se vždy vytvářejí na rodiči.
Díky tomu existuje jen jeden prvek, který do layoutu promlouvá.
A to je rodič.

Vezměme tento jednoduchý příklad layoutu s jedním rodičem a dvěma potomky:

<!-- TODO IMG -->

HTML kód vypadá takto:

```html
<div class="container">
  <div class="col-1">
    1/3 box
  </div>
  <div class="col-2">
    2/3 box
  </div>
</div>
```

Řešení fleboxem by mohlo být následující:

```css
.container {
  display: flex;
  gap: 1rem;
}

.col-1 {
  flex: 1;
}

.col-2 {
  flex: 2;
}
```

Všimněte si, že používám [vlastnost `gap`](css-gap.md), která je ve flexboxu k dispozici poměrně čerstvě.

Může to být prkotina (a u takovéhoto příkladu to prkotina bezpochyby je), ale to, že máme layout definovaný na potomcích, je z mého pohledu, no… řekněme neoptimální.

Vždy si totiž představím řádově složitější příklady na komplexních webech, kde se kód pro rodiče i potomky může oddělovat do různých souborů.

Další problém může být v tom, že s [vlastností `flex`](css-flex.md) definujete také [vlastnost `flex-basis`](css-flex-basis.md) a layout se vám může začít chovat jinak než čekáte. Stačí, když do něj připluje trošku jiných obsah než jste očekávali - například obrázek namísto textu. Podívejte se na vysvětlení „modelů pružnosti“ u poslední zmíněné vlastnosti.

Řešení gridem je jednodušší:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
}
```

Prostě jen kontejneru nastavíme `display:grid`, pomocí [`grid-template-columns`](css-grid-template-rows-columns.md) definujeme, jaké má mít sloupce, a k tomu přidáme mezeru `gap:1rem`. To je vše.

Codepen: [https://codepen.io/machal/pen/NWMqXrO](https://codepen.io/machal/pen/NWMqXrO?editors=1100)

## Kam grid nemůže (strčí se flexbox) {#kam-grid-nemuze}

Důvody, proč já osobně grid preferuji, už znáte.
Preferuji jej tak, že jsem se přistihl přitom, že se mi špatně představují situace, kdy bych grid nepoužil.
Jenže co já vím – kodéřinou se neživím a moje představivost je omezená.

Proto jsem se na sociálních sítích na příklady ptal i kolegyň a kolegů.
(Díky všem za odpovědi! Viz [Twitter](https://twitter.com/machal/status/1597140237007716353), [Facebook](https://www.facebook.com/groups/frontendisti/posts/3230392077172294/), [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7002906970009567232/).)

Obecně může být flexbox vhodnější, když jde o tyto situace:

1. Mám jednosměrný layout a neznámý počet položek v něm.
2. Chci, aby se můj layout přizpůsoboval délce obsahu uvnitř.
3. Rád bych, aby se položky automaticky zalamovaly, pokud prostoru není dost.

Jak už jsem uvedl výše, i tyhle případy se dají vyřešit i gridem.
Fakt jo.
Ale bude to samozřejmě trošku složitější.

Vezměme si příklad se štítky. Mám předem neznámý počet štítků:

```html
<ul class="tags">
  <li class="tag">Tag</li>
  <li class="tag">Tag too</li>    
  <li class="tag">Tag</li>    
</ul>
```

Štítky se mají mají zalamovat podle šířky okna. Nechci nastazovat [Media Queries](css3-media-queries.md). Fleboxem je to jednoduché a ještě přidám `gap`, která je elegantnější než `margin`:

```css
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}
```

CodePen: [https://codepen.io/machal/pen/BaVPYmW](https://codepen.io/machal/pen/BaVPYmW?editors=1100)

Gridem to půjde jen částečně a navíc to bude trošku složitější:

```css
.tags {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, max-content));
  gap: 0.25rem;
}
```

Protože máme neznámý počet sloupců, musíme zapojit klíčové slovo [`auto-fit` s funkcí `repeat()`](css-repeat.md). Dále musíme nastavit šířku podle obsahu, zde díky [funkci `minmax()`](css-minmax.md).

Zde se prostě gridem škrábeme levou nohou za pravým uchem. A navíc – automatická responzivita zde fungovat nebudeme. Musíme použít Media Queries, však jde o „grid in“ layout, který musíme mít celý pod kontrolou my jako vývojáři.

Na sítích se mi díky vám naskytlo pár dalších příkladů, kdy je prostě flexbox jednodušší:

1. Zarovnání ikonky v tlačítku (Viz [Ondřej Žára](https://twitter.com/0ndras/status/1597149042659696640). Gridem to jde, ale je to o řádek složitější.)
2. Zarovnání formulářových prvků s automatickou respozivitou. (Viz [zde](https://twitter.com/machal/status/1597443811134693378).)
3. Fotogalerie s důrazem na přizpůsobení velikosti obrázků. (Viz [Ondřej Konečný](https://twitter.com/ondrejkonec/status/1597843162864578560).)
4. Kroková navigace, která se přizpůsobuje obsahu a viewportu. (Viz [Ondřej Konečný](https://twitter.com/ondrejkonec/status/1597843824252157952).)

## Kdo je vítěz? Ono záleží…

Jak už jsem psal výše, záleží na situaci.
Grid je řešení, které mě ve většině případů vyhovuje, ale pro určité konkrétní rozvržení je evidentně flexbox lepší.

Cílem článku a celého mého zamyšlený bylo najít hranice. 
Mít v hlavě jednoduchý rozhodovací strom, kdy je použít flexbox výhodnější. 
Více se samozřejmě dozvíte v knížce.

Neměl jsem v úmyslu vás přesvědčovat, abyste se začali grid učit.
Ale pokud jsem vám pomohl lépe zmapovat problematiku CSS layoutů, budu moc rád.

Budu taky rád, když mi napíšete, pokud byste snad v úvaze našli mezeru a nebyl to `gap`.





