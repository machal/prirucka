# Responzivní layout

Pro rozvržení celé stránky nebo jednotlivých komponent máme několik technických možností. Jako výchozí vám doporučím používat flexbox, ale projdeme si je všechny. Používáte rozvržení do mřížky? Za momentík vám povím něco i o něm.

## Flexbox

Flexbox se prohlížeče naučily relativně nedávno, ale buďme za něj rádi, protože jde o první pořádný nástroj pro tvorbu layoutu v CSS. Oproti „float“ a jiným technikám ze staré školy má řadu výhod. 

Sám flexbox používám jako výchozí variantu pro jakékoliv v něm realizovatelné rozvržení stránky nebo její komponenty. Podpora v prohlížečích je téměř plná. 

Vezměme jednoduché dvousloupcové rozvržení stránky:

```html
<div class="layout">
  <div class="col col-main"> … </div>
  <div class="col col-complementary"> … </div>  
</div>  
```

Sloupce bychom chtěli rozděli na ¾ a ¼ šířky. Jednoduchá krása flexboxu je pak vidět v CSS kódu:

```css
.col-main { flex: 3; }  
.col-complementary { flex: 1; }
```

Pomocí [Media Queries](css3-media-queries.md), které už známe, pak layout nastavíme jen pro obrazovky od určité šířky:

```css
@media only screen and (min-width: 40em) {
  .layout {
    display: flex;
  }
}
```

<figure>
<img src="dist/images/original/responzivni-layout.jpg" alt="">
<figcaption markdown="1">    
*Jednoduchý responzivní dvousloupcový layout tři ku jedné realizovaný flexboxem*
</figcaption> 
</figure>


Živá ukázka je pro vás připravená na CodePenu. [cdpn.io/e/wobjoq](http://codepen.io/machal/pen/wobjoq)

Flexbox je plný užitečných vlastností, ale díky tomu relativně složitý. Pro jeho studium doporučuji buď jednodušší online příručku na Vzhůru dolů nebo svůj ebook „Vzhůru do CSS3“, kde jej podrobně vysvětluji i s příklady. [vrdl.cz/prirucka/css3-flexbox](http://www.vzhurudolu.cz/prirucka/css3-flexbox) a [vrdl.cz/ebook](http://www.vzhurudolu.cz/ebook).

## Brzy už i Grid Layout

Flexbox je velmi mocná technologie pro jednosměrný typ layoutu. Pokud ale potřebujeme rozvržení po vodorovné i svislé ose, s flexboxem se pracuje hůř. Pro ty účely připravuje konsorcium W3.org rozvržení do mřížky, Grid Layout. 

V době vydání knihy už jej pravděpodobně některé prohlížeče budou podporovat ve svých veřejných verzích. Na implementaci gridu ale pracují prohlížeče všechny, takže jej během roku 2017 budeme moci začít používat.

Podívejte se na specifikaci nebo web „Grid by Example“ od Rachel Andrew, kterou znáte z Webexpa 2016. [w3.org/TR/css-grid-1/](https://www.w3.org/TR/css-grid-1/) a [gridbyexample.com/examples/](http://gridbyexample.com/examples/).

## Layout pomocí zastarávajících metod: `float`, `position:absolute`, `display:table`, `display:inline-block`…

Nic proti nim. Dlouho nám pomáhaly a tímto jim děkujeme. Je ale dobré vědět, že jde o techniky, které pro tvorbu rozvržení nebyly vymyšleny, takže mají mnoho nevýhod. Když můžete použít flexbox, použijte jej. Pokud flexbox použít nemůžete, inspirujte se návrhovými vzory pro layout na webu „This is Responsive“ od Brada Frosta. [bradfrost.github.io/this-is-responsive/patterns.html](https://bradfrost.github.io/this-is-responsive/patterns.html#layout)

## Vícesloupcový layout pomocí vlastností `column` 

Primárně slouží k zalamování textů do sloupců na širších displejích. Prostě k „novinové“ sazbě. Může se ale hodit na širších obrazovkách pro dodržení optimální šířky řádku, na což si jistě vzpomínáte z kapitoly o základech typografie.

Na webu se to často nepoužívá, ale hodit se může. [vrdl.cz/prirucka/css3-multicolumn](http://www.vzhurudolu.cz/prirucka/css3-multicolumn)

Stručný průlet technickými možnostmi bychom tímto mohli uzavřít. Pojďme si ale ještě doporučit jednu netechnickou, designérskou metodu.

## Tip: používejte mřížku

Mřížka rozděluje plochu stránky do sloupečků a jednotlivé komponenty rozhraní jsou pak do nich zarovnány.

Je to skvělé, protože výrazně zrychluje práci kodéra. Opět je to věc, kterou se webařina naučila z tisku. Všechny rozumné noviny a knihy jsou do nějaké mřížky vysázeny. Layout do mřížky díky své pravidelnosti usnadňuje pochopení uživatelům. 

<figure>
<img src="dist/images/original/bootstrap-mrizka.jpg" alt="">
<figcaption markdown="1">    
*Layout do mřížky v Bootstrapu*
</figcaption> 
</figure>


*Rozvržení do mřížky zpopularizoval Boostrap. [getbootstrap.com](http://getbootstrap.com/)*

Kromě toho je práce s pravidelnou mřížkou pro vývojáře efektivnější, protože stačí pracovat s HTML. V Bootstrapu 3 například rozdělení stránky na dvě poloviny zařídíme takto:


```html
<div class="row">
  <div class="col-md-6"> … </div>
  <div class="col-md-6"> … </div>  
</div>
```

Značka `md` značí, že se layout použije na „medium“ a větších zařízeních, tedy v rozlišení od 992 pixelů. [getbootstrap.com/css](http://getbootstrap.com/css/#grid)  



