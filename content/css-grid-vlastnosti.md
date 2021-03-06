# Principy a vlastnosti CSS Gridu

CSS Grid má mnoho skvělých vlastností. Ne všechny jsou unikátní, některé jste totiž mohli vidět už u flexboxu, ale Grid jejich seznam dále rozšiřuje.

Podívejme se na ně prozatím velmi stručně, ale časem se k nim ještě vrátíme.

## 1) Blokový a inline grid

Kontejner mřížky můžeme definovat kromě `display:grid` také jako `display:inline-grid` a použít ho vedle dalších řádkových (`inline` nebo `inline-block`) elementů.

<!-- TODO obrázek až budu mít příklad v kap. 2 -->

## 2) Rozměry jaké si umanete: fixní i flexibilní

Šířky a výšky položek mřížky je možné definovat všemi způsoby, které už asi znáte – jednotkami `px`, `em`, `%` a mnoha dalšími.

Přidává se tady ale ještě nová [jednotka `fr`](css-jednotka-fr.md) – *fraction unit*, která umožní snadné dělení volného místa.

<figure>
<img src="../dist/images/original/vdlayout/grid-fr-unit.png" width="1920" height="540"  alt="Jednotka fr - podíl na zbytku v CSS Gridu">
<figcaption markdown="1">
*Obrázek: Kombinovat můžeme opravdu silně. První sloupec definujeme ve fixních pixelech, druhý v jednotce EM odvozené z velikosti písma. Zbytek plochy rozdělíme podílovou jednotkou FR. Zdroj: [cdpn.io/e/XWrjZRV](https://codepen.io/machal/pen/XWrjZRV?editors=1100)*
</figcaption>
</figure>

Aby to nestačilo, máme k dispozici ještě například [funkci `minmax()`](css-minmax.md), díky níž můžeme rozměry nastavit v rozmezí od minimální po maximální hodnotu.

## 3) Rozměry podle obsahu

Někdy je lepší nenastavovat šířku a výšku shora, ale nechat obsah, aby do rozměrů mluvil sám. K tomu jsou zde klíčová slova použitelná [ve funkci `minmax()`](css-minmax.md):

* `max-content` – nezmenšuj se pod minimální rozměr obsahu.
* `max-content` – nezvětšuj se nad maximální rozměr obsahu.

Zajímavá je i funkce `fit-content()`, kdy vnutíme šířku podle obsahu i těm prvkům, které by se v daném kontextu chovaly jako blokové.

<!-- TODO obrázek až budu mít -->

## 4) Zarovnávání všeho se vším

Už od flexboxu asi víte, že možnosti zarovnávání položek layoutu jsou vynikající.

Vlastnosti jako `justify-content`, `align-items` nebo `align-self` přinesly hotovou revoluci do oblasti, která se skoro celou historii kaskádových stylů obcházela různými nehezkými hacky.

Stejné možnosti máme u Gridu, navíc kombinované s dalšími úžasnými vlastnostmi Gridu.

<!-- TODO obrázek až budu mít hotovou tuto podkapitolu -->

## 5) Nezávislost vzhledu na HTML zdroji

Frontendové kodérky a kodéři museli vzhledu často obětovat strukturu HTML, což přinášelo komplikace v oblasti přístupnosti stránky například čtečkám pro nevidomé nebo robotům vyhledávačů.

Když vynecháme nepěkné triky s pozicováním, slibně zde vstupil flexbox. Co je to ale oproti Gridu!

* [Vlastnost `order`](css-order.md), která dovoluje změnit pořadí prvků v prohlížeči, už znáte z flexboxu. Ano, tady ji můžete použíž taky.
* Pomocí [vlastnosti `grid-area`](css-grid-area.md) budete schopní umístit jakéhokoliv potomka na jakékoliv místo mřížky. A zahodit přitom svěrací kazajku struktury HTML.
* Hodnota `dense` [vlastnosti `grid-auto-flow`](css-grid-auto-flow.md) částečně nechává vykreslení layout na prohlížeči, což oceníte u jednoduchých rozvržení typu „masonry“.

<!-- TODO obrázek až bude hotová podkapitola -->

## 6) Automatické umístění položek do mřížky

Díky vlastnosti známé jako „auto-placement“ není nutné položkám Gridu definovat, do kterých buněk mřížky je chceme umístit.

Pokud totiž není definováno jinak, každý DOM uzel, který je přímým potomkem kontejneru mřížky, se umístí do jedné buňky.

V našich podmínkách čteme zleva doprava a pak dolů. Položky se samozřejmě budou umísťovat ve stejném směru.

Pokud bychom snad chtěli změnit směr budování mřížky na shora dolů a pak doprava, pomůžeme si [vlastností `grid-auto-flow`](css-grid-auto-flow.md) s hodnotou `column`.

<img src="../dist/images/original/vdlayout/grid-auto-flow.png" width="1920" height="540"  alt="grid-auto-flow: column">

## 7) Umísťování prvků přes sebe a vrstvení

Jakmile si s [vlastností `grid-area`](css-grid-area.md) zvyknete umísťovat prvky do konrétních oblastí, objevíte zcela nový svět vrstvení.

Oblasti mřížky můžete snadno umístit do stejných míst a pomocí vám jistě dobře známé vlastnosti `z-index` pak vytvářet překryvy.

<!-- TODO CodePen a obrázek k z-index, pokud budu mít -->

Samozřejmě je možné používat i vlastnost `position`, která snadno vytrhne položky mřížky z jejich původních pozic.

## 8) Zanořování mřížek

To, co je profíkům jasné jako facka, nemusí být patrné všem. Stejně jako blokové prvky nebo flexboxové kontejnery, můžete do sebe zanořovat i kontejnery gridu.

Otevírá to další možnosti a prostor pro tvorbu precizně definovaných layoutů.

<!-- TODO CodePen a obrázek až budu mít -->

Do budoucna zde mohou ještě zaúřadovat a nové možnosti přidat rozpracované vlastnosti jako podmřížka (subgrid) nebo `display:contents`. I na ty se podíváme, když dojde na budoucnost Gridu.
