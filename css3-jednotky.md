Jednotka 'rem'
============

Rozměr, který odpovídá hodnotě `font-size` na root elementu, tedy `<html>`. Jsou to *root-emka*, tedy varianta známé jednotky `em`, která nevychází z velikosti fontu rodičovského elementu.

Příklad to vysvětlí lépe:

<p data-height="206" data-theme-id="502" data-slug-hash="mnbaA" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/mnbaA'>CSS3: nové jednotky (rem)</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>

Obvykle mají prohlížeče ve svých výchozích stylopisech tuto hodnotu nastavenou na 16 pixelů.

Pokud všechny rozměry týkající se typografie (nebo klidně i layoutu) nastavíte v `rem` jednotkách, můžete si snadno zvětšit celý dokument pouhou změnou hodnoty ve vlastnosti `html { font-size: … }` a vytvářet tak elastické layouty. Podobně jako v příkladu výše můžete změnu velikosti písma celého dokumentu a s ním i elastické zvětšení layoutu provést pomocí [media query](css3-media-queries.md).

### Podpora v prohlížečích

[IE9+](http://caniuse.com/rem). Pro starší prohlížeče lze vytvořit pixelový fallback:

	font-size: 24px;
	font-size: 1.5rem;

Fallback je lepší nechat si generovat pomocí některého CSS preprocesoru. I tak je to ovšem docela pruda. Na svých projektech `rem` používám jen tam, kde podpora IE8 a starších není důležitá. V opačném případě pro definovaní rozměrů používám jednotku `em`.

