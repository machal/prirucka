# Nová značka Picture

`<picture>` umožňuje definovat varianty obrázku pro různé stavy v responzivním webdesignu. 

Na rozdíl od atributů `srcset` a `sizes` nenecháváme rozhodování na prohlížeči. Vedení tady přebíráme my autoři. Ukážu tady pár scénářů, kdy je to výhodné. 


## Ukázka zápisu

```html
<picture>
  <source media="(min-width: 1024px)" srcset="large.jpg">
  <source media="(min-width: 600px)" srcset="medium.jpg">
  <img src="small.jpg" alt="…">
</picture>
```

V elementech `<source>` uvádím alternativy k výchozímu obrázku, který je v `<img>`. 

Prohlížeč vezme vždy první vyhovující obrázek. Je možné tedy obrázky řadit jak od největšího, tak od nejmenšího obrázku. V prvé případě použijte [Media Query](media-queries.md) `min-width`, v druhém `max-width`. [cdpn.io/e/qDmar](https://codepen.io/machal/pen/qDmar)

Značka `<picture>` přitom tvoří jen obal, zatímco prvky `<source>` jsou jakési molitanové vycpávky nesoucí informaci o alternativách. Veškeré stylování nebo věšení událostí v Javascriptu je nutné dělat přímo na `<img>` elementu. V každém `<picture>` musí být právě jeden `<img>`.

<!-- AdSnippet -->

Kdy se vám může `<picture>` hodit? Hlavně ve dvou situacích:

1. Připravili jste obrázky v různých ořezech. Třeba na mobily chcete poslat čtverce a jinde obdélníky. Zároveň chcete mít pod kontrolou hranice, kdy prohlížeč použije jednu, či druhou ořezovou verzi. Jde o „art direction“, tedy autorské řízení formy a obsahu obrázků.
2. Prohlížečům jste obrázky připravili v různých souborových formátech.

V naprosté většině případů vám bude stačit stará dobrá značka `<img>` [s atributy `srcset` a `sizes`](srcset-sizes.md).


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

I tady jsem pro vás připravil demo na CodePen. [cdpn.io/e/VYPPQQ](https://codepen.io/machal/pen/VYPPQQ?editors=110) 

<!-- AdSnippet -->

V čem se to liší od `<img srcset sizes>`? Příklad, který uvádím výše, je velmi zjednodušený. Museli byste v něm ještě ošetřit displeje typu Retina, tedy různé hodnoty `device-pixel-ratio`. To máte u `srcset` a `sizes` „v ceně“ řešení: prohlížeč to udělá sám.  Na druhou stranu tady pomocí jakýchkoliv [Media Queries](css3-media-queries.md) určíte sami hranice mezi variantami. V metodě `srcset` vybírá prohlížeč sám podle layoutu nastaveného v `sizes`.

Jinými slovy: Pokud byste se rozhodli používat `<picture>` pro běžné obrázky, byly by vaše Media Queries v nich uvedené dost složité. Kromě šířky okna by musely zohledňovat velikost obrázku v layoutu a také displeje typu Retina. Pojďme se ale zaměřit na ty scénáře, kdy se nová značka opravdu hodí.


## Podle formátu obrázku

Vybírat obrázky prohlížeče umí i podle formátu. Použijte atribut `type`. Hodí se hlavně pro detekci prohlížečů, které zvládají nový formát WebP. Ten je mimochodem ještě výrazně datově úspornější než JPG, ale ke dni psaní jej podporuje jen Chrome a Opera. [caniuse.com/webp](https://caniuse.com/#feat=webp)

```html
<picture>
	<source media="(min-width: 1024px)" 
    srcset="large.webp" type="image/webp">
	<source media="(min-width: 1024px)" 
    srcset="large.jpg">
	<img src="small.jpg" alt="…">
</picture>`
```

Prohlížeč, který umí formát WebP a běží v okně velikosti alespoň 1024 pixelů, stáhne a zobrazí soubor `large.webp`. 

<!-- AdSnippet -->

Tímto způsobem je také možné udělat pěkné náhradní řešení pro formát SVG:

```html
<picture>
  <source type="image/svg+xml" srcset="logo.svg">
  <img src="logo.png" alt="…">
</picture>
```

<div class="ebook-only" markdown="1">
  Šmytec. O bitmapových obrázcích jsme si toho řekli už dost. Teď vzhůru do vektorů!
</div>


