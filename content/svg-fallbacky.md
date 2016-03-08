# SVG fallbacky

Pojďme prozkoumat náhradní řešení pro prohlížeče, které neumí [SVG](svg.md). Aktuálně se to týká jen Internet Exploreru ve verzi 8 a Android Browseru 2.3 a starších. V ČR to budou 2 - 4 % uživatelů.

Jako fallback do těchto prohlížečů najčastěji posíláme PNG bitmapu. Proto se ji musíme nejprve naučit nějak elegantně vytvořit.

## Jak generovat PNG alternativy

Možností je hodně. Od ruční konverze pomocí editoru nebo [online nástrojů](https://cloudconvert.org/svg-to-png), přes generování na serveru až po [Grunt](grunt.md) na lokále, který používám já. U mě jde konkrétně o kombinaci dvou [pluginů](grunt-pluginy.md): [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin) pro zmenšení SVG a [grunt-svg2png](https://github.com/dbushell/grunt-svg2png) pro generování PNG alternativ.

PNG obrázky bychom měli, teď se potřebujeme naučit detekovat podporu vektorového formátu.

## Detekce SVG v prohlížečích

[Nejspolehlivější detekci](http://voormedia.com/blog/2012/10/displaying-and-detecting-support-for-svg-images) nabízí javascriptová metoda s detekcí pomocí `document.implementation.hasFeature`. 

Tady je kód, který jakmile zjistí, že prohlížeč SVG neumí, přidá k dokumentu třídu `.no-svg`. Ta se nám bude hodit v CSS.

```javascript
if (!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
  document.documentElement.className = "no-svg";
}
```

Stejný kód používá i detekční knihovna [Modernizr](http://modernizr.com/). Ta navíc umí zjišťovat podporu pro jednotlivé vlastnosti SVG.

Rozebereme si teď jednotlivé způsoby vkládání SVG a možnosti fallbacků pro ně.

## SVG jako obrázek na pozadí v CSS

Do CSS budeme dávat asi hlavně ikony a dekorativní grafiku jako je třeba vzhled tlačítek udělaný pomocí vektorů.

Vybaveni kouskem detekčního javascriptu, který nám přidává třídu `.no-svg`, můžeme vložit SVG ikonku s fallbackem do PNG:

```css
.icon {
  background-image: url('icon.svg');
}

.no-svg .icon {
  background-image: url('icon.png');
}
```

Příklad s SVG v CSS na CodePenu: [cdpn.io/e/FEzcI](http://cdpn.io/e/FEzcI).

Na webu asi najdete i další fallback řešení. [Například](http://jecas.cz/svg#background) pomocí [vícenásobných pozadí](css3-multiple-backgrounds.md) nebo [gradientů](css3-gradients.md). To moc nedoporučuji. Jde o hack, který nefunguje ve všech prohlížečích, ve kterých fungovat má. Detekce vlastnosti je spolehlivější.

## SVG v HTML jako `<img>`

Řešení hlavně pro obsahovou grafiku – schémata, grafy nebo logotypy. Občas i ikony.

### Pomocí detekce vlastnosti

V HTML se tváříte, že SVG zvládají všechny prohlížeče:

```html
<img src="logo.svg" 
  width="100" height="100" alt="…">
```

V javascriptovém kódu pak obstaráte výměnu koncovky souboru v `src` v momentě kdy zjistíte, že prohlížeč vektorový formát nezvládne:

```javascript
if (!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
  var imgs = document.getElementsByTagName('img');
  var endsWithDotSvg = /.*\.svg$/
  var i = 0;
  var l = imgs.length;
  for(; i != l; ++i) {
      if(imgs[i].src.match(endsWithDotSvg)) {
          imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
      }
  }
}
```

Tohle používám na Vzhůru dolů. Příklad s SVG v HTML na CodePenu: [cdpn.io/e/isrIB](http://cdpn.io/e/isrIB).

### Pomocí Picturefillu

Málo se ví, že polyfil [Picturefill](picturefill.md) umí – kromě rozchození [responzivních obrázků](responzivni-obrazky.md) ve všech prohlížečích – také detekovat SVG. Pokud už na stránce Picturefill používáte pro jiné účely, tohle se vám bude líbit:

```html
<picture>
  <source type="image/svg+xml" srcset="logo.svg">
  <img src="logo.png" alt="…">
</picture>
```

## Fallbacky pro inline `<svg>`

Tady je to složitější, protože dovnitř HTML můžete chtít SVG vložit jak kvůli obyčejnému efektu po najetí myši nebo proto, že máte složitou infografiku. Fallback řešení je pokaždé trochu jiné. 

### Pomocí detekce vlastnosti

Tady je potřeba zjišťovat podporu trochu jiným způsobem. Můžeme použít detekci z [CSS Tricks](https://css-tricks.com/a-complete-guide-to-svg-fallbacks/):

```javascript
function supportsSvg() {
  var div = document.createElement('div');
  div.innerHTML = '<svg/>';
  return (div.firstChild && div.firstChild.namespaceURI) 
    == 'http://www.w3.org/2000/svg';
};
```

### Pomocí alternativního HTML obsahu

Výhodné zejména v situaci, kdy v SVG máte interaktivnější nebo strukturovanější typ obsahu.

```html
<svg>
  <desc>
    <div class="svg-fallback">
        <h1>Obsah v podobě tabulky</h1>
        <table> … </table>	
    </div>
  </desc>
  <!-- Obsah v podobně interaktivního SVG -->
</svg>
```

Značka `<desc>` slouží pro popsání obsahu SVG slepeckým čtečkám. Byla by proto chyba vložit do ní varování typu „Váš prohlížeč nepodporuje SVG“. Dejte tam prostě obsah v alternativní podobě. To je perfektní řešení pro čtečky i staré prohlížeče.

Jo – a pozor na `<img>`. Ten uvnitř `<desc>` být může, ale stáhnou ho všechny prohlížeče. Tedy i ty, které namísto obrázku vykreslí SVG obsah.

### Pomocí Grunticon

[Grunticon](http://www.grunticon.com/) je malá javascriptová knihovna a [Grunt](grunt.md) plugin, který obstarává kompletní workflow pro práci s SVG. Včetně generování fallbacků. Pokud chcete používat vektory uvnitř `<svg>` značky, javascriptová část Grunticon je vloží do DOMu a Grunt plugin vám předgeneruje CSS s fallbacky i pro velmi staré prohlížeče typu IE6. 



