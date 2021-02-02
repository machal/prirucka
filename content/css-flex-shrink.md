# CSS vlastnost flex-shrink: faktor smršťování položky flexboxu

Jakým podílem vzhledem k ostatním položkám se může definovaná položka zmenšovat, pokud v rodičovském kontejneru místo ubylo –  když uživatel zmenšil okno nebo třeba přibyla nová položka? Od toho tady máme vlastnost [flex-shrink].

<!-- TODO obrázek -->

Také v jejím případě platí, že je obecně lepší namísto ní používat [zkratku `flex`](css-flex.md). Problematikou smršťování se ale zabývat budeme, to si pište, že ano.

<div class="related web-only" markdown="1">
- [Flexbox](css3-flexbox.md)
</div>

Možné hodnoty:

- `1` (výchozí)  
Položka si z vlastní šířky ubere část odpovídající celé velikosti smrštění.
- Kladná čísla (např. `0.5`, `1`, `2`…)  
Položka si ze své šířky vezme podíl z ubrané části kontejneru odpovídající tomuto číslu.
- `0`  
Položka je tvrdohlavá a smršťovat se nebude. A nebude!

## Demo {#demo}

Ani zde nevynecháme příklad. Pevně doufám, že když si pohrajete s přepínači v CodePenu, celou věc snáze pochopíte.

CodePen: [cdpn.io/e/GRNJNVg](https://codepen.io/machal/pen/GRNJNVg?editors=0000)

Připomenu základní nastavení těchto ukázek: Na rodiči (`.container` s nastavením `display:flex`) zde leží tíha udržet na uzdě tři potomky (`.box`). Zde jsme demo obohatili ještě o nastavení každého potomka tak, aby se pokoušel urvat co nejvíce prostoru z rodiče:

```css
.box {
  width: 100%;
}
```

Ta paralela se skutečným rodičovstvím je zde až mrazivá. Mámy a tátové mezi čtenáři vědí, takové děti nechceme, ale všechny jsou takové. Ale nic, zpět k CSS… 

<!-- AdSnippet -->

Podívejme se na různé možnosti nastavení `flex-shrink`, které dostává první dítě, nebo raději položka jménem `.box`:

- `0` – nesmršťuje se. Nebude se za žádnou cenu omezovat. Jednou jsme řekli `width:100%`, tak co bychom také chtěli…? Podřídí se tomuto pravidlu a oba ostatní sourozence vytlačí ven. Vzhledem k tomu, že výchozí hodnota `flex-shrink` je `1`, sourozenci si poctivě ze své šířky ubrali.
- `0.5` – ubere si polovinu oproti sourozencům, takže při zmenšování rodičovského prvku zabírá stále více místa.
- `1` – v tomto případě se všichni potomkové spravedlivě smršťují stejným podílem. Z pohledu rodiče ideální stav.
- `2` – první položka si ubírá dvojnásobek oproti zbylým dvěma.

Je to trochu jasnější? Snad ano.

## Podpora v prohlížečích {#podpora}

Podpora je – podobně jako [u vlastnosti `flex-grow`](css-flex-grow.md) – plná. Internet Explorer 10 jako výchozí hodnotu chybně používá `0`, ale tuto informaci už v 21. století asi potřebovat nebudete. Viz [CanIUse.com](https://caniuse.com/mdn-css_properties_flex-shrink).

<!-- AdSnippet -->
