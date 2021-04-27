# image-set() v CSS

Zápis `image-set()` umožňuje nechat prohlížeč vybrat nejvhodnější obrázek na pozadí ze sady, kterou mu připravíme.

Je to vhodné zejména pro posílání různých obrázků na obrazovky [s vysokou hustotou pixelů](css-pixel.md):

```css
.box {
  background-image: 
    image-set(
      "obrazek.png" 1x,
      "vetsi-obrazek.png" 2x
    );
}
```

Od února 2021 tento zápis [podporuje Firefox](https://hacks.mozilla.org/2021/02/a-fabulous-february-firefox-86/) (zatím ve verzi Nightly), ale díky tomu už bude brzy možné základní varianty zápisu `image-set()` používat ve všech dnešních prohlížečích.

Jak jste asi pochopili, jde o obdobu [atributu `srcset`](srcset-sizes.md) pro značku `<img>`, přičemž některé varianty zápisu `image-set()` mohou přebírat také funkčnost [značky `<picture>`](picture.md).

`image-set()` je prostě takový malý `srcset` pro obrázky na pozadí vkládané přes CSS.

## Výběr obrázku podle hustoty pixelů

Obrázky na pozadí v CSS občas potřebujeme prohlížečům poslat v různých variantách, protože nevíme, jakou hustotu pixelů bude mít zařízení, na kterém běží.

```css
.box {
  /* Fallback: */
  background-image: url("http://satyr.io/300x300/");
  background-image: image-set( 
    "http://satyr.io/300x300/" 1x,
    "http://satyr.io/600x600/" 2x,
    "http://satyr.io/900x900/" 3x
  );
} 
```

Obecně vzato, v `image-set()` vždy uvádíme adresu obrázku a podmínky za jakých se má zobrazovat. Tak je to [ve specifikaci](https://drafts.csswg.org/css-images-4/#image-set-notation).

Jenže prakticky vzato je dnes jediný možný. Deskriptory `1x`, `2x`, `3x` a podobně udávají hustotu pixelů, tedy hodnotu `dppx`, kterou znáte z hodnoty [`resolution` v Media Queries](css3-media-queries.md#detekce-retina-displeju).

Takže například na většině počítačů s Windows se stáhne první obrázek (`http://satyr.io/300x300/`), protože mají hodnotu `dppx` rovnou `1`, na iPhonu 11 se stáhne druhý obrázek, na některých moderních Androidech, které mívají hodnotu i vyšší než `3`, pak poslední obrázek.

CodePen: [cdpn.io/e/BapbBZV](https://codepen.io/machal/pen/BapbBZV?editors=1100)

Není to jediná varianta, kterou bychom podle specifikace mohli použít.

## Další teoretické možnosti použití image-set()

Specifikace je jedna věc, praxe ale velí vycházet z podpory v prohlížečích. Dále uváděné možnosti zůstávají na papíře. Jediný prohlížeč, který je podporuje, je právě nový Firefox Nighly.

<!--

- https://codepen.io/machal/pen/ZELPqNY?editors=1100
- https://codepen.io/machal/pen/MWJxzYw?editors=1100
- https://codepen.io/machal/pen/NWdJEqm?editors=1100

-->

