# Příklad: dokument s přizpůsobivými médii

Abychom použili vědomosti nasáté v téhle kapitole, vložil jsem do příkladu veškerý mediální obsah. Podívejme se teď na něj v rozlišení dnešních běžných mobilů. 

<figure>
<img src="dist/images/original/vdwd/priklad-media-pred.jpg" alt="">
<figcaption markdown="1">    
*Příklad před aplikováním přizpůsobivosti médií*
</figcaption> 
</figure>

Text se chová hezky, ale média nám vystrkují růžky, že ano? Žádný strach, nůžky na ně brát nebudeme. Prostě zařídíme, aby se začala chovat pružněji.

Pro nedočkavce je tady výsledek:

- Otevření v prohlížeči: [vrdl.in/vdwdmed](https://www.vzhurudolu.cz/files/vdwd/media/)
- Stažení v ZIPu: [vrdl.in/vdwdmedzip](https://www.vzhurudolu.cz/files/vdwd/media.zip)

Pojďme si teď lidsky popsat, co přesně se změnilo.

## 1. SVG logo

Na logo aplikujeme trik, který jsme se naučili v podkapitole [o responzivním SVG](responzivni-svg.md). Odstraníme parametry `width` a `height`. Všechno necháme na jejich kolegovi: `viewBox`. Řešení  hledejte přímo v `index.html`.

Pro správně pružné chování v Internet Exploreru ještě doplníme rodičovský kontejner a trik se zachováním poměru stran pomocí `padding-bottom`. To hledejte v souboru `style/ui/logo.css`.


## 2. Obrázky produktu

První krok je jednoduchý: pružné přizpůsobení velikosti okna. Toho dosáhneme kódem pro obrázky, který jsme se naučili [na začátku kapitoly](pruzna-media.md). Najdete jej v souboru `style/media/images.css`.

Druhý krok zajistí, aby se načítaly také správné varianty obrázků na různě velkých oknech a poměrech `device-pixel-ratio`.

Pojďme si tady projít celý proces, protože jinde v knize tuto část popisuji spíše obecně.

### Vložíme obrázky v maximálním rozlišení

Obsahové obrázky webu se hodí ukládat v co největším rozlišení. Nikdy totiž nevíte, jak budou vypadat displeje budoucnosti. Nám se je podařilo ulovit v šířkách kolem dvou tisíc pixelů. 

### Najdeme nejmenší a největší velikost

Nejmenší velikost obrazovky aktuálních mobilů je 240 pixelů. Dnes už se moc nedělají, ale nějaký podíl na trhu ještě mají. V tomto rozlišení mají obrázky po odečtení okrajů šířku 192 pixelů. Zaokrouhlíme si to na 200 pixelů a to bude naše nejmenší varianta.

Maximální šířka layoutu je nastavená na `30em`, což je 540 pixelů. Kvůli „Retina“ displejům budeme počítat s dvojnásobkem, tedy 1080 pixelů. Obrázky je vhodné testovat i na zařízeních s více než dvojnásobným poměrem hardwarových a CSS pixelů, ale mám zkušenost, že dvojnásobek obvykle postačuje.

### Vyrobíme varianty a uvedeme je do `srcset`

Jak jsem psal v textu o [srcset a sizes](srcset-sizes.md), varianty generuji po dvě stě a tři sta pixelech. Můžu to zařídit nějakou automatizací na svém počítači nebo na serveru. Pro jednorázovou práci ale doporučuji výborný generátor variant obrázků „Responsive Image Breakpoints Generator“. [responsivebreakpoints.com](http://www.responsivebreakpoints.com/)

Ten varianty chytře vytváří podle minimálního kroku datové velikosti. Když jsem nastavil 30kB, dostal jsem následující verze prvního obrázku:

| Šířka v pixelech | Velikost v kB |
| ----- | -------- |
| 200 | 12 |
| 442 | 43 |
| 617 | 72 |
| 762 | 100  |
| 903 | 129  |
| 1036 | 160  |
| 1080 | 180  |

Zapsáno v kódu to vypadá takto:

```html
<img
  src="boty-1_617.jpg"
  srcset="
    boty-1_200.jpg 200w,
    boty-1_442.jpg 442w,
    boty-1_617.jpg 617w,
    boty-1_762.jpg 762w,
    boty-1_903.jpg 903w,
    boty-1_1036.jpg 1036w,
    boty-1_1080.jpg 1080w"
  alt="Dětské celoroční trekové boty Fare - pohled ze strany"
  width="520" height="520">
```

Pro další dva obrázky to bude vypadat trochu jinak. Podívejte se pak do HTML zdroje nebo na odpovídající commit na Githubu. [git.io/vDVjw](https://github.com/machal/vdwd-example/commit/e19e60989a520cca57cc94fa4c2b90886b64e01f)

### Nastavíme velikost obrázku v layoutu: `sizes`

Layout a velikost obrázků v něm jsou v tuto chvíli jednoduše zjistitelné. Stačí vzít vývojářské nástroje, zmenšit okno a postupně ho zvětšovat. Všechny body zlomu layoutu tam krásně uvidíte a z vývojářských nástrojů snadno vyčtete patřičné rozměry.

- Na malých displejích zabírá layout celou obrazovku bez postranních okrajů a obrázek jakbysmet: `calc(100vw - 2 * 1.5rem)`.
- Od šířky okna kolem 530 pixelů už se dále nezvětšuje. Šířka obrázku tam zůstává fixně na `480px`.
- Od 640 pixelů je zase obrázek široký `540px`.

Teď si tři typy layoutu zapišme do atributu `sizes`:

```img
<img
  src="boty-1_617.jpg"
  srcset="…"
  sizes="
    (min-width: 640px) 540px,
    (min-width: 530px) 480px,
    calc(100vw - 2 * 1.5rem)"
  alt="…"
  width="520" height="520">
```

Prohlížeč uplatní první vyhovující pravidlo, proto jsem typy layoutu řadil od největších obrazovek po nejmenší.


## 3. Tabulka

V tomto rozlišení ještě vypadá hezky. Ale není tabulky, která by se někde nerozpadla. Stačilo by okno zmenšit o trochu více. Aplikujeme řešení pro posun do stran [z podkapitoly o tabulkách](responzivni-tabulky.md).

Uvidíte to v souboru `style/media/rwd-table.css` a následujícím commitu. [git.io/vDwJJ](https://github.com/machal/vdwd-example/commit/3d629607da1bedc9e9a8d9750d31c6527924ba79)


## 4. Vkládané video

Stačí vzpomenout na „Pružné vkládané elementy se zachováním poměru stran“ [ze začátku této kapitoly](pruzna-media.md). A opět se o slovo hlásí trik s `padding-bottom`, který ostatně v responzivním designu budete potřebovat velmi často.

Tuto věc má v našem případě na starost komponenta `style/media/rwd-object.css`.

Aktuální stav příkladu si můžete naživo prohlédnout nebo stáhnout na následujících adresách.

- Otevření v prohlížeči: [vrdl.in/vdwdmed](https://www.vzhurudolu.cz/files/vdwd/media/)
- Stažení v ZIPu: [vrdl.in/vdwdmedzip](https://www.vzhurudolu.cz/files/vdwd/media.zip)

Dostali jsme se tedy do stavu naformátovaného dokumentu s ošetřeným mediálním obsahem. Teď už pojďme navrhnout pokročilejší prvky uživatelského rozhraní. A pak i layout. Nejdřív ale znalosti, které byste měli mít, pokud si na to chcete troufnout.
