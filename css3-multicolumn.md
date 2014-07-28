
CSS3 Multi-column Layout
===============

Vícesloupcová sazba.

Díky tomuto modulu text snadno nasázíte do více sloupců definované šířky podobně jako v novinové sazbě.

Modul sestává z několika vlastností:

	column-width: _sirka_sloupce_;
	column-count: _pocet_sloupcu_;
	column-gap: _sirka_odsazeni_mezi_sloupci_;
	column-rule: _vlastnosti_cary_mezi_sloupci_;

Příklad k vyzkoušení
--------------------

Definujeme šířku sloupce tak, aby se text dobře četl a šířku odsazení mezi sloupci. Když si zmenšíte okno prohlížeče a nezbude dost místa pro více sloupců vedle sebe, prohlížeč sám od vícesloupcové sazby upustí. V příkladu je i ukázka oddělovací čáry mezi sloupci (`column-rule`):

<p data-height="235" data-theme-id="502" data-slug-hash="ohLgJ" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/ohLgJ'>CSS3 Multiple Columns</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>


Podpora v prohlížečích
----------------------

IE10+. Starší prohlížeče doporučuji řešit tvrdým fallbackem — text se tam prostě jen nezalomí do sloupců.
