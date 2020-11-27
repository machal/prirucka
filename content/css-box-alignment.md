# Zarovnání boxů v CSS

Modul Box Alignment v CSS specifikuje zarovnání boxů v různých modelech rozvržení CSS: blokovém, tabulkovém, vícesloupcovém, flexboxu nebo Gridu.

Specifikace [Box Alignment Module Level 3](https://www.w3.org/TR/css-align-3/) v podstatě vzala všechna zarovnání a rozdělení prostoru definovaná ve flexboxu, něco přidala a zpřístupnila ji ostatním systémům pro layout, což nás zajímá hlavně pro potřeby [CSS gridu](css-grid.md). O tom je tato příručka na Vzhůru dolů.

Nijak se zde nezabýváme zarovnáváním textu (vlastnosti jako `text-align`, `vertical-align`), ani staršími (ale stále funkčními) metodami zarovnávání boxů s pomocí `margin` a tak dále.

## Rychlý tahák k vlastnostem {#tahak}

Vlastností, které obstarávají zarovnávání v CSS, je na jednu webařskou hlavu opravdu hodně.

Naštěstí jsou ale ty nejdůležitější vlastnosti pojmenované podle jednoduchého klíče. Než vyberete tu správnou, musíte si ujasnit:

- Směr zarovnávání (hlavní osa je obvykle vodorovná, příčná osa svislá).
- Co budete zarovnávat (všechny položky, jednu položku nebo obsah mezi nimi).

<div class="rwd-scrollable f-6"  markdown="1">

|                                     | **Hlavní osa** (`justify-*`) | **Příčná osa** (`align-*`) |
| **Zarovnání položek** (`*-items`)   |  `justify-items`     | `align-items`     |
| **Zarovnání sebe sama** (`*-self`)  |  `justify-self`      | `align-self`      |
| **Distribuce obsahu** (`*-content`) |  `justify-content`   | `align-content`   |

</div>

Je dobré vědět, že v tabulce nejsou obsaženy zdaleka všechny zarovnávací vlastnosti, na ty se pojďme podívat hned v další části textu.

## Zarovnání položek (`*-items`) {#polozky}

Na kontejneru definujeme, jak se budou zarovnávat jednotlivé položky.

<div class="rwd-scrollable f-6" markdown="1">

| Vlastnost                               | Co dělá?  |
|-----------------------------------------|-----------|
| [`justify-items`](css-justify-items.md) | Zarovnání na řádkové ose (obvykle vodorovně). <br> Např. `justify-items: center` centruje všechny položky. |
| [`align-items`](css-align-items.md)     | Zarovnání na blokové ose (obvykle svisle). <br> Např. `align-items: end` zarovná položky ke spodní hraně kontejneru. |
| [`place-items`](css-place-items.md)     | Zkratka pro obě vlastnosti. <br> Např. `align-items: end center` zarovná položky ke spodní hraně a vodorovně na střed. |

</div>

### Zarovnání samostatné položky (`*-self`) {#sebe-sama}

Konkrétní položce definujeme, jak se bude zarovnávat.

<div class="rwd-scrollable f-6" markdown="1">

| Vlastnost                               | Co dělá?  |
|-----------------------------------------|-----------|
| [`justify-self`](css-justify-self.md)   | Zarovnání na řádkové ose (obvykle vodorovně). <br> Např. `justify-self: center` vodorovně centruje položku. |
| [`align-self`](css-align-self.md)   | Zarovnání na blokové ose (obvykle svisle). <br> Např. `justify-self: end` zarovná položku ke spodní hraně. |
| [`place-self`](css-place-self.md)   | Zkratka pro zarovnání v obou směrech. <br> Např. `place-self: end center` zarovná položku ke spodní hraně a vodorovně doprostřed. |

</div>

### Distribuce prostoru mezi položkami (`*-content`) {#distribuce-prostoru}

Vlastnosti, které řídí rozdělení volného prostoru, který uvnitř kontejneru zůstává mezi položkami.

<div class="rwd-scrollable f-6" markdown="1">

| Vlastnost                               | Co dělá?  |
|-----------------------------------------|-----------|
| [`justify-content`](css-justify-content.md) | Rozdělení prostoru na řádkové ose (obvykle vodorovně). <br> Např. `justify-content: space-between` rozdělí prostor mezi položky. |
| [`align-content`](css-align-content.md) | Rozdělení prostoru na blokové ose (obvykle svisle). <br> Např. `align-content: start` zajistí zarovnání položek k horní hraně kontejneru. |
| [`place-content`](css-place-content.md) | Zkratka oba směry. <br> Např. `place-content: start space-between` zajistí zarovnání položek k horní hraně kontejneru a vodorovné dělení prostoru mezi položky. |

## A co teorie? {#distribuce-prostoru}

V této části se pokouším být co nejvíce praktický. Poskytnout snadno použitelný rozcestník pro použití vlastností CSS Box Alignment. Cíleně jsem vám ale zamlčel teoretickou část, která je důležitá pro pochopení problematiky zarovnání v CSS. 

Pro pochopení zarovnání layoutu v CSS byste totiž ideálně měli znát:

- Pojmy jako je kontejner, položka, „fallback alignment“ a další.
- Všechny možné typy zarovnání.
- Problematiku podporu v prohlížečích.
- Odkazy pro další studium.

Tohle všechno jsem schoval [do teorie kolem CSS Box Alignment](css-box-alignment-teorie.md).
