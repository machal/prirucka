# CSS funkce repeat()

Funkce (nebo přesněji řečeno „zápis“) `repeat()` slouží k usnadnění opakujících se předpisů pro sloupce nebo řádky mřížky v CSS gridu.

<div class="connected" markdown="1">

![CSS funkce repeat](../dist/images/medium/vdlayout/schema-css-repeat.jpg)

<div class="web-only" markdown="1">

Funkce `repeat()` je součástí specifikace [CSS gridu](css-grid.md).

</div>

<div class="ebook-only" markdown="1">

→ [vrdl.cz/p/css-repeat](https://www.vzhurudolu.cz/prirucka/css-repeat)

</div>

</div>

Zápis můžete realizovat například takto:

```css
.container {
  grid-template-columns: repeat(4, 1fr);
}
```

Uvedené má pak stejný výsledek jako ručně psaná verze:

```css
.container {
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
```

CodePen: [cdpn.io/e/ZEzRKjG](https://codepen.io/machal/pen/ZEzRKjG?editors=1100)

Možných hodnot je ale více:

```css
repeat(4, [col-start] 1fr [col-end])
repeat(4, 10px [col-start] 30% [col-middle] auto [col-end])
repeat(auto-fill, minmax(100px, 1fr));
```

V druhém parametru zápisu `repeat()` prostě můžete uvést libovolnou deklaraci stopy mřížky, které budete znát už například z vlastností [`grid-template-rows`/`-columns`](css-grid-template-rows-columns.md).

<!-- AdSnippet -->

Co když ale chcete deklaraci sloupců nebo řádků opakovat, ale ještě nevíte kolikrát? Co když prostě nevíte, kolik jich tam chcete, protože nevíte, kolik bude mít rodičovský prvek v HTML potomků?

Tady vstupují do hry zajímavá klíčová slova `auto-fill` a `auto-fit`.

## Automatické opakování s auto-fill a auto-fit {#auto-fill-fit}

Použití zápisu `repeat()` v kombinaci s klíčovými slovy `auto-fill` a `auto-fit` se velmi hodí, pokud neznáte počet položek. Následující obrázek snad napoví, čím se liší.

<figure>
<img src="../dist/images/original/auto-fill-fit.jpg" alt="">
<figcaption markdown="1">
*`auto-fill` do volného prostoru přidává neviditelné buňky, `auto-fit` prioritizuje roztahování těch už vykreslených.*
</figcaption>
</figure>

Rozdíly jsou zhruba následující:

- Oba zápisy v `repeat()` přidávají nové neviditelné buňky mřížky, tak aby se vyplnil volný prostor.
- `auto-fill` se snaží vyplnit prostor prázdnými buňkami.
- `auto-fit` při vykreslování nové prázdné buňky eliminuje a tedy umožní vyplnit prostor roztažením (napasováním, proto „fit“) velikosti stávajících buněk mřížky.

Myslím si, že obě klíčová slova dává smysl použít jen s [funkcí `minmax()`](css-minmax.md), aby se buňky mohly roztahovat od minima po maximum velikosti.

<!-- TODO nedohledáno: https://www.w3.org/TR/css-grid-1/#repeat-notation

Je dobré vědět, že automatické opakování není možné křížit s funkcemi pro rozměry vycházející z obsahu (`min-content`, `max-content`, `auto`, `fit-content()`).
 -->

### Příklad s auto-fill {#auto-fill}

`auto-fill` bude při roztahování dostupného prostoru prioritizovat přidávání neviditelných buněk mřížky.

```css
.container {
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
```

CodePen: [cdpn.io/e/NWKzjoV](https://codepen.io/machal/pen/NWKzjoV?editors=1100)

### Příklad s auto-fit {#auto-fit}

`auto-fit` bude při roztahování dostupného prostoru prioritizovat roztahování stávajících buněk mřížky. Ve skutečnosti tedy buňky přidává také, ale při výpočtu šířek ty neviditelné eliminuje.

```css
.container {
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
```

Zkuste si v CodePenu změnit šířku okna a dívat se přitom na rodičovský element ve vývojářských nástrojích Chrome nebo Firefoxu. Uvidíte něco podobného jako je na obrázku výše.

CodePen: [cdpn.io/e/BaBVREb](https://codepen.io/machal/pen/BaBVREb?editors=1100)

## Podpora v prohlížečích

V problematickém MSIE 11 je potřeba funkci zapisovat jinak: například `repeat(4, 1fr 20px)` jako `(1fr 20px)[4]`. Použití s [Autoprefixerem](css-grid-msie.md) vám ale umožní používat jeden, standardní zápis.

Bohužel ale není možné použít automatické opakování s klíčovými slovy jako `auto-fill` a `auto-fit`.

<!-- AdSnippet -->
