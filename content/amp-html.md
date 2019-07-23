# AMP HTML

AMP HTML je norma vycházející z HTML 5 – upravuje si ji ale směrem k cílům této technologie: k rychlosti a použitelnosti.

<div class="web-only" markdown="1">

V této ukázce z knihy [Vzhůru do AMP](https://www.vzhurudolu.cz/ebook-amp/) si dopodrobna vysvětlíme rozdíly mezi standardním HTML a tím z [AMP](amp.md).

</div>

Základní kostra dokumentu v AMP vypadá trochu jinak, není možné zde použít prvky vkládající externí obsah jako `<iframe>` nebo `<img>`.

Namísto nich máme ale komponenty jako `<amp-iframe>` nebo `<amp-img>.` Z HTML atributů vypadly všechny, které popisují nějaké chování, to je však vzhledem k chybějícímu autorskému JavaScriptu pochopitelné.

Obsah:

- [Kostra AMP dokumentu](#kostra)
- [Provázání AMP a HTML verze](#provazani)
- [amp-boilerplate](#amp-boilerplate)
- [Strukturovaná data](#strukturovana-data)
- [Zakázané značky](#zakazane)
- [Nahrazené značky](#nahrazene)
- [HTML atributy](#atributy)

## Neměnná kostra AMP dokumentu {#kostra}

Když se podíváte na základní kostru dokumentu, bude vypadat následovně:

```html
<!doctype html>
<html amp lang="cs">
  <head>
    <meta charset="utf-8">
    <meta name="viewport"
      content="width=device-width,minimum-scale=1">
    <script async
      src="https://cdn.ampproject.org/v0.js">
    </script>
    <style amp-custom> </style>
    <style amp-boilerplate> </style>
    <link rel="canonical" href="…">
    <title>Ahoj světe</title>
  </head>
  <body>
    <h1>Ahoj světe, tady AMP</h1>
  </body>
</html>
```

Zaměřme se hlavně na rozdíly oproti běžnému HTML:

- `<html amp>` je označení AMP stránky.
- `<script async src="https://cdn.ampproject.org/v0.js">` asynchronně stahuje povinnou hlavní javascriptovou knihovnu AMP.
- `<style amp-custom>` je místo, kam vložíte vlastní CSS pro tuhle stránku.
- `<style amp-boilerplate>` obsahuje povinné styly, které pomáhají prohlížeči s vykreslením stránky.

<div class="ebook-only" markdown="1">

Ukazujeme vám zde opravdu minimální HTML. Autoři AMP doporučují ještě například vložit strukturovaná data v JSON-LD, která se ve výsledcích vyhledávání zobrazují jako Rich Snippets. Martin o nich psal na Vzhůru dolů. [vrdl.cz/p/rich-snippets](https://www.vzhurudolu.cz/prirucka/rich-snippets)

</div>

<div class="web-only" markdown="1">

Ukazujeme zde opravdu jen minimální HTML. Autoři AMP doporučují ještě například vložit strukturovaná data v JSON-LD, která se ve výsledcích vyhledávání zobrazují jako [Rich Snippets](rich-snippets.md).

</div>

### Symbol blesku {#blesk}

<div class="ebook-only" markdown="1">

Namísto `amp` můžete v řádku `<html>` použít také emoji symbol „High Voltage“, ale v textech se mu budeme kvůli kompatibilitě zobrazení na různých zařízeních vyhýbat. [emojipedia.org/high-voltage-sign/](https://emojipedia.org/high-voltage-sign/)

</div>

<div class="web-only" markdown="1">

Namísto `amp` můžete v řádku s deklarací verze `html` použít také emoji symbol „High Voltage“ — ⚡.

</div>

Může vás bude zajímat, jak jej napsat:

- Na Windows většinou stačí podržet klávesu Alt a pak napsat „26A1“.
- Na Macu si otevřete okno pro vkládání emoji (Ctrl + Cmd + Space) a hledejte „High Voltage“.

<!-- AdSnippet -->

Další informace o základním AMP HTML najdete na následujících odkazech:

- Tutoriál „Create your AMP HTML page“ od autorů AMP: [vrdl.in/ampmarkup](https://amp.dev/documentation/guides-and-tutorials/start/create/basic_markup)
- Generátor AMP Boilerplate: [amp.dev/boilerplate/](https://amp.dev/boilerplate/)

## Provázání AMP a HTML verze {#provazani}

Ve výše uvedené kostře jste si možná všimli odkazu na jiný dokument ve značce `<link>`. Jde o odkaz na původní verzi dokumentu. AMP a non-AMP verze jsou takto navzájem provázané.

Na webu Vzhůru dolů je například AMP stránka o flexboxových layoutech vystavená na adrese `https://www.vzhurudolu.cz/amp/prirucka/css3-flexbox.` Když se budete hrabat v jejím zdrojáku, najdete tam:

```html
<!-- Odkaz na původní, kanonickou verzi: -->
<link rel="canonical"
  href="https://www.vzhurudolu.cz/prirucka/css3-flexbox">
```

HTML verze je pak k nalezení na adrese `https://www.vzhurudolu.cz/prirucka/css3-flexbox` a v jejím kódu zase najdete odkaz na AMP verzi:

```html
<!-- Odkaz na AMP verzi: -->
<link rel="amphtml"
  href="https://www.vzhurudolu.cz/amp/prirucka/css3-flexbox">
```

<div class="ebook-only" markdown="1">

Jak už víte z předchozí kapitoly, odkaz z této verze na AMP vede proto, aby roboti Googlu a dalších provozovatelů [AMP Cache](amp-cache.md) dokázali tuto stránku najít a následně stáhnout.

</div>

<div class="web-only" markdown="1">

Odkaz z této verze na AMP vede proto, aby roboti Googlu a dalších provozovatelů [AMP Cache](https://medium.com/@pbakaus/why-amp-caches-exist-cd7938da2456) dokázali tuto stránku najít a následně stáhnout.

</div>

## Co je amp-boilerplate? {#amp-boilerplate}

AMP stránka standardně čeká na inicializaci javascriptové knihovny, která upraví layout a pak zobrazí obsah. Může se ovšem stát, že JavaScript z nějakého důvodu selže nebo má větší zpoždění.

<div class="related web-only" markdown="1">
- [Co je to AMP?](amp.md)
- [Podcast: Speciál o AMP k vydání „Vzhůru do AMP“](https://www.vzhurudolu.cz/podcast/145-podcast-vzhuru-do-amp)
</div>

AMP Boilerplate je hack, který zabraňuje neviditelnosti obsahu, způsobené touto situací. Je v ní umístěná CSS animace, která zobrazí obsah po osmi vteřinách sama.

Zjednodušený kód vypadá následovně:

```html
<style amp-boilerplate>
  body {
    animation: -amp-start
      8s steps(1, end) 0s 1 normal both
  }
  @keyframes -amp-start {
    from { visibility: hidden }
    to { visibility: visible }
  }
</style>
<noscript>
  <style amp-boilerplate>
    body {
      animation: none
    }
  </style>
</noscript>
```

Obsah se nejprve schová, ale pokud se na AMP runtime čeká neúměrně dlouho, po osmi vteřinách se zase zobrazí. Pokud v prohlížeči JavaScript pouštět nelze (varianta `<noscript>`), žádné schovávání obsahu a čekání na runtime pomocí animace neproběhne.

Z kódu jsme odstranili všechny prefixované vlastnosti.

## Strukturovaná data {#strukturovana-data}

Pokud byste chtěli svou AMP stránku dostat do speciálních míst výsledků vyhledávání na Googlu – jako je karusel s hlavními událostmi (což jistě chcete) –, doporučuje se přidat ještě metadata uvedená ve formátu JSON-LD.

Pro zpravodajský článek se tedy třeba hodí něco takového:

```html
<script type="application/ld+json">
{
 "@context": "http://schema.org",
 "@type": "NewsArticle",
 "mainEntityOfPage": {
   "@type": "WebPage",
   "@id": "https://example.com/clanek"
 },
 "headline": "Název článku",
 "image": [
   "https://example.com/photos/1x1/photo.jpg",
   "https://example.com/photos/4x3/photo.jpg"
 ],
 "datePublished": "2019-02-05T08:00:00+08:00",
 "dateModified": "2019-02-05T08:00:00+08:00",
 "author": "Franta Vomáčka",
 "publisher": {
   "@type": "Organization",
   "name": "Example.com",
   "logo": {
      "@type": "ImageObject",
       "url": "https://example.com/images/logo.png",
       "width": "300",
       "height": "100"
    }
  }
}
</script>
```

Kromě zpravodajského článku můžete takto popsat strukturu obsahu webové stránky, videa nebo receptu.

Kód, který zde uvádíme, není úplný. Podívejte se raději na užitečný generátor základní HTML struktury pro AMP. [amp.dev/boilerplate](https://amp.dev/boilerplate/)

## Zakázané ovoce z HTML zahrádky {#zakazane}

Ve specifikaci AMP HTML je řada běžných značek zakázaná a neexistují pro ně náhrady. Jde například o `<base>`, `<frame>`, `<object>`, `<embed>` a řadu dalších. Jak je ale vidět, v tomto seznamu jde o značky, jež mají nejlepší léta za sebou.

Z pohledu výkonu při vykreslování stránky je to pochopitelné. Když budete dělat nábor do atletického kroužku, nepůjdete přeci do klubu seniorů.

Kontroverznější je to u značek, které AMP nahrazuje novými.

## Nahrazené značky {#nahrazene}

Možná leckoho překvapí, že AMP nahrazuje některé existující značky, ale svůj účel to má. Následující značky jsou zakázané ve prospěch nových komponent, které AMP zavádí:

| HTML značka | AMP HTML komponenta   |
|-------------|-----------------------|
| `<img>`     | `<amp-img></amp-img>` |
| `<video></video>` | `<amp-video></amp-video>` |
| `<audio></audio>` | `<amp-audio></amp-audio>` |
| `<iframe></iframe>` | `<amp-iframe></amp-iframe>` |

Proč to AMP dělá? Jde opět o výkon. Na vlastních komponentách může AMP zajistit, co běžné značky zatím neumí: odložené načtení (lazy loading), rezervaci místa v layoutu stránky už při startu jejího vykreslování nebo zamezení blokování zobrazení stránky externím obsahem (což dělá `<iframe>`). V současných prohlížečích to zatím možné není, ale jednou snad bude.

Některé jiné značky je možné v AMP HTML použít až za určitých podmínek:

- `<script>`, jen pokud atribut `type` obsahuje `application/ld+json` (definice strukturovaných dat), `application/json` (nastavení komponent) nebo `text/plain`. Lidsky řečeno, vkládat vlastní skripty lze jen za účelem konfigurace AMP komponent nebo popisu dat.
- `<form>` můžete vložit jen za podmínky, že do stránky přidáte komponentu `amp-form`.
- Komentáře samozřejmě můžete použít, ale zakázané jsou podmíněné komentáře typu `<!--[if IE 6]>`, ty však už snad potřebovat nebudete. Nikdy.

## HTML atributy: některé jsou zakázané a některé nové {#atributy}

V AMP jsou zakázané i některé atributy. Příklady:

- `onclick`, `onmouseover` a další atributy s předponou „on“ jsou nahrazené jediným: `on=""`.
- `xml` atributy jako `xmlns`, `xml:lang` nebo `xml:base` také použít nesmíte.

AMP naopak přichází s novými atributy:

- `layout`, `width`, `height`, `media`, `placeholder`, `fallback` slouží k definování parametrů layoutu, o kterém ještě budeme psát. Některé znáte z běžného HTML. Tady jsou ovšem povinné u elementů, které mají něco společného s rozložením stránky.
- `on` – atribut, ve kterém je možné při použití AMP komponent přidávat interaktivitu.

Důležité změny jsme vyjmenovali. Je toho samozřejmě trošku více, ale nechceme zvídavé čtenáře unavovat. Ty hloubavé, pokročilé a dlouhých textů chtivé nasměrujeme do specifikace AMP HTML. [vrdl.in/ampspec](https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml)

Dost bychom si přáli, aby rozumné věci typu lazy loading (odložené načtení) médií nebo atribut `layout`, umožňující rezervaci místa médiím ve stránce, probublaly do nějaké příští verze HTML, což už se v době psaní těchto textů také děje.

<div class="ebook-only" markdown="1">
Vrhněme se teď ale na to druhé z tříkrálové sestavy webových standardů. Na styly.
</div>

<!-- AdSnippet -->
