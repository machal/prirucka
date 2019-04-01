# Metrika „Doba do načtení prvního bajtu“ (Time To First Byte, TTFB)

[Metrika rychlosti webu](metriky-rychlosti.md), která vzniká ve chvíli, kdy prohlížeč stáhne první bajt z vašeho HTML.

<figure>
<img src="../dist/images/original/metrika-ttfb.jpg" alt="TTFB">
<figcaption markdown="1">
*Obrázek: TTFB nebo taky „Time To First Byte“*
</figcaption>
</figure>

Ukazuje tedy rychlost vašeho serveru a backendové části aplikace. A taky samozřejmě rychlost sítě.

TTFB ukazují asi všechny pořádnější nástroje – [PageSpeed Insights](pagespeed-insights.md) (jako „dobu odezvy serverů“), [Lighthouse](lighthouse.md) nebo WebpageTest (jako „First Byte“).

Serverový čas tvoří skoro vždy tu menší část problému u pomalých webů – větší problém je obvykle v (ne)optimalizaci frontendu.

Nicméně i tak není dobré TTFB podceňovat: Důležitý je například pro [Crawl Budget vyhledávačů](https://www.contentkingapp.cz/akademie/crawl-budget/), hlavně u velkých webů.

TTFB byste měli i na pomalých připojeních držet co nejvíce pod půl vteřinou.
