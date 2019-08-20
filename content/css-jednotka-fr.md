# Jednotka fr v CSS

Jedná se o flexibilní jednotku, která reprezentuje podíl na prostoru v [CSS gridu](css-grid.md). Proto `fr` jako *fraction unit*.

Využívá se ve vlastnostech popisující mřížku, jako jsou [`grid-template-columns/rows`](css-grid-template-rows-columns.md) nebo [grid-auto-columns/rows](css-grid-auto-rows-columns.md).

## Je (a není) to jako procenta {#procenta}

Zjednodušeně by se tahle jednotka dala přirovnat k procentům, ovšem s tím rozdílem, že nemusíme počítat prvky a řešit nastavení box modelu. Demo to ostatně ukáže v celé kráse.

CodePen: [cdpn.io/e/gOYwvrN](https://codepen.io/machal/pen/gOYwvrN?editors=1100)

Procentuální grid nastavujeme jako `grid-template-columns: 33.3% 33.3% 33.3%`. Může to být fajn, ale procentuální hodnotu musíme vypočíst podle počtu sloupců v HTML. No a pokud by se nám ten změnil, nezbývá než hned upravit také CSS.

Další problém je v *box modelu*, způsobu počítání šířky. Jak vidíte u prvního prvku v CodePenu, k procentuální šířce se musí ještě připočíst vnitřní okraj (`padding`) a bez změny počítání box modelu pomocí vlastnosti [`box-sizing`](css3-box-sizing.md) nám prvky přetečou z rodičovského kontejneru.

## Podíl na zbytku {#podil}

Jednotka `fr` tvoří podíl na *zbytku* plochy, kterou neokupují prvky jež mají nastavené rozměry běžnými [jednotkami délky](jednotky.md), jako jsou `%`, `px`, `em`, `rem` a dalšími.

CodePen: [cdpn.io/e/gOYwvrN](https://codepen.io/machal/pen/gOYwvrN?editors=1100)

Pomocí `grid-template-columns: 80px 5em 2fr 1fr` definuje čtyřsloupcovou mřížku. První sloupec má fixní šířku `80px`. Druhý má šířku `5em`, takže [jeho šířka](jednotky.md#em) bude záležet na velikosti písma rodičovského prvku.

Pokud nám zbude nějaký prostor, prohlížeč jej vydělí třemi (`2fr` + `1fr`) a rozpočítá.

## Hodnoty: nulová a desetinná čísla {#hodnoty}

Podívejme se ještě na jeden speciální příklad, který ukazuje použití nulové (`0fr`) a desetinné (`0.1fr`) hodnoty.

CodePen: [cdpn.io/e/PoYGQOw](https://codepen.io/machal/pen/PoYGQOw?editors=1100)

Mřížku definujeme takto:

```css
.container {
  grid-template-columns: 0fr 0.5fr 0.1fr;
}
```

Při nulové hodnotě (`0fr`) vykreslí prohlížeč sloupec v šířce obsahu.

Poměrně užitečné jsou také desetinné hodnoty. Jejich součet je `0.6fr`, takže zanechává `0.4fr` prostoru prázdného.

Obojí se může hodit, že?

Jo a – záporné hodnoty k jednotce `fr` strkat nezkoušejte. K ničemu to nevede.

## Poznámky na závěr {#poznamky}

* Asi jste postřehli, že `grid-template-columns: 1fr` se chová podobně jako bezjednotkový údaj ve [flexboxu](css3-flexbox.md), např. `flex: 1`.
* `fr` není jednotka délky, takže se s nimi nedá kombinovat. Nemůžeme tedy použít něco jako `calc(1fr - 20px)`.

## Podpora v prohlížečích {#poznamky}

Podpora je skvělá. Nevím o žádném relevantním prohlížeči, který by jednotku `fr` v kombinaci s CSS gridem nezvládal.
