# Vlastnost grid-template-areas: Pojmenovávaní oblastí gridu

Vlastnost `grid-template-areas` slouží k pojmenovávání obdélníkových oblastí definovaných CSS gridem.

`grid-template-areas` vytváří oblasti, které jsou pak použitelné ve vlastnostech jako `grid-area` a dalších, sloužících k umísťování elementů do gridu.

<!-- TODO img -->

V příkladu na obrázku pojmenováváme oblasti následovně:

```css
.container {
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

Vysvětleme:

- Grid je definovaný jako dvousloupcový (`grid-template-columns: 1fr 1fr`) a dvouřádkový (`grid-template-rows: auto auto`).
- V `grid-template-areas` je pak seznam řetězců, které označují oblasti. To je to, oč zde běží.
- První řádek hodnot (`"first first"`) říká, že na první dvě buňky layoutu patří do oblasti `first`.
- Tečka (`.`) uvádí prázdnou buňku, kde se nic zobrazovat nemá.
- Elementy `.first` a `.second` je pak potřeba ručně umístit do vyhrazených oblastí mřížky pomocí vlastnosti `grid-area`.

CodePen: [cdpn.io/e/bXeWjb](https://codepen.io/machal/pen/bXeWjb?editors=1100)

Následuje pár poznámek k vlastnosti `grid-template-areas`, které mě zaujaly při čtení specifikace.

## Definování mřížky oblastmi {#definovani-gridu}

Pojmenovanými oblastmi je možné definovat i samotný grid. V některých případech tedy nemusíte potřebovat vlastnosti [`grid-template-rows` a `grid-template-columns`](css-grid-template-rows-columns.md).

Tento kód vytvoří velmi podobnou mřížku jako ve výše uvedeném příkladu:

```css
.container {
  display: grid;
  gap: 10px;
  grid-template-areas:
    "first first"
    ".     second";
}
```

CodePen: [cdpn.io/e/ymJXaX](https://codepen.io/machal/pen/ymJXaX?editors=1100)

## Implicitně vytvořené oblasti a linky {#implicitne}

Pojmenované oblasti souvisí s pojmenovanými linkami, které znáte z vlastnosti [`grid-template-rows`/`-columns`](css-grid-template-rows-columns.md).

Například definování oblasti pojmenované `head`, automaticky vytvoří dvě linky – `head-start` a `head-end`.

A víte co je ještě lepší? Definováním stop `head-start` a `head-end` ve vlastnostech [grid-template-rows a grid-template-columns](css-grid-template-rows-columns.md) vytvoříte oblast `head`.

<!-- TODO img a příklad -->

## Výhody definování oblastí mřížky {#vyhody}

Oblasti gridu samozřejmě není nutné definovat pokaždé. Hodit se ale budou pro komplexnější layouty, které zároveň potřebujeme definovat a spravovat ručně. Typickým příkladem jsou rozvržení celostránkové.

Vlastnost `grid-template-areas` je ale užitečná ještě ve dvou směrech. Za prvé zlidšťuje zápis layoutu. Je totiž lepší mluvit o oblasti `heading` než o „oblasti mezi první a osmou buňkou prvního řádku gridu“. Za druhé umožňuje pěkné kejkle s Media Queries.

## Využití Media Queries {#media-queries}

V dalším demíčku si pojďme ukázat věc, která se mi na `grid-template-areas` velmi líbí – kombinaci s Media Queries.

Je to jednoduché – oblasti je prostě možné různě přehazovat v rámci definovaného gridu.

<!-- TODO IMG -->

Výše uvedený příklad prostě stačí rozšířit o tyto deklarace:

```css
@media screen and (max-width: 600px) {
  .container {
    grid-template-areas:
      "first first"
      "second second";
  }
}

@media screen and (min-width: 1024px) {
  .container {
    grid-template-areas:
      "first second"
      "first second";
  }
}
```

<!-- TODO příklad -->

## Podpora v prohlížečích {#podpora}

Opět je zde jediná potíž. Internet Explorer 11, který `grid-template-areas` neumí. Už ale také víte, že [díky Autoprefixeru](css-grid-msie.md) to tak problematické být nemusí.

Moderní prohlížeče nemají s vlastností `grid-template-areas` žádný problém.
