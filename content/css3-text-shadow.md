CSS3 Text Shadow: stín textu
============================

Stínování textu.

```css
text-shadow:
    _posun_x_
    _posun_y_
    (_rozostreni_)
    _barva_,
    (_dalsi_stiny_);
```

Podívejte se rovnou na příklad: [cdpn.io/e/aDLCl](https://cdpn.io/e/aDLCl).

`text-shadow` má dvojče — stínování boxu [box-shadow](css3-box-shadow.md). Na stránce o stínování boxu najdete detailnější popis syntaxe. Je velmi podobná.

Tip – stíny textu je možné řetězit a vytvořit až pseudo-3D efekty: [markdotto.com/playground/3d-text](http://markdotto.com/playground/3d-text/)

Podpora v prohlížečích
----------------------

IE10+. Ve starších prohlížečích si můžete vybrat buď tvrdý fallback bez stínu  (preferovaná varianta), nebo s&nbsp;pomocí podmínek Modernizru či IE podmíněných komentářů udělat IE8– variantu s&nbsp;pomocí microsoftího filtru DropShadow. Více hledejte v dokumentaci na webu Microsoftu. [vrdl.in/0ar6x](http://msdn.microsoft.com/en-us/library/ms533086.aspx)
