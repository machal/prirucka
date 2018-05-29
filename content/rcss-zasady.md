# Zásady psaní respektujícího CSS

Pište kód jednotně a hlavně tak, aby se dobře četl jiným. Nebo vám za rok. U CSS je to obzvlášť důležité. 

## Předpoklady

- Design vašeho projektu je navržený komponentově.
- Píšete čisté nebo preprocesorové CSS, nikoliv CSS v JS.

## Doporučené nástroje

- Píšeme čisté CSS nebo pomocí preprocesorů (SCSS, LESS). Doporučuji preprocesor Sass v konvenční SCSS syntaxi.
- Kód zpracovává postprocesor (PostCSS) a sestavovací nástroje (Grunt, Gulp).
- Při kompilaci nastavujeme Source Maps, abychom v prohlížeči viděli napojení na zdrojové soubory.
- [Prettier](https://prettier.io/) nám automaticky opravuje chyby v kódu ještě před commitem.
- Pro kontrolu psaní používáme [Stylelint](stylelint.md) [v této konfiguraci](https://github.com/machal/example-css-architecture/blob/master/.stylelintrc).
- Pro sjednocení nastavení editorů používáme [EditorConfig](http://editorconfig.org/). 
- Úpravy kódu pro produkční nasazení děláme pomocí pluginů pro sestavovací nástroje nebo PostCSS.  Např. Autoprefixerem přidáváme prefixy.   


## 1) Obecná pravidla {#1}

## 1.1) CSS píšeme s respektem k vlastnostem jazyka {#1-vlastnosti}

Bereme ohled na kaskádu (specifičnost a pořadí selektorů)[css-jazyk-problemy.md] a globální povahu jazyka.

## 1.2) Nevytváříme zbytečné konstrukce neobsažené v CSS {#1-konstrukce}

Pokud to není nezbytně nutné nebo to výrazně nepomáhá čitelnosti kódu, netvoříme proprietární funkce v preprocesorech. CSS umí číst všichni, na rozdíl od specifických konstrukcí. Píšeme jednoduchý kód co nejvíce podobný běžnému CSS.


## 2) Soubory a struktura {#2}

### 2.1) Kód rozdělujeme do malých souborů  {#2-atomicke-soubory}

Jeden problém řeší jeden soubor. Vyhýbáváme se souborům míchajícím více funkcí nebo o délce větší než 200 řádků kódu.


### 2.2) Soubory umísťujeme do adresářů podle kategorií, v nichž specificita roste a počet dotčených souborů se snižuje {#2-kategorie}

Tipy pro metody organizace: [jednoduché projekty](https://www.vzhurudolu.cz/blog/29-organizace-css-2014#adresarova-struktura-css-zdrojaku). Složitější podle [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/).

Další doporučení:

- V adresáři se zdrojovým CSS máme jeden hlavní soubor. Všechny ostatní jsou v adresářích. Víme tak, který otevřít jako první. Doporučuji jej pojmenovat `index.scss`.
- Atomické soubory pak sestavovacím nástrojem skládáme do větších kvůli efektivitě při rychlosti načítání.


## 3) Psaní komponent {#3}

### 3.1 OOCSS: používáme objektový zápis {#3-OOCSS}

Držíme se hlavních pravidel:

- CSS není závislé na struktuře HTML.
- Specifičnost selektrů držíme co nejníže.
- Komponenta nesmí být závislá na rodiči.
- Všechny prvky komponenty prefixujeme jejím názvem.

Vyhneme se tak možným problémům s kolizí komponent nebo jejich částí. Více je v textu o [OOCSS](oocss.md).

### 3.2 BEM: pojmenováním odlišujeme bloky, elementy a modifikátory {#3-BEM}

Pomůže nám to jednoznačně určit typ třídy už z HTML nebo dokumentace. Více je v textu o [BEM](bem.md).

Další doporučení:

- Kód složitějších komponent dělíme na deklarativní a programátorský kód. Např. `module.scss` a vedle něj `module-mixins.scss` nebo také `module-variables.scss`.
-  Vycházíme ze vzorové [šablony SCSS souboru](https://gist.github.com/machal/156a47275bdf5f4b8605a4f0656b94f4): Strukturujeme pomocí Markdown nadpisů. Do hlavičky přidáváme odkaz na dokumentaci. Pod hlavičkou je struktura komponenty. Prvky drží pořadí podle metodiky BEM.
- BEM komponenty lintujeme pomocí [selector-bem-pattern](https://github.com/simonsmith/stylelint-selector-bem-pattern), pluginu do Stylelintu.


## 4) Psaní kódu v deklaracích {#4}

### 4.1) Základní formát psaní podle Prettier {#4-prettier}

Základní formát psaní přebíráme od Prettier. Například:

- Každý selektor v deklaraci patří na vlastní řádku   
- Mezi deklaracemi je vždy jeden volný řádek
- Za čárkami v hodnotách bude vždy mezera
- Desetinné hodnoty mají na začátku vždy nulu

Prettier máme nainstalovaný tak, aby nám všechny prohřešky rovnou sám opravoval ještě před odesláním do repozitáře.

### 4.2) Pokročilejší formát hlídá Stylelint {#4-stylelint}

[Stylelint](stylelint.md) používáme [v této konfiguraci](https://github.com/machal/example-css-architecture/blob/master/.stylelintrc). Například:

- Všechny barvy v hexa tvaru musejí být uvedené malými písmeny
- Nejsou povoleny vendor prefixy
- Nejsou povoleny id selektory 
- U funkcí a deklarací písem se vždy používají dvojité uvozovky

### 4.3) Vlastní hodnoty zobecňujeme, pravidla nebo selektory co nejméně  {#4-zobecnovani}

Zobecňování do lokálních a globálních proměnných je správné:

```
color: #edef33  → color: $color-primary
@media (min-width: 320px)  →  @media (min-width: $media-small)
```

Zobecňování CSS vlastností už ne:

```scss
@include f-s; // …
```

Další doporučení:

- Pokročilé vlastnosti jako `@extend` nebo placeholdery pokud možno vůbecnepoužíváme.  
- Mixiny používáme jen, pokud jsou nezbytně nutné pro pochopení kódu.  Třeba pro generování mřížky layoutu nebo u složitějších animací.


### 4.3) Šetříme se zanořováním {#4-zanorovani}

- Nezanořujeme do vyšší než druhé úrovně.  
- Povoleno je jen zanoření pro pseudotřídy nebo Media Queries. 
- Ampersandové (`&__element`) zanoření v selektorech nepoužíváme.  Znemožňuje nalezení správného selektoru.
- Vyhýbáme se dlouhým zanořeným deklaracím – [monolitům](https://www.vzhurudolu.cz/blog/65-css-kod-problemy#1-zavorkove-peklo-a-monoliticnost). 


### 4.4) Kód podle specifikace, hacky automatizujeme {#4-hacky-automatizujeme}

Kód píšeme vždy podle specifikací W3C. Části, které potřebujeme pro ošetření specifických prohlížečů, automatizujeme. Například [vendor prefixy](prefix.md) přidáváme Autoprefixerem.

Další doporučení:

- Pořadí pravidel: U složitějších dáváme důležité vlastnosti na první místo: pozicování, box model a pak další. 
- Matematické výrazy zapisujeme vždy v závorkách a s mezerami uvnitř 
Např. `margin-top: (2 * $gutter);` 


## 5) Komentáře {#5}

### 5.1) Pokud je to potřeba k pochopení důvodu a kontextu, vždy ke kódu píšeme komentář {#5-duvod-kontext}

V jiných jazycích je potřeba okomentovat důvod, v CSS ještě *kontext*. Někdy má na prohlíženou část vliv předcházející. Jindy prohlížená část ovlivňuje následující. Více je v praktické ukázce [v článku](https://www.vzhurudolu.cz/blog/65-css-kod-problemy#2-chybejici-komentare).

Další doporučení:

- Komentáře v kódu píšeme anglicky. Nikdy totiž nevíme, kdo do projektu nastoupí po nás. Pokud vyberete češtinu, pište bez diakritiky. Velká část vývojářů používá anglickou klávesnici.
- Standardně používáme tiché, preprocesorové komentáře (`// comment`). CSS komentáře (`/* comment */`) jen v hlavičkách souborů kvůli snadnějšímu dohledání v neminifikovaných souborech.
- Pro výraznější oddělení částí souborů používáme [strukturální komentáře](https://fvsch.com/code/markdown-css-comments/) vycházející z Markdown nadpisů. [Vzor](https://gist.github.com/machal/156a47275bdf5f4b8605a4f0656b94f4). 
- Nepoužíváme `// TODO` komentáře. V kódu jsou obvykle k ničemu. Zakládáme úkol do systému úkolů.
- U složitějších komentáře používáme referenci na ovlivněný kód. [Ukázka](https://gist.github.com/machal/0c7503b35688b802a5c53ebcc602c522#file-header-refactor-less-L15-L22).


<small markdown="1">
  Zdroj: [rcss-zasady.md](https://github.com/machal/prirucka/tree/master/content).
</small>


