# Vlastnost aspect-ratio v CSS

Od září 2021 můžeme v prohlížečích používat vlastnost `aspect-ratio`, která v CSS zajistí držení poměru stran pro element ve stránce.

Je to úplně jednoduché, jako hodnotu vlastnosti stačí uvést poměr stran:

```css
.box {
  aspect-ratio: 4/3;
}
```

Jde o techniku, která umožňuje vytvářet kontejnery pro asynchronní obsah a zabránit tak nechtěnému překreslování obsahu stránky, který měří [Kumulativní posun layoutu (CLS)](metrika-cls.md).

<!-- AdSnippet -->

Metod pro [zajištění poměru stran v CSS](css-pomer-stran.md) máme vcelku hodně, přičemž [zajištění plochy pro obrázky](img-pomer-stran.md) už příliš řešit nemusíme, to za nás rozlouskly prohlížeče, a my jen musíme dodat atributy `width` a `height`.

Pokud jde o další typy obsahu – `iframe` s obsahem třetí strany, videa, vkládané SVG dokumenty, asychronně vykreslený obsah od grafů až po výsledky ajaxových dotazů – asi nejznámější stávající metodou je [padding trik](padding-trik.md). No a vlastnost `aspect-ratio` je tady, aby nahradila právě trik s paddingem.

Připravil jsem demo s obrázkem, ve kterém to snad půjde dobře vidět:

CodePen: [cdpn.io/e/jOVEKqq](https://codepen.io/machal/pen/jOVEKqq?editors=1100)

V HTML je `.box` rodičem obrázku:

```html
<p class="box">
  <img src="https://satyr.dev/4000x3000/green?delay=3000&text=IMG…" 
    width="2000" height="1500" alt="Image">
</p>  
```

Povšimněte si atributů `width` a `height`, které drží poměr stran samotného obrázku.

Pro vykreslení obrázku využívám skvělou službou [Satyr.dev](http://satyr.dev/). Díky parametru `delay` má obrázek nastaveno zpoždění. Když na něj čekáme, prohlížeč by za normálních okolností vykreslil bílou plochu.

My tam ale chceme ponechat barevný placeholder (zástupný symbol), aby bylo vidět, že na toto místo něco dorazí. K tomu nám poslouží prvek `.box`, který má nastavený poměr stran stejně jako obrázek – 4:3 – `aspect-ratio: 4/3`. Už chápete?

<!-- AdSnippet -->

Toto bylo úplně základní použití. [V textu na web.dev](https://web.dev/aspect-ratio/), který sepsala Una Kravets jsou vidět další možnosti – například zajištění stejné velikosti prvků uvnitř [CSS gridu](css-grid.md).

## Podpůrná vlastnost `object-fit` {#object-fit}

Pokud by byl `aspect-ratio` člověk, do hospody by pravidelně chodil s vlastnostmi[`object-fit` a `object-position`](css-object-fit-position.md). Chápu je totiž jako nerozlučnou trojka.

<figure>
<img src="../dist/images/original/css-object-fit.png" alt="">
<figcaption markdown="1">
*Obrázek: Hodnoty vlastnosti object-fit.*
</figcaption>
</figure>

Ve stránce můžeme mít obrázky nebo videa, o kterých víme, že budou mít různý poměr stran. Díky kombinaci `aspect-ratio` s `object-fit` pak můžeme držet jednotný poměr stran a vnitřní prvky následně ořezat nebo nějak napozicovat.

Možnosti vlastnosti `object-fit` jsou následující:

<div class="rwd-scrollable f-6" markdown="1">

| Hodnota            | Jak se chová?                                                                              |
|--------------------|--------------------------------------------------------------------------------------------|
| `fill` (výchozí)   | Vyplní celou plochu. Klidně zdeformuje poměr stran obsahu, ale neořízne ho.                |
| `contain`          | Nevyplní vždy celou plochu. Obsah nezdeformuje, neořízne a zobrazí celý.                   |
| `scale-down`       | Stejně jako `contain`, ale nikdy nezvětší obrázek nad přirozenou velikost.                 |
| `cover`            | Vyplní celou plochu. Nenechá volné místo, nezdeformuje obsah, ořízne ho.                   |
| `none`             | Drží původní velikost a poměr stran. Někdy ořízne, někdy nechá volné místo.                |

</div>

## Triky s `attr()` a důležitost atributů `width` a `height` {#attr}

Funkce `attr()` umožňuje do CSS deklarace na místo hodnoty vepsat obsah atributu z HTML prvku. Toho využívají prohlížeče při nastavování výchozího poměru stran.

Prohlížeče přidaly `aspect-ratio` do svých výchozích stylů pro překvapivě hodně prvků a to nejen těch, do kterých se stahuje asynchronní obsah.

Toto je například z výchozího stylopisu Firefoxu, alespoň [podle MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio):

```css
img, input[type="image"], video, embed, iframe, marquee, object, table {
  aspect-ratio: attr(width) / attr(height);
}
```

Tabulka? `marquee`? Hmmm… Tady se někdo při nastavování výchozích poměrů stran vyřádil…

## Podpora {#podpora}

Vlastnost `aspect-ratio` podporují všechny moderní prohlížeče:

- Chrome [od verze 88](https://www.chromestatus.com/feature/5738050678161408).
- Firefox [od verze 89](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/89)
- Safari [od verze 15](https://developer.apple.com/documentation/safari-release-notes/safari-15-release-notes) 

A co [Explorer](msie.md)? Hm… jděte si dělat legraci jinam.

Více je na [CanIUse.com](https://caniuse.com/mdn-css_properties_aspect-ratio).

<!-- AdSnippet -->
