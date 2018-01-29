# Lazy loading obrázků a dalších prvků: Intersection Observer a doporučované knihovny

[Lazy loading](http://cs.wikipedia.org/wiki/Lazy_loading) je dost široký pojem, ale ve světě webové kodéřiny označuje techniku, která zajistí načtení části obsahu stránky až ve chvíli, kdy ji uživatel potřebuje. 

<!-- AdSnippet -->

Jde tedy o odložené načítání. Nejčastěji je navázané na scrollování stránky. „Lazyloadovaný“ prvek se nestáhne dokud uživatel neposune stránkou tak, aby byl prvek vidět.

Nejčastěji lazy loading aplikujeme na obrázky, ale je vhodné jej využít i na vkládané prvky – iframe s Youtube videi, mapami od Google nebo Seznamu, sdílecími Facebooku nebo Twitteru… Odložené načítání se ale může týkat i vašeho vlastního obsahu.

<figure>
<img src="dist/images/original/lazyloading.jpg" alt="Lazy loading obrázků">
<figcaption markdown="1">    
*Odložené načtení obrázků, které nejsou viditelné ve viewportu uživatele. Ušetří to data a může zrychlit vykreslení stránky.*
</figcaption> 
</figure>

## K čemu je to dobré? {#proc}

Datově náročnější prvky rozhraní, které nejsou [ve viewportu](viewport-meta.md) vidět,  nemusí uživatel stahovat.

Je to užitečné ze dvou důvodů: 

- Uživatel *ušetří data* a vývojáři servery. Velká část lidí na vašich webech totiž neposune stránku a rovnou odchází nebo najde co potřebuje už v horní části stránky.
- Jako vývojáři můžeme pomocí lazy loadingu *prioritizovat* načtení jiných prvků. Například webfontů, které máme nalinkované v CSS souborech. Ty jsou pro stránku důležitější než například obrázky schované mimo viewport uživatele.


## Jak to funguje? {#jak}

Nejčastěji se odkládá načítání obrázků. Tak, že cestu k souborům nevložíte do parametru `src` nebo [`srcset`](srcset-sizes.md). Všechny soubory,  které jsou v nich vložené, totiž mají v seznamu načítání poměrně vysokou prioritu a prohlížeč při jejich stahování nezastavíte.

Pomůžeme si najčastěji vlastním data atributem:

```html
<img alt="…" data-src="obrazek.jpg">
```

Uvedli jsme jediný povinný atribut (`alt`), takže pro prohlížeč je vše v pořádku. V tuto chvíli si myslí, že jsme zapomněli uvést cestu k obrázku a pochopitelně nic nestahuje. My jen musíme myslet na to, abychom obrázku definovali výšku v HTML nebo CSS. Proto, aby obsah pod ním po stažení a zobrazení obrázku neposkakoval.

Primitivní Javascript by pak dělal následující:

- Čekal by na posun stránky uživatelem.
- Pak by zjišťoval, zda je daný obrázek ve viewportu, například pomocí `getBoundingClientRect()`.
- Pokud ano, vyměnil by `data-src` za `src`.

Zbytek by dokonal prohlížeč, který by obrázek standardně stáhl a zobrazil.

Takhle funguje většina knihoven pro lazyloading. 

Můžete si to zkusit například na mém příkladu, který používá knihovnu Unveil.js. [cdpn.io/e/ILhbK](https://codepen.io/machal/pen/ILhbK)

### Ale čekat na posun stránky není dobrý nápad {#necekat-na-posun}

Protože je to dost nevýhodné z pohledu vykreslovacího výkonu. Viz následující [zápisek z webu Google pro vývojáře](https://developers.google.com/web/updates/2016/04/intersectionobserver).

> This approach (…) is painfully slow as each call to getBoundingClientRect() forces the browser to re-layout the entire page and will introduce considerable jank to your website.

Tož tak, tudy cesta nevede. Pojďme to zkusit moderněji.

## Lazy Loading s Intersection Observer {#io}

[Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) je javascriptové API, které umožní asynchronně hlídat protnutí plochy konkrétního prvku s plochou jiného prvku. Nebo s plochou viewportu.

Podstatná výhoda je výkon. Jde o nativní funkci, takže prohlížeč nezatěžujeme pravidelným přepočítáváním a překreslováním stránky.

<!-- AdSnippet -->

Nativně jej podporuje většina prohlížečů. V době psaní textu nefunguje jen ve všech verzích Safari a pak v Internet Exploreru. Viz [CanIUse.com](https://caniuse.com/#feat=intersectionobserver). Existuje ale [polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) nebo prostě můžete udělat detekci vlastnosti a lazy loading nabídnout jen většině uživatelů prohlížečů, které Intersection Observer umí.

Použití je jednoduché:

```javascript
// Nastavíme hlídače
var observer = new IntersectionObserver(callback, options);

// Řekneme mu, které prvky má hlídat
var contentImages = document.querySelector('.content img');
observer.observe(contentImages);
```

Pár odkazů:

- Demo fungování Observeru: [cdpn.io/e/Qqjxde](https://codepen.io/SimonEvans/pen/Qqjxde)
- Demo s lazy loadingem: [cdpn.io/e/XavqyY](https://codepen.io/2kool2/pen/XavqyY)
- [Článek o lazy loadingu s Intersection Observerem](https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/) na Smashing Magazine.

V příkladech si všimněte [`rootMargin`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin), vlastnosti Intersection Observeru, která umožní nastavit předstih pro aktivaci načtení obrázků. Např. `rootMargin: "100px 0"` pro stopixelový předstih. Obrázek se prostě začne stahovat už když se *blíží* k viewportu. Nechávám si tedy náskok pro případ pomalejšího připojení.

Intersection Observer používá také řada moderních knihoven pro usnadnění lazy loadingu. Nedávno jsem si k nim dělal rešerši. A že jste to vy, zde jsou její výsledky.


## Knihovny pro lazy loading {#knihovny}

Často bude stačit napsat kus kódu a využít Intersection Observer. Pokud byste přesto měli speciálnější požadavky, zde je seznam knihoven, které lazy loading podporují.

<div class="rwd-scrollable f-sm" markdown="1">

| Knihovna                                                  | Velikost | jQuery/JS     | Obsah         | Int. Observer |
|-----------------------------------------------------------|---------:|:--------------|:--------------|:-------------:|
| [Unveil](http://luis-almeida.github.io/unveil/)           |  0,7 kB  | jQuery, Zepto | img           |               |
| [Recliner](https://github.com/sourcey/recliner)           |  1,2 kB  | jQuery        | img, iframe, ajax |     +     |
| [LazyLoad](https://github.com/verlok/lazyload)            |  3,5 kB  | JS            | img, srcset   |       +       |
| [jQuery Lazy](http://jquery.eisbehr.de/lazy/)             |  4,9 kB  | jQuery, Zepto | img, iframe   |               |
| [Lazyframe](https://github.com/viktorbergehall/lazyframe) |  5,1 kB  | JS, jQuery    | iframe        |               |
| [lazySizes](http://afarkas.github.io/lazysizes/)          |  6,5 kB  | JS            | img, iframe, ajax…  |         |

</div>

Poznámky k tabulce:

- Knihovny řadím podle velikosti minifikovaného distribučního souboru. Nejmenší mají samozřejmě přednost.
- Dále je důležité, jestli knihovna vyžaduje jQuery nebo si vystačí s čistým Javascriptem. 
- *Obsah* - jaký typ obsahu umí odloženě načítat? Obvykle potřebujeme více než jen obrázky.
- Pole *Int. Observer* říká, zda umí využít Intersection Observer.

Pokud bych potřeboval lazy loading na menší nebo střední web, preferoval bych vlastní řešení pomocí Observeru. Alternativně bych sáhl po knihovnách Recliner nebo LazyLoad. Knihovny ale mají daleko více parametrů než ty v tabulce uvedené. Raději si udělejte hlubší analýzu než některou vyberete.


## Nepoužívejte animované zástupné symboly {#zastupne-symboly}

Designérský tip: Řada webařů (včetně autora knihovny Unveil [v demonstračním příkladu](http://luis-almeida.github.io/unveil/)) propadla vášnivé lásce k preloaderům. Do `src=""` jako zástupný symbol (placeholder) dává točící se kolovrátek nebo jiné animované zvěrstvo. Nedělejte to prosím.  

Jsem přesvědčený, že na uživatele působí daleko lépe, když na místě před načtením obrázku uvidí čistou barevnou plochu mírně odlišenou od barvy pozadí. Animace zbytečně poutají pozornost.

Shrňme si to:

- Používejte lazy loading! K ušetření dat a k prioritizaci stahování jiný věcí než prvků mimo viewport.
- Snažte se napsat si vlastní řešení s pomocí Intersection Observeru.
- Z knihoven volte ty menší a ty, které využívají Intersection Observer: Recliner nebo LazyLoad.
- Nepoužívejte animované placeholdery.


<!-- AdSnippet -->

