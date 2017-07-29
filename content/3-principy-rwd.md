# Marcotteho responzivní design

Původní definice responzivního designu pochází z roku 2010, hlavy a pera Ethana Marcotteho. A je to nadmíru jednoduchá, technicistní myšlenka.

1. Udělejte pružný layout.
2. Doplňte to pružnými obrázky.
3. Přidejte podmínky pro změny layoutu, Media Queries. 

Článek z A List Apart nesoucí titul „Responsive Web Design“ je asi nejsdílenější článek v historii webdesignu a k téhle knížce vám asi nic moc nového neřekne. Odkázat na něj ale musím. Ethan Marcotte má můj respekt, protože to vymyslel a zformuloval tak skvěle, že si dnešní webdesign bez „responzivnosti“ už ani neumíme představit. [alistapart.com/article/responsive-web-design](http://alistapart.com/article/responsive-web-design)

<figure>
<img src="dist/images/original/vdwd/principy-rwd.jpg" alt="3 principy responzivního designu">
<figcaption markdown="1">    
*Tři principy responzivního designu: Pružný layout, pružné obrázky, Media Queries*
</figcaption> 
</figure>


## 1. Pružný layout

Ethan Marcotte psal článek (a pak ještě knihu) v době, kdy byl nebohý internet přeplněný weby připravenými pouze pro počítače. Skoro všechny měly fixní šířku layoutu, nastavenou v konkrétní pixelové hodnotě. No jen si to představte. Ach, bolí mě už jen to pomyšlení! 

Pružný layout naproti tomu mění rozměry podle velikosti okna. Nejčastěji je definovaný v procentech ze šířky okna.

Dnes už bych nikomu nedoporučoval vymýšlet weby jen pro velké displeje. Tehdy to ale nikdo jinak nedělal. V roce 2010 tedy musel Marcotte a jeho tým zbourat něco jako Stalinův pomník tehdejšího webdesignu: Layout fixních rozměrů optimalizovaný pro velké displeje. O [layoutu](responzivni-layout.md) píšu v samostatné kapitole.

## 2. Pružné obrázky

Když už máte pružný layout, musíte mu přizpůsobit elementy vevnitř. První věc, která vám ze zmenšeného layoutu vypadne, budou obrázky. O [obrázcích](kap-media.md) a dalších médiích pak v samostatné kapitole.

## 3. Podmínky pro změny layoutu (Media Queries)

Představte si, že na tehdejší počítačový web nasadíte pružný layout a pružné obrázky. Máte? Teď mírně zmenšete okno prohlížeče. Vše funguje hezky, že? Co když ale okno zmenšíte opravdu hodně, řekněme na velikost malých mobilů? Tam pružný layout nepomůže. Musíme tedy změnit layout nebo ho úplně zrušit. Pomohou nám k tomu [Media Queries](css3-media-queries.md), které si spolu rozpitváme později, v kapitole o layoutu.

<div class="ebook-only" markdown="1">
  Tímto končíme prohlídku naší kuchyně. Nejzákladnější surovinu, vývar responzivního designu, máme. Další podkapitoly už budou detailně rozebírat responzivní přizpůsobování veškerého možného  netextového obsahu.
</div>

Principy responzivního webdesignu by se daly ještě zjednodušit. Takhle jej vysvětluji na školeních:

> Vložte obsah do prohlížeče. Zvětšujte nebo zmenšujte okno. A odstraňujte problémy, které vidíte.

Ten bonmot je překvapivě pravdivý. Při zmenšování nebo zvětšování okna se musíte vypořádat s nepružnými médii, obsahu dát layoutový rámec, vyřešit rychlost načítání…
