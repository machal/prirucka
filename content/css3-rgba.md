CSS3 RGBa: barva s poloprůhledností
===================================

RGB barva se čtvrtým číslem, jež alfa kanálem říká informaci o hodnotě průhlednosti.

```css
rgba(_red_, _green_, _blue_, _pruhlednost_);
```

Poloprůhledné RGBa barvy můžete samozřejmě aplikovat všude, kde se v&nbsp;CSS barvy používají. Zdůrazním hlavně rámečky, [stíny](css3-box-shadow.md) nebo [gradienty](css3-gradients.md).

Porovnání s `opacity`
---------------------

`opacity: 0.5` zajistí poloprůhlednost celého elementu, ale i jeho dceřiných objektů.

RGBa je barva aplikovatelná na cokoliv bez vlivu na zbytek elementu. Třeba jen na barvu pozadí `background: rgba(20%, 100%, 20%, .5)`.

V prohlížeči vyťukejte [cdpn.io/e/HrBsD](https://cdpn.io/e/HrBsD).


Podpora v prohlížečích
----------------------

RGBa mají rády všechny prohlížeče kromě osmičky a starších MSIE. Elegantně si se stařečky poradíte definovaným fallbackem:

```css
color: rgb(128, 0, 0);
color: rgba(255, 0, 0, 0.5);
```

V moderních browserech se zobrazí červená s padesátiprocentní průhledností. V IE8– pak tmavý odstín červené. Fallback barvu musíme určit s ohledem na barvu pozadí. Tady počítáme s černou.

Alternativně použijte [CSS3Pie.com](http://css3pie.com/documentation/supported-css3-features/).
