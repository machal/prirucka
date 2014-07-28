
CSS3 Media Queries
===========

Dotazy na média. Určitá část CSS deklarací se aplikuje jen po splnění podmínek napsaných pomocí Media Queries.

V praxi se používá zejména v responzivním webdesignu. Dotazy na média jsou jedním ze tří pilířů klasického responzivního webdesignu spolu s fluidním layoutem a fluidními médii.

Z CSS2 budete znát podmínky typy médií — `@media print { … }`. CSS3 Media Queries je vylepšují o dotazy na vlastnosti média.


Syntaxe
-------

Můžete je vložit přímo do CSS souboru:

	@media (_podminky_) {
		/* css kod, ktery se aplikuje jen po splneni _podminek_ */
	}

Nebo do HTML na místě reference na CSS soubor:

	<link rel="stylesheet" href="mobile.css" media="max-width: 480px">

### Minimální/maximální výška/šířka

Klasický dotaz na média vypadá například takto:

	@media (max-width: 480px) {
		.container {
			width: auto
		}
	}

Deklaraci pro `.container` prohlížeč aplikuje, pokud šířka viewportu (prostoru pro stránku v okně prohlížeče) nepřesáhne 480 pixelů. Níže si to budete moci zkusit na příkladu.

Alternativně lze použít dotaz na šířku displeje obrazovky: `@media (max-device-width: 480px)`. Narozdíl od `max-width` jej neočůráte změnou velikosti okna a tak toho někteří blázni začali využívat pro detekci typu zařízení. Je to blbost, malý nebo velký [tablet, smartphone či desktop od sebe šířkou okna nerozeznáte](http://kratce.vzhurudolu.cz/post/46416507703/jake-breakpointy-zvolit-v-responzivnim-webdesignu).

Pomocí `max-width` naopak můžete alespoň základně otestovat aplikování změn pro malé displeje na svém desktopovém prohlížeči.

Vraťme se ke zbývajícím dotazům na rozměry viewportu. Lze si domyslet, že vypadají takto:

	@media (min-width: 100px) { … }
	@media (max-height: 100px) { … }
	@media (min-height: 100px) { … }

### Logické operátory

Dotazy na média můžete kombinovat pomocí operátoru `and` řetězit jednak mezi sebou a taky kombinovat s typy médií:

	@media screen and (min-width: 400px) and (max-height: 600px) { … }

Další možné operátory jsou negace (`not`). `or` neexistuje, používá se místo něj čárka:

	@media (max-width: 400px), print { … }

Pokud chcete nějaký kus stylu zároveň schovat před prohlížečí, které CSS3 nerozumí, použíjte klíčové slovo `only`:

	@media only screen { … }

### Další vlastnosti k dotazování

1. **Detekce vysokokapacitních displejů** typu [Retina](http://www.slideshare.net/machal/retina-displeje-pro-webdesignry)
	`@media only screen and (-webkit-min-device-pixel-ratio : 1.5), only screen and (min-device-pixel-ratio : 1.5) { … }`
2. **Detekce orientace zařízení.** Tak co, drží ho uživatel na výšku nebo na šířku?
`@media (orientation:portrait) { ... }`
3. **Detekce poměru stran obrazovky**
`@media screen and (device-aspect-ratio: 16/9) { ... }`

To byly ty nejpoužívanější. Existuje jich ale [mnohem víc](http://www.opera.com/docs/specs/presto26/css/mediaqueries/).


Příklad k vyzkoušení
--------------------

Zmenšete si okno prohlížeče tak, aby se tenhle iframe vešel do 480 pixelů šířky. Změní se velikost zeleného boxíku:

<p data-height="218" data-theme-id="502" data-slug-hash="aCBAr" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/aCBAr'>Příklad: CSS3 Media Queries</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>


Podpora v prohlížečích
----------------------

IE8 neumí ani základní CSS3 Media Queries. Existuje naštěstí hned několik strategií jak se tím nenechat odradit. On by bez nich nemohl responzivní webdesign vůbec vzniknout, takže pokud vás to polekalo, posbírejte hned odvahu zpět.

1. Pište CSS tak, aby nedostatky IE8- nebyly problém. Výchozí tedy pro desktop a do dotazů na média dejte deklarace pro menší displeje.
2. Použijte polyfill [Respond.js](https://github.com/scottjehl/Respond). Je odzkoušený a dostatečně rychlý, ale ano — na složitějších webech a pomalejších strojích s IE8 si uživatelé občas mohou všimnout, že se část stylů načítá později.
3. A doporučované strategie na závěr — vezměte na pomoc CSS preprocesor a buď použijte [body třídy](http://kratce.vzhurudolu.cz/post/49758753713/responzivni-mobile-first-s-pomoci-body-trid) nebo si nechte kompilovat zvláštní soubor pro starší [IÉčka](http://kratce.vzhurudolu.cz/post/42187934506/mobile-first-css).
