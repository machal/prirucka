# Jednotky pro tvorbu webu: em, rem, %, px, vh, vw

Pojďme si tady shrnout všechny CSS jednotky použitelné v dnešním webdesignu. A na příkladu ukázat, k čemu se která hodí. 

Za základní jednotku pro svůj způsob práce považuji jednotku `rem`. Ani ta ale není žádný Superman mezi CSS jednotkami. Prostě se nehodí na vše. A tak pro různé účely ještě občas budeme potřebovat i Spidermana, Batmana a další jejich kolegy a kolegyně. 



## Rychlý přehled použitelných jednotek

| Jednotka | Jak počítá rozměr? |
| -------- | ----------------- | 
| `rem` | relativně k velikosti písma na prvku `<html>` |
| `em`  | relativně k velikosti písma na elementu |
| `px`  | pixel (lépe ale přepočtený nebo také CSS pixel) |
| `%`   | procenta relativně k rodičovskému elementu |
| `vw`  | procento ze šířky okna prohlížeče |
| `vh`  | procento z výšky okna prohlížeče |

Existují samozřejmě ještě další jednotky: namátkou `pt`, `ex` nebo `vmax`. Buď je ale využívám málo nebo vůbec, takže pro zjednodušení je úplně vynechám.  Dobrý přehled všech jednotek je v češtině na Jak psát web. [vrdl.in/btoxk](https://www.jakpsatweb.cz/css/css-jednotky.html)


Teď prakticky. Připravil jsem jednoduché demo, ve kterém jsou všechny nejčastější scénáře nastavování rozměrů v CSS. Projdeme si to v textu, ale tady je ještě online: [cdpn.io/e/dvdxWG](http://codepen.io/machal/pen/dvdxWG).


## Základní velikost písma v dokumentu: `%`

Výchozí velikost písma je v drtivé většině prohlížečů `16px`. Existují ale méně významné prohlížeče, které velikost písma nastavují jinak. Prostě tak, aby se nám na konkrétním zařízení lépe četlo. Například prohlížeč v Kindle 3 měl výchozí velikost písma `26px`. [vrdl.in/16px](https://nicolas-hoizey.com/2016/03/people-don-t-change-the-default-16px-font-size-in-their-browser.html)

Pokud vám výchozí velikost písma nevyhovuje, změňte to  pružnými jednotkami, například procenty:

```
html {
  font-size: 125%; 
}
```

Nastavíte tak o čtvrtinu větší písmo než je výchozí. U naprosté většiny prohlížečů tedy `20px`.

### Proč tady nepoužít `px`?

Pokud byste to udělali, vašim milým uživatelům znemožníte zvětšovat si výchozí písmo v prohlížečích. Pozor, nebavíme se o „zoomování“ ale zvětšení velikosti písma pro všechny weby. Ano, ještě stále to v prohlížečích existuje. A ano, lidí to používají. Dělají to lidé s horším zrakem nebo méně kvalitními displeji. Například v Chrome je to volba „Velikost písma“ v rozšířeném Nastavení. [vrdl.in/1gcz0](http://www.computerhope.com/issues/ch000779.htm)

Moc takových lidí není, jasně že ne. Ale proč je ignorovat? Měli bychom se snažit dělat weby opravdu pro všechny. 


## Rozměry vycházející z velikosti písma: `rem`

`font-size`, `margin`, `padding`, ale i další vlastnosti v dokumentu a komponentách prostě nastavuji v `rem`.

```
p { margin-bottom: 1rem; }
h1 { font-size: 2rem; }
```

Je to výhodné i z pohledu vývojáře: 

- V `1rem` máte uloženou základní velikost písma a nemusíte si pamatovat, jestli je to  12, 14, 16 nebo kolik vlastně pixelů. 
- Šířka layoutu zůstane nastavená [podle optimální délky textu](typografie.md), i když si uživatel písmo zvětší.
- `rem` vám pomohou při [autorském zvětšování dokumentu](rem-em-zoom.md) na určitých velikostech okna prohlížeče.

Nevýhoda `rem` leží ve faktu, že jej nepodporuje Explorer 8 a starší. To ale jde vyřešit automatickým přidáním `px` řešení, například pomocí nástroje PixRem. [vrdl.in/ivuk8](https://www.npmjs.com/package/pixrem)


### Proč tady nepoužít `px`?

Možná jste zvyklí při převodu designu do kódu pracovat v `px`. Velikosti písma možná máte uložené v proměnných CSS preprocesorů a zvětšování a zmenšování v layoutu nepoužíváte. Moc vám to nedporučuji, ale když už to chcete udělat, nenastavuje v `px` prosím alespoň tu velikosti písma.

`rem` je tedy pro mě výchozí jednotka. Občas se mi ale hodí `em`.


## Rozměry pružných komponent: `em`

`em` se vztahuje na velikost písma elementu, nikoliv dokumentu.

```css
.button {
  font-size: .75em;
  padding: 1em;
}
```

Na některých projektech mám třídy, které umí zvětšovat či zmenšovat takto pružně definované komponenty. Například `.size-sm` pro zmenšení či `.size-lg` pro zvětšení:

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

Komponenta také může velikostně prizpůsobit rodiči:

```html
<div class="size-sm">
  <button class="button">
    Tlačítko
  </button>
</div>
```

Naživo to je hezky vidět v příkladu: [cdpn.io/e/dvdxWG](http://codepen.io/machal/pen/dvdxWG).

### Jaký je přesně rozdíl mezi `rem` a `em`?

`rem` je „root `em`“ a odkazuje se vždy ke kořeni dokumentu. 

- `1rem` bude vždy znamenat totéž. Pokud nezměníte výchozí velikost písma, bude to `16px`. 
- Rozměr `1em` naproti tomu určuje velikosti písma elementu.

![rem vs em](dist/images/original/rem-vs-em.jpg)

*`padding` nastavený v `rem` zůstává stejný. Ten druhý, nastavený v `em`, přepočítává svůj rozměr podle velikosti písma prvku. [cdpn.io/e/aJKYJJ](http://codepen.io/machal/pen/aJKYJJ?editors=1100)* 


### `em` není čtverčík

„Čtverčík“ jako typografická jednotka se totiž počítá ze šířky velkého „M“. `em` by pak bylo pro různá písma různě velké. W3C nakonec `em` definovalo jinak a proto je jeho výchozí velikost ve všech prohlížečích a při použití jakéhokoliv písma stejná. [vrdl.in/oyqwn](https://diskuse.jakpsatweb.cz/?action=vthread&forum=19&topic=138070)


## Media Queries: `em`

V textu [o Media Queries](media-queries-tipy.md) píšu, proč nepoužít pixely (opět kvůli zvětšování písma) a `rem` (kvůli chybě v Safari). Proto nám zbývají zase dobré `em`:

```css
@media screen and (min-width: 30em) {
  …
}
```

Pokud se i vám v dotazech lépe pracuje s pixely, je zde plugin „postcss-em-media-query". [github.com/niksy/postcss-em-media-query](https://github.com/niksy/postcss-em-media-query)


## Výška řádku: číslem bez jednotky

Hodnota bez jednotky je pro výšku řádku unikum:

```
h1 {
  line-height: 1.5;
}
```

Proč je to lepší než nastavení „natvrdo“ v `rem`, `em` nebo `px`? Pokud autorsky (například pro určité velikosti oken prohlížeče) změníte velikost písma, nemusíte pak už přenastavovat výšku řádku.


## Layout: `%` atd.

Pro layout se dobře hodí procenta. Raději připomínám, že se vždy počítají ze šířky rodiče:

```css
.layout-col {
    width: 50%;
}
```

Použitelných jednotek pro layout je ale více. Procenta nebo `vw` se roztahují podle šířky okna. `rem` a `em` podle velikosti písma. Občas se hodí i `px`. A ve flexboxu je možné používat i absolutní jednotky. [vrdl.in/bm26n](http://www.vzhurudolu.cz/prirucka/css3-flexbox-polozky#flex) 

## Rámečky, dekorace: `px`

Doporučuji jej používat jen tam, kde potřebujete precizní vyjádření v pixelech. Třeba pro rámečky mezi prvky navigace:

```css
.nav-item { border-left: 1px solid white; }
```

<div class="ebook-only" markdown="1">
Jen pro jistotu připomínám, že už dávno nejde o hardwarový, ale takzvaný *CSS pixel*. Psal jsem o tom [v kapitole](prostredi-proc-responzivni-design.md) o prostředí responzivního designu.
</div>


## Typografie podle velikosti okna: `vw`

Můžeme potřebovat i zvětšování a změnšování velikosti písma podle šířky nebo výšky okna. Pak si vzpomeňte na jednotky `vw` (viewport width) nebo `vh` (viewport  height).

Například tento nadpis z příkladu bude mít velikost písma `2rem` a k tomu vždy dvě procenta ze šířky okna:

```css
.heading {
  font-size: calc(2rem + 2vw);
}
```

Těmito triky se pak zabývám ještě v textu o [plně responzivní typografii](plne-responzivni-typografie.md). Pokud vidíte funkci `calc()` prvně, následujte odkaz. [vrdl.cz/prirucka/css3-calc](http://www.vzhurudolu.cz/prirucka/css3-calc)

Na závěr ještě jeden odkaz na příklad: [cdpn.io/e/dvdxWG](http://codepen.io/machal/pen/dvdxWG).

