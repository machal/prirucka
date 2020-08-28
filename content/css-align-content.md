# Vlastnost align-content: Rozdělení prostoru mezi položkami na příčné ose

Vlastnost `align-content` definuje, jak prohlížeč distribuuje prostor mezi položkami obsahu podél příčné (nebo blokové) osy kontejneru layoutu.

<!-- TODO obrázkové schéma: co a kde se zarovnává -->

Ve specifikaci se počítá s použitím pro flexbox, Grid, vícesloupcový layout, ale taky pro blokové prvky.

Tato vlastnost nemá pochopitelně vliv na jednořádkové flexboxové kontejnery (tj. kontejnery s `flex-wrap:nowrap`).

## Jednoduchý příklad

V naší ukázce definujeme třísloupcový kontejner Gridu. Jeho položky jsme ale, my zlí experimentátoři, přinutili, aby držely minimální a maximální šířku – pomocí `minmax(3em, 5em)`.

CodePen: [cdpn.io/e/ZEWKPvr?editors=1100](https://codepen.io/machal/pen/ZEWKPvr?editors=1100)

Deklarace `justify-content:space-between` tedy zajistí rozdělení volného prostoru takovým způsobem… Ale vy víte, co? Raději se podívejte na na všechny možné hodnoty, i tuhle mezi nima najdete.

Můžete si vyzkoušet ještě jedno demo. Je totožné, jen tentokrát pro flexbox.

CodePen: [cdpn.io/e/zYqwbpL?editors=1100](https://codepen.io/machal/pen/zYqwbpL?editors=1100)

## Možné hodnoty zarovnání

<!-- TODO obrázkové schéma pro základní hodnoty v Gridu podle CodePenu -->

Vlastnosti `justify-self` můžete předávat všechny hodnoty [z jednotlivých obecných kategorií klíčových slov](css-box-alignment.md#typy-klicova-slova):

### Základní

- `normal` (výchozí)  
  V CSS Gridu odpovídat hodnotě `start`, ve flexboxu zase `stretch`.

### Zbylý prostor

- `space-between`  
  Volné místo se rovnoměrně rozdělí mezi položky, přičemž první a poslední je zarovnaná s hranou kontejneru.
- `space-around`  
  Volné místo se rovnoměrně rozdělí mezi položky a polovina mezery mezi položkami se vloží mezi hrany kontejneru a první a poslední položku.
- `space-evenly`  
  Volné místo se rovnoměrně rozdělí mezi položky i mezi první a poslední položku a okraje kontejneru. Tato vlastnost není v kombinaci s flexboxem podporována v IE11.
- `stretch`  
  Položky rozšíří své rozměry tak, aby v kontejneru nezbylo žádné volné místo. Pokud jsou položky menší než kontejner, jejich velikost se zvětší rovnoměrně (nikoli proporcionálně), přičemž stále respektují omezení uložená vlastnostmi jako `max-width`/`max-height`. Tato vlastnost není v kombinaci s flexboxem podporována v IE11.  

### Poziční

- `center`  
  Položky se centrují doprostřed kontejneru.
- `start`  
  Položky se zarovnají k hraně začátku kontejneru, nefunguje ve flexboxu.
- `end`  
  Položky se zarovnají k hraně začátku kontejneru, nefunguje ve flexboxu.
- `flex-start`  
  Chová se jako `start`, použitelné hlavně ve flexboxu.
- `flex-end`  
  Chová se jako `end`, použitelné hlavně ve flexboxu.

### Podle účaří

- `first baseline`  
  Zarovnání na účaří prvního řádku. Pokud v daném kontextu nelze použít, zarovná se jako `start`.
- `last baseline`  
  Zarovnání na účaří posledního řádku. Pokud v daném kontextu nelze použít, zarovná se jako `end`.
- `baseline`  
  Zkratka pro `first baseline`.

Tyto hodnoty zatím nemají u této vlastnost dobrou podporu v prohlížečích při použití ve flexboxu. V IE není podporována vůbec.

### Pro přetečení

- `safe`  
  Pokud má položka v daném způsobu zarovnání přetéct z obou stran, bude zarovnání změněno tak, aby byl vidět začátek položky, takže aby například bylo možné přečíst začátek textu.
- `unsafe`  
  Vždy dostane přednost poziční zarovnání, bez ohledu na to, zda bude oříznutý obsah čitelný nebo ne.  

Pokud vím, v žádném prohlížeči toto zatím nefunguje.

## Podpora v prohlížečích

V layoutech postavených na Gridu je u základních hodnot vlastnost plně podporována s výjimkou IE11. U flexboxu situaci popisujeme u jednotlivých vlastností.

Více na [caniuse.com/justify-content](https://caniuse.com/#search=justify-content).
