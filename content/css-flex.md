# CSS vlastnost flex: nastavení pružnosti položky flexboxu

Vlastnost `flex` nastaví výchozí velikost elementu a způsob, jakým se smí zvětšovat a zmenšovat v rámci flexboxového layoutu.

<figure>
<img src="../dist/images/original/vdlayout/css-flex.png" width="1600" height="900" alt="CSS vlastnost flex">
<figcaption markdown="1">
*Přednastavené hodnoty vlastnosti `flex`. Zapište si je za uši, jsou hodně důležité.*
</figcaption>
</figure>

<div class="related web-only" markdown="1">
- [Flexbox](css-flexbox.md)
</div>

Jde o zkratku pro všechny vlastnosti definující pružnost flex položky:

- [`flex-grow`](css-flex-grow.md) – faktor zvětšování.
- [`flex-shrink`](css-flex-shrink.md) – faktor smršťování.
- [`flex-basis`](css-flex-basis.md) – základní velikost.

Zapsáno obecně to vypadá takto:

```css
flex: 
  <flex-grow> <flex-shrink> <flex-basis>
```

Výchozí hodnota je následující:

```css
flex: 0 1 auto
```

- `flex-grow: 0` – nebude se nijak roztahovat do volného místa.
- `flex-shrink: 1` – smršťovat se bude stejně jako ostatní položky.
- `flex-basis: auto` – zabere prostor, který jí určí vlastní obsah.

Pokud chcete například nastavit, aby vaše položky zabíraly minimálně `150px` a v případě dostupnosti volného prostoru se rovnoměrně zvětšily a v případě zmenšení prostoru zase rovnoměrně smrštily, uděláte to takto:

```css
flex: 1 1 150px
```

## Používejte flex raději než konkrétní vlastnosti {#pouzivejte-flex}

Je dobré vědět, že autoři specifikace doporučují upřednostňovat zkratku `flex` proti konkrétním vlastnostem, které zastupuje.

<!-- AdSnippet -->

Důvodem mimojiné je, že zkratka umí inteligentně nastavovat výchozí hodnoty.

## Přednastavené hodnoty {#prednastavene}

Jednoslovné hodnoty se vám budou hodit asi nejčastěji:

<div class="rwd-scrollable f-6" markdown="1">

| Hodnota          | `flex-grow` | `flex-shrink` | `flex-basis` |
|------------------|:-----------:|:-------------:|:------------:|
| `flex: initial`  |     `0`     |     `1`       |   `auto`     |
| `flex: auto`     |     `1`     |     `1`       |   `auto`     |
| `flex: none`     |     `0`     |     `0`       |   `auto`     |
| `flex: 1`        |     `1`     |     `1`       |   `0`        |

</div>

A ještě podrobněji vysvětleno:

- `flex: auto`  
Odpovídá `flex: 1 1 auto` a dotčené položky se stanou plně pružnými s výchozím rozměrem podle svého obsahu. Asi nejčastější případ.
- `flex: none`  
Odpovídá `flex: 0 0 auto` a zcela ruší pružnost položky. Druhá nejčastější situace.
- `flex: initial`  
Zpětné nastavení výchozí hodnoty, tedy `flex: 0 1 auto`. Položky se tak s ubývajícím místem zmenšují, ale nezvětšují nad velikost svého obsahu.
- `flex: <kladné-číslo>`  
U jednočíselného zápisu pozor! `flex: 1` znamená `flex: 1 1 0`, takže se vám změní výchozí velikost položky a model pružnosti, jak jsme zmiňovali [u vlastnosti `flex-basis`](css-flex-basis.md).

Je také dobré vědět, že se flex položky nikdy nezmenší pod minimální šířku obsahu. Ta je dána šířkou nejdelšího slova nebo vnitřního elementu fixní šířky – třeba obrázku. Lze to změnit nastavením `min-width` nebo `min-height` na nějakou nízkou hodnotu.

Vyzkoušet si to opět můžete na našem interaktivním CodePenu.

CodePen: [cdpn.io/e/vYyKaEp](https://codepen.io/machal/pen/vYyKaEp?editors=0000)

## Podpora v prohlížečích {#podpora}

Internet Explorery ve verzích 10 a 11 tuto vlastnost implementovaly jako `-ms-flexbox`, ale s pomocí Autoprefixeru není nutné na toto myslet.

Všechny informace o podpoře jsou na [CanIUse](https://caniuse.com/mdn-css_properties_display_flex).

<!-- AdSnippet -->
