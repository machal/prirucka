# Pseudotřídy v CSS

## Rozcestník typů pseudotříd {#rozcestnik}

### Odkazy a kotvy

[Pseudotřídy odkazů a kotev](#odkazy) umožňují vybrat různé typy odkazů nebo cíl kotvy.

<div class="rwd-scrollable prop-table table-1-half f-6"  markdown="1">

| Pseudotřída                   | Zápis         |
|:------------------------------|:--------------|
| [Odkaz](#any-link)            |  `:any-link`  |
| [Nenavštívený odkaz](#link-visited)   | `:link`     |
| [Navštívený odkaz](#link-visited)     | `:visited`    |
| [Cíl kotvy](#target)          | `:target`    |

</div>

### Uživatelské akce

[Pseudotřídy uživatelských akcí](#akce) vybírají aktivní prvky podle jejich stavu vyvoleném uživatelem.

<div class="rwd-scrollable prop-table table-1-half f-6"  markdown="1">

| Pseudotřída                   | Zápis         |
|:------------------------------|:--------------|
| [Najetí kurzoru](#hover)      | `:hover`    |
| [Aktivace prvku](#active)     | `:active`   |
| [Zaměření prvku](#focus)      | `:focus`    |
| [Indikované zaměření](#focus-visible) | `:focus-visible` |
| [Zaměření na rodiče](#focus-within)   | `:focus-within`  |

</div>

### Uživatelské vstupy

[Pseudotřídy uživatelských vstupů](#vstupy) umožňují vybrat formulářové prvky podle nastaveného očekávání uživatelského vstupu.

<div class="rwd-scrollable prop-table table-1-half f-6"  markdown="1">

| Pseudotřída                   | Zápis         |
|:------------------------------|:--------------|
| [Povolený prvek](#enabled-disabled)   | `:enabled`  |
| [Zakázaný prvek](#enabled-disabled)   | `:disabled` |
| [Možnost zápisu](#read-only-write)    | `:read-write` |
| [Nemožnost zápisu](#read-only-write)  | `:read-only` |
| [Zobrazený zástupný text](#placeholder-shown) |`:placeholder-shown` |
| [Použití automatického vyplnění](#autofill) | `:autofill` |
| [Výchozí prvek](#default)     | `:default`  |
| [Vybraná hodnota](#checked)   | `:checked`  |
| [Platnost zadání](#valid-invalid)  | `:valid` |
| [Neplatnost zadání](#valid-invalid)  |`:invalid` |
| [Povinnost zadání](#required) | `:required` |
| [Volitelnost zadání](#required) | `:optional` |

</div>

### Pořadí potomků

[Pseudotřídy pořadí potomků](#poradi) vybírají prvek podle jeho pořadí v sadě prvků nebo v sadě prvků stejného typu.

<div class="rwd-scrollable prop-table table-1-half f-6"  markdown="1">

| Pseudotřída                   | Zápis         |
|:------------------------------|:--------------|
| [N-tého prvku](#nth-child)    | `:nth-child()` |
| [N-tého prvku od konce](#nth-last-child) | `:nth-last-child()` |
| [Prvního potomka](#first-child) | `:first-child` |
| [Posledního potomka](#last-child) | `:last-child` |
| [Jediného potomka](#only-child) | `:only-child` |
| [N-tého prvku stejného typu](#nth-of-type) | `:nth-of-type()` |
| [N-tého prvku typu od konce](#nth-last-of-type) | `:nth-last-of-type()` |
| [Prvního potomka typu](#first-of-type) | `:first-of-type` |
| [Posledního potomka typu](#last-of-type) | `:last-of-type` |
| [Jediného potomka typu](#only-of-type) | `:only-of-type` |

</div>

### Kombinace

[Kombinační pseudotřídy](#kombinace) umožňují zjednodušit selektory, snížit specificitu nebo zavádějí nové možnosti jako selektor rodiče.

<div class="rwd-scrollable prop-table table-1-half f-6"  markdown="1">

| Pseudotřída                   | Zápis         |
|:------------------------------|:--------------|
| [Výběru libovolného prvku](#is)    | `:is()` |
| [Nulové specificity](#where) | `:where()` |
| [Negace](#noet) | `:not()` |
| [Vztahu](#last-child) | `:has()` |

</div>

### Ostatní

Do [ostatních pseudotříd](#ostatni) řadím to co se mi jinam nevešlo.

<div class="rwd-scrollable prop-table table-1-half f-6"  markdown="1">

| Pseudotřída                   | Zápis         |
|:------------------------------|:--------------|
| [Směr](#dir)                  |  `:dir()`     |
| [Jazyk](#lang)                |  `:lang()`    |
| [Celá obrazovka](#fullscreen) | `:fullscreen` |
| [Kořenový prvek](#root)       | `:root`   |
| [Prázdný prvek](#empty)       | `:empty`  |

</div>

Pojďme se teď na všechny typy pseudotříd a jednotlivé pseudotřídy podívat podrobně.

## Odkazy a kotvy {#odkazy}

### Pseudotřída hypertextového odkazu (`:any-link`) {#any-link}

Pseudotřída `:any-link` v selektoru představuje jakýkoliv prvek `<a>`, `<area>` nebo `<link>` s atributem `href`.

Podpora v prohlížečích je [plná](https://caniuse.com/css-any-link) (s výjimkou MSIE).

### Pseudotřídy pro historii odkazů (`:link` a `:visited`) {#link-visited}

Pseudotřídy cílící na historii prohlížení poskytují možnost vybrat navštívené a nenavštívené odkazy:

- Pseudotřída `:link` se vztahuje na odkazy, které ještě nebyly navštíveny.
- Pseudotřída `:visited` se uplatní, jakmile byl odkaz uživatelem navštíven.

Jak je známo, po určité době mohou prohlížeče vrátit navštívený odkaz do nenavštíveného stavu.

Podpora v prohlížečích je plná, včetně MSIE: [`:link`](https://caniuse.com/mdn-css_selectors_link) a [`:visited`](https://caniuse.com/mdn-css_selectors_visited).

### Pseudotřída cíle: (`:target`) {#target}

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

Podpora v prohlížečích je [plná](https://caniuse.com/mdn-css_selectors_target) (včetně MSIE).

## Uživatelské akce {#akce}

Existuje několik pseudotříd uživatelských akcí pro výběr prvku, na který kliká nebo jinak interaguje uživatel. Prvek může odpovídat několika takovým pseudotřídám současně.

### Pseudotřída najetí ukazatelem (`:hover`) {#hover}

Pomocí `:hover` vybíráme prvky, na které uživatel najede ukazatelem myši, nebo jejich potomky.

V moderních prohlížečích to je použitelné jak pro odkazy, tak pro běžné prvky, viz CodePen. [cdpn.io/e/vYdYbjx](https://codepen.io/machal/pen/vYdYbjx)

```css
/* Prvek zežloutne jen v momentě najetí myši na něj: */
.box:hover {
  background: yellow;
}
```

### Pseudotřída aktivace prvku (`:active`) {#active}

Umožňuje vybrat prvky, na které uživatel klikne nebo je aktivuje na klávesnici.

Selektor ale platí jen mezi okamžiky, kdy uživatel stiskne a pak uvolní aktivační tlačítko (třeba primární tlačítko myši).

Pseudotřídu `:active` standard HTML [omezuje jen na interakční prvky](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-active) typu `<a>` nebo [`<button>`](button.md), ale v moderních prohlížečích funguje na všech prvcích. [cdpn.io/e/rNJNPqB](https://codepen.io/machal/pen/rNJNPqB)

```css
/* Prvek zežloutne jen v momentě kliknutí na něj: */
.box:active {
  background: yellow;
}
```

### Pseudotřída zaměření prvku (`:focus`) {#focus}

Pseudotřída `:focus` platí, dokud je prvek zaměřený (tedy je na něm „fokus“) a přijímá vstupy z klávesnice nebo myši.

Toto funguje jen na takzvaně [zaměřitelných prvcích](https://html.spec.whatwg.org/multipage/interaction.html#focusable-area), tedy těch, které mohou vyvolávat akci (`<a>`, `<button>`…) nebo mají roli v navigační struktuře (např. pomocí atributu `tabindex`). [cdpn.io/e/NWyWooO](https://codepen.io/machal/pen/NWyWooO)

V ukázce níže platí: Pokud na prvek dojdu navigací pomocí klávesy Tab nebo na něj kliknu, tvale zežloutne.

```css
/* Prvek zežloutne v případě zaměření: */
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

Podpora v prohlížečích je [plná](https://caniuse.com/css-focus-visible) (s výjimkou MSIE).

### Pseudotřída zaměření na rodiče (`:focus-within`) {#focus-within}

Pseudotřída `:focus-within` se vztahuje na jakýkoli prvek, pro který platí pseudotřída `:focus`, ale také na prvek jehož potomek podmínky pro přiřazení `:focus` splňuje.

```css
.container:focus-within {
  outline: 2px solid red;
}
```

V tomto příkladu bude mít rodič červenou outline (dočasné zvýraznění), pokud je focus (zaměření pomocí myši nebo klávesnice) na potomka.

CodePen: [cdpn.io/e/wvyvNbE](https://codepen.io/machal/pen/wvyvNbE)

Vím, že se to používá pro [uchování otevírání různých meníček](https://www.scottohara.me/blog/2017/05/14/focus-within.html) a tak dále.

Podpora je [plná](https://caniuse.com/css-focus-within) (s výjimkou MSIE).

## Uživatelské vstupy (#vstupy)

Sem patří `:disabled`, `:read-only` a další pseudotřídy, které pomáhají vybírat vstupní prvky, které mají nějaký konkrétní stav. Většinou se aplikují na formulářové prvky.

### Pseudotřídy povolení a zakázání – `:enabled` a `:disabled` {#enabled-disabled}

V HTML můžeme některé aktivní prvky zobrazit, ale zakázat jejich používání. V uživatelském rozhraní se pak objeví „zašedlé“:

```html
<button>Enabled Button</button>
<button disabled>Disabled Button</button>
```

Pomocí pseudotříd můžeme vybrat takto povolené nebo zakázané prvky:

```css
:enabled {
  color: blue;
}

:disabled {
  color: black;
}
```

Samozřejmě je toto možné aplikovat jen na prvky, se kterými může uživatel interagovat.

CodePen: [cdpn.io/e/ZExJPrQ](https://codepen.io/machal/pen/ZExJPrQ)

Podpora `:enabled` a `:disabled` je plná ve všech prohlížečích, včetně prehistorických ještěrů.

### Pseudotřídy proměnlivosti (možnosti zápisu) – `:read-only` a `:read-write` {#read-only-write}

Některé aktivní prvky mohou sloužit jen pro čtení. Nejsou `disabled`, ale `readonly`:

```html
<textarea>Read/Write Textarea</textarea>
<textarea readonly>Read/Only Textarea</textarea>
```

Pomocí pseudotřít proměnlivosti je pak možné přistupovat k těmto prvkům a stylovat je:

```css
:read-write {
  color: blue;
}

:read-only {
  color: brown;
}
```

Za pozornost stojí, že všechny neaktivní prvky, např. i `div` jsou samozřejmě `readonly`. Můžete to ale změnit přidáním atributu `contenteditable`.

CodePen: [cdpn.io/e/KKovExw](https://codepen.io/machal/pen/KKovExw)

Podpora je plná.

### Pseudotřída zobrazeného zástupného textu – `:placeholder-shown` {#placeholder-shown}

Některé prvky, zejména ty vstupní, mohou obsahovat zástupný text (placeholder):

```html
<input type="text" value="This is value">
<input type="text" placeholder="This is placeholder text">
```

Pseudotřída v CSS jménem  `:placeholder-shown` je tu proto, abychom mohli stylovat prvek, který placeholder obsahuje.

```css
:placeholder-shown {
  border-color: blue;
}
```

CodePen: [cdpn.io/e/QWmMoow](https://codepen.io/machal/pen/QWmMoow)

Podpora je [plná](https://caniuse.com/css-placeholder-shown), v MSIE s prefixem.

### Pseudotřída použití automatického vyplnění textu – `:autofill` {#autofill}

Pseudotřída `:autofill` představuje vstupní prvky, které byly automaticky vyplněny prohlížečem a uživatel je následně nezměnil.

Podpora je [plná](https://caniuse.com/mdn-css_selectors_autofill) s výjimkou MSIE.

### Pseudotřída výchozího prvku – `:default` {#default}

Pseudotřída `:default` se vztahuje na prvky uživatelského rozhraní, které jsou výchozí ze sady podobných prvků.

Příkladem je výchozí tlačítko mezi sadou tlačítek:

```html
<form action="#">
  <button>Default Button</button>
  <button>Another Button</button>
</form>
```

Styly:

```css
:default {
  border-color: blue;
}
```

První ze sady tlačítek bude vždy pro odeslání formuláře výchozí a proto se rámeček obarví.

CodePen: [cdpn.io/e/QWmMoow](https://codepen.io/machal/pen/QWmMoow)

Jiným příkladem je stylování výchozí možnosti z vyskakovací nabídky `<select>`.

### Pseudotřída vybrané hodnoty – `:checked` {#checked}

Aplikuje se na vybraná zatržítka, přepínače nebo vybranou hodnotu `<option>` ze seznamu hodnot.

```css
:checked {
  color: blue;
}
```

Samotné obarvení nebo jiné stylování vybrané hodnoty zase tak užitečné není, ale v kombinaci s dalšími selektory to začne být zajímavé:

```css
/* Obarvíme textové popisky pro vybrané zatržítko: */
input:checked + label {
  color: blue;
}

/* Obarvíme zatržítka, které nejsou vybrané: */
input[type=checkbox]:not(:checked) {
  color: gray;
}
```

Podpora pseudotřídy `:checked` je [úplná](https://caniuse.com/mdn-css_selectors_checked).

### Pseudotřída neurčitých hodnot – `:indeterminate` {#indeterminate}

Pseudotřída `:indeterminate` se vztahuje na prvky uživatelského rozhraní, jejichž hodnota je v neurčitém stavu.

Například prvky radio a checkbox lze přepínat mezi stavy zaškrtnuto a nezaškrtnuto, ale někdy jsou v neurčitém stavu, tedy ani zaškrtnuto, ani nezaškrtnuto.

Podobně může být v neurčitém stavu ukazatel průběhu `<progress>`, když není známo procento zbývající k dokončení.

Neurčitou hodnotu přidává buď prohlížeč nebo ji můžete vynutit [atributem `indeterminate`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes).

Další pseudotřídy, totiž pseudotřídy kontroly vstupních hodnot, umožňují dát uživateli zpětnou vazbu, pokud něco zadá do formulářového prvku. Patří sem možnost stylovat povinná políčka (`:required`) nebo označení špatného vstupu (`:invalid`).

### Pseudotřídy platnosti – `:valid` a `:invalid` {#valid-invalid}

Pseudotřída `:valid` v CSS představuje jakýkoli prvek `<input>` nebo jiný formulářový prvek, jehož obsah se úspěšně validuje.

Je tak možné buď stylovat validní či nevalidní prvky nebo je označit textem pomocí `content`:

```css
input:invalid {
  border-color: red;
}

input:invalid + label::before {
  content: '✖';
  color: red;
}

input:valid + label::before {
  content: '✓';
  color: green;
}
```

Ukázku jsem převzal [z MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid).

Na některé prvky není možné platnost aplikovat. Je rozdíl mezi prvkem, který nemá žádná omezení, a byl by tedy vždy `:valid`, např. `<input type=text>`, a prvkem, který nemá vůbec žádnou sémantiku platnosti dat, např. `<p>`, a není tedy ani `:valid`, ani `:invalid`.

Podpora pro [`:valid`](https://caniuse.com/mdn-css_selectors_valid) i [`:invalid`](https://caniuse.com/mdn-css_selectors_invalid) je plná.

### Pseudotřídy rozsahu – `:in-range` a `:out-of-range` {#range}

Těmito pseudotřídami se v CSS představuje prvek `<input>`, jehož aktuální hodnota se nachází (`:in-range`) nebo nenachází (`:out-of-range`) v rozmezí určeném atributy `min` a `max`.

Viz výše uvedený příklad:

```css
input:out-of-range {
  border-color: red;
}

input:out-of-range + label::before {
  content: '✖';
  color: red;
}

input:in-range + label::before {
  content: '✓';
  color: green;
}
```

Podpora je [plná](https://caniuse.com/css-in-out-of-range), IE ovšem trucuje.

### Pseudotřídy volitelnosti – `:required` a `:optional` {#required}

Pseudotřída `:required` v CSS označuje jakýkoliv vstupní prvek (`<input>`, `<select>`, `<textarea>`, který má atribut `required`:

```css
:required + label::after {
  content: '*';
}
```

Pseudotřída `:optional` pak reprezentuje všechny ostatní vstupní prvky.

Podpora [`:required`](https://caniuse.com/css-required-pseudo) i [`:optional`](https://caniuse.com/css-optional-pseudo) je plná.

## Pořadí potomků {#poradi}

V této kategorii je možné pseudotřídami vybrat prvního (`:first-child`), posledního (`:last-child`), několikátého nebo n-tého (`:nth-child()`) potomka určitého prvku.

### Pseudotřída n-tého prvku – `:nth-child()` {#nth-child}

Velmi užitečná pseudotřída, která umožní vybrat prvek na základě opakujícího se pořadí – sudé, liché, n-té nebo prostě několikáté prvky.

Obsah v závorce se zapisuje podle vzoru `An+B` a tedy např. `2n+1` bude každý druhý plus jedna. `n` je cyklus začínající vždy nulou, takže toto splní každý lichý prvek: první, třetí, pátý…

Příklady:

```css
/* Liché řádky tabulky: */
tr:nth-child(odd) { … }
tr:nth-child(2n+1) { … }

/* Sudé řádky tabulky: */
tr:nth-child(even) { … }
tr:nth-child(2n) { … }

/* Každá sedmá položka v seznamu: */
li:nth-child(7n) { … }

/* Sedmá položka v seznamu: */
li:nth-child(7) { … }

/* První dva elementy v seznamu */
li:nth-child(-n+2)
/* → -0+2=2, -1+2=1, -2+2=0] */
```

Podpora základní syntaxe je [plná](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child). Horší byste to měli, pokud máte v úmyslu takto stylovat prvky v `<select>`, což nyní funguje jen v Safari.

### Pseudotřída n-tého prvku od konce – `:nth-last-child()` {#nth-last-child}

Pseudotřída `:nth-last-child()` funguje stejně jako `:nth-child()`, jen se pořadí počítá od konce:

```css
/* Druhá položka v seznamu od konce: */
li:nth-child(2) { … }

/* Každá sedmá položka v seznamu od konce: */
li:nth-child(7n) { … }

/* Liché řádky tabulky: */
tr:nth-child(odd) { … }
```

Základní podpora je [plná](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child).

### Pseudotřída prvního potomka – `:first-child` {#first-child}

Pseudotřída `:first-child` představuje prvek, který je první mezi svými sourozenci.

Je to totéž jako `:nth-child(1)`.

```css
/* Tučně vysází první odstavec textu v .content */
.content > p:first-child {  
  font-weight: bold;
}
```

Podpora je [plná](https://caniuse.com/mdn-css_selectors_first-child).

### Pseudotřída posledního potomka – `:last-child` {#last-child}

Pseudotřída `:last-child` představuje prvek, který je poslední mezi svými sourozenci.

Je to totéž jako `:nth-last-child(1)`.

```css
/* Tučně vysází první odstavec textu v .content */
.content > p:last-child {  
  font-weight: bold;
}
```

Podpora je [plná](https://caniuse.com/mdn-css_selectors_last-child).

### Pseudotřída pvku bez sourozenců – `:only-child` {#only-child}

Pseudotřída `:only-child` představuje prvek, který nemá žádné sourozence.

Je to mimochodem totéž jako `:first-child:last-child` nebo `:nth-child(1):nth-last-child(1)`, jen to má nižší [specifičnost](https://www.vzhurudolu.cz/prirucka/css-kaskada).

Podpora je [plná](https://caniuse.com/mdn-css_selectors_only-child).

Pojďme dál. Pod kostrbatým názvem „pseudotřídy indexu potomků stejného typu“ se ve specifikaci nachází další kategorie pseudotříd, která stejně jako ta předchozí umožňuje vybrat n-té prvky ze sady sourozenců.

V tomto případě je ale výběr omezený na prvky stejného typu, takže shodné HTML značky, jako například `img`, `p` nebo jiné.

### Pseudotřída n-tého prvku stejného typu – `:nth-of-type()` {#nth-of-type}

Umožní vybrat prvek stejného typu na základě opakujícího se pořadí.

Od pseudotřídy `:nth-child()` se liší v tom, že umožňuje zaměření jen na prvky stejného typu.

Příklady:

```css
/* Každý lichý obrázek: */
img:nth-of-type(odd) { … }

/* Každý třetí obrázek: */
img:nth-child(3n) { … }
```

### Pseudotřída posledního prvku stejného typu – `:nth-last-of-type()` {#nth-last-of-type}

Podobné jako `:nth-last-child`, jen vybere poslední n-tý prvek stejného typu, takže stejné HTML značky.

### Pseudotřída prvního prvku stejného typu – `:first-of-type()` {#first-of-type}

Podobné jako `:first-child`, jen vybere první prvek stejného typu, takže stejné HTML značky.

### Pseudotřída prvního prvku stejného typu – `:last-of-type()` {#last-of-type}

Podobné jako `:last-child`, jen vybere poslední prvek stejného typu, takže stejné HTML značky.

### Pseudotřída prvku stejného typu bez sourozenců – `:only-of-type` {#only-of-type}

Pseudotřída `:only-of-type` představuje prvek, který nemá žádné sourozence stejného typu. Jde o obdobu konstrukce pseudotříd `:first-of-type:last-of-type`.

V závěrečné části tohoto dlouhého textu se podíváme na zoubek pseudotřídám, které zatím nenašly podporu v prohlížečích.

## Kombinační pseudotřídy {#kombinace}

### Pseudotřída výběru jakéhokoliv prvku – `:is` {#is}

Pseudotřída `:is()` kontroluje, zda prvek na pozici ve vnějším selektoru odpovídá některému ze selektorů v seznamu selektorů.

Je to užitečný syntaktický cukr, který umožňuje vyhnout se ručnímu vypisování všech kombinací jako samostatných selektorů:

```css
/* Kombinace selektorů: */
.header h2,
.footer h2,
.side h2 {
  font-size: 2rem;
}

/* Pomocí :is(): */
:is(.header, .footer, .side) h2 {
  font-size: 2rem;
}
```

Specifičnost pseudotřídy `:is()` je nahrazena specifičností jejího nejkonkrétnějšího argumentu.

Ve [specifikaci](https://www.w3.org/TR/selectors-4/#matches) je k nalezení tento příklad. Zaměřme se v něm na prvek `ol`: 

```css
/* Silnější specifičnost (0,2,0): */
:is(ul, ol, .list) > [hidden] { … }

/* Slabší specifičnost (0,1,1): */
ul > [hidden], ol > [hidden], .list > [hidden], [hidden] { … } 
```

Vysvětlím:

- V prvním příkladě máme jednu pseudotřídu a jeden atributový selektor.
- V druhém je jedna třída a jeden element.

Podpora je [plná](https://caniuse.com/css-matches-pseudo) (kromě IE).

### Psudotřída nulové specificity – `:where()` {#where}

Na rozdíl od `:is()` nepřispívá pseudotřída `:where()` ani žádný z jejích argumentů ke specifičnosti selektoru. Specifičnost `:where()` je vždy nulová.

```css
/* Specifičnost (0,1,1): */
.header h2,
.footer h2,
.side h2 {
  font-size: 2rem;
}

/* Specifičnost (0,1,1): */
:is(.header, .footer, .side) h2 {
  font-size: 2rem;
}

/* Specifičnost (0,1,1): */
:where(.header, .footer, .side) h2 {
  font-size: 2rem;
}
```

Podpora je [plná](https://caniuse.com/mdn-css_selectors_where) s tradiční výjimkou IE.

### Pseudotřída negace – `:not()` {#not}

Pseudotřída, která vybere prvek, který není reprezentován jejím argumentem:

```css
/* Vybere h2 uvnitř .header */
:is(.header) h2 {
  font-size: 2rem;
}

/* Vybere h2, ale ne ty uvnitř .header  */
:not(.header) h2 {
  font-size: 2rem;
}
```

Specifičnost pseudotřídy `:not()` je nahrazena specifičností nejspecifičtějšího selektoru v jejích čárkou oddělených argumentech. 

Podpora pseudotřídy `:not()` je [plná](https://caniuse.com/mdn-css_selectors_not) (kromě IE).

### Pseudotřída vztahu – `:has()` {#has}

O [relační pseudotřídě `:has()`](https://www.vzhurudolu.cz/prirucka/css-selektor-has) jsem už dříve psal.

Bez ohledu na specifikaci lidsky řečeno je pro nás důležité, že je `:has()` je použitelný jako selektor rodiče…

```css
/* Vybere <a>, které přímo obsahují <img> */
a:has(> img)
```

… nebo také jako selektor přechozího sourozence:

```css
/* Vybere <h1>, které jsou přímo následovány <table> */
h1:has(+ table)
```

[Podpora](https://caniuse.com/css-has) je v Safari a koncem srpna 2022 bude v Chrome. Na Firefox se zatím čeká.

## Ostatní {#ostatni}

Pomocí jazykových pseudotříd je možné stylovat prvky podle směru textu (`:dir()`) nebo nastavení jazyka (`:lang()`).

### Pseudotřída směru (`:dir()`) {#dir}

Pseudotřída `:dir()` umožňuje webařům napsat selektory, které reprezentují prvek na základě směru určeného jazykem dokumentu.

| Selektor          | Vysvětlení         |
|:------------------|:-------------------|
|  `h1:dir(ltr)`  |  prvek `<h1>` jehož směr vykreslení podle jazyka je nastavený jako `ltr`, tedy zleva doprava (left-to-right).  |
|  `h1:dir(rtl)` | prvek `<h1>` jehož směr vykreslení podle jazyka je nastavený jako `rtl`, tedy zprava doleva (right-to-left). |

Podporu pseudotřídy směru `dir()` v době psaní textu zatím implementoval [pouze Firefox](https://caniuse.com/css-dir-pseudo).

Zajímá vás rozdíl mezi pseudotřídou `:dir(ltr)` a selektorem atributu `[dir=ltr]`? Je tam.

Selektor atributu `[dir=ltr]` se týká pouze daného atributu, pokud je přítomný. Pseudotřída `:dir(ltr)` by měla využívat k znalosti sémantiky dokumentu ze strany prohlížeče, takže fungovat i pokud není jazyk nastavený přímov na HTML prvcích.

Například v HTML se směr jazyka prvku dědí, takže potomek bez atributu `dir` bude mít stejnou směrovost jako jeho nejbližší předek s platným atributem `dir`. To by samozřejmě atributový selektor nefungoval.

### Pseudotřída jazyka (`:lang()`) {#lang}

Pseudotřída `:lang()` umožňuje psát CSS selektory citlivé na jazyk dokumentu.

| Selektor          | Vysvětlení         |
|:------------------|:-------------------|
| `h1:lang(cs)` | prvek `<h1>`, který má nastavený (nebo podědí) český jazyk. |
|  `:lang(fr-be) > h1` | prvek `<h1>` uvnitř dokumentu v belgické francouzštině. |

Podpora v prohlížečích je [plná](https://caniuse.com/mdn-css_selectors_lang) (včetně MSIE).

Mimochodem, v HTML je možné jazyk pro dokument nebo prvky dokumentu nastavit kombinací atributu `lang`, informací ze značek `meta` a případně také v hlavičkách HTTP.

Rozdíl mezi pseudotřídou `:lang(cs)` a atributovým selektorem `[lang|=cs]` spočívá v tom, že atributový selektor provádí pouze porovnání s atributem `lang` u elementu, zatímco pseudotřída `:lang()` se opět snaží zjistit nastavení jazyka jakýmkoliv způsobem.

Další rozdíl je v tom, že atributový selektor (`[lang|=en]`) funguje jako wildcard a umí tedy rozpoznat všechny jazyky začínající na `en`.

### Pseudotřída běhu přes celou obrazovku – `:fullscreen` {#fullscreen}

Pseudotřída `:fullscreen` se asi nejlépe využije pro stylování stránky zobrazující video nebo samotnou stránku přes celou obrazovku.

Hezký příklad jsem našel [na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:fullscreen), kde různě stylují tlačítko na zobrazení videa přes celou obrazovku:

```css
/* Styl tlačítka mimo režim celé obrazovky: */
#fs-toggle:not(:fullscreen) {
  background-color: #afa;
}

/* Styl tlačítka v režimu celé obrazovky: */
#fs-toggle:fullscreen {
  background-color: #faa;
}
```

Další pseudotřídy umožňují výběr na základě informací, které se nacházejí ve stromu dokumentu, ale nelze je reprezentovat jinými selektory.

### Pseudotřída kořenového prvku – `:root` {#root}

Ve DOMu odpovídá pseudotřída `:root` kořenovému prvku objektu `Document`. V HTML to bude standardně element `<html>`, což se ale může javascriptem změnit.

V praxi se pseudotřída díky své vyšší [specificitě](https://www.vzhurudolu.cz/prirucka/css-kaskada) používá pro deklaraci [autorských vlastností (aka proměnných)](https://www.vzhurudolu.cz/prirucka/css-promenne):

```css
:root {
  --blue: #007bff;
  --indigo: #6610f2;
}
```

Podpora je [plná](https://caniuse.com/mdn-css_selectors_root).

### Pseudotřída prázdného prvku – `:empty` {#empty}

Pseudotřída `:empty` zastupuje prvek, který nemá žádné potomky.

Jen pro pořádek:

- Potomkem může být buď další prvek nebo text (včetně bílých znaků).
- Potomky naopak nejsou komentáře nebo CSS deklarace.

Podpora je [plná](https://caniuse.com/mdn-css_selectors_empty).

## Nepodporováno {#nepodporovano}

Mezi pseudotřídami je řada takových, které nemají podpory mezi prohlížeči ani co by se za nehet vešlo. Alespoň v době psaní tohoto textu.

Všechny je už ale najdete ve čtvrté verzi [specifikace CSS Selectors](https://www.w3.org/TR/selectors-4/).

### Pseudotřída kontejneru cíle – `:target-within` {#target-within}

Podobně jako `:target` vybere cíl kotvy a navíc také každý prvek, jehož potomek je cíl kotvy a tedy splňuje podmínky výběru pro `:target`.

### Pseudotřída místního odkazu – `:local-link` {#local-link}

Představuje odkaz, jehož cílová absolutní adresa URL se shoduje s adresou URL vlastního dokumentu. Odkazuje tedy sám na sebe.  Zápis `nav :local-link {text-decoration: none}` by pak umožnil zakázat podtržení odkazu, který vede na aktuální URL.

### Časové pseudotřídy – `:current`, `:past`, `:future` {#casove}

V některých kontextech konzumace obsahu se může hodit označení prvku, který je časově aktuální, předchozí a následující.

Specifikace jako příklady uvádí konzumaci dokumentu pomocí audia (řeči) a prohlížeční videa obsahujícího titulky tvořené technologií [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API).

### Pseudotřídy stavu zdrojů {#stav-zdroju}

Ve specifikaci též najdete velmi zajímavé pseudotřídy, pomocí kterých by bylo možné vybrat zdroj stánky jako obrázek nebo video, který se přehrává (`:playing`), je pozastavený (`:paused`) nebo se ukládá do mezipaměti (`:buffering`).

Ve [specifikaci](https://www.w3.org/TR/selectors-4/#resource-pseudos) je těchto pozoruhodných tříd více, jen zatím pražádnou podporu nemají.

### Pseudotřídy stavu zobrazení prvků

Opět jde velmi zajímavá skupina pseudotříd, například pro element ve stavu modálního okna (`:modal`) nebo zobrazení elementu (nejspíš videa) v režimu PiP (picture in picture), tedy překrývající obsah (pseudotřída `:picture-in-picture`).

Funguje z nich jen `:fullscreen`. U ostatních si zatím musíme počkat na implementace v prohlížečích.

### Pseudotřída prázdných hodnot – `:blank` {#blank}

Umožní nastylovat prázný textový vstup nebo víceřádkový vstup:

```css
textarea:blank {
  border-color: red;
}
```

I zde je podpora v době psaní textu [bohužel nulová](https://caniuse.com/mdn-css_selectors_blank).

### Pseudotřídy interakce s uživatelem – `:user-valid` a `:user-invalid`

Tyto pseudotřídy zvolí prvky, které mají správný nebo nesprávný vstup, takže se podobají pseudotřídám platnosti (`:valid` a `:invalid`).

Rozdíl je v tom, že `:user-valid` a `:user-invalid` platí až poté, co s ním uživatel významně interagoval.

Pseudotřídy `:valid` a `:invalid` se na prvek aplikují, i když jej uživatel nijak nevyplnil, což je bohužel většinou vcelku nepraktické.

Nepraktické na pseudotřídách interakce s uživatelem zase je, že v době psaní textu je [podporuje pouze Firefox](https://caniuse.com/mdn-css_selectors_user-invalid).
