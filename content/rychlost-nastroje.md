# Nástroje pro analýzu rychlosti načtení stránky

Začněte s Google PageSpeed Insights, pokračujte na WebPageTest.org. Budou se vám také hodit vývojářské nástroje v Chrome nebo jiných prohlížečích. 

## Google PageSpeed Insights

Validátor základních technických problémů, které komplikují rychlost webu. Zde začněte. Otestujte si tady všechny důležité vstupní šablony. 

Dokud v PageSpeed Insights (PSI) nedosáhnete skóre dejme tomu kolem 80 bodů na desktopu i mobilu, nemá smysl se učit se další nástroje. Vyřešit je potřeba hlavně červeně zvýrazněné problémy vašeho webu.

Zároveň není nutné bojovat za dosažení stovky. PSI je prostě jen automat a tak vám strhne body i za rozumné věci. Upozorní vás například na „špatně“ nastavenou dobu vypršení uložení měřicího skriptu Google Analytics do mezipaměti prohlížeče. Jinak je to ale skvělý nástroj.

PSI se dá také instalovat jako rozšíření do prohlížečů nebo testování zautomatizovat pomocí API.

[developers.google.com/speed/pagespeed/insights](https://developers.google.com/speed/pagespeed/insights/?hl=cs)


## WebPagetest.org

Pro mě nástroj číslo jedna. Dělá pokročilou analýzu, testuje detailněji než Page Speed Insights. Na druhou stranu: WebPagetest nelze používat průběžně, protože testy nějakou dobu trvají. WebPagetest také nevede za ruku jako PSI, je potřeba jej trochu více poznávat.

Umožňuje testování z jiné lokality, testování pomalého připojení a v prohlížečích, ve kterých nemáte pokročilé vývojářské nástroje. Třeba v těch mobilních nebo ve starých Internet Explorerech.

Má také API, ve verzi zdarma je omezené na pár stovek dotazů týdně. 

Co z výsledků WebPagetest mě zajímá?

![WebPagetest.org stránka s výsledkem testu](dist/images/original/webpagetest-schema.jpg)

### 1) Vysvědčení

Hodnocení v parametrech, které připadají autorům WebPagetest důležité. *First Byte* (jak rychlý je backend), nastavení kešování na serveru, komprese obrázků a využití CDN.

### 2) Speed Index

Speed Index je průměrný čas zobrazení konkrétní stránky v daném prohlížeči, [viewportu](viewport-mobily.md) a rychlosti internetu. Čím menší Speed Index, tím lépe. Nejrychlejší weby dosahují čísel kolem tisícovky. Průměr je mezi pěti a desíti tisíci.

Speed Index je esence rychlosti načítání. Číslo, které můžete porovnávat s konkurenty nebo před a po optimalizaci. Takový „pagerank“ pro odborníky na zrychlování webu. 

### 3) Vodopád načítání

Jak se stahují komponenty stránky? Které z nich blokují parsování? Velmi užitečné a velmi detailní.

### 4) Filmový pás

Jak přesně vizuálně probíhalo načítání stránky? Velmi důležité. Dívám se jak dlouho trvalo, než se uživateli zobrazil obsah a také jakým způsobem vykreslování probíhalo. Je to užitečnější než strojově vypočtený *Start Render*, který vidíte v tabulce.

Dívám se samozřejmě i na další čísla. WebpageTest má mnoho zákoutí k prozkoumání, tohle byl ale dobrý začátek.  

[webpagetest.org](http://www.webpagetest.org/)

## Chrome DevTools

Pokročilá analýza a detailní testování procesů načítání v Chrome. Velmi podobný nástroj mají i ostatní moderní prohlížeče.

![Chrome DevTools a analýza rychlosti](dist/images/original/devtools-rychlost-schema.jpg)

Vše podstatné je v záložce Network:

1. Zapněte nahrávání
2. Zapněte snímání filmový pásu s průběhem zobrazování webu
3. Omezte rychlost připojení
4. Modrá je událost *DOMContentLoaded. Ta je spuštěná ve chvíli kdy bylo HTML načteno a rozparsováno. Červená událost *Load* se spustí jakmile prohlížeč stáhl úplně vše, včetně obrázků. 

Na Vzhůru dolů jsem už psal o dalších praktických tipech pro DevTools. [vrdl.cz/blog/41-devtools-tipy](http://www.vzhurudolu.cz/blog/41-devtools-tipyblog/41-devtools-tipy).

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=ewwHYkXmPpQ">Chrome DevTools: analýza načítání stránky </a> ~ Praktická demonstrace analýzy rychlosti načítání ve vývojářských nástrojích Chrome.
</p>

## GTmetrix

Používám jen jako doplněk, ale někteří mu dávají přednost před PageSpeed Insights. Obsahuje totiž analýzu z tohoto nástroje a zároveň ještě dříve velmi známou metodiku YSlow v jednom reportu.

Umí toho hodně. Ukáže timeline, zvládne emulaci pomalého připojení. Testovací lokality má GTmetrix ale pro ČR horší než WebpageTest.org a s méně možnostmi nastavení. Hezké je monitorování a nastavení připomínek do mailu.

[gtmetrix.com](https://gtmetrix.com/)

## Google Analytics

U statistik z Google Analytics se mi líbí jak jsou po ruce markeťákům. Mají ale velmi zajímavé využití i pro vývojáře, hlavně když se rozšíří o Trackomatic a Technical Performace Dashboard. [vrdl.cz/prirucka/google-analytics-vyvojari](http://www.vzhurudolu.cz/prirucka/google-analytics-vyvojari)

Na přehledy o rychlosti webu se mrkněte do *Chování > Rychlost > Přehled*. Je potřeba měřit pomocí aktuální verze: Universal Analytics. Analytics ukazují *Časování stránek (Page Timings)*, ale napříč různými kontexty jako jsou prohlížeče nebo regiony. 

V *Časování uživatelů (User Timings)* mohou být vaše vlastní měření - např. jak rychle se načetl konkrétní obrázek. Je to potřeba nastavit. [vrdl.in/f3rbx](https://developers.google.com/analytics/devguides/collection/analyticsjs/user-timings).

Standardně se prý pro měření rychlost používá jednoprocentní vzorek vašich shlédnutí stránky. Pokud to chcete jinak, je potřeba měřit s nastavením `‘siteSpeedSampleRate’: 50`. [vrdl.in/4bn30](http://www.ericmobley.net/measuring-performance-google-analytics/)

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=ewwHYkXmPpQ">Chrome DevTools: analýza načítání stránky</a> ~ Praktická demonstrace analýzy rychlosti načítání ve vývojářských nástrojích Chrome.
</p>
