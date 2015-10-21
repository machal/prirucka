CSS3 Background Size – velikost obrázku na pozadí
=================================================

Změna velikosti obrázku na pozadí elementu.

Syntaxe
-------

	background-size:
		(cover/contain)
		_vertikalni_rozmer_
		_horizontalni_rozmer_;
		
Výchozí hodnota `background-size: auto auto` znamená, že si obrázek zachová svou původní velikost.

Podobně jako u ostatních CSS vlastností můžeme zapsat výšku i šířku najednou –  `background-size: auto`.

### `cover` a `contain`

Klíčové slovo `cover` zajistí aby obrázek pokryl celou plochu elementu. `contain` obstará aby byl obrázek vidět celý.

<img class="picture" src="content/schemes/CSS3-background-size-cover-contain.png" width="700" height="394" alt="background-size: cover/contain">

`background-size: cover` použijete například pro zajištění, aby obrázek na pozadí stránky pokryl celou její plochu – [d.alistapart.com/supersize-that-background-please/index3.html](http://d.alistapart.com/supersize-that-background-please/index3.html)

`background-size: contain` zase v situaci kdy máte ikonku na pozadí elementu, jež bude na různých rozlišeních obrazovky různě velký. Nebo když chcete prohlížeči poslat dvojnásobně nebo třeba třínásobně velký obrázek kvůli vysokokapacitním displejům – [studiopress.com/design/css-background-size-graphics.htm](http://www.studiopress.com/design/css-background-size-graphics.htm) 

Tip: Pokud takto máte tendenci procovat s ikonami, porozhlédněte se po vektorovém řešení – SVG nebo ikonfonty – [css-tricks.com/icon-fonts-vs-svg/](http://css-tricks.com/icon-fonts-vs-svg/).

### Rozměry v `px` nebo procentech

*_vertikalni_rozmer_* a *_horizontalni_rozmer_* je možné definovat ve standardních CSS jednotkách – `px`, `em` a dalších. 

Procenta se používají relativně k šířce nebo výšce elementu, na který je vlastnost aplikována. Například roztažení barevného přechodu na celou šířku a polovinu výšky elementu zapíšeme takto:

	background: linear-gradient(to bottom, transparent, black) no-repeat bottom;
	background-size: 100% 50%;
	
Naživo se podívejte na [codepen.io/machal/pen/cmpjE](http://codepen.io/machal/pen/cmpjE).

Nezapomeňte, že šířka nebo výška pozadí vychází z nastavení vlastnosti [background-origin](css3-background-origin.md). Standardně `padding-box` a `background-size` se tedy počítá z vnitřního okraje a obsahu elementu.

### Více obrázků na pozadí

Pokud používáme [více obrázků na pozadí](css3-multiple-backgrounds.md), specifikace změn jejich velikostí opět oddělujeme čárkou: 

	background-size: 50% auto, auto;


Podpora v prohlížečích
----------------------

`background-size` zvládají všechny dnešní prohlížeče kromě IE8 – [caniuse.com/background-img-opts](http://caniuse.com/background-img-opts).

### `background-size` v IE8

Univerzální řešení neexistuje, na míru své situace si můžete vybrat z těchto čtyř:

Nedělat nic. Pokud obrázek dobře vyberete, nemusíte se v některých situacích trápit tím, že se v IE8– nezmenší. 

Detekce vlastností. Poskytnout alternativní verzi stylování pomocí Modernizru  – `.no-backgroundsize .element { … }`.

Využít parametru `filter`. Hodí se jen pro situace kdy obrázek na pozadí máte ve stejném poměru stran a zároveň stejně velký nebo větší než rodičovský objekt:

	.element {
		background-size: contain;
		filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
			src='images/image.jpg',
			sizingMethod='scale');
	}		

Využít polyfill. Jen pozor, využívá `.htc` soubory, takže může nepřiměřeně zhoršovat výkon – [github.com/louisremi/background-size-polyfill](https://github.com/louisremi/background-size-polyfill).