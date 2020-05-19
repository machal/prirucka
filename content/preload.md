# Preload: Přednačtení prvků stránky

Preload je deklarace, které vyvolává dřívější stažení prvku stránky a v případě JavaScriptu odděluje stažení od spuštění.

Vezměme jednoduchý příklad s webfonty. Pravděpodobně jich v CSS máme nalinkováno více. Dva konkrétní soubory včak chceme stáhnout s vyšší prioritou. Uděláme to takhle:

```html
<link rel="preload" href="font-1.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="font-1.woff2" as="font" type="font/woff2" crossorigin>
```

Prohlížeč těmto dvěma souborům zvýší prioritu stažení. Ve vodopádu průběhu stahování prvků ze stránky to bude vypadat jako na následujícím obrázku.

<figure>
<img src="../dist/images/original/todo.jpg" alt="">
<figcaption markdown="1">
*Obrázek: Preload předbíhá ve frontě. Vytrhne soubory webfontů z jejich přirozeného pořadí a ty přednačtené stáhne dříve.*
</figcaption>
</figure>

Díky tomuto triku pak dojde k rychlejšímu zobrazení písem ve správném fontu na důležitých místech stránky:

<figure>
<img src="../dist/images/original/todo.jpg" alt="">
<figcaption markdown="1">
*Obrázek: Před nasazením preload to tak rychlé nebylo.*
</figcaption>
</figure>

Preload je užitečná pokročilá technika, kterou podporují všechny prohlížeče kromě Firefoxu a Internet Exploreru. Dejme ale důraz na slovo *pokročilá*.  

## Opatrně s tím

Ve zkušených rukou je preload užitečná věc. Raději ale upozorním na to, že jako v mnoha jiných případech je to dobrý sluha, ale zlý pán.

Dokud si nejste zcela jistí, co děláte, s preloadem si raději nehrajte. Ono totiž porušení přirozeného vodopádu stahování frontendových souborů může být ke škodě.

Už na prvním obrázku je například jedna nevýhoda vidět – díky tomu, že se soubory přednačtených fontů stahují souběžně s CSS, oddálí zpracování stylů a tím také [první vykreslení stránky](metrika-fcp.md).

Stále častěji totiž potkávám weby, kde byla aplikována tzv. Babicova přednačítací metoda: „Když už nevíš, co s tím, dej tam preload.“ Opatrně s tím.

## atribut as - možnosti - js, webfonty…
## atribut type - mime type
## crossorigin - u webfontů nutný
## atribut media - media queries
## atd
## http hlavička
## JavaScript
## prohlížeče
## možné scénáře

<!-- 

* atribut as - možnosti - js, webfonty…
    * https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content - "what types"
    * Preloaded resources using the “as” attribute will have the same resource priority as the type of resource they are requesting. For example, preload as=“style” will get the highest priority while as=”script” will get a low or medium priority. These resources are also subject to the same CSP policies (e.g script is subject to script-src). -medium
    * https://fetch.spec.whatwg.org/#concept-request-destination
* atribut type - mime type
    * the browser will use the type attribute value to work out if it supports that resource
    * viz příklad https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content
* crossorigin - u webfontů nutný
    * MDN: Because of various reasons, these have to be fetched using anonymous mode CORS
    * https://drafts.csswg.org/css-fonts/#font-fetching-requirements
* atribut media - media queries
    * Responsive loading — <link rel=preload as=image href=“someimage.jpg" media="(max-width: 600px)">
* atd
    * Unused preloads trigger a console warning in Chrome, ~3 seconds after onload
    *  Ensure you’re adding a crossorigin attribute when fetching fonts using preload otherwise they will be double downloaded.  - medium
* http hlavička
    * Link: <https://example.com/other/styles.css>; rel=preload; as=style
    * https://www.w3.org/TR/preload/#introduction
* JavaScript
    * preload: https://www.w3.org/TR/preload/#example-1-using-markup
    * detekce : TODO
* prohlížeče
    * https://caniuse.com/#feat=link-rel-preload
        * firefox, IE ne
* možné scénáře
    * use link[rel=preload] to preload your critical fonts
    * next.js/amp + async
    * preloading their header image - Treebo
    * Markup based async loading — <link rel="preload" href="style.css" onload="this.rel=stylesheet”>
    * (už bylo) Responsive loading — <link rel=preload as=image href=“someimage.jpg" media="(max-width: 600px)">
    * dále http://yoavweiss.github.io/link_htmlspecial_16/#53
    * spuštění na přání https://www.w3.org/TR/preload/#early-fetch-and-application-defined-execution


 -->
