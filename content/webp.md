# WebP obrázky: datově úsporná alternativa k JPEG, PNG i GIF

[WebP](https://developers.google.com/speed/webp/) je formát bitmapových obrázků, který představil Google v roce 2010.

Není sice podporovaný všemi prohlížeči, i tak je ale v dnešním webdesignu velmi použitelný. Pojďme si projít hlavní přínosy: 

- možnost výrazného snížení datového objemu v porovnání s JPEG i PNG
- alfa průhlednost, kterou dosud nabízel jen formát PNG
- podpora animací, kterou dosud nebízel jen staříčký GIF

WebP naopak oproti JPEG neumí [subsampling chroma kanálu](https://en.wikipedia.org/wiki/Chroma_subsampling) a progresivní vykreslování. 

<!-- AdSnippet -->

WebP je také prý pomalejší pro dekódování a více zatěžuje procesor. Ale na [images.guide](https://images.guide/#how-does-webp-perform) se píše:

> Back in 2013, the compression speed of WebP was ~10× slower than JPEG but is now negligible (some images may be 2× slower). For static images that are processed as part of your build, this shouldn’t be a large issue. Dynamically generated images will likely cause a perceivable CPU overhead and will be something you will need to evaluate.


Takže by to mělo být ke zvážení, jen pokud obrázky generujete v reálném čase.


## Podpora v prohlížečích: Jen partička kolem Google

Jde o formát Google, takže jej aktuálně finálně podporují pouze všechny prohlížeče postavené na Chrome. Pokud to dobře počítám, může jít ke dni psaní textu v Česku kolem 60 - 70 % uživatelů.

- Chrome, Opera, Samsung Internet a stařičký Android Browser jej umí
- Edge nedávno ohlásil, že [na podpoře začíná pracovat](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/webpimageformat/)
- Safari a Firefox mají nějakou formu podpory na úrovni betaverze

Více informací o podpoře: [caniuse.com/webp](https://caniuse.com/#feat=webp).

Jenže – co uděláme s třetinou uživatelů, kteří používají prohlížeče bez podpory WebP? Žádné stresy, web bez obrázků jim dodávat nemusíme.


## Fallback do JPEG

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

Má kvůli WebP smysl zdvojovat obrázky? Záleží od situace, ale hlavně u větších webů se to myslím velmi vyplatí.


## Jaké množství dat WebP vlastně ušetří?

O případu mého klienta, e-shopu VašeČočky.cz jsem [nedávno psal](rychlost-designeri.md#data):

> Když kolegové nasadili WebP obrázky, ušetřili 30 % datového objemu úvodní stránky (1250 kB → 950 kB) a o pětinu snížili čas pro Page Load (19,8 s → 16,8 s).

Podobné zkušenosti mám i z jiných testů a klientských projektů. Není výjimkou ani větší než poloviční ušetření dat.

Jinak [obecné studie od Googlu](https://developers.google.com/speed/webp/) říkají:

- u bezstrátových obrázků typu PNG je WebP o 26 % menší
- u ztrátových obrázků typu JPG je WebP o 25-34 % menší


## Jak WebP získat?

Necháme si poradit od průvodce [images.guide](https://images.guide/#how-do-i-convert-to-webp), kde je o WebP fakt hodně užitečných informací:

- Grafické aplikace: Sketch, Pixelmator nebo GIMP mají přímý export, Photoshop a další Adobe nástroje nemají, ale existuje [plugin](https://github.com/fnordware/AdobeWebM).
- Na příkazové řádce: Oficiální [libwebp](https://developers.google.com/speed/webp/docs/using) nebo třeba plugin typu [imagemin-webp](https://github.com/imagemin/imagemin-webp) pro [Grunt](grunt.md), Gulp či jiné sestavovače. 

<!-- AdSnippet -->
