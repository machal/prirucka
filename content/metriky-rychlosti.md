# Metriky rychlosti načítání

V metrikách a událostech, které se týkají načítání a vykreslování stránky je děsný zmatek. Pokusím se trochu uklidit. 

Bude to užitečné hlavně pro ty z vás, kteří obor [rychlosti načítání](https://www.vzhurudolu.cz/rychlost-nacitani) trochu více sledujete. Ostatní pošlu na konec článku do [závěrečných doporučení](#doporuceni).

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=fR9n_yi050g">Metriky rychlosti načítání</a> ~ O tématu jsem v březnu 2018 přednášel také na minikonferenci Frontendisti.cz
</p>

Na začátek bych rád zmínil, že metriky se dají získat dvěma způsoby:

### Syntetická měření {#syntetika} 

Na web pošlete robota, který simuluje reálného uživatele, jeho konkrétní prohlížeč, rozlišení, rychlost internetu a tak dále. Tohle je nyní převládající technika. Pracují tak všechny [nástroje](rychlost-nastroje.md), o kterých jsem psal: [PageSpeed Insights](pagespeed-insights.md), WebpageTest.org a další.

<!-- AdSnippet -->


### Měřením reálných uživatelů (RUM = Real User Monitoring) {#rum}

Daleko lepší způsob metodika: Do stránky si vložíte skript, který měří vaše reálné uživatele. Rozumné analytické nástroje to už dnes umí, jen jsou nastavené spíše na velké weby a firmy. Prostě na ně potřebujete peněz jako šlupek. U velkých webů vám RUM metriky dnes ale zobrazí i PageSpeed Insights. 

<figure>
<img src="dist/images/original/pagespeed-insights-chrome-ux.jpg" alt="">
<figcaption markdown="1">    
*Nástroj PageSpeed Insights zobrazuje údaje z přehledu uživatelského dojmu Chromu ([Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report/)), do kterého existuje i veřejný přístup*
</figcaption> 
</figure>

Teď se budeme věnovat jednotlivým metrikám. Zatím většinou vznikají syntetickým měřením, ale neberu na to ohled.


## Jak jdou události v čase? {#v-case}

Většina rychlostních metrik (kromě Speed Indexu) jsou prostě události, které po splnění určitých podmínek vznikají na časové ose postupu vykreslování stránky.


| Metrika                             |   Stručná definice |
|:------------------------------------|:-------------------|
| [Time To First Byte (TTFB)](#TTFB)  | Rychlost serveru a sítě  |
| [DOM Content Loaded (DCL)](#DCL)    | Rozparsování HTML prohlížečem |
| [First Paint (FP)](#FP) 				  | První vykreslení čehokoliv  |
| [First Contentful Paint (FCP)](#FCP)| První vykreslení obsahu  |
| [Time to Interactive (TTI)](#TTI)   | První možnost interaktivity |
| [Speed Index](#SI)                  | Celkový průběh vykreslování |
| [Load](#Load)                       | Načtení všeho       | 

<figure>
<img src="dist/images/original/metriky-rychlosti.jpg" alt="">
<figcaption markdown="1">    
*Ukázka postupného vzniku událostí pro vykreslování stránky. Zde je jako příklad Vzhůru dolů*
</figcaption> 
</figure>


## Událost Time To First Byte (TTFB) {#TTFB}

Vzniká ve chvíli, kdy prohlížeč stáhne první bajt z vašeho HTML. Ukazuje tedy rychlost vašeho serveru a backendové části aplikace. A taky samozřejmě rychlost sítě.

TTFB ukazují asi všechny pořádnější nástroje – PageSpeed Insights, Lighthouse nebo WebpageTest. Ten jako „First Byte“.

Serverový čas tvoří skoro vždy tu menší část problému u pomalých webů. Nicméně i tak není dobré ho podceňovat: Důležitý je například pro [Crawl Budget vyhledávačů](https://www.contentkingapp.cz/akademie/crawl-budget/), hlavně u velkých webů.

TTFB byste měli i na pomalých sítích držet pod jednu vteřinu. Ideální stav je co nejvíce pod půl vteřinou.


## Událost DOM Content Loaded (DCL) {#DCL}

Událost `DOMContentLoaded` v JavaScriptu vzniká, když byl hlavní HTML dokument stažen a rozparsován. Nečeká se na žádné další prvky – CSS, JS, obrázky nebo `<iframe>`.

Metriku uvidíte například pod záložkou „Network“ v DevTools prohlížečů Firefox nebo Chrome jako modrou čáru. Jak jsem zmiňoval, ukazuje ji také online verze PageSpeed Insight v nových reportech vytažených ze sběru nad reálnými uživateli. 

Je samozřejmě dobré ji optimalizací posunovat směrem k nule, ale nicmoc vám o uživatelském prožitku neřekne.

Je ale prokázáno, že lepší časy DCL [korelují s nížšími „bounce rate“](https://developers.google.com/speed/docs/insights/faq#speedmetrics) v analytických nástrojích. Dává to smysl. Čím rychleji se vám stránka zobrazí, tím méně pravděpodobně s ní ztratíte trpělivost.


## Událost First Paint (FP) {#FP}

Moment, kdy po kliknutí uživatele prohlížeč vyrenderuje cokoliv, co je vizuálně odlišné od stávající obrazovky. 

Předstame si třeba uživatelku, dívající se na výsledky vyhledávání Google. Následně díkybohu klikne na položku s vaším webem. First Paint vzniká ve chvíli, kdy uživatelka vidí něco jiného než výsledky vyhledávání.

FP odpovídá na nevyřčenou otázku uživatele: „Děje se to?“

Podobnou metriku umí zobrazit jen WebpageTest. Blízko je jeho hodnota „Start Render“. V timeline přehledu ji ukazuje jako tmavě zelenou čáru. V timeline přehledu také ukazuje světle zelenou čárou ukazuje „RUM First Paint“. 


## Událost First Contentful Paint (FCP) {#FCP}

Vzniká ve chvíli, kdy uživatel vidí první verzi hlavního obsahu stránky. Čím lepší čas, tím [větší šance udržet aktivitu uživatele](https://developers.google.com/speed/docs/insights/faq#speedmetrics).

Když vezmu příklad e-shopu a detailu produktu: FCP nastává ve chvíli kdy uživatel vidí název produktu a jeho nejdůležitějí textový popis.

Hlavním obsahem je samozřejmě pro každou stránku něco jiného – text, obrázek, SVG nebo klidně nějaký graf či video.

Událost je důležitá pro informování uživatele kladoucího si otázku „Je to užitečné?“.

FCP zobrazuje [Lighthouse](lighthouse.md) od Google pod názvem „First Meaningful Paint“.


## Skóre Speed Index {#SpeedIndex}

Skóre, které ukazuje jak rychle je viditelný obsah stránky naplněn do stavu stoprocentního vykreslení.

Čím nižší je, tím lépe. I Speed Index je navázán na konkrétní technologický kontext – prohlížeč, šířku okna nebo typ připojení.

<!-- AdSnippet -->

Tohle je jiná metrika než všechny ostatní. SpeedIndex neukazuje čas události, jde o celkové skóre stránky. Velmi dobře se hodí pro jednoduché porovnávání výsledků stránky v čase nebo poměření s konkurencí.

A je to také jediná metrika, která něco říká o uživatelském prožitku v čase. I proto ji mám tak rád.

Chcete-li být na sebe přísní, držte SpeedIndex pod 1 000 bodů. Většině běžných webů bude ale dnes stačit dostat se do pětitisícové hranice na rychlosti 3G Slow.

<figure>
<img src="dist/images/original/speed-index.jpg" alt="">
<figcaption markdown="1">    
*1) Vezměme jeden web se dvěmi různými postupy vykreslování. 2) Do grafu si vykreslíme postup vykreslování obou případů. Ve vodorovné ose je čas, ve svislé procenta vykreslení viditelné části obrazovky. 3) Speed Index je plocha nad průběhem grafu. (Zdroj obrázku: WebpageTest.org)*
</figcaption> 
</figure>

Speed Index je známý především z WebpageTest.org. Nástroj Lighthouse ukazuje podobnou veličinu [Perceptual Speed Index](https://developers.google.com/web/tools/lighthouse/audits/speed-index).

Problémem Speed Indexu je to, že se aktuálně počítá z video-záznamu průběhu načítání stránky. Nelze jej tedy použít pro sbírání dat od všech uživatelů, jen pro syntetické testy. Další problém je v tom, že čeká na vizuální „hotovost“ stránky. Pokud tedy na stránce máte animované prvky, například automatický karusel, asi vám Speed Index naroste do nebeských výšin. Ale i tak je to ze všech metrik ta nejzajímavější.

Více o [Speed Indexu](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index).



## Událost Time to Interactive (TTI) {#TTI}

Chvíle, kdy je stránka renderovaná a zároveň schopná spolehlivě reagovat na uživatelský vstup.

Ptáte se, kdy stránka reaguje *spolehlivě*? Je to v momentě, kdy se načetly a spustily javascripty, které jsou k tomu potřeba. A když prohlížeč není „zaseknutý“ nebo „nalaguje“. 

Odborně vzato nesmí být vykreslovací jádro prohlížeče zatíženo dlouhotrvajícími úkoly. „[Long task](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics#long_tasks)“ je definován jako zaseknutí vykreslovacího jádra na více než 50 ms.

TTI je odpovědí na otázku uživatele „Je to použitelné?“.

TTI jsou vlastně dvě různé metriky:

- [Consistently Interactive](https://developers.google.com/web/tools/lighthouse/audits/consistently-interactive), kterou ukazuje Lighthouse. Ta nepočítá s žádnými prodlevami v interakci se stránkou. Musí být vykreslená a reagující podle výše uvedených podmínek.
- [First Interactive](https://github.com/WPO-Foundation/webpagetest/blob/master/docs/Metrics/TimeToInteractive.md), kterou uvádí WebpageTest. První moment, kdy stránka může reagovat na uživatelské vstupy. Počítá se ale s možnými prodlevami, protože některé části stránky se dále stahují.


## Událost Load {#Load}

Poslední událost, která indikuje, že prohlížeč stáhl celé  HTML i všechny v něm odkazované prvky - CSS, JS, obrázky nebo `<iframe>`.

V JavaScriptu na ni můžeme čekat takto:

```javascript
window.addEventListener("load", function(event) { … });
```

Je to tradičně nejpoužívanější metrika. Nic proti ní a vylepšování jejich hodnot. Zhola nic vám ale neřekne o uživatelském prožitku. Když totiž například bude stránka zobrazená, interaktivní (a už dávno konzumovaná uživatelem) a na pozadí ještě stahuje velký obrázky někde do patičky, uživatel o tom vlastně vůbec neví. Přitom událost „Load“ může vycházet dost nehezky. Proto ji osobně rozhodně nepřeceňuji.

Metriku uvidíte například v záložkách Network vývojářských nástrojů Firefoxu nebo Chrome jako červenou čáru. Ale nějak ji uvádějí vlastně všechny měřící nástroje.

<figure>
<img src="dist/images/original/devtools-load.jpg" alt="">
<figcaption markdown="1">    
*Chrome DevTools s vyznačenou událostí Load (červená). Událost DOMContentReady je modrá*
</figcaption> 
</figure>

Zajímavou podobu má v Google Analytics. Ty ukazují „průměrnou dobu načítání stránky“ pro různé uživatelské kontexty (zařízení, prohlížeče nebo geografické umístění). Jde o reálné uživatele, takže nějaký smysl tahle metriku v Analytics má.

V Analytics je [přesně definována](https://support.google.com/analytics/answer/2383341?hl=cs) takhle: 

> Průměrná doba (v sekundách), kterou trvá načtení stránky od spuštění zobrazení stránky (tj. kliknutí na odkaz vedoucí na stránku) do úplného načtení v prohlížeči.

<div class="related" markdown="1">
- [Google Analytics: průvodce měřením pro webové vývojáře](https://www.vzhurudolu.cz/prirucka/google-analytics-vyvojari)
- [Google Analytics: průvodce pro přidání webu](https://www.vzhurudolu.cz/prirucka/google-analytics-pridani)
</div>

Celkovou dobu načtení ukazují snad všechny nástroje. Z těch, které používám já, jsou to Chrome DevTools, [Lighthouse](lighthouse.md) nebo WebpageTest. WebpateTest ale ukazuje těch metrik pro finalizaci dokumentu víc, takže si v tom pojďme udělat pořádek.

### WebpageTest.org: Load Time, Document complete a Fully loaded {#wpt-load}

Budu vycházet z vysvětlení [Patricka Meenana](https://www.webpagetest.org/forums/showthread.php?tid=10315):

- *Document Complete*  
  Moment, kdy prohlížeč spouští událost Load.
- *Fully Loaded*   
  Okamžik po události Load, kdy navíc síťová aktivita ustála alespoň na dvě vteřiny.
- *Load Time*  
  Totéž jako Document complete, tedy událost Load. U mých testů se čísla vždy shodují. Zatím tedy moc nevím, k čemu je to dobré.


## Doporučení na závěr {#doporuceni}

Ano, já vím, je to trochu složité. Není ale asi potřeba, abyste si pamatovali metriky všechny a lpěli na nich. Zkusím vám na závěr doporučit jednoduchou strategii:

- Hlídejte si hlavně Speed Index, Time to First Byte (TTFB) a Load. První dvě vám ukáže nástroj [Lighthouse](lighthouse.md), který je také vestavěný v Chrome. Poslední metriku uvidíte v záložce „Network“ Chrome DevTools.
- Provnávejte výsledky vašich nejdůležitějších stránek s konkurencí. Viz můj [článek o rychlosti](rychlost-designeri.md) pro designéry a marketéry.
- Větší weby a budoucnost: RUM metriky a automatizace. Dívejte se po nástrojích, které vám měření zautomatizují. Hledejte řešení s měřením reálných uživatelů (RUM). Příkladem je třeba [SpeedCurve](https://speedcurve.com/).
- Pokud potřebujete optimalizovat, dívejte se do časové osy vykreslování v prohlížeči. Buď v Chrome DevTools nebo WebpageTest.org. Viz můj [článek o nástrojích](rychlost-nastroje.md).

<!-- AdSnippet -->

