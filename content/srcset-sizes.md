# Atributy responzivních obrázků: srcset a sizes

Nové atributy elementu `<img>`, které řeší potřebu autorů stránek zobrazovat v různých stavech responzivního designu různé varianty obrázků.

<!-- AdSnippet -->

Na atributech `srcset` a `sizes` je hezké, že poměrně složité rozhodování, který obrázek ve které situaci použít, necháváme na prohlížeči. 

Jako autoři stránky mu jen řekneme jaké varianty obrázku má k dispozici (`srcset`) a jak jsou veliké mezi jednotlivými breakpointy layoutu (`sizes`).

## `srcset`: sada zdrojů obrázku a jejich vlastností

```html
<img src="medium.png"
  srcset="small.png 600w, 
          medium.png 1024w, 
          large.png 1600w
         ">
```

Demo na CodePenu: [cdpn.io/e/WboGgE](http://codepen.io/machal/pen/WboGgE?editors=100).

Prohlížeči tím sdělujeme, že jsme předgenerovali obrázek `small.png` v šířce 600 pixelů, `medium.png` v šířce 1024 pixelů a a `large.png` v šířce 1600 pixelů. V atributu `src` pak uvádíme fallback pro prohlížeče, které `srcset` neumí.

Protože zde není přítomný atribut `sizes`, prohlížeč pro rozhodování o tom, který obrázek načíst, zde bere šířku okna. Takže do 600 pixelů a méně širokého okna načte `small.jpg`, mezi 601 a 1024 pixelů širokým pak `medium.jpg` a v oknech šířky od 1025 pixelů načte `large.png`.

<!-- AdSnippet -->

Některé prohlížeče na to půjdou chytřeji a například `small.jpg` budou zobrazovat ještě kouset nad hranicí šestisetpixelového okna, protože na vizuální kvalitě to obrázku neubere.

Prohlížeč bere v potaz i aktuální `device-pixel-ratio` a tak třeba na původním Retina displeji (`device-pixel-ratio=2`) načte `medium.jpg` i v případě, že okno je široké 600 pixelů. Ve skutečnosti potřebuje dvojnásobek, tedy 1200 pixelů.

Dále se očekává, že prohlížeče načtou kvalitnější obrázek ve chvíli, kdy uživatel nad obrázkem zoomuje. Nebo mohou načítat třeba méně kvalitní obrázek na pomalém internetovém připojení.

Ano, přesně v potenciálu chytrého rozhodování prohlížeče vězí krása `srcset`. Prohlížeč zváží všechny informace, které má o stavu stránky k dispozici a podle toho vybere nejvhodnější obrázek. Vy jako autoři jen vygenerujete dost variant a správně je popíšete pomocí deskriptorů. Než se k nim dostaneme, krátce zmíním něco o množství variant.

### Kolik variant obrázků vygenerovat?

V ukázce mám obrázky tři, to by ale v praxi nestačilo. Obvykle si vypočtu šířku nejmenší a největší možné varianty. Mezi nimi pak nasekám obrázky po 200 až 400 pixelech. Samozřejmě je to někdy limitováno i uložným místem na serveru, takže i tuto mou radu prosím berte s rezervou.



## Deskriptory vlastností obrázků v `srcset`

Zatím jsem zmínil jen šířku obrázku, tedy deskriptor `w`. Ten budete používat v naprosté většině případů. Ostatní doplňují partu pro specifické scénáře použití.

### deskriptor `w`

Říká jakou šířku v pixelech obrázek má při exportu z grafického editoru nebo po výstupu z vašeho skriptu.

```html
<img srcset="small.png 600w, medium.png 1024w">
```

### deskriptor `x`

Druhý deskriptor `x` určuje připravenost souboru s obrázkem pro různé poměry `device-pixel-ratio`, například:

```html
<img srcset="image.jpg, image@2x.jpg 2x">
```

Tímto zápisem říkám, že `image@2x.jpg` má prohlížeč použít při `device-pixel-ratio` alespoň 2 a `image.jpg` ve všech hodnotách menších než 2. Výchozí deskriptor je `1x`.

Pojďme se ale podívat na atribut, který prohlížeči umožní vybírat nejen podle fyzických parametrů souborů s obrázky, ale i podle velikosti obrázku v rámci layoutu stránky: `sizes`.

## `sizes` – velikosti obrázků

V praxi totiž tak často nepotřebujeme volit obrázek podle šířky okna, ale podle šířky obrázku v rámci layoutu:

```html
<img src="small.png"
  srcset="
    small.png 600w, 
    medium.png 1024w, 
    large.png 1600w"
  sizes="
    (min-width: 768px) 300px, 
    100vw"
  >
```

Responzivní layout v ukázce je vymyšlený tak, že v oknech šířky 768 pixelů a více má obrázek šířku 300 pixelů. Ve všech ostatních pak 100 procent šířky viewportu.

<!-- AdSnippet -->

První vyhovující varianta v `sizes` vyhrává, takže na pořadí záleží. Pozor na to.

### Proč si velikosti obrázků prohlížeč nevezme z CSS?

Rozhodování, který obrázek použít, prohlížeče dělají ještě předtím než znají CSS. Oni v tu chvíli jen rychle parsují HTML a vlastně neznají ani DOM. Je to chování, které je velmi výhodné pro uživatele – urychluje načítání obrázků a vlastně celé stránky.

### Velikosti obrázků podle layoutu

Nojo, jenže v responzivním, potažmo pružném layoutu obvykle přesně nevíme jaké rozměry  budou mít obrázky v rámci konkrétní šířky okna. A hurá — tady přichází síla kombinace `sizes` s funkcí `calc()`. Pomocí ní můžeme elegantně definovat velikost obrázku relativně k layoutu mezi konkrétními breakpointy.

Opět tedy máme demo na CodePenu: [cdpn.io/e/azBmaX](http://codepen.io/machal/pen/azBmaX?editors=110). 

Nejdříve si ale raději pojďme vizualizovat jak vlastně náš layout vypadá:

![Layout příkladu pro demonstraci srcset/sizes](dist/images/original/rwd-obrazky-priklad-layout.jpg)

Do `600px` breakpointu je to jednoduché – obrázek zabírá celou šířku layoutu. Nikoliv ovšem šířku okna a tak musíme odečíst výchozí `margin` u `<body>`, který mají prohlížeče nastavený na `8px`:

```css
calc(100vw - 2*8px)
```

Od `600px` breakpointu pak musíme vyjít z CSS layoutu:

```css
@media only screen and (min-width: 600px) {
  .image {
    width: 49%;
  }
}
```

Přepsáno do funkce `calc()` to vypadá takto:

```css
calc((100vw - 2 * 8px) * 0.49)
```

A ještě v prostém jazyce:

```
(100 procent šířky viewportu - výchozí margin u <body>) 
  * 49% šířka obrázku
```

Takže celý zápis tagu `<img>` bude vypadat takto:

```html
<img src="small_600.png"
  srcset="
    small_600.png 600w, 
    medium_1024.png 1024w, 
    large_1600.png 1600w"
  sizes="
    (min-width: 600px) calc((100vw - 2*8px) * 0.49), 
    calc(100vw - 2*8px)"
  >
```

Pojďme si pro jistotu ještě shrnout zápis v `sizes`:

1. ve viewportech šířky alespoň 600 pixelů bude mít obrázek velikost `calc((100vw - 2 * 8px) * 0.49)`
2. ve všech ostatních případech – to znamená do 599 pixelů pak `calc(100vw - 2 * 8px)`

Demo na CodePenu: [cdpn.io/e/azBmaX](http://codepen.io/machal/full/azBmaX?editors=110). 

Se `srcset` a `sizes` si vystačíte v naprosté většině situací, kdy budete potřebovat sáhnout po řešení responzivních obrázků.



