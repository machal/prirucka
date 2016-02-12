# Webařův kontrolní seznam

Co všechno by měl autor webu zkontrolovat než odevzdá svou práci?

## Obsah a HTML

- Ikony a favikony  
<small>Identifikují web v bookmarcích nebo v seznamu aplikací na mobilech i desktopu. [Více informací](http://jecas.cz/favicon). [RealFaviconGenerator.net](http://realfavicongenerator.net/ "Real Favicon Generator").</small>
- Facebook Open Graph  
<small>Změní náhled stránky na Facebooku. Má potenciál zvýšit návštěvnost webu. Důležitý je hlavně obrázek. [Více informací](http://jecas.cz/nahled-odkazu "Je čas: Náhled odkazu při sdílení na sociálních sítích"). [Facebook Debugger](https://developers.facebook.com/tools/debug/ "Facebook Debugger").</small>
- Twitter Cards  
<small>Vytvoří náhled stránky na Twitteru. Opět možnost zvýšit návštěvnost webu, tentokrát z Twitteru. [Více informací](http://jecas.cz/nahled-odkazu "Je čas: Náhled odkazu při sdílení na sociálních sítích"). [Twitter Validator](https://cards-dev.twitter.com/validator "Card validator").</small>
- Strukturovaná data pro Google  
<small>„Rich Snippets“ vylepší náhled webu ve výsledcích vyhledávání. Podstatné hlavně u eshopů a webů, které obsahují recenze nebo události. [Více informací](http://www.vzhurudolu.cz/prirucka/rich-snippets "Rich Snippets"). [Google Structured Data Testing Tool](https://developers.google.com/structured-data/testing-tool/).</small>
- Validní HTML  
<small>Hlavně kvůli potenciálním chybám v indexaci vyhledávači. Lpí na tom i někteří klienti, tak proč si kazit renomé.  [Více informací](http://jecas.cz/validita). [Český validátor](http://validator.webylon.info/).</small>
- Správný `<title>` a `<meta description>`  
<small>Vliv na umístění ve vyhledavačích. Také kvůli náhledu stránky ve výsledcích vyhledávání nebo na sociálních sítích. [Více o title](https://moz.com/learn/seo/title-tag). [Více o meta description](https://moz.com/learn/seo/meta-description). [Nástroj pro ověření](http://www.w3.org/2003/12/semantic-extractor.html "W3 Semantic Extractor").</small>
- Správný `<meta viewport>`  
<small>Zařídí správné zobrazování responzivního webu v mobilních prohlížečích. [Více informací](viewport-meta.md "Meta Viewport")</small>
- Osnova (outline) nadpisů  
<small>Stromová struktura usnadní indexaci vyhledávači a prohlížení stránky zrakově postiženými. [HTML5 outliner](https://gsnedders.html5.org/outliner/ "HTML5 Outliner"). [Lze mít více `<h1>`?]( http://www.vzhurudolu.cz/blog/25-vice-h1).</small>
- Obsah bez typografických chyb  
<small>Všem zajistí lepší čtivost obsahu. Profíci jsou na to citliví a zbytečně se před nimi typo-chybami shodíte. Dohlídněte alespoň na ty nejpodstanější. [Nejčastější typografické chyby](http://typografie.wz.cz/chyby.html).</small>

## Kvalita CSS a JS kódu

- Kód dodržuje konvenci  
<small>Konvence usnadňuje sdílení nebo předávání kódu. Jde o způsob psaní kódu, jeho komentování a případně i dokumentaci. Bude v každém týmu jinak, ale dobré si nastavit. Přidám jen odkaz na [články o javascript code standards](https://www.google.cz/webhp?ion=1&espv=2&ie=UTF-8#q=javascript%20code%20standards) a [css code standards](https://www.google.cz/webhp?ion=1&espv=2&ie=UTF-8#q=css%20code%20standards).</small>
- Kvalita kódu v požadované úrovni  
<small>Automatická kontrola častých chyb nebo problematických konstrukcí kódu. Hodí se hlavně při práci v týmu, ale opět bude mít každý jinak. Lze využít například 
[ESLint](http://eslint.org/) nebo [CSS Lint](http://csslint.net/).</small>
- Kód je pokrytý testy  
<small>Javascript není CSS a tak se nějaké ty testy hodí. [Články na Google vyhledávání](https://www.google.cz/webhp?ion=1&espv=2&ie=UTF-8#q=javascript%20unit%20testing)</small>
- Kód je v produkční kvalitě    
<small>Je minifikovaný a neobsahuje zbytečná data. Hlavně při použití CSS frameworků a pluginů je tohle problém. Existují i automatické nástroje jako třeba [UnusedCSS.com](https://unused-css.com/).</small>
- README.md  
<small>V repozitáři je popsána instalace, buildování atd.</small>


## Přístupnost

- Nejčastější chyby  
<small>Pomůže [Web Accessibility Checker](http://achecker.ca/checker/index.php).</small>
- WAI-ARIA oblasti  
<small>Zrakově postiženým umožňí strukturované procházení, což děsně šetří čas. Přitom stačí přidat hlavně `role` pro navigaci, obsah a třeba vyhledávání. Pomůže [článek na Zdrojáku](https://www.zdrojak.cz/clanky/pristupnost-ria-strukturovani-dokumentu-a-pristupnost-z-klavesnice/) a [pár postřehů tady](http://www.vzhurudolu.cz/blog/28-pristupnost-webexpo-2014).</small>
- Ovládání tabulátorem  
<small>Emulujete sekvenční procházení stránky bez myši. Kromě zrakově postižených ocení i pokročilí uživatelé. [Článek na Poslepu](http://poslepu.blogspot.cz/2010/06/zvyraznujete-odkazy-pri-ovladani-webu-z.html).</small>
- Alternativní texty u mediálního obsahu  
<small>Hlavně pro nevidomé uživatele a taky indexování obrázků vyhledávači. Pomůže [článek na Zdrojáku](https://www.zdrojak.cz/clanky/pristupnost-html5-textove-alternativy-obrazku-1-2-teorie/).</small>
- Správné typy inputů ve formulářích  
<small>`<input type="email">` a další usnadňují zadávání obsahu na mobilních zařízeních. Užitečné naprosto pro všechny. [Článek na Zdrojáku](https://www.zdrojak.cz/clanky/formulare-html5-nove-inputy/).</small>
- Barevný kontrast  
<small>Ocení nejen zrakově postižení, ale také majitelé horších displejů nebo prakticky každý při horších světelných podmínkách. Pomůže nástroj [Check My Colours](http://www.checkmycolours.com/).</small>
- Hlavní obsah a navigace jsou dostupné bez Javascriptu  
<small>Obsah vám jinak nezaindexují vyhledávače. Testujte vypnutím Javascriptu v Developer Tools.</small>

## Prohlížeče a kompatibilita

- Plné zobrazení napříč prohlížeči a zařízeními  
<small>Mezi moderními prohlížeči už tolik rozdílů není. Prohlížečů je ale hodně, pacholků. Proto pomohou nástroje jako [Browserstack](https://www.browserstack.com/). Viz také můj článek [Jak testovat responzivní weby](http://www.vzhurudolu.cz/prirucka/jak-testovat-responzivni-weby).</small>
- Dostupnost hlavního obsahu ve starších prohlížečích  
<small>Záleží to na projektu a cílové skupině. Ve starších prohlížečích web nemusí vypadat jako z reklamy na zubní pastu, důležitá je ale čitelnost hlavního obsahu a dostupnost navigace.</small>
- Tisková verze stránky  
<small>Potřeba  hlavně zajistit vypnutí pro tisk nepotřebných částí. [Článek na Je čas](http://jecas.cz/tisk "Tisk stránky").</small>

## Ostatní

- Grafika podporuje HD displeje typu Retina  
<small>Obyčejná grafika nebude na vysokopacitních displejích vypadat dobře. Trochu teorie [o problému v článku](http://www.vzhurudolu.cz/prirucka/css-pixel "CSS pixel"). V praxi potřebujete [SVG](svg.md) a [atribut `srcset`](srcset-sizes.md).</small>
- Rychlost načítání: požadované skóre v PageSpeedInsights  
<small>S optimalizací pomůže [Pagespeed Insights tester](https://developers.google.com/speed/pagespeed/insights/?hl=cs). Čím vyšší skóre, tím líp. 100/100 tam ale dosáhnout obvykle nejde.</small>
- Rychlost načítání: požadovaný SpeedIndex z WebpageTest.org  
<small>[SpeedIndex](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index) číslo, které se pokouší vyjádřit rychlost webu. Čím vyšší, tím horší. Ideální stav je někdo kolem 1000. Testujte na [WebpageTest.org](http://www.webpagetest.org/).</small>
- Šablony pro chybové stránky 404 a 50x  
<small>Výchozí šablony chyb serverů návštěvníkovi nepomohou. Pár [tipů v článku](https://www.interval.cz/clanky/pet-nezbytnych-prvku-uspesne-chybove-stranky-404/).</small>


## Spouštění webu

- Google Analytics  
<small>Výkonnost webu všechny zajímá, nezapomněli jste [nastavit měření](http://www.jakmeritweb.cz/spravne-nastaveni/jak-se-nastavuje-google-analytics)?</small>
- robots.txt a humans.txt  
<small>[Roboty](http://www.jakpsatweb.cz/robots-txt.html), jen pokud potřebujete něco výslovně změnit. [Lidi](http://humanstxt.org/CZ) hlavně pro radost.</small>
- sitemap.xml  
<small>Usnadňuje indexování vyhledávači. Hlavně pro větší weby nebo weby s komplikovanou strukturou.</small>
- Vývojářské soubory nejsou na produci  
<small>Hlavně adresáře typu .git/, node_modules/ nebo třeba obsah databáze.</small>
- Hlavičky ze serveru  
<small>[REDbot.org](https://redbot.org/)</small>
- Správně nastavené bezpečnostní hlavičky  
<small>[SecurityHeaders.io](https://securityheaders.io/)</small>
- Kontrola odkazů z webu ven  
<small>Použijte [W3C Link Checker](http://validator.w3.org/checklink) nebo [Xenu](http://home.snafu.de/tilman/xenulink.html).</small>
- Registrace v Google Search Console  
<small>Pravidelně upozorní na časté chyby z pohledu Google. [Přidejte tam web](https://www.google.com/webmasters/tools/) hned po spuštění.</small>
- Funkční testování  
<small>Fungují kritické části webu i když ho necháte běžet? Pomůže třeba [Selenium](http://www.seleniumhq.org/) nebo [Testomato](http://www.testomato.com/).</small>

Poznámka: Napsáno hlavně pro [webové kodéry](/prirucka/webovy-koder) a prezentační weby. U webových aplikací bude řada věcí jinak.
