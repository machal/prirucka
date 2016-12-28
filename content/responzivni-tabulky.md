# Responzivní tabulky

Chuck Norris sice rozbrečí cibuli, ale s tabulkami ve webdesignu by měl potíže. No vážně. Však čtěte.

Zejména rozsáhlejší tabulky mají tu nehezkou vlastnost, že na menších displejích jsou rozměrově poněkud nezkrotitelné. Pojďme si představit všechny způsoby, jak lze s tabulkami v dnešním webdesignu zacházet a vy si jistě vyberete. Tedy pokud nejste Chuck Norris, ten už si vybral dávno.

## Posun do stran

Nejjednodušší varianta. Prostě tabulce přikážete, ať se roluje do strany, pokud překročí aktuální šířku okna:

```css
.scrollable-table {
  overflow-y: auto;
}
```

Uživatel si pak onen posun obstará palcem. Důležité je, aby byla možnost posunu indikována useknutím obsahu zprava. „Scrollbar“, indikátor možnosti posunu, totiž sám o sobě nestačí. Na mobilech nebývá vidět, dokud uživatel na tabulku nezaútočí prstem.

![](dist/images/original/tabulky_1.png)

*Obrázek: Obsah tabulky se na malém displeji posouvá do stran.*

Vyzkoušejte si zmenšit okno tady: [cdpn.io/e/ENMezZ](http://codepen.io/machal/pen/ENMezZ?editors=1100#0).

Řešení se hodí hlavně pro tabulky s menším počtem řádků i sloupců a s popisem dat nahoře. Nebo také tabulky vkládané přes redakční systémy, u kterých nevíte jak složité budou. A nebo když prostě chcete ušetřit čas.

## Posun do stran s fixním sloupcem

Varianta pro tabulky s popisem dat ve svislém směru a klidně i příšerně moc sloupci s daty samotnými. Na malém displeji prstem posunujete do stran jen sloupce s daty. Popis zůstává na místě.

![](dist/images/original/tabulky_2.png)

*Obrázek: Tabulka s pevně ukotveným prvním sloupcem na mobilu a možností posouvat gestem „swipe“. Zdroj: [github.com/filamentgroup/tablesa*w](https://github.com/filamentgroup/tablesaw)*

Vyzkoušejte si tady: [cdpn.io/e/qqvJdV](http://codepen.io/machal/pen/qqvJdV?editors=1100#0)

S propracovanějším řešením využívající flexbox a další moderní CSS vlastnosti přišel David Bushell. [http://dbushell.com/2016/03/04/css-only-responsive-tables/](http://dbushell.com/2016/03/04/css-only-responsive-tables/)

Fixně-posuvné řešení je pak možné doplnit detekcí gesta švihnutí (swipe) pro snadnější a přesnější posouvání sloupečků. Plugin Tablesaw, který doporučuji dále v textu, to umí.

Řešení má mnoho užití. Podmínkou ale je, aby tabulka měla má přijatelně nízký počet řádků.

Nojo, ale co když ale máte tabulku typu datagrid – hodně sloupečků, ale také řádků? 

## Stohování

Datagrid není prosím žádná vzácnost. Každá webová aplikace pro interní systémy je datagridů plná. Je to případ vašeho projektu? Pak bych vám doporučil přestylovat tabulku na mobilech do podoby netabulkového, kartičkového zobrazení. Říká se tomu stohování.

![](dist/images/original/tabulky_3.png)

*Obrázek: Stohování tabulky na menších displejích. Zdroj: [github.com/filamentgroup/tablesa*w](https://github.com/filamentgroup/tablesaw)*

V nejjednodušší možné CSS implementaci prostě tabulce na menších displejích zrušíme „tabulkovost“:

```css
@media only screen and (max-width: 600px) {
  table, th, td, tr, thead, tbody {
    display: block;
  }
}
```

Tady je možné si zkusit si to i s dalším stylováním: [cdpn.io/e/bBZmxE](http://codepen.io/machal/pen/bBZmxE?editors=1100#0).

I tak ale čisté CSS řešení nebude dokonalé. Pro tento typ práce s tabulkami budete potřebovat kousek Javascriptu. 

Stohování se hodí i pro tabulky se složitějším obsahem v buňkách (odstavcový text, formulářové prvky a tak dále).

## Změna směru tabulky

Často se stává, že se pro malé displeje hodí jiný směr zobrazení tabulky než u velkých. Podívejte se na obrázek, hned pochopíte.

![](dist/images/original/tabulky_4.png)

Vyzkoušejte si to na Codepenu: [cdpn.io/e/rjmyx](http://s.codepen.io/JasonAGross/debug/rjmyx).

Nasazení doporučuji u tabulek, které mají velký počet řádků, ale málo sloupců.

Tak. Řekněme, že nejčastější scénáře jsme vyčerpali. Pojďme se ale podívat i na exotičtější situace. 

## Odkaz na plnou tabulku

Na mobilech můžete samozřejmě tabulku hodně zjednodušit a přiložit odkaz na plnou verzi. 

Za fajn nápad také považuji vložit do stránky namísto tabulky jen jakýsi zástupný symbol. Vidíte to na obrázku a zkoumat můžete v této ukázce. [jsbin.com/apane6/14](http://output.jsbin.com/apane6/14)

![](dist/images/original/tabulky_5.png)

*Obrázek: Tabulku na mobilu uprostřed obsahu nahradíme zástupným symbolem. Kliknutí se zobrazí plná verze.*

Kdy se hodí? Pro složité tabulky uprostřed jiného obsahu, kde ostatní scénáře (stohování, fixní sloupec) selhávají.

### Varianta s reprezentací obsahu na mobilech grafem

Z tabulkových prostě na mobilu uděláte zjednodušený graf. Doporučuji nasazovat v kombinaci s odkazem na plnou verzi tabulky. Hodí se opět pro situace se strašlivě komplikovanými daty bez výrazné obsahové hierarchie.

## Na mobilech něco vynechat. Ale opravdu?

Tahle varianta vypadá, že se sama nabízí. Z technického pohledu budiž. Jenže – designér ve mě zvedá obočí i ukazováček, aby vás upozornil na možné nevýhody.

Schovávání obsahu na konkrétních zařízeních je dost nebezpečné. Jak už jsem argumentoval dříve, stejní lidé se na vaše rozhraní dívají z různých zařízení. Proč by určitý obsah měli na jednom zařízení vidět a jiný ne?

### Příklad s fotbalovou tabulkou

Jako příklad vezměme tabulku fotbalové ligy na Sport.cz, která v den, kdy tento text píšu, vypadá jako na obrázku.

![](dist/images/original/tabulky_6.png)

*Obrázek: Tabulka pořadí první fotbalové ligy v prosinci 2016. Zdroj: sport.cz*

Mimochodem, pokud jste, stejně jako já, zcela mimo fotbalové dění, pak „Z“ je počet zápasů, „V“ je počet výher, „R“ remíz a „P“ proher. Tohle na mobilu úplně chybí. A protože mě už trochu znáte, víte, že tady začnu zvedat ukazováček a prudit.

Vezměme to ale od začátku. Pojďme si představit, že vymýšlíme chování tabulky na malých displejích. Do zařízení s rozlišením 320, nedejbože 240 pixelů se nám tabulka nevejde, že? Kterou z variant chování tabulek na responzivních webech použít? Neodstranit prostě na mobilech některé sloupečky? 

Je pravda, že informace v takové tabulce mají nějakou hierarchii: Pořadí, tým a počet bodů jsou nejdůležitější. Skóre a počet zápasů hned za nimi. Výhry, remízy a prohry méně důležité a logo týmu na posledním místě. Stejně to vyhodnotili autoři tabulky a poslední jmenované na mobilech prostě vyšoupli. Jenže…

* **Logo týmu** sice nemá informační hodnotu a dekorativní budeme pro zjednodušení ignorovat. Ale důležité je navigačně. Na mobilu se proto lidem bude oblíbený tým hledat hůř. Ušetřili jsme tedy místo, ale zároveň zhoršili uživatelský prožitek.
* **Výhry, remízy a prohry** jsou sice méně důležité, ale… proč je pak máme na velkých displejích? Nemám tady samozřejmě rozbor cílových skupin a jejich potřeb pro Sport.cz, ale tipuji, že zrovna uživatelé tohoto webu takové informace potřebují. Na jiném webu, třeba obecně zpravodajském by pak nepřítomnost těchto informací smysl dávala. 

Jak bych tedy tabulku na mobilech řešil? Použil bych řešení „Posun do stran s fixním sloupcem“. Ponechal bych v ní všechny informace a zajistil fixní pozici sloupečků s pořadí, logem a názvem týmů. Ostatní sloupečky pak nechal uživatele posouvat do stran.

## Vše v jednom: plugin Tablesaw

Tablesaw je jQuery plugin (nebo lépe řečeno sada pluginů), který umí všechny popsané možnosti chování responzivních tabulek. Chuck Norris jej doporučoval ještě než vznikl! [github.com/filamentgroup/tablesaw](https://github.com/filamentgroup/tablesaw)
