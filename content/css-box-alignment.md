# Zarovnání boxů v CSS (Box Alignment Module)

„Box Alignment“ je modul specifikace CSS, který definuje zarovnání boxů v různých modelech rozvržení CSS: blokovém, tabulkovém, vícesloupcovém, flexboxu nebo gridu.

<div class="related web-only" markdown="1">
- [CSS grid](css-grid.md)
- [Flexbox](css-flexbox.md)
- [Vícesloupcový layout](css-multicolumn.md)
</div>

V tomto textu se podíváme na jednotlivé vlastnosti pro zarovnávání layoutech.

Specifikace „Box Alignment Module Level 3“ v podstatě vzala všechna zarovnání a rozdělení prostoru definovaná ve flexboxu, něco přidala a zpřístupnila ji ostatním systémům pro layout.

<!-- AdSnippet -->

Nijak se zde nezabýváme zarovnáváním textu (vlastnosti jako `text-align`, `vertical-align`), ani staršími (ale stále funkčními) metodami zarovnávání boxů s pomocí `margin` a tak dále.

## Rychlý tahák k vlastnostem {#tahak}

Vlastností, které obstarávají zarovnávání v CSS, je na jednu webařskou hlavu opravdu hodně.

Naštěstí jsou ale ty nejdůležitější vlastnosti pojmenované podle jednoduchého klíče.

![Tahák k CSS Box Alignment](../dist/images/original/vdlayout/css-box-alignment-tahak.png)

Než vyberete tu správnou, musíte si ujasnit:

1. Směr zarovnávání (hlavní osa je obvykle vodorovná, jinak též řádková; příčná osa svislá, jinak též bloková). Na obrázku výše se podívejte k šipkám.
2. Co budete zarovnávat (všechny položky, jednu položku nebo obsah mezi nimi). Na obrázku výše se podívejte do layoutu.

<div class="rwd-scrollable prop-table f-6"  markdown="1">

|                                     | **Hlavní osa** (`justify-*`) | **Příčná osa** (`align-*`) |
|-------------------------------------|------------------------------|----------------------------|
| **Zarovnání položek** (`*-items`)   |  `justify-items`     | `align-items`     |
| **Zarovnání sebe sama** (`*-self`)  |  `justify-self`      | `align-self`      |
| **Distribuce obsahu** (`*-content`) |  `justify-content`   | `align-content`   |

</div>

Jen připomínám, že směr hlavní a příčné osy rozvržení se může změnit – například pomocí vlastnosti [`flex-direction` nastavené na `column`](css-flex-direction.md).

V tabulce nejsou obsaženy zdaleka všechny zarovnávací vlastnosti, na ty se pojďme podívat hned v další části textu.

Každou vlastnost si zde můžete rozkliknout a dostat se tak na její specifikaci.

## Zarovnání položek (`*-items`) {#polozky}

Na kontejneru definujeme, jak se budou zarovnávat jednotlivé položky.

<div class="reference-items">

  <article role="article">
    <h4 id="justify-items"><a href="css-justify-items.md"><code>justify-items</code></a></h4>
    <p><a href="css-justify-items.md"><img src="../dist/images/small/vdlayout/css-justify-items-schema.png" alt="Vlastnost justify-items" /></a></p>
    <p>Zarovnání na řádkové ose (obvykle vodorovně). <br> Např. <code>justify-items:center</code> centruje všechny položky.</p>
  </article>

  <article role="article">
    <h4 id="align-items"><a href="css-align-items.md"><code>align-items</code></a></h4>
    <p><a href="css-align-items.md"><img src="../dist/images/small/vdlayout/css-align-items-schema.png" alt="Vlastnost align-items" /></a></p>
    <p>Zarovnání na blokové ose (obvykle svisle). <br> Např. <code>align-items:end</code> zarovná položky ke spodní hraně kontejneru.</p>
  </article>

  <article role="article">
    <h4 id="place-items"><a href="css-place-items.md"><code>place-items</code></a></h4>
    <p><a href="css-place-items.md"><img src="../dist/images/small/vdlayout/css-place-items-schema.png" alt="Vlastnost place-items" /></a></p>
    <p>Zkratka pro zarovnání položek v obou směrech. <br> Např. <code>place-items:end center</code> zarovná položky ke spodní hraně a vodorovně na střed.</p>
  </article>

</div>

## Zarovnání samostatné položky (`*-self`) {#sebe-sama}

Pro konkrétní položku definujeme, jak se bude zarovnávat.

<div class="reference-items">

  <article role="article">
    <h4 id="justify-self"><a href="css-justify-self.md"><code>justify-self</code></a></h4>
    <p><a href="css-justify-self.md"><img src="../dist/images/small/vdlayout/css-justify-self-schema.png" alt="Vlastnost justify-self" /></a></p>
    <p>Zarovnání na řádkové ose (obvykle vodorovně). <br> Např. <code>justify-self:center</code> vodorovně centruje položku.</p>
  </article>
  <article role="article">
    <h4 id="align-self"><a href="css-align-self.md"><code>align-self</code></a></h4>
    <p><a href="css-align-self.md"><img src="../dist/images/small/vdlayout/css-align-self-schema.png?2" alt="Vlastnost align-self" /></a></p>
    <p>Zarovnání na blokové ose (obvykle svisle). <br> Např. <code>align-self:end</code> zarovná položku ke spodní hraně.</p>
  </article>
  <article role="article">
    <h4 id="place-self"><a href="css-place-self.md"><code>place-self</code></a></h4>
    <p><a href="css-place-self.md"><img src="../dist/images/small/vdlayout/css-place-self-schema.png" alt="Vlastnost place-self" /></a></p>
    <p>Zkratka pro zarovnání jednotlivé položky v obou směrech. <br> Např. <code>place-self:end center</code> zarovná položku ke spodní hraně a vodorovně doprostřed.</p>
  </article>

</div>

## Distribuce prostoru mezi položkami (`*-content`) {#distribuce-prostoru}

Vlastnosti, které řídí rozdělení volného prostoru, jenž uvnitř kontejneru zůstává mezi položkami.

<div class="reference-items">

  <article role="article">
    <h4 id="gap"><a href="css-gap.md"><code>gap</code></a></h4>
    <p><a href="css-gap.md"><img src="../dist/images/small/vdlayout/schema-css-gap.png" alt="CSS vlastnost gap" /></a></p>
    <p>
      Definice mezery mezi buňkami. <br>
      Např. <code>gap:1rem</code> definuje mezeru `1rem` v obou směrech.
    </p>
  </article>  
  <article role="article">
    <h4 id="justify-content"><a href="css-justify-content.md"><code>justify-content</code></a></h4>
    <p><a href="css-justify-content.md"><img src="../dist/images/small/vdlayout/css-justify-content-schema.png" alt="Vlastnost justify-content" /></a></p>
    <p>Rozdělení prostoru na řádkové ose (obvykle vodorovně). <br> Např. <code>justify-content:space-between</code> rozdělí prostor mezi položky.</p>
  </article>
  <article role="article">
    <h4 id="align-content"><a href="css-align-content.md"><code>align-content</code></a></h4>
    <p><a href="css-align-content.md"><img src="../dist/images/small/vdlayout/css-align-content-schema.png" alt="Vlastnost align-content" /></a></p>
    <p>Rozdělení prostoru na blokové ose (obvykle svisle). <br> Např. <code>align-content:start</code> zajistí zarovnání položek k horní hraně kontejneru.</p>
  </article>
  <article role="article">
    <h4 id="place-content"><a href="css-place-content.md"><code>place-content</code></a></h4>
    <p><a href="css-place-content.md"><img src="../dist/images/small/vdlayout/css-place-content-schema.png" alt="Vlastnost place-content" /></a></p>
    <p>Zkratka pro rozdělení prostoru v obou směrech. <br> Např. <code>place-content:start space-between</code> zarovná položky k horní hraně a vodorovné dělí prostor.</p>
  </article>

</div>

## Změna pořadí (`*-content`) {#zmena-poradi}

<div class="reference-items">

  <article role="article">
    <h4 id="order"><a href="css-order.md"><code>order</code></a></h4>
    <p><a href="css-order.md"><img src="../dist/images/small/vdlayout/css-order-schema.png" alt="CSS vlastnost order" /></a></p>
    <p>
      Změna pořadí prvků layoutu. <br>
      Např. <code>order:-1</code> přesune položku před všechny ostatní.
    </p>
  </article>  

</div>

## Některé zarovnávací vlastnosti nefungují ve flexboxu

Vlastnosti [`justify-items`](css-justify-items.md) i [`justify-self`](css-justify-self.md) nejsou dostupné pro layouty tvořené flexboxem.

Namísto `justify-items` můžeme použít starý dobrý `margin` nebo pro centrování třeba `justify-content`.

Stejně tak proto nebudou fungovat zkratky [`place-items`](css-place-items.md) a [`place-self`](css-place-self.md).

<div class="rwd-scrollable prop-table f-6"  markdown="1">

|                                     | **Hlavní osa** (`justify-*`) | **Příčná osa** (`align-*`) | **Oba směry** (`place-*`) |
|-------------------------------------|------------------------------|----------------------------|--------------------------|
| **Zarovnání položek** (`*-items`)   |  [`justify-items`](css-justify-items.md)<br>~~flex~~, grid     | [`align-items`](css-align-items.md)<br>flex, grid      | [`place-items`](css-place-items.md)<br>~~flex~~, grid |
| **Zarovnání sebe sama** (`*-self`)  |  [`justify-self`](css-justify-self.md)<br>~~flex~~, grid      | [`align-self`](css-align-self.md)<br>flex, grid       | [`place-self`](css-place-self.md)<br> ~~flex~~, grid |
| **Distribuce obsahu** (`*-content`) |  [`justify-content`](css-justify-content.md)<br>flex, grid    | [`align-content`](css-align-content.md)<br>flex, grid    | [`place-content`](css-place-content.md)<br> flex, grid |

</div>

## Podpora v prohlížečích {#podpora}

Na úrovni celé této velké specifikace je těžké mluvit o podpoře či nepodpoře. Různé prohlížeče mohou nepodporovat některé vlastnosti, některé mohou nepodporovat zase určité hodnoty nebo jejich kombinaci s různými systémy rozvržení, jako je grid, flexbox nebo vícesloupcový layout.

Toto řešíme v textech příručky k jednotlivým vlastnostem. Zde se ale zaměřme na konkrétní zásadnější nedostatky v podpoře, jež mají slabou podporu.

- Internet Explorer 11 – pokud ještě musíte podporovat tento prehistorický prohlížeč, je třeba vědět, že vlastnosti pro zarovnání umí jen v kombinaci s flexboxem, nikoliv gridem.
- Zkratky jako [`place-self`](css-place-self.md) neumí IE11, ale zatím bohužel také Safari, což je daleko nepříjemnější. Na druhou stranu, zkratku [`place-content`](css-place-content.md) Safari ovládá, což tuto vlastnost činí použitelnou na většině moderních projektů.
- [Vlastnosti `gap`](css-gap.md) v grid layoutu umí všechny prohlížeče, kromě IE11, ale v kombinaci s jinými systémy rozvržení je to daleko složitější.
- Vlastnost `overflow-position` v době psaní textu neumí žádný prohlížeč.

Aby vás to ale neodradilo – celkově vzato jde o část CSS s velmi dobrou podporou a není nutné moc dumat, zda to jako celek používat nebo ne. Prostě to používejte. Nic jiného vám stejně nezbývá, pokud chcete vytvářet nějaké ty layouty.

Konkrétněji o podpoře v prohlížečích píšu v příručkách pro jednotlivé vlastnosti.

<div class="web-only" markdown="1">

## Odkazy pro další studium {#odkazy}

Udělal jsem maximum pro to, aby vám tento průvodce vystačil a jiné zdroje jste hledat nemuseli. Přesto si neodpustím několik odkazů jinam:

- Specifikace W3C pro CSS Box Alignment Module Level 3 – [w3.org/TR/css-align-3](https://www.w3.org/TR/css-align-3/)
- Ahmad Shaheed: hra „Learn Box Alignment“ – [ishadeed.com/article/learn-box-alignment/](https://ishadeed.com/article/learn-box-alignment/)
- Rachel Andrew: stručný tahák „Box Alignment Cheatsheet“ – [rachelandrew.co.uk/css/cheatsheets/box-alignment](https://rachelandrew.co.uk/css/cheatsheets/box-alignment)

</div>

<!-- AdSnippet -->
