# Seznamka

Doba je rychlá a inovace zvýšily tempo řešení situací, které lidem dříve zabíraly velké množství času.

Vezměme třeba seznamování. Když jsem byl v pubertě, bylo potřeba obléct sváteční kostkovanou košili, co nejpodobnější té, jakou nosil Kurt Kobain, vyrazit na vesnickou zábavu, investovat do vstupného, investovat do tekutin, které zajistí uvolněnost a zábavnost, převést se v tanci na 2Unlimited a celou dobu hlída, až budou hrát Nothing Else Matters, v tu chvíli sprintovat pro dívku snů… Bylo to složité a v mém případě s nejistým výsledkem.

Dnešní seznamovací aplikace a weby jsou úplně jinde, člověk párkrát klikne a je to. Je to rychlé.

Vzhledem k tomu, že držíte v ruce knížku, vlastně jste ukázali, že rychlé tempo seznamování, minimálně s technologiemi, není pro vás. To mám radost!

Právě tuhle knížku ale v ruce držíte proto, že se chcete naučit něco o nových systémech layoutu v CSS.

Potřebujeme s tématem nějak začít, vytvořit si první náčrt mapy, kterou se vám pokusím během čtení knížky vytvářet v hlavě. A bylo by nejlepší začít rychle. Tohle tedy bude rychlé seznámení s gridem, flexem a vícesloupcovým layoutem.

Tohle bude Tinder pro systémy layoutu v CSS.

<figure>
<img src="../dist/images/original/vdlayout/css-layout-intro-scheme.png" width="1600" height="900" alt="Základní představení flex, grid, multicol">
<figcaption markdown="1">
*To jsou oni. Seznamte se.*
</figcaption>
</figure>

Zatímco na skutečném Tinderu máte k ruce vystajlované fotky možných partnerek nebo partnerů, CSS layouty jsou sexy asi jako návod na sestavení nábytku z IKEA.

Něco vizuálně poutavého na nich je, ale flex, grid a multicol jsou intelektuálové, kteří na vás mluví řečí symbolů. Žádně obrázky z posiloven, žádné „duckface“, žádné výstřihy a dokonce ani žádné instagramové filtry…

Jsou to od pohledu relativně nezábavní patroni, takže vám o nich budu muset něco říct:

- [Flexbox](css-flexbox.md) je skvělý pro jednosměrná rozložení stránky. Ze všech tří je to největší parťák, kamarádi mu říkají krátce „flex“. Nezkazí žádnou legraci a všichni jej mají rádi.
- [Grid](css-grid.md) výborně zvládá obousměrné layouty. Je mladší než flex a trošku arogantní, protože se nekamarádí s vývojáři, kteří mají v přátelích Internet Explorer.
- [Multicol](css-multicol.md), neboli vícesloupcový layout, je nenápadný introvert. Mnozí si jej ani nevšimnou, protože pasuje jen do několika životních situací týkajících se zalomení textu do sloupců. Když ale takovou řešíte, za vztah s ním budete opravdu rádi.

Tak a teď máte nové kamarády, gratuluji vám. Dejte jim odběr.

V knížce asi zjistíte, že první pohled někdy klame a to, co vám tady tvrdím, nemusí být pravda vždycky. Od toho jsou ale knížky. Aby vás zbavili povrchního pohledu a ukázaly všechny „ale“.

## Čtvrtý vzadu

Ta paralela s Tinderem samozřejmě trošku skřípe, ale pojďme u ní ještě chvilku zůstat.

Znáte to, když jdete s jednou (jedním) na rande a přijdou dvě (dva)? Ona (on) a její nejlepší kámoška (kámoš). Pro jistotu.

Přesně tohle by se vám stalo i při seznamování s našimi layouty. Když řekneme flex, grid a multicol, musíme říct [Box Align](css-box-alignment.md). Bez zarovnání boxů a vlastností jako je `justify-items` nebo `align-self` se systémy layoutu, a hlavně flexbox a grid, neobejdou a na rande samy nevyrazí.

## Pojďme si je otestovat

Pokud bychom byli při seznamování v reálném životě důslední, chtěli bychom vidět chování partnerky nebo partnera různých životních situacích. Chtěli bychom co nejrychleji a nejefektivněji zjistit, co je zač.

Tady se proto nabízí spíše paralela s přijímacím hovorem na pracovní pozici a testy, které zaměstnavatelé dávají zaměstnancům.

My se teď pokusíme na jednoduchých příkladech ukázat, co je který systém rozvržený zač. Ostatně takhle to budeme dělat v celé knížce.

<figure>
<img src="../dist/images/original/vdlayout/css-layout-intro-examples.png" width="1600" height="900" alt="Zadání příkladů pro Flex, grid, Multicol">
<figcaption markdown="1">
*Tři systémy a tři zadání pro příklad.*
</figcaption>
</figure>

Začneme tím nejpopulárnějším parťákem.

## Flexbox: příklad s obrázkem a textem

Cílem je dosáhnout rozvržení, kde na jedné straně je obrázek, který zabírá třetinu šířky, a na druhé text. Mezi nimi jsme si ještě vymysleli mezeru o šířce `1rem`, ta ve schématu není.

Začneme asi s HTML, což?

```html
<div class="box">
  <p class="box__image">
    <img src="obrazek.png" alt="…">
  </p>
  <p class="box__text">
    Lorem ipsum…
  </p>
</div>
```

Na tom asi nic složitého není, takže pojďme pokračovat.

Používáme zde nejvděčnějšího parťáka z naší trojice, flexbox, a proto nebude složité vytvořit rozvržení:

```css
.box {
  display: flex;
}
```

Už jen tímto zápisem dosáhneme toho, aby se potomkové (prvky `box__image` a `box__text`) zarovnaly vedle sebe. Máme rozvržení, ale to ještě nezná své rozměry. Zapíšeme je následovně:

```css
.box__image {
  flex: 1;
}

.box__text {
  flex: 2;
  margin-left: 1rem;  
}
```

[Vlastností `flex`](css-flex.md), což je zkratka pro nastavení šířky a způsobu rozpínání a smršťování prvku, jsme nastavili podíl na celkové šířce.

Pomocí `margin-left:1rem` jsme pak zajistili onu mezírku mezi oběma prvky.

<figure>
<img src="../dist/images/original/vdlayout/css-layout-intro-example-flex.png" width="1600" height="900" alt="Flexbox ve Firefox DevTools">
<figcaption markdown="1">
*Flexbox pod rentgenem. Výsledné rozvržení prohlížené ve vývojářských nástrojích Firefoxu.*
</figcaption>
</figure>

Tento layout by se dal ještě dále vylepšovat, například o variantu pro menší displeje. Nicméně jako první demostrační ukázka knížky je to myslím dostačující.

Zájemce ještě posílám na zdrojové kódy na službě CodePen, což ostatně v knížce budu dělat často.

CodePen: [cdpn.io/e/eYvZqYd](https://codepen.io/machal/pen/eYvZqYd?editors=1100)

## Grid: příklad s kartou produktu

V obrázku se zadáním vidíme, že u gridu jsem vybral rozvržení, které má dva směry - vodorovný i svislý. Obrázek zabírá celou horní polovinu, druhý řádek je rozdělený poměrem 2:1. Mezery mezi prvky jsou opět v šířce `1rem`.

Ano, i toto rozlišení bychom mohli udělat flexboxem, respektive dvěma flexboxy. Jenže by to nebylo tak elegantní jako řešení s pomocí gridu.

Pojďme se podívat na zjednodušené HTML:

```html
<div class="box">
  <p class="box__image">
    <img src="obrazek.png" alt="…">
  </p>
  <p class="box__text">
    Lorem ipsum…
  </p>
  <p class="box__price">
    Price:<br>
    <strong class="price">
      999 €
    </strong>
  </p>
</div>
```

Máme tedy rodiče (`box`) a tři prvky v něm. Jak z nich uděláme kýžený tvar? Poměrně snadno:

```css
.box {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
}
```

Pomocí `display:grid` „zapneme“ mřížku, ale ještě se (na rozdíl od flexboxu) nic nestane.

Layout vzniká až prostřednictvím [vlastnosti `grid-template-columns`](css-grid-template-rows-columns.md), které definuje šablonu pro počet a rozměry sloupců. Asi jste pochopili, že zápisem `2fr 1fr` rozděluji plochu na sloupečky o šířce dvou třetin a jedné třetiny.

[Vlastnost `gap`](css-gap.md) zde slouží k vykreslení mezery mezi prvky, v našem případě o šířce `1rem`.

Pokud bychom zůstali u tohoto kódu, kýženého layoutu bychom nedosáhli. Jde o rozvržení 2×2, tedy čtyři buňky. V našem HTML ale jako potomky prvku `box` máme jen tři HTML prvky.

Díky „autoplacementu“, vlastnosti gridu, která prvky automaticky umísťuje do mřížky by byl obrázek v první buňce, text v druhé a cenovka ve třetí. Čtvrtá buňka by zůstala prázdná a naše nadšení pro grid by končilo uprostřed prvního rande.

Automatické umístění rozbijeme tímto kódem:

```css
.box__image {
  grid-column: 1 / 3;
}
```

[Vlastnost `grid-column`](css-grid-row-column.md) slouží k výslovnému umístění určitého prvku na konkrétní místo mřížky. V tomto případě mezi první a třetí linku mřížky.

Co je ta linka? Nejlépe to uvidíme na následujícím obrázku, který je zároveň doporučením, abyste věnovali pozornost [vývojářským nástrojům prohlížečů](css-layout-devtools.md). Ty umí být při práci s layouty opravdovými pomocníky.

<figure>
<img src="../dist/images/original/vdlayout/css-layout-intro-examples-grid.png" width="1600" height="900" alt="…">
<figcaption markdown="1">
*DevTools Firefoxu (ale i Chrome) krásně ukáží, co je myšleno termínem „linka gridu“.*
</figcaption>
</figure>

Nerad bych vám zatajil poslední část kódu. Sice nemá s moderními CSS layouty nic společného, ale bez ní nedosáhneme vzhledu, který vidíte na obrázku. Text v cenovce zarovnáme doprava:

```css
.box__price {
  text-align: right;
}
```

I tady máte možnost projít si, vyzkoušet a případně upravit kompletní zdrojový kód. Následuje odkaz na CodePen.

CodePen: [cdpn.io/e/YzZqmwj](https://codepen.io/machal/pen/YzZqmwj?editors=1100)

## Vícesloupcové rozvržení: příklad s odrážkovým seznamem

Vraťme se opět očima k obrázku se zadáním. V případě multicol layoutu je úkolem pro první rande zajistit, aby se odrážkový seznam skládal do sloupců, které nebudou mít delší šířku než `15rem`.

V HTML máme 15 položek seznamu, ale pro potřeby ukázky v knížce jsem si vystačil se třemi:

```html
<div class="box">
  <ul>
    <li>
      Lorem ipsum dolor sit amet
    </li>
    <li>
      Consectetuer adipiscing elit
    </li>
    <li>
      Cum sociis natoque penatibus
    </li>
    <!-- … -->
  </ul>
</div>
```

Když už jsem vás přinutil si představit Tinder pro CSS layout, vaše imaginace je na tak dobré úrovni, až se mám chuť vsadit, že ten patnáctičlenný seznam položek vidíte úplně živě.

S pomocí flexboxu ani gridu bychom zde neuspěli, protože pro rozdělení do sloupců bychom museli mezi jednotlivé `<li>` vkládat prvky jako `<div>`, které by layout nesly.

Navíc bychom zde s pomocí těchto dvou typů rozvržení nebyli schopní snadno dosáhnout automatického generování vhodného počtu sloupečků. Layout bycho prostě museli museli doslovně definovat.

Toto je síla CSS Multicolumn Layout. Chcete rozvržení o šířce sloupce maximálně `15rem` se šířkou mezery `1rem`? Není nic snažšího:

```css
.box {
  columns: 15rem;
  gap: 1rem;
}
```

K [vlastnosti `columns`](css-multicol-columns.md) se ještě dostaneme, vlastnost `gap` už trochu znáte.

<figure>
<img src="../dist/images/original/vdlayout/css-layout-intro-example-multicol.png" width="1600" height="900" alt="…">
<figcaption markdown="1">
*Výsledek ve Firefoxu. Je ale dobré vědět, že v různých šířkách okna bude počet sloupečků různý.*
</figcaption>
</figure>

Ten vícesloupcový layout vypadá skvěle, viďte? Než jej ale pozvete na druhé rande, měli byste vědět, že se hodí opravdu hlavně jen pro textový obsah, takže na nějaké parády se všemi `div`y světa zde raději zapomeňte.

I zde je pro zájemce k dispozici ukázka na službě CodePen.

CodePen: [cdpn.io/e/JjWXgNL](https://codepen.io/machal/pen/JjWXgNL?editors=1100)

Prostřednictvím Tinderu a prvního rande jsme se tedy seznámili se třemi hlavními protagonisty knížky a jejich nejlepším kamarádem. Ještě se nám ale bude hodit lépe poznat dva nejžhavější kandidáty.
