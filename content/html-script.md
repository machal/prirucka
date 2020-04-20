# Značka SCRIPT: Vložení JavaScriptu do HTML

Tentokrát to v příručce vezmeme opravdu o základů.

<!-- TODO obsah -->

Značka `<script>` se používá pro vložení javascriptového kódu nebo odkázání na jeho umístění v samostatném souboru. Je možné do něj ale vložit i datový blok.

V základu je to jednoduché. Do HTML vložíme kus JavaScriptu, který se rovnou provede…

```html
<script>
alert('Ahoj!');
</script>
```

…jenže v praxi je to složitější a právě tento způsob vkládání má svá rizika. Čtěte proto prosím dále.

## Značka `<script>` {#script}

…a nebo z HTML odkážeme na externí soubor s javascriptovým kódem:

```html
<script src="script.js"></script>
```

`script.js` pak obsahuje:

```js
alert('Ahoj!');
```

### Atributy {#script-atributy}

Všechny atributy značky `<script>` jsou nepovinné.

<div class="rwd-scrollable f-6"  markdown="1">

| Atribut          | K čemu slouží?                           |
|------------------|------------------------------------------|
| `src`            | Obsahuje URL na externí javascriptový soubor, např. `src="/js/script.js"`.      |
| `type`           | Účel skriptu: <br>– `type="module"` – jde o [javascriptový modul](js-moduly.md)<br>– `type="…"` – jde o [datový blok](#datove-bloky)<br>– *nic neuvedeno* – jde o běžný skript  |
| `nomodule`       | Označení skriptu, který se neprovede v prohlížečích, které podporují JS moduly. Viz návrhový vzor module/nomodule.  |
| `async`          | Zajistí asynchronní spouštění skriptu. Neblokuje zpracování HTML.  |
| `defer`          | Zajistí asynchronní spouštění skriptu. Neblokuje zpracování HTML a garantuje pořadí spouštění.  |
| `crossorigin`    | Jak se má zacházet se skripty umístěnými na jiné doméně než je HTML ([CORS](https://cs.wikipedia.org/wiki/CORS))? Důležité hlavně u modulů, kde je to povinné.   |
| `integrity`      | Meta-data pro zajištění integrity skripty dodávaného z jiné domény.  Jen pro CORS. 
| `referrerpolicy` | Jakou politikou odkazujícího serveru se řídit při stahování dalších skriptů pomocí fetch nebo import.  Opět jen pro CORS |

</div>  

Poznámky:

1. V atributu `type` se dříve uváděl MIME typ, např. `text/javascript`. Mělo to svůj účel - prohlížeče uměly různé větve vývoje JavaScriptu. Dneska je to zbytečné a [ve specifikaci](https://html.spec.whatwg.org/multipage/scripting.html#attr-script-type) se dokonce píše, že *authors should omit the type attribute*.
2. Atribut `defer` se nemá uvádět se na [javascriptových modulech](js-moduly.md). Ty jsou deferovány, tzn. odkládány vždy.
3. Můžete uvést atributy `async` i `defer` naráz, pokud potřebujete kompatibilitu s hodně starými Internet Explorery (9 a staršími). Ty totiž nepodporují `async`, ale umí alespoň `defer`. V moderních prohlížečích dostane přednost `async`.

## Vložení JavaScriptu do stránky {#vlozeni}

Projděme si pět základních způsobů vložení javascriptového kódu do stránky. Je to připravené v [Gistu](#TODO), který si můžete stáhnout a vyzkoušet v lokálním prostředí.

V praxi se doporučuje používat raději jen první tři:

### Externí soubor {#vlozeni-soubor}

HTML vypadá takto:

```html
<script src="script.js"></script>
```

`script.js` pak obsahuje:

```js
console.log('Ahoj, jsem vložený z externího script.js!');
```

Za mě jde o ideální způsob vložení, protože se JS kód separuje do zvláštního souboru, který je možné např. ukládat do cache prohlížeče na mnohem delší dobu než HTML. No a taky je v tom pak větší pořádek.

Velmi důležité je také místo, kam se JS soubor chystáme vložit. Je to [složitější](js-async-defer-module.md), ale pokud to chcete zjednodušit, pak:

- U konvenční obsahových webů, kde JS představuje dopl raději ne do `<head>`. Lepší místo je před uzavírací značku `</body>`.
- U webů postavených čistě na frontendovém JS je pak skripty nutné do `<head>` vložit.

→ *Související: [Vkládání JavaScriptu jako async, defer a type="module"](js-async-defer-module.md)*

### Přímo v HTML {#vlozeni-html}

Můžete jej dát kamkoliv do HTML a něco vám vypíše do konzole prohlížeče:

```html
<script>
console.log('Ahoj, jsem vložený přímo do HTML!');
</script>
```

Občas se to hodí, ale není to dobré z pohledu [rychlosti webu](https://www.vzhurudolu.cz/rychlost-nacitani). Takový skript je z povahy synchronní, takže se na něj čeká při parsování HTML a zdrží tak vykreslení stránky. Čím složitější operace vykonává, tím horší to bude.

Opravdu nepříjemná pak může být situace, kdy se v kódu vloženém v dokumentu volá nějaká knihovna, například jQuery:

```html
<head>
  <script src="jquery.js"></script>
</head>
<body>
  <script>
    $(function(){ /* Kód závislý na jQuery */ });
  </script>
</body>
```

V takovém případě se ještě před vykonáním blokujícího kódu musí také vždycky počkat na stažení knihovny. Tu je pak nutné opět spouštět blokucícím způsobem, tedy bez atributů [`async` nebo `defer`](js-async-defer-module.md).

### Na atribut události {#vlozeni-atribut}

Dříve se používal i tento způsob:

```html
<h1 onmouseover="console.log('Ahoj, jsem vložený na atribut onmouseover!')">
  Nadpis
</h1>
```

Prostě se JS kód uvedl přímo k atributu, kterými je možné do HTML vkládat [javascriptové události](https://jecas.cz/pripojeni-udalosti): `onclick`, `onmouseover`, `onload` a další.

Z pohledu organizace kódu to není úplně dobrá cesta, ale pro občasné menší hacky se to hodí znát.

### Na atribut události {#vlozeni-atribut}

Veteráni si jistě vzpomenou na zlatou éru této prasárničky. Leckde ještě neskončila:

```html
<a href="javascript:console.log('Ahoj, jsem vložený přes odkaz v HTML!')">
  Odkaz
</a>
```

Opět platí, že pro občasné hacky je dobré tohle znát, ale jako standardní způsob vkládání JavaScriptu do HTML bychom to nedoporučili. Opět platí, že tímto způsobem organizovaný kód nebude nejpřehlednější.

Obvykle toto vzniká ve chvíli, kdy chce vývojář nebo vývojářka z odkazu udělat spouštěč funkce. Pro tyhle účely zde ale máme [element `<button>`](button.md). Prvky `<a>` jsou určené pro navigování uživatele na jiné URL.

<!-- TODO

## Datové bloky

* Datové bloky
* https://developers.google.com/search/docs/guides/intro-structured-data
* https://html.spec.whatwg.org/multipage/scripting.html#data-block + <script src="game-engine.js">


## Značka `<noscript>`

* Zobrazení alternativního obsahu, pokud prohlížeč (nebo např. robot vyhledávače) neumí zpracovat JS nebo pokud si ho uživatel zakázal.
* "if a script type on the page is unsupported” https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript
* https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element
* head - only link, style, and meta elements.
* outside of head – The noscript element's content model is transparent,
* noscript can't be nested


## Document.currentScript

* https://developer.mozilla.org/en-US/docs/Web/API/Document/currentScript

 -->
