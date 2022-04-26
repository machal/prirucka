# CSS selektory

## Selektory prvků  (`tag`, `*`) {#prvky}

Tyto selektory vybírají prvky z DOMu podle názvu HTML značky.

### Selektor typu (názvu značky) {#prvky-typ}

- **Definice:** Obsahuje název prvku HTML a představuje instanci tohoto typu prvku ve stromu dokumentu.
- **Příklady:** `p`, `a`, `h1`. `h1` představuje všechny elementy `<h1>` v dokumentu.
- **Podpora:** [Plná](https://caniuse.com/mdn-css_selectors_type).

### Univerzální selektor {#prvky-univerzalni}

- **Definice:** Speciální varianta selektoru typu, který reprezentuje prvek libovolného typu.
- **Příklady:** `*` – představuje všechny elementy v dokumentu.
- **Podpora:** [Plná](https://caniuse.com/mdn-css_selectors_universal).

## Selektory atributů (`[attr]`) {#attr}

Selektory, které vybírají prvky podle atributů – jejich existence, shody s jejich celou hodnotou nebo s částí hodnoty.

### Selektory přítomnosti a hodnoty atributů {#attr-hodnota}

Vybíráme, zda na prvku HTML existuje atribut nebo detekujeme jeho hodnotu.

- **Definice:** Selektory, které detektují existenci atributu nebo jeho konkrétní hodnotu na HTML prvku.
- **Příklady:**
  - `h1[title]` – prvek `<h1>`, který má atribut `title` v _jakékoliv_ hodnotě.
  - `h1[title=Ahoj]` – atributový selektor přesného obsahu. Prvek `<h1>`, který má atribut `title` v hodnotě _přesně_  `Ahoj`.
  - `h1[title~=Ahoj]` – vlnovkový atributový selektor shody jedné hodnoty. Prvek `<h1>`, u něhož atribut `title` alespoň v jedné hodnotě _obsahuje_ řetězec `Ahoj`. Hodnoty pro potřeby selektory oddělují mezerami, takže `<h1 title="Ahoj světe">` selektor splňuje.
  - `h1[title|=Ahoj]` – selektor shody prefixu. Toto je zvláštní. Vybraná hodnota musí být buď přesně `Ahoj`, nebo začínat `Ahoj` bezprostředně následovaná znakem `-`. Dává to smysl asi jen v případě výběru jazykových kódů. Např. [hreflang|="en"] odpovídá řetězcům `en` i `en-US`.
- **Podpora:** [Plná](https://caniuse.com/mdn-css_selectors_attribute).

### Selektory podřetězců atributů {#attr-podretezce}

Zvolíme prvky podle shody s částí hodnoty atributu.

- **Definice:** Selektory pro hledání podřetězců v hodnotě atributu.
- **Příklady:**
  - `h1[title^=Ahoj]` – atributový selektor se stříškou reprezentuje prvek `<h1>` s atributem `title`, jehož hodnota _začíná_ `Ahoj`.
  - `h1[title$=Ahoj]` – atributový selektor s dolarem reprezentuje prvek `<h1>` s atributem `title`, jehož hodnota _končí_ `Ahoj`.
  - `h1[title*=Ahoj]` – atributový selektor s hvězdičkou reprezentuje prvek `<h1>` s atributem `title`, jehož hodnota _obsahuje_ `Ahoj`.
- **Podpora:** [Plná](https://caniuse.com/mdn-css_selectors_attribute).

Ve všech případech selektorů podřetězců platí, že pokud by hodnota byla prázdný řetězec, pak selektor nepředstavuje nic. Prostě se selektorem daný prvek nevybere.

## Přepínač case-sensitivity {#attr-case}

V tomto novém přepínači můžeme zapnout nebo vypnout citlivost na rozlišování malých a velkých písmen.

Standardně totiž selektory pro HTML nerozlišují malá nebo velká písmena. Tímto můžeme citlivost na rozdíl mezi nimi zapnout.

- **Definice:** Identifikátor `s` před uzavírací závorkou (`]`) značí „sensitive“, tedy citlivost na rozlišování velkých a malých písmen. Naopak identifikátor `i` znamená „insensitive“ tedy nerozlišování. V HTML pro vás bude užitečný jen ten první.
- **Příklady:**
  - `h1[title=Ahoj s]` – vybere prvky `<h1>` s atributem `title` v hodnotě `Ahoj`, ale nikoliv už `ahoj`.
- **Podpora:** [Plná](https://caniuse.com/css-case-insensitive).

## Selektor třídy (`.className`) {#attr-trida}

Jeden z nejznámějších a asi nejužitečnější selektor, který vybírá prkvy podle třídy.

- **Definice:** Představuje prvky patřící do třídy identifikované pomocí atributu `class` v HTML.
- **Příklady:**
  - `.heading` – všechny prvky, které mají atribut `class` nastavený na `heading`.
  - `h1.heading` – všechny prvky `<h1>`, které mají třídu `heading`.
  - `h1.heading.heading-large` – všechny prvky `<h1>`, které mají třídu `heading` a zároveň `heading-large`.
- **Podpora:** [Plná](https://caniuse.com/mdn-css_selectors_class).

Možná jste si všimli, že zápis `.heading` je ekvivalentní zápisu vlnovkového selektoru atributu (tj. [class~=heading]).

Na selektorech třídy je dnes postaveno skoro celé stylování webů, vzpomeňme například metodiky [OOCSS](https://www.vzhurudolu.cz/prirucka/oocss), [BEM](https://www.vzhurudolu.cz/prirucka/bem), ale i novější [utility CSS](https://www.vzhurudolu.cz/prirucka/css-utility).

## Selektor ID {#attr-id}

- **Definice:** Selektor ID představuje instanci prvku s identifikátorem, který odpovídá hodnotě v atributu `id`.
- **Příklady:**
  - `#heading` – prvek s hodnotou atributu `id` nastavenou na `heading`.
- **Podpora:** [Plná](https://caniuse.com/mdn-css_selectors_id) (včetně MSIE).

V HTML dokumentech je možné, aby jednomu ID selektoru odpovídalo více prvků, je to tak v pořádku z pohledu CSS selektoru, nikoliv ale samozřejmě z pohledu HTML sémantiky nebo přístupnosti.

# Jazykové pseudotřídy {#pseudo-jazyk}

### Pseudotřída směru (`:dir()`)

Selektor `:dir()` umožňuje webařům napsat selektor, které reprezentují prvek na základě směru určeného jazykem dokumentu.

- **Příklady:**
  - `h1:dir(ltr)` – prvek `<h1>` jehož směr vykreslení podle jazyka je nastavený jako `ltr`, tedy zleva doprava (left-to-right).
  - `h1:dir(rtl)` – prvek `<h1>` jehož směr vykreslení podle jazyka je nastavený jako `rtl`, tedy zprava doleva (right-to-left).
- **Podpora:** [Pouze Firefox](https://caniuse.com/css-dir-pseudo).

Zajímá vás rozdíl mezi pseudotřídou `:dir(ltr)` a selektorem atributu `[dir=ltr]`? Je tam. Vězí v tom, že `[dir=ltr]` se týká pouze daného atributu, zatímco pseudotřída `:dir(ltr)` využívá k porovnání znalosti sémantiky dokumentu ze strany prohlížeče.

Například v HTML se směr jazyka prvku dědí, takže potomek bez atributu `dir` bude mít stejnou směrovost jako jeho nejbližší předek s platným atributem `dir`. Pak by samozřejmě atributový selektor nefungoval.

<!-- 

- **Definice:** 
- **Příklady:** 
- **Podpora:** 

<div class="rwd-scrollable prop-table table-1-third f-6"  markdown="1">



| **Selektor**   | **Co dělá?**  | **Podpora** |
|----------------|---------------|:-----------:|
| ``        |  Selektor typu (názvu značky)         |
| ``        |  `padding-bottom`      |
| ``        |  `padding-left`        |
| ``        |  `padding-right`       |
| ``        |  `padding-top` a `padding-bottom`  |
| ``        |  `padding-left` a `padding-right`  |

</div>

 -->
