# Vlastnost grid-template-areas: Pojmenovávaní oblastí gridu

`grid-template-areas` slouží k pojmenovávání obdélníkových oblastí definovaných [CSS gridem](css-grid.md).

<!-- TODO obrázek -->

`grid-template-areas` vytváří oblasti pro případ, které jsou pak použitelné ve vlastnostech jako `grid-area` a dalších, sloužících k umísťování elementů do gridu.

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

- Je dobré vědět, že grid je definovaný jako dvousloupcový (`grid-template-columns: 1fr 1fr`) a dvouřádkový (`grid-template-rows: auto auto`).
- `grid-template-areas` je prostě seznam řetězců, které označují oblasti.
- První řádek hodnot (`"first first"`) znamená, že na první dvě buňky layoutu patří do oblasti `first`.
- Tečka (`.`) uvádí prázdnou buňku, kde se nic zobrazovat nemá.
- Elementy `.first` a `.second` je pak potřeba ručně umístit do vyhrazených oblastí mřížky pomocí vlastnosti `grid-area`.

CodePen: [cdpn.io/e/bXeWjb](https://codepen.io/machal/pen/bXeWjb?editors=1100)

Následuje pár poznámek ze [čtení specifikace](https://www.w3.org/TR/css-grid-1/#grid-template-areas-property).

## Definování mřížky oblastmi {#definovani-gridu}

Pojmenovanými oblastmi je možné definovat samotný grid. V některých případech tedy nemusíte potřebovat vlastnosti [grid-template-rows a grid-template-columns](css-grid-template-rows-columns.md). Viz CodePen: [cdpn.io/e/ymJXaX](https://codepen.io/machal/pen/ymJXaX?editors=1100)

## Implicitně vytvořené oblasti a stopy {#implicitne}

Pojmenované oblasti souvisí s [pojmenovanými stopami](css-grid-template-rows-columns.md#pojmenovane-stopy). 

Například definování pojmenované oblasti pojmenované například `head`, vytvoří dvě stopy `head-start` a `head-end`.

A co je ještě lepší – definováním stop `head-start` a `head-end` ve vlastnostech [grid-template-rows a grid-template-columns](css-grid-template-rows-columns.md) vytvoříte oblast `head`.  

<!--TODO opravdu stopami? ("lines") -->


## Výhody definování oblastí mřížky {#vyhody}

Oblasti gridu samozřejmě není nutné definovat pokaždé. Hodit se ale budou pro komplexnější layouty, které zároveň potřebujeme definovat a spravovat ručně. Typickým příkladem jsou rozvržení celostránkové.

Vlastnost `grid-template-areas` je ale užitečná ještě ve dvou směrech. Za prvé zlidšťuje zápis layoutu. Je totiž lepší mluvit o oblasti `heading` než o „oblasti mezi první a osmou buňkou prvního řádku gridu“. Za druhé umožňuje pěkné kejkle s Media Queries.

## Využití Media Queries {#media-queries}

V dalším demíčku si pojďme ukázat věc, která se mi na `grid-template-areas` velmi líbí – kombinace s [Media Queries](css3-media-queries.md).

Je to jednoduché – oblasti je prostě možné různě přehazovat v rámci definovaného gridu.

<!-- TODO obrázek -->

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

## Podpora v prohlížečích {#podpora}

Opět je zde jediná potíž. Internet Exploreru 11, který `grid-template-areas`. Už ale asi také víte, že [díky Autoprefixeru](css-grid-msie.md) to tak problematické být nemusí.

<!-- TODO příklad https://codepen.io/machal/pen/VQvbVR -->
