Nové CSS3 jednotky: rem, vw, vh
===============================

rem
---

Rozměr, který odpovídá hodnotě `font-size` na root elementu, tedy `<html>`. *„root-emka“* jsou variantou známé jednotky `em`. Od běžných `em` se liší tím, že nevychází z velikosti fontu rodičovského elementu.

Velikost písma pro `<html>` element je v prohlížečích obvykle nastavená tak, aby odpovídala `16px`.

Pokud všechny rozměry týkající se typografie (nebo klidně i layoutu) nastavíte v `rem` jednotkách, můžete si snadno zvětšit celý dokument pouhou změnou hodnoty ve vlastnosti `html { font-size: … }` a vytvářet tak elastické layouty.

Podobně jako v příkladu výše můžete změnu velikosti písma celého dokumentu a s ním i elastické zvětšení layoutu provést pomocí [media query](css3-media-queries.md).

### Příklad

Všechny rozměry v dokumentu nastavíme pomocí jednotky `rem`. Pokud tedy nadpisy první úrovně nastavíme na `1.5rem`, budou velké 1,5 × `16px` – tedy `24px`.

```css
h1 {
  font-size: 1.5rem;
}
```

Pokud se tedy pomocí media query rozhodneme, že od šířky okna 801 pixelů nastavíme základní velikost písma na 25 pixelů, …

```css
@media (min-width: 801px) {
  html {
    font-size: 25px;
  }
}
```

… zvětší se nám všechny rozměry nastavené v jednotkách `rem`. Nadpis `<h1>` tedy bude mít v těchto šířkách okna velikost 38 pixelů (`25px` × 1,5).

Na živo můžete vyzkoušet tady: [cdpn.io/e/mnbaA](https://cdpn.io/e/mnbaA).

### Podpora v prohlížečích

IE9+. Pro starší prohlížeče lze vytvořit pixelový fallback:

```css
font-size: 24px;
font-size: 1.5rem;
```

Fallback je lepší nechat si generovat automaticky, například pomocí CSS preprocesoru.

Více o podpoře v prohlížečích: [caniuse.com/rem](https://caniuse.com/rem).


Jednotky viewportu: vw, vh, vmin, vmax
--------------------------------------

Umožňují definovat rozměry v CSS relativně k velikosti viewportu, zjednodušeně řečeno výšce nebo šířce okna.

* `vw` – zkratka pro „viewport width“ – `1vw` označuje setinu šířky viewportu
* `vh` – zkratka pro „viewport height“ – `1vh` označuje setinu výšky viewportu
* `vmin` – zkratka pro „viewport minimum“ – reprezentuje menší hodnotu z porovnání `1vw` a `1vh`
* `vmax` – zkratka pro „viewport maximum“ – reprezentuje větší hodnotu z porovnání `1vw` a `1vh`

### První příklad: roztažení elementu na celou výšku okna pomocí `vh`

Na rozdíl od procent se jednotky viewportu nevztahují k rozměrům nejbližšího rodiče, ale k šířce a výšce okna prohlížeče. Lze s nimi tedy dělat kouzla, která dříve byla možná jen pomocí CSS hacků nebo Javascriptu.

Příkladem budiž roztažení výšky layoutu stránky na celou výšku okna prohlížeče:

```css
.container {
  height: 100vh;
}
```

### Druhý příklad: elastická typografie s `vw`

S *volkswageny* můžete užitečné věci  dělat v oblasti velikosti písma.

Nejjednodušší příklad vypadá takto:

```css
h1 {
  font-size: 6vw;
}
```

Písmo se pak bude zvětšovat podle šířky okna. Zkuste si to sami:

- Téměř elastická typografie: [css-tricks.com/viewport-sized-typography/](https://css-tricks.com/viewport-sized-typography/).
- Složitější, ale plně elastická typografie: [smashingmagazine.com/2016/05/fluid-typography/](https://www.smashingmagazine.com/2016/05/fluid-typography/).
- Elastická typografie počítaná v procentech z výšky komponenty: [vrdl.cz/p/reseni-elasticka-typografie](reseni-elasticka-typografie.md).

### Třetí příklad: velikost textu v hlavním nadpise stránky pomocí `vmin`

Jak vám možná došlo u `vw` typografie, nadpisy mohou být na malých displejích příliš malé a na velkých příliš velké. Když se nechcete trápit [s Media Queries](css3-media-queries.md), zkuste `vmin`. 

```css
h1 {
  font-size: 6vmin;
}
```

Písmo se pak na malém displeji v režimu na výšku sází v procentech ze šířky. Na velkém monitoru zase v procentech z výšky. Ve spoustě situací se tak obejdete bez Media Queries.

Více v článku „MinMaxing: Understanding vMin and vMax in CSS“ na TheNewCode.com. [vrdl.in/afq9y](http://thenewcode.com/1137/MinMaxing-Understanding-vMin-and-vMax-in-CSS).

### Podpora v prohlížečích

V posledních verzích umí všechny moderní prohlížeče kromě Opery Mini: [caniuse.com/viewport-units](https://caniuse.com/viewport-units).

Je to ovšem trochu složitější:

* IE9 namísto `vmin` používá `vm`.
* IE10 neumí `vmax`.
* Safari na iOS6+7 má hned několik chyb souvisejících s jednotkami viewportu.  Sledujte odkazy na [caniuse.com/viewport-units](https://caniuse.com/viewport-units).
* IE8, Android Browser až do verze 4.3 a Opera Mini tyto jednotky neumí vůbec.





