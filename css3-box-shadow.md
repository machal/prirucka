CSS3 Box Shadow – stínování elementu
====================================

Nejen obvyklý stín pod elementem, ale i uvnitř elementu nebo plastický efekt přes element.

Syntaxe
-------

	box-shadow:
		(inset)
		_horizontalni_posun_
		_vertikalni_posun_
		(_rozostreni_)
		(_roztazeni_)
		_barva_,
		(_dalsi stin_);

Základní stín vytvoříte cobydup. První číslo udává **horizontální, druhé vertikální posun** směrem dolů. Záporná čísla stín posunují nahoru. Třetí je barva a vězte, že pro stíny se nejvíce hodí poloprůhledná [RGBa barva](css3-rgba.md):

	box-shadow: 5px 5px rgba(0, 0, 0, .5);

Pokud přidáme další číslo, prohlížeč pozná, že jde o **rozostření** stínu:

	box-shadow: 5px 5px 10px rgba(0, 0, 0, .5);

Ještě jedno číslo a stínu tak nadefinujeme i **roztažení** do stran:

	box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, .5);

Klíčové slovo **inset** pak zajistí, aby se stín vykreslil uvnitř elementu:

	box-shadow: inset 5px 5px 10px 10px rgba(0, 0, 0, .5);

Stíny můžeme **vrstvit**, stačí je oddělit čárkou. První stín je ten nejvíc nahoře:

	box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, .5),
		inset 5px 5px 10px 10px rgba(0, 0, 0, .5);


Živá ukázka příkladu je na [cdpn.io/e/lAoDv](http://cdpn.io/e/lAoDv).


Tipy a triky
------------

### Stín jen na jedné straně objektu

Tady chceme stín jen na levé straně. Je to jednoduché – horizontální stín nastavíme na `0`. I přesto je ale díky použití rozostření stín malinko vidět nahoře i dole:

	box-shadow: 5px 0 5px -2px rgba(0,0,0,.5);

Živá ukázka příkladu je na [cdpn.io/e/JnGyb](http://cdpn.io/e/JnGyb).

### Stín jako kopie objektu

Kreslit stínem logo Microsoftu je samozřejmě nepraktické, ale hezky to ukazuje sílu řetězení a taky co se stane, když nepoužijeme rozostření – [cdpn.io/e/qJuzw](http://cdpn.io/e/qJuzw).

Můžete samozřejmě kombinovat nerozostřené i rozostřené stíny – [dabblet.com/gist/2043600](http://dabblet.com/gist/2043600).
	 

Podpora v prohlížečích
----------------------

IE9+. Podpora v moderních prohlížečích je téměř bezproblémová: [caniuse.com/box-shadow](http://caniuse.com/box-shadow)

### Starší Webkit prohlížeče občas ignorují roztažení

Drobným problémem je jen ignorace nulové hodnoty roztažení v případě nepřítomnosti hodnoty rozostření ve starších prohlížečích postavených na jádře Webkit. V Safari na iOS6 nebo třeba Android Browseru 2.3 nebude fungovat zápis:

	box-shadow: 5px 5px 0 rgba(0, 0, 0, .5);
	
Tento ovšem ano:

	box-shadow: 5px 5px 10px rgba(0, 0, 0, .5);
	
Živá ukázka příkladu je na [cdpn.io/e/FGtbu](http://cdpn.io/e/FGtbu).

### Internet Explorer 8

V IE8 můžete stín nechat vykreslit pomoc proprietární vlastnosti `filter`. Například:

	filter: progid:DXImageTransform.Microsoft.Shadow(color='#cccccc', Direction=145, Strength=3);
	
Samozřejmě, ne všechny typy stínů takto nahradíte.
	
Vykreslovat stíny ve starších Explorerech umí i polyfill [css3pie.com](http://css3pie.com/). 

Obvykle si ovšem u stínů vystačíte se strategií nulového fallbacku.
