# Vlastnost grid-auto-flow

Vlastnost `grid-auto-flow` určuje, jak bude fungovat algoritmus automatického umísťování prvků do mřížky v [CSS gridu](css-grid.md).

## Hodnoty {#hodnoty}

| Hodnota                    | Co dělá?           | 
|----------------------------|--------------------|
| `row`     | Výchozí hodnota. Prvky layoutu se vykreslují po řádcích. |
| `column`  | Prvky layoutu se vykreslují po sloupečcích. |
| `dense`   | Vykresluje se po řádcích, ale prohlížeč může vyplnit mezery změnou pořadí prvků. |
| `column dense`   | Vykresluje se po sloupečcích a prohlížeč může vyplnit mezery změnou pořadí prvků. |

## Příklad: změna směru vykreslování pomocí grid-auto-flow: column {#priklad-column}

Tohle je jednoduché, prostě se jen změní směr vykreslování z řádků na sloupečky.

Vezměme, že máme šest položek v layoutu:

```html
<div class="container">
  <p class="column">1</p>
  <p class="column">2</p>
  <p class="column">3</p>
  <p class="column">4</p>
  <p class="column">5</p>
  <p class="column">6</p>
</div>
```

Layout je definovaný jako mřížka o třech sloupcích a dvou řádcích:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
}
```

Výchozí směr vykreslení je `grid-auto-flow:row`, tedy po řádcích:

<!-- TODO: obrázek s odstraněním auto-flow https://codepen.io/machal/pen/voXWGv?editors=1100 -->

Můžeme jej ale změnit do svislého (sloupcového) směru:

```css
.container {
  grid-auto-flow: column;
}
```

<!-- TODO: obrázek https://codepen.io/machal/pen/voXWGv?editors=1100 -->

V CodePenu si to můžete zkusit také pro vlastnosti implicitního gridu: [`grid-auto-rows` a `grid-auto-columns`](css-grid-auto-rows-columns.md), stačí odstranit příslušný komentář v CSS.

CodePen: [cdpn.io/e/voXWGv](https://codepen.io/machal/pen/voXWGv?editors=1100)

## Příklad: zahuštěné vykreslování pomocí grid-auto-flow:dense {#priklad-dense}

Hodnota `dense` zajistí „zahuštěné“ vykreslení. V zásadě to znamená, že prohlížeč se snaží o to, aby ve směru vykreslení nezůstavaly v layoutu mezery mezi prvky. Mezery případně zůstanou až na konci layoutu.

Důležité je, že prohlížeč může po nastavení `grid-auto-flow:dense` změnit pořadí vykreslení prvků.

Ale namísto řečí pojďme na příklad. Opět zde máme šest položek:

```html
<div class="container">
  <p class="column column-1">1</p>
  <p class="column column-2">2</p>
  <p class="column column-3">3</p>
  <p class="column column-4">4</p>
  <p class="column column-5">5</p>
  <p class="column column-6">6</p>
</div>
```

Layout je definovaný takto:

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
  grid-auto-flow: dense;  
}
```

Vysvětleme:

- Ve vlastnosti [`grid-template-columns`](css-grid-template-rows-columns.md) uvádíme, že je možný libovoný počet sloupečku ([funkce `repeat()`](css-repeat.md)) ale každý musí být minimálně 120px široký `minmax(120px, 1fr)` (více o [funkci `minmax()`](css-minmax.md)).
- `grid-auto-flow: dense` říká prohlížeči: Vykresli to zahuštěně, takže nezáleží na pořadí prvků, ale na tom, aby ve směru layoutu (což je tady `row`) nezůstaly mezery.

<!-- TODO obrázek porovnání breakpointů bez dense a s ním https://codepen.io/machal/pen/VoKroo?editors=1100 -->

CodePen: [cdpn.io/e/VoKroo](https://codepen.io/machal/pen/VoKroo?editors=1100)

## Podpora v prohlížečích {#podpora}

Vlastnost `grid-auto-flow` a její hodnoty jsou plně podporovány ve všech prohlížečích s jedinou výjimkou – Internet Explorerem.

V IE nám bohužel nepomůže v případě této vlastnosti nepomůže ani Autoprefixer nebo jiný nástroj. Můžeme na něj ale vyzrát vhodným napsáním kódu tak, abychom měli pod kontrolou desktopové zobrazení, které Explorer používá, a prohlížečích a vlastnosti `grid-auto-flow` nechali jen menší displeje.
