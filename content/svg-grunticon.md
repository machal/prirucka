# Grunticon: SVG s vynikající zpětnou kompatibilitou

[Grunticon](http://www.grunticon.com/) je sada nástrojů pro maximalizaci zpětné kompatibility [SVG](svg.md). 

Nabízí [přímé vložení vektorového obrázku](/prirucka/svg#moznost-primeho-vlozeni-jako-code-lt-svg-gt-code) do značky `<svg>` pomocí Javascriptu. To vám umožní ovlivňovat části SVG pomocí stylů a skriptů podobně jako to děláte u jiných části stránky. Jako bonus od Grunticon dostanete kompatibilitu až do Internet Exploreru ve verzi 6. Pamatujete si na něj ještě?

V „balení“ najdete [Grunt](grunt.md) úlohu pro zpracování sady SVG obrázků a javascriptovou knihovnu pro ošetření fallbacků. Úloha vygeneruje PNG verze obrázků pro staré prohlížeče a tři verze souborů se styly. Kouskem skriptu se pak rozhoduje, který typ fallbacku se použije.

Připravil jsem malé [demo využití Grunticon](https://github.com/machal/demo-grunticon). Pojďme to vše ukázat v detailním postupu implementace.

## 1. Nainstalujte Grunticon

```bash
npm install grunt-grunticon --save-dev
```

Předtím možná budete potřebovat [rozchodit Node.js ekosystém](node-instalace.md) na svém počítači.

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
- `datapngcss` – styl pro prohlížeče co neumí inline SVG.  Týká se dědka IE8, Opery Mini nebo Androidu do verze 2.3.
- `urlpngcss` –  styl pro prohlížeče co neumí inline SVG, ani [data-uri](http://jecas.cz/data-uri). Týká se třeba IE7 a IE6. Pradědka a prapradědka.

Grunt úlohu pak prostě spustíte:

```bash
grunt grunticon
```

V definovaných adresářích by se měly objevit nové soubory. V `dest` adresáři je pak [náhledový soubor](https://github.com/machal/demo-grunticon/blob/master/dist/grunticon/preview.html), kde si vygenerované můžete hned zkusit.

## 3. Úprava HTML

Ikonu vložíte jednoduše třídou ze stylu co vygeneruje Grunticon – v demonstračním příkladu je to třeba `.icon-bootstrap`. Pokud stojíte o vložení do DOMu pomocí značky `<svg>`, stačí použít parametr `data-grunticon-embed`:

```html
<div class="icon icon-bootstrap" 
  data-grunticon-embed>
</div>
```

Do hlavičky přidáte skript, který vám Grunticon vygeneruje pro načítání ikonek a zavoláte funkci `grunticon()`:

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
</script>
```

Nezapomeňte uvést i alternativu pro prohlížeče bez běžícího Javascriptu:

```html
<noscript>
  <link href="/css/icons-png-bg.css" rel="stylesheet">
</noscript>
```

Další kroky jsou volitelné. Potřeboval jsem je udělat, protože ikony používám v responzivním layoutu. 

## Ošetření zachování poměru stran

Zachování poměru stran se hodí pro krátký čas než se načtou SVG ikony a pro prostředí bez Javascriptu.  Tohle nám trochu zkomplikuje HTML kód:

```html
<p class="icon">
  <span class="icon-container">
    <span class="icon-inside icon-bootstrap" 
      data-grunticon-embed></span>
  </span>
</p>
```

V CSS pak použijeme [známým trik](http://kratce.vzhurudolu.cz/post/44617199471/responzivn%C3%AD-m%C3%A9dia-se-zachov%C3%A1n%C3%ADm-pom%C4%9Bru-stran) pro vkládaná média:

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

Vkládané SVG se samo o sobě nepřizpůsobuje rodičovskému kontejneru, proto je potřeba zapnout ještě tohle:

```css
.icon svg {
  width: 100%;
  height: 100%; 
}
```

## Velikost alternativních PNG obrázků

Šířka a výška fallback obrázků se bere z hodnot, které máte ve zdrojových obrázcích u značky `<svg>`.  Buď si je tedy nastavte podle fixní šířky layoutu ve starších prohlížečích, nebo se bez nich v SVG zdrojích obejděte a velikosti PNG si nastavte v Grunt úloze parametry `defaultWidth` a `defaultHeight`.

A to je vše, přátelé. Více najdete [v demu na Githubu](https://github.com/machal/demo-grunticon).

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=jG49jWMSjSc">Grunticon: sada nástrojů pro práci s SVG </a> ~ Co je Grunticon a jak ho nainstalovat a nastavit?
</p>
