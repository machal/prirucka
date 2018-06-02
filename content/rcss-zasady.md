# Zásady psaní respektujícího CSS

Pište kód jednotně a hlavně tak, aby se dobře četl jiným nebo třeba vám samotným za rok. Počítejte s tím, že lidé umí CSS. To ostatní není jisté. Pište proto CSS kód a moc si jej neupravujte. *Respektujte* vlastnosti lidí i CSS.

Tyhle zásady psaní vycházejí z [OOCSS](oocss.md), [BEM](bem.md) a dalších přístupů a nástrojů.  


## Předpoklady {#predpoklady}

- Design vašeho projektu je vymyšlený komponentově a systematicky, ideálně podle principů [atomického designu](pattern-lab.md). Výjimky jsou možné, ale nesmí být moc časté. 
- Píšete čisté nebo preprocesorové CSS, nikoliv [CSS v JS](https://www.vzhurudolu.cz/podcast/77-css-v-js).
- Styly nezapisujete výlučně pomocí [užitkových tříd](https://www.vzhurudolu.cz/podcast/103-podcast-fakturoid-css).

## Doporučené nástroje {#nastroje}

- Píšeme čisté CSS nebo pomocí [preprocesorů](https://www.vzhurudolu.cz/blog/12-css-preprocesory-1). Doporučuji dnes převládající Sass v konvenční SCSS syntaxi.
- Kód zpracovává postprocesor ([PostCSS](https://postcss.org/)) a sestavovací nástroje ([Grunt](grunt.md), [Gulp](https://gulpjs.com/)). Díky tomu můžeme automaticky dělat různé hacky v kódu, které není pěkné dávat do čteného kódu: Například minifikaci nebo přidávání [prefixů](prefix.md).
- Při kompilaci nastavujeme [Source Maps](https://webdesign.tutsplus.com/tutorials/how-to-use-source-maps-for-better-preprocessor-debugging--cms-22735), abychom v prohlížeči viděli napojení na zdrojové soubory.
- Pro sjednocení nastavení editorů používáme [EditorConfig](http://editorconfig.org/). 
- [Prettier](https://prettier.io/) nám automaticky opravuje formátování v kódu ještě před commitem.
- Pro kontrolu psaní používáme [Stylelint](stylelint.md), nejlépe [v mé výchozí konfiguraci](https://github.com/machal/example-css-architecture/blob/master/.stylelintrc). 
<!-- AdSnippet -->

## 1) Obecná pravidla {#1}

## 1.1) CSS píšeme s respektem k vlastnostem jazyka {#1-vlastnosti}

Bereme ohled na kaskádu, hlavně [specifičnost a pořadí selektorů](css-jazyk-problemy.md), a také na globální povahu jazyka.

```scss
// Cilem je, aby vsechny nadpisy mely velikost 1.25rem
// a varianta pouzivana v .box pak velikost 1.5rem.

// Spatne:

// Nedrzime specificitu nizko a nemame spravne
// poradi, proto nas zachrani jen !important

.heading--large {
  font-size: 1.5rem !important;
}

.box h2 {
  font-size: 1.25rem;
}


// Dobre:

.heading {
  font-size: 1.25rem;
}

.heading--large {
  font-size: 1.5rem;
}
```


## 1.2) Nevytváříme zbytečně konstrukce neobsažené v CSS {#1-konstrukce}

Pokud to není nezbytně nutné nebo to výrazně nepomáhá čitelnosti kódu, netvoříme proprietární funkce v preprocesorech. CSS umí číst všichni, na rozdíl od specifických konstrukcí. V deklarativní části píšeme jednoduchý kód co nejvíce podobný běžnému CSS.

```scss
// Dobre:

.box {
  font-size: 1.25rem;
  line-height: 1.4;
}

// Spatne:

.box {
  @include fs-lh(1.25rem, 1.4);  // Mixin neznameho obsahu
}
```

Jsou ale samozřejmě opodstatněná použití mixinů – v programátorské části kódu. Například při generování mřížky layoutu, animací a dalších extrémně se opakujících částí stylů.


## 2) Soubory a struktura {#2}

### 2.1) Kód rozdělujeme do malých souborů  {#2-atomicke-soubory}

Jeden problém řeší jeden soubor. Vyhýbáme se souborům míchajícím více komponent, funkcí nebo o délce větší než 200 řádků kódu.


### 2.2) Soubory umísťujeme do adresářů podle kategorií, v nichž specificita roste a počet dotčených HTML elementů se snižuje {#2-kategorie}

Tipy pro metody organizace: [jednoduché projekty](https://www.vzhurudolu.cz/blog/29-organizace-css-2014#adresarova-struktura-css-zdrojaku). Složitější podle [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/).

```scss
// Dobre:

@import "base/blanka.scss";
@import "base/typography.scss";

@import "components/box-variables.scss";
@import "components/box.scss";
@import "components/heading.scss";

@import "utilities/margins-paddings.scss";
```

Další doporučení:

1. V adresáři se zdrojovým CSS máme jeden hlavní soubor. Všechny ostatní jsou v adresářích. Víme tak, který otevřít jako první. Doporučuji jej pojmenovat `index.scss`.
2. Atomické soubory sestavovacím nástrojem skládáme do větších kvůli efektivitě při rychlosti načítání.

<!-- AdSnippet -->

## 3) Psaní komponent {#3}

### 3.1) OOCSS: používáme objektový zápis {#3-OOCSS}

Držíme se hlavních pravidel:

1. CSS není závislé na struktuře HTML.
2. Specifičnost selektrů držíme co nejníže.
3. Komponenta nesmí být závislá na rodiči.
4. Všechny prvky komponenty prefixujeme jejím názvem.

Vyhneme se tak možným problémům s kolizí komponent nebo jejich částí. Více je v textu o [OOCSS](oocss.md).

```scss
// Spatne:

.page-cart .box ul > li { … }

// Dobre:

.box-item-small { … }
```


### 3.2) BEM: pojmenováním odlišujeme bloky, elementy a modifikátory {#3-BEM}

Pomůže nám to jednoznačně určit typ třídy už z HTML nebo dokumentace. Více je v textu o [BEM](bem.md).

```
// Spatne:

<div class="side-bar side-bar-left">
  <div class="box box-with-heading side-bar-inner">

// Dobre:

<div class="side-bar side-bar--left">
  <div class="box box--with-heading side-bar__inner">
```

Další doporučení:

1. Nepojmenováváme komponenty nebo funkce zkratkami. My si je možná zapamatujeme, ale situaci zase zkomplikujeme ostatním.
2. Kód složitějších komponent dělíme na deklarativní a programátorský (imperativní). Máme tak např. `box.scss` a vedle něj `box-mixins.scss` nebo také `box-variables.scss`. Samozřejmě jen v momentě, kdy si to  množství kódu dotčených částí žádá.
3.  Vycházíme ze vzorové [šablony SCSS souboru](https://gist.github.com/machal/156a47275bdf5f4b8605a4f0656b94f4): Strukturu souboru činíme zjevnější pomocí [Markdown nadpisů](https://fvsch.com/code/markdown-css-comments/). Do hlavičky přidáváme odkaz na dokumentaci. Pod hlavičkou struktura komponenty pro snadnější vstřebání složitějších celků. Části komponent drží pořadí podle metodiky BEM.
4. BEM komponenty lintujeme pomocí [selector-bem-pattern](https://github.com/simonsmith/stylelint-selector-bem-pattern), pluginu do Stylelintu.


## 4) Psaní kódu v deklaracích {#4}

### 4.1) Základní formát psaní podle Prettier {#4-prettier}

Základní formát psaní přebíráme od [Prettier](https://prettier.io/). Například:

1. Odsazujeme dvěmi mezerami.  
Takové odsazení se totiž vykresluje [stejně ve všech editorech](https://softwareengineering.stackexchange.com/a/66). 
2. Každý selektor v deklaraci patří na vlastní řádku.   
3. Mezi deklaracemi je vždy jeden volný řádek.
4. Za čárkami v hodnotách bude vždy mezera.
5. Desetinné hodnoty mají na začátku vždy nulu.  
Píše se to tak v prostředí běžného psaní. Vyhýbáme tak také silně nepřirozeným konstrukcím jakko `-.25rem`.

Prettier máme nainstalovaný tak, aby nám všechny prohřešky rovnou sám opravoval ještě před odesláním do repozitáře.

### 4.2) Pokročilejší formát kódu hlídá Stylelint {#4-stylelint}

[Stylelint](stylelint.md) používáme [v této konfiguraci](https://github.com/machal/example-css-architecture/blob/master/.stylelintrc). Příklady nastavení:

1. Nejvyšší úroveň zanoření deklarace je 1.
2. Všechny barvy v hexa tvaru musejí být uvedené malými písmeny, lidem se lépe čtou.
3. Nejsou povoleny vendor prefixy.
4. Nejvyšší povolená specificita je 0,3,0 – tři třídy.
5. Nejsou povoleny id selektory (např. `#container`).
6. V hodnotách funkcí, deklarací písem, vlastnosti `content` nebo selektorech se vždy používají dvojité uvozovky.  
V principu je sice možné na většině míst uvozovky nepoužívat, jenže ve výjimečných situacích jsou vyžadovány: například [u selektorů podle atributu](https://mathiasbynens.be/notes/unquoted-attribute-values#css) (`a[href^=http://]` nefunguje) nebo definici formátu písma (`format(woff)`  také nefunguje). 

### 4.3) Vlastní hodnoty zobecňujeme co nejvíce, pravidla nebo selektory co nejméně  {#4-zobecnovani}

Zobecňování do lokálních a globálních proměnných je správné:

```
// Spatne:

.box {
  @include f-s(1.25); // Tezko rict, co se pod tim skryva
  color: #edef33;  // Proc zrovna tato barva?
  @media (min-width: 320px) { … } // Proc zrovna tento breakpoint?
}

// Dobre:

.box {
  font-size: 1.25rem;
  color: $color-primary;
  @media (min-width: $media-small) { … }
}
```

Další doporučení:

1. Pokročilé vlastnosti preprocesorů jako `@extend` nebo placeholdery pokud možno [vůbec nepoužíváme](https://www.sitepoint.com/avoid-sass-extend/). Obvykle dělají více škody než užitku. Mění například pořadí v kódu a podobně jako mixiny vytvářejí abstrakci v kódu specifickou pro náš projekt.
2. Mixiny používáme jen pokud jsou nezbytně nutné pro pochopení kódu nebo odstranění extrémního opakování deklarací. Třeba pro generování mřížky layoutu nebo u složitějších animací.
3. Direktivy `@include` dáváme na začátek deklarací, jsou důležité.


### 4.3) Šetříme se zanořováním {#4-zanorovani}

1. Nezanořujeme do vyšší než první úrovně. 
2. Povoleno je jen zanoření pro pseudotřídy nebo [Media Queries](css3-media-queries.md).
3. Ampersandové (`&__element`) zanoření v selektorech nepoužíváme. Komplikuje nalezení správného selektoru a kodér ztrácí přehled nad selektorem, který vytváří.
4. Vyhýbáme se dlouhým zanořeným deklaracím – [monolitům](https://www.vzhurudolu.cz/blog/65-css-kod-problemy#1-zavorkove-peklo-a-monoliticnost). 

```scss
// Spatne:

.box {
  border: 1px solid $border-color;
  
  &__heading {
    font-size: $font-size-lg;
    
    @media $media-xs { 
      &--large {
        font-size: $font-size-md;
      }
    }
  }
}  

// Dobre:

.box {
  border: 1px solid $border-color;
}  

.box__heading {
  font-size: $font-size-lg;
}

.box__heading--large {
  @media $media-xs { 
    font-size: $font-size-md;
  }  
}   
```


### 4.4) Kód píšeme podle specifikace, hacky automatizujeme {#4-hacky-automatizujeme}

Kód píšeme vždy podle specifikací W3.org. Části, které potřebujeme pro ošetření specifických prohlížečů, automatizujeme. Například [vendor prefixy](prefix.md) přidáváme Autoprefixerem.

Další doporučení:

1. Pořadí pravidel: U složitějších deklarací dáváme důležité vlastnosti na první místo: pozicování, box model a pak teprve ostatní pravidla.
2. Matematické výrazy zapisujeme vždy v závorkách a s mezerami uvnitř Např. `margin-top: (2 * $gutter);` 


## 5) Komentáře {#5}

### 5.1) Pokud je to potřeba k pochopení důvodu a kontextu, vždy ke kódu píšeme komentář {#5-duvod-kontext}

V jiných jazycích je potřeba okomentovat důvod, v CSS ještě *kontext*. Někdy má na prohlíženou část vliv předcházející kód. Jindy prohlížená část ovlivňuje následující. Více je v praktické ukázce [v článku](https://www.vzhurudolu.cz/blog/65-css-kod-problemy#2-chybejici-komentare).

```scss
// Dobre:

.box {
  // Vyuziva modifikator .box--side:
  position: relative;
}
```

Další doporučení:

1. Ponecháváme šířku řádky pro komentáře na maximu 80 znacích, aby se to dobře četlo.
2. Komentáře v kódu píšeme anglicky. Nikdy totiž nevíme, kdo do projektu nastoupí po nás. Pokud vybereme češtinu, píšeme bez diakritiky. Velká část česko-slovenských vývojářů používá anglickou klávesnici.
3. Standardně používáme tiché, preprocesorové komentáře (`// comment`). CSS komentáře (`/* comment */`) jen v hlavičkách souborů kvůli snadnějšímu dohledání v neminifikovaných souborech.
4. Pro výraznější oddělení částí souborů používáme [strukturální komentáře](https://fvsch.com/code/markdown-css-comments/) vycházející z Markdown nadpisů. [Vzor](https://gist.github.com/machal/156a47275bdf5f4b8605a4f0656b94f4). 
5. Nepoužíváme `// TODO` komentáře. V kódu jsou obvykle k ničemu. Zakládáme úkol do systému úkolů.
6. U složitějších komentáře používáme referenci na ovlivněný kód. [Ukázka](https://gist.github.com/machal/0c7503b35688b802a5c53ebcc602c522#file-header-refactor-less-L15-L22).


To je vše, děkuji za pozornost a respektujte prosím povahu CSS. 

---

<small markdown="1">
- Verze: 1.5  
- Autor: Martin Michálek  
- Zdroj: [rcss-zasady.md](https://github.com/machal/prirucka/tree/master/content)  
- Náměty na doplnění, diskuze a pull requesty jsou vítány  
- Stejně jako další obsah ze Vzhůru dolů jej můžete upravit a využít pro vlastní účely s podmínkou dodržení [licence](https://creativecommons.org/licenses/by-nc/3.0/cz/)  
</small>


<!-- AdSnippet -->