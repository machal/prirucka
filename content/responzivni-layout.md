# Responzivní layout

Pro rozvržení celé stránky nebo jednotlivých komponent máme několik technických možností. Jako výchozí vám doporučím používat flexbox, ale projdeme si je všechny. A zeptám se: používáte rozvržení do mřížky?

## Flexbox

Flexbox byl uveden relativně nedávno, ale buďme za něj rádi, protože jde o první pořádný nástroj pro tvorbu layoutu v CSS. Oproti „float“ a jiným technikám ze staré školy má řadu výhod. Podpora v prohlížečích je prakticky plná. 

Osobně flexbox používám jako výchozí variantu pro jakékoliv v něm realizovatelné rozvržení stránky nebo její komponenty.

Vezměme jednoduché dvousloupcové rozvržení stránky:

```html
<div class="layout">
  <p class="col col-main"> … </p>
  <p class="col col-complementary"> … </p>  
</div>  
```

Sloupce bychom chtěli rozděli na ¾ a ¼ šířky. Jednoduchá krása flexboxu je pak vidět v CSS kódu:

```css
.col-main { flex: 3; }  
.col-complementary { flex: 1; }
```

Pomocí Media Queries, které už známe, pak layout nastavíme jen pro obrazovky od určité šířky:

```css
@media only screen and (min-width: 40em) {
  .layout {
    display: flex;
  }
}
```

![](dist/images/original/responzivni-layout.png)

*Obrázek: Jednoduchý responzivní dvousloupcový layout tři ku jedné realizovaný flexboxem.*

Živá ukázka je pro vás připravená na Codepenu. [cdpn.io/e/wobjoq](http://codepen.io/machal/pen/wobjoq)

Flexbox je relativně složitý a tak pro jeho studium doporučuji buď jednodušší online příručku na Vzhůru dolů nebo svůj ebook „Vzhůru do CSS3“, kde je flexbox podrobně vysvětlen i s příklady. [vrdl.cz/prirucka/css3-flexbox](http://www.vzhurudolu.cz/prirucka/css3-flexbox) a [vrdl.cz/ebook](http://www.vzhurudolu.cz/ebook).

## Grid Layout

Flexbox je velmi mocná technologie pro jednosměrný typ layoutu. Pokud ale potřebujeme rozvržení po vodorovné i svislé ose, s flexboxem se pracuje špatně. Pro ty účely konsorcium W3.org připravuje rozvržení do mřížky, Grid Layout. 

V době vydání knihy už jej pravděpodobně některé prohlížeče budou podporovat ve svých veřejných verzích. Na implementaci gridu ale pracují prohlížeče všechny, takže jej během roku 2017 budeme moci začít používat.

Podívejte se na specifikaci nebo web „Grid by Example“ od Rachel Andrew, kterou znáte z Webexpa 2016. [w3.org/TR/css-grid-1/](https://www.w3.org/TR/css-grid-1/) a [gridbyexample.com/examples/](http://gridbyexample.com/examples/).

## Layout pomocí zastarávajících metod: float, position:absolute, display: table, display: inline-block…

Nic proti nim. Dlouho nám pomáhaly a tímto jim děkujeme. Je ale dobré vědět, že jde o techniky, které pro tvorbu layoutů nebyly vymyšleny, takže mají mnoho nevýhod. Když můžete použít flexbox, použijte jej. Pokud flexbox použít nemůžete, inspirujte se návrhovými vzory pro layout na webu „This is Responsive“ od Brada Frosta. [bradfrost.github.io/this-is-responsive/patterns.html](https://bradfrost.github.io/this-is-responsive/patterns.html#layout)

## Vícesloupcový layout

Primárně slouží k zalamování textů do sloupců na širších displejích. Prostě k novinové sazbě. Může se hodit na širších obrazovkách pro dodržení optimální šířky řádku, na což si jistě vzpomínáte z kapitoly o základech typografie.

Na webu se to často nepoužívá, ale hodit se může. [vrdl.cz/prirucka/css3-multicolumn](http://www.vzhurudolu.cz/prirucka/css3-multicolumn)

Stručný průlet technickými možnostmi bychom tímto mohli uzavřít. Pojďme si ale ještě doporučit jednu netechnickou, designérskou metodu.

## Tip: používejte mřížku

Mřížka rozděluje plochu stránky do sloupečků a jednotlivé komponenty rozhraní jsou pak do nich zarovnány.

Je to skvělé, protože výrazně zrychluje práci kodéra. Opět je to věc, kterou se webařina naučila z tisku. Všechny rozumné noviny a knihy jsou do nějaké mřížky vysázeny. Layout do mřížky díky své pravidelnosti zrychluje vstřebání stránky uživateli. 

![](dist/images/original/bootstrap-mrizka.png)

*Obrázek: Rozvržení do mřížky zpopularizoval Boostrap. Zdroj: **[getbootstrap.co*m](http://getbootstrap.com/)
