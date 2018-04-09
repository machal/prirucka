# Metriky rychlosti načítání

V pojmech a mírách kolem rychlosti je děsný zmatek, takže se nám v nich teď pokusím udělat pořádek. 

Bude to užitečné hlavně pro ty z vás, kteří obor [rychlosti načítání](https://www.vzhurudolu.cz/rychlost-nacitani) trochu více sledují. Ostatní pošlu [na závěrečná doporučení](#doporuceni).

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=fR9n_yi050g">Metriky rychlosti načítání</a> ~ O tématu jsem přednášel také na minikonferenci Frontendisti.cz
</p>

Na začátek bych rád zmínil, že metriky se dají získat dvěmi způsoby:

### Syntetická měření {#syntetika} 

Na web pošlete robota, který simuluje reálného uživatele, jeho konkrétní prohlížeč, rozlišení, rychlost internetu a tak dále. Tohle je nyní převládající způsob měření. Měří tak všechny [nástroje](rychlost-nastroje.md), o kterých jsem psal: PageSpeed Insights, WebpageTest.org a další.

<!-- AdSnippet -->


### Měřením reálných uživatelů (RUM = Real User Monitoring) {#rum}

Daleko lepší způsob měření, kdy si do stránky vložíte skript, který vám měří vaše reálné uživatele. Rozumné analytické nástroje to už dnes umí, jen jsou zaměřené spíše na velké weby a firmy. U velkých webů vám RUM metriky dnes ale zobrazí i PageSpeed Insights. 

Jde o údaje z přehledu uživatelského dojmu Chromu ([Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report/)), do kterého existuje i veřejný přístup.

*TODO obrázek: https://developers.google.com/speed/pagespeed/insights/?hl=cs&url=https%3A%2F%2Fwww.aktualne.cz%2F*

My se tady ale budeme věnovat jednotlivým momentům, které vznikají během času kdy se web vykresluje. Zatím většinou vznikají syntetickým měřením, ale neberu na to ohled.


## Jak jdou metriky v čase?

|* Metrika                           *|* Stručná definice *|
|-------------------------------------|--------------------|
| [Time To First Byte (TTFB)](#TTFB)  | Server a síť       |
| [DOM Content Loaded (DCL)](#DCL)    | Rozparsování HTML  |
| [First Paint (FP)](#FP) 				  | První vykreslení  |
| [First Contentful Paint (FCP)](#FCP)| První vykreslení obsahu  |
| [Time to Interactive (TTI)](#TTI)   | První možnost interaktivity |
| [Speed Index](#SI)                  | Průběh vykreslování |
| [Load](#Load)                       | Načtení všeho       | 

*TODO metriky v obrázku*


## Událost Time To First Byte (TTFB) {#TTFB}

Vzniká ve chvíli, kdy prohlížeč stáhne první byte z vašeho HTML. Ukazuje tedy čas, který zabere komunikace po síti. A hlavně rychlost vašeho serveru a backendové části aplikace.

TTFB ukazují asi všechny pořádnější nástroje – PageSpeed Insights, Lighthouse nebo WebpageTest (jako „First Byte“).

Serverový čas tvoří skoro vždy tu menší část problému u pomalejších webů. Nicméně i tak není dobré ho podceňovat: Důležitý je například pro [Crawl Budget vyhledávačů](https://www.contentkingapp.cz/akademie/crawl-budget/), hlavně u velkých webů.

TTFB byste měli i na pomalých sítích vždy držet pod jednu vteřinu. Ideální stav je co nejvíce pod půl vteřinou.


## Událost DOM Content Loaded (DCL) {#DCL}

Událost `DOMContentLoaded` v JavaScriptu vzniká, když byl hlavní HTML dokument stažen a rozparsován. Nečeká se na žádné další prvky – CSS, JS, obrázky nebo `<iframe>`.

Metriku uvidíte například pod záložkou „Network“ v Chrome DevTools jako modrou čáru. Ukazuje ji také online verze PageSpeed Insight v nových reportech vytažených ze sběru nad reálnými uživateli. Zatím ale jen u větších webů.

Je samozřejmě dobré ji optimalizací posunovat směrem k nule, ale nicmoc vám o uživatelském prožitku neřekne.

Nicméně je prokázáno, že lepší časy DCL [korelují s nížšími „bounce rate“](https://developers.google.com/speed/docs/insights/faq#speedmetrics) v analytických nástrojích. Jasně – čím rychleji se vám stránka zobrazí, tím méně pravděpodobně s ní ztratíte trpělivost.


## Událost First Paint (FP) {#FP}

Moment, kdy po kliknutí uživatele browser vyrenderuje cokoliv, co je vizuálně odlišné od stávající obrazovky. 

Například když vidí výsledky vyhledávání na Google a klikne na položku s vaším webem. First Paint vzniká ve chvíli, kdy uživatel vidí něco jiného než výsledky vyhledávání.

Odpovídá na nevyřčenou otázku uživatele „děje se to?“

Podobnou metriku umí zobrazit jen WebpageTest. Blízko je jeho hodnota „Start Render“. V timeline přehledu ji ukazuje jako tmavě zelenou čáru. V timeline přehledu také ukazuje světle zelenou čárou ukazuje „RUM First Paint“.


## Událost First Contentful Paint (FCP) {#FCP}

Vzniká ve chvíli, kdy uživatel vidí první verzi hlavního obsahu stránky. Čím lepší čas, tím [větší šance udržet aktivitu uživatele](https://developers.google.com/speed/docs/insights/faq#speedmetrics).

Když vezmu příklad e-shopu a detailu produktu: First Contentful Paint nastává ve chvíli kdy uživatel vidí název produktu a jeho nejdůležitějí textový popis.

Hlavním obsahem je samozřejmě pro každou stránku něco jiného – text, obrázek, SVG nebo klidně nějaký graf `<canvasu>` či video.

Je důležitý pro informování uživatele kladoucího si otázku „je to užitečné?“. 

FCP zobrazuje Lighthouse od Google pod názvem „First Meaningful Paint“.


## Skóre Speed Index {#SI}

Skóre, které ukazuje jak rychle je viditelný obsah stránky naplněn do stavu stoprocentního vykreslení.

Udává se v milisekundách. Čím nižší je, tím lépe. A je navázán na konkrétní technologický kontext – prohlížeč, šířku okna nebo typ připojení.

<!-- AdSnippet -->

Tohle je jiná metrika než všechny ostatní. SpeedIndex neukazuje čas události, jde o celkové skóre stránky. Velmi dobře se hodí pro jednoduché porovnávání výsledků stránky v čase nebo poměření s konkurencí.

A je to také jediná metrika, která něco říká o uživatelském prožitku v čase. I proto ji mám tak rád.

Chcete-li být na sebe přísní, držte SpeedIndex pod 1 000 bodů. Většině běžných webů bude ale dnes stačit dostat se do pěti tisícové hranice na rychlosti 3G Slow.

*TODO: obrázek jak se počítá*

SI je známý především z WebpageTest.org. Nástroj Lighthouse ukazuje podobnou veličinu [Perceptual Speed Index](https://developers.google.com/web/tools/lighthouse/audits/speed-index).

Problémem SpeedIndexu je to, že se aktuálně počítá z video-záznamu průběhu načítání stránky. Nelze jej tedy použít pro sbírání dat od všech uživatelů, jen pro syntetické testy. Další problém je v tom, že čeká na vizuální „hotovost“ stránky. Pokud tedy na stránce máte animované prvky, například automatický karusel, asi vám SpeedIndex naroste do nebeských výšin. Ale i tak je ze všech metrik ta nejzajímavější.

Více o [Speed Indexu](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index).



## Událost Time to Interactive (TTI) {#TTI}

Chvíle, kdy je stránka renderovaná a zároveň schopná spolehlivě reagovat na uživatelský vstup.

Ptáte se, kdy stránka spolehlivě reaguje na uživatelský vstup? V momentě, kdy se načetly a spustily javascripty, které jsou k tomu potřeba. A když prohlížeč není „zaseknutý“ nebo „nalaguje“. 

Odborně vzato nesmí být vykreslovací jádro prohlížeče zatíženo dlouhotrvajícími úkoly. „[Long task](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics#long_tasks)“ je definován jako zaseknutí vykreslovacího jádra na více než 50 ms.

TTI je odpovědí na otázku uživatele „je to použitelné?“. 

TTI jsou vlastně dvě různé metriky:

- [Consistently Interactive](https://developers.google.com/web/tools/lighthouse/audits/consistently-interactive), kterou ukazuje Lighthouse. Ta nepočítá s žádnými prodlevami v interakci se stránkou. Musí být vykreslená a reagující podle výše uvedených podmínek.
- [First Interactive](https://github.com/WPO-Foundation/webpagetest/blob/master/docs/Metrics/TimeToInteractive.md), kterou uvádí WebpageTest. První moment, kdy stránka může reagovat na uživatelské vstupy. Počítá se ale s možnými prodlevami, protože některé části stránky se dále stahují.


## Událost Load {#Load}

Událost, která indikuje, že prohlížeč stáhl celé  HTML i všechny v něm odkazované prvky - CSS, JS, obrázky nebo `<iframe>`.

V JavaScriptu na ni můžeme čekat takto:

```javascript
window.addEventListener("load", function(event) { … });
```

Je to tradičně nejpoužívanější metrika. Nic proti ni a vylepšování jejich hodnot. Zhola nic vám ale neřekne o uživatelském prožitku. Když totiž například bude stránka zobrazená, interaktivní (a už dávno konzumovaná uživatelem) a na pozadí ještě stahuje velký obrázky někde do patičky, uživatel o tom vlastně vůbec neví. Přitom událost „Load“ může vycházet dost nehezky.

Metriku uvidíte například: v záložce Network Chrome DevTools jako červenou čáru. Ale nějak ji uvádějí vlastně všechny měřící nástroje.

*TODO obrázek*

Zajímavou podobu má v Google Analytics. Ty ukazují „průměrnou dobu načítání stránky“ pro různé uživatelské kontexty (zařízení, prohlížeče nebo geografické umístění). Hlavně jde o reálné uživatele, takže nějaký smysl tuhle metriku v Analytics má.

V Analytics je [přesně definována](https://support.google.com/analytics/answer/2383341?hl=cs) takhle: 

> Průměrná doba (v sekundách), kterou trvá načtení stránky od spuštění zobrazení stránky (tj. kliknutí na odkaz vedoucí na stránku) do úplného načtení v prohlížeči.

<div class="related" markdown="1">
- [Google Analytics: průvodce měřením pro webové vývojáře](https://www.vzhurudolu.cz/prirucka/google-analytics-vyvojari)
- [Google Analytics: průvodce pro přidání webu](https://www.vzhurudolu.cz/prirucka/google-analytics-pridani)
</div>

Celkovou dobu načtení ukazují snad všechny nástroje. Z těch, které používám já, jsou to Chrome DevTools, Lighthouse nebo WebpageTest. 

WebpateTest ale ukazuje těch metrik pro finalizaci dokumentu víc, takže si v tom pojďme udělat pořádek.

### WebpageTest.org: Load Time, Document complete a Fully loaded {#wpt-load}

Budu vycházet z vysvětlení [Patricka Meenana](https://www.webpagetest.org/forums/showthread.php?tid=10315):

- *Document complete* je moment, kdy prohlížeč spouští událost Load.
- *Fully loaded* je moment po události Load, kdy navíc síťová aktivita ustála alespoň na dvě vteřiny.
- *Load Time* je totéž jako Document complete, tedy událost Load. U mých testů se čísla vždy shodují.


## Doporučení na závěr {#doporuceni}

Ano, já vím, je to trochu složité. Není ale asi potřeba, abyste si pamatovali metriky všechny. Zkusím vám na závěr doporučit jednoduchou strategii:

- Hlídejte si hlavně SpeedIndex, Time to First Byte (TTFB) a Load. První dvě vám ukáže nástroj Lighthouse, který je také vestavěný v Chrome. Poslední metriku uvidíte v záložce „Network“ Chrome DevTools.
- Provnávejte výsledky vašich nejdůležitějších stránek s konkurencí.
- Větší weby a budoucnost: RUM metriky a automatizace. Dívejte se po nástrojích, které vám měření zautomatizují. Hledejte řešení s měřením reálných uživatelů (RUM).
- Pokud potřebujete optimalizovat, dívejte se do časové osy vykreslování v prohlížeči. Buď v Chrome DevTools nebo WebpageTest.org.

<!-- AdSnippet -->

