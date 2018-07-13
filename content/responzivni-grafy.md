# Responzivní grafy

Responzivní grafy nacházejí využití hlavně v rukou demagogických politiků. Grafy, které používají, se *přizpůsobují* jejich vidění světa.

OK, nebudu vám kazit krásné chvíle s mými texty těmito rádoby vtipnými odbočkami. 

<!-- AdSnippet -->

Budeme se bavit o opravdových grafech v opravdových responzivních stránkách. Zase tak často se nepoužívají, proto to vezmu letem světem.

Pokud s grafy pracujete často, pak to hlavní co byste si měli odnést je: V responzivním rozhraní nestačí grafy přizpůsobit šířkou layoutu stránky. Obvykle je potřeba změnit hustotu dat. Někdy dokonce připravit zcela jiné zobrazení pro malé a jiné pro velké displeje.

Poradím alespoň několik knihoven, které to s responzivními grafy umí.

## Chartist.js

Z mého pohledu nejzajímavější knihovna pro jednodušší grafy. Protože používá formát SVG, umí kromě přizpůsobení velikosti okna také přizpůsobovat obsah grafů. [gionkunz.github.io/chartist-js/](https://gionkunz.github.io/chartist-js/)

<figure>
<img src="dist/images/original/chartist-js.jpg" alt="Chartist.js">
<figcaption markdown="1">    
*Chartist.js se umí menším displejům přizpůsobovat nejen velikostně, ale i hustotou dat a typem  zobrazení*
</figcaption> 
</figure>

## Highcharts

Nějaké responzivní možnosti má i tahle populární grafová knihovna. Spíše se ale jedná o přizpůsobení velikosti než o adekvátní změny v obsahu a hustotě formy či obsahu.  [highcharts.com/demo/responsive](http://www.highcharts.com/demo/responsive)

## Chart.js

Velmi populární knihovna, ale grafy vykresluje do prvku `<canvas>`, takže s responzivitou to bude horší. Canvas totiž není elegantně vektorový jako SVG. Šířkou a výškou se ale grafy přizpůsobovat umí. [chartjs.org](http://www.chartjs.org/)

<div class="ebook-only" markdown="1">
  Tím jsme se dostali k poslednímu textu kapitoly o mediálním obsahu ve stránkách. Pojďme se vrátit k příkladu. ForestKid.cz, vzpomínáte?
</div>

<!-- AdSnippet -->
