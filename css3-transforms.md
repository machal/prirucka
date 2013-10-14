CSS3 Transformace
==================

Transformace tvaru objektu ve 2D i 3D prostoru pomocí CSS.

V tomto článku se zatím zabýváme jen 2D transformacemi. 

## 2D transformace

Ty mají čtyři funkce:

### Zkosení

	.skew { 
	  transform: skew(-15deg); 
	}

### Otočení

	.rotate { 
	  transform: rotate(-15deg); 
	}

### Posun

	.translate { 
	  transform: translate(0, 50%); 
	}

### Změna velikosti

	.scale { 
	  transform: scale(1.5); 
	 }

<p data-height="192" data-theme-id="502" data-slug-hash="wxoil" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/wxoil'>Příklad: CSS3 Transforms</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>

Všechny čtyři základní funkce mají varianty pro transformaci jen po jedné ose — například `skewX()`, `skewY()`.

### Kombinace transformací

	  transform: scale(1.5) skew(-15deg);

### Původ transformace

Souřadnice bodu, ze kterého transformace vychází. Přednastavený je střed objektu `transform-origin: center center`. Pokud si například nastavíme levý horní roh, objekt se nám zvětší z něj:

	.scale-2 { 
	  transform: scale(1.5); 
	  transform-origin: top left;
	}

<p data-height="194" data-theme-id="502" data-slug-hash="brBgk" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/brBgk'>Příklad: CSS3 transform-origin</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>

## Podpora v prohlížečích

Umí to všechny moderní prohlížeče. Tzn. nějak vyřešit musíte podporu v IE9 a hlavně IE8. 

Pokud se ovšem nepletu, všechny základní 2D transformace jdou ve starých IEčkách provést pomocí proprietální vlastnosti [filter](http://msdn.microsoft.com/en-us/library/ms533014%28VS.85%29.aspx). Pro převod z CSS3 do filter existuje [chytrý konvertor](http://www.useragentman.com/IETransformsTranslator/).

