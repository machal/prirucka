# Vlastnost justify-self: Zarovnání položky na hlavní ose

Vlastnost `justify-self` určuje zarovnání položky na hlavní ose (jinak též řádkové ose).

<div class="connected" markdown="1">

![CSS vlastnost justify-self](../dist/images/medium/vdlayout/css-justify-self-schema.png)

<div class="web-only" markdown="1">

Vlastnost `justify-self` patří do specifikace pro zarovnání boxů – [CSS Box Alignment](css-box-alignment.md).

Můžete ji využít v layoutech tvořených [gridem](css-grid.md).

</div>

<div class="ebook-only" markdown="1">

→ [vrdl.cz/p/css-justify-self](https://www.vzhurudolu.cz/prirucka/css-justify-self)

</div>

</div>

Je dobré zmínit, že uvnitř buněk tabulek a ve [flexboxu](css-flexbox.md) je vlastnost `justify-self` ignorována. V grid layoutu se položka zarovnává uvnitř své oblasti, což je obvykle buňka mřížky.

U flexboxu můžeme pro zarovnání položek na hlavní ose využít klasickou metodu s `margin:auto`, podobně jako u [`justify-items`](css-justify-items.md).

<!-- AdSnippet -->

## Příklad: `margin` má přednost před `justify-self`

V naší ukázce definujeme třísloupcový kontejner gridu. Poslední, jinak zbarvenou položku pak zarovnáváme pomocí `justify-self`.

HTML vám asi bude znít povědomě:

```html
<div class="container">
  <div class="item item--1">
    Item 1
  </div>
  <div class="item item--2">
    Item 2
  </div>
  <div class="item item--3">
    Item 3
  </div>  
</div>
```

Definice třísloupcového kontejneru gridu pak vypadá zhruba následovně:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 10em;  
}
```

Nakonec deklarace pro poslední položku:

```css
.item--3 {
  margin-right: auto;
  justify-self: end;
}
```

Tady vlastně zarovnáváme dvěma způsoby. Jednou doleva (`margin-right:auto`) a jednou doprava (`justify-self:end`). Co myslíte - bude platit poslední deklarace, jako je tomu u CSS vždy? Nikoliv, zarovnání pomocí vnějších okrajů zde má přednost navzdory kaskádě.

Zkuste si tu první deklaraci schválně v živé ukázce odmazat.

<p><img src="../dist/images/original/vdlayout/css-justify-self-vs-margin.png" width="1920" height="540"  alt="margin má přednost před justify-self - v Chrome při zapnutém grid overlay"></p>

Následuje několik užitečných vysvětlujících odrážek:

- První dvě položky nemají vlastnost `justify-self` nastavenou, takže získají výchozí hodnotu `stretch` a roztáhnou se do celé šířky prostoru buňky.
- Poslední položka má nastaveno `justify-self:end`, takže by se měla „scvrknout“ na přirozenou šířku podle obsahu a zarovnat ke konci prostoru buňky, což je zároveň pravá hrana kontejneru.
- Vyhrává ovšem deklarace `margin-right:auto`, která buňku zarovná na začátek prostoru buňky a funguje tedy stejně jako `justify-self:end`.

CodePen: [cdpn.io/e/QWNvKQJ](https://codepen.io/machal/pen/QWNvKQJ?editors=1100)

## Příklad: proč to ve flexboxu nefunguje

V dalším CodePenu je vidět, že `justify-self` ve flexboxu opravu nefunguje. Pokouším se tam stylovat poslední položku pomocí `justify-self:end`. A nic.

CodePen: [cdpn.io/e/MWJaVyZ](https://codepen.io/machal/pen/MWJaVyZ?editors=1100)

Zde je potřeba vysvětlit proč:

Prvním důvodem je, že ve flexboxu nejsou vlastnosti `justify-self` a tím pádem ani [`justify-items`](css-justify-items.md) potřeba – můžete totiž úplně v pohodě použít `margin` a jeho hodnotu `auto`.

Druhý důvodem je to, že u flexboxu se, na rozdíl od gridu, počítá s přítomností více položek na hlavní ose. Pravděpodobně nechcete dělat flexboxové rozvržení s jednou položkou. Nebo chcete, ale pro tohle flexbox vymyšlený nebyl. Více položek, tam je pro zarovnání dobrá [vlastnost `justify-content`](css-justify-content.md).

Takže mám jednu dobrou a jednu špatnou vlastnost. Pro zarovnání položek na hlavní ose ve flexboxu používejte `margin` nebo `justify-content`. A ta špatná? Budete si to muset zapamatovat.

Je o tom krásná diskuze „In CSS Flexbox, why are there no "justify-items" and "justify-self" properties?“ na Stack Overflow. [stackoverflow.com/a/32569434/889682](https://stackoverflow.com/a/32569434/889682)

## Možné hodnoty zarovnání

![Hodnoty vlastnosti justify-self](../dist/images/original/vdlayout/css-justify-self-hodnoty.png)

Vlastnosti `justify-self` můžete předávat všechny hodnoty z jednotlivých obecných kategorií klíčových slov specifikace CSS Box Alignment:

### Základní

- `auto` (výchozí)  
  Podědí se hodnota `justify-items` od rodičovského elementu. Pokud zde žádný není, dostane prvek hodnotu `normal`.
- `normal`  
  V CSS gridu bude nastavený jako hodnota `stretch`, ale například v blokových layoutech (`display:block`) jako `start`.
- `stretch`  
  Položka rozšíří své rozměry tak, aby v kontejneru nezbylo žádné volné místo. Pokud jsou položky menší než kontejner, jejich velikost se zvětší rovnoměrně (nikoli proporcionálně), přičemž stále respektují omezení uložená vlastnostmi jako `max-width`/`max-height`.

Po dekódování zašmodrchaností specifikace můžeme konstatovat, že výchozí hodnota je vždy `stretch`, tedy roztažení do šířky.  

<!-- AdSnippet -->

### Poziční

- `center`  
  Položka se centruje doprostřed jí určeného prostoru.
- `start`  
  Položka se zarovnává k hraně začátku jí určeného prostoru.
- `end`  
  Položka se zarovnává k hraně konce jí určeného prostoru.
- `self-start`  
  Hodnota chová jako `start`.
- `self-end`  
  Hodnota chová jako `end`.
- `flex-start`  
  Chová se jako `start`.
- `flex-end`  
  Chová se jako `end`.
- `left`  
  Chová se jako `start`.
- `right`  
  Chová se jako `end`.

### Podle účaří

- `first baseline`  
  Zarovnání na účaří prvního řádku. Pokud v daném kontextu nelze použít, zarovná se jako `start`.
- `last baseline`  
  Zarovnání na účaří posledního řádku. Pokud v daném kontextu nelze použít, zarovná se jako `end`.
- `baseline`  
  Zkratka pro `first baseline`.

### Pro přetečení

- `safe`  
  Pokud má položka v daném způsobu zarovnání přetéct z obou stran, bude zarovnání změněno tak, aby byl vidět začátek položky, takže aby například bylo možné přečíst začátek textu.
- `unsafe`  
  Vždy dostane přednost poziční zarovnání, bez ohledu na to, zda bude oříznutý obsah čitelný nebo ne.  

Toto v žádném prohlížeči zatím nefunguje.

## Podpora v prohlížečích

V rámci flexboxu a tabulkovém layoutu tuto vlastnost nemůžete použít v žádném prohlížeči.

Při použití s `display:grid` je podpora v prohlížečích plná, jen v Internet Exploreru je hlášeno několik bugů. Více na CanIUse. [caniuse.com/justify-self](https://caniuse.com/#search=justify-self)

<!-- AdSnippet -->
