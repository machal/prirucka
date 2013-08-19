
CSS3 Transitions
===============

Animace přechodů mezi stavy vlastností elementu.

Zní to možná složitě. Představte si ale tuhle situaci:

	.box { 
	  background: green; 
	}
	
	.box:hover { 
	  background: blue; 
	}

Vy ale chcete změnu barvy po najetí myši animovat. A právě k tomu slouží transitions, animace přechodů mezi stavy CSS vlastností.

	.box { 
	  background: green; 
	  transition: 300ms;
	}
	
	.box:hover { 
	  background: blue; 
	}

Poznámka: transition se typicky spouští po najetí myši, můžete ji ale spustit například přidáním třídy, kterou přidáte javascriptem po kliknutí/tapnutí `.box.clicked { background: blue; }`.
	
Zkuste si to naživo:

<p data-height="179" data-theme-id="502" data-slug-hash="hJljB" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/hJljB'>CSS3 transition basic</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>

V praxi
-------

A teď si představte, že takto můžete animovat téměř libovolnou CSS vlastnost včetně pozicování, [transformací](/css3-transforms). Taky vidíte ten obří potenciál? Ano, s přechody jde generovat spousty legrace typu [animace rámečku](http://kratce.vzhurudolu.cz/post/18092366948/css3-rolecek) nebo docela [divoké hover stavy](http://tympanus.net/Tutorials/OriginalHoverEffects/) nad boxy.

Tohle jsou specifické animace přechodu. Mohou vás zajímat skutečné [CSS3 animace](/css3-animations). Ale pozor, i s transitions lze hrát velké divadlo! Čtěte dále.


Syntaxe
-------

	transition:
	  (_hlidane_vlastnosti_)
	  _trvani_animace_
	  (_funkce_prubehu_)
	  (_zpozdeni_)
	  (, _dalsi_transition_);
  
  
### Trvání animace

Jediná povinná položka v shorthandu `transition`. Čas můžete udat v sekundách nebo milisekundách. Samostatně tedy s výchozí hodnotou jako `transition-duration: 0s`.

### Hlídané vlastnosti

Z vlastností, které v elementu měníte si můžete vybrat jen některé. Ostatní se prostě nebudou animovat. Samostatně s výchozí hodnoutou jako `transition-property: none`. Příklad:

	.box { 
	  background: green; 
	  transition: margin 300ms;
	}
	
	.box:hover { 
	  background: blue; 
	  margin-left: 200px;
	}

Dobré vědět, že transitions nelze aplikovat úplně na všechny CSS vlastnosti. Třeba `display` byste animovali marně. Tady je [seznam animovatelných](http://www.w3.org/TR/css3-transitions/#animatable-properties).

### Funkce průběhu

Samostatně jako `transition-timing-function: ease`. Vybrat si můžete z [přednastavených](http://www.w3.org/TR/css3-transitions/#animatable-properties) nebo si nadefinovat [vlastní](http://matthewlein.com/ceaser/).

### Zpoždění

Animaci můžete spustit o chvíli později než nastane změna vlastností. Samostatně jako `transition-delay: 0s`.

### Řetězení animací

Pokud měníte více vlastností, nemusíte je animovat najednou. Docela snadno je poskládáte za sebe. A otevřete tím úplně novou dimenzi možností tvorby animací.

Druhá animace se v následujícím příkladu spouští s vteřinovým zpožděním po dokončení první:

<p data-height="146" data-theme-id="502" data-slug-hash="vIGAk" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/vIGAk'>Příklad: CSS3 transition</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>


Podpora v prohlížečích
----------------------

IE10+. Když budete transition používat pro dekorativní (nikoliv funkční) přechody, můžete je udělat výrazně snadněji než Javascriptem a ve starších prohlížečích nebude změna stavu bez přechodu nikomu vadit.

Pokud děláte funkční animaci (např. indikaci stavu nahrávání), připravte pomocí detekce vlastností alternativní řešení pro starší prohlížeče.
