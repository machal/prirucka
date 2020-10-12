# Metrika „Celkový čas blokování“ (Total Blocking Time, TBT)

[Metrika rychlosti webu](metriky-rychlosti.md), která udává celkový čas, ve kterém je vykreslená stránka neschopná reagovat na vstupy uživatele.

Přesněji vzato, TBT je celková doba mezi událostmi [First Contentful Paint (FCP)](metrika-fcp.md) a [Time to Interactive (TTI)](metrika-tti.md), po kterou bylo hlavní vlákno prohlížeče neschopné reagovat na vstupy uživatele díky provádění dlouchých úloh.

Prohlížeč je „blokován“ kdykoli musí zpracovat [„Long task“ (dlouhý úkol)](https://w3c.github.io/longtasks/). Jde o úlohu, která běží na hlavním vlákně déle než 50 milisekund. Říkáme, že hlavní vlákno je „blokováno“, protože prohlížeč nemůže probíhající úkol přerušit. Uživatel prostě kliká, tapá a reakce rozhraní má zpoždění.

<!-- AdSnippet -->

Obvykle je TBT výstupem pouze nástrojů pro syntetická měření, jako je [Lighthouse](lighthouse.md) nebo WebpageTest.

Jak jste asi pochopili, jde o metriku, která odpovídá na otázku: „Jak moc špatně napsaný JavaScript na stránce je?“. Pro tyhle účely už ale máme jinou metriku, ne?

## Srovnání s Time To Interactive (TTI) {#tti}

[TTI, čas do interaktivity](metrika-tti.md) označuje stránku za „spolehlivě interaktivní“, pokud je v hlavním vláknu alespoň pět sekund bez dlouhých úkolů.

Takže například blokující čas (TBT) trvající dohromady 100 ms, který je rozprostřený do 10 vteřin, může metriku TTI zhoršit úplně stejným způsobem, jak 10 vteřin trvající jediný „long task“.

Tolik ke vztahu TTI s TBT. Čas do interaktivity, TTI, má při analýze JavaScriptu vloženého do stránky jednu nevýhodu – odvozuje se z [FCP, prvního vykreslení stránky](metrika-fcp.md).

Takže například zpoždění serverového času ([TTFB](metrika-ttfb.md)) se do TTI promítně negativně, aniž by se nutné zhoršila javascriptová čísla na stránce.

Metrika TBT je od jiných vlivů izolována, proto se na ni při analýze javascriptového výkonu doporučuji zaměřit.

## Jak TBT změřit? Jde to jen synteticky {#mereni}

Total Blocking Time je možné snadno změřit [nástroji](rychlost-nastroje.md) pro syntetické testy webů.

<!-- TODO obrázek -->

Výběr z nástrojů pro změření TBT:

### Lighthouse a PageSpeed Insights {#mereni-lighthouse}

[Lighthouse](lighthouse.md) (nebo jeho nástavba [PageSpeed Insights](pagespeed-insights.md)) zobrazují hodnotu mezi šesti měřenými hodnotami (_na obrázku číslo 1_). Do celkového [skóre rychlosti](metrika-lps.md) se TBT spolu [s LCP](metrika-lcp.md) projevuje největším podílem – 25 %.

### Chrome DevTools {#mereni-devtools}

Vývojářské nástroje prohlížeče Chrome v záložce „Performance“ zobrazí jak jednotlivé dlouhé úkoly (_na obrázku číslo 2_), tak celkový čas blokování hlavního vlákna prohlížeče (_na obrázku číslo 3_).

Zde se tedy velmi dobře hledají také příčiny těchto nekalých dlouhých úloh, blokujících možnost interaktivity od uživatele.

### WebpageTest {#mereni-webpagetest}

Ve WebpageTestu najdete TBT jako jednu z nejdůležitějších metrik. Krátce po jejím zveřejnění zareagoval tvůrce tohoto skvělého nástroje Pat Meenan tak, že bylo jasné, že si TBT hned velmi oblíbil:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Just swapped out &quot;First CPU Idle&quot; for &quot;Total Blocking Time&quot; in the main WebPageTest results UI. TBT is a much better indicator of the jankiness of the UI after it has rendered.<br><br>Something like FCP + TBT would make for a good top-level perf number that includes both.</p>&mdash; Patrick Meenan (@patmeenan) <a href="https://twitter.com/patmeenan/status/1256267827478175746?ref_src=twsrc%5Etfw">May 1, 2020</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### A co u reálných uživatelů? {#mereni-rum}

Abyste získali interaktivitu stránky mezi reálnými uživateli (RUM, Google říká „v poli“), měli byste namísto měřit zpoždění prvního vstupu – [First Input Delay (FID)](metrika-fid.md).

## Ideální hodnoty – zkuste se vejí to 300 ms {#idealni-hodnoty}

Podle Googlu byste se měli s TBT na průměrném mobilním zařízení vejít vždy do 300 milisekund.

U většiny webů to bude velký problém, poněvadž s JavaScriptem se na stránkách vůbec ale vůbec nešetří.

Pojďme se ale mrknout na jednotlivé hranice, které pro vysvědčení [používá nástroj Lighthouse](https://web.dev/lighthouse-total-blocking-time/#how-lighthouse-determines-your-tbt-score):

|  Hodnota TBT v ms  | Vysvědčení (barva)   |
|--------------------|----------------------|
| 0 - 300            | Vyhovuje (zelená)    |
| 300 - 600          | Vyžaduje zlepšení (oranžová)  |
| 600 a více         | Pomalý (červená)     |

## Jak TBT optimalizovat? {#optimalizace}

Cílem je zmenšit množství JS ve stránce. Pokročilí mohou hledat konkrétní „long tasks“ v DevTools a záložce Performance.

Rady zatím vezmu jen velmi stručně a časem se k nim třeba ještě vrátím:

- Eliminujte množství JS vkládaného do stránky.
- Nepoužívejte zbytečné knihovny.
- Hledejte, které kód je zodpovědný za long-tasks v DevTools.

Nástroj Lighthouse s ohledem na optimalizaci Total Blocking Time radí:

- Minimalizujte používání kódu od třetích stran (Rada Lighthouse v originále zní „Reduce the impact of third-party code“).
- Omezte dobu provádění JavaScriptu („Reduce JavaScript execution time“).
- Minimalizuje práci v hlavním podprocesu („Minimize main thread work“).
