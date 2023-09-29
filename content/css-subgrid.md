# Subgrid v CSS gridu

Subgrid umožní vytvořit zanořenou mřížku, která zároveň podědí layout rodičovského gridu. Je to velmi praktické a nově podporované ve všech prohlížečích.

<div class="book-index" data-book-index="Subgrid"></div>

<div class="connected" markdown="1">

![Subgrid](../dist/images/medium/vdlayout/schema-css-grid-subgrid.jpg)

<div class="web-only" markdown="1">

Subgrid je součástí specifikace [CSS gridu](css-grid.md).

</div>

<div class="ebook-only" markdown="1">

→ [vrdl.in/subg](https://www.vzhurudolu.cz/prirucka/css-subgrid)

</div>

</div>

Grid je skvělý, ale dříve či později se s ním dostaneme do situace, kdy potřebujeme jeden grid zanořit do druhého.

V takové situaci si pak pochopitelně přejeme, aby vnitřní grid dokázal podědit vnější layout.

Jak vidíte na obrázku níže, subgrid mám to pomůže zařídit.
Vnitřní části položek budou lícovat, i když mají různě velký obsah.

<figure>
<img src="../dist/images/original/vdlayout/subgrid-intro.jpg" width="1600" height="540" alt="Grid vs. subgrid">
<figcaption markdown="1">
Grid a subgrid. Táta a syn.
</figcaption>
</figure>

Můžeme to samozřejmě zajistit i bez subgridu:

- Nastavit prvkům fixní rozměry na výšku nebo použít JavaScript (což bych kvůli výkonu moc nedoporučoval).
- Staré páky mezi kodéry si vzpomenou na složité tabulkové layouty, kterými se toho (skoro) dalo dosáhnout, ale ve kterých se nikdo nevyznal…

Jak na to jít dobře, se subgridem?

## Příklad s kartou produktu {#priklad}

Víte vy co? Ukážu vám to na jednoduchém příkladu.
Na obrázku výše totiž vidíte layout podobný tomu, který používám na Vzhůru dolů.

Mám seznam položek, říkejme jim karty produktu.
Každá karta má složitější strukturu, ve které najdete nadpis, obrázek, text a tlačítko:

```html
<div class="container">
  <div class="item">
    <h2 class="item-heading">
      <a href="#">Nadpis…</a>
    </h2>  
    <div class="item-image">
      <a href="#">
        <img src="image.jpg" alt="Obrázek" width="300" height="200">
      </a>
    </div>
    <div class="item-perex">
      Text…
    </div>
    <div>
      <button>Tlačítko…</button>
    </div>
  </div>  
  <div class="item">
    <!-- Další karta produktu -->
  </div>  
</div>
```

Vnější rozvržení, tedy to, které se týká vodorovného umístění karet, udělám gridem.
To žádný problém nebude:

```css
.container {
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 400px)));
  gap: 4rem;
}
```

Umísťuji zde dvě položky (`repeat(2,…)`).
Přeji si, aby nebyly užší než `250px` a širší než `400px`.
Mezera mezi položkami je `4rem`.

CodePen: [vrdl.in/hunip](https://codepen.io/machal/pen/VwMVPBJ?editors=1100)

To bude asi bez problémů, že?
Ale když já chci, aby nadpisy, obrázky, texty i tlačítka jednotlivých karet byly vždy ve stejné výšce.

## Přidáváme layout pro jednotlivé karty {#priklad-karty}

Nejprve musíme změnit rodičovský layout.
Uděláme to tak, že přidáme řádky pomocí [vlastnosti `grid-template-rows`](css-grid-template-rows-columns.md).

```css
.container {
  grid-template-rows: repeat(4, auto);
}
```

Jak vidíte, nemáme příliš velké ambice položky layoutu nějak omezovat.
Víme jen, že budou čtyři (nadpis, obrázek, text, tlačítko).
A hodláme je pouze zarovnávat mezi sebou navzájem.

## A teď kouzlo, subgrid {#priklad-subgrid}

Zápis pro vnitřní mřížku u jednotlivých položek, který řešíme podmřížkou (subgridem), bude:

```css
.item {
  display: grid;
  grid-row: span 4;
  grid-template-rows: subgrid;
}
```

Prohlížeči dáváme tyhle instrukce:

1. Budiž grid (`display:grid`)!
2. Umísti tuto položku do čtyř buněk gridu (`grid-row:span 4`).
3. Svislý směr mřížky nechť je subgridem, takže po gridu zdědí vnější mřížku (`grid-template-rows:subgrid`).

Je to jasné? Výsledek uvidíte na obrázku, který vám snad pomůže s pochopením celé věci, což je opět možné zkoušet na živé ukázce.

<figure class="figure-thirds">
<img src="../dist/images/original/vdlayout/subgrid-example.jpg" width="1600" height="900" alt="Příklad se subgridem">
<figcaption markdown="1">
*Zelená podmřížka (vlevo) si hoví v modré mřížce a je spokojená. My také, protože vnitřní položky karet jsou navzájem zarovnané.*
</figcaption>
</figure>

Živá ukázka vám řekne více.

CodePen: [vrdl.in/se38k](https://codepen.io/machal/pen/wvrQgLJ?editors=1100)

## Poznámky k subgridu {#poznamky}

V době aktualizace textu (září 2023) prohlížeče zvládají subgrid  poměrně čerstvě, proto nepůjdu u této části CSS gridu úplně do hloubky.

Pár poznámek zde ale uvedu:

### Vícerozměrnost sugridu {#vicerozmernost}

V ukázce jsme pro podmřížku využili jen svislý směr rodičovského layoutu.
Je ale samozřejmě možné využít i vodorovný nebo prostě oba směry najednou.
Pak se z toho stává jeden velký (ale krásný) tabulkový layout, jako z roku 2002.
Dělám si legraci, je to samozřejmě daleko (daleko!) lepší než layout v `<table>`.

<!-- AdSnippet -->

### Dědění mezer {#dedeni-mezer}

[Vlastnost `gap`](css-gap.md) se z rodičovského gridu samozřejmě dědí i na ten vnitřní.
Je ale možné si mezery ve vnitřním layoutu změnit novou deklarací `gap`.

### Žádné přidávání implicitních řádků nebo sloupců {#implicitni}

V běžném gridu je možné pomocí [vlastností `grid-auto-`](css-grid-auto-rows-columns.md) definovat rozvržení pro řádky či sloupce.
Ty se automaticky přidají, když se rozšíří obsah v HTML.
Je asi pochopitelné, že toto v subgridu možné není.
Vždy se jen umísťuje do mřížky, která je zděděná shora od rodičovského gridu.

<!-- AdSnippet -->

## Podpora v prohlížečích {#podpora}

Subgrid je součástí specifikace CSS Grid Layout Module již od Level 2, která se datuje do roku 2018. Zde je stav k září 2023:

- Firefox podporuje subgrid od verze 70 z prosince 2019.
- Safari subgrid přidalo v září 2022 do verze 16, od iOS 16 a v aktualizaci pro macOS Monterey a Big Sur.
- Jako poslední se v září 2023 přidal Chrome a Edge.

Aktuální informace od podpoře hledejte na [CanIUse.com/css-subgrid](https://caniuse.com/css-subgrid)

Podpora subgridu mě velmi těší a nemůžu se dočkat, až mi v komentářích napíšete, jak jej v praxi používáte.
