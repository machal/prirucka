# CSS @supports a detekce podpory prohlížečů

V CSS nebo JavaScriptu se nám občas hodí napsat kód, který rozlišuje varianty podle podpory určitých CSS vlastností.

K tomu se skvěle hodí poměrně nové pravidlo `@supports`, součást specifikace „CSS Conditional Rules Module“.

S pomocí `@supports` je možné psát „feature queries“, dotazy na vlastnosti. Vezměme například ukázky s dotazem na nativní podporu [layoutu typu masonry](css-masonry.md):

```css
@supports (grid-template-rows: masonry) {
  /* Kód pro prohlížeče, které podporují grid-template-rows:masonry */
}
```

Pokud se na ukázku podívate v prohlížečích, které podporují vlastnost `grid-template-rows` a zároveň její hodnotu `masonry`, což je v březnu 2021 zatím jen Firefox Nightly, uvidíte zelený text.

Ve všech ostatních prohlížečích bude text černý.

CodePen: [cdpn.io/e/NWbLRKv](https://codepen.io/machal/pen/NWbLRKv?editors=1100)

Všimněte si důležité věci – pro detekování podpory musíme dotazovat na vlastnost i její hodnotu. Takže pokud bychom se ptali na podporu vlastnosti `display`, musíme se zeptat například na `display:block`.

## Logické operátory: `not`, `and` a `or`

Specifikace dotazů na vlastnosti velmi správně definuje logické operátory podle zvyklostí z jiných jazyků.

### Operátor `not`

Velice často se nám může hodit negace a klíčové slovo `not`:

```css
@supports not (display: grid) {
  .box {
    float: right;
  }
}
```

Kód se aplikuje jen v těch prohlížečích, které _nepodporují_ [CSS Grid](css-grid.md).

### Operátor `and`

Logický operátor konjunkce – `and`:

```css
@supports (display: table-cell) and (display: list-item) {
  /* CSS kód */
}
```

Použijeme v případech, kdy musí platit všechny podmínky.

### Operátor `or`

Další operátor – `or` – definuje logickou disjunkci:

```css
@supports (transform-style: preserve) or 
  (-moz-transform-style: preserve) {
  /* CSS kód */
}
```

Podmínka je platná v případě, že prohlížeč podporuje alespoň jednu z kombinací vlastnost a hodnota uvedených v závorkách. To se může hodit právě pro práci s prohlížečovými prefixy, zde `-moz`. Píšu o tom ještě v textu níže.

### Kombinování operátorů

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

Aby nedošlo k záměně mezi `and` a `or`, syntaxe vyžaduje, aby byly výslovně specifikovány oba, raději nž čárky nebo mezery pro jednu z nich.

Asi víte proč. Autoři specifikace se poučili s nejasného použití čárky namísto `or` v dotazech na media, Media Queries. [vrdl.cz/p/css3-media-queries](https://www.vzhurudolu.cz/prirucka/css3-media-queries)

## Prohlížečové prefixy

Dalším překvapením může být nutnost používat všechny prefixové vlastnosti. Pokud máte v cílové skupiny uživatele prohlížečů, které vlastnost podporují jen s použítím prefixů, musíte je uvést všechny:

```css
@supports (box-shadow: 0 0 2px black inset) or
  (-moz-box-shadow: 0 0 2px black inset) or
  (-webkit-box-shadow: 0 0 2px black inset) or
  (-o-box-shadow: 0 0 2px black inset) {
  /* Kód pro všechny prohlížeče podporující box-shadow */
}
```

Příklad mám ze specifikace. Dneska už byste prefixy k `box-shadow` nepotřebovali, takže tím kromě jiného ilustruji, že prefixy je potřeba uvádět jen tehdy, pokud byste je uváděli v kódu.

Nejlepší je ale starost o prefixy přenechat automatizaci, konkrétně nástroji Autoprefixer. [github.com/postcss/autoprefixer](https://github.com/postcss/autoprefixer)

## Detekce podpory selektorů

Některé moderní prohlížeče umožňují detekovat také podporu určitých CSS selektorů. Dělají to pomocí nové funkce `selector()`:

```css
@supports selector(A > B) {
  /*  */
}
```

Poněkud blbé ale je, že tuto funkci nepodporuje Safari, alespoň ne v březnu 2021.

Museli bychom se tak dotazovat na podporu funkce `selector()`, kterou bychom se dotazovali na podporu konkrétního typu selektoru. Trochu _inception_.

Funkce `selector()` je ale součástí až nové verze specifikace modulu „CSS Conditional Rules“, takže se budeme tvářit, že se nepodpoře ze strany Safari zatím nedivíme.

Řešení pro podporu detekce už dříve řešilo více autorů, pomocí různých hacků. Zajímavý je například tento, který se ptá na podporu pseudotřídy `:placeholder-shown`:

```css
.foo { color: red }

:not(*):placeholder-shown,
.foo {
  color: green
}
```

V textu „Using Feature Detection, Conditionals, and Groups with Selectors“ světu své řešení představil „náš“ Jirka Vebr. Tož díky! [vrdl.in/vebrfeature](https://css-tricks.com/using-feature-detection-conditionals-and-groups-with-selectors/)

## Feature queries v JavaScriptu

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

## CSS hacky a progressive enhancement

<!-- TODO -->

