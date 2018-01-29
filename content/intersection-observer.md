## Intersection Observer {#io}

[Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) je javascriptové API, které umožní asynchronně hlídat protnutí plochy konkrétního prvku s plochou jiného prvku nebo viewportu.

<!-- AdSnippet -->

Nativně jej podporuje většina prohlížečů. V době psaní textu nefunguje jen ve všech verzích Safari a pak v Internet Exploreru. Viz [CanIUse.com](https://caniuse.com/#feat=intersectionobserver).

Problém to ale není, protože [existuje polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) nebo prostě můžete udělat detekci vlastnosti a lazy loading nabídnout jen většině uživatelů prohlížečů, které Intersection Observer umí.

Intersection Observer samozřejmě nevymysleli jen pro potřeby lazy loadingu. Skvělý je také pro spouštění animací při vstupu prvku do viewportu.

Použití je jednoduché:

```javascript
// Nastavíme hlídače
var observer = new IntersectionObserver(callback, options);

// Řekneme mu, které prvky má hlídat
var contentImages = document.querySelector('.content img');
observer.observe(contentImages);
```

### Vlastnosti {#io-vlastnosti}

Nejprve příklad:

```javascript
var options = {
  root: document.querySelector('#main'),
  rootMargin: '-50px 0px',
  threshold: 0.5
};
```

A teď si vysvětleme jednotlivé vlastnosti:

- `root` – element, jehož plochu má náš prvek překrývat. Obvykle chceme použít celý viewport, takže `root: null` nebo `root` neuvádějte – je to výchozí chování.
- `rootMargin` – vnější okraj kolem `root`, kdy se hlídač aktivuje. V případě lazyloadingu se samozřejmě hodí mít nějaký náskok a začít obrázky načítat chvilku před tím, než jsou ve viewportu. `rootMargin: '-50px 0px' tohle udělá.
- `threshold` – práh protnutí. Lidsky řečeno: jaká část prvku musí jít vidět, aby se hlídač aktivoval. `threshold: 0.5` aktivuje při padesátiprocentním překryvu. Výchozí hodnota je `0`, což je pro lazyloading optimální. Prostě se aktivuje hned při překrytí první řady pixelů.

<!-- AdSnippet -->

