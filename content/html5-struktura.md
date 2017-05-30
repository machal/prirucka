# Jak definovat strukturu v HTML a proč jsem začal mít rád HTML5 tagy


Sekční tagy a `role` atributy umožňují lépe strukturovat stránku. Užitečné jsou hlavně ve slepeckých čtečkách. A myslím, že je čas se s nimi skamarádit. 


## Dříve: zbytečnost, která komplikovala weby v IE 8 a starších

Sekční tagy v HTML5 to se mnou nemají lehké. Před čtyřmi lety jsem se naštval a napsal článek „[HTML5 strukturální elementy stojí za starou bačkoru](http://kratce.vzhurudolu.cz/post/38371151431/html5-elementy)“. Uváděl jsem tyto argumenty proti jejich používání:

- Tagy jsou duplicitní k WAI ARIA oblastem. Orientační oblasti stránky bylo už tehdy možné vyznačit pomocí atributů `role=""` ze specifikace [WAI ARIA](wai-aria.md). A jejich podpora byla ve čtečkách v té době daleko lepší než podpora HTML5 tagů. 
- Závislost na Javascriptu v Internet Exploreru 8. Abyste totiž s HTML5 tagy mohli v IE8 a starších pracovat v CSS, museli jste přidat kousek skriptu. A když skript selhal, stránka se nehezky rozbila. 
- …a celkově jsou tak nějak k ničemu. Kromě přehlednosti HTML kódu nic nepřidávají. Vyhledavače a jiné stroje je nijak nezpracovávají.

<!-- AdSnippet -->

Jenže doba se změnila a kunratické proti-sekčně-tagové hnutí vychladlo.  


## Teď: IE 8 je mrtvý a podpora HTML5 ve čtečkách velmi dobrá

Internet Explorer 8 a starší dnes nejsou na návštěvnosti většiny webů zastoupené [více než půlprocentním podílem](prohlizece.md). A míra podpory HTML5 tagů prohlížeči a slepeckými čtečkami je už velmi podobná podpoře WAI-ARIA atributů. 

![Podpora přístupnosti HTML5 tagů v prohlížečích](dist/images/original/html5-accessibility.jpg)

Když se totiž podíváte na data z [HTML5accessibility.com](http://www.html5accessibility.com/), sekční HTML5 elementy neumí především Explorer 11. Pak tam jsou jen dvě výjimky pro `<header>` u Chrome a [`<figure>`](figure-figcaption.md) u Safari.

Podpora `role=""` atributů je ale podle všeho vyšší. Proč tedy používat HTML5 tagy? Vypadá to totiž, že do budoucna bude pro vyznačení oblastí možné používat jen tagy. [Radek Pavlíček](http://poslepu.blogspot.cz/2012/12/proc-bych-nerad-aby-strukturalni-html5.html) v odpovědi na můj tehdejší hejt psal, že sekční elementy zvyšují pravděpodobnosti, že je kodéři použijí. `<main>` napíšete radši než `role="main"`. Ano, jistý efekt to mít může. 

<!-- AdSnippet -->

Spíše se ale obrátím k autoritě W3C.org, která dneska už [vyloženě říká](https://www.w3.org/TR/aria-in-html/):

> První pravidlo použití ARIA zní: Pokud můžete použít nativní element, který má požadovaný význam nebo chování už v sobě, prostě ho použijte.

Vypadá to, že jsem se mýlil a HTML5 tagy se pro vyznačování oblastí stránky ujaly. Jednou tedy může nastat situace, že čtečka nebo jiný stroj implementuje význam oblasti stránky jen přes HTML5 element a nikoliv WAI ARIA oblast.

Proto **doporučuji používat obě varianty**: HTML5 tag kvůli dopředné kompatibilitě a k němu WAI-ARIA atribut kvůli kompatibilitě zpětné, dnes hlavně kvůli Internet Exploreru 11. Pojďme se teď podívat na všechny oblasti, které byste pomocí tagů nebo atributů měli ve stránce vyznačovat.


## Oblasti stránky

Pokud oblasti ve stránce takto nakódujete, umožní dnešní čtečky uživatelům procházet stránkou strukturovaně. To je rychlejší a efektivněji než sekvenčně pomocí nadpisů či jiných prvků.

### `<main role="main">`

[HTML5](https://www.w3.org/TR/html5/grouping-content.html#the-main-element) i [WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#main) význam se zde shoduje.  Jde o hlavní část dokumentu. Obsah stránky nebo místo, kde běží hlavní část aplikace. Nejde o sekční, ale „seskupovací“ typ elementu. 

Jak píše Heydon Pickering v knize [Inclusive Design Patterns](https://www.smashingmagazine.com/inclusive-design-patterns/), čtečka JAWS nabízí klávesovou zkratku pro skok na hlavní oblast pomocí klávesy „Q“ a je jí jedno, jestli použijete HTML5 značku, `role` atribut nebo obojí. 

### `<aside role="complementary">`

Něco jako boční lišta. Méně významné informace, které se vztahují k hlavnímu obsahu stránky. Například reklamní panely nebo zvýrazněné citace z textového obsahu. 

[HTML5](https://www.w3.org/TR/html5/sections.html#the-aside-element) specifikace říká, že na stránce může být `<aside>` více. Jedna pod `<html>` prvkem a další pod jednotlivými sekcemi. 

[WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#complementary) specifikace říká, že jde o doplňující informace k hlavnímu obsahu stránky. Podobná úroveň v DOM hierarchii, ale bez hlavního obsahu nedává smysl. Všechny zde zmiňované `role` atributy by ve stránce měly být jen jednou.

### `<nav role="navigation">`

[HTML5](https://www.w3.org/TR/html5/sections.html#the-nav-element): Sekce s navigací. Může jich být ve stránce více. Ve specifikaci doporučují kódovat položky navigace jako nečíslovaný seznam (`<ul>`).

[WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#navigation): Hlavní navigace webu dokumentu nebo celého webu.

### `<header role="banner">`

[HTML5](https://www.w3.org/TR/html5/sections.html#the-header-element): Hlavička stránky nebo sekce. Bez atributu je možné `<header>` použít i pro hlavičky jednotlivých sekcí. Hlavička je zde zamýšlená pro navigační, tak uvozující, představující obsah.

[WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#banner): Pokud použijete s `role` atributem, jde o hlavičku celého webu.


### `<footer role="contentinfo"> `

[HTML5](https://www.w3.org/TR/html5/sections.html#the-footer-element): patička sekce, která obsahuje informace o sekci. Kdo ji napsal, odkaz na související dokumenty, licence a podobné informace.

[WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#contentinfo): Podobný význam, jen se opět vztahuje na celý dokument.


### `<section role="region">`

[HTML5](https://www.w3.org/TR/html5/sections.html#the-section-element): Tématické seskupení obsahu v rámci aplikace nebo dokumentu. Například kapitoly v delších textech nebo jednotlivé panely v záložkové navigaci. Nemá odpovídající landmark.

Čtečka JAWS [oznamuje „region“](https://www.paciellogroup.com/blog/2013/10/using-html5-section-element/) pokaždé když vstoupí do nové `<section>`. 

[WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#region): Oblast stránky, která je dost důležitá na to, aby byla vložena do souhrnu nebo strukturovaného obsahu. 
 

### `<article role="article">`

[HTML5](https://www.w3.org/TR/html5/sections.html#the-article-element): Kompletní a soběstačná komponenta v rámci dokumentu, která je opakovatelná a znovupoužitelná. Nemusí jít o článek, ale také třeba produkt, komentář nebo jiné. 

Čtečka JAWS usnadňuje pochopení struktury oznámením začátku a konce „article“. 

[WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#region) specifikace mluví velmi podobně jako HTML5. Jde o nezávislou komponentu stránky. 
 

### `<address>`

[HTML5](https://www.w3.org/TR/html5/sections.html#the-address-element): kontaktní informace k sekci nebo dokumentu. V HTML5 změnil tag význam, ale nevím, zda to vůbec k něčemu je.

### `<form role="search">`

[WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#search): Oblast, ve které je komponenta pro vyhledávání na celém webu. Může jít o složitější strukturu než jen formulářové pole. Obvykle ji asi budete dávat na `<form>` element. 

Vyhledávání není možné vyznačit pomocí HTML5 prvku, takže alespoň `role` atributem.


### `<figure>` a `<figcaption>`

[HTML5](https://www.w3.org/TR/html5/grouping-content.html#the-figure-element): `<figure>` je obsah, který doplňuje hlavní textový obsah a bude na něj odkazováno. Obrázek, video, schéma, ukázka kódu, SVG dokument. Volitelně je možné doplnit popiskem `<figcaption>`. Opět nejde o sekční, ale seskupovací typ elementu. Je užitečná jak pro čtečky, tak pro efektivní kódování webů.

### `<div role="application">`

Opět jen jako [WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#application) oblast. Ovšem pozor na ni. Nemáme ji využívat pro označení celého dokumentu nebo jeho části jako interaktivní webové aplikace. `role="application"` zruší veškeré klávesové zkratky čtečky a nechává jejich zřízení na vás jako autorovi. Zacházejte s tím [velice opatrně](http://a11yproject.com/posts/how-to-use-application-role/). 

### `<h1>` až `<h6>`

[HTML5](https://www.w3.org/TR/html5/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements): Nadpisy a tvorba struktury stránky. Znáte je, vím, ale sem patří hlavně proto, že jde pořád o jediný způsob tvorby strukturované osnovy dokumentu. Tvorba struktury pomocí HTML5 elementů `<section>`, jak bylo dříve zamýšleno, [se neujala](http://www.vzhurudolu.cz/blog/25-vice-h1). Alespoň v něčem jsem měl pravdu.

<!-- AdSnippet -->

Uživatelé čteček NVDA and JAWS mohou použít klávesu „1“ pro přímý skok na element `<h1>`.

## Ukázková struktura stránky

Je to velmi zjednodušené, ale může pomoci:

```html
<header role="banner">
   <!-- Logo… -->
   <form role="search">
     <!-- Vyhledávací formulář -->
   </form>
</header>
<nav role="navigation">
   <ul>
      <li><!-- Navigace --></li>
   </ul>
</nav>
<main role="main">
   <!-- Hlavní obsah -->
</main>
<aside role="complementary">
   <!-- Vedlejší lišta -->
</aside>
<footer role="contentinfo">
   <!-- Copyright, související dokumenty… -->
</footer>
```

Pokud máte významnou návštěvnost z Exploreru 8 a starších, použijte [HTML5shiv](https://github.com/afarkas/html5shiv). Dělá dvě věci:

- Ve stylech zajistí, aby se zmíněné HTML5 prvky staly blokovými.
- Javascriptem pak zařídí, aby staré Explorery dokázaly nové HTML5 prvky vůbec stylovat. 


## Jak testovat strukturu stránky?


- Pro Firefox existuje hezké rozšíření pro testování `role` atributů [Landmarks](https://addons.mozilla.org/en-US/firefox/addon/landmarks/).
- MS Edge má pěkně vypadající [Accessibility Tools](https://docs.microsoft.com/en-us/microsoft-edge/f12-devtools-guide/dom-explorer/accessibility-tools). Za tip děkuji Vojtovi Bulantovi.
- V Chrome vám oblasti definované pomocí `role` ukáže rozšíření [Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm): „Information“ > „Display ARIA roles“.
- V Chrome si také můžete povolit experimentální [Accessibility Inspection](https://gist.github.com/marcysutton/0a42f815878c159517a55e6652e3b23a), jak píše Martin Držka v komentářích.
-  Nejlepší je ale testovat přímo pomocí čteček. Na Macu máme vestavěný [VoiceOver](http://www.apple.com/accessibility/mac/vision/). Na Windows si nainstalujte [NVDA](http://nvda-project.cz/). Tady je [návod pro spuštění testování](https://dequeuniversity.com/assets/html/jquery-summit/html5/slides/landmarks.html).



