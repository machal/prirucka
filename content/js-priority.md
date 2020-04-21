# JavaScript: Priority stahování a spouštění

Navážu zde na [výborný přehled](https://medium.com/dev-channel/javascript-loading-priorities-in-chrome-57c54cfa6672) od autorů Chrome a doplním jej dalšími postřehy.

Jak je to s prioritami JavaScriptu při různých způsobech servírování?

| Servírování                                 | Stahování | Spouštění |
|---------------------------------------------|-----------|-----------|
| [1) `<script>` uvnitř `<head>`](#1)         |   +++     | ++++      |
| [2) `<script type="module" async>`](#2)     |   +++     | +++       |
| [3) `<script async>`](#3)                   |   ++      | +++       |
| [4) `<script defer>`](#4)                   |   ++      | +         |
| [5) `<script>` na konci `<body>`](#5)       |   +++     | ++        |
| [6) `<script defer>` na konci `<body>`](#6) |   +       | +         |

→ *Související: [Vkládání JS jako async, defer, module a vliv na rychlost webu](js-async-defer-module.md)*.

Pojďme se teď na jednotlivé typy podívat podrobněji:

## 1) `<script>` uvnitř `<head>` {#1}

Nejvyšší priorita všeho a zablokování parsování dokumentu během stahování i spouštění. Taková ta klasika když chcete zabít rychlost webu.

<!-- AdSnippet -->

V některých situacích je ale takováto priorita potřeba. Obecně se doporučuje pro skripty, které ovlivňují metriku [první zobrazení obsahu (FMP)](metriky-rychlosti.md#FCP) a jsou zároveň renderují prvky nad zlomem stránky. Dále pro knihovny, které musejí předcházet jiným. Příklady:

- Knihovny, které renderují obsah [SPA](http://jecas.cz/spa) (React, Angular, Vue…).
- [Polyfilly](polyfill.md).
- Detekční knihovny typu [Modernizr](https://modernizr.com/).
- Skripty pro A/B testing.

## 2) `<script type="module" async>` {#2}

Vysoká priorita stažení i spouštění, které přeruší HTML parser.

[Javascriptové moduly `type="module"`](js-moduly.md) jsou poměrně nové. Jde o vkládání ECMAScript modulů do stránky. Má to podporu takřka všech [moderních prohlížečů](https://caniuse.com/#search=module).

Podle zdrojového článku je to vhodné pro skripty, které generují obsah pro FMP, který je až pod zlomem stránky. Nebo pro skripty, které stahují dynamický obsah. Příklad:

- Vykreslení něčeho do `<canvas>`.

## 3) `<script async>` {#3}

Nízká priorita stažení. Spouštění má ale vysokou prioritu a přeruší HTML parser.

`async` skripty při stahování nepřeruší parsování stránky. Stahují se asynchronně v jiném vlákně a prohlížeč na ně tedy nečeká pro zobrazení stránky. Jakmile je má ale stažené, spustí je okamžitě. To se ale může minimálně v Chrome změnit. Jeho autoři [zvažují změnu spouštěcí priority](https://docs.google.com/document/d/16rHWLu-0abC9WWLhLBFlIRtbSnOFzhKAXsCamsp0oAs/edit#) těchto skriptů na nízkou.

Nevýhodou `async` skriptů je to, že není možné garantovat pořadí jejich provádění. Tohle nastavení není proto vhodné pro posílání knihoven a jejich závislostí v jednotlivých souborech.

Příklad použití:

- Nemáte [HTTP/2](http-2.md) a tedy šetříte dotazy na server. Všechny JS soubory sbalíte do jednoho a ten vyšlete jako `async`, aby vám neblokoval zobrazení stránky.

## 4) `<script defer>` {#4}

Nízká priorita stahování. Velmi nízká priorita spuštění – Chrome tyhle skripty pouští až po těch, které jsou [na konci dokumentu](#5).

Na rozdíl od `async` je u `defer` skriptů garantováno pořadí provedení, tyhle skripty mají navíc nízkou prioritu spouštění. Stahují se ale opět asynchronně, takže nám nezablokují zobrazení stránky.

<!-- AdSnippet -->

V odkazovaném článku se obecně doporučuje použití pro skripty, které generují nekritický obsah nebo vlastnosti, které použije méně než polovina uživatelů webu. Zkusím ale raději nabídnout konkrétní příklad použití:

- Obsah třetích stran, který není pro stránku nezbytný: Facebook pluginy, komentářové služby, reklamní skripty…  

## 5) `<script>` na konci `<body>` {#5}

Vysoká priorita stahování. Spuštění po konci práce HTML parseru.

Jde o dobrý způsob, jak zrychlit zobrazení stránky bez nutnosti stažení JavaScriptu. Je ale dobré vědět, že všechny zde uvedené skripty budou mít vysokou prioritu stahování, takže vám můžou odložit důležitější prvky typu obrázků nutných pro zobrazení uživatelského rozhraní. Dobrý příklad použití je tento:

- Servírování knihoven typu jQuery a jejich pluginů na prezentačních webech.

## 6) `<script defer>` na konci `<body>` {#6}

Nejnižší priorita stahování i spouštění.

Je to vhodné pro skripty, které zajišťují zřídka používané vlastnosti rozhraní stránky. Příklady:

- Stažení podobných článků.
- Widgety pro dávání zpětné vazby, zobrazení chatu s uživatelem a tak dále.

<!-- AdSnippet -->
