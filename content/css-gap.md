# Vlastnost gap: Mezera mezi sloupci a řádky layoutu

Pomocí CSS vlastnosti `gap` můžeme definovat mezery v rozvrženích vytvářených především pomocí [CSS gridu](css-grid.md). Téhle mezeře se občas podle anglického originálu říká „gutter“.

Vezměme příklad se čtyřmi položkami v layoutu:

```html
<div class="container">
  <p class="column">1</p>
  <p class="column">2</p>
  <p class="column">3</p>
  <p class="column">4</p>
</div>
```

Layout v CSS definujeme následovně:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 10px;
}
```

- `display: grid` zajistí zobrazení pomocí [CSS gridu](css-grid.md).
- Vlastnosti `grid-template-` definují podobu mřížky. Zde dva sloupce o šířce `50%` a dva řádky s automatickou výškou, určenou obsahem.
- `gap: 10px` je instrukce pro vložení mezery zezhora i zezdola.

CodePen: [cdpn.io/e/JgXWod](https://codepen.io/machal/pen/JgXWod?editors=1100)

### Raději gap než margin či padding {#margin-padding}

Vlastnost `gap` je pro definování mezer v layoutu daleko efektivnější než `padding` nebo `margin`. Nijak se totiž nepočítá do šířky a ni výšky položky layoutu a také se vždy vykresluje jen mezi položkami samotnými.

### Zkratka {#zkratka}

Jde o zkratku (shorthand) pro vlastnosti `row-gap` a `column-gap`. Pokud bychom chtěli definovat různé mezery pro vodorovný a svislý směr, zapíšeme to takto:

```css
.container {
  row-gap: 10px;
  column-gap: 20px;
}
```

CodePen: [cdpn.io/e/JgXWod](https://codepen.io/machal/pen/JgXWod?editors=1100)

Alternativně pak zkratkou `gap`:

```css
.container {
  gap: 10px 20px;
}
```

## Možné hodnoty {#hodnoty}

Následuje přehled možných hodnot vlastnosti. Čistě pro inspiraci:

```css
/* Jednotné: */
gap: 10px;
gap: 1rem;

/* Různé pro svislý i vodorovný směr: */
gap: 10px 20px;
gap: 5% 1rem;

/* Použití funkce calc(): */
gap: calc(10% + 20px);
```

## Podpora v prohlížečích {#podpora}

Internet Explorer 11 vlastnost `gap` nepodporuje, ale to je možné dohnat [použitím nástroje Autoprefixer](css-grid-msie.md).

Je také dobré vědět, že dřívější zápisy „děrovacích“ vlastností byly ve specifikaci definovány jinak, s prefixem `grid-`: `grid-row-gap`, `grid-column-gap` a `grid-gap`. Nyní jsou také vyjmuté ze specifikace CSS gridu a vyvíjené pod [CSS Box Alignment Module Level 3](https://www.w3.org/TR/css-align-3/). Logicky totiž nespadají jen do možnosti definovat layout v mřížce, ale také do [flexboxu](css3-flexbox.md) nebo [vícesloupcového layoutu](css3-multicolumn.md).

Vlastnost `gap`, tedy bez prefixu `grid-` je podporována v Chrome 68+, Safari 11.2 Release 50+ a Opeře 54+.

