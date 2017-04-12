# Jednotky pro tvorbu webu: em, rem, %, px, vh, vw

Pojďme si tady shrnout všechny CSS jednotky použitelné v dnešním webdesignu. A na příkladu ukázat, k čemu se která hodí. 

Za základní jednotku pro svůj způsob práce považuji jednotku `rem`, kořenové `em`. 

Ani `rem` není žádný Superman mezi CSS jednotkami. Prostě se nehodí na vše. Pro různé účely ještě budeme potřebovat i Spidermana, Batmana a další jejich kolegy a kolegyně. 



## Rychlý přehled použitelných jednotek

| Jednotka | Jak počítá rozměr? |
| -------- | ----------------- | 
| `rem` | relativně k velikosti písma na prvku `<html>` |
| `em`  | relativně k velikosti písma na elementu |
| `px`  | pixel (lépe ale přepočtený nebo také CSS pixel) |
| `%`   | procenta relativně k rodičovskému elementu |
| `vw`  | procento ze šířky okna prohlížeče |
| `vh`  | procento z výšky okna prohlížeče |

Existují samozřejmě ještě další jednotky: namátkou `pt`, `ex` nebo `vmax`. Buď je ale využívám málo nebo vůbec, takže pro zjednodušení je úplně vynechám.  Dobrý přehled všech je v češtině na stránkách Jak psát web. [vrdl.in/btoxk](https://www.jakpsatweb.cz/css/css-jednotky.html)


Teď prakticky. Připravil jsem jednoduché demo, ve kterém jsou všechny nejčastější scénáře nastavování rozměrů v CSS. Projdeme si to v textu, ale tady je ještě online: [cdpn.io/e/dvdxWG](http://codepen.io/machal/pen/dvdxWG).


## Základní velikost písma v dokumentu: `%`

Výchozí velikost písma je v drtivé většině prohlížečů `16px`. Existují ale méně významné prohlížeče, které velikost písma nastavují jinak. Prostě tak, aby se nám na konkrétním zařízení lépe četlo. Například prohlížeč v Kindle 3 měl výchozí velikost písma `26px`. [vrdl.in/16px](https://nicolas-hoizey.com/2016/03/people-don-t-change-the-default-16px-font-size-in-their-browser.html)

Pokud vám výchozí velikost písma nevyhovuje, změňte to  pružnými jednotkami, například procenty:

```
html {
  font-size: 125%; 
}
```

Nastavíte tak o čtvrtinu větší písmo než je výchozí. U skoro všech prohlížečů tedy `20px`.

### Proč tady nepoužít `px`?

Pokud bychom to udělali, našim milým uživatelům znemožníme zvětšovat si výchozí písmo v prohlížečích. 

Pozor, nebavíme se o „zoomování“ ale zvětšení velikosti písma pro všechny weby. Taková věc existuje v prohlížečích nebo v operačních systémech. A ano, lidé to používají. Asi taky jednou budeme. Dělají to totiž lidé s horším zrakem nebo třeba jen méně kvalitními displeji. 

Například v Chrome je to volba „Velikost písma“ v rozšířeném Nastavení. [vrdl.in/1gcz0](http://www.computerhope.com/issues/ch000779.htm)

Moc takových lidí není, jasně že ne. Ale proč je ignorovat? Myslím, že bychom se měli snažit vytvářet řešení s co nejširším uživatelským zásahem. 


## Rozměry vycházející z velikosti písma: `rem`


Velikost písma, vnější a vnitřní okraje, ale i další vlastnosti v dokumentu a komponentách prostě nastavuji v `rem`. `1rem` (1 root `em`) obsahuje výchozí velikost písma nastavenou autorem pro dokument (a případně ještě upravenou uživatelem).

```
p { margin-bottom: 1rem; }
h1 { font-size: 2rem; }
```

Odstavcům tak nastavím spodní vnější okraj na výšku písma. Nadpisy první úrovně budou dvojnásobně velké oproti standardní velikosti písma. 

Používat `rem` je výhodné i z pohledu vývojáře: 

- V `1rem` máte uloženou základní velikost písma a nemusíte si pamatovat, jestli je to  12, 14, 16 nebo kolik vlastně pixelů. 
- Šířka layoutu nastavená v `rem` bude dodržovat [optimální délku textu](typografie.md), i když si uživatel písmo zvětší.
- `rem` vám pomohou při [autorském „zoomování“ dokumentu](rem-em-zoom.md) na určitých velikostech okna prohlížeče.

Nevýhoda `rem` leží ve faktu, že jej nepodporuje Explorer 8 a starší. To ale jde vyřešit automatickým přidáním `px` řešení, například pomocí nástroje PixRem. [vrdl.in/ivuk8](https://www.npmjs.com/package/pixrem)


### Proč tady nepoužít `px`?

Možná jste zvyklí při převodu designu do kódu pracovat v `px`. Velikosti písma možná máte uložené v proměnných CSS preprocesorů a zvětšování a zmenšování v layoutu nepoužíváte. Když už to chcete dělat, nenastavujte v `px` prosím alespoň tu velikosti písma, abyste nezablokovali možnost uživatelského zvětšení. 

`rem` je pro mě tedy výchozí jednotka. Občas se mi ale hodí `em`.


## Rozměry pružných komponent: `em`

Jednotka `em` obsahuje velikost písma elementu, nikoliv dokumentu.

```css
html {
  font-size: 100%; /* = 16px */
}

p {
  padding: 1em; /* = 16px */
}

.button {
  font-size: 75%;
  padding: 1em; /* = 12px */
}
```

Vidíte, že `1em` znamená v různých místech dokumentu různé věci. Někde to může být fajn. Ale vývojářům se s `em` samozřejme pracuje trošku hůř. Ne každý se chce stát pochodující kalkuačkou pro převod mezi `em` a pixely.

### `em` není čtverčík

„Čtverčík“ je typografická jednotka, která se počítá ze šířky velkého „M“. `em` by pak bylo pro různá písma různě velké.  W3C `em` definovalo jinak. Jeho velikost v kořeni dokumentu je ve všech prohlížečích a při použití jakéhokoliv písma stejná. [vrdl.in/oyqwn](https://diskuse.jakpsatweb.cz/?action=vthread&forum=19&topic=138070)


## Media Queries: `em`

V textu [o Media Queries](media-queries-tipy.md) píšu, proč nepoužít `px` (opět kvůli zvětšování písma) a `rem` (kvůli chybě v Safari). Proto nám zbývají `em`:

```css
@media screen and (min-width: 30em) {
  …
}
```


## Výška řádku: číslem bez jednotky

Hodnota bez jednotky je pro výšku řádku specifická, ale dává naprostý smysl:

```
h1 {
  line-height: 1.5;
}
```

Výška řádku je jeden a půl násobek velikosti písma nadpisu první úrovně. Proč je to lepší než nastavení „natvrdo“ v `rem`, `em` nebo `px`? Pokud se autorsky nebo uživatelsky v některém kontextu změní velikost písma, nemusíte pak už přenastavovat výšku řádku.


## Layout: `%` atd.

Pro layout se dobře hodí procenta. Raději připomínám, že se vždy počítají ze šířky rodiče:

```css
.layout-col {
  width: 50%;
}
```

Použitelných jednotek pro layout je ale více. Procenta nebo `vw` se roztahují podle šířky okna. `rem` a `em` podle velikosti písma. Občas se hodí i `px`. A ve flexboxu je možné používat i absolutní jednotky. Odkážu vás na svůj text o flexboxu, pokud by vás to zajímalo více. [vrdl.in/bm26n](http://www.vzhurudolu.cz/prirucka/css3-flexbox-polozky#flex) 

## Rámečky, dekorace: `px`

Doporučuji jej používat jen tam, kde potřebujete precizní vyjádření v pixelech. Třeba pro rámečky mezi prvky navigace:

```css
.nav-item { 
  border-left: 1px solid white; 
}
```

<div class="ebook-only" markdown="1">
Jen pro jistotu připomínám, že už nejde o hardwarový pixel. Psal jsem o tom části první kapitoly o [CSS pixelu](zmeny-css-pixel.md).
</div>


## Typografie podle velikosti okna: `vw`

Můžete potřebovat i zvětšování a zmenšování velikosti písma podle šířky nebo výšky okna. Pak si vzpomeňte na jednotky `vw` (viewport width) nebo `vh` (viewport height).

Například tento nadpis z příkladu bude mít velikost písma `2rem` a k tomu vždy dvě procenta ze šířky okna:

```css
.heading {
  font-size: calc(2rem + 2vw);
}
```

Triky s responzivní typografií se více zabývám v přespříští podkapitole. 

Na závěr ještě jeden odkaz na příklad: [cdpn.io/e/dvdxWG](http://codepen.io/machal/pen/dvdxWG).

