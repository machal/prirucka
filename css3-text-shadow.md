CSS3 Text Shadow – stín textu
=============================

Stínování textu.

	text-shadow:
		_horizontalni_posun_
		_vertikalni_posun_
		(_rozostreni_)
		_barva_,
		(_dalsi_stiny_);

Podívejte se rovnou na příklad:

<p data-height="156" data-theme-id="502" data-slug-hash="aDLCl" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/aDLCl'>CSS3 Text Shadow</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>

`text-shadow` má dvojče — stínování boxu [box-shadow](css3-box-shadow.md). Na stránce o stínování boxu najdete detailnější popis syntaxe. Je velmi podobná.

Tipy a triky
------------

 * Stíny textu je možné řetězit a vytvořit až [pseudo-3D efekty](http://markdotto.com/playground/3d-text/).
 * Tady jsou zase stíny spolu s vlastností <code>background-clip</code> využity pro [efekt vyřízlého textu](http://www.gordonhallart.com/blog/wp-content/uploads/2011/04/insetText.html).
 * Pro zajímavost — [tohle řešení](http://dabblet.com/gist/1609945) "vlisovaného" textu je pěkné, ale žádné CSS3 nevyužívá.



Podpora v prohlížečích
----------------------

IE10+. Ve starších prohlížečích si můžete vybrat buď tvrdý fallback bez stínu  (preferovaná varianta) nebo s&nbsp;pomocí
	podmínek Modernizru či <a href="http://www.jakpsatweb.cz/html/podminene-komentare.html">IE podmíněných
	komentářů</a> udělat IE8– variantu s&nbsp;pomocí microsoftího filtru <a href="http://msdn.microsoft.com/en-us/library/ms533086(v=vs.85).aspx">DropShadow</a>.
