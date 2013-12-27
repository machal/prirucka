
CSS prefixy
============

Podivná věc, která nás nutí psát jeden CSS kód vícekrát.

Pojďme si to ukázat na příkladu. CSS3 transformaci otočením musíme aktuálně zapsat takhle:

	.box {
	  -webkit-transform: rotate(7.5deg);  /* Chrome, Safari 3.1+ */
	     -moz-transform: rotate(7.5deg);  /* Firefox 3.5-15 */
	      -ms-transform: rotate(7.5deg);  /* IE 9 */
	       -o-transform: rotate(7.5deg);  /* Opera 10.50-12.00 */
	          transform: rotate(7.5deg);  /* Firefox 16+, IE 10+, Opera 12.10+ */
	}
	
V komentářích jsou uvedené prohlížeče, které k datu vzniku tohoto článku podporují danou syntaxi.	

**Na posledním místě vždy musí být neprefixovaná** (standardní) verze zápisu, i když ji aktuální verze prohlížečů nepodporují. Jednou budou. A když budou, implementace bezprefixové vlastnosti bude zřejmě lepší než prefixová. I proto   je nutné ji mít na závěr, přebíjí tu potenciálně starší.

Typy prefixů 
------------

Říká se jim občas „vendor prefixy”. Vendor je dodavatel software, v tomto případě jádra prohlížeče.

* `-webkit`. Jádro Webkit v tuhle chvíli používá Safari včetně iOS verze, Android Browser a všechny verze Google Chrome a od verze 15 i Opery. Poslední dva jmenovaní ovšem aktuálně odcházejí budovat vlastní jádro Blink.
* `-moz`. Gecko je jádro za všemi verzemi Firefoxu.
* Prefix `-ms` používá hádejte kdo… Micorosoft má svůj Trident.
* Prefix `-o` se vztahuje k aktuálně již neexistujícímu jádru Opery jménem Presto.
	

Proč a jak prefixy vznikly
--------------------------

Velmi zevrubě řečeno: Výrobci prohlížečů jsou v poslední době docela horliví při implementaci nových CSS vlastností. Implementují i vlastnosti, které W3C zatím neposlalo do finálních fází procesu standardizace. A taky jsou často jsou týmy kolem prohlížečů horlivé i v přidávání vlastních CSS vlastností.

V každém případě implementují něco, co nemá hotový standard. Je to tedy zkušební, prototypová implementace. Aby ji odlišili od finální implementace, zavedli vendor prefixy.

Detailně proces vzniku prefixů [tady hezky popisuje Martin Hassman](http://met.blog.root.cz/2008/09/10/k-cemu-jsou-v-css-potreba-vendor-prefixy/).


Jak si s prefixy poradit?
-------------------------

Máte několik možností:

1. **Nijak, nepoužívat prefixované implementace.** Takhle to bylo i celé myšleno, ale lidé jsou hold nedočkaví a do verze vlastností s vendor prefixy jsou standardní výbavou snad každého vývojáře.
2. **Vypisovat je ručně.** Možné řešení. V době [generátorů kódu](https://delicious.com/machal/css3-generators) a [CSS3 please](http://css3please.com/) se asi dá zvládnout, ale nedoporučuji.
3. **-prefix-free** Tzn. nechat si je generovat [javascriptem](http://leaverou.github.io/prefixfree/). Super pro testy nebo [fiddlátka](http://codepen.io/), ale na produkci? Určitě ne.
4. **CSS preprocesory.** Určitě [ano](http://kratce.vzhurudolu.cz/post/56084086629/css-preprocesory)! Je [tady](http://lesshat.com/) [řada](http://bourbon.io/) [knihoven](http://visionmedia.github.io/nib/) co vám zajistí klidný spánek bez nočních můru o vendor prefixech.

	
	
	
	