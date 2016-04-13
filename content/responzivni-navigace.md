# Návrhové vzory pro responzivní navigace

Začneme těmi obvyklými a užitečnými.

## Zapínání a vypínání (Toggle)

Navigaci prostě na malých displejích schováte do tlačítka. Nejčastěji s ikonou „hamburgeru“, odtud se tomuto návrhovému vzoru trochu nepřesně říká „hamburger navigace“. Je to nejpoužívanější typ responzivní navigace, jenže má svá úskalí a často je vhodnější použít jiné typy navigace. Více jsem o něm psal [v samostatném článku](mobilni-navigace-hamburger.md).

## Upřednosťnování položek (Priority+)

Se zmenšující se šířkou obrazovky se zmenšuje počet položek v navigaci. Na mobilních viewportech pak zůstává opravdu jen to důležité. Ostatní položky jsou obvykle dostupné na rozbalení.  [Demo](https://justmarkup.com/lab/juma/nav/example2/). Používá například aktuální [BBC News](http://www.bbc.com/news). Zajímavou variantou je nechat položky navigace na malých obrazovkách rolovat do strany. Používá třeba [Guardian](http://www.theguardian.com/international).


## Vyjíždění ze strany (Off Canvas)

Chování, které znáte z nativních aplikací. Vhodné zejména pro schovávání bohatého obsahu. V tom případě ale není vhodné použít ikonu hamburgeru, která představuje seznam položek. [Demo](http://jasonweaver.name/lab/offcanvas/). Používá například aktuální [Respekt.cz](http://www.respekt.cz). Pro Off Canvas navigaci existuje mnoho variací, hezká je třeba ta, kde navigace vizuálně [zůstává ve vrstvě pod webem](http://responsivenavigation.net/examples/off-canvas-slide/always-off-canvas.html) a je aktivována gestem smýknutí.

## Víceúrovňové navigace

Všechny zde zmíněné návrhové vzory jde samozřejmě použít i pro víceúrovňové navigace. Jak jste si sami asi na mnoha webech zkusili, na mobilních obrazovkách se takové navigace obvykle používají velmi špatně. Když to jde, snažte se víceúrovňové navigaci vyhnout. [Demo](http://responsivenavigation.net/examples/multi-toggle/index.html).


Tip: Většinu zde zmíněných návrhových vzorů si můžete zkusit na pěkném webu [Adventures in Responsive Navigation](http://responsivenavigation.net/).

## Konverze do jiného stylování

Pokud v navigaci máte obstojně málo položek, můžete je prostě zobrazit všechny a na malých obrazovkách jen upravit stylování. Třeba [zobrazit v mřížce](http://responsivenavigation.net/examples/clean-grid/index.html). 


## Méně obvyklé návrhové vzory

- **Přestylování a skok do patičky.** Navigace je prostě v HTML někde dole a na velkých se pomocí stylů umístí běžně do hlavičky. Implementačně asi nejméně náročná volba. Uživatelsky ovšem málo přívětivá.  Ukázka je třeba v [této mé šabloně](http://www.vzhurudolu.cz/projects/snowkidz-mobile-demo/custom-mobile/), ale dnes už bych na běžné weby tento vzor nepoužil.
- **Konverze do `<select>`.** Navigaci pomocí javascriptu na mobilech proměníte v nativní seznam položek. Výhodou je opět jednoduchá implementace, nevýhodou horší uživatelská přívětivost seznamu položek na mobilních zařízení. Ukázka je na [CSS-Tricks](https://css-tricks.com/convert-menu-to-dropdown/).
- **Vzor „nic nedělat“.** Raději zmíním i tento „návrhový vzor“. Jak jsem psal v článku o schovávání navigace, často se navigace na mobilech schovávají zbytečně. Když v ní máte velmi málo položek, je to nejlepší volba. Používá třeba aktuální verze Vzhůru dolů. Implementační náročnost: nula celá nula procent.
- **Jen patička.** Na některých webech navigaci v hlavičce nepotřebujete. Třeba mikrosajty nebo tahle stránka vydání [magazínu Frey](http://fray.com/issue3/). Ani tady – stejně jako u „nedělat nic“ – není speciální péče pro mobilní zařízení potřeba.



