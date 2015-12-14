CSS3 Border Image – rámeček vykreslený obrázkem
===============================================

Jde o způsob, jak kolem elementu vykreslit vlastní namísto nativních rámečků.

Vezmeme jakýkoliv obrázek obsahující rámeček a prohlížeči řekneme, jak jej má naporcovat. Následuje kouzlo – rámeček se elegantně přizpůsobí šířce i výšce elementu, ať je jakákoliv.

Syntaxe
-----------

```css
border-image:
  _zdrojovy_obrazek_
  _rozmery_rezu_
  _sirka_ramecku_
  _zacatek_rezu_
  _opakovani_
```

### Zdrojový obrázek

Jediná povinná vlastnost. Samostatně jako `border-image-source: url(…)`.

### Rozměry řezů

Právě touto hodnotou zdrojový obrázek naporcujeme tak, aby prohlížeč věděl, kde leží výřezy pro všechny čtyři rohy a kde výřezy pro vertikální a horizontální stranu rámečku.

Obsahuje jedno, dvě (horizontální a vertikální řez) nebo čtyři čísla (řez horní, pravý, dolní a levý). Definovat lze v pixelech nebo v procentech z rozměrů zdrojového obrázku. Výchozí stav je `border-image-slice: 100%`.

Pokud je přítomno klíčové slovo `fill`, vezme se ze zdrojového obrázku i jeho střední část a vykreslí se přes pozadí elementu.

<img class="picture" src="content/schemes/CSS3-border-image.png" width="700" height="394" alt="Rozměry řezů v border-image">

### Šířka rámečku

`border-image-width` specifikuje šířku rámečku v pixelech nebo procentech, podobně jako u `border-width`.

Pokud má hodnotu `auto`, šířka se počítá z rozměrů řezů.

### Začátek řezu

Rozměr specifikovaný v `border-image-outset` říká, jak moc obrázkový rámeček přetéká mimo rozměry elementu. Ty se počítají, jako by měl element nastaveno [`box-sizing: border-box`](css3-box-sizing.md).

### Opakování

Jak bude prohlížeč pracovat s vertikální a horizontální stranou obrázkového rámečku, pokud má rámeček jiné rozměry než zdrojový obrázek? To můžeme nastavit v `border-image-repeat`. Možnosti jsou tyto:

* `stretch` – obrázek se roztáhne na šířku rámečku
* `repeat` – obrázek se bude opakovat
* `round` – pokud plochu nevyplní celočíselný počet opakování, jednotlivá opakování se roztáhnou, aby plochu vyplnila
* `space` – pokud plochu nevyplní celočíselný počet opakování, prázdná plocha je spravedlivě rozdělena mezi všechna opakování (k jednotlivým opakováním se přidá mezera)

Je dobré připomenout, že i tady je možné nastavit různé hodnoty pro horizontální i vertikální část rámečku. Například:


```css
border-image-repeat: stretch repeat;
```


Může se hodit
----

* Moc fajn generátor, který vám ulehčí život hlavně při hledání rozměrů řezů — [border-image.com](http://border-image.com/)
* Pozor, `border-image` nebude podle aktuální verze specifikace fungovat, pokud u stylovaného elementu zapomenete na deklaraci vlastností `border-style` a `border-width`.


Podpora v prohlížečích
----------------------

IE11+. Se staršími prohlížeči se lze vypořádat definovanou alternativou a detekcí vlastnosti Modernizrem: `.no-borderimage .box { … }` nebo prostým fallbackem pomocí vlastnosti `border-color`.

Jednoduchý příklad s barevným přechodem
----

Protože [CSS gradienty](css3-gradients.md) se mezi obrázky počítají také, můžete namísto rámečku použít barevný přechod.

Pamatujte, že vždy je nutné nejprve definovat nativní rámeček obrázku. Jednak kvůli rozměrům, jednak tím vytvoříme fallback pro prohlížeče, které `border-image` nezvládají. V našem příkladu tedy kolem elementu nejdříve vyrobíme 20pixelový zelený rámeček:

```css
border: 20px solid green;
```

Teď prohlížeči řekneme, že namísto zelené barvy chceme v rámečku barevný přechod:

```css
border-image-source:
  linear-gradient(lightgreen, darkgreen);
```

K našemu překvapení ovšem prohlížeč barevný přechod vykreslí jen v rozích rámečku. Důvodem je výchozí hodnota rozměrů řezů: `border-image-slice: 100%`. Znamená, že obrázek se použije právě jen pro všechny čtyři růžky. Předefinujeme tedy tak, aby odpovídal šířce našeho rámečku:

```css
border-image-slice: 20;
```

A je to. Příklad si můžete vyzkoušet na [codepen.io/machal/pen/zdyIJ](http://codepen.io/machal/pen/zdyIJ).


Příklad s bitmapovým obrázkem na pozadí
--------------------

Opět si nejdříve nadefinujeme rozměry rámečku a fallback pro staré prohlížeče:

```css
border-color: green;
border-style: solid;
border-width: 21px 23px;
```

Přidáme obrázek na pozadí:

```css
border-image-source: url(border-image-source.png);
```

Dále definujeme řezy. V tomto zdrojovém obrázku máme horizontální rámeček vysoký	21 pixelů a vertikální 23 pixelů.

```css
border-image-slice: 21 23;
```

Nakonec je potřeba prohlížeči oznámit, že postranní řezy hodláme v případě nárůstu velikosti elementu opakovat:

```css
border-image-repeat: repeat;
```

A pojďme si ještě vyzkoušet zkrácený zápis posledních tří deklarací:

```css
border-image: url(border-image-source.png) 21 23 repeat;
```

Hotovo. Příklad si můžete vyzkoušet na [codepen.io/machal/pen/DLkjm](http://codepen.io/machal/pen/DLkjm).
