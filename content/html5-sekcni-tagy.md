# Sekční tagy v HTML5

Stručně: HTML5 sekční tagy umožňují lépe strukturovat stránky. Užitečné jsou hlavně ve slepeckých čtečkách. Doporučuji je používat v kombinaci s `role=""` atributy.


## Dříve: zbytečnost, která komplikovala weby v IE 8 a starších

Sekční tagy v HTML5 to se mnou nemají lehké. Před čtyřmi lety jsem se naštval a napsal článek „[HTML5 strukturální elementy stojí za starou bačkoru](http://kratce.vzhurudolu.cz/post/38371151431/html5-elementy)“. Argumenty proti jejich používání jsem uváděl dva:

- *Jsou duplicitní k WAI ARIA oblastem.* Orientační oblasti stránky lze slepeckým čtečkám vyznačit pomocí atributů `role=""` ze specifikace [WAI ARIA](wai-aria.md). Podpora WAI ARIA byla ve čtečkách v té době daleko lepší než podpora HTML5 tagů. 
- *Závislost na Javascriptu* v Internet Exploreru 8. Abyste totiž s HTML5 tagy mohli v IE8 a starších pracovat v CSS, museli jste přidat kousek skriptu. A když skript selhal, stránka se nehezky rozbila. 
- *…celkově jsou taknějak k ničemu.* Kromě přehlednosti HTML kódu nic nepřidávají. Vyhledavače a jiné stroje je nijak nezpracovávají.

Jenže doba se změnila a kunratické proti-sekčně-tagové hnutí vychladlo.  


## Teď: IE 8 je mrtvý  a podpora HTML5 ve čtečkách velmi dobrá

Internet Explorer 8 a starší dneska na návštěvnosti drtivé většiny webů není zastoupený [více než půlprocentním podílem](prohlizece.md). A míra podpory HTML5 tagů prohlížeči a slepeckými čtečkami už je velmi podobná podpoře WAI-ARIA atributů. 

*TODO Obrázek http://www.html5accessibility.com/*

Když se podíváte na data z [HTML5accessibility.com](http://www.html5accessibility.com/), sekční HTML5 elementy neumí především Explorer 11. Pak tam jsou jen dvě výjimky pro `<header>` u Chrome a `<figure>` u Safari.

Podpora `role=""` atributů je ale podle všeho vyšší. Proč tedy používat HTML5 tagy? 
Vypadá to totiž, že do budoucna bude pro vyznačení oblastí možné používat jen tagy. [Radek Pavlíček](http://poslepu.blogspot.cz/2012/12/proc-bych-nerad-aby-strukturalni-html5.html) v podpovědi na můj tehdejší hejt psal, že sekční elementy zvyšují pravděpodobnosti, že je kodéři použijí. Tím si zcela jistý nejsem, i když jistý efekt to mít může. 

Spíše se ale obrátím k autoritě W3C.org, která dneska už [vyloženě říká](https://www.w3.org/TR/aria-in-html/):

> První pravidlo použití ARIA zní: Pokud můžete použít nativní element, který má význam nebo chování, jež vyžadujete, už v sobě, prostě ho použijte.

Prostě to vypadá, že jsem se mýlil a HTML5 tagy se pro vyznačování oblastí stránky ujaly. Jednou tedy může nastat situace, že čtečka nebo jiný stroj implementuje význam oblasti stránky jen přes HTML5 elementy.

Proto doporučuji používat obě varianty: HTML5 tag kvůli dopředné kompatibilitě a k němu WAI-ARIA atribut kvůli kompatibilitě zpětné. Pojďme teď na všechny oblasti, které byste pomocí tagů nebo atributů měli ve stránce vyznačovat.


## Oblasti stránky

Pokud oblasti ve stránce takto vyznačíte, umožní dnešní čtečky uživatelům procházet stránkou strukturovaně. To je rychlejší a efektivněji než sekvenčně pomocí nadpisů či jiných prvků.

### `<main role="main">`

[HTML5](https://www.w3.org/TR/html5/grouping-content.html#the-main-element) i [WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#main) význam se zde shoduje.  Jde o hlavní část dokumentu. Obsah stránky nebo místo, kde běží hlavní část aplikace. Nejde o sekční, ale „seskupovací“ typ elementu. 

Čtečka JAWS nabízí klávesovou zkratku pro skok na ni pomocí klávesy „Q“ a je jí jedno, jestli použijete HTML5 značku, `role` atribut nebo obojí. 

### `<aside role="complementary">`

Něco jako boční lišta. Prostě méně významné informace, které se vztahují k hlavnímu obsahu stránky. Například reklamní panely nebo zvýrazněné citace z textového obsahu. 

[HTML5](https://www.w3.org/TR/html5/sections.html#the-aside-element). Na stránce může být `<aside>` více. 

[WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#complementary): Doplňující informace k hlavnímu obsahu stránky. Podobná úroveň v DOM hierarchii, ale bez hlavního obsahu nedává smysl.

### `<nav role="navigation">`

[HTML5](https://www.w3.org/TR/html5/sections.html#the-nav-element): Sekce s navigací. Může jich být ve stránce více. Ve specifikaci se doporučuje mít kódovat položky navigace jako nečíslovaný seznam (`<ul>`).

[WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#navigation): Hlavní navigace webu dokumentu nebo celého webu.

### `<header role="banner">`

[HTML5](https://www.w3.org/TR/html5/sections.html#the-header-element): Hlavička stránky nebo sekce. Bez atributu je možné `<header>` použít i pro hlavičky jednotlivých sekcí. Hlavička je zde zamýšlená pro navigační, tak uvozující, představující obsah.

[WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#banner): Pokud použijete s `role` atributem, jde o hlavičku celého webu.


### `<footer role="contentinfo"> `

[HTML5](https://www.w3.org/TR/html5/sections.html#the-footer-element): patička sekce, která obsahuje informace o sekci. Kdo ji napsat, odkaz na související dokumenty, licence a podobné informace.

[WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#contentinfo): Podobný význam, jen se opět vztahuje na celý dokument.


### `<section>`

Tématické seskupení obsahu v rámci aplikace nebo dokumentu. Například kapitoly v delších textech nebo jednotlivé panely v záložkové navigaci. Opět nemá odpovídající landmark. Žádný konkrétní význam pro čtečky a jiné stroje se mi vypátrat nepodařilo.
[HTML5](https://www.w3.org/TR/html5/sections.html#the-section-element). 

### `<article>`

Kompletní a soběstačná komponenta v rámci dokumentu, která je opakovatelná a znovupoužitelná. Nemusí jít o článek, ale také třeba produkt, komentář nebo jiné. Čtečka JAWS usnadňuje pochopení struktury oznámením začátku a konce „article“. Nemá odpovídající `role` atribut.
[HTML5](https://www.w3.org/TR/html5/sections.html#the-article-element). 

### `<address>`

[HTML5](https://www.w3.org/TR/html5/sections.html#the-address-element): kontaktní infromace k sekci nebo dokumentu. V HTML5 změnil tag význam, ale nevím, zda to k něčemu je.

### `<div role="search">`

[WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#search): Oblast, ve které je komponenta pro vyhledávání. Může jít o složitější strukturu než jen formulářové pole. Obvykle budete dávat na `<form>` element.

Vyhledávání není možné vyznačit pomocí HTML5 prvku, takže alespoň `role` atributem.


### `<figure>` a `<figcaption>`

[HTML5](https://www.w3.org/TR/html5/grouping-content.html#the-figure-element): `<figure>` je obsah, který doplňuje hlavní textový obsah a bude na něj odkazováno. Obrázek, video, schéma, ukázka kódu, SVG dokument. Volitelně je možné doplnit popiskem `<figcaption>`. Opět nejde o sekční typ elementu, ale považuje se spolu s nimi za novou značku. Je užitečná jak pro čtečky, tak pro efektivní kódování webů.

### `<div role="application">`

Opět jen jako [WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#application) oblast. Ovšem pozor na něj. Nemáme ji využívat použít pro označení celého dokumentu nebo jeho části jako interaktivní webové aplikace. `role="application"` zruší veškeré klávesové zkratky čtečky a nechává jejich zřízení na vás jako autorovi. Zacházejte s tím [velice opatrně](http://a11yproject.com/posts/how-to-use-application-role/). 

### `<h1>` až `<h6>`

[HTML5](https://www.w3.org/TR/html5/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements) Nadpisy a tvorba struktury stránky. Znáte je, vím, ale sem patří hlavně proto, že jde pořád o jediný způsob tvorby strukturované osnovy dokumentu. Tvorba struktury pomocí `<section>`, jak bylo dříve zamýšleno, [možná není](http://www.vzhurudolu.cz/blog/25-vice-h1). Alespoň v něčem jsem měl pravdu.

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

## Jak testovat oblasti stránky?


- Pro Firefox existuje hezké rozšíření [Landmarks](https://addons.mozilla.org/en-US/firefox/addon/landmarks/).
- V Chrome vám ARIA oblasti ukáže rozšíření [Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm): „Information“ > „Display ARIA roles“.
-  Nejlepší je ale testovat přímo pomocí čteček. Na Macu máme vestavěný [VoiceOver]. Na Windows si nainstalujte [NVDA](http://nvda-project.cz/). Tady je [návod pro spuštění testování](https://dequeuniversity.com/assets/html/jquery-summit/html5/slides/landmarks.html).

## Podpora pro staré Explorery

Pokud máte významnou návštěvnost z Exploreru 8 a starších, následujte tento návod.

Ve stylech musíte zajistit, aby se zmíněné HTML5 prvky staly blokovými:


```css
header, nav, main, footer, article, 
section, aside, figure, figcaption {
   display: block;
}
```

Javascriptem pak zařídíme, aby staré Explorery dokázaly nové HTML5 prvky vůbec stylovat. Z pohledu práce prohlížeče je rychlejší, když to vložíte přímo do hlavičky HTML kódu, než kdybyste odkazovali na externí soubor:

```html
<!--[if lt IE 9]>
  <script>
    var e = ("abbr,article,aside,audio,canvas,datalist,details," +
      "figure,footer,header,main,mark,menu,meter,nav,output," +
      "progress,section,time,video").split(',');
    for (var i = 0; i < e.length; i++) {
      document.createElement(e[i]);
    }
  </script>
<![endif]-->
```

