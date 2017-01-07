# Flexbox: vlastnosti položky

<div class="web-only vd-nav">
  <h2 class="sr-only">Navigace: vše o flexboxu</h2>
  <ul>
    <li>
        <a class="vd-nav__item" href="css3-flexbox.md">Flexbox</a>
    </li>
    <li>
        <strong class="vd-nav__item">Položky</strong>
    </li>
    <li>
        <a class="vd-nav__item" href="css3-flexbox-kontejner.md">Kontejner</a>
    </li>
  </ul>
</div>

##   `flex-grow` – možnost zvětšování {#flex-grow}

Jak moc může položka růst relativně k dalším položkám, pokud je k dispozici volné místo –  například když uživatel zvětší okno prohlížeče. 

![vlastnost flex-grow](dist/images/original/flexbox-flex-grow.jpg)

Možné hodnoty:

- `0` (výchozí) znamená, že položky nijak nerostou.
- Celá kladná čísla. Položky si rozdělují podíly z nově získaného místa nad rámec výchozí šířky. 

Živé demo: [cdpn.io/e/GqrVzL](http://cdpn.io/e/GqrVzL).


##   `flex-shrink` – možnosti smršťování  {#flex-shrink}

Jakým podílem vzhledem k ostatním položkám se může definovaná položka zmenšovat, pokud v rodičovském kontejneru místo ubylo –  když uživatel zmenšil okno nebo třeba přibyla nová položka. 

![vlastnost flex-shrink](dist/images/original/flexbox-flex-shrink.jpg)

Možné hodnoty: 

- `1` (výchozí) – položky si z vlastní šířky ubírají rovnoměrně.
- Celá kladná čísla.

Živé demo: [cdpn.io/e/PzWMvM](http://cdpn.io/e/PzWMvM).

##   `flex-basis` – výchozí rozměr položky  {#flex-basis}

Výchozí šířka položky. Alternativně výška, pokud je `flex-direction: column`.

![vlastnost flex-basis](dist/images/original/flexbox-flex-basis.jpg)

* `auto` (výchozí) – rozměr určuje obsah podobně jako u `width: auto`. Distribuce volného místa pomocí `flex-grow` a `flex-basis` se pak bude týkat jen místa, které položky okupují nad rámec svého obsahu – tzv. relativní model pružnosti.
* `0` – nehledí se na rozměr obsahu. Distribuce volného místa pomocí `flex-grow` a `flex-basis` se bude týkat celé šířky položky – absolutní model pružnosti.
* Jakýkoliv CSS rozměr, např. `100px`, `15em` nebo `50%`.

Živé demo: [cdpn.io/e/oLZvgQ](http://cdpn.io/e/oLZvgQ).

##   `flex` – celková pružnost položky  {#flex}

Zkratka pro všechny vlastnosti definující pružnost flex položky –  `flex-grow`, `flex-shrink` a `flex-basis`. Nastaví výchozí velikost elementu a způsob, jakým se smí zvětšovat a zmenšovat.

<div class="web-only text-center text-small">
  <hr>
    <p>
      Text je součástí mého ebooku <a href="/ebook">Vzhůru do CSS3</a>, který 
      exkluzivně obsahuje také další materiál 
      o&nbsp;flexboxu, CSS3 a&nbsp;moderní webové kodéřině&nbsp;obecně.
    </p>
    <p>
      <a class="button" href="/ebook#objednavka">Koupit ebook za 249&nbsp;Kč</a>
    </p>
  <hr>
</div>

Je dobré vědět, že autoři specifikace doporučují upřednostňovat zkratku `flex` proti konkrétním vlastnostem, které zastupuje. Důvodem je, že zkratka umí inteligentně nastavovat výchozí hodnoty.

```css
flex: 
  <flex-grow> <flex-shrink> <flex-basis>
```

Výchozí hodnota je:

```css
flex: 0 1 auto
```

* `flex-grow: 0` – nebude se nijak roztahovat do volného místa.
* `flex-shrink: 1` – smršťovat se bude stejně jako ostatní položky.
* `flex-basis: auto` – zabere prostor, který jí určí vlastní obsah.

Pokud chcete například nastavit, aby vaše položky zabíraly minimálně `150px` a v případě dostupnosti volného prostoru se rovnoměrně zvětšily a v případě zmenšení prostoru zase rovnoměrně smrštily, uděláte to takto:

```css
flex: 1 1 150px
```

Myslím, že častěji se ale budou hodit přednastavené „inteligentní“ hodnoty:

![vlastnost flex](dist/images/original/flexbox-reference-flex.jpg)

* `flex: auto`
Odpovídá `flex: 1 1 auto` a dotčené položky se stanou plně pružnými s výchozím rozměrem podle svého obsahu. Asi nejčastější případ.
* `flex: none`
Odpovídá `flex: 0 0 auto` a zcela ruší pružnost položky. Druhá nejčastější situace.
* `flex: initial`
Zpětné nastavení výchozí hodnoty, tedy `flex: 0 1 auto`. Položky se tak s ubývajícím místem zmenšují, ale nezvětšují nad velikost svého obsahu.
* `flex: <kladné-číslo>`
U jednočíselného zápisu pozor! `flex: 1` znamená `flex: 1 1 0`, takže se vám změní výchozí velikost položky a model pružnosti, jak jsme zmiňovali u vlastnosti flex-basis.

Je také dobré vědět, že se flex položky nikdy nezmenší pod minimální šířku obsahu. Ta je dána šířkou nejdelšího slova nebo vnitřního elementu fixní šířky – třeba obrázku. Lze to změnit nastavením `min-width` nebo `min-height` na nějakou nízkou hodnotu.

##   `order` – změna pořadí prvků  {#order}

Pořadí flex položky standardně odpovídá zdrojovému kódu, ale to můžeme změnit pomocí vlastnosti order.

Změna pořadí má vliv na vizuální pozici elementu a na pořadí jeho vykreslení prohlížečem. Nemá ale vliv například na pořadí čtení dokumentu čtečkami nebo na pořadí navigace pomocí klávesy tab.

Výchozí hodnota je `0`, což znamená „dodržujeme pořadí ze zdrojového HTML“.

Tímto zápisem pak třeba třetí položku předřadíme první:

```css
.flex-item-third {
  order: -1;
}
```

Nezapomeňte, že order nelze použít na jiné elementy ve stránce než přímé potomky flex kontejneru.

Teď je na řadě další z radostí, kterou přináší flexbox. Konečně v CSS snadno zarovnáme prvky layoutu vodorovně, ale i svisle.

Živé demo: [cdpn.io/e/JoqxJe](http://cdpn.io/e/JoqxJe).

##   `margin` – zarovnání položek na hlavní ose pro jednotlivou položku  {#margin}

`margin: auto` funguje podobně jako u blokových elementů. Když se počítají rozměry flex položek, nijak se tato hodnota nezohledňuje. Zbývající volné místo se pak spravedlivě rozdělí mezi všechny takto nastavené vnější okraje.

Díky tomu můžete flex položce nastavit `margin-left: auto` a tím zajistit, aby vnější okraj vyplnil všechno volné místo nalevo od ní a ona se tak zarovnala zcela vpravo. Využitelné to je namísto `float` vlastností.

##   `align-self` – zarovnání položky na příčné ose  {#align-self}

```css
align-self: 
  auto | flex-start | flex-end | 
  center | baseline | stretch
```

Tato vlastnost se aplikuje na jednotlivé položky, a tak se hodí pro vytvoření výjimky ze zarovnání. Výchozí hodnota je `auto`.

Živé demo: [cdpn.io/e/OXWKwe](http://cdpn.io/e/OXWKwe).

###   Poznámka: Baseline zarovnání

Doporučuji všimnout si velmi praktického zarovnání na účaří prvního řádku – `baseline`. K horní hraně flex kontejneru se přilepí položka s největší vzdáleností mezi baseline a horní hranou boxu. Vidět je na předchozím obrázku nebo na [cdpn.io/e/QwobXz](http://cdpn.io/e/QwobXz). Všimněte si, že flexbox nerozhodí ani nastavení horního paddingu v pixelech.

