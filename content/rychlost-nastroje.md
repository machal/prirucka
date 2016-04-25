# Nástroje pro analýzu rychlosti načtení stránky

## Google PageSpeed Insights

- Validátor základních obvyklých problémů.
- Tímhle začněte, otestujte si tam důležité vstupní šablony
- Dá se instalovat i jako rozšíření do prohlížečů nebo zautomatizovat. Má [API](https://developers.google.com/speed/docs/insights/v2/reference/pagespeedapi/runpagespeed).
- Dokud v PSI nedosáhnete skóre dejme tomu kolem 90 na desktopu i mobilu, nemá smysl se učit se další nástroje.
- [developers.google.com/speed/pagespeed/insights](https://developers.google.com/speed/pagespeed/insights/?hl=cs)

## WebPageTest.org

- Pokročilá analýza, testuje jinak než Page Speed Insights. Pro mě nástroj číslo jedna.
- Na druhou stranu – WebPageTest nelze používat průběžně, je pomalý. 
- Má také [API](https://sites.google.com/a/webpagetest.org/docs/advanced-features/webpagetest-restful-apis), ale ve verzi zdarma je omezené na pár stovek dotazů týdně.
- Umožňuje testování z jiné lokality, testování pomalého připojení a v prohlížečích, ve kterých nemáte pokročilé vývojářské nástroje – třeba ve starých Internet Explorerech.

Co z výsledků WebPageTest mě zajímá?

*TODO screenshot http://www.webpagetest.org/result/160321_DK_3PD/* 

1. Hlavně [Speed Index](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index), což je průměrný čas zobrazení stránky v daném prohlížeči, [viewportu](viewport-mobily.md) a rychlosti internetu. Speed Index je ale skvělý v jiné věci – je to esence rychlosti načítání. Číslo, které můžete porovnávat s konkurenty nebo před a po optimalizaci. Takový *pagerank* pro odborníky na zrychlování webu.
2. *Filmstrip View* – jak přesně vizuálně probíhalo načítání stránky. Velmi důležité. Osobně si tam měřím jak dlouho trvalo, než se uživateli zobrazil obsah. 
3. Z dalších čísel mě zajímá *First Byte* (jak rychlý je backend?) a *Start Render* (kdy mohl prohlížeč začít zobrazovat stránku). Dívám se samozřejmě na vykreslení vodopádu načítání a další čísla. 

## Chrome DevTools

- Pokročilá analýza a detailní testování procesů načítání v Chrome.
- Vše podstatné je v záložce Network. Je potřeba omezit rychlost připojení, zapnout nahrávání, ideálně i filmový záznam a pak vyhodnocovat.
- Užitečná je možnost rozkliku komponenty ve vodopádu. V záložce Timing je pak průběh servírování.
- [Událost DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded) je spuštěná ve chvíli kdy HTML bylo načteno a rozparsováno. [Událost Load](https://developer.mozilla.org/en-US/docs/Web/Events/load) se spustí jakmile prohlížeč stáhl úplně vše, včetně obrázků.
- TODO video.

## GTmetrix

- Používám jen jako doplněk.
- Umí PageSpeed Insights a zároveň ještě YSlow metodiku od Yahoo v jednom reportu.
- Ukáže timeline, zvládne emulaci pomalého připojení.
- Testovací lokality pro ČR horší než WebpageTest.org a s méně možnostmi nastavení.
- Hezké je monitorování a nastavení připomínek do mailu.
- [gtmetrix.com](https://gtmetrix.com/)

## Google Analytics

- Používám méně často, ale líbí se mi jak je tahle důležitá analýza po ruce markeťákům.
- Mrkněte do Chování / Rychlost / Přehled. Je potřeba měřit pomocí verze Universal Analytics.
- Analytics ukazují „Časování stránek“ (Page Timings), ale napříč různými kontexty - prohlížeče, regiony. 
- V „Časování uživatelů“ (User Timings) mohou být vaše vlastní měření - např. jak rychle se načetl konkrétní obrázek. [Je to potřeba nastavit](https://developers.google.com/analytics/devguides/collection/analyticsjs/user-timings).
- Dočetl jsem se, že standardně se pro měření rychlost používá jednoprocentní vzorek vašich shlédnutí stránky. Pokud to chcete jinak, [je potřeba měřit s nastavením `‘siteSpeedSampleRate’: 50`](http://www.ericmobley.net/measuring-performance-google-analytics/).

