# Vlastnost column-fill: vyvažování výšky sloupců ve vícesloupcovém rozvržení

Vlastnost `column-fill` umožňuje rozdělit obsah vícesloupcového rozložení do několika sloupečků tak, aby všechny zabíraly přibližně stejnou výšku.

V případě nastavení `column-fill:balance` se prohlížeče snaží minimalizovat odchylky výšky sloupců a zároveň ctít zalamování, ošetřovat typografické vdovy a sirotky a další vlastnosti.

<div class="related web-only" markdown="1">
- [CSS Multi-column Layout](css-multicol.md)
</div>

Vlastnost se vám asi zatím bude používat hůře. Implementace v prohlížečích je různorodá.

Podívejme se na možné hodnoty:

- `auto` - sloupečky se osahem vyplňují postupně. Výchozí hodnota.
- `balance` – rozdělení obsahu do sloupečků tak, aby byla jejich výška co nejpodobnější.
- `balance-all` – stejně jako `balance`, jen se do sloupečků rozděluje veškerý obsah. V době psaní toto žádný prohlížeč nepodporuje.

Rozdíl mezi `balance` a `balance-all` uvidíte jen ve vícestránkových kontextech jako je CSS pro tisk („paged media“ nebo také „fragmented contexts“). V případě `balance` se do sloupců má rozdělit jen poslední fragment, např. poslední stránka. U hodnoty `balance-all` se rozdělí všechny fragmenty či stránky.

<figure>
<img src="../dist/images/original/vdgrid/css-multicol-fill.png" width="1600" height="900" alt="CSS vlastnost column-fill">
<figcaption markdown="1">
*Na obrázku je rozdíl mezi hodnotami `auto` a `balance` snad dobře vidět.*
</figcaption>
</figure>

Pojďme se ale podívat jak to celé funguje.

## Příklad {#priklad}

Toto demo už znáte z jiných vlastností vícesloupcového rozvržení. Máme zde kontejner, který má nastavenou šířku sloupečku `15em` a maximální počet sloupců na tři. Tentokrát jsem ještě přidal výšku bloku, zde vynucenou na `10em`.

```css
.container {
  columns: 15em 3;
  height: 10em;
}
```

V demu můžete přepínat mezi nastavením vlastnosti `column-fill` na hodnoty `auto` nebo `balance`. Poslední hodnotu, `balance-all`, jsem zatím nezahrnoval, protože ji prohlížeče zatím nepodporují a vzhledem k jejímu využití pro stránkovaná média by ani demostrace v CodePenu nedávala smysl.

CodePen: [cdpn.io/e/PoGEadq](https://codepen.io/machal/pen/PoGEadq)

Pokud byste si hráli s vlastnosti `height` u kontejneru, s obsahem prvku a šířkou okna, dojdete k témuž co já – v každém prohlížeči to funguje trochu jinak.

## Podpora v prohlížečích {#podpora}

Podle CanIUse podporují `column-fill` všechny moderní prohlížeče, včetně Internet Explorerů. [caniuse.com/column-fill](https://caniuse.com/?search=column-fill)

Mohli bychom tím skončit, ale po hrátkách s mým CodePenem v různých prohlížečích vás musím upozornit na následující:

- V Chrome hodnota `balance` nefunguje bez vynucení nastavení výšky na `.container`, ať už to uděláme vlastností `height` nebo jinak.
- Safari má chybu opačnou – pokud nenastavíme kontejneru výšku, rozděluje sloupečky tak jako bychom použili vyvyžování – hodnotu `balance`. V prohlížeči od Apple se navíc přepnutí mezi hodnotami `balance` a `auto` projeví až po změně šířky okna.

Naopak se mi zdá, že dobře tato vlastnost funguje – minimálně v mém demu – v nejméně používaném moderním prohlížeči, tedy ve Firefoxu.

Určitě vás nechci od používání vlastnosti `column-fill` odradit. Bude se vám občas hodit. Jen si to vždy dobře otestujte v různých prohlížečích.
