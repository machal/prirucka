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


## Všechny jednotky v jednom příkladu

TODO

http://codepen.io/machal/pen/dvdxWG

### Výchozí velikost písma v dokumentu: `%`

Jak už jsem psal, je to vždycky 16 pixelů. Pokud vám to nevyhovuje, měňte to vždy procenty:

```
html {
  font-size: 125%; /* 18px */
}
```

Pokud byste už tady použili `px`, uživatelům s horším zrakem byste znemožnili zvětšovat si výchozí písmo v prohlížečích.

### Rozměry vycházející z písma: `rem`

`font-size`

```
p { margin-bottom: 1rem; }
h1 { font-size: 2rem; }
```

### Výška řádku: číslem bez jednotky

```
h1 {
  line-height: 1.5;
}


### Rozměry pružných komponent: 

.button {
  background: #ccc;
  padding: 1em;
  display: inline-block;
}

.size-sm { font-size: .75em }
.size-lg { font-size: 1.25em }

### Typografie podle velikosti okna: `vw`

.heading {
  font-size: calc(2rem + 2vw);
}

### Media Queries: `em`

@media screen and (min-width: 30em) {
  …
}

### Layout: `%` atd.

.layout-col {
    width: 50%;
}

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
