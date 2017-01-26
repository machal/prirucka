# SVG řešení: Vlastní výřezy obrázků pomocí SVG

Mám fotku. V CSS snadno udělám kulatý výřez, jenž co vlastní tvar? 

*TODO IMG*

Možností je víc, ale když chci aby to fungovalo prakticky ve všech prohlížečích, zvolím SVG. Tohle řešení nebude fungovat jen v Exploreru 8 a starších, ale ošetříme tam samozřejmě fallbacky.

## 1) Nejdříve fotka v SVG

```html
<svg>
  <image xlink:href="image.jpg" 
    class="svg__image" alt="Image">  
</svg>
```

## 2) Definuji tvar výstřižku

```html
<clipPath id="clip-path">
  <path d="…">
</clipPath>
```

Všimněte si, že zde nepoužívám zanoření do `<defs>`, oblasti pro vymezení později využívaných objektů. Nefungovalo by to totiž v aktuálních verzích Safari.


## 3) Výstřižek pak na obrázek nasadím

```html
<image clip-path="url(#clip-path)" …>
```

Dělám to přímým parametrem v SVG kódu. Proč jsem nepoužil [CSS vlastnost `clip-path`](http://codepen.io/machal/pen/qRPbYZ), která je také standardně k dispozici? Opět kvůli Safari, které ji zatím neumí.

V mém případě jsem si v grafickém editoru naklikal něco jako „metalový hexagon“. Teď už to bude vypadat jako na obrázku nahoře.


## Náhradní řešení pro staré Explorery a legrace se značkou `<image>`

Řešení bude fungovat ve všech dnes vyráběných prohlížečích. V těch starých,  které neumí SVG, jako je třeba Internet Exploreru do verze 8, obrázek ani ořez neuvidíte. Mohli bychom pro ně přidat [SVG fallback](svg-fallbacky.md) a značku `<desc>`:

```html
<desc>
  <img src="image.jpg" alt="…">
</desc>  
```

Ale neuděláme to. Prohlížeče se totiž tváří, že [značku `<image>` znají](https://jakearchibald.com/2013/having-fun-with-image/), i když by ji znát neměly. Přeborníkem v tomto je opět Explorer. A tak náš `<image>` uvnitř `<svg>` považuje za `<img>`, kterému jsme zapomněli přidat parametr `src`. To nám umožní vrátit se na začátek a udělat vtipně jednoduchý fallback:

```html
<svg>
  <image xlink:href="image.jpg" 
    src="image.jpg" 
    class="svg__image" alt="Image">  
</svg>
```

Tady je živá ukázka: [cdpn.io/e/jrPpdO](http://codepen.io/machal/pen/jrPpdO).
