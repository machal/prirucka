# Vlastnost align-items: Zarovnání všech položek na příčné ose

Vlastnost `align-items` na kontejneru layoutu definuje zarovnání položek na příčné ose (jinak též blokové ose).

<div class="connected" markdown="1">

![CSS vlastnost align-items](../dist/images/medium/vdlayout/css-align-items-schema.png)

<div class="web-only" markdown="1">

Vlastnost `align-items` patří do specifikace pro zarovnání boxů – [CSS Box Alignment](css-box-alignment.md).

Vlastnost je možné použít v layoutech tvořených [flexboxem](css-flexbox.md) a také [gridem](css-grid.md).

</div>

<div class="ebook-only" markdown="1">

→ [vrdl.cz/p/css-align-items](https://www.vzhurudolu.cz/prirucka/css-align-items)

</div>

</div>

Nastavuje výchozí hodnotu `align-self` pro všechny položky uvnitř kontejneru.

Tuhle vlastnost není možné aplikovat na blokové elementy nebo na buňky tabulek, ale v gridu a flexboxu ji rozhodně využijete.

## Jednoduchý příklad

V naší ukázce definujeme třísloupcový kontejner gridu:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 10em;  
  align-items: start;  
}
```

Všechny tři položky mají omezenou výšku i šířku, aby byl hezky vidět efekt zarovnání, který způsobuje vlastnost `align-items`.

Použitá hodnota `start` umístí položky na začátek vymezeného prostoru.

CodePen: [cdpn.io/e/qBZRWog?editors=1100](https://codepen.io/machal/pen/qBZRWog?editors=1100)

## Možné hodnoty zarovnání

![Hodnoty vlastnosti align-items](../dist/images/original/vdlayout/css-align-items-hodnoty.png)

Vlastnosti `justify-items` můžete předávat všechny hodnoty z jednotlivých obecných kategorií klíčových slov:

### Základní

- `normal` (výchozí)  
  Ve většině systémů layoutu, včetně gridu nebo flexboxu, bude nastavený jako hodnota `stretch`, kterou popisujeme níže.
- `stretch`  
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

Toto v žádném prohlížeči zatím nefunguje.

<!-- AdSnippet -->

## Podpora v prohlížečích

Stav k říjnu 2021:

- V rámci flexboxového layoutu nefungují ve většině prohlížečů s výjimkou Firefoxu hodnoty `left`, `right`, `safe`, `unsafe`, `start` a `end`. V IE11 navíc nefungují ani dvojslovné pojmenování pro zarovnání na účaří: `first baseline` nebo `last baseline`.
- V rámci rozvržení pomocí gridu tuto vlastnost nepodporuje jen IE11, ale tam by podporu této vlastnosti měl nahrazovat [Autoprefixer](autoprefixer.md). Jinak je to v gridu zcela v pořádku.

I zde platí, že jde o drobnosti. Celkově vzato je možné tuhle vlastnost a její neužitečnější hodnoty bez problémů v moderních prohlížečích používat.

Pro více informací se podívejte na [caniuse.com/align-items](https://caniuse.com/#search=align-items).

<!-- AdSnippet -->
