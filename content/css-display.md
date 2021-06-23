# CSS vlastnost display

Vlastnost `display` slouží k určení způsobu vykreslení prvku. Může to být i relativně komplikovaná věc a má spoustu nových hodnot. Možná vás to totiž překvapí, ale od roku 2020 zde máme novou verzi [specifikace](https://www.w3.org/TR/css-display-3/).

Ale víte co? Začneme jednoduchým přehledem nejužitečnějších hodnot.

<div class="rwd-scrollable f-6" markdown="1">

| Hodnota                   |  Jak se zobrazuje |
|---------------------------|-------------------|
| `inline`                  |  Řádkový element, který netvoří zalomení před sebou nebo po sobě. (výchozí)        |
| `block`                   |  Blokový element. Zalomí řádky před sebou i po sobě. |
| `inline-block`            |  Vnitřně se jedná o blokový element, zvnějšku inline, který netvoří zalomení.                 |
| `flex`, `inline-flex`     |  Vytvoří [flexové rozvržení](css-flexbox.md). Inline varianta nezalomí řádky před a po.  |
| `grid`, `inline-grid`     |  Vytvoří [rozvržení do mřížky](css-grid.md). Inline varianta opět nezalomí řádky.  |
| `table`, `inline-table`   |  Rozvržení do tabulky. Inline varianta opět tvoří tabulku v řádce.  |
| `none`                    |  Nevykreslí prvek, ale ani jeho potomky.  |

</div>

V tabulce zdaleka nejsou všechny vlastnosti a popsány všechny jejich možnosti, nástrahy a vychytávky. Proto čtěte dál.

Víte například, že…

- S pomocí [hodnoty `flow-root`](#vnejsi) nemusíte pro floaty používat clearfix?
- Firefox podporuje [víceslovná označení](#viceslovna) jako `inline flex`?
- Pro schovávání prvku existujte kromě hodnoty `none` existuje [také `contents`](#none-contents)?

V CSS je stále těžší najít vlastnost, která by byla snadná k pochopení a naučení. Možná to překvapí i vás, zkušenější, ale docela široký záběr člověk potřebuje i pro vstřebání vlastnosti `display`.

<!-- AdSnippet -->

Pojďme se teď podívat do světa vlastnosti `display`.

## Vnitřní a vnější zobrazení {#typy}

První věc, kterou si musíme uvědomit, je holý fakt, že nově podle specifikace existují dva typy zobrazení:

- _Vnitřní zobrazení_  
Hodnota vlastnosti `display` určuje, jak prohlížeče rozloží potomky prvku. Sem patří hodnoty jako `flex`, `grid` nebo `table`.
- _Vnější zobrazení_  
Hodnota definuje, jak se sám prvek podílí na rozložení stránky. Pohled zvenčí. Toto určují hodnoty jako `inline`, `block` nebo `none`.

Máte? Výborně. Toto se nám bude hodit, až budeme hovořit o hodnotách pro více klíčových slov.

## Vnější zobrazení {#vnejsi}

Vnější zobrazení v podstatě určuje roli stylovaného boxu v uspořádání toku stránky.

<figure>
<img src="../dist/images/original/vdlayout/css-display-inline-block.png" width="1600" height="450" alt="CSS display - inline a block">
<figcaption markdown="1">
*Hodnoty pro vnější zobrazení jsou naši staří známí.*
</figcaption>
</figure>

Do tohoto typu zobrazení patří následující hodnoty:

- `inline`  
Vytvoří boxík, který je „inline-level“, řádkový. Před sebou a po sobě nic nezalomí, prostě se vykreslí do řádky.
- `block`  
Vygeneruje boxík, který je „block-level“. Zjednodušeně to znamená, že se vykreslí do celé šířky rodiče a zalomí řádky před sebou i po sobě.
- `inline-block`  
Generuje boxík, se zvnějšku chová jako řádkový a uvnitř generuje vždy nový blokový kontext. Mimochodem, specifikace s touto hodnotou do budoucna počítá jen jako jiným zápisem pro klíčová slova `inline flow-root`. O tom píšu později.
- `run-in`  
Vygeneruje typ „inline-level“ boxu se zvláštním chováním – pokusí se sloučit do následujícího blokového prvku. Pokud za „run-in“ prvkem následuje blokový prvek, „run-in“ se stane jeho prvním inline boxem. Pokud bude následovat inline pole, stane se z „run-in“ prvku blokový. Toto ale bohužel není podporováno jinde než v [Internet Exploreru](msie.md) (!). [caniuse.com/run-in](https://caniuse.com/run-in)

V CodePenu si můžete vyzkoušet všechny možnosti.

CodePen: [cdpn.io/e/wvzYXeg](https://codepen.io/machal/pen/wvzYXeg?editors=0000)

Varianta s display `run-in` v mé ukázce chybí. Museli byste ji zkoušet v IE, jenže v tomto dědečkovi mezi prohlížeči nefunguje CodePen.

Tady by měl následovat smajlík, který vyjadřuje radost a smutek zároveň.

## Vnitřní zobrazení {#vnitrni}

Hodnoty vnitřního zobrazení zapínají uvnitř dotčeného prvku nový kontext formátování ([formatting context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)). No a ten mívá vliv na způsob vykreslení vnitřních prvků, případně na použití dalších vlastností na nich.

- `flow`  
Hodnota `flow` zapíná formátování tokem (flow layout), což je běžný způsob zobrazení, který automaticky zapnou hodnoty `block`, `inline` a `inline-block`. Pokud vím, toto zatím není v prohlížečích podporováno, nicméně jde o výchozí režim rozvržení v CSS.
- `flow-root`  
Vytvoří kontejner blokového kontextu (jako `display:block`) a rozloží jeho obsah pomocí toku (flow layout). Hodnota `flow-root` ale vždy generuje nový kontext formátování bloku pro svůj obsah, takže není například nutné mazat „floaty“ pomocí [clearfixu](https://learnlayout.com/clearfix.html). Na této hodnotě je zajímavé, že ji podporují všechny moderní prohlížeče. Internet Explorer nikoliv. [caniuse.com/flow-root](https://caniuse.com/flow-root)
- `flex`  
Zapíná formátovací kontext [flexboxu](css-flexbox.md). Ze stylovaného prvku udělá flex kontejner a z přímých potomků flex položky.
- `grid`  
Spouští formátovací kontext [gridu](css-grid.md). Ze stylovaného prvku udělá  kontejner mřížky a z přímých potomků její položky.
- `table`  
Udělá z prvku tabulku. V tomto případě jsou zde ale dva „kontejnery“. `display:table` generuje kontejner tabulky, který vytvoří kontext formátování bloku a obsahuje dodatečně vygenerovaný rámeček tabulky tabulky, který vytvoří kontext formátování tabulky. O tom někdy jindy.
- `ruby`  
Tohle je exotické a pro středoevropské prostředí nepotřebné. „Ruby anotace“ jsou krátké řady znaků umístěné vedle základního textu, které se  používají ve východoasijské typografii jako vodítko pro výslovnost.

<figure>
<img src="../dist/images/original/vdlayout/css-display-outer.png" width="1600" height="450" alt="CSS display - inline a block">
<figcaption markdown="1">
*Možnosti hodnot vnitřního zobrazení.*
</figcaption>
</figure>

Připravil jsem dva vysvětlující CodePeny. V prvním máme jednoduše a bez layoutu umístěné tři prvky v jednom rodiči. Toto je důležité CSS:

```css
.container {
  border: 5px solid black;
  padding: 0.5rem;
}

.container p {
  margin: 0 0 0.5rem;
  padding: 0.5rem;
  border: 2px dotted black;
}
```

CodePen: [cdpn.io/e/KKgGeQQ](https://codepen.io/machal/pen/KKgGeQQ?editors=0000)

`display:flow` v prohlížečích nefunguje, ale jako by fungoval… „Tokové“ je totiž výchozí zobrazení.

Zajímavější bude druhý CodePen. Všechny tři vnitřní prvky jsou „tekoucí“, floatové:

```css
.container p {
  float: left;
}
```

CodePen: [cdpn.io/e/WNGayad](https://codepen.io/machal/pen/WNGayad?editors=0000)

- Běžné tokové zobrazení (`display:flow`) floaty obalit neumí, potřebovali bychom už zmíněný „clearfix“.
- `display:flow-root` floaty obalí, vždy vytvoří nový kontext formátování bloku.
- Na `display:flex` a `display:grid` nemají floaty žádný vliv.
- Na vnitřní prvky v `display:table` floaty vliv mají, protože rodič je zde v běžném tokovém kontextu formátování bloku.

## Generování boxů se značkami: `list-item` {#list-item}

`display:list-item` způsobí, že element vygeneruje pseudoprvek `::marker` s obsahem specifikovaným jeho vlastnostmi.

Pokud není zadána žádná hodnota typu vnitřního zobrazení, výchozí bude tokové – jako `display:flow`. Pokud není zadána žádná hodnota typu vnějšího zobrazení, bude výchozí typ blokový – `display:block`.

Náš kontejner díky tomu můžeme stylovat, jako by to byl prvek `<ul>` nebo `<ol>`:

```css
.container {
  list-style-type: square;
}
```

CodePen: [cdpn.io/e/gOwqJmq](https://codepen.io/machal/pen/gOwqJmq?editors=0000)

Podpora `display:list-item` jde napříč všemi prohlížeči. [caniuse.com/mdn-css_properties_display_list-item](https://caniuse.com/mdn-css_properties_display_list-item)

## Typy zobrazení pro vnitřní rozvržení: `table-*` a `ruby-*` {#table-ruby}

Modely zobrazení, které vynucují vnitřní rozvržení, jako je `display:table` a `display:ruby`, mají složitou strukturu s několika různými rolemi, které mohou jejich  potomci plnit.

Jak je uvedeno výše, zápis `display:table` sice vytvoří kontejner tabulky, ale ten vytvoří kontext formátování bloku. Nedosáhneme tím tedy tabulkového zobrazení. K tomu bychom potřebovali další prvky, které reprezentují řádky a buňky tabulky se správnými hodnotami vlastnosti `display` (`table-row`, `table-cell`…).

Je to prostě složitější, takže zájemce lačnící po tomhle způsobu zobrazení [pošlu jinam](https://colintoh.com/blog/display-table-anti-hero).

Podobné je to [u `display:ruby`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Ruby).

## Generování boxů: `none` a `contents` {#none-contents}

Ke všem možným metodám ovlivnění vykreslování boxíků na obrazovku musíme přidat i metody nevykreslování. K tomu slouží následující dvě hodnoty.

- `none`  
Element ani jeho potomkové se na obrazovku prostě nevykreslí.
- `contents`  
Element se na obrazovku nevykreslí, ale jeho potomkové ano.

Zobrazení typu `contents` funguje tak, jako by byl ve DOM stromu nahrazen jeho obsahem (včetně pseudoprvků jako `::before` a `::after`). Podle všeho však toto není správně implementováno ve všech prohlížečích.

<figure>
<img src="../dist/images/original/vdlayout/css-display-etc.png" width="1600" height="450" alt="CSS display - list-item, none, contents">
<figcaption markdown="1">
*Další typy zobrazení v CSS.*
</figcaption>
</figure>

Podívejme se na CodePen s možností přepínat tyto dvě hodnoty.

CodePen: [cdpn.io/e/zYKmaMb](https://codepen.io/machal/pen/zYKmaMb?editors=0000)

Podpora nezobrazení pomocí `none` je samozřejmě plná.

Hodnotu `contents` zvládají všechny prohlížeče kromě Internet Exploreru, ale podle webu CanIUse je s ní spojeno několik chyb v prohlížečích vycházejících z jádra Chromium, které souvisejí s přístupností. [caniuse.com/css-display-contents](https://caniuse.com/css-display-contents)

## Hodnoty s více klíčovými slovy {#viceslovna}

Tohle je nová věc, do specifikace přidaná v druhé polovině roku 2020. Zatím to zvládá jen Firefox, ale věnovat se tomu musíme. Proč? Protože se mi to líbí.

Vzpomínáte si, když jsem psal o různých typech zobrazení – vnitřním a vnějším? Pokud ne, rychle proskenujte začátek tohoto textu nebo jeho nadpisy. Pak pochopíte, proč mi víceslovné hodnoty pro vlastnost `display` dávají smysl.

Výše uvedené hodnoty lze totiž brát jako zkratky pro víceslovná označení vnitřního, vnějšího nebo speciálního zobrazení.

<div class="rwd-scrollable f-6" markdown="1">

| Zkratka            | Plný zápis              | Co se generuje                                                 |
| ------------------ | ----------------------- | -------------------------------------------------------------- |
| `none`             | -                       | nic                                                            |
| `contents`         | -                       | prvek vynechán, generují se potomkové                         |
| `block`            | `block flow`            | blokový box                                                    |
| `flow-root`        | `block flow-root`       | blokový box, který vždy vytváří nový kontext formátování bloku |
| `inline`           | `inline flow`           | inline (řádkový) box                                           |
| `inline-block`     | `inline flow-root`      | inline (řádkový) box, který vždy vytváří nový blokový kontext  |
| `run-in`           | `run-in flow`           | run-in box (inline box se speciálními pravidly)                |
| `list-item`        | `block flow list-item`  | blokový box s přídavnou značkou položky seznamu                |
| `inline list-item` | `inline flow list-item` | inline box s přídavnou značkou položky seznamu                 |
| `flex`             | `block flex`            | blokový kontejner flexu                                        |
| `inline-flex`      | `inline flex`           | inline kontejner flexu                                         |
| `grid`             | `block grid`            | blokový kontejner mřížky                                       |
| `inline-grid`      | `inline grid`           | inline kontejner mřížky                                        |
| `table`            | `block table`           | blokový obalový rámeček tabulky                                |
| `inline-table`     | `inline table`          | inline obalový rámeček tabulky                                 |

</div>

Z tabulky je to asi zřejmé, ale pro jistotu ještě tři příklady:

- `display:block` označuje blokový prvek (`block`), který je umístěný v běžném toku dokumentu (`flow`).
- `display:inline-flex` definuje kontejner flexboxu (`flex`), který umístěný v řádku (`inline`).
- `display:list-item` vykreslí prvek seznamu (`list-item`), který je umístěný v běžném toku (`flow`) a zároveň je blokový (`block`).

Také se těšíte, až to budou umět všechny prohlížeče? Zatím jen Firefox, na ostatní se čeká. Podporu sledujte na CanIUse. [caniuse.com/mdn-css_properties_display_multi-keyword_values](https://caniuse.com/mdn-css_properties_display_multi-keyword_values)

<!-- AdSnippet -->

A to je vše, děkuji za pozornost.

Text časem doplním o příklady z praxe a ještě rozvedu ten tabulkový layout. Pokud máte po ruce zajímavá využití novějších hodnot – jako `flow-root`, `contents` nebo `run-in`, budu rád, když je přidáte do komentářů.
