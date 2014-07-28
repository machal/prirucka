CSS3 Background Size
====================

Změna velikosti obrázku na pozadí elementu.

Příklady využití
----------------

1. Zajištění, aby [obrázek na pozadí](http://d.alistapart.com/supersize-that-background-please/index3.html) stránky pokryl celou její plochu (`background-size: cover`).
2. Zmenšení obrázku na pozadí tak, aby byl vždy vidět celý (`background-size: contain`).
3. Konkrétnější příklad — zmenšení ikonky v `background-image`, kterou máme [kvůli vysokokapacitním displejům](http://www.studiopress.com/design/css-background-size-graphics.htm) ve dvojnásobném rozlišení (`background-size: 100% auto`). Hodí se ovšem hlavně u fotek, ikonky vám prohlížeče nevykreslí hezky.
3. Nebo třeba roztažení gradientu na pozadí elementu na požadovanou procentuální výšku, pokud ji dopředu neznáme (`background-size: auto 50%`).

Syntaxe
-------

	background-size:
		(cover/contain)
			_vertikalni_rozmer_
			_horizontalni_rozmer_;

Klíčové slovo `cover` zajistí, aby obrázek pokryl celou plochu boxíku kdežto `contain` obstará aby obrázek byl vidět celý:  

<img class="picture" src="content/schemes/CSS3-background-size-cover-contain.png" width="700" height="394" alt="background-size: cover/contain">
	
Pokud používáme [více obrázků na pozadí](css3-multiple-backgrounds.md), specifikace změn jejich velikostí opět oddělujeme čárkou — `background-size: 50% auto, auto`.


Podpora v prohlížečích
----------------------

IE9+. Pokud obrázek dobře vyberete, nemusíte se v některých situacích trápit tím, že se v IE8– nezmenší. Starším prohížečům ovšem můžete také poskytnout alternativní verzi stylování pomocí Modernizru `.no-backgroundsize .box { … }`.

