CSS3 Multiple Backgrounds
=========================

Vrstvení více obrázků nebo barev na pozadí jednoho elementu.

Není to nová CSS3 vlastnost, jen nová možnost existující `background`.

Je to snadné, vrstvy oddělujeme čárkou:

	background:
	    url('obrazek_nahore.png'),
	    url('obrazek_uprostred.png'),
	    #ddccaa;

První obrázek je vždy vrstva nejvíc nahoře.

Pokud nepoužijeme shorthand `background`, deklarace dalších vlastností obrázku na pozadí se pro jednotlivé vrstvy rovněž oddělují čárkou:

	background-image:
	    url('obrazek.png'),
	    url('dalsi_obrazek.png');
	background-repeat:
		no-repeat,
		repeat;		


Příklad k vyzkoušení
--------------------

Nezapomeňte, že obrázkem může být i [CSS3 gradient](css3-gradients.md):

<p data-height="218" data-theme-id="502" data-slug-hash="lvKkC" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/lvKkC'>CSS3 Multiple Backgrounds</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>


Podpora v prohlížečích
----------------------

IE9+. Pozor, vlastnost `background` s vícenásobnou hodnotou je ignorována pokud ji prohlížeč neumí. Pro starší prohlížeče jako IE8– vždy musíte definovat fallback. Například:

	background: #ddccaa;
	background:
	    url('obrazek_nahore.png'),
	    url('obrazek_uprostred.png'),
	    #ddccaa;

