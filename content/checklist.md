# Kontrolní seznam frontend kodéra

Co všechno by měl [webový kodér](/prirucka/webovy-koder) zkontrolovat než odevzdá svou práci?

Psal jsem to hlavně pro prezentační weby. U webových aplikací bude řada věcí jinak.

---

## HTML

- Ikony a favikony  
<small>Identifikují web v bookmarcích nebo v seznamu aplikací na mobilech i desktopu. [Více informací](http://jecas.cz/favicon). [RealFaviconGenerator.net](http://realfavicongenerator.net/ "Real Favicon Generator")</small>
- Facebook Open Graph  
<small>Změní náhled stránky na Facebooku. Má potenciál zvýšit návštěvnost webu. Důležitý je hlavně obrázek. [Více informací](http://jecas.cz/nahled-odkazu "Je čas: Náhled odkazu při sdílení na sociálních sítích"). [Facebook Debugger](https://developers.facebook.com/tools/debug/ "Facebook Debugger").</small>
- Twitter Cards  
<small>Vytvoří náhled stránky na Twitteru. Má potenciál zvýšit návštěvnost webu. [Více informací](http://jecas.cz/nahled-odkazu "Je čas: Náhled odkazu při sdílení na sociálních sítích"). [Twitter Validator](https://cards-dev.twitter.com/validator "Card validator").</small>
- Strukturovaná data pro Google  
<small>„Rich Snippets“ vylepší náhled webu ve výsledcích vyhledávání. Podstatné hlavně u eshopů, recenzí nebo událostí. [Více informací](http://www.vzhurudolu.cz/prirucka/rich-snippets "Rich Snippets"). [Google Structured Data Testing Tool](https://developers.google.com/structured-data/testing-tool/).</small>
- Validní HTML  
<small>Hlavně kvůli potenciálním chybám v indexaci vyhledávači. Lpí na tom i někteří klienti.  [Více informací](http://jecas.cz/validita). [Český validátor](http://validator.webylon.info/).</small>
- Správný `<title>` a `<meta description>`  
<small>Oba hlavně kvůli náhledu stránky ve výsledcích vyhledávání nebo na sociálních sítích. [Více o title](https://moz.com/learn/seo/title-tag). [Více o meta description](https://moz.com/learn/seo/meta-description). [Nástroj pro ověření](http://www.w3.org/2003/12/semantic-extractor.html "W3 Semantic Extractor").</small>
- Správný `meta viewport`  
<small>Zařídí správné zobrazování responzivního webu v mobilních prohlížečích. [Více informací](viewport-meta.md "Meta Viewport")</small>
- Osnova (outline) nadpisů  
<small>Stromová struktura usnadní indexaci vyhledávači a prohlížení stránky zrakově postiženými. [HTML5 outliner](https://gsnedders.html5.org/outliner/ "HTML5 Outliner"). [Lze mít více h1?]( http://www.vzhurudolu.cz/blog/25-vice-h1).</small>
- Obsah bez typografických chyb  
<small>Všem zajistí lepší čtivost obsahu. Profíci jsou na to citliví a zbytečně se před nimi typo-chybami shodíte. Je dobré dohlédnout alespoň na ty nejpodstanější. [Nejčastější typografické chyby](http://typografie.wz.cz/chyby.html).</small>

## CSS

- Kód dodržuje konvenci  
<small>Konvence usnadňuje sdílení nebo předávání kódu. Jde o způsob psaní kódu, jeho komentování a případně i dokumentaci. Bude v každém týmu jinak, ale dobré si nastavit. Odkážu jen na [články v Google vyhledávání](https://www.google.cz/webhp?ion=1&espv=2&ie=UTF-8#q=css%20code%20standards).</small>
- Lint v požadované úrovni  
<small>Automatická kontrola častých chyb nebo problematických konstrukcí kódu. Hodí se hlavně při práci v týmu, ale opět bude mít každý jinak. Lze využít například [CSS Lint](http://csslint.net/)</small>
- Odstranění přebytečného kódu  
<small>Nenechte uživatele stahovat zbytečná data. Hlavně při použití CSS frameworků a pluginů je tohle problém. Existují i automatické nástroje jako třeba [UnusedCSS.com](https://unused-css.com/)</small>

## Javascript

- Dodržuje požadovanou konvenci  
<small>([Články na Google vyhledávání](https://www.google.cz/webhp?ion=1&espv=2&ie=UTF-8#q=javascript%20code%20standards))</small>
- Pokrytý testy  
<small>([Články na Google vyhledávání](https://www.google.cz/webhp?ion=1&espv=2&ie=UTF-8#q=javascript%20unit%20testing))</small>
- Kvalita kódu v požadované úrovni  
<small>([JSLint](http://www.jslint.com/), [JSHint](http://jshint.com/))</small>

## Přístupnost

- Validátor přístupnosti  
<small>([Validátor](http://achecker.ca/checker/index.php))</small>
- WAI-ARIA oblasti  
<small>([Článek na Zdrojáku](https://www.zdrojak.cz/clanky/pristupnost-ria-strukturovani-dokumentu-a-pristupnost-z-klavesnice/))</small>
- Ovládání tabulátorem  
<small>([Článek na Poslepu](http://poslepu.blogspot.cz/2010/06/zvyraznujete-odkazy-pri-ovladani-webu-z.html))</small>
- Alternativní texty u mediálního obsahu  
<small>([Článek na Zdrojáku](https://www.zdrojak.cz/clanky/pristupnost-html5-textove-alternativy-obrazku-1-2-teorie/))</small>
- Správné typy inputů ve formulářích  (`email`, `url`…)  
<small>([Článek na Zdrojáku](https://www.zdrojak.cz/clanky/formulare-html5-nove-inputy/))</small>
- Barevný kontrast  
<small>([Tester Check My Colours](http://www.checkmycolours.com/))</small>
- Hlavní obsah dostupný bez Javascriptu

## Prohlížeče a kompatibilita

- Plné zobrazení v moderních prohlížečích  
<small>([Článek](http://www.vzhurudolu.cz/prirucka/jak-testovat-responzivni-weby "Jak testovat responzivní weby"))</small>
- Dostupnost hlavního obsahu ve starších prohlížečích  
- Zobrazení napříč zařízeními  
- Tisková verze stránky  
<small>([Článek na Je čas](http://jecas.cz/tisk "Tisk stránky"))</small>

## Ostatní

- Grafika podporuje HD displeje typu Retina  
<small>([Článek](http://www.vzhurudolu.cz/prirucka/css-pixel "CSS pixel"))</small>
- Požadované PageSpeedInsights  
<small>([Pagespeed Insights tester](https://developers.google.com/speed/pagespeed/insights/?hl=cs))</small>
- Požadovaný SpeedIndex z WebpageTest.org  
<small>([webpagetest.org](http://www.webpagetest.org/))</small>
- Šablony pro chybové stránky 404 a 50x  
- V README.md v repozitáři popsána instalace, buildování atd.
