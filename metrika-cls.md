## Cumulative Layout Shift (CLS)

Metrika, která udává stabilitu vzhledu stránky během vykreslování. 

Jedná se o jednu [z metrik rychlosti webu](metriky-rychlosti.md), i když v tomto případě bychom mohli mluvit spíše obecněji o metrikách uživatelském zážitku (UX). Je velmi důležitá, protože je součástí [Core Web Vitals](web-vitals.md).

CLS Udává součet posunů layoutu stránky (layout shift) během vykreslování stránky. Cílem je zajistit co nejvyšší vizuální stabilitu stránky.

## Problémy, které řeší {#problemy}

Všichni to známe. Stránka vypadá, že je vykreslená, už už se chystáme kliknout, ale v tom se načte reklama, posune nám layoutu a my klikáme na reklamu.

Vtipně to popisuje následující video od autorů metriky z Googlu:

*TODO video*

To, že stránky během vykreslování „poskakují“ není nic nového ani nečekaného. Vyplývá to z asynchronní povahy některých prvků webu – fontů, obrázků, videí, komponent třetí strany. 

Potíže může dělat například:

* webový font, který se ještě nevykreslil,
* obrázek nebo video bez definovaných rozměrů
* komponenta třetí strany, která se vykreslí pozdě a ještě mění velikost.

## CLS skóre {#skore}

Cumulative Layout Shift vrací číslo mezi `0` a `1`. Čím je nižší, tím lépe. Z  [Web Vitals](web-vitals.md) už víte, že metriky mají své stavy:

<div class="rwd-scrollable f-6" markdown="1">

|  Vyhovuje |  Chce zlepšit       |  Špatná   |
|----------:|--------------------:|----------:|
| ≤ 0,1     |   0,1 - 0,25        |  > 0,25   |

</div>

Cílem tedy je dostat se pod hodnotu `0,1` nebo v horším případě nepřekročit `0,25`.

*TODO obrázek https://web.dev/cls/*

Ideální je samozřejmě měřit CLS na celé skupině vašich návštěvníků, například pomocí [Chrome UX Report](chrome-ux-report.md).

V takovém případě se dívejte na 75. percentil všech návštěv, jak to u Core Web Vitals bývá zvykem.

Pokud by vás snad zajímaly detaily o tom, jak se tato metrika přesně počítá, zavítejte na [web.dev](https://web.dev/cls/#layout-shifts-in-detail), kde to lidé z Googlu rozebírají.

Tady jen zmíním, že se jedná o součet všech posunů layoutu. U každého se měří, jak velkou část obrazovky poskočení ovlivnilo a o jakou vzdálenost se poskakující blok posunul. Pro potřeby měření v prohlížečích vzniká [Layout Instability API](https://wicg.github.io/layout-instability/) s rozhraním [LayoutShift](https://developer.mozilla.org/en-US/docs/Web/API/LayoutShift), které má podporu v prohlížečích vycházejících z Chrome.

## Jak to měřit? {#mereni}

CLS je možné zíkat jak ze syntetických měření, tak na reálných uživatelích (RUM nebo „data pole“).

Jako vždy se i tady mohou výsledky i výrazně lišit, protože nástroje pro syntetická měření umí CLS získat pouze z úvodního načtení stránky, kdežto uživatelská měření jdou dále.

### Syntetická měření

* [layoutstability.rocks] (jednoduchý kalkulátor)
* [PageSpeed Insights](pagespeed-insights.md) (metriky od Lighthouse - „Laboratorní data“) 
* [WebpageTest](https://www.webpagetest.org/)  
* [Lighthouse](lighthouse.md)

### Měření uživatelů

* [PageSpeed Insights](pagespeed-insights.md) („Data pole“) 
* [Search Console](google-search-console.md) (report „Core Web Vitals“) 
* [Chrome User Experience Report](chrome-ux-report.md)  
* [Rozšíření do Chrome „Web Vitals“](https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma?hl=en)  
* [JS knihovna web-vitals](https://github.com/GoogleChrome/web-vitals)  (možnost implementace vlastních měření)
