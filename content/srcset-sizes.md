# Atributy responzivních obrázků: srcset a sizes

Nové atributy řeší potřebu autorů stránek zobrazovat v různých kontextech designu různé varianty obrázků.

Změna kontextu v tomto případě nejčastěji vypadá jako změna layoutu pro jinou velikost obrazovky. Může ale jít také o zobrazení stránky na zařízeních s displeji typu Retina (různými poměry `device-pixel-ratio`). Do budoucna třeba ještě o změnu úrovně zoomu na stránce nebo uživatele na pomalém připojení. 

<!-- AdSnippet -->

Na atributech `srcset` a `sizes` je hezké, že poměrně složité rozhodování, který obrázek ve které situaci použít, necháváme na prohlížeči. 

Jako autoři stránky mu jen řekneme, jaké varianty obrázku má k dispozici (`srcset`) a jak jsou veliké na jednotlivých breakpointech layoutu (`sizes`).

## `srcset`: Sada zdrojů obrázku a jejich vlastností

```html
<img src="medium_1024.png"
  srcset="
    small_600.png 600w, 
    medium_1024.png 1024w, 
    large_1600.png 1600w"
  width="200" height="200" alt="…">
```

Prohlížeči tímhle kódem sdělujeme, že jsme předgenerovali obrázek `small_600.png`. Jeho fyzická šířka (při exportu z grafického editoru) je 600 pixelů, což říká zápis `600w`, k němuž se ještě dostaneme. Dále zde máme obrázek `medium_1024.png` v šířce 1024 pixelů a `large_1600.png` v šířce 1600 pixelů. V atributu `src` pak uvádíme náhradní řešení pro prohlížeče, které  atribut `srcset` neumí.

Prohlížeč se zde při rozhodování o tom, který obrázek stáhnout a zobrazit, dívá na aktuální šířku okna. 

<!-- AdSnippet -->

Některé prohlížeče na to půjdou chytřeji a například `small_600.png` budou zobrazovat ještě kousek nad hranicí šestisetpixelového okna, protože na vizuální kvalitě obrázku to neubere.

Prohlížeč vezme v potaz i aktuální `device-pixel-ratio`. Například na zařízení s původním Retina displejem (`device-pixel-ratio=2`) pak v případě, že okno je široké 600 pixelů, stáhne a použije už největší obrázek, `large_1600.png`. Potřebuje obrázek velikosti šířky okna krát `device-pixel-ratio`. Takže kolem 1200 pixelů široký. Obrázek `medium_1024.png` by mu tedy nestačil.

V potenciálu chytrého rozhodování prohlížeče vězí krása atributu `srcset`. Prohlížeč zváží všechny informace, které má o stavu stránky k dispozici a podle toho vybere nejvhodnější obrázek. Vy jako autoři jen vygenerujete dost variant a správně je popíšete. 

Demo výše uvedeného kódu mám také na CodePenu. Nejlépe jej vyzkoušíte, když si zmenšíte okno ukázky, obnovíte stránku a pak budete okno postupně zvětšovat. [cdpn.io/e/WboGgE](http://codepen.io/machal/pen/WboGgE?editors=100)


### Kolik variant obrázků vygenerovat?

V ukázce mám obrázky tři, to by ale v praxi nestačilo. Obvykle si vypočtu šířku nejmenší a největší možné varianty. Mezi nimi pak nechám vygenerovat obrázky odstupňované po 200 až 400 pixelech. Je to samozřejmě někdy limitováno i úložným místem na serveru, takže tuto mou radu prosím berte s rezervou.

<div class="ebook-only" markdown="1">
Detailně si postup hledání variant ukážeme už za chvíli [na příkladu](priklad-media.md).
</div>


## Deskriptory vlastností obrázků v `srcset`

Zatím jsem zmínil jen šířku obrázku, tedy deskriptor `w`. Ten budete používat v naprosté většině případů. Deskriptor `x` jej doplňuje pro specifické scénáře použití.

### deskriptor `w`

Udává, jakou pixelovou šířku má ve skutečnosti soubor s obrázkem.

```html
<img srcset="
      small_600.png 600w, 
      medium_1024.png 1024w"
    width="200" height="200" alt="…">
```

Pozor, neříká nic o šířce obrázku v rámci layoutu stránky. K tomu dále slouží atribut `width` nebo případně CSS.

### deskriptor `x`

Druhý deskriptor určuje připravenost souboru s obrázkem pro různé poměry `device-pixel-ratio`, například:

```html
<img srcset="
      image.png, 
      image@2x.png 2x"
    width="200" height="200" alt="…">
```

Tímto zápisem říkám, že `image@2x.png` má prohlížeč použít při `device-pixel-ratio` alespoň 2 a `image.png` ve všech hodnotách menších než 2. Když deskriptor neuvedete, výchozí je `1x`.

Pojďme se teď ještě podívat na atribut `sizes`, který prohlížeči umožní vybírat nejen podle fyzických parametrů souborů s obrázky, ale i podle layoutu vaší stránky.

## `sizes`: Velikost obrázku ve stránce

V praxi totiž tak často nepotřebujeme, aby prohlížeč vybral obrázek podle šířky okna. Spíše podle šířky prostoru pro obrázek v rámci aktuálního layoutu stránky. A právě od toho máme atribut `sizes`:

```html
<img src="small.png"
  srcset="
    small_600.png 600w, 
    medium_1024.png 1024w, 
    large_1600.png 1600w"  
  sizes="
    (min-width: 768px) 300px, 
    100vw"
  width="200" height="200" alt="…">
```

Sledujte hodnoty v `sizes`. Responzivní layout v ukázce je vymyšlený takto:

-  V oknech šířky 768 pixelů a více se obrázek vykresluje do plochy o šířce 300 pixelů (`(min-width: 768px) 300px`).
- Ve všech ostatních velikostech okna, tedy do 767 pixelů, zabere 100 procent šířky okna (`100vw`). 

<div class="ebook-only" markdown="1">
„Volkswageny“, tedy jednotku `vw`, jsme probírali [v textu o jednotkách](jednotky.md), vzpomínáte? 
</div>

<!-- AdSnippet -->

První vyhovující varianta v `sizes` vyhrává, takže na pořadí záleží. Pozor na to.

### Proč si informaci o layoutu stránky prohlížeč nevezme z CSS?

Dobrá otázka. Rozhodnutí, který z obrázků stáhnout a zobrazit, prohlížeče dělají ještě předtím, než znají CSS. Ony v tu chvíli jen rychle parsují HTML a o stylech zatím „nevědí“. Když by na styly čekaly, zpozdí se stažení a zobrazení obrázků. Je to takhle výhodnější pro uživatele. Zkracuje to načtení obrázků a vlastně celé stránky.

### Velikosti obrázků podle layoutu

V responzivním layoutu obvykle přesně nevíme, jaké rozměry budou mít obrázky v rámci konkrétní šířky okna.  A právě tady se projeví síla kombinace `sizes` s CSS funkcí `calc()`. Definovat velikost obrázku můžeme relativně k layoutu mezi konkrétními breakpointy.

Pojďme si nejprve vizuálně přiblížit layout pro další ukázku:

<figure>
<img src="dist/images/original/rwd-obrazky-priklad-layout.jpg" alt="">
<figcaption markdown="1">    
*Layout příkladu pro demonstraci srcset/sizes*
</figcaption> 
</figure>

Do `800px` breakpointu je to jednoduché: Obrázek zabírá celou šířku layoutu. Nikoliv ovšem šířku okna, a tak musíme odečíst výchozí `margin` u `&lt;body&gt;`, který mají prohlížeče nastavený na `8px`:

```css
calc(100vw - 2 * 8px)
```

Od breakpointu `800px` pak musíme vyjít z CSS layoutu, který je zapsaný takto:

```css
@media only screen and (min-width: 800px) {
  .image {
    width: 49%;
  }
}
```

Přepsáno do funkce `calc()` to vypadá takto:

```css
calc((100vw - 2 * 8px) * 0.49)
```

Ještě v jazyce našeho kmene:

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
    (min-width: 800px) calc((100vw - 2*8px) * 0.49), 
    calc(100vw - 2*8px)"
  width="200" height="200" alt="…"  >
```

Pojďme si pro jistotu ještě shrnout celý zápis:

1. V `src` máme obrázek sloužící jako náhradní řešení pro starší prohlížeče.
2. V `srcset` máme seznam variant obrázku, které jsme předpřipravili a uložili na server.
3. Atribut `sizes` říká: na šířkách okna od 800 pixelů výše bude mít obrázek velikost `calc((100vw - 2 * 8px) * 0.49)`. Ve všech ostatních případech – to znamená do 799 pixelů – pak `calc(100vw - 2 * 8px)`.

Demo na CodePenu: [cdpn.io/e/azBmaX](http://codepen.io/machal/full/azBmaX?editors=110)

Nezapomínejte prosím na povinný atribut `alt`, který ocení vyhledávače a odečítače obrazovky pro zrakově hendikepované uživatele.

Doplňte i atribut `height`, který vylepší vykreslování stránky tím, že ještě před stažením obrázku sdělí prohlížeči, jak velký prostor pro něj má v layoutu vynechat. Nevztahujte jej tedy k pixelové výšce obrázku, ale k prostoru stránky, který si přejete pro obrázek rezervovat do chvíle, než se stáhne a zobrazí.

### „Hernajs, a proč je to tak složité?“

Nedivím se samozřejmě žádným námitkám vůči estetice a zdánlivě zbytečné složitosti autorské práce s responzivními obrázky. Moje první reakce byly stejné. Když si ale zopakujeme, že informace z CSS prohlížeči v momentě parsování HTML nijak nepomohou, asi bychom došli k řešení stejnému nebo velmi podobnému. Pokud bychom jej tedy chtěli vymýšlet znovu, což nikomu nedoporučuji.

V textu o [responzivních obrázcích](responzivni-obrazky.md) jsem zmiňoval i další alternativy. `<img srcset sizes>` ale považuji za výchozí řešení. Ta ostatní se hodí pro konkrétní a méně časté scénáře. 

<div class="ebook-only" markdown="1">
  Pojďme si rozpitvat jednu z metod pro specifické situace – novou značku `&lt;picture&gt;`.
</div>

<div class="web-only" markdown="1">
  Podívejte se také na další možnosti jak zvládnout obrázky v responzivním designu: [Kompletní průvodce obrázky v responzivním designu](responzivni-obrazky.md).
</div>


