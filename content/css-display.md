# CSS vlastnost display

Vlastnost `display` slouží k určení způsobu vykreslení prvku. Může to být i relativně komplikovaná věc a má spoustu nových hodnot, které nepodporují všechny prohlížeče.

Ale víte co? Začneme jednoduchým přehledem nejužitečnějších hodnot.

| Hodnota                   |  Jak se zobrazuje |
|---------------------------|-------------------|
| `inline`                  |  Řádkový element, který netvoří zalomení před sebou nebo po sobě. (výchozí)        |
| `block`                   |  Blokový element. Zalomí řádky před sebou i po sobě. |
| `inline-block`            |  Vnitřně se jedná o blokový element, zvnějšku inline, který netvoří zalomení.                 |
| `flex`, `inline-flex`     |  Vytvoří flexové rozvržení. Inline varianta nezalomí řádky před a po.  |
| `grid`, `inline-grid`     |  Vytvoří rozvržení do mřížky. Inline varianta opět nezalomí řádky.  |
| `table`, `inline-table`   |  Rozvržení do tabulky. Inline varianta opět tvoří tabulku v řádce.  |
| `none`                    |  Nevykreslí prvek, ale ani jeho potomky.  |

V tabulce zdaleka nejsou všechny vlastnosti a popsány všechny jejich možnosti, nástrahy a vychytávky. Proto čtěte dál.

V CSS je stále těžší najít vlastnost, která by byla snadná k pochopení a naučení. Možná to překvapí i vás, zkušenější, ale docela široký záběr člověk potřebuje i pro vstřebání vlastnosti `display`.

Pojďme se na to teď podívat.

## Vnitřní a vnější zobrazení {#typy}

První věc, kterou si musíme uvědomit, je holý fakt, že existují dva typy zobrazení:

- _Vnitřní zobrazení_  
Hodnota vlastnosti `display` určuje, jak jsou rozloženi potomci prvku. Sem patří hodnoty jako `flex`, `grid` nebo `table`.
- _Vnější zobrazení_  
Definuje, jak se sám prvek podílí na rozložení stránky. Toto definují hodnoty jako `inline`, `block` nebo `none`.

Máte? Výborně. Toto se nám bude hodit, až budeme hovořit o hodnotách pro více klíčových slov.

## Vnější zobrazení {#vnejsi}

Vnější zobrazení v podstatě určuje roli stylovaného boxu v uspořádání toku stránky.

Do tohoto typu zobrazení patří následující hodnoty:

- `block`  
Vygeneruje boxík, který je „block-level“. Zjednodušeně to znamená, že se vykreslí do celé šířky rodiče a zalomí řádky před sebou i po sobě.
- `inline`  
Vytvoří boxík, který je „inline-level“, řádkový. Před sebou a po sobě nic nezalomí, prostě se vykreslí do řádky.
- `inline-block`  
Generuje boxík, se zvnějšku chová jako řádkový a vevnitř generuje vždy nový blokový kontext. Mimochodem, specifikace s touto hodnotou do budoucna počítá jen s alternativou pro nový zápis `inline flow-root`. O tom píšu později.
- `run-in`  
Vygeneruje typ „inline-level“ boxu se zvláštním chováním – pokusí se sloučit do následujícího blokového prvku. Pokud za „run-in“ prvkem následuje blokový prvek, „run-in“ se stane jeho prvním inline boxem. Pokud bude následovat inline pole, stane se z „run-in“ prvku blokový. Toto ale bohužel není podporováno jinde než v Internet Exploreru (!). [caniuse.com/run-in](https://caniuse.com/run-in)

V CodePenu si můžete vyzkoušet všechny možnosti.

CodePen: [cdpn.io/e/wvzYXeg](https://codepen.io/machal/pen/wvzYXeg?editors=0000)

Varianta s display `run-in` v mé ukázce chybí. Museli byste ji zkoušet v IE, jenže v tomto dědečkovi mezi prohlížeči nefunguje CodePen.

<!-- 

## Vnitřní zobrazení {#vnitrni}

## Generování boxů se značkami: `list-item` {#list-item}

## Typy zobrazení pro vnitřní rozvržení: `table-*` a `ruby-*` {#table-ruby}

## Generování boxů: `none` a `contents` {#none-contents}

## Hodnoty s více klíčovými slovy {#multi-keyword}

## Podpora {#podpora}

 -->
