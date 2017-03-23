# Jednotky pro tvorbu webu: em, rem, procenta, px, vh, vw

Pojďme si teď shrnout všechny CSS jednotky použitelné v dnešním webdesignu. A na příkladu zjistit, jak konkrétně nám mohou pomoci. 

Za základní jednotku pro svůj způsob práce považuji `rem`. Ani ten ale není žádný Superman mezi CSS jednotkami. Nehodí se na vše a tak pro různé účely ještě občas budeme potřebovat i Spidermana, Batmana a další jejich kolegy a kolegyně. 



## Rychlý přehled použitelných jednotek

| Jednotka | Jak počítá délku? |
| -------- | ----------------- | 
| `rem` | relativně k velikosti písma v kořeni dokumentu `<html>` |
| `em`  | relativně k velikosti písma elementu |
| `%`   | procenta, relativně k rodičovskému elementu |
| `px`  | pixel (lépe ale přepočtený nebo také CSS pixel) |
| `vw`  | procento ze šířky okna prohlížeče |
| `vh`  | procento z výšky okna prohlížeče |

Existují samozřejmě ještě další jednotky: namátkou `pt`, `ex` nebo `vmax`. Buď je ale využívám málo nebo vůbec, takže je pro zjednodušení úplně vynechám.  Dobrý přehled v češtině ale je na Jak psát web. [vrdl.in/btoxk](https://www.jakpsatweb.cz/css/css-jednotky.html)


## Všechny jednotky v jednom příkladu

Připravil jsem jednoduché demo, ve kterém jsou všechny nejčastější nastavení velikostí v CSS. Projdeme si to všechno v textu, ale tady je online, pokud byste to nemohli vydržet: [cdpn.io/e/dvdxWG](http://codepen.io/machal/pen/dvdxWG)

### Výchozí velikost písma v dokumentu: `%`

Jak už jsem psal, je to vždycky 16 pixelů. Pokud vám nevyhovuje, měňte to  pružnými jednotkami, například procenty:

```
html {
  font-size: 125%; /* 18px */
}
```

Pokud byste už tady použili `px`, uživatelům byste znemožnili zvětšovat si výchozí písmo v prohlížečích. Dělají to lidé s horším zrakem nebo méně kvalitními displeji. Moc jich není, ale je škoda jim házet klacky pod nohy. Například v Chrome je to volba „Velikost písma“ v rozšířeném Nastavení. [vrdl.in/uzx6o](https://support.google.com/chrome/answer/96810?hl=cs)

### Rozměry vycházející z písma: `rem`

`font-size`, `margin`, `padding`, ale i další vlastnosti v dokumentu i komponentách prostě nastavuji v `rem`.

```
p { margin-bottom: 1rem; }
h1 { font-size: 2rem; }
```

Je to výhodné i z pohledu vývojáře. V `1rem` máte uloženou základní velikost písma a nemusíte si pamatovat, jestli je to  12, 14, 16 nebo kolik vlastně pixelů. 

### Rozměry pružných komponent: `em`

`rem` je tedy pro mě výchozí jednotka. Občas ale využiji `em`, které se odkazuje na velikost písma, nikoliv v dokumentu, ale na daném elementu.

```css
.button {
  font-size: .75em;
  padding: 1em;
}
```

Na některých projektech mám pak třídy, které umí pak umí zvětšovat či zmenšovat takto pružně definované komponenty:

```css
.size-sm { font-size: .75em }
.size-lg { font-size: 1.25em }
```

Takto zapsané tlačítko pak bude o čtvrtinu větší než je jeho výchozí stav:

```html
<button class="button size-lg">
  Tlačítko
</button>
```

Naživo to je hezky vidět v příkladu: [cdpn.io/e/dvdxWG](http://codepen.io/machal/pen/dvdxWG).


### Media Queries: `em`

V textu [o Media Queries](media-queries-tipy.md) píšu, proč nepoužít pixely (opět kvůli zvětšování písma) a `rem` (kvůli chybě v Safari). Proto nám zbývají staré dobré `em`:

```css
@media screen and (min-width: 30em) {
  …
}
```

Pokud se i vám v dotazech lépe pracuje s pixely, je zde plugin „postcss-em-media-query". [github.com/niksy/postcss-em-media-query](https://github.com/niksy/postcss-em-media-query)

### Výška řádku: číslem bez jednotky

Hodnota bez jednotky je pro výšku řádku unikum:

```
h1 {
  line-height: 1.5;
}
```

Proč je to lepší než nastavení „natvrdo“ v `rem`, `em` nebo `px`? Pokud autorsky (například pro určité velikosti oken prohlížeče) změníte velikost písma, nemusíte zároveň přenastavovat výšku řádku.

### Layout: `%` atd.

Pro layout se dobře hodí procenta. Raději připomínám, že se vždy počítají ze šířky rodiče:

```css
.layout-col {
    width: 50%;
}
```

Použitelných jednotek pro layout je ale více. Procenta nebo `vw` se roztahují podle šířky okna. `rem` a `em` podle velikosti písma. Občas se hodí pixely. A ve flexboxu je možné používat i absolutní jednotky. [vrdl.in/bm26n](http://www.vzhurudolu.cz/prirucka/css3-flexbox-polozky#flex) 


### Typografie podle velikosti okna: `vw`

Můžeme potřebovat i zvětšování a změnšování velikosti písma podle šířky nebo výšky okna. Pak si vzpomeňte na jednotky `vw` (viewport width) nebo `vh` (viewport  height).

Například tento nadpis z příkladu bude mít velikost písma `2rem` a k tomu vždy dvě procenta ze šířky okna:

```css
.heading {
  font-size: calc(2rem + 2vw);
}
```

Těmito triky se pak zabývám ještě v textu o [plně responzivní typografii](plne-responzivni-typografie.md). Pokud vidíte funkci `calc()` prvně, následujte odkaz. [vrdl.cz/prirucka/css3-calc](http://www.vzhurudolu.cz/prirucka/css3-calc)

Na závěr ještě jeden odkaz na příklad: [cdpn.io/e/dvdxWG](http://codepen.io/machal/pen/dvdxWG).


## `rem` (root `em`)

Odkazuje se velikost písma v kořeni struktury dokumentu, na prvku `<html>`. Pokud ji sami nijak nenastavíte, je vždy `16px`. 

Proto 

```css
h1 { 
  font-size: 2rem;      /* = 32px */
  margin-bottom: 1rem; /* = 16px */
}  
```

`rem` používám pro všechny velikosti vycházející z písma: nejen jeho samotnou velikost, ale také vnější i vnitřní okraje.  

Mám ho raději než `em`, protože je ve všech částech dokumentu stejně velký. Nehodí se ale pro komponenty, u kterých lze předpokládat, že se jejich velikost bude měnit v závislosti na umístění v layoutu. Na ty je `em` skvělé.

Vysázení dokumentu v `rem` jednotkách a následné stylování komponent v `em` je skvělý způsob jak autorsky „zoomovat“ celý dokument nebo jeho jednotlivé části. Více o tom píšu v textu [o autorském zoomu](rem-em-zoom.md].

Nevýhoda `rem` leží ve faktu, že jej nepodporuje Explorer 8 a starší. To ale jde vyřešit automatickým přidáním `px` řešení, například pomocí nástroje PixRem. [vrdl.in/ivuk8](https://www.npmjs.com/package/pixrem)


## `em`

Odkazuje se na velikost písma (`font-size`) daného elementu. V praxi to znamená, že `1em` nebude ve všech částech designu webu znamenat totéž.

V následujícím ukázce tedy bude vnější okraj zezdola také šestnáctipixelový. 

```css
p { margin-bottom: 1em } /* = 16px */
```

Funguje to stejně jako u `rem`, že ano? Pokud však jednotku `em` uvedete u vlastnosti `font-size`, sama velikost písma nastavuje. A najednou `1em` znamená něco jiného:

```css
h1 { 
  font-size: 2em;      /* = 32px */
  margin-bottom: 1em;  /* = 32px! */
}  
```

Proto s `em` se pracuje hůř na úrovni samotných HTML tagů a tedy dokumentu. Většinou je prostě lepší použít jednotku `rem`. `em` se naopak hodí na stylování komponent, které chceme na různých místech designu webu používat v různých velikostech. Níže to ukazuji na příkladu.

Mimochodem, `em` není „čtverčík“. Tahle typografická jednotka se totiž počítá ze šířky velkého „M“. `em` by pak bylo pro různá písma různě velké. W3C nakonec `em` definovalo jinak a proto je jeho výchozí velikost ve všech prohlížečích a při použití jakéhokoliv písma stejná. [vrdl.in/oyqwn](https://diskuse.jakpsatweb.cz/?action=vthread&forum=19&topic=138070)


## Procenta: `%`

Platná a velmi často využívaná jednotka. Hlavně pro specifikaci horizontálního rozvržení, layoutu. Počítají se z rodičovského prvku.

```css
.side { 
  width: 25%; 
}
```

Procenta se také hodí na nastavení výchozí velikosti písma v dokumentu. V příkladu dole je to vidět.


## Pixel: `px`

Pixel dříve vládl, hlavně kvůli nepraktičnosti `em` pro vývojáře. Dnes ale můžeme využívat praktickou `rem` jednotku. 

V dnešním pružném webdesignu je už fixní jednotka jako pixel špatně použitelná. Doporučuji jej používat jen tam, kde potřebujete precizní vyjádření v pixelech. Třeba rámeček mezi prvky navigace:

```css
.nav-item { border: 1px; }
```

<div class="ebook-only" markdown="1">
Jen pro jistotu připomínám, že už dávno nejde o hardwarový, ale takzvaný *CSS pixel*. Psal jsem o tom [v kapitole](prostredi-proc-responzivni-design.md) o prostředí responzivního designu.
</div>

### Proč prostě na všechno nepoužívat pixely?

Důvodů je několik. Všechny vyplývají z toho, že pixel nelze autorsky ani uživatelsky zvětšit nebo zmenšit. Z tohoto pohledu jde o jedinou fixní jednotku z všech zde uvedených.

Rozměry prvků definované v `px` nelze zvětšit uživateským zvětšením písma (nepleťte s zoomování, to zvětšuje vše). Nezvětšíte jej ani jako autoři ani pomocí změny velikosti písma celého dokumentu v určitých rozlišeních. Ani lokální změnou velikostí písma. Mrkněte se na příklad, tam to uvidíte.

Media Queries definované v `px` se vám po uživatelském zvětšení písma také rozpadnou. Budu o tom psát [v části o Media Queries](media-queries-tipy.md).


## Jednotky viewportu: `vw`, `vh` a další

Umožňují definovat rozměry v CSS relativně k velikosti viewportu, zjednodušeně řečeno výšce nebo šířce okna. Na rozdíl od procent se tedy neodkazují na rodiče, ale na celé okno.

* `1vw` označuje setinu šířky viewportu
* `1vh` označuje setinu výšky viewportu

Nejčastěji používám pro roztažení plochy layoutu na celou výšku okna:

```css
.container {
  height: 100vh;
}
```

<div class="ebook-only" markdown="1">
To nejzajímavější ale teprve přijde. Na jednotkách viewportu můžete vystavět takzvanou [plně responzivní typografii](plne-responzivni-typografie.md), které se věnuji už v přespříští podkapitole. Nejprve ale trochu slíbený příklad.
</div>



+ flex


TODO

* Velikost písma: nejvíc se hodí `rem`, občas jednotky viewportu
* Rozměry v komponentách: `em`, občas jednotky viewportu
* Media Queries: `em` 
* Dekorace (kulaté rohy, rámečky…):  všechny jednotky, nejčastěji `px`
* Vodorovné rozvržení: `%` a jednotky viewportu

TODO 

http://codepen.io/machal/pen/dvdxWG
- rem hlavní
- pozor jeden ze způsobů jak to dělat
- jiné pohledy
- neopakovat se
- obrázek
- do příkladu nezoomovatelnou komponentu
- TODO workflow bez pružné typografie
