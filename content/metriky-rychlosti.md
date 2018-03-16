# Metriky rychlosti načítání

## Událost Time To First Byte (TTFB) {#TTFB}

Vzniká ve chvíli, kdy prohlížeč stáhne první byte z vašeho HTML. Ukazuje tedy čas, který zabere komunikace po síti a váš server.

Rychlost serveru ukazují asi všechny používané nástroje – PageSpeed Insights, Lighthouse nebo WebpageTest (jako „First Byte“.


## Událost DOM Content Loaded (DCL) {#DCL}

Událost `DOMContentLoaded` se v JavaScriptu použí, když byl úvodní HTML dokument stažen a rozparsován. Nečeká se na žádné další prvky – CSS, JS, obrázky nebo `iframe`.

Metriku uvidíte například v záložce Network Chrome DevTools jako modrou čáru. Ukazuje ji také online verze PageSpeed Insight v nových reportech vytažených ze sběru nad reálnými uživateli. Zatím ale jen u větších webů.

Je samozřejmě dobré ji optimalizací posunovat směrem k nule, ale nicmoc vám o uživatelském prožitku neřekne.

Nicméně je prokázáno, že lepší časy DCL [korelují s nížšími „bounce rate“](https://developers.google.com/speed/docs/insights/faq#speedmetrics) v analytických nástrojích. Jasně – čím rychleji se vám stránka zobrazí, tím méně pravděpodobně s ní ztratíte trpělivost.


## Událost First Paint (FP) {#FP}

Moment, kdy browser vyrenderuje cokoliv, co je vizuálně odlišné od obrazovky, kterou uživatel viděl před navigací. 

Například tedy když vidí výsledky vyhledávání na Google a klikne na položku s vaším webem. First Paint vzniká ve chvíli, kdy uživatel vidí něco jiného než výsledky vyhledávání.

Odpovídá na nevyřčenou otázku uživatele „děje se to?“

Podobnou hodnotu umí zobrazit jen WebpageTest. Blízko je jeho hodnota „Start Render“. V timeline přehledu ji ukazuje jako tmavě zelenou čáru. V timeline přehledu také ukazuje světle zelenou čarou ukazuje „RUM First Paint“.


## Událost First Contentful Paint (FCP) {#FCP}

Vzniká ve chvíli, kdy uživatel vidí první verzi hlavního obsahu stránky. Čím lepší čas, tím [větší šance udržet aktivitu uživatele](https://developers.google.com/speed/docs/insights/faq#speedmetrics).

Když vezmu příklad eshopu a detailu produktu: First Contentful Paint nastává ve chvíli kdy uživatel vidí název produktu, jeho nejdůležitějí popis, cenu a hlavní obrázek.

Hlavním obsahem je samozřejmě pro každou stránku něco jiného – text, obrázek, SVG nebo klidně `<canvas>`.

Je důležitý pro informování uživatele kladoucího si otázku „je to užitečné?“. 

FCP zobrazuje Lighthouse od Google pod názvem „First Meaningful Paint“.


## Událost Time to Interactive (TTI) {#TTI}

Chvíle, kdy je stránka renderovaná a zároveň schopná spolehlivě reagovat na uživatelský vstup.

Kdy stránka spolehlivě reaguje na uživatelský vstup? Když se načetly a spustily JavaScripty, které jsou k tomu potřeba. A když prohlížeč není „zaseknutý“ nebo „nalaguje“. Odborně vzato nesmí být jeho vykreslovací jádro zatíženo dlouhotrvajícími úkoly. „[Long task](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics#long_tasks)“ je definován jako zaseknutí vykreslovacího jádra na více než 50 ms.

TTI je odpovědí na otázku uživatele „je to použitelné?“. 

TTI jsou vlastně dvě různé metriky:

- [Consistently Interactive](https://developers.google.com/web/tools/lighthouse/audits/consistently-interactive), kterou ukazuje Lighthouse. Ta nepočítá s žádnými prodlevami v interakci se stránkou. Musí být vykreslená a reagující podle výše uvedených podmínek.
- [First Interactive](https://github.com/WPO-Foundation/webpagetest/blob/master/docs/Metrics/TimeToInteractive.md), kterou uvádí WebpageTest. První moment, kdy stránka může reagovat na uživatelské vstupy. Počítá se ale s možnými prodlevami, protože některé části stránky se dále stahují.


## Událost Load {#Load}

Událost, která indikuje, že prohlížeč stáhl celé  HTML i všechny v něm odkazované prvky - CSS, JS, obrázky nebo `iframe`.

V JavaScriptu na ni můžeme čekat takto:

```javascript
window.addEventListener("load", function(event) { … });
```

Je to tradičně nejpoužívanější metrika. Nic proti ni a vylepšování jejich hodnot. Zhola nic vám ale neřekne o uživatelském prožitku. Když například bude totiž stránka zobrazená, interaktivní (a už dávno konzumovaná uživatelem) a na pozadí ještě stahuje velký obrázky někde do patičky, uživatel o tom vlastně vůbec neví.

Metriku uvidíte například: v záložce Network Chrome DevTools jako červenou čáru. Ale nějak ji uvádějí vlastně všechny měřící nástroje.

Zajímavou podobu má v Google Analytics. Ty ukazují „průměrnou dobu načítání stránky“ pro různé uživatelské kontexty (zařízení, prohlížeče nebo geografické umístění). Hlavně jde o reálné uživatele, takže nějaký smysl tuhle metriku v Analytics má.

V Analytics je [přesně definována](https://support.google.com/analytics/answer/2383341?hl=cs) takhle: 

> Průměrná doba (v sekundách), kterou trvá načtení stránky od spuštění zobrazení stránky (tj. kliknutí na odkaz vedoucí na stránku) do úplného načtení v prohlížeči.

*TODO: Vývojáři, vy si v Analytics nainstalujte Technical Performance Dashboard, který vše ukazuje pěkně na jednom místě.*

*TODO: Článek o Analytics.*

Celkovou dobu načtení ukazují snad všechny nástroje. Z těch, které používám já jsou to Chrome DevTools, Lighthouse nebo WebpageTest, ten jako „Document Complete“. Ten poslední ukazuje ale těch metrik pro finalizaci dokumentu víc, takže si v tom pojďme udělat pořádek.

### WebpageTest.org: Load Time, Document complete, Fully loaded

Budu vycházet z vysvětlení [Patricka Meenana](https://www.webpagetest.org/forums/showthread.php?tid=10315):

- *Document complete* je moment, kdy prohlížeč spouští událost Load.
- *Fully loaded* je moment po události Load, kdy navíc síťová aktivita ustála alespoň na dvě vteřiny.
- *Load Time* je totéž jako Document complete, tedy událost Load. U mých testů se čísla vždy shodují.


## Speed Index {#SI}

Skóre, které ukazuje jak rychle je viditelný obsah stránky naplněn do stavu stoprocentního vykreslení.

Udává se v milisekundách. Čím nižší je, tím lépe. A je navázán na konkrétní technologický kontext – prohlížeč, šířku okna nebo typ připojení.

Tohle je jiná metrika než všechny ostatní. SpeedIndex neukazuje čas události, jde o celkové skóre stránky. Velmi dobře se hodí pro jednoduché porovnávání výsledků stránky v čase nebo poměření s konkurencí.

A je to také jediná metrika, která něco říká o uživatelském prožitku v čase. I proto ji mám tak rád.

Chcete-li být na sebe přísní, držte SpeedIndex pod 1000 bodů. Většině běžných webů bude ale stačit dostat se do pěti tisícové hranice na rychlosti 3G Slow.

*TODO: obrázek jak se počítá*

SI je známý především z WebpageTest.org. Nástroj Lighthouse ukazuje podobnou veličinu [Perceptual Speed Index](https://developers.google.com/web/tools/lighthouse/audits/speed-index).

Problémem SpeedIndexu je to, že se aktuálně počítá z video-záznamu průběhu načítání stránky. Nelze jej tedy použít pro sbírání dat od všech uživatelů, jen pro syntetické testy. Další problém je v tom, že čeká na vizuální „hotovost“ stránky. Pokud tedy na stránce máte animované prvky, například automatický karusel, asi vám SpeedIndex naroste do nebeských výšin. Ale i tak je ze všech metrik ta nejzajímavější.

Více o [Speed Indexu](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index).

