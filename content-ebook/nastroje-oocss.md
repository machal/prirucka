# Udržitelný kód pomocí OOCSS

OOCSS je zkratka pro „Object Oriented CSS”. Je to koncept organizace kódu od Nicole Sullivan.

CSS objekt je opakující se vizuální komponenta, která může být abstrahována kouskem HTML a CSS, případně JS. Je znovupoužitelná na jiném místě projektu. Ideálně pak i na dalších projektech.

Cílem OOCSS je zajistit znovupoužitelnost kódu, zlepšit jeho spravovatelnost a také zmenšit objem CSS souboru.

Ukažme si nejprve zjednodušený kód komponenty s tlačítkem:

```bash
/* Komponenta */
.button { … }

/* Elementy komponenty */
.button-icon { … }

/* Modifikátory komponenty */
.button-primary { … }
.button-login { … }
```

V mém pojetí má OOCSS pět principů:

## 1) Nezávislost vzhledu na struktuře

Do CSS selektorů nikdy nedáváme HTML tagy. Mohou se změnit. Proto `.button` raději než `input.button`.

## 2) Nezávislost obsahu na kontejneru

Do CSS selektorů nikdy nepromítáme strukturu HTML. Může se změnit. Proto `.button.button-login` raději než `.login-form .button`.

## 3) Vývoj zaměřený na komponenty, znovupoužitelnost

Komponenty (neboli objekty) nezávislé na struktuře HTML lze snadno používat i na jiných projektech.

Komponenty pak tvoří uzavřený celek, který v preprocesorech importujeme.

```bash
@import "button";
```

Zpřehledňují nám nejen kód samotný, ale i commity do repozitáře.

## 4) Objekt, element, modifikátor

Tři typy prvků:

- objekt – jinak též komponenta nebo blok (`.button`)
- element – prvek uvnitř objektu, jinak též podobjekt (`.button-icon` pro ikonu uvnitř tlačítka)
- modifikátor – vlastnost objektu (`.button-primary` pro hlavní call-to-action tlačítko)

U větších projektů může být výhodné tyto tři typy prvků odlišit vizuálně. Podívejte se na metodiku BEM: [vrdl.cz/prirucka/bem](http://www.vzhurudolu.cz/prirucka/bem).

## 5) Co nejnižší specifičnost

V CSS nikdy nepoužíváme selektory identifikátorů (`#id`) a klauzuli `!important` si necháváme jen pro debugovací účely.

Kvůli zachování nízké specifičnosti se také snažíme co nejméně používat:

- selektorů potomka (v CSS nepíšu `.button .button-icon`, jen `.button-icon`)
- kombinovaných selektorů (v CSS nepíšu `.button.button-primary`, jen `.button-primary`)

Více o specifičnosti v CSS: [specificity.keegan.st](http://specificity.keegan.st/).

