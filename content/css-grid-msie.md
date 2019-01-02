# Grid v MSIE 11

„Neumí to Explorer“ je na prvních devíti místech z 10 důvodů, proč lidé ještě na začátku roku 2019 nepoužívají [CSS Grid](css-grid.md).

Asi už víte, že *něco* z gridu v Exploreru funguje. Ale taky asi víte, že náš „nejoblíbenější“ prohlížeč nepodporuje důležité vlastnosti jako je `grid-gap` (mezera mezi buňkami), `grid-template-areas` (pojmenované oblasti) nebo třeba automatické umísťování prvků do mřížky.

Na vědomí se tímto dává, že díky [zásadním aktualizacím](https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/) v Autoprefixeru je možné první dvě vcelku pokojně začít používat ve všech prohlížečích. A automatické umísťování? Tak trochu jde taky. Ale to je složitější, však uvidíte.

Pojďme ale Gridu v MSIE, prohlížeči který stále většina zdejších webařů musí podporovat, pořádně probrat v tomhle textu.

## Proč se tím zabývat? {#proc}

FAQ pro nedůvěřivé frontendové občany a občanky:

*„Na Explorer se můžu víte co.“* — Pravděpodobně nemůžete. IE 10 asi už mizí v prachu dějin, na většině projektů má ale velmi silné zastoupení jedenáctá verze Exploreru. V průměru to může být mezi [10-15 procenty uživatelů](prohlizece.md).

*„Explorer to neumí.“* – Umí. Byl to první prohlížeč, který CSS Grid naimplementoval.

*„Explorer toho z Gridu umí děsně málo.“* – Teď už ne, čtete dál.

*„Udělám to flexboxem a hotovo.“* – Ano, spoustu layoutů vyřešíte flexboxem. Jenže flexbox nefunguje dobře u layoutů, kdy potřebujete vnutit jednotnou mřížku a neohlížet se na obsah. CSS Grid vám ušetří spoustů drbání levou rukou za pravým uchem. A možnosti jeho využití se teď díky Autoprefixeru rozšířily.

Pojďme dát Gridu novou šanci.

## Třísloupcové demo {#demo}

<iframe height='317' scrolling='no' title='CSS Grid Basics demo: IE support with Autoprefixer ' src='//codepen.io/machal/embed/BvJjdz/?height=317&theme-id=light&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/machal/pen/BvJjdz/'>CSS Grid Basics demo: IE support with Autoprefixer </a> by Martin Michálek (<a href='https://codepen.io/machal'>@machal</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Jde o třísloupcový layout definovaný následujícím způsobem:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-column-gap: 0.5em;  
  grid-template-areas: "a b c";
}
```

Teď to nejlepší. Tenhle kód nám Autoprefixer přeloží tak, aby v pohodě fungoval v Internet Exploreru 11. Včetně mezer (`-gap`) a pojmenovaných oblastí (`-areas`), vlastností, které tenhle pravěký prohlížeč neumí.

Pro zájemce polopaticky:

- `display: grid` asi vysvětlovat nemusím. Definujeme prostě kontejner mřížky.
- `grid-template-columns: 1fr 3fr 1fr` specifikuje samotnou mřížku. Co je `fr`? Vzpomeňte si na zlomkovou jednotku [z textu o Gridu](css-grid.md). Tady říkáme, že chceme třísloupcový layout, jehož prostřední sloupec zabírá trojnásobnou délku oproti těm krajním.
- `grid-column-gap: 0.5em` je zápis pro mezeru mezi sloupci layoutu.  
- `grid-template-areas` je šablona pojmenování oblastí pro následné využití v CSS.

### Proč takhle složitě? Protože Autoprefixer!

Vy znalejší jste si jistě všimli, že pro takto jednoduchý layout by bylo zbytečné definovat šablonu pojmenování oblastí – `grid-template-areas`. To je ale oběť na oltář podpory v Internet Exploreru.

Dalším kódem už jen umístíme sloupečky do pojmenovaných oblastí:

```css
.side-1 {
  grid-area: a;
}

.content {
  grid-area: b;
}

.side-2 {
  grid-area: c;
}
```

A šup! V další fázi se můžeme kochat kódem, který vypotí Autoprefixer.

## Kód produkovaný Autoprefixerem

Nejprve rodič layoutu:

```css
.container {
  display: -ms-grid;
  -ms-grid-columns: 1fr 0.5em 3fr 0.5em 1fr;
}
```

Následuje samozřejmě výše uvedený kód pro moderní prohlížeče. Ten pro zjednodušení vynechávám. Opět ale oba řádky vysvětlím:

- `display: -ms-grid` – prefixovaný zapínač Gridu v Exploreru.
- `-ms-grid-columns: 1fr 0.5em 3fr 0.5em 1fr` – magie. Autoprefixer spojil definici mřížky s definicí mezer (`grid-column-gap`), abychom ty (sakramentsky návykové) díry v layoutu mohli využívat i v Exploreru, který žádou z „gap vlastností“ nepodporuje.

Kód prvků layoutu, jež Autoprefixer vyrobí pro potřeby Exploreru, vypadá takhle:

```css
.side-1 {
  -ms-grid-row: 1;
  -ms-grid-column: 1;
}

.content {
  -ms-grid-row: 1;
  -ms-grid-column: 3;
}

.side-2 {
  -ms-grid-row: 1;
  -ms-grid-column: 5;
}
```

Ano, IE totiž neumí ani žádnou z „area vlastností“. Autoprefixer tak „ručně“ spočítá umístění do patričních sloupečků.

Pokud vám nesedí počty, protože jsme původně měli jen třísloupcový layout, pak upozorňuji, že Autoprefixer uměle přidává sloupečky, abychom mohli používat mezery `-gap`.

Demo jsme snad rozebrali do posledního kamínku. Tady je ještě v celé kráse: [cdpn.io/e/BvJjdz](https://codepen.io/machal/pen/BvJjdz).

## Autoprefixer: Na co nesmíte zapomenout {#autoprefixer-nastaveni}

V Autoprefixeru si povolte generování prefixů pro mřížku – `grid: true`.

V mém [demu na Githubu](https://github.com/machal/css-grid-demos/blob/master/gulpfile.js#L12-L20) to mám například pro Gulp takto:

```javascript
gulp.task('autoprefixer', () =>
  {
    return gulp.src('src/css/*.css')
      .pipe(autoprefixer({
        grid: true
      }))
      .pipe(gulp.dest('dist/css'));
  }
);
```

V samotném CSS kódu pak:

- Definujte grid vždy kromě sloupců (`grid-template-columns`) nebo řádků také pojmenované oblasti: `grid-template-areas`.
- Používejte vlastnost `grid-template`, nikoliv zkratku `grid`.
- Vyhněte se pojmenovávání jmen řádků gridu.

Pokud na něco z toho zapomenete, Autoprefixer vás asi řádně potrápí, protože žádné prefixy nepřidá. 

Pozor také na správné verze používaných nástrojů: 

- PostCSS verze 6 a novější
- Autoprefixer 9.3 a novější

### Zapnutí a vypnutí Autoprefixer

Občas se může hodit vypnutí generování prefixů v konkrétním místě kódu. 

Pro ten účel použijte řídící komentáře `/* autoprefixer: off */` nebo `/* autoprefixer: ignore next */`.

## Co Autoprefixer umí? {#autoprefixer-vlastnosti}

Následuje sumář aktuálně podporovaných a nepodprovaných vlastností Gridu. 

Dobrá zpráva: Těch druhých je poměrně málo. Špatná zpráva: Má to svoje mouchy.

### Umí: Definování šablony mřížky {#autoprefixer-vlastnosti-sablona}

- `grid-template-columns` se přeloží do `-ms-grid-columns`.
- `grid-template-rows` se přeloží do `-ms-grid-rows`.
- `grid-template-areas` slouží k tomu, aby Autoprefixer pochopil, jak vypadá váš layout. Žádný kód ale negeneruje.
- `grid-template` je jen zkratka pro `grid-template-columns`, `grid-template-rows` a `grid-template-areas`. Přeloží se tedy do nich.

### Umí: Zarovnávání {#autoprefixer-vlastnosti-sablona}

- `align-self` se přeloží do `-ms-grid-row-align`.
- `justify-self` se přeloží do `-ms-grid-column-align`.

### Částečně umí: Umístění položky do mřížky {#autoprefixer-vlastnosti-sablona}

Předklad následujících vlastností funguje, ale nesmíte v nich použít záporná čísla:

- `grid-row-start` se přeloží do `-ms-grid-row`. Pokud chcete použít `span`, musíte definovat `grid-row-end`.
- `grid-column-start` se přeloží do `-ms-grid-column`. Pokud chcete použít `span`, musíte definovat `grid-row-end`.
- `grid-row-end`. Musíte ale definovat `grid-row-start`.
- `grid-column-end`. Musíte ale definovat `grid-row-start`.
- `grid-row` se přeloží do `-ms-grid-row`.
- `grid-column` se přeloží do `-ms-grid-column`.

### Částečně umí: Definice pojmenovaných oblastí {#autoprefixer-vlastnosti-oblasti}

Následující vlastnost funguje, ale každý potomek gridu umí mít unikátní jméno oblasti:

- `grid-area` - Autoprefixer z oblastí udělá explicitní zápis pomocí `grid-row-end` a `grid-column-end`.

### Částečně umí: Definice mezer {#autoprefixer-vlastnosti-mezery}

- `grid-gap` a explicitní vlastnosti `grid-row-gap` nebo `grid-column-gap`

Autoprefixer namísto `-gap` vygeneruje extra řádky nebo sloupečky. Fajn řešení, ne? Je ale důležité, abyste grid zapsali pomocí `grid-template-areas` a zároveň `grid-template-columns`.

### Neumí vůbec: Vlastnost grid a automatické umístění {#autoprefixer-vlastnosti-neumi}

- `grid` je zkratka pro `grid-template-rows`, `grid-template-columns` a `grid-template-areas`. [Doporučuje](https://github.com/postcss/autoprefixer/issues/1023) se namísto ní použí `grid-template`.
- Automatické umístění: `grid-auto-columns`, `grid-auto-rows` nebo `grid-auto-flow`.

## Pozor na příkazovou řádku {#postcss-cli}

Během hrátek s Autoprefixerem a Gridem jsem narazil na nefungující podporu na příkazové řádce.

Dobře to funguje v Gruntu [a Gulpu](https://github.com/machal/css-grid-demos/blob/master/gulpfile.js#L12-L20). 

Nepovedlo se mi přidávat prefixy přes [příkazovou řádku](https://github.com/machal/css-grid-demos/blob/master/package.json#L29) (používá [postcss-cli](https://github.com/postcss/postcss-cli)).
