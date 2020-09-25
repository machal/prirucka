# CSS vlastnost order

Vlastnost `order` nastavuje pořadí položky v kontejneru flexboxu nebo CSS Gridu. Občas se může kodérům a kodérkám velmi hodit proto, že zajistí odlišení *vizuálního* pořadí položek od toho *zdrojového* z HTML nebo lépe stromu DOM.

## Jednoduchý příklad s flexboxem

Pro účely demonstrace zneužijeme čtyři nevinné položky v kontejneru flexboxu: 

```html
<div class="container">
  <div class="item item--1">
    Item 1
  </div>
  <div class="item item--2">
    Item 2
  </div>
  <div class="item item--3">
    Item 3
  </div>  
  <div class="item item--4">
    Item 4
  </div>
</div>
```

Přičemž vlastnost `order` budeme nastavovat jen u té zvýrazněné třetí:

```css
.item--3 {
  order: 1;
}
```

<figure>
<img src="../dist/images/original/css-order.png" width="1600" height="900" alt="CSS vlastnost order">
<figcaption markdown="1">
*Obrázek: Tři různá nastavení hodnoty vlastnosti `order`*
</figcaption>
</figure>

Už tady je hezky vidět, že vlastnost mění pořadí prvků možná trošku jinak, než byste čekali:

- `order: 0` – u nulové hodnoty se od položky asi dá očekávat, že bude držet původní pozici. Nezklamala.
- `order: 1` – kladné hodnoty vytvářejí novou řadu položek řazených od nejmenšího po největší číslo. Ale až *za* původními, vlastností `order` nedotčenými položkami.
- `order: -1` – ano, lze použít i záporná čísla. Slouží k vytváření pořadí *před* původními položkami.

CodePen: [cdnp.io/e/oNxmLRe](https://codepen.io/machal/pen/oNxmLRe?editors=1100)

## Pár věcí, které si stojí za to zapamatovat

Jak je vidět, vlastnost `order`, jakkoliv se zdá jednoduchá a přímočará, trošku klame tělem. Jsou zde ale další i další vědomosti, které byste měli mít v hlavě, než si s ní začnete hrát.

1. Pokud má více položek nastavenu stejnou hodnotu `order`, seřadí se podle pořadí v DOMu.
2. Podle specifikace vlastnost `order` ovlivňuje také pořadí vykreslení položek prohlížečem, což asi dává logiku.
3. Absolutně pozicované položky vždy dostanou nastavení `order: 0`, takže drží pořadí vykreslení dle DOMu, což je vidět v mém CodePenu. [cdnp.io/e/JjXxVJy](https://codepen.io/machal/pen/JjXxVJy?editors=1100)

<!-- TODO: ## Praktické použítí -->

## Přístupnost: Pozor na vizuální pořadí

Musím vás upozornit na to, že jakmile odlišíte pořadí zobrazování od pořadí v kódu, může se stát, že při ovládání z klávesnice (tabulátorem) nebo použítí [s odečítači pro zrakově hendikepované](testovani-odecitace.md) přestane konzumace obsahu.

Také proto je [ve specifikaci](https://www.w3.org/TR/css-flexbox-1/#order-property) obsaženo toto důrazné varování:

> Authors must use order only for visual, not logical, reordering of content.

