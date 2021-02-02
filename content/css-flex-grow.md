# CSS vlastnost flex-grow: faktor zvětšování položky flexboxu

Jak moc může položka růst relativně k dalším položkám, pokud je k dispozici volné místo –  například když uživatel zvětší okno prohlížeče? To určuje vlastnost `flex-grow`.

<!-- TODO obrázek -->

Specifikace a praktická zkušenost nás navádějí namísto používání `flex-grow` spíše ke [zkratce `flex`](css-flex.md), ale přesto považuji za nutné se o této vlastnosti zmínit.

<div class="related web-only" markdown="1">
- [Flexbox](css3-flexbox.md)
</div>

Možné hodnoty:

- `0` (výchozí)  
Znamená, že položka nijak neroste.
- Kladná čísla (např. `0.5`, `1`, `2`…)  
Položky si rozdělují podíly z nově získaného místa nad rámec výchozí šířky.

Záporná čísla zde nejsou validní, ale desetinná čísla jsou možná.

## Demo {#demo}

V ukázce máme kontejner flexboxu (`display:flex`) a v něm tři položky, kterým jsme nenastavili žádnou šířku a ve výchozím stavu se tedy roztáhnou podle své přirozené velikosti.

CodePen: [cdpn.io/e/XWNbNQE](https://codepen.io/machal/pen/XWNbNQE?editors=0000)

Pokud bude v rodičovském kontejneru dostatek volného místa, první položka, stylovaná přepínači nahoře si vezme tolik zbývajícího prostoru, kolik jsme jí ochotní dát právě nastavením vlastnosti `flex-grow`:

- `0` – zůstane na výchozí šířce.
- `0.5` – vezme si polovinu volného prostoru.
- `1` – roztáhne se do celé šířky volného prostoru.
- `2` – opět se jen roztáhne do celé šířky volného prostoru.

U poslední možnosti, nastavení na `2` se pozastavme. Je zde vidět, že `flex-grow` hospodaří vždy jen s prostorem uvnitř kontejneru flexboxu, takže neumožní položce zabrat dvojnásobek zbytku a vyrůst tedy mimo kontejner.

<!-- AdSnippet -->

Hodnota `2` by měla efekt pokud bychom v demu změnili nastavení růstu ostatních položek, například na `flex-grow:1`. V takovém případě by se stala poněkud obézní a zabrala by ze zbylého prostoru dvojnásobek oproti jejím dvěma sestrám.

## Podpora v prohlížečích {#podpora}

Prvním prohlížečem, který kdy flexbox podporoval, byl Internet Explorer 10. To bylo víceméně v pravěku. Proto zde myslím nepanuje napjaté očekávání, že by snad některé dnešní prohlížeče v implementaci `flex-grow` selhávaly. Ano, podpora je plná.

Jen pro zajímavost zmiňuji, že v IE10 byla tato vlastnost pojmenována ještě `-ms-flex-positive`. Více je na webu [CanIUse](https://caniuse.com/mdn-css_properties_flex-grow).

<!-- AdSnippet -->
