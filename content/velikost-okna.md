# Velikost okna prohlížeče a jak zjistit statistiky pro svůj web

Na rozdíl od [rozlišení displeje](rozliseni-displeje.md) dodává pro [responzivní design](https://www.vzhurudolu.cz/responzivni-design) webu velikost okna dost zásadní informaci. Jde o nejdůležitější uživatelský kontext, kterému se weby přizpůsobují.


## Zjištění v CSS a JavaScriptu {#CSS-JS}

V CSS máme [Media Queries](css3-media-queries.md), kterými se na šířku nebo výšku ptáme například takto

```css
/* Minimální šířka */
@media only screen and (min-width: 30em) { … }
/* Maximální výška */
@media only screen and (max-height: 10em) { … }
```

V JavaScriptu jsou dvě možnosti.


### innerWidth a innerHeight {#JS-innerWidth}

Vrací šířku a výšku okna v CSS pixelech včetně rolovátka („scrollbaru“), pokud je přítomné. 

```js
window.innerWidth
window.innerHeight
```

Kromě okna (`window`) je možné vlastnosti aplikovat i na další podobné objekty: rámy (`frame`), skupinu rámů (`frameset`) a podobně.

Pokud bychom se bavili [o viewportech](viewport-mobily.md), těmito vlastnostmi z prohlížeče vytáhneme rozměry *vizuálního* viewportu.

V Internet Exploreru to funguje od verze 9. Více informací je [na MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth).


### clientWidth a clientHeight {#JS-clientWidth}

Vrací šířku a výšku prvku v CSS pixelech *bez rozměru* rolovátka („scrollbaru“), pokud je přítomné. 

```js
document.documentElement.clientWidth
document.documentElement.clientHeight
```

Kromě dokumentu je možné vlastnost aplikovat na jakýkoliv jiný HTML prvek, který má layout alespoň typu inline.

Pokud bude řeč [o viewportech](viewport-mobily.md), vlastnostmi `clientWidth` a `clientHeight` z prohlížeče vytáhneme rozměry *layoutového* viewportu. Raději připomenu, že pokud na mobilních zařízeních zapomeneme [na meta značku pro viewport](viewport-meta.md), vrátí nám rozměry výchozího viewportu.

Funguje to ve všech prohlížečích. Více informací je [na MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth).


### Rolovátko, iOS a vyzkoušení {#rozdily-vyzkouseni}

Většina dnešních operačních systémů lišty pro rolování stránky schovává. Hodnoty `innerWidth` a `clientWidth` budou díky tomu shodné. Podstatnou výjimkou jsou desktopové Windows, které posuvníky zobrazují a do `clientWidth` pak nepočítají.

Dalším viditelným odlišením je chování prohlížečů na iOS: Pokud je stránka díky přetečení textu širší než viditelný viewport, Safari počítá `clientWidth` pro celý dokument. Chrome na Androidu naproti tomu v obě hodnoty ponechává stejné.

Rozdíly mezi `innerWidth` a `clientWidth` si můžete vyzkoušet také na mém CodePenu.

<iframe height='300' scrolling='no' title='JavaScript: innerWidth vs. clientWidth' src='//codepen.io/machal/embed/rrXNWO/?height=300&theme-id=502&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/machal/pen/rrXNWO/'>JavaScript: innerWidth vs. clientWidth</a> by Martin Michálek (<a href='https://codepen.io/machal'>@machal</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe> 


## Získání velikosti okna z Google Analytics {#google-analytics}







