# Tři základní technické principy responzivního designu

Původní definice responzivního designu pochází z roku 2010, hlavy a pera Ethana Marcotteho. A je to děsně jednoduchá, technicistní myšlenka.

1. Udělejte pružný layout.
2. Doplňte to pružnými obrázky.
3. Přidejte podmínky pro změny layoutu, Media Queries. 

„Responsive Web Design“ na A List Apart je asi nejsdílenější článek v historii webdesignu a ke knížce vám asi nic moc nového neřekne. Odkázat na něj ale musím. Ethan Marcotte si můj respekt zaslouží, protože to vymyslel a napsal tak skvěle, že si dnešní webdesign bez „responzivnosti“ už ani neumíme představit. [alistapart.com/article/responsive-web-design](http://alistapart.com/article/responsive-web-design)

![](dist/images/original/vdwd/principy-rwd.png)

*3 principy responzivního designu: pružný layout, pružné obrázky, Media Queries.*

## 1. Pružný layout

Ethan Marcotte psal článek a pak knihu v době, kdy jsme měli internet přeplněný weby připravenými pouze pro desktop. Skoro všechny měly fixní šířku layoutu. Ach, bolí mě už jen ta představa! 

Dnes už bych nikomu od návrhu pro velké displeje začínat nedoporučoval. Rozebírám to v textu [o Mobile First](mobile-first.md). Tehdy to ale nikdo jinak nedělal. V roce 2010 tedy musel Marcotte a jeho tým zbourat něco jako Stalinův pomník tehdejšího webdesignu layout fixních rozměrů optimalizovaný pro velké displeje. 

O [responzivním layoutu](responzivni-layout.md) píšu v samostatné kapitole.

## 2. Pružné obrázky

Když už máte pružný layout, musíte mu přizpůsobit elementy vevnitř. První věc, která vám ze zmenšeného layoutu vypadne budou obrázky. Pružnými obrázky se společně budeme zabývat hned v další podkapitole.  

## 3. Podmínky pro změny layoutu (Media Queries)

V rámci úprav imaginárního „desktopového“ webu pro tehnedjší tablety by obvykle stačilo provést předchozí dva kroky. Co ale malé mobily? Tam pružný layout nepomůže. Musíme tedy změnit layout nebo ho úplně zrušit. Pomohou nám k tomu dotazy na média. I [Media Queries](css3-media-queries.md) si spolu rozpitváme později, v kapitole o layoutu.

<div class="ebook-only" markdown="1">
  Tímto končíme prohlídku naší kuchyně. Nejzákladnější surovinu, vývar responzivního designu, máme. Další podkapitoly už budou detailně rozebírat responzivní přizpůsobování veškerého možného  netextového obsahu.
</div>


