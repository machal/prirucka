# Responzivní fotogalerie

V předchozí ukázce jsme poměrně intenzivně využili oblasti mřížky definované pomocí [`grid-template-areas`](css-grid-template-areas.md) a umísťované s vlastností [vlastností `grid-area`](css-grid-area.md).

Oblasti jsme zde využili hlavně pro zjednodušení a zpřehlednění kódu. V této ukázce u oblastí zůstaneme, ale jejich využití tady bude ještě intenzivnější a zpřehlednění kódu větší.

Zdrojem pro tuto ukázku je skutečná fotogalerie na Slevomat.cz. Ale takovou jste určitě už viděli i jinde nebo ji dokonce kódovali.

<!-- TODO IMG v rozhraní Slevomatu -->

Zadání je ale složitější – tentokrát budeme velmi intenzivně řešit responzivitu, různá zobrazení na různě velkých displejích.

<!-- TODO IMG responzivní pohledy -->

Chcete si to zkusit sami? „Forkněte“ CodePen a vzhůru do toho. [cdpn.io/e/bGqmQEx](https://codepen.io/machal/pen/bGqmQEx?editors=1100)

HTML jsem tentokrát nevymýšlel sám. Půjčil jsem si jej přímo od kodérů Slevomatu, protože používají metodiku BEM a já k ní nemám co dodat:

```html
<div class="gallery">
  <div class="gallery__main-image">
    <img src="…" alt="…">
  </div>
  <div class="gallery__thumb gallery__thumb-one">
    <img src="…" alt="…">
  </div>
  <div class="gallery__thumb gallery__thumb-two">
    <img src="…" alt="…">
  </div>
  <div class="gallery__thumb gallery__thumb-three">
    <img src="…" alt="…">
  </div>
</div>
```

## Oblasti mřížky

V dalším kroku si napárujeme jednotlivé prvky HTML (nebo DOMu, když chcete) s oblastmi gridu.

<!-- TODO IMG responzivní pohledy + oblasti gridu -->

V CSS kódu to bude vypadat následovně:

```css
.gallery__main-image {
  grid-area: main;
}

.gallery__thumb-one {
  grid-area: thumb1;
}

.gallery__thumb-two {
  grid-area: thumb2;
}

.gallery__thumb-three {
  grid-area: thumb3;
}
```

Jak už víte, toto samo o sobě ještě nic nevytvoří. Snad jen zmatenost prohlížeče, protože ten sice ví, kam chcete který prvek umístit, ale oblasti ani layout zatím nezná.

## Breakpointy

V příkladu jsem za vás pomocí [Media Queries](media-queries.md) definoval tři body zlomu:

```css
@media (max-width: 399px) { }

@media (min-width: 400px) and (max-width: 699px) { }

@media (min-width: 700px) { }
```

Pojďme teď konečně zapracovat na jednotlivých rozvrženích. Mocně zde využijeme [zkratku `grid-template`](css-grid-template.md), které už víte, že jsem si ji poměrně oblíbil.

## Layout na nejmenších displejích

Layout na nejmenších displejích bude vypadat takto:

```css
@media (max-width: 399px) {
  .gallery {
    grid-template:
      "main main main"
      "thumb1 thumb2 thumb3" /
      1fr 1fr 1fr;
  }
}
```

Jde o mřížku 3 × 2, tři sloupce a dva řádky. Každý sloupec je stejně široký – `1fr 1fr 1fr` bychom samozřejmě mohli zapsat pomocí [funkce `repeat()`](css-repeat.md) jako `repeat(3, 1fr)`.

Výšku řádků bychom mohli definovat hned za oblastmi. Pokud ji neurčíme, spočítá se podle obsahu, takže má hodnotu `auto`, takže zde podle výšky obrázků. Jen pro pořádek uvedu odpovídající zápis s definicí výšky řádku:

```css
@media (max-width: 399px) {
  .gallery {
    grid-template:
      "main main main" auto
      "thumb1 thumb2 thumb3" auto /
      1fr 1fr 1fr;
  }
}
```

Podstatné na této ukázce je ale umístění oblastí do mřížky:

- Oblast `main` zabírá první tři buňky mřížky. Celý první řádek.
- Oblastem `thumb1` až `thumb3` jsme přidělili jednotlivé buňky na třetím řádku.

Díky tomu, že jsem nejprve propojil elementy DOMu z oblastmi, nemusím nyní vůbec přemýšlet, jak vypadá moje HTML.

## Layout na středních displejích

Pojďme rovnou na kód:

```css
@media (min-width: 400px) and (max-width: 699px) {
  .gallery {
    grid-template:
      "main thumb1"
      "main thumb2" /
      2fr 1fr;
  }
  .gallery__thumb-three {
    display: none;
  }
}
```

Zde musíme poslední náhled „vypnout“ pomocí `display:none`. Grafický návrh nám to káže.

Samotný layout je tentokrát definovaný jako mřížka 2 × 2. První sloupec je dvoutřetinový (`2fr`), druhý zabírá třetinu prostoru (`1fr`).

Rozmístění oblastí `main`, `thumb1` a `thumb2` do buněk mřížky asi vidíte z „ASCII artu“.

## Layout na větších displejích

CSS kód vypadá takto:

```css
@media (min-width: 700px) {
  .gallery {
    grid-template:
      "main thumb1 thumb2"
      "main thumb3 thumb3" /
      3fr 1fr 1fr;
  }
}
```

Máme zde mřížku 2 × 3, dělenou na pětiny. Umístění oblastí do buněk gridu je asi zřejmé. V případě potřeby si je porovnejte s rozvržením z obrázků.

CodePen: [cdpn.io/e/bGqzwMy](https://codepen.io/machal/pen/bGqzwMy?editors=1100)

## Přidáváme mezeru

Zatím jsem vám zamlčel podstatnou věc. V příkladech jsem nepracoval s dvoupixelovou mezerou, která v původním rozvržení vklíněná mezi jednotlivými fotografiemi.

<!-- TODO: Object-fit? calc? https://codepen.io/machal/pen/PopLrbZ?editors=1100 -->
