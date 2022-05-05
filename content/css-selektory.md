# CSS selektory

Tímto textem v příručce doplňuji mezery, které na Vzhůru dolů mám v oblasti pokrytí základů CSS. Při rešerši jsem si všiml, že takto komplexně se selektory snad žádný český text nezabývá.

Jasně, cílím zde především na začátečníky, ale myslím, že osvěžit si tohle téma neuškodí ani pokročilým. Pojďme se nejprve podívat na tabulkové shrnutí toho, co v článku najdete.

<!-- TODO tabulka -->

<!-- TODO Codepen -->

## Selektory prvků  (`tag`, `*`) {#prvky}

Tyto selektory vybírají prvky z DOMu podle názvu HTML značky.

### Selektor typu (názvu značky) {#prvky-typ}

Obsahuje název prvku HTML a představuje instanci tohoto typu prvku ve stromu dokumentu.

Další příklady:

- `h1` představuje všechny elementy `<h1>` v dokumentu.

### Univerzální selektor {#prvky-univerzalni}

Speciální varianta selektoru typu, který reprezentuje prvek libovolného typu.

Další příklady:

- `*` – představuje všechny elementy v dokumentu.

## Selektory atributů (`[attr]`) {#attr}

Selektory, které vybírají prvky podle atributů – jejich existence, shody s jejich celou hodnotou nebo s částí hodnoty.

### Selektory přítomnosti a hodnoty atributů {#attr-hodnota}

Vybíráme, zda na prvku HTML existuje atribut nebo detekujeme jeho hodnotu.

Selektory, které detektují existenci atributu nebo jeho konkrétní hodnotu na HTML prvku.

Typy selektorů atributů:

- `h1[title]` – prvek `<h1>`, který má atribut `title` v _jakékoliv_ hodnotě.
- `h1[title=Ahoj]` – atributový selektor přesného obsahu. Prvek `<h1>`, který má atribut `title` v hodnotě _přesně_  `Ahoj`.
- `h1[title~=Ahoj]` – vlnovkový atributový selektor shody jedné hodnoty. Prvek `<h1>`, u něhož atribut `title` alespoň v jedné hodnotě _obsahuje_ řetězec `Ahoj`. Hodnoty pro potřeby selektory oddělují mezerami, takže `<h1 title="Ahoj světe">` selektor splňuje.
- `h1[title|=Ahoj]` – selektor shody prefixu. Toto je zvláštní. Vybraná hodnota musí být buď přesně `Ahoj`, nebo začínat `Ahoj` bezprostředně následovaná znakem `-`. Dává to smysl asi jen v případě výběru jazykových kódů. Např. [hreflang|="en"] odpovídá řetězcům `en` i `en-US`.

### Selektory podřetězců atributů {#attr-podretezce}

Zvolíme prvky podle shody s částí hodnoty atributu. Jde o selektory pro hledání podřetězců v hodnotě atributu.

Typy atributových selektorů podřetězců:

- `h1[title^=Ahoj]` – atributový selektor se stříškou reprezentuje prvek `<h1>` s atributem `title`, jehož hodnota _začíná_ `Ahoj`.
- `h1[title$=Ahoj]` – atributový selektor s dolarem reprezentuje prvek `<h1>` s atributem `title`, jehož hodnota _končí_ `Ahoj`.
- `h1[title*=Ahoj]` – atributový selektor s hvězdičkou reprezentuje prvek `<h1>` s atributem `title`, jehož hodnota _obsahuje_ `Ahoj`.

Ve všech případech selektorů podřetězců platí, že pokud by hodnota byla prázdný řetězec, pak selektor nepředstavuje nic. Prostě se selektorem daný prvek nevybere.

### Přepínač case-sensitivity {#attr-case}

V tomto novém přepínači můžeme zapnout nebo vypnout citlivost na rozlišování malých a velkých písmen.

Standardně totiž selektory pro HTML nerozlišují malá nebo velká písmena. Tímto můžeme citlivost na rozdíl mezi nimi zapnout.

Identifikátor `s` před uzavírací závorkou (`]`) značí „sensitive“, tedy citlivost na rozlišování velkých a malých písmen. Naopak identifikátor `i` znamená „insensitive“ tedy nerozlišování. V HTML pro vás bude užitečný jen ten první.

Příklad:

- `h1[title=Ahoj s]` – vybere prvky `<h1>` s atributem `title` v hodnotě `Ahoj`, ale nikoliv už `ahoj`.

Mimochodem, i tenhle relativně nový přepínač podporují všechny moderní prohlížeče. Viz [CanIUse.com](https://caniuse.com/css-case-insensitive).

### Selektor třídy (`.className`) {#attr-trida}

Jeden z nejznámějších a asi nejužitečnější selektor, který vybírá prkvy podle třídy.

Představuje prvky patřící do třídy identifikované pomocí atributu `class` v HTML.

Příklad:

```html
<div class="box">
  <p class="a"><span class="a">…</span></p>
  <p class="b"><span class="a">…</span></p>
  <p class="c"><span class="a">…</span></p>
</div>
```

Selektor `.a` vybere jak `<p class="a">`, tak všechny `<span class="a">`.

Další příklady:

- `.heading` – všechny prvky, které mají atribut `class` nastavený na `heading`.
- `h1.heading` – všechny prvky `<h1>`, které mají třídu `heading`.
- `h1.heading.heading-large` – všechny prvky `<h1>`, které mají třídu `heading` a zároveň `heading-large`.

Možná jste si všimli, že zápis `.heading` je ekvivalentní zápisu vlnovkového selektoru atributu (tj. [class~=heading]).

Na selektorech třídy je dnes postaveno skoro celé stylování webů, vzpomeňme například metodiky [OOCSS](https://www.vzhurudolu.cz/prirucka/oocss), [BEM](https://www.vzhurudolu.cz/prirucka/bem), ale i novější [utility CSS](https://www.vzhurudolu.cz/prirucka/css-utility).

### Selektor ID {#attr-id}

Selektor ID představuje instanci prvku s identifikátorem, který odpovídá hodnotě v atributu `id`.

Příklad:

```html
<div class="box">
  <p class="a"><span class="a" id="first">…</span></p>
  <p class="b"><span class="a">…</span></p>
  <p class="c"><span class="a">…</span></p>
</div>
```

Selektor `.a#first` vybere jen `<span class="a" id="first">`.

V HTML dokumentech je možné, aby jednomu ID selektoru odpovídalo více prvků, je to tak v pořádku z pohledu CSS selektoru, nikoliv ale samozřejmě z pohledu HTML sémantiky nebo přístupnosti.

## Kombinátory {#kombinatory}

### Kombinátor potomka (`A B`)  {#kombinator-potomka}

Kombinátor s bílým znakem odděluje dva selektory (`A B`) a vybírá potomka (`B`), který je zanořený dou určitého prvku `A`.

Selektor ve tvaru `A B` představuje prvek `B`, který je libovolným potomkem nějakého předka prvku `A`.

Příklad:

```html
<div class="box">
  <p class="a"><span class="a">…</span></p>
  <p class="b"><span class="a">…</span></p>
  <p class="c"><span class="a">…</span></p>
</div>      
```

Selektor `.box .a` vybere prvek `<p class="a">` a také všechny prvky `<span class="a">`.

Další příklady:

- `.heading span` – všechny prvky `<span>`, které jsou potomkem prvků s třídou `heading`.
- `h1 em` – všechny prvky `<em>`, které jsou potomkem prvku `<h1>`.
- `h1 * em` – všechny prvky `<em>`, které jsou potomkem ve druhém a vyšším zanoření uvnitř prvku `<h1>`.

### Kombinátor dítěte (`A > B`)  {#kombinator-ditete}

Kombinátor se znaménkem větší než (`A > B`) vybírá prvek `B`, který je přímým potomkem prvku `A`.

Tedy zatímco `A B` vybere `B` v jakékoliv úrovni zanoření uvnitř `A`, pak `A > B` vybírá jen ty `B`, které jsou přímými potomky `A`, tedy jeho „dětmi“.

Vezměme příklad:

```html
<div class="box">
  <p class="a"><span class="a">…</span></p>
  <p class="b"><span class="a">…</span></p>
  <p class="c"><span class="a">…</span></p>
</div>      
```

Selektor `.box > .a` vybere jen prvek `<p class="a">`.

Další příklady:

- `.heading > span` – všechny prvky `<span>`, které jsou přímým potomkem prvků s třídou `heading`.
- `h1 > em` – všechny prvky `<em>`, které jsou přímým potomkem prvku `<h1>`.
- `.box ol > li p` – všechny prvky `<p>`, které jsou potomkem `<li>`, přičemž `<li>` musí být přímým potomkem `<ol>` a potomkem libovolné úrovně v prvku s třídou `.box`.

Mezera kolem kombinátoru dítěte je volitelná. `h1 > em` a `h1>em` je totožné. Pro lepší čitelnost zápisu se upřednostňuje zápis s mezerami.

### Kombinátor následujícího sourozence (`A + B`)  {#kombinator-plus}

Kombinátor s plus (`A + B`) vybírá prvek `B`, který je vedlejším sourozencem `A`.

Prvky reprezentované oběma selektory mají ve stromu dokumentu stejného rodiče a prvek reprezentovaný prvním (`A`) bezprostředně předchází prvku reprezentovanému druhým (`B`).

Máme zde příklad:

```html
<div class="box">
  <p class="a"><span class="a">…</span></p>
  <p class="b"><span class="a">…</span></p>
  <p class="c"><span class="a">…</span></p>
</div>      
```

Selektor `.a + p` vybere jen prvek `<p class="b">`.

Další příklady:

- `h1 + p` – všechny prvky `<p>`, které následují po `<h1>`.
- `h1.heading + h2` – všechny prvky `<h2>`, které následují po prvku `<h1>` s třídou `heading`.

Mezery jsou opět volitelné. `h1 + p` je totéž jako `h1+p`, ale upřednostňujte tu první.

### Kombinátor pozdějšího sourozence (`A ~ B`)  {#kombinator-vlnovka}

Kombinátor s vlnovkou (`A ~ B`) vybírá prvek `B`, který je vedlejším sourozencem `A`, ale zároveň jej přímo nenásleduje.

Oba prvky mají stejného rodiče. Rozdíl oproti `A + B` je u vlnovkového kombinátoru v tom, že prvky nutně nemusí být vedle sebe.

Zpět k příkladu:

```html
<div class="box">
  <p class="a"><span class="a">…</span></p>
  <p class="b"><span class="a">…</span></p>
  <p class="c"><span class="a">…</span></p>
</div>      
```

Selektor `.a ~ p` vybere prvky `<p class="b">` a `<p class="c">`.

Další příklady:

- `h1 ~ p` – všechny prvky `<p>`, které mají stejného rodiče jako `<h1>`.
- `h1.heading ~ h2` – všechny prvky `<h2>`, které mají stejného rodiče jako `<h1>` s třídou `heading`.

Mezery v selektoru jsou opět volitelné.

## Podpora v prohlížečích {#podpora}

Všechny CSS selektory, které zde zmiňuji, jsou plně podporované ve všech prohlížečích, včetně MSIE. Jedinou výjimkou je přepínač citlivosti na velikost písmeen (`[title=Ahoj s]`), který už v tomto starém prohlížeči nerozchodíte.

Je zde ale jedna skupina selektorů, zmíněná ve specifikaci Selectors Level 4, která podporu nemá.

### Selektory sloupců

`A || B` – sloupcový kombinátor. Vybírá prvek `A` patřící ke sloupci `B`. Viz např. v tabulkách `col.selected || td`.

Bylo by užitečné takový selektor mít, ale zatím to žádný prohlížeč nepodporuje, stejně jako podobně zaměřené pseudotřídy `:nth-col()` a `:nth-last-col()`.

- [CanIUse.com](https://caniuse.com/mdn-css_selectors_column)
- [Specifikace](https://www.w3.org/TR/selectors-4/#table-pseudos)

V pokračování tohoto textu se zaměřím na pseudotřídy v CSS, které jsou vlastně jen trošku zvláštní selektory.
