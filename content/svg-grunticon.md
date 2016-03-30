# Zpětně kompatibilní SVG pomocí Grunticon

[Grunticon](http://www.grunticon.com/) je sada nástrojů pro maximalizaci zpětné kompatibility [SVG vektorových obrázků](svg.md). Kombinuje výhodu [přímého vložení vektoru](/prirucka/svg#moznost-primeho-vlozeni-jako-code-lt-svg-gt-code) do tagu `<svg>` s kompatibilitou až do Internet Exploreru ve verzi 6.

V „balení“ najdete [Grunt](grunt.md) úlohu pro zpracování sady SVG obrázků a javascriptovou knihovnu pro ošetření fallbacků. Grunt úloha vygeneruje PNG verze obrázků pro staré prohlížeče a tři verze souborů se styly. Kouskem javascriptu se pak rozhoduje, který typ fallbacku se použije.

Připravil jsem malé [Grunticon demo](https://github.com/machal/demo-grunticon). Pojďme si ukázat detailní postup implentace.

## 1. Nainstalujte Grunticon

```bash
npm install grunt-grunticon --save-dev
```

Pokud nemáte nainstalovaný Node.js ekosystém, [začněte tady](node-instalace.md).

## 2. Nastavte Grunt úlohu 

```javascript
grunticon: {
   icons: {
     files: [
       {
         expand: true,
         cwd: 'src/img/svg',
         src: ['*.svg'],
         dest: 'dist/grunticon'
      }   
     ], 
     options: {
       enhanceSVG: true,
       compressPNG: true,
       pngpath: '../png',         
       datasvgcss: 'css/icons.css',
       datapngcss: 'css/icons-png.css',
       urlpngcss: 'css/icons-png-bg.css'
     }       
   }
}  
``` 

- Složku se zdrojovými SVG obrázky definujeme v `cwd`. 
- `enhanceSVG: true` říká, že SVG chcete vkládat přímo do DOMu.
- `compressPNG: true` – výstupní  PNG alternativy se komprimují.
- `pngpath` – cesta k PNG alternativám z pohledu CSS.
- `datasvgcss` – styl pro moderní prohlížeče.
- `datapngcss` – kam se uloží styl pro prohlížeče co neumí inline SVG.  Týká se IE8, Opery Mini nebo Androidu do verze 2.3.
- `urlpngcss` –  styl pro prohlížeče co neumí inline SVG, ani [data-uri](http://jecas.cz/data-uri). Týká se třeba IE7 a IE6.

Grunt úlohu pak prostě spustíte:

```bash
grunt grunticon
```

V definovaných adresářích by se měly objevit nové soubory. V `dest` adresáři je pak [náhledový soubor](https://github.com/machal/demo-grunticon/blob/master/dist/grunticon/preview.html), kde si vygenerované můžete hned zkusit.

## 3. Vše vložíte do HTML

Ikonu vložíte jen pomocí třídy z CSS co vygeneruje Grunticon – tady `icon-bootstrap`. Pokud stojíte o vložení do DOMu pomocí značky `<svg>`, stačí použít parametr `data-grunticon-embed`:

```html
<div class="icon icon-bootstrap" 
  data-grunticon-embed>
</div>
```

Z HTML hlavičky stáhnete skript, který vám Grunticon vygeneruje pro načítání ikonek a zavoláte funkci `grunticon()`:

```html
<script src="/js/grunticon.loader.js"></script>
<script>
grunticon(
  [
    // 1. SVG jako data-uri:
    "/css/icons.css",     
    // 2. PNG jako data-uri:
    "/css/icons-png.css",
    // 3. PNG jako obrázek na pozadí:    
    "/css/icons-png-bg.css"
  ],
  grunticon.svgLoadedCallback
);
<script>
```

Nezapomeňte uvést i alternativu pro prohlížeče bez běžícího javascriptu:

```html
<noscript>
  <link href="/css/svg-fallback.css" rel="stylesheet">
</noscript>
```

Další kroky jsou volitelné. Potřeboval jsem je udělat, protože ikony používám v responzivním layoutu. 

## Ošetření zachování poměru stran

Zachování poměru stran se hodí pro krátký čas než se načtou SVG ikony a pro prostředí bez javascriptu.  Tohle nám trochu zkomplikuje HTML kód:

```html
<p class="icon">
  <span class="icon-container">
    <span class="icon-inside icon-bootstrap" 
      data-grunticon-embed></span>
  </span>
</p>
```

V CSS pak použieje [známým trik](http://kratce.vzhurudolu.cz/post/44617199471/responzivn%C3%AD-m%C3%A9dia-se-zachov%C3%A1n%C3%ADm-pom%C4%9Bru-stran) pro vkládaná média:

```css
.icon-container {
  display: block;
  position: relative;
  width: 100%;	
  height: 0;
  padding-bottom: 56.25%;  /* 16:9 */
  /* Zástupná barva než se do boxíku načtou ikony: */
  background-color: #ddd;
}

.icon-inside {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  /* Pro background-image fallbacky: */
  background-size: contain; 
}
```

Vkládané SVG se samo o sobě nepřizpůsobuje rodičovskému kontejneru, proto je potřeba zapnout ještě:

```css
.icon svg {
  width: 100%;
  height: 100%; 
}
```

## Velikost alternativních PNG obrázků

Šířka a výška PNG obrázků pro starší prohlížeče se bere z hodnot, které máte ve zdrojových obrázcích u značky `<svg>`.  Buď si je tedy nastavte podle fixní šířky layoutu ve starších prohlížečích, nebo se bez nich tedy ve zdrojích obejdete a velikosti PNG si nastavíte parametry `defaultWidth` a `defaultHeight`.

A to je vše, přátelé. Více najdete [v demu na Githubu](https://github.com/machal/demo-grunticon).

