# Google Analytics: S jakými viewporty navštěvují uživatelé můj web?

Na rozdíl od [rozlišení displeje](rozliseni-displeje.md) dodává pro [responzivní design](https://www.vzhurudolu.cz/responzivni-design) webu [velikost okna](velikost-okna-css-js.md) dost zásadní informaci. 

Jde o nejdůležitější uživatelský kontext, kterému se weby přizpůsobují. Mají vliv na tvorbu breakpointů.

Jenže z dostupných dat tady vyjít nemůžeme: [Gemius](http://ranking.gemius.com/cz/), [Statcounter](http://gs.statcounter.com/) nebo i [Google Analytics](google-analytics-vyvojari.md) standardně nabízí jen přehled pro rozlišení obrazovky, který je ale webařům k ničemu.

Je zde ale způsob, jak z Google Analytics (GA) data vytáhnout a upravit do použitelné podoby. Je jen potřeba si v GA připravit vlastní report a data z něj pak vybrousit přes Google tabulku. 

## Návod krok za krokem {#navod}

### 1) Google Analytics: Vlastní report velikost okna {#navod-1}

V Google Analytics si vytvořte vlastní report (*Přizpůsobení → Vlastní přehledy*):

- Název: třeba „Velikosti okna prohlížeče“
- Skupina metrik: Přidat metriku „Uživatelé“
- Úrovňové přechody dimenze: Přidat dimenzi „Velikost prohlížeče“
- Uložit

V angličtině je to popsáno například na [CSS Tricks](https://css-tricks.com/google-analytics-can-show-screen-resolution-%E2%89%A0-browser-window/).

### 2) Uložte do Google tabulky {#navod-2}

Po otevření reportu (*Přizpůsobení → Vlastní přehledy*) uvidíte přehled po velikostech okna, ale ten vám nicmoc neřekne. Já si vše uložil do Google tabulky a dále s tím pracoval tam: 

- *Exportovat → Tabulky Google*

Pozor, Analytics mají limit 500 řádků exportu. Na to jsem vyzrál [úpravou počtu řádků](https://www.hobo-web.co.uk/how-to-export-more-then-500-rows-to-csv-up-to-50000-rows-google-analytics-tip/) přímo v URL adrese.

### 3) Pročistit Google tabulku {#navod-3}

Tady jsme odmazal výšky, protože design uzpůsobuji hlavně šířce okna, spojil stejná šířky okna do jednoho řádku a seřadil.

- Promazat výšky: Nahradit a regex `x(.*)$`
- Spojit stejná čísla do jednoho řádků: Nainstaloval jsem si [Power Tools](https://chrome.google.com/webstore/detail/power-tools/dofhceeoedodcaheeoacmadcpegkjobi?utm_source=permalink) a pak pomocí *Data → Combine rows* vybral odpovídající sloupec. Action je „Calculate numbers“ a „Delimiter / function“ pak „SUM“
- Tabulce jsem přidat popisky dat a zafixoval první sloupec
- Tabulku jsem seřadil od nejmenšího po největší

### 4) Plošný graf {#navod-3}

Dostali jsme se k docela  hezké reprezentaci čísel. Mě by však zajímala distribuce rozlišení na ose. K tomu je samozřejmě ideální graf.

- *Přidat graf → Plošný*

# Graf rozdělení šířky viewportů na vašem projektu {#graf}

*TODO obrázek*

Myslím, že jsme tím dostali krásný podklad pro nastavování bodů zlomů designu pro konkrétní weby, co myslíte?
