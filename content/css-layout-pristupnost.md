# Přístupnost a CSS layout: pozor na vizuální pořadí

<div class="book-index" data-book-index="Přístupnost"></div>
<div class="book-index" data-book-index="Pořadí v layoutu"></div>

Přístupnost je důležitá disciplína, s jejíž pomocí mohou vývojáři vyjít vstříc různým skupinám lidí a jež se jen zdánlivě týká pouze hendikepovaných minorit, jako jsou zrakově postižení.

Díky přístupnosti se zkrátka mohou různé skupiny lidí dostat k informacím na webu bez velkých překážek.

V nových CSS layoutech může přístupnost pokazit poněkud kontroverzní možnost změny pořadí prvků ve stránce.

## Přístupnost a pořadí ve flexboxu nebo gridu {#poradi}

Musím vás upozornit na to, že jakmile odlišíte pořadí zobrazování od pořadí v kódu, může se stát, že při ovládání z klávesnice (tabulátorem) nebo při použití nejrůznějších asistivních technologií (například odečítačů obrazovky) přestane uživatelům pořadí dávat smysl.

<div class="web-only" markdown="1">

→ *Související: [Testování webů v odečítačích obrazovky](testovani-odecitace.md)*

</div>

Také proto je ve specifikaci obsaženo toto důrazné varování:

> Autoři musí použít změnu pořadí pouze pro vizuální, nikoliv logické přeskupování obsahu.

Logické pořadí je zpravidla pořadí  zápisu kódu a jeho využití si můžete představit v těchto kontextech konzumace stránky:

- _Roboti_  
Například stroje vyhledávačů, jako je Google. Roboti postupují podle pořadí v HTML nebo DOMu.
- _Sekvenční navigace stránkou_  
Tento typ procházení využívají například uživatelé odečítačů obrazovky nebo uživatelé, kteří z nějakého důvodu nemohou použít jiný způsob navigace – ať už z důvodu trvalého či dočasného postižení rukou, jako je třeba zlomenina.
- _Hlas a jiná média_  
Přeskupení vizuálního pořadí nezmění řazení v nevizuálních médiích, například v řeči.

Může se tedy stát, že někdo, kdo se naviguje pomocí klávesnice, bude procházet odkazy na vašem webu a najednou odskočí z dolní do horní části dokumentu, protože tam je další položka logického pořadí.

Ve specifikaci mřížky se dále píše:

> CSS grid dává autorům velkou moc přeskupit dokument. Nejedná se však o náhradu za správné uspořádání zdroje dokumentu.

Něco vám řeknu. Specifikace má pravdu. Pokud chcete pro přístupnost něco udělat, rozhodně dbejte na to, aby pořadí v kódu dávalo smysl v případě, kdy byste stránku četli bez stylů.

## Dotčené vlastnosti {#vlastnosti}

Problém se týká všech CSS vlastností, které mohou v nových systémech rozvržení ovlivnit vizuální pořadí:

- [Vlastnost `order`](css-order.md), která změní způsob automatického umísťování položek.
- [Deklarace `grid-auto-flow:dense`](css-grid-auto-flow.md), jež automaticky přeskupí položky jinak, než jsou uvedeny v DOMu.
- [Vlastnost `grid-area`](css-grid-area.md), která umístí položky do konkrétního místa mřížky a opět nemusí respektovat pořadí ve zdroji.
- [Vlastnost `flex-direction`](css-flex-direction.md) a hodnoty, které převracejí pořadí – `row-reverse` a `column-reverse`.

Možností, jak přeskupit obsah, je samozřejmě více a vztáhnout to můžeme i na starý dobrý `float`, takže tento text berte jako obecné varování.

## Příklad {#priklad}

Pojďme si to ukázat na jednoduchém demu postaveném na vlastnosti `order` a [flexboxu](css-flexbox.md) se čtyřmi položkami:

```html
<div class="container">
  <a class="item item--1" href="#">
    Item 1
  </a>
  <a class="item item--2" href="#">
    Item 2
  </a>
  <a class="item item--3" href="#">
    Item 3
  </a>  
  <a class="item item--4" href="#">
    Item 4
  </a>
</div>
```

Jak vidíte, tentokrát jsem vyměnil `div`y za odkazy, a to proto, abychom mohli obsahem navigovat pomocí tabulátoru.

Kontejner (`.container`) je obyčejný flexbox, ale za ukázání kódu stojí předpis pro třetí položku:

```css
.item--3 {
  order: -1;
}
```

Původní pořadí (1, 2, 3, 4) se tedy při prohlížení stránky v prohlížeči změní na 3, 1, 2, 4.

Jenže navigační pořadí je prohlížečem stále bráno podle HTML.

<div class="web-only">

Však to uvidíte ve videu:

<div class="rwd-media rwd-media--160-45">
  <video muted controls width="1600" height="246">
    <source src="https://res.cloudinary.com/vzhurudolu-cz/video/upload/v1601351952/vzhurudolu-video/css-order-after-tabindex_zs68wq.mp4"
      type="video/mp4">
  </video>
</div>

</div>

Zkuste si to naživo v CodePenu: [cdpn.io/e/JjXxRoJ](https://codepen.io/machal/pen/JjXxRoJ).

## Zachránce tabindex? Leda kulový {#pristupnost-tabindex}

Někteří z vás si určitě řekli, že situaci může přeci zachránit vlastnost `tabindex`, HTML atribut, který nastaví pořadí navigace pomocí tabulátorů:

```html
<div class="container">
  <a class="item item--1" href="#" tabindex="2">
    Item 1
  </a>
  <a class="item item--2" href="#" tabindex="3">
    Item 2
  </a>
  <a class="item item--3" href="#" tabindex="1">
    Item 3
  </a>  
  <a class="item item--4" href="#" tabindex="4">
    Item 4
  </a>
</div>
```

V prohlížeči to po přidání atributů `tabindex` může vypadat nadějně.

<div class="web-only">

Video:

<div class="rwd-media rwd-media--160-45">
  <video muted controls width="1600" height="246">
    <source src="https://res.cloudinary.com/vzhurudolu-cz/video/upload/v1601351951/vzhurudolu-video/css-order-before_iwltuj.mp4"
      type="video/mp4">
  </video>
</div>

</div>

Pořadí navigace je nyní správné, protože odpovídá logickému uspořádání položek na obrazovce:

<div class="rwd-scrollable f-6"  markdown="1">

|  Typ řazení          | Pořadí     |
|:---------------------|:-----------|
| HTML, DOM            | 1, 2, 3, 4 |
| Vizuální             | 3, 1, 2, 4 |
| Navigační, logické   | 1, 2, 3, 4 |

</div>

Zdá se, že problém jsme vyřešili. Pořadí v HTML a pořadí navigační se neliší.

Jenže chyba lávky! Otázka totiž zní: Jak moc je `tabindex` pro tyto případy v praxi použitelný?

<!-- AdSnippet -->

Atribut `tabindex` totiž nastavuje pořadí pro *celý* dokument, takže jakmile bychom takto zapsali samostatnou komponentu a tu pak vkládali na různá místa DOMu, napácháme s `tabindex` více škody než užitku.

A pak – neumím si představit, že bychom kvůli jedné komponentě s `order` natvrdo měnili pořadí `tabindex` pro celou stránku.

Z mého pohledu je tedy `tabindex` pro opravu tohoto problému použitelný jen velmi omezeně.

Ale zkusit si to v CodePenu klidně můžete.

CodePen: [cdpn.io/e/PoNVgyv](https://codepen.io/machal/pen/PoNVgyv)

## Pomůže aria-flowto? {#aria}

Léonie Watson v článku „Flexbox & the keyboard navigation disconnect“ už před lety upozorňovala na vlastnost `aria-flowto`, která v rámci specifikace [WAI-ARIA](wai-aria.md) umožňuje právě lokální změnu navigačního pořadí. Je to prostě takový `tabindex` pro komponenty.

Hned jsem to vyzkoušel, ale zdá se, že stále platí to, co píše Léonie v článku z roku 2016: Tahle vlastnost má extrémně špatnou podporu v prohlížečích. Alespoň něco se v prohlížečích nemění… 

CodePen: [cdpn.io/e/zYqeXeE](https://codepen.io/machal/pen/zYqeXeE)

## Pomůže nám vůbec něco? Ani ne {#neco}

Odlišení pořadí navigačního od vizuálního je možné ve flexboxu a teď i gridu mnoha různými způsoby, tedy nejen vlastností `order`.

Bohužel se to zdá jako aktuálně nevyřešitelný problém, protože jej myslím nijak konkrétně neřeší specifikace, natož pak prohlížeče.

Odkážu vás na další zdroje, ale nic veselého se tam nedozvíte:

- Varování ve specifikaci flexboxu. [w3.org/TR/css-flexbox-1/](https://www.w3.org/TR/css-flexbox-1/#order-property)
- Totéž ve specifikaci CSS gridu. [drafts.csswg.org/css-grid/](https://drafts.csswg.org/css-grid/#order-accessibility)
- Adrian Roselli: „Source Order Matters“. [adrianroselli.com](https://adrianroselli.com/2015/09/source-order-matters.html)
- Manuel Matuzovic: „The Dark Side of the grid (Part 2)“. [matuzo.at](https://www.matuzo.at/blog/the-dark-side-of-the-grid-part-2/)
- Rachel Andrew: „Grid, content re-ordering and accessibility“. [rachelandrew.co.uk](https://rachelandrew.co.uk/archives/2019/06/04/grid-content-re-ordering-and-accessibility)
- Léonie Watson: „Flexbox & the keyboard navigation disconnect“. [tink.uk](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)

Komunitu, tedy vývojáře, lidi kolem webových specifikací a prohlížečů, zde ještě čeká dost práce. Jednoho by to v roce 2022 překvapilo.

Ponaučení do praxe zní: Jakmile použijete některou z vlastností, která rozpojuje pořadí vizuální od pořadí logického, přemýšlejte, jak velký vliv to bude mít na přístupnost a hlavně na vaše uživatele tam venku.
