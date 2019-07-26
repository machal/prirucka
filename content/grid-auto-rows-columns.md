# Vlastnosti grid-auto-rows a grid-auto-columns: definice implicitního gridu

Vlastnosti `grid-auto-rows` a `grid-auto-columns` použijete pro tvorbu implicitního, tedy výslovně nedefinovaného [gridu v CSS](css-grid.md).

Jsou tedy doplňkem vlastností [`grid-template-rows` a `grid-template-columns`](grid-template-rows-columns.md), které naopak slouží pro vytváření gridu explicitního, tedy autorsky definovaného.

Použijete jej hlavně pro řádky (`grid-auto-rows`), a to v případech, kdy máte v HTML neznámý počet položek. 

## Možné hodnoty {#hodnoty}

Vlastnostem `grid-auto-rows` a `grid-auto-columns` můžete přiřazovat stejné hodnoty jako jejich explicitním kolegyním – [`grid-template-rows` a `grid-template-columns`](grid-template-rows-columns.md).

### Klíčová slova

<!-- TODO:
- Dopracovat podle https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns 
- Více ukázek, přidat všude, odkazy na klíčová slova atd. 
-->

```css
grid-auto-columns: min-content;
grid-auto-columns: max-content;
grid-auto-columns: auto;
```

### Jedna hodnota pro všechny sloupce (nebo řádky)

```css
grid-auto-columns: 100px;
grid-auto-columns: 10%;
grid-auto-columns: 1fr;
```

### Více hodnot, které se při větším počtu sloupců opakují

```css
grid-auto-columns: 100px 200px;
grid-auto-columns: 10% 33.3%;
grid-auto-columns: 1fr minmax(100px, auto);
```

Jak ale onen implicitní grid vzniká a kde je možné tyto vlastnosti využít?

## Příklad: Více položek v gridu než je definovaných řádků {#priklad-radky}

Myslím, že vlastnosti `grid-auto-` častěji použijete pro řádky layoutu, tedy `grid-auto-rows`. Může se vám totiž snadno stát, že v mřížce je předem daný počet sloupečků, ale neznámý počet položek a tedy řádků:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

Vlastnost `grid-template-rows` umí definovat rozměry známých řádků. Nezvládá ovšem definovat opakování hodnot.

Pokud bychom chtěli střídat výšku `100px` a `200px` pro liché a sudé řádky, přičemž počet řádků neznáme, je tu vlastnost `grid-auto-rows`:

```css
.container {
  grid-auto-rows: 100px 200px;
}  
```

CodePen: [cdpn.io/e/PMGJpa](https://codepen.io/machal/pen/PMGJpa?editors=1100)

## Příklad: Umístění položky mimo explicitní grid {#priklad-umisteni}

Dalším možností, jak může explicitní grid vzniknout, je umístění položky zcela mimo definovanou mřížku. Vezměme že ji definujeme jako 2 × 2:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
}
```

Jenže v HTML máme čtyři a ne šest položek. A co víc, pátou a šestou položku umísťujeme na neexistující pozice v mřížce:

```css
.column.fifth {
  grid-column: 3;
  grid-row: 1;
}

.column.sixth {
  grid-column: 3;
  grid-row: 2;
}
```

Prohlížeč nám při pokusu o umístění na ve třetím sloupci, tedy na pozici nedefinovanou explicitním gridem, grid rozšíří. Ale rozšíří je gridem implicitním. Výchozí rozměry prvků nám tedy zřejmě nebudou vyhovovat:

<!-- TODO obrázek bez grid-auto-columns -->

Opravíme to až touto deklarací:

```css
.container {
  grid-auto-columns: 1fr;
}
```

<!-- TODO obrázek s grid-auto-columns -->

CodePen: [cdpn.io/e/ymazjy](https://codepen.io/machal/pen/ymazjy?editors=1100)

## Podpora v prohlížečích {#podpora}

Vlastnosti `grid-auto-rows` a `grid-auto-columns` podporuje kdejaký prohlížeč, včetně Internet Exploreru od verze 10

Jediný problém je ve Firefoxu, který v době psaní textu nepřijímá zápis vlastnosti s více hodnotami (např `grid-auto-columns:100px 150px`). Viz [řešený bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1339672).
