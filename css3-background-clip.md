CSS3 Background Clip – míra roztažení pozadí
============================================

Určuje kde všude se uvnitř elementu vykresluje obrázek nebo barva na pozadí.

Výchozí hodnota je:

	background-clip: border-box;

A znamená, že pozadí se vykreslí i pod rámečkem elementu.

Další možnosti míry roztažení pozadí:

`padding-box` — jen pod obsahovým boxem a paddingem

`content-box` — jen pod obsahovým boxem

Pokud není úplně zřejmé jaký je rozdíl mezi `border-`, `padding-` a `content-box`, mrkněte se na schéma u vlastnosti [box-sizing](css3-box-sizing.md).

Příklad k vyzkoušení – [codepen.io/machal/pen/yamFI](http://codepen.io/machal/pen/yamFI)


Podpora v prohlížečích
----------------------

IE9+. Polyfilly pro IE8 snad ani neexistují a není se čemu divit. Těžko hledat příklad kdy by byly nezbytné.