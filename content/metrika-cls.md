# Metrika „Kumulativní posun layoutu“ (Cumulative Layout Shift, CLS)

Metrika, která udává stabilitu vzhledu stránky během vykreslování.

Jedná se o jednu [z metrik rychlosti webu](metriky-rychlosti.md), i když v tomto případě bychom mohli mluvit spíše obecněji o metrikách uživatelském zážitku (UX).

<!-- AdSnippet -->

Metrika Cumulative Layout Shift je velmi důležitá, protože je součástí [Core Web Vitals](web-vitals.md) a zohledňuje se v rámci signálů [Google Page Experience](google-page-experience.md).

CLS udává součet posunů layoutu (*layout shift*) v rámci nejhoršího pětivteřinového okna během používání stránky.

Vašim cílem je tedy zajistit co nejvyšší vizuální stabilitu.

## Problémy, které řeší {#problemy}

Všichni to známe. Stránka vypadá, že je vykreslená… už už se chystáme kliknout… ale v tom se spustí externí skript, posune nám rozvržení a my klikáme na reklamu.

Vtipně to popisuje následující video od autorů metriky z Googlu:

<div class="rwd-media">
  <video muted controls width="1316" height="1020">
    <source src="https://res.cloudinary.com/vzhurudolu-cz/video/upload/v1592182312/vzhurudolu-video/layout-instability2_p3ovza.mp4"
      type="video/mp4">
  </video>
</div>

To, že stránky během vykreslování „poskakují“ není nic nového ani nečekaného. Vyplývá to z asynchronní povahy některých prvků webu. Do stránek se totiž vkládají až po prvotním vykreslení.

Potíže může dělat například:

* webový font, který se nahrazuje systémové písmo,
* obrázek nebo video bez definovaných rozměrů,
* komponenta třetí strany, která se vykreslí pozdě a ještě mění velikost
* špatně provedené animace v CSS

Na možné problémy a jejich řešení se ještě v textu podíváme. Nejprve ale něco ke způsobu počítání CLS.

## CLS skóre {#skore}

Nástroje měřící Cumulative Layout Shift vrací číslo mezi `0` a `1`. Čím je hodnota nižší, tím lépe.

Z textu o [Web Vitals](web-vitals.md) už víte, že metriky mají tři různé intervaly hodnot. Takto je to u CLS:

<div class="rwd-scrollable f-6" markdown="1">

| Hodnota LCP        |  Mobil   |  Desktop  |
|:-------------------|---------:|----------:|
| Dobrá              |  ≤ 0,1   |  ≤ 0,1    |
| Vyžaduje zlepšení  |  ≤ 0,25  |  ≤ 0,25   |
| Špatný             |  > 0,25  |  > 0,25   |

</div>

Vašim cílem tedy je dostat se pod hodnotu `0,1` nebo v horším případě nepřekročit `0,25`.

V nástrojích [Lighthouse](lighthouse.md) nebo [PageSpeed Insights](pagespeed-insights.md) se metrika CLS do [celkového skóre (LPS)](metrika-lps.md) projevuje váhou 15 %.

<figure>
<img src="../dist/images/original/metrika-cls.png" width="1600" height="450" alt="Cumulative Layout Shift">
<figcaption markdown="1">
*Obrázek: Metrika CLS.*
</figcaption>
</figure>

Ideální je samozřejmě měřit CLS na celé skupině vašich návštěvníků, například pomocí [Chrome UX Reportu](chrome-ux-report.md). Ten vám pro vaši doménu vrátí 75. percentil hodnot CLS u všech shlédnutí stránek.

<!-- AdSnippet -->

## Jak se CLS počítá? {#pocitani}

Cumulative Layout Shift původně představoval součet všech posunů layoutu během celého používání stránky.

V [roce 2021](https://web.dev/evolving-cls/) se ale výpočet pro potřeby Web Vitals změnil. Autoři z Google to popisují takto:

> Maximální okno relace omezené na 5 sekund se sekundovou mezerou.

No tak díky. Osobně mi trvalo týdny, než jsem tuto definici rozklíčoval. Podívejte se na obrázek a já se vám to pokusím vysvětlit.

<figure>
<img src="../dist/images/original/metrika-cls-windows.jpg" width="1600" height="450" alt="Cumulative Layout Shift: okna">
<figcaption markdown="1">
*Obrázek: Nové počítání metriky CLS. Vezme se jen jedno, nehorší okno. Zde Session Window 1.*
</figcaption>
</figure>

Následuje dekódování šifer:

1. Nechtěné posuny (layout shifty) se počítají vždy do oken relací (session window) o délce maximálně pět vteřin.
2. Pokud nastane vteřina bez posunů, okno se ukončí dříve než po pěti vteřinách.
3. V rámci celého trvání návštěvy konkrétního URL se pak vybere jen to nejhorší okno (zde hned to první). To se uvede jako CLS pro tuto stránku.

Tento nový výpočet má zamezit zbytečně velkým hodnotám CLS u návštěv, kde je uživatel dlouho na jednom URL. Myslím, že problém zde byl hlavně s nekonečným scrollováním a podobným kejklemi.

Na většinu stránek se tento nový výpočet nijak neprojevil.

Pokud by vás snad zajímaly detaily o tom, jak se tato metrika přesně počítá, zavítejte na [web.dev](https://web.dev/cls/#layout-shifts-in-detail), kde to lidé z Googlu rozebírají.

Pro potřeby počítání této metriky, ale také vlastních měření vzniká [Layout Instability API](https://wicg.github.io/layout-instability/) s rozhraním [LayoutShift](https://developer.mozilla.org/en-US/docs/Web/API/LayoutShift), které má podporu v prohlížečích vycházejících z Chrome. To jen, pokud by vás to nějak moc zajímalo.

## Jak to měřit? {#mereni}

CLS je možné získat jak ze syntetických měření, tak od reálných uživatelů (RUM nebo „data pole“).

<figure>
<img src="../dist/images/original/layout-stability.png" width="1600" height="900" alt="Web layoutstability.rocks">
<figcaption markdown="1">
*Obrázek: Ideální stav. Web [layoutstability.rocks](https://layoutstability.rocks/) vám CLS změří  jednoduše a rychle.*
</figcaption>
</figure>

Jako vždy se i tady mohou výsledky i výrazně lišit, protože nástroje pro syntetická měření umí CLS získat pouze z úvodního načtení stránky, kdežto uživatelská měření obvykle měří celý průběh používání stránky.

Výsledky se liší i v rámci nástrojů sledujících reálné uživatele (RUM). Náš oblíbený [SpeedCurve](speedcurve.md) například počítá CLS také jen pro první viewport.

### Syntetická měření {#mereni-synteticka}

CLS umí strojově vytáhnout například tyto nástroje:

* [Web layoutstability.rocks](https://layoutstability.rocks/) (jednoduchý kalkulátor)
* [PageSpeed Insights](pagespeed-insights.md) (metriky od Lighthouse - „Laboratorní data“)
* [WebpageTest](https://www.webpagetest.org/)  
* [Lighthouse](lighthouse.md)

### Měření uživatelů {#mereni-uzivatelu}

Data od reálných uživatelů vám poskytnou například následující nástroje:

* [PageSpeed Insights](pagespeed-insights.md) („Data pole“)
* [Search Console](google-search-console.md) (report „Core Web Vitals“)
* [Chrome User Experience Report](chrome-ux-report.md)
* [Rozšíření pro Chrome „Web Vitals“](https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma?hl=en)  
* [JS knihovna web-vitals](https://github.com/GoogleChrome/web-vitals) (možnost implementace vlastních měření)

Na závěr se podíváme na obecné tipy, jak vylepšit špatné CLS.

## Optimalizace CLS {#optimalizace}

Zamezte poskakování při vykreslování. Zaměřte se na to, abyste v layoutu rezervovali prostor obsahu, který se bude vykreslovat asynchronně – webfontům, obrázkům, videím, komponentám vykreslovaným [asynchronním JS](js-async-defer-module.md):

* Obrázkům nastavte vždy poměr stran pomocí [parametrů `width` a `height`](img-pomer-stran.md).
* Dalšímu asynchronnímu obsahu jako je video, prvek iframe nebo komponenty vykreslované pomocí JS [držte prostor](css-pomer-stran.md) pomocí technik jako je [trik s paddingem](padding-trik.md).
* Zajistěte, aby vlastní font nezpůsobil při nahrazování výchozího písma výrazné překreslení stránky.
* Animujte vždy CSS vlastnosti, které se umí [renderovat pomocí GPU](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/), takže např. `transform:translateY()` namísto `top`.
* Na místo indikátorů načítání používejte [tzv. „skeletony“](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a), které napodobují obsah, na který uživatel čeká. Ale buďte s nimi opatrní, špatná implementace skeletonů z mé zkušenosti často CLS ještě zhorší.

Fanoušky [AMP](amp.md) by mohlo zajímat, že tento framework je stavěný od samých základů tak, aby se [CLS rovnalo nebo blížilo nule](https://blog.amp.dev/2020/04/16/cumulative-layout-shift-in-amp/).

Další obecná doporučení v angličtině od Googlu jsou na [web.dev](https://web.dev/optimize-cls/).

<!-- AdSnippet -->
