# Responzivní SVG

Vektorové obrázky jsou fajn. Asi tady není potřeba zahltit vás celou řadou argumentů pro využívání SVG. Ty si případně nastudujte na Vzhůru dolů. ([vrdl.cz/prirucka/svg](http://www.vzhurudolu.cz/prirucka/svg)).

Používání SVG pro ikony nebo logotypy namísto PNG či GIF obrázků hájím kam vkročím, ale v jedné věci jsou bitmapy zlaté. V přizpůsobování šířce layoutu a zachování poměru stran. To, čeho jsme tak snadno dosáhli v kapitole o pružných obrázcích, u SVG budeme dělat poměrně složitě. 

Abychom ale pochopili, proč není dosažení pružnosti SVG jednoduché jako facka, musíme na světlo boží vytáhnout jednu překvapivou a možná i nepříjemnou pravdu. Nádech… 

SVG není obrázek. 

…výdech! No jasně, SVG je vektorový dokument, který vkládáme do stránky. Právě proto jej do HTML dát nejen ve formě obrázku (`<img>`), ale také jako externí zdroj (`<iframe>`, `<object>`) nebo vektory vykreslit přímo (`<svg>`).

Bitmapy mají jasně definovanou výšku i šířku. Je proto velmi snadné jejich poměr stran zachovat. Jaký je ale výška nebo poměr stran dokumentu?


## Nastavení šířky a výšky je k ničemu, použijte `viewbox`

Mnoho kodérů se domnívá, že u značky `<svg>` nastaví parametry `width`, `height` a SVG začne poslouchat. Je to tak ale jen v některých prohlížečích a některých typech vložení do stránky. Celá pravda ovšem je, že nastavením výšky a šířky si mnoho věcí zkomplikujeme. 

Vysvětlení je složité, takže vás odkážu na článek, který to rozebírá lépe, než bych dokázal udělat já. Než se ale do čtení textu „How to Scale SVG“ na CSS Tricks pustíte, ujistěte se, že doma máte dostatečnou zásobu brufenů. [css-tricks.com/scale-svg](https://css-tricks.com/scale-svg/#article-header-id-2)

S brufeny nebo bez, výsledek je stejný. Prostě použijeme parametr `viewbox`:

```css
<svg viewbox="0 0 100 50">
```

Kód říká, že výchozí velikost SVG dokumentu je 100 na 50 pixelů, že souřadnicových systém začíná klasicky na bodě nula nula a že si má dokument držet poměr stran.

Jak teď zajistit pružné chování SVG při různých typech vložení do stránky?


## Pružné SVG vložené do HTML dokumentu pomocí `<svg>`

V moderních prohlížečích je to v případě dodržení výšeuvedeného opravdu jednoduché. Jen kvůli Internet Exploreru musím přidat obalující značku:

```html
<p class="svg-container">
  <svg viewbox="0 0 900 400" class="svg-content"> … </svg>
</p>  
```

Třídu `.svg-container` pak kvůli Explorerům nastylujeme metodou pro zachování poměru stran, stejně jako jsme to udělali u vkládaných elementů [v textu o obrázcích](pruzna-media.md):

```css
.svg-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%; /* Poměr stran 1:1 */ 
}

.svg-content {
  position: absolute;
  top: 0;
  left: 0;
}
```

Podívejte na výsledný Codepen. [cdpn.io/e/oYOZwz](http://codepen.io/machal/pen/oYOZwz)


## Pružné SVG vkládáné externě pomocí `<img>`

Opět do zdrojového SVG přidáme viewbox a zrušíme případně přítomné atributy `width` a `height`. Pak stačí klasicky vložit do stránky:

```html
<img src="logo.svg" class="svg"
  alt="Logo firmy">  
```

Pokud nebudeme nastavovat výšku obrázku, v CSS nemusíme pro moderní prohlížeče nastavovat vůbec nic. Opět jen musíme napravit chování Internet Explorerů:

```css
.svg {
  width: 100%;
}
```

Codepen s příkladem se na vás těší i tady. [cdpn.io/e/VmNbPx](http://codepen.io/machal/pen/VmNbPx)


## Pružné SVG externě v CSS

Tady je to jednoduché, stačí prostě obrázek umístit na pozadí, zakázat mu opakování a pomocí `background-size: contain` jej rozprostřít do celé šířky rodiče.

```css
.svg-icon {
  background-image: url('icon.svg');
  background-repeat: no-repeat;  
  background-size: contain;
}
```

U většiny vektorových obrázků pak chceme definovat poměr stran, který si mají zachovat. Opět si pomůžeme trikem pro zachování poměru stran.

```css
.svg-icon
  …
  height: 0;
  padding-bottom: 100%; /* Poměr stran 1:1 */ 
}
```

Tady už není ani žádné speciální nastavení pro Internet Explorer. Hurá! 

Mrkněme se spolu na CodePen. [cdpn.io/e/NbmgPr](http://codepen.io/machal/pen/NbmgPr)

Tím bychom mohli zajištění pružnosti SVG v responzivním layoutu uzavřít pro nejčastěji používané způsoby vložení. 

Formát je ale možné do stránky vkládat i dalšími, méně používanými způsoby. Jak zajistit pružnost při vložení do `<object>`, `<iframe>`? Poradí vám vrchní odbornice na SVG, Sara Soueidan, v článku „Making SVGs Responsive with CSS“. [vrdl.in/yixth](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)

Ale čtěte dál. To nejlepší teprve přijde. Slíbil jsem povídání o *responzivních* SVG. Zatím jsme se ale bavili jen o těch *pružných*. O těch, které se přizpůsobují šířce rozvržení stránky. Kromě pružného layoutu ale responzivitu definují ještě změny stylování v určitých velikostech obrazovky. Prostě [Media Queries](css3-media-queries.md).


## (Opravdu) responzivní SVG

Ano, uvnitř SVG můžeme Media Queries úplně v pohodě použít, A ano, někdy se podmínky nevztahují k rozměrům celé stránky, ale k rodiči SVG dokumentu.

<figure>
<img src="dist/images/original/rwd-svg-logos.jpg" alt="Responsive Logos">
<figcaption markdown="1">    
*Využití Media Queries v responzivních SVG najdete na webu „Responsive Logos“. Podívejte se, stojí to za to. [responsivelogos.co.uk](http://responsivelogos.co.uk/)*
</figcaption> 
</figure>


### K čemu se vztahují Media Queries v SVG?

Podívejme se na jednoduchý příklad, kdy na menších velikostech okna invertujeme barvy loga Vzhůru dolů.

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

Tady se podmínky v `@media` vcelku logicky vztahují k šířce okna prohlížeče. [cdpn.io/e/vyMRPL](http://codepen.io/machal/pen/vyMRPL?editors=1100#0)

Co když ale vložíme SVG soubor obsahující Media Queries externě?

```img
<img src="vd_logo_mq.svg" 
  width="100" height="100" alt="Logo Vzhůru dolů">
```  

Tušíte správně, podmínky v `@media` se pak budou vztahovat k šířce obrázku samotného. [cdnp.io/e/zZKzRe](http://codepen.io/machal/pen/zZKzRe?editors=1100)

Podmínky budou pracovat jako Container Queries, které bychom ve webdesignu potřebovali jako sůl. Ale nemáme je. Zatím tedy jen u externích SVG. Zmíním je ještě [v kapitole o Media Queries](media-queries-tipy.md).

Tak či tak, mechanismus responzivních SVG má velkou budoucnost: pro ikony, grafy, interaktivní elementy, mapy (!) a další prvky s potřebou měnit hustotu informací nebo formy podle velikosti okna prohlížeče.

<div class="ebook-only" markdown="1">
  A teď už pryč od obrázků a hurá do tabulek a grafů. Slibuji, že to nebude taková nuda, jak to zní.
</div>



