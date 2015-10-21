CSS3 Background Origin – pozice začátku pozadí
============================================

Určí, kde se v rámci elementu nachází začátek osy pro počítání rozměrů a pozic vlastností jako [`background-size`](css3-background-size.md) nebo `background-position`:

* `content-box` – počítá se jen obsahový box elementu
* `padding-box` (výchozí) – počítá se obsahový box a rozměry vnitřního rámečku (`padding`)
* `border-box` – k výše uvedenému se počítá i šířka vlastnosti `border`

Tip: Rozdíl mezi `content-box`, `padding-box` a `border-box` je schematicky znázorněný u vlastnosti [`box-sizing`](css3-box-sizing.md).

Pozor, `background-origin` prohlížeč ignoruje, pokud u elementu zároveň nastavíte `background-attachment: fixed`.

## Background Clip versus Background Origin

Všem se to plete, zkusme to tedy objasnit:

[Background Clip](css3-background-clip.md) určuje, zda barva nebo obrázek na pozadí bude vidět i pod rámečkem (`border-box`), nebo naopak jen kolem obsahového boxu (`content-box`).

Background Origin sám o sobě nic nedělá, jen definuje plochu, v jaké platí další vlastnosti ([`background-size`](css3-background-size.md) nebo `background-position`).

## IE8

Opět se musíte obejít bez podpory IE8 [caniuse.com/background-origin](http://caniuse.com/background-origin).

Polyfill pro tuto vlastnost neexistuje, stejně tak ani částečná náhrada pomocí vlastnosti `filter`. V IE8 tedy zbývá nefunkčnost vlastnosti ignorovat nebo použít detekci vlastnosti a vymyslet alternativní řešení pro starší prohlížeče.
