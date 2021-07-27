# Flexbox: referenční příručka všech vlastností

*Flex* v češtině znamená *pružný*, *přizpůsobivý*. Flexboxy jsou tedy *pružné* elementy layoutu. Jednou z hlavních předností flexboxu je totiž schopnost vyplňovat zbylý prostor.

<div class="related web-only" markdown="1">
- [CSS Grid](css-grid.md)
- [CSS Multicolumn](css-multicolumn.md)
- [CSS Box Alignment](css-box-alignment.md)
</div>

Toto je referenční příručka s příklady pro všechny vlastnosti, které ve flexboxu můžete používat.

## Vlastnosti flexboxu {#vlastnosti}

Vlastnosti se týkají buď kontejneru, tedy rodičovského prvku nebo položek.

### Kontejner flexboxu {#vlastnosti-kontejner}

Hodnota [vlastnosti `display`](css-display.md) `flex` nastaví prvku kontext formátování flexboxem, takže jeho přímí potomkové mohou mít specifické vlastnosti. Možná je také „inline“ hodnota: `inline-flex`.

<div class="rwd-scrollable prop-table f-6" markdown="1">

|                                      |  Vlastnost |
|--------------------------------------|----------------------|
| [![Vlastnost flex-wrap](../dist/images/small/vdlayout/css-flex-wrap-schema.png)](css-flex-wrap.md)       | **[`flex-wrap`](css-flex-wrap.md)** <br> Definuje, zda se položky mohou zalamovat. Výchozí je nezalamovat. <br>Např. `flex-wrap:wrap` – položky se mohou vykreslit na další řádek. |
| [![Vlastnost flex-direction](../dist/images/small/vdlayout/css-flex-direction-schema.png)](css-flex-direction.md)       | **[`flex-direction`](css-flex-direction.md)** <br> Určí směr toku rozvržení. Výchozí je zleva doprava, do řádku. <br>Např. `flex-direction:column` – položky se skládají shora dolů, do sloupce. |
| [![Vlastnost flex-flow](../dist/images/small/vdlayout/css-flex-flow-schema.png)](css-flex-flow.md)       | **[`flex-flow`](css-flex-flow.md)** <br> Zkratka pro `flex-wrap` a `flex-direction`. <br>Např. `flex-flow:wrap column` – položky se zalomují a skládají shora dolů. |

</div>

<div class="web-only" markdown="1">
<!-- Kopie z css-multicolumn.md -->

Dále lze na kontejner flexboxu aplikovat také vlastnosti [zarovnání boxů (CSS Box Alignment)](css-box-alignment.md):

<div class="rwd-scrollable prop-table f-6" markdown="1">

|                                         | Vlastnost  |
|-----------------------------------------|--------------------|
| [![Vlastnost align-items](../dist/images/small/vdlayout/css-align-items-schema.png)](css-align-items.md)     | **[`align-items`](css-align-items.md)** <br> Zarovnání na blokové ose (obvykle svisle). <br> Např. `align-items: end` zarovná položky ke spodní hraně kontejneru. |
| [![Vlastnost place-items](../dist/images/small/vdlayout/css-place-items-schema.png)](css-place-items.md)     | **[`place-items`](css-place-items.md)** <br> Zkratka pro zarovnání položek v obou směrech. <br> Např. `place-items: end center` zarovná položky ke spodní hraně a vodorovně na střed. |

</div>

K dispozici máme i vlastnosti CSS Box Align, řídící rozdělení volného prostoru, který uvnitř kontejneru zůstává mezi položkami.

<div class="rwd-scrollable prop-table f-6" markdown="1">

|                                         | Vlastnost  |
|-----------------------------------------|-----------|
| [![Vlastnost justify-content](../dist/images/small/vdlayout/css-justify-content-schema.png)](css-justify-content.md) | **[`justify-content`](css-justify-content.md)** <br>Rozdělení prostoru na řádkové ose (obvykle vodorovně). <br> Např. `justify-content:space-between` rozdělí prostor mezi položky. |
| [![Vlastnost align-content](../dist/images/small/vdlayout/css-align-content-schema.png)](css-align-content.md) | **[`align-content`](css-align-content.md)** <br>Rozdělení prostoru na blokové ose (obvykle svisle). <br> Např. `align-content:start` zajistí zarovnání položek k horní hraně kontejneru. |
| [![Vlastnost place-content](../dist/images/small/vdlayout/css-place-content-schema.png)](css-place-content.md) | **[`place-content`](css-place-content.md)** <br> Zkratka pro rozdělení prostoru v obou směrech. <br> Např. `place-content:start space-between` zajistí zarovnání položek k horní hraně kontejneru a vodorovné dělení prostoru mezi položky. |

</div>

<!-- /Kopie z css-multicolumn.md -->
</div>

### Položky flexboxu {#vlastnosti-polozky}

<div class="rwd-scrollable prop-table f-6" markdown="1">

|                                      | Vlastnost    |
|--------------------------------------|----------------------|
| [![Vlastnost flex-grow](../dist/images/small/vdlayout/css-flex-grow-schema.png)](css-flex-grow.md)       | **[`flex-grow`](css-flex-grow.md)** <br> Jak moc může položka růst. Výchozí je `0`. <br>Např. `flex-grow: 1` – bere si podíl v hodnotě `1` z volného prostoru. |
| [![Vlastnost flex-shrink](../dist/images/small/vdlayout/css-flex-shrink-schema.png)](css-flex-shrink.md)       | **[`flex-shrink`](css-flex-shrink.md)** <br> Faktor smršťování položky. Výchozí je `1`. <br>Např. `flex-shrink:0` – položka se nesmršťuje. |
| [![Vlastnost flex-basis](../dist/images/small/vdlayout/css-flex-basis-schema.png)](css-flex-basis.md)       | **[`flex-basis`](css-flex-basis.md)** <br> Výchozí velikost položky. Výchozí je `auto`, tzn. podle `width` nebo `height`. <br>Např. `flex-basis:0` – nehledí se na rozměr obsahu ani `width` či `height`. |
| [![Vlastnost flex-basis](../dist/images/small/vdlayout/css-flex-schema.png)](css-flex.md)       | **[`flex`](css-flex.md)** <br> Zkratka pro `flex-grow`, `flex-shrink` a `flex-basis`, plus speciální hodnoty. <br>Např. `flex:auto` – roste, smršťuje se a rozměr je nastavený na `auto`. |

</div>

<div class="web-only" markdown="1">
<!-- Kopie z css-multicolumn.md -->

Také na položky flexboxu můžeme aplikovat vlastnosti [zarovnání boxů](css-box-alignment.md):

Následujícími vlastnostmi pro konkrétní položku definujeme, jak se bude zarovnávat.

<div class="rwd-scrollable prop-table f-6" markdown="1">

|                                         | Vlastnost  |
|-----------------------------------------|-----------|
| [![Vlastnost align-self](../dist/images/small/vdlayout/css-align-self-schema.png?2)](css-align-self.md)   | **[`align-self`](css-align-self.md)** <br> Zarovnání na blokové ose (obvykle svisle). <br> Např. `align-self:end` zarovná položku ke spodní hraně. |
| [![Vlastnost place-self](../dist/images/small/vdlayout/css-place-self-schema.png)](css-place-self.md)  | **[`place-self`](css-place-self.md)**  <br>Zkratka pro zarovnání jednotlivé položky v obou směrech. <br> Např. `place-self:end center` zarovná položku ke spodní hraně a vodorovně doprostřed. |

</div>

<!-- /Kopie z css-multicolumn.md -->
</div>

Nyní známe vlastnosti a teď pojďme prozkoumat jednoduchý příklad.

## Základy v jednoduchém příkladu {#priklad}

Představme si triviální třísloupcový layout:

```html
<div class="container">
  <p class="col col--1">First is loooooong.</p>
  <p class="col col--2">Second is looooonger.<br/>…<br/>…</p>
  <p class="col col--3">Third is short.</p>  
</div>
```

HTML je jednoduché. O to přísnější máme požadavky na design:

- Všechny sloupce mají být stejně vysoké.
- Layout se při nedostatku místa zalomí.
- První dva sloupce jsou pružné, třetí nikoliv.
- Druhý sloupec se zvětšuje a zmenšuje dvakrát tolik než první.
- Na menších displejích do `400px` se prvky vyskládají pod sebe.

Zkuste si to nakódovat sami, stačí forknout následující CodePen: [cdpn.io/e/BaRYjya](https://cdpn.io/e/BaRYjya).

V dalším textu si ukážeme, jak bych postupoval já.

<!-- AdSnippet -->

### Všechny sloupce mají být stejně vysoké {#priklad-sloupce}

Stejná výška prvků platí i v případech kdy má jeden sloupec delší obsah než zbylé dva. To je to nejjednodušší. Stačí z rodiče pomocí [vlastnosti `display`](css-display.md) udělat kontejner flexboxu:

```css
.container {
  display: flex;
}
```

### Layout se při nedostatku místa zalomí {#priklad-zalamovani}

V případě, že zde nebude dost prostoru pro všechny položky, zalomíme. To definujeme pomocí [vlastnosti `flex-wrap`](css-flex-wrap.md):

```css
.container {
  flex-wrap: wrap;
}
```

### První dva sloupce jsou pružné, třetí nikoliv {#priklad-treti}

Dále jsme si vymysleli, že první dva sloupce se budou změnšovat a zvětšovat, přičemž druhý dvakrát více než první. Třetí naopak nikoliv, zůstane vždy na svém. Tady pomůže [zkratka vlastností položky flexboxu, `flex`](css-flex.md):

```css
/* Pružná položka, zabírá jednu část volného místa: */
.col--1 {
  flex: 1;
}

/* Pružná položka, zabírá dvě části volného místa: */
.col--2 {
  flex: 2;
}  

/* Fixně široká položka: */
.col--3 {
  flex: none;
}
```

### Na menších displejích se změní směr {#priklad-smer}

Na mobilech zpravila není pro rozvržení prvků vedle sebe prostor. Přidáme proto změnu směru layoutu, což zajistíme [vlastností `flex-direction`](css-flex-direction.md):

```css
@media (max-width: 400px) {
  .container {
    flex-direction: column;
  }
}
```

Na obrázku je vidět, k čemu jsme se dopracovali:

<figure>
<img src="../dist/images/original/flexbox-priklad.png" width="1600" height="900" alt="Příklad flexboxu">
<figcaption markdown="1">
*Takhle to dopadá, když si flexbox pustíte k tělu.*
</figcaption>
</figure>

Výsledný příklad si utíkejte vyzkoušet naživo:

CodePen: [cdpn.io/e/jOVVeVL](https://cdpn.io/e/jOVVeVL)

## Základní pojmy: flex kontejner, flex položka, hlavní a příčná osa {#pojmy}

Flexbox tvoří nerozlučná dvojice dvou typů elementů – flex kontejner a flex položka. Flex položkou se stává každý přímý potomek kontejneru.

```html
<ul class="flex-container">
  <li>…</li>
  <li>…</li>
</ul>
```

Flexbox nadefinujeme snadno jen pomocí flex kontejneru:

```css
.flex-container {
  display: flex;
}
```

Všechny `<li>` se tady stávají flex položkami.

Kromě flex kontejnerů a položek nás v dalším textu budou zajímat ještě osy. Ukažme si je na zjednodušeném schématu:

<figure>
<img src="../dist/images/original/flexbox-schema.png" width="1600" height="900" alt="Schéma flexboxu">
<figcaption markdown="1">
*Schéma vnitřních struktur flexboxu.*
</figcaption>
</figure>

- flex kontejner – rodičovský element
- flex položka – všichni přímí potomci flex kontejneru
- hlavní osa – výchozí je horizontální, ale lze změnit
- příčná osa – vždy příčná k hlavní, takže ve výchozí podobě svislá
- hlavní rozměr – výchozí je šířka, ale řídí se nastavením hlavní osy
- příčný rozměr – výchozí je výška

## Podpora {#podpora}

Dostupnost vlastností flexboxu v prohlížečích je velmi dobrá, vždyť s podporou přišel už [Internet Explorer](msie.md) 10! Grafy na CanIUse jsou tedy pěkně zelené. [caniuse.com/flexbox](https://caniuse.com/flexbox)

<figure>
<img src="../dist/images/original/css-flexbox-caniuse.png" width="1600" height="900" alt="Podpora flexboxu v prohlížečích na CanIUse">
<figcaption markdown="1">
*Jak je to krásně zelené! Podpora flexboxu v moderních prohlížečích je takřka bezchybná. Zdroj: [CanIUse.com](https://caniuse.com/flexbox).*
</figcaption>
</figure>

Konkrétní podporu je ale potřeba rozpadnout podle jednotlivých vlastností, uvedených výše v tabulce. Tam je situace už různorodější. 

Bojem s více či méně příjemnými chybami je provázena práce v Internet Exploreru, protože jde o nejstarší dnes sloužící prohlížeče. Detailně se tím zabýváme v textu [o podpoře CSS layoutu](css-layout-bugy.md) v prohlížečích. Není to ale nic vážného, tento prohlížeč od Microsoftu už prakticy vymřel a chyby v něm nejsou tak velké.

<!-- AdSnippet -->
