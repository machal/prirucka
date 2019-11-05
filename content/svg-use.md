# USE v SVG: klonování šetří čas a data

Značka `<use>` uvnitř SVG dokáže element duplikovat a na jiném místě použít třeba s jinými vlastnostmi.


Je to výhodné hlavně ze tří důvodů:

* Znovupoužívání elementů uvnitř SVG: je zbytečné dělat stejnou věc vícekrát.
* Přímé vkládání často používaných SVG symbolů do HTML – např. ikony nebo logotypy.
* Je možné takto vládat ikony také ze sady v externím souboru. Nefunguje to v Internet Exploreru 11, ale jde to občůrat.

<!-- AdSnippet -->

Duplikovat můžeme i složitější struktury ve značkách `<g>`, `<svg>` nebo `<symbol>`. Jo a taky elementy `<use>`. Z pohledu DOM to funguje tak, že se vezme jeden uzel a duplikuje se na jiné místo. Ano, klony útočí.


## Základy v příkladu {#zaklady}

Jednoduchá ukázka může vypadat následovně:

```html
<svg>
  <g id="svg-square">
    <title>Alternativní text</title>
    <rect x="0" y="0" width="100" height="100" />
  </g>  
</svg>
```    

Tímto jsme nadefinovali čtverec o velikosti 100 × 100 pixelů ve výchozí černé barvě. K němu alternativní text pro případ zpracování nevizuálním zařízením jako jsou slepecké čtečky.

Pár komentářů:

- Pokud `<svg>` použijeme uvnitř HTML, není potřeba doplňovat k němu další atributy.
- Skupinu `<g>` tady máme proto, abychom k objektu mohli přiřadit alternativní text `<title>`. Toto velmi doporučuji, pokud se jedná o obsahový obrázek, u kterého má alternativní text smysl.
- Nezapomeneme uvést `id` atribut, protože se na náš černý čtverec hodláme odkazovat.
- `<rect>` je onen samotný čtverec. To byste nečekali, viďte?

A teď náš čtverec slavnostně použijeme:

```svg
<use xlink:href="#svg-square" fill="LimeGreen">
```

Zavoláme původní objekt a rovnou si jej obarvíme, to pomocí `fill="LimeGreen"`.

CodePen: [cdpn.io/e/BrKvwv](https://codepen.io/machal/pen/BrKvwv?editors=1100)

Až si jej budete pozorně prohlížet, všimněte si ještě, že pro zajištění pružného chování „esvégéček“ v Internet Exploreru 11 na různých rozlišeních používáme trik z textu [o responzivních SVG](responzivni-svg.md). Ale to už je jen detail a trochu i nutný kolorit, abychom neměli pocit, že všechno může jít bez potíží.

<!-- AdSnippet -->

Je to hezké, že? Jenže vám by se určitě hodilo mít někde ve stránce zdroj obrázku schovaný. Nebo lépe neviditelný. Tak, aby se zobrazoval jen když jej někde použijete pomocí `<use>`.


## Neviditelný zdroj {#neviditelny}

Může stačit `display:none`? To si pište, že ne.

Tím byste zdroj schovali před lidmi, ale i stroji. Taková slepecká čtečka vám jej pak nepřečte. Musíme na to fikaněji. Ale nic nového vám neřeknu, třídu `sr-only` asi znáte a používáte:

```html
<p class="sr-only">
	<svg>
	  <symbol id="svg-square">
       …
	  </symbol>  
	</svg>
</p>
```

Všimněte si, že jsem zde také nepoužil skupinu `<g>`, ale symbol `<symbol>`. Ten se totiž podobně jako třeba sekce `<def>` v prohlížečích nevykresluje. Hodí se mi to pro případ, kdy se stránka zobrazuje [bez CSS](weby-bez-css.md) a já nechci zdroj vykreslit ani v tomto případě.

CodePen: [cdpn.io/e/WzwPdG](https://codepen.io/machal/pen/WzwPdG?editors=1100)


## Stylování… není taková prča {#stylovani}

Zatím jsem ukazoval obarvování zdrojů, které neměly výchozí barvu. To jde. Málo se ale ví, že přebarování tady fungovat nemusí. Tohle třeba selže:

```html
<svg>
  <symbol id="svg-square">
    <rect … stroke="Black">    
  </symbol>  
  <use xlink:href="#svg-square" stroke="Grey">
</svg>
```

No… jaká myslíte, že bude barva výsledného rámečku? Ano, bohužel stále černá.

Může za to milá fíčurka CSS, o které [píší na MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use):

> CSS attributes are not guaranteed to be inherited by the hidden, cloned DOM unless you explicitly request it using CSS inheritance.

Máte tedy dvě možnosti: První je na původním objektu styly nedefinovat. Druhá je ručně nastavit [dědičnost](css-dedicnost.md) na hodnotu, které je výchozí v běžném DOMu: `stroke:inherit`.

V dalším Codepenu si vyzkoušejme všechny možnosti.

* `fill` není na původním objektu definován, takže jej mohou klony používat.
* `stroke` na původním definován je, takže se pokusy o přepsání na klonech neberou v potaz.
* `stroke-with` je definován, ale nastavili jsme [dědičnost](css-dedicnost.md) pomocí CSS [hodnoty `inherit`](css-all-inherit-initial-unset-revert.md).

CodePen: [cdpn.io/e/EEKrde](https://codepen.io/machal/pen/EEKrde?editors=1100)

To by byl praktický pohled do hloubky značky `<use>`. Ještě se mrkneme na atributy a taky používání externích zdrojů.

## Atributy {#atributy}

```svg
<use xlink:href="#svg-square"
  width="100" height="100">
```

* `x` a `y` – pozice prvku v [souřadnicovém systému uvnitř SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Positions). Obvykle začíná v horním levém rohu.
* `width` a `height` – šířka a výška prvku v souřadnicovém systému uvnitř SVG.
* `href` – cesta ke zdroji. Tady ale pozor. V době psaní textu umí Safari jen starší zápis `xlink:href`. Je tedy potřeba použít ten.  

Cesta ke zdroji by stála za zmínku. Teoreticky totiž umožňuje vložit externí SVG soubor.


## Přístupnost {#atributy}

Nezapomeňte hlavně na dvě věci

- `<title>` pro každý obrázek, u kterého má smysl. Ikony, loga a další obsahové symboly. Viz ukázky výše.
- `role="presentation"` pro obrázky, které slouží k dekoraci. Šipky, kulaté rohy a další ornamenty. Jsou to přesně ty, u kterých nemá `<title>` smysl.

V případě pochybností prostě [testujte přímo ve čtečkách](testovani-odecitace.md).


## Externí zdroje {#externi}

Tohle by mohlo být super:

```svg
<use xlink:href="sprite.svg#icon-1">
```

Umožnilo by to ukládat ikonky [do jednoho externího souboru](https://css-tricks.com/svg-sprites-use-better-icon-fonts/), podobně jako se to dělávalo [s ikonfonty](ikonfonty-vs-svg.md). Zároveň by zůstala výhoda existence SVG v rámci DOMu – tedy stylování.

Jenže… nebude to fungovat v Internet Exploreru 11. (A taky do Safari 6 a Edge 12, ale to nás tak moc nepálí.)

Nějaká řešení tady ale jsou. Vlastně stačí detekovat nepodporující prohlížeče a pomocí AJAXu v nich vložit část externích SVG přímo do dokumentu. Dělá to například [SVG for Everybody](https://github.com/jonathantneal/svg4everybody).

To nejdůležitější na konec:

- Využívejte `<use>`. Vám to ušetří čas a uživatelům data.
- Hodí se pro častějí opakované symboly: ikony, někdy i logotypy a dekorativní prvky.
- Plnou kompatibilitu zajistí odkazování pomocí `xlink:href`.
- Krásné je vložit symbol z externího souboru: `<use xlink:href="sprite.svg#icon-1">`. MSIE vyřeší například polyfill „SVG for Everybody“. 
- Nezapomínejte na přístupnost: hlavně `<title>` a `role="presentation"`.


<!-- AdSnippet -->
