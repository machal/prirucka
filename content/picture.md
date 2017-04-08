# Nová značka `<picture>`

`<picture>` umožňuje definovat varianty obrázku pro různé stavy v responzivním webdesignu. 

Na rozdíl od atributů `srcset` a `sizes` nenecháváme rozhodování na prohlížeči. Vedení tady přebíráme my autoři. Ukážu tady pár scénářů, kdy je to výhodné. Není jich tak moc.


## Ukázka zápisu

```html
<picture>
  <source media="(min-width: 1024px)" srcset="large.jpg">
  <source media="(min-width: 600px)" srcset="medium.jpg">
  <img src="small.jpg" alt="…">
</picture>
```

Ve elementech `<source>` uvádím alternativy k výchozímu obrázku, který je v `<img>`. Prohlížeč vezme vždy první vyhovující, takže je nutné alternativy řadit od největšího po nejmenší.

Značka `<picture>` přitom tvoří jen obal a prvky `<source>` jakési molitanové vycpávky nesoucí informaci o alternativách. Veškeré stylování nebo věšení událostí v javascriptu je nutné dělat přímo na `<img>` elementu. V každém `<picture>` musí být právě jeden `<img>`.

Kdy se vám může `<picture>` hodit? Hlavně ve dvou situacích:

1. Připravili jste obrázky v různých ořezech. Třeba na mobily chcete poslat čtverce a jinde obdélníky. Zároveň chcete mít pod kontrolou hranice, kdy prohlíže použije jednu či druhou ořezovou verzi. Jde o „art direction“, tedy autorské řízení obsahu obrázků.
2. Prohlížečům jste obrázky připravili v různých souborových formátech.

Ve všech ostatních případech a tedy v naprosté většině případů vám bude stačit starý dobrý `<img>` [s atributy `srcset` a `sizes`](srcset-sizes.md).


## Art direction: obrázky pro různá rozlišení mají také různý obsah

Máme tři varianty obrázků a prohlížeči chceme přesně stanovit hranice přepínání mezi nimi:

```html
<picture>
  <source 
  	srcset="large_1600.png" 
  	media="(min-width: 1024px)">
  <source 
  	srcset="medium_1024.png" 
  	media="(min-width: 800px)">
  <img 
    src="small_600.png"    
    alt="Obrázek" width="200" height="200">
</picture>
```

Pro okna 1024 pixelů a větší se stáhne a použije obrázek `large_1600.png`, od 800 do 1023 pixelů `medium_1024.png` a pro okna šířky 799 a méně pixelů pak `small_600.png`.

I tady jsem pro vás připravil demo na CodePen. [cdpn.io/e/VYPPQQ](http://codepen.io/machal/pen/VYPPQQ?editors=110). 

V čem se to liší od `<img srcset sizes>`? Příklad, který uvádím, je velmi zjednodušený. Museli byste v něm ještě ošetřit různé hodnoty `device-pixel-ratio`. To máte u `srcset` a `sizes` „v ceně“ řešení: prohlížeč to udělá sám.  Na druhou stranu tady pomocí jakýchkoliv [Media Queries](css3-media-queries.md) určíte sami hranice mezi variantami. Naproti tomu vybírá obrázky `srcset` prohlížeč sám podle layoutu nastaveného v `sizes`.


## Podle formátu obrázku

Vybírat obrázky prohlížeče umí i podle formátu. Použijte atribut `type`. Hodí se hlavně pro detekci prohlížečí, které zvládají nový formát WebP. Ten je mimochodem ještě výrazně datově úspornější než JPG, ale ke dni psaní jej podporuje jen Chrome a Opera. [caniuse.com/webp](http://caniuse.com/#feat=webp)

```html
<picture>
	<source media="(min-width: 1024px)" 
    srcset="large.webp" type="image/webp">
	<source media="(min-width: 1024px)" 
    srcset="large.jpg">
	<img src="small.jpg" alt="…">
</picture>`
```

Prohlížeč, co umí formát WebP a běží v okně velikosti alespoň 1024 pixelů, stáhne a zobrazí soubor `large.webp`. 

Tímto způsobem je také možné udělat pěkný fallback pro formát SVG:

```html
<picture>
  <source type="image/svg+xml" srcset="logo.svg">
  <img src="logo.png" alt="…">
</picture>
```

<div class="ebook-only" markdown="1">
  Šmytec. O bitmapových obrázcích jsme si toho řekli už dost. Teď vzhůru do vektorů!
</div>


