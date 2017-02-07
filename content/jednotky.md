# Jednotky pro tvorbu webu: em, rem, procenta, px, vh, vw

Pojďme si teď shrnout všechny CSS jednotky použitelné v dnešním webdesignu. A zjistit, jak konkrétně nám mohou pomoci. 

Za základní jednotku můžeme považovat čtverčík – `em`. Dnešní weby totiž mají puzení se roztahovat do dvou směrů: 

- do šířky: pružný responzivní layout, o kterém [píšu později](responzivni-layout.md);
- na výšku: proměnlivá základní velikost písma, o které [něco povím už za chvíli](rem-em-zoom.md).

Čterčík je pružný ve všech směrech a nahrazuje fixní pixely (`px`), používané dříve takřka na vše.

Ani čtverčík ale není žádný Superman mezi CSS jednotkami. Nehodí se na vše a tak pro různé účely ještě občas budeme potřebovat i Spidermana, Batmana a další jejich kolegy a kolegyně. 

* Rozměry v dokumentu: nejvíc se hodí `rem`, občas jednotky viewportu
* Rozměr v komponentách: `em`, občas jednotky viewportu
* Media Queries: `em` 
* Dekorace (kulaté rohy, rámečky…):  všechny jednotky, nejčastěji `px`
* Vodorovné rozvržení: `%` a jednotky viewportu

Proberme si teď všechny pěkně popořadě.


## Čtverčík: `em`

Odkazuje se na velikost písma (`font-size`) daného elementu. 

Pojďme na příklad. Výchozí velikost téměř ve všech prohlížečích je 16 pixelů. V následujícím ukázce tedy bude vnější okraj zezdola také šestnáctipixelový:

```css
p { margin-bottom: 1em } /* = 16px */
```

Jen pozor, pokud jednotku `em` uvedete u vlastnosti `font-size`, není pouhým odkazem na nastavenou velikost písma, ale sama velikost písma nastavuje. Dělá to vždy relativně k rodičovskému elementu.

Jakmile tedy zkusíme u nastavení spodního okraje u nadpisu první úrovně, bude výsledek jiný:

```css
h1 { font-size: 2em } /* Výchozí CSS prohlížeče */
h1 { margin-bottom: 1em } /* = 32px */
```

Jak sami vidíte, `1em` nedává vždy stejné výsledky. Proto se s čtverčíkem pracuje hůř na úrovni samotných HTML tagů a tedy dokumentu. Někdy je prostě lepší použít jednotku `rem`.


## Kořenový čtverčík: `rem` (root `em`)

Neodkazuje se na velikost písma na nejbližším rodičovském elementu, ale v kořeni struktury dokumentu, na prvku `<html>`. Situace z příkladu výše tedy bude jiná:

```css
h1 { font-size: 2em } /* Výchozí CSS prohlížeče */
h1 { margin-bottom: 1rem } /* = 16px */
```

Kořenový čverčík je můj kamarád, protože mě nenutí v hlavě přepočítávat své hodnoty. Nehodí se ale pro komponenty, u kterých lze předpokládat, že se jejich velikost bude měnit v závislosti na umístění v layoutu.

Vysázení dokumentu v `rem` jednotkách a následné stylování komponent v `em` je skvělý způsob jak autorsky „zoomovat“ celý dokument nebo jeho jednotlivé části. 

<div class="ebook-only" markdown="1">
Více o tom píšu v části [o autorském zoomu](rem-em-zoom.md].
</div>

## Procenta: `%`

Platná a velmi často využívaná jednotka. Hlavně pro specifikaci horizontálního rozvržení, layoutu.

```css
.side { width: 25% }
```

Ve flexboxu, dnes hlavním prostředku pro tvorbu rozvržení komponent, je možné používat absolutní jednotky. Zmíním to tady jako fajnovou alternativu k procentům:

```css
.flex-1 { flex-grow: 1 }
.flex-2 { flex-grow: 2 }
```

Layout se rozdělí na tři díly. První třetiny zabírá `.flex-1`, další dvě pak `.flex-3`. Asi vidíte, že je to elegantnější, než zápis v procentech s mnoha desetinnými místy, ale vlastně znamená totéž.

<div class="ebook-only" markdown="1">
O flexboxu píšu v části [o responzivním layoutu](responzivni-layout.md] a ještě více na Vzhůru dolů. [vrdl.cz/prirucka/css3-flexbox](http://www.vzhurudolu.cz/prirucka/css3-flexbox)
</div>

## Pixel: `px`

Pixel dříve vládl, hlavně kvůli nepraktičnosti čtverčíků pro vývojáře. Dnes ale můžeme využívat praktickou `rem` jednotku. 

V dnešním pružném webdesignu je už fixní jednotka jako pixel špatně použitelná. Doporučuji jej používat jen tam, kde potřebujete precizní vyjádření v pixelech. Třeba rámeček mezi prvky navigace:

```css
.nav-item { border: 1px; }
```

<div class="ebook-only" markdown="1">
Jen pro jistotu připomínám, že už dávno nejde o hardwarový, ale takzvaný *CSS* pixel. Psal jsem o tom [v kapitole](prostredi-proc-responzivni-design.md) o prostředí responzivního designu.
</div>

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
To zajímavější ale teprve přijde. Na jednotkách viewportu můžete vystavět takzvanou [plně responzivní typografii](plne-responzivni-typografie.md), které se věnuji už za dvě podkapitoly.
</div>

