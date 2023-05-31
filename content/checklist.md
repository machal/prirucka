# Checklist pro frontendisty před spuštěním webu

Proč dělat weby blbě, když je můžeme dělat dobře? Třeba podle checklistu ze Vzhůru dolů.

Náš kontrolní seznam je zaměřený primárně na [frontendové kodéry a kodérky](https://www.vzhurudolu.cz/blog/62-frontend-pozice), ale zohledňuje i nejvýznamnější úkoly pro webové vývojáře, marketéry a designéry.

<!-- AdSnippet -->

Zaměřujeme se zde hlavně na obsahové weby a také e-shopy.

Jednotlivé úkoly jsou označené prioritami tří stupňů –
★★★ značí nejvyšší a ★☆☆ nejnižší prioritu.

## Obsah a HTML {#obsah-html}

Obsah je král a HTML je jeho trůn. Tímhle musíme začít.

- Správný `<meta viewport>` ★★★  
<small>„Meta viewport“ zařídí správné zobrazování responzivního webu v mobilních prohlížečích. Více: [Meta viewport na Vzhůru dolů](viewport-meta.md). Důležité je [nezakazovat zoomování](https://www.vzhurudolu.cz/blog/48-znicit-mobilistu-2).</small>
- Správný `<title>` a `<meta description>` ★★★  
<small>Mají vliv na umístění ve vyhledávačích, hlavně `<title>`. Jsou také potřeba pro náhled stránky ve výsledcích vyhledávání nebo na sociálních sítích. Více: [Pavel Ungr o title](https://www.pavelungr.cz/jak-napsat-titulek/), [Moz.com o meta description](https://moz.com/learn/seo/meta-description). </small>
- Osnova nadpisů je v pořádku ★★☆  
<small>Stromová struktura (outline) nadpisů `<h1>`, `<h2>` atd.  má odrážet strukturu dokumentu. Usnadní indexaci vyhledávači a prohlížení stránky zrakově postiženými. Prohlédněte si DOM, využijte [HTML5 outliner](https://gsnedders.html5.org/outliner/). Více: [Vzhůru dolů: Lze mít více `<h1>`?](https://www.vzhurudolu.cz/blog/25-vice-h1).</small>
- Náhledy pro sociální sítě a chaty ★★☆  
<small>Doplňte meta značky pro Facebook Open Graph, Twitter Cards a další. Mají potenciál zvýšit návštěvnost webu, protože vytvářejí hezký náhled webu na sociálních sítích. Důležitý je hlavně obrázek. Více: [Open Graph na Vzhůru dolů](meta-open-graph.md). Nástroje pro kontrolu: [Facebook Debugger](https://developers.facebook.com/tools/debug/), [Twitter Validator](https://cards-dev.twitter.com/validator), [MetaTags.io](https://metatags.io/)</small>
- Strukturovaná data pro Google ★★☆  
<small>„Rich Snippets“ usnadňují nahrání informací, například o struktuře produktů e-shopu a vylepší náhled webu ve výsledcích vyhledávání. Je to podstatné hlavně u e-shopů a webů, které obsahují recenze nebo události. Více: [Strukturovaná data (aneb Rich Snippets) na Vzhůru dolů](rich-snippets.md). Tester [Google Structured Data Testing Tool](https://developers.google.com/structured-data/testing-tool/).</small>
- Odkazy z webu ven jsou platné ★★☆  
<small>Vyhněte se chybám 404 při procházení vašeho webu. Pro kontrolu jednotlivých stránek použijte třeba [Dead Link Checker](https://www.deadlinkchecker.com/) nebo [Xenu](http://home.snafu.de/tilman/xenulink.html).</small>
- Ikony webu a favikony ★★☆  
<small>Favikony identifikují web v bookmarcích nebo v seznamu aplikací na mobilech i desktopu. Více: [Favikony na Vzhůru dolů](favicon.md). Generátor: [RealFaviconGenerator.net](http://realfavicongenerator.net/).</small>
- Validní HTML ★☆☆  
<small>Hlídejte si validitu kvůli potenciálním chybám v indexaci vyhledávači. Lpí na tom i někteří klienti, tak proč si kazit renomé. Více:[Validita na JeČas](http://jecas.cz/validita). Nástroje: [Český validátor](http://validator.webylon.info/), [W3 validátor](https://validator.w3.org/).</small>
- Obsah bez typografických chyb ★☆☆  
<small>Text bez chyb zajistí lepší čitelnost obsahu. Profíci jsou na to citliví. Dohlédněte alespoň na ty nejpodstatnější. Více: [Typografické rady na Wikipedii](https://cs.wikipedia.org/wiki/Wikipedie:Typografick%C3%A9_rady). Nástroj pro odstraňování chyb: [Typopo.org](https://app.typopo.org/).</small>

## Přístupnost {#pristupnost}

Obsah už máme královsky vyladěný. Pojďme teď odstranit překážky, které jsme mohli nechtěně vytvořit uživatelům, a to ne jen těm handicapovaným. Přístupnost se týká všech.  V obecné rovině je ošetřena normou WCAG. Projděte proto web a hledejte možné chyby podle standardu [„Web Content Accessibility Guidelines“ ve verzi 2.1](http://blindfriendly.cz/wcag20checklist/). Nastavte si střední přísnost, [úroveň AA](http://www.pristupnost.cz/jak-tvorit-pristupny-web/pravidla-pristupnosti/wcag/). Kontrolujte nástrojem [WAVE - Web Accessibility Evaluation Tool](https://wave.webaim.org/).

- Struktura dokumentu: WAI-ARIA oblasti a HTML5 elementy ★★★  
<small>Správná struktura umožní zrakově postiženým strukturované procházení, což jim šetří čas. Stačí přidat „role“ pro navigaci, obsah a třeba vyhledávání. Více: [WAI-ARIA](wai-aria.md) a [HTML5 elementy](html5-struktura.md) na Vzhůru dolů.</small>
- Procházení stránky tabulátorem ★★☆  
<small>Zkuste sekvenční procházení stránky tabulátorem a jinými klávesami. Kromě zrakově postižených to ocení i pokročilí uživatelé, využívající klávesnici. Více: [Přístupnost z klávesnice na Zdrojáku](https://zdrojak.cz/clanky/pristupnost-ria-strukturovani-dokumentu-a-pristupnost-z-klavesnice/), [Zvýrazňujte odkazy na Poslepu](http://poslepu.blogspot.cz/2010/06/zvyraznujete-odkazy-pri-ovladani-webu-z.html), [CSS layout a přístupnost na Vzhůru dolů](css-layout-pristupnost.md).</small>
- Hlavní obsah a navigace jsou dostupné i bez JavaScriptu ★★☆  
<small>Většina robotů nezvládne indexovat obsah vytvořený JavaScriptem. Googlebot jej do jisté míry zvládá, ale je lepší na to nespoléhat. Testujte to vypnutím JavaScriptu v Developer Tools. Více: [SEO a JavaScipt na JeČas](https://jecas.cz/seo-javascript)</small>
- Správné typy inputů ve formulářích ★★☆  
<small>`<input type="email">` a nové typy formulářů usnadňují zadávání obsahu na mobilních zařízeních. Je to užitečné naprosto pro všechny uživatele. Více: [Formuláře v HTML5 na Zdrojáku](https://www.zdrojak.cz/clanky/formulare-html5-nove-inputy/).</small>
- Barevný kontrast je dostatečný ★★☆  
<small>Ocení nejen zrakově postižení, ale také majitelé horších displejů. Prakticky každý při horších světelných podmínkách na mobilech. Článek [o kontrastu](kontrast.md).</small>
- Multimédia mají textovou alternativu ★★☆  
<small>Obrázkům doplňte smysluplný popisek do atributu `alt`, používejte [značku `<figure>`](figure-figcaption.md). Více [Textové alternativy obrázků na Zdrojáku](https://zdrojak.cz/clanky/pristupnost-html5-textove-alternativy-obrazku-1-2-teorie/).</small>

<small>Detailnější instrukce k otestování přístupnosti své stránky najdete také v článku Radka Pavlíčka [Jak na jednoduchý audit přístupnosti – otestujte si bezbariérovost svého webu](https://poslepu.cz/jak-na-jednoduchy-audit-pristupnosti-otestujte-si-bezbarierovost-sveho-webu/).</small>

## Design webu {#design}

Tuhle oblast mají obvykle na starosti naši kolegové designéři. Pojďme ale zkontrolovat to nejdůležitější z technických aspektů designu.

- Požadovaná rychlost webu ★★★  
<small>Jděte na [PageSpeed.cz](https://pagespeed.cz), změřte si konkurenci a snažte se být rychlejší než ona. Testujte všechny důležité vstupní šablony. Sledujte hlavně metriky [Web Vitals](web-vitals.md) od uživatelů. Dále: [jak Google měří rychlost](google-page-experience.md), [jak zrychlit web?](jak-zrychlit-web.md), [checklist rychlosti](https://pagespeed.cz/blog/checklist-2021), [videa o rychlosti](https://www.vzhurudolu.cz/video).</small>
- Web je přátelský k mobilním uživatelům ★★★  
<small>Pomůže test [Mobile Friendly](https://search.google.com/test/mobile-friendly) od Googlu. Vyčerpávající informace [o responzivní designu](https://www.vzhurudolu.cz/responzivni-design) jsou v knížce [Vzhůru do (responzivního) webdesignu](https://www.vzhurudolu.cz/kniha-responzivni-design/).</small>
- Grafika podporuje HD displeje typu Retina ★★★  
<small>Obyčejná grafika nebude na vysokokapacitních displejích vypadat dobře. Trochu teorie [o problému v článku](css-pixel.md). V praxi potřebujete [SVG](svg.md), případně také [atribut srcset](srcset-sizes.md).</small>
- Šablony pro chybové stránky 404 a 50x ★★★  
<small>Navrhněte a implementujte vlastní. Výchozí chybovky serverových frameworků nebo serverů návštěvníkovi nepomohou. Pár [tipů v článku na Interval.cz](https://www.interval.cz/clanky/pet-nezbytnych-prvku-uspesne-chybove-stranky-404/).</small>

<small>Věnujte pozornost také [UX checklistu pro e-shopy od Ondřeje Ilinčeva](http://www.ilincev.com/ux-checklist-eshop) nebo [UX checklistu Lukáše Dubiny](https://www.lukasdubina.cz/uxdesign-checklist).</small>

## Prohlížeče a kompatibilita {#kompatibilita}

Zobrazuje se váš obsah ve všech prohlížečích, které podporujete? Dá se vytisknout? A mohla bych jej vidět se zapnutým AdBlockem?

- Plné zobrazení napříč prohlížeči a zařízeními ★★★  
<small>[Internet Explorer](msie.md) už snad podporovat nemusíte a mezi moderními [prohlížeči](prohlizece.md) tolik rozdílů není. I tak pomohou nástroje jako [Browserstack](https://www.browserstack.com/). Viz také článek [Jak testovat responzivní weby](jak-testovat-responzivni-weby.md). Nezapomeňte ošetřit [i chytré hodinky](weby-watchos.md).</small>
- Tisková verze stránky ★★☆  
<small>Je potřeba hlavně zajistit nezobrazování částí nezajímavých pro tisk jako jsou ovládací prvky webu. [Článek na Je čas](http://jecas.cz/tisk).</small>
- Zobrazení s blokovači reklamy ★★☆  
<small>Testujte se zapnutými blokovači. Neblokuje Adblock i nevinné třídy z vašeho CSS? Otestujte web se zapnutým AdBlockem. [Tweet](https://twitter.com/machal/status/1084773644331597824).</small>
- Dostupnost hlavního obsahu ve starších prohlížečích ★☆☆  
<small>Záleží to na projektu a cílové skupině. Ve starších prohlížečích web nemusí vypadat jako z reklamy, důležitá je ale čitelnost hlavního obsahu a dostupnost navigace.</small>
- Stránka je v pořádku bez CSS ★☆☆  
<small>Verze pro čtečky a další kontexty, které nepoužívají vaše CSS. [Článek Weby bez CSS](weby-bez-css.md).</small>

<small>Co všechno je potřeba testovat ukazuje také text [A Comprehensive Checklist For Front-End Testing](https://www.lambdatest.com/blog/front-end-testing-checklist/) od LambdaTesting.</small>

## Kvalita kódu: dokumentace a testy {#kvalita-kodu}

Konvence, linting, testování a odchyt chyb. Tohle uživatelé nevidí, ale nedostatky v téhle oblasti mohou web pořádně rozbít.

- Kód dodržuje konvenci ★★☆  
<small>Konvence usnadňuje sdílení nebo předávání kódu. Více: [JavaScript coding standards na Googlu](https://www.google.com/search?q=JavaScript+coding+standards). V CSS můžete vyjít ze [zásad psaní respektujícího CSS](rcss-zasady.md).</small>
- Kvalita kódu v požadované úrovni ★★☆  
<small>Automatická kontrola častých chyb nebo problematických konstrukcí kódu. Lze využít například [ESLint](http://eslint.org/) v CSS pak [Stylelint](stylelint.md). Ve všech jazycích autoformátovač [Prettier](https://prettier.io/).</small>
- Javascriptový kód je pokrytý testy ★★☆  
<small>Javascript není CSS a tak se nějaké ty testy hodí. Více se dozvíte na videích [Píšeme testy](https://www.vzhurudolu.cz/video/webinar-js-testy) a [Nástroje pro testování](https://www.vzhurudolu.cz/video/webinar-js-testy-nastroje).</small>
- Měření runtime chyb v JS kódu ★★☆  
<small>Ujistěte se, že víte o chybách, které uživatelům vrací váš frontendový kód. Zamezte tomu, aby prohlížeč do konzole vypisoval chyby. Z možností sledování vybíráme např. [Technical Dashboard v Google Analytics](google-analytics-vyvojari.md) nebo [Sentry](https://sentry.io/).</small>
- Funkční testování ★★☆  
<small>Fungují kritické části webu i když ho necháte běžet? Pomůže třeba [Selenium](http://www.seleniumhq.org/) nebo nástroje vycházející ze standardu [Webdriver](https://www.w3.org/TR/webdriver/). Více [o testech v podcastu](https://www.vzhurudolu.cz/podcast/139-podcast-testovani).</small>
- Kód je v produkční kvalitě ★★☆  
<small>Je minifikovaný a neobsahuje zbytečná data. </small>
- README.md ★☆☆  
<small>V tomto souboru je v repozitáři popsána instalace, buildování atd.</small>

<small>Další možnosti uvidíte ve [Frontend Code Review checklist](https://gist.github.com/bigsergey/aef64f68c22b3107ccbc439025ebba12).</small>

## Spuštění webu {#spusteni}

Už máme web hotový. Jdeme zmáčknout tlačítko pro zveřejnění? Raději ještě počkejme, právě tady můžeme nasekat fatální chyby.

- Web běží na HTTPS ★★★  
<small>Bez bezpečného protokolu se s vámi už nikdo (myšleno vyhledávače) nebude chtít kamarádit. [Více o HTTPS](https.md).</small>
- Web běží na HTTP/2 ★★★  
<small>HTTP/2 pozitivně ovlivňuje rychlost, zvažte také nejnovější HTTP/3. Více: [HTTP/2](http-2.md) a [HTTP/3](http-3.md).</small>
- Není zakázaná indexace vyhledávači ★★★  
<small>Mrkněte se do robots.txt nebo na `<meta name="robots">`. Obvykle indexaci při spuštění webu zakazovat nechcete, ale často se na to zapomíná. Více je [v dokumentaci od Googlu](https://support.google.com/webmasters/answer/93710?hl=cs).</small>
- Vývojářské soubory nejsou na produkci ★★★  
<small>Hlavně adresáře typu `.git/`, `node_modules/,` zapomenutý ZIP s obsahem databáze nebo třeba veřejně přístupný [Adminer](https://www.adminer.org/cs/) či [phpMyAdmin](https://www.phpmyadmin.net/).</small>
- Přesměrování ze starých adres ★★★  
<small>Pokud se mění URL, musíte přesměrovat ze starých na nová. Jakmile by stará URL vracela chybu 404, vyhledávače na ta nová nepředají tzv. „link juice“ hodnocení adresy získané z dřívějška. Na staré adrese vracejte kód 301 a přesměrujte na novou. [Možnosti na JakPsátWeb.cz](https://www.jakpsatweb.cz/presmerovani.html), [dokumentace od Seznam.cz](https://napoveda.seznam.cz/cz/fulltext-hledani-v-internetu/presmerovani-webu/).</small>
- Přidání a konfigurace Google Analytics ★★★  
<small>Obchodní výkonnost webu všechny zajímá, nezapomněli jste [nastavit měření](google-analytics-pridani.md)? Alternativně přidejte kód [Google Tag Managera](google-tag-manager.md), marketéři si přes potřebné kódy přidají. </small>
- Registrace v nástrojích pro webmastery ★★☆  
<small>Pravidelně upozorní na časté chyby z pohledu vyhledávačů. Nejdůležitější je [Google Search Console](google-search-console.md): [Přidejte tam web](https://www.google.com/webmasters/tools/) hned po spuštění. A pak samozřejmě [Seznam Webmaster](https://reporter.seznam.cz/wm/). Pro zahraniční weby také například [Bing Webmaster Tools](https://www.bing.com/toolbox/webmaster).</small>
- Správně nastavené hlavičky ze serveru ★★☆  
<small>[REDbot.org](https://redbot.org/) vysvětluje nastavení vašeho serveru: gzipování, kešovací hlavičky… Hodí se hlavně zkontrolovat na hostingu, který neprovozujete sami.</small>
- Správně nastavené bezpečnostní hlavičky ★★☆  
<small>[SecurityHeaders.io](https://securityheaders.io/) udělá alespoň základní audit té části serverové hlavičky, kterou můžete usnadňovat různé typy útoků. Např. `X-Frame-Options` nebo `Content-Security-Policy`.</small>
- Přidali jsme `robots.txt`, `humans.txt` a `security.txt` ★★☆  
<small>[Roboty](http://www.jakpsatweb.cz/robots-txt.html), jen pokud potřebujete výslovně změnit něco kolem indexování. [Lidi](http://humanstxt.org/CZ) hlavně pro radost. [Security](https://www.michalspacek.cz/k-cemu-je-soubor-security.txt) jako kontakt pro hlášení průšvihů, než jsou z nich megaprůšvihy.</small>
- Máme `sitemap.xml` ★★☆  
<small>Usnadňuje indexování vyhledávači. Hlavně pro větší weby nebo weby s komplikovanou strukturou.</small>
- Máme zapnuté SEO ★★★  
<small>To byl vtip, omlouvám se. Problematika SEO je komplexní, takže vás odkážu na [checklist Lukáše Pitry](https://www.lukaspitra.cz/checklist-kontroly-pred-spustenim-webu/) nebo [checklist technického SEO](https://trello.com/b/t8Q9EzwZ/technick%C3%A9-seo-checklist-pavel-ungr-a-jaroslav-hlavinka) od pánů [Ungra a Hlavinky](https://www.pavelungr.cz/skoleni/technicke-seo-nejen-pro-vyvojare/).</small>

<!-- AdSnippet -->

🖨 Checklist je ve zjednodušené podobě k dispozici také [jako PDF](https://www.vzhurudolu.cz/assets/files/webaruv-checklist.pdf).

Používejte také nástroje pro obecnou automatickou kontrolu webu:

- [Web.dev Measure](https://web.dev/measure/) (jde o [Lighthouse](lighthouse.md))
- [Yellow Lab Tools](https://yellowlab.tools/)
- [SiteChecker](https://sitechecker.pro/)

---

<small>

Checklist pro frontendisty, verze 3.0. Autor: [Martin Michálek](https://www.vzhurudolu.cz/martin). Za připomínky ke třetí verzi autor děkuje [Radkovi Pavlíčkovi](https://poslepu.cz/).

Připomínky vítány. Stačí vytvořit pull request na [Githubu](https://github.com/machal/prirucka/blob/master/content/checklist.md) nebo napsat komentář.

</small>

<!-- AdSnippet -->
