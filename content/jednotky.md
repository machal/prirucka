# Jednotky pro tvorbu webu: em, rem, procenta, px, vh, vw

Pojďme si teď shrnout všechny CSS jednotky použitelné v dnešním webdesignu. A zjistit, jak konkrétně nám mohou pomoci. V příkladu pak si jejich nasazení ukážeme v praxi.

Za základní jednotku můžeme dnes považovat čtverčík – `em`. Dnešní weby mají puzení se roztahovat nejen do šířky (responzivní chování), ale také na výšku (proměnlivá základní velikost písma). Čterčík je dokonale pružný a nahrazuje fixní pixely (px), používané dříve takřka na vše.

Pro různé účely se nám hodí různé jednotky.

* Typografie a svislé rozměry: hlavně em nebo rem. 
* Media Queries: `em`, zapisovat je možné v `px`
* Dekorace: `em`, `rem` nebo `px` 
* Vodorovné rozvržení: procenta, `vw`, `vh`, `vmin`, `vmax`

Když to zjednoduším, em je výchozí jednotka. Ostatní používám jen v opodstatněných situacích.

## Čtverčík: em

Vypočítaná velikost písma (`font-size`) daného elementu. Pokud je tedy výchozí velikost téměř ve všech prohlížečích 16 pixelů, pak vnější okraj zezdola bude v následnujícím příkladu také 16px:

``css
p { margin-bottom: 1em } /* = 16px */
```

Je tady ale výjimka. Jednotka em uvedená u vlastnosti font-size pak není pouhým odkazem na nastavenou velikost písma. Sama totiž velikost písma nastavuje a to relativně k rodičovskému elementu.

Jakmile tedy zkusíme u nastavení spodního okraje u nadpisu první úrovně, bude výsledek jiný:

``css
h1 { font-size: 2em } /* Výchozí CSS prohlížeče */
h1 { margin-bottom: 1em } /* = 32px */
```

Jak sami vidíte, 1em nedává vždy stejné výsledky. Proto se s čtverčíkem pracuje hůř. Někdy je lepší použít jednotku rem.

## Kořenový čtverčík = root em = rem

Jednotka rem se neodkazuje na nejbližší rodičovský element, ale na velikost písma nastavenou v kořeni struktury dokumentu. Situace z příkladu výše tedy bude jiná:

```css
h1 { font-size: 2em } /* Výchozí CSS prohlížeče */
h1 { margin-bottom: 1rem } /* = 16px */
```

Kořenový čverčík je můj kamarád, protože mě nenutí v hlavě přepočítávat své hodnoty. Nehodí se ale pro komponenty, u kterých lze předpokládat, že se jejich velikost bude měnit v závislosti na umístění v layoutu.

Více informací o rem: [vrdl.cz/prirucka/css3-jednotky#rem](http://www.vzhurudolu.cz/prirucka/css3-jednotky#rem)

## Procenta

Platná a velmi často využívaná jednotka. Hlavně pro specifikaci horizontálního rozvržení, layoutu.

```css
.side { width: 25%; }
```

## Pixel: px

Pixel dříve vládl, hlavně kvůli nepraktičnosti čtverčíků. Dnes ale máme rem a pro dnešního pružné webdesignu je pro fixní jednotka jako pixel dost nepoužitelná. Doporučuji jej používat jen tam, kde potřebujete precizní vyjádření v pixelech. Třeba rámeček mezi prvky navigace:

```css
.nav-item { border-right: 1px solid white; }
```

Jen připomínám, že už dávno nejde o hardwarový pixel. Bavíme se o „CSS pixelu“. [vrdl.cz/prirucka/css-pixel](http://www.vzhurudolu.cz/prirucka/css-pixel)

## Jednotky viewportu: vw a vh

Umožňují definovat rozměry v CSS relativně k velikosti viewportu, zjednodušeně řečeno výšce nebo šířce okna. Na rozdíl od procent se tedy neodkazují na rodiče, ale na celé okno.

* `1vw` označuje setinu šířky viewportu
* `1vh` označuje setinu výšky viewportu

Nejčastěji používám pro roztažení plochy layoutu na celou výšku okna:

```css
.container {
  height: 100vh;
}
```

Více o `vw`, `vh`, ale i `vmax` a `vmin`: [vrdl.cz/prirucka/css3-jednotky#jednotky-viewportu-vw-vh-vmin-vmax](http://www.vzhurudolu.cz/prirucka/css3-jednotky#jednotky-viewportu-vw-vh-vmin-vmax)

