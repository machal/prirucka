Nové jednotky v CSS3: rem, vw, vh
============
    


rem
---
  
Rozměr, který odpovídá hodnotě `font-size` na root elementu, tedy `<html>`. Jsou to *root-emka*, tedy `em`, které nevycházejí z velikosti fontu rodičovského elementu.
  
<p data-height="206" data-theme-id="502" data-slug-hash="mnbaA" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/mnbaA'>CSS3: nové jednotky (rem)</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>

Obvykle mají prohlížeče ve svých výchozích stylopisech tuto hodnotu nastavenou na 16 pixelů. 

Pokud všechny rozměry týkající se typografie (nebo klidně i layoutu) nastavíte v `rem` jednotkách, můžete si snadno zvětšit celý dokument pouhou změnou hodnoty ve vlastnosti `html { font-size: … }`. Podobně jako v příkladu výše na tu změnu můžete provést pomocí [media query](css3-media-queries.md).
  
### Podpora v prohlížečích

[IE9+](http://caniuse.com/rem). Pro starší prohlížeče jde docela snadno vytvořit pixelový fallback:

	font-size: 24px;
	font-size: 1.5rem;

Fallback je lepší nechat si generovat pomocí některého CSS preprocesoru.

