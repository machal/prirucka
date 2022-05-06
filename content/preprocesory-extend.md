# @extend v preprocesorech: Bacha na něj!

V CSS preprocesorech jako LESS a Sass můžete použít direktivu `@extend`. Asi tak ve dvou případech z tisíce to může být užitečné, ale v textu se vás od toho chystám odradit.

Definice: `@extend` umí vzít deklarace jedné třídy a použít je v jiné třídě.

Názor: `@extend` je pro mě archeologická vykopávka ze světa, kdy jsme ještě nepoužívali modulární CSS prezentované dneska hlavně [metodikou BEM](bem.md). Potřebujete abstrakci? Prostě používejte proměnné nebo mixiny.

Ano, pochopili jste to správně. Tohle bude *hejt* na `@extend`. Ovšem kódem podložený.

<!-- AdSnippet -->

Nejdřív ale – co vlastně sakra ten `@extend` dělá?

```scss
.pat {
  color: white;
}

.mat {
  @extend .pat;
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

V LESSu to funguje ještě o dost ošklivěji jako „pseudotřída“:

```less
.pat {
  color: white;
}

.mat {
  &:extend(.pat);
  background: black;
}
```

Třeba vám vyskočilo pár zajímavých výhod. Dobře, pojďme probrat argumenty pro použití:

## Nemusí se opakovat kód CSS deklarací (jenže se čas nutný pro psaní vymění za čas nutný pro čtení) {#nemusi-opakovat}

V příkladu výše jsem si ušetřil zápis `color: white` u [selektoru](css-selektory.md) `.mat`. V reálných situacích by toho ušetřeného kódu bylo více. Dobře, ale…

Na ušetření kódu je možné se dívat dvěma úhly pohledu: V tom prvním si vývojář šetří práci s psaním. Neopakuje kód. Takzvaný „[DRY](https://cs.wikipedia.org/wiki/Don%27t_repeat_yourself) přístup“. Fajn, ale jak rozeberu níže, `@extend` je poměrně složitý koncept, který má spoustu výjimek, ošemetností a nevýhod, která autor i čtenář musí znát.

<!-- AdSnippet -->

Je to prostě o mnoho úrovní složitější konstrukce než prosté uvedení `color: white`. Snadnost psaní se tady jen vymění za nesnadnost čtení, chápání a refaktorizace kódu.

Kromě toho, pokaždé když se řekne „DRY v CSS“, naježí se mi zbytek vlasů. DRY přístup v CSS může být v pohodě, ale primárně v hodnotách. Méně už ve vlastnostech nebo celých deklaracích. Ale o tom jindy.

Další pohled na ušetření kódu je skrze datovou velikost CSS. Používáte `@extend`, abyste šetřili data? Nedělejte to. Pokud máte na serveru zapnutý Gzip, kompresi dělá za vás. Gzip miluje opakování v kódu a duplicitní výskyty se do datového objemu souboru nepromítnou. Nebuďte Gzip, buďte lidé. Nedělejte práci strojů.

## Nemusí se měnit HTML  (jenže v něm můžu přijít o důležitou informaci) {#menit-html}

V našem příkladu bych pak nemusel zapsat tohle:

```html
<p class="pat mat"></p>
```

Stačil by následující zápis:

```html
<p class="mat"></p>
```

V tomhle abstraktním příkladu nejsou nevýhody vidět, ale v reálném světě bych mohl přijít o důležitou informaci.

<div class="related" markdown="1">
- [Zásady psaní respektujícího CSS](rcss-zasady.md)
- [OOCSS: objektové psaní CSS](oocss.md)
- [BEM: Pojmenovávací konvence pro třídy v CSS](bem.md)
- [Průvodce CSS preprocesory](/blog/12-css-preprocesory-1)
</div>

Pokud totiž něco ukládám do třídy, očekávám, že to má sémantický význam. Vytvářím si komponentu nebo utilitu, kterou chci v HTML používat a zároveň chci, aby jejím přečtením z HTML bylo možné získat informaci významu nebo vzhledu té části, na kterou se dívám.

V tomto demíčku předpokládejme, že třída `mat` rozšiřuje třídu `pat`, proto by bylo vhodnější z ní udělat modifikátor:

```html
<p class="pat pat--mat"></p>
```

Důležitá informace v kódu zůstává: `pat` je komponenta a `--mat` její modifikátor.

I tak se může stát, že HTML z nějakých důvodů není možné měnit. Prostě máme `<p class="mat"></p>` a hotovo, nelze do toho sáhnout. Zvažte, zda v takovém případě nemůžete použít některou z těchto alternativ:

- Proměnná pro opakující se hodnotu (`color: $colorWhite`)
- Mixin pro opakující se část kódu (`@mixin color-white`)

## Nevýhody @extend {#nevyhody}

V *hejtu* nesmí chybět výčet problémů kritizovaného potížisty. Gratuluji, právě jste k nim dočetli.

### 1) Změna pořadí deklarací {#nevyhoda-poradi}

Občas se říká, že extendování placeholderu nemá nevýhody běžného extendování. Myslím, že jich má i tak ale dost. Mrkněme na příklad s placeholderem `%brand-font`:

```scss
%brand-font {
  font-family: webfont, sans-serif;
  font-weight: 700;
}

h1 {
  @extend %brand-font;
  font-size: 2em;
}

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

h1 {
  font-size: 2em;
}

.btn {
  display: inline-block;  
  padding: 2em;
}

.content .btn {
  padding: 1em;
}
```

Problém je v tom, že se vám prvek s vyšší specifičností `.content .btn` v kódu přestěhuje na začátek. Pokud jste ale specifičnost zvyšovali například jen proto, aby „přebila“ vlastnosti z jiné deklarace, nyní jste v čudu, protože `.content .btn` vám bude přetěžovat vlastnosti všech `.btn` s nižší specifičností.

Jak bych to řešil? V tomto případě dvěma proměnnými. Těm dávám vždy přednost, pokud jde o zobecňování:

```scss
$brandFontFamily: webfont, sans-serif;
$brandFontWeight: 700;
```

Obecně vzato je pro udržitelnost CSS dost zásadní, aby [graf specifičnosti](https://csswizardry.com/2014/10/the-specificity-graph/) deklarací v CSS průběžně rostl. Předpokládám, že si dáváte pozor, aby to tak bylo - typografie jde první, komponenty druhé a tak dále. `@extend` vám to dokonale rozbije.

Podobné příklady [uvádí Harry Roberts](https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/), který k používání `@extend` píše:

> I would generally advise never to use @extend at all. It is something of a Fool’s Gold: a feature with a lot of promise and twice as many caveats.

### 2) Vytváří se nečitelný kód {#nevyhoda-hnusny-kod}

Čtete zkompilované CSS? Měli byste. Ono se to občas hodí, nejen kvůli debugování, ale také kontrole, zda v preprocesoru neděláte prohřešky proti stylové lidskosti. Na to je `@extend` úplný expert:

```css
.product .single_add_to_cart_button, .cart .button,
input.checkout-button.alt.button, .shipping-calculator-form .button,
.multistep_step .button, #place_order.button,
.single-product .single_add_to_cart_button.button.alt,
.woocommerce a.button, .woocommerce button.button,
.woocommerce input.button, .woocommerce #respond input#submit,
.woocommerce #content input.button,
.woocommerce-page a.button, .woocommerce-page button.button,
.woocommerce-page input.button, .woocommerce-page #respond input#submit,
.woocommerce-page #content input.button {
  background-color: #605f5e;
}
```

Nebudu samozřejmě prozrazovat, ze kterého pluginu pro WordPress ta ukázka je. Ale vážně: Pokuste se pochopit, co tím autor nebo autorka zamýšleli. Ano správně – možná, že sami nevěděli. Prostě extendovali „páč to vypadalo užitečně“.

Příklad jsem si vypůjčil z článku [Don’t Over-@extend Yourself in Sass (Or: There’s a Class for That!)](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/) od Freda Meyera.

Mimochodem všimli jste si, že nejsem sám, kdo extendování v CSS hejtuje. Náhoda? Nemyslím si.

Ale konec vtipkování a pojďme na poslední nevýhodu.

### 3) Nelze extendovat v zavináčových pravidlech {#nevyhoda-zavinacova}

Tohle je poměrně málo známé, ale uživatelé `@extend` se na to dříve či později napálí:

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;
}

@media print {
  .seriousError {
    // Nebude fungovat: .error je mimo obsah direktivy "@media print"
    @extend .error;
    border-width: 3px;
  }
}
```

Příklad mám [z dokumentace Sass](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend), ale stejně to [nefunguje v LESS](http://lesscss.org/features/#extend-feature-scoping-extend-inside-media). Týká se to samozřejmě [i Media Queries](css3-media-queries.md) a všech zavináčových pravidel.

Vidíte pořád nějaké rozumné využití extendování bez vedlejších účinků? Napište mě to do komentářů.

## Používejte raději proměnné nebo mixiny {#radeji-promenne-mixiny}

Pokud potřebujete zobecňovat v kódu, zvažte zda vám nestačí proměnná. V naprosté většině situací bude.

Nestačí proměnná? Volte mixin. Jejich výhody sumarizuje Sitepoint v článku [Why You Should Avoid Sass @extend](https://www.sitepoint.com/avoid-sass-extend/):

- Nemění pořadí v kódu, nemají omezení pro zavináčová pravidla.
- Můžete jim nastavit obsah díky `@content`.
- Je možné jim posílat parametry.

Prostě `@extend` zahoďte, nepoužívejte, utečte od něj. A pokud jsem vás nepřesvědčil, buďte při jeho používání alespoň hóódně opatrní. Tady je [návod ze Sass Guidelines Huga Giraudela](https://sass-guidelin.es/cz/#extend) v českém překladu Honzy Bittnera:

- Použijte extend z modulu, ne napříč různými moduly.
- Použijte extend na samostatné placeholdery, nikoliv na skutečné selektory.
- Ujistěte se, že placeholder, který extendujete, je ve stylech přítomný co možná nejméně.

<!-- AdSnippet -->
