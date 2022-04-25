# CSS selektory

## Selektory prvků {#prvky}

Vybírají podle prvků ze stromu DOM, jinak řečeno podle HTML značek.

### Selektor typu (názvu značky) (`tag`) {#prvky-typ}

- **Definice:** Obsahuje název prvku HTML a představuje instanci tohoto typu prvku ve stromu dokumentu.
- **Příklady:** `p`, `a`, `h1`. `h1` představuje všechny elementy `<h1>` v dokumentu.
- **Podpora:** [Plná](https://caniuse.com/mdn-css_selectors_type).

### Univerzální selektor (`*`) {#prvky-univerzalni}

- **Definice:** Speciální varianta selektoru typu, který reprezentuje prvek libovolného typu.
- **Příklady:** `*` – představuje všechny elementy v dokumentu.
- **Podpora:** [Plná](https://caniuse.com/mdn-css_selectors_universal).

## Selektory atributů (`[attr]`) {#attr}

### Selektory přítomnosti a hodnoty atributů {#attr-hodnota}

- **Definice:** Selektory, které detektují existenci atributu nebo jeho konkrétní hodnotu na HTML prvku.
- **Příklady:**
  - `h1[title]` – prvek `<h1>`, který má atribut `title` v _jakékoliv_ hodnotě.
  - `h1[title=Ahoj]` – atributový selektor přesného obsahu. Prvek `<h1>`, který má atribut `title` v hodnotě _přesně_  `Ahoj`.
  - `h1[title~=Ahoj]` – atributový selektor shody jedné hodnoty. Prvek `<h1>`, u něhož atribut `title` alespoň v jedné hodnotě _obsahuje_ řetězec `Ahoj`. Hodnoty pro potřeby selektory oddělují mezerami, takže `<h1 title="Ahoj světe">` selektor splňuje.
  - `h1[title|=Ahoj]` – atributový selektor shody u jazyka. Toto je zvláštní. Vybraná hodnota musí být buď přesně `Ahoj`, nebo začínat `Ahoj` bezprostředně následovaným znakem `-`. Dává to smysl asi jen v případě výběru jazykových kódů. Např. [hreflang|="en"] odpovídá řetězcům `en` i `en-US`.
- **Podpora:** [Plná](https://caniuse.com/mdn-css_selectors_attribute).

## Selektory podřetězců atributů {#attr-podretezce}

- **Definice:** Selektory pro hledání podřetězců v hodnotě atributu.
- **Příklady:**
  - `h1[title^=Ahoj]` – atributový selektor se stříškou reprezentuje prvek `<h1>` s atributem `title`, jehož hodnota _začíná_ `Ahoj`.
  - `h1[title$=Ahoj]` – atributový selektor s dolarem reprezentuje prvek `<h1>` s atributem `title`, jehož hodnota _končí_ `Ahoj`.
  - `h1[title*=Ahoj]` – atributový selektor s hvězdičkou reprezentuje prvek `<h1>` s atributem `title`, jehož hodnota _obsahuje_ `Ahoj`.
- **Podpora:** [Plná](https://caniuse.com/mdn-css_selectors_attribute).

Ve všech případech selektorů podřetězců platí, že pokud by hodnota byla prázdný řetězec, pak selektor nepředstavuje nic. Prostě se selektorem daný prvek nevybere.

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
