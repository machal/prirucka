# CSS Grid

Sada vlastností pro tvorbu layoutu vsazeného do pravidelné mřížky.

Síla je v tom, že můžeme mřížku definovat v obou směrech: v řádcích si sloupcích.

Nevýhoda je aktuální podpoře, ale to bude za chvíli vyřešeno. V době psaní textu umí grid aktuální verze všech relevantních prohlížečů.

## Jednoduchý příklad

Příklad asi budete znát z mách textů [o flexboxu](css3-flexbox.md). Řekněme, že naše HTML vypadá takto:

```html
<div class="container">
  <div class="content">Content…</div>
  <div class="side-1">Side 1</div>
  <div class="side-2">Side 2</div>  
</div>
```

Obsahový sloupec `content` je na prvním místě, protože jej takto chceme zobrazit na malých obrazovkách.

*TODO obrázek layoutu.*

Méně důležité části `side-1` a `side-2` jsou pak na širších displejích po stranách.

Pojďme to nakódovat. Nejprve příprava na layout do mřížky:

```css
.container {
  display: grid;
}
```

Toto, na rozdíl od `display: flex` automaticky nic nedělá. Nemáme totiž definovánu mřížku. To je to důležité:

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

A ještě k jednotce `fr`: Jde o „zlomkovou“ jednotku. Prostor neobsazený jinými jednotkami (`px`, `em`…) se dělí mezi sloupce layoutu označení těmito jednotkami. Je to v principu totéž jako „bezjednotkové“ míry ve flexboxu – například `flex: 1`. 

Zbývá doladit nějaké ty vnější okraje, `margin`, a máme layout hotový. Živé demo: [cdpn.io/e/QaxGqX](https://codepen.io/machal/pen/QaxGqX)


## Více

* Mřížka není nic nového. Do pravidelné mřížky se už staletí velká část knížek, dnes i novin a tiskovin obecně. 
* Veteránům lze CSS Grid přiblížit jako tabulkový layout, jen daleko lépe udělaný a zbavený nevýhod.
* Těm, kteří znají Bootstrap a podobné frameworky, to zase lze vysvětlit jako Bootstrap grid vestavěný v prohlížečích.
* Všechno by to ale byla pravda jen částečně.

## Jak se to liší od Flexboxu?

* TODO obrázek
* Předně chci zdůraznit, že grid nenahrazuje flexbox. Potřebujete obojí. Naučte se obojí.
* Grid je silnější pro dvou rozměrné layouty – po svislé i vodorovhé ose. Flexbox se více hodí na jednosměrné.
* Grid budete asi častěji používat pro layout celé stránky, flexbox pro layout menších komponent. Ale není to pravidlo.
* Grid je zaměřený více na „grid in“ layout, kdy se obsah musí vždy přizpůsobit mřížce. Flexbox je super na „content out“ situace, kdy se layout musí přizpůsobit obsahu. https://rachelandrew.co.uk/archives/2016/03/30/should-i-use-grid-or-flexbox/
* Grid je také silnější v responzivním designu. Prostě budete potřebovat méně media queries. 
    * "with really powerful functionality like auto layout, minmax(), repeat(), and auto-fill" - css-tricks.com
* Grid rozšiřuje možnosti dané flexboxem. Můžeme v něm dělat i dost neortodoxní layouty. 
* https://twitter.com/rachelandrew/status/899979364225478656
* TODO: srovnání příkladu s flexboxovým

## Zásadní plusy a mínusy

* Hlavní argument je stejný jako u flexboxu - jde o systém vymyšlený pro tvorbu layoutu. Zbavíme se hacků a desítek až stovek řádků zbytečného kódu.
* Podpora není plná https://caniuse.com/#search=grid
    * Nepodporuje jen Opera Mini (asi vás nemusí zajímat) a starší verze prohlížečů.
    * TODO procenta pro VD a Rekreu.

## Kde se učit?

* https://www.root.cz/clanky/css-grid-revoluce-ve-web-designu/
* http://cssgridgarden.com/
* http://learncssgrid.com/
* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
* https://www.smashingmagazine.com/2016/11/css-grids-flexbox-box-alignment-new-layout-standard/
* css tricks shrnutí
* https://cssgrid.io/
* knížka od rachel
* kurz od rachel
* počkat si na knížku ;)
