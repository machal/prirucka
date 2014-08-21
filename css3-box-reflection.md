Box Reflection – odlesk objektu
===============================

Prohlížeč vykreslí zrcadlový odlesk pod objektem nebo z jeho strany.

Syntaxe
-------

Syntaxe pro prohlížeče postavené na Webkit jádře:

	-webkit-box-reflect: 
		_směr_odlesku 
		_posun_ 
		_maska_;
	
### Směr odlesku

Povinná položka, která může nabývat hodnot `above`, `below`, `left` nebo `right`.

	-webkit-box-reflect: below;

### Posun

Jak moc se odlesk vzdálí od původního objektu. Uvádí se v běžných CSS jednotkách – `px`, `em` a dalších.

	-webkit-box-reflect: below 5px;

### Maska

Maska určuje efekt překrytí odlesku. Pro zajištění zrcadlového efektu maskou bývá [CSS gradient](css3-gradients.md). Může to být ale i obrázek. Co je v masce černé, zobrazí se, co je průhledné nezobrazí se.

	-webkit-box-reflect: below 5px linear-gradient(to bottom, transparent, black);
	
Živá ukázka příkladu [cdpn.io/e/CLEhF](http://cdpn.io/e/CLEhF).	

Podpora v prohlížečích
----------------------

Jen prohlížeče podstavené na Webkit jádře. Ke dnešku tedy funguje ve všech Safari i Android Browseru. Dokonce ve všech Chrome, i když už dnes běží na vlastním jádře Blink. [caniuse.com/box-reflect](http://caniuse.com/box-reflect)

Ve Firefoxu lze odlesku dosáhnout pomocí vlastnosti `-moz-element()`. [lea.verou.me/2011/06/css-reflections-for-firefox-with-moz-element-and-svg-masks/](http://lea.verou.me/2011/06/css-reflections-for-firefox-with-moz-element-and-svg-masks/)

Na vlastnost se tedy nelze spolehnout na široce dostupných webech, ale pro interní aplikace s omezenou cílovou skupinou se může hodit.

