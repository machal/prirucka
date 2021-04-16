# No Queries

Pošli jsme dva typy podmínek, podle nichž můžete přizpůsobovat rozložení stránky nebo její části v různě širokých rodičovských prvcích.

Media Queries mají širokou podporu v prohlížečích, ale navrhli je, aby řešily spíše rozložení celé stránky.

Container Queries jsou navržené pro větší část scénářů, kdy tyto dotazy potřebujeme, pro layout komponent ve stránce, ale zase v době psaní těchto textů podporu prakticky nemají.

V moderních systémech layoutů je ještě jedna možnost – zalamovat rovržení úplně bez podmínek, takzvané „No Queries“ layouty. Na první pohled to může znít skvěle, i mě to tak pořád zní, ale má to řadu háčků nebo přímo velrybářských harpun, abych byl přesný.

Prostě od toho raději zase tak moc nečekejte. Ale jsou situace, kdy vám No Queries (zkusme jim říkat také „bezdotazová rozvržení“) v praxi velmi pomůžou, takže pojďme na to. Ve většině příkladů budem zalamování layoutu opět trápit náš mediální objekt.

## Flexbox a `min-width` s `max-width`

Pojďme si nejprve alespoň zjednodušeně připomenout strukturu HMTL, která drží naší komponentu:

```html
<div class="container">
  <div class="item">
    <p class="item__image">
      <img>
    </p>
    <div class="item__text">
      <h2> … </h2>
      <p> … </p>
    </div>
  </div> 
</div>
```

Na těchto základech budeme stavět. Umožní nám to jedna nenápadná vlastnost.

### Kouzelný `flex-wrap`

[Vlastnost `flex-wrap`](css-flex-wrap.md) definuje, zda je v pružném layoutu možné položky zalamovat do dalšího řádku (nebo sloupce, pokud má rozvržení opačný směr).

Výchozí hodnota `nowrap` totiž zalamování zakazuje. Připomínám, že kromě umožnění zalamování – hodnoty `wrap` – existuje také možnost zalamovat a ještě k tomu otočit pořadí prvků v druhém sloupci nebo řádku `wrap-reverse`.

### Samotné řešení

Po nutném úvodu teď už pojďme na kód, který pro řešení zalamování layoutu bez dotazů používám:

```css
.item {
  display: flex;
  flex-wrap: wrap;
}

.item__image {
  flex: 1 1 20%;
  max-width: 300px;  /* Breakpoint */
}

.item__text {
  flex: 1 1 40%;
}
```

Rozvržení pak vypadá jako na obrázku.

<!-- TODO img - 3 responzivni stupne - https://codepen.io/machal/pen/xZypPO?editors=1100 -->

Budeme si to muset vysvětlit, že?

- `flex: 1 1 20%` – Obě strany layoutu mají [zkratkou `flex`](css-flex.md) v prvních dvou číslech (`1 1`) nastaveno automatické rozpínání i smršťování. Je to jako bychom to zapsali pomocí [`flex-grow`](css-flex-grow.md) a [`flex-shrink`](css-flex-shrink.md).
- Základní velikost položek je nastavena níž než je celková šířka plochy (`20%` a  `40%`) a slouží jen k definování výchozího poměru stran. Je to jako bychom to uvedli [vlastností `flex-basis`](css-flex-basis.md).
- Bod zlomu definuje maximální šířka obrázku `max-width: 300px`.

Ještě se teď více zaměřme na ten bod zlomu, abychom to celé opravdu pochopili.

Jak už možná víte, flexboxové rozvržení se vždy přizpůsobuje velikost obsahu. Obrázek v tomto layoutu se chová pružně, takže by se ve zvětšování ani smršťování nikde nezastavil.

Definicí `max-width: 300px` jej omezíme a stanovíme s její pomocí také bod zlomu. Znamená to však, že jakmile layout splní požadavky výchozí šířky, tedy dosáhne oněch `20%` definovaných jako `flex-basis`, prostě prohlížeč vykreslí obě položky vedle sebe.

Obrázek pak bude v prvních fázích toho rozložení vedle sebe opravdu malinký. Mohli bychom to změnit nastavením minimální šířky:

```css
.item__image {
  flex: 1 1 20%;
  min-width: 200px;
  max-width: 300px;  /* Breakpoint */
}
```

Tady nedovolíme obrázku menší šířku než 200 pixelů. Řeší to náš problém, ale zároveň tím vzniká jiný. V mezikroku vznikne po straně obrázku prostor. To je moment, kdy už jsme došli k maximu jeho šířky ale ještě se nám vedle nevejde text. Jeho minimální šířka je totiž určená délkou nejdelšího slova.

<!-- TODO img - 3 responzivni stupne s min-width - https://codepen.io/machal/pen/xZypPO?editors=1100 -->

### Alternativa bez `min-width` a `max-width`

Řešení využívající flexbox je možné ořezat na kost a nepoužít přitom minimální a maximální šířku:

```css
.item__image {
  flex: 1 0 300px;
}

.item__text {
  flex: 1 0 300px;
}
```

Obě strany rozvržení mají stejnou šířku. V hodnotě `300px` je uložený bod zlomu tohoto layoutu, respektive jeho polovina – v případě, že obě strany mohou využít alespoň 300 pixelů, elementy se vykreslí vedle sebe.

CodePen: [cdpn.io/e/WNRjyoE](https://codepen.io/machal/pen/WNRjyoE?editors=1100)

Jak vidíte, pomocí flexboxu se No Queries layouty dělají docela snadno. Klíčem je umožnit zalomení pomocí `flex-wrap` a pak si hrát s různými vlastnosti určujícími šířku.

Oba příklady ale snad dobře demonstrují limity bezdotazových layoutů. V určitých šířkách prostě nebudou vypadat tak dobře, jako ty vypiplané pomocí Media nebo Container Queries. Ale jsou situace, kdy to nevadí.

## Řešení pomocí gridu

Také [CSS grid](css-grid.md) nabízí trik, jak udělat rozvržení bez uvádění dotazů na velikost prvků.

Pro potřeby layoutu komponenty, kterou jsme si vybrali jako červenou nit této kapitoly, media objektu, se ale zase tak moc nehodí.

Pojďme si to ukázat přímo v kódu. HTML je pořád stejné, mění se jen kaskádové styly:

```css
.item {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1em;
}

.item__image {
  max-width: 300px;
}
```

Jádro triku je v zápisu `repeat(auto-fit, minmax(300px, 1fr))`, proto právě této části pojďme věnovat zvýšenou péči:

- [Funkce `repeat()`](css-repeat.md) zajistí opakované vykreslení buněk. Prostě namísto `1fr 1fr 1fr` uvedeme `repeat(3, 1fr)`.
- Kouzlo přichází, když namísto počtu uvedeme do prvního parametru `auto-fit`, který zajistí roztahování a smršťování již existujících buňek layoutu.
- Přidáme ještě minimální a maximální velikost buňky, `minmax(300px, 1fr)`, a máme hotovo.

CodePen: [cdpn.io/e/GRrMexj](https://codepen.io/machal/pen/GRrMexj?editors=1100)

Když si s mým příkladem pohrajete pomocí zvětšování a zmenšování okna, zjistíte, že ze všech dosud uváděných ukázek se chová nejhůř. Ostatně, uvidíte to také na obrázku.

<!-- TODO img https://codepen.io/machal/pen/GRrMexj?editors=1100 -->

Řešení tímto trikem v gridu má zásadní nevýhodu – do funkce `repeat()` můžete pochopitelně uvádět jen buňky stejné velikosti.

Daleko zajímavější jsou bezdotazová řešení v gridu pro zápis rozvržení jako jsou fotogalerie.

V následujícím demu jsem vyšel z řešení Anthonyho Kuanga.

CodePen: [cdpn.io/e/zYNaLjB](https://codepen.io/machal/pen/zYNaLjB?editors=1100)

Kouzelník zde použil stejný trik…

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1em;
}
```

…ale výsledek je daleko elegantnější. Na obrázku to snad dobře uvidíte.

<!-- TODO IMG https://codepen.io/machal/pen/zYNaLjB?editors=1100 -->

Tohle by asi nebylo marné používat v praxi, viďte? A pozor, během natáčení nebylo zraněno žádné media queries!

## Řešení pomocí vícesloupcového layoutu

[Vlastnost `columns`](css-multicolumn.md) a ostatní, které z ní vycházejí (součást balíčku  CSS Multiple Column) je hotový ráj pro milovníky bezdotazových rozvržení. Má to ale háček, tahle specifikace je vymyšlená takřka výlučně pro sázení textového obsahu.

Pojďme to ale trochu hacknout a použít pro naši mediální komponentu. HTML zůstává stejné, styly jako vždy převlákají kabát:

```css
.item {
  column-width: 300px;
  column-gap: 1rem;
}
```

Vezměme do ruky lupu a podívejme se na ten kód pořádně:

- `.item` - Možná jste zpozorněli už na řádku se selektorem. Ano, je to tak, CSS Multiple Column nám dovoluje definovat No Queries layout už na úrovni rodičovského prvku.
- `column-width:300px` – Tahle [vlastnost](css-multicol-columns.md) definuje doporučenou šířku sloupce, tedy položky layoutu, ale nijak neříká, kolik jich zde má být. Ideální věc pro bezdotazové rozvržení, jen nad ním tu lupu ještě chvíli podržte!
- `column-gap:1rem` – [Vlastnost](css-gap.md) pro definici mezery mezi buňkami layoutu už asi znáte.

Na obrázku to bude vypadat takto:

<!-- TODO img https://codepen.io/machal/pen/ExZmRbM?editors=1100 -->

Dále už následuje jen obligátní CodePen.

CodePen: [cdpn.io/e/ExZmRbM](https://codepen.io/machal/pen/ExZmRbM?editors=1100)

<!-- TODO nevýhody -->

<!-- TODO další řešení s multicol -->

<!-- TODO další řešení mimo css layouty -->

<!-- TODO shrnutí -->
