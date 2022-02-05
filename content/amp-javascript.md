# JavaScript v AMP

<div class="web-only" markdown="1">

Už asi víte, že na psaní JavaScriptu musíte v [AMP](amp.md) jít trochu jinak než u obyčejných webových stránek.

</div>

<div class="ebook-only">

Už víte, že na psaní JavaScriptu musíte v AMP jít trochu jinak než u obyčejných webových stránek.

</div>

Běžný autorský JavaScript je zde zcela zakázaný. Prostě smůla.

To se projevuje zejména tím, že stránka obsahující [značku `<script>`](html-script.md) bude (s výjimkou vkládání AMP komponent a jejich konfigurací) nevalidní.

Nevalidní AMP stránka se neumístí do [AMP Cache](amp-cache.md), čímž tvorba AMP stránek ztrácí hlavní smysl.

<!-- AdSnippet -->

Ale pro webové vývojáře to není tak špatné, jak to vypadá. Čtěte dál, dozvíte se, že AMP šel v poslední době javascriptovým vývojářům hodně na ruku.

## Proč se AMP vyhýbá běžnému JS jako čert kříži? {#proc}

Tvůrcům AMPu jde především o rychlost. Tu může garantovat hlavně u validních stránek umístěných v AMP Cache, kde mimo jiné dochází k přednačtení stránek, které uživatel ještě nevidí.

Z toho vyplývají přinejmenším tři důvody, proč v AMP Cache není možné spouštět jakékoliv skripty:

1. *Bezpečnost*  
Zakešované stránky se zobrazují na cizích doménách, tedy např. Google.com. Spouštění cizích skriptů by zde mohlo být nebezpečné.
2. *Soukromí*  
Z důvodu přednačítání na pozadí by uživatele mohla sledovat i stránka, kterou ještě ani neviděl.
3. *Rychlost*  
V případě povolení neomezeného JavaScriptu není možné zajistit, aby se stránka vykreslovala dostatečně rychle. Mohl bych vám vyprávět, jak moc dokážeme my webaři zatopit rychlosti webů, když se pustíme do psaní JS.

<div class="ebook-only" markdown="1">

Do detailů zde nebudeme zacházet, protože už jsme téma probrali i v části první kapitoly věnující [se kritice této technologie](amp-kritika-myty.md).

</div>

Na druhou stranu – AMP dává autorům do ruky řadu nástrojů, kterými mohou omezit nevýhody vyloučení značky `<script>` a jeho obsahu z nástrojové sady, kterou se tvoří dnešní weby.

Z pohledu šíře možností pro tvorbu moderních interaktivních webů v AMP vlastně už dnes moc omezení není. Jen je potřeba dělat věci jinak.

Však čtěte. Možná, že budete příjemně překvapení.

## Komponenty uživatelského rozhraní {#komponenty}

Karusely, záložkové navigace, lightboxy, sdílecí ikonky, komentářové služby… K dispozici jsou vám i nástroje pro spouštění reklamy a analytiky.

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

<!-- AdSnippet -->

Autoři AMP připravili ke stovce komponent, které vám budou velice pravděpodobně pro výrobu běžného webu stačit.

<div class="ebook-only" markdown="1">
K vašim službám jsou [v textu o komponentách](amp-komponenty.md).
</div>

<div class="web-only" markdown="1">
Seznam komponet najdete v dokumentaci na [amp.dev](https://amp.dev/documentation/components/).
</div>

## Interaktivita, uchování stavu {#bind-state}

`amp-bind`, `amp-state` a další komponenty pro dynamickou práci s obsahem posunují naše možnosti dále.

Pro ilustraci – dynamická změna CSS třídy se může provést následovně:

```html
<p class="background-red" [class]="myClass">
  Ahoj!
</p>

<button on="tap:AMP.setState({ myClass: 'background-green' })">
  Změň barvu
</button>
```

<div class="ebook-only" markdown="1">
Více najdete dál v této kapitole [v textu o dynamických komponentách](amp-komponenty-dynamicke.md).
</div>

<div class="web-only" markdown="1">

O komponentách pro dynamické chování si můžete opět přečíst v dokumentaci na [amp.dev](https://amp.dev/documentation/components/). Vyzdvihnu některé z nich:

- [amp-bind a amp-state](https://amp.dev/documentation/components/amp-bind/?format=websites) – „bajndování“ a ukládání stavu.
- [amp-form](https://amp.dev/documentation/components/amp-form/?format=websites) – dynamické formuláře.
- [amp-list](https://amp.dev/documentation/components/amp-list/?format=websites) – stažení aktuálních dat z vašeho API pro zobrazení v AMP stránce.
- [amp-mustache](https://amp.dev/documentation/components/amp-mustache/?format=websites) – šablonovací jazyk Mustache pro výpis dynamických části stránky.
- [amp-selector](https://amp.dev/documentation/components/amp-selector/?format=websites) – uživatel vybere z několika položek a jeho výběr někam pošlete.

</div>

## Systém akcí a událostí {#akce-udalosti}

AMP také nabízí možnost vyvolání události na základě akce uživatele přes atribut `on=""`:

```html
<button on="eventName:targetId.methodName(arg1=value, arg2=value)">
  Tlačítko vyvolávající akci
</button>
```

Vše vysvětlíme:

- `eventName` je vyžadované jméno akce. Globálně dostupná akce je například `tap` (tapnutí nebo kliknutí na element), dále pak akce související se zobrazováním či schováváním prvků: `hide`, `show` a `toggleVisibility`.
- `targetId` je vyžadovaná hodnota atributu `id` prvku, který hodláme ovlivňovat. V AMP jsou k dispozici také speciální cíle jako `navigateTo()` pro přechod na URL nebo rodiče iframe a dále mj. také `goBack`, `print` nebo `scrollTo()` pro skok zpět v historii prohlížení, tisk stránky nebo posun na určitý prvek.
- `methodName` je volitelný název metody cílového objektu. Většina komponent má nějaké metody k dispozici, viz dokumentace. Pokud ji nedefinujeme, použije se výchozí metoda objektu.
- `arg=value` jsou volitelné parametry metody.

A ještě pár příkladů:

```html
<amp-lightbox id="photo-slides"></amp-lightbox>
<button on="tap:photo-slides">Ukaž obrázky</button>
```

V `on="tap:photo-slides"` říkáme, že se po kliknutí na tlačítko (`tap`) má oslovit prvek identifikovaný jako `photo-slides` a provést výchozí akce takto označené komponenty (`amp-lightbox`).

Z dokumentace bychom vyčetli, že jde o akci `open`, která dotčený lightbox otevírá.

```html
<div id="warning-message">Ahoj!</div>
<button on="tap:warning-message.hide">Schovej</button>
```

Zde jsme prostřednictvím `on="tap:warning-message.hide"` nakázali, ať se po kliknutí (`tap`) schová (provede akce `hide`) prvek `warning-message`.

<div class="ebook-only" markdown="1">
Detaily jsou i v tomto případě nad rámec obsahu knížky, ale najdete je na amp.dev. [vrdl.in/ampact](https://amp.dev/documentation/guides-and-tutorials/learn/amp-actions-and-events#)
</div>

<div class="web-only" markdown="1">
Detaily o systému akcí a událostí najdete na [amp.dev](https://amp.dev/documentation/guides-and-tutorials/learn/amp-actions-and-events).
</div>

## amp-iframe {#amp-iframe}

Komponenta poslední záchrany. V `amp-iframe` můžete za určitých okolností použít JavaScript tak, jak jste zvyklí. Alespoň omezeně. Velmi se to hodí při vkládání kódu třetí strany, třeba map od Seznamu nebo Googlu.

Ukázka:

```html
<amp-iframe width="300" height="300" layout="responsive"
  sandbox="allow-scripts allow-same-origin"
  src="https://example.com/iframe">
</amp-iframe>
```

<div class="ebook-only" markdown="1">
Pro více informací o `amp-iframe` jděte na [text o layoutových komponentách](amp-komponenty-layout.md).
</div>

<div class="web-only" markdown="1">
Pro více informací o `amp-iframe` jděte i v tomto případě na [amp.dev](https://amp.dev/documentation/components/amp-iframe/?format=websites).
</div>

## Autorský JavaScript v amp-script {#amp-script}

Komponenta `amp-script` je vcelku nová, ale myslím si, že razantně změní způsob tvorby AMP stránek, ale i to, jak se o AMPu uvažuje.

Pojďme si ještě ukázat, jak JS v AMP funguje:

```html
<!-- ahoj.html -->
<amp-script layout="container" src="https://example.com/ahoj.js">
  <button id="hello">Ahoj!</button>
</amp-script>
```

```javascript
// ahoj.js
const button = document.getElementById('hello');
button.addEventListener('click', () => {
  const el = document.createElement('h1');
  el.textContent = 'Nazdar!';
  document.body.appendChild(el);
});
```

Kód tedy umístíme na do souboru `ahoj.js` na naši doméně. Pokud JavaScriptu rozumíte ještě méně než já, pak vězte, že kód obstarává čekání na kliknutí na tlačítko (`button`). Když se tohle přihodí, vymění text „Ahoj!“ za „Nazdar!“.

Takhle to vypadá jako starý dobrý běžný JavaScript ve starých dobrých běžných stránkách, že ano? Nenechte se mýlit, funguje to úplně jinak.

Podívejte se na video „Kristofer Baxter: amp-script“.

YouTube: [youtu.be/sYXkVOiz77I](https://www.youtube.com/watch?v=sYXkVOiz77I)

`amp-script` cílí zejména na dva problémy současného JavaScriptu.

První je to, že prohlížeč vždy pracuje v jednom vlákně. V jedné frontě zároveň zpracovává JavaScript, CSS a další prvky stránky, zároveň vykresluje a ještě k tomu musí reagovat na pokusy uživatele o interakci. To je pomalé.

Druhý problém je v šíři možností. Ani zkušení javascriptoví vývojáři si často neuvědomují, jaké dopady bude mít kód, který píší, na výkon stránky. Někdy stačí jeden `document.write` a výkon stránky je [ohrožený](https://blog.dareboost.com/en/2016/09/avoid-using-document-write-scripts-injection/).

<figure>
<img src="../dist/images/original/vdamp/amp-script-vlakna.png" alt="">
<figcaption markdown="1">
*amp-script běží ve vedlejším vlákně a neohrozí tak vykreslování stránky. Zdroj: Paul Bakaus. [vrdl.in/ampexpo](https://slideslive.com/38919320/maximizing-web-developer-productivity-with-amp)*
</figcaption>
</figure>

Jak to tedy komponenta `amp-script` řeší?

- *Service Worker a dvě vlákna*  
JS kód v AMPu běží [ve Web Worker](https://www.zdrojak.cz/clanky/webdesigneruv-pruvodce-po-html5-multithreading-s-webworkers/), vedlejším vlákně. Bude tak mít svou „vymezenou parcelu na pískovišti“. Na rozdíl o běžně obtížné práce s Web Workery ale v AMP o nich vývojář prakticky neví.
- *Worker DOM*  
Podobně jako moderní javascriptové frameworky bude kvůli rychlosti pracovat s virtuálním DOM stromem, ovšem technologií Web Worker bude zpracovávaný mimo hlavní vlákno prohlížeče. To je dvakrát dobrá zpráva, protože obyčejně není z Web Workeru možné do DOMu přistupovat. Více o [Worker DOM](https://github.com/ampproject/worker-dom/).
- *Omezení*  
Jeden `amp-script` může mít maximální 10 kB, všechny dohromady ve stránce pak 150 kB. Je možné kód spouštět jen na akci uživatele. K dispozici také nejsou všechny vlastnosti známé z běžného JavaScriptu. Podívejte se na [tabulku kompatibility](https://github.com/ampproject/worker-dom/blob/master/web_compat_table.md).

Komponenta `amp-script` podporuje populární javascriptové frameworky jako React, Angular, Vue.js… nebo jQuery, pokud jinak nedáte.

`amp-script` je velké téma, určitě se k němu ještě vrátíme. V tuhle chvíli vás alespoň odkážu na další zdroje:

- `amp-script` v dokumentaci: [vrdl.in/ampscript](https://amp.dev/documentation/components/amp-script)
- Paul Bakaus ukazuje AMP jako frontendový framework na WebExpo 2019: [vrdl.in/ampexpo](https://slideslive.com/38919320/maximizing-web-developer-productivity-with-amp)

<div class="ebook-only">
Mluvili jsme o triumvirátu webových technologií. HTML, CSS a JavaScriptu. V případě AMP jsou to ale jen loutkoví vládci. Ve skutečnosti jim vládne někdo jiný. Král všech králů. Validátor první.
</div>

<!-- AdSnippet -->
