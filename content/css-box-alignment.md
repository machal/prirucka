# Zarovnání boxů v CSS (Box Alignment Module)

Modul Box Alignment v CSS specifikuje zarovnání boxů v různých modelech rozvržení CSS: blokovém, tabulkovém, vícesloupcovém, flexboxu nebo Gridu.

<div class="related web-only" markdown="1">
- [CSS Grid](css-grid.md)
- [Flexbox](css-flexbox.md)
- [Vícesloupcový layout](css-multicolumn.md)
</div>

Specifikace [Box Alignment Module Level 3](https://www.w3.org/TR/css-align-3/) v podstatě vzala všechna zarovnání a rozdělení prostoru definovaná ve flexboxu, něco přidala a zpřístupnila ji ostatním systémům pro layout, což nás zajímá hlavně pro potřeby CSS gridu. O tom je tato příručka na Vzhůru dolů.

<!-- AdSnippet -->

Nijak se zde nezabýváme zarovnáváním textu (vlastnosti jako `text-align`, `vertical-align`), ani staršími (ale stále funkčními) metodami zarovnávání boxů s pomocí `margin` a tak dále.

## Rychlý tahák k vlastnostem {#tahak}

Vlastností, které obstarávají zarovnávání v CSS, je na jednu webařskou hlavu opravdu hodně.

![Tahák k CSS Box Alignment](../dist/images/original/vdlayout/css-box-alignment-tahak.png)

Naštěstí jsou ale ty nejdůležitější vlastnosti pojmenované podle jednoduchého klíče. Než vyberete tu správnou, musíte si ujasnit:

- Směr zarovnávání (hlavní osa je obvykle vodorovná, jinak též řádková; příčná osa svislá, jinak též bloková).
- Co budete zarovnávat (všechny položky, jednu položku nebo obsah mezi nimi).

<div class="rwd-scrollable prop-table f-6"  markdown="1">

|                                     | **Hlavní osa** (`justify-*`) | **Příčná osa** (`align-*`) |
|-------------------------------------|------------------------------|----------------------------|
| **Zarovnání položek** (`*-items`)   |  `justify-items`     | `align-items`     |
| **Zarovnání sebe sama** (`*-self`)  |  `justify-self`      | `align-self`      |
| **Distribuce obsahu** (`*-content`) |  `justify-content`   | `align-content`   |

</div>

Jen připomínám, že směr hlavní a příčné osy se může změnit – například pomocí vlastnosti [`flex-direction` nastavené na `column`](css3-flexbox-kontejner.md).

V tabulce nejsou obsaženy zdaleka všechny zarovnávací vlastnosti, na ty se pojďme podívat hned v další části textu.

Každou vlastnost si zde můžete rozkliknout a dostat se tak na její specifikaci.

## Zarovnání položek (`*-items`) {#polozky}

Na kontejneru definujeme, jak se budou zarovnávat jednotlivé položky.

<div class="rwd-scrollable prop-table f-6" markdown="1">

| Vlastnost                               | Co dělá?  |
|-----------------------------------------|-----------|
| [`justify-items`](css-justify-items.md) <br> [![Vlastnost justify-items](../dist/images/small/vdlayout/css-justify-items-schema.png)](css-justify-items.md) | Zarovnání na řádkové ose (obvykle vodorovně). <br> Např. `justify-items: center` centruje všechny položky. |
| [`align-items`](css-align-items.md) <br> [![Vlastnost align-items](../dist/images/small/vdlayout/css-align-items-schema.png)](css-align-items.md)     | Zarovnání na blokové ose (obvykle svisle). <br> Např. `align-items: end` zarovná položky ke spodní hraně kontejneru. |
| [`place-items`](css-place-items.md) <br> [![Vlastnost place-items](../dist/images/small/vdlayout/css-place-items-schema.png)](css-place-items.md)     | Zkratka pro zarovnání položek v obou směrech. <br> Např. `place-items: end center` zarovná položky ke spodní hraně a vodorovně na střed. |

</div>

## Zarovnání samostatné položky (`*-self`) {#sebe-sama}

Pro konkrétní položku definujeme, jak se bude zarovnávat.

<div class="rwd-scrollable prop-table f-6" markdown="1">

| Vlastnost                               | Co dělá?  |
|-----------------------------------------|-----------|
| [`justify-self`](css-justify-self.md) <br> [![Vlastnost justify-self](../dist/images/small/vdlayout/css-justify-self-schema.png)](css-justify-self.md)   | Zarovnání na řádkové ose (obvykle vodorovně). <br> Např. `justify-self: center` vodorovně centruje položku. |
| [`align-self`](css-align-self.md) <br> [![Vlastnost align-self](../dist/images/small/vdlayout/css-align-self-schema.png?2)](css-align-self.md)   | Zarovnání na blokové ose (obvykle svisle). <br> Např. `align-self: end` zarovná položku ke spodní hraně. |
| [`place-self`](css-place-self.md)  <br> [![Vlastnost place-self](../dist/images/small/vdlayout/css-place-self-schema.png)](css-place-self.md)  | Zkratka pro zarovnání jednotlivé položky v obou směrech. <br> Např. `place-self: end center` zarovná položku ke spodní hraně a vodorovně doprostřed. |

</div>

## Distribuce prostoru mezi položkami (`*-content`) {#distribuce-prostoru}

Vlastnosti, které řídí rozdělení volného prostoru, který uvnitř kontejneru zůstává mezi položkami.

<div class="rwd-scrollable prop-table f-6" markdown="1">

| Vlastnost                               | Co dělá?  |
|-----------------------------------------|-----------|
| [`justify-content`](css-justify-content.md) <br> [![Vlastnost justify-content](../dist/images/small/vdlayout/css-justify-content-schema.png)](css-justify-content.md) | Rozdělení prostoru na řádkové ose (obvykle vodorovně). <br> Např. `justify-content: space-between` rozdělí prostor mezi položky. |
| [`align-content`](css-align-content.md) <br> [![Vlastnost align-content](../dist/images/small/vdlayout/css-align-content-schema.png)](css-align-content.md) | Rozdělení prostoru na blokové ose (obvykle svisle). <br> Např. `align-content: start` zajistí zarovnání položek k horní hraně kontejneru. |
| [`place-content`](css-place-content.md) <br> [![Vlastnost place-content](../dist/images/small/vdlayout/css-place-content-schema.png)](css-place-content.md) | Zkratka pro rozdělení prostoru v obou směrech. <br> Např. `place-content: start space-between` zajistí zarovnání položek k horní hraně kontejneru a vodorovné dělení prostoru mezi položky. |

</div>

<div class="web-only" markdown="1">

## Odkazy pro další studium {#odkazy}

Na závěr si neodpustím několik odkazů jinam:

- Specifikace W3C pro CSS Box Alignment Module Level 3 – [w3.org/TR/css-align-3](https://www.w3.org/TR/css-align-3/)
- Ahmad Shaheed: hra „Learn Box Alignment“ – [ishadeed.com/article/learn-box-alignment/](https://ishadeed.com/article/learn-box-alignment/)
- Rachel Andrew: stručný tahák „Box Alignment Cheatsheet“ – [rachelandrew.co.uk/css/cheatsheets/box-alignment](https://rachelandrew.co.uk/css/cheatsheets/box-alignment)

</div>

<!-- AdSnippet -->

<!--  

## A co teorie? {#teorie}

V této části se pokouším být co nejvíce praktický. Poskytnout snadno použitelný rozcestník pro použití vlastností CSS Box Alignment. Cíleně jsem vám ale zamlčel teoretickou část, která je důležitá pro pochopení problematiky zarovnání v CSS. 

Pro pochopení zarovnání layoutu v CSS byste totiž ideálně měli znát:

- Pojmy jako je kontejner, položka, „fallback alignment“ a další.
- Všechny možné typy zarovnání.
- Problematiku podporu v prohlížečích.
- Odkazy pro další studium.

Tohle všechno jsem schoval [do teorie kolem CSS Box Alignment](css-box-alignment-teorie.md).

-->
