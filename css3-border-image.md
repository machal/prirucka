CSS3 Border Image
=================

Obrázkový rámeček. Způsob jak namísto nativní rámečků vykreslit kolem elementu pomocí obrázku naše vlastní.

Vezmeme jakýkoliv [obrázek s rámečkem](http://www.vzhurudolu.cz/images/border-image-test.jpg) statických rozměrů, prohlížeči řekneme jak jej má rozdělit. Následuje kouzlo — rámeček se nám elegantně přizpůsobí šířce i výšce elementu.

Technikálie
-----------

	border-image: 
	  _zdrojovy_obrazek_
	  _rozmery_rezu_
	  _sirka_
	  _zacatek_  
	  _opakovani_

Pozor, ve Firefoxu vám vlastnost `border-image` nebude fungovat správně bez deklarování `border-width` na stejné rozměry jako `border-image-slice` a `border-style: solid`.

### Zdrojový obrázek

Jediná povinná vlastnost. Samostatně jako `border-image-source: url(…)`;

### Rozměry řezů

Tímto prohlížeči rozřežeme zdrojový obrázek tak, aby věděl kde je část pro všechny čtyři rohy a vertikální a horizontální část rámečku. Obsahuje čtyři čísla pro řez horní, pravý, dolní a levý. Definovat lze v pixelech nebo v procentech ze zdrojového obrázku. Výchozí stav je `border-image-slice: 100%`.

Pokud je přítomno klíčové slovo `fill`, vezme se ze zdrojového obrázku i jeho střední část a vykreslí se přes pozadí elementu.

<img class="picture" src="content/schemes/CSS3-border-image.png" width="700" height="394" alt="border-image-slice">

### Šířka 

`border-image-width` specifikuje šířku rámečku v pixelech nebo procentech, podobně jako u `border-width`.

Pokud má hodnotu `auto`, šířka se počítá z rozměrů řezů.

### Začátek

Rozměr specifikovaný v `border-image-outset` říká jak moc leze obrázkový rámeček mimo rozměry elementu počítané jako border-box.

### Opakování

Jak bude prohlížeč pracovat s vertikální a horizontální postranní částí obrázkového rámečku? To můžeme nastavit v `border-image-repeat`. Možnosti jsou tyto:

* `stretch` – roztažení 
* `repeat` – opakování
* `round` – pokud plochu nevyplní celočíselný počet opakování, jednotlivá opakování se roztáhnou aby plochu vyplnila
* `space` – pokud plochu nevyplní celočíselný počet opakování, zbývající plocha je spravedlivě rozdělena mezi všechna opakování


Příklad k vyzkoušení
--------------------

<p data-height="270" data-theme-id="502" data-slug-hash="DLkjm" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/DLkjm'>CSS3 Border Image</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>

Odkazy
------

* Moc fajn generátor, který vám ulehčí život hlavně při hledání rozměrů řezů — [border-image.com](http://border-image.com/)


Podpora v prohlížečích
----------------------

IE11+. Se staršími prohlížeči se lze vypořádat definovanou alternativou skrze detekci Modernizrem: `.no-borderimage { … }`.

Pozor, ve starších verzích některých moderních prohlížečů a v Android browseru je vlastnost [prefixovaná](http://caniuse.com/#feat=border-image).