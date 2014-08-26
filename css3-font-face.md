CSS3 Font Face – vlastní fonty
==============================

Webové fonty nebo-li vlastní fonty do stránky? `@font-face` je dnes už standardní technika s takřka plnou podporou v prohlížečích, které se z technického pohledu není potřeba bát.

Syntaxe
-------

Nejdřív v bloku `@font-face` nadeklarujete název rodiny a cestu k souboru:

	@font-face {
		font-family: _nazev_rodiny_;
		src: url(_cesta_k_souboru_s_pismem_) format(_format_souboru_);
	}

Pak název rodiny jednoduše zavoláte v běžném CSS:
	
	.element {
			font-family: _nazev_rodiny_;
	}


Formáty souborů s webovými fonty
--------------------------------

Pokud nepoužíváte cloudová řešení typu Typekit nebo Google Fonts a uživatelům servírujete vlastní soubory s fonty, potřebuje základní povědomí o formátech souborů:

* **WOFF** (Web Open Font Format) – dnes převládající formát souborů. Podporovaný je ale MSIE až od verze 9 a Android Browserem od verze 4.4 – [caniuse.com/woff](http://caniuse.com/woff)
* **TTF/OTF** (TrueType/OpenType) – dva formáty, které podporují téměř všechny moderní prohlížeče. Jen MSIE až od verze 9. Autor souboru musí navíc nastavit tzv. „embeding bits“ na installable: [kltf.de/kltf_notes_ie9ttfembeddingbits.shtml](http://kltf.de/kltf_notes_ie9ttfembeddingbits.shtml). [caniuse.com/ttf](http://caniuse.com/ttf)
* **SVG** (fonty definované ve vektorovém formátu SVG) – potřebujete jen pokud chcete podporovat opravdu hodně staré verze iOS Safari - 4.3 a starší. [caniuse.com/svg-fonts](http://caniuse.com/svg-fonts)
* **EOT** (Embedded OpenType font) – podporují všechny Explorery od verze 4. Potřebujete pokud chcete podporovat IE8 a starší. [caniuse.com/eot](http://caniuse.com/eot)

### Syntaxe maximalizujicí kompatibilitu

V reálu je syntaxe trošku složitější, pokud potřebujete podporovat všechny systémy:

	@font-face {
		font-family: 'MyWebFont';
		src: url('webfont.eot'); /* IE9 v kompatibilním režimu */
		src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
			url('webfont.woff') format('woff'), /* Všechny moderní prohlížeče */
			url('webfont.ttf')  format('truetype'), /* Starší Safari, Android, iOS */
			url('webfont.svg#svgFontName') format('svg'); /* iOS 4.3 a starší */
	}

Dnes ale typicky potřebujete jen soubory ve formátu WOFF, TTF (kvůli starším Androidům) a EOT (kvůli IE8-). Ale čekají nás světlé zítřky.

### Do budoucna jen WOFF

Za pár měsíců až let bude stačit jen WOFF formát:

	@font-face {
		font-family: 'WebFont', Georgia, sans-serif;
		src: url('webfont.woff');
	}


Opět pozor. Vždy tu budou prohlížeče, které žádný z formátů webových fontů neumí. Například Opera Mini. Nebo situace kdy uživatel moderního prohlížeče webový font nenačte – například proto, že je na velmi pomalé mobilní síti.

Myslete i na tyto případy a nikdy nezapomínejte definovat fallbackový systémový font. Například takto:

	font-family: 'WebFont', Georgia, sans-serif;


Tipy a triky
------

### Pozor na falešnou italiku a tučný řez

TODO

### Načítání fontů z jiných domén

TODO. IE, Firefox and later Chrome versions implement the same origin policy, so any font library served on a different domain from the page will not be downloaded unless using CORS.


Příklad k vyzkoušení
--------------------

TODO. Tady je příklad využívající aktuální syntaxi fungující ve všech prohlížečích.

<p data-height="182" data-theme-id="502" data-slug-hash="aLeGg" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/aLeGg'>Příklad: CSS Font-Face</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>

