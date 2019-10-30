# CSS proměnné (nebo také autorské či volitelné vlastnosti)

Nativní proměnné v CSS jsou fajn. Od [proměnných v preprocesorech](https://www.vzhurudolu.cz/blog/13-css-preprocesory-2#promenne), které asi znáte více, se liší tím, že se počítají přímo v prohlížeči a že jsou dostupné kromě CSS také v JavaScriptu a HTML.

Nemají sice [plnou podporu](https://caniuse.com/#feat=css-variables) – brzdí nás Internet Explorer 11, který může mít kolem [pěti až deseti procent](https://www.vzhurudolu.cz/prirucka/prohlizece) českých uživatelů – ale s použitým šikovných fallbacků je CSS proměnné možné leckde použít.

## Co je to? {#co}

Základy si ukážeme na jednoduchém příkladu. Definice vypadá následovně:

```css
html {
  --color: blue;
}
```

Rovnou tady trochu nabořím pojmenování „proměnná v CSS“. Tímto způsobem totiž definujeme [Custom Property](https://www.w3.org/TR/css-variables-1/#defining-variables) – volitelnou nebo též autorskou vlastnost. Rovnou to zmiňuji, protože zápis opravdu odpovídá spíše _vlastnosti_, než proměnné.

Následuje použití vlastnosti už ve formě proměnné pomocí funkce `var()`:

```css
.box {
  color: var(--color);
}
```

Tuhle základní konstrukci si můžete vyzkoušet na CodePenu: [cdpn.io/e/mBOZZK](https://codepen.io/machal/pen/mBOZZK).

<!-- AdSnippet -->

V příkladu jsem definoval něco jako globální proměnnou, prostě ji navázal na nejvyšší prvek DOMu, tedy `<html>`. Občas je v příkladech vidět použití pseudoprvku `:root`. To je to samé jako selektor `html`, jen je [váha (specificita) selektoru](https://www.vzhurudolu.cz/prirucka/css-kaskada#specificita) vyšší, na úrovni třídy. To se může hodit.

## Proč „volitelné vlastnosti“ a ne prostě jen „proměnné“?  {#volitelne-vlastnosti-vs-promenne}

Zastavme se na chvíli u pojmenovávání. [Specifikace](https://www.w3.org/TR/css-variables-1/) definuje „custom property“ (volitelnou vlastnost) a „variable“ (proměnnou) jako dvě odlišné věci.

_Volitelné vlastnosti_ jsou ty vlastnosti, které nejsou zapsány v CSS specifikaci a mohou si je vymyslet a používat autoři a uživatelé webů. Vypadají jako vlastnosti, ale na začátku mají dvě pomlčky. V příkladu to je `--color: blue`.

_Proměnné_ pak zpřístupňují hodnoty uložené ve volitelných vlastnostech. To je ona konstrukce `var(--color)`, která vrací hodnotu `blue` nebo jinou nastavenou.

Teoreticky byste tedy v příkladu výše mohli založit novou vlastnost (`--color: blue`), ale ve funkci `var()` ji nepoužít. Mohli byste například hodnotu vlastnosti chtít jen sdílet v HTML nebo JavaScriptu. Pak jistě chápete, že nemůžeme mluvit o CSS proměnné.

Mluvit jen o „CSS proměnných“ je nepřesné i proto, že je nemůžeme používat jako univerzální proměnné. Použití jen možné jen tam, kde vkládáte hodnoty standardních CSS vlastnosti:

```css
/* Smůlička, následující nefunguje: */

@media --var(breakpoint-medium) {  }

.el { --var(jmeno-vlastnosti): 1px solid red ; }

--var(jmeno-selektoru) {  }
```

## „CSS proměnné“ versus proměnné z preprocesorů {#css-promenne-vs-preprocesory}

Proč se vlastně zabývat proměnnými v CSS, když už většina z nás používá proměnné v [CSS preprocesorech](https://www.vzhurudolu.cz/blog/12-css-preprocesory-1)?

Protože to jsou dvě odlišné věci. Volitelné vlastnosti z CSS se od preprocesorových proměnných liší takto:

* jsou dynamické, počítají se až v prohlížeči,
* můžete k nim přistupovat nebo je číst také z HTML a JS,
* řídí se [dědičností](css-dedicnost.md), [kaskádou](css-kaskada.md) a dalšími přirozenými vlastnostmi CSS

Přinášejí tedy vlastnosti, která preprocesorové proměnné neumí. Na druhou stranu – CSS proměnné nemají jiné vlastnosti, kterými naopak disponují ty preprocesorové. Jak už jsem ukazoval, neumožní vám například vložit proměnnou kamkoliv do CSS kódu. Hlavně u větších projektů se bez CSS preprocesorů stále neobejdete.

Ideální variantou se mi jeví propojit obojí: z preprocesorových proměnných, které užijete i v prohlížeči, generovat volitelné vlastnosti, podobně jako to dělá třeba [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/theming/).

## Překvapivá škála možných hodnot

Škála možných hodnot je velká:

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

Podívejme se teď více na funkci, která umí z volitelné vlastnosti vytáhnout její hodnotu.

Použití už jste viděli:

```css
.box {
  color: var(--color);
}
```

### Fallbacky ve funkci var() {#funkce-var-fallbacky}

Cokoliv je za čárkou, považuje funkce za náhradní řešení pro případ, že první hodnota není definovaná:

```css
background: var(--bg-color, black);
background: var(--bg-color, var(--primary-color));
```

Je tam samozřejmě možné mít čárek více, ale to jen pro případ, že jako fallback potřebujeme hodnoty oddělené čárkou. Hodí se například pro specifikaci barev v gradientech:

```css
--box-bg-color: var(--gradient, yellow, orange);
background: linear-gradient(var(--box-bg-color));
```

Více v příkladu: [cdpn.io/e/eeMqer](https://codepen.io/machal/pen/eeMqer)

### Co když není proměnná definovaná? {#funkce-var-nedefinovana}

Vezměme tuto hypotetickou situaci:

```css
color: blue;
color: var(--my-color);
```

Proměnnou  `--my-color` jsme zde zapomněli definovat. Jakou barvu bude text mít?

Možná vás to překvapí, ale černou. Zdědí ji po výchozím nastavení pro text. Z pohledu prohlížeče to vypadá tak, že modrá (`blue`) byla předefinovaná proměnnou (`var(--my-color)`) . To si pamatujte.

Fakt, že hodnotu proměnné prohlížeč nezná, jej nezajímá. Mohli byste mu ji totiž hned v následující vteřině podstrčit třeba JavaScriptem. Ale pokud jste CSS proměnnou `var(--my-color)` zatím nedefinovali, aplikuje běžnou dědičnost a vezme barvu z rodičovského prvku.

Modrou barvu v příkladu ale zobrazí prohlížeč, který proměnné nepodporuje.

<!-- AdSnippet -->

Pokud bychom chtěli fallback i pro podporující prohlížeče, musíme využít standardního mechanismu fallbacku za čárkou, který funkce `var()` nabízí:

```css
color: blue;
color: var(--my-color, blue);
```

CodePen: [cdpn.io/e/XzqyWb](https://codepen.io/machal/pen/XzqyWb)

### Slučování hodnot a matematika ve funkci var() {#funkce-var-slucovani}

Tady zase opatrně, jste v CSS, nikoliv programovacím jazyce. Nic jako v následujícím příkladu fungovat nebude:

```css
--gap: 20;
/* Smůla, fungovat nebude: */
margin-top: var(--gap)px;
```

Výsledkem by byla hodnota s mezerou: `margin-top: 20 px`, které prohlížeč nebude rozumět.

Pro „přetypování“ namísto toho můžete použít funci calc():

```css
--gap: 20;
margin-top: calc(var(--gap) * 1px);
```

Pojďme si ještě ukázat další příklady s funkcí `calc()`. Použít nějakou matematiku je zde možné:

```css
--gap: 20px;
margin-top: calc(var(--gap) + 1px); /* 21px */
margin-top: calc(var(--gap) / 2); /* 10px */
```

Psal jsem, že nám slučování hodnot neprojde. Slučování řetězců ale možné je:

```css
--text-hi: 'Ahoj';
--text-sentence: var(--text-hi)', jsem ráda, že tě vidím!';
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

Oba příklady jsou samozřejmě děsně primitivní. Později ještě ukážu, jak je možné sdílení v HTML prakticky využít. Tady je CodePen obsahující oba zjednodušené scénáře: [cdpn.io/e/OxWvRx](https://codepen.io/machal/pen/OxWvRx).

## Sdílení v JavaScriptu {#js-sdileni}

Základní metody pro čtení nebo zápis jsou jednoduché:

```js
// číst hodnotu
getComputedStyle(element).getPropertyValue("--color");

// zapsat hodnotu
element.style.setProperty("--color", "blue");
```

Vyzkoušení v CodePenu: [cdpn.io/e/xXgWPw](https://codepen.io/machal/pen/xXgWPw?editors=1111).

V jQuery od verze 3.1 to se „proměnnými“ pracuje stejně jako s běžnými CSS vlastnostmi. Aby ne, když to jsou vlastnosti, jen volitelné.

```js
// číst hodnotu
$('#box1').css('--color');

// zapsat hodnotu
$('#box2').css('--color', 'blue');
```

CodePen: [cdpn.io/e/LOdPbR](https://codepen.io/machal/pen/LOdPbR?editors=1111).

## Podpora a fallbacky {#podpora-fallbacky}

CSS proměnné podporují všechny moderní prohlížeče. Bez podpory jsme například v Opeře Mini a ve všech Internet Explorerech. Jasně, obvyklí podezřelí. Více o podpoře je na webu CanIUse. [https://caniuse.com/css-variables](https://caniuse.com/css-variables).

Internet Explorer 11 ale mohou v době psaní textu i na vašich webech ještě tvořit významnou část návštěvníků. Následují tedy čtyři možnosti řešení této situace.

### CSS proměnné jen pro vylepšení prožitku {#podpora-fallbacky-vylepseni}

Proměnné používat jen pro vylepšení uživatelského prožitku. Nestavět na nich nic důležitého. Nuda, já vím. Ale může se to hodit pro věci jako je „theming“, tedy změny barev na přání uživatele nebo stylování vzhledu pro mobily, na kterých se Explorer naštěstí už prakticky nevyskytuje.

### Generování vypočteného CSS pro starší prohlížeče {#podpora-fallbacky-generovani}

Pomocí PostCSS si můžete nechat generovat speciální CSS soubor, ve kterém jsou všechny hodnoty vypočtené a ten podsouvat nepodporujícím prohlížečům. Samozřejmě, že ne ve všech případech to půjde. Ale tady je jeden z použitelných pluginů: [github.com/postcss/postcss-custom-properties](https://github.com/postcss/postcss-custom-properties).

### Fallbacky v kódu {#podpora-fallbacky-v-kodu}

Prohlížeče, který uživatelskou vlastnost neznají, budou volitelnou vlastnost ignorovat a použijí výchozí hodnotu. Toho se dá využít při konstrukci náhradních řešení:

```css
--my-color: blue;
color: blue;
color: var(--my-color);
```

### Detekce podpory pomocí @supports {#podpora-fallbacky-supports}

Samozřejmě můžete využít i pravidlo `@supports`:

```css
@supports ( (--a: 0)) {
  /* Prohlížeč podporuje  */
}

@supports ( not (--a: 0)) {
  /* Zlý, zlý prohlížeč  */
}
```

Tolik k volitelným vlastnostem a CSS proměnným. Teď už vám můžu nabídnout jen sumarizaci toho nejdůležitějšího.

## Shrnutí {#shrnuti}

Pojďme si sesumírovat klady a zápory volitelných vlastností a jejich použití jako proměnných v CSS.

* Plus: Počítají se v prohlížeči a jsou dostupné z CSS, HTML i JS.
* Minus: Není je možné použít na jakémkoliv místě v kódu jako preprocesorové proměnné.
* Minus: Nepodporuje je Internet Explorer 11. Ale možnosti, jak si s tím poradit, zde jsou.

Pro [ukázky praktického použití](css-promenne-priklady.md) jděte na další článek.

<!-- AdSnippet -->
