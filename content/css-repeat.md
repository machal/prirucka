# CSS funkce repeat()

Funkce (nebo přesněji řečeno „zápis“) `repeat()` slouží k usnadnění opakujících se předpisů pro sloupce nebo řádky mřížky v [CSS gridu](css-grid.md).

Vypadá například takto:

```css
.container {
  grid-template-columns: repeat(4, 1fr);
}
```

Tento zápis má pak stejný výsledek jako jeho ručně psaná verze:

```css
.container {
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
```

CodePen: [cdpn.io/e/ZEzRKjG](https://codepen.io/machal/pen/ZEzRKjG?editors=1100)

Možných hodnot je ale více, inspirujme se u [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat):

```css
repeat(4, 1fr)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] 1fr [col-end])
repeat(4, [col-start] min-content [col-end])
repeat(4, [col-start] max-content [col-end])
repeat(4, [col-start] auto [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] auto [col-end])
repeat(4, [col-start] min-content [col-middle] max-content [col-end])
```

V druhém parametru zápisu `repeat()` prostě můžete uvést libovolnou deklaraci stopy mřížky, které budete znát už například z vlastností [`grid-template-rows`/`-columns`](css-grid-template-rows-columns.md).

## Automatické opakování

Specifická verze použití zápisu `repeat()` v kombinaci s klíčovými slovy `auto-fill` (přidávání buněk mřížky do volného prostoru) nebo `auto-fit` (roztahování buněk).

Je to výhodné pro situace, kdy nevíme, kolik buněk bude přesně grid mít, tedy kolik položek bude mít kontejner mřížky v HTML.

Automatické opakování není možné křížit s funkcemi pro rozměry vycházející z obsahu (`min-content`, `max-content`, `auto`, `fit-content()`).

### Příklad s auto-fill

```css
.container {
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
```

CodePen: [cdpn.io/e/NWKzjoV](https://codepen.io/machal/pen/NWKzjoV?editors=1100)

### Příklad s auto-fit

```css
.container {
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
```

CodePen: [cdpn.io/e/BaBVREb](https://codepen.io/machal/pen/BaBVREb?editors=1100)

## Podpora v prohlížečích

V problematickém IE 11 je potřeba funkci zapisovat jinak: například `repeat(4, 1fr 20px)` jako `(1fr 20px)[4]`. Použití s Autoprefixerem vám ale umožní používat jeden, standardní zápis.

Bohužel ale není možné použít automatické opakování s klíčovými slovy jako `auto-fill` a `auto-fit`.

<!-- AdSnippet -->
