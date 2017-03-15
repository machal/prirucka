# SVG řešení: hvězdičkové hodnocení

Hvězdičkové hodnocení se na webu používá děsně často. Před časem jsem kápl na moc pěkné řešení postavené na [SVG](svg.md) vloženém do HTML. 

Tady je Codepen pro nedočkavce. [cdpn.io/e/yayxGv](http://codepen.io/machal/pen/yayxGv) 

![Hvězdičkové hodnocení](../dist/images/original/svg-hvezdy.jpg)

Mám plnou a prázdnou hvězdu. Co když ale potřebuji udělat z poloviny vyplněnou hvězdičku? Nebo čtvrtinovou hvězdičku? Vyrobím si tři nebo čtyři obrázky? 

Ne, vyrobíte si jen jednu křivku v SVG. Tu obarvujete tak, abyste získali prázdné, poloviční nebo třeba čtvrtinové hvězdy.

<!-- AdSnippet -->

Podmínkou ovšem je, abyste vektor vložili přímo do HTML kódu. Nemusí to být zase takový problém, půjde jen o pár řádek kódu. Však uvidíte.

Vezměme to pěkně postupně.


## 1) Připravíme si tvar hvězdy

To bude snadné. Křivku hvězdy si ode mě klidně zkopírujte:

```svg
<svg class="star-source">
  <defs>
    <g id="icon-star">
      <path d="M20.388,10.918L32,12.118l-8.735,
        7.749L25.914,31.4l-9.893-6.088L6.127,
        31.4l2.695-11.533L0,12.118l11.547-1.2L16.026,
        0.6L20.388,10.918z" />
    </g>
  </defs>
</svg>
```

Tohle ale na stránce zobrazit nechceme. Jde o `<def>`, definici pro pozdější použití. Prohlížeče tuhle část správně nezobrazí, jenže vykreslí prázdný prostor, potvory. Proto je lepší tuhle část schovat:

```css
.star-source {
  position: absolute;
  width: 0;
  top: 0;
}
```

Máme nadefinováno. Když pak na stránce chci hvězdu použít, třeba vykreslit dvě vedle sebe, zapíšu to asi takto:

```svg
<svg class="star" viewBox="0 0 180 32">
  <use xlink:href="#icon-star" x="0" y="0" />
  <use xlink:href="#icon-star" x="36" y="0"  /> 
</svg>  
```

Teď jdeme na varianty vzhledu hvězdy.


## 2) Prázdnou hvězdu uděláme snadno

Použijeme (`<use>`) dříve nadefinovaný tvar. Na jeho název se odkážeme pomocí `xlink:href`. Funguje to podobně jako třeba `include()` v PHP.

```svg
<use xlink:href="#icon-star" class="star--empty">
```

V CSS jen vypneme výplň:

```css
.star--empty {
  fill: none;
}
```

## 3) Z poloviny vyplněná hvězda

```svg
<use xlink:href="#icon-star" class="star--half">
```

Tady si musíme výplň nadefinovat. Nejlépe pomocí SVG gradientu s ostrým přechodem. [CSS gradienty](css3-gradients.md) by teoreticky použít šly, ale nefungovaly mi ve všech prohlížečích. Barevný přechod si opět přidáme na začátek dokumentu do oblasti definic:

```svg
<defs>
  <linearGradient id="halfGradient">
    <stop stop-opacity="1" offset="50%" stop-color="#48440E"></stop>
    <stop stop-opacity="0" offset="50%"></stop>
  </linearGradient>
</defs>
```  

V CSS pak SVG gradient použít můžu. Stačí se odkázat na jeho název:

```css
.star--half {
  fill:url(#halfGradient);
}
```

Řešení bude fungovat ve všech dnešních prohlížečích. V těch starých, jako je třeba Internet Explorer do verze 9, hvězdy neuvidíte. 

<!-- AdSnippet -->

Jsme zodpovědní kodéři a proto ještě vytvoříme náhradní řešení pro starší prohlížeče, roboty a čtečky.

## 4) Textový fallback

Od článku [o náhradních řešeních pro SVG](svg-fallbacky.md) mohutně oslavuji SVG značku `<desc>`. Tady tomu nebude jinak. Díky ní vytvoříme krásné alternativní řešení pro slepecké čtečky a staré prohlížeče, co SVG nezvládají:


```svg
<svg class="star" viewBox="0 0 180 32">
  <desc>
    <p>Uživateli hodnoceno třemi a půl hvězdičkami z pěti.</p>
  </desc>
</svg>  
```

## Máme hotovo

Takhle vypadá celá viditelná část kódu:

```svg
  <svg class="star" viewBox="0 0 180 32">
    <desc>
      <p>Uživateli hodnoceno třemi a půl hvězdičkami z pěti.</p>
    </desc>
    <use xlink:href="#icon-star" x="0" y="0" />
    <use xlink:href="#icon-star" x="36" y="0"  />      
    <use xlink:href="#icon-star" x="72" y="0" /> 
    <use xlink:href="#icon-star" x="108" y="0" class="star--half" />       
    <use xlink:href="#icon-star" x="144" y="0" class="star--empty" />  
  </svg>
```

A pro pořádek ještě jednou živý příklad na Codepenu. [cdpn.io/e/yayxGv](http://codepen.io/machal/pen/yayxGv) 

<!-- AdSnippet -->

Je to jedno z řešení, která jsem ukazoval na WebExpu 2016. Podívejte se [i na další dema z přednášky](http://www.vzhurudolu.cz/prednaska/webexpo-2016-246).
