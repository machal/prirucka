# To nejlepší z Bootstrapu 4: utility třídy

O novinkách v Bootstrapu 4 jsem [už psal](/blog/39-bootstrap-4). Dneska vám ale chci ukázat věc, která se mi na čtyřce líbí nejvíc. Utility třídy.


## Utility třídy?

Nebo jinak *užitkové*, *subatomické* nebo *helper* třídy. Zatím přesně nevím, jak jim říkat. 

Jde o třídu, ve které je uloženo často používané CSS. Některé znáte a asi i sami používáte. Například:

- `clearfix` pro „výmaz“ plovoucího „layoutu“. Obsahuje celou sadu deklarací.
- `sr-only` pro obsah určený jen čtečkám pro nevidomé: „Screen Reader Only“. Obsahuje jednu deklaraci.
- `fs-2` pro `font-size: 1.5rem`. Obsahuje vlastnost a stupeň ze sady hodnot velikosti písma.
- `text-right` pro  zarovnání textu doprava. Tahle obsahuje jedinou vlastnost a rovnou její hodnotu. 

O užitečnosti utilit tříd jsem vedl řadu diskuzí. Hodně reakcí vzbudil [článek o frameworku Tachyons](https://www.vzhurudolu.cz/blog/82-tachyons-nejremeslnici), který používají v NejŘemeslníci.cz. 

<!-- AdSnippet -->

Taychons jsou i pro mé projekty dost krajním přístupem, ale už delší dobu si u některých klientů a na mých projektech hrajeme s kompromisní metodou. Kromě klasických velkých komponent máme sadu několika desítek utility tříd. Hlavně pro flexboxový layout, odsazení, stupnici velikostí písem a občas i barvy. Tedy nejčastější prvky stylů, ze kterých se pak skládají další, už unikátnější komponenty.

Šetří to dost času. Vývojář nemusí každou novou komponentu kódovat z nuly v CSS. Prostě využije předpřipravené utility třídy a do CSS jde až ve chvíli, kdy je to nutné.

Myslím si, že čím více máte rozhraní postavené na systému designu a na čím nižší úrovni ten systém máte, tím více utility třídy oceníte.

### Skvělý příklad vhodného využití utility tříd: intranety nebo CMS

Každá stránka, každý stav aplikace v jejich případě obsahuje klasické předefinované komponenty jako tabulky, záložky nebo formuláře, ale také unikátní nové komponenty. Hodit se to může ale i na větší weby nebo soustavy webů.

Prostě všechny projekty, kde se hodí systém designu nízké úrovně: nenavrhujete celé komponenty (typu záložková navigace nebo akordeón), jen jejich vlastnosti jako jsou velikost písma, odsazení a layout. Každá taková komponenta je totiž obvykle jen kombinací už někde použitého CSS. 

No a právě pro tyhle typy použití je Bootstrap jak dělaný. 

<!-- AdSnippet -->

Často se navíc používá pro interní webové aplikace, které nemají silný vizuální styl. Často v týmu není grafik, natož designér. A vývojář prostě dělá vše sám (což úplně dobře není, ale to teď komentovat nechci).

Díky utility třídám prostě začnete CSS psát až výrazně později než bez nich.

Ale zpět k Bootstrapu. 


## Příklad s media objektem

Pojďme si přístup k budování rozhraní pommocí utility tříd v Bootstrapu představit na příkladu s takzvaným „media objektem“ – prvkem s fotkou, nadpisem a kouskem textu. Tady je Codepen: [cdpn.io/e/JOJomB](https://codepen.io/machal/pen/JOJomB)

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
- `mr-3` udělá odsazení mezi fotkou a textem (`margin-right` třetího stupně, což je `1rem`).

Na Codepenu si pak můžete všimnout, že používám třídy `my-item`, `my-item__image` a `my-item__text`. Ty hlavně proto, aby se HTML lépe četlo. Ano, i díky [metodice BEM](bem.md).

Určitě jste si ale všimli, že pro vytvoření komponenty jsem nepotřeboval ani čárku vlastního CSS kódu. To je na tomto přístupu skvělé. A vážně nejen pro lidi, kterým se z CSS dělá nevolno.

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

- Kombinace tříd `flex-column flex-md-row` říká, že výchozí směr layoutu je svislý (`flex-direction: column`) a od `md` („medium“) [breakpointu](breakpointy.md) (768px) se mění na vodorovný (`flex-direction: row`).
- Kombinaci `mb-3 mb-md-0 mr-md-3` si už asi odvodíte. Na malých displejích dělá odsazení zezdola (`mb-3`), která se od bodu zlomu `md` ruší (`mb-md-0`) a mění na odsazení zprava (`mr-md-3`).

Opět jsem nemusel napsat ani řádku vlastního CSS. Podívejte se na Codepen: [cdpn.io/e/mqmNyz](https://codepen.io/machal/pen/mqmNyz).


## Utility třídy v Bootstrapu

V příkladu jsem využil jen dvě kategorie utility tříd – flex layout a odsazení. Je jich ale k dispozici daleko víc:

- [Rámečky](https://getbootstrap.com/docs/4.0/utilities/borders/) – strana orámování, barva a zakulacení.
- [Clearfix](https://getbootstrap.com/docs/4.0/utilities/clearfix/) – `clearfix` pro vyčištění floatů.
- [Barvy](https://getbootstrap.com/docs/4.0/utilities/colors/) – třídy pro významové obarvení textů (např. `text-primary`) i pozadí prvku (`bg-success`).
- [Zobrazování](https://getbootstrap.com/docs/4.0/utilities/display/) – všechny možné hodnoty vlastnosti `display` (`d-none`) napříč breakpointy (`d-lg-block`).
- [Vkládané prvky](https://getbootstrap.com/docs/4.0/utilities/embed/) – stylování responzivních vkládaných prvků (`embed-responsive`), včetně modifikátorů pro poměry stran (`embed-responsive-4by3`).
- [Flexbox layout](https://getbootstrap.com/docs/4.0/utilities/flex/) – layout komponent, nepleťte si prosím s klasickou bootstrapovskou layoutovou mřížkou, která je určená pro rozvržení stránky. Obě jsou velmi užitečné.
- [Floaty](https://getbootstrap.com/docs/4.0/utilities/float/) – například `float-left` nebo responzivní `float-lg-none`.
- [Pozicování](https://getbootstrap.com/docs/4.0/utilities/position/) – `position-static` nebo zkratky typu `fixed-top`.
- [Šířky](https://getbootstrap.com/docs/4.0/utilities/sizing/) – přednastevená je stupnice po čtvrtinách (`w-25` jako `width: 25%`), ale lze ji změnit Sass proměnnou.
- [Odsazení](https://getbootstrap.com/docs/4.0/utilities/spacing/) – vnější a vnitřní okraje. Opět je zde přednastavená a změnitelná stupnice. `mt-0` je `margin-top: 0`. `ml-lg-6` je `margin-left: 3rem`.
- Další: [zavírací ikonka](https://getbootstrap.com/docs/4.0/utilities/close-icon/), [schovávání textu](https://getbootstrap.com/docs/4.0/utilities/image-replacement/), [svislé zarovnání](https://getbootstrap.com/docs/4.0/utilities/vertical-align/) a [viditelnost prvku](https://getbootstrap.com/docs/4.0/utilities/visibility/).

## Shrnutí

Nový Bootstrap jde prostě s utility třídami naproti své nejtypičtější cílovce – vývojářům, kteří v CSS tak často nedělají – a nejtypičtějším scénářům použití – větším webovým aplikacím. 

Ale může to být dobré úplně pro všechny, kteří s Bootstrapem pracují:

- Děsně to zrychluje vývoj. Většinu kódu totiž píšete přímo do HTML. 
- Zmenšuje to velikost CSS kódu. Externí CSS je blokující zdroj, u kterého je výsledná velikost zásadní pro rychlost zobrazení stránky. (Ano, zvětší to velikost HTML, ale ne tolik jako to zmenší CSS.)
- Není potřeba znát CSS vlastnosti do hloubky. Třeba [u flexboxu](css3-flexbox.md) to hodně pomáhá.

<!-- AdSnippet -->
