# Checklist pro frontendisty před spuštěním webu

Proč dělat weby blbě, když je můžeme dělat dobře? Podle checklistu ze Vzhůru dolů.

Náš kontrolní seznam je zaměřený primárně na frontendové vývojáře a vývojářky, ale zohledňuje i nejvýznamnější úkoly pro backendisty, marketéry a designéry.

<!-- AdSnippet -->

Zaměřujeme se hlavně na veřejné obsahové weby a také e-shopy.

## Obsah a HTML {#obsah-html}

Obsah je král a HTML je jeho trůn. Tímhle musíme začít.

- Správný `<title>` a `<meta description>`  
<small>Mají vliv na umístění ve vyhledávačích. Také kvůli náhledu stránky ve výsledcích vyhledávání nebo na sociálních sítích. [Více o title](https://moz.com/learn/seo/title-tag). [Více o meta description](https://moz.com/learn/seo/meta-description). </small>
- Osnova nadpisů je v pořádku  
<small>Stromová struktura (outline) usnadní indexaci vyhledávači a prohlížení stránky zrakově postiženými. [HTML5 outliner](https://gsnedders.html5.org/outliner/). [Lze mít více `<h1>`?](https://www.vzhurudolu.cz/blog/25-vice-h1).</small>
- Náhledy pro sociální sítě a chaty  
<small>Facebook Open Graph a Twitter Cards. Má potenciál zvýšit návštěvnost webu. Důležitý je hlavně obrázek. [Více informací](http://jecas.cz/nahled-odkazu). [Facebook Debugger](https://developers.facebook.com/tools/debug/). [Twitter Validator](https://cards-dev.twitter.com/validator).</small>
- Strukturovaná data pro Google  
<small>„Rich Snippets“ vylepší náhled webu ve výsledcích vyhledávání. Podstatné hlavně u e-shopů a webů, které obsahují recenze nebo události. [Více informací](rich-snippets.md). [Google Structured Data Testing Tool](https://developers.google.com/structured-data/testing-tool/).</small>
- Obsah bez typografických chyb  
<small>Všem zajistí lepší čtivost obsahu. Profíci jsou na to citliví a zbytečně se před nimi typo-chybami shodíte. Dohlédněte alespoň na ty nejpodstatnější. [Typografické rady na Wikipedii](https://cs.wikipedia.org/wiki/Wikipedie:Typografick%C3%A9_rady).</small>
- Odkazy z webu ven jsou platné  
<small>Pro kontrolu použijte třeba [Dead Link Checker](https://www.deadlinkchecker.com/) nebo [Xenu](http://home.snafu.de/tilman/xenulink.html).</small>
- Správný `<meta viewport>`  
<small>Zařídí správné zobrazování responzivního webu v mobilních prohlížečích. Důležité je [nezakazovat zoomování](https://www.vzhurudolu.cz/blog/48-znicit-mobilistu-2). [Více informací](viewport-meta.md).</small>
- Ikony a favikony  
<small>Identifikují web v bookmarcích nebo v seznamu aplikací na mobilech i desktopu. [Více informací](favicon.md). [RealFaviconGenerator.net](http://realfavicongenerator.net/).</small>
- Validní HTML  
<small>Hlavně kvůli potenciálním chybám v indexaci vyhledávači. Lpí na tom i někteří klienti, tak proč si kazit renomé. [Více informací](http://jecas.cz/validita). [Český validátor](http://validator.webylon.info/).</small>

## Přístupnost {#pristupnost}

Obsah už máme královsky vyladěný. Pojďme teď odstranit překážky, které jsme mohli nechtěně vytvořit mnohým uživatelům.

- Hlavní obsah a navigace jsou dostupné bez JavaScriptu  
<small>Většina robotů nezvládne indexovat obsah vytvořený JavaScriptem. Testujte vypnutím JavaScriptu v Developer Tools.</small>
- Kontrola podle WCAG  
<small>[Web Accessibility Checker](http://achecker.ca/checker/index.php) projde web a upozorní na možné chyby podle standardu [„Web Content Accessibility Guidelines“ ve verzi 2.0](http://blindfriendly.cz/wcag20checklist/). Nastavenu má střední přísnost, [úroveň AA](http://www.pristupnost.cz/jak-tvorit-pristupny-web/pravidla-pristupnosti/wcag/).</small>
- Sémantika: WAI-ARIA oblasti a HTML5 elementy  
<small>Zrakově postiženým umožní strukturované procházení, což jim šetří čas. Stačí přidat hlavně role pro navigaci, obsah a třeba vyhledávání. Pomůže [článek o WAI-ARIA](wai-aria.md) a [HTML5 elementech](html5-struktura.md) jako je `<section>` nebo `<nav>`.</small>
- Ovládání tabulátorem funguje  
<small>Zkuste sekvenční procházení stránky z klávesnice. Kromě zrakově postižených to ocení i pokročilí uživatelé. [Článek na Poslepu](http://poslepu.blogspot.cz/2010/06/zvyraznujete-odkazy-pri-ovladani-webu-z.html).</small>
- Máme správné typy inputů ve formulářích  
<small>`<input type="email">` a další usnadňují zadávání obsahu na mobilních zařízeních. Užitečné naprosto pro všechny. [Článek na Zdrojáku](https://www.zdrojak.cz/clanky/formulare-html5-nove-inputy/).</small>
- Barevný kontrast je dostatečný  
<small>Ocení nejen zrakově postižení, ale také majitelé horších displejů. Prakticky každý při horších světelných podmínkách na mobilech. Článek [o kontrastu](kontrast.md).</small>

<small>S testováním přístupnosti vám pomohou také nástroje [Lighthouse](lighthouse.md) a [Tenon](https://tenon.io/). Detailně se tímto tématem zabývají také checklisty [na A11Y Project](https://a11yproject.com/checklist/) nebo [kontrolní seznam Heydona Pickeringa](https://github.com/Heydon/inclusive-design-checklist).</small>

## Design webu {#design}

Design mají obvykle na starosti kolegyně a kolegové. Pojďme ale zkontrolovat alespoň to nejdůležitější.

- Požadovaná rychlost webu  
<small>Tohle je komplexní téma, takže alespoň stručně. S optimalizací [rychlosti načítání](rychlost-nacteni.md) pomůže například nástroj [Pagespeed Insights](pagespeed-insights.md) nebo jiné [nástroje](rychlost-nastroje.md). Testujte všechny vstupní šablony, testujte často a snažte se být rychlejší než konkurence.</small>
- Web je přátelský k mobilním uživatelům  
<small>Pomůže test [Mobile Friendly](https://search.google.com/test/mobile-friendly) od Googlu. Vyčerpávající informace [o responzivní designu](https://www.vzhurudolu.cz/responzivni-design) jsou v knížce [Vzhůru do (responzivního) webdesignu](https://www.vzhurudolu.cz/kniha-responzivni-design/).</small>
- Grafika podporuje HD displeje typu Retina  
<small>Obyčejná grafika nebude na vysokokapacitních displejích vypadat dobře. Trochu teorie [o problému v článku](css-pixel.md). V praxi potřebujete [SVG](svg.md), případně také [atribut srcset](srcset-sizes.md).</small>
- Máme šablony pro chybové stránky 404 a 50x  
<small>Výchozí šablony chyb serverů návštěvníkovi nepomohou. Pár [tipů v článku na Interval.cz](https://www.interval.cz/clanky/pet-nezbytnych-prvku-uspesne-chybove-stranky-404/).</small>

<small>Věnujte pozornost také [UX checklistu pro e-shopy od Ondřeje Ilinčeva](http://www.ilincev.com/ux-checklist-eshop) nebo [UX checklistu Lukáše Dubiny](https://www.lukasdubina.cz/uxdesign-checklist).</small>

## Prohlížeče a kompatibilita {#kompatibilita}

Zobrazuje se váš obsah ve všech prohlížečích, které podporujete? Dá se vytisknout? A mohla bych jej vidět se zapnutým AdBlockem?

- Plné zobrazení napříč prohlížeči a zařízeními  
<small>Mezi moderními [prohlížeči](prohlizece.md) tolik rozdílů není. I tak pomohou nástroje jako [Browserstack](https://www.browserstack.com/). Viz také článek [Jak testovat responzivní weby](jak-testovat-responzivni-weby.md). Nezapomeňte ošetřit [i chytré hodinky](weby-watchos.md).</small>
- Dostupnost hlavního obsahu ve starších prohlížečích  
<small>Záleží to na projektu a cílové skupině. Ve starších prohlížečích web nemusí vypadat jako z reklamy, důležitá je ale čitelnost hlavního obsahu a dostupnost navigace.</small>
- Tisková verze stránky  
<small>Je potřeba hlavně zajistit nezobrazování částí nezajímavých pro tisk jako jsou ovládací prvky webu. [Článek na Je čas](http://jecas.cz/tisk).</small>
- Kontexty blokovačů reklamy  
<small>Neblokuje Adblock i nevinné třídy z vašeho CSS? Otestujte web se zapnutým AdBlockem. [Tweet](https://twitter.com/machal/status/1084773644331597824).</small>
- Stránka je v pořádku bez CSS  
<small>Verze pro čtečky a další kontexty, které nepoužívají vaše CSS. [Článek Weby bez CSS](weby-bez-css.md).</small>

## Kvalita kódu: dokumentace a testy {#kvalita-kodu}

Konvence, linting, testování a odchyt chyb. Tohle vidět není, ale nedostatky v téhle oblasti mohou web pořádně rozbít.

- Kód dodržuje konvenci  
<small>Konvence usnadňuje sdílení nebo předávání kódu. [Články o JavaScript code standards](https://www.google.cz/webhp?ion=1&espv=2&ie=UTF-8#q=javascript%20code%20standards). V CSS můžete vyjít ze [zásad psaní respektujícího CSS](rcss-zasady.md).</small>
- Kvalita kódu v požadované úrovni  
<small>Automatická kontrola častých chyb nebo problematických konstrukcí kódu. Lze využít například [ESLint](http://eslint.org/) v CSS pak [Stylelint](stylelint.md). Ve všech jazycích autoformátovač [Prettier](https://prettier.io/). Více se dozvíte na [Školení organizace CSS](https://www.vzhurudolu.cz/kurzy/css-kod) nebo [Nástroje JavaScriptu](https://www.vzhurudolu.cz/kurzy/nastroje-javascriptu).</small>
- Javascriptový kód je pokrytý testy  
<small>Javascript není CSS a tak se nějaké ty testy hodí. Více se dozvíte na [školení Nástroje JavaScriptu](https://www.vzhurudolu.cz/kurzy/nastroje-javascriptu).</small>
- Měření runtime chyb v JS kódu  
<small>Ujistěte se, že víte o chybách, které uživatelům vrací váš frontendový kód. Zamezte tomu, aby prohlížeč do konzole vypisoval chyby. Z možností sledování vybíráme např. [Technical Dashboard v Google Analytics](google-analytics-vyvojari.md) nebo [Sentry](https://sentry.io/).</small>
- Funkční testování  
<small>Fungují kritické části webu i když ho necháte běžet? Pomůže třeba [Selenium](http://www.seleniumhq.org/) nebo nástroje vycházející ze standardu [Webdriver](https://www.w3.org/TR/webdriver/). Více [o testech v podcastu](https://www.vzhurudolu.cz/podcast/139-podcast-testovani).</small>
- Kód je v produkční kvalitě  
<small>Je minifikovaný a neobsahuje zbytečná data. </small>
- README.md  
<small>V tomto souboru je v repozitáři popsána instalace, buildování atd.</small>

## Spuštění webu {#spusteni}

Už máme web hotový. Jdeme zmáčknout tlačítko pro zveřejnění? Raději ještě počkejme, právě tady můžeme nasekat fatální chyby.

- Není zakázaná indexace vyhledávači  
<small>Mrkněte se do robots.txt nebo na `<meta name="robots">`. Obvykle indexaci při spuštění webu zakazovat nechcete, ale často se na to zapomíná. Více je [v dokumentaci od Googlu](https://support.google.com/webmasters/answer/93710?hl=cs).</small>
- Vývojářské soubory nejsou na produkci  
<small>Hlavně adresáře typu `.git/`, `node_modules/,` zapomenutý ZIP s obsahem databáze nebo třeba veřejně přístupný [Adminer](https://www.adminer.org/cs/) či [phpMyAdmin](https://www.phpmyadmin.net/).</small>
- Přidání a konfigurace Google Analytics  
<small>Obchodní výkonnost webu všechny zajímá, nezapomněli jste [nastavit měření](google-analytics-pridani.md)? Alternativně přidejte kód Google Tag Managera, marketéři si přes potřebné kódy přidají. </small>
- Registrace v nástrojích pro webmastery  
<small>Pravidelně upozorní na časté chyby z pohledu vyhledávačů. Nejdůležitější je [Google Search Console](google-search-console.md): [Přidejte tam web](https://www.google.com/webmasters/tools/) hned po spuštění. A pak samozřejmě [Seznam Webmaster](https://reporter.seznam.cz/wm/). Pro zahraniční weby také například [Bing Webmaster Tools](https://www.bing.com/toolbox/webmaster).</small>
- Přesměrování ze starých adres  
<small>Pokud se mění URL, musíte přesměrovat ze starých na nová. Jakmile by stará URL vracela chybu 404, vyhledávače na ta nová nepředají tzv. „link juice“ hodnocení adresy získané z dřívějška. Na staré adrese vracejte kód 301 a přesměrujte na novou. [Možnosti na JakPsátWeb.cz](https://www.jakpsatweb.cz/presmerovani.html), [dokumentace od Seznam.cz](https://napoveda.seznam.cz/cz/fulltext-hledani-v-internetu/presmerovani-webu/).</small>
- Správně nastavené hlavičky ze serveru  
<small>[REDbot.org](https://redbot.org/) vysvětluje nastavení vašeho serveru: gzipování, kešovací hlavičky… Hodí se hlavně zkontrolovat na hostingu, který neprovozujete sami.</small>
- Správně nastavené bezpečnostní hlavičky  
<small>[SecurityHeaders.io](https://securityheaders.io/) udělá alespoň základní audit té části serverové hlavičky, kterou můžete usnadňovat různé typy útoků. Např. `X-Frame-Options` nebo `Content-Security-Policy`.</small>
- Přidali jsme `robots.txt`, `humans.txt` a `security.txt`  
<small>[Roboty](http://www.jakpsatweb.cz/robots-txt.html), jen pokud potřebujete výslovně změnit něco kolem indexování. [Lidi](http://humanstxt.org/CZ) hlavně pro radost. [Security](https://www.michalspacek.cz/k-cemu-je-soubor-security.txt) jako kontakt pro hlášení průšvihů, než jsou z nich megaprůšvihy.</small>
- Máme `sitemap.xml`  
<small>Usnadňuje indexování vyhledávači. Hlavně pro větší weby nebo weby s komplikovanou strukturou.</small>
- Web běží na HTTPS  
<small>Bez bezpečného protokolu se s vámi už nikdo (myšleno vyhledávače) nebude chtít kamarádit. [Více o HTTPS](https.md).</small>
- Máme zapnuté SEO  
<small>To byl vtip, omlouvám se. Problematika SEO je komplexní, takže vás odkážu na [checklist Lukáše Pitry](https://www.lukaspitra.cz/checklist-kontroly-pred-spustenim-webu/) nebo [checklist technického SEO](https://trello.com/b/t8Q9EzwZ/technick%C3%A9-seo-checklist-pavel-ungr-a-jaroslav-hlavinka) od pánů [Ungra a Hlavinky](https://www.pavelungr.cz/skoleni/technicke-seo-nejen-pro-vyvojare/).</small>

<!-- AdSnippet -->

Checklist je ve zjednodušené podobě k dispozici také [jako PDF](https://www.vzhurudolu.cz/assets/files/webaruv-checklist.pdf).

<small>

Checklist pro frontendisty, verze 2.0. Autor: [Martin Michálek](https://www.vzhurudolu.cz/martin). Za připomínky autor děkuje [Danielu Střelcovi](https://www.danielstrelec.cz/), [Martinovi Staňkovi](https://martinstanek.cz/), [Vojtěchu Bulantovi](https://www.linkedin.com/in/vbulant/?originalSubdomain=cz) a [dalším](https://www.facebook.com/VzhuruDolu/posts/2708369842612476).

Úpravy vítány. Stačí vytvořit pull request na [Githubu](https://github.com/machal/prirucka/blob/master/content/checklist.md) nebo napsat komentář.

</small>



<!-- AdSnippet -->
