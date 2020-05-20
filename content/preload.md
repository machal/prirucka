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

## Atribut `as` – určení prioritizace {#atribut-as}

Tento nepovinný atribut vám doporučuji k preload přidávat vždy. Přednačtené prvky stránky používající atribut `as` totiž budou mít stejnou prioritu jako typ zdroje, který je uvedený v hodnotě.

Například `preload as="style"` získá nejvyšší prioritu, zatímco `as="script"` získá nízkou nebo střední prioritu. Tyto prvky pak také podléhají stejným zásadám [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) a do prohlížeče dorazí se správnou hlavičkou `Accept`.

Možných hodnot atributu as je celá řada. Vybírám zde ty nejvíce použitelné:

<div class="rwd-scrollable f-6"  markdown="1">

| Hodnota   | Typ souboru                           |
|-----------|---------------------------------------|
| audio     | Audio, typicky v prvku `<audio>`.     |
| document  | HTML dokument, typicky `<frame>` nebo `<iframe>` ([bug v Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=593267)). |
| embed     | Prvek `<embed>`.                      |
| fetch     | Prvek, který použijeme pomocí fetch nebo XHR, např. JSON soubor. |
| font      | Soubor s fontem, např. WOFF2.         |
| image     | Obrázek.                              |
| object    | Prvek `<object>`.                     |
| script    | Soubor s JavaScriptem.                |
| style     | CSS soubor.                           |
| worker    | Soubor s JavaScriptovým web workerem. |
| video     | Video soubor, typicky v prvku `<video>`. |

</div>

Všechny možné hodnoty atributu `as` jsou [ve specifikaci](https://fetch.spec.whatwg.org/#concept-request-destination).

## Atribut `type` - mime type {#atribut-type}

Nepovinný atribut, který umožní prohlížeči zvážit, zda daný typ prvku podporuje a tedy zda jej chce stahovat nebo ne.

Vezměme příklad:

```html
<link rel="preload" href="video.webm" as="video" type="video/webm">
```

Soubor `video.webm` přednačtou díky atributu `type="video/webm"` pouze prohlížeče, které formát WEBM zvládají, tedy všechny kromě Safari.

## Atribut `crossorigin` – pravidla pro CORS, u webfontů nutné {#atribut-crossorigin}

Pokud máte na webu nastaveno [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), můžete u `<link rel="preload">` uvést atribut `crossorigin`. Toto platí hlavně pro případy, kdy stahujete prvky z jiné domény než je ta, odkud se stahuje dokument.

V případě přednačtení webfontů ale platí, že byste tento atribut [měli uvádět](https://drafts.csswg.org/css-fonts/#font-fetching-requirements), i když jsou soubory stahované ze stejné domény. Pokud byste `crossorigin` neuvedli, stáhnou se soubory s fonty dvakrát. Takže vždy takto:

```html
<link rel="preload" href="font-1.woff2" as="font" type="font/woff2" crossorigin>
```

## Atribut media - Media Queries {#atribut-media}

Může se vám stát, že některý soubor potřebujete přednačíst jen v určitém responzivním nebo klidně jiném kontextu. Pak neváhejte využít volitený atribut `media`:

```html
<link rel="preload" as="image" href="obrazek.jpg" media="(min-width: 640px)">
```

Zde můžeme ukončit téma atributů a podívat se úplně jinam. Vlastně úplně mimo HTML.

## HTTP hlavička {#http-hlavicka}

Občas se hodí přidávat informace o dokumentu už rovnou na backendu, bez nutnosti zásahu do HTML. Je tudíž dobré vědět, že v HTTP hlavička vás ráda uvítá i s těmito potřebami.

Následuje bambilión různých příkladů:

```text
Link: <https://example.com/font.woff2>; rel=preload; as=font; type="font/woff2"
Link: <https://example.com/app/script.js>; rel=preload; as=script
Link: <https://example.com/logo-hires.jpg>; rel=preload; as=image
Link: <https://fonts.example.com/font.woff2>; rel=preload; as=font; crossorigin; type="font/woff2"
```

## JavaScriptem a dynamicky {#js}

Jestliže se vám zachtělo přidávat `<link rel="preload">` naopak až při zpracování stránky na frontendu, JavaScriptem, možnosti tady jsou:

```html
<script>
  var res = document.createElement("link");
  res.rel = "preload";
  res.as = "style";
  res.href = "main.css";
  document.head.appendChild(res);
</script>
```

Uvedený kód do DOMu přidá následující:

```html
<link rel="preload" href="main.css" as="style">
```

### Detekce podpory

Když už jsme u JS, mohla by se vám také hodit detekce podpory `<link rel="preload">`…

```js
var preloadSupported = function() {
  var link = document.createElement('link');
  var relList = link.relList;
  if (!relList || !relList.supports)
    return false;
  return relList.supports('preload');
}
```

…čímž se dostáváme k tématu podpory v prohlížečích.

## Podpora v prohlížečích {#prohlizece}

Kromě Exploreru zatím podle [CanIUse](https://caniuse.com/#feat=link-rel-preload) přednačtení nepodporuje Firefox. Podle [Bugzilly](https://bugzilla.mozilla.org/show_bug.cgi?id=1222633) vlastně trochu podporuje, ale nechávají to skryté za vlaječkovým nastavením. Takže v praxi nepodporuje. 

Nemělo by to vadit, protože hrátky s přednačtením považuji za klasických příklad progressive enhancement, dobrovolného vylepšení uživatelského prožitku.

<!-- TODO Caniuse obrázek -->


## možné scénáře

<!-- 

* možné scénáře* 
    * use link[rel=preload] to preload your critical fonts
    * next.js/amp + async
    * preloading their header image - Treebo
    * Markup based async loading — <link rel="preload" href="style.css" onload="this.rel=stylesheet”>
    * (už bylo) Responsive loading — <link rel=preload as=image href=“someimage.jpg" media="(max-width: 600px)">
    * dále http://yoavweiss.github.io/link_htmlspecial_16/#53
    * spuštění na přání https://www.w3.org/TR/preload/#early-fetch-and-application-defined-execution
* atd
    * Unused preloads trigger a console warning in Chrome, ~3 seconds after onload

 -->
