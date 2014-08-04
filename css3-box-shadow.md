CSS3 Box Shadow – stínování elementu
====================================

Stín pod elementem, uvnitř elementu nebo plastický efekt přes element.

Stíny jsou v uživatelských rozhraních webu doma jako Zeman na Hradě, takže se nebudeme zabývat důvody. Pojďme rovnou na zajímavá použití…

* Stín je základní stavební kámen všech [CSS3 tlačítek](http://hellohappy.org/css3-buttons/).
* Kreslit stínem [logo Microsoftu](http://codepen.io/zhusee2/pen/qJuzw) je samozřejmě ujeté, ale hezky to ukazuje sílu řetězení a taky co se stane, když nepoužijeme rozostření.


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

Příklad k vyzkoušení
--------------------

<p data-height="220" data-theme-id="502" data-slug-hash="lAoDv" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/lAoDv'>Příklad: CSS Box-Shadow</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>

Tipy a triky
------------

 - Pro odvážné: řetězení stínů může být i[ hodně
	 divoké](http://dabblet.com/gist/2043600).

Podpora v prohlížečích
----------------------

Podpora v moderních prohlížečích je bezproblémová. Pokud v osmičkovém Exploreru kulaté rohy nutně potřebujete, použijte [CSS3Pie](http://css3pie.com/). Obvykle vám ovšem vystačí strategie nulového fallbacku.
