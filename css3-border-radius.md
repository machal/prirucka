CSS3 Border Radius – poloměr rohu rámečku
=========================================

Vykreslování kulatých a elipsovitých rohů elementu.

Když v praxi Border Radius ochočíme, naučíme se například:

* Vykreslit kruh a schovat do něj [třeba avatar](http://trentwalton.com/2010/08/03/css3-border-radius-rounded-avatars/).
* Vyčarovat i velmi roztodivné [nepravidelné tvary](http://www.css3shapes.com/), protože každý růžek může mít úplně jiné zakulacení. Ale nepředbíhejme.
* V kombinaci s animací rámečku vytvořit [efektní roleček](http://kratce.vzhurudolu.cz/post/18092366948/css3-rolecek).
* A samozřejmě — vytvořit kulaté rohy kolem boxíku.


Syntaxe
-------

	border-radius:
		_polomer_vpravo_nahore_
		_polomer_vpravo_dole_
		_polomer_vlevo_dole_
		_polomer_vlevo_nahore_
		(/ _elipsove_varianty_);

Rovnoměrné zakulacení rohů s poloměrem 10 pixelů vyšvihneme takto:

	border-radius: 10px;

Zakulacovat ovšem můžeme i v procentech ze šířky elementu a dalších jednotkách dostupných v CSS. Zakulacovat můžeme **pro každý růžek zvlášť**. První je vždy levý horní a postupuje se po směru hodinových ručiček:

	border-radius: 15% 15% 0 0;

Přidáním lomítka zajistíme **zakulacení ve tvaru elipsy**, nikoliv kružnice. První růžek bude zakulacený v elipse s vertikálním poloměrem 15% a horizontálním 30%:

	border-radius: 15% 15% 0 0 / 30% 15% 0 0;

Na následujícím schématu je patrné jak se podle elipsy v praxi zakulacuje:

<img class="picture" src="content/schemes/CSS3-border-radius.svg" width="700" height="394" alt="border-radius: 15% 0 0 0 / 30% 0 0 0">

Dobré vědět, že `border-radius` je ve skutečnosti zkratka pro deklaraci vlastností jednotlivých rohů. Můžeme je samozřejmě **nastavit samostatně**:

	border-top-left-radius: 4em;
	border-top-right-radius: 4em;
	border-bottom-right-radius: 4em;
	border-bottom-left-radius: 4em;

Příklad k vyzkoušení
--------------------

<p data-height="204" data-theme-id="502" data-slug-hash="EljFa" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/EljFa'>Příklad: CSS3 Border-radius</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>

Tipy a triky
------------

* Na tabulky s `border-collapse: collapse` a rodičovské prvky s obrázkem uvnitř je potřeba aplikovat `overflow: hidden`.
* MSIE9 sice `border-radius` podporuje, ale není je možné kombinovat s vlastností `filter` používanou například pro přechody. Dá se vyřešit nastavením stejného `border-radius` a `overflow: hidden` pro rodičovský element.
* Pokud vám v Safari zpod růžku [vyčuhuje barva pozadí](http://tumble.sneak.co.nz/post/928998513/fixing-the-background-bleed), přidejte za řádek s `border-radius` tohle: `-webkit-background-clip: padding-box`.


Podpora v prohlížečích
----------------------

Podpora v moderních prohlížečích je bezproblémová. Pokud v osmičkovém Exploreru kulaté rohy nutně potřebujete, použijte [CSS3Pie](http://css3pie.com/). Obvykle vám ovšem vystačí strategie nulového fallbacku.
