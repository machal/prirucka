# Metrika „První vykreslení obsahu“ (First Contentful Paint, FCP)

[Metrika rychlosti webu](metriky-rychlosti.md), která vzniká v okamžiku vykreslení prvního textu nebo obrázku (včetně těch natahovaných přes CSS vlastnost `background`).

Může vzniknout také vykreslením obsahu v prvku `canvas` nebo obsahu [SVG](svg.md), které mají jinou než bílou barvu. Metrika FCP vzniká i při vykreslení textu, který se zatím nerenderuje pomocí webfontů. Nečeká ale na jakýkoliv obsah prvku `iframe`.

Jde o důležitý milník, protože udržuje pozornost uživatele. Dává mu první informaci o tom, že se stránka opravdu načítá a že může začít konzumovat obsah stránky.

<figure>
<img src="../dist/images/original/metrika-fcp.jpg" alt="FCP">
<figcaption markdown="1">
*Kdy vzniká FCP nebo taky „First Contentful Paint“*
</figcaption>
</figure>

## Ideální hodnoty {#idealni-hodnoty}

Pojďme se mrknout na jednotlivé hranice, které pro vysvědčení [používá nástroj Lighthouse](lighthouse.md):

<div class="rwd-scrollable f-6" markdown="1">

| Hodnota LCP        |  Mobil   |  Desktop  |
|:-------------------|---------:|----------:|
| Dobrá              |  ≤ 1,8 s |  ≤  0,9 s |
| Vyžaduje zlepšení  |  ≤ 3,0 s |  ≤  1,6 s |
| Špatný             |  > 3,0 s |  >  1,6 s |

</div>

V nástrojích [Lighthouse](lighthouse.md) nebo [PageSpeed Insights](pagespeed-insights.md) se metrika FCP do [celkového skóre (LPS)](metrika-lps.md) projevuje váhou 10 %.

## Nástroje

Metriku FCP ukazují moderní měřící nástroje: [Lighthouse](lighthouse.md) a díky tomu i [PageSpeed Insights](pagespeed-insights.md).

Na časové ose je velmi blízko metrikám [FP](metrika-fp.md) (První vykreslení) a [FMP](metrika-fmp.md) (První smysluplné vykreslení).

Více informací o First Contentful Paint najdete [u Google](https://developers.google.com/web/tools/lighthouse/audits/first-contentful-paint).

<!-- AdSnippet -->
