# Značka SCRIPT: Vložení JavaScriptu do HTML

Tentokrát to v příručce vezmeme opravdu od základů, ale do hloubky. Pojďme se zaměřit na vkládání JavaScriptu do stránky.

Obsah:

<div markdown="1" id="toc" class="f-6">
- [Značka SCRIPT](#script)
- [Vložení do stránky](#vlozeni)
- [Datové bloky](#datove-bloky)
- [Značka NOSCRIPT](#noscript)
</div>

Značka `<script>` se používá pro vložení javascriptového kódu nebo odkázání na jeho umístění v samostatném souboru. Je možné do něj ale vložit i datový blok.

<!-- AdSnippet -->

V základu je to jednoduché. Do HTML vložíme kus JavaScriptu, který se rovnou provede…

```html
<script>
alert('Ahoj!');
</script>
```

… jenže v praxi je to složitější a právě tento způsob vkládání má svá rizika. Čtěte proto prosím dále.

## Značka `<script>` {#script}

… a nebo z HTML odkážeme na externí soubor s javascriptovým kódem:

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
| `nomodule`       | Označení skriptu, který se neprovede v prohlížečích, jenž podporují JS moduly. Viz návrhový vzor [module/nomodule](js-moduly.md#module-nomodule).  |
| `async`          | Zajistí asynchronní spouštění skriptu. Neblokuje zpracování HTML.  |
| `defer`          | Zajistí asynchronní spouštění skriptu, neblokuje zpracování HTML a garantuje pořadí spouštění.  |
| `crossorigin`    | Jak se má zacházet se skripty umístěnými na jiné doméně než je HTML? Týká se [CORS](https://cs.wikipedia.org/wiki/CORS). Důležité to je hlavně u modulů, kde je to povinné.  |
| `integrity`      | Meta-data pro zajištění integrity skriptu dodávaného z jiné domény. Jen pro CORS.
| `referrerpolicy` | Jakou politikou odkazujícího serveru se řídit při stahování dalších skriptů pomocí `fetch` nebo `import`.  Opět jen pro CORS |

</div>  

Poznámky:

1. V atributu `type` se dříve i u běžných skriptů uváděl MIME typ, např. `text/javascript`. Mělo to svůj účel - prohlížeče totiž uměly různé větve vývoje JavaScriptu. Dneska je to zbytečné a [ve specifikaci](https://html.spec.whatwg.org/multipage/scripting.html#attr-script-type) se dokonce píše, že „authors should omit the type attribute“.
2. Atribut `defer` se nemá uvádět se na [javascriptových modulech](js-moduly.md). Ty jsou deferovány (odloženě spouštěny) vždy.
3. Můžete uvést atributy `async` i `defer` naráz, pokud potřebujete kompatibilitu s hodně starými Internet Explorery (verze 9 a ještě více letitými seniory). Ty totiž nepodporují `async`, ale umí alespoň `defer`. V moderních prohlížečích dostane v případě uvedení obou atributů přednost `async`.

## Vložení JavaScriptu do stránky {#vlozeni}

Projděme si pět základních způsobů vložení javascriptového kódu do stránky.

<!-- AdSnippet -->

V praxi doporučuji používat raději jen první tři:

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

<div class="related" markdown="1">
- [Moduly v JavaScriptu](js-moduly.md)
- [Priority stahování JavaScriptu](js-priority.md)
- [JavaScript v AMP](amp-javascript.md)
</div>

Velmi důležité je také místo, kam se JS soubor chystáme vložit. Je to [složitější](js-async-defer-module.md), ale pokud to chcete zjednodušit, pak:

- U konvenční obsahových webů, kde JS představuje doplnění uživatelského prožitku raději ne do `<head>`. Lepší místo je před uzavírací značku `</body>`.
- U webů postavených čistě na frontendovém JS (SPA) je pak skripty nutné do `<head>` vložit.

→ *Související: [Vkládání JavaScriptu jako async, defer a type="module"](js-async-defer-module.md)*

### Přímo v HTML {#vlozeni-html}

Nějaký kus JS kódu můžete dát kamkoliv do HTML:

```html
<script>
console.log('Ahoj, jsem vložený přímo do HTML!');
</script>
```

Tento uvedený vám něco vypíše do konzole prohlížeče.

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

V takovém případě se ještě před vykonáním blokujícího kódu musí také vždycky počkat na stažení knihovny. Tu je pak nutné opět spouštět blokujícím způsobem, tedy bez atributů [`async` nebo `defer`](js-async-defer-module.md).

### Na atribut události {#vlozeni-atribut}

Dříve se používal i tento způsob:

```html
<h1 onmouseover="console.log('Ahoj, jsem vložený na atribut onmouseover!')">
  Nadpis
</h1>
```

Prostě se JS kód uvedl přímo k atributu, kterými je možné do HTML vkládat [javascriptové události](https://jecas.cz/pripojeni-udalosti): `onclick`, `onmouseover`, `onload` a další.

Z pohledu organizace kódu to není úplně dobrá cesta, ale pro občasné menší čáry-máry se to hodí znát.

### V odkazu {#vlozeni-odkaz}

Veteráni si jistě vzpomenou na zlatou éru této prasárničky. Leckde ještě neskončila:

```html
<a href="javascript:console.log('Ahoj, jsem vložený přes odkaz v HTML!')">
  Odkaz
</a>
```

Opět platí, že pro občasné hacky je dobré tohle znát, ale jako standardní způsob vkládání JavaScriptu do HTML bych to nedoporučil. Tímto způsobem organizovaný kód nebude nejpřehlednější.

Obvykle toto vzniká ve chvíli, kdy chce vývojář nebo vývojářka z odkazu udělat spouštěč funkce. Pro tyhle účely zde ale máme [element `<button>`](button.md). Prvky `<a>` jsou určené pro navigování uživatele na jiné URL.

## Datové bloky {#datove-bloky}

Jak už jsem uvedl, značka `<script>` může obsahovat také data pro naše programy napsané v JavaScriptu. Ze [specifikace](https://html.spec.whatwg.org/multipage/scripting.html#data-block) si vypůjčím tento pěkný příklad:

```html
<script src="game-engine.js"></script>
<script type="text/x-game-map">
........U.........e
o............A....e
.....A.....AAA....e
.A..AAA...AAAAA...e
</script>
```

Nejprve si zde stáhneme onen program – hru v `game-engine.js` a pak ji nakrmíme daty. Asi jste si všimli atributu `type="text/x-game-map"`. Zde se vkládá o [MIME type](https://cs.wikipedia.org/wiki/Typ_internetového_média) (alias typ internetového média), který si buď vyberete z existujících nebo napíšete vlastní, jako v tomto případě.

Vy zkušenější ale znáte jeden konkrétní případ použití datových bloků – pro [strukturovaná data (Rich Snippets)](rich-snippets.md), kterými se ve stránkách dává obsah vyhledávačům. Slouží k tomu formát JSON-LD:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "http://www.example.com",
  "name": "Unlimited Ball Bearings Corp.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-401-555-1212",
    "contactType": "Customer service"
  }
}
</script>
```

Tímto například definujeme typ obsahu [Organization](https://schema.org/Organization) a můžeme doufat, že se nám nějak pěkně zobrazí ve výsledcích vyhledávání Googlu.

## Značka `<noscript>` {#noscript}

Když už umíme vložit JavaScript do stránky, měli bychom umět obstarat také alternativní obsah pro případy, kdy z nějakých důvodů [skripty nepoběží](https://jecas.cz/bez-javascriptu).

Značka `<noscript>` zajistí zobrazení alternativního obsahu, pokud:

- prohlížeč (nebo např. robot vyhledávače, obecně *klient*) neumí zpracovat JS,  
- pokud si JavaScript uživatel zakázal,
- pokud klient nepodporuje typ skriptu uvedený v atributu `type=""`.

Raději zdůrazním, že obsah z `<noscript>` se nepoužije v případě, že JavaScript na stránce z nějakého důvodu selže chybou v kódu.

Příklad na použití této značky můžeme vzít z oblasti [líného načtení obrázků](lazy-loading-obrazku.md):

```html
<img data-src="obrazek.jpg" …>
<noscript>
  <img src="obrazek.jpg" …>
</noscript>
```

Počítáme s tím, uživateli JavaScriptem změníme `data-src` na `src`. Klientům, kteří JS nerozumí pak nabízíme `<noscript>` alternativu. Jen pro jistotu připomínám, že v případě použití doporučovaného nativního líného načtení toto není potřeba řešit.

Obsah `<noscript>` může být různý podle jeho umístění:

- Pokud je umístěný v prvku `<head>`, může `<noscript>` obsahovat pouze prvky `<link>`, `<style>` a `<meta>`.
- Ostatní prvky `<noscript>` mohou obsahovat cokoliv vás napadne.

Prvky `<noscript>` mají takzvaně [transparentní obsahový model](https://html.spec.whatwg.org/dev/dom.html#transparent-content-models), takže dědí chování od nadřazeného prvku.

`<noscript>` se nesmí zanořovat jeden do druhého.

A to je vše, milé čtenářky a milí čtenáři. Zapomněl jsem na něco? Napište mi to do komentářů.

<!-- AdSnippet -->
