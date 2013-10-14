CSS3 Flexbox
============
    
Flexbox je úplně nový layoutovací modul.

Aktuální implementace flexboxu mají pár „ale…”. Celkově vzato je ovšem [CSS Flexible Box Layout Module](http://www.w3.org/TR/css3-flexbox/) úžasný posun vpřed ve tvorbě webových layoutů.

Skeptik by zamručel, že se CSSko konečně naučilo to, co jsme uměli pomocí [tabulkového layoutu](http://www.jakpsatweb.cz/tabulky-design.html) v roce 2001. 

A měl by pravdu, ovšem jen z malé části. Tabulkový layout nahrazuje jen jedna část flexboxu. Ten nám může být užitečný minimálně ve třech situacích:

1. Potřebujeme **několik stejně dlouhých sloupců**. Jeden z nich má na pozadí barvu a potřebujeme, aby barva byla vidět zezhora až dolů. To je to, co tabulkový layout uměl a floaty neumí.
2. Sloupce našeho layoutu chceme pravidelně rozdělit po celé šířce, ale **nechce se nám počítat s procenty**.
3. Na menších rozlišeních chceme **změnit pořadí sloupců** (nebo řádků) — bomba pro responzivní webdesign.

Těch scénářů je samozřejmě daleko více. Podívejte se na hezkou stránku [Solved by Flexbox](http://philipwalton.github.io/solved-by-flexbox/).


Příklad a technikálie
---------------------
  
<p data-height="158" data-theme-id="502" data-slug-hash="LhGuD" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/LhGuD'>CSS3 Flexbox příklad</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>

Na příkladu vidíte, že sloupce jsou pořád stejně vysoké. Stačí z rodiče udělat flexbox pomocí `display: flex`.

Pak taky vidíte, že prvním a poslednímu sloupci stačilo nastavit `flex-grow: 1` a poslednímu `flex-grow: 3` a podle těchto proporcí si rozdělily šířku rodiče.

No a nakonec si zkuste zmenšit okno tak, aby příklad neměl k dispozici více než 640 pixelů šířky. Pomocí [Media Queries](css3-media-queries.md) a nastavením vlastnosti `order: -1` přesunujeme druhý sloupec na první místo.   


Zajímavé odkazy
---------------

- [A Complete Guide to Flexbox, CSSTricks.com](http://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexy Boxes, generátor a flexbox pískoviště](http://the-echoplex.net/flexyboxes/)


Podpora v prohlížečích
----------------------

Není špatná. Hlavní příčinou, proč se ve flexboxu není úplně snadné zorientovat je **existence tří různých syntaxí**:

* Syntaxe 2009 – kdekoliv uvidíte `display: box`. Myslím, že ji naštěstí žádná rozšířená verze prohlížeče už nepodporuje.
* Syntaxe 2011 – `display: flexbox`. Podporují starší verze moderních prohlížečů a bohužel i IE10 a Android Browser.
* Syntaxe 2012 – `display: flex`. V posledních verzích podporují všechny moderní prohlížeče, včetně IE11.

Zajímá nás tedy syntaxe 2011 a 2012 a není důvod se s ní nepoprat například [pomocí CSS preprocesorů](http://css-tricks.com/using-flexbox/).

Jak s IE9- a dalšími staršími prohlížeči? Detekovat nepodporu flexboxu pomocí Modernizru a `.no-flexbox { … }` a alternativně nabídnout jinou verzi layoutu (`display: table`, floaty …).




