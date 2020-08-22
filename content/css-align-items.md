# Vlastnost align-items: Zarovnání všech položek na příčné ose

Vlastnost `align-items` na kontejneru layoutu definuje zarovnání položek na příčné ose (jinak též blokové ose) pro layouty v CSS.

Nastavuje výchozí hodnotu `align-self` pro všechny položky uvnitř kontejneru.

<!-- TODO obrázkové schéma: co a kde se zarovnává -->

Tuhle vlastnost není možné aplikovat na blokové elementy nebo na buňky tabulek.

## Jednoduchý příklad

V naší ukázce definujeme třísloupcový kontejner Gridu. Všechny tři položky mají omezenou výšku i šířku, aby byl hezky vidět efekt zarovnání, který způsobuje vlastnost `align-items`.

CodePen: [cdpn.io/e/qBZRWog?editors=1100](https://codepen.io/machal/pen/qBZRWog?editors=1100)

## Možné hodnoty zarovnání

<!-- TODO obrázkové schéma pro  základní hodnoty v Gridu podle CodePenu -->

Vlastnosti `justify-items` můžete předávat všechny hodnoty [z jednotlivých obecných kategorií klíčových slov](css-box-alignment.md#typy-klicova-slova):

### Základní

- `normal` (výchozí)  
  Ve většině systémů layoutu, včetně Gridu nebo flexboxu, bude nastavený jako hodnota `stretch`, kterou popisujeme níže.
- `stretch` (výchozí)  
  Položky rozšíří své rozměry tak, aby v kontejneru nezbylo žádné volné místo. Pokud jsou položky menší než kontejner, jejich velikost se zvětší rovnoměrně (nikoli proporcionálně), přičemž stále respektují omezení uložená vlastnostmi jako `max-width`/`max-height`.

### Poziční

- `center`  
  Centruje všechny položky doprostřed kontejneru zarovnání.
- `start`  
  Zarovnává všechny položky k hraně začátku kontejneru.
- `end`  
  Zarovnává všechny položky k hraně konce kontejneru.
- `flex-start`  
  Hodnota chová jako `start`.
- `flex-end`  
  Hodnota chová jako `end`.

### Podle účaří

- `first baseline`  
  Zarovnání na účaří prvního řádku. Pokud v daném kontextu nelze použít, zarovná se jako `start`.
- `last baseline`  
  Zarovnání na účaří posledního řádku. Pokud v daném kontextu nelze použít, zarovná se jako `end`.
- `baseline`  
  Zkratka pro `first baseline`.

### Pro přetečení

- `safe`  
  Pokud má položka v daném způsobu zarovnání přetéct z obou stran, bude zarovnání změněno tak, aby byl vidět začátek položky, takže aby například bylo možné přečíst začátek textu.
- `unsafe`  
  Vždy dostane přednost poziční zarovnání, bez ohledu na to, zda bude oříznutý obsah čitelný nebo ne.  

Pokud vím, v žádném prohlížeči toto zatím nefunguje.

## Podpora v prohlížečích

Stav k srpnu 2020:

- V rámci flexboxového layoutu nefungují ve většině prohlížečů s výjimkou Firefoxu hodnoty `left`, `right`, `safe`, `unsafe`, `start` a `end`. V IE11 navíc nefungují ani dvojslovné pojmenování pro zarovnání na účaří: `first baseline` nebo `last baseline`.
- V rámci rozvržení pomocí Gridu tuto vlastnost nepodporuje jen IE11, ale tam by podporu této vlastnosti měl nahrazovat Autoprefixer.

Pro více informací se podívejte na [caniuse.com/align-items](https://caniuse.com/#search=align-items).
