# Intersection Observer: Jak zjistit, že je prvek vidět?

Intersection Observer je javascriptové API, které umožní asynchronně hlídat protnutí plochy konkrétního prvku s plochou jiného prvku nebo viewportu. To se hodí hlavně pro potřeby [odloženého načtení (lazy loadingu)](lazy-loading.md) obrázků nebo jiných prvků.


<!-- AdSnippet -->

Nativně jej už podporuje většina prohlížečů. V době psaní textu Observer nefunguje jen ve všech verzích Safari a pak v Internet Exploreru. Viz [CanIUse.com](https://caniuse.com/#feat=intersectionobserver).

Překážka pro použití to ale není, protože [existují polyfilly](https://github.com/w3c/IntersectionObserver/tree/master/polyfill). Nebo prostě můžete udělat detekci vlastnosti a Observer nabídnout jen většině uživatelů prohlížečů, které Intersection Observer umí.

Intersection Observer samozřejmě nevymysleli jen pro potřeby lazy loadingu. Skvělý je také pro spouštění animací při vstupu prvku do viewportu. Nebo pro implementaci „nekonečné stránky“ - načítání nových položek po narolování stránky na konec.

Použití je jednoduché:

```js
// Nastavíme hlídače
var observer = new IntersectionObserver(callback, options);

// Řekneme mu, které prvky má hlídat
var contentImages = document.querySelector('.content img');
observer.observe(contentImages);
```

## Vlastnosti {#vlastnosti}

Nejprve příklad:

```js
var options = {
  root: document.querySelector('#main'),
  rootMargin: '-50px 0px',
  threshold: 0.5
};
```

Vysvětleme si jednotlivé vlastnosti:

- `root` – element, jehož plochu má náš prvek překrývat. Obvykle chceme použít celý viewport, takže nastavte `root: null` nebo `root` neuvádějte – je to výchozí chování.
- `rootMargin` – vnější okraj kolem `root`, kdy se hlídač aktivuje. V případě lazyloadingu se samozřejmě hodí mít nějaký náskok a začít obrázky načítat chvilku před tím, než jsou ve viewportu. `rootMargin: '-50px 0px'` tohle udělá s předstihem padesáti pixelů.
- `threshold` – práh protnutí. Lidsky řečeno: jaká část prvku musí jít vidět, aby se hlídač aktivoval. `threshold: 0.5` aktivuje při padesátiprocentním překryvu. Výchozí hodnota je `0`, což je pro lazyloading optimální. Prostě se aktivuje hned při překrytí první řady pixelů. 

<!-- AdSnippet -->

Odkazy:

- Detailní technikálie jsou [na MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).
- [Using the Intersection Observer API to Trigger Animations and Transitions](https://alligator.io/js/intersection-observer/) – Alligator.io.
- [Lazy Loading Images with Intersection Observer](https://corydowdy.com/blog/lazy-loading-images-with-intersection-observer) – Cory Dowdy.



## Lazy loading obrázků s IOLazy {#iolazy}

Při nasazování lazy loadingu na Vzhůru dolů jsem našel malinkou knihovnu, která využívá Intersection Observer – [IOLazy](https://cdowdy.github.io/io-lazyload/).

<div class="related" markdown="1">
- [Lazy loading obrázků: kompletní průvodce](/prirucka/lazy-loading)
</div>

Je fajn věc pro všechny, kteří se tak moc nekamarádí s Javascriptem a zároveň nechtějí využívat [běžné lazyloadovací knihovny](lazy-loading.md#knihovny), který jsou výkonnostně nepříliš optimalní.

Knihovnu vložíte do stránky:

```html
<!-- intersection observer polyfill -->
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>
<!-- the iolazy load library -->
<script src="dist/js/iolazy.min.js" defer></script>
```

Nezapomeňte samozřejmě na polyfill. Jak jsem psal, potřebujete jej hlavně pro Safari a Internet Explorery.

K obrázkům přidáte `data-` atributy a třídu:

```html
<img data-src="your/image.jpg" alt="your alt text" class="lazyload" >
```

Nakonec knihovnu spustíte:

```js
document.addEventListener("DOMContentLoaded", function () {
  new IOlazy();
});
```

<!-- AdSnippet -->
