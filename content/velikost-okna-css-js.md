# Velikost okna prohlížeče v CSS a JavaScriptu: min-width, innerWidth, clientWidth

Na rozdíl od rozlišení displeje poskytuje velikost okna pro responzivní design webu velmi zajímavé informace.

Kromě velikosti okna můžeme také mluvit o velikosti [viewportu](viewport.md). A protože existují minimálně dva různé viewporty, vizuální a layoutový, prohlížeče vracejí v různých vlastnostech různé hodnoty.

<!-- AdSnippet -->

<div class="web-only" markdown="1">

Podívejme se, jak vše zjišťovat v [JavaScriptu](#JS) a [CSS](#CSS).

</div>

## JavaScript {#JS}

Prostřednictvím JavaScriptu se nabízejí dvě možnosti. Vybíráme v zásadě podle toho, zda chceme připočítávat rozměry lišty pro rolování stránky.

### Velikost okna s posuvníkem: innerWidth a innerHeight {#JS-innerWidth}

Vrací šířku a výšku okna v CSS pixelech včetně rolovátka (posuvníku nebo „scrollbaru“), pokud je přítomné.

```js
window.innerWidth
window.innerHeight
```

Kromě okna (`window`) je možné vlastnosti aplikovat i na další podobné objekty: rámy (`frame`) nebo skupinu rámů (`frameset`).

Pokud bychom se bavili [o viewportech](viewport.md), těmito vlastnostmi z prohlížeče vytáhneme rozměry *vizuálního* viewportu.

V Internet Exploreru to funguje od verze 9, jinak ve všech relevantních prohlížečích. Více informací je na MDN. [mdn.io/WindowInnerWidth](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth)

### Velikost dokumentu bez posuvníku: clientWidth a clientHeight {#JS-clientWidth}

<!-- AdSnippet -->

Vrací šířku a výšku prvku v CSS pixelech *bez rozměru* rolovátka („scrollbaru“), pokud je přítomné.

```js
document.documentElement.clientWidth
document.documentElement.clientHeight
```

Kromě dokumentu je možné vlastnost aplikovat na jakýkoliv jiný HTML prvek, který má layout alespoň typu inline.

Pokud bude řeč [o viewportech](viewport.md), vlastnostmi `clientWidth` a `clientHeight` z prohlížeče vytáhneme rozměry *layoutového* viewportu. Raději připomenu, že pokud na mobilních zařízeních zapomeneme [na meta značku pro viewport](viewport-meta.md), vrátí nám rozměry výchozího viewportu.

Funguje to ve všech prohlížečích. Více informací je na MDN: [mdn.io/Element/clientWidth](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth).

### Posuvník, iOS a vyzkoušení {#rozdily-vyzkouseni}

Většina dnešních operačních systémů „scrollbary“ na stránce schovává. Hodnoty `innerWidth` a `clientWidth` aplikované na okno nebo dokument budou díky tomu shodné. 

Jednou z podstatných výjimek jsou desktopové Windows, které posuvníky zobrazují a do `clientWidth` pak nepočítají.

Dalším viditelným odlišením je chování prohlížečů na iOS: Pokud je stránka díky přetečení textu širší než viditelný viewport, Safari počítá `clientWidth` pro celý dokument. Chrome na Androidu naproti tomu obě hodnoty ponechává stejné.

Rozdíly mezi `innerWidth` a `clientWidth` si můžete vyzkoušet také na v živé ukázce.

CodePen: [cdpn.io/e/rrXNWO](https://codepen.io/machal/pen/rrXNWO?editors=1110)

Pro zjištění viewportu jsou výhodnější vlastnosti `innerWidth` a `innerHeight`, protože na všech platformách dostanete shodně vypočtená čísla. Pokud potřebujete zjistit velikost prostoru dostupného pro váš design, musíte pracovat s `clientWidth` a `clientHeight`.

## CSS {#CSS}

V CSS máme [Media Queries](css3-media-queries.md), kterými se na šířku nebo výšku ptáme například takto:

```css
/* Minimální šířka */
@media only screen and (min-width: 30em) { … }
/* Maximální výška */
@media only screen and (max-height: 10em) { … }
```

Tyhle hodnoty se v CSS počítají jako velikost viewportu, tedy včetně šířky posuvníků.

<!-- AdSnippet -->
