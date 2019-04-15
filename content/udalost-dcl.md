# Událost DOM Content Loaded (DCL)

Událost `DOMContentLoaded` v JavaScriptu vzniká, když byl hlavní HTML dokument stažen a rozparsován. Nečeká se na žádné další prvky – CSS, JS, obrázky nebo `<iframe>`.

Je to také [metrika rychlosti webu](metriky-rychlosti.md), která vzniká někde kolem renderovacích metrik „První vykreslení obsahu“ ([FCP](metrika-fcp.md)) a „První smysluplné vykreslení“ ([FMP](metrika-fmp.md)).

<figure>
<img src="../dist/images/original/metriky-rychlosti.jpg" alt="">
<figcaption markdown="1">
*Ukázka postupného vzniku událostí pro vykreslování stránky*
</figcaption>
</figure>

Metriku uvidíte například pod záložkou „Network“ v DevTools prohlížečů Firefox nebo Chrome jako modrou čáru na časové ose stahování prvků webu.

Je to ale technická metrika. Nic samozřejmě nezkazíte, když ji optimalizací budete posunovat směrem k nule, ale o uživatelském prožitku vám nicmoc neřekne. Bylo prokázáno, že lepší časy DCL [korelují s nížšími „bounce rate“](https://developers.google.com/speed/docs/insights/faq#speedmetrics) v analytických nástrojích. Dává to smysl. Čím rychleji se vám stránka zobrazí, tím méně pravděpodobně s ní ztratíte trpělivost. Je to ovšem tím, že DCL koreluje s FCP a FMP.

## Životní cyklus stránky

Pokud vás nezajímá rychlost, webu na `DOMContentLoaded` asi budete nahlížet jako na jednu z událostí životního cyklu stránky. Je ji možné zjistit takhle:

```javascript
document.addEventListener("DOMContentLoaded", ready);
```

Více informací je na webu [javascript.info](https://javascript.info/onload-ondomcontentloaded#domcontentloaded).

<!-- AdSnippet -->
