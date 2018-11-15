CSS3 Background Size: velikost obrázku na pozadí
================================================

Změna velikosti obrázku na pozadí elementu.

Syntaxe
-------

```css
background-size:
  (cover/contain)
  (_sirka_ (_vyska_));
```

Výchozí hodnota `background-size: auto auto` znamená, že si obrázek zachová svou původní velikost.

Podobně jako u ostatních CSS vlastností můžeme zapsat výšku i šířku najednou –  `background-size: auto`.

### `cover` a `contain`

Klíčové slovo `cover` zajistí, aby obrázek pokryl celou plochu elementu. `contain` obstará to, aby byl obrázek vidět celý.

![background-size: cover/contain](dist/images/original/background-size-cover-contain.svg)

`background-size: cover` použijete například pro zajištění, aby obrázek na pozadí stránky pokryl celou její plochu. [vrdl.in/ognci](http://alistapart.com/d/supersize-that-background-please/index3.html)

`background-size: contain` zase v situaci, kdy máte ikonku na pozadí elementu, jenž bude na různých rozlišeních obrazovky různě velký. Nebo když chcete prohlížeči poslat dvojnásobně nebo třeba trojnásobně velký obrázek kvůli vysokokapacitním displejům. [vrdl.in/ef6cp](http://www.studiopress.com/design/css-background-size-graphics.htm)

Tip: Pokud máte tendenci takto pracovat s ikonami, porozhlédněte se po vektorovém řešení – [SVG nebo ikonfonty](ikonfonty-vs-svg.md).

### Rozměry v `px` nebo procentech

Šířku a výšku je možné definovat ve standardních CSS jednotkách – `px`, `em` a dalších.

Procenta se používají relativně k šířce nebo výšce elementu, na který je vlastnost aplikována. Například roztažení barevného přechodu na celou šířku a polovinu výšky elementu zapíšeme takto:

```css
background: linear-gradient(to bottom, transparent, black)
  no-repeat bottom;
background-size: 100% 50%;
```

Naživo se podívejte na [cdpn.io/e/cmpjE](https://codepen.io/machal/pen/cmpjE).

Nezapomeňte, že šířka nebo výška pozadí vychází z nastavení vlastnosti [background-origin](css3-background-origin.md). Standardně se tedy `padding-box` a `background-size` počítá z vnitřního okraje a obsahu elementu.

### Více obrázků na pozadí

Pokud používáme [více obrázků na pozadí](css3-multiple-backgrounds.md), specifikace změn jejich velikostí opět oddělujeme čárkou:

```css
background-size: 50% auto, auto;
```

Podpora v prohlížečích
----------------------

`background-size` zvládají všechny dnešní prohlížeče kromě IE8 – [caniuse.com/background-img-opts](https://caniuse.com/background-img-opts).

### `background-size` v IE8

Univerzální řešení neexistuje, na míru své situace si můžete vybrat z těchto čtyř:

Nedělat nic. Pokud obrázek dobře vyberete, nemusíte se v některých situacích trápit tím, že se v IE8– nezmenší.

Detekce vlastností. Poskytnout alternativní verzi stylování pomocí Modernizru  – `.no-backgroundsize .element { … }`.

Využít parametru `filter`. Hodí se jen pro situace, kdy obrázek na pozadí máte ve stejném poměru stran a zároveň stejně velký nebo větší než rodičovský objekt:

```css
.element {
  background-size: contain;
  filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
    src='images/image.jpg', sizingMethod='scale');
}
```

Využít polyfill. Jen pozor, využívá `.htc` soubory, takže může nepřiměřeně zhoršovat výkon – [github.com/louisremi/background-size-polyfill](https://github.com/louisremi/background-size-polyfill).
