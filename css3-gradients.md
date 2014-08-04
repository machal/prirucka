CSS3 Gradients – barevné přechody
=================================

Nová možnost definice barvy a způsob jak použít nativní barevný přechod kdekoliv kde jsme dosud používali obrázek. Tedy ve vlastnostech `background-image` a `list-style-image`.

Využití
-------

Škála možností využítí leze ze základní škatulky „gradient mezi barvou A a B” hlavně těmito směry:

* [Tlačítka](http://codepen.io/leviflair/pen/zFoKm), [tlačítka](http://cubiq.org/dropbox/cssgrad.html), [tlačítka](http://codepen.io/simurai/pen/DwJdq)
* [Patterny](http://lea.verou.me/css3patterns/), [patterny](http://css3pie.com/demos/gradient-patterns/), [patterny](http://codepen.io/aleprieto/pen/nAmIy)
* Patterny často využívají tzv. [ostrý přechod](http://codepen.io/machal/pen/licEd), což je přechod-nepřechod, ve kterém je mezi barvami ostrá hrana.

Lineární přechod
----------------

Rovnoměrný barevný přechod zezhora dolů uděláte takto:

	background: linear-gradient(lightgreen, darkgreen);

### Směr osy gradientu

Používají se buď **klíčová slova** označující směr gradientu (`to bottom right`, `to right`) nebo **úhly**. Přednastavený je `180deg`. Úhel 0&deg; vede zezdola nahoru, 90&deg; zprava doleva [a tak dále](http://codepen.io/thebabydino/pen/qgoBL) po směru hodinových ručiček.

	background: linear-gradient(45deg, lightgreen, darkgreen);

### Zarážky barev

Můžeme samozřejmě ovlivnit jak se nám jednotlivé barvy rozloží na ose průběhu přechodu. Slouží k tomu zarážky, definovatelné v běžných CSS jednotkách (`%`, `px`, `em` …). Je to stejná zarážka jakou znáte z práce s gradienty v grafických editorech.

	background: linear-gradient(45deg, lightgreen, darkgreen 33%);

Barevná zarážka pro tmavě zelenou barvu tady začíná na třetině délky osy gradientu:

<p data-height="173" data-theme-id="502" data-slug-hash="CcdBf" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/CcdBf'>CSS3 Linear Gradient</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>


Radiální přechod
----------------

Nejjednodušší kruhový přechod vytvoříme například tímto zápisem:

	.box-1 {
		background: radial-gradient(lightgreen, darkgreen);
	}

### Tvar a velikost

Přednastavený tvar přechodu je kružnice `circle`. Lze přenastavit na `ellipse`.

Hned za tvarem je možné definovat velikost přechodu. První možnost je definovat **velikost jako poloměr**. U kružnice jedním, u elipsy dvěma čísly:

	.box-2 {
	  background: radial-gradient(ellipse 50px 30px, lightgreen, darkgreen);
	}

Poznámka: aktuální verze specifikace [nedovoluje](http://dev.w3.org/csswg/css-images-3/#radial-size-circle) u kružnice nastavit rozměry s použitím procent. Divné, co?

Druhá možnost je definovat **velikost klíčovým slovem**:

* `closest-side` – přechod bude končit u nejbližší strany elementu
* `farthest-side` – přechod bude končit u nejvzdálenější strany elementu
* `closest-corner` – přechod bude končit u nejbližšího rohu elementu
* `farthest-corner` – přechod bude končit u nejvzdálenějšího rohu elementu

### Pozice středu

Pozice středu barevného přechodu se definuje podobně jako u vlastnosti `background-position`. Je potřeba ji jen doplnit o klíčové slovo `at`:

	.box-3 {
		background: radial-gradient(at top left, lightgreen, darkgreen);
	}

### Zarážky barev

Fungují podobně jako u lineárního přechodu. Do čtvrtiny rozměrů elementu prohlížeč vykreslí světle zelenou kružnici, mezi čtvrtinou a polovinou barevný přechod mezi světle a tmavě zelenou a ve zbytku elementu uvidíte tmavě zelenou:

	.box-4 {
		background: radial-gradient(lightgreen 25%, darkgreen 50%);
	}

A tady je slibovaný příklad, kde si vše můžete prohlédnout a vyzkoušet rovnou v  prohlížeči:

<p data-height="165" data-theme-id="502" data-slug-hash="cdyfx" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/cdyfx'>CSS3 Radial Gradient</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>


Podpora v prohlížečích
----------------------

IE10+, ale jedna dobrá a jedna špatná zpráva k tomu:

* Dobře, nejdřív špatná. CSS3 gradienty jsou typický čertem z prefixového pekla. Každý prohlížeč v různých fázích vývoje implementoval různé fáze vývoje specifikace. Nebo vlastní návrh syntaxe. Takže pokud chcete podporovat i starší verze moderních prohlížečů, věnujte zvýšenou pozornost [prefixovým variantám](http://css3please.com/#box_gradient). Dobré ale je, že se poslední verze všech prohlížečů shodují na W3 syntaxi, kterou používáme v příkladech. A bez prefixů!
* Teď dobrá. Existuje spousta nástrojů, které nám potřebnou syntaxi zvládnou vygenerovat. A umí vygenerovat i potřebný kód pro IE9 (pomocí SVG obrázku) a IE8 (pomocí vlastnosti `filter`), takže dosáhnete prakticky plné podpory. A teď ty nástroje: například [ColorZilla Gradient Editor](http://www.colorzilla.com/gradient-editor/) nebo [LESShat](http://lesshat.com/) pokud pokužíváte preprocesor LESS.

V každém případě nezapomeňte pro starší prohlížeče nadefinovat fallbackovou barvu:

	background: darkgreen;
	background: linear-gradient(lightgreen, darkgreen);





