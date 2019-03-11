# JavaScript: Priority stahování a spouštění v Chrome

Navážu zde na [výborný přehled](https://medium.com/dev-channel/javascript-loading-priorities-in-chrome-57c54cfa6672) od autorů Chrome a doplním jej dalšími postřehy.

Jak je to s prioritami JavaScriptu při různých způsobech servírování?

| Servírování                                 | Stahování | Spouštění |
|---------------------------------------------|-----------|-----------|
| [1) `<script>` uvnitř `<head>`](#1)         |   +++     | ++++      |
| [2) `<script type="module" async>`](#2)     |   +++     | +++       |
| [3) `<script async>` + preload](#3)         |   +++     | +++       |
| [4) `<script async>`](#4)                   |   ++      | +++       |
| [5) `<script defer>`](#5)                   |   ++      | +         |
| [6) `<script>` na konci `<body>`](#6)       |   +++     | ++        |
| [7) `<script defer>` na konci `<body>`](#7) |   +++     | +         |


Pojďme se teď na jednotlivé typy podívat podrobněji:

## 1) `<script>` uvnitř `<head>` {#1}

Nejvyšší priorita všeho a zablokování parsování dokumentu během stahování i spouštění. Taková ta klasika když chcete zabít rychlost webu.

U některých skriptů je to ale nejvyšší priorita potřeba. Obecně se doporučuje pro skripty, které ovlivňují metriku [první zobrazení obsahu](metriky-rychlosti.md#FCP) a jsou zároveň renderují prvky nad zlomem stránky. Dále pro knihovny, které musejí předcházet jiným.

- knihovny, které renderují obsah [SPA](http://jecas.cz/spa) (React, Angular, Vue…)
- pro [polyfilly](polyfill.md)
- detekční knihovny typu [Modernizr](https://modernizr.com/)
- skripty pro A/B testing

## 2) `<script type="module" async>` {#2}



## 3) `<script async>` + preload {#3}

## 4) `<script async>` {#4}

## 5) `<script defer>` {#5}

## 6) `<script>` na konci `<body>` {#6}

## 7) `<script defer>` na konci `<body>` {#7}
