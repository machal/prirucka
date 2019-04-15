# Metrika „Index rychlosti“ (Speed Index, SI)

[Metrika rychlosti webu](metriky-rychlosti.md), která ukazuje jak rychle je viditelný obsah stránky naplněn do stavu stoprocentního vykreslení.

Čím nižší je, tím lépe. I Speed Index je navázán na konkrétní technologický kontext – prohlížeč, šířku okna nebo typ připojení.

<figure>
<img src="../dist/images/original/metrika-si.jpg" alt="SpeedIndex">
<figcaption markdown="1">
*Obrázek: Kdy vzniká TTI nebo taky „Time To Interactive“*
</figcaption>
</figure>

Tohle je trochu jiná metrika než všechny ostatní. SpeedIndex neukazuje čas události, jde o celkové skóre stránky. Velmi dobře se hodí pro jednoduché porovnávání výsledků stránky v čase nebo poměření s konkurencí.

A je to také jediná metrika, která něco říká o uživatelském prožitku v čase.

<!-- AdSnippet -->

Chcete-li být na sebe přísní, držte SpeedIndex pod dvěma vteřinami.

<figure>
<img src="../dist/images/original/speed-index.jpg" alt="">
<figcaption markdown="1">
*1) Vezměme jeden web se dvěmi různými postupy vykreslování. 2) Do grafu si vykreslíme postup vykreslování obou případů. Ve vodorovné ose je čas, ve svislé procenta vykreslení viditelné části obrazovky. 3) Speed Index je plocha nad průběhem grafu. (Zdroj obrázku: WebpageTest.org)*
</figcaption>
</figure>

Speed Index je známý především z WebpageTest.org. Nástroj Lighthouse ukazuje podobnou veličinu [Perceptual Speed Index](https://developers.google.com/web/tools/lighthouse/audits/speed-index).

Problémem Speed Indexu je to, že se aktuálně počítá z video-záznamu průběhu načítání stránky. Nelze jej tedy použít pro sbírání dat od všech uživatelů, jen pro syntetické testy. Další problém je v tom, že čeká na vizuální „hotovost“ stránky. Pokud tedy na stránce máte animované prvky, například automatický karusel, asi vám Speed Index naroste do nebeských výšin. Ale i tak je to ze všech metrik ta nejzajímavější.

Více o [Speed Indexu](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index).

<!-- AdSnippet -->
