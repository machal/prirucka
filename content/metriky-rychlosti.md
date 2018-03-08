# Metriky rychlosti načítání




## Load

Událost, která indikuje, že prohlížeč stáhl celé  HTML i všechny v něm odkazované prvky - CSS, JS, obrázky nebo `iframe`.

V JavaScriptu na ni můžeme čekat takto:

```javascript
window.addEventListener("load", function(event) { … });
```

Je to tradičně nejpoužívanější metrika. Nic proti ni a vylepšování jejich hodnot. Zhola nic vám ale neřekne o uživatelském prožitku. Když například bude totiž stránka zobrazená, interaktivní (a už dávno konzumovaná uživatelem) a na pozadí ještě stahuje velký obrázky někde do patičky, uživatel o tom vlastně vůbec neví.

Metriku uvidíte například: v záložce Network Chrome DevTools jako červenou čáru. Ale nějak ji uvádějí vlastně všechny měřící nástroje.

Zajímavou podobu má v Google Analytics. Ty ukazují „průměrnou dobu načítání stránky“ pro různé uživatelské kontexty (zařízení, prohlížeče nebo geografické umístění). Hlavně jde o reálné uživatele, takže nějaký smysl tuhle metriku v Analytics má.

V Analytics je [přesně definována](https://support.google.com/analytics/answer/2383341?hl=cs) takhle: 

> Průměrná doba (v sekundách), kterou trvá načtení stránky od spuštění zobrazení stránky (tj. kliknutí na odkaz vedoucí na stránku) do úplného načtení v prohlížeči.

TODO: Vývojáři, vy si v Analytics nainstalujte Technical Performance Dashboard, který vše ukazuje pěkně na jednom místě.

TODO: Článek o Analytics.

## First Contentful Paint (FCP)

Vzniká ve chvíli, kdy uživatel vidí první vizuální odezvu od stránky. Čím lepší čas, tím [větší šance udržet aktivitu uživatele](https://developers.google.com/speed/docs/insights/faq#speedmetrics).




## DOM Content Loaded (DCL)

Událost `DOMContentLoaded` se v JavaScriptu použí, když byl úvodní HTML dokument stažen a rozparsován. Nečeká se na žádné další prvky – CSS, JS, obrázky nebo `iframe`.

Metriku uvidíte například v záložce Network Chrome DevTools jako modrou čáru. Ukazuje ji také online verze PageSpeed Insight v nových reportech vytažených ze sběru nad reálnými uživateli. Zatím ale jen u větších webů.

Je samozřejmě dobré ji optimalizací posunovat směrem k nule, ale nicmoc vám o uživatelském prožitku neřekne.

Nicméně je prokázáno, že lepší časy DCL [korelují s nížšími „bounce rate“](https://developers.google.com/speed/docs/insights/faq#speedmetrics) v analytických nástrojích. Jasně – čím rychleji se vám stránka zobrazí, tím méně pravděpodobně s ní ztratíte trpělivost.