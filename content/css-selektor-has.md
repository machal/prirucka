# CSS selektor :has

`:has()` je funkční selektor, který můžeme mimojiné použít jako _selektor rodiče_, tedy vybrat rodičovské prvky, obsahující potomky určitého typu:

```css
a:has(img) { }
```

Tento selektor vybere cílí na všechny odkazy (`a`), které mají v DOMu jako potomka obrázek (`img`).

Selektor `:has` je podporován Safari a to od verze 15.4 z března 2022. Chrome oznámil, že od verze 101, takže v nejbližším měsíci, bude selektor podporovat zkušebně s možnosti zapnout pod nastavením vlaječek (flags).

## Nejen selektor rodiče

Selektor `:has` je součástí návrhu specifikace W3C [Selectors Level 4](https://www.w3.org/TR/selectors-4/). Vzbudil velkou pozornost, protože jednou z možností jeho použití je právě selektor rodiče, což je v CSS už asi dvacet let něco jako banány za komunistů. Lidé to strašně moc chtějí, stáli by na to fronty, ale ono ne a ne…

Jenže `:has` ve skutečnosti selektor rodiče není. Doslovně podle specifikace jde o _relační pseudotřídu_ (Relational Pseudo-class). Relační proto, že do závorek můžete napsat jakýkoliv relativní selektor, se vztahem k prvku:

```css
/* Vybere <a>, jejichž přímým potomkem je <img>: */
a:has(> img) { }

/* Vybere všechny <section>, které obsahují <h1> nebo <h2>: */
section:has(h1, h2) { }

/* Vybere všechny <img>, za nimiž následují <figcaption>: */
img:has(+ figcaption)
```

Všimněte si posledního případu. Vybírá prvního z bezprostředně navazujících sourozenců v DOMu. Tady o selektoru rodiče nemůže být řeč. Navíc je to užitečné a skoro stejně nedostatkové jako ty banány za komunistů.

## Ukázka se selektorem rodiče

Podívejme se na následující CodePen. Jsou v něm dva prvky `.box`. Jeden obsahuje obrázek a jeden pouze text:

```html
<p class="box">
  Lorem ipsum…
</p>  

<p class="box">
  <img />
  <br>
  Quam doloremque…
</p>
```

Relační pseudotřídou `:has` se pak snažím zacílit boxík s obrázkem:

```css
.box:has(img) {
  border: 5px #30680d dotted;
}
```

Výsledek uvidíte níže. Jen pozor, v dubnu 2022 to bude fungovat jen v Safari 15.4:

CodePen: [cdpn.io/e/WNdyBVx](https://codepen.io/machal/pen/WNdyBVx)

## Ukázka se selektorem přechozího sourozence

V téhle ukázce se zaměříme na stylování prvků v textu, za nimiž následují jiné specifické prvky. Máme dva nadpisy, za jedním následuje odstavec, za druhým seznam položek:

```html
<h2>Lorem ipsum, dolor sit amet</h2>
<p>
  Lorem…
</p>  
<h2>Quam doloremque…</h2>
<ul>
  <li>
    Lorem…
  </li>
</ul>
```

Pokud bychom ten druhý chtěli stylovat jinak, opět nemusíme složitě přidávat třídu, ale použít relační pseudotřídu `:has`:

```css
h2:has(+ul) {
  border-bottom: 5px #30680d dotted;
  margin-bottom: 2rem;
}
```

Ani tuto ukázku neuvidíte plně funkční jinde než v Safari 15.4:

CodePen: [cdpn.io/e/ZEvRdQa](https://codepen.io/machal/pen/ZEvRdQa)

## Další možnosti, občas vcelku dechberoucí

Když jsem procházel, co se selektorem `:has` vykouzlili jiní autoři, občas mě srdíčko poskočilo radostí. O jejich nápady se s vámi musím podělit, v tomto případě hlavně [o nápady Matthiase Otta](https://matthiasott.com/notes/css-has-a-parent-selector-now).

```css
/* Vybere formulář, ve kterém je zatržené zatržítko: */
form:has(input[type="checkbox"]:checked) { }

/* Vybere formulář, kde jsou dvě zatržená zatržítka: */
form:has(input[type="checkbox"]:checked ~ input[type="checkbox"]:checked) { }

/* Vybere <img> ve <figure>, za nímž následuje <figcaption>: */
figure img:has(+ figcaption) { }

/* Vybere layout, v němž jsou dvě položky: */
.grid:has(:nth-child(2):last-child) { }
```

Všimněte si hlavně té poslední možnosti. Rozložení v CSS layoutu upravujeme počítáním prvků uvnitř. Jde o aplikaci takzvaných _quantity queries_, které už před lety [popsal Heydon Pickering](https://alistapart.com/article/quantity-queries-for-css/).

Máte jiný zajímavý příklad použití? Napište mi, přidám jej do článku.

## Podpora v prohlížečích

Stav podpory `:has` k dubnu 2022 je tento:

- Safari plně podporuje od poslední verze, tzn. [15.4](https://developer.apple.com/documentation/safari-release-notes/safari-15_4-release-notes).
- Chrome si s `:has` [pohrává](https://chromestatus.com/feature/5794378545102848) a od verze 101 prý bude možné zkoušet za vlaječkou.
- Firefox zatím [nevysílá signály](https://bugzilla.mozilla.org/show_bug.cgi?id=418039), že by měl podporu v nejbližší době v plánu.

V tuto chvíli by asi nebylo vhodné selektor `:has` začít používat na veřejných webech.

Pokud byste to přes to chtěli zkusit, zmiňuji zde nápad testování podpory selektoru s možností vytvoření alternativního řešení pro přohlížeče, které `:has` neumí. Prostě využijeme dotaz na podporu `@supports`:

```css
@supports selector(:has(*)) {
  /* Kód pro prohlížeče, které podporují :has */
}
```

Existují samozřejmě také javascriptové polyfilly, které funkci `:has` nahrazují, ale neodkážu na ně, protože z pohledu výkonu považuji nahrazování takto nízkoúrovňové funkce prohlížeče za nepěknou prasárnu.

Nevím jak vy, ale já se na podporu `:has` v prohlížečích docela těším.
