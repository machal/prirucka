# Jednotky pro tvorbu webu: em, rem, procenta, px, vh, vw

Pojďme si teď shrnout všechny CSS jednotky použitelné v dnešním webdesignu. A zjistit, jak konkrétně nám mohou pomoci. 

<div class="ebook-only" markdown="1">
V příkladu pak si jejich nasazení ukážeme v praxi.
</div>

Za základní jednotku můžeme považovat čtverčík – `em`. Dnešní weby totiž mají mají puzení se roztahovat nejen do šířky (pružný responzivní layout), ale také na výšku (proměnlivá základní velikost písma). Čterčík je dokonale pružný a nahrazuje fixní pixely (`px`), používané dříve takřka na vše.

Ani čtverčík se nehodí na vše a tak pro různé účely potřebujeme různé jednotky. 

* Rozměry v dokumentu: `rem`, občas jednotky viewportu
* Rozměr v komponentách: `em`, občas jednotky viewportu
* Media Queries: `em` 
* Dekorace (kulaté rohy, rámečky…):  všechny jednotky, nejčastěji `px`
* Vodorovné rozvržení: `%` a jednotky viewportu

Když to zjednoduším, `em` je hlavní jednotka a ostatní používám jen v opodstatněných situacích. Proberme si teď všechny pěkně popořadě.

## Čtverčík: `em`

Vypočítaná velikost písma (`font-size`) daného elementu. Výchozí velikost téměř ve všech prohlížečích je 15 pixelů, pak vnější okraj zezdola bude v následnujícím příkladu také 16px:

```css
p { margin-bottom: 1em } /* = 16px */
```

Je tady ale výjimka. Jednotka `em` uvedená u vlastnosti `font-size` není pouhým odkazem na nastavenou velikost písma. Sama totiž velikost písma nastavuje a to relativně k rodičovskému elementu.

Jakmile tedy zkusíme u nastavení spodního okraje u nadpisu první úrovně, bude výsledek jiný:

```css
h1 { font-size: 2em } /* Výchozí CSS prohlížeče */
h1 { margin-bottom: 1em } /* = 32px */
```

Jak sami vidíte, `1em` nedává vždy stejné výsledky. Proto se s čtverčíkem pracuje hůř při odkazování na dokument. Někdy je lepší použít jednotku `rem`.

## Kořenový čtverčík: `rem` (root `em`)

Neodkazuje se na velikost písma na nejbližším rodičovském elementu, ale v kořeni struktury dokumentu, na prvku `<html>`. Situace z předchozího příkladu výše tedy bude jiná:

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

Ve flexboxu, dnes hlavním prostředku pro tvorbu rozvržení komponent, je možné používat absolutní jednotky. Zmíním to tady jako častou alternativu k procentům:

```css
.flex-1 { flex-grow: 1 }
.flex-2 { flex-grow: 2 }
```

Layout se rozdělí na tři díly. První třetiny zabírá `.flex-1`, další dvě pak `.flex-3`. Asi vidíte, že je to elegantnější, než zápis v procentech, ale vlastně znamená totéž.

<div class="ebook-only" markdown="1">
O flexboxu píšu v části [o responzivním layoutu](responzivni-layout.md] a ještě více na Vzhůru dolů. [vrdl.cz/prirucka/css3-flexbox](http://www.vzhurudolu.cz/prirucka/css3-flexbox)
</div>

## Pixel: `px`

Pixel dříve vládl, hlavně kvůli nepraktičnosti čtverčíků pro vývojáře. Dnes ale máme praktickou `rem` jednotku. V dnešním pružném webdesignu je navíc fixní jednotka jako pixel špatně použitelná. Doporučuji jej používat jen tam, kde potřebujete precizní vyjádření v pixelech. Třeba rámeček mezi prvky navigace:

```css
.nav-item { border-right: 1px solid white; }
```

<div class="ebook-only" markdown="1">
Jen připomínám, že už dávno nejde o hardwarový, ale takzvaný *CSS* pixel. Psal jsem o tom [v kapitole](prostredi-proc-responzivni-design.md) o prostředí responzivního designu.
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
Na jednotkách viewportu jde vystavět takzvanou [plně responzivní typografii](plne-responzivni-typografie.md), které se věnujeme hned v dalším textu.
</div>

