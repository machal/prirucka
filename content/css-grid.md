# CSS Grid

Sada vlastností pro tvorbu layoutu vsazeného do pravidelné mřížky.

Jejich síla je v tom, že můžeme mřížku definovat v obou směrech: v řádcích si sloupcích. Na rozdíl od [flexboxu](css3-flexbox.md) je tedy vhodnější pro celostránkové layouty.

Nevýhoda je aktuální podpoře, ale to bude za pár měsíců vyřešeno. V době psaní textu zvládne grid aktuální verze všech relevantních [prohlížečů](prohlizece.md).

## Jednoduchý příklad {#priklad}

Toto demo asi budete znát z mých textů [o flexboxu](css3-flexbox.md). Řekněme, že naše HTML vypadá takto:

```html
<div class="container">
  <div class="content">Content…</div>
  <div class="side-1">Side 1</div>
  <div class="side-2">Side 2</div>  
</div>
```

Obsahový sloupec `content` je na prvním místě, protože jej takto chceme zobrazit na malých obrazovkách.

Méně důležité části `side-1` a `side-2` jsou pak na širších displejích po stranách.

Pojďme to nakódovat. Nejprve příprava na layout do mřížky:

```css
.container {
  display: grid;
}
```

Toto, na rozdíl od `display: flex` automaticky nic nedělá. Nemáme totiž definovánu mřížku:

```css
@media screen and (min-width: 600px) {
  .container {
      grid-template-columns: 1fr 3fr 1fr;
  }
}  
```

Vytvoříme tím layout rozdělený na pět sloupečků mřížky. Přičemž první a poslední části (postranní obsah) zaberou jednu pětinu. Prostřední část (`content`) tři pětiny.

V HTML ovšem máme na první místě `content`, takže ještě musíme sáhnout po změně pořadí. Tu už znáte z flexboxu:

```css
@media screen and (min-width: 600px) {
  .side-1 {
    order: -1;
  }
}
```

Ano, některé vlastnosti, které jste používali z flexboxu můžete používat i v CSS Grid Layout. Kromě pořadí například i zarovnávání.

Zbývá doladit nějaké ty mezery mezi buňkami mřížky: 

```css
.container {
  …
  grid-column-gap: .5em;
}
```


Živé demo: [cdpn.io/e/QaxGqX](https://codepen.io/machal/pen/QaxGqX)

## Důležité vlastnosti {#vlastnosti}

### Nastavení rodiče mřížky {#grid}

`display: grid`. Jak už jsem psal, sám o sobě nic nedělá. Jen nastaví „grid formatting context“, takže jeho přímí potomkové mohou mít specifické vlastnosti.

### Definice mřížky {#mrizka}

Vlastnosti `grid-template-columns` a `grid-template-rows`. Akceptují různé jednotky. Když bychom chtěli nastavit mřížku 3 × 3 buňky s využitím procent, pixelů i pružných jednotek, bude vypadat takto:

```css
.layout {
  grid-template-columns: 25% 1fr 25%;
  grid-template-rows: 100px 1fr 100px;
}
```  

Vytvoří to layout, kde první a poslední sloupec zabírá čtvrtinu šířky rodiče. P rvní a poslední řádek pak `100px` z jeho výšky. Prostřední pak zbytek.

### Definice mezery mezi buňkami mřížky {#mezera}

Vlastnosti `grid-column-gap` a `grid-row-gap` opět přijímají všechny možné jednotky: 

```css
.layout {
  grid-column-gap: 20px;
  grid-row-gap: 1em;
}
```  

### Jednotka `fr` {#fr}

Jde o „zlomkovou“ jednotku. Prostor neobsazený jinými jednotkami (`px`, `em`…) se dělí mezi sloupce layoutu označení těmito jednotkami. Je to v principu totéž jako „bezjednotkové“ míry ve flexboxu – například `flex: 1`. 


## Co je to vlastně mřížka? {#mrizka}

* Mřížka není nic nového. Do pravidelné mřížky se už staletí velká část knížek, dnes i novin a tiskovin obecně. 
* Veteránům lze CSS Grid přiblížit jako tabulkový layout, jen daleko lépe udělaný a zbavený nevýhod.
* Těm, kteří znají Bootstrap a podobné frameworky, to zase lze vysvětlit jako Bootstrap grid vestavěný v prohlížečích.
* Všechno by to ale byla pravda jen částečně. Grid je daleko silnější než uvedené příklady.

## Jak se grid liší od flexboxu? {#flexbox}

* Předně chci zdůraznit, že grid nenahrazuje flexbox. Potřebujete obojí. Naučte se obojí.
* Grid je silnější pro dvourozměrné layouty – po svislé i vodorovné ose. Flexbox se více hodí na jednosměrné.
* Grid budete asi častěji používat pro layout celé stránky, flexbox pro layout menších komponent. Ale není to pravidlo.
* Grid je zaměřený více na „grid in“ layout, kdy se obsah musí vždy přizpůsobit mřížce. Flexbox je super na „content out“ situace, kdy se layout musí přizpůsobit obsahu. Více na [rachelandrew.co.uk](https://rachelandrew.co.uk/archives/2016/03/30/should-i-use-grid-or-flexbox/).
* Grid je také silnější v responzivním designu. Prostě budete potřebovat méně media queries: *„with really powerful functionality like auto layout, minmax(), repeat(), and auto-fill“* - [css-tricks.com](https://css-tricks.com/css-grid-replace-flexbox/)
* Grid rozšiřuje možnosti dané flexboxem. Můžeme v něm dělat i dost neortodoxní layouty. Viz [Rachel Andrew](https://twitter.com/rachelandrew/status/899979364225478656).


## Zásadní plusy a mínusy {#plusy-minusy}

* Hlavní argument je stejný jako u flexboxu - jde o systém vymyšlený pro tvorbu layoutu. Zbavíme se hacků a desítek až stovek řádků zbytečného kódu.
* Podpora zatím není plná: [caniuse.com/grid](http://caniuse.com/#search=grid)
* Nepodporuje jen Opera Mini (asi vás nemusí zajímat) a starší verze moderních prohlížečů.

<blockquote class="twitter-tweet" data-lang="en"><p lang="cs" dir="ltr">Podpora CSS Grid na dvou z projektů, o které se starám. <br>Zajímavost: problematické už v žádném případě nejsou starší Explorery (10-), ale starší verze Chrome a Safari. Zdroj: <a href="https://twitter.com/caniuse?ref_src=twsrc%5Etfw">@caniuse</a> a Google Analytics. <a href="https://t.co/yJ2tXmb5mF">pic.twitter.com/yJ2tXmb5mF</a></p>&mdash; Martin Michálek (@machal) <a href="https://twitter.com/machal/status/956447238770909184?ref_src=twsrc%5Etfw">January 25, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Kde se učit? {#ucit}

Než vše detailně připravím pro Vzhůru dolů a pro další e-booky, odkážu vás na jiné zdroje:

* Moc pěkný český článek od Pavla Satrapy [na Root.cz](https://www.root.cz/clanky/css-grid-revoluce-ve-web-designu/).
* Na hru [CSS Grid Garden](http://cssgridgarden.com/).
* Na web [CSSGrid.io](https://cssgrid.io/).
* Detailní vlastnosti pak studujte na [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) nebo [CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/).

