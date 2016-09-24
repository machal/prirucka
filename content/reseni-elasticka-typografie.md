# CSS řešení: Elastická typografie počítaná v procentech z výšky komponenty

Pojďme si rozebrat jedno z řešení, které jsem ukazoval v přednášce [na WebExpo 2016](http://www.vzhurudolu.cz/prednaska/webexpo-2016-246).

Typografické hlavičky se na webu dělají docela často. Jenže když chcete, aby na různě velkých displejích vypadaly hezky, musíte pro jednotlivé breakpointy dělat ruční zásahy: 

![Responzivní typografie](dist/images/original/elasticka-typografie-1.jpg)

Shodou okolností jem před čtyřmi lety na WebExpu mluvil [o téměř vektorovém webu](http://webexpo.cz/praha2012/prednaska/pozor-front-end-stavba/). Tam jsem se u některých komponent snažil dosáhnout pružnosti, kterou známe z PDF.  Dnes už je naštěstí většina popisovaných technik použitelná.

## Téměř elastická typografie pomocí `vw`

Nejčastěji se pro elastickou typografii používá nových [jednotek viewportu](css3-jednotky.md#jednotky-viewportu-vw-vh-vmin-vmax) `vw`, `vh`, `vmin` a `vmax`. Nejzajímavější je „volkswagen“ – `vw`. 

```css
.box__heading { 
  font-size: 7vw; /* 7 % šířky okna */
}
```

![Téměř elastická typografie pomocí vw](dist/images/original/elasticka-typografie-2.jpg)

Jenže nastavení typografie a tedy svislého rozměru v procentech ze šířky okna, tedy vodorovného rozměru, samo o sobě nestačí. Nezohledňuje totiž vnitřní ani vnější okraje. Text se tedy v určitých velikostech okna zalomí. Podívejte se na demo: [cdpn.io/e/bZzmGg](http://codepen.io/machal/pen/bZzmGg?editors=1100#0).

## Elastická typografie v procentech z výšky komponenty

Způsobů jak elastickou typografii vytvořit [je více](https://www.smashingmagazine.com/2016/05/fluid-typography/). Já jsem nedávno přemýšlel nad variantou nastavení svislých rozměrů v procentech z výšky okna: 

```css
.box__heading { 
  font-size: 10% boxheight;
  padding-bottom: 8% boxheight;
}
```

Jenže nic jako `10% boxheight` v CSS nemáme, že? Můžeme to ale spočítat, pokud známe alespoň poměr stran komponenty. Ten je v našem případě 16:9. Výška tedy je:

```
((šířka okna) - (vodorovný padding)) / 16 * 9)
```

Jedno procento výšky okna tedy je:

```
((šířka okna) - (vodorovný padding)) / 16 * 9 / 100)
```

V CSS využijeme [funkci calc()](css3-calc.md) a zápis pak vypadá takto:

```css
calc( (100vw - 2em) / 16 * 9 / 100 )
```

![Elastická typografie - výpočet](dist/images/original/elasticka-typografie-3.jpg)

V původní deklaraci pak bude zápis takovýto: 

```css
.box__heading { 
  font-size: calc( 10 * ( (100vw - 2em) / 100 / 16 * 9 ) );
}
```

V preprocesoru bychom to pak moli napsat elegantněji:

```scss
$boxHeightPercent: "( (100vw - 2em) / 100 / 16 * 9 )";

.box__heading { 
  font-size: calc( 10 * #{$boxHeightPercent} );
  padding-bottom: calc( 8 * #{$boxHeightPercent} );
}
```

Hotovo. Tohle řešení funguje ve všech prohlížečích, které podporují jednotky `vw` – tedy všech moderních. 

Je dobré ještě pomyslet na náhradní řešení v IE verze 9 a starších:


```scss
.box__heading { 
  font-size: 2em;
  font-size: calc( 10 * #{$boxHeightPercent} );
}
```

Výsledek pak v různých rozlišeních vypadá takto:

![Elastická typografie v různých prohlížečích](dist/images/original/elasticka-typografie-4.jpg)

Živé demo i s fallbackem je tady: [cdpn.io/e/bZzmGg](http://codepen.io/machal/pen/bZzmGg?editors=1100#0).

