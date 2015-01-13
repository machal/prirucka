# srcset/sizes

Nové atributy elementu `<img>`, které řeší potřebu autorů stránek zobrazovat v různých stavech responzivního designu různé varianty obrázků. 

Na atributech `srcset` a `sizes` je hezké, že poměrně složité rozhodování, který obrázek ve které situaci použít, necháváme na prohlížeči. Jako autoři stránky mu jen řekneme jaké varianty obrázku má k dispozici (`srcset`) a jak jsou veliké mezi jednotlivými breakpointy layoutu (`sizes`).

## `srcset` – sada zdrojů obrázku a jejich vlastností

```
<img src="small.png" 
srcset="small.png 600w, medium.png 1024w, large.png 1600w**"
alt="Obrázek" width="200" height="200">
```

[srcset demo na CodePen](http://codepen.io/machal/pen/WboGgE?editors=100). (V demu jsme použili polyfill Picturefill, takže funguje ve všech prohlížečích, ale možná jste si všimli [nepřítomnosti atributu src](http://www.vzhurudolu.cz/prirucka/picturefill#picturefill-2).)

Prohlížeči tím sdělujeme, že jsme předgenerovali obrázek `small.png` v šířce 600 pixelů, `medium.png` v šířce 1024 pixelů a a `large.png` v šířce 1600 pixelů. V atributu `src` pak uvádíme [fallback](http://www.vzhurudolu.cz/prirucka/fallback) pro prohlížeče, které `srcset` neumí. 

Prohlížeč pro rozhodování o tom, který obrázek načíst, zde bere šířku okna. Takže do 600 pixelů a méně širokého okna načte `small.jpg`, mezi 601 a 1024 pixelů širokým pak `medium.jpg` a v oknech šířky od 1025 pixelů načte `large.png`. 

Některé prohlížeče – jako Chrome – to budou dělat chytřeji a například `small.jpg` budou zobrazovat i daleko nad hranicí 600pixelového okna, protože na vizuální kvalitě to obrázku neubere.

Prohlížeč bere v potaz i aktuální [device-pixel-ratio](http://www.vzhurudolu.cz/prirucka/css-pixel) a tak třeba na původním Retina displeji (`device-pixel-ratio=2`) načte `medium.jpg` i v případě, že okno je široké 600 pixelů. Chrome například načítá kvalitnější obrázek i ve chvíli, kdy uživatel nad obrázkem zoomuje. Do budoucna prohlížeče mohou načítat třeba méně kvalitní obrázek na pomalém internetovém připojení. 

Ano, přesně v potenciálu chytrého rozhodování prohlížeče vězí krása `srcset`. Prohlížeč zváží všechny informace, které má o stavu stránky k dispozici a podle toho vybere nejvhodnější obrázek. Vy jako autoři jen vygenerujete dost variant a správně je popíšete – pomocí deskriptorů.

## Deskriptory vlastností obrázků v `srcset`

Zatím jsme zmínili jen šířku obrázku – **deskriptor ****`w**.` Ten říká jakou šířku v pixelech obrázek má při exportu z grafického editoru nebo po výstupu z vašeho skriptu.

Druhý **deskriptor ****`**x` určuje připravenost souboru s obrázkem pro různé `device-pixel-ratio` poměry, například:

```
<img … srcset="image.jpg, image@2x.jpg 2x">
```

Tímto zápisem říkám, že `image@2x.jpg` má prohlížeč použít při `device-pixel-ratio` alespoň 2 a `image.jpg` ve všech hodnotách menších než 2. 

Pojďme se ale podívat na atribut, který prohlížeči umožní vybírat nejen podle fyzických parametrů souborů s obrázky, ale i podle velikosti obrázku v rámci layoutu stránky — `sizes`.

## `sizes` – velikosti obrázků

V praxi totiž tak často nepotřebujeme volit obrázek podle šířky okna, ale podle šířky obrázku v rámci layoutu:

```
<img src="small.png" 
srcset="small.png 600w, medium.png 1024w, large.png 1600w"
sizes="(min-width: 768px) 300px, 100vw"
alt="Obrázek" width="200" height="200">
```

Tímto zápisem říkáme, že responzivní layout je vymyšlený tak, že v rozlišeních nad 768 pixelů má obrázek šířku 300 pixelů ve všech ostatních pak 100 [procent šířky viewportu](http://snook.ca/archives/html_and_css/vm-vh-units). 

První vyhovující varianta v `sizes` vyhrává, takže na pořadí záleží. Bacha na to.

Nojo, jenže v responzivním, potažmo fluidním layoutu obvykle přesně nevíme jaké rozměry  budou mít obrázky v rámci konkrétní šířky okna. A hurá — tady přichází síla kombinace `sizes` [s funkcí calc()](https://developer.mozilla.org/en-US/docs/Web/CSS/calc). Pomocí ní můžeme elegantně definovat velikost obrázku relativně k layoutu mezi konkrétními breakpointy.

Opět tedy máme [demo na CodePenu](http://codepen.io/machal/pen/azBmaX?editors=110). Nejdříve si ale raději pojďme vizualizovat jak vlastně náš layout vypadá:

<img class="picture" src="content/schemes/rwd-images-scenare.jpg" width="700" height="394" alt="Layout příkladu pro demonstraci srcset/sizes">

Do `600px` breakpointu je to jednoduché – obrázek zabírá celou šířku layoutu. Nikoliv ovšem šířku okna a tak musíme odečíst výchozí `margin` u `<body>`, který mají prohlížeče nastavený na `8px`:

```
calc(100vw - 2*8px)
```

Od `600px` breakpointu pak musíme vyjít z CSS layoutu:

```
@media only screen and (min-width: 600px) {  
  .image {
    width: 49%;
  }  
}
```

Přepsáno do funkce `calc()` to vypadá takto:

```
calc((100vw - 2 * 8px) * 0.49)
```

A ještě v prostém jazyce:

```
(100 procent šířky viewportu - výchozí margin u <body>) * 49% šířka obrázku
```

Takže celý zápis tagu `<img>` bude vypadat takto:

```
<img src="small_600.png" 
srcset="small_600.png 600w, medium_1024.png 1024w, large_1600.png 1600w" 
sizes="(min-width: 600px) calc((100vw - 2*8px) * 0.49), calc(100vw - 2*8px)"
alt="Obrázek" width="200" height="200">
```

Pojďme si pro jistotu ještě shrnout zápis v `sizes`:

1. na rozlišeních od 600 pixelů bude mít obrázek velikost `calc((100vw - 2 * 8px) * 0.49)`
2. ve všech ostatních případech – to znamená do 599 pixelů pak `calc(100vw - 2 * 8px)`

[srcset & sizes demo na CodePenu](http://codepen.io/machal/full/azBmaX?editors=110). (V demu jsme použili polyfill Picturefill, takže funguje ve všech prohlížečích, ale možná jste si všimli [nepřítomnosti atributu src](http://www.vzhurudolu.cz/prirucka/picturefill#picturefill-2).)

Se `srcset` a `sizes` si vystačíte v naprosté většině situací kdy budete potřebovat sáhnout po řešení responzivních obrázků. 

Pokud budete potřebovat servírovat zcela jinak vypadající obrázky pro různá rozlišení (scénář [art direction](http://usecases.responsiveimages.org/#h-art-direction)) nebo obrázky [v různých souborových formátech](http://usecases.responsiveimages.org/#h-image-formats), sáhněte po novém tagu [<picture>](#TODO).

**Nevýhody současného řešení**

Materiál je to čerstvý, ostatně podpora prvních prohlížečů přišla snad v rekordně krátkém čase po vydání finální verze specifikace. Dále se o něm diskutuje. Proto se nelze divit některým nedořešenostem. Kromě problémů [polyfillu](http://www.vzhurudolu.cz/prirucka/picturefill) je tu například často zmiňovaný fakt, že HTML každého obrázku v sobě nese informaci o nastavení designu. Když se změní, musí chudák vývojář všechny výskyty této informace měnit. Věřím ale, že se tuhle drobnou nevýhodu podaří brzy odstranit. Například [přidáním ](https://soundcloud.com/bruskodu/epizoda-10-s-tab-atkinsem-o-responzivnich-obrazcich-a-elementu-picture#t=22:25)[meta tagu](https://soundcloud.com/bruskodu/epizoda-10-s-tab-atkinsem-o-responzivnich-obrazcich-a-elementu-picture#t=22:25), který by informace o layoutu sdružoval na jedno místo.

## Podpora v prohlížečích

Prakticky všechny prohlížeče ústy svých tvůrců deklarovaly, že tento standard naimplementují. Ano, [včetně Internet Exploreru](http://blogs.msdn.com/b/ie/archive/2014/12/08/status-roadmap-update-srcset-lt-main-gt-element-and-date-inputs-in-development.aspx), ptáte se správně. Jenže jim bude chvíli trvat než to udělají. Nativní podpora je k dispozici [v posledních verzích Chrome, Opeře a zčásti Safari](http://caniuse.com/#feat=srcset). Do té doby – a samozřejmě kvůli starším prohlížečům – je potřeba používat polyfill [Picturefill](http://www.vzhurudolu.cz/prirucka/picturefill). Ten má jistá omezení, ale ve většině případů vám pomůže s výběrem správné varianty obrázku už nyní, takže se zkoušením není potřeba váhat.

## Čtěte dále

* Další části textů o [responzivních obrázcích](http://www.vzhurudolu.cz/prirucka/responzivni-obrazky): [<picture>](http://www.vzhurudolu.cz/prirucka/picture) a [Picturefill](http://www.vzhurudolu.cz/prirucka/picturefill)
* [Eric Portis: kompletní průvodce srcset a sizes](http://ericportis.com/posts/2014/srcset-sizes/) (anglicky)


