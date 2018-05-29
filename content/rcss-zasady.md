# Zásady psaní respektujícího CSS

Verze 1.1, autor: Martin Michálek, martin@vzhurudolu.cz, https://www.vzhurudolu.cz/

Předpoklady:

- Design je stavěný komponentově.
- Používá se preprocesor (SCSS) a PostCSS a sestavovací proces. 


## 1) Obecná pravidla {#1}

## 1.1) CSS píšeme s respektem k vlastnostem jazyka {#1-vlastnosti}

Bereme ohled na kaskádu (specifičnost a pořadí selektorů)[css-jazyk-problemy.md] a globální povahu jazyka.

## 1.2) Nevytváříme zbytečné konstrukce neobsažené v CSS {#1-konstrukce}

Pokud to není nezbytně nutné nebo výrazně nepomáhá čitelnosti kódu, netvoříme proprietární funkce v preprocesorech. CSS umí číst všichni, na rozdíl od specifických konstrukcí. Píšeme jednoduchý kód co nejvíce podobný běžnému CSS .

Další doporučení:

- Používáme preprocesor Sass v konvenční SCSS syntaxi.


## 2) Soubory a struktura {#2}

### 2.1) Kód rozdělujeme do malých, atomických souborů  {#2-atomicke-soubory}

### 2.2) Soubory umísťujeme do adresářů podle kategorií, v nichž specificita roste a počet dotčených souborů se snižuje {#2-kategorie}

Tipy pro metody organizace: [jednoduché projekty](https://www.vzhurudolu.cz/blog/29-organizace-css-2014#adresarova-struktura-css-zdrojaku). Složitější podle [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/).

Další doporučení:

- V adresáři se zdrojovým CSS máme jeden hlavní soubor. Všechny ostatní jsou v adresářích.  Víme tak, který otevřít jako první. Doporučuji pojmenovat jako `index.scss`
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


## 4) Psaní kódu v deklaracích {#4-kod}

### 4.1) Základní formát psaní {#4-format}

- Základní formát psaní přebíráme od Prettier

### 4.2) Vlastní hodnoty zobecňujeme, pravidla nebo selektory co nejméně  {#4-zobecnovani}

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


### 4.3) Šetříme se zanořováním

- Nezanořujeme do vyšší než druhé úrovně.  
- Povoleno je jen zanoření pro pseudotřídy nebo Media Queries. 
- Ampersandové (`&__element`) zanoření v selektorech nepoužíváme.  Znemožňuje nalezení správného selektoru.
- Vyhýbáme se dlouhým zanořeným deklaracím – [monolitům](https://www.vzhurudolu.cz/blog/65-css-kod-problemy#1-zavorkove-peklo-a-monoliticnost). 

Další doporučení:

- Pořadí pravidel: U složitějších dáváme důležité vlastnosti na první místo: pozicování, box model a pak další. 
- Matematické výrazy zapisujeme vždy v závorkách a s mezerami uvnitř 
Např. `margin-top: (2 * $gutter);` 

## 6) Komentáře

### 6.1) Pokud je to potřeba k pochopení důvodu a kontextu, vždy ke kódu píšeme komentář. 

[Článek](https://www.vzhurudolu.cz/blog/65-css-kod-problemy#2-chybejici-komentare)
Vzor.

Další doporučení:

- Komentáře v kódu píšeme anglicky. 
- Standardně používáme tiché komentáře. CSS komentáře jen v hlavičkách souborů kvůli snadnějšímu dohledání v neminifikovaných souborech. 
- Používáme strukturální komentáře vycházející z Markdown nadpisů. Vzor.  
- Nepoužíváme TODO komentáře, zakládáme Issue do systému úkolů. 

Doporučený technologický setup:

- Při kompilaci nastavujeme Source Maps.
- Prettier nám také automaticky opravuje chyby v kódu ještě před commitem. 
- Pro kontrolu psaní používáme Stylelint v této konfiguraci. 
- Pro nastavení editoru používáme EditorConfig.  
- Veškeré úpravy kódu pro produkční nasazení děláme pomocí PostCSS pluginů. 
Autoprefixer pro přidání prefixů, CSSnano pro minifikaci atd.   
 
