# Atributy responzivních obrázků: srcset a sizes

Obrázky v elementu `<img>` nedávno dostaly nové atributy, které řeší potřebu autorů stránek zobrazovat v různých kontextech designu různé varianty obrázků.

Změna kontextu v tomto případě nejčastěji vypadá jako změna layoutu pro jinou velikost obrazovky. Může ale jít o zobrazení stránky na zařízeních s různými poměry `device-pixel-ratio`. Do budoucna třeba ještě uživatele zoomujícího na stránce nebo uživatele na pomalém připojení. 

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

Prohlížeči tímhle kódem sdělujeme, že jsme předgenerovali obrázek `small.png` v šířce 600 pixelů, `medium.png` v šířce 1024 pixelů a a `large.png` v šířce 1600 pixelů. V atributu `src` pak uvádíme fallback pro prohlížeče, které `srcset` neumí.

Protože zde není přítomný atribut `sizes`, prohlížeč pro rozhodování o tom, který obrázek načíst, zde bere šířku okna. 

<!-- AdSnippet -->

Některé prohlížeče na to půjdou chytřeji a například `small.png` budou zobrazovat ještě kousek nad hranicí šestisetpixelového okna, protože na vizuální kvalitě to obrázku neubere.

Prohlížeč vezme v potaz i aktuální `device-pixel-ratio` a tak třeba na původním Retina displeji (`device-pixel-ratio=2`) načte i v případě, že okno je široké 600 pixelů už ten větší obrázek: `medium.png`.

Dále se očekává, že prohlížeče načtou kvalitnější obrázek ve chvíli, kdy uživatel nad obrázkem zoomuje. Nebo mohou načítat třeba méně kvalitní obrázek na pomalém internetovém připojení. Podle mých informací to ale zatím žádný nedělá.

Ano, v potenciálu chytrého rozhodování prohlížeče vězí krása `srcset`. Prohlížeč zváží všechny informace, které má o stavu stránky k dispozici a podle toho vybere nejvhodnější obrázek. Vy jako autoři jen vygenerujete dost variant a správně je popíšete pomocí deskriptorů. Než se k nim dostaneme, krátce zmíním něco o množství variant.

Demo výšeuvedeného kódu mám také na CodePenu. [cdpn.io/e/WboGgE](http://codepen.io/machal/pen/WboGgE?editors=100)


### Kolik variant obrázků vygenerovat?

V ukázce mám obrázky tři, to by ale v praxi nestačilo. Obvykle si vypočtu šířku nejmenší a největší možné varianty. Mezi nimi pak nasekám obrázky odstupňované po 200 až 400 pixelech. Je to samozřejmě někdy limitováno i uložným místem na serveru, takže tuto mou radu prosím berte s rezervou.



## Deskriptory vlastností obrázků v `srcset`

Zatím jsem zmínil jen šířku obrázku, tedy deskriptor `w`. Ten budete používat v naprosté většině případů. Deskriptor `x` doplňuje partu pro specifické scénáře použití.

### deskriptor `w`

Udává jakou pixelovou šířku má ve skutečnosti varianta obrázku.

```html
<img srcset="small.png 600w, medium.png 1024w">
```

### deskriptor `x`

Druhý deskriptor určuje připravenost souboru s obrázkem pro různé poměry `device-pixel-ratio`, například:

```html
<img srcset="image.jpg, image@2x.jpg 2x">
```

Tímto zápisem říkám, že `image@2x.jpg` má prohlížeč použít při `device-pixel-ratio` alespoň 2 a `image.jpg` ve všech hodnotách menších než 2. Když deskriptor neuvedete, výchozí je `1x`.

Pojďme se teď ještě podívat na atribut `sizes`, který prohlížeči umožní vybírat nejen podle fyzických parametrů souborů s obrázky, ale i podle layoutu vaší stránky.

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

Sledujte hodnoty v `sizes`. Responzivní layout v ukázce je vymyšlený tak, že v oknech šířky 768 pixelů a více má obrázek šířku 300 pixelů. Ve všech ostatních (do 767 pixelů) pak 100 procent šířky viewportu.

<!-- AdSnippet -->

První vyhovující varianta v `sizes` vyhrává, takže na pořadí záleží. Pozor na to.

### Proč si velikosti obrázků prohlížeč nevezme z CSS?

Rozhodování, který obrázek použít, prohlížeče dělají ještě předtím než znají CSS. Ony v tu chvíli jen rychle parsují HTML a vlastně neznají ani DOM strukturu. Je to velmi výhodné pro uživatele: urychluje to načítání obrázků a vlastně celé stránky.

### Velikosti obrázků podle layoutu

V responzivním layoutu obvykle přesně nevíme jaké rozměry budou mít obrázky v rámci konkrétní šířky okna. A právě tady se projeví síla kombinace `sizes` s CSS funkcí `calc()`. Definovat velikost obrázku můžeme relativně k layoutu mezi konkrétními breakpointy.

Opět jsem pro vás připravil demo na CodePenu. [cdpn.io/e/azBmaX](http://codepen.io/machal/pen/azBmaX?editors=110)

Nejdříve si ale raději pojďme vizualizovat jak vlastně náš layout vypadá:

![Layout příkladu pro demonstraci srcset/sizes](dist/images/original/rwd-obrazky-priklad-layout.jpg)

Do `600px` breakpointu je to jednoduché – obrázek zabírá celou šířku layoutu. Nikoliv ovšem šířku okna a tak musíme odečíst výchozí `margin` u `<body>`, který mají prohlížeče nastavený na `8px`:

```css
calc(100vw - 2 * 8px)
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

Ještě to přepíšu do jazyka našeho kmene:

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

Pojďme si pro jistotu ještě shrnout celý zápis v `sizes`:

1. V `src` máme obrázek sloužící jako náhradní řešení pro starší prohlížeče.
2. V `srcset` máme seznam variant obrázku, které jsme předpřipravili a uložili na server.
3. Atribut `sizes` říká: ve viewportech šířky alespoň 600 pixelů pak bude mít obrázek velikost `calc((100vw - 2 * 8px) * 0.49)`. Ve všech ostatních případech – to znamená do 599 pixelů pak `calc(100vw - 2 * 8px)`.

Demo na CodePenu: [cdpn.io/e/azBmaX](http://codepen.io/machal/full/azBmaX?editors=110). 

Nezapomínejte prosím na povinný atribut `alt`. Ideálně i `height`, který vylepší vykreslování stránky tím, že ještě před stažením obrázku sdělí prohlížeči jak velký prostor má pro něj v layoutu vynechat.

### „Hernajs, a proč je to tak složité?“

Nedivím se samozřejmě žádným námitkám vůči estetice a zdánlivě zbytečné složitosti autorské práce s responzivními obrázky. Moje první reakce byly stejné. Když si ale uvědomíme, že CSS nám v momentě parsování HTML nijak nepomůže, došli bychom pravděpodobně k řešení stejnému nebo velmi podobnému.

V textu o [responzivních obrázcích](responzivni-obrazky.md) jsem zmiňoval i další alternativy. Ale s `<img srcset sizes>` si vystačíte v naprosté většině situací, kdy budete po řešení responzivních obrázků potřebovat sáhnout.

<div class="ebook-only" markdown="1">
  Ještě si ale pojďme představit řešení, které se vám v některých specifických situacích hodit může. Novou značku `<picture>`.
</div>


