
CSS3 Text Overflow – způsob přetékání textu
===========================================

Vytečkování textu, který přesahuje šířku elementu.

	text-overflow: ( clip | ellipsis | <_retezec_> );

Když na školeních ukazuji `text-overflow: ellipsis`, opakuje se vždy stejný scénář. Polovina účastníků zívá: „Hm, tohle používám už dva roky…“ A druhá polovina? Nadšeně si píše: „TODO použít hned zítra!“

Ellipsis má háček — aktuálně je možné ji použít jen na vytečkování jednořádkového textu na blokových elementech. I tak je to ale hrozně **užitečný pomocník v responzivním webdesignu**.

Příklad
--------

Přestavte si situaci kdy v každém případě potřebujete, aby text neskočil na další řádek. Třeba navigační lištu. A jeho délku, stejně jako šířku boxu, ve kterém se objevuje, neznáte.

Pak stačí `ellipsis` doplnit o dvě další deklarace zajišťující „jednořádkovost”:

	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;

Zkuste si naživo v příkladu:

<p data-height="124" data-theme-id="502" data-slug-hash="FeLkJ" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/FeLkJ'>CSS3 Text Oveflow: navigation items without wraping</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>


Podpora v prohlížečích
----------------------

`text-overflow: ellipsis` má podporu od IE6, takže není co řešit.
