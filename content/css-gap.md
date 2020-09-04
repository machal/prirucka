# Vlastnost gap: Mezera mezi sloupci a řádky layoutu

Pomocí CSS vlastnosti `gap` můžeme definovat mezery v rozvrženích vytvářených pomocí CSS layoutů. Téhle mezeře se občas podle anglického originálu říká „gutter“.

Dřívější zápisy „děrovacích“ vlastností byly ve specifikaci definovány jinak, s prefixem `grid-`: `grid-row-gap`, `grid-column-gap` a `grid-gap` a zaměřené čistě jen na CSS Grid. Nyní jsou ale z této části specifikace vyjmuté a vyvíjené pod samostatným modulem CSS Box Alignment. Logicky totiž nespadají jen do možnosti definovat layout v mřížce, ale také ve flexboxu nebo vícesloupcovém layoutu.

Vlastnost `gap` je zkratkou pro vlastnosti `row-gap` a `column-gap`. Zapisuje se takto:

```css
gap: <hodnota row-gap> <hodnota column-gap>;
```

Jak je vidět, nastavujeme zde, jak je v CSS zvykem, nejprve svislý a pak až vodorovný směr. Druhá hodnota je volitelná. Pokud se neuvede, použije se jedna hodnota pro oba směry. To je ostatně železným zvykem ve stylech taky.

## Příklad {#priklad}

Vezměme ukázku se čtyřmi položkami v layoutu:

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
  gap: 2em 2em;
}
```

- `display: grid` zajistí zobrazení pomocí CSS gridu.
- Vlastnosti `grid-template-` definují podobu mřížky. Zde jde sloupce o rovnoměrné šířce.
- `gap: 2em 1em` je instrukce pro vložení mezery svisle a pak i vodorovně.

CodePen: [cdpn.io/e/JgXWod](https://codepen.io/machal/pen/JgXWod?editors=1100)

Totéž bychom samozřejme mohli zapsat v nezkrácených deklaracích následovně:

```css
.container {
  row-gap: 2em;
  column-gap: 2em;
}
```

### Raději gap než margin či padding (ale nic proti nim!) {#margin-padding}

Vlastnost `gap` je pro definování mezer v layoutu daleko efektivnější než `padding` nebo `margin`. Nijak se totiž nepočítá do šířky a ni výšky položky layoutu a také se vždy vykresluje jen mezi položkami samotnými. Je také pěkné si nastavit mezery mezi prvky v layoutu globálně, z toho důvodu právě vlastnost `gap` vznikla.

Je však samozřejmě možné a bezpečné zároveň nastavovat „gutter“ a také vnější i vnitřní okraje prvku. Toho se určitě nebojte.

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

Je to složitější, takže se to pokusíme zjednodušit.

Vezměme to nejdříve podle typu layoutu:

- CSS Grid: Prakticky plná podpora. Internet Explorer 11 vlastnost `gap` nepodporuje, ale to je možné dohnat [použitím nástroje Autoprefixer](css-grid-msie.md).
- Flexbox: Nepodporuje IE 11 a Safari, takže zde zatím nevidím použití vlastnosti jako rozumné.
- Vícesloupcový layout: Stejná situace jako u flexboxu.

A navíc – Safari zatím napodporuje hodnoty s `calc()` a procenty a to ani v CSS Gridu

Vlastnost `gap`, tedy bez prefixu `grid-` je podporována v Chrome 68+, Safari 11.2 Release 50+ a Opeře 54+.

Raději se ale dívejte na aktuální stav na CanIUse.com nebo MDN.

CanIUse: [caniuse.com/gap](https://caniuse.com/#search=gap)
