# Jaký typ responzivní navigace vybrat?

Projdeme si osm návrhových vzorů pro navigace na responzivních webech. Od uživatelsky složitých a implementačně jednoduchých až po — ty dobré. 

Většina webů si ale vystačí se vzory dvěmi – upřesnostňujícím a zapínacím. Podívejme se nejprve na ně.

## Upřednostňování položek (Priority+)

Se zmenšující se šířkou obrazovky se zmenšuje i počet položek v navigaci. Na mobilních viewportech pak zůstává opravdu jen to důležité. Ostatní položky jsou obvykle dostupné na rozbalení.  Používá například aktuální [BBC News](http://www.bbc.com/news). Zajímavou variantou je nechat položky navigace na malých obrazovkách rolovat do strany. Používá třeba [Guardian](http://www.theguardian.com/international).

[Demo](https://justmarkup.com/lab/juma/nav/example2/). Technicky lze řešit i dost jednoduše [jen pomocí CSS](http://codepen.io/olach/details/adeMzP). 

## Zapínač (Toggle)

Celou navigaci prostě na malých displejích schováte do tlačítka. Nejčastěji s ikonou „hamburgeru“, odtud se tomuto návrhovému vzoru trochu nepřesně říká „hamburger navigace“. Je to nejpoužívanější typ responzivní navigace, jenže má svá úskalí a často je vhodnější použít jiné návrhové vzory. Nevýhodou je hlavně schování celé navigace, která tím přestává zastávat role, které ji na webu náleží. Více jsem schovávání a hamburgeru psal [v samostatném článku](mobilni-navigace-hamburger.md). 

Návrhový vzor „zapni/vypni“ zpopularizoval [Bootstrap](http://getbootstrap.com/) a najdete jej na většině dnešních responzivních webů. U nás je to v dobře psaní článku třeba [Globus](https://www.globus.cz/).

![Návrhové vzory pro responzivní navigace](dist/images/original/responzivni-navigace.jpg)

### Speciální varianta: zapínač s vyjížděním (Off Canvas)

Chování, které znáte z nativních aplikací a speciální varianta  vzoru. Aktuální [web Raiffeisen stavební spořitelny](https://www.rsts.cz/) používá vyjíždění zezhora.

Obvyklejší je ale vyjíždění ze strany, které je vhodné pro schovávání bohatého obsahu. V tom případě ale není dobrý nápad použít ikonu hamburgeru, která představuje seznam položek. [Demo](http://jasonweaver.name/lab/offcanvas/). Používá například aktuální [Respekt.cz](http://www.respekt.cz) nebo [Vodafone.cz](http://www.vodafone.cz/) 

Pro Off Canvas navigaci existuje mnoho variací, hezká je třeba ta, kde navigace vizuálně [zůstává ve vrstvě pod webem](http://responsivenavigation.net/examples/off-canvas-slide/always-off-canvas.html) a je aktivována gestem smýknutí.

## Víceúrovňové navigace

Oba výše zmíněné návrhové vzory jde samozřejmě použít i pro víceúrovňové navigace. [Demo](http://responsivenavigation.net/examples/multi-toggle/index.html).

Jak jste si sami asi v kůži uživatele na mnoha webech zkusili, na mobilních obrazovkách se takové navigace obvykle používají velmi špatně. Když to jde, snažte se víceúrovňové navigaci vyhnout. 

Tip: Většinu zde zmíněných návrhových vzorů si můžete zkusit na pěkném webu [Adventures in Responsive Navigation](http://responsivenavigation.net/). Ještě více příkladu i s ukázkami kódu najdete [u Brada Frosta](https://bradfrost.github.io/this-is-responsive/patterns.html#navigation).

## Konverze do jiného stylování

Pokud v navigaci máte obstojně málo položek, můžete je prostě zobrazit všechny a na malých obrazovkách jen upravit stylování. Třeba [zobrazit v mřížce](http://responsivenavigation.net/examples/clean-grid/index.html). 

## Přestylování a skok do patičky

Navigace je prostě v HTML někde dole a na velkých se pomocí stylů umístí běžně do hlavičky. Implementačně asi nejméně náročná volba. Uživatelsky ovšem málo přívětivá.  Ukázka je třeba v [této mé šabloně](http://www.vzhurudolu.cz/projects/snowkidz-mobile-demo/custom-mobile/), ale dnes už bych na běžné weby tento vzor nepoužil. Snad jen v opravdu jednoduchých případech.

## Konverze do `<select>`

Navigaci pomocí javascriptu na mobilech proměníte v nativní seznam položek. Výhodou je opět jednoduchá implementace, nevýhodou horší uživatelská přívětivost seznamu položek na mobilních zařízení. Ukázka je na [CSS-Tricks](https://css-tricks.com/convert-menu-to-dropdown/).

## Jen patička

Na některých webech navigaci v hlavičce nepotřebujete. Třeba mikrosajty nebo tahle stránka vydání [magazínu Frey](http://fray.com/issue3/). Ani tady – stejně jako u „nedělat nic“ – není speciální péče o mobilní zařízení potřeba.

## Vzor „nohy nahoru a nedělat nic“

Raději zmíním i tento „návrhový vzor“. Jak jsem psal v článku o schovávání navigace, často se navigace na mobilech schovávají zbytečně. Když v ní máte velmi málo položek, je to nejlepší volba. Používá třeba aktuální verze Vzhůru dolů. Implementační náročnost: nula celá nula procent.




