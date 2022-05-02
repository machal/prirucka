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

### Přepínač case-sensitivity {#attr-case}

V tomto novém přepínači můžeme zapnout nebo vypnout citlivost na rozlišování malých a velkých písmen.

Standardně totiž selektory pro HTML nerozlišují malá nebo velká písmena. Tímto můžeme citlivost na rozdíl mezi nimi zapnout.

- **Definice:** Identifikátor `s` před uzavírací závorkou (`]`) značí „sensitive“, tedy citlivost na rozlišování velkých a malých písmen. Naopak identifikátor `i` znamená „insensitive“ tedy nerozlišování. V HTML pro vás bude užitečný jen ten první.
- **Příklady:**
  - `h1[title=Ahoj s]` – vybere prvky `<h1>` s atributem `title` v hodnotě `Ahoj`, ale nikoliv už `ahoj`.
- **Podpora:** [Plná](https://caniuse.com/css-case-insensitive).

### Selektor třídy (`.className`) {#attr-trida}

Jeden z nejznámějších a asi nejužitečnější selektor, který vybírá prkvy podle třídy.

- **Definice:** Představuje prvky patřící do třídy identifikované pomocí atributu `class` v HTML.
- **Příklady:**
  - `.heading` – všechny prvky, které mají atribut `class` nastavený na `heading`.
  - `h1.heading` – všechny prvky `<h1>`, které mají třídu `heading`.
  - `h1.heading.heading-large` – všechny prvky `<h1>`, které mají třídu `heading` a zároveň `heading-large`.
- **Podpora:** [Plná](https://caniuse.com/mdn-css_selectors_class).

Možná jste si všimli, že zápis `.heading` je ekvivalentní zápisu vlnovkového selektoru atributu (tj. [class~=heading]).

Na selektorech třídy je dnes postaveno skoro celé stylování webů, vzpomeňme například metodiky [OOCSS](https://www.vzhurudolu.cz/prirucka/oocss), [BEM](https://www.vzhurudolu.cz/prirucka/bem), ale i novější [utility CSS](https://www.vzhurudolu.cz/prirucka/css-utility).

### Selektor ID {#attr-id}

- **Definice:** Selektor ID představuje instanci prvku s identifikátorem, který odpovídá hodnotě v atributu `id`.
- **Příklady:**
  - `#heading` – prvek s hodnotou atributu `id` nastavenou na `heading`.
- **Podpora:** [Plná](https://caniuse.com/mdn-css_selectors_id) (včetně MSIE).

V HTML dokumentech je možné, aby jednomu ID selektoru odpovídalo více prvků, je to tak v pořádku z pohledu CSS selektoru, nikoliv ale samozřejmě z pohledu HTML sémantiky nebo přístupnosti.

## Jazykové pseudotřídy {#pseudo-jazyk}

### Pseudotřída směru (`:dir()`)

Pseudotřída `:dir()` umožňuje webařům napsat selektor, které reprezentují prvek na základě směru určeného jazykem dokumentu.

- **Příklady:**
  - `h1:dir(ltr)` – prvek `<h1>` jehož směr vykreslení podle jazyka je nastavený jako `ltr`, tedy zleva doprava (left-to-right).
  - `h1:dir(rtl)` – prvek `<h1>` jehož směr vykreslení podle jazyka je nastavený jako `rtl`, tedy zprava doleva (right-to-left).
- **Podpora:** [Pouze Firefox](https://caniuse.com/css-dir-pseudo).

Zajímá vás rozdíl mezi pseudotřídou `:dir(ltr)` a selektorem atributu `[dir=ltr]`? Je tam. Vězí v tom, že `[dir=ltr]` se týká pouze daného atributu, zatímco pseudotřída `:dir(ltr)` využívá k porovnání znalosti sémantiky dokumentu ze strany prohlížeče.

Například v HTML se směr jazyka prvku dědí, takže potomek bez atributu `dir` bude mít stejnou směrovost jako jeho nejbližší předek s platným atributem `dir`. Pak by samozřejmě atributový selektor nefungoval.

### Pseudotřída jazyka (`:lang()`)

Pseudotřída `:lang()` umožňuje psát CSS selektory citlivé na jazyk dokumentu.

- **Příklady:**
  - `h1:lang(cs)` – prvek `<h1>`, který má nastavený (nebo podědí) český jazyk.
  - `:lang(fr-be) > h1` – prvek `<h1>` uvnitř dokumentu v belgické francouzštině.
- **Podpora:** [Plná](https://caniuse.com/mdn-css_selectors_lang) (včetně MSIE).

Mimochodem, v HTML je možné jazyk pro dokument nebo prvky dokumentu nastavit kombinací atributu `lang`, informací ze značek `meta` a případně také z hlaviček HTTP.

Rozdíl mezi pseudotřídou `:lang(cs)` a atributovým selektorem `[lang|=cs]` spočívá v tom, že atributový selektor provádí pouze porovnání s atributem `lang` u elementu, zatímco pseudotřída `:lang()` detekuje nastavení jazyka jakýmkoliv způsobem.

Další rozdíl je v tom, že atributový selektor (`[lang|=en]`) funguje jako wildcard a umí tedy rozpoznat všechny jazyky začínající na `en`.

## Pseudotřídy polohy {#pseudo-poloha}

### Pseudotřída hypertextového odkazu (`:any-link`) {#any-link}

Pseudotřída `:any-link` v selektoru představuje jakýkoliv prvek `<a>`, `<area>` nebo `<link>` s atributem `href`.

- **Podpora:** [Plná](https://caniuse.com/css-any-link) (s výjimkou MSIE).

### Pseudotřídy pro historii odkazů (`:link` a `:visited`) {#link-visited}

Pseudotřídy poskytují možnost vybrat navštívené a nenavštívené odkazy:

- Pseudotřída `:link` se vztahuje na odkazy, které ještě nebyly navštíveny.
- Pseudotřída `:visited` se uplatní, jakmile byl odkaz uživatelem navštíven.

Jak je známo, po určité době mohou prohlížeče vrátit navštívený odkaz do nenavštíveného stavu.

- **Podpora:** Plná, včetně MSIE: [`:link`](https://caniuse.com/mdn-css_selectors_link) a [`:visited`](https://caniuse.com/mdn-css_selectors_visited).

### Pseudotřída cíle: (`:target`)

Adresa URL dokumentu může odkazovat na konkrétní prvky v dokumentu prostřednictvím fragmentu adresy (`example.cz/#kotva`). Prvky, na které se takto odkazuje, jsou pak „cílovými prvky dokumentu“, jinak též kotvami.

Právě aktivní cíle pro kotvy můžeme stylovat díky pseudotřídě `:target`:

```html
<h1 id="kotva">Ahoj</h1>
```

```css
h1:target {
  background: yellow;
}
```

V případě URL `example.cz/#kotva` se pak prvek `<h1>` podbarví žlutou.

**Podpora:** [Plná](https://caniuse.com/mdn-css_selectors_target) (včetně MSIE).

## Pseudotřídy akcí uživatele {#pseudo-action}

Existuje několik pseudotříd uživatelských akcí pro výběr prvku, se kterým interaguje uživatel. Prvek může odpovídat několika takovým pseudotřídám současně.

### Pseudotřída najetí ukazatelem (`:hover`) {#hover}

Pomocí `:hover` vybíráme prvky, na které uživatel najede ukazatelem myši na prvek nebo jeho potomka. V moderních prohlížečích to je použitelné jak pro odkazy, tak pro běžné prvky, viz CodePen. [cdpn.io/e/vYdYbjx](https://codepen.io/machal/pen/vYdYbjx)

```css
/* Prvek zežloutne jen v momentě najetí myši na něj */
.box:hover {
  background: yellow;
}
```

### Pseudotřída aktivace prvku (`:active`) {#active}

Umožňuje vybrat prvky, na které uživatel klikne nebo je aktivuje na klávesnici. Platí to jen mezi okamžiky, kdy uživatel stiskne a pak uvolní aktivační tlačítko, takže třeba primární tlačítko myši.

V moderních prohlížečích funguje na všech prvcích, i když pseudotřídu `:active` standard HTML [omezuje jen na interakční prvky](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-active) typu `<a>` nebo [`<button>`](button.md). [cdpn.io/e/rNJNPqB](https://codepen.io/machal/pen/rNJNPqB)

```css
/* Prvek zežloutne jen v momentě kliknutí na něj */
.box:active {
  background: yellow;
}
```

### Pseudotřída zaměření vstupu (`:focus`) {#focus}

Pseudotřída `:focus` platí, dokud je prvek zaměřený (tedy je na něm „fokus“) a přijímá vstupy z klávesnice nebo myši.

Toto funguje jen na takzvaně [zaměřitelných prvcích](https://html.spec.whatwg.org/multipage/interaction.html#focusable-area), tedy těch, které mohou vyvolávat akci (`<a>`, `<button>`…) nebo mají roli v navigační struktuře (např. pomocí atributu `tabindex`). [cdpn.io/e/NWyWooO](https://codepen.io/machal/pen/NWyWooO)

```css
/* Pokud na prvek dojdu navigací pomocí Tab nebo na něj kliknu, tvale zežloutne */
.box:focus {
  background: yellow;
}
```

### Pseudotřída indikovaného zaměření (`:focus-visible`) {#focus-visible}

Pseudotřída `:focus-visible` platí, když platí `:focus` (prvek je zaměřený) a zároveň prohlížeč usoudí, že je vhodné tento prvek při zaměření zvýraznit.

Prakticky vzato: `:focus` vám prvek zvýrazní jak při klikání myši, tak při najetí pomocí klávesy Tab. `:focus-visible` je výhodnější v tom, že u některých prvků vynechá zvýraznění při najetí myši.

Tady bychom si mohli přímo vložit příklad.

Máme dva odkazové boxíky:

```css
/* Zvýrazní se při kliknutí i při najetí Tab: */
.box-1:focus {
  outline: 2px solid blue;
}

/* Zvýrazní se jen při najetí Tab: */
.box-2:focus-visible {
  outline: 2px solid red;
}
```

Výhodné je to proto, že v uživatelských rozhraních často nechceme razantně zvýrazňovat při klikání, ale pro lepší přístupnost chceme prvky zvýrazňovat při navigaci klávesou Tab.

CodePen: [cdpn.io/e/wvyvNbE](https://codepen.io/machal/pen/wvyvNbE)

**Podpora**: [Plná](https://caniuse.com/css-focus-visible) (s výjimkou MSIE)

### Pseudotřída zaměření na rodiče (`:focus-within`) {#focus-within}

Pseudotřída `:focus-within` se vztahuje na jakýkoli prvek, pro který platí pseudotřída `:focus`, a také na prvek jehož potomek podmínky pro přiřazení `:focus` splňuje.

```css
/* Rodič bude mít červenou outline, pokud je focus na potomka: */
.container:focus-within {
  outline: 2px solid red;
}
```

CodePen: [cdpn.io/e/wvyvNbE](https://codepen.io/machal/pen/wvyvNbE)

Vím, že se to používá pro [uchování otevírání různých meníček](https://www.scottohara.me/blog/2017/05/14/focus-within.html) a tak dále.

**Podpora**: [Plná](https://caniuse.com/css-focus-within) (s výjimkou MSIE)

## Nepodporováno {#nepodporovano}

- `:target-within` - podobně jako `:target` vybere cíl kotvy a navíc také každý prvek, jehož potomek je cíl kotvy a tedy splňuje podmínky výběru pro `:target`.
- `:local-link` – představuje odkaz, jehož cílová absolutní adresa URL se shoduje s adresou URL vlastního dokumentu. Odkazuje tedy sám na sebe.  Zápis `nav :local-link {text-decoration: none}` by pak umožnil zakázat podtržení odkazu, který vede na aktuální URL.


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
