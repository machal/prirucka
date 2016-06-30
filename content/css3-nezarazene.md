## CSS3 vlastnosti nezařazené v tomto textu

Většinou jde o technologie, která zatím mají širokou podporu a hodí se jen pro speciální případy využití. Přidávám i ty, které stojí za pozornost, ale zatím jsem je nezdokumentoval.

### Filtry

Aplikování grafických filtrů na objekty nebo obrázky. [Podpora je zatím horší](http://caniuse.com/#search=css-filters), v Exploreru to nefunguje a čeká se na zapnutí v produkčním Edge. Raději upozorňuji, že to nemá nic společného s funkcí `filter()` známou z dřívějších Explorerů.

Filtry umí rozmazání, jas, kontrast, stín, černobílost a další. Více na [jecas.cz](http://jecas.cz/filter) nebo [w3.org](https://www.w3.org/TR/filter-effects/).

### Masky

Zobrazení obrázku nebo elementu přes masku tvořenou jiným obrázkem. Hodilo by se, ale podpora je zatím mizerná](http://caniuse.com/#search=masks). Viz [jecas.cz](http://jecas.cz/mask) a [w3.org](https://www.w3.org/TR/css-masking/).

### Grid

Layout do mřížky. Zatímco Flexbox je vymyšlený pro design komponent uživatelského rozhraní, Grid pro layout celých stránek. [Podpora](http://caniuse.com/#search=grid) je v době psaní jen experimentální. Existuje sice polyfill, pro layout bych ho ovšem používat nedoporučoval. Tohle asi bude po flexboxu další velká věc, takže doporučuji sledovat vývoj. Viz [w3.org](https://www.w3.org/TR/css3-grid-layout/).

### Hyphens

Definuje, zda budou slova na konci řádků automaticky rozdělovány pomocí spojovníku. Co [podpora](http://caniuse.com/#search=hyphens)? Kromě Chrome, Opery a Android Browseru se to už naučily všechny prohlížeče. Ale vzhledem k povaze vlastnosti nic jejímu využití nebrání. S českým textem to bude nejlépe fungovat v Exploreru. 

Podívejte se na [jecas.cz](http://jecas.cz/hyphens) nebo [w3.org](https://www.w3.org/TR/css-text-3/#hyphens-property).

### @supports

Testujeme dostupnost CSS vlastností v prohlížeči. Viz [jecas.cz](http://jecas.cz/supports) nebo [w3.org](https://www.w3.org/TR/css3-conditional/)


