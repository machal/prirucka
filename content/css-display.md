# Vlastnost CSS display

<div class="book-index" data-book-index="display"></div>

Vlastnost `display` slouží k určení způsobu vykreslení prvku v CSS. 

Na tom nic není. Tento článek se vám ale pokusí ukázat, že může jít i o relativně komplikovanou věc.

<div class="ebook-only" markdown="1">

<div class="book-index" data-book-index="Formátovací kontext"></div>

Abyste totiž mohli začít vytvářet nějaký typ rozvržení v CSS, musíte většinou nejprve rodičovskému prvku nastavit určitý typ „formátovacího kontextu“. K tomu právě obvykle slouží vlastnost `display`.

</div>

Vy, kteří znáte její základní hodnoty jako `block` nebo `inline`, možná budete překvapení, že od roku 2020 zde máme novou verzi specifikace, jež přidává řadu dalších možností – „CSS Display Module Level 3“. [vrdl.in/w3disp](https://www.w3.org/TR/css-display-3/)

Začneme jednoduchým přehledem nejužitečnějších hodnot vlastnosti `display`. Většinu z nich asi znáte.

<div class="rwd-scrollable table-1-quarter f-6" markdown="1">

| **Hodnota**               |  **Jak se zobrazuje** |
|---------------------------|-----------------------|
| `inline`                  |  Řádkový element, který netvoří zalomení před sebou nebo po sobě (výchozí nastavení).        |
| `block`                   |  Blokový element. Zalomí řádky před sebou i po sobě. |
| `inline-block`            |  Vnitřně se jedná o blokový element, zvnějšku inline, který netvoří zalomení.                 |
| `flex`, `inline-flex`     |  Vytvoří [flexboxové rozvržení](css-flexbox.md). Inlinová varianta nezalomí řádky před a po.  |
| `grid`, `inline-grid`     |  Vytvoří [rozvržení do mřížky](css-grid.md). Inlinová varianta nezalomí řádky.  |
| `table`, `inline-table`   |  Rozvržení do tabulky. Inlinová varianta opět tvoří tabulku v řádce.  |
| `none`                    |  Nevykreslí prvek, ale ani jeho potomky.  |

</div>

V tabulce zdaleka nejsou všechny možnosti a jejich specifické vlastnosti, nástrahy a vychytávky. Proto čtěte dál.

Víte například, že…?

- S pomocí [hodnoty `flow-root`](#vnejsi) nemusíte pro „floaty“ používat „clearfix“, tedy reset plovoucího layoutu?
- Prohlížeče nově podporují [víceslovná označení](#viceslovna) jako `inline flex`?
- Pro skrytí prvku existuje kromě hodnoty `none` také [hodnota `contents`](#none-contents). A víte, co umí?

## Vnitřní a vnější zobrazení {#typy}

První věc, kterou si musíme uvědomit, je holý fakt, že podle specifikace nově existují dva typy zobrazení:

- _Vnitřní zobrazení_  
Hodnota vlastnosti `display` určuje, jak prohlížeče rozloží potomky prvku, nebo jinak také vnitřní elementy. Sem patří hodnoty jako `flex`, `grid` nebo `table`.
- _Vnější zobrazení_  
Hodnota definuje, jak se sám prvek zobrazuje vůči svému okolí. Pohled zvenčí. Toto určují hodnoty jako `inline`, `block` nebo `none`.

Máte? Výborně. Toto se nám bude hodit, až budeme hovořit o hodnotách pro více klíčových slov.

## Vnější zobrazení {#vnejsi}

Vnější zobrazení v podstatě určuje roli stylovaného boxu v uspořádání toku stránky.

<figure>
<img src="../dist/images/original/vdlayout/css-display-inline-block.jpg" width="1600" height="450" alt="CSS display - inline a block">
<figcaption markdown="1">
Vlastnost display. Hodnoty pro vnější zobrazení jsou naši staří známí.
</figcaption>
</figure>

Do tohoto typu zobrazení patří následující hodnoty:

- `inline`  
Vytvoří boxík, který je „inline-level“, řádkový. Před sebou a po sobě nic nezalomí, prostě se vykreslí do řádky.
- `block`  
Vygeneruje boxík, který je „block-level“. Zjednodušeně to znamená, že se vykreslí do celé šířky rodiče a zalomí řádky před sebou i po sobě.
- `inline-block`  
Generuje boxík, který se zvenčí chová jako řádkový a uvnitř generuje vždy nový blokový kontext. Mimochodem, specifikace počítá s touto hodnotou do budoucna jen jako s jiným zápisem pro dvojici klíčových slov `inline flow-root`. O tom píšu později.
- `run-in`  
Vygeneruje typ „inline-level“ boxu se zvláštním chováním – pokusí se vložit sám sebe do následujícího blokového prvku. Pokud za prvkem „run-in“ následuje blokový prvek, „run-in“ se stane jeho prvním inline boxem. Pokud bude následovat inlinové pole, stane se z prvku „run-in“ prvek blokový.

V CodePenu si můžete vyzkoušet všechny možnosti.

CodePen: [vrdl.in/azksi](https://codepen.io/machal/pen/wvzYXeg?editors=0000)

Varianta s typem zobrazení `run-in` v mé ukázce chybí, není totiž podporovaná jinde než v [Internet Exploreru](msie.md) (!).

V tomto dědečkovi mezi prohlížeči nefunguje CodePen, takže byste z ukázky nic neměli. Viz podpora na CanIUse.  
[caniuse.com/run-in](https://caniuse.com/run-in)

Dědeček je už ale bohužel mrtvý, takže ani `run-in` vás zajímat nemusí.

## Vnitřní zobrazení {#vnitrni}

Hodnoty vnitřního zobrazení zapínají uvnitř dotčeného prvku nový kontext formátování (k tomu se v CSS používá pojem „formatting context“).

Kontext formátování má vliv na způsob vykreslení vnitřních prvků, případně na chování vlastností aplikovaných na prvek.

- `flow`  
Hodnota `flow` zapíná formátování tokem („flow layout“). To je běžný způsob zobrazení, které je automaticky zapnuto hodnotami `block`, `inline` a `inline-block`. Jde o výchozí režim rozvržení v CSS.
- `flow-root`  
Vytvoří kontejner blokového kontextu (jako `display:block`) a rozloží jeho obsah pomocí toku („flow layout“). Hodnota `flow-root` ale vždy generuje nový kontext formátování bloku pro svůj obsah, takže není například nutné mazat „floaty“ pomocí „clearfixu“. Na této hodnotě je zajímavé, že ji podporují všechny moderní prohlížeče.
- `flex`  
Zapíná formátovací kontext [flexboxu](css-flexbox.md). Ze stylovaného prvku udělá kontejner flexboxu a z přímých potomků flexboxové položky.
- `grid`  
Spouští formátovací kontext [gridu](css-grid.md). Ze stylovaného prvku udělá  kontejner mřížky a z přímých potomků její položky.
- `table`  
Udělá z prvku tabulku. V tomto případě jsou zde ale dva „kontejnery“. `display:table` generuje kontejner tabulky, který vytvoří kontext formátování bloku a obsahuje dodatečně vygenerovaný rámeček tabulky, který vytvoří její kontext formátování.
- `ruby`  
Tohle je exotické a pro středoevropské prostředí nepotřebné. „Ruby anotace“ jsou krátké řady znaků umístěné nad nebo pod základním textem, které se  používají ve východoasijské typografii jako vodítko pro výslovnost. Klidně na to zapomeňte.

Připravil jsem dva vysvětlující CodePeny, na kterých si můžete otestovat to, co vidíte na obrázku.

V prvním máme jednoduše a bez layoutu umístěné tři prvky v jednom rodiči.

CodePen: [vrdl.in/8m9kh](https://codepen.io/machal/pen/KKgGeQQ?editors=0000)

Zajímavější bude druhý CodePen. Všechny tři vnitřní prvky jsou „tekoucí“, floatové:

```css
.container p {
  float: left;
}
```

CodePen: [vrdl.in/lksp8](https://codepen.io/machal/pen/WNGayad?editors=0000)

Výsledek vidíte na obrázku.

<figure>
<img src="../dist/images/original/vdlayout/css-display-outer.jpg" width="1600" height="450" alt="CSS display - inline a block">
<figcaption markdown="1">
*Možnosti hodnot vnitřního zobrazení s vnitřními plovoucími prvky.*
</figcaption>
</figure>

- Běžné tokové zobrazení (`display:flow`) floaty obalit neumí, potřebovali bychom už zmíněný „clearfix“.
- `display:flow-root` floaty obalí, vždy vytvoří nový kontext formátování bloku.
- Na `display:flex` a `display:grid` nemají floaty žádný vliv.
- Na vnitřní prvky v `display:table` floaty vliv mají, protože rodič je zde v běžném tokovém kontextu formátování bloku.

Pojďme ještě projít několik specifických hodnot.

## Generování boxů se značkami: list-item {#list-item}

Zápis `display:list-item` způsobí, že element vygeneruje pseudoprvek `::marker`.

Pokud není zadána žádná hodnota typu vnitřního zobrazení, výchozí bude tokové – jako `display:flow`. Pokud není zadána žádná hodnota typu vnějšího zobrazení, bude výchozí typ blokový – `display:block`.

Náš kontejner díky tomu můžeme stylovat, jako by to byl prvek `<ul>` nebo `<ol>`:

```css
.container {
  list-style-type: square;
}
```

CodePen: [vrdl.in/2bjke](https://codepen.io/machal/pen/gOwqJmq?editors=0000)

První příklad na následujícím obrázku ukazuje zobrazení typu `list-item`.

<figure>
<img src="../dist/images/original/vdlayout/css-display-etc.jpg" width="1600" height="450" alt="CSS display - list-item, none, contents">
<figcaption markdown="1">
*Další typy (ne)zobrazení v CSS.*
</figcaption>
</figure>

Druhou a třetí hodnotu z obrázku probereme hned v následující části.

## Skrytí prvků: hodnoty none a contents {#none-contents}

Ke všem možným metodám ovlivnění vykreslování boxíků na obrazovku musíme přidat i metody _nevykreslování_.

K tomu slouží následující dvě hodnoty vlastnosti `display`.

- `none` – element ani jeho potomci se na obrazovku prostě nevykreslí.
- `contents` – element se na obrazovku nevykreslí, ale jeho potomci ano.

Zobrazení typu `contents` funguje tak, jako by prvek byl ve stromu DOM nahrazen jeho obsahem (včetně pseudoprvků jako `::before` a `::after`).

CodePen: [vrdl.in/u1cvt](https://codepen.io/machal/pen/zYKmaMb?editors=0000)

## Typy zobrazení pro vnitřní rozvržení: hodnoty table- a ruby- {#table-ruby}

Modely zobrazení, které vynucují vnitřní rozvržení, jako je `display:table` a `display:ruby`, mají složitou strukturu s několika různými rolemi, jež mohou jejich potomci plnit.

Jak je uvedeno výše, zápis `display:table` sice vytvoří kontejner tabulky, ale ten vytvoří kontext formátování bloku.

Nedosáhneme tím tedy tabulkového zobrazení. K tomu bychom potřebovali další prvky, které reprezentují řádky a buňky tabulky se správnými hodnotami vlastnosti `display` (`table-row`, `table-cell`…).

Podobné je to s `display:ruby`, jen ty vnitřní prvky jsou jiné.

## Hodnoty s více klíčovými slovy {#viceslovna}

Tohle je nová věc, do specifikace přidaná v druhé polovině roku 2020 posledním prohlížečem, což zde byl Chrome, implementována v roce 2023.

Vzpomínáte si, jak jsem psal o různých typech zobrazení – vnitřním a vnějším? Pokud ne, rychle proskenujte začátek tohoto textu nebo jeho nadpisy. Pak pochopíte, proč mi víceslovné hodnoty pro vlastnost `display` dávají smysl.

Výše uvedené *jednoslovné* hodnoty lze totiž brát jako zkratky pro *víceslovná* označení vnitřního, vnějšího nebo specifického zobrazení.

<div class="rwd-scrollable f-6" markdown="1">

| **Zkratka**        | **Plný zápis**          | **Co se generuje**                                             |
| ------------------ | ----------------------- | -------------------------------------------------------------- |
| `none`             | -                       | nic                                                            |
| `contents`         | -                       | prvek vynechán, generují se potomci                         |
| `block`            | `block flow`            | blokový box                                                    |
| `flow-root`        | `block flow-root`       | blokový box, který vždy vytváří nový kontext formátování bloku |
| `inline`           | `inline flow`           | inlinový (řádkový) box                                           |
| `inline-block`     | `inline flow-root`      | inlinový (řádkový) box, který vždy vytváří nový blokový kontext  |
| `run-in`           | `run-in flow`           | run-in box (inlinový box se specifickými pravidly)                |
| `list-item`        | `block flow list-item`  | blokový box s přídavnou značkou položky seznamu                |
| `inline list-item` | `inline flow list-item` | inlinový box s přídavnou značkou položky seznamu                 |
| `flex`             | `block flex`            | blokový kontejner flexu                                        |
| `inline-flex`      | `inline flex`           | inlinový kontejner flexu                                         |
| `grid`             | `block grid`            | blokový kontejner mřížky                                       |
| `inline-grid`      | `inline grid`           | inlinový kontejner mřížky                                        |
| `table`            | `block table`           | blokový obalový rámeček tabulky                                |
| `inline-table`     | `inline table`          | inlinový obalový rámeček tabulky                                 |

</div>

Z tabulky je to asi zřejmé, ale pro jistotu ještě uvádím tři příklady:

- `display:block` označuje blokový prvek (`block`), který je umístěný v běžném toku dokumentu (`flow`).
- `display:inline-flex` definuje kontejner flexboxu (`flex`), který je umístěný v řádku (`inline`).
- `display:list-item` vykreslí prvek seznamu (`list-item`), který je umístěný v běžném toku (`flow`) a zároveň je blokový (`block`).

<!-- AdSnippet -->

A to je k vlastnosti `display` vše, děkuji za pozornost.

<div class="web-only" markdown="1">

Text časem doplním o příklady z praxe a ještě rozvedu ten tabulkový layout. Pokud máte po ruce zajímavá využití novějších hodnot – jako `flow-root`, `contents` nebo `run-in`, budu rád, když je přidáte do komentářů.

</div>
