# BEM: Pojmenovávací konvence pro CSS

BEM je pojmenovávací konvence pro psaní CSS. Vymysleli jej v ruském Yandexu.

Na BEM můžeme nahlížet dvěma způsoby:

1. Plnohodnotná metodiku pro organizaci CSS. 
2. Konvenci pro pojmenovávání tříd.

Budu se tady zabývat jen druhou částí. BEM jako plnohodnotnou metodiku nepoužívám, častěji volím vlastní způsoby organizace. I vy můžete chtít použít BEM v kombinaci s jinou organizační metodikou: SMACSS, ITCSS nebo jinými. 

Pojďme se prostě bavit jen o tom pojmenovávání tříd, v tom je myslím největší přínos BEMu. I tak je o čem psát, nebojte se. Zájemce o celý popis metodiky pošlu na [bem.info](https://en.bem.info/methodology/).

<table>
<tr>
  <th>Blok</th>
  <td><code>.block</code></td>
</tr>
<tr>
  <th>Element</th>
  <td><code>.block__element</code></td>
</tr>
<tr>
  <th>Modifikátor</th>
  <td><code>.block--modifier</code></td>
</tr>
</table>


## Tři kategorie: Blok, Element, Modifikátor

### Blok

Třída bez speciálních znaků: `.block`.

Blok je v zásadě komponenta. Nezávislý prvek uživatelského rozhraní, který je znovupoužitelný. Bloky se do sebe mohou libovolně zanořovat.


### Element

Třída prefixovaná názvem bloku a doplněná názvem elementu odděleným dvěmi podtržítky: `.block__element`.

Element nelze v rozhraní použít samostatně. Jeho existence má smysl jen v rámci bloku. Opět je možné je libovolně zanořovat. Hierarchie selektorů má ovšem vždy zůstat jednoúrovňová. `.block__element__heading` je tedy špatně. Má být `.block__element-heading`. To proto, aby nebyla závislá na struktuře DOMu.


### Modifikátor

Třída prefixovaná názvem bloku a doplněná názvem elementu odděleným dvěmi pomlčkami: `.block--modifier`.

Popisuje vizuální vlastnosti (`.block--small`), stav (`.block--disabled`) nebo chování (`.block--animated-to-left`). 

Možná jste někde narazili na zápis modifikátorů jen pomocí jednoho podržítka (`.block_modifier`). To je „klasická“ BEM syntaxe. Zdá se, že to byl Harry Roberts, kdo ji upravil do podoby dvou pomlček. Tady [je vysvětlení](http://stackoverflow.com/a/25213997/889682). Klasická varianta umožňuje rozdělit modifikátory na dva typy – boolean a key-value. Mě se ale pro svou jednoduchost líbí „Robertsova“ varianta.


### Pravidla pro tvorbu názvů 


Názvy bloků, elementů a modifikátorů se oddělují jednou pomlčkou. Například `.block-name--modifier-name`.

Název tříd by měl vycházet z účelu a být nezávislý na vzhledu. Například `.button-blue` je špatně. 








## Proč BEM používat a kde se hodí?

BEM považuji za nadstavbu [objektových CSS (OOCSS)](oocss.md) pro středně velké a velké projekty. Pro nasazení BEMu tedy musíte umět styly psát komponentově, mít nízkou specifičnost selektorů a tak dále.

### Jednoznačný význam tříd v CSS i HTML

Pokud v projektu máte dejme tomu přes dvacet komponent, je vysoká pravděpodobnost, že se vám začne význam tříd plést:

```html
<nav class="nav nav-secondary nav-visible">
```

Členové týmu se mohou ptát, zda `nav-secondary` a `nav-visible` modifikují původní komponentu nebo jde o samostatnou komponentu. Je samostatná `nav-secondary` nebo i `nav-visible`? Mají ji hledat v souboru `nav.css` nebo `nav-secondary.css` nebo kde?

S BEMem je vše jasné:

```html
<nav class="nav nav--secondary nav--visible">
```

`nav--secondary` a `nav--visible` jsou jen modifikátory bloku `nav`. Najdeme je pravděpodobně v souboru `nav.css`. 

### Je to jednoduché a rozšířené

Princip BEMu je velmi jednoduchý a snadno jej vysvětlíte kolegům a kolegyním vývojářům, kteří s CSS třeba až tak do styku nepřicházejí. Určitě se ale koukají do HTML, kde díky BEMu získají více informací o struktuře komponent i bez dokumentace. BEM není žádná novinka a mezi vývojáři je slušně zavedený.


## BEM a systémy organizace CSS

Jak jsem psal, BEM navazuje na [OOCSS](oocss.md). Je na něm také hezké, že se může pěkně doplňovat se šířeji definovanými systémy organizace CSS jako [SMACSS](smacss.md) nebo [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/).

Raději si v těch metodikách udělejme pořádek:

- *OOCSS* je metodika pro psaní komponentové části stylů. Nutný základ pro rozumný způsob psaní komponentové části kódu u všech projektů.
- *BEM* je metodika pro pojmenovávání komponentové části stylů. Není potřebná jen na malinkých projektech.
- *ITCSS* nebo *SMACSS* jsou metodiky pro organizaci celého CSS, tedy včetně nekomponentových částí: typografické základny, helperů a tak dále.

BEM se s žádnou z ostatních metodik nevylučuje. Naopak je hezky doplňuje.


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
- `.nav__item` je element (potomek komponenty)
- `.nav__item--active` je modifikátor elementu (varianty potomka komponenty)

## Specifičnost v BEMu {#specificita}

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

Jediná výjimka, kdy je možné použít specificitu o dvou třídách je element v modifikovaném bloku:

```css
.nav--secondary .nav__item {
  /* Měnící se pravidla položky 
     navigace pro sekundární navigaci */
}
```

Element je totiž vždy závislý na rodičovském bloku a nedávalo by smysl jej osamostatnit. A jen během snahy ho osamostatnit by nastaly potíže s uzavřením do selektoru potomka.


## BEM a preprocesory {#preprocesory}

Psaní BEM syntaxe si můžete hezky usnadnit [v CSS preprocesorech](http://www.vzhurudolu.cz/blog/12-css-preprocesory-1) pomocí zanořování:

```less
.nav {
  &__item { }
  &--secondary { }
}
```

Jen to prosím nepřehánějte. Zanořování v preprocesorech je dobrý sluha, ale zlý pán. Samo o sobě problematické není, ale v kódu méně zkušených CSS pisálků vede [k monolitickým bloků a závorkovému peklu](http://www.vzhurudolu.cz/blog/65-css-kod-problemy#1-zavorkove-peklo-a-monoliticnost).


## Časté chyby

Kromě přehnaného zanořování v preprocesorech vás upozorním ještě na další problémy. Psal jsem o tom [ve zvláštním článku](http://www.vzhurudolu.cz/blog/63-bem-chyby):

- Vícenásobné zanoření. `.card__header__title` je špatně. Činíte selektor závislý na organizaci DOMu. `card__header-title` je lepší.  [Odkaz](http://www.vzhurudolu.cz/blog/63-bem-chyby#v-css-nekopirujte-dom-strukturu).
- Křížení komponent. `.card .button` je špatně. Je pak těžké říct, zda kód patří do komponenty `card` nebo do `button`. Lepší je vytvořit modifikátor typu `button--small`  [Odkaz do článku](http://www.vzhurudolu.cz/blog/63-bem-chyby#krizeni-nechte-rostlinarum-u-komponent-jej-nezkousejte)

