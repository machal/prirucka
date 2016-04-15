# Jaký typ responzivní navigace vybrat?

Projdeme si osm návrhových vzorů pro navigace na responzivních webech. Od uživatelsky složitých a implementačně jednoduchých až po ty – ehm – dobré. 

Většina webů si ale vystačí se vzory dvěmi: upřesnostňujícím a zapínacím. Podívejme se nejprve na ně.

## Upřednostňování položek (Priority+)

Se zmenšující se šířkou obrazovky se zmenšuje i počet položek v navigaci. Na mobilních šířkách obrazovky pak zůstává opravdu jen to důležité. Ostatní položky jsou obvykle dostupné na rozbalení.  

Upřednostňování používá například aktuální [BBC News](http://www.bbc.com/news). Zajímavou variantou je nechat položky navigace na malých obrazovkách rolovat do strany jak je vidět třeba u [Guardianu](http://www.theguardian.com/international).

[Demo](https://justmarkup.com/lab/juma/nav/example2/). Technicky lze řešit i dost jednoduše [jen pomocí CSS](http://codepen.io/olach/details/adeMzP). 

## Zapínač (Toggle)

Celou navigaci prostě na malých displejích schováte do tlačítka. Nejčastěji s ikonou „hamburgeru“, odtud se *zapínači* trochu nepřesně říká „hamburger navigace“. Je to nejpoužívanější typ responzivní navigace, jenže má svá úskalí a často je vhodnější použít jiné. Jeho nevýhodou je hlavně schování celé navigace, která tím přestává zastávat role, které má na webu hrát. Více jsem o schovávání a hamburgeru psal [v samostatném článku](mobilni-navigace-hamburger.md). 

Návrhový vzor *zapínač* zpopularizoval [Bootstrap](http://getbootstrap.com/) a najdete jej na většině dnešních responzivních webů. U nás je to v době psaní článku třeba [Globus](https://www.globus.cz/).

![Návrhové vzory pro responzivní navigace](dist/images/original/responzivni-navigace.jpg)

### Speciální varianta zapínače: vyjíždění do obrazovky (Off Canvas)

Chování, které znáte z nativních aplikací. Aktuální [web Raiffeisen stavební spořitelny](https://www.rsts.cz/) používá vyjíždění zezhora.

Obvyklejší je ale vyjíždění ze strany, které je vhodné pro schovávání bohatého obsahu. V tom případě ale není dobrý nápad použít ikonu hamburgeru. Ta totiž představuje seznam položek. 

[Demo](http://jasonweaver.name/lab/offcanvas/). Používá například aktuální [Respekt.cz](http://www.respekt.cz) nebo [Vodafone.cz](http://www.vodafone.cz/).

Pro *offcanvas* navigaci existuje mnoho variací, hezká je třeba ta, kde navigace vizuálně [zůstává ve vrstvě pod webem](http://responsivenavigation.net/examples/off-canvas-slide/always-off-canvas.html) a je aktivována gestem smýknutí.

### Víceúrovňové navigace: Speciální varianta a speciální průšvih

Oba výše zmíněné návrhové vzory je samozřejmě možné použít i pro víceúrovňové navigace. 

Jak jste si sami asi v kůži uživatele na mnoha webech zkusili, na mobilních obrazovkách se takové navigace obvykle používají velmi špatně. Zkuste si to sami [v této demonstraci](http://responsivenavigation.net/examples/multi-toggle/index.html). Když to jde, snažte se víceúrovňové navigaci vyhnout. 

Tip: Většinu zde zmíněných návrhových vzorů si můžete zkusit na pěkném webu [Adventures in Responsive Navigation](http://responsivenavigation.net/). Ještě více příkladů i s ukázkami kódu najdete [u Brada Frosta](https://bradfrost.github.io/this-is-responsive/patterns.html#navigation).

## Konverze do jiného stylování

Pokud v navigaci máte obstojně málo položek, můžete je prostě zobrazit všechny a na malých obrazovkách jen upravit stylování. Třeba [zobrazit v mřížce](http://responsivenavigation.net/examples/clean-grid/index.html). 

## Přestylování a skok do patičky

Navigace je prostě v HTML někde dole a na velkých displejích se pomocí stylů umístí do hlavičky. Implementačně je *skok do patičky* asi nejméně náročná volba. Uživatelsky ovšem málo přívětivá.  Ukázka je třeba v [této mé první responzivní šabloně](http://www.vzhurudolu.cz/projects/snowkidz-mobile-demo/custom-mobile/). Dnes už bych *skok* na běžné weby nepoužil. Snad jen v opravdu jednoduchých případech.

## Konverze do `<select>`

Navigaci pomocí javascriptu na mobilech proměníte v nativní seznam položek. Výhodou je opět jednoduchá implementace. Nevýhodou horší uživatelská přívětivost seznamu položek na mobilních zařízení. Ukázka je na [CSS-Tricks](https://css-tricks.com/convert-menu-to-dropdown/).

## Jen patička

Na některých webech navigaci v hlavičce nepotřebujete. Třeba mikrosajty nebo tato stránka vydání [magazínu Frey](http://fray.com/issue3/). Ani tady – stejně jako u „nedělat nic“ – není speciální péče o mobilní zařízení potřeba.

## Vzor „nohy nahoru a nedělat nic“

Raději zmíním i tento „návrhový vzor“. Jak jsem psal [v článku o *hamburgeru*](mobilni-navigace-hamburger.md), často se navigace na mobilech schovává zbytečně. Když v ní máte velmi málo položek, tohle je nejlepší řešení: dát si kafe, nohy nahoru a nedělat nic. 


