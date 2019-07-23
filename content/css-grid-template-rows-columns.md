# Vlastnosti grid-template-rows a grid-template-columns

CSS vlastnosti `grid-template-rows` a `grid-template-columns` slouží k definování explicitní (tedy námi výslovně definované) mřížky v [CSS gridu](css-grid.md).

## Jednoduchý příklad

Vezměne tento jednoduchý příklad:

```html
<div class="container">
  <p class="column">1</p>
  <p class="column">2</p>
  <p class="column">3</p>
  <p class="column">4</p>
</div>
```

Pokud bychom chtěli rozvržení do mřížky 4 × 4, použijeme následující CSS kód:

```css
.container {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto;
}
```

Vysvětleme:

- `display: grid` „zapíná“ mřížkové zobrazení. Možná je také řádková hodnota `inline-grid`.
- `grid-template-columns: 50% 50%` – definujeme dva sloupečky mřížky. Každý bude zabírat polovinu šířky rodičovského kontejneru.
- `grid-template-rows: auto auto` – definujeme dva sloupce mřížky. Hodnota `auto` říká, že se výška počítá automaticky podle výšky obsahu. Grid sjednocuje výšky položek v každém, takže když změníme výšku jedné položky, její kolegyně se přízpůsobí. (Viz [cdpn.io/e/mNVEZB](https://codepen.io/machal/pen/mNVEZB?editors=1100))

Tady je CodePen: [cdpn.io/e/jgWrmz](https://codepen.io/machal/pen/jgWrmz?editors=1100)

*TODO poznámka:*

- implicitní grid (změna počtu položek)

*TODO stručně a pak rozepsat:*

- jednotky, včetně kombinací a fr
- repeat()
- auto-fill() / auto-fit()
- explicitně pojmenované (a grid-template-areas)
- 
