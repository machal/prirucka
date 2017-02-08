# Plně responzivní typografie

Zvětšovat stránku i jednotlivé komponenty už umíme díky předchozí podkapitole a díky jednotkám `em` a `rem`. Zvládáme to tedy autorsky a *skokově*.

Co když bychom ale typografii a komponenty chtěli zvětšovat *plynule*? Prostě elasticky se zvětšováním nebo změnšováním okna.

K tomu si ke stolu pozveme dříve už také zmíněné jednotky viewportu, hlavně `vw` (setina šířky viewportu) a `vh` (setina výšky viewportu).

Elastická, nebo také plně responzivní typografie je v době psaní textu spíše v počátcích bádání. Nevyřeší zdaleka všechny situace, pro které byste je možná chtěli nadšeně použít. Ale možnost to je a já vám ji nezamlčím, ani kdyby mě natahovali na elastický skřipec. 

## Elastická typografie pomocí `vw`

Představte si, že nadpis článku prostě chcete zvětšovat a zmenšovat podle šířky okna. To je jednoduché:

```css
.heading { 
  font-size: 7vw;
  padding-bottom: 3vw;
}
```

Velikost písma bude na sedmi procentech šířky viewportu, spodní vnitřní okraj pak zabere procenta tři. Zmenšíme okno, vše se zmenší. Zvětšíme ho, vše se zvětší. Jupí! [cdpn.io/e/mAAOLa](http://codepen.io/machal/pen/mAAOLa)

Kód je jednoduchý, funguje ve všech moderních prohlížečích a náhradní řešení pro ty starší bude jednoduché. Tak proč jsem tedy bručel o nějakých nevýhodách? Nerad kazím oslavu, ale pojďme si představit dvě situace:

1. Jednotka `vw` nezná váš layout a tak se text na některých viewportech zalomí jinak než na jiných. To vám může vadit.
2. Kromě elastičnosti můžete chtít nastavit minimalní a maximalní velikost písma.

První problém dokážu vyřešit hned v následující ukázce. Pro řešení toho druhého se obraťte na kolegy ze Smashing Magazine, konkrétně do jejich článku „Truly Fluid Typography With vh And vw Units“. [vrdl.in/4g9xs](https://www.smashingmagazine.com/2016/05/fluid-typography/)

Musíte se ale smířit s jednou věcí. Takhle jednoduchý kód už neuvidíte.

## Zamezení zalamování elastické typografie pomocí `calc()`

Moje řešení v zásadě nahrazuje jednotku, která v CSS neexistuje, ale pevně doufám, že jednou existovat bude. Setina výšky rodičovského elementu.

Jakmile se totiž odkážeme na rozměry rodiče, při výpočtu velikosti elementu se vezme v potaz layout konkrétní komponenty a text se nám na žádném viewportu nezalomí jinak než bychom chtěli. 

Pokud si onu výšku rodiče představíte jako Sass proměnnou `$boxHeightPercent`, kód by vypadal takto: 

```css
.box-heading { 
  font-size: calc( 7 * #{$boxHeightPercent} );
  padding-bottom: calc( 3 * #{$boxHeightPercent} );
}
```

Počítáme teď sedm (respektive tři) procenta z výšky rodiče, nikoliv šířky stránky.

A jak jsme vypočetli tu výšku?

```
$boxHeightPercent: 
  "( (100vw - 2em) / 100 / 16 * 9 )";  
```  

Prostě ze šířky odečteme postranní okraje a pak ji vydělíme poměrem stran elementu.

Podrobněji to rozepisuji na Vzhůru dolů v článku „CSS řešení: Elastická typografie počítaná v procentech z výšky komponenty“. [vrdl.cz/prirucka/reseni-elasticka-typografie](http://www.vzhurudolu.cz/prirucka/reseni-elasticka-typografie)

A tady je hotová ukázka na CodePenu. [cdpn.io/e/bZzmGg](http://codepen.io/machal/pen/bZzmGg?editors=1100#0)
