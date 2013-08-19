CSS3 Background Clip
====================

Určuje kde všude se uvnitř elementu vykresluje obrázek na pozadí.

Výchozí hodnota je:

	background-clip: border-box;
	
A znamená, že obrázek na pozadí se vykresluje i pod rámečkem elementu.

Další možnosti:

* 	`content-box` — obrázek se vykresluje jen pod obsahovým boxem
* 	`padding-box` — obrázek se vykresluje jen pod obsahovým boxem a paddingem

Pokud není úplně zřejmě jak vypadá padding-box, border-box a content-box, mrkněte se na vlastnost [`box-sizing`](/css3-box-sizing)


Podpora v prohlížečích
----------------------

IE9+. Vlastnost určitě nemá smysl polyfillovat. Nefukčnost téhle vlastnosti ve starších prohlížečích úhyn uživatele určitě nezpůsobí.