# image-set() v CSS

Zápis `image-set()` umožňuje nechat prohlížeč vybrat nejvhodnější obrázek, definovaný v rámci vlastnosti `background-image`, ze sady, kterou mu připravíme.

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

Základní varianty zápisu `image-set()` je možné používat ve všech moderních prohlížečích.

Jak jste asi pochopili, jde o obdobu [atributu `srcset`](srcset-sizes.md) pro značku `<img>`. Některé varianty zápisu `image-set()` mohou přebírat také funkčnost [značky `<picture>`](picture.md), jenže ty zatím nejsou podporované.

<!-- AdSnippet -->

`image-set()` je prostě takový malý `srcset` pro obrázky na pozadí vkládané přes CSS.

## Výběr obrázku podle hustoty pixelů {#priklad}

Obrázky definované ve vlastnosti `background-image` občas potřebujeme prohlížečům poslat v různých variantách, protože nevíme, jakou hustotu pixelů bude mít zařízení, na kterém běží.

```css
.box {
  background-image: image-set( 
    "http://satyr‎.io/300x300/" 1x,
    "http://satyr‎.io/600x600/" 2x,
    "http://satyr‎.io/900x900/" 3x
  );
} 
```

Obecně vzato, v `image-set()` vždy uvádíme adresu obrázku a podmínky za jakých se má zobrazovat. Tak je to [ve specifikaci](https://drafts.csswg.org/css-images-4/#image-set-notation).

Jenže prakticky vzato dnes máme jediný možný zápis – deskriptory `1x`, `2x`, `3x` a podobné udávají hustotu pixelů, tedy hodnotu `dppx`, kterou znáte z hodnoty [`resolution` v Media Queries](css3-media-queries.md#detekce-retina-displeju).

Takže například na většině počítačů s Windows se stáhne první obrázek (`http://satyr.‎io/300x300/`), protože `dppx` má hodnotu `1`. Na iPhonu 11 se stáhne druhý obrázek. Na některých moderních Androidech, které mívají vyšší hustotu pixelů, i `3` a více, pak poslední obrázek.

CodePen: [cdpn.io/e/BapbBZV](https://codepen.io/machal/pen/BapbBZV?editors=1100)

Není to jediná varianta, kterou bychom podle specifikace mohli použít.

## Další teoretické možnosti použití image-set() (zatím nepodporované) {#dalsi}

Specifikace je jedna věc, praxe ale velí vycházet z podpory v prohlížečích. Dále uváděné možnosti zůstávají na papíře. Jediný prohlížeč, který je podporuje, je  Firefox.

### Výběr podle typu obrázku

Podobně jako u značky `<picture>` bychom i tady mohli prohlížeči nabídnout dva formáty pro jeden obrázek. To by bylo skvělé pro využití u nových formátů jako [WebP](webp.md) nebo [AVIF](avif.md)…

```css
.box {
  background-image: 
    image-set( 
      "http://satyr‎.io/300x300?type=webp" type("image/webp"),
      "http://satyr‎.io/300x300?type=png" type("image/png")
    );
}
```

…kdyby to ovšem podporoval ještě jiný prohlížeč než Firefox.

Více je možné vidět [v CodePenu](https://codepen.io/machal/pen/ZELPqNY?editors=1100).

### Kombinace obrázků s generovaným pozadím 

Občas by se kódérkám a kóderům mohla hodit kombinace obrázku s generovaným pozadím, např. přechody tvořenými pomocí [`linear-gradient()`](css3-gradients.md).

```css
.box {
  background-image: 
    image-set( 
      linear-gradient(grey, white) 1x,
      "http://satyr‎.io/300x300" 3x 
    );
} 
```

Toto ale nepodporuje ani onen nový Firefox. Odkážu na [CodePen](https://codepen.io/machal/pen/MWJxzYw?editors=1100) k hraní.

### Deskriptor `w`

V atributu `srcset` bychom teoreticky mohli mít možnost používat deskriptor `w`, jenž prohlížeč informuje o šířkách nabízených obrázků. To aby si lépe vybral.

```css
.box {
  background-image: image-set( 
    "http://satyr‎.io/300x300/" 300w,
    "http://satyr‎.io/600x600/" 600w,
    "http://satyr‎.io/900x900/" 900w
  );
} 
```

Tady ale pouštím imaginaci na plné obrátky a troufám si jít opravdu daleko, protože i ve specifikace o tomto mluví jako o přání a úkolu pro budoucí specifikátory, nikoliv o navržené vlastnosti. Tak nic.

Mrkněte se na [CodePen](https://codepen.io/machal/pen/NWdJEqm?editors=1100), pokud opravdu hodně chcete.

<!-- AdSnippet -->

Na vaše objevování zápisu `image-set()` se těší celá moje [kolekce CodePenů](https://codepen.io/collection/dbydGg).

## Podpora {#podpora}

Použitelnost zápisu `image-set()` díky nové implementaci ve Firefoxu bez pochyby  prudce stoupne. Jde totiž o poslední moderní prohlížeč, který jej dosud neuměl.

Jenže pokud jste se, jako já, nechali namlsat všemi zde uvedenými možnostmi zápisu, budete stejně zklamaní. Ale tak už to mezi námi webaři chodí. Jsme nadšení z implementace nový vlastností, abychom byli tentýž den zklamaní, co všechno ještě prohlížeče neumí.

Při implementaci nezapomeňte na [Autoprefixer](autoprefixer.md), protože i moderní prohlížeče pro tuto vlastnost vyžadují prefixy – např. Chrome rozumí jen zápisu `-webkit-image-set()`.

[Internet Explorer](msie.md) je sice už téměř vymřelý druh, ale pokud byste potřebovali zajistit si fungování i v něm, musíte uvést [náhradní řešení](fallback.md). Je to vidět v mém prvním CodePenu:

```css
.box {
  /* Fallback: */
  background-image: url("http://satyr‎.io/300x300/");
  background-image: image-set( 
    "http://satyr‎.io/300x300/" 1x,
    "http://satyr‎.io/600x600/" 2x,
    "http://satyr‎.io/900x900/" 3x
  );
} 
```

Vše o podpoře `image-set()` najdete klasicky na CanIUse. [caniuse.com/css-image-set](https://caniuse.com/css-image-set)

<!-- AdSnippet -->
