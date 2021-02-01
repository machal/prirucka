# Vlastnost aspect-ratio v CSS

Od Chrome verze 88 a brzy i v dalších prohlížečích můžeme používat vlastnost `aspect-ratio`, která umožňuje vytvářet kontejnery pro asynchronní obsah a zabránit tak nechtěnému překreslování obsahu stránky, který měří [Kumulativní posun layoutu (CLS)](metrika-cls.md).

<!-- AdSnippet -->

Technik pro [zajištění poměru stran v CSS](css-pomer-stran.md) máme vcelku hodně, přičemž [zajištění plochy pro obrázky](img-pomer-stran.md) už příliš řešit nemusíme, to za nás rozlouskly prohlížeče a my jen musíme dodat atributy `width` a `height`.

Pokud jde o další typy obsahu – `iframe` s obsahem třetí strany, videa, vkládané SVG dokumenty, asychronně vykreslený obsah od grafů až po výsledky ajaxových dotazů – asi nejznámější metodou je [padding trik](padding-trik.md).

`aspect-ratio` je tady, aby nahradilo právě trik s paddingem. Je to úplně jednoduché, jako hodnotu vlastnosti stačí uvést poměr stran:

```css
.box {
  aspect-ratio: 4/3;
}
```

Připravil jsem demo s obrázkem, ve kterém to snad půjde dobře vidět:

CodePen: [cdpn.io/e/jOVEKqq](https://codepen.io/machal/pen/jOVEKqq?editors=1100)

V HTML je `.box` rodičem obrázku:

```html
<p class="box">
  <img src="http://satyr.io/4000x3000/green?delay=3000&text=IMG" 
    width="2000" height="1500" alt="Image">
</p>  
```

Povšimněte si atributů `width` a `height`, které drží poměr stran samotného obrázku.

Díky vlastnosti `delay` má obrázek servírovaný skvělou službou [Satyr.io](http://satyr.io/) nastaveno zpoždění. Když na něj čekáme, prohlížeč by vykreslil bílou plochu. My ale chceme barevný placeholder, aby bylo vidět, že na toto místo něco dorazí. K tomu nám poslouží `.box`, který má nastavený poměr stran stejně jako obrázek – 4:3 – `aspect-ratio: 4/3`.

<!-- AdSnippet -->

Toto bylo úplně základní použití. [V textu na web.dev](https://web.dev/aspect-ratio/), který sepsala Una Kravets jsou vidět další možnosti – například zajištění stejné velikosti prvků uvnitř [CSS gridu](css-grid.md).

## Podpůrná vlastnost `object-fit` {#object-fit}

Pokud by byl `aspect-ration` člověk, do hospody by pravidelně chodil s vlastnostmi[`object-fit` a `object-position`](css-object-fit-position.md). Je to nerozlučná trojka.

<figure>
<img src="../dist/images/original/css-object-fit.png" alt="">
<figcaption markdown="1">
*Obrázek: Hodnoty vlastnosti object-fit.*
</figcaption>
</figure>

Pro elementy typu obrázky nebo videa, u kterých nevíme, jaký budou mít poměr stran, totiž můžeme držet jednotný prostor a vnitřní prvky následně ořezat nebo nějak napozicovat. Možnosti vlastnosti `object-fit` jsou následující:

<div class="rwd-scrollable f-6" markdown="1">

| Hodnota            | Jak se chová?                                                                              |
|--------------------|--------------------------------------------------------------------------------------------|
| `fill` (výchozí)   | Vyplní celou plochu. Klidně zdeformuje poměr stran obsahu, ale neořízne ho.                |
| `contain`          | Nevyplní vždy celou plochu. Obsah nezdeformuje, neořízne a zobrazí celý.                   |
| `scale-down`       | Stejně jako `contain`, ale nikdy nezvětší obrázek nad přirozenou velikost.                 |
| `cover`            | Vyplní celou plochu. Nenechá volné místo, nezdeformuje obsah, ořízne ho.                   |
| `none`             | Drží původní velikost a poměr stran. Někdy ořízne, někdy nechá volné místo.                |

</div>

## Triky s attr() a důležitost atributů width a height {#attr}

Měl bych zmínit, že prohlížeče přidaly `aspect-ratio` do svých výchozích stylů pro překvapivě hodně prvků a to nejen těch, do kterých se stahuje asynchronní obsah.

Toto je například z výchozího stylopisu Firefoxu, alespoň [podle MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio):

```css
img, input[type="image"], video, embed, iframe, marquee, object, table {
  aspect-ratio: attr(width) / attr(height);
}
```

Nastavení poměru stran do atributů `width` a `height` tedy definitivně berme za zásadní.

## Podpora {#podpora}

Vlastnost `aspect-ratio` podporuje [Chrome od verze 88](https://www.chromestatus.com/feature/5738050678161408). Na ostatní prohlížeče se v době psaní textu čeká, ale dočkáme se velmi brzy, v řádu měsíců. Firefox plánuje podporu [od verze 87](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Experimental_features#property_aspect-ratio) (nyní mám 85). Safari od Technology Preview [verze 119](https://developer.apple.com/safari/technology-preview/release-notes/), takže se objeví v některém z příštích Safari. Více je na [CanIUse](https://caniuse.com/mdn-css_properties_aspect-ratio).

<!-- AdSnippet -->
