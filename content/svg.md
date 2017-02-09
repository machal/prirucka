# SVG: vektorový formát, který na webu chyběl

Nezdá se to, ale SVG (Scalable Vector Graphics) je prastarý vektorový formát, jehož první standard pochází z roku 2001.

<!-- AdSnippet -->

Jeho širšímu uplatnění dlouho bránil Microsoft, který pomocí Internet Exploreru až do verze 8 razil vlastní formát VML. To už jsou ale loňské sněhy a dávno to neplatí. SVG má dnes vynikající podporu a slibuje dříve nevídané možnosti pro rozhraní webových aplikací.

## SVG je prostě XML

Jedno z kouzel SVG je v možnosti ručně ho zapsat. Je to jednoduše XML texťák:

```svg
<svg width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#EDE29F" />
  <circle cx="150" cy="100" r="90" fill="#48440E" />
  <text x="75" y="130" font-size="77" fill="white">SVG</text>
</svg>
```

Ukázka naživo: [cdpn.io/e/VaeqOo](http://cdpn.io/e/VaeqOo)

## Proč ho používat?

SVG je výborný formát, který nám pro tvorbu uživatelských rozhraní opravdu chyběl. Jeho výhody oproti bitmapám jsou nezpochybnitelné:

- Nezávislý na rozlišení a [device-pixel-ratio](css-pixel.md)
- Snadno spravovatelný, strojově generovatelný XML kód
- Dynamicky upravitelný z CSS nebo JS
- Menší datový objem než bitmapa
- Přístupnost, indexovatelnost roboty [včetně Google]((http://googlewebmastercentral.blogspot.cz/2010/08/google-now-indexes-svg.html)

Malá nevýhoda je nutnost řešit [fallbacky ve starších prohlížečích](svg-fallbacky.md). Složitější a třeba interaktivní SVG budou také na méně výkonných zařízeních pomaleji vykreslované.

## Využití? Od ikonek až po interaktivní schémata

Formát má velmi širokou škálu nasazení. Výborně se samozřejmě hodí na vkládání logotypů nebo ikonek. U těch jde samozřejmě o principiálně správnější řešení než vkládání pomocí [ikonfontů](https://css-tricks.com/examples/IconFont/), které je potřeba považovat za dočasný hack. 

Další možnosti:

- [stylování vzhledu pomocí CSS](http://tympanus.net/codrops/2013/11/27/svg-icons-ftw)
- [složitější filtry](http://tympanus.net/codrops/css_reference/filter/) na objektech, včetně fotek 
- [efekty textu](http://tympanus.net/codrops-playground/yoksel/KFxwTxTA/editor/html,css,result)
- [interakční efekty](http://tympanus.net/Development/CreativeGooeyEffects/index.html)
- [animace](http://tutorials.jenkov.com/svg/svg-animation.html)

Příchod SVG asi dost obohatí vizuální jazyk webů. Mrkněte se na [tuhle prezentaci Sary Soueidan](http://slides.com/sarasoueidan/building-better-interfaces-with-svg).

<!-- AdSnippet -->

Na jednom konci škály užití, kde leží ikony, tedy vektory logicky nahrazují bitmapy a hlavně PNG. Na druhém konci jsou složité interaktivní infografiky, které se dříve dělaly hlavně pomocí Flashe. SVG je takový malý Flash. 

## Možnost přímého vložení jako `<svg>`

Kromě běžného vložení do stylů přes `background-image` a do HTML přes `<img>` je tu zcela nová možnost vložení přímo přes značku `<svg>`. Tím se vykolíkovalo hřiště pro úpravu vektorů pomocí CSS nebo JS.

Objekt v příkladu uvedeném výše můžeme po najetí myši obarvit:

```css
.svg-circle:hover {
  fill: #5FA316;
}
```

Naživo: [cdpn.io/e/LNGqZw](http://cdpn.io/e/LNGqZw).

## Jak SVG získat

Grafik webu vám nepřipravuje podklady ve vektorech? Hned za ním utíkejte a citlivě mu oznamte, že od příštího projektu to jinak nepůjde.

Pokud si připravujete podklady sami, na internetech se povaluje spousta kvalitních ikonek. Já velmi často chodím na [Iconfinder](https://www.iconfinder.com/). V aplikacích správu ikonek jako je [Icomoon](https://icomoon.io/) nebo [Fontastic](http://fontastic.me/) je možné vybrat si SVG export rovnou s PNG alternativami.

<!-- AdSnippet -->

SVG si můžete samozřejmě editovat sami. Kromě obligátního Illustratoru je populární Inkscape a řada dalších nástrojů. Hezky prý s SVG pracuje [Affinity Designer](https://affinity.serif.com/en-gb/designer/). Já třeba na Macu používám [Graphic](http://graphic.com/) (dříve iDraw):

![SVG v Graphic (dříve iDraw)](dist/images/original/idraw_svg.jpg)

## Podpora v prohlížečích? 95-98 % jich SVG umí

S klesajícími podíly starších IE mizí i důvody proč webaři SVG zatím moc nevyužívali. Formát nezvládá jen IE8 a Android 2.3 a starší. To je na začátku roku 2016 něco mezi dvěma a čtyřmi procenty podílu.

Řešení pro starší prohlížeče najdete v článku [SVG fallbacky](svg-fallbacky.md).

