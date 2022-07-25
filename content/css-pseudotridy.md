# Pseudotřídy v CSS

## Jazykové pseudotřídy {#pseudo-jazyk}

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

## Pseudotřídy polohy {#pseudo-poloha}

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

## Pseudotřídy akcí uživatele {#pseudo-action}

Existuje několik pseudotříd uživatelských akcí pro výběr prvku, na který kliká nebo jinak interaguje uživatel. Prvek může odpovídat několika takovým pseudotřídám současně.

### Pseudotřída najetí ukazatelem (`:hover`) {#hover}

Pomocí `:hover` vybíráme prvky, na které uživatel najede ukazatelem myši, nebo jejich potomky.

V moderních prohlížečích to je použitelné jak pro odkazy, tak pro běžné prvky, viz CodePen. [cdpn.io/e/vYdYbjx](https://codepen.io/machal/pen/vYdYbjx)

```css
/* Prvek zežloutne jen v momentě najetí myši na něj */
.box:hover {
  background: yellow;
}
```

### Pseudotřída aktivace prvku (`:active`) {#active}

Umožňuje vybrat prvky, na které uživatel klikne nebo je aktivuje na klávesnici.

Selektor ale platí jen mezi okamžiky, kdy uživatel stiskne a pak uvolní aktivační tlačítko (třeba primární tlačítko myši).

Pseudotřídu `:active` standard HTML [omezuje jen na interakční prvky](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-active) typu `<a>` nebo [`<button>`](button.md), ale v moderních prohlížečích funguje na všech prvcích. [cdpn.io/e/rNJNPqB](https://codepen.io/machal/pen/rNJNPqB)

```css
/* Prvek zežloutne jen v momentě kliknutí na něj */
.box:active {
  background: yellow;
}
```

### Pseudotřída zaměření pro vstup (`:focus`) {#focus}

Pseudotřída `:focus` platí, dokud je prvek zaměřený (tedy je na něm „fokus“) a přijímá vstupy z klávesnice nebo myši.

Toto funguje jen na takzvaně [zaměřitelných prvcích](https://html.spec.whatwg.org/multipage/interaction.html#focusable-area), tedy těch, které mohou vyvolávat akci (`<a>`, `<button>`…) nebo mají roli v navigační struktuře (např. pomocí atributu `tabindex`). [cdpn.io/e/NWyWooO](https://codepen.io/machal/pen/NWyWooO)

V ukázce níže platí: Pokud na prvek dojdu navigací pomocí klávesy Tab nebo na něj kliknu, tvale zežloutne.

```css
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

## Pseudotřída běhu přes celou obrazovku – `:fullscreen` {#fullscreen}

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

## Pseudotřídy vstupu (#input)

<!-- TODO -->

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

## Pseudotřídy stavu zobrazení prvků

Opět jde velmi zajímavá skupina pseudotříd, například pro element ve stavu modálního okna (`:modal`) nebo zobrazení elementu (nejspíš videa) v režimu PiP (picture in picture), tedy překrývající obsah (pseudotřída `:picture-in-picture`).

Funguje z nich jen `:fullscreen`. U ostatních si zatím musíme počkat na implementace v prohlížečích.
