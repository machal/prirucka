# Viewport na mobilních zařízeních

Co je přesně `device-pixel-ratio`; a proč nepoužívat `screen.width` nebo `min-device-width`? Moc podivností najednou, že?

Pojďme si nejprve říct, co to ten viewport vlastně je. V kontextu webdesignu jde o označení pro výřez dokumentu viditelný v okně prohlížeče. 

Na zařízeních, kde je možné měnit velikost okna, typicky desktop, tedy jde o šířku a výšku okna bez rozhraní prohlížeče.

Správná legrace s viewportem ovšem začíná až na mobilních zařízeních. Hlavně proto, že viewport není jen jeden. Budeme používat terminologii [Petera-Paula Kocha](http://www.quirksmode.org/mobile/metaviewport/) a rozlišovat viewport layoutový, vizuální a ideální.

## Layoutový viewport

Plocha, do které se vykresluje layout stránky. Layout napsaný v CSS se počítá právě z něj. A pro pořádek – z pohledu CSS je layoutový viewport [initial containing block](http://reference.sitepoint.com/css/containingblock).

Výchozí layoutový viewport je na mobilních platformách různý:

* IE10 na Win8 – 1024 pixelů 
* iOS a Android – 980 pixelů 

Ručním nastavením viewportu pomocí třeba `<meta name="viewport" content="width=1000">` sjednotíte velikost layoutového viewportu s vizuálním. O tom se budeme bavit později.

Javascriptem rozměry layoutového viewportu zjistíte pomocí `document.documentElement.clientWidth` a `document.documentElement.clientHeight`.

K layoutovému viewportu se vztahují [Media Queries](css3-media-queries.md) dotazy na velikost okna – `min-width` a `max-width`.

Pomocí `<meta name="viewport" content="width=device-width, initial-scale=1">` v HTML hlavičce a `@-ms-viewport { width: device-width }` v CSS lze layoutový viewport nastavit na rozměry ideálního viewportu. To je věc, kterou chcete udělat u drtivé většiny responzivních webů.

![TODO obrázek](image_0.png)

## Vizuální viewport

„Průzor“, přes který koukáte na layoutový viewport a tedy stránku samotnou. Neobsahuje ovládací prvky prohlížeče.

Při prvním vykreslení stránky je obvykle velikost vizuálního viewportu stejná s layoutovým. Když ale například uživatel zoomuje stránku, zvětšuje nebo zmenšuje layoutový viewport. Vizuální zůstává furt stejný.

Javascriptem rozměry vizuálního viewportu zjistíte pomocí `window.innerWidth` a `window.innerHeight`.

## Ideální viewport

Ideální viewport je trochu z jiné kategorie než ten layoutový nebo vizuální. Je to hodnota určená výrobcem prohlížeče. Představuje ideální rozměry layoutového viewportu a tedy webové stránky zobrazované na používaném zařízení. 

Javascriptem se u některých prohlížečů dá ideální viewport zjistit pomocí `screen.width` a `screen.height`. Některé ovšem vracejí šířku a výšku displeje v hardwarových pixelech. Dělá to [třeba Android Browser](#TODO), takže je tato hodnota v praxi dost nepoužitelná. Javascriptové vlastnosti ideálního viewportu mají své protějšky v Media Queries `min-device-width` a `min-device-height` a i ty jsou tedy díky tomu nepříliš použitelné.

Ideální viewport získáte když vydělíte hardwarové rozlišení hodnotou [device-pixel-ratio](css-pixel.md). 

Tolik teorie. Pojďme se teď podívat na rozměry jednotlivých viewportů pro pár vybraných mobilních zařízení:

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
    <td>iPhone 4 / iOS6 / Safari</td>
    <td>640×960</td>
    <td>980×1091</td>
    <td>320×480</td>
    <td>2</td>
  </tr>
  <tr>
    <td>iPad Air / iOS8.1 / Safari</td>
    <td>1536×2048</td>
    <td>980×1225</td>
    <td>768×1024</td>
    <td>2</td>
  </tr>
  <tr>
    <td>Lumia 630 / WP8.1 / IE11</td>
    <td>480×800</td>
    <td>1024×1554</td>
    <td>480×800</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Galaxy S5 / Android 4.4 / Android Browser</td>
    <td>1080×1920</td>
    <td>980×1532</td>
    <td>360×640</td>
    <td>3</td>
  </tr>
  <tr>
    <td>Nexus 6 / Android 5 / Android Browser</td>
    <td>1440 × 2560</td>
    <td>980×1402</td>
    <td>360×592</td>
    <td>4</td>
  </tr>
</table>

Můžete pokračovat článek o [meta značce pro viewport](viewport-meta.md) nebo [viewportu na Windows](viewport-windows.md).

