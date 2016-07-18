# <picture>

Nový tag, umožňující definování variant obrázku pro různé stavy v responzivním webdesignu. 

## Ukázka zápisu

```html
<picture>
  <source media="(min-width: 1024px)" srcset="large.jpg">
  <source media="(min-width: 600px)" srcset="medium.jpg">
  <img src="small.jpg" alt="…">
</picture>
```

Je asi zřejmé, že obrázek `small.jpg` se použije ve starých prohlížečích nebo tam kde není splněna ani jedna Media Query v `<source>` – v tomto případě do šířky okna 599 pixelů.

Dobré vědět, že `<picture>` tvoří trochu neekologicky zbytečný obal a `<source>` jen jakési molitanové vycpávky nesoucí informaci o alternativách. Veškeré stylování nebo věšení událostí v javascriptu je nutné dělat přímo na `<img>` element. Prohlížeče také do jeho atributu `src` stěhují obsah vyhovujícího obrázku z `srcset` u atributů `<source>`. Proto v každém `<picture>` musí být právě jeden `<img>`.

## Kdy budete `<picture>` potřebovat?

Pokaždé kdy vaše varianty splňují jednu z těchto podmínek:

1. Potřebujete servírovat jinak vypadající obrázky pro různá rozlišení — třeba pro mobily chcete jinak vyříznout hlavní motiv obrázku (scénář [art direction](http://usecases.responsiveimages.org/#h-art-direction)).
2. Prohlížečům jste připravili obrázky [v různých souborových formátech](http://usecases.responsiveimages.org/#h-image-formats).

Ve všech ostatních případech a tedy v naprosté většině případů vám bude stačit [starý dobrý `<img>` s atributy srcset a sizes](http://www.vzhurudolu.cz/prirucka/srcset-sizes).

## Art direction – obrázky pro různá rozlišení mají také různý obsah

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

[Demo pro art direction s <picture> na CodePen](http://codepen.io/machal/pen/VYPPQQ?editors=110)`. `(V demu jsme použili polyfill Picturefill, takže funguje ve všech prohlížečích, ale možná jste si všimli [nepřítomnosti atributu src](http://www.vzhurudolu.cz/prirucka/picturefill#picturefill-2).)

Pro okna 1024 pixelů a větší se stáhne a použije obrázek `large_1600.jpg`, od 800 do 1023 pixelů `medium_1024.jpg` a pro okna šířky 799 a méně pixelů pak `small_600.jpg`.

Dobré vědět, že z variant obrázku v `<source>` se vezme vždy první vyhovující, takže je nutné je řadit o největšího po nejmenší.

## Podle formátu obrázku

Vybírat obrázky můžete i podle formátu. Použijte atribut `type=""`. Příklad — některé prohlížeče zvládají nový úsporný formát obrázků [WebP](http://caniuse.com/webp).

```html
<picture>
	<source media="(min-width: 1024px)" srcset="large.webp" type="image/webp">
	<source media="(min-width: 1024px)" srcset="large.jpg">
	<img src="small.jpg" alt="…">
</picture>`
```

Prohlížeč co umí formát WebP a běží v okně velikosti alespoň 1024 pixelů, stáhne a zobrazí soubor `large.webp`.  Pokud vím, Picturefill umí kromě WebP detekovat ještě SVG.

Tímto způsobem je také možné udělat pěkný fallback pro [formát SVG](svg.md):

```html
<picture>
  <source type="image/svg+xml" srcset="logo.svg">
  <img src="logo.png" alt="…">
</picture>
```

Další složitější scénáře použití `<picture>` najdete například [v tomto článku na Dev.Opera](https://dev.opera.com/articles/responsive-images/).

## Podpora v prohlížečích

Prakticky všechny prohlížeče ústy svých tvůrců deklarovaly, že tento standard naimplementují. Ano, [včetně Internet Exploreru](http://blogs.msdn.com/b/ie/archive/2014/12/08/status-roadmap-update-srcset-lt-main-gt-element-and-date-inputs-in-development.aspx), ptáte se správně. Jenže jim bude chvíli trvat než to udělají. Nativní podpora je k dispozici [v posledních verzích Chrome, Opeře a zčásti Safari](http://caniuse.com/#feat=srcset). Do té doby – a samozřejmě kvůli starším prohlížečům – je potřeba používat polyfill [Picturefill](http://www.vzhurudolu.cz/prirucka/picturefill). Ten má jistá omezení, ale ve většině případů vám pomůže s výběrem správné varianty obrázku už nyní, takže se zkoušením není potřeba váhat.

## Čtěte dále

* Další části textů o [responzivních obrázcích](http://www.vzhurudolu.cz/prirucka/responzivni-obrazky): [srcset a sizes](http://www.vzhurudolu.cz/prirucka/srcset-sizes), [Picturefill](http://www.vzhurudolu.cz/prirucka/picturefill)
