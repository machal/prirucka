# To nej v Bootstrapu 4: utility třídy

O novinkách v Bootstrapu 4 jsem už psal. Dneska vám ale chci ukázat věc, která se mi na čtyřce líbí nejvíc. Utility třídy.

To je taková ta věc, která v třídě obsahuje CSS vlastnost a hned její hodnotu. Některé znáte a asi sami používáte. Například:

- `.clearfix` pro „výmaz“ plovoucího „layoutu“
- `.text-right` pro  zarovnání textu doprava
- `.sr-only` pro obsah určený jen čtečkám pro nevidomé

Bootstrap 4 však jde dál. Nabízí utility třídy napřílad pro rámečky, barvy, flexbox, pozicování, odsazení. Mrkněte se nejlépe do dokumentace: https://getbootstrap.com/docs/4.0/utilities/borders/

O užitečnosti utilit tříd jsem vedl řadu diskuzí. Hodně nesouhlasných reakcí vzbudil článek o extrémním přístupu frameworku Tachyons, který používají v NejŘemeslníci.cz. 

Taychons jsou i pro mé projekty dost krajním přístupem, ale už delší dobu si některých klientů a na mých projektech hrajeme s kompromisním přístupem – existencí klasických velkých komponent a vedle nich sadu několika desítek utility tříd. Hlavně pro flexboxový layout, odsazení, stupnici velikostí písem a občas i barvy.

Shrnu svůj postoj: čím více máte rozhraní postavené na systému designu a na čím nižší úrovni ten systém máte, tím více utility třídy oceníte.

Typický příklad jsou složitější webové aplikace: redakční systémy nebo intranety všeho druhu. Každá stránka. Každý stav aplikace obsahuje klasické předefinované komponenty jako tabulky, záložky nebo formuláře, ale také unikátní nové komponenty. No a právě na ně se děsně hodí systém designu nízké úrovně: nedefinujete celou komponentu, jen její vlastnosti jako je velikost písma, odsazení a layout. Každá taková komponenta je totiž obvykle jen kombinací už někde použitého CSS. 

No a právě pro tyhle typy použití je Bootstrap jak dělaný. 

Pro webové aplikace, které nemají silný vizuální styl. Často v týmu není grafik, natož designér. A vývojář prostě dělá vše sám.

Díky utility třídám prostě začnete CSS psát až výrazně později než bez nich.

## Příklad s media objectem

Pojďme si to představit na příkladu s takzvaným „media objektem“ – prvkem s fotkou, nadpisem a kouskem textu. Tady je Codepen: https://codepen.io/machal/pen/JOJomB

Základní struktura by s použitím utility tříd ze čtyřkového Bootstrapu vypadala takto:

```html
<div class="d-flex flex-row">
  <p class="mr-3"><!-- Obrázek --></p>
  <div><!-- Text --></div>
</div> 
```  

Tohle vám udělá layout s obrázkem nalevo a textem napravo:

- Třída `d-flex` zapne layout (`display: flex`).
- `flex-row` nastaví layout do vodorovného směru (`flex-direction: row`).
- `mr-3` udělá odsazení mezi fotkou a textem (`margin-right` třetího stupně, což je `1em`).

Na Codepenu si pak můžete všimnout, že používám třídy `my-item`, `my-item__image` a `my-item__text`. Ty hlavně proto, aby se HTML lépe četlo. Ano, i díky metodice BEM.

Určitě jste si ale všimli, že pro vytvoření komponenty jsem nepotřeboval ani čárku vlastního CSS kódu. To je na tomto přístupu skvělé. A vážně nejen pro lidi, kterým se z CSS dělá šoufl.

### A co když bychom to chtěli responzivní? 

Důležité utility třídy v Bootstrapu čtyřce je možné nastavit jen pro konkrétní body zlomu layoutu. 

Pojďme to udělat na velkém displeji vedle sebe, na malém pak pod sebou:

```html
<div class="d-flex flex-column flex-md-row">
  <p class="mb-3 mr-md-3"><!-- Obrázek --></p>
  <div><!-- Text --></div>
</div> 
```  

Vysvětlím jen ty nově přidané třídy:

- Kombinace tříd `flex-column flex-md-row` říká, že výchozí směr layoutu je svislý (`flex-direction: column`) a od „md“ breakpointu (768px) se mění na vodorovný (`flex-direction: row`).
- Kombinaci `mb-3 mb-md-0 mr-md-3` si už asi odvodíte. Na malých displejích dělá odsazení zezdola (`mb-3`), která se od body zlomu „md“ ruší (`mb-md-0`) a mění na odsazení zprava (`mr-md-3`).

Opět jsem nemusel napsat ani řádku vlastního CSS. Podívejte se na Codepen: https://codepen.io/machal/pen/mqmNyz.

Myslím si, že pro určité specifické kombinace projektů a týmů je to skvělé. Když vám sedí vývojář u interního systému, bude s tímto přístupem při tvorbě nového rozraní velmi rychlý.


## Utility třídy v Bootstrapu

https://getbootstrap.com/docs/4.0/utilities/borders/

- [Rámečky](https://getbootstrap.com/docs/4.0/utilities/borders/) - strana orámování, barva a zakulacení
- [Clearfix](https://getbootstrap.com/docs/4.0/utilities/clearfix/) - `.clearfix` pro vyčištění floatů
- [Barvy](https://getbootstrap.com/docs/4.0/utilities/colors/) - třídy pro významové obarvení textů (např. `text-primary`) i pozadí prvku (`bg-success).
- [Zobrazování](https://getbootstrap.com/docs/4.0/utilities/display/) - všechny možné hodnoty vlastnosti `display` (`d-none`) napříč breakpointy (`d-lg-block`).
- [Vkládané prvky](https://getbootstrap.com/docs/4.0/utilities/embed/) - stylování responzivních vkládaných prvků (`embed-responsive`), včetně modifikátorů pro poměry stran (`embed-responsive-4by3`).
- [Flexbox layout](https://getbootstrap.com/docs/4.0/utilities/flex/) - layout komponent, nepleťte si prosím s klasickou bootstrapovskou layoutovou mřížkou, která je určená pro rozvržení stránky. Obě jsou velmi užitečné.
- [Floaty](https://getbootstrap.com/docs/4.0/utilities/float/) - například `float-left` nebo responzivní `float-lg-none`
- [Pozicování](https://getbootstrap.com/docs/4.0/utilities/position/) - `position-static` nebo zkratky typu `fixed-top`.
- [Šířky](https://getbootstrap.com/docs/4.0/utilities/sizing/) - přednastevená je stupnice po čtvrtinách (`w-25` jako `width: 25%`), ale lze ji změnit Sass proměnnou.
- [Odsazení](https://getbootstrap.com/docs/4.0/utilities/spacing/) - vnější a vnitřní okraje. Opět je zde přednastavená a změnitelná stupnice. `mt-0` je `margin-top: 0`. `ml-lg-6` je `margin-left: 3rem`.
- TODO…

## Shrnutí

Proč je to dobré:

- Děsně to zrychluje vývoj. Drtivou většinu kódu totiž píšete přímo do HTML. 
- Zmenšuje to velikost CSS kódu. Externí CSS je blokující zdroj, u kterého je výsledná velikost zásadní pro rychlost zobrazení stránky.
- Není potřeba znát CSS do hloubky.
