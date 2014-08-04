CSS3 Background Clip – míra roztažení pozadí
============================================

Určuje kde všude se uvnitř elementu vykresluje obrázek na pozadí.

Výchozí hodnota je…

	background-clip: border-box;

…a znamená, že obrázek na pozadí se vykresluje i pod rámečkem elementu.

Další možnosti:

* 	`content-box` — obrázek se vykresluje jen pod obsahovým boxem
* 	`padding-box` — obrázek se vykresluje jen pod obsahovým boxem a paddingem

Pokud není úplně zřejmě jak vypadá padding-box, border-box a content-box, mrkněte se na graf u vlastnosti [box-sizing](css3-box-sizing.md).


Podpora v prohlížečích
----------------------

IE9+. Vlastnost ve většině případů nemá smysl polyfillovat. Nefukčnost `background-clip` vlastnosti ve starších prohlížečích náhlý úhyn uživatele určitě nezpůsobí.
