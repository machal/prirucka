# SVG obrázky s plnou zpětnou kompatibilitou pomocí Grunticon

[Grunticon](http://www.grunticon.com/) je sada nástrojů pro maximalizaci zpětné kompatibility [SVG vektorových obrázků](svg.md).

V „balení“ najdete [Grunt](grunt.md) úlohu pro zpracování sady SVG obrázků a javascriptovou knihovnu pro ošetření fallbacků. Grunt úloha vygeneruje PNG verze obrázků pro staré prohlížeče a tři verze souborů se styly. Kouskem javascriptu se pak rozhoduje, který typ fallbacku se použije:

## Postup implementace

### 1. Nainstalujte Grunticon

```bash
npm install grunt-grunticon --save-dev
```

Pokud nemáte nainstalovaný Node.js ekosystém, [začněte tady](node-instalace.md).

### 2. Nastavte Grunt úlohu

```javascript
grunticon: {
   icons: {
     files: [
       {
         expand: true,
         cwd: 'src/img/svg',
         src: ['*.svg'],
         dest: 'dist/img/svg'
      },   
     options: {
       pngfolder: '',
       pngpath: 'dist/img/png',
       enhanceSVG: true,
       compressPNG: true,
       datasvgcss: 'dist/css/icons.css',
       datapngcss: 'dist/css/icons-png.css',
       urlpngcss: 'dist/css/icons-png-bg.css'
     }
     ]
   }
}      
``` 

- Zdrojové SVG obrázky definujete v `cwd`. 
- Pomocí `enhanceSVG` říkáte, že SVG chcete vkládat přímo do DOMu.
- Výstupní PNG jsou komprimovaná díky nastavení `compressPNG: true`.

Grunt úlohu pak prostě spustíte:

```bash
grunt grunticon
```

V definovaných adresářích by se měly objevit nové soubory.

### Vše vložíte do HTML

```html
<div class="icon-home" data-grunticon-embed></div>
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
<noscript><link href="/css/svg-fallback.css" rel="stylesheet"></noscript>
```

1. V moderních prohlížečích se použije styl s SVG obrázky vloženými jako data-uri. Pokud stojíte o vložení do DOMu pomocí značky `<svg>` – u HTML značky ikonky stačí použít parametr `data-grunticon-embed`.
2. V prohlížečích co neumí SVG se použije druhý stylopis, kde jsou jako data-uri vložené PNG obrázky. Týká se IE8, Opery Mini nebo Androidu do verze 2.3.
3. V prohlížečích co neumí SVG, ani data-uri nebo nerozběhnou javascript se použije verze s PNG obrázky v `background-image`. Tím ošetříte i pradědečky typu IE6 nebo IE7.

---

Demo: http://filamentgroup.github.io/grunticon/example/output/preview.html

