# Nové typy inputů v HTML5: email, tel, number 

Všechny nové typy inputů nemají dostatečnou podporu v prohlížečích, ale ty hlavní je velmi dobré používat. Proč?

- Na mobilech otevírají upravené virtuální klávesnice, takže všem pomáhají zadávat správná data.
- Usnadňují čtení i pro zrakově postižené. Viz [studie tvůrců WordPressu](https://make.wordpress.org/accessibility/2017/02/13/testing-html5-type-attributes-in-forms-with-different-browsers-and-at/) nebo [html5accessibility.com](http://www.html5accessibility.com/#controls).

Nefungují v IE9 a starších, ale fallbach je v pohodě: Zobrazí se tam jako `type="text"`, což je výchozí typ inputu.

## Ukázka

* https://codepen.io/machal/pen/NAwRBa?editors=1000#0
* TODO obrázek


## type="search" {#search}

```html
<input type="search">
```

Políčko pro vyhledávání. Funguje úplně stejně jako `type="text"`. Jediný rozdíl  může být ve vzhledu. Na platformách, které odlišují vzhled vyhledávacího pole, bude vypadat jinak. Příkladem mohou být systémy od Apple. 

V prohlížeči Safari přijímá vyhledávací políčko [několik dalších atributů](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/InputTypes.html). Například:

- `autosave` – pod uvedeným názvem (`autosave="nazev"`) ukládá vyhledávací fráze do prohlížeče
- `incremental` –  zda má vyhledávací políčko fungovat jako našeptávač
- `results` – kolik výsledků může vyhledávací políčko vracet


## type="email" {#email}

```html
<input type="email">
```

Pole pro vložení e-mailové adresy. Prohlížeče mohou například pomoci tím, že nabídnou jednodušší vstup závináče – <kbd>@</kbd>. To také mobilní prohlížeče dělají na virtuálních klávesnicích.

Tipy:

* Atribut `multiple` – nastaví možnost vložení více e-mailových adres

## type="url" {#url}

```html
<input type="url">
```

Pole pro vložení celé adresy. Prohlížeče pomáhají tím, že nabídnou jednodušší vstup řetězců jako <kbd>http://</kbd>, <kbd>www</kbd> nebo třeba <kbd>/</kbd>. 

## type="tel" {#tel}

```html
<input type="tel">
```

Pole pro vložení telefonního čísla. 

Na rozdíl od `type="email"` a `type="url"` prohlížeče nekontrolují syntaxi. Důvod je  prostý – formátů je děsně moc. Doporučuje se, abyste si formát hlídali sami pomocí atributu `pattern`.


## type="number" {#number}

```html
<input type="number">
```

Vložení celého čísla. S drobnými chybami funguje ve všech moderních prohlížečích: [caniuse.com/input-number](http://caniuse.com/#feat=input-number)


Tipy:

- `<input type="number" pattern="[0-9]*" inputmode="numeric">` Zajistí otevření numerické klávesnice skoro na všech zařízeních s Androidem a iOS. Pokud si ale chcete být opravdu jistí, použijte `type="tel"`.


## type="file" {#file}

```html
<input type="file">
```

Vložení souboru.

Tipy:

- Atribut `multiple` pro vložení více souborů už funguje skoro všude: [caniuse.com/input-file-multiple](http://caniuse.com/#feat=input-file-multiple)

## Někdy

### type="range" {#range}

```html
<input type="range">
```

* nefunguje ve starších IE http://caniuse.com/#feat=input-range
* input range stylování: https://codepen.io/collection/DgYaMj/

### type="color" {#color}

```html
<input type="color">
```

* nefunguje v Safari a IE http://caniuse.com/#feat=input-color

### type="date" {#date}

```html
<input type="date">
<input type="datetime">
<input type="datetime-local">
<input type="month">
<input type="time">
<input type="week">
```

* funguje jen v Chrome, Opeře a Edge http://caniuse.com/#feat=input-datetime
* https://github.com/chemerisuk/better-dateinput-polyfill
* "I think it’s time that we trust browser vendors a bit more. The days of useless features for the sake of having a longer feature list are long gone. Nowadays, browser vendors try to add features that are actually useful for users, and are actually implemented by web developers. If a browser says it supports <input type=”date”>, you should trust it to deliver a decent experience to its users. If it says it does not, and only in that case, you should use a custom widget instead."
https://medium.com/samsung-internet-dev/making-input-type-date-complicated-a544fd27c45a
* 

Tipy a triky

* stylování textových inputů https://css-tricks.com/styling-texty-inputs-only/
input:not([type=submit]):not([type=file]) {
   /* omg so much cleaner */
}
* 
* Podpora na jednom místě: https://www.wufoo.com/html5/
* Podpora na mobilech: https://quirksmode.org/html5/inputs/mobile.html
