# Responzivní tabulky

Chuck Norris toho zvládne hodně, třeba i rozbrečí cibuli, ale tabulky na webu by mu daly zabrat. No vážně. Však čtěte.

<!-- AdSnippet -->

Zejména ty rozsáhlejší mají nehezkou vlastnost, že na menších displejích jsou rozměrově poněkud nezkrotitelné. Pojďme si představit všechny způsoby, jak lze s tabulkami v dnešním webdesignu zacházet, a vy si jistě vyberete. Tedy pokud nejste Chuck Norris. Ten si vybral, ještě než jsem začal psát.


## Posun do stran

Nejjednodušší varianta. Prostě tabulce přikážete, ať se roluje do strany, pokud překročí aktuální šířku okna:

```css
.scrollable-table {
  overflow-x: auto;
}
```

Uživatel si pak onen posun obstará palcem. Důležité je, aby byla možnost posunu indikována useknutím obsahu zprava. „Scrollbar“, indikátor možnosti posunu, totiž sám o sobě nestačí. Na mobilech nebývá vidět, dokud uživatel na tabulku nezaútočí prstem.

<figure>
<img src="dist/images/original/tabulky_1.jpg" alt="Posun do stran">
<figcaption markdown="1">    
*Obsah tabulky se na malém displeji posouvá do stran*
</figcaption> 
</figure>

Vyzkoušejte si zmenšit okno v ukázce. [cdpn.io/e/ENMezZ](https://codepen.io/machal/pen/ENMezZ?editors=1100#0)

Řešení se hodí hlavně pro tabulky s menším počtem řádků i sloupců a s popisem dat nahoře. Nebo také pro tabulky vkládané přes redakční systémy, u kterých nevíte, jak složité budou. Anebo když prostě chcete ušetřit čas na vývoj.

<!-- AdSnippet -->

Než si ukážeme propracovanější způsoby práce s responzivními tabulkami, dovolte mi jeden tip na nástroj.


## Chytrý plugin: Tablesaw

Tablesaw je jQuery plugin, který zvládá téměř všechny zde popsané možnosti chování responzivních tabulek. Zkrátka švýcarský tabulkový nůž Chuck Norrise. [github.com/filamentgroup/tablesaw](https://github.com/filamentgroup/tablesaw)


## Posun do stran s fixním sloupcem

Varianta pro tabulky s popisem dat ve svislém směru a klidně i příšerně moc sloupci s daty samotnými. Na malém displeji prstem posunujete do stran jen sloupce s daty. Popis zůstává na místě.

<figure>
<img src="dist/images/original/tabulky_2.jpg" alt="Posun do stran s fixním sloupcem">
<figcaption markdown="1">    
*Tabulka s pevně ukotveným prvním sloupcem na mobilu a možností posouvat gestem „swipe“. [github.com/filamentgroup/tablesaw](https://github.com/filamentgroup/tablesaw)*
</figcaption> 
</figure>

Vyzkoušejte si naživo v CodePenu. [cdpn.io/e/qqvJdV](https://codepen.io/machal/pen/qqvJdV?editors=1100#0)

S propracovanějším řešením využívajícím flexbox a další moderní CSS vlastnosti přišel David Bushell v textu „CSS only Responsive Tables“. [vrdl.in/xlpbn](http://dbushell.com/2016/03/04/css-only-responsive-tables/)

Fixně-posuvné řešení je pak možné doplnit detekcí gesta švihnutí (swipe) pro snadnější a přesnější posouvání sloupečků. 

Řešení má mnoho užití. Podmínkou ale je, aby tabulka měla přijatelně nízký počet řádků.

No jo, ale co když máte tabulku toho typu, kterému programátoři říkají „datagrid“? Ta má, potvora, hodně sloupečků, ale také řádků.

## Stohování

Datagrid není žádná vzácnost. Každá webová aplikace pro interní systémy je datagridů plná. Je to případ i vašeho projektu? Pak bych vám doporučil přestylovat tabulku na mobilech do podoby netabulkového, kartičkového zobrazení. Říkám tomu *stohování*.

<figure>
<img src="dist/images/original/tabulky_3.jpg" alt="Stohování">
<figcaption markdown="1">    
*Stohování tabulky na menších displejích. [github.com/filamentgroup/tablesaw](https://github.com/filamentgroup/tablesaw)*
</figcaption> 
</figure>

V nejjednodušší možné CSS implementaci tabulce na menších displejích zrušíme „tabulkovost“:

```css
@media only screen and (max-width: 600px) {
  table, th, td, tr, thead, tbody {
    display: block;
  }
}
```

Na CodePenu je možné zkusit si to i s dalším stylováním. [cdpn.io/e/bBZmxE](https://codepen.io/machal/pen/bBZmxE?editors=1100#0)

I tak ale čisté CSS řešení nebude dokonalé. Pro tento typ práce s tabulkami budete potřebovat kousek Javascriptu nebo zmíněný plugin.

Stohování se hodí i pro tabulky se složitějším obsahem v buňkách: odstavcový text, formulářové prvky a tak dále.

## Změna směru tabulky

Často se stává, že se pro malé displeje hodí jiný směr zobrazení tabulky než u velkých. Podívejte se na obrázek, hned pochopíte.

<figure>
<img src="dist/images/original/tabulky_4.jpg" alt="Změna směru tabulky">
<figcaption markdown="1">    
*Změna směru tabulky. Vyzkoušejte si to na CodePenu. [cdpn.io/rjmyx](http://s.codepen.io/JasonAGross/full/rjmyx)*
</figcaption> 
</figure>

Nasazení doporučuji u tabulek, které mají velký počet řádků, ale málo sloupců.

Tak. Řekněme, že nejčastější scénáře jsme vyčerpali. Pojďme se ale podívat i na exotičtější situace. 

## Odkaz na plnou tabulku

Na mobilech můžete samozřejmě tabulku hodně zjednodušit a přiložit odkaz na plnou verzi. 

Za fajn nápad také považuji vložit do stránky namísto tabulky jen jakýsi zástupný symbol. Vidíte to na obrázku a zkoumat můžete v přiložené ukázce. [jsbin.com/apane6/14](http://output.jsbin.com/apane6/14)

<figure>
<img src="dist/images/original/tabulky_5.jpg" alt="Odkaz na plnou tabulku">
<figcaption markdown="1">    
*Tabulku na mobilu uprostřed obsahu nahradíme zástupným symbolem. Kliknutím se zobrazí plná verze*
</figcaption> 
</figure>



Kdy se hodí? Pro složité tabulky uprostřed jiného obsahu, kde ostatní scénáře (stohování, fixní sloupec) selhávají.

### Varianta s reprezentací obsahu na mobilech grafem

Z tabulky prostě na mobilu uděláte zjednodušený graf. Doporučuji nasazovat v kombinaci s odkazem na plnou verzi tabulky. Hodí se opět pro situace se strašlivě komplikovanými daty bez výrazné obsahové hierarchie.

## Na mobilech něco vynechat. Ale opravdu?

„Prostě schováme pár sloupečků, a na mobil se to vejde.“ Tahle varianta vypadá, že se sama nabízí. Z technického pohledu budiž. Jenže designér ve mně zvedá obočí i ukazováček, aby vás upozornil na možné nevýhody.

Schovávání obsahu na konkrétních zařízeních je dost nebezpečné. Jak už jsem argumentoval dříve, stejní lidé se na vaše rozhraní dívají z různých zařízení. Proč by určitý obsah měli na jednom zařízení vidět a jiném ne?

<div class="web-only" markdown="1">
Více o tom píšu v kapitole o častých chybách při návrhu responzivních uživatelských rozhraní knížky [„Vzhůru do (responzivního) webdesignu“](/ebook-responzivni), ze které jste právě dočetli ukázku.
</div>

<div class="ebook-only" markdown="1">
Připomenu to znovu [v textu o častých chybách](tipy-responzivni-ui.md) responzivních webů v rámci sedmé kapitoly.
</div>

<!-- AdSnippet -->


