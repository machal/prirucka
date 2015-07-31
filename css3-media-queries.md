CSS3 Media Queries – podmíněné zobrazení pro média
==================================================

V některých českých odborných textech se užívá překladu „dotazy na média“.

Princip je jednoduchý. Určitá část CSS deklarací se aplikuje jen po splnění podmínek napsaných pomocí Media Queries.

Dotazy na média jsou jedním ze tří pilířů klasického responzivního webdesignu, spolu s fluidním layoutem a fluidními médii.

Z CSS2 budete znát podmínky pro typy médií — `@media print { … }`. CSS3 Media Queries je vylepšují o dotazy na vlastnosti média.


Syntaxe
-------

Můžete je vložit přímo do CSS souboru:

	@media (_podminky_) {
		/* css kod, ktery se aplikuje
    jen po splneni _podminek_ */
	}

Nebo do HTML na místě reference na CSS soubor:

	<link rel="stylesheet"
    href="mobile.css" media="max-width: 480px">

### Minimální/maximální výška/šířka

Klasický dotaz na média vypadá například takto:

	@media (max-width: 480px) {
		.container {
			width: auto
		}
	}

Deklaraci pro `.container` prohlížeč aplikuje, pokud šířka viewportu (prostoru pro stránku v okně prohlížeče) nepřesáhne 480 pixelů.

Alternativně lze použít dotaz na šířku displeje obrazovky: `@media (max-device-width: 480px)`. Na rozdíl od `max-width` nebude mít vliv změna velikosti okna.

Vraťme se ke zbývajícím dotazům na rozměry viewportu. Lze si domyslet, že vypadají takto:

	@media (min-width: 100px) { … }
	@media (max-height: 100px) { … }
	@media (min-height: 100px) { … }

Živý příklad Media Queries můžete vyzkoušet tady: [cdpn.io/e/aCBAr](http://cdpn.io/e/aCBAr).

### Logické operátory

Dotazy na média můžete pomocí operátoru `and` řetězit jednak kombinovat mezi sebou a taky kombinovat s typy médií:

	@media screen and (min-width: 400px)
    and (max-height: 600px) { … }

Místo očekávaného `or` se používá čárka:

	@media (max-width: 400px), print { … }

Dalším možným operátorem je negace (`not`).

### Další vlastnosti k dotazování

**Detekce vysokokapacitních displejů** typu Retina, Amoled a dalších:

	@media
		(-webkit-min-device-pixel-ratio: 1.5),
		(min-resolution: 144dpi) {
			background-image: url(image_hd.png);
		}

Pokud má zařízení poměr mezi CSS a hardwarovými pixely alespoň 1.5, načte se obrázek `image_hd.png`.

Poměrů je dnes celá řada (1.25, 1.5, 2, 3, 4), a tak tam kde to jde, doporučuji namísto bitmapových obrázků využívat vektorový formát SVG.

**Detekce orientace zařízení.** Drží zařízení uživatel na výšku, nebo na šířku?

	@media (orientation: portrait) { ... }
	@media (orientation: landscape) { ... }

**Podmínka pro poměr stran obrazovky**

	@media screen and (device-aspect-ratio: 16/9) { ... }

To byly ty nejpoužívanější typy dotazů. Existuje jich ale [mnohem víc](http://www.opera.com/docs/specs/presto26/css/mediaqueries/).


Podpora v prohlížečích
----------------------

IE8 neumí ani základní CSS3 Media Queries. Existuje naštěstí hned několik strategií jak se tím nenechat odradit. On by bez nich nemohl responzivní webdesign vůbec vzniknout, takže pokud vás to polekalo, seberte hned zase odvahu.

Tři z možných strategií, jak se vypořádat s tím, že IE8− Media Queries nepodporuje.

1. Použijte polyfill [Respond.js](https://github.com/scottjehl/Respond). Je odzkoušený a dostatečně rychlý. Používá jej například i populární frontend framework Bootstrap.
2. Pište CSS tak, aby nedostatky IE8− nebyly problém. Výchozí tedy pro desktop a do dotazů na média dejte deklarace pro menší displeje.
3. Nebo vezměte na pomoc CSS preprocesor a buď použijte [body třídy](http://kratce.vzhurudolu.cz/post/49758753713/responzivni-mobile-first-s-pomoci-body-trid) nebo si nechte kompilovat zvláštní soubor pro starší [IÉčka](http://kratce.vzhurudolu.cz/post/42187934506/mobile-first-css).
