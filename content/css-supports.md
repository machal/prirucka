# Feature Queries v CSS: @supports

V CSS nebo JavaScriptu se nám občas hodí napsat kód, který rozlišuje varianty podle podpory určitých CSS vlastností.

K tomu můžeme použít poměrně nové pravidlo `@supports`, součást specifikace „CSS Conditional Rules Module“.

S pomocí `@supports` je možné psát „feature queries“, dotazy na vlastnosti. Vezměme například ukázky s dotazem na nativní podporu [layoutu typu masonry](css-masonry.md):

```css
@supports (grid-template-rows: masonry) {
  .text {
    color: green;
  }
}
```

Pokud se na ukázku podíváte v prohlížečích, které podporují vlastnost `grid-template-rows` a zároveň její hodnotu `masonry`, což je i koncem roku 2021 zatím jen Firefox Nightly, uvidíte zelený text.

Ve všech ostatních prohlížečích bude text černý.

CodePen: [cdpn.io/e/NWbLRKv](https://codepen.io/machal/pen/NWbLRKv?editors=1100)

Všimněte si důležité věci – pro detekování podpory se musíme dotazovat na vlastnost i její hodnotu. Takže pokud bychom se ptali na podporu vlastnosti `display`, musíme se zeptat například na `display:block`.

## Logické operátory: `not`, `and` a `or` {#operatory}

Specifikace „Feature Queries“ velmi správně definuje logické operátory podle zvyklostí z jiných jazyků.

### Operátor `not` {#operatory-not}

Velice často se nám může hodit negace a klíčové slovo `not`:

```css
@supports not (display: grid) {
  .box {
    float: right;
  }
}
```

Kód se aplikuje jen v těch prohlížečích, které _nepodporují_ [CSS grid](css-grid.md).

### Operátor `and` {#operatory-and}

Logický operátor konjunkce – `and`:

```css
@supports (display: table-cell) and (display: list-item) {
  .text {
    color: green;
  }
}
```

Použijeme v případech, kdy musí platit všechny podmínky.

### Operátor `or` {#operatory-or}

Další operátor – `or` – definuje logickou disjunkci:

```css
@supports (transform-style: preserve) or 
  (-moz-transform-style: preserve) {
  .text {
    color: green;
  }
}
```

Podmínka je platná v případě, že prohlížeč podporuje alespoň jednu z kombinací vlastnost a hodnota uvedených v závorkách. To se může hodit právě pro práci s prohlížečovými prefixy, zde `-moz`. Píšu o tom ještě v textu níže.

### Kombinování operátorů {#operatory-kombinace}

Při kombinování operátoru se vyplatí být doslovný – vždy uvádějte závorky.

Tyto deklarace nejsou validní:

```css
@supports display: flex {
  /* Neplatné */
}

@supports (transition-property: color) or
  (animation-name: foo) and
  (transform: rotate(10deg)) {
  /* Neplatné */
}
```

Tento zápis ale validní je:

```css
@supports (display: flex) {
  /* … */
}

@supports ((transition-property: color) or
  (animation-name: foo)) and
  (transform: rotate(10deg)) {
  /* … */
}
```

Aby nedošlo k záměně mezi `and` a `or`, syntaxe je specifikována tak, aby byly výslovně psány jako `and` nebo `or`.

## Prohlížečové prefixy {#prefixy}

Dalším překvapením může být nutnost používat všechny prefixové vlastnosti. Pokud máte v cílové skupiny uživatele prohlížečů, které vlastnost podporují jen s použitím prefixů, musíte je uvést všechny:

```css
@supports ((box-shadow: 0 0 2px black inset) or
  (-moz-box-shadow: 0 0 2px black inset) or
  (-webkit-box-shadow: 0 0 2px black inset) or
  (-o-box-shadow: 0 0 2px black inset)) {
  /* Kód pro všechny prohlížeče podporující box-shadow, včetně už historických */
}
```

Příklad mám ze specifikace. Dneska už byste prefixy k `box-shadow` nepotřebovali, takže tím kromě jiného ilustruji, že prefixy je potřeba uvádět jen tehdy, pokud byste je psali i v běžném CSS kódu.

Nejlepší je ale starost o prefixy přenechat automatizaci, konkrétně nástroji [Autoprefixer](autoprefixer.md). 

## Detekce podpory selektorů {#selektory}

Některé moderní prohlížeče umožňují detekovat také podporu určitých CSS selektorů. Dělají to pomocí nové funkce `selector()`:

```css
@supports selector(A > B) {
  /* Kód pro prohlížeč, který podporuje selektor A > B */
}
```

Funkce `selector()` je součástí nové verze specifikace modulu „CSS Conditional Rules“ a podporují ji všechny moderní prohlížeče.

<!-- AdSnippet -->

Řešení pro podporu detekce selektorů už dříve hledalo více autorů, pomocí různých hacků. Zajímavý je například tento, který se dotazuje na podporu pseudotřídy `:placeholder-shown`:

```css
.foo { color: red }

:not(*):placeholder-shown,
.foo {
  color: green
}
```

V textu „Using Feature Detection, Conditionals, and Groups with Selectors“ světu své řešení představil „náš“ Jirka Vebr. Tož díky! [vrdl.in/vebrfeature](https://css-tricks.com/using-feature-detection-conditionals-and-groups-with-selectors/)

## Feature Queries v JavaScriptu {#js}

Metoda `CSS.supports()` vrací booleovskou hodnotu určující, zda prohlížeč danou funkci CSS podporuje nebo ne.

Toto jsou možné zápisy:

```javascript
result = CSS.supports("grid-template-rows", "masonry");
result = CSS.supports("display: grid");
result = CSS.supports("(--foo: red)");
result = CSS.supports("(transform-style: preserve) or (-moz-transform-style: preserve)");
```

V prvním řádku vidíme verzi se dvěma parametry. V prvním je prostě hodnota a ve druhém vlastnosti.

Další tři řádky ukazují variantu, kdy do textu uvedeme `DOMString` rovnou s hodnotou celé podmínky.

Ti z vás, které jsem ještě neunavil detailním líčením, si možná všimli detekce autorské vlastnosti (nebo též „custom property“ nebo též „CSS proměnné“) ve třetím řádku (`(--foo: red)`). Ano, i tu je možné detekovat.

<div class="web-only" markdown="1">
→ *Související: [CSS proměnné nebo také autorské vlastnosti](css-promenne.md)*
</div>

## CSS hacky a progressive enhancement {#hacky}

Udělejme si teď pro zajímavost historickou výpravu. `@supports` totiž navazuje na silnou epochu „CSS hacků“, kterou jsme k všeobecné nelibosti prožívali zhruba v první dekádě dvacátého prvního století.

Tehdy nebylo možné v CSS podporu vlastností detekovat, proto kodérky a kodéři hledali chyby v prohlížečích při implementaci CSS pravidel. Takový zápis, který funguje v určitých prohlížečích a v jiných naopak ne.

Asi nejznámější byl podtržítkový hack:

```css

.box {
  /* Kód pro všechny prohlížeče: */
  position: fixed;
  /* Kód jen pro IE5+: */
  _position: absolute;
}
```

Pokud by vás tahle, dnes už nechvalně známá praxe, zajímala, píšou o ní hezky v přehledu CSS hacků na tehdy populárním Interval.cz. [interval.cz/clanky/css-hacky-prehled/](https://www.interval.cz/clanky/css-hacky-prehled/)

<!-- AdSnippet -->

Brrr, úplně mě běhá mráz po zádech, když si představím, že v té době jsem nakódoval opravdu hodně webů. Jak bych tehdy byl za `@supports` vděčný!

CSS hacky a dnes `@supports` jsou důležitou částí zásadní webařské techniky – postupného vylepšování (progressive enhancement). Funguje asi takto:

1. Vyrobíte základní řešení fungující ve všech prohlížečích.
2. Nad tím postavíte lepší řešení fungující jen v některých prohlížečích.

Mezi jednotlivými řešeními je detekce vlastností (nikoliv prohlížeče!), například právě pomocí dotazu `@supports`.

Výsledkem je, že nějaké řešení máte pro nejširší možnou skupinu zařízení. Pro web ideální.

## Podpora `@supports` a limity použitelnosti {#podpora}

První omezené použití `@supports` vychází z principů fungování prohlížečů – „feature queries“ nelze použít ke kontrole, zda prohlížeč vlastnost, hodnotu nebo selektor podporuje správně a bez chyb.

Pokud si totiž prohlížeč „myslí“, že vlastnost umí, vrátí na dotaz kladnou odpověď. Ale soudruzi z NDR mohli někde v implementaci vlastnosti udělat chybu.

Dalším omezením je samotná podpora vlastnosti, v tomto případě ale záleží na použití:

`@supports` nepodporuje žádný Internet Explorer. [caniuse.com/css-featurequeries](https://caniuse.com/css-featurequeries)

Je ovšem otázka, jak moc vadí nepodpora v Internet Exploreru. Mě nevadí. Hned vám řeknu proč.

Internet Explorer totiž je skoro vždy ve skupině prohlížečů, které vlastnost nezvládají. Proto vůbec nevadí, když nerozumí ani otázce, zda vlastnost zvládá.

Ukažme si to ještě na jednom příkladu.

## Závěrečná ukázka s detekcí CSS gridu {#ukazka-grid}

Vezměme, že máme HTML s jedním kontejnerem a třemi položkami:

```html
<div class="container">
  <div class="item">
    Item 1
  </div>
  <div class="item">
    Item 2
  </div>
  <div class="item">
    Item 3
  </div>  
</div>
```

Chtěli bychom položky prostě umístit vedle sebe, což s pomocí [flexboxu](css-flexbox.md) uděláme takto:

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

Z nějakého důvodu bychom ovšem v moderních prohlížečích chtěli použít [CSS grid](css-grid.md):

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

Je to samozřejmě naprosto schůdné, použijeme detekci pomocí `@supports`:

```css
@supports (display:grid) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
```

Na pohled to bude vypadat stejně. Takhle jednoduchý kód se samozřejmě nevyplatí psát ve flexboxu i gridu. Budu ale předpokládat, že jde o základ pro využití pokročilejších vlastností gridu, kterých má požehnaně.

<figure>
<img src="../dist/images/original/css-supports-grid.png" width="1600" height="900" alt="CSS @supports a dotazy na vlastnosti - V Internet Explorer flex a Chrome grid">
<figcaption markdown="1">
*Dvě verze pro dvě kategorie prohlížečů. To nám snadno umožní feature queries, dotazy na vlastnosti.*
</figcaption>
</figure>

Tady nastává moment, pro který jsme si v demíčku šli. IE nejen že nezná `display:grid` a zároveň nezná `@supports`, takže tento blok kódu vynechá ze zpracování. A to je dobře.

CodePen: [cdpn.io/e/MWbqeMG](https://codepen.io/machal/pen/MWbqeMG?editors=1100)

V CodePenu uvidíte v prohlížečích, podporujících grid, zelené písmo. V ostatních je to červeně.

<!-- AdSnippet -->

<div class="web-only" markdown="1">

A to je, prosím pěkně, úplně vše, co jsem vám chtěl říct. Máte-li po ruce zajímavou ukázku využití `@supports`, neváhejte mě ji svěřit do komentářů.

</div>
