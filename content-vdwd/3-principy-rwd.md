# 3 základní technické principy responzivního designu

Vzpomínáte si jak jsem vám v první kapitole přiznal, že – bráno do důsledků – v knize nepíšu o responzivním,  ale adaptivním webdesignu?

Původní definice responzivního designu pochází z roku 2010, hlavy a pera Ethana Marcotteho. A je to děsně jednoduchá, technicistní myšlenka:

1. Udělejte pružný layout.
2. Doplňte to pružnými obrázky.
3. Přidejte hranice změn layoutu (Media Queries). 

Je to myslím nejsdílenější článek v historii webdesignu, ale když už vlastníte tuhle knihu, vlastně ho ani nepotřebujete. Pokud jste ale dosud nepřispěli ke krásným statistikám jeho čtenosti, udělejte prosím pěkně panu Marcottemu radost. On si to zaslouží, protože to vymyslel a napsal tak skvěle, že si dnešní webdesign bez „responzivnosti“ už ani neumíme představit. [alistapart.com/article/responsive-web-design](http://alistapart.com/article/responsive-web-design)

![](dist/images/original/vdwd/principy-rwd.png)

*Obrázek: 3 principy responzivního designu: pružný layout, pružné obrázky, Media Queries.*

## 1. Pružný layout

Ethan Marcotte psal článek a pak knihu v době, kdy jsme měli Web přeplněný weby připravenými pouze pro desktop. Skoro všechny měly fixní šířku layoutu. Ach, bolí mě už jen ta představa! 

Dnes už bych nikomu od návrhu pro velké displeje začínat nedoporučoval jak píšu v části o Mobile First. Tehdy ovšem první věc, co Marcotte a jeho tým museli zbourat bylo něco jako Stalinův pomník tehdejšího webdesignu – zbourat fixní layout. O responzivním layoutu budu ještě psát.

## 2. Pružné obrázky

Když už máte pružný layout, musíte mu přizpůsobit elementy vevnitř. První věc, která vám ze zmenšeného layoutu vypadne budou obrázky a další mediální obsah.

## 3. Přidejte hranice změn layoutu (Media Queries)

Pro některé tablety stačilo provést předchozí dva kroky. Co ale menší mobily? Tam pružný layout nepomůže. Musíme tedy změnit layout nebo ho úplně zrušit. Pomohou nám k tomu dotazy na média, Media Queries.

