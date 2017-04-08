# Media Queries

Dotazy na media umožňují aplikovat různá CSS pravidla v různých technických kontextech.

Dejme si rychlý příklad: 

```css
h1 { font-size: 2em }

@media only screen and (max-width: 40em) {
  h1 { font-size: 1.5em }
}
```

Nadpis první úrovně zmenšíme pro okna prohlížeče do šířky 40 `em`. Toto jednoduché použití dotazů na média si můžete vyzkoušet v živé ukázce. [cdpn.io/e/Bpajbz](http://cdpn.io/e/Bpajbz)

<!-- AdSnippet -->

Z CSS2 budete znát podmínky pro typy médií, jako třeba `@media print`. Norma CSS3 Media Queries je vylepšuje o bližší specifikaci vlastnosti médií.

## Anatomie media query

Dotaz na medium (anglicky *media query*) se skládá z typu média (*media type*, výchozí je `all`) a podmínky obsahující vlastnosti média (*media features*) s hodnotou nebo rozmezím hodnot.

![](dist/images/original/media-query.png)

*Anatomie Media Query. Pro zjednodušení jsem odstranil klíčové slovo „only“, které ze zpracování dotazu vyloučí starší Internet Explorery*

## Body zlomu

V responzivním webdesignu nemůžeme minout pojem bod zlomu (*breakpoint*), což je hodnota vlastnosti média. O „breakpointech“ mluvíme jako o sadě hodnot pro konkrétní web nebo systém designu. Knihovna Bootstrap má například body zlomu přednastavené takto: 

- extra small (šířka okna do 767 pixelů)
- small (768 – 991)
- medium (992 – 1199)
- large (1200 a více)

Pro vaše konkrétní projekty to nemusí být použitelné, ale pro ilustraci zlomových bodů je to naprosto vyhovující.

## Minimální nebo maximální výška a šířka

Nejčastější podmínky v responzivním designu vypadají jako dotazy na vodorovný nebo svislý rozměr okna prohlížeče:

```css
@media only screen and (min-width: 40em) { … }
@media only screen and (max-width: 40em) { … }
@media only screen and (min-height: 40em) { … }
@media only screen and (max-height: 40em) { … }
```

V drtivé většině případů se ale pracuje jen s vodorovnými rozměry, s vlastností `width`. Ukážeme si i další možnosti. Předtím se ale naučíme jak dotazy kombinovat.

## Logické operátory

Spojovat Media Queries můžeme pomocí operátoru `and`:

```css
@media only screen 
  and (min-width: 30em) and (max-width: 40em) { … }
```

Podmínka se aplikuje jen na všechna zobrazovací média, tedy ne v tiskové verzi. Navíc musejí mít šířku okna mezi třiceti a čtyřiceti `em`.

A co „nebo“? Místo `or`, možná očekávaného programátory, se používá čárka:

```css
@media only screen and (max-width: 40em), print { … }
```

Podle CSS specifikace jde o „seznam oddělený čárkou“, kde se jednotlivé položky seznamu vyhodnocují samostatně. Čárka („or“) má proto větší váhu než „and“. Výše uvedený dotaz se tak vyhodnotí jako pravdivý, když budeme na zobrazovacím mediu o šířce viewportu do `40em` nebo když budeme stránku tisknout.

Dalším možným operátorem je negace:

```css
@media not print { … }
```

Jen pozor, milí čtenáři. Negace vždy postihuje celý dotaz, nikoliv jeho určitou část.

## Další vlastnosti média

### Detekce orientace zařízení 

Drží uživatel zařízení na výšku, nebo na šířku?

```css
@media only screen and 
  (orientation: portrait) { 
  /* Držení na výšku */ 
}

@media only screen and 
  (orientation: landscape) { 
  /* Držení na šířku */
}
```

### Podmínka pro poměr stran obrazovky

Okna s poměrem stran 16:9 například zacílíme takto:

```css
@media only screen and 
  (aspect-ratio: 16/9) { … }
```

Existují samozřejmě i varianty pro rozmezí hodnot:  `min-aspect-ratio` a `max-aspect-ratio`.

### Detekce „Retina“ displejů 

Moderní displeje s vyšším hustotou hardwarových pixelů, tedy displeje typu Retina a další, můžeme detekovat takto:

```
@media only screen and 
  (min-resolution: 2dppx) { … }
```  

Aplikuje se, pokud má zařízení poměr mezi hardwarovými a CSS pixely alespoň 2. Pokud byste náhodou nerozuměli souvislostem, na Vzhůru dolů je o CSS pixelu více informací. [vrdl.cz/prirucka/css-pixel](http://www.vzhurudolu.cz/prirucka/css-pixel)

<!-- AdSnippet -->

Poměrů je ale dnes celá řada (1,25; 1,5; 2; 3; 4…). Proto doporučuji namísto dotazu na vlastnost `resolution` v kombinaci s bitmapovými obrázky využívat vektorový formát SVG. U něj vlastnost `resolution` nepotřebujeme, vektorový obrázek se vykreslí všude stejně dobře. [vrdl.cz/prirucka/svg](http://www.vzhurudolu.cz/prirucka/svg).

### A co další vlastnosti médií?

V textu jsme zvládli ty nejpoužívanější. Z dalších zajímavých budu jmenovat hlavně sadu vlastností pro detekci způsobu ovládání. Například `@media (hover:hover)`. Tam se ale čeká na podporu Firefoxu. [caniuse.com/media-interaction](http://caniuse.com/#feat=css-media-interaction)

Vlastností médií existuje ale mnohem víc, i když ty ostatní už tak moc použitelné nejsou. [jecas.cz/media](http://jecas.cz/media#vlastnosti)

## Na co si dát u dotazů pozor?

### 1. Zápis vynechávající typ média

Tohle může být špatně:

```css
@media (min-width: 40em) { … }
```

Podmínka se pak aplikuje na všechna média. Tedy nejen obrazovková, ale také výstupy pro tisk. Výchozí typ média je totiž `all`, nikoliv `screen`. Tyto dva zápisy jsou tedy ekvivalentní:

```css
@media all { … }
@media { … }
```

Klíčové slovo only před médiem vyřazuje ze hry staré Explorery (verze šest a starší), které by se jinak tvářily, že podmínce rozumějí. Občas je krátký zápis bezproblémový, musíte ovšem vědět co děláte.

Správný zápis vypadá následovně:

```css
@media only screen and (min-width: 40em) { … }
```

### 2. Cílení na rozlišení obrazovky

```css
@media … (min-device-width: 40em) { … }
```

„Device“ zápis cílí na rozlišení obrazovky, nikoliv na velikost okna prohlížeče. Hodně dávno se to používalo pro „detekci“ konkrétních zařízení, což ale dobrý postup nebyl, není a nebude. Rozlišení obrazovek je dnes děsně moc a nedá se z nich vyčíst, jestli zařízení patří mezi mobily, tablety nebo něco jiného.

„Device“ zápis navíc znemožňuje testování responzivního layoutu změnšením velikosti okna. A vlastně nevím, k čemu by vám mohl být dobrý.


### 3. Rozdělování CSS podle velikosti obrazovky

```html
<link rel="stylesheet" href="mobile.css" 
  media="max-width: 40em">
```

Občas ještě někde vídávám. Organizace CSS kódu přes velikosti zařízení už ale vytvořilo nejednu vrásku na čele webových vývojářů. Kód jedné komponenty rozhraní je pak rozdělený do více souborů a dost špatně se to spravuje. 

<!-- AdSnippet -->

Jediný rozumný způsob organizace stylů je podle komponent uživatelského rozhraní jako jsou navigace, tlačítka atd. Pokud je to pro vás nové, čtěte můj blogpost o organizaci CSS. [vrdl.cz/blog/29-organizace-css-2014](http://www.vzhurudolu.cz/blog/29-organizace-css-2014)

## Podpora ve starších prohlížečích: nejlépe s Respond.js

Internet Explorer 8 a starší, budiž jim země lehká, neumějí ani základní vlastnosti médií z CSS3 Media Queries. Pokud to na svém projektu potřebujete řešit, doporučuji použít polyfill Respond.js. Je odzkoušený a dostatečně rychlý. Používá jej například i populární frontend framework Bootstrap. [github.com/scottjehl/Respond](https://github.com/scottjehl/Respond)

```html
<!--[if lte IE 8]>
<script src="respond.js"></script>
<![endif]-->
```

Dejte si pozor na místo vložení. Skript by měl být hned za odkazem na CSS soubor.

## Media Queries v Javascriptu

V Javascriptu používejte funkci `matchMedia()`, která přijímá stejné podmínky jako CSS:

```javascript
if (matchMedia('only screen and (max-width: 40em)').matches) {
  // …
}
```

Častou chybou je detekce podle šířky nebo výšky okna a následné spoléhání na událost `onresize`. Je to v kódu zbytečně složité a při zmenšování nebo zvětšování okna výkonnostně problematické. `matchMedia()` sice opět nemá podporu v IE8 a starších, ale na to máme polyfill, který je také součástí Respond.js. [github.com/paulirish/matchMedia.js/](https://github.com/paulirish/matchMedia.js/)
