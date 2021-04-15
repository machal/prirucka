# No Queries

Pošli jsme dva typy podmínek, podle nichž můžete přizpůsobovat rozložení stránky nebo její části v různě širokých rodičovských prvcích.

Media Queries mají širokou podporu v prohlížečích, ale navrhli je, aby řešily spíše rozložení celé stránky.

Container Queries jsou navržené pro větší část scénářů, kdy tyto dotazy potřebujeme, pro layout komponent ve stránce, ale zase v době psaní těchto textů podporu prakticky nemají.

V moderních systémech layoutů je ještě jedna možnost – zalamovat rovržení úplně bez podmínek, takzvané „No Queries“. Na první pohled to může znít skvěle, i mě to tak pořád zní, ale má to řadu háčků nebo přímo velrybářských harpun, abych byl přesný.

Prostě od toho raději zase tak moc nečekejte. Ale jsou situace, kdy vám „No Queries“ v praxi velmi pomůžou, takže pojďme na to. Ve většině příkladů budem zalamování layoutu opět trápit náš mediální objekt.

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
