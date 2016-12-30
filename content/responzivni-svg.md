# Responzivní SVG

Vektorové obrázky jsou fajn. Asi tady není potřeba zdržovat se možnostmi a důvody pro SVG, ty si případně nastudujte na Vzhůru dolů. ([vrdl.cz/prirucka/svg](http://www.vzhurudolu.cz/prirucka/svg)).

Používání SVG namísto bitmapových obrázků hájím kam vkročím, ale na jednu věc jsou bitmapy zlaté – když dojde na přizpůsobování šířce kontejneru a zachování poměru stran. To co jsme tak snadno zajistili v kapitole o elastických obrázcích, u SVG budeme dělat dost složitě. 

Abychom pochopili, proč to není snadné, musíme na světlo boží vytáhnout jednu překvapivou a možná i nepříjemnou pravdu. Nádech… 

SVG není obrázek. 

…výdech! No jasně, SVG je vektorový dokument, který vkládáme do stránky. Právě proto jej do HTML můžeme vložit nejen jako obrázek (`<img>`), ale jako externí zdroj (`<iframe>`, `<object>`) nebo vektory vykreslit přímo (`<svg>`).

Bitmapy mají jasně definovanou výšku, šířku i poměr stran. Je proto velmi snadné jejich poměr stran zachovat. Jaký je ale poměr stran dokumentu?

## Nastavení šířky a výšky je k ničemu, použijte viewbox

Mnoho kodérů se domnívá, že u značky `<svg>` nastaví parametry `width`, `height` a SVG začne poslouchat. Je to tak ale jen v některých prohlížečích a některých typech vložení do stránky. Celá pravda ovšem je, že nastavením výšky a šířky si mnoho věcí zkomplikujeme. 

Vysvětlení je složité, takže vás odkážu na článek, který to rozebírá lépe, než bych dokázal. Než ale začnete číst, ujistěte se, že doma máte dostatečnou zásobu brufenů. [css-tricks.com/scale-svg](https://css-tricks.com/scale-svg/#article-header-id-2)

Použijte parametr viewbox:

```css
<svg viewbox="0 0 100 50">
```

Tento kód říká, že výchozí velikost SVG dokumentu je 100 na 50 pixelů, že souřadnicových systém začíná klasicky na bodě nula–nula a že si má dokument držet poměr stran.

OK. Odstraňme tedy parametry `width`, `height`, přidejme `viewbox` a pojďme si říct jak zajistit rozpínavé chování SVG při různých typech vložení do stránky.

## Elastické SVG vložené do HTML dokumentu pomocí `<svg>`

V moderních prohlížečích je to v případě dodržení výšeuvedeného jednoduché jako zkopírovat kód vektorového dokumentu doprostřed stránky. Jen kvůli Internet Exploreru musím přidat obalující značku:

```html
<p class="svg-container">
  <svg viewbox="0 0 900 400" class="svg-content"> … </svg>
</p>  
```

Třídu `.svg-container` pak kvůli Explorerům nastylujeme stejně jako jsme to dělali u dalších vkládaných elementů v kapitole o obrázcích:

```css
.svg-box {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 50%; /* Poměr stran 2:1 */ 
}

.svg-box-content {
  position: absolute;
  top: 0;
  left: 0;
}
```

Podívejte na výsledný Codepen. [cdpn.io/e/oYOZwz](http://codepen.io/machal/pen/oYOZwz)

## Elastické SVG externě pomocí <img>

Opět do zdrojového SVG přidáme viewbox a zrušíme případné width a height parametry. Pak stačí klasicky vložit do stránky:

```html
<img src="logo.svg" alt="Logo firmy">  
```

Pokud nebudeme nastavovat výšku obrázku, v CSS nemusíme pro moderní prohlížeče nastavovat vůbec nic. Jen je opět udělat drobnou úpravu kvůli Explorerům:

```css
img {
  width: 100%;
}
```

Codepen s příklad se na vás těší i tady. [cdpn.io/e/VmNbPx](http://codepen.io/machal/pen/VmNbPx)

## Elastické SVG externě v CSS

Tady je to jednoduché, stačí prostě obrázek umístit na pozadí, zakázat mu opakování a pomocí background-size:contain jej rozprostřít do celé šířky rodiče.

```css
.svg-icon {
  background-image: url('logo.svg');
  background-repeat: no-repeat;  
  background-size: contain;
}
```

U většiny vektorových obrázků pak chceme definovat poměr stran, který si mají zachovat. Opět si pomůžeme trikem s paddingem.

```css
.svg-icon
  …
  height: 0;
  padding-bottom: 100%; /* Poměr stran 1:1 */ 
}
```

Teď už není žádné speciální nastavení pro Internet Explorer. Hurá! [cdpn.io/e/NbmgPr](http://codepen.io/machal/pen/NbmgPr)

Tím bychom mohli zajištění pružnosti SVG v responzivním layoutu uzavřít pro nejčastěji používané způsoby vložení. Formát je ale možné do stránky vkládat i dalšími, méně používanými způsoby. Jak zajistit pružnost při vložení do `<object>`, `<iframe>`? Poradí vám vrchní odbornice na SVG, Sara Soueidan, v článku „Making SVGs Responsive with CSS“. [vrdl.in/yixth](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)

Ještě vydržte. To nejlepší teprve přijde. Slíbil jsem přeci povídání o *responzivních* SVG, ale zatím jsme se bavili jen o těch *elastických*. Přizpůsobujících se šířce rozvržení stránky. Kromě pružného layoutu ale responzivitu definují ještě změny stylování v určitých velikostech obrazovky. Prostě Media Queries.

## (Opravdu) responzivní SVG

Ano, uvnitř SVG můžeme Media Queries úplně v pohodě použít a ano, tady se Media Queries nevztahují k rozměrům celé stránky, ale její výseči, která obsahuje SVG.

Vezměme jednoduchý příklad, kdy na menších velikostech okna invertujeme barvy loga Vzhůru dolů:

*TODO obrázek*

Media Queries prostě napíšeme dovnitř kódu vektorového dokumentu:

```html
<svg>
  <style>
    @media all and (max-width: 500px) {
      #layer-background { display: none; }
      #layer-text path { fill: url(#Gradient_1); }
    }
  </style>
  …
</svg>
```

Tady je, prosím, plnohodnotná ukázka. [cdpn.io/e/vyMRPL](http://codepen.io/machal/pen/vyMRPL?editors=1100#0)

