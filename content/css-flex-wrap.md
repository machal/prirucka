# CSS vlastnost flex-wrap: zalamování položek flexboxu

Vlastnost `flex-wrap` aplikujeme na kontejner flexboxu, abychom definovali, zda se položky rozvržení mohou zalamovat na více řádků nebo nikoliv. Hodnotou `wrap-reverse` také můžeme otočit pořadí vyskládávání prvků na příčné ose layoutu.

<figure>
<img src="../dist/images/original/vdlayout/css-flex-wrap.png" width="1600" height="900" alt="CSS vlastnost flex-wrap">
<figcaption markdown="1">
*Bude se to zalamovat, a pokud ano jakým směrem? Tomu velí vlastnost `flex-wrap`.*
</figcaption>
</figure>

<div class="related web-only" markdown="1">
- [Flexbox](css3-flexbox.md)
</div>

Toto jsou možné hodnoty:

- `nowrap`  
Výchozí hodnota. Flexbox bude jednořádkový.
- `wrap`  
Kontejner flexboxu umožní položkám, aby se zalomily na další řádek.
- `wrap-reverse`  
Položky se mohou zalomit do více řádků a zároveň se pořadí řádků otočí.

## Dva příklady {#priklady}

V obou demech máme jednoduché HTML…

```html
<div class="container">
  <p>
    <strong>Item 1</strong> …
  </p>
  <p>
    <strong>Item 2</strong> …
  </p>
  <p>
    <strong>Item 3</strong> …
  </p>  
</div>
```

…a ještě jednodušší základní CSS:

```css
.container {
  display: flex;
  flex-wrap: nowrap; /* nebo wrap, wrap-reverse */
}
```

Ve výsledku si můžete proklikávat jednotlivé hodnoty vlastnosti `flex-wrap`:

CodePen: [cdpn.io/e/OJRaYXJ](https://codepen.io/machal/pen/OJRaYXJ?editors=0000)

Připravil jsem ještě jedno demo, ve kterém jsou položky flexboxu obsahově velmi stručné a je jich daleko více, aby bylo vidět, že jde o _nepovinné_ zalamování.

<!-- AdSnippet -->

I po nastavení hodnoty na `wrap` nebo `wrap-reverse` prohlížeč uvažuje, zda vůbec zalamovat potřebuje. Je to asi jako když vypisujete text do řádku.

CodePen: [cdpn.io/e/WNoNrbB](https://codepen.io/machal/pen/WNoNrbB?editors=0000)

Všimněte si také prosím chování hodnoty `wrap-reverse` – položky se vyskládávájí dle očekávání zdola, ale zleva doprava, nikoliv naopak, jak by mohl někdo očekávat.

Dává to ale smysl. Hodnota `wrap-reverse` totiž zalamuje naopak. Poslední položka řádku skočí nahoru a zařadí se nad první položku.

## Zkratka flex-flow {#flex-flow}

Možná už víte, že můžete použít [vlastnost `flex-flow`](css-flex-flow.md), zkratku pro vlastnosti [`flex-direction`](css-flex-wrap.md) a `flex-wrap`.

```
flex-flow: wrap = flex-wrap: wrap
```

## Podpora v prohlížečích {#podpora}

Podpora je velmi dobrá a o chybách nevím. Na CanIUse se u Internet Exploreru 11 v době psaní uvádí částečná podpora s poznámkou, že to je kvůli velkému počtu chyb. Trošku horší je, že už nejsou uvedeny. Pokud o zdokumentovaných chybách víte, napište mi je, rád je doplním. [CanIUse.com](https://caniuse.com/mdn-css_properties_flex-wrap)

<!-- AdSnippet -->
