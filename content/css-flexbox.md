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

<div class="reference-items">

  <article role="article">
    <h4><a href="css-flex-wrap.md"><code>flex-wrap</code></a></h4>
    <p><a href="css-flex-wrap.md"><img src="../dist/images/small/vdlayout/css-flex-wrap-schema.png" alt="Vlastnost flex-wrap" /></a></p>
    <p>Mohou se položky zalamovat? Výchozí je nezalamovat. <br>Např. <code>flex-wrap:wrap</code> – položky se mohou vykreslit na další řádek.</p>
  </article>

  <article role="article">
    <h4><a href="css-flex-direction.md"><code>flex-direction</code></a></h4>
    <p><a href="css-flex-direction.md"><img src="../dist/images/small/vdlayout/css-flex-direction-schema.png" alt="Vlastnost flex-direction" /></a></p>
    <p>Určí směr toku rozvržení. Výchozí je zleva doprava, do řádku. <br>Např. <code>flex-direction:column</code> – položky se skládají shora dolů, do sloupce.</p>
  </article>

  <article role="article">
    <h4><a href="css-flex-flow.md"><code>flex-flow</code></a></h4>
    <p><a href="css-flex-flow.md"><img src="../dist/images/small/vdlayout/css-flex-flow-schema.png" alt="Vlastnost flex-flow" /></a></p>
    <p>Zkratka pro <code>flex-wrap</code> a <code>flex-direction</code>. <br>Např. <code>flex-flow:wrap column</code> – položky se zalomují a skládají shora dolů.</p>
  </article>

</div>

<div class="web-only" markdown="1">
<!-- Kopie z css-multicolumn.md -->

Dále lze na kontejner flexboxu aplikovat také vlastnosti [zarovnání boxů (CSS Box Alignment)](css-box-alignment.md):

<div class="reference-items">

  <article role="article">
    <h4><a href="css-align-items.md"><code>align-items</code></a></h4>
    <p><a href="css-align-items.md"><img src="../dist/images/small/vdlayout/css-align-items-schema.png" alt="Vlastnost align-items" /></a></p>
    <p>Zarovnání na blokové ose (obvykle svisle). <br> Např. <code>align-items: end</code> zarovná položky ke spodní hraně kontejneru.</p>
  </article>

  <article role="article">
    <h4><a href="css-place-items.md"><code>place-items</code></a></h4>
    <p><a href="css-place-items.md"><img src="../dist/images/small/vdlayout/css-place-items-schema.png" alt="Vlastnost place-items" /></a></p>
    <p>Zkratka pro zarovnání položek v obou směrech. <br> Např. <code>place-items: end center</code> zarovná položky ke spodní hraně a vodorovně na střed.</p>
  </article>

</div>

K dispozici máme i vlastnosti CSS Box Align, řídící rozdělení volného prostoru, který uvnitř kontejneru zůstává mezi položkami.

<div class="reference-items">

  <article role="article">
    <h4><a href="css-justify-content.md"><code>justify-content</code></a></h4>
    <p><a href="css-justify-content.md"><img src="../dist/images/small/vdlayout/css-justify-content-schema.png" alt="Vlastnost justify-content" /></a></p>
    <p>Rozdělení prostoru na řádkové ose (obvykle vodorovně). <br> Např. <code>justify-content:space-between</code> rozdělí prostor mezi položky.</p>
  </article>

  <article role="article">
    <h4><a href="css-align-content.md"><code>align-content</code></a></h4>
    <p><a href="css-align-content.md"><img src="../dist/images/small/vdlayout/css-align-content-schema.png" alt="Vlastnost align-content" /></a></p>
    <p>Rozdělení prostoru na blokové ose (obvykle svisle). <br> Např. <code>align-content:start</code> zajistí zarovnání položek k horní hraně kontejneru.</p>
  </article>

  <article role="article">
    <h4><a href="css-place-content.md"><code>place-content</code></a></h4>
    <p><a href="css-place-content.md"><img src="../dist/images/small/vdlayout/css-place-content-schema.png" alt="Vlastnost place-content" /></a></p>
    <p>Zkratka pro rozdělení prostoru v obou směrech. <br> Např. <code>place-content:start space-between</code> zajistí zarovnání položek k horní hraně kontejneru a vodorovné dělení prostoru mezi položky.</p>
  </article>

</div>

<!-- /Kopie z css-multicolumn.md -->
</div>

### Položky flexboxu {#vlastnosti-polozky}

<div class="reference-items">

  <article role="article">
    <h4><a href="css-flex-grow.md"><code>flex-grow</code></a></h4>
    <p><a href="css-flex-grow.md"><img src="../dist/images/small/vdlayout/css-flex-grow-schema.png" alt="Vlastnost flex-grow" /></a></p>
    <p>Jak moc může položka růst. Výchozí je <code>0</code>. <br>Např. <code>flex-grow: 1</code> – bere si podíl v hodnotě <code>1</code> z volného prostoru.</p>
  </article>

  <article role="article">
    <h4><a href="css-flex-shrink.md"><code>flex-shrink</code></a></h4>
    <p><a href="css-flex-shrink.md"><img src="../dist/images/small/vdlayout/css-flex-shrink-schema.png" alt="Vlastnost flex-shrink" /></a></p>
    <p>Faktor smršťování položky. Výchozí je <code>1</code>. <br>Např. <code>flex-shrink:0</code> – položka se nesmršťuje.</p>
  </article>

  <article role="article">
    <h4><a href="css-flex-basis.md"><code>flex-basis</code></a></h4>
    <p><a href="css-flex-basis.md"><img src="../dist/images/small/vdlayout/css-flex-basis-schema.png" alt="Vlastnost flex-basis" /></a></p>
    <p>Výchozí velikost položky. Výchozí je <code>auto</code>. <br>Např. <code>flex-basis:0</code> – nehledí se na rozměr obsahu ani <code>width</code> či <code>height</code>.</p>
  </article>

  <article role="article">
    <h4><a href="css-flex.md"><code>flex</code></a></h4>
    <p><a href="css-flex.md"><img src="../dist/images/small/vdlayout/css-flex-schema.png" alt="Vlastnost flex-basis" /></a></p>
    <p>Zkratka pro vlastnosti <code>flex-grow</code>, <code>flex-shrink</code> a <code>flex-basis</code>. <br>Např. <code>flex:auto</code> – roste, smršťuje se a rozměr je nastavený na <code>auto</code>.</p>
  </article>

</div>

<div class="web-only" markdown="1">
<!-- Kopie z css-multicolumn.md -->

Také na položky flexboxu můžeme aplikovat vlastnosti [zarovnání boxů](css-box-alignment.md):

Následujícími vlastnostmi pro konkrétní položku definujeme, jak se bude zarovnávat.

<div class="reference-items">

  <article role="article">
    <h4><a href="css-align-self.md"><code>align-self</code></a></h4>
    <p><a href="css-align-self.md"><img src="../dist/images/small/vdlayout/css-align-self-schema.png?2" alt="Vlastnost align-self" /></a></p>
    <p>Zarovnání na blokové ose (obvykle svisle). <br> Např. <code>align-self:end</code> zarovná položku ke spodní hraně.</p>
  </article>

  <article role="article">
    <h4><a href="css-place-self.md"><code>place-self</code></a></h4>
    <p><a href="css-place-self.md"><img src="../dist/images/small/vdlayout/css-place-self-schema.png" alt="Vlastnost place-self" /></a></p>
    <p>Zkratka pro zarovnání jednotlivé položky v obou směrech. <br> Např. <code>place-self:end center</code> zarovná položku ke spodní hraně a vodorovně doprostřed.</p>
  </article>

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
