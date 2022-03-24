# Vlastnost grid

`grid` je zkratka pro definování všech vlastností CSS gridu.

<div class="book-index" data-book-index="grid (zkratka)"></div>

<div class="connected" markdown="1">

![CSS vlastnost grid](../dist/images/medium/vdlayout/schema-css-grid-zkratka.jpg)

<div class="web-only" markdown="1">

Vlastnost `grid` je součástí specifikace [CSS gridu](css-grid.md).

</div>

<div class="ebook-only" markdown="1">

→ [vrdl.in/cssg](https://www.vzhurudolu.cz/prirucka/css-grid-zkratka)

</div>

</div>

V jedné deklaraci můžete nastavit jen jeden z obou možných gridů:

- *explicitní*, výslovně definovaný pomocí vlastností [`grid-template-rows`, `grid-template-columns`](css-grid-template-rows-columns.md) a [`grid-template-areas`](css-grid-template-areas.md)
- *implicitní*, definovaný pomocí vlastností [`grid-auto-rows`, `grid-auto-columns`](css-grid-auto-rows-columns.md) a [`grid-auto-flow`](css-grid-auto-flow.md)

Je to mocná zbraň, která dokáže urychlit práci zkušených mřížkových ninjů, ovšem začínajícím bych ji raději doporučoval nepoužívat.

<!-- AdSnippet -->

Pojďme se podívat na několik ukázek.

## Definice explicitního gridu {#explicitni}

V tomto zápisu oddělujeme hodnoty pro vlastnosti `grid-template-rows` od `grid-template-columns` pomocí lomítka:

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

Je to prostě úplně stejné jako u zkratky [`grid-template`](css-grid-template.md).

## Implicitní grid a auto-flow {#implicitni-auto-flow}

To, zda v daném směru definujete implicitní grid, se pozná podle klíčového slova `auto-flow`:

```css
.container {
  grid: auto-flow 1fr / 100px 100px;
}
```

Zápis je ekvivalentní tomuto:

```css
.container {
  grid-auto-flow: row;
  grid-auto-rows: 1fr;
  grid-auto-columns: auto;
  grid-template-rows: none;
  grid-template-columns: 100px 100px;
  grid-template-areas: none;
}
```

Vysvětlíme:

- `grid-auto-flow:row` – grid se bude vykreslovat po řádcích. Jak můžete vědět ze studia vlastnosti [`grid-auto-flow`](css-grid-auto-flow.md), hodnota `grid-auto-flow:row` je v prohlížečích výchozí, takže bychom ji nemuseli nastavovat.
- `grid-auto-rows:1fr` – implicitní grid bude mít výšku řádků `1fr`.
- `grid-auto-columns:auto` – implicitní grid nemá definované sloupce, takže se budou řídit šířkou obsahu buňky.
- `grid-template-rows:none` – buňky gridu nemají ve směru řádků nijak nastavené rozměry.
- `grid-template-columns:100px 100px` – buňky mají v explicitním gridu nastavenou šířku `100px` a tvoří dva sloupce.

CodePen: [vrdl.in/beuxn](https://codepen.io/machal/pen/YmpNYR?editors=1100)

Podobné to bude u opačného zápisu:

```css
.container {
  grid: 1fr / auto-flow 100px 100px;
}
```

Ten je ekvivalentní následujícímu:

```css
.container {
  grid-auto-flow: column;
  grid-auto-rows: auto;
  grid-auto-columns: 100px;
  grid-template-rows: 1fr;
  grid-template-columns: none;
  grid-template-areas: none;
}
```

### Zahuštěné vykreslování, klíčové slovo dense

Pokud jste viděli [vlastnost `grid-auto-flow`](css-grid-auto-flow.md), určitě vás zaujala hodnota `dense`.

Můžeme ji nastavit i pomocí zkratky `grid`. Následující dva kousky kódu budou totožné:

```css
.container {
  grid: auto-flow dense 100px / 1fr 2fr;
}
```

```css
.container {
  grid-auto-flow: row dense;
  grid-auto-rows: 100px;
  grid-template-columns: 1fr 2fr;
}
```

## Co je ještě dobré vědět? {#dobre-vedet}

- U všech zkratek v CSS platí, že vlastnosti, které nedefinujeme, zkratka nastaví na jejich výchozí hodnoty. To může být občas nebezpečné.
- Vlastnost pro mezeru mezi buňky layoutu – [`gap`](css-gap.md) – nelze přes zkratku `grid` nastavit, a není tudíž jejím použitím resetována.

## Podpora v prohlížečích {#podpora}

Zkratku `grid` zvládají všechny prohlížeče kromě Internet Exploreru. Pokud na projektu potřebujete zapisovat CSS grid i pro tento prohlížeč, doporučuji se zkratce `grid` vyhnout.

Tvůrci nástroje [Autoprefixer](css-grid-msie.md) doporučují použití samotných vlastností nebo maximálně zkratky [`grid-template`](css-grid-template.md).

<!-- AdSnippet -->
