# SVG <use>

Značka `<use>` uvnitř jeden element SVG duplikovat a na jiném místě použít třeba s jinými vlastnostmi.

<!-- AdSnippet -->


## Proč to používat? Práce s ikonami, šetření práce a dat

* Znovupoužívání elementů uvnitř SVG: je zbytečné dělat stejnou věc vícekrát
* Přímé vkládání často používaných SVG symbolů do HTML - např. ikony, logotypy
* Je možné takto vládat ikony také ze sady v externím souboru ikon – to je ale problematické kvůl Internet Exploreru 11

## "Klonování"

Je dobré vědět, že duplikovat můžeme i složitější strukturuy ve značkách `<g>`, `<svg>` nebo `<symbol>`. Jo a taky elementy `<use>`. Z pohledu DOM to funguje tak, že se vezme jeden uzel a duplikue se na jiné místo.

## Základy v příkladu

Jednoduchá ukázka může vypadat následovně. Nejdříve nadefinujeme objekt:

```html
<svg>
  <g id="svg-square">
    <title>Alternativní text</title>
    <rect x="0" y="0" width="100" height="100" />
  </g>  
</svg>
```    

Tímto jsme nadefinovali čtverec o velikosti 100 × 100 pixelů ve výchozí černé barvě. K němu alternativní text pro případ zpracování nevizuálním zařízením.

Pár komentářů:

- Pokud `<svg>` použijeme uvnitř HTML, není potřeba doplňovat další atributy.
- Skupinu `<g>` tady máme proto, abychom k objektu mohli přiřadit alternativní text – `<title>`.
- Nezapomeneme uvést `id` atribut. Vždyť se náš černý čtverec hodláme odkazovat.
- `<rect>` je onen samotný čtverec. To byste nečekali, viďte?

A teď náš čtverec slavnostně použijeme:

```
<use xlink:href="#svg-square" fill="LimeGreen">
```

Zavoláme původní čtverec a rovnou si jej obarvíme – `fill="LimeGreen"`.

Tady je to vidět v Codepenu: [cdpn.io/e/BrKvwv](https://codepen.io/machal/pen/BrKvwv?editors=1100)

Až si jej budete pozorně prohlížet, všimněte si ještě, že pro zajištění pružného chování „esvégéček“ v Internet Exploreru 11 na různých rozlišeních používáme trik z textu [o responzivních SVG](responzivni-svg.md). Ale to už je jen detail a trochu nutný kolorit.

To by bylo všechno hezké, jenže vám by se určitě hodilo mít někde ve stránce zdroj obrázku neviditelně. Tak, abyse zobrazoval jen když jej někde použijete pomocí `<use>`.


## Neviditelný zdroj

Může stačit `display: none`? To si pište, že ne.

Tímto schováte zdroj schováte před lidmi, ale i stroji. Taková slepecká čtečka vám zdroj nepřečte. Musíme na to fikaněji. Ale nic nového vám neřeknu, třídu `sr-only` asi znáte a používáte:

```
<p class="sr-only">
	<svg>
	  <symbol id="svg-square">
       …
	  </symbol>  
	</svg>
</p>
```

Asi si všímáte, že jsem zde také nepoužil skupinu – `<g>`, ale symbol – `<symbol>`. Symbol se totiž podobně jako třeba sekce `<def>` v prohlížečích nevykresluje. Hodí se mi to pro případ, kdy se stránka zobrazuje [bez CSS](weby-bez-css.md).

Další Codepen pro vaše potěšení: [cdpn.io/e/WzwPdG](https://codepen.io/machal/pen/WzwPdG?editors=1100)


## Stylování… není taková prča

Zatím jsem ukazoval obarvování zdrojů, které neměly výchozí barvu. To jde. Málo se ale ví, že přebarování tady fungovat nemusí. Tohle třeba selže:

```html
<svg>
  <symbol id="svg-square">
    <rect … stroke="Black">
    <use xlink:href="#svg-square" stroke="Grey">
  </symbol>  
</svg>
```

No… jaká myslíte, že bude barva výsledného rámečku? Ano, bohužel stále černá.

Může za to milá fíčurka CSS, o které [píší na MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use):

> CSS attributes are not guaranteed to be inherited by the hidden, cloned DOM unless you explicitly request it using CSS inheritance.

Máte tedy dvě možnosti: První je na původním objektu styly nedefinovat. Druhá je ručně nastavit dědičnost na hodnotu, které je výchozí v běžném DOMu: `stroke: inherit`.

V dalším Codepen si vyzkoušejme všechny možnosti: [cdpn.io/e/EEKrde](https://codepen.io/machal/pen/EEKrde?editors=1100)

- `fill` není na původním objektu definován, takže jej mohou klony používat
- `stroke` na původním definován je, takže se pokusy o přepsání na klonech neberou v potaz
- `stroke-with` je definován, ale nastavili jsme dědičnost pomocí CSS hodnoty `inherit`


To by byl praktický pohled do hloubky používání značky `<use>`. 


## Atributy

* x
* y
* width
* height
* href 
    * the xlink:href attribute is deprecated in favor of simply href.
    * ale safari

## Externí zdroje

* some browsers could apply a same-origin policy on use elements and could refuse to load a cross-origin URI within the href attribute. (Internet Explorer)
* <svg> <use xlink:href="sprite.svg#icon-1"></use></svg>
* Ale nefičí v IE
    * Include the SVG sprite in all the HTML documents themselves.
    * AJAXem donačíst https://css-tricks.com/ajaxing-svg-sprite/
* inline SVG referencing SVG in the same document could do. But unfortunately, it can't. SVG references this way has it's own separate DOM. It goes beyond the regular Shadow DOM boundary that all <use> is subject to.


## Javascriptem

* var useElement =    document.createElementNS('http://www.w3.org/2000/svg', 'use');
 


