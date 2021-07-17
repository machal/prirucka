# Hromada lívanců

V dalším relativně častém vzhoru z uživatelských rozhraní zkusíme využít layout mřížkou v jiném směru.

<figure>
<img src="../dist/images/original/vdlayout/priklad-pancake-zadani.png" width="1600" height="900" alt="Příklad - hromada lívanců">
<figcaption markdown="1">
*Dáte si to s džemem, ovocem, jogurtem nebo třeba nějakým CSS layoutem?*
</figcaption>
</figure>

Tomuto návrhovéhom vzoru se říká „Pancake Stack“ takže „hromada lívanců“. V zadání je tato představa:

- Šedivá hlavička a patička bloku má výšku podle obsahu.
- Prostřední část je vždy stejně vysoká – zde má výšku `20rem`.
- Je potřeba zajistit, aby obsah v případě přetečení nerozbil výšku, protože hromad lívanců máme hned několik vedle sebe.

HTML pro jeden prvek, jednu hromadu lívanců, jsme vymysleli následovně:

```html
<div class="box">
  <header class="box__head">
    Hlavička
  </header>
  <main class="box__body" contenteditable>
    <h2>Název</h2>
    <p>Lorem ipsum dolor sit…</p>
  </main>
  <footer class="box__foot">
    <a href="#">
      Upravit
    </a>
    <a href="#">
      Smazat
    </a>
  </footer>
</div>
```

Všimněte si parametru `contenteditable`. Tímto způsobem dovolujeme, aby bylo přímo do rozhraní možné psát nebo vkládat obsah. V ukázce jsem to povolil, proto, abyste si mohli zkusit vložit složitější text a layout tak rozbít. 

Opět je zde možnost zkusit si zadání nakódovat. Zde je předpřipravený CodePen: [cdpn.io/e/poeGQya](https://codepen.io/machal/pen/poeGQya?editors=1100)

## Výsledný kód

Pro znalce gridu to bude opravdu velmi jednoduché CSS:

```css
.box {
  display: grid;
  grid-template-rows: auto 20rem auto;
}
```

V šabloně (vlastnosti začínající `grid-template`) tentokrát nedefinujeme sloupce, ale řádky. Jak vidíte, jsou tři. První a poslední, což jsou v příkladu elementy `.box__head` a `.box__foot`, mají výšku podle obsahu – `auto`.

Prostřední buňka připadající na prvek `.box__body` má vždy výšku `20rem`. Zde zejména proto, že hromad lívanců máme vždy několik vedle sebe a nechtěli bychom, aby některé byly vyšší než jiné. 

CodePen: [cdpn.io/e/abJamrr](https://codepen.io/machal/pen/abJamrr?editors=1100)

Ještě doplním, že v „nastavovacím“ kódu, který je v CodePenech schovaný pod komentářem `/* ETC: */`, abych vám ulehčil práci a umožnil soustředit se na psaní kódu, který se týká layoutu, jsou tentokrát poměrně důležité deklarace:

```css
.container {
  display: flex;
  flex-wrap: wrap;
}

.box {
  max-width: 20rem;
  margin: 0 1rem 1rem 0;
}

.box__body {
  padding: 1rem;
  overflow: hidden;
}
```

Kromě okrajů v `margin` a `padding` si prosím povšimněte definice rozvržení flexboxem, umístěné na rodičovském prvku nad jednotlivými hromádkami lívanců. [`display:flex`](css-display.md) už znáte, ale [vlastnost `flex-wrap`](css-flex-wrap.md) jsme v příkladech ještě neměli. Je velmi důležitá, protože prvkům rozvržení umožňuje zalamovat se na další řádky.

Všimněte si i deklarace `overflow: hidden`, která obsahu v prvku `.box__body` zabraňuje v přetečení mimo vyhrazený prostor výšky `20rem`.
