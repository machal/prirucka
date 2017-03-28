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






