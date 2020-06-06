# Principy a vlastnosti CSS Gridu

CSS Grid má mnoho skvělých vlastností. Ne všechny jsou unikátní, některé jste mohli vidět už u flexboxu, ale Grid jejich seznam dále rozšiřuje.

Podívejme se na ně prozatím velmi stručně, ale časem se k nim ještě vrátíme.

## Blokový a inline grid

Kontejner mřížky můžeme definovat kromě `display:grid` také jako `display:inline-grid` a použít ho vedle dalších řádkových (`inline` nebo `inline-block`) elementů.

*TODO obrázek*

## Rozměry jaké si umanete: fixní i flexibilní

Šířky a výšky položek mřížky je možné definovat všemi způsoby, které už asi znáte – jednotkami `px`, `em`, `%` a mnoha dalšími.

Přidává se tady ale ještě nová [jednotka `fr`](css-jednotka-fr.md) – *fraction unit*, která umožní snadné dělení volného místa 

Aby to nestačilo, máme k dispozici ještě například [funkci `minmax()`](css-minmax.md), díky níž můžeme rozměry nastavit na rozmězí od minima po maximální hodnotu.

*TODO obrázek*

## Rozměry podle obsahu

Někdy je lepší nenastavovat šířku a výšku sezhora, ale nechat obsah, aby do rozměrů mluvil sám. K tomu jsou zde klíčová slova použitelná [ve funkci `minmax()`](css-minmax.md):

* `max-content` – nezmenšuj se pod minimumální rozměr obsahu.
* `max-content` – nezvětšuj se nad maximální rozměr obsahu.

Zajímavá je i funkce `fit-content()`, kdy vnutíme šířku podle obsahu i těm prvkům, které by se v daném kontextu chovaly jako blokové.

*TODO obrázek*

## Zarovnávání všeho se vším

Už z flexboxu asi víte, že možnosti zarovnávání položek layoutu jsou vynikající. 

Vlastnosti jako `justify-content`, `align-items` nebo `align-self` přinesly hotovou revoluci do oblasti, která se skoro celou historii kaskádových stylů obcházela různými nehezkými hacky.

Stejné možnosti máme u Gridu, navíc kombinované s dalšími úžasnými vlastnostmi Gridu.

*TODO obrázek*

## Nezávislost vzhledu na HTML zdroji

Frontendoví kodéři a kodérky museli vzhledu často obětovat strukturu HTML, což přinášelo komplikace v oblasti přístupnosti stránky například čtečkám pro nevidomé nebo robotům vyhledávačů.

Když vynecháme nepěkné triky s pozicováním, slibně zde vstupil flexbox. Co je to ale oproti Gridu!

* Vlastnost `order` už znáte z flexboxu. Ano, tady ji můžete použíž taky.
* Pomocí [vlastnosti `grid-area`](css-grid-area.md) budete schopní umístit jakéhokoliv potomka na jakékoliv místo mřížky. A zahodit přitom svěrací kazajku struktury HTML.
* Hodnota `dense` [vlastnosti `grid-auto-flow`](css-grid-auto-flow.md) částečně nechává vykreslení layout na prohlížeči, což oceníte u jednoduchých rozvržení typu „masonry“.

*TODO obrázek*

## Umísťování prvků přes sebe a vrstvení

Jakmile si s [vlastností `grid-area`](css-grid-area.md) zvyknete umísťovat prvky do konrétních oblastí, objevíte zcela nový svět vrstvení oblastí.

Oblasti mřížky můžete snadno umístit do stejných míst a pomocí vám jistě dobře známé vlastnosti `z-index` pak vytvářet překryvy.

*TODO CodePen a obrázek*

## Zanořování mřížek

To, co je profíkům jasné jako facka, nemusí být patrné všem. Stejně jako blokové prvky nebo flexboxové kontejnery, můžete do sebe zanořovat i kontejnery gridu.

Otevírá to další možnosti a prostor pro tvorbu precizně definovaných layoutů.

*TODO CodePen a obrázek*

Do budoucna zde mohou ještě zaúřadovat a nové možnosti přidat rozpracované vlastnosti jako podmřížka (subgrid) nebo `display:contents`. I na ty se podíváme, když dojde na budoucnost Gridu.
