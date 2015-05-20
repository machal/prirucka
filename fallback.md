
Fallback
========

Ve světě webového front-endu se jedná o náhradní řešení pro prohlížeče, které neznají určitou technologii.

Využívá **chytré vlastnosti HTML a CSS — ignorace neznámého**. Prohlížeče odjakživa oba jazyky zpracovávají tak, že v případě, že narazí na neznámou značku, atribut, vlastnost nebo hodnotu, ignorují ji a pokračují ve zpracování kódu.

Definovat fallback **považuji za slušnost** i na projektech, které mají nízký podíl přístupů ze starších prohlížečů. Nemluvě o tom, že ke dnešku má pořád dost silné zastoupení IE8+9, jež většinu HTML5 technologií nezvládají.

V HTML5 světě se využívá hlavně v případě nových CSS3 vlastností.

Dva typy fallbacku jsem si pojmenoval jako definovaný a nulový.


Definovaný fallback
-------------------

Do kódu prostě explicitně uvedeme vlastnost nebo hodnotu pro starší prohlížeče:

	background: red;
	background: linear-gradient(to bottom, red, darkred);

V prvním řádku definujeme řešení pro starší prohlížeč. A to předefinujeme [barevným přechodem](css3-gradients.md) v prohlížečích, které jej ovládají.

Dále využitelné například [ve vícenásobném pozadí](css3-multiple-backgrounds.md), definování alternativního obrázku namísto vektorového SVG atd.

Nulový fallback
---------------

	.box {
		color: red;
		transition: .5ms;
	}

	.box:hover {
		color: darkred;
	}

Tady se netrápíme tím, že starší prohlížeče nezvládají animaci pomocí [transition](css3-transitions.md), protože ty nám slouží k vylepšení uživatelského prožitku v moderních prohlížečích.

Možné řešení například pro [animace](css3-animations.md), [zaoblené rohy](css3-border-radius.md), [stínování](css3-box-shadow.md).

Pár odkazů
----------

* [Quickie CSS3 Tricks with Fallbacks, CSSTricks.com](http://css-tricks.com/quickie-css3-tricks-with-fallbacks/)
* [Seznam HTML5 vlastností vyžadujících fallback, HTML5Please.com](http://html5please.com/#fallback)
