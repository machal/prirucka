# CSS vlastnost order

Vlastnost `order` nastavuje pořadí položky v kontejneru [flexboxu](css-flexbox.md) nebo [CSS Gridu](css-grid.md).

Občas se může kodérům a kodérkám  hodit proto, že zajistí odlišení *vizuálního* pořadí položek od pořadí *zdrojového* vycházejícího z HTML nebo lépe ze stromu DOM.

Jenže kouzlo téhle vlastnosti je zároveň rizikem z pohledu přístupnosti.

<!-- AdSnippet -->

Ale než se k tomu dostaneme, pojďme si tu vlastnost rozebrat, jak je na Vzhůru dolů zvykem.

## Jednoduchý příklad s flexboxem {#priklad}

Pro účely demonstrace zneužijeme čtyři nevinné položky v kontejneru flexboxu:

```html
<div class="container">
  <div class="item item--1">
    Item 1
  </div>
  <div class="item item--2">
    Item 2
  </div>
  <div class="item item--3">
    Item 3
  </div>  
  <div class="item item--4">
    Item 4
  </div>
</div>
```

Vlastnost `order` budeme nastavovat jen u třetí položky:

```css
.item--3 {
  order: 1;
}
```

Kam si myslíte, že se třetí položka posune? Na první místo? Na druhé?

Do obrázku jsem nakreslil řešení a rovnou hned dvě další nastavení.

<figure>
<img src="../dist/images/original/css-order.png" width="1600" height="900" alt="CSS vlastnost order">
<figcaption markdown="1">
*Obrázek: Tři různá nastavení hodnoty vlastnosti `order`.*
</figcaption>
</figure>

Už tady je hezky vidět, že vlastnost mění pořadí prvků možná trošku jinak, než byste čekali:

- `order: 0` – u nulové hodnoty se od ovlivňované položky asi dá očekávat, že bude držet původní pozici. Nezklamala.
- `order: 1` – kladné hodnoty vytvářejí novou řadu položek řazených od nejmenšího po největší číslo. Ale pozor – až *za* původními, vlastností `order` nedotčenými položkami.
- `order: -1` – ano, lze použít i záporná čísla. Slouží k vytváření pořadí *před* původní řadou položek.

Jen si s tím směle pohrejte v mém CodePenu.

CodePen: [cdnp.io/e/oNxmLRe](https://codepen.io/machal/pen/oNxmLRe?editors=1000)

## Pár věcí, které si stojí za to zapamatovat {#zapamatujte-si}

Jak je vidět, vlastnost `order`, jakkoliv se zdá jednoduchá a přímočará, trošku klame tělem. A to jsme ještě nezačali mluvit o přístupnosti.

Jsou zde ale i další vědomosti, které byste měli mít v hlavě, než si s `order` začnete hrát.

1. Pokud má více položek nastavenu stejnou hodnotu `order`, seřadí se podle pořadí v DOMu.
2. Podle specifikace vlastnost `order` ovlivňuje také pořadí vykreslování při renderingu stránky prohlížečem, což asi má logiku.
3. Absolutně pozicované položky vždy dostanou nastavení `order: 0`, takže drží pořadí vykreslení dle DOMu, což je vidět v mém CodePenu. [cdnp.io/e/JjXxVJy](https://codepen.io/machal/pen/JjXxVJy?editors=1100)

Teď k té přístupnosti. Jste připravení?

## Přístupnost: pozor na vizuální pořadí {#pristupnost}

Musím vás upozornit na to, že jakmile odlišíte pořadí zobrazování od pořadí v kódu, může se stát, že při ovládání z klávesnice (tabulátorem) nebo použítí [s odečítači pro zrakově hendikepované](testovani-odecitace.md) přestane pořadí dávat smysl.

Také proto je [ve specifikaci](https://www.w3.org/TR/css-flexbox-1/#order-property) obsaženo toto důrazné varování:

> Authors must use order only for visual, not logical, reordering of content.

Něco vám řeknu – specifikace má pravdu. Pojďme si to ukázat na jednoduchém demu se čtyřmi položkami:

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

Jak vidíte, tentokrát jsem vyměnil DIVy za odkazy a to proto, abychom mohli obsahem navigovat pomocí tabulátoru.

Kontejner (`.container`) je obyčejný flexbox, ale za ukázání kódu stojí předpis pro třetí položku:

```css
.item--3 {
  order: -1;
}
```

Původní pořadí (1, 2, 3, 4) se tedy v prohlížeči změní na 3, 1, 2, 4.

Jenže navigační pořadí je prohlížečem stále bráno podle HTML. Však to uvidíte ve videu:

<div class="rwd-media rwd-media--160-45">
  <video muted controls width="1600" height="246">
    <source src="https://res.cloudinary.com/vzhurudolu-cz/video/upload/v1601351952/vzhurudolu-video/css-order-after-tabindex_zs68wq.mp4"
      type="video/mp4">
  </video>
</div>

Případně si to zkuste naživo v CodePenu: [cdpn.io/e/JjXxRoJ](https://codepen.io/machal/pen/JjXxRoJ).

Blbý, že?

### Zachránce tabindex? Leda kulový {#pristupnost-tabindex}

Někteří z vás si určitě řekli, že situaci může přeci [zachránit `tabindex`](https://jecas.cz/tabindex), HTML atribut, který nastaví pořadí navigace pomocí tabulátorů:

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

V prohlížeči to po přidání atributů `tabindex` vypadá nadějně:

<div class="rwd-media rwd-media--160-45">
  <video muted controls width="1600" height="246">
    <source src="https://res.cloudinary.com/vzhurudolu-cz/video/upload/v1601351951/vzhurudolu-video/css-order-before_iwltuj.mp4"
      type="video/mp4">
  </video>
</div>

Pořadí navigace je nyní správné, protože odpovídá logickému uspořádání položek na obrazovce:

<div class="rwd-scrollable f-6"  markdown="1">

|  Typ řazení          | Pořadí     |
|:---------------------|:-----------|
| HTML, DOM            | 1, 2, 3, 4 |
| Vizuální             | 3, 1, 2, 4 |
| Navigační, logické   | 1, 2, 3, 4 |

</div>

Máme to vyřešeno? Nejspíš bohužel ne.

Otázka, která vyvstává, totiž zní – jak moc je `tabindex` pro tyto případy v praxi použitelný?

<!-- AdSnippet -->

Atribut `tabindex` totiž nastavuje pořadí pro *celý* dokument, takže jakmile bychom takto zapsali samostatnou komponentu a tu pak vkládali na různá místa DOMu, napácháme s `tabindex` více škody než užitku.

Na druhou stranu – neumím si představit, že bychom kvůli jedné komponentě s `order` natvrdo měnili pořadí `tabindex` pro celou stránku.

Takže z mého pohledu je `tabindex` pro opravu tohoto problému jen málo použitelný.

Ale zkusit si to v CodePenu klidně můžete:

CodePen: [cdpn.io/e/PoNVgyv](https://codepen.io/machal/pen/PoNVgyv)

### Pomůže aria-flowto? {#pristupnost-aria}

Léonie Watson [v článku „Flexbox & the keyboard navigation disconnect“](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) už před lety upozorňovala na vlastnost `aria-flowto`, která v rámci specifikace [WAI-ARIA](wai-aria.md) umožňuje právě lokální změnu navigačního pořadí. Je to prostě takový `tabindex` pro komponenty.

Hned jsem to vyzkoušel, ale zdá se, že stále platí to, co píše Léonie v článku z roku 2016: Tahle vlastnost má extrémně špatnou podporu v prohlížečích. Alespoň něco se v prohlížečích nemění.  

CodePen: [cdnp.io/e/zYqeXeE](https://codepen.io/machal/pen/zYqeXeE)

### Pomůže nám vůbec něco? Ani ne {#pristupnost-neco}

Odlišení pořadí navigačního od vizuálního je možné ve flexboxu a teď i Gridu mnoha různými způsoby, tedy nejen vlastností `order`.

Bohužel se to zdá jako aktuálně nevyřešitelný problém, protože jej myslím nijak konkrétně neřeší specifikace, natož pak prohlížeče.

Pošlu vás na další zdroje, ale nic veselého se tam nedozvíte:

- [Adrian Roselli: Source Order Matters](https://adrianroselli.com/2015/09/source-order-matters.html)
- [Manuel Matuzovic: The Dark Side of the Grid (Part 2)](https://www.matuzo.at/blog/the-dark-side-of-the-grid-part-2/)
- [Rachel Andrew: Grid, content re-ordering and accessibility](https://rachelandrew.co.uk/archives/2019/06/04/grid-content-re-ordering-and-accessibility)

Komunitu, tedy vývojáře, lidi kolem webových specifikací a prohlížečů, zde ještě čeká dost práce. Jednoho by to v roce 2020 překvapilo.

## Raději si na `order` dávejte pozor {#shrnuti}

Shrňme si to. Vlastnost `order` určitě může být v některých případech užitečná pro změnu vizuálního pořadí.

Je zde však nebezpečí, že uživatelům zároveň rozbijeme navigaci z klávesnice a zrakově postiženým čtení obsahu přes odečítače.

Takže s `order` prosím zacházejte opatrně, jako se zápalkami.

<!-- AdSnippet -->
