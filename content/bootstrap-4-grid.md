# Detailně: layout pomocí Bootstrapu 4

Základní struktura rozvržení je: 

- [kontejner](#container) (třída `.container`)
- [řádka](#row) (třída `.row`)
- [sloupec](#col) (třída `.col`)

```html
<div class="container">
  <div class="row">
    <div class="col"> <!-- Sloupec rozvržení --> </div>
    <div class="col"> <!-- Sloupec rozvržení --> </div>
  </div>
</div>
```

## Kontejner rozvržení {#container}

Kontejner je obal pro váš layout. Bootstrap má dva typy obalů:

- `.container` je kontejner fixní šířky: má stupně omezené maximální šířkou. Jeho maximální šířky jsou 540px na „small“ šířkách okna, 720px („medium“) 960px („large“) a 1140px („extra large“). Ten asi budete využívat častěji.
- `.container-fluid` je pružný, takže se roztahuje do plné šířky okna prohlížeče.

Kontejnerů můžete mít na stránce samozřejmě víc. 

V ukázce je porovnání obou kontejnerů: [cdpn.io/e/RpYqwK](http://codepen.io/machal/pen/RpYqwK?editors=1000).


## Řádka rozvržení {#row}

Řádky jsou vodorovná seskupení sloupců rozvržení. Třídu `.row` nesmíte zapomenout, má totiž dvě funkce:

1. Spuštění layoutu. `.row` je totiž [flex kontejner](css3-flexbox-kontejner.md). 
2. Zarovnávání layoutu. Má totiž nastavený záporný vnější okraj.

V Bootstrapu 3 bylo se často na `.row` zapomínalo, ve čtyřce už bez řádky není možné udělat layout, takže se vám to snad nestane. 

Do ukázky se podívejte, co se stane, když na řádku zapomenete: [cdpn.io/e/VpGVKm](http://codepen.io/machal/pen/VpGVKm?editors=1000).


## Sloupec {#col}

Základní stavební jednotka layoutů. 

### Sloupec bez přípony: `.col` {#col-zakladni}

Nově je v Bootstrapu 4 možné zapsat sloupec jednoduše pomocí prvku s třídou `.col` bez přípony. 

```html
<div class="container">
  <div class="row">
    <div class="col"> <!-- Sloupec rozvržení --> </div>
    <div class="col"> <!-- Sloupec rozvržení --> </div>
  </div>
</div>
```

`.col` má nastaveno `flex-grow: 1`, takže sloupečky budou stejně široké. Viz [vlastnosti flex položky](css3-flexbox-polozky.md). To je prima.

Jen pozor, layout neuvidíte na menších velikostech okna. Flexbox vlastnosti v `.col` jsou nastavené tak, aby zohledňovaly obsah okna. Uvidíte to v ukázce, když si okno zmenšíte pod 260 pixelů: [cdpn.io/e/ZeMmJg](http://codepen.io/machal/pen/ZeMmJg?editors=1000).

### Sloupec zarovnaný do mřížky: `.col-{číslo}` {#col-mrizka}

Bootstrap používá pravidelnou mřížku. Zarovnání do ní je z pohledu uživatele samozřejmě výhodné, proto tyhle třídy použijete velmi často.

Výchozí mřížka je dvanáctisloupcová. K dispozici tedy máte třídy `.col-1` až `.col-12`. 

*TODO obrázek: 12sloupcová mřížka v BS*

```html
<div class="container">
  <div class="row">
    <div class="col-4"> <!-- 1/3 šířky --> </div>
    <div class="col-8"> <!-- 2/3 šířky --> </div>
  </div>
</div>
```

Jistě, že můžete kombinovat mřížku se sloupečky bez přípony:

```html
<div class="container">
  <div class="row">
    <div class="col"> <!-- 1/4 šířky --> </div>  
    <div class="col-6"> <!-- 1/2 šířky --> </div>  
    <div class="col"> <!-- 1/4 šířky --> </div>
  </div>
</div>
```

`.col` třídy se pak díky `flex-grow: 1` dělí rovným dílem o prostor, který zůstává po „mřížkových“ sloupečcích. Opět se tady ale musíte smířit s neposlušností `.col` tříd, které poslouchají pnutí obsahu a ne vždy vám udělají layout tak, jak si ho představujete. Ukázka: [cdpn.io/e/BWOGvq](http://codepen.io/machal/pen/BWOGvq?editors=1000).

[Pokročilým použitím s preprocesorem Sass](https://v4-alpha.getbootstrap.com/layout/grid/#customizing-the-grid) je samozřejmě možné výchozí počet sloupců zmenit. Stačí přenastavit proměnnou `$grid-columns`.


### Sloupec responzivní: `.col-{breakpoint}` {#col-breakpoint}

Abychom mohli udělat různé layouty na různě velkých šířkách okna, nemůžeme žít bez responzivních přípon:

| Body zlomu | Extra small  |  Small  | Medium | Large | Extra large |
| -----------| ------------ |  -----  | ------ | ----- | ----------- |
| Šířka okna | <576px | ≥576px | ≥768px | ≥992px | ≥1200px |
| Třída      | `.col-` | `.col-sm-` |  `.col-md-` |  `.col-lg-` |  `.col-xl-` |

Třídy platí vždy od aktuálně platného bodu zlomu výše. `.col-sm` pak bude například platit od oken šířky 576 pixelů a výše.


```html
<div class="container">
  <div class="row">
  <div class="col-sm-4"> 
    <!-- třetina od „sm“ výše --> 
  </div>  
  <div class="col-sm-8"> 
    <!-- dvě třetiny od „sm“ výše --> 
  </div>
  </div>
</div>
```

Třídy je samozřejmě možné úplně v pohodě kombinovat a dělat různé layouty pro různá rozlišení:

```html
<div class="container">
  <div class="row">
    <div class="col-6 col-sm-4"> 
      <!-- polovina na „xs“, třetina od „sm“ výše --> 
    </div>  
    <div class="col-6 col-sm-8"> 
      <!-- polovina na „xs“, dvě třetiny od „sm“ výše --> 
    </div>
  </div>
</div>
```

Nejlépe to všechno uvidíte v mé další ukázce: [cdpn.io/e/zZJyGN](http://codepen.io/machal/pen/zZJyGN?editors=1000)


### Posuny: `.offset-{breakpoint}` {#offset}

Sloupečky můžete posunovat směrem doleva přidáním vnějšího okraje třídami z rodiny posunů. Tady je třeba sloupec třetinové délky `.col-md-4`, který posouváme o třetinu zleva `offset-md-4`. 

```html
<div class="container">
  <div class="row">
    <div class="col-md-4 offset-md-4"> 
      <!-- posunutý obsah --> 
    </div>  
  </div>
</div>
```

Ve výsledku bude tedy centrovaný. Vidět je to v ukázce: [cdpn.io/e/jBvXmP](http://codepen.io/machal/pen/jBvXmP?editors=1000)

### Push a pull {#push-pull}

Třída `.push-` funguje podobně jako offsety. Prostě v daném bodu zlomu posune prvek o daný počet sloupečků mřížky doprava. `.pull-` dělá pravý opak – posouvá doleva.

Jde to hezky využít pro změnu pořadí prvků:

```html
<div class="container">
  <div class="row">
    <div class="col-md-9 push-md-3"><!-- 1. --></div>  
    <div class="col-md-3 pull-md-9"><!-- 2. --></div>      
  </div>
</div>
```

V příkladu se díky tomu na `md` breakpointu, tedy od šířky okna 768 pixelů, oba sloupce prohodí. `1.` je v kódu první, ale v layoutu bude až na druhém místě.

Ukázka opět pomůže: [cdpn.io/e/xqamPp](http://codepen.io/machal/pen/xqamPp?editors=1000)


<!-- TODO auto nefunguje, staci .col? viz ukazka
### Sloupec se šířkou podle obsahu: `.col-{breakpoint}-auto` {#col-auto}
[cdpn.io/e/MpqZjy](http://codepen.io/machal/pen/MpqZjy?editors=1000)
 -->


<!-- TODO zarovnavani do vsech smeru -->
