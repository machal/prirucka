# Metrika DOM Content Loaded (DCL)

[Metrika rychlosti webu](metriky-rychlosti.md). Událost `DOMContentLoaded` v JavaScriptu vzniká, když byl hlavní HTML dokument stažen a rozparsován. Nečeká se na žádné další prvky – CSS, JS, obrázky nebo `<iframe>`.

Metriku uvidíte například pod záložkou „Network“ v DevTools prohlížečů Firefox nebo Chrome jako modrou čáru. Jak jsem zmiňoval, ukazuje ji také online verze PageSpeed Insight v nových reportech vytažených ze sběru nad reálnými uživateli.

Je samozřejmě dobré ji optimalizací posunovat směrem k nule, ale nicmoc vám o uživatelském prožitku neřekne.

Je ale prokázáno, že lepší časy DCL [korelují s nížšími „bounce rate“](https://developers.google.com/speed/docs/insights/faq#speedmetrics) v analytických nástrojích. Dává to smysl. Čím rychleji se vám stránka zobrazí, tím méně pravděpodobně s ní ztratíte trpělivost.
