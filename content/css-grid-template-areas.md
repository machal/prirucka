# Vlastnost grid-template-areas: Pojmenovávaní oblastí gridu

Vlastnost `grid-template-areas` slouží k pojmenovávání obdélníkových oblastí definovaných CSS gridem.

<div class="book-index" data-book-index="grid-template-areas"></div>

<div class="connected" markdown="1">

![Vlastnost grid-template-areas](../dist/images/medium/vdlayout/schema-css-grid-template-areas.jpg)

<div class="web-only" markdown="1">

Vlastnost `grid-template-areas` je součástí [CSS gridu](css-grid.md).

</div>

<div class="ebook-only" markdown="1">

→ [vrdl.in/cssgta](https://www.vzhurudolu.cz/prirucka/css-grid-template-areas)

</div>

</div>

`grid-template-areas` vytváří oblasti, které jsou pak použitelné ve vlastnostech jako `grid-area` a dalších, sloužících k umísťování elementů do gridu.

V příkladu na obrázku pojmenováváme oblasti následovně:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 10px;  
  grid-template-areas:
    "first first"
    ".     second";
}

.first {
  grid-area: first;
}

.second {
  grid-area: second;
}
```

<figure>
<img src="../dist/images/original/vdlayout/css-grid-template-areas.jpg" width="1920" height="540" alt="Vlastnost grid-template-areas">
<figcaption markdown="1">
Světle šedou barvou jsou vyznačené položky, modře pak uvidíte oblasti mřížky vyznačené ve Firefox DevTools.
</figcaption>
</figure>

Vysvětleme výše uvedený kód:

- Grid je definovaný jako dvousloupcový (`grid-template-columns:1fr 1fr`) a dvouřádkový (`grid-template-rows:auto auto`).
- V `grid-template-areas` je pak seznam řetězců, které označují oblasti. To je to, oč zde běží.
- První řádek hodnot (`"first first"`) říká, že první dvě buňky layoutu patří do oblasti `first`.
- Tečka (`.`) uvádí prázdnou buňku, kde se nic zobrazovat nemá.
- Elementy `.first` a `.second` je pak potřeba ručně umístit do vyhrazených oblastí mřížky pomocí vlastnosti `grid-area`.

CodePen: [vrdl.in/othcx](https://codepen.io/machal/pen/bXeWjb?editors=1100)

Následuje pár poznámek k vlastnosti `grid-template-areas`, které mě zaujaly při čtení specifikace.

## Definování mřížky oblastmi {#definovani-gridu}

<div class="book-index" data-book-index="Oblast mřížky"></div>

Pojmenovanými oblastmi je možné definovat i samotný grid. V některých případech tedy nebudeme potřebovat vlastnosti pro nastavení mřížky jako [`grid-template-rows` a `grid-template-columns`](css-grid-template-rows-columns.md).

Tento kód vytvoří stejnou mřížku jako ve výše uvedeném příkladu:

```css
.container {
  display: grid;
  gap: 10px;
  grid-template-areas:
    "first first"
    ".     second";
}
```

CodePen: [vrdl.in/u9z0j](https://codepen.io/machal/pen/ymJXaX?editors=1100)

## Implicitně vytvořené oblasti a linky {#implicitne}

<div class="book-index" data-book-index="Implicitní mřížka"></div>

Pojmenované oblasti souvisí s pojmenovanými linkami, které znáte z vlastnosti [`grid-template-rows`/`-columns`](css-grid-template-rows-columns.md).

<!-- AdSnippet -->

Například definování oblasti pojmenované `head` automaticky vytvoří dvě linky – `head-start` a `head-end`.

A víte, co je ještě lepší? Definováním linek `head-start` a `head-end` ve vlastnostech [`grid-template-rows` a `grid-template-columns`](css-grid-template-rows-columns.md) vytvoříte oblast `head`. Vezměme tento grid definovaný jako dva sloupce a dva řádky:

```css
.container {
  display: grid;
  grid-template-columns: [head-start] 50% 50% [head-end];
  grid-template-rows: [head-start] auto [head-end] auto;  
}
```

Jak je vidět, pomocí `head-start` a `head-end` se pokoušíme na prvním řádku definovat oblast `head` bez použití `grid-template-areas`.

HTML je následující:

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item item--head">Head</div>
</div>
```

Pak stačí pomocí [vlastnosti `grid-area`](css-grid-area.md) prvek `.item-head` umístit:

```css
.item--head {
  grid-area: head;
}
```

<figure>
<img src="../dist/images/original/vdlayout/css-grid-template-areas-tracks.jpg" width="1920" height="540" alt="Grid - automatická tvorba oblastí">
<figcaption markdown="1">
Oblast definovaná jen pomocí linek. Takhle to ukazuje Firefox v DevTools.
</figcaption>
</figure>

CodePen: [vrdl.in/s84n0](https://codepen.io/machal/pen/qBjrLwe?editors=1100)

## Výhody definování oblastí mřížky {#vyhody}

Oblasti gridu samozřejmě není nutné definovat pokaždé. Hodit se ale budou pro komplexnější layouty, které zároveň potřebujeme definovat a spravovat ručně. Typickým příkladem jsou rozvržení celostránková.

<!-- AdSnippet -->

Vlastnost `grid-template-areas` je ale užitečná ještě ve dvou směrech. Za prvé zlidšťuje zápis layoutu. Je totiž lepší mluvit o oblasti `heading` než o „oblasti mezi první a osmou buňkou prvního řádku gridu“. Za druhé umožňuje pěkné kejkle s Media Queries.

## Využití Media Queries {#media-queries}

V dalším demíčku si pojďme ukázat věc, která se mi na `grid-template-areas` velmi líbí – kombinaci s Media Queries.

Je to jednoduché – oblasti je prostě možné různě přehazovat v rámci definovaného gridu.

<figure>
<img src="../dist/images/original/vdlayout/css-grid-template-areas-mq.jpg" width="1600" height="900" alt="grid-template-areas s Media Queries">
<figcaption markdown="1">
*V kombinaci s Media Queries se z definovaných oblastí pomocí  vlastnosti grid-template-areas stává fantastický pomocník.*
</figcaption>
</figure>

<div class="pbi-avoid" markdown="1">

V tomto příkladu máme tyto responzivní deklarace:

```css
.container {
  grid-template-areas: 
    "first first"
    "second second";
}

@media screen and (min-width: 25em) {
  .container {
    grid-template-areas:
      "first first"
      ".     second";
  }
}

@media screen and (min-width: 37.5em) {
  .container {
    grid-template-areas:
      "first second"
      "first second";
  }
}
```

CodePen: [vrdl.in/sdlrj](https://codepen.io/machal/pen/jgrmoq?editors=1100)

</div>
<!-- .pbi-avoid -->

## Podpora v prohlížečích {#podpora}

Opět je zde jediná potíž: Internet Explorer 11, který `grid-template-areas` neumí. Už ale také víte, že [díky Autoprefixeru](css-grid-msie.md) to nemusí být tak neřešitelné.

Moderní prohlížeče nemají s vlastností `grid-template-areas` žádný problém.

<!-- AdSnippet -->
