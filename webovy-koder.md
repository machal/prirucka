Co by měl umět webový kodér?
============================

## Kdo je webový kodér

Technik, který oživuje uživatelská rozhraní webové prezentace nebo webové aplikace.

Jeho doménou je webový frontend, tedy technologie v prohlížečích, ale je potřeba jej odlišit od frontend vývojáře. Ten píše frontend aplikace a daleko více se pohybuje v javascriptovém kódu. Doménou kodéra je především CSS, HTML a související technologie.

Kodér má přesah do oborů, se kterými spolupracuje na podkladech pro svou práci — UX, webová grafika. Také do oborů, kterým svou práci předává — frontend či backend programování, správa serverů.

Kodérovi též můžeme říkat [frontend designér](http://kratce.vzhurudolu.cz/post/20006686050/haml-a-dva-typy-koderu), vývojář uživatelského rozhraní (UI) nebo třeba [frontendista](http://www.frontendisti.cz/). Dříve měla velmi podobnou náplň pozice „webmaster".

## Poznámky k textu

* Následující prosím berte více jako autorův subjektivní výběr než přesnou a precizně strukturovanou osnovu pro samostudium.
* Body v jednotlivých sekcích jsou řazeny podle důležitosti.
* Jako **[nové]** jsou označeny znalosti, které přibyly v posledních cca 2-3 letech.
* A pozor, skutečného profíka z kodéra neudělá šíře technických znalostí, ale [vynikající soft-skills](http://cs.wikipedia.org/wiki/M%C4%9Bkk%C3%A9_dovednosti).

## Co by měl umět webový kodér

### 1. technické znalosti

#### HTML

* Prakticky použitelné [HTML5 značky](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list) a jejich významy podle specifikace. [Strukturální elementy](http://kratce.vzhurudolu.cz/post/38371151431/html5-elementy) zase tak potřeba nejsou.
* Teorie: [outline](http://html5doctor.com/outlines/) (osnova) dokumentu; rozdíl HTML4, XHTML, HTML5.
* Formuláře: [HTML4 formuláře](http://www.jakpsatweb.cz/html/formulare.html).
* **[nové] **HTML5 formuláře: použitelné HTML5 [typy](http://www.zdrojak.cz/clanky/formulare-html5-nove-inputy/) a [atributy](http://www.zdrojak.cz/clanky/formulare-v-html5-a-nove-atributy/) (`email`, `tel`, `url`, `placeholder`); [`<input required>`](http://jecas.cz/required) a HTML5 validace v prohlížeči. ([školení](http://www.vzhurudolu.cz/kurzy/webovy-frontend))
* SEO: osnova dokumentu, `<title>`, `<meta description…>`.
* **[nové] **Sémantické metaznačky: [Facebook OpenGraph](http://davidwalsh.name/facebook-meta-tags); Google Schema.org a [Rich Snippets](http://www.vzhurudolu.cz/prirucka/rich-snippets); Twitter Cards; [favicon a touchicon](http://realfavicongenerator.net/). ([školení](http://www.vzhurudolu.cz/kurzy/webovy-frontend))
* **[nové] **[Audio a video](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video): HTML5 formáty audia a videa, které vyžadují aktuální prohlížeče, případně Flash.
* **[nové] **[Canvas](http://www.zdrojak.cz/clanky/zaciname-z-html5-canvasem/): principy; k čemu je dobrý.
* **[nové] **Povědomí o základních HTML5 aplikačních API: local/sessionStorage; History API; Geolocation API; komunikace: WebSockets, ServerSentEvents; offline: AppCache. ([školení](http://www.vzhurudolu.cz/kurzy/webovy-frontend))

#### CSS

* Znalost všech prakticky použitelných vlastností ze specifikace [CSS2](http://www.jakpsatweb.cz/css/css-vlastnosti-hodnoty-prehled.html).
* **[nové] **[CSS3](http://www.vzhurudolu.cz/prirucka/css3) vlastnosti, které jsou [podle CSS Working Group](http://www.w3.org/Style/CSS/current-work.en.html) ve fázi W3C Recommendation (REC) nebo Proposed Recommendation (PR). ([školení](http://www.vzhurudolu.cz/kurzy/webovy-frontend))
* Stavba [layoutu pomocí CSS](http://learnlayout.com/toc.html): kategorizace podle technologických prostředků – float, inline-block, display:table, position:absolute, flexbox; kategorizace podle typu layoutu: fixní, fluidní, responzivní.
* Kaskáda, dědičnost, specifičnost v kontextu CSS.
* Jednotky (např. px, em, rem, procenta, cm, atd.): jejich klady, zápory a možné scénáře použití.
* Prakticky použitelné CSS selektory.

#### Přístupnost

* **[nové] **Standard [WAI-ARIA 1.0](http://www.zdrojak.cz/clanky/pristupnost-ria-strukturovani-dokumentu-a-pristupnost-z-klavesnice/)
* Standard [WCAG 2.0](http://blindfriendly.cz/wcag20checklist/). [Vyhláška o přístupnosti](http://www.mvcr.cz/clanek/vyhlaska-c-64-2008-sb-o-forme-uverejnovani-informaci-souvisejicich-s-vykonem-verejne-spravy-prostrednictvim-webovych-stranek-pro-osoby-se-zdravotnim-postizenim-vyhlaska-o-pristupnosti-10.aspx) pro weby státní správy.
* [Handicapovaní uživatelé](http://pristupnost.nawebu.cz/texty/hendikepovani-uzivatele.php): jejich potřeby z hlediska práce s webem; jak uživatelé ovládají zařízení a prohlížeče.
* Přístupný kód: techniky kódování pro zpřístupnění webových stránek; oddělení struktury od vizuální prezentace; ovládání [pouze z klávesnice](http://www.zdrojak.cz/clanky/pristupnost-ria-strukturovani-dokumentu-a-pristupnost-z-klavesnice/); správné [skrývání obsahu](http://a11yproject.com/posts/how-to-hide-content/); textové alternativy; přístupnost obsahu pro vnímání více smysly; ošetření dynamických změn obsahu.
* Co jsou [asistivní technologie](http://poslepu.cz/termin-asistivni-technologie-pohledem-radka-seiferta/) a jak fungují.
* Nástroje pro testování přístupnosti: toolbary pro prohlížeče (například [WAVE](http://wave.webaim.org/), [Web Developer Toolbar](https://addons.mozilla.org/cs/firefox/addon/web-developer/), HeadingsMap, atd.; desktopové nástroje (například [Colour Contrast Analyzer](http://www.paciellogroup.com/resources/contrastanalyser/)); asistivní technologie (například odečítače obrazovky pro nevidomé či zvětšovací programy pro slabozraké).

#### Základy Javascriptu

* **[nové] **[Základní vlastnosti JavaScriptu](http://dailyjs.com/js101.html): proměnné, typy, operátory, podmínky, cykly, pole, objekty.
* **[nové] **DOM: rozdíly mezi HTML zdrojem a DOM; nalezení, přidání, odebrání elementu, změna jeho vlastností v rozsahu [W3Schools](http://www.w3schools.com/js/js_htmldom_document.asp); události: základní [DOM události](http://www.w3schools.com/js/js_events.asp) a způsob jejich [odchytávání](http://www.w3schools.com/js/js_htmldom_eventlistener.asp).
* [AJAX](https://developer.mozilla.org/cs/docs/AJAX/Jak_za%C4%8D%C3%ADt) a princip jeho fungování.
* jQuery a podobné knihovny: znalost scénářů pro použití; výhody a nevýhody ve srovnání s čistým JavaScriptem; základní vlastnosti: selektory, události, ajax, použití plug-inů.

#### Prohlížeče

* **[nové] **Jaké jsou: jádra prohlížečů a jednotlivé prohlížeče v .cz a světovém prostředí včetně [mobilních](http://www.vzhurudolu.cz/blog/18-mobilni-prohlizece).
* **[nové] **Fungování prohlížeče: [preloader](http://andydavies.me/blog/2013/10/22/how-the-browser-pre-loader-makes-pages-load-faster/); blokující JS/CSS.
* Rychlost načítání: základní metody: datový objem stránky, requesty, CSS sprity.
* **[nové] **Pokročilá rychlost načítání: [Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/?hl=en); znalost principů lazyloadingu, podmíněné načítání, problému latence mobilních sítí. ([školení](http://www.vzhurudolu.cz/kurzy/pokrocily-responzivni-design))

#### Obrázky

* Obecné pojmy: vektory, bitmapy, komprese, alfaprůhlednost, nástroje pro optimalizaci.
* Rozdíly mezi JPG, GIF, PNG, WebP, SVG.
* **[nové] **[Responzivní obrázky](http://www.vzhurudolu.cz/prirucka/responzivni-obrazky): [srcset a sizes](http://www.vzhurudolu.cz/prirucka/srcset-sizes), [`<picture>`](http://www.vzhurudolu.cz/prirucka/picture). ([školení](http://www.vzhurudolu.cz/kurzy/pokrocily-responzivni-design))

#### SVG

* **[nové] **[Základy](http://www.vzhurudolu.cz/prirucka/svg) pro statickou grafiku: způsoby vložení do stránky, fallbacky, vytvoření SVG, srovnání s ikonfonty.
* **[nové] **Typy využití a jejich technické provedení: ilustrace, ikony, celé UI komponenty, stylování formulářů, grafy, animace, efekty textu.

#### Animace

* **[nové] **Skutečné animační nástroje: [CSS animace](http://slideslive.com/38892079/vse-o-css-animacich), vlastnosti [animation](http://www.vzhurudolu.cz/prirucka/css3-animations) a [transition](http://www.vzhurudolu.cz/prirucka/css3-transitions); SVG animace.
* Emulace animací v Javascriptu/jQuery.
* [Principy animací](http://codepen.io/jeroens/blog/the-illusion-of-life).

### 2. pracovní postupy

#### Responzivní design

* **[nové] **Základní principy: fluidní layout, fluidní média, [Media Queries](http://www.vzhurudolu.cz/prirucka/css3-media-queries), [breakpointy](http://kratce.vzhurudolu.cz/post/46416507703/jake-breakpointy-zvolit-v-responzivnim-webdesignu).
* **[nové] **Implementace: Mobile First; UX na mobilech; rychlost načítání.

#### Interpretace podkladů od UX/grafika:

* Konvenční zdroje z grafických editorů nebo převáděcí nástroje: Photoshop nebo Fireworks nebo Sketch nebo Avocode.
* Techniky exportu podkladů a optimalizace výstupů.
* **[nové] **Alternativní metody a postupy: wireframy, Style Tiles, Atomic Design a systémy komponent obecně.

#### Progressive enhancement

* K čemu je to dobré. [Progressive Enhancement vs. Gracefull Degradation](http://www.zdrojak.cz/clanky/graceful-degradation-vs-progressive-enhancement/) .
* **[nové] **Pojmy [polyfill](http://www.vzhurudolu.cz/prirucka/polyfill), [fallback](http://www.vzhurudolu.cz/prirucka/fallback).
* **[nové] **Detekce vlastností prohlížečů: proč je výhodnější než detekce prohlížeče, detekce zařízení nebo browser hacks ([1](http://www.paulirish.com/2009/browser-specific-css-hacks/), [2](http://browserhacks.com/)); Modernizr; backend - WURFL atd.

#### Frontend architektura

* **[nové] **Systémy zápisu a organizace: [OOCSS](http://www.vzhurudolu.cz/prirucka/oocss), [SMACSS](http://www.vzhurudolu.cz/prirucka/smacss), [BEM](http://www.vzhurudolu.cz/prirucka/bem).
* **[nové] **Modulární UI systémy, tvorba style guides.

#### Efektivita

* **[nové] **[CSS preprocesory](http://www.vzhurudolu.cz/blog/12-css-preprocesory-1) ([školení](http://www.vzhurudolu.cz/kurzy/webovy-frontend))
* **[nové] **Automatizace: [Grunt](http://www.vzhurudolu.cz/prirucka/grunt), Gulp, [Bower](http://www.vzhurudolu.cz/prirucka/bower), Yeoman. ([školení](http://www.vzhurudolu.cz/kurzy/grunt-gulp))
* **[nové] **Frontend frameworky: Bootstrap ([školení](http://www.vzhurudolu.cz/kurzy/bootstrap)), Foundation
* **[nové] **Efektivita v Photoshopu: [CSSHat](https://csshat.com/), Enigma…



#### Verzování

* Základy [verzování s ](http://rogerdudler.github.io/git-guide/)[git](http://rogerdudler.github.io/git-guide/)[em](http://rogerdudler.github.io/git-guide/). ([Kniha](http://knihy.nic.cz/files/nic/edice/scott_chacon_pro_git.pdf))
* Hosting a kolaborativní vývoj přes [Github](http://cs.wikipedia.org/wiki/GitHub), Bitbucket a další.

#### Testování

* Funkční testování výsledného produktu - ručně nebo automaticky, Selenium a podobně.
* **[nové] **Testování na [reálných mobilních zařízeních](http://www.vzhurudolu.cz/prirucka/jak-testovat-responzivni-weby), starších prohlížečích. Cloud testing přes [Browserstack](https://www.browserstack.com/) a podobně.

#### Typologie projektů

* Prezentační stránky, microsites, webové aplikace, HTML emaily… Jejich specifika a rozdíl v používaných nástrojích a přístupech.

### 3. přesahy do dalších oborů

#### Typografie

* [Základní pojmy](http://typomil.com/): rodina, řez, typy písem, prostrkání, výška/šířka řádku.
* Základní [typografická pravidla](http://www.pixy.cz/pixylophone/2003_02_archiv.html) a typografické neduhy na webu: uvozovky, pomlčky, jednopísmenné předložky na konci řádku.
* Soubory s fonty: systémové fonty na platformách; zdroje webových fontů: Google Fonts, Typekit, vlastní a další.

#### UX, použitelnost

* Základní procesy a důvody pro ně: uživatelský výzkum, informační architektura, prototypování, uživatelské testování, A/B testování.

#### Opensource redakční systémy a hotová řešení

* Kdy je používat, jaké to má výhody a nevýhody?
* Základní povědomí o scénářích kdy je vhodné použít WordPress, Drupal, Joomla, ZenCart…
* Hotové šablony: povědomí o scénářích kdy je vhodné je využít.

#### Webové programování obecně

* MVC frameworky: povědomí o backendových (Nette, Zend, Rails, Django…) i frontendových (Angular.js, viz [školení](http://www.vzhurudolu.cz/kurzy/angular), Ember nebo ekosystém kolem React).
* [Fungování protokolu HTTP](http://www.jakpsatweb.cz/server/http-protokol.html) a chybové stránky 4x a 5x.
* [LAMP architektura](http://cs.wikipedia.org/wiki/LAMP) a její alternativy.
* Šablonovací jazyky obecně a znalost konkrétního (Smarty, Latte, Jinja…)

#### Domény

* Nastavení domény:[ A, AAA](http://podpora.domenu.cz/nastaveni-dns-zaznamu-domeny/)[A, CNAME, MX záznamy](http://podpora.domenu.cz/nastaveni-dns-zaznamu-domeny/).
* Přesměrování bez adresy bez konečného /, přesměrování „bez www." na „s www.“

#### Legislativa

* [Zákon o ochraně osobních údajů](http://business.center.cz/business/pravo/zakony/oou/).
* Licencování software: [MIT, Apache, GPL, Public Domain](http://choosealicense.com/) a obsahu pomocí CreativeCommons.

#### Google Analytics

* Nastavení Google Analytics: základní nastavení cílů; ukládání událostí; měření konverzí a jejich hodnot.

<small>Původní verze textu vznikla jako draft pro popis profese pro [Národní soustavu kvalifikací](http://narodnikvalifikace.cz/). Za kapitolu o přístupnosti autor děkuje [Radkovi Pavlíčkovi](https://twitter.com/radlicek) ([Poslepu.cz](http://poslepu.cz/)). Za spolupráci na kvalifikačním standardu kromě Radka i [Vojtovi Outulnému](https://www.linkedin.com/in/vojtechoutulny) a Jaroslavu Zelenému. Za podněty k draftu pak [Robinu Pokornému](http://robinpokorny.com/), [Tomáši Musiolovi](http://www.musiol.cz/) a [Martinu Staňkovi](https://twitter.com/koucik).</small>

<small>Pokud si něco v obsahu zaslouží změnu, [upravte soubor](https://github.com/machal/prirucka/search?utf8=%E2%9C%93&q=webovy-koder) na Githubu nebo tam [vyplňte issue](https://github.com/machal/prirucka/issues).</small>
