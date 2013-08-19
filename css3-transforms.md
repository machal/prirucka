CSS3 Transformace
==================
    

2D transformace
---------------

Čtyři základní funkce:

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

Transformace je možné kombinovat…

	  transform: scale(1.5) skew(-15deg);
	  
…nebo využít transformační matici:

### Původ transformace

Souřadnice bodu, ze kterého transformace vychází. Přednastavený je střed objektu `transform-origin: center center`. Pokud si například nastavíme levý horní roh, objekt se nám zvětší z něj:

	.scale-2 { 
	  transform: scale(1.5); 
	  transform-origin: top left;
	}

<p data-height="194" data-theme-id="502" data-slug-hash="brBgk" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/brBgk'>Příklad: CSS3 transform-origin</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>


Zajímavé odkazy
---------------



Podpora v prohlížečích
----------------------

<!--TODO

* matrix
http://en.wikipedia.org/wiki/Linear_transformation#Examples_of_linear_transformation_matrices
http://dev.opera.com/articles/view/understanding-the-css-transforms-matrix/
http://www.useragentman.com/blog/2011/01/07/css3-matrix-transform-for-the-mathematically-challenged/

* 3D

-->
