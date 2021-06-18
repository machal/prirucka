# Svatý grál mezi layouty

V tomto speciálním případě začneme citací z Wikipedie:

> Jako svatý grál bývají označovány nedosažitelné předměty nebo myšlenky, které se snaží člověk vyzkoumat nebo rozluštit, čímž by měl dosáhnout zásadního pokroku.

Svatým grálem medicíny je například nalezení léku na rakovinu.

Jenže co je „svatý grál“ v oblasti webových layoutů? Nejlépe to opět definuje největší světová encyklopedie, takže ji pojďme využít:

> Svatým grálem je rozvržení, které má více stejně vysokých sloupců. Je běžně žádané a implementované, ale po mnoho let měly různé způsoby jeho implementace všechny možná nevýhody. Z tohoto důvodu bylo nalezení optimální implementace přirovnáváno k hledání nepolapitelného svatého grálu.

Svatý grál mezi layouty vypadá, prosím pěkně, takto:

<!-- TODO img responsive design včetně neviditelné mřížky -->

Ano, znáte ho. Je to layout, ve kterém byla ještě před lety vysázena každá druhá webovka.

Implementovali jsme jej nejprve pomocí rámců, pak tabulkami, floaty nebo ještě jinak. Vzpomeňte na [exkurzi z první kapitoly](css-layout-versus.md). Mělo to tak moc nevýhod a optimální řešení bylo tak moc daleko, že jsme tomuto layoutu, my webaři, začali říkat „svatý grál“ nebo chcete-li „holy grail layout“.

Až nyní jsme se přiblížili k optimálnímu a dostatečně jednoduchému řešení. Jak už správně tušíte, umíme jej udělat pomocí [CSS gridu](css-grid.md).

Historie má smysl pro ironii a v případě historie vývoje webdesignu tomu není jinak. Takže zhruba od roku 2020, kdy jsme mohli tento typ layoutu poprvé v historii nakódovat efektivně a elegantně, designérky a designéři od něj masově ustupují ve prospěch jiných, jednodušších typů layoutů.

I přes to bych se svatým grálem mezi rozvrženími nějaký čas v knížce strávil. Jeho historická role nekončí. Například pro tvorbu rozhraní webových aplikací je, na rozdíl od tvorby rozhraní prezentačních webových stránek, holy grail pořád nezastupitelný.

A pak… Skvěle se na něm ukazují silné stránky šablonování vlastnostmi začínajícími na `grid-template` v CSS gridu.

Pokud byste v tuto chvíli chtěli odložit knížku a začít kódovat, což vám můžu jedině doporučit, opět nabízím předpřipravený CodePen, který si „forkněte“ a vzhůru do kódování. [cdpn.io/e/ZEePyrM](https://codepen.io/machal/pen/ZEePyrM?editors=1100)

HTML jsem vymyslel takto:

```html
<div class="container">
  
  <header class="head">
    <h2>.head</h2>
    <p>…</p>
  </header>
  
  <main class="main">
    <h2>.main</h2>
    <p>…</p>
  </main>

  <aside class="side">
    <h2>.side</h2>
    <p>…</p>
  </aside>    
  
  <footer class="foot">
    <h2>.foot</h2>
    <p>…</p>
  </footer>  
  
</div>
```

## Zadání pro rozvržení

Nejprve je potřeba definovat, jak přesně má layout vypadat a chovat se. Leccos jste asi viděli na obrázku výše. Ještě to ale raději rozepíšu:

- Na malých displejích, zde do šířky okna `599px`, chceme prostě a jednoduše vyskládat všechny prvky layoutu pod sebe přesně dle pořadí v kódu.
- Na větších obrazovkách je layout je roztažený na celou viditelnou výšku okna.
- Na výšku bychom rádi drželi tato pravidla: hlavička a patička (prvky `.head` a `.foot`) jsou vysoké přesně `10em`, respektive `5em`. Prostředek zabere zbývající plochu.
- Ve zbývající vnitřní ploše máme dva prvky. Postranní panel (`.side`) má šířku 30 %, ovšem s minimem `10em` a maximem `20em`. Obsahový blok (`.main`) už pak jen dostává zbytek viditelné plochy.

Pakliže si chcete sami zkusit kódovat, teď je ta správná příležitost zavřít knížku a učit se prací.

Čtenáři mezi vámi mohou pokračovat.

Nejprve si napíšeme [Media Query](content-vdlayout/media-queries.md) a uděláme servisní nastavení:

```css
@media screen and (min-width: 600px) { 
  .container {
    display: grid;
    height: 100vh;
  }
}
```

Rodičovskému prvku `.container` jsme nastavili zobrazovací kontext pro CSS grid a výšku na `100vh`, což je sto procent výšky viewportu (viewport height). Layout tak bude vždy roztažený v celém okně.

V tomto případě jsem se rozhodl, že budu používat oblasti (`grid-area`), takže do nich můžu prvky DOMu rovnou umístit:

```css
.head {
  grid-area: head;
}

.main {
  grid-area: main;
}  

.side {
  grid-area: side;
}    

.foot {
  grid-area: foot;
}      
```

Jak asi tušíte, toto samo o sobě nic nedělá. Normálně bych začínal od definice šablony layoutu (`grid-template`), ale právě to vám chci ukázat jako třešničku na dortu tohoto příkladu. Pojďme si ji dát na talíř:

```css
.container {
  grid-template-rows: 10em 1fr 5em; 
  grid-template-columns: 30% 1fr;
  grid-template-areas:
    "head head"
    "side main"
    "foot foot";
}
```

Teď si to vysvětleme. První dvě vlastnosti už znáte:

- Pomocí [`grid-template-rows`](css-grid-template-row-columns.md) definujeme řádky layoutu. Víme, že hlavička má být vysoká `10em`, patička `5em` a ten zbytek připadá na prostřední část. Zbytek definujeme jako jeden podíl z celkového počtu jednoho podílu, [jednotkou `fr`](css-jednotka-fr.md).
- [Vlastnost `grid-template-columns`](css-grid-template-row-columns.md) nám, jak už víte, pomůže definovat směr rozvržení po hlavní ose, tedy po sloupcích. Postranní panel má zabrat 30 % šířky a pak je tu ten zbytek pro obsah.

## Definované oblasti

[Vlastnost `grid-template-areas`](css-grid-template-areas.md) ještě možná neznáte, ale v gridu patří k mým nejoblíbenějším. Definujeme s jejím pomocím jména oblastí a jejich umístění v buňkách mřížky.

Pomocí `grid-template-rows` a `grid-template-rows` jsme vytvořili mřížku 3 ⨉ 2, o třech řádcích a dvou sloupcích. Do nich teď můžeme pomocí tohoto „ASCII artu“ umísťovat oblasti.

Asi jste si všimli, že oblasti `head` a `foot` zabírají vždy dvě buňky, což je přesně ten layout, který potřebujeme udělat.

Pomocí inspekce mřížky ve Firefoxu se nám teď layout krásně vizualizuje i s pojmenovanými oblastmi:

<!-- TODO img mřížka ve Firefoxu -->

## Minimum, maximum, optimum s pomocí funkce `clamp()`

Vsadím se, že vám celou dobu vrtá hlavou, proč jsem zatím ignoroval fakt, že dle zadání má postranní panel (`.side`) mít šířku 30 % — ovšem s minimem `10em` a maximem `20em`.

Inu, snažím se vám ty třešničky dávkovat tak, abyste se jich nepřejedli. Další sladkou dobrotou je totiž funkce [funkce `clamp()`](css-min-max-clamp.md).

```css
  .container {
    /* … */
    grid-template-columns: clamp(10em, 30%, 20em) 1fr;
  }
```

Dělá to přesně to, co si myslíte: `30%` v prostředním argumentu je optimální velikost. První a poslední argument dodává minimum a maximum.

Podpora této funkce v moderních prohlížečích je výborná.

Pojďme si to teď zjednodušit, nebo možná zkomplikovat. Záleží, jak se na to budete dívat.

## Používáme zkratky

Zaměříme se na kód, kterým definujeme rozvržení:

```css
.container {
  grid-template-rows: 10em 1fr 5em; 
  grid-template-columns: clamp(10em, 30%, 20em) 1fr;
  grid-template-areas:
    "head head"
    "side main"
    "foot foot";
}
```

Nyní se jej pokusíme zestručnit.

Vlastnosti `grid-template-rows` a `grid-template-columns` můžeme zapsat zkratkou `grid-template`, která definuje oba směry a odděluje je lomítkem. Jako vždy v CSS i zde uvádíme jako první svislý směr, tedy definice řádků layoutu:

```css
.container {
  grid-template: 10em 1fr 5em / clamp(10em, 30%, 20em) 1fr;
  grid-template-areas:
    "head head"
    "side main"
    "foot foot";
}
```

Jde to zjednodušit ještě více. Obě vlastnosti můžeme spojit do jediné zkratky, [vlastnosti `grid-template`](css-grid-template.md):

```css
.container {
  grid-template:
    "head head" 10em
    "side main" 1fr
    "foot foot" 5em
    / clamp(10em, 30%, 20em) 1fr;
}
```

Dle mého to není úplně nepřehledné – k řádkům vždy nejprve uvádíme oblasti, pak  rozměry řádku, následuje lomítko a zapíšeme rozměry sloupců.

A mohli bychom to zkrátit ještě více. Do [vlastnosti `grid`](css-grid-zkratka.md):

```css
.container {
  grid:
    "head head" 10em
    "side main" 1fr
    "foot foot" 5em
    / clamp(10em, 30%, 20em) 1fr;
}
```

Do `grid` se kromě vlastností pro šablonu (`grid-template`) dá uvádět ještě vlastnosti implicitního gridu, začínající na (`grid-auto`). To je už dost specifická a zapeklitá věc, takže ji zde zatím nechám bez vysvětlení. To pak najdete v kapitole o CSS gridu.

Je mi jasné, že pro jedny jsem to sice zjednodušil („hurá, méně kódu!“), jiným jsem zamotal hlavu („fuj, kód složitý jako assembler“). Máte však volbu, jak kód v gridu zapisovat a vyberte dle svých preferencí.

Ještě vám dlužím finální CSS kód:

```css
@media screen and (min-width: 600px) {

  .container {
    display: grid;
    height: 100vh;
    grid:
      "head head" 10em
      "side main" 1fr
      "foot foot" 5em
      / clamp(10em, 30%, 20em) 1fr;
  }
  
  .head {
    grid-area: head;
  }
  
  .main {
    grid-area: main;
  }  
  
  .side {
    grid-area: side;
  }    
  
  .foot {
    grid-area: foot;
  }      

}  
```

CodePen: [cdpn.io/e/ppVzrg](https://codepen.io/machal/pen/ppVzrg?editors=1100)

A to je vše. Já už se těším na další příklad. Co vy?
