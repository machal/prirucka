# Příklad s bočním panelem

V této ukázce využijeme jak flexbox, tak grid.

<!-- TODO img responsive design včetně BEM pojmenování -->

Zadání je následující:

- Boční panel (`.sidebar`) má minimální šířku od `200px` po `20%`.
- Oba prvky jsou vedle sebe až od šířky okna `600px`.

HTML jsme navrhli takto:

```html
<div class="container">
  <aside class="sidebar">
    <h2>
      Sidebar je minimálně 200px a maximálně 20 % široký.
    </h2>
    <p>Lorem ipsum…</p>
  </aside>
  <main class="content">    
    <h2>
       Obsah prostě vždy zabere zbylý prostor. 
    </h2>
    <p>Lorem ipsum…</p>    
  </main>
</div>
```

Chcete si to zkusit sami? Pak neváhejte a využijte připravený prázdný CodePen: [cdpn.io/e/VwpgEQg](https://codepen.io/machal/pen/VwpgEQg?editors=1100)

Můžete si pak porovnat svůj výsledek s mým.

## Varianta s flexboxem

CSS kód je následující:

```css
@media screen and (min-width: 600px) {
  .container {
    display: flex;
  }

  .sidebar {
    min-width: 200px;
    max-width: 20%;
  }
}
```

Pomocí [vlastnosti `display`](css-display.md) nastavíme flexový layout. Už tím se potomkové naskládají vedle sebe. Pro definici hranic šířky prvku `.sidebar` pak použijeme klasiku – vlastnosti `min-width` a `max-width`.

CodePen: [cdpn.io/e/VwpgEQg](https://codepen.io/machal/pen/VwpgEQg?editors=1100)

## Varianta s gridem

Zde to máme ještě o trochu jednodušší:

```css
@media screen and (min-width: 600px) {
  .container {
    display: grid;
    grid-template-columns: minmax(200px, 20%) 1fr;
  }
}
```

Zápisem [`display:grid`](css-display.md) ještě žádný layout nevzniká. Ten začne platit až s definicí šablony, kterou nejjednodušeji udělám [vlastnostmi `grid-template-columns`](css-grid-template-rows-columns.md) (pro definici sloupců layoutu), případně `grid-template-rows` (pro definici řádek).

Využíváme zde drobné parádičky - [funkce `minmax()`](css-minmax.md), která funguje pro definici buněk gridu podobně jako `min-width` a `max-width`. V prvním parametru je minimální a v druhém maximální hodnota.

[Jednotka `fr`](css-jednotka-fr.md) pak definuje rozdělení zbývající plochy a jelikož je zde použita jen jednou, druhý sloupeček si prostě vezme celou zbývající plochu.

CodePen: [cdpn.io/e/MWyMqwX](https://codepen.io/machal/pen/MWyMqwX?editors=1100)

A to je vše. Došli jste ke stejnému řešení?
