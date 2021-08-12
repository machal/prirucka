# Vlastnosti grid-template-rows a grid-template-columns: definice explicitního gridu

CSS vlastnosti `grid-template-rows` a `grid-template-columns` slouží k nastavení explicitní (tedy námi výslovně definované) mřížky v [CSS gridu](css-grid.md).

## Jednoduchý příklad

Vezměne toto HTML:

```html
<div class="container">
  <p class="column">1</p>
  <p class="column">2</p>
  <p class="column">3</p>
  <p class="column">4</p>
</div>
```

Pokud bychom chtěli zajistit rozvržení do mřížky 4 × 4, použijeme následující CSS kód:

```css
.container {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto;
}
```

Vysvětleme:

- `display: grid` – „zapíná“ mřížkové zobrazení. Možná je také řádková hodnota `inline-grid`.
- `grid-template-columns: 50% 50%` – definujeme dva sloupečky mřížky. Každý bude zabírat polovinu šířky rodičovského kontejneru.
- `grid-template-rows: auto auto` – definujeme dva řádky mřížky. Hodnota `auto` říká, že se výška každého z nich se počítá automaticky podle výšky obsahu. grid sjednocuje výšky položek v každém, takže když změníme výšku jedné položky, její kolegyně se přizpůsobí. (Viz [cdpn.io/e/mNVEZB](https://codepen.io/machal/pen/mNVEZB?editors=1100))

CodePen: [cdpn.io/e/jgWrmz](https://codepen.io/machal/pen/jgWrmz?editors=1100)

### Co když je položek více než definuje grid? (Implicitní vs. explicitní grid) {#explicitni-implicitni}

Teď se stane ošlivá a zlá věc – zákeřný frontend kodér do HTML přidá pátou položku:

```html
<div class="container">
  <p class="column">1</p>
  <p class="column">2</p>
  <p class="column">3</p>
  <p class="column">4</p>
  <p class="column">5</p>
</div>
```

Jak bude vypadat pátá položka zobrazená v gridu 2 × 2? V tomto případě stejně jako předchozí čtyři. Algoritmus gridu ji přidělí 50% šířku a automatickou výšku.

<!-- AdSnippet -->

Jiná by byla situace, pokud bychom změnili definici výšky položek gridu:

```css
.container {
  grid-template-rows: 2rem 2rem;  
}
```

Pátá položka zde pak nemá definovanou výšku a musí použít nějakou výchozí, v tomto případě opět `auto`.

CodePen: [cdpn.io/e/qeZqbV](https://codepen.io/machal/pen/qeZqbV?editors=1100)

Rozměry položek vložených nad rámec počtu položek definovaných explicitním gridem, tedy vlastnostmi `grid-template-rows` a `grid-template-columns` je možné určit vlastnostmi `grid-auto-columns` a `grid-auto-rows`. Ty definují implicitní grid a o těch napíšeme později.

## Další možnosti zápisu gridu {#hodnoty}

Hodnoty v následující tabulce je možné aplikovat jak na `grid-template-columns`, tak na `grid-template-rows`.

| Možnost                            | Ukázka hodnoty                           |
|------------------------------------|------------------------------------------|
| [Bez explicitního gridu](#none)    | `none`                                   |
| [Kombinace jednotek](#jednotky)    | `150px auto 1fr 1fr`                     |
| [Pojmenovávání stop](#pojmenovane-stopy) | `[first] 150px [second] 1fr [end]` |
| [Opakování](#opakovani)            | `repeat(12, 1fr)`                        |
| [Masonry](#masonry)                | `masonry`                                |

Další řadu možností nabízí [funkce `minmax()`](css-minmax.md) a související hodnoty pro nastavení šířky podle obsahu jako je `min-content`, `max-content` nebo `fit-content`.

### Bez explicitního gridu {#none}

Toto je výchozí stav:

```css
.container {
  grid-template-columns: none;
}
```

Občas se to ale může hodit použít i ve vlastním kódu, například když rušíme explicitní grid. Pokud to provedeme, platí pravidla pro implicitní, tedy nepřímo vyjádřenou mřížku – `grid-auto-columns` a `grid-auto-rows`.

### Kombinace jednotek a jednotka fr {#jednotky}

V gridu je možné pro definici řádků a sloupečků používat všechny možné [jednotky](jednotky.md), které už pro rozvržení v CSS používáte.

Je tady ale jedna novinka – [jednotka `fr`](css-jednotka-fr.md). Jde o *flex fraction* a dá se o něm mluvit jako o podílu na zbytku.

Zápis může vypadat například takto:

```css
.container {
  grid-template-columns: 150px 1fr 1fr 150px;
}
```

CodePen: [cdpn.io/e/VgKaMB](https://codepen.io/machal/pen/VgKaMB?editors=1100)

`1fr` je v chování velice podobné číslu `1`, které používáte ve vlastnosti `flex` u [flexboxu](css3-flexbox-polozky.md).

### Pojmenovávání stop {#pojmenovane-stopy}

Pojmenovávání stop se může hodit pro použití ve vlastnostech, které definují umístění prvků v gridu jako je `grid-column`, `grid-row` nebo `grid-area`.

Každý sloupec nebo řádka je v gridu definovaná dvěma stopami.

<!-- TODO obrázek -->

Sloupce a řádky mřížky je možné si přestavit jako sloupce a řádky v tabulce. Stopy jsou rámečky kolem buněk tabulky.

```css
.container {
  display: grid;
  grid-template-columns: [first-col] 50% [second-col] 50% [last-col];
  grid-template-rows: [first-row] auto [second-row] auto [last-row];  
}
```

V ukázce je tedy první položka gridu umístěná vodorovně na pozici mezi `first-col` a `second-col`. Svisle pak mezi `first-row` a `second-row`.

CodePen: [cdpn.io/e/wVGgaW](https://codepen.io/machal/pen/wVGgaW?editors=1100)

### Opakování {#opakovani}

U složitějších mřížek by bylo nepříjemné zapisovat řadu stejných hodnot do řádky. Vezměme například dvanáctisloupcovou mřížku:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}
```

Proto je tady [funkce `repeat()`](css-repeat.md), která opakování zamezuje:

```css
.container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
```

## Masonry {#masonry}

Hodnota `masonry` je speciální, protože by v budoucnu měla zařídit nativní [masonry (nebo zděný) layout](css-masonry.md).

<figure>
<img src="../dist/images/original/masonry-css.jpg" width="1600" height="900" alt="Masonry nativně pomocí CSS">
<figcaption markdown="1">
*Nativně vykreslený masonry layout. Zdroj: [Rachel Andrew](https://codepen.io/rachelandrew/pen/wvWmZWB).*
</figcaption>
</figure>

Vzhledem k tomu, že na konci roku 2020 to zatím podporuje jen prohlížeč Firefox ve verzi Nightly, bude ještě chvíli trvat než se z takové věci budeme moci začít těšit v běžných prohlížečích.

## Podpora v prohlížečích {#podpora}

Internet Explorer 11 tyto vlastnosti nepodporuje. Namísto `grid-template-columns` používá vlastnost `-ms-grid-columns` a místo `grid-template-rows` pak `-ms-grid-rows`. Toto se dá naštěstí obejít pomocí [nástroje Autoprefixer](css-grid-msie.md).

Tento stařičký, ale občas ještě [používaný prohlížeč](msie.md), také nezvládá automatické umísťování položek do mřížky. I to je možné alespoň částečně vyřešit.

<!-- AdSnippet -->
