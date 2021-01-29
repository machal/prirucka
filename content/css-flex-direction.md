# CSS vlastnost flex-direction: směr vyskládání položek flexboxu

Vlastnost `flex-direction` se aplikuje na kontejner flexboxu a určí způsob vyskládání položek tím, že nastaví směr hlavní osy flexboxu.

<!-- TODO obrázek -->

<div class="related web-only" markdown="1">
- [Flexbox](css3-flexbox.md)
</div>

Toto jsou možné hodnoty:

- `row`  
(Výchozí hodnota.) Vyskládá flex položky do řádky.
- `row-reverse`  
Do řádky, ale v opačném směru, tedy zprava doleva.
- `column`  
Položky flexboxu se skládají do sloupce.
- `column-reverse`  
Do sloupce, ale v opačném směru, tedy zdola nahoru.

CodePen: [cdpn.io/e/NWREVGG](https://codepen.io/machal/pen/NWREVGG?editors=0000)

## Zkratka flex-flow {#flex-flow}

Můžete použít také [vlastnost `flex-flow`](css-flex-flow.md), což je zkratka pro `flex-direction` a [`flex-wrap`](css-flex-wrap.md).

```
flex-flow: column = flex-direction: column
```

## Záludnosti změny pořadí {#poradi}

Je potřeba říci, že směr layout ve flexboxu vždy vychází ze zvyklostí daného jazyka – u nás tedy zleva doprava, v japonštině zhora dolů. Závisí to také na nastavení vlastností `writing-mode` a `direction`.

<!-- AdSnippet -->

Pořadí vykreslení položek se v případě vlastností `row` a `column` bere z pořadí v kódu. Pokud chcete pořadí otočit, prostě zvolte hodnoty `row-reverse` nebo `column-reverse`. Pozorní si asi všimli, že vlastnost `flex-direction` lze tím pádem použít i pro změnu řazení seznamů.

Změna pořadí má ale vliv jen na výsledek vykreslení, nikoliv např. na pořadí vykreslování a na procházení při navigaci klávesou Tab nebo čtečkami pro slabozraké.

Proto si na změnu směru dávejte velký pozor a vždy si představte, zda „čtení“ dokumentu bude dávat smysl i při pořadí uvedeném v DOMu. Je to ostatně podobné jako u [vlastnosti `order`](css-order.md), kde tuto záludnost rozebírám více.

## Vliv na `flex-basis` {#flex-basis}

Pokud je `flex-direction` nastaveno na hodnotu `column`, vlastnost `flex-basis` nastavuje výšku, tedy vlastnost `height`.

## Podpora v prohlížečích {#podpora}

Funguje to dobře. Jedinou mě známou výjimkou je flexbug číslo 14, kdy při použití `display:inline-flex` a `flex-flow: column wrap` prohlížeče neumí správně roztáhnout kontejner do celé šířky položek. Ale to je drobnost, na kterou často lidé ani nenarazí. [https://github.com/philipwalton/flexbugs](https://github.com/philipwalton/flexbugs#flexbug-14)

V době psaní se na CanIUse uvádí potíže, které má Firefox s vlastností `flex-direction` v kombinaci s `overflow`, ale to už není pravda. [CanIUse.com](https://caniuse.com/mdn-css_properties_flex-direction)

<!-- AdSnippet -->
