# Masonry layout nativně v CSS

Rozvržení typu Masonry je ve webdesignu velmi populární. Kodérky a kodéři jsou ovšem nucení jej dělat pomocí JavaScriptu. Nativní implementace v CSS byla součástí našich snů už od příchodu [flexboxu](css3-flexbox.md), ale plně to nevyřešil ani [grid](css-grid.md).

Teď už se ale blýská na lepší čas. Chystaná [třetí verze specifikace CSS gridu](https://drafts.csswg.org/css-grid-3/) totiž počítá s hodnotou `masonry` pro vlastnosti [`grid-template-rows/columns`](css-grid-template.md): 

```css
.container {
  display: grid;
  grid-template-rows: masonry;
}
```

Zatím to má podporu jen v Nightly verzi Firefoxu, ale předpokládáme, že se to ujme a že nás to zbaví dalšího nadbytečného javascriptového pluginu.

Skvěle to (jako vždy) popisuje Rachel Andrew v textu [Native CSS Masonry Layout In CSS Grid](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/) na Smashing Magazine, ze kterého tady budu vycházet.

## Co je to Masonry? {#co}

Určitě zde jsou tací, kteří o Masonry layoutu nicmoc nevědí. „Masonry“ je v překladu zdivo, takže jde o „zděné rozvržení“.

<!-- TODO obrázek -->

Když se položky ve zděném rozvržení přesunou na další řádek, nezarovnávají se do rovné linky, ale přesunou se nahoru do mezer, které zanechají kratší položky v prvním řádku. Je to podobné jako u jedné z vlastností CSS Gridu – automatického umístění (autoplacement) –, ale bez přísného dodržení mřížky pro řádky.

Však se podívejte na obrázek výše, z toho to bude asi vidět lépe. Hlavní směr typického Masonry layoutu je inline, tedy po řádcích.

V současnosti se tyto typy rozvržení dělají pomocí dnes už legendární javascriptové kompomenty [Masonry od Davida DeSandra](https://masonry.desandro.com/). Autorovi všechna čest, ale je nutné si přiznat, že z pohledu vykreslovacího (ale i načítacího) výkonu stránky nebude takto razantní ovlivňování layoutu JavaScriptem nikdy optimální. Tohle prostě má dělat prohlížeč.

## Masonry v CSS gridu {#css-grid}

Masonry layout budeme podle specifikace definovat pomocí `grid-template-rows:masonry` nebo `grid-template-columns:masonry`, podle toho, zda si pro „zdění“ vybereme vodorovný nebo svislý směr.

Směr definovaný pomocí `masonry` se pak bude označovat jako osa zdiva. Druhá osa bude mít stopy mřížky definované jako normální, bude to osa mřížky.

Příkládám CodePen, ale v době psaní bude tentokrát fungovat jen [ve Firefox Nightly](https://www.mozilla.org/cs/firefox/channel/desktop/).

CodePen: [cdpn.io/e/wvWmZWB](https://codepen.io/rachelandrew/pen/wvWmZWB)

Pokud máte uvedený prohlížeč nainstalovaný, můžete si pohrát s hlavním kouskem kódu, který vypadá takto:

```css
.container {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: masonry;
}
```

Raději to vysvětlím:

- `display:grid` definuje [layout do mřížky](css-grid.md).
- `gap:10px` nabádá prohlížeč k vykreslení desetipixelové [mezery mezi buňkami](css-gap.md).
- `grid-template-columns:repeat(4,1fr)` vykreslí čtyři stejně široké sloupce mřížky. Viz [vlastnost `repeat()`](css-repeat.md).
- `grid-template-rows:masonry` dělá to zděné kouzlo. Řádky nebudou zarovnané podle osy, ale nalepí se na položky výše a přeskupí se. Viz [vlastnost `grid-template-rows`](css-grid-template.md).

Výsledek tohodle zápisu nicméně v prohlížečích mimo lépe uvidíte na obrázku. Tady je.

<!-- TODO obrázek -->

Napiš řádek kódu,  
postav třeba zeď.  
Zpívej přitom ódu,  
začni s tím hned teď.

Po básnické vsuvce, vyvolané vidinou světa bez další javascriptové knihovny, pojďme dál.

## Další vlastnosti masonry v CSS Gridu

Vzhledem k tomu, že jsme v systému rozvržení pomocí CSS gridu, můžeme používat i další vlastnosti:

- Stále můžeme porušit automatické umísťování a konkrétní položku vložit na konkrétní místo mřížky. Viz prvek `.positioned` [v tomto CodePenu](https://codepen.io/rachelandrew/pen/PozRvZb) od Rachel Andrew.
- Je samozřejmě dovoleno používat i roztažení prvků do více buněk mřížky. To je zase vidět na prvku `.landscape` [v jiném CodePenu](https://codepen.io/rachelandrew/pen/QWEmPMK).

### `masonry-auto-flow`, kontrola toku položek

Tato vlastnost ještě není naprogramovaná ani ve Firefox Nightly, ale je podobná existující vlastnosti [`grid-auto-flow`](css-grid-auto-flow.md). Prostě ovlivňuje, v jakém pořadí se budou položky do zděného rozvržení sázet.

- Ve výchozím stavu položku prohlížeč vloží do sloupce s největším prostorem.
- Hodnota `next` – umístí položku na další místo na ose mřížky.
- Hodnota `ordered` – layout bude vždy v pořadí, v jakém jsou položky v dokumentu, pokud není řečeno jinak pomocí [vlastnosti `order`](css-order.md).

### Zarovnání pomocí `justify-tracks` a `align-tracks`

V layoutu typu masonry potřebujeme i dvě nové zarovnávací vlastnosti.

Pokud máte v kontejneru mřížky více prostoru ve směru rozloženém pomocí masonry, zjistíte, že se položky zarovnají na začátek kontejneru. Počáteční hodnota vlastnosti `align-tracks` je totiž `start`.

Další možnosti jsou podobné jako u vlastností `align-content` a `justify-content` (např. `end` nebo asi i `space-between`) s několika modifikacemi:

- Hodnota `normal` – u těchto vlastností se chová jako `start`.
- Hodnota `stretch` - položky automatické velikosti v rozložení se roztáhnou.

<!-- TODO ### Další možnosti jak řešit Masonry -->

### Podpora v prohlížečích a implementace {#podpora}

Standardizátoři mají CSS Grid Level 3 zatím rozpracovaný. V téhle fázi je tedy potřeba, aby vývojářky a vývojáři neváhali [dávat zpětnou vazbu](https://github.com/w3c/csswg-drafts/issues/).

Jak už jsem zmínil – v době psaní je tato skvělá nová věc podporovaná jen ve Firefoxu Nightly. Tam je potřeba zapnout vlaječku `layout.css.grid-template-masonry-value` v `about:config`.

[Fallbacky](fallback.md) bude v případě nativní implementace snadné řešit, protože máme podmínku podpory – `@supports`:

```css
@supports (grid-template-rows: masonry) {
  .container {
    display: grid;
    grid-template-rows: masonry;
  }  
}
```

Je samozřejmě otázkou, jak může vypadat náhradní řešení z vizuálního pohledu. Osobně nicméně věřím, že po připomínkovém řízení ke specifikaci dojde k implementaci v Chrome a odvozených prohlížečích a pak chvíli čekání na Safari, jak už to ve světě dnešního vývoje webů chodí. Takže podpora naprosté většiny prohlížečů zde může přijít relativně brzy, ale teď je na nás, abychom to zkoušeli a připomínkovali.
