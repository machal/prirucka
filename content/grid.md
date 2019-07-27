# Vlastnost grid

`grid` je zkratka (shorthand) pro definování [CSS gridu](css-grid.md).

V jedné deklaraci můžete nastavit jen jeden z obou možných gridů:

- *explicitní*, výslovně definovaný pomocí vlastností [`grid-template-rows`, `grid-template-columns`](grid-template-rows-columns.md) a [`grid-template-areas`](grid-template-areas.md),
- *implicitní*, definovaný pomocí vlastností [`grid-auto-rows`, `grid-auto-columns`](grid-auto-rows-columns.md) a [`grid-auto-flow`](grid-auto-flow.md)

## Definice explicitního gridu {#explicitni}

V zápisu lomítkem oddělujeme zápis pro `grid-template-rows` od `grid-template-columns`:

```css
grid: <grid-template-rows> / <grid-template-columns>;
```

Například:

```css
.container {
  grid: auto auto / 2fr 1fr;
}  
```

Odpovídá tomuto zápisu:

```css
.container {
  grid-template-rows: auto auto;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: none;  
}
```

Je to prostě úplně stejné jako u zkratky [`grid-template`](grid-template.md).

## Implicitní grid a auto-flow {#implicitni-auto-flow}

To zda definujete v daném směru definujete implicitní grid se pozná podle klíčového slova `auto-flow`.

## Co je ještě dobré vědět? {#dobre-vedet}

- U všech zkratek v CSS platí, že vlastnosti, které nedefinujeme, zkratka nastaví na jejich výchozí hodnoty.
- Vlastnost pro mezeru mezi buňky layoutu – [`gap`](css-gap.md) – nelze přes zkratku `grid` nastavit a není tudíž jejím použitím resetována.

## Podpora v prohlížečích {#podpora}
