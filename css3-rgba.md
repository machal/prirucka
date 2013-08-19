
CSS3 RGBa barva
===============

RGB barva se čtvrtým číslem jež nese informaci o průhlednosti v alfa kanále.

	rgba(_red_, _green_, _blue_, _pruhlednost_);

Poloprůhledné RGBa barvy můžete samozřejmě aplikovat všude kde se v&nbsp;CSS barvy používají. Zdůrazním hlavně <a href="http://css-tricks.com/transparent-borders-with-background-clip/">rámečky</a> (s&nbsp;pomocí background-clip), <a href="/box-shadow">stíny</a> neb gradienty.

Příklad
-------

Porovnání RGBa barevného modelu s použitím vlastnosti `opacity`. Opacity zajistí poloprůhlednost objektu samotného i jeho dceřinných objektů. RGBa je barva aplikovatelná na cokoliv:

<p data-height="149" data-theme-id="502" data-slug-hash="HrBsD" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/HrBsD'>CSS3: RGBa</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>


Podpora v prohlížečích
----------------------

RGBa žerou všechny kromě osmičky a starších MSIE. Nejelegantněji si se stařečky poradíte definovaným fallbackem:

	color: rgb(128, 0, 0); 
	color: rgba(255, 0, 0, 0.5); 

V moderních browserech se zobrazí červená s padesátiprocentní průhledností. V IE8– pak tmavý odstín čevené. Fallback barvu musíme určit s ohledem na barvu pozadí. Tady počítáme s černou.