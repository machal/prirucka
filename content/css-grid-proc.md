# Proč preferuji grid před flexboxem?

Pořád se něco učíme.
Abych se naučil layouty v CSS, napsal jsem o nich [knížku](https://www.vzhurudolu.cz/css-layout/).

Opravdu. Nemyslete si, že jsem si prostě jen sedl k počítači a začal sepisovat to, co jsem měl v hlavě.
O gridu a flexboxu jsem toho před třemi lety nevěděl zase o tolik více než průměrný frontendista.

Jedna z metod psaní knížky obnášela nakódování desítek častých webových layoutů.
Nejprve [flexboxem](css-flexbox.md), který jsem uměl lépe.
Pak [gridem](css-grid.md).

Překvapilo mě, že skoro vždy bylo nakonec řešení pomocí gridu efektivnější, přehlednější.
Vlastně celkově lepší.

<!-- AdSnippet -->

Nejdůležitější praktická kodérská znalost, kterou jsem při práci na knížce získal, bylo to, že skoro vždy preferuji grid před flexboxem.
V tomhle textu vám ukážu důvody, proč tomu tak je.

## Flexbox vs. grid {#flexbox-vs-grid}

Začneme obecnou rovinou. V knížce mám pro srovnání těchto dvou systémů pro tvorbu layoutu takovou pěknou tabulku:

<div class="rwd-scrollable prop-table table-1-third f-6"  markdown="1">

|   **Vlastnost**          | **Flexbox** | **Grid** |
|:-------------------------|:-----------:|:--------:|
|   Jednorozměrný layout   |       +     |     +    |
|   Dvourozměrný layout    |             |     +    |
|   Layout z obsahu        |       +     |     ?    |
|   Layout z mřížky        |             |     +    |
|   Kompatibilita v MSIE   |       +     |     ?    |

</div>

Už tady je trochu vidět, že v obecné rovině výhody gridu převládají:

- Grid je určený pro dvourozměrný layout (vodorovný i svislý směr), ale zvládnete s ním i ten jednorozměrný (v jednom ze směrů).
- Flexbox byl navržený pro takzvaný „content out“ layout, kdy se layout vytváří na základě obsahu, což je důležitá, ale ne tak častá potřeba kodérek a kodérů. Grid více odpovídá naší představě o layoutu – chceme, abychom layout kontrolovali my, ne obsah, takzvaně „grid in“.
- Dříve byla velkou výhodou flexboxu jeho slušná komptatibilita s MSIE. Podpora gridu v tomto dnes již neslavném prohlížeči [nějaká byla](css-grid-msie.md), ale šlo o pověstné škrábání levou nohou za pravým uchem. Navíc – [Explorer je už mrtvý](msie.md).

Grid byl vymyšlený pro vyřešení většiny layoutů na webu.
Flexbox má pak řešit specifické případy.

## Flexbox ale stále vládne {#flexbox-vladne}

Tohle téma mě zajímá, a tak občas na sociálních sítích dělám průzkumy mezi vývojářkami a vývojáři.

Preferují flexbox nebo grid?
Vypadá to, že stále flexbox.

[Na Twitteru](https://twitter.com/machal/status/1367758625142374400) mi v březnu 2021 odpovědělo 55 % lidí (ze 162), že flexbox považují za výchozí pro svoji práci.
U pětiny to byl grid a u čtvrtiny záleží na případu použití.

Podobnou anketu jsem letos zopakoval ve skupině [Frontendisti.cz na Facebooku](https://www.facebook.com/groups/frontendisti/posts/3230392077172294/).
Flexbox preferuje 30 % (z více než 300 hlasující), grid jen necelá desetina. Zbytek se rozhoduje podle situace, což je asi nejlepší odpověď, protože opravdu záleží na layoutu.

Co je za preferencí flexboxu u webařů?

1. Hlavní důvod je v tom, že flexbox působí jednodušeji.
2. Další podstatná příčina je jeho kompatibilita s MSIE, která se ve své době velmi hodila.
3. No a třetí důvod vyplývá z druhého. Flexbox jsme se kvůli MSIE nějak naučili a na velkou část rozvržení prostě stačí.

Je samozřejmě otázkou, jak moc optimální jsou layouty nakódované skoro vždy flexboxem.
Zkusme se zamyslet, zda to nejde lépe.

## Důvod první: robustnost gridu {#robustnost-gridu}

Díky zaměření gridu na tzv. „grid in“ layout byli autoři specifikace nucení promýšlet daleko více případů použití.
Specifikace je tedy rozsáhlejší, což mnohé odradí.
Ale díky tomu je i robustnější.

<!-- AdSnippet -->

Co vše můžete gridem udělat nad rámec obyčejných layoutů?
Uvedu zde pár příkladů:

- Pomocí [vlastnosti `grid-area`](css-grid-area.md) můžete umístit jakéhokoliv potomka na jakékoliv místo mřížky.
- Hodnota `dense` [vlastnosti `grid-auto-flow`](css-grid-auto-flow.md) částečně nechává vykreslení layoutu typu masonry na prohlížeči.
- I grid se může přizpůsobovat obsahu (viz klíčová slova `min-content` a `max-content` ve [funkci `minmax()`](css-minmax.md)).
- Grid můžete (podobně jako flexbox) použít nejen blokově (`display:grid`), ale také v řádce (`display:inline-grid`).
- Z gridu vycházejí nové typy rozvržení jako [podmřížka (subgrid)](css-subgrid.md) nebo [masonry](css-masonry.md).

Podobně jako mnozí z vás, jsem i já historicky preferoval flexbox.
Na většinu běžných layoutů mi stačil.
V momentě, kdy jsem se začal věnovat gridu, postupně začalo docházet k přeorientování na mřížku.

Došlo to tak daleko, že jsem nedávno sám sebe načapal při přemýšlení, jestli existují layouty, u kterých je výhodnější použít flexbox.
Ano, na pár si jich vzpomenu, ale moc jich není.
Ještě se u toho v textu pozastavím později.

## Důvod druhý: plnohodnotný Box Alignment {#box-alignment}

[CSS Box Align](css-box-alignment.md) je modul CSS, který definuje zarovnání v jakémkoliv rozvržení, ať už je to grid nebo flexbox.

Na flexboxu je ovšem nešťastné, že pro něj neplatí všechny vlastnosti zarovnání boxů.

Také následující tabulka je z knížky:

<div class="rwd-scrollable prop-table table-1-quarter f-6"  markdown="1">

|                                     | **Hlavní osa**<br>`justify-*` | **Příčná osa**<br>`align-*` | **Oba směry**<br>`place-*` |
|-------------------------------------|------------------------------|----------------------------|--------------------------|
| **Zarovnání položek**<br>`*-items`   |  [`justify-items`](css-justify-items.md)<br>~~flex~~, grid     | [`align-items`](css-align-items.md)<br>flex, grid      | [`place-items`](css-place-items.md)<br>~~flex~~, grid |
| **Zarovnání sebe sama**<br>`*-self`  |  [`justify-self`](css-justify-self.md)<br>~~flex~~, grid      | [`align-self`](css-align-self.md)<br>flex, grid       | [`place-self`](css-place-self.md)<br> ~~flex~~, grid |
| **Distribuce obsahu**<br>`*-content` |  [`justify-content`](css-justify-content.md)<br>flex, grid    | [`align-content`](css-align-content.md)<br>flex, grid    | [`place-content`](css-place-content.md)<br> flex, grid |

</div>

Je to tak.
Vlastnosti [`justify-items`](css-justify-items.md) i [`justify-self`](css-justify-self.md) nejsou dostupné pro layouty tvořené flexboxem.

Tím pádem nemůžeme ani použít skvělé zkratky pro obousměrné zarovnání – `place-items` a `place-self`.

Namísto `justify-items` můžeme použít starý dobrý `margin` nebo pro centrování položek ve flexboxu na příčné ose třeba `justify-content`.
Jenže tím to trochu hackujeme, `justify-content` je ve skutečnosti určný pro distribuci mezer mezi položkami.

Jaký je důvod pro nepřítomnost některých vlastností Box Alignment ve flexboxu?
Rozličné zaměření flexboxu a gridu.

Když jsem to ve specifikaci studoval pro potřeby psaní knížky, chvíli jsem nemožnosti použít tyto vlastnosti rozuměl.
Je to složité.
Dnes už vám to bohužel vysvětlit neumím.
(Vy si to můžete dostudovat například [na Stack Overflow](https://stackoverflow.com/questions/32551291/in-css-flexbox-why-are-there-no-justify-items-and-justify-self-properties).)

Každopádně v kodérské praxi je nutnost pamatovat si, co ve flexboxu používat můžu a co ne, velice nepříjemná.

Pojďme na příklad.
Chci v obou směrech centrovat boxík uvnitř rodičovského prvku.
Asi jako na obrázku.

<figure class="figure-thirds">
<img src="../dist/images/original/vdlayout/priklad-centrovani.jpg" width="1600" height="900" alt="Centrování boxu na výšku i šířku">
<figcaption markdown="1">
*Centruj, centruj, vykrúcaj!*
</figcaption>
</figure>

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

CodePen: [cdpn.io/e/eYrzBeY](https://codepen.io/machal/pen/eYrzBeY?editors=1100)

Ano, můžeme zde použít magickou zkratku, kterou kodéři dnes obvykle používají:

```css
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

CodePen: [cdpn.io/e/poKZabd](https://codepen.io/machal/pen/poKZabd?editors=1100)

Otázkou je, jestli opravdu kodéři vědí, co přesně tímto dělají.

V gridu je to daleko jednodušší.

Můžeme použít celou škálu zarovnávacích vlastností z tabulky výše.
A tedy i [zkratku `place-items`](css-place-items.md) pro obousměrné zarovnání.

```css
.container {
  display: grid;
  place-items: center;
}
```

CodePen: [cdpn.io/e/NWMqXrO](https://codepen.io/machal/pen/NWMqXrO?editors=1100)

Pojďme se ještě podívat na poslední z důležitých důvodů, proč já osobně preferuji mřížku před flexboxem.

## Důvod třetí: layout na rodiči {#layout-na-rodici}

Na gridu mě připadá výhodné, že layouty se vždy vytvářejí na rodiči.
Díky tomu existuje jen jeden prvek, který do layoutu promlouvá.
A to je rodič.

Vezměme tento jednoduchý příklad layoutu s jedním rodičem a dvěma potomky. 
Jeden má zabrat třetinu, druhý dvě třetiny šířky.

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

Vždy si totiž představím řádově složitější příklady na komplexních webech nebo systémech designu.
Tam se kód pro rodiče i potomky může oddělovat do různých souborů.
Dokonce je mohou spravovat různí lidé.

Další problém může být v tom, že s [vlastností `flex`](css-flex.md) definujete také [vlastnost `flex-basis`](css-flex-basis.md).
Layout se pak může začít chovat jinak, než čekáte.
Stačí, když do něj připluje trošku jiných obsah než jste si představovali - například obrázek namísto textu.
Podívejte se na vysvětlení „modelů pružnosti“ na posledním uvedením odkazu.

Řešení gridem je jednodušší:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
}
```

Prostě jen kontejneru nastavíme `display:grid` a s pomocí [`grid-template-columns`](css-grid-template-rows-columns.md) definujeme, jaké má mít sloupce.
K tomu přidáme mezeru `gap:1rem`. 
To je vše.

Codepen: [cdpn.io/e/NWMqXrO](https://codepen.io/machal/pen/NWMqXrO?editors=1100)

## Kam grid nemůže (strčí se flexbox) {#kam-grid-nemuze}

Důvody, proč já osobně grid preferuji, už znáte.
Už také víte, že jsem se přistihl přitom, že se mi špatně představují situace, kdy bych grid nepoužil.
Jenže co já vím – kodéřinou se neživím a moje představivost je omezená.

Proto jsem se na sociálních sítích na příklady ptal i kolegyň a kolegů.
(Díky všem za odpovědi! Viz [Twitter](https://twitter.com/machal/status/1597140237007716353), [Facebook](https://www.facebook.com/groups/frontendisti/posts/3230392077172294/), [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7002906970009567232/).)

Když jsme takto dali hlavy dohromady, už víme, že obecně může být flexbox vhodnější, když jde o tyto situace:

1. Mám jednosměrný layout a neznámý počet položek v něm.
2. Chci, aby se mé rozvržení přizpůsobovalo délce obsahu uvnitř.
3. Rád bych, aby se položky automaticky zalamovaly, pokud prostoru není dost.

Jak už jsem uvedl výše, i tyhle případy se dají vyřešit gridem.
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

Štítky se mají zalamovat podle šířky okna.
Nechci zde zbytečně nastavovat [Media Queries](css3-media-queries.md).
Řešení flexboxem je jednoduché.
Navíc přidám `gap`, který je elegantnější než `margin`:

```css
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}
```

CodePen: [cdpn.io/e/BaVPYmW](https://codepen.io/machal/pen/BaVPYmW?editors=1100)

Gridem to půjde jen částečně a navíc to bude trošku složitější:

```css
.tags {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, max-content));
  gap: 0.25rem;
}
```

Protože máme neznámý počet sloupců, musíme zapojit klíčové slovo [`auto-fit` s funkcí `repeat()`](css-repeat.md). Dále musíme nastavit šířku podle obsahu, zde díky [funkci `minmax()`](css-minmax.md).

Zde prostě gridem pácháme zbytečně složitý kód.
A navíc – automatická responzivita zde fungovat nebude.
Musíme použít Media Queries, však jde o „grid in“ layout, který musíme mít celý pod kontrolou my jako vývojáři.

Na sítích se díky vám naskytlo pár dalších příkladů, kdy je prostě flexbox jednodušší:

1. Zarovnání ikonky v tlačítku (Viz [Ondřej Žára](https://twitter.com/0ndras/status/1597149042659696640). Gridem to jde, ale je to o řádek složitější.)
2. Zarovnání formulářových prvků s automatickou responzivitou. (Viz [zde](https://twitter.com/machal/status/1597443811134693378).)
3. Fotogalerie s důrazem na přizpůsobení velikosti obrázků. (Viz [Ondřej Konečný](https://twitter.com/ondrejkonec/status/1597843162864578560).)
4. Kroková navigace, která se přizpůsobuje obsahu a viewportu. (Viz [Ondřej Konečný](https://twitter.com/ondrejkonec/status/1597843824252157952).)

## Kdo je vítěz? Ono záleží…

Jak už jsem psal výše, záleží na situaci.
Grid je řešení, které mě ve většině případů vyhovuje, ale pro určité konkrétní rozvržení je evidentně flexbox lepší.
Hlavně tam, kde má vládnout obsah, není známý počet položek, chceme automatickou responzivitu nebo jde o skutečně velmi jednoduchý layout.

<!-- AdSnippet -->

Neměl jsem v úmyslu vás přesvědčovat, abyste se začali grid učit.
Ale pokud jsem vám pomohl lépe zmapovat problematiku CSS layoutů, budu moc rád.

Cílem článku a celého mého zamyšlený bylo najít hranice.
Mít v hlavě jednoduchý rozhodovací strom, kdy je použít flexbox výhodnější.
Více se samozřejmě dozvíte [v knížce](https://www.vzhurudolu.cz/css-layout/).

Budu taky rád, když mi napíšete, pokud byste snad v úvaze našli mezeru a nebyl to `gap`.
