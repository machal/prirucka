# CSS Grid: Začíná druhé dějství layoutového převratu

[CSS Grid](https://www.w3.org/TR/css-grid-1/) je sada vlastností pro tvorbu layoutu vsazeného do pravidelné mřížky.

Síla Gridu je v tom, že můžeme mřížku definovat v obou směrech: v řádcích i sloupcích. Na rozdíl od [flexboxu](css3-flexbox.md) je tedy vhodnější pro celostránkové a komplexnější layouty.

<!-- AdSnippet -->

Nevýhoda je v aktuální podpoře, ale to bude brzy vyřešeno. V době psaní textu zvládnou Grid aktuální verze všech relevantních [prohlížečů](prohlizece.md). 

Problém je jen v Internet Exploreru 11, který podporuje jen starší verzi Gridu, ale i tam je mřížku díky Autoprefixeru [možné hezky použít](css-grid-msie.md).

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=9M5RGjlAkeY">CSS Grid</a> ~ Úplné základy ve videu.
</p>

## Jednoduchý příklad {#priklad}

Podobné demo asi budete znát z mých textů [o flexboxu](css3-flexbox.md). 

<iframe height='300' scrolling='no' title='CSS Grid Basics demo' src='//codepen.io/machal/embed/QaxGqX/?height=300&theme-id=502&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/machal/pen/QaxGqX/'>CSS Grid Basics demo</a> by Martin Michálek (<a href='https://codepen.io/machal'>@machal</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


Řekněme, že naše HTML vypadá takto:

```html
<div class="container">
  <div class="content">Content…</div>
  <div class="side-1">Side 1</div>
  <div class="side-2">Side 2</div>  
</div>
```

Obsahový sloupec `content` je na prvním místě, protože se v něm schovává to nejcennější na stránce – obsah. Méně důležité části `side-1` a `side-2` jsou pak na širších displejích po stranách.

Pojďme to nakódovat. Nejprve příprava na layout do mřížky:

```css
.container {
  display: grid;
}
```

Toto – na rozdíl od `display: flex` – automaticky nic nedělá. Nedefinovali jsme mřížku, takže smůla. Vzhůru do ní:

```css
@media screen and (min-width: 600px) {
  .container {
      grid-template-columns: 1fr 3fr 1fr;
  }
}  
```

Vytvoříme tím layout rozdělený na pět sloupečků mřížky. Přičemž první a poslední části pro postranní obsah zaberou jednu pětinu. Prostřední část (`content`) tři pětiny.

V HTML ovšem máme na první místě `content`, takže ještě musíme sáhnout po změně pořadí. Tu už znáte z flexboxu:

```css
@media screen and (min-width: 600px) {
  .side-1 {
    order: -1;
  }
}
```

Ano, některé vlastnosti, které používáte z flexboxu můžete používat i v CSS Grid Layout. Kromě pořadí například i zarovnávání.

Zbývá doladit nějaké ty mezery mezi buňkami mřížky. V Gridu pro ty potřeby máme novou vlastnost `grid-gap`: 

```css
.container {
  …
  grid-column-gap: .5em;
}
```

Živé demo: [cdpn.io/e/QaxGqX](https://codepen.io/machal/pen/QaxGqX)


## Důležité vlastnosti Gridu {#vlastnosti}


### Nastavení rodiče mřížky {#grid}

`display: grid`. Jak už jsem psal – sám o sobě nic nedělá. Jen nastaví „grid formatting context“, takže jeho přímí potomkové mohou mít specifické vlastnosti.


### Definice mřížky {#mrizka}

Vlastnosti `grid-template-columns` a `grid-template-rows`. Akceptují různé jednotky. Když bychom chtěli nastavit mřížku 3 × 3 buňky s využitím procent, pixelů i pružných jednotek, bude vypadat takto:

```css
.layout {
  grid-template-columns: 25% 1fr 25%;
  grid-template-rows: 100px 1fr 100px;
}
```

Vytvoří to layout, kde první a poslední sloupec zabírá čtvrtinu šířky rodiče. První a poslední řádek pak `100px` z jeho výšky. Prostřední pak zbytek. Je to vidět v živé ukázce:

<iframe height='300' scrolling='no' title='CSS Grid: Combining units in template-columns/rows' src='//codepen.io/machal/embed/QmqOeY/?height=300&theme-id=502&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/machal/pen/QmqOeY/'>CSS Grid: Combining units in template-columns/rows</a> by Martin Michálek (<a href='https://codepen.io/machal'>@machal</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


### Definice mezery mezi buňkami mřížky {#mezera}

Vlastnosti `grid-column-gap` a `grid-row-gap`. Opět přijímají všechny možné jednotky: 

```css
.layout {
  grid-column-gap: 20px;
  grid-row-gap: 1em;
}
```  

K dispozici je také samozřejmě zkratka `grid-gap`, jejíž použití je vidět ve výšeuvedené ukázce.


### Jednotka `fr` {#fr}

Jde o „zlomkovou“ jednotku. Prostor neobsazený jinými jednotkami (`px`, `em`…) se dělí mezi sloupce layoutu označeními jednotkami `fr`. Je to v principu totéž jako „bezjednotkové“ míry ve flexboxu – například `flex: 1`. 

<!-- AdSnippet -->


## Co je to vlastně mřížka? {#mrizka}

* Nic nového. Do pravidelné mřížky se už staletí sází velká část knížek, dnes i novin a tiskovin obecně.
* Veteránům lze CSS Grid přiblížit jako tabulkový layout, jen daleko lépe udělaný a zbavený nevýhod.
* Těm, kteří znají Bootstrap a podobné frameworky, lze Grid podat jako zdokonalený Bootstrap grid vestavěný v prohlížečích. 
* Všechno by to ale byla pravda jen částečně. Grid je daleko silnější než uvedené příklady.


## Jak se grid liší od flexboxu? {#flexbox}

* Předně chci zdůraznit, že Grid nenahrazuje flexbox. Potřebujete obojí. Naučte se obojí.
* Grid je silnější pro dvourozměrné layouty – po svislé i vodorovné ose. Flexbox se více hodí na rozvržení jednosměrná.
* Grid budete asi častěji používat pro layout celé stránky, flexbox pro layout menších komponent. Ale není to pravidlo.
* Grid je zaměřený více na „grid in“ layout, kdy se obsah musí vždy přizpůsobit mřížce. Flexbox je super na „content out“ situace, kdy se layout musí přizpůsobit obsahu. Více na [rachelandrew.co.uk](https://rachelandrew.co.uk/archives/2016/03/30/should-i-use-grid-or-flexbox/).
* Grid je také silnější v responzivním designu. Budete potřebovat méně [Media Queries](css3-media-queries.md), protože Grid má *„really powerful functionality like auto layout, minmax(), repeat(), and auto-fill“*. Píšou to na [css-tricks.com](https://css-tricks.com/css-grid-replace-flexbox/).
* Grid rozšiřuje možnosti dané flexboxem. Můžeme v něm dělat i dost neortodoxní layouty. Viz opět [Rachel Andrew](https://twitter.com/rachelandrew/status/899979364225478656).


## Zásadní plusy a mínusy {#plusy-minusy}

* Hlavní výhoda: je stejná jako u flexboxu - jde o systém vymyšlený pro tvorbu layoutu. Zbavíme se hacků a desítek až stovek řádků zbytečného CSS i HTML kódu.
* Hlavní nevýhoda: Podpora zatím není plná: Neumí jej hlavně starší verze moderních prohlížečů. IE 11 podporuje starší verzi Gridu, která zdaleka neodpovídá variantě podporované v moderních prohlížečích. [caniuse.com/grid](http://caniuse.com/#search=grid)

<blockquote class="twitter-tweet" data-lang="en"><p lang="cs" dir="ltr">Podpora CSS Grid na dvou z projektů, o které se starám. <br>Zajímavost: problematické už v žádném případě nejsou starší Explorery (10-), ale starší verze Chrome a Safari. Zdroj: <a href="https://twitter.com/caniuse?ref_src=twsrc%5Etfw">@caniuse</a> a Google Analytics. <a href="https://t.co/yJ2tXmb5mF">pic.twitter.com/yJ2tXmb5mF</a></p>&mdash; Martin Michálek (@machal) <a href="https://twitter.com/machal/status/956447238770909184?ref_src=twsrc%5Etfw">January 25, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## Grid v Internet Exploreru 11 {#ie11}

Explorer a starší Edge podporují dnes už neplatnou specifikaci Gridu. Má jinou syntaxi a jde o podmnožinu dnešních možností Gridu. Navíc nepodporuje automatické umísťování prvků do mřížky. A neumí vlastnost `grid-gap`… No mohli bychom pokračovat.

Naštěstí je tady Autoprefixer a dnes už je možné svěřit [řešení Gridu pro IE](css-grid-msie.md) jemu.

<div class="related" markdown="1">
- [CSS Grid v IE: Oblasti a mezery](css-grid-msie.md)
- [CSS Grid v IE: Automatické umístění](css-grid-msie-autoplacement.md)
</div>

Existence „explorerového“ Gridu nám ale v mnoha případech umožní mřížku vcelku bez problémů používat i bez Autoprefixeru. Jen je potřeba se kromě základních vlastností dnešního Gridu naučit i ten starší.

Vezměme příklad třísloupcového layoutu z prvního dema na této stránce:

<iframe height='300' scrolling='no' title='CSS Grid Basics demo (with IE11 support)' src='//codepen.io/machal/embed/XZbrEY/?height=300&theme-id=502&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/machal/pen/XZbrEY/'>CSS Grid Basics demo (with IE11 support)</a> by Martin Michálek (<a href='https://codepen.io/machal'>@machal</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Začneme tím nejjednodušším.

```css
display: -ms-grid
```

Ano, prostě to zapíná Grid. Pak přidáme samotný layout:

```css
.layout {
  -ms-grid-columns: 1fr 3fr 1fr
}
```

Ten v moderních prohlížečích řešíme vlastností `grid-template-columns`.

IE11 nepodporuje automatické umísťování do mřížky, takže to u jednotlivých položek musíme obstarat ručně:

```css
.content {
  -ms-grid-column: 2;
  -ms-grid-column-span: 1;
  margin-right: .5em;
}
```

`content` umísťujeme do druhého sloupečku mřížky (`-ms-grid-column: 2`) a říkáme, že zabere jen jeden sloupeček té mřížky (`-ms-grid-column-span: 1`).

Asi si všimnete vlastnosti `margin-right`. Přesně tak, mezeru mezi sloupečky musíme dělat starými prostředky, protože s vlastností `grid-gap` zde neuspějeme.
  
Živé demo, které je funkční i v IE11: [cdpn.io/e/XZbrEY](https://codepen.io/machal/pen/XZbrEY)

## Kde se učit? {#ucit}

Než vše detailně připravím pro Vzhůru dolů a [e-booky](https://www.vzhurudolu.cz/ebooky), odkážu vás na jiné zdroje:

* Moc pěkný český článek od Pavla Satrapy [na Root.cz](https://www.root.cz/clanky/css-grid-revoluce-ve-web-designu/).
* Hra [CSS Grid Garden](http://cssgridgarden.com/).
* Web [CSSGrid.io](https://cssgrid.io/).
* Detailní vlastnosti pak studujte na [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) nebo [CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/).

Tohle je jen začátek. Grid samozřejmě dále zkoumám, takže nalaďte všechny [kanály Vzhůru dolů](#touch) nebo doražte na [školení Dnešní webová kodéřina](https://www.vzhurudolu.cz/kurzy/webova-koderina), kde se mu – kromě jiného – věnuji.

Běžte se podívat ještě na [3 příklady použití Gridu](css-grid-inspirace.md) i s vysvětlením v kódu.

<!-- AdSnippet -->
