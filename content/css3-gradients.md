CSS3 Gradients: barevné přechody
================================

Způsob, jak kódem vykreslit barevný přechod – jinak též gradient – všude, kde jsme donedávna používali externí obrázek.

Lineární přechod
----------------

Rovnoměrný barevný přechod seshora dolů uděláte takto:

```css
background: linear-gradient(lightgreen, darkgreen);
```

### Směr osy barevného přechodu

Používají se buď **klíčová slova** označující směr gradientu (`to bottom right`, `to right`) nebo **úhly**. Úhel 0&deg; vede zezdola nahoru, 90&deg; zleva doprava a tak dále po směru hodinových ručiček. Přednastavený je 180&deg; vedoucí seshora dolů. V CSS zápisu `180deg`.

<!-- AdSnippet -->

Například tento gradient ze světle do tmavě zelené povede z levého dolního rohu směrem k pravému hornímu:

```css
background:
  linear-gradient(45deg, lightgreen, darkgreen);
```

### Zarážky barev

Můžeme samozřejmě ovlivnit, jak se nám jednotlivé barvy rozloží na ose průběhu přechodu. Slouží k tomu zarážky, definovatelné v běžných CSS jednotkách (`%`, `px`, `em`…). Je to stejná zarážka, jakou možná znáte z grafických editorů, jen vyjádřená kódem.

```css
background:
  linear-gradient(45deg, lightgreen, darkgreen 33%);
```

Barevná zarážka pro tmavě zelenou barvu tady začíná na třetině délky osy gradientu. Příklad si můžete naživo vyzkoušet nebo upravovat na [cdpn.io/e/CcdBf](https://cdpn.io/e/CcdBf).

### Barvy

Nemusíme definovat samozřejmě jen dvě barvy. Může jich být libovolný počet. Nezapomeňte, že máte k dispozici všechny způsoby definování barev včetně [rgba](css3-rgba.md) nebo průhledné `transparent`.

```css
background:
  linear-gradient(to bottom right, transparent,
    lightgreen 25%, rgb(0, 127, 0) 50%);
```

Tento zápis vykreslí gradient z levého horního do pravého dolního rohu. Do čtvrtiny délky úhlopříčky elementu se vykreslí přechod z průhledné do světle zelené barvy. Od čtvrtiny do poloviny pak přechod ze světle zelené do tmavě zelené, jen tentokrát zapsané pomocí RGB barevného modelu.

## Kruhový přechod

Jednoduchý kruhový (radiální) přechod vytvoříme například tímto zápisem:

```css
.box-1 {
    background:
      radial-gradient(lightgreen, darkgreen);
}
```

### Tvar a velikost

Přednastavený tvar přechodu je kružnice `circle`. Lze přenastavit na `ellipse` – elipsovitý tvar.

Hned za tvarem je možné definovat velikost přechodu. První možnost je definovat **velikost jako poloměr**. U kružnice jedním, u elipsy dvěma čísly. První udává výšku, druhý šířku elipsy.

```css
.box-2 {
  background:
    radial-gradient(ellipse 50px 30px,
      lightgreen, darkgreen);
}
```

Druhá možnost je definovat **velikost klíčovým slovem**:

* `closest-side` – přechod bude končit u nejbližší strany elementu
* `farthest-side` – přechod bude končit u vzdálenější strany elementu
* `closest-corner` – přechod bude končit u nejbližšího rohu elementu
* `farthest-corner` – přechod bude končit u nejvzdálenějšího rohu elementu

### Pozice středu

Pozice středu barevného přechodu se definuje podobně jako u vlastnosti `background-position`. Je potřeba ji jen doplnit o klíčové slovo `at`:

```css
.box-3 {
    background:
      radial-gradient(at top left, lightgreen, darkgreen);
}
```

### Zarážky barev

Fungují podobně jako u lineárního přechodu. Do čtvrtiny rozměrů elementu prohlížeč vykreslí světle zelenou kružnici, mezi čtvrtinou a polovinou barevný přechod mezi světle a tmavě zelenou a ve zbytku elementu uvidíte tmavě zelenou:

```css
.box-4 {
    background:
      radial-gradient(lightgreen 25%, darkgreen 50%);
}
```

A tady je živý příklad, obsahující všechny čtyři varianty radiálního přechodu: [cdpn.io/e/cdyfx](https://cdpn.io/e/cdyfx).


## Opakující se barevné přechody

Deklarují se úplně stejně jako běžné barevné přechody, jen pomocí funkcí `repeating-linear-gradient()` nebo `repeating-radial-gradient()`. Na rozdíl od běžných přechodů prohlížeč od poslední barevné zarážky nevykreslí barvu, kterou obsahuje, ale znovu opakuje definovaný gradient.

```css
.repeating-linear {
    background:
      repeating-linear-gradient(to bottom right,
        transparent, transparent 10%,
        green 10%, green 20%);
}
```

V tomto příkladu vykreslujeme barevnou „zebru“, pomocí průhledné a zelené barvy.

Všimněte si také, že jsme nadefinovali těsně sousedící zarážky (`transparent 10%, green 10%`). To znamená, že gradient bude „ostrý“. Jinak řečeno se sousedící barvy vykreslí vedle sebe bez barevného přechodu.

Pojďme ještě zkusit opakující se kruhový gradient:

```css
.repeating-radial {
    background:
      repeating-radial-gradient(transparent,
        transparent 10%, green 10%, green 20%);
}
```

Opakujícími se barevnými a zelenými plochami se nám vykreslí „terč“. Tady ovšem pozor, některé prohlížeče (konkrétně Chrome nebo Firefox v době psaní článku) zatím neumějí tyto složitější gradienty vyhlazovat, takže hrany kružnic budou „kostrbaté“.

## Podpora v prohlížečích

Barevné přechody neumí MSIE ve verzi 8 a 9 nebo Opera Mini.  [caniuse.com/gradients](https://caniuse.com/gradients).

<!-- AdSnippet -->

Pokud je to pro vás problém, nezapomeňte vždy definovat fallback. Gradient se považuje za obrázek na pozadí, takže si můžete fallback definovat jako běžnou barvu:

```css
color: #fff;
background-color: green;
background-image:
  linear-gradient(lightgreen, darkgreen);
```


## Tipy, triky a nástroje

Nezapomeňte, že gradient je vlastně **obrázek na pozadí elementu**, takže ho můžete použít pro definování obrázku odrážky (`list-style-image`) nebo pro obrázek na pozadí rámečku ([border-image](css3-border-image.md)).

<!-- AdSnippet -->

Nejobvyklejší netriviální použití gradientů jsou **grafická tlačítka** vykreslená pomocí CSS: [cubiq.org/dropbox/cssgrad.html](http://cubiq.org/dropbox/cssgrad.html).

Takřka **vědecké povídání o gradientech**. Ana Tudor jde v následujícím odkazu pořádně do hloubky a na pomoc si bere matematiku: [hugogiraudel.com/2013/02/04/css-gradients](http://hugogiraudel.com/2013/02/04/css-gradients/).

**ColorZilla Gradient Editor** vám pomůže vygenerovat kód gradientu i pro starší prohlížeče, včetně fallbacku pro IE8 a IE9: [colorzilla.com/gradient-editor](http://colorzilla.com/gradient-editor/).

Lea Verou má hezkou galerii **barevných vzorů** vytvořených jen s pomocí gradientů. Berte to ale raději jen jako ukázku možností: [lea.verou.me/css3patterns](http://lea.verou.me/css3patterns).

Právě zmíněné barevné vzory často využívají tzv. **ostrý přechod**, což je přechod-nepřechod, ve kterém je mezi barvami ostrá hrana: `background: linear-gradient(to bottom, transparent, lightgreen 33%, darkgreen 33%);` [cdpn.io/e/licEd](https://cdpn.io/e/licEd).

**CSS Scales** jsou předdefinované barevné přechody. Hezké, ano. Navíc ovšem při jejich vymýšlení mysleli na přístupnost a barvy jsou vhodné pro barvoslepé lidi. [bennettfeely.com/scales](http://bennettfeely.com/scales/).




