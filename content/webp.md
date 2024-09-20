# WebP obrázky: datově úsporná alternativa k JPEG, PNG i GIF

[WebP](https://developers.google.com/speed/webp/) je formát bitmapových obrázků, který se v posledních letech stal na webu velmi populárním.

WebP představil Google už v roce 2010. Dnes už je formát podporovaný prakticky všemi prohlížeči a operačními systémy. Podpora v obrázkových editorech je různorodá.

<div class="related" markdown="1">
- [Obrázkové formáty pro web](obrazky-formaty.md)
- [Formát AVIF](avif.md)
- [Značka PICTURE](picture.md)
- [Responzivní obrázky](responzivni-obrazky.md)
</div>

Pojďme si projít hlavní přínosy WebP:

- možnost výrazného snížení datového objemu v porovnání s JPEG i PNG
- alfa průhlednost, kterou dosud nabízel jen formát PNG
- podpora animací, kterou umí jen dědeček GIF

WebP naopak oproti JPEG neumí například [subsampling chroma kanálu](https://en.wikipedia.org/wiki/Chroma_subsampling) a progresivní vykreslování (což se dá [očůrat pomocí háčků](https://shkspr.mobi/blog/2020/04/how-to-fake-progressive-webp-images/)).

<!-- AdSnippet -->

WebP je také prý pomalejší pro dekódování a více zatěžuje procesor. To byl ale problém jen dříve. Na už neexistujícím webu images.guide se psalo:

> Back in 2013, the compression speed of WebP was ~10× slower than JPEG but is now negligible (some images may be 2× slower). For static images that are processed as part of your build, this shouldn’t be a large issue. Dynamically generated images will likely cause a perceivable CPU overhead and will be something you will need to evaluate.

Takže by to mělo být ke zvážení, jen pokud obrázky generujete v reálném čase, je jich hodně a jsou obrovské. Jinak to už dneska problém nebude a výkon se řešívá u ještě novějšího formátu [AVIF](avif.md).

## Podpora v prohlížečích: samá krása {#podpora}

Jde o formát z dílny Google, i proto jej nejdříve podporovaly všechny prohlížeče postavené na jádru Chromu (například Microsoft Edge, Opera nebo prohlížeč od Seznam.cz) a Firefox. Nově také [Safari od verze 14](https://developer.apple.com/documentation/safari-release-notes/safari-14-release-notes/).

Více informací o podpoře: [caniuse.com/webp](https://caniuse.com/#feat=webp).

Dříve bylo potřeba řešit fallback do více rozšířených formátů, ale toto zde nechávám už jen kvůli zpětné kompatibilitě článku.

## Fallback do JPEG {#fallback}

Řešením je vygenerovat dvě sady obrázků – ve WebP i JPEG formátu a pomocí značky [PICTURE](picture.md) nechat na prohlížečích výběr té správné:

```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="…">
</picture>
```

Chrome a jeho parta tady stáhnou jen WebP, zbývající třetina uživatelů dostane své „jépégéčko“.

<!-- AdSnippet -->

Pokud toto řešení nemůžete nasadit, je zde ještě například možnost detekce na serveru nebo [přes .htaccess](https://github.com/vincentorback/WebP-images-with-htaccess). Řešení s `<picture>` ale bude výkonnostně nejefektivnější.

Detekci podpory formátu WebP, ale i jeho jednotlivých vlastností, pro obrázky linkované z CSS lze obstarat knihovnou [Modernizr](https://modernizr.com/download). Zápis v CSS by pak mohl vypadat takto:

```css
.box {
  background-image: url("image.jpg");
}

.webp .box {
  background-image: url("image.webp");
}
```

Jednoduchý [detekční skript](https://developers.google.com/speed/webp/faq#in_your_own_javascript) nabízí také Google na stránkách o WebP.

Má kvůli WebP smysl zdvojovat obrázky? Záleží od situace, ale hlavně u větších webů se to myslím velmi vyplatí.

## Jaké množství dat WebP vlastně ušetří? {#usetri}

O případu mého klienta, e-shopu VašeČočky.cz jsem [psal](rychlost-designeri.md#data):

> Když kolegové nasadili WebP obrázky, ušetřili 30 % datového objemu úvodní stránky (1250 kB › 950 kB) a o pětinu snížili čas pro Page Load (19,8 s › 16,8 s).

Podobné zkušenosti mám i z jiných testů a klientských projektů. Není výjimkou ani větší než poloviční ušetření obrázkových dat.

Jinak [obecné studie od Googlu](https://developers.google.com/speed/webp/) říkají, že WebP je menší následovně

- u bezztrátových obrázků typu PNG o 26 %
- u ztrátových obrázků typu JPG o 25-34 %

<!-- AdSnippet -->
