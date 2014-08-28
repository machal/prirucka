CSS3 Font Face – vlastní fonty
==============================

Webové fonty nebo-li vlastní fonty do stránky? `@font-face` je dnes už standardní technika s takřka plnou podporou v prohlížečích, které se z technického pohledu není potřeba bát.

Syntaxe
-------

Nejdřív pomocí at-pravidla `@font-face` nadeklarujete název rodiny a cestu k souboru:

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
* **TTF/OTF** (TrueType/OpenType) – dva formáty, které podporují téměř všechny moderní prohlížeče, jen MSIE až od verze 9. Autor souboru musí navíc nastavit tzv. „embeding bits“ na „installable”. [caniuse.com/ttf](http://caniuse.com/ttf)
* **SVG** (fonty definované ve vektorovém formátu SVG) – potřebujete jen pokud chcete podporovat opravdu hodně staré verze iOS Safari - 4.3 a starší. [caniuse.com/svg-fonts](http://caniuse.com/svg-fonts)
* **EOT** (Embedded OpenType font) – podporují všechny Explorery od verze 4. Potřebujete pokud chcete podporovat IE8 a starší. [caniuse.com/eot](http://caniuse.com/eot)

### Syntaxe maximalizujicí kompatibilitu

Pokud potřebujete podporovat všechny systémy, zápis je trošku složitější:

	@font-face {
		font-family: 'MyWebFont';
		src: url('webfont.eot'); /* IE9 v kompatibilním režimu */
		src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
			url('webfont.woff') format('woff'), /* Všechny moderní prohlížeče */
			url('webfont.ttf')  format('truetype'), /* Starší Safari, Android, iOS */
			url('webfont.svg') format('svg'); /* iOS 4.3 a starší */
	}

Dnes ale typicky potřebujete jen soubory ve formátu WOFF, TTF (kvůli starším Androidům) a EOT (kvůli IE8-). Ale čekají nás světlé zítřky. S formátem WOFF.

### Do budoucna jen WOFF

Za pár měsíců až let nám bude stačit jen WOFF formát:

	@font-face {
		font-family: 'WebFont';
		src: url('webfont.woff');
	}


Opět ale pozor. Vždy tu budou prohlížeče, které žádný z formátů webových fontů neumí. Například Opera Mini. Nebo situace kdy uživatel moderního prohlížeče webový font nenačte – například proto, že je na velmi pomalé mobilní síti.

Myslete i na tyto případy a nikdy nezapomínejte definovat fallbackový systémový font. Například takto:

	.element {
		font-family: 'WebFont', Georgia, sans-serif;
	}
