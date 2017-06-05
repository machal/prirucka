# BEM: Pojmenovávací konvence pro třídy v CSS

BEM je způsob, jak pojmenovávat třídy v CSS tak, aby se vám nepletly jejich různé typy. 

Na BEM můžeme nahlížet dvěma způsoby:

1. Plnohodnotná metodika pro organizaci CSS. Viz plná dokumenace na [bem.info](https://en.bem.info/methodology/). Tu vymysleli a používají v ruském Yandexu.
2. Konvenci pro pojmenovávání tříd. Viz web [getbem.com](http://getbem.com/). To je omezená verze, kterou z původní metodiky vytáhli další autoři a kterou se tady budu zabývat i já.

BEM jako plnohodnotnou metodiku nepoužívám, častěji volím vlastní způsoby organizace. Myslím, že to je docela častý scénář. I vy můžete chtít použít BEM v kombinaci s jinou metodikou: [SMACSS](smacss.md), ITCSS nebo jinými. 

V konvenci pro pojmenovávání tříd je myslím největší přínos BEMu. Na první pohled to může vypadat na hodně stručný článek, ale i tak je o čem psát. Však hned uvidíte.



## BEM jako Blok, Element, Modifikátor

Nejprve stručně s odkazy na podrobnější vysvětlení.

| Typ třídy | Způsob pojmenovávání |
|-----------|----------------------|
| [Blok](#blok) | `.block` |
| [Element](#element) | `.block__element` |
| [Modifikátor](#modifikator) | `.block--modifier` |
| [Modifikátor elementu](#modifikator-elementu) | `.block__element--modifier` |



## Proč BEM používat a kde se hodí?

BEM považuji za nadstavbu [objektových CSS (OOCSS)](oocss.md) pro středně velké a velké projekty. Pro nasazení BEMu tedy musíte umět styly psát komponentově, mít nízkou specifičnost selektorů a tak dále.


### Jednoznačný význam tříd v CSS i HTML

Pokud v projektu máte dejme tomu přes dvacet komponent a CSS kód píšete objektově, je vysoká pravděpodobnost, že se vám začne význam tříd plést:

```html
<nav class="nav nav-secondary nav-visible">
```

Členové týmu se mohou ptát, zda `nav-secondary` a `nav-visible` modifikují původní komponentu nebo jde o samostatnou komponentu. Je samostatná `nav-secondary` nebo i `nav-visible`? Mají ji hledat v souboru `nav.css` nebo `nav-secondary.css`?

S BEMem je vše jasné:

```html
<nav class="nav nav--secondary nav--visible">
```

`nav` je blok, jinak též samostatná komponenta. `nav--secondary` a `nav--visible` jsou její modifikátory. Najdeme je všechny pravděpodobně v souboru `nav.css` nebo s koncovkou podle používaného [preprocesoru](http://www.vzhurudolu.cz/blog/12-css-preprocesory-1).

Komponenta vyznačkovaná BEMem tedy nese více informací než komponenta vyznačkovaná běžným OOCSS. Jak v CSS, tak v HTML. Kód se vám bude snadněji chápat, budete potřebovat méně dokumentace a komentářů. Kód se vám také bude snadněji přenášet v rámci projektu nebo na jiné projekty.


### Je to jednoduché a rozšířené

Princip BEMu není složitý a snadno jej vysvětlíte kolegům a kolegyním vývojářům, kteří s CSS třeba až tak do styku nepřicházejí. Určitě se ale koukají do HTML, kde díky BEMu získají právě více informací o struktuře komponent i bez dokumentace. 

BEM navíc není žádná novinka a mezi kodéry je slušně zavedený. Takže pokud se budete držet zde uvedeného, pro nové kolegy nebude problém se v projektu zorientovat.


### Je to „ošklivé“?

To je častá výtka, zejména programátorů. Estetický pohled je subjektivní, takže se podle toho těžko rozhodovat, zda metodiku použít nebo ne. 

Ano, může to vypadat ošklivě. Ale buď vám BEM vyřeší nějaký problém nebo ne. Pokud ano, používejte ho. Já to *rozhodně* doporučuji. Výjimku tvoří úplně malinké projekty nebo [generování CSS Javascriptem](http://www.vzhurudolu.cz/blog/77-css-v-js) v aplikacích plně na JS závislých.

A teď se do BEMu ponořme hlouběji. 


## BEM podrobně

### Blok

Blok je v zásadě komponenta uživatelského rozhraní. Nezávislý prvek uživatelského rozhraní, který je znovupoužitelný. Bloky se do sebe mohou libovolně zanořovat. 

Označuje jej třída se slovy oddělenými spojovníkem: `.nazev-bloku`.


### Element

Prvek uvnitř bloku, který potřebujeme stylovat. Element nelze v rozhraní použít samostatně. Jeho existence má smysl jen v rámci bloku. 

Poznáte ho podle třídy prefixované názvem bloku a doplněné názvem elementu odděleným dvěmi podtržítky: `.nazev-bloku__nazev-elementu`.


### Modifikátor

Varianta komponenty. Popisuje vizuální vlastnosti (`.block--small`), stav (`.block--disabled`) nebo chování (`.block--animated-to-left`). Neměla by nést název závislý na vzhledu (`.block--green`). 

V kódu je to třída prefixovaná názvem bloku a doplněná názvem elementu odděleným dvěmi pomlčkami: `.nazev-bloku--nazev-modifikatoru`.

Možná jste někde narazili na zápis modifikátorů jen pomocí jednoho podržítka (`.block_modifier`). To je „klasická“ BEM syntaxe. [Zdá se](http://stackoverflow.com/a/25213997/889682), že to byl Harry Roberts, kdo ji upravil do podoby dvou spojovníků. Nebo alespoň tuhle variantu zpopularizoval.  

„Klasický“ zápis umožňuje rozdělit modifikátory na dva typy – „boolean“ a „key-value“. Popravdě si ale nepamatuju, kdy bych něco takového potřeboval použít. Proto se i mě pro svou jednoduchost a jednoznačnost líbí „Robertsova“ varianta.


### Modifikátor elementu 

Varianta elementu je taky možná. Hlavně u komplexnejších komponent něco takového můžete potřebovat. Jako příklad vezměme aktivní položku v záložkové navigaci: `.tabs-nav__tab-item--active`.

Platí u ní stejná pravidla pro tvorbu názvů jako u modifikátorů. V kódu je to třída prefixovaná názvem bloku a doplněná názvem elementu odděleným dvěmi pomlčkami: `.nazev-bloku__nazev-elementu--nazev-modifikatoru`.


### Názvy se oddělují pomlčkou

Jak je z výše uvedených ukázek vidět, názvy bloků, elementů a modifikátorů se oddělují jednou pomlčkou. Například `.block-name--modifier-name`.


## BEM a systémy organizace CSS

Jak jsem psal, BEM navazuje na [OOCSS](oocss.md). Je na něm také hezké, že se může pěkně doplňovat se šířeji definovanými systémy organizace CSS jako [SMACSS](smacss.md) nebo [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/).

Raději si v těch metodikách udělejme pořádek:

- *OOCSS* je metodika pro psaní komponentové části stylů. Nutný základ pro rozumný způsob psaní komponentové části kódu u všech projektů.
- *BEM* je metodika pro pojmenovávání komponentové části stylů. Není potřebná jen na malinkých projektech.
- *ITCSS* nebo *SMACSS* jsou metodiky pro organizaci celého CSS, tedy včetně nekomponentových částí: typografické základny, helperů a tak dále. Vhodnost těchto vysokoúrovňových metodiky organizace se liší projekt od projektu a někdy je nutné vymyslet metodiku vlastní.

BEM se s žádnou z uvedených metodik nevylučuje. Obvykle je doplňuje právě jen o způsob pojmenovávání tříd.


## Příklad s navigací

Vezměme tohle HTML:

```html
<ul class="nav nav--secondary" role="navigation">
  <li class="nav__item">
    <a href="/">Úvod</a>
  </li>
  <li class="nav__item nav__item--active">
    <a href="/">Produkty</a>
  </li>  
  <!-- … -->
</ul>
```

Pak:

- `.nav` je blok (název komponenty)
- `.nav--secondary` je modifikátor (varianta komponenty)
- `.nav__item` je element (DOM element uvnitř komponent)
- `.nav__item--active` je modifikátor elementu (varianty elementu)

Atribut `role` tady uvádím pro pořádek, abychom nezapomněli [na přístupnost](html5-struktura.md).


## Specificita v BEMu {#specificita}

Protože BEM vychází z OOCSS, cílem je zachovat co nejnižší specificitu (váhu) salektorů. Kód v CSS pak budeme psát takto:

```css
.nav { 
  /* Pravidla společná pro všechny navigace */ 
}

.nav--secondary { 
  /* Měnící se pravidla pro tuto modifikaci */ 
}

.nav__item {
  /* Pravidla pro tento element */ 
}

.nav__item--active {
  /* Měnící se pravidla pro tuto modifikaci elementu */ 
}
```

Má to dvě výhody. Selektory si zachovají nízkou specifičnost a neopakujeme CSS kód.


### Zachováváme nízkou váhu selektorů 

Selektory typu `.nav.nav--secondary` jsou pak díky prefixování modifikáturu zbytečné.

### Zbytečně neopakujeme kód 

Častým problémem neobjektového CSS kódu bývá opakování deklarací z `.nav` v modifikátorech typu `.nav--secondary`. 

Sice bychom si pak mohli v HTML dovolit jednodušší zápis typu `<nav class="nav--secondary">`, ale CSS kód bude složitý a ukrutně špatně spravovatelný. Jednodušší HTML také není výhodou, protože z něj nevidíme co je komponenta a co její modifikátor.

Více informací o specificitě mám v článku [o OOCSS](oocss.md#specificita).

## Element v modifikátoru {#element-v-modifikatoru}

Jediná výjimka, kdy je možné použít selektor o dvou třídách je element v modifikovaném bloku:

```css
.nav--secondary .nav__item {
  /* Měnící se pravidla položky 
     navigace pro sekundární navigaci */
}
```

Element je totiž vždy závislý na rodičovském bloku a nedávalo by smysl jej osamostatnit. Zároveň by bylo dost nepříjemné vytvářet modifikátory všem elementům uvnitř modifikovaného bloku (`.nav__item--secondary`). 

Z praktických důvodů má tedy jako jediný v systému pojmenovávání BEM dovoleno mít dvojnásobnou specifičnost selektoru.


## Co nedělat? {#nedelat}

Raději vás upozorním na další problémy. 


### BEM a zrádné zanořování v preprocesorech {#preprocesory}

Psaní BEM syntaxe si někdo usnadňuje [v CSS preprocesorech](http://www.vzhurudolu.cz/blog/12-css-preprocesory-1) pomocí zanořování:

```less
/* Tohle raději ne: */
.nav {
  &__item { }
  &--secondary { }
}
```

Jen to prosím nepřehánějte. Zanořování v preprocesorech je dobrý sluha, ale zlý pán. Samo o sobě problematické není, ale v kódu méně zkušených CSS pisálků vede [k monolitickým blokům a závorkovému peklu](http://www.vzhurudolu.cz/blog/65-css-kod-problemy#1-zavorkove-peklo-a-monoliticnost). 

Další problém může nastat při vyhledávání v editorech. Může se vám stát, že budete vyhledávat `.nav__item`. V kódu s „ampersandovou“ syntaxí vám to prostě bude dělat problémy.

### Vícenásobné zanoření bloků {#vice-zanoreni}

Ve struktuře DOMu je možné libovolně zanořovat. Hierarchie CSS selektorů má ovšem vždy zůstat jednoúrovňová. `.block__element__heading` je tedy špatně. Má být `.block__element-heading`. 

To proto, aby CSS selektor nebyl závislý na struktuře DOMu a nemuseli jste jej měnit při každé úpravě HTML. [Nekopírujte v CSS strukturu DOMu](http://www.vzhurudolu.cz/blog/63-bem-chyby#v-css-nekopirujte-dom-strukturu).

### Křížení komponent {#krizeni}

Často v CSS vídávám takovéto konstrukce:

```css
.button {
  /* Kód pro komponentu Button */
}

.card .button {
  /* Změny komponenty Button pro jeho výskyt uvnitř Card */
}
```

Občas není zbytí, ale principiálně je křížení komponent špatně. Je pak těžké říct, zda kód patří do komponenty `card` nebo do `button`. Lepší je vytvořit modifikátor typu `button--small`. [Křízení zkrátka nechte rostlinářům](http://www.vzhurudolu.cz/blog/63-bem-chyby#krizeni-nechte-rostlinarum-u-komponent-jej-nezkousejte)

Už jsme skoro na konci. Poslední část textu věnuji použití BEMu v nehostinných podmínkách.

## Použití BEMu v ne-BEM prostředí {#bem-v-ne-bem}

Co když na projektu využíváte třeba Bootstrap, který je napsaný objektově, ale bez BEM pojmenovávání? 

Pokud je Bootstrap nebo jiná knihovna v kódu dominující, na BEM bych se pro zachování konzistence vykašlal. Bootstrap má navíc [vlastní standardy](http://codeguide.co/) psaní kódu, takže vám doporučím pohybovat se v jejich mantinelech. Code Guide je nepříliš přísné, ale pro většinu situací naprosto vyhovující vodítko pro psaní kódu.

Pokud byste však používali Bootstrap nebo jinou knihovnu jen jako doplněk k vlastní robustní základně kódu, zvážil bych buď prefixování selektorů knihoven nebo vlastních částí kódu. V počátcích vývoje [VašeČočky](http://www.vasecocky.cz/) jsme třeba pro odlišení našich komponent od těch „bootstrapích“ používali prefix `vc-`.

Jste na konci. O BEMu by se ještě dalo psát, ale to raději zase příště. 

