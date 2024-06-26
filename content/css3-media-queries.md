# Media Queries

Jde o podmínky, které umožňují aplikovat různá CSS pravidla v různých technických kontextech.

Dejme si rychlý příklad:

```css
h1 { font-size: 2em }

@media only screen and (max-width: 40em) {
  h1 { font-size: 1.5em }
}
```

Nadpis první úrovně zmenšíme pro okna prohlížeče do šířky `40em`. Toto jednoduché použití podmínek si můžete vyzkoušet v živé ukázce. [cdpn.io/e/Bpajbz](https://cdpn.io/e/Bpajbz)

<!-- AdSnippet -->

Z CSS2 budete znát podmínky pro typy médií jako třeba `@media print`. Norma CSS3 Media Queries je vylepšuje o bližší specifikaci vlastnosti médií.

<div class="web-only" markdown="1">

Je dobré vědět, že kromě Media Queries máme také od února 2023 v prohlížečích [Container Queries](container-queries.md), které umožňují zaměřit dotazy na rozměry kontejneru, nikoliv jen celé stránky.

</div>

## Anatomie Media Query

Dotaz na médium (anglicky *media query*) se skládá z typu média (*media type*, výchozí je `all`) a podmínky obsahující vlastnosti média (*media features*) s hodnotou nebo rozmezím hodnot.

<figure>
<img src="../dist/images/original/media-query.jpg" alt="">
<figcaption markdown="1">
*Anatomie Media Query. Pro zjednodušení jsem odstranil klíčové slovo „only“, které ze zpracování podmínky vyloučí starší Internet Explorery*
</figcaption>
</figure>

## Body zlomu

V responzivním webdesignu nemůžeme minout pojem bod zlomu (*breakpoint*), což je hodnota vlastnosti média. O „breakpointech“ mluvíme jako o sadě hodnot pro konkrétní web nebo systém designu. Knihovna Bootstrap má například body zlomu přednastavené takto:

- extra small (šířka okna do `767px`)
- small (768–991)
- medium (992–1199)
- large (1200 a více)

Pro konkrétní projekty samozřejmě nebudou tyto konkrétní hodnoty použitelné. Body zlomu je vždy lepší definovat podle obsahu konkrétních komponent než takto centrálně. Body zlomu Boostrapu berte jen jako ilustraci pojmu.

<div class="web-only ebook-vdwd-only" markdown="1">

[Tvorbou breakpointů](breakpointy.md) z pohledu designéra se zabývám ve zvláštním textu.

</div>

## Minimální nebo maximální výška a šířka

Nejčastější podmínky v responzivním designu vypadají jako podmínky pro vodorovný nebo svislý rozměr okna prohlížeče:

```css
@media only screen and (min-width: 40em) { … }
@media only screen and (max-width: 40em) { … }
@media only screen and (min-height: 40em) { … }
@media only screen and (max-height: 40em) { … }
```

V drtivé většině případů se ale pracuje jen s vodorovnými rozměry, s vlastností `width`. Ukážeme si i další možnosti. Předtím se ale naučíme, jak podmínky kombinovat.


## Logické operátory

Spojovat Media Queries můžeme pomocí operátoru `and`:

```css
@media only screen 
  and (min-width: 30em) and (max-width: 40em) { … }
```

Podmínka se aplikuje jen na všechna zobrazovací média, tedy ne v tiskové verzi. Navíc musejí mít šířku okna mezi třiceti a čtyřiceti `em`.

A co „nebo“? Programátoři by možná očekávali `or`,  ale používá se čárka:

```css
@media only screen and (max-width: 40em), print { … }
```

Uvedená podmínka se vyhodnotí jako pravdivá, když si uživatel stránku prohlédne na zobrazovacím médiu o šířce viewportu do `40em` nebo když bude stránku tisknout.
Podle CSS specifikace jde o „seznam oddělený čárkou“, kde se jednotlivé položky seznamu vyhodnocují samostatně. Disjunkce („or“) má proto větší váhu než konjunkce („and“).

Dalším možným operátorem je negace:

```css
@media not print { … }
```

Jen pozor – negace vždy postihuje celou podmínku, nikoliv její určitou část.

## Další vlastnosti média


Je jich dost. Od zjišťování orientace zařízení či poměru stran obrazovky přes počet barev až po zjišťování vysokokapacitních displejů. Uvedu jen ty nejpoužitelnější.


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

Okna s poměrem stran 16 : 9 například zacílíme takto:

```css
@media only screen and 
  (aspect-ratio: 16/9) { … }
```

Existují samozřejmě i varianty pro rozmezí hodnot:  `min-aspect-ratio` a `max-aspect-ratio`.

→ *Související: [CSS aspect-ratio](css-aspect-ratio.md)*

### Detekce „Retina“ displejů 

Moderní displeje s vyšší hustotou hardwarových pixelů můžeme detekovat takto:

```
@media only screen and 
  (min-resolution: 2dppx) { … }
```  

Aplikuje se, pokud má zařízení poměr mezi hardwarovými a CSS pixely alespoň 2. Ve starších prohlížečích se namísto `resolution` pro totéž používala vlastnost `device-pixel-ratio`. 

<!-- AdSnippet -->

Poměrů je ale dnes celá řada (1,25; 1,5; 2; 3; 4…). Proto doporučuji namísto podmínky pro vlastnost `resolution` v kombinaci s bitmapovými obrázky využívat vektorový formát SVG. U něj vlastnost `resolution` nepotřebujeme, vektorový obrázek se vykreslí na všech poměrech `resolution` stejně dobře. [vrdl.cz/p/svg](https://www.vzhurudolu.cz/prirucka/svg)

<div class="ebook-only" markdown="1">
Pokud byste náhodou nerozuměli souvislostem, vzpomeňte si na text o [CSS pixelu](zmeny-css-pixel.md) z první kapitoly.
</div>

<div class="web-only" markdown="1">
Na Vzhůru dolů je o [CSS pixelu](css-pixel.md) více informací.
</div>


### A co další vlastnosti médií?

V textu jsme zvládli ty nejpoužívanější. Z dalších zajímavých budu jmenovat například:

- Sadu vlastností pro detekci způsobu ovládání – např. `@media (hover:hover)`, které se umí prohlížeče zeptat na podporu efektu po najetí kurzoru.
- Detekci tmavého nebo světlého režimu – `@media (prefers-color-scheme: dark)`. Více je v textu [o dark mode](dark-mode).

Vlastností médií existuje ale mnohem víc, i když ty ostatní už tak moc použitelné nejsou. [jecas.cz/media](http://jecas.cz/media#vlastnosti)


## Na co si dát u Media Queries pozor?

Nezapomeňte na typ média a raději ani vylučovací slovo `only`. Nepoužívejte `device-width` a nerozdělujte CSS do souborů podle bodů zlomu.

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

Klíčové slovo `only` před médiem vyřazuje ze hry staré Explorery (verze šest a starší), které by se jinak tvářily, že podmínce rozumějí. Občas je krátký zápis bezproblémový, musíte ovšem vědět, co děláte.

Správný zápis vypadá následovně:

```css
@media only screen and (min-width: 40em) { … }
```

### 2. Cílení na rozlišení obrazovky

Zápis s „device“ cílí na rozlišení obrazovky, nikoliv na velikost okna prohlížeče:

```css
@media … (min-device-width: 40em) { … }
```

V začátcích responzivního webdesignu toho někteří využívali pro „detekci“ konkrétních zařízení. To ale dobrý postup nebyl, není a nebude. Rozlišení obrazovek je dnes velmi hodně a nedá se z nich vyčíst, jestli zařízení patří mezi mobily, tablety, nebo něco jiného.

Zápis podmínky s prefixem `device-` navíc (kvůli cílení na obrazovku, nikoliv okno) znemožňuje testování responzivního layoutu pomocí změny velikosti okna. Vlastně nevím, k čemu by vám dnes mohl být dobrý. 


### 3. Rozdělování CSS podle velikosti obrazovky

Občas ještě někde vídávám:

```html
<link rel="stylesheet" href="mobile.css" 
  media="max-width: 40em">
```

Vývojáři si dělí kód podle typu zařízení: Například do `mobile.css`, `tablet.css` a `desktop.css`. Kód jedné komponenty rozhraní je pak ale rozdělený do více souborů a dost špatně se to spravuje. 

<!-- AdSnippet -->

Jediný rozumný hlavní způsob organizace souborů se styly je podle komponent uživatelského rozhraní, jako jsou navigace, tlačítka atd. Píšete totiž kód pro jednu komponentu, nikoliv pro jeden bod zlomu. Pokud je to pro vás nové, čtěte můj blogpost o organizaci CSS. [vrdl.cz/b/29-organizace-css-2014](https://www.vzhurudolu.cz/blog/29-organizace-css-2014)


## Media Queries v Javascriptu

V Javascriptu používejte funkci `matchMedia()`, která přijímá stejné podmínky jako CSS:

```javascript
if (matchMedia('only screen and (max-width: 40em)').matches) {
  // …
}
```

Častou chybou je detekce podle šířky nebo výšky okna a následné spoléhání na událost `onresize`. Je to v kódu zbytečně složité a při zmenšování nebo zvětšování okna výkonnostně problematické. 
