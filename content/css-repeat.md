# CSS funkce repeat()

Funkce (nebo přesněji řečeno „zápis“) `repeat()` slouží k usnadnění opakujících se předpisů pro sloupce nebo řádky mřížky v CSS gridu.

<div class="book-index" data-book-index="repeat()"></div>
<div class="book-index" data-book-index="Opakování v gridu"></div>

<div class="connected" markdown="1">

![CSS funkce repeat](../dist/images/medium/vdlayout/schema-css-repeat.jpg)

<div class="web-only" markdown="1">

Funkce `repeat()` je součástí specifikace [CSS gridu](css-grid.md).

</div>

<div class="ebook-only" markdown="1">

→ [vrdl.in/cssrep](https://www.vzhurudolu.cz/prirucka/css-repeat)

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

CodePen: [vrdl.in/lzrej](https://codepen.io/machal/pen/ZEzRKjG?editors=1100)

Možných hodnot je ale více:

```css
repeat(4, [col-start] 1fr [col-end])
repeat(4, 10px [col-start] 30% [col-middle] auto [col-end])
repeat(auto-fill, minmax(100px, 1fr));
```

V druhém parametru zápisu `repeat()` prostě můžete uvést libovolnou deklaraci stopy mřížky, kterou budete znát už například z vlastností [`grid-template-rows`/`-columns`](css-grid-template-rows-columns.md).

<!-- AdSnippet -->

Co když ale chcete deklaraci sloupců nebo řádků opakovat, jenže ještě nevíte kolikrát? Třeba prostě nevíte, kolik bude mít rodičovský prvek v HTML potomků.

Tady vstupují do hry zajímavá klíčová slova `auto-fill` a `auto-fit`.

## Automatické opakování s auto-fill a auto-fit {#auto-fill-fit}

Použití zápisu `repeat()` v kombinaci s klíčovými slovy `auto-fill` a `auto-fit` se velmi hodí, pokud neznáte počet položek. Následující obrázek snad napoví, čím se liší.

<div class="book-index" data-book-index="auto-fill"></div>
<div class="book-index" data-book-index="auto-fit"></div>

<figure>
<img src="../dist/images/original/auto-fill-fit.jpg" alt="">
<figcaption markdown="1">
Hodnota auto-fill přidává do volného prostoru neviditelné buňky, naproti tomu auto-fit prioritizuje roztahování těch už vykreslených.
</figcaption>
</figure>

Rozdíly jsou zhruba následující:

- Oba zápisy v `repeat()` přidávají nové neviditelné buňky mřížky tak, aby se vyplnil volný prostor.
- `auto-fill` se snaží vyplnit prostor prázdnými buňkami.
- `auto-fit` při vykreslování nové prázdné buňky eliminuje, a tedy umožní vyplnit prostor roztažením (napasováním, proto „fit“) velikosti stávajících buněk mřížky.

Myslím si, že obě klíčová slova dává smysl použít jen s [funkcí `minmax()`](css-minmax.md), aby se buňky mohly roztahovat od minima po maximum velikosti.

<!-- TODO nedohledáno: https://www.w3.org/TR/css-grid-1/#repeat-notation

Je dobré vědět, že automatické opakování není možné křížit s funkcemi pro rozměry vycházející z obsahu (`min-content`, `max-content`, `auto`, `fit-content()`).
 -->

### Příklad s auto-fill {#auto-fill}

`auto-fill` se snaží při roztahování prostoru přidávat neviditelné buňky.

<div class="pbi-avoid" markdown="1">

```css
.container {
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
```

</div>
<!-- .pbi-avoid -->

CodePen: [vrdl.in/lx9fc](https://codepen.io/machal/pen/NWKzjoV?editors=1100)

### Příklad s auto-fit {#auto-fit}

`auto-fit` bude při roztahování dostupného prostoru prioritizovat roztahování stávajících buněk mřížky. Ve skutečnosti tedy přidává buňky také, ale při výpočtu šířek ty neviditelné eliminuje.

```css
.container {
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
```

Zkuste si v CodePenu změnit šířku okna a dívat se přitom na rodičovský element ve vývojářských nástrojích Chromu nebo Firefoxu. Uvidíte něco podobného, jako je na obrázku výše.

CodePen: [vrdl.in/0wc7v](https://codepen.io/machal/pen/BaBVREb?editors=1100)

## Podpora v prohlížečích

V problematickém MSIE 11 je potřeba funkci zapisovat jinak: například `repeat(4,1fr 20px)` jako `(1fr 20px)[4]`. Použití s [Autoprefixerem](css-grid-msie.md) vám ale umožní používat jeden, standardní zápis.

Bohužel však není možné použít automatické opakování s klíčovými slovy jako `auto-fill` a `auto-fit`.

<!-- AdSnippet -->
