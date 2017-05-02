# Nástroje pro analýzu rychlosti načtení stránky

Začněte s Google PageSpeed Insights nebo Google Analytics, pokračujte na WebPageTest.org. Vývojářům se také budou hodit vývojářské nástroje v Chrome nebo jiných prohlížečích. 


## Google PageSpeed Insights

Validátor základních technických problémů, které komplikují rychlost webu. Zde začněte. Otestujte si tady všechny důležité vstupní šablony. 

<figure>
<img src="dist/images/original/pagespeed-insights.jpg" alt="PageSpeed Insights">
<figcaption markdown="1">    
*Google PageSpeed Insights zobrazí skóre webu, ale také rovnou návrhy na vylepšení*
</figcaption> 
</figure>

Dokud v PageSpeed Insights (PSI) nedosáhnete skóre dejme tomu kolem 80 bodů na desktopu i mobilu, nemá smysl učit se další nástroje. Vyřešit je potřeba hlavně červeně zvýrazněné problémy vašeho webu.

<!-- AdSnippet -->

Zároveň není nutné bojovat za dosažení stovky. PSI je prostě jen automat, a tak vám strhne body i za rozumné věci. Upozorní vás například na „špatně“ nastavenou dobu kešování měřicího skriptu Google Analytics. Jinak je to ale skvělý nástroj.  [developers.google.com/speed/pagespeed/insights](https://developers.google.com/speed/pagespeed/insights/?hl=cs)


## Google Analytics

U statistik z Google Analytics se mi líbí, jak jsou po ruce markeťákům. Mají ale velmi zajímavé využití i pro vývojáře, hlavně když se rozšíří o Trackomatic a Technical Performace Dashboard.  [vrdl.cz/prirucka/google-analytics-vyvojari](http://www.vzhurudolu.cz/prirucka/google-analytics-vyvojari)

Na přehledy o rychlosti webu se mrkněte do *Chování > Rychlost > Přehled*. Je potřeba měřit pomocí aktuální verze: Universal Analytics. Analytics ukazují *Časování stránek (Page Timings)*, ale napříč různými kontexty, jako jsou prohlížeče nebo regiony. 

V *Časování uživatelů (User Timings)* mohou být vaše vlastní měření – např. jak rychle se načetl konkrétní obrázek. Je to potřeba nastavit. [vrdl.in/f3rbx](https://developers.google.com/analytics/devguides/collection/analyticsjs/user-timings)

<!-- AdSnippet -->

Standardně se prý pro měření rychlosti používá jednoprocentní vzorek zhlédnutí vaší stránky. Pokud to chcete jinak, je potřeba měřit s nastavením `‘siteSpeedSampleRate’: 50`. [vrdl.in/4bn30](http://www.ericmobley.net/measuring-performance-google-analytics/)


## WebPagetest.org

Pro mě nástroj číslo jedna. Dělá pokročilou analýzu a testuje detailněji než Page Speed Insights. Na druhou stranu WebPagetest nelze používat průběžně, protože testy nějakou dobu trvají. WebPagetest také nevede za ruku jako PSI, nedává přímé rady, jak problém odstranit. A je potřeba jej trochu více poznávat, jelikož rozhraní nepatří mezi nejpřívětivější.

Umožňuje testování z jiné lokality, testování pomalého připojení a v prohlížečích, ve kterých nemáte pokročilé vývojářské nástroje. Třeba v těch mobilních nebo ve starých Internet Explorerech.

<figure>
<img src="dist/images/original/webpagetest-schema.jpg" alt="WebPagetest.org stránka s výsledkem testu">
<figcaption markdown="1">    
*WebpageTest.org: kromě vysvědčení (1) vidíme i Speed Index (2), vodopádový pohled (3) nebo se můžeme prokliknout na filmový pás (4)*
</figcaption> 
</figure>

Má také API, přičemž ve verzi zdarma je omezené na pár stovek dotazů týdně. 

Co z výsledků WebPagetest mě zajímá?

### 1) Vysvědčení

Hodnocení v parametrech, které připadají autorům WebPagetest důležité. *First Byte* (jak rychlý je server), nastavení kešování na serveru, komprese obrázků a využití CDN.

### 2) Speed Index

Speed Index je průměrný čas zobrazení konkrétní stránky v daném prohlížeči, velikosti okna a rychlosti internetu. Čím nižší je váš Speed Index, tím lépe. Nejrychlejší weby dosahují čísel kolem tisícovky. Průměr je mezi pěti a desíti tisíci. Čísla nad deset tisíc jsou na pováženou.

Speed Index je esence rychlosti načítání. Číslo, které můžete porovnávat s konkurenty nebo ho porovnávat před optimalizací a po ní. Takový „pagerank“ pro odborníky na zrychlování webu.

### 3) Vodopád načítání (Waterfall)

Jak se stahují komponenty stránky? Které z nich blokují parsování? Užitečný a detailní pohled na postup načítání. 

### 4) Filmový pás (Filmstrip View)

Jak přesně vizuálně probíhalo načítání stránky? To je velmi důležité. Dívám se, jak dlouho trvalo, než se uživateli zobrazil obsah, a také jakým způsobem vykreslování probíhalo. Je to užitečnější než strojově vypočtený *Start Render*, který vidíte v tabulce.

Dívám se samozřejmě i na další čísla. WebPagetest má mnoho zákoutí k prozkoumání, tohle byl ale dobrý začátek. [webpagetest.org](http://www.webpagetest.org/)

## Chrome DevTools

Pokročilá analýza a detailní testování procesů načítání v Chrome. Velmi podobný nástroj mají i ostatní moderní prohlížeče.

<figure>
<img src="dist/images/original/devtools-rychlost-schema.jpg" alt="DevTools">
<figcaption markdown="1">    
*Chrome DevTools a analýza rychlosti*
</figcaption> 
</figure>


Vše podstatné je v záložce Network:

1. Zapněte nahrávání.
2. Zapněte snímání filmový pásu s průběhem zobrazování webu.
3. Omezte rychlost připojení.
4. Modrá je událost *DOMContentLoaded*. Ta je spuštěná ve chvíli kdy bylo HTML načteno a rozparsováno. Červená událost *Load* se spustí, jakmile prohlížeč stáhl úplně vše, včetně obrázků. 

<div class="web-only" markdown="1">
Na Vzhůru dolů jsem už psal i o dalších praktických tipech pro DevTools. [vrdl.cz/blog/41-devtools-tipy](http://www.vzhurudolu.cz/blog/41-devtools-tipyblog/41-devtools-tipy).
</div>

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=ewwHYkXmPpQ">Chrome DevTools: analýza načítání stránky </a> ~ Praktická demonstrace analýzy rychlosti načítání ve vývojářských nástrojích Chrome.
</p>

## GTmetrix

Používám jen jako doplněk, ale někteří mu dávají přednost před PageSpeed Insights. Obsahuje totiž analýzu z tohoto nástroje a zároveň ještě dříve velmi známou metodiku YSlow v jednom reportu.

<!-- AdSnippet -->

Umí toho hodně. Ukáže timeline, zvládne emulaci pomalého připojení. Testovací lokality má GTmetrix ale pro ČR horší než WebPagetest.org a s méně možnostmi nastavení. Hezké je monitorování a nastavení připomínek do e-mailu. [gtmetrix.com](https://gtmetrix.com/)

