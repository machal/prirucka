# Vlastnost grid-area

CSS vlastnost `grid-area` slouží k umísťování položek v definovaném [CSS gridu](css-grid.md).

Jde o zkratku pro vlastnosti `grid-column-start`, `grid-column-end` a `grid-row-start`, `grid-row-end` nebo také zkratku pro zkratky [`grid-column` a `grid-row`](css-grid-row-column.md), aby to nebylo úplně jednoduché.

Může mít jednu až čtyři hodnoty. Obecně zápis vypadá asi takto:

```css
grid-area:
  <grid-row-start> / <grid-column-start> /  
  <grid-row-end> / <grid-column-end>;
```

## Jedna hodnota {#jedna-hodnota}

Umístění do už pojmenované oblasti mřížky je snadné. Nejprve si nadefinujeme mřížku a pomocí [`grid-template-areas`](css-grid-template-areas.md) pojmenujeme některé z jejich oblastí:

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
```

Pak už do oblastí `first` a `second` můžeme umísťovat:

```css
.first {
  grid-area: first;
}
```

Je to zápis ekvivalentní k tomuto:

```css
.first {
  grid-row-start: first;
  grid-column-start: first;
  grid-row-end: first;
  grid-column-end: first;
}
```

CodePen: [cdpn.io/e/bXeWjb](https://codepen.io/machal/pen/bXeWjb?editors=1100)

## Další možné zápisy {#dalsi-zapisy}

Automaticky umísťuj do další buňky mřížky:

```css
.item {
  grid-area: auto;
}
```

Umísti do řádku 2 a sloupce 4, jen do jedné buňky:

```css
.item {
  grid-area: 2 / 4;
}
```

Umísti do třetího sloupce a roztáhni se do všech řádků (od prvního (`1`) do posledního `-1`):

```css
.item {
  grid-area: 1 / 3 / -1;
}
```

Na různé další možnosti hodnot, včetně demíček na CodePenu, se podívejte do příručky ke zkratkám [`grid-column` a `grid-row`](css-grid-row-column.md). 
