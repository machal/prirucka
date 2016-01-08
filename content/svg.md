# SVG

Nezdá se to, ale SVG (Scalable Vector Graphics) je prastarý vektorový formát, jehož první standard pochází z roku 2001.

Jeho širšímu uplatnění dlouho bránil Microsoft, který pomocí Internet Exploreru až do verze 8 razil vlastní formát VML. S klesajícími podíly starších IE mizí i důvody proč webaři SVG zatím moc nevyužívali.

## Proč SVG používat?

Akutním důvodem je hlavně nástup vysokokapacitních displejů typu Retina a s tím spojené problémy při práci s bitmapovými obrázky. Vektorové SVG tady získává body díky nezávislosti na rozlišení.

Mrkněme na další výhody. Z názvu a formátu plyne možnost obrázek v rozhraní webu libovolně zmenšovat i zvětšovat aniž by ztrácel vizuální kvalitu. Kromě toho je SVG obvykle výrazně datově úspornější, což se zase hodí na dnešních pomalých mobilních připojeních. Obsah je strojově čitelný a [Google jej proto umí indexovat](http://googlewebmastercentral.blogspot.cz/2010/08/google-now-indexes-svg.html). Formát má navíc velmi širokou škálu využití – od jednoduchých vektorových ikonek nebo logotypů až po [stylování vzhledu pomocí CSS](http://tympanus.net/codrops/2013/11/27/svg-icons-ftw) nebo složitější filtry, interakce či [animace](http://tutorials.jenkov.com/svg/svg-animation.html).

Nevýhodou je zejména nutnost u většiny webů vytvářet alternativní řešení pro Internet Explorer do verze 8 a Android Browser do verze 2.3\. Složité SVG je výkonnostně náročné, na to je potřeba dávat pozor u levnějších mobilních zařízeních.

SVG se na webech hodí především pro ikony, logotypy nebo dekorativní prvky stránky — například vlastní styly tlačítek, které nelze vytvořit pomocí CSS.

## Detekce SVG v prohlížečích

[Nejspolehlivější detekci](http://voormedia.com/blog/2012/10/displaying-and-detecting-support-for-svg-images) nabízí javascriptová metoda s detekcí pomocí `document.implementation.hasFeature`. Tady je kód, který jakmile zjistí, že prohlížeč SVG neumí, přidá k dokumentu třídu `.no-svg`. Ta se nám bude hodit v CSS.

```javascript
if (!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
  document.documentElement.className = "no-svg";
}
```

Stejný kód dnes už používá i detekční knihovna [Modernizr](http://modernizr.com/).

Alternativou k přidání třídy může samozřejmě být jakákoliv jiná operace, kterou chceme v prohlížečích bez podpory SVG udělat.

## [SVG jako obrázek na pozadí v CSS](#svg-jako-obrazek-na-pozadi-v-css)

Vybavení kouskem javascriptu, který nám přidává třídu, teď můžeme vyrobit SVG ikonku s fallbackem do PNG:

    .icon {
        background-image: url('icon.svg');
    }

    .no-svg .icon {
        background-image: url('icon.png');
    }

Příklad s SVG v CSS na CodePenu: [http://cdpn.io/e/FEzcI](http://cdpn.io/e/FEzcI).

## SVG v HTML jako `<img>`

Znám dvě možnosti fallbacku v HTML. V první počkáte na spuštění události `onerror`. To znamená na chvíli kdy prohlížeč bez podpory stáhne SVG obrázek a zjistí, že s ním neumí nic udělat. Teď ho poprosíte o stažení PNG alternativy:

```html
    <img src="icon.svg"
        onerror="this.onerror=null; this.src='icon.png'"
        width="100" height="100" alt="…">
```

Ve druhé variantě se v HTML tváříte, že SVG zvládají všechny prohlížeče —

```html
    <img src="logo.svg" width="100" height="100" alt="…">
```

— a v javascriptovém kódu obstaráte výměnu koncovky souboru v `src` v momentě kdy zjistíte, že prohlížeč vektorový formát nezvládne:

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

Příklad s SVG v HTML na CodePenu: [http://cdpn.io/e/isrIB](http://cdpn.io/e/isrIB).

## V prohlížečích bez podpory to vždy bude pomalejší

Bystrému čtenáři neuniklo, že IE8 a další [v případě použití uvnitř HTML](http://www.webpagetest.org/result/140904_0B_GT0/1/details/) stáhne nejdříve SVG, vyděsí se, vyhodí `onerror` a pak teprve stahuje PNG.

V případě [použití SVG v CSS](http://www.webpagetest.org/result/140904_4T_GXF/1/details/) je to trochu lepší – SVG se začnou stahovat, ale requesty prohlížeč zruší a po chvíli začne stahovat PNG alternativy.

Ve starších prohlížečích bude tedy načítání stránky vždy o něco pomalejší. Navíc je fallback závislý na javascriptu. Nezapomínejte na to, až budete zvažovat použití SVG pro vaše stránky.

Pojďme v téhle souvislosti zmínit dobrou alternativu k SVG – [ikonfonty](http://css-tricks.com/examples/IconFont/). Ty mají daleko lepší podporu v prohlížečích, ale všechny ostatní parametry mluví pro SVG. Podívejte se na [srovnání na Crise Coyiera](http://css-tricks.com/icon-fonts-vs-svg/). Někde bude výhodnější použití ikonfontů, někde SVG.

## Jak SVG získat

Grafik webu vám nepřipravuje podklady ve vektorech? Hned za ním utíkejte a citlivě mu oznamte, že od příštího projektu to jinak nepůjde.

Pokud si připravujete podklady sami, na internetech se povaluje spousta kvalitních ikonek. V aplikacích pro jejich správu ([Icomoon](https://icomoon.io/), [Fontastic](http://fontastic.me/)) je možné vybrat si SVG export rovnou s PNG alternativami.

SVG si můžete samozřejmě editovat sami. Kromě obligátního Illustratoru je populární Inkscape a řada dalších nástrojů. Já třeba na Macu používám [Graphic](http://graphic.com/) (dříve iDraw):

![SVG v Graphic (dříve iDraw)](http://www.vzhurudolu.cz/prirucka-content/schemes/idraw_svg.jpg)

## Jak generovat PNG alternativy

Možností je hodně. Od ruční konverze pomocí editoru nebo [online nástrojů](https://cloudconvert.org/svg-to-png) po generátory celého [fallback systému](http://filamentgroup.com/lab/grumpicon-workflow.html) jako je [Grumpicon](http://www.grumpicon.com/).

Pokud v projektu máte mnoho SVG souborů nebo se často mění, hodí se SVG workflow automatizovat pomocí [Gruntu](http://www.vzhurudolu.cz/prirucka/grunt). Tásků pro práci s SVG nabízí fakt hodně – [svg2png](https://www.npmjs.org/package/grunt-svg2png), [svgmin](https://github.com/sindresorhus/grunt-svgmin) nebo Grunt varianta Grumpicon, [Grunticon](https://github.com/filamentgroup/grunticon).
