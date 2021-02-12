# CSS3 vlastnosti nezařazené v tomto textu

Většinou jde o technologie, které zatím nemají širokou podporu prohlížečů a hodí se jen pro speciální případy případy. Přidávám i ty, které sice stojí za pozornost, ale zatím jsem je nezdokumentoval.

## Filtry

Aplikování grafických filtrů na objekty nebo obrázky. Podpora je zatím horší, v Exploreru to nefunguje a čeká se na zapnutí v produkčním Edge. Raději upozorňuji, že to nemá nic společného s funkcí `filter()` známou z dřívějších Explorerů. Filtry umí rozostření, jas, kontrast, stín a mnoho dalších, které znáte z grafických programů. 

- [caniuse.com/css-filters](https://caniuse.com/css-filters)
- [jecas.cz/filter](http://jecas.cz/filter)  
- [w3.org/TR/filter-effects](https://www.w3.org/TR/filter-effects/)

## Masky

Zobrazení obrázku nebo elementu přes masku tvořenou jiným obrázkem. Hodilo by se, ale podpora je zatím mizerná. 

- [caniuse.com/masks](https://caniuse.com/masks)
- [jecas.cz/mask](http://jecas.cz/mask)
- [w3.org/TR/css-masking](https://www.w3.org/TR/css-masking/)

## Grid (mřížka)

Layout do mřížky. Zatímco [flexbox](css-flexbox.md) je vymyšlený pro design komponent uživatelského rozhraní, grid pro layout celých stránek. Podpora je v době psaní jen experimentální. Existuje sice polyfill, pro layout bych ho ovšem používat nedoporučoval. Každopádně grid layout bude po flexboxu další velká věc, takže doporučuji sledovat jeho vývoj. 

- [caniuse.com/grid](https://caniuse.com/grid)
- [w3.org/TR/css3-grid-layout](https://www.w3.org/TR/css3-grid-layout/)

## Hyphens (spojovníky)

Definuje, zda budou v případě potřeby slova na konci řádků automaticky rozdělována pomocí spojovníků. Co podpora? Kromě Chrome, Opery a Android Browseru se to už naučily všechny prohlížeče. Ale – vzhledem k povaze vlastnosti – jejímu využití nic nebrání. S českým textem to bude nejlépe fungovat v Exploreru.

- [caniuse.com/hyphens](https://caniuse.com/hyphens)
- [jecas.cz/hyphens](http://jecas.cz/hyphens)
- [w3.org/TR/css-text-3](https://www.w3.org/TR/css-text-3/#hyphens-property)

## @supports (detekce podpory vlastností)

Testuje dostupnost CSS vlastností v prohlížeči. Standardizovaná náhrada javascriptové knihovny Modernizr. Dnes už podporují všechny moderní prohlížeče, jen ten Explorer to už nedožene. Doufám, že o `@supports` brzy napíšu více.

- [caniuse.com/supports](https://caniuse.com/supports)
- [jecas.cz/supports](http://jecas.cz/supports)
- [w3.org/TR/css3-conditional](https://www.w3.org/TR/css3-conditional/)
