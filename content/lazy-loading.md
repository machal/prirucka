Lazy loading obsahových prvků s Intersecion Observer
============

[Lazy loading](http://cs.wikipedia.org/wiki/Lazy_loading) je dost široký pojem, ale ve světě webového frontendu označuje techniku, která zajistí načtení obsahu stránky až ve chvíli kdy jej uživatel potřebuje. 

<!-- AdSnippet -->

Tedy odložené načítání. Nejčastěji je navázané na scrollování stránky. Doku uživatel neposune stránkou tak, aby prvek viděl, ten se díky lazy loadingu nestáhne.

Nejčastěji lazy loading aplikujeme na obrázky, ale je vhodné jej využít i na prvky vkládané z třetích stran – iframe s Youtube videi, mapami, prvky Facebooku nebo Twitteru – ale i třeba obsah.

<figure>
<img src="dist/images/original/lazyloading.jp" alt="Lazy loading obrázků">
<figcaption markdown="1">    
*Odložené načtení obrázků, které nejsou viditelné ve viewportu uživatele, ušetří data a může zrychlit vykreslení stránky.*
</figcaption> 
</figure>

## K čemu je to dobré? {#proc}

Datově náročnější prvky rozhraní, které nejsou [ve viewportu](viewport-meta.md) vidět,  nemusí uživatel stahovat.

Je to užitečné ze dvou důvodů: 

- Uživatel *ušetří data* a my servery. Velká část lidí na vašich webech totiž neposune stránku a rovnou odchází nebo najde co potřebuje už v horní části stránky.
- Můžeme *prioritizovat* načtení jiných prvků. Například webfontů, které máme nalinkované v CSS souborech. Ty jsou pro důležitější než například obrázky schované mimo viewport uživatele.


## Jak to funguje? {#jak}

Nejčastěji se to provádí u obrázků. Tak, že cestu k němu nevložíte do parametru `src` nebo [`srcset`](srcset-sizes.md). Ono totiž všechno co je v nich vložené má v seznamu načítání poměrně vysokou prioritu a prohlížeč při stahování obrázků nezastavíte.

Takže si pomůžeme vlastním data atributem:

```html
<img alt="…" data-src="obrazek.jpg">
```

Uvedli jsme jediný povinný atribut (`alt`), takže pro prohlížeč je vše v pořádku. V tuto chvíli si myslí, že jsme zapomněli uvést cestu k obrázku a pochopitelně nic nestahuje. My jen musíme myslet na to, abychom obrázku definovali výšku v HTML nebo CSS.

Primitivní Javascript by pak dělal následující:

- Čekal by na posun stránky.
- Pak by zjišťoval, zda je daný obrázek ve viewportu, například pomocí `getBoundingClientRect()`.
- Pokud ano, vyměnil by `data-src` za `src`.

Zbytek by dokonal prohlížeč, který by obrázek standardně stáhl a zobrazil.

Takhle funguje většina knihoven pro lazyloading. 

### Ale čekat na posun stránky není dobrý nápad {#necekat-na-posun}

Protože je to dost nevýhodné z pohledu vykreslovacího výkonu. Viz následující [zápisek z webu Google pro vývojáře](https://developers.google.com/web/updates/2016/04/intersectionobserver).

> This approach (…) is painfully slow as each call to getBoundingClientRect() forces the browser to re-layout the entire page and will introduce considerable jank to your website.

Tož tak, tudy cesta nevede. Pojďme to zkusit moderněji.

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

```javascript
var options = {
  root: document.querySelector('#main'),
  rootMargin: '-50px 0px',
  threshold: 0.5
};
```

- `root` – element, jehož plochu má náš prvek překrývat. Obvykle chceme použít celý viewport, takže `root: null` nebo `root` neuvádějte – je to výchozí chování.
- `rootMargin` – vnější okraj kolem `root`, kdy se hlídač aktivuje. V případě lazyloadingu se samozřejmě hodí mít nějaký náskok a začít obrázky načítat chvilku před tím, než jsou ve viewportu. `rootMargin: '-50px 0px' tohle udělá.
- `threshold` – práh protnutí. Lidsky řečeno: jaká část prvku musí jít vidět, aby se hlídač aktivoval. `threshold: 0.5` aktivuje při padesátiprocentním překryvu. Výchozí hodnota je `0`, což je pro lazyloading optimální. Prostě se aktivuje hned při překrytí první řady pixelů.

<!-- AdSnippet -->


<!--

## Načítání obrázků s Unveil.js

Odložené načítání má mnoho [různých variant](http://jecas.cz/lazy-loading-obrazky), mně se z mnoha důvodů osvědčilo použití [Unveil.js](https://github.com/luis-almeida/unveil):

```html
<img src="bg.png" data-src="img1.jpg" alt="…">
```

Javascript hlídá scrollování stránky a když uživatel naroluje k obrázku, zkopíruje se obsah `data-src` do `src`.

Aby to bylo dokonale přístupné, musíte ještě uvést variantu pro čtečky a další scénáře kdy se Javascript nenačte:

```html
<img src="bg.png" data-src="img1.jpg" alt="…">
<noscript>
  <img src="img1.jpg" alt="…">
</noscript>
```

Pak už zbývá jen inicializace:

```html
$(document).ready(function() {
  $("img").unveil();
});
```

V dokumentaci Unveil.js jsou vidět i další možnosti. Umí totiž:

* na vysokokapacitním displeji načíst alternativní obrázek (`data-src-retina="img2-retina.jpg"`)
* dát lazyloadingu náskok, aby se obrázek nezačal načítat až ve chvíli kdy na něj uživatel naroluje (parametr [Treshold](https://github.com/luis-almeida/unveil#threshold))
* pomocí [Callbacku](https://github.com/luis-almeida/unveil#callback) přidat třeba animaci, která nám obrázek při načtení „vyfejduje“ (interakce se stránkou pak působí lépe)

Důležitý tip: řada webařů (včetně autora Unveil [v demonstračním příkladu](http://luis-almeida.github.io/unveil/)) propadla vášnivé lásce k preloaderům a do `src=""` jako výchozí obrázek dává takovýten točící se kolovrátek. Nedělejte to prosím.  Na uživatele působí daleko lépe, když tam před načtením obrázku vidí barevnou plochu mírně odlišenou od barvy pozadí.

## Na co všechno se lazyloading ještě může hodit?

V době responzivního webdesignu a pomalých mobilních připojení mu předpovídám velkou budoucnost.

Mě osobně se bude hodit na načítání jakéhokoliv obsahu náročnějšího na rychlost načítání stránky — kromě vlastních obrázků nebo videí je to embedovaný obsah třetí strany (Disqus komentáře, Youtube, sdílecí tlačítka). Nicméně tipuji, že pro některé weby bude zajímavé jej používat například i pro načtení složitější verze textového obsahu.


## Příklad k vyzkoušení

Demonstrace použití Unveil.js s fadeout animací načtených obrázků.

<p data-height="270" data-theme-id="502" data-slug-hash="ILhbK" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/machal/pen/ILhbK'>CSS3 Border Image</a> by Martin Michálek (<a href='https://codepen.io/machal'>@machal</a>) on <a href='https://codepen.io'>CodePen</a></p>
<script async src="https://codepen.io/assets/embed/ei.js"></script>

## Zajímavé odkazy

* Bohumil Jahoda má o [využití lazyloadingu](http://jecas.cz/lazy-loading) celou sérii článků
* [jQuery Waypoints](http://imakewebthings.com/jquery-waypoints/) nedělá lazyloading samotný, jen umí spouštět různé akce když uživatel nascrolluje na nějaké místo stránky
* [Ajax Include Pattern](https://github.com/filamentgroup/Ajax-Include-Pattern/) pro lazyloading obsahu

-->