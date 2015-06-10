CSS3 Gradients – barevné přechody
=================================

Způsob, jak kódem vykreslit barevný přechod – jinak též gradient – všude, kde jsme donedávna používali externí obrázek.

Lineární přechod
----------------

Rovnoměrný barevný přechod seshora dolů uděláte takto:

    background: linear-gradient(lightgreen, darkgreen);

### Směr osy barevného přechodu

Používají se buď **klíčová slova** označující směr gradientu (`to bottom right`, `to right`) nebo **úhly**. Úhel 0&deg; vede zezdola nahoru, 90&deg; zprava doleva a tak dále po směru hodinových ručiček. Přednastavený je 90&deg; vedoucí seshora dolů. V CSS zápisu `180deg`.

Například tento gradient ze světle do tmavě zelené povede z levého dolního rohu směrem k pravému hornímu:

    background: linear-gradient(45deg, lightgreen, darkgreen);

### Zarážky barev

Můžeme samozřejmě ovlivnit, jak se nám jednotlivé barvy rozloží na ose průběhu přechodu. Slouží k tomu zarážky, definovatelné v běžných CSS jednotkách (`%`, `px`, `em`…). Je to stejná zarážka, jakou možná znáte z grafických editorů, jen vyjádřená kódem.

    background: linear-gradient(45deg, lightgreen, darkgreen 33%);

Barevná zarážka pro tmavě zelenou barvu tady začíná na třetině délky osy gradientu. Příklad si můžete naživo vyzkoušet nebo upravovat na [cdpn.io/e/CcdBf](http://cdpn.io/e/CcdBf).

### Barvy

Nemusíme definovat samozřejmě jen dvě barvy. Může jich být libovolný počet. Nezapomeňte, že máte k dispozici všechny způsoby definování barev včetně [rgba](css3-rgba.md) nebo průhledné `transparent`.

    background: linear-gradient(to bottom right, transparent, lightgreen 25%, rgb(0, 127, 0) 50%);

Tento zápis vykreslí gradient z levého horního do pravého dolního rohu. Do čtvrtiny délky úhlopříčky elementu se vykreslí přechod z průhledné do světle zelené barvy. Od čtvrtiny do poloviny pak přechod ze světle zelené do tmavě zelené, jen tentokrát zapsané pomocí RGB barevného modelu.

Kruhový přechod
----------------

Jednoduchý kruhový (radiální) přechod vytvoříme například tímto zápisem:

    .box-1 {
        background: radial-gradient(lightgreen, darkgreen);
    }

### Tvar a velikost

Přednastavený tvar přechodu je kružnice `circle`. Lze přenastavit na `ellipse` – elipsovitý tvar.

Hned za tvarem je možné definovat velikost přechodu. První možnost je definovat **velikost jako poloměr**. U kružnice jedním, u elipsy dvěma čísly. První udává výšku, druhý šířku elipsy.

    .box-2 {
      background: radial-gradient(ellipse 50px 30px, lightgreen, darkgreen);
    }

Poznámka: aktuální verze specifikace u kružnice neumožňuje nastavit rozměry s použitím procent. [dev.w3.org/csswg/css-images-3/#radial-size-circle](http://dev.w3.org/csswg/css-images-3/#radial-size-circle)

Druhá možnost je definovat **velikost klíčovým slovem**:

* `closest-side` – přechod bude končit u nejbližší strany elementu
* `farthest-side` – přechod bude končit u vzdálenější strany elementu
* `closest-corner` – přechod bude končit u nejbližšího rohu elementu
* `farthest-corner` – přechod bude končit u nejvzdálenějšího rohu elementu

### Pozice středu

Pozice středu barevného přechodu se definuje podobně jako u vlastnosti `background-position`. Je potřeba ji jen doplnit o klíčové slovo `at`:

    .box-3 {
        background: radial-gradient(at top left, lightgreen, darkgreen);
    }

### Zarážky barev

Fungují podobně jako u lineárního přechodu. Do čtvrtiny rozměrů elementu prohlížeč vykreslí světle zelenou kružnici, mezi čtvrtinou a polovinou barevný přechod mezi světle a tmavě zelenou a ve zbytku elementu uvidíte tmavě zelenou:

    .box-4 {
        background: radial-gradient(lightgreen 25%, darkgreen 50%);
    }

A tady je živý příklad, obsahující všechny čtyři varianty radiálního přechodu: [cdpn.io/e/cdyfx](http://cdpn.io/e/cdyfx).


Opakující se barevné přechody
-----------------------------

Deklarují se úplně stejně jako běžné barevné přechody, jen pomocí funkcí `repeating-linear-gradient()` nebo `repeating-radial-gradient()`. Narozdíl od běžných přechodů prohlížeč od poslední barevné zarážky nevykreslí barvu, kterou obsahuje, ale znovu opakuje definovaný gradient.

    .repeating-linear {
        background: repeating-linear-gradient(to bottom right, transparent, transparent 10%, green 10%, green 20%);
    }

V tomto příkladu vykreslujeme barevnou „zebru“, pomocí průhledné a zelené barvy.

Všimněte si také, že jsme nadefinovali těsně sousedící zarážky (`transparent 10%, green 10%`). To znamená, že gradient bude „ostrý“. Jinak řečeno se sousedící barvy vykreslí vedle sebe bez barevného přechodu.

Pojďme ještě zkusit opakující se kruhový gradient:

    .repeating-radial {
        background: repeating-radial-gradient(transparent, transparent 10%, green 10%, green 20%);
    }

Opakujícími se barevnými a zelenými plochami se nám vykreslí „terč“. Tady ovšem pozor, některé prohlížeče (konkrétně Chrome nebo Firefox v době psaní článku) zatím neumějí tyto složitější gradienty vyhlazovat, takže hrany kružnic budou „kostrbaté“.

Podpora v prohlížečích
----------------------

Barevné přechody neumí IE ve verzi 8 a 9 nebo Opera Mini. Android Browser 2.3 opakované gradienty nezvládne vůbec a v podpoře běžných gradientů má také mezery. [caniuse.com/gradients](http://caniuse.com/gradients)

Nezapomeňte tedy vždy definovat fallback. Gradient se považuje za obrázek na pozadí, takže si můžete fallback definovat jako běžnou barvu:

    color: #fff;
    background-color: green;
    background-image: linear-gradient(lightgreen, darkgreen);



### Gradient, dříve čert z prefixového pekla

Dnes už to takový problém není, ale každý prohlížeč v různých fázích vývoje implementoval různé fáze vývoje specifikace. Nebo vlastní návrh syntaxe. Takže pokud chcete podporovat i starší verze moderních prohlížečů, věnujte zvýšenou pozornost prefixovým variantám.

### Starší syntaxe prohlížečů postavených na Webkitu

Pokud někde chcete plně podporovat starší Chrome, Safari do verze 5, iOS Safari do verze 4, Android Browser do verze 3 a dalších několik prohlížečů, musíte použít jejich starší syntaxi. Jen pozor, liší se nejen prefixem, ale také způsobem zápisu. Například směr osy se určuje deklarováním růžku nebo strany, ze které gradient začíná:

    background-image: -webkit-linear-gradient(top, lightgreen, green);

U většiny webů to asi nebudete muset řešit a spokojíte se s fallbackem pomocí definované barvy. Poslední verze všech prohlížečů se shodují na W3 syntaxi, kterou používáme v příkladech. A bez prefixů!


### `filter` v IE8 a IE9

Jednoduché, dvoubarevné lineární gradienty lze ve starších Explorerech zařídit s pomocí proprietární vlastnosti filter:

    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr=#00ff00, endColorstr=#008800)";

V parametru `GradientType` nastavujete vertikální (`0`) nebo horizontální (`1`) směr gradientu. U filtrů jen pozor na pomalejší vykreslování a na fakt, že `background-image` účinnost filtrů ruší.


Tipy a triky
-------

Nezapomeňte, že gradient je vlastně **obrázek na pozadí elementu**, takže ho můžete použít pro definování obrázku odrážky (`list-style-image`) nebo pro obrázek na pozadí rámečku ([border-image](css3-border-image.md)).

Nejobvyklejší netriviální použití gradientů jsou **grafická tlačítka** vykreslená pomocí CSS. [cubiq.org/dropbox/cssgrad.html](http://cubiq.org/dropbox/cssgrad.html)

Takřka **vědecké povídání o gradientech**. Ana Tudor jde v následujícím odkazu pořádně do hloubky a na pomoc si bere matematiku. [hugogiraudel.com/2013/02/04/css-gradients/](http://hugogiraudel.com/2013/02/04/css-gradients/)

**ColorZilla Gradient Editor** vám pomůže vygenerovat kód gradientu i pro starší prohlížeče, včetně fallbacku pro IE8 a IE9. [colorzilla.com/gradient-editor/](http://colorzilla.com/gradient-editor/)

Lea Verou má hezkou galerii **barevných vzorů** vytvořených jen s pomocí gradientů. Berte to ale raději jen jako ukázku možností. [lea.verou.me/css3patterns](http://lea.verou.me/css3patterns)

Právě zmíněné barevné vzory často využívají tzv. **ostrý přechod**, což je přechod-nepřechod, ve kterém je mezi barvami ostrá hrana. `background: linear-gradient(to bottom, transparent, lightgreen 33%, darkgreen 33%);`  [cdpn.io/e/licEd](http://cdpn.io/e/licEd)




