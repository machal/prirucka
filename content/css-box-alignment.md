# Zarovnání boxů v CSS

Box Alignment v CSS specifikuje zarovnání boxů v různých modelech rozvržení CSS: blokovém, tabulkovém, vícesloupcovém, flexboxu nebo Gridu.

Specifikace [Box Alignment Module Level 3](https://www.w3.org/TR/css-align-3/) v podstatě vzala všechna zarovnání a rozdělení prostoru definovaná ve flexboxu a zpřístupnila ji ostatním modulům.

Nijak se zde nezabýváme zarovnáváním textu (vlastnosti jako `text-align`, `vertical-align`), ani staršími metodami zarovnávání boxů (`margin`, `float`…).

## Rychlý tahák k vlastnostem

Vlastností, které obstarávají zarovnávání v CSS, je na jednu webařskou hlavu opravdu hodně. Naštěstí jsou ale ty nejdůležitější pojmenované podle jednoduchého klíče. Než vyberete tu správnou, musíte si ujasnit:

- Směr zarovnávání (inline je obvykle vodorovný, block svislý).
- Co budete zarovnávat (všechny položky, jednu položku nebo obsah mezi nimi).

<div class="rwd-scrollable f-6"  markdown="1">

|                                     | **Inline** (`justify-*`) | **Block** (`align-*`) |
| **Zarovnání položek** (`*-items`)   |  `justify-items`     | `align-items`     |
| **Zarovnání sebe sama** (`*-self`)  |  `justify-self`      | `align-self`      |
| **Distribuce obsahu** (`*-content`) |  `justify-content`   | `align-content`   |

</div>

Je dobré vědět, že v tabulce nejsou obsaženy zdaleka všechny zarovnávací vlastnosti. Ty méně známé najdete v textu u jednotlivých typů zarovnávání.

## Důležité pojmy

Než začneme, musíme si objasnit pár konceptů. Nebojte se, nebudu to s teorií přehánět, vybral jsem jen takové pojmy, bez kterých se nemůžete obejít.

### Směr rozvržení: bloková a řádková osa

Prohlížeče nám většinou umožňují jen dvourozměrný zážitek a tak zarovnáváme na dvě osy.

Osy se nejmenují „vodorovná“ a „svislá“, protože se jejich směr může v různých situacích měnit:

- Změníme mód psaní (`writing-mode`) nebo jazyk dokumentu. Japonština nebo arabština se čtou zcela v odlišných směrech.
- Změníme směr toku layoutu, což například ve flexboxu často děláme pomocí vlastnosti `flex-direction`.

<figure>
<img src="../dist/images/original/todo.jpg" width="1600" height="900" alt="…">
<figcaption markdown="1">
*TODO: Obrázek s výchozím směrem a pak změněným pomocí flex-direction, změny jazyka…*
</figcaption>
</figure>

Osy se proto pro potřeby layoutu v CSS nejmenují „vodorovná“ a „svislá“, ale:

- „bloková“ (block), u nás obvykle svislá
- „řádková“ (inline), u nás obvykle vodorovná

Ze stejného důvodu nemůžeme například říci, že zarovnáváme „vlevo nahoru“, ale vždy na začátek nebo na konec určité osy. K tomu se ještě dostaneme.

### Předmět a kontejner

Pro potřeby dalších textů budeme ještě potřebovat rozlišit mezi dvěma pojmy:

- *Předmět zarovnání* (alignment subject) je samotný boxík, který zarovnáváme. V rámci textů mu zde občas budeme říkat také „položka“.
- *Kontejner zarovnání* (alignment container) je rámec, ve kterém předmět zarovnáváme. Obvykle jde o rodičovský element.

*TODO příklad s obrázkem, alespoň viz https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment*

### Náhradní řešení zarovnání

„Fallback alignment“ nebo-li náhradní zarovnání řeší situace, kdy nejsou splněny podmínky, které určité zarovnání vyžaduje.

Například pro uplatnění hodnoty `space-between` u vlastnosti `justify-content` je nutné, aby se v kontejneru vyskytoval více než jeden předmět. Pokud tato podmínka není splněna, specifikace jako náhradní řešení předepisuje hodnotu `flex-start` nebo `start`.

## Typy zarovnání podle elementu {#typy-element}

### Zarovnání položek

Na kontejneru definujeme, jak se budou zarovnávat položky.

Patří sem všechny vlastnosti, které v názvu obsahují `-items`:

- `justify-items` – zarovnání na řádkové ose
- `align-items` - zarovnání na blokové ose
- `place-items` - zkratka pro obě vlastnosti

### Zarovnání sebe sama

Zarovnání konkrétního subjektu uvnitř kontejneru.

Jde o všechny vlastnosti, které v názvu obsahují `-self`:

- `align-self` - zarovnání na blokové ose
- `justify-self` – zarovnání na řádkové ose
- `place-self` - zkratka pro obě vlastnosti

### Distribuce obsahu

Distribuce obsahu řídí zarovnání obsahu uvnitř boxu.

Patří sem všechny vlastnosti, které v názvu obsahují `-content`:

- `justify-content` – zarovnání na řádkové ose
- `align-content` - zarovnání na blokové ose
- `place-content` - zkratka pro obě vlastnosti

## Klíčová slova pro zarovnání {#typy-klicova-slova}

### Poziční zarovnání

Určování polohy předmětu vzhledem k jeho kontejneru zarovnání. Ve specifikaci se používá pojem „Positional Alignment“.

Týká se těchto vlastností:

- Zarovnání sebe sama (`justify-self`, `align-self` a `place-self`).
- Distribuce obsahu (`justify-content`, `align-content` a `place-content`).

Můžete použít tyto hodnoty:

- `center` <small>(použitelné pro `-self` i `-content`)</small>  
  Centruje předmět doprostřed kontejneru zarovnání.
- `start` <small>(`-self` i `-content`)</small>  
  Zarovnává předmět k hraně začátku kontejneru na patřičné ose.
- `end` <small>(`-self` i `-content`)</small>  
  Zarovnává předmět k hraně konce kontejneru na patřičné ose.
- `self-start` <small>(`-self`)</small>  
  Zarovnává předmět k hraně začátku kontejneru, která odpovídá začátku předmětu na patřičné ose.
- `self-end` <small>(`-self`)</small>  
  Zarovnává předmět k hraně začátku kontejneru, která odpovídá konci předmětu na patřičné ose.
- `flex-start` <small>(`-self` i `-content`, jen pro flexbox)</small>  
  *TODO.* Mimo flexbox se hodnota chová jako `start`.
- `flex-end` <small>(`-self` i `-content`, jen pro flexbox)</small>  
  *TODO.* Mimo flexbox se hodnota chová jako `end`.
- `left` <small>(jen `justify-*`)</small>  
  *TODO.* Pokud se použije na řádkové ose, chová se jako `start`.
- `right` <small>(jen `justify-*`)</small>  
  *TODO.* Pokud se použije na řádkové ose, chová se jako `end`.

### Zarovnání na účaří

Zarovnání na účaří určuje polohy účaří předmětu nebo skupiny předmětů tím, že přídává vnější okraj nad box. V češtině to funguje jen pro zarovnání vedle sebe, kde lze jednotlivá účaří porovnávvat. Ve specifikaci se mluví o „Baseline Alignment“, pokud byste to chtěli hledat.

Týká se těchto vlastností:

- Zarovnání sebe sama (`justify-self`, `align-self` a `place-self`).
- Distribuce obsahu (`justify-content`, `align-content` a `place-content`).

Můžete použít tyto hodnoty:

- `first baseline`  
  Zarovnání na účaří prvního řádku. *TODO fallback?*
- `last baseline`  
  Zarovnání na účaří posledního řádku. *TODO fallback?*
- `baseline`  
  Zkratka pro `first baseline`.

### Zarovnání zbylého prostoru

Určuje, co se stane s prostorem, který zbude mezi položkami na řádkové ose. Ve specifikaci hledejte jako „Distributed Alignment“.

Týká se těchto vlastnotí:

- Distribuce obsahu (`justify-content`, `align-content` a `place-content`).

Můžete použít tyto hodnoty:

- `space-between`  
  Volné místo se rovnoměrně rozdělí mezi položky, přičemž první a poslední je zarovnaná s hranou kontejneru.
- `space-around`  
  Volné místo se rovnoměrně rozdělí mezi položky a polovina mezery mezi položkami se vloží mezi hrany kontejneru a první a poslední položku.
- `space-evenly`  
  Volné místo se rovnoměrně rozdělí mezi položky i mezi první a poslední položku a okraje kontejneru.
- `stretch`  
  Položky rozšíří své rozměry tak, aby v kontejneru nezbylo žádné volné místo. Pokud jsou položky menší než kontejner, jejich velikost se zvětší rovnoměrně (nikoli proporcionálně), přičemž stále respektují omezení uložená vlastnostmi jako `max-width`/`max-height`.

### Zarovnání zbylého prostoru

<!-- [TODO](https://www.w3.org/TR/css-align-3/#overflow-values) -->

### Definování mezer mezi položkami

<!-- TODO -->

## Podpora v prohlížeích
