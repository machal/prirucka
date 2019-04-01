# Metriky rychlosti načítání

V metrikách a událostech, které se týkají načítání a vykreslování stránky je děsný nepořádek. Pokusím se trochu uklidit

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
<img src="../dist/images/original/pagespeed-insights-chrome-ux.jpg" alt="">
<figcaption markdown="1">
*Nástroj PageSpeed Insights zobrazuje údaje z přehledu uživatelského dojmu Chromu ([Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report/)), do kterého existuje i veřejný přístup*
</figcaption>
</figure>

Teď se budeme věnovat jednotlivým metrikám. Zatím většinou vznikají syntetickým měřením, ale neberu na to ohled.

## Jak jdou události v čase? {#v-case}

Většina rychlostních metrik (kromě Speed Indexu) jsou prostě události, které po splnění určitých podmínek vznikají na časové ose postupu vykreslování stránky.

| Metrika                                        |  Kdy vzniká?                  |
|:-----------------------------------------------|:------------------------------|
| [Time To First Byte (TTFB)](metrika-ttfb.md)   | Rychlost serveru a sítě       |
| [DOM Content Loaded (DCL)](udalost-dcl.md)     | Rozparsování HTML prohlížečem |
| [First Paint (FP)](metrika-fp.md)              | První vykreslení čehokoliv    |
| [First Contentful Paint (FCP)](metrika-fcp.md) | První vykreslení obsahu       |
| [First Meaningful Paint (FMP)](metrika-fmp.md) | První vykreslení obsahu       |
| [First Input Delay (FID)](metrika-fid.md)      |    |
| [Time to Interactive (TTI)](metrika-tti.md)    | První možnost interaktivity   |
| [Speed Index](metrika-speedindex.md)           | Vykreslení celého viewportu   |
| [Load](udalost-load.md)                        | Stažení všeho                 |

<figure>
<img src="../dist/images/original/metriky-rychlosti.jpg" alt="">
<figcaption markdown="1">
*Ukázka postupného vzniku událostí pro vykreslování stránky*
</figcaption>
</figure>

## Doporučení {#doporuceni}

Ano, já vím, je to trochu složité. Není ale asi potřeba, abyste si pamatovali metriky všechny a lpěli na nich. Zkusím vám na závěr doporučit jednoduchou strategii:

- Hlídejte si hlavně Speed Index, Time to First Byte (TTFB) a Load. První dvě vám ukáže nástroj [Lighthouse](lighthouse.md), který je také vestavěný v Chrome. Poslední metriku uvidíte v záložce „Network“ Chrome DevTools.
- Provnávejte výsledky vašich nejdůležitějších stránek s konkurencí. Viz můj [článek o rychlosti](rychlost-designeri.md) pro designéry a marketéry.
- Větší weby a budoucnost: RUM metriky a automatizace. Dívejte se po nástrojích, které vám měření zautomatizují. Hledejte řešení s měřením reálných uživatelů (RUM). Příkladem je třeba [SpeedCurve](https://speedcurve.com/).
- Pokud potřebujete optimalizovat, dívejte se do časové osy vykreslování v prohlížeči. Buď v Chrome DevTools nebo WebpageTest.org. Viz můj [článek o nástrojích](rychlost-nastroje.md).

<!-- AdSnippet -->

