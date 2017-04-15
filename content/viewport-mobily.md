# Viewporty na mobilních zařízeních

Dozvíte se co je layoutový, co vizuální a co ideální viewport. 

Co to ale ten *viewport* vlastně je? V kontextu webdesignu jde o označení pro výřez stránky viditelný v okně prohlížeče. Na zařízeních, kde je možné měnit velikost okna (typicky počítačích), tedy viewport představuje šířku a výšku okna bez rozhraní prohlížeče.


## Za co může první iPhone?

Nejdříve ale k historickému kontextu. První iPhone přišel v roce 2006 do situace, kdy byl prakticky každý web navržený pro velké displeje. S tím se dítko Steva Jobse snažilo vypořádat zmenšením layoutu webu a přidáním možností konkrétní části zvětšovat. 

Zároveň první iPhone tajně doufal, že začnou vznikat weby přizpůsobené malým obrazovkám. Proto přešel s možností, jak mu webaři mohou sdělit, že si právě s tímto dali práci. My pro to používáme [meta značku pro viewport](viewport-meta.md). V důsledku se tím sjednotí šířka layoutového viewportu se šířkou ideálního viewportu. 

Ano, viewport na mobilech není jen jeden. Budeme používat terminologii Petera-Paula Kocha a rozlišovat viewporty layoutové, vizuální a ideální. [quirksmode.org/mobile/metaviewport](http://www.quirksmode.org/mobile/metaviewport/)

<figure>
<img src="dist/images/original/viewport-layoutovy-vizualni.jpg" alt="Layoutový a vizuální viewport">
<figcaption markdown="1">    
*Viewport layoutový a vizuální. Při použití správné meta značky jsou oba při načtení responzivní stránky na všech zařízeních stejně velké*
</figcaption> 
</figure>

## Layoutový viewport

Plocha, do které se vykresluje layout stránky napsaný v CSS. 

Pokud vložíte meta značku pro viewport, má stejné rozměry jako vnitřní část okna prohlížeče. Svou velikost ale mění, když uživatel zoomuje, zvětšuje nebo zmenšuje viditelnou část stránky. 

Když na meta značku zapomenete, použije se výchozí šířka layoutového viewportu a web se vykreslí do ní:

* IE10 na Win8: 1024 pixelů 
* iOS a Android: 980 pixelů 

Javascriptem rozměry layoutového viewportu zjistíte pomocí: 

```javascript
document.documentElement.clientWidth
document.documentElement.clientHeight
```

K layoutovému viewportu se vztahují [Media Queries](css3-media-queries.md) pro velikost okna: `min-width` a `max-width`. 


## Vizuální viewport

„Průzor“, přes který se díváte na layoutový viewport a tedy stránku samotnou. Neobsahuje ovládací prvky prohlížeče. Vizuální viewport zůstává pořád stejný.

Javascriptem rozměry vizuálního viewportu zjistíte pomocí: 

```javascript
window.innerWidth
window.innerHeight
```


## Ideální viewport

Ideální viewport je trochu z jiné kategorie než dva předchozí. Hodnotu totiž určuje výrobce prohlížeče. Představuje ideální rozměry layoutového viewportu a tedy webové stránky zobrazované na používaném zařízení. 

Ideální viewport získáte když vydělíte hardwarové rozlišení hodnotou `resolution` (nebo postaru `device-pixel-ratio`).

<div class="ebook-only" markdown="1">

  Vzpomeňte si teď na text [o CSS pixelu](zmeny-css-pixel.md). CSS rozlišení všech zařízení, to je právě náš ideální viewport. Prostě ideální rozlišení zvolené výrobcem zařízení pro nás, autory webů.

</div>

<div class="web-only" markdown="1">

  Pojďme se teď podívat na rozměry jednotlivých viewportů pro pár vybraných mobilních zařízení:

  <div class="rwd-scrollable">
    <table>
      <tr>
        <td></td>
        <td>Hardwarové
    rozlišení</td>
        <td>Výchozí layoutový viewport</td>
        <td>Ideální viewport</td>
        <td>device-pixel-ratio</td>
      </tr>
      <tr>
        <td>iPhone 4 
    / iOS6 
    / Safari</td>
        <td>640 × 960</td>
        <td>980 × 1091</td>
        <td>320 × 480</td>
        <td>2</td>
      </tr>
      <tr>
        <td>iPad Air 
    / iOS8.1 
    / Safari</td>
        <td>1536 × 2048</td>
        <td>980 × 1225</td>
        <td>768 × 1024</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Lumia 630 
    / WP8.1 
    / IE11</td>
        <td>480 × 800</td>
        <td>1024 × 1554</td>
        <td>480 × 800</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Galaxy S5 
    / Android 4.4 
    / Android Browser</td>
        <td>1080 × 1920</td>
        <td>980 × 1532</td>
        <td>360 × 640</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Nexus 6 
    / Android 5 
    / Android Browser</td>
        <td>1440 × 2560</td>
        <td>980 × 1402</td>
        <td>360 × 592</td>
        <td>4</td>
      </tr>
    </table>  
  </div>

</div>

### Proč nepoužívat `screen.width` a `min-device-width`?

Javascriptem se u některých prohlížečů dá ideální viewport zjistit pomocí `screen.width` a `screen.height`. Jiné ovšem zase vracejí šířku a výšku displeje v hardwarových pixelech. Dělá to třeba Android Browser až do verze 4.2. 

Javascriptové vlastnosti ideálního viewportu mají své protějšky v Media Queries `min-device-width` a `min-device-height`, ale ani ty se z těchto důvodů nepoužívají.

<div class="web-only" markdown="1">
  Můžete pokračovat článkem o [meta značce pro viewport](viewport-meta.md) nebo [viewportu na Windows](viewport-windows.md).
</div>

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=Un1lofU64oo">Viewporty na mobilních zařízeních</a> ~ Praktická demonstrace viewportů na mobilních zařízeních a jak se k nim dostat v Javascriptu.
</p>


<div class="ebook-only" markdown="1">

  Po téhle exkurzi do technické teorie se podíváme na její praktické využití  v meta značce pro viewport.
  
</div>
