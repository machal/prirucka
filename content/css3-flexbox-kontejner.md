#   Vlastnosti flex kontejneru

##   Blokový nebo řádkový?

Kromě `display: flex` můžete kontejner definovat jako řádkový – `display: inline-flex`. V obou případech se ze všech přímých potomků stávají položky flexboxu.

##   `flex-direction` – směr vyskládání položek

Nastaví směr hlavní osy flexboxu.

```css
flex-direction: row | row-reverse | column | column-reverse
```

![vlastnost flex-direction](../dist/images/original/flexbox-flex-direction.jpg)

Výchozí (`row`) hodnota vyskládá flex položky do řádky. Pokud chcete dělat layout do vertikálního směru, použijte hodnotu `column`.

Pořadí položek se v těchto případech bere z pořadí v kódu. Pokud chcete pořadí otočit, prostě zvolte hodnoty `row-reverse` nebo `column-reverse`. To má vliv jen na vizuální vykreslení, nikoliv např. na pořadí vykreslování nebo procházení při navigaci klávesou `Tab`. Pozorní si asi všimli, že vlastnost lze použít i pro změnu řazení seznamů.

##   `flex-wrap` – zalamování položek

```css
flex-wrap: nowrap | wrap | wrap-reverse
```

![vlastnost flex-wrap](../dist/images/original/flexbox-flex-direction.jpg)

Výchozí `nowrap` říká, že elementy budou vždy na hlavní ose vedle sebe (nebo pod sebou v případě, že použijete `flex-direction: column`).

Alternativně `wrap`. Pak se flex položky zalomí na další řádku ve chvíli, kdy se jejich obsah zvětší natolik, že se nevejdou do jedné. Poslední flex položka na prvním řádku skočí dolů a zařadí se pod první položku.

`wrap-reverse` zalamuje naopak. Poslední položka řádku skočí nahoru a zařadí se nad první položku.

##   `flex-flow`, zkratka pro flex-direction a flex-wrap

Nejlépe si to ukážeme na příkladech:

* `flex-flow: row` – výchozí hodnota. Položky se vyskládají do řádku a nezalomí se.
* `flex-flow: column wrap` – položky se vyskládají do sloupce a zalamují se.

To je z vlastností flex kontejneru vše. Pojďme na položky, tam je toho více.
