# @extend v preprocesorech – raději jej nepoužívejte

V CSS preprocesorech LESS, Sass, ale i dalších, můžete použít `@extend`. Občas to může být užitečné, ale v textu se vás chystám odradit od používání těchto konstrukcí. Namísto `@extend` vám doporučím používat mixiny.

V příklad v Sassu:

```scss
.pat {
  color: white;
}

.mat {
  @extend .pel;
  background: black;
}
```

Zkompiluje do:

```scss
.pat, .mat {
  color: white;
}

.mat {
  background: black;
}
```

V LESSu to funguje jako pseudotřída:

```less
.pat {
  color: white;
}

.mat {
  &:extend(.pat);
  background: black;
}
```

Takhle to vypadá docela užitečně, že? Dobře, pojďme probrat argumenty pro použití:

## Nemusí se opakovat kód CSS deklarací (jenže se čas nutný pro psaní vymění za čas nutný pro čtení)

V příkladu výše jsem si ušetřil zápis `color: white` u selektoru `.mat`. V reálných situacích by toho kódu bylo více. Dobře, ale…

Na ušetření kódu je možné se dívat dvěmi úhly pohledu: V tom prvním si vývojář šetří práci s psaním. Neopakuje kód. Takzvaný DRY přístup. Fajn, ale jak rozeberu níže, `@extend` je poměrně složitý koncept, který má spoustu výjimek, ošemetností a nevýhod, která autor i čtenář musí znát.

Je to prostě o mnoho úrovní složitější konstrukce než prosté uvedení `color: white`. Snadnost psaní se tady jen vymění za snadnost čtení a chápání kódu.

DRY přístup je v CSS v pohodě, ale primárně v hodnotách. Méně už ve vlastnostech nebo celých deklaracích.

Další pohled je zkrze datovou velikost CSS. Používáte `@extend`, abyste šetřili data? Nedělejte to. Pokud máte na serveru zapnutý Gzip, kompresi dělá za vás. Gzip miluje opakování v kódu a duplicitní výskyty se do datového objemu soubooru nepromítnout. Nebuďte Gzip, buďte lidé.

## Nemusí se měnit HTML  (jenže v něm můžu přijít o důležitou informaci)

V našem příkladu bych pak nemusel zapsat tohle:

```html
<p class="pat mat"></p>
```

Stačil by tento zápis:

```html
<p class="mat"></p>
```

V tomhle abstraktním případě nejsou nevýhody vidět, ale v reálném světě bych mohl přijít o důležitou informaci.

Pokud totiž něco ukládám do třídy, očekávám, že to má sémantický význam. Vytvářím si komponentu nebo utilitu, kterou chci v HTML používat a zároveň chci, aby jejím přečtením z HTML bylo možné získat informaci významu nebo vzhledu té části, na kterou se dívám. 

V tomto demíčku předpokládejme, že `mat` rozšiřuje `pat`, proto by bylo vhodnější z něj udělat modifikátor:

```html
<p class="pat pat--mat"></p>
```

Důležitá informace v kódu zůstává: `pat` je komponenta a `--mat` její modifikátor. Více je v textu o pojmenovávací metodice [BEM](bem.md).

I tak se může stát, že HTML z nějakých důvodů není možné měnit. Prostě máme `<p class="mat"></p>` a hotovo, nelze do toho sáhnout. Zvažte, zda v takovém případě nemůžete použít některou z těchto alternativ:

- Proměnná pro opakující se hodnotu (`color: $colorWhite`)
- Mixin pro opakující se část kódu (`@mixin color-white`)

## Nevýhody @extend

### 1) Změna pořadí

Hezký příklad má Harry Robert ve své čtyři roky staré [filipice proti extendování](https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/):

```scss
%brand-font {
  font-family: webfont, sans-serif;
  font-weight: 700;
}

// …

h1 {
  @extend %brand-font;
  font-size: 2em;
}

// …

.btn {
  padding: 2em;
}

.content .btn {
  @extend %brand-font;
  display: inline-block;
  padding: 1em;
}
```

Zkompiluje do:

```scss
h1, .content .btn {
    font-family: webfont, sans-serif;
    font-weight: 700;
}

// …

h1 {
    font-size: 2em;
}

// …

.btn {
  padding: 2em;
}

.content .btn {
    display: inline-block;
    padding: 1em;
}
```

### 2) Extenduje se vše dotčené

### 3) Nelze extendovat v zavináčových pravidlech


