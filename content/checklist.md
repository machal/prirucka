# Kontrolní seznam frontend kodéra

Co všechno by měl [webový kodér](/prirucka/webovy-koder) zkontrolovat než odevzdá svou práci?

Dovolte mi dvě poznámky:

- Tohle je koncept. Připomínky, nápady a feedback nadšeně vítám. Klidně [mailem](mailto:martin@vzhurudolu.cz) nebo do komentářů.
- Psal jsem to hlavně pro prezentační weby. U webových aplikací bude řada věcí jinak.

---

## HTML

- Ikony a favikony  
<small>([Nástroj](http://realfavicongenerator.net/ "Real Favicon Generator"), [Článek na Je čas](http://jecas.cz/favicon "Ikona stránky"))</small>
- Facebook Open Graph  
<small>([Nástroj](https://developers.facebook.com/tools/debug/ "Facebook Debugger"), [Článek na Je čas](http://jecas.cz/nahled-odkazu "Náhled odkazu při sdílení na sociálních sítích"))</small>
- Twitter Cards  
<small>([Nástroj](https://cards-dev.twitter.com/validator "Card validator"), [Článek  na Je čas](http://jecas.cz/nahled-odkazu "Náhled odkazu při sdílení na sociálních sítích"))</small>
- Strukturovaná data pro Google  
<small>([Nástroj](https://developers.google.com/structured-data/testing-tool/ "Structured Data Testing Tool"), [Článek](http://www.vzhurudolu.cz/prirucka/rich-snippets "Rich Snippets"))</small>
- Validní HTML  
<small>([Nástroj](https://validator.w3.org/ "W3 Markup Validator"))</small>
- Správný `title`, `meta desc`  
<small>([Nástroj](http://www.w3.org/2003/12/semantic-extractor.html "W3 Semantic Extractor"))</small>
- Správný `meta viewport`  
<small>([Článek](viewport-meta.md "Meta Viewport"))</small>
- Osnova (outline) nadpisů  
<small>([Nástroj](https://gsnedders.html5.org/outliner/ "HTML5 Outliner"), [Článek]( http://www.vzhurudolu.cz/blog/25-vice-h1))</small>
- Obsah bez typografických chyb  
<small>([Článek na Wikipedii](https://cs.wikipedia.org/wiki/Wikipedie:Typografick%C3%A9_rady "Typografické rady"))</small>

## CSS

- Dodržuje požadovanou konvenci  
<small>([Články na Google vyhledávání](https://www.google.cz/webhp?ion=1&espv=2&ie=UTF-8#q=css%20code%20standards))</small>
- Odstranění přebytečného kódu  
<small>([Nástroj](https://unused-css.com/))</small>
- Lint v požadované úrovni  
<small>([Nástroj](http://csslint.net/))</small>

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
