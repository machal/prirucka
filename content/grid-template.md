# Vlastnost grid-template

Vlastnost `grid-template` slouží k definování mřížky v [CSS gridu](css-grid.md).

Jde o zkratku (shorthand) pro vlastnosti [`grid-template-rows` a `grid-template-columns`](grid-template-rows-columns.md) a také [grid-template-areas](grid-template-areas.md).

## Definování sloupečků a řádků {#cols-rows}

V jednoduchém demu si ukážeme `grid-template` jako zkratku pro vlastnosti [`grid-template-rows` a `grid-template-columns`](grid-template-rows-columns.md):

```css
.container {
  grid-template: auto auto / 2fr 1fr;
}  
```

To odpovídá zápisu:

```css
.container {
  grid-template-rows: auto auto;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: none;  
}
```

CodePen: [cdpn.io/e/YmWxzw](https://codepen.io/machal/pen/YmWxzw?editors=1100)

## Sloupečky, řádky a pojmenované stopy {#cols-rows-stopy}

V hranatých závorkách zde můžeme uvést také pojmenované řádky a sloupce jak o nich píšeme v textu o vlastnostech [`grid-template-rows` a `grid-template-columns`](grid-template-rows-columns.md#pojmenovane-stopy)

```css
.container {
  grid-template:
    [row-1] auto [row-2] auto
    / 
    [col-1] 2fr [col-2] 1fr;
```

To odpovídá zápisu:

```css
.container {
  grid-template-rows: [row-1] auto [row-2] auto;
  grid-template-columns: [col-1] 2fr [col-2] 1fr;  
  grid-template-areas: none;
}
```

CodePen: [cdpn.io/e/dxXzpG](https://codepen.io/machal/pen/dxXzpG?editors=1100)

## Sloupečky, řádky a pojmenované oblasti {#cols-rows-oblasti}

V téhle jedné vlastnosti je také možné definovat rozměry gridu spolu s pojmenováním oblastí:

```css
.container {
  display: grid;
  grid-template:
    "heading heading" auto
    "one two" auto
    /
    2fr 1fr;
```

Je to už docela složité, chápu. Definují se nejprve řádky – jejich jména a výšky – a pak za lomítkem šířky sloupečků. Odpovídá to následujícímu:

```css
.container {
  grid-template-rows: auto auto;
  grid-template-columns: 2fr 1fr;  
  grid-template-areas:
    "heading heading"
    "one two";
}
```

CodePen: [cdpn.io/e/JgKyxK](https://codepen.io/machal/pen/JgKyxK?editors=1100)

## Co je dobré vědět? {#dobre-vedet}

- Všimněte si, že `grid-template` nastavuje `grid-template-areas: none`, takže resetuje i případné dříve nastavené oblasti.
- Funkce `repeat()` zde není povolena, protože se zde dává přednost vizuálnímu vyjádření mřížky, takzvanému „ASCII artu“.
- Stejnou syntaxi má vlastnost `grid`, která ovšem navíc umožňuje nastavení rozměrů implicitního gridu (vlastnosti `grid-auto-columns`, `grid-auto-rows`, and `grid-auto-flow`), takže je pravděpodobné, že můžete chtít použít spíše právě ji.

## Podpora v prohlížečích {#podpora}

Internet Exploreru 11 vlastnost nepodporuje. Asi už víte, že [díky Autoprefixeru](css-grid-msie.md) to tak problematické být nemusí. Doporučení zde ale zní: Používejte vlastnost `grid-template`, nikoliv zkratku `grid` a půjde to.
