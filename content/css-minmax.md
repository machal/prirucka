# CSS funkce minmax() a klíčová slova min-content a max-content

Funkce (nebo přesněji řečeno „zápis“) `repeat()` a navázaná klíčová slova slouží k definování rozsahu šířky nebo výšky pro sloupce nebo řádky mřížky v [CSS gridu](css-grid.md).

Pro plnohodnotné používání mřížky je to skoro nepostradatelné, ale je v tom řada nejasností, záludností a jiných opičáren. Pojďme se na ně v tomto textu podívat.

<!-- AdSnippet -->

Možných zápisů je více:

| Ukázka                       | Typ zápisu                  |
|------------------------------|-----------------------------|
| `minmax(100px, 200px)`       | [Statický rozsah](#zaklady) |
| `minmax(100px, 1fr)`         | [Flexibilní rozsah](#fr)    |
| `minmax(100px, max-content)` | [max-content](#max-content) |
| `minmax(min-content, 200px)` | [min-content](#min-content) |
| `minmax(auto, auto)`         | [auto](#auto) |

Projdeme si teď vše podrobně na příkladech.

## Základy: Statický rozsah {#zaklady}

Zápis `minmax()` se tváří jako funkce se dvěma parametry: minálním a maximálním rozměrem buněk mřížky layoutu:

```css
.container {
  grid-template-columns: minmax(100px, 200px) 1fr 1fr;
}
```

Tohle je asi jednoduché, že?

- První sloupeček se nikdy nezmenší pod `100px` a nepřesáhne šířky `200px`. Důvodem je zápis `minmax(100px, 1fr)`.
- Další dva si rovnoměrné rozdělí šířku na tři části.

CodePen: [cdpn.io/e/wvwbmGV](https://codepen.io/machal/pen/wvwbmGV?editors=1100)

### Co když… pár specifičností zápisu minmax() {#co-kdyz}

Pokud byste zápis `minmax()` chtěli mermomocí rozbít, prohlížeče by se podle [specifikace](https://www.w3.org/TR/css-grid-1/#valdef-grid-template-columns-minmax) měly chovat následovně:

- Pokud uvedete vyšší minimum než maximum (např. `minmax(200px, 100px)`), maximum se bude ignorovat a prohlížeče budou počítat jen s minimem.
- Jako minima zatím nemá smysl uvádět zlomkovou jednotku `fr`. Ale v budoucí verzi specifikace by se to prý mohlo změnit.

## Flexibilní rozsah (použití jednotky fr) {#fr}

Příklad pozměníme:

```css
.container {
  grid-template-columns: minmax(100px, 1fr) 1fr 1fr;
}
```

Uvedený příklad asi opět nebude žádná velká věda, protože [zlomkovou jednotku `fr`](css-jednotka-fr.md) už známe.

- Všechny sloupečky si rovnoměrné rozdělí šířku na tři části.
- První sloupeček se ale nikdy nezmenší pod `100px`. Důvodem je zápis `minmax(100px, 1fr)`.

CodePen: [cdpn.io/e/qBWGooy](https://codepen.io/machal/pen/qBWGooy?editors=1100)

## Klíčové slovo max-content {#max-content}

`max-content` dává instrukci, aby se buňka nezvětšovala nad maximální velikost obsahu:

```css
.container {
  grid-template-columns: minmax(100px, max-content) 1fr 1fr;
}
```

Instrukce pro vykreslení prvního sloupce mřížky zní:

- Nikdy nebudeš užší než `100px`.
- Nikdy se nerozšíříš nad rámec maxilání šířky obsahu (`max-content`).

<!-- AdSnippet -->

Co je ale ta maximální velikost obsahu? Je to různé. U responzivních obrázků například jejich maximální pixelová velikost. Textový obsah se může zvětšovat, dokud slova stačí. Však si to zkuste na příkladu.

CodePen: [cdpn.io/e/wvwbmQM](https://codepen.io/machal/pen/wvwbmQM?editors=1100)

Pojďme si to ještě ukázat na příkladu s obrázkem. Kód je totožný jako v předchozím demíčku:

CodePen: [cdpn.io/e/eYOaMvv](https://codepen.io/machal/pen/eYOaMvv?editors=1100)

Obrázek nebude ve stopě mřížky definované jako `minmax(100px, max-content)` nikdy menší než `100px` a větší než maximální velikost, tedy `400px`, které jsou zde definované v atributu `width` značky `<img>`.

## Klíčové slovo min-content {#min-content}

Opačně funguje `min-content`. Při použití ve funkci `minmax()` přikazuje, aby se buňka nikdy nezmenšila pod minimální velikost obsahu:

```css
.container {
  grid-template-columns: minmax(min-content, 200px) 1fr 1fr;
}
```

Co je minimální velikost obsahu? U textu délka nejdelšího slova, u responzivních obrázků a jiných vkládaných médií s pružnými rozměry žádnou minimální šířku či výšku nemáme.

CodePen: [cdpn.io/e/wvwbmGV](https://codepen.io/machal/pen/wvwbmGV?editors=1100)

Možné je samozřejmě i použití jak `min-content`, tak `max-content`: `minmax(min-content, max-content)`:

CodePen: [cdpn.io/e/ZEzNxmX](https://codepen.io/machal/pen/ZEzNxmX?editors=1100)

Dotčená stopa layoutu se pak nezmenší pod minimální a nezvětší nad maximální šířku či výšku obsahu.

## Klíčové slovo auto {#auto}

V hodnotách zápisu `minmax()` je možné uvádět i klíčové slovo `auto`, které velmi dobře známe odjinud z CSS. Chová se to skoro tak, jak bychom očekávali:

- Pokud je uvedený v druhé hodnotě, chová se stejně jako `max-content`. Takže zápis `minmax(100px, auto)` bude mít stejný dopad jako `minmax(100px, max-content)`.
- Jakmile jej však uvedeme v druhé hodnotě, může přebírat hodnotu vlastností `min-width` nebo `min-height`. Pokud ty nejsou definované, chová se stejně jako `min-content`, a tedy zápis `minmax(auto, 200px)` bude ekvivalentní `minmax(min-content, 200px)`.

Klíčové slovo `auto` si ještě vyzkoušíme na příkladu. Mřížku definujeme následovně:

```css
.container {
  grid-template-columns: minmax(auto, auto) 1fr 1fr;
}
```

CodePen: [cdpn.io/e/eYOaXyW](https://codepen.io/machal/pen/eYOaXyW?editors=1100)

Uvnitř první buňky máme obrázek, který má pružné rozměry (definované pomocí `max-width: 100%; height: auto;`). Použítím `minmax(auto, auto)` prohlížeči říkáme: Sloupec mřížky se smí zmenšit jen na minimální obsahovou velikost a zvětšit na maximální.

Jenže u vkládaných pružných médií není rozměrové minimum a maximum nijak definováno. My to ale můžeme udělat. Maximum v CodePenu definuje už uvedeným atributem `width="400"` v HTML. A minimum? Tady se dostáváme k použití vlastnosti `min-width`, kterou zde nastavujeme na `100px`.

### Co když je ve stopě mřížky buněk více? {#vice-bunek}

Považuji zde za vhodné připomenout, že naše příklady jsou hodně zjednodušené, protože v daném sloupci rozvržení pomocí CSS Gridu máme vždy jen jednu obsahovou buňku. Jak se ovšem bude `minmax()` chovat v případě použití u sloupečků (nebo řádků), kde je buněk více? U maxima vezme vždy tu nejmenší velikost z obsahu všech buňek, u minima pak největší.

Prostě vytvoří nejmenší možný rozsah rozměrů všech obsahů dotčených buněk. Tak, aby se žádný z prvků mřížky nedeformoval pod své obsahové minimum nebo nad své maximum. To je fér, ne?

<!-- AdSnippet -->
