# Nástroje pro analýzu rychlosti načtení stránky

Začněte s Google PageSpeed Insights, pokračujte na WebPageTest.org. Budou se vám také hodit vývojářské nástroje v Chrome nebo jiných prohlížečích. 

## Google PageSpeed Insights

Validátor základních technických problémů, které komplikují rychlost webu. Zde začněte. Otestujte si tady všechny důležité vstupní šablony. 

PageSpeed Insights (PSI) se dá instalovat i jako rozšíření do prohlížečů nebo testování zautomatizovat pomocí [API](https://developers.google.com/speed/docs/insights/v2/reference/pagespeedapi/runpagespeed).

Dokud v PSI nedosáhnete skóre dejme tomu kolem 80 bodů na desktopu i mobilu, nemá smysl se učit se další nástroje.

→ [developers.google.com/speed/pagespeed/insights](https://developers.google.com/speed/pagespeed/insights/?hl=cs)

## WebPagetest.org

Pro mě nástroj číslo jedna. Dělá pokročilou analýzu, testuje jinak než Page Speed Insights. Na druhou stranu – WebPagetest nelze používat průběžně, testy nějakou dobu trvají. WebPagetest také nevede za ruku jako PSI, je potřeba se s ním trochu zkamarádit.

Umožňuje testování z jiné lokality, testování pomalého připojení a v prohlížečích, ve kterých nemáte pokročilé vývojářské nástroje. Třeba v těch mobilních nebo ve starých Internet Explorerech.

Má také [API](https://sites.google.com/a/webpagetest.org/docs/advanced-features/webpagetest-restful-apis), ve verzi zdarma je omezené na pár stovek dotazů týdně. 

Co z výsledků WebPagetest mě zajímá?

![WebPagetest.org stránka s výsledkem testu](dist/images/original/webpagetest-schema.jpg)

### 1) Speed Index

[Speed Index](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index) je průměrný čas zobrazení konkrétní stránky v daném prohlížeči, [viewportu](viewport-mobily.md) a rychlosti internetu. Čím menší Speed Index, tím lépe. Nejrychlejší weby dosahují čísel kolem tisícovky. Průměr je mezi pěti a desíti tisíci.

Speed Index je esence rychlosti načítání. Číslo, které můžete porovnávat s konkurenty nebo před a po optimalizaci. Takový „pagerank“ pro odborníky na zrychlování webu. 

### 2) Vysvědčení

Hodnocení v parametrech, které připadají autorům WebPagetest důležité. *First Byte*, takže jak rychlý je backend, nastavení kešování na serveru, komprese obrázků a využití CDN.

### 3) Vodopád načítání

Jak se stahují komponenty stránky? Které z nich blokují parsování? Velmi užitečné a velmi detailní.

### 4) Filmový pás

Jak přesně vizuálně probíhalo načítání stránky? Velmi důležité. Dívám se jak dlouho trvalo, než se uživateli zobrazil obsah. Je to užitečnější než strojově vypočtený *Start Render*, který vidíte v tabulce.

Dívám se samozřejmě i na další čísla. WebpageTest má mnoho zákoutí k prozkoumání, tohle byl jen začátek.  

→ [webpagetest.org](http://www.webpagetest.org/)

## Chrome DevTools

Pokročilá analýza a detailní testování procesů načítání v Chrome. Velmi podobný nástroj mají i ostatní moderní prohlížeče.

![Chrome DevTools a analýza rychlosti](dist/images/original/devtools-rychlost-schema.jpg)

Vše podstatné je v záložce Network:

1. Zapněte nahrávání
2. Zapněte snímání filmový pásu s průběhem zobrazování webu
3. Omezte rychlost připojení
4. Modrá je [událost DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded). Ta je spuštěná ve chvíli kdy bylo HTML načteno a rozparsováno. Červená [událost Load](https://developer.mozilla.org/en-US/docs/Web/Events/load) se spustí jakmile prohlížeč stáhl úplně vše, včetně obrázků. 

Mohou se vám hodit i další [tipy pro DevTools](http://www.vzhurudolu.cz/blog/41-devtools-tipyblog/41-devtools-tipy).

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=ewwHYkXmPpQ">Chrome DevTools: analýza načítání stránky </a> ~ Praktická demonstrace analýzy rychlosti načítání ve vývojářských nástrojích Chrome.
</p>

## GTmetrix

Používám jen jako doplněk, ale někteří mu dávají přednost před PageSpeed Insights. Obsahuje totiž analýzu z tohoto nástroje a zároveň ještě [YSlow metodiku](http://yslow.org/) v jednom reportu.

Umí toho hodně. Ukáže timeline, zvládne emulaci pomalého připojení. Testovací lokality má GTmetrix ale pro ČR horší než WebpageTest.org a s méně možnostmi nastavení. Hezké je monitorování a nastavení připomínek do mailu.

→ [gtmetrix.com](https://gtmetrix.com/)

## Google Analytics

U statistik z Google Analytics se mi líbí jak jsou po ruce markeťákům. Mají ale velmi zajímavé [využití i pro vývojáře](google-analytics-vyvojari.md), hlavně když se rozšíří o Trackomatic a Technical Performace Dashboard.

Mrkněte se do *Chování > Rychlost > Přehled*. Je potřeba měřit pomocí verze Universal Analytics. Analytics ukazují *Časování stránek (Page Timings)*, ale napříč různými kontexty - prohlížeče, regiony. 

V *Časování uživatelů (User Timings)* mohou být vaše vlastní měření - např. jak rychle se načetl konkrétní obrázek. [Je to potřeba nastavit](https://developers.google.com/analytics/devguides/collection/analyticsjs/user-timings).

Standardně se prý pro měření rychlost používá jednoprocentní vzorek vašich shlédnutí stránky. Pokud to chcete jinak, [je potřeba měřit s nastavením](http://www.ericmobley.net/measuring-performance-google-analytics/) `‘siteSpeedSampleRate’: 50`.

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=ewwHYkXmPpQ">Chrome DevTools: analýza načítání stránky</a> ~ Praktická demonstrace analýzy rychlosti načítání ve vývojářských nástrojích Chrome.
</p>
