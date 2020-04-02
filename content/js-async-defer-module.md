# Vkládání JavaScriptu jako async, defer a type="module" versus rychlost webu

Existuje několik možností, jak vložit JavaScript do HTML kódu. Z pohledu rychlosti načítání je ale jeden úplně nejhorší – vkládání do `<head>` bez jakéhokoliv dalšího nastavení:

```html
<!-- Takhle to prosím nedělejte -->
<head>
  <script src="script1.js"></script>
  <script src="script2.js"></script>
</head>
```

<small>(Vynechme nyní prosím pro zjednodušení, že existují situace, kdy je takového vložení v pořádku – např. u javascriptových aplikací (SPA) nebo i u statických webů v případě vložení JS souborů, u kterých je zablokování parsování na místě.)</small>

V případě takto vloženého JS musí prohlížeč přestat parsovat HTML, soubory stáhnout a jeden po druhém spustit. Až pak může pokračovat v parsování, vyskládání DOMu a až poté může myslet na vykreslení čehokoliv na stránce. Čekat prostě musí, protože v externích skriptech může být kód, který může ovlivnit HTML kód, například `document.write`.

Tento způsob vložení nám pak v [měřeních rychlosti webu](metriky-rychlosti.md) odsune události jako [First Paint (FP)](metrika-fp.md) a [First Contentful Paint (FCP)](metrika-fcp.md), které jsou důležité pro udržení pozornosti uživatelů a uživatelek našich webů.

## Různé metody vložení JavaScriptu do stránky {#metody}

Začněme grafem, který je v komunitě známý a populární.

<figure>
<img src="../dist/images/original/todo.jpg" alt="">
<figcaption markdown="1">
*Obrázek: Jak různé metody vložení souboru ovlivňují načasování stažení a provedení javascriptového kódu?. Zdroj: [HTML Living Standard](https://html.spec.whatwg.org/multipage/scripting.html).*
</figcaption>
</figure>

### `<script>` {#metody-script}

Klasický skript, který přeruší parsování - stáhne se, vyhodnotí a pak teprve pokračuje parsování HTML.

Je garantováno pořadí provedení podle pořadí uvedení v HTML kódu.

### `<script defer>` {#metody-script-defer}

Odložené spuštění. Klasický skript, který se stáhne souběžně s parsováním. Je vyhodnocen, až prohlížeč skončí s parsováním stránky.

Paké při tomto způsobu vložení je garantováno pořadí provedení.

Atribut `defer` je určený jen pro klasické skripty, protože javascriptové moduly jsou „deferovány“ běžně.

### `<script async>` {#metody-script-async}

Asynchronní spouštění. Klasický skript se stáhne souběžně s parsováním, ale je vyhodnocen, jakmile bude stažený, tedy  potenciálně před dokončením parsování HTML.

Pozor, není zaručeno pořadí provedení.

### `<script type="module">` {#metody-script-module}

[Javascriptový modul](js-moduly.md). Skript a jeho závislosti (tzn. další moduly) se stáhnout souběžně s parsováním. Je vyhodnocen, až prohlížeč skončí s parsováním stránky.

Pořadí provedení je garantováno.

Modul se tedy ve výchozím nastavení jako `defer`, takže není potřeba uvádět tento atribut.

### `<script type="module" async>` {#metody-script-module-async}

Modul, který se chová asynchronně. Skript a jeho závislosti (tzn. další moduly) se stáhnou souběžně s parsováním. Je vyhodnocen, jakmile bude k stažený (potenciálně před dokončením parsování).

### Vložení `<script>` před `</body>` {#metody-script-module-async}

Na závěr jsem si nechal speciální variantu, které je oprávněně velmi populární. Když JS vložíte na konec `<body>`, získáte tím odblokování parsování HTML – za JS už nenásleduje žádná struktura, kterou by javascriptový kód mohl změnit.

Zároveň je garantováno pořadí provedení. Takto vložený kód se tedy chová jako `defer`, ale s jedním rozdílem – má vyšší prioritu stažení i provedení.

[Priority stažení a provádění JavaScriptu](js-priority.md) jsou totiž další důležitý rozměr při rozhodování, jak JS do stránky vložit.

Shrňme si to ve zjednodušené tabulce.

### Shrnutí různých typů vložení

<figure>
<div class="rwd-scrollable"  markdown="1">
| Způsob vložení                 | Neblokuje zobrazení? | Garantuje pořadí? | Priorita |
|--------------------------------|:--------------------:|:-----------------:|:--------:|
| `<script>`                     |                      |         +         |  ++++    |
| `<script defer>`               |            +         |         +         |  ++      |
| `<script async>`               |            +         |                   |  +++     |
| `<script type="module">`       |            +         |         +         |  +++     |
| `<script type="module" async>` |            +         |                   |  +++     |
| `<script>` před `</body>`      |            +         |         +         |  +++     |
</div>  
<figcaption markdown="1">
*Tabulka: TODO*
</figcaption>

<!-- <script type="module" async> vs <script type="module"> priority -->

</figure>

<!-- TODO tabulka -->

## Kdy máme co použít? {#kdy-co}

<!-- TODO různé typy -->

## Ukázka stránky {#ukazka}

<!-- TODO viz přednáška -->
