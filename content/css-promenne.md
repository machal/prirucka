# CSS proměnné (nebo také autorské či volitelné vlastnosti)

Nativní proměnné v CSS jsou fajn. Od proměnných v preprocesorech, které možná někteří znáte více, se liší tím, že se počítají přímo v prohlížeči a že jsou dostupné kromě CSS také v JavaScriptu a HTML.

Pokud jde o moderní prohlížeče, můžeme říci, že CSS proměnné mají plnou podporu.

<div class="book-index" data-book-index="Proměnné"></div>
<div class="book-index" data-book-index="Autorské vlastnosti"></div>
<div class="book-index" data-book-index="var()"></div>

<div class="ebook-only" markdown="1">

V knize používám proměnné zhusta v [podkapitole o „krkavčí technice“](krkavci-technika.md), ale během psaní moderních kaskádových stylů na ně budete narážet velmi často. Pro případ, že o nich nevíte vůbec nic, nebo jen co by se za nehet vešlo, představuji je zde.

</div>

## Co je to? {#co}

Základy si ukážeme na jednoduchém příkladu. Definice proměnné vypadá následovně:

```css
html {
  --color: blue;
}
```

Rovnou tady trochu nabořím pojmenování „proměnná v CSS“. Tímto způsobem totiž definujeme Custom Property – volitelnou nebo též autorskou vlastnost. Musím to zmínit. A jak sami vidíte, zápis opravdu odpovídá spíše _vlastnosti_ než proměnné.

Následuje použití vlastnosti už ve formě proměnné pomocí funkce `var()`:

```css
.box {
  color: var(--color);
}
```

Tuhle základní konstrukci si můžete vyzkoušet v mé ukázce.

CodePen: [vrdl.in/cazg8](https://codepen.io/machal/pen/mBOZZK)

V příkladu jsem definoval něco jako globální proměnnou, prostě jsem ji navázal na nejvyšší prvek DOMu, tedy `<html>`.

Občas je v jiných příkladech vidět použití pseudoprvku `:root`. To je to samé jako selektor `html`, jen je váha (specificita) selektoru vyšší, na úrovni třídy. Což se může hodit.

<div class="web-only" markdown="1">

→ *Související: [Kaskáda (a také specificita) v CSS](css-kaskada.md)*

</div>

## Proč „volitelné vlastnosti“ a ne prostě jen „proměnné“?  {#volitelne-vlastnosti-vs-promenne}

Zastavme se ještě na chvíli u pojmenovávání. Specifikace definuje „custom property“ (volitelnou vlastnost) a „variable“ (proměnnou) jako dvě odlišné věci.

_Volitelné vlastnosti_ jsou ty vlastnosti, které nejsou zapsány v CSS specifikaci. Mohou si je vymyslet a používat autoři a uživatelé webů. Vypadají jako vlastnosti, ale na začátku mají dvě pomlčky. V příkladu to je `--color:blue`.

_Proměnné_ pak zpřístupňují hodnoty uložené ve volitelných vlastnostech. To je ona konstrukce `var(--color)`, která vrací hodnotu `blue` nebo jinou nastavenou.

<!-- AdSnippet -->

Teoreticky byste tedy v příkladu výše mohli založit novou vlastnost (`--color:blue`), ale ve funkci `var()` ji nepoužít. Mohli byste například hodnotu vlastnosti chtít jen sdílet v HTML nebo JavaScriptu. Pak jistě chápete, že nemůžeme mluvit o CSS proměnné.

## Limity „autorských vlastností“ {#limity}

<div class="book-index" data-book-index="env()"></div>

Mluvit jen o „CSS proměnných“ je nepřesné i proto, že je nemůžeme používat jako proměnné univerzální. Jejich použití je možné jen tam, kde vkládáte hodnoty standardních CSS vlastností. V Media Queries to například nehrozí:

```css
/* Smůlička, následující nefunguje: */

@media --var(breakpoint-medium) {  }

.el { --var(jmeno-vlastnosti): 1px solid red ; }

--var(jmeno-selektoru) {  }
```

Některým to tady opět může začít připadat jako typické CSS: škrábeme se nohou za uchem. Je potřeba si uvědomit, že programátorské hlavy mezi námi mají trochu jiné očekávání od slova „proměnná“ než pouhé využití autorem vymyšlené CSS vlastnosti.

Takoví čtenáři budou jistě nadšení chystanou specifikací od autorů CSS, která se jmenuje „CSS Environment Variables“. Zápisem `env()` by pak bylo možné nahradit jakoukoliv část CSS. A to je něco, co na rozdíl od CSS proměnných asi opravdu všichni chceme.

## „CSS proměnné“ versus proměnné z preprocesorů {#css-promenne-vs-preprocesory}

Proč se vlastně zabývat autorskými vlastnostmi v CSS, když už většina z nás používá proměnné v CSS preprocesorech, jako je Sass?

Protože to jsou dvě odlišné věci. Volitelné vlastnosti z CSS se od preprocesorových proměnných liší následovně:

* Jsou dynamické, počítají se až v prohlížeči.
* Můžete k nim přistupovat nebo je číst také z HTML a JS.
* Řídí se dědičností, kaskádou a dalšími přirozenými vlastnostmi CSS.

Přinášejí tedy vlastnosti, které preprocesorové proměnné neumí. Na druhou stranu – CSS proměnné nemají jiné vlastnosti, kterými naopak disponují ty preprocesorové. Jak už jsem ukazoval, neumožní vám například vložit proměnnou kamkoliv do CSS kódu. Hlavně u větších projektů se bez CSS preprocesorů stále neobejdete.

Ideální variantou se tedy jeví propojit obojí: z preprocesorových proměnných, které užijete i v prohlížeči, generovat volitelné vlastnosti, podobně to dělá třeba framework Bootstrap.

V preprocesoru Sass definujeme interní proměnné:

```scss
$colors: (
  "blue": $blue,
  "indigo": $indigo,
  "purple": $purple,
) !default;
```

Ty pak můžeme dát k dispozici do autorských vlastností:

```scss
:root {
  --blue: map-get($colors, $blue);
  --indigo: map-get($colors, $indigo);
}
```

Díky zkompilovanému CSS pak budou k dispozici v prohlížeči, a tedy také v HTML nebo JS:

```css
:root {
  --blue: #007bff;
  --indigo: #6610f2;
}
```

<div class="web-only" markdown="1">

→ *Související: [CSS preprocesory](https://www.vzhurudolu.cz/blog/12-css-preprocesory-1) a [používání proměnných](https://www.vzhurudolu.cz/blog/13-css-preprocesory-2#promenne) v nich.*

</div>

## Překvapivá škála možných hodnot {#hodnoty}

Různorodost možných hodnot je velká:

```css
:root {
  --color: #f00;
  --header-height: 68px;
  --line-height: 1.35;
  /* Jako existující vlastnost: */
  --padding: 10px 20px;
  /* Hodnota jako existující vlastnost: */
  --selector: padding;
  /* Text pro vlastnost content: */
  --text: "text";
  /* Hodnota jiné proměnné: */
  --a: var(--text);
  /* Libovolný výpočet: */
  --height: calc(2vh + 20px);
  /* Libovolný výraz v JavaScriptu: */
  --javascript: if(x > 5) this.width = 10;
}
```

## Funkce var() {#funkce-var}

Podívejme se teď více na funkci, která umí z volitelné vlastnosti vytáhnout její hodnotu. Tady už můžeme konečně trochu mluvit o proměnných.

Použití už jste viděli:

```css
.box {
  color: var(--color);
}
```

### Fallbacky ve funkci var() {#funkce-var-fallbacky}

Cokoliv je za čárkou, považuje funkce za náhradní řešení pro případ, že první hodnota není definovaná:

```css
.box {
  background: var(--bg-color, black);
  background: var(--bg-color, var(--primary-color));
}
```

Je tam samozřejmě možné mít čárek více, ale to jen pro případ, že jako fallback potřebujeme hodnoty oddělené čárkou. Hodí se například pro specifikaci barev v gradientech:

```css
.box {
  --box-bg-color: var(--gradient, yellow, orange);
  background: linear-gradient(var(--box-bg-color));
}
```

Však si to zkuste naživo v následující ukázce.

CodePen: [vrdl.in/5ne12](https://codepen.io/machal/pen/eeMqer)

### Co když není proměnná definovaná? {#funkce-var-nedefinovana}

Vezměme tuto hypotetickou situaci:

```css
.box {
  color: blue;
  color: var(--my-color);
}  
```

Proměnnou  `--my-color` jsme zde zapomněli definovat. Jakou barvu bude text mít?

Možná vás to překvapí, ale černou. Zdědí ji po výchozím nastavení pro text. Z pohledu prohlížeče to vypadá tak, že modrá (`blue`) byla předefinovaná proměnnou (`var(--my-color)`) . To si pamatujte.

Fakt, že hodnotu proměnné prohlížeč nezná, jej nezajímá. Mohli byste mu ji totiž hned v následující vteřině podstrčit třeba JavaScriptem. Ale pokud jste CSS proměnnou `var(--my-color)` zatím nedefinovali, aplikuje běžnou dědičnost a vezme barvu z rodičovského prvku.

Modrou barvu v příkladu ale zobrazí prohlížeč, který proměnné nepod&shy;po&shy;ruje.

<!-- AdSnippet -->

Pokud bychom chtěli fallback i pro podporující prohlížeče, musíme využít standardního mechanismu fallbacku za čárkou, který funkce `var()` nabízí:

```css
.box {
  color: blue;
  color: var(--my-color, blue);
}
```

Živá ukázka hned následuje.

CodePen: [vrdl.in/01y8x](https://codepen.io/machal/pen/XzqyWb)

### Slučování hodnot a matematika ve funkci var() {#funkce-var-slucovani}

Programátoři, tady buďte opět opatrní. Jste v CSS, nikoliv programovacím jazyce. Nic jako v následujícím příkladu fungovat nebude:

```css
.box {
  --gap: 20;
  /* Smůla, fungovat nebude: */
  margin-top: var(--gap)px;
}
```

Výsledkem by byla hodnota s mezerou: `margin-top: 20 px`, které prohlížeč nebude rozumět.

Pro „přetypování“ namísto toho můžete použít [funkci `calc()`](css3-calc.md):

```css
.box {
  --gap: 20;
  margin-top: calc(var(--gap) * 1px);
}
```

Já vím… Já vím, co si vy programátoři myslíte. Dělat převody jednotky tímto způsobem pro vás asi není nejhezčí… Ale z pohledu CSS má toto logiku. Pořád nezapomínejme, že toto nejsou plnohodnotné proměnné.

Pojďme si ještě ukázat další příklady s funkcí `calc()`. Použít nějakou matematiku je zde možné:

```css
.box {
  --gap: 20px;
  margin-top: calc(var(--gap) + 1px); /* 21 px */
  margin-top: calc(var(--gap) / 2); /* 10 px */
}  
```

Psal jsem, že nám slučování hodnot neprojde. Slučování řetězců ale možné je:

```css
.box {
  --text-hi: 'Ahoj';
  --text-sentence: var(--text-hi)', jsem ráda, že tě vidím!';
}
```

## Sdílení v HTML {#html-sdileni}

V CSS si můžeme například přednastavit stupnici hodnot:

```css
html {
  --size-lg: 1.25rem;
  --size-sm: 0.8rem;
}
```

V HTML si pak vybrat jednu z nich:

```html
<p style="font-size: var(--size-lg)">
  Lorem ipsum…
</p>
```

Daleko zajímavější je ale změna hodnoty vlastnosti z HTML. V CSS si definujeme vlastnost i její hodnotu:

```css
html {
  --color: black;
}

p {
  color: var(--color);
}
```

V HTML ji pak změníme:

```html
<p style="--color: blue">
  Lorem ipsum…
</p>
```

Oba příklady jsou samozřejmě děsně primitivní. Později ještě ukážu, jak je možné sdílení v HTML prakticky využít. Tady je CodePen obsahující oba zjednodušené scénáře.

CodePen: [vrdl.in/shwao](https://codepen.io/machal/pen/OxWvRx)

## Sdílení v JavaScriptu {#js-sdileni}

Základní metody pro čtení nebo zápis jsou jednoduché:

```js
// číst hodnotu
getComputedStyle(element).getPropertyValue("--color");

// zapsat hodnotu
element.style.setProperty("--color", "blue");
```

CodePen: [vrdl.in/recv5](https://codepen.io/machal/pen/xXgWPw?editors=1111)

V jQuery od verze 3.1  se s „proměnnými“ pracuje stejně jako s běžnými CSS vlastnostmi. Aby ne, když to jsou vlastnosti, jen volitelné. Pokud tedy jQuery ještě používáte…

```js
// číst hodnotu
$('#box1').css('--color');

// zapsat hodnotu
$('#box2').css('--color', 'blue');
```

CodePen: [vrdl.in/megob](https://codepen.io/machal/pen/LOdPbR?editors=1111)

## Podpora a fallbacky {#podpora-fallbacky}

CSS proměnné podporují všechny moderní prohlížeče. Bez podpory jsme například v Opeře Mini a ve všech Internet Explorerech. Jasně, obvyklí podezřelí. To vůbec nevadí. Více o podpoře je na webu CanIUse.  
[caniuse.com/css-variables](https://caniuse.com/css-variables)

Tolik k volitelným vlastnostem a CSS proměnným. Teď už vám můžu nabídnout jen sumarizaci toho nejdůležitějšího.

## Shrnutí {#shrnuti}

Pojďme si sesumírovat klady a zápory volitelných vlastností.

* Plus: Počítají se v prohlížeči a jsou dostupné z CSS, HTML i JS.
* Minus: Není je možné použít na jakémkoliv místě v kódu jako preprocesorové proměnné. Protože to nejsou proměnné.

<div class="web-only" markdown="1">

Pro [praktického použití proměnných](css-promenne-priklady.md) jděte na další článek.

</div>

<!-- AdSnippet -->
