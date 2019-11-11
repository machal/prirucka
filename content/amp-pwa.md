# AMP a PWA

Hodně zajímavé možnosti nabízí kombinace technologií AMP s PWA, progresivními webovými aplikacemi.

Raději začneme úvodem do PWA, aby hned na začátku nenastalo nedorozumění. To bychom vážně neradi.

## Co to safra je PWA? {#pwa}

<div class="ebook-only" markdown="1">

Progresivní webová aplikace je sada technologií, která umožňuje webům, aby „ukradly“ některé vlastnosti nativním mobilním aplikacím. Co jsou ty odcizené vlastnosti?

</div>

<div class="web-only" markdown="1">

[Progresivní webová aplikace (PWA)](pwa.md) je sada technologií, která umožňuje webům, aby „ukradly“ některé vlastnosti nativním mobilním aplikacím. Co jsou ty odcizené vlastnosti?

</div>

* Fungování offline.
* Instalace na plochu mobilního telefonu.
* Posílání systémových notifikací.

To jen pro ukázku. PWA je sada technologií (Service Worker, Web App Manifest, Cache API, Fetch API…), která toho umí daleko více.

PWA je velmi těžko přesně definovatelné. V zásadě jde o moderní webové aplikace s uvedenými vlastnostmi.

Na rozdíl od AMP jde spíše o zastřešující pojem, který pomůže zpopularizovat určitý způsob tvorby webů a webových aplikací. Na vašem webu samozřejmě můžete převzít pouze jednu z uvedených vlastností.

<div class="ebook-only" markdown="1">

Úvod do PWA je na Vzhůru dolů. [vrdl.cz/p/pwa](https://www.vzhurudolu.cz/prirucka/pwa)

</div>

A jak to jde dohromady s AMP? Jde to dohromady s oním „P“ – jako „Pages“. Zatímco u AMP se předpokládá nasazení na jednodušší, statičtější typ obsahu (webové _stránky_), PWA je zase sada technologií zaměřená na složitější, dynamičtější a interaktivnější typ projektů (webové _aplikace_).

<div class="related web-only" markdown="1">
- [Co je to AMP](amp.md)
- [Weby vs. aplikace](weby-vs-aplikace.md)
</div>

Tudíž se nabízí využít technologii bleskurychlých stránek jako základ nebo datový zdroj či vstupní „portál“ pro PWA. K tomu se ještě dostaneme. Nejprve ale servírujeme obecné srovnání AMP a PWA.

## Čím může AMP doplňovat PWA? {#PWA}

* _Snadnost objevení_  
AMP je optimalizovaný pro stroje vyhledávačů. A jak víte, na některých místech výsledků vyhledávání Google může dostat přednost oproti non-AMP obsahu. PWA jsou na tom díky velkému podílu JavaScriptu na renderování stránky s objevitelností roboty daleko hůř.
* _Rychlost doručení k uživateli_  
AMP je [z Cache](amp-cache.md) zobrazený okamžitě, PWA to může napoprvé nějakou dobu trvat, protože obvykle stahuje velké javascriptové frameworky se spoustou funkčností.
* _Uživatelské skriptování_  
AMP neumožňuje vlastní skripty, PWA je plnohodnotná javascriptová aplikace.
* _Dynamičnost obsahu_  
AMP je určený spíše pro statický obsah. PWA v dynamičnosti žádné omezení neklade.

Snad je z toho vidět, že AMP a PWA tvoří vcelku vydařený pár. AMP je statičtější základ, velmi dobře distribuovaný, PWA pak nabídne pokročilejší funkce. Z toho se odvíjí i možnosti kombinace obou technologických parťáků.

## Možné kombinace AMP s PWA

V zásadě jsou tři:

1. _AMP s výjimkami pro PWA_  
Jde o přístup, jaký jsme ukazovali v povídání o [řešení na Vzhůru dolů](amp-implementace-vyjimky.md). Do AMP distribuce zkrátka pošlete mírně modifikovaný kód, například neobsahující JavaScripty, s vlastnostmi PWA.
2. _AMP jako zdroj dat pro PWA_  
V tomhle případě vložíte své AMP stránky do plnohodnotné verze a jejich obsah použijete jako datový zdroj pro progresivní webovou aplikaci.
3. _AMP jako vstupní bod pro PWA_  
Opět – do AMP nepošlete plnohodnotnou verzi. V AMP verzi pak můžete připravit uživatele na vstup do PWA, například pomocí instalace Service Worker přes `<amp-install-serviceworker>`.

Třetímu bodu se ještě pověnujeme hned v další sekci. Jinak jsme se tady moc nechtěli zabývat technickými detaily, pro jejich sběr vás odkazujeme na dvě místa:

* Do výborného textu „What Are Progressive Web AMPs?“ na Smashing Magazine. [vrdl.in/amppwas](https://www.smashingmagazine.com/2016/12/progressive-web-amps/)
* Do stránky „How AMP and PWA relate to each other“ na amp.dev. [vrdl.in/amppwacomb](https://amp.dev/documentation/guides-and-tutorials/learn/combine-amp-pwa)

## AMP jako vstupní bod: Cesta uživatele za vaším obsahem

Uživatelský prožitek může při zapojení AMP i PWA vypadat třeba následovně. Bavme se o našem e-shopu s oblečením a obuví pro děti z lesních mateřských školek, aby to nebylo úplně triviální.

### 1) Objeví váš web

„Tohle vypadá dobře!“ mumlá si uživatelka pod vousy (pardon, neodolali jsme), když kliká na náš web, který objevila ve výsledcích vyhledávání Googlu nebo na [dalších místech](amp-platformy.md), kde je možné se s AMP potkat.

### 2) Prakticky okamžitě se jí otevře AMP verze a do hry vstupuje Service Worker

Řekněme, že distribuci pomocí AMP máte povolenou zatím jen na detailech produktů. Tady uživatelka vidí fotografie, popis, cenu a také podobné produkty.

Vy mezitím můžete využít příležitosti a potichu nainstalovat Service Worker:

```html
<amp-install-serviceworker
  src="https://forestkid.cz/serviceworker.js"
  layout="nodisplay">
</amp-install-serviceworker>
```

Co to je, ten Service Worker? Skript, který se nainstaluje do prohlížeče a může pracovat i ve chvílích, kdy se uživatelé na vašem webu aktuálně nevyskytují.

Service Worker je v kombinaci s AMP přímo ďábelská věc. S jeho pomocí můžete například do mezipaměti prohlížeče uložit soubory, které jsou důležité pro načtení plnohodnotného PWA webu:

```js
var CACHE_NAME = 'moje-cache';
var urlsToCache = [
  '/',
  '/css/style.css',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});
```

Více o tomto využití Service Workeru najdete na amp.dev. [vrdl.in/amp2pwa](https://amp.dev/documentation/guides-and-tutorials/integrate/amp-to-pwa?format=websites)

Pojďme ale zpět k naší uživatelce. Máme tady problém. Prohlížený produkt jí totiž nevyhovuje. Nezaujaly ji ani podobné produkty. Ale náš e-shop se jí líbí (kromě jiného i proto, že se zobrazil rychle), takže hledá navigaci na další podobné produkty.

„A helemese, tady je odkaz na kategorii ‚Dětské pohorky‘, ty náš malý Vladimírek zrovna prošlapal, pacholek jeden,“ říká, kliká a přechází na plnohodnotný web.

### 3) Dostává se na PWA web

Kategorie „Dětské pohorky“ se už načte z vašeho serveru. S výpomocí zahřátí mezipaměti prohlížeče to netrvalo tak dlouho. Tady můžete použít vlastní JavaScript, takže nabídnete snadné filtrování produktů, jejich řazení a tak dále. Použijete frameworky React, Vue nebo některý jiný.

Na této stránce je samozřejmě možné nabídnout některé z dalších vlastností progresivní webové aplikace. Například zasílání notifikací, uložení ikony na plochu a podobně.

Dává vám to smysl? Snad ano.

Zbývají nám dva úkoly. Vymyslet oslí můstek k další možnosti implementace AMP – pomocí pluginů do redakčních systémů – a také se omluvit všem našim nevousatým uživatelkám. Ale to už z nás asi mluví autorská únava. Pojďme radši na ty pluginy.
