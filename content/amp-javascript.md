# JavaScript v AMP

Chcete psát JS na AMP stránce? [Z úvodního představení](amp-co-je-rychlost-predevsim.md) technologie už asi víte, že máte smůlu.

Autorský JavaScript je zde zcela zakázaný, což se projevuje zejména tím, že stránka obsahující značku `<script>` bude (s výjimkou vkládání AMP komponent a jejich konfigurací) nevalidní. Neumístí se tedy do AMP Cache, čímž tvorba AMP stránek ztrácí hlavní smysl.

## Proč to AMP dělá?

AMP jde především o rychlost. Tu může garantovat hlavně u validních stránek umístěných v Cache. A jsou zde přinejmenším dva důvody, proč v ní není možné spouštět jakékoliv skripty:

1. Bezpečnost – zakešované stránky se zobrazují na cizích doménách, tedy např. Google.com. Spouštění cizích skriptů by zde mohlo být nebezpečné.
2. Rychlost – v případě neomezeného JavaScriptu není možné zajistit, aby se stránka vykreslovala dostatečně rychle.

Do detailů nebudeme zacházet, protože už jsme téma probrali i v části první kapitoly věnující [se kritice této technologie](amp-kritika-myty.md).

Na druhou stranu – AMP dává autorům do ruky řadu nástrojů, kterými mohou nevýhody chybějící javascriptové části tvorby dnešních webů zredukovat.

## Jak nahrazuje AMP nepřítomnost JavaScriptu?

Namísto komponent napsaných vlastním JavaScriptem můžete používat velké množství interaktivních AMP komponent. Je zde také řada možností, jak si naprogramovat vlastní interaktivní chování. Například s pomocí komponenty `amp-bind`. Můžete také vložit `amp-iframe`, ve kterém – světe, div se – můžete nejpopulárnější programovací jazyk použít.

### Komponenty uživatelského rozhraní

Karusely, záložkové navigace, lightboxy, sdílecí ikonky, komentářové služby… K dispozici jsou vám dokonce i nástroje pro spouštění reklamy a analytiky.

Chcete například lightbox? Je to jednoduché:

```html
<amp-image-lightbox id="myLightbox"
  layout="nodisplay">
</amp-image-lightbox>

<amp-img on="tap:myLightbox"
  role="button" tabindex="0"
  src="image1.jpg"
  width="200" height="100">
</amp-img>
```

Nemusíte napsat ani řádku javascriptového kódu, což je příjemné zejména pro programátorsky méně zběhlé autory stránek.

Autoři AMP připravili ke stovce komponent, které vám budou velice pravděpodobně pro výrobu běžného webu stačit.

K vašim službám jsou [v textu o komponentách](amp-komponenty.md).

### Interaktivita, uchování stavu

`amp-bind`, `amp-state` a další komponenty pro dynamickou práci s obsahem posunují dále naše možnosti. Hlavně v situacích, kde vám přestávají stačit běžné moduly.

Pro ilustraci – dynamická změna CSS třídy se provede následovně:

```html
<p class="background-red" [class]="myClass">
  Ahoj!
</p>

<button on="tap:AMP.setState({ myClass: 'background-green' })">
  Změň barvu
</button>
```

Více najdete dál v této kapitole [v textu o dynamických komponentách](amp-komponenty-dynamicke.md).

### Systém akcí a událostí

AMP nabízí možnost vyvolání události na základě akce uživatele přes atribut `on=""`:

```html
<button on="eventName:targetId.methodName(arg1=value, arg2=value)">
  Tlačítko vyvolávající akci
</button>
```

Vše vysvětlíme:

* `eventName` je vyžadované jméno akce. Globálně dostupné akce jsou: `tap` (tapnutí nebo kliknutí na element), dále pak akce související se zobrazováním či schováváním prvků: `hide`, `show` a `toggleVisibility`.
* `targetId` je vyžadovaná hodnota atributu `id` prvku, který hodláme ovlivňovat. V AMP jsou k dispozici také speciální cíle jako `navigateTo()` pro přechod na URL nebo rodiče iframe a dále mj. také `goBack`, `print` nebo `scrollTo()` pro skok zpět v historii prohlížení, tisk stránky nebo posun na určitý prvek.
* `methodName` je volitelný název metody cílového objektu. Většina komponent má nějaké metody k dispozici, viz dokumentace. Pokud ji nedefinujeme, použije se výchozí metoda objektu.
* `arg=value`  jsou volitelné parametry metody.

A ještě pár příkladů:

```html
<amp-lightbox id="photo-slides"></amp-lightbox>
<button on="tap:photo-slides">Ukaž obrázky</button>
```

V `on="tap:photo-slides"` říkáme, že se po kliknutí na tlačítko (`tap`) má oslovit prvek identifikovaný jako `photo-slides` a provést výchozí akce takto označené komponenty (`amp-lightbox`). Z dokumentace bychom vyčetli, že jde o akci `open`, která dotčený lightbox otevírá.

```html
<div id="warning-message">Ahoj!</div>
<button on="tap:warning-message.hide">Schovej</button>
```

Zde jsme prostřednictvím `on="tap:warning-message.hide"` nakázali, ať se po kliknutí (`tap`) schová (provede akce `hide`) prvek `warning-message`.

Detaily jsou i v tomto případě nad rámec obsahu knížky, ale najdete je na amp.dev. [vrdl.in/ampact](https://amp.dev/documentation/guides-and-tutorials/learn/amp-actions-and-events#)

### amp-iframe

Komponenta poslední záchrany. V `amp-iframe` můžete za určitých okolností použít JavaScript tak, jak jste zvyklí. Alespoň omezeně. Velmi se to hodí při vkládání kódu třetí strany, třeba map od Seznamu nebo Googlu.

Ukázka:

```html
<amp-iframe width="300" height="300" layout="responsive"
  sandbox="allow-scripts allow-same-origin"
  src="https://example.com/iframe">
</amp-iframe>
```

Pro více informací o `amp-iframe` jděte na [text o layoutových komponentách](amp-komponenty-layout.md).

## Autorský JavaScript možná nakonec povolený bude. Jen jinak

Komponenta `amp-script` by mohla razantně změnit způsob tvorby AMP stránek.

Autoři AMP nám tady trochu kazí knížku, protože v době jejího psaní je tato revoluční komponenta v experimentální fázi a celá její budoucnost se vyjasní pravděpodobně až v druhé polovině roku 2019.

Co o ní aktuálně víme?

* Kód by měl být uložený v prohlížeči (pomocí technologie Service Worker). Bude tak mít svou „vymezenou parcelu na pískovišti“.
* Podobně jako moderní javascriptové frameworky bude kvůli rychlosti pracovat s virtuálním DOM stromem, ovšem technologií Web Worker bude zpracovávaný mimo hlavní vlákno prohlížeče.
* Bude podporovat velké javascriptové frameworky jako React nebo Vue.js.
* K dispozici nebudou všechny vlastnosti známé z běžného JavaScriptu. Autoři zmiňují například částečnou podporu u funkcí pro vyhledávání v DOM, jako je `querySelector`.

Pojďme si ještě ukázat, jak by to mělo fungovat:

```html
<!-- ahoj.html -->
<amp-script layout="container" src="https://example.com/ahoj.js">
  <button id="hello">Ahoj!</button>
</amp-script>
```

```js
// ahoj.js
const button = document.getElementById('hello');
button.addEventListener('click', () => {
  const el = document.createElement('h1');
  el.textContent = 'Nazdar!';
  document.body.appendChild(el);
});
```

Více informací najdete v dokumentaci, v této fázi vývoje komponenty není třeba vás tím více zatěžovat. [vrdl.in/ampscript](https://amp.dev/documentation/components/amp-script)

Mluvili jsme o triumvirátu webových technologií. HTML, CSS a JavaScriptu. V případě AMP jsou to ale jen loutkoví vládci. Ve skutečnosti jim vládne někdo jiný. Král všech králů. Validátor první.
