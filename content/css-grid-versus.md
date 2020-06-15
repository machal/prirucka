# Grid v kontextu dalších systémů layoutu

„Musíš se teď odnaučit, co tě dřív učili.“ říká mistr Yoda Lukovi Skywalkerovi v epizodě V kultovních Star Wars.

Neexistuje lepší citace pro začátek textu, který má zkušenější kodérky a kodéry přesvědčit, aby zkusili zapomenout na vše, co dosud o layoutu v CSS věděli. A na uvolněné místo si dosadili CSS Grid – a trochu flexboxu.

Pokud snad s „webděláním“ začínáte – a pojmy jako „tabulkový layout“, `float` nebo Bootstrap vám nic neříkají – pak nezbývá než vám závidět. Tenhle text ani moc číst nemusíte.

## Grid versus pseudolayout

Za těch více než dvacet let, co dělám weby, mě bylo dopřáno rozvržení stránky i jejich komponent realizovat mnoha způsoby. 

Z dnešního pohledu mi zní až krutě, že ani jeden z nich ale pro layout určený nebyl:

* Rámce `<frame>` sice dělí stránku do menších částí, ale jinak nemají s implementací jejího rozvržení nic společného.
* Tabulky `<table>` jsou určené pro vykreslení tabulkového obsahu. Dělat v nich rozvržení? Strašný hack určený dnes už jen expertům na kódování newsletterů.
* Plovoucí prvky (vlastnosti `float` a `clear`) vznikly pro zajištění obtékání elementů textovým obsahem.
* Metoda „inline layoutu“ (vlastnost `display:inline-block`) slouží k možnosti vkládat blokové prvky (s definovaným rozměrem) do řádků textů.
* Techniky využívající pozicování lámou přes koleno vlastnost `position`, která slouží k umístění prvků mimo přirozený proud stránky.
* Layout je možné tvořit i pomocí vlastností `column`, ale ty jsou určené pro automatizaci vícesloupcové sazby textu, nikoliv jiná použití.

Jak vidíme, technik použitelných pro tvorbu layoutu máme v CSS více než dost. To ale neznamená, že bychom je pro tvorbu rozvržení *měli* používat.

Každá z uvedených metod totiž pravděpodobně vyřeší jen některé z vašich problémů a ještě k tomu zavede problémy nové.

<!-- TODO obrázek: Palička vs. kladívko -->

Paličku na maso je totiž v případě nouze také možné využít k zatloukání hřebíků. Jen si musíte dát pozor na prsty, hřebíky i stěnu, protože ten nástroj vymysleli na úplně jinou práci.

Pokud máte vyřešené problémy s kompatibilitou Gridu, by vašim cílem mělo být na všechny tyto metody prostě zapomenout. V delší časové perspektivě byste na ně měli zapomenout v *každém* případě.

Máte kladívko, takže paličkou dále už jen naklepávejte maso.

Jedinou další technikou, kterou můžete potřebovat, je flexbox.

## Grid versus flexbox

Předně chci zdůraznit, že Grid nenahrazuje [flexbox](css3-flexbox.md). Potřebujete obojí. Naučte se obojí. Ale nějaké rozdíly zde jsou.

### Jednorozměrný flexbox, vícerozměrný Grid

Grid je byl navržen pro dvourozměrné layouty – po svislé i vodorovné ose. Flexbox se více hodí na rozvržení jednosměrná, ať už svislá nebo vodorovná.

Jakmile je váš layout víceřádkový a nevystačíte si s pouhým zalomením bez definice pravidel layoutu druhé řádky, je pravděpodobné, že potřebujete Grid.

### Flexbox je pro layout z obsahu, Grid více z mřížky

Grid je zaměřený více na „grid in“ layout, kdy se obsah musí vždy přizpůsobit mřížce.

Flexbox je super na „content out“ situace, kdy se layout musí přizpůsobit obsahu a vy nechcete nastavovat parametry layoutu.

Ne, že by Grid layout z obsahu neuměl, ale musíte si jej v každém případě nastavit. V případě flexboxu leccos pořeší automatika.

Pokud tedy chcete umístit pár prvků vedle sebe a není nutné jim definovat rozměry, volte flexbox. Pokud položkám flexboxu složitě nastavujete rozměry, pak asi potřebujete Grid.

### Kompatibilita s Internet Explorerem je silná stránka flexboxu

Flexbox ja takřka plně podporován Internet Explorery 10 i 11. 

Grid v těchto prohlížečích podporu má, jenže s velkým „ale“. I s pomocí nástroje Autoprefixer vám tam budou fungovat spíše jen základní vlastnosti.

Pokud nutně potřebujete obsloužit i uživatele těchto prohlížečů a není možné zajistit fallback k řešení v Gridu, pak může flexbox vaše problémy řešit.

<!-- TODO aktuální rozšíření IE -->

### A co další vlastnosti?

Je dobré si uvědomit, že velkou část vlastností mají CSS Grid s flexboxem společné nebo podobné:

* Všechny vlastnosti pro zarovnávání ve svislém a vodorovném směru.
* Flexibilní jednotky (Grid `fr`, flexbox čísla ve vlastnosti `flex-basis`).


Našli bychom toho více. Platí ale, že Grid tyhle vlastnosti pokrývá více ze do hloubky a je celkově robustnější.

### Srovnání flexboxu a gridu

|   Vlastnost              |   Flexbox   |   Grid   |
|:-------------------------|:-----------:|:--------:|
|   Jednorozměrný layout   |       +     |     +    |
|   Dvojrozměrný layout    |             |     +    |
|   Layout z obsahu        |       +     |     ?    |
|   Layout z mřížky        |             |     +    |
|   Kompatibilita v IE     |       +     |     ?    |

Celá problematika je složitější. Doporučuji vám naučit se flexbox i Grid.

Ale pokusím se to za cenu jistého zjendodušení shrnout do rozcestníku: 

Pokud nemusíte podporovat Internet Explorer, jako výchozí způsob nastavování layout volte vždy Grid. Flexbox vytáhněte pro jednodušší zarovnání dvou menších prvků vedle sebe.

Pokud řešíte podporu MSIE, pak si přečtete můj text o zprovoznění základních vlastností Gridu v tomto prohlížeči. Nestačí vám? Pak jako náhradu používejte flexbox.

## Grid versus CSS frameworky

Vytvořit i poměrně jednoduchý layout nebylo pro kodérky a kodéry léta snadné. Proto začaly vznikat nástroje, které jim to měly usnadňovat. A taky usnadňovaly.

Problémy v kompatibilitě napříč prohlížeči vznikaly i při tvorbě na pohled jednoduchých rozvržení.

### Ranný webdesign: Jak to vlastně dělali sazeči knih a novin?

Někdy mezi roky 2005 až 2010 začali si začali webaři ve velkém všímat typografických principů ze sazby knih, novin a časopisů.

Prvním frameworkem, který jsem v té době využíval, byl Blueprint CSS. Zavedl mřížku o 24 sloupcích, takže pokud jste chtěli layout rozdělit na dvě poloviny, vypadalo to následovně:

```html
<div class="container">
  <div class="span-12">
    První polovina
  </div>
  <div class="span-12">
    Druhá polovina
  </div>
</div>
```

V té době šlo o zjevení. Dodnes si dobře vybavuji radost z krásných typografických principů, ale také z výrazně rychlejšího psaní kódu, protože jsme nemuseli často přepínat mezi HTML a CSS.

Následovaly frameworky jako 960 Grid System, YUI Grids, YAML… a v roce 2011 Twitter představil dosud nejkomplexnější knihovnu pro tvorbu uživatelských rozhraní – Bootstrap.

### Éra Bootstrapu

Bootstrap je skvělý. Kromě základních typografických principů a mřížky obsahuje také hotové komponenty pro tvorbu uživatelských rozhraní a dnes už i prostředky pro systematickou tvorbu komponent vlastních – utility.

Pro vývojáře, kteří musí tvořit rozhraní a nemají po ruce designéra a často ani kodéra představuje Bootstrap (a z něj vycházející frameworky jako Foundation nebo Semantic UI) hotový zázrak. Všechno to napíší v HTML a framework se nějak postará o zbytek.

Zároveň zde ale vznikáp problém s nadužíváním těchto nástrojů. Jako konzultant rychlosti webu se vývojářů často ptám, proč na webech používají Bootstrap. „Kvůli mřížce“ zní častá odpověď.

*Kvůli mřížce* tak řada webů stahuje zhruba 25 kilobajtů zbytečného kódu. To nemusí vypadat jako vysoké číslo, ale uvědomme si, že jde o pětadvacet kilobajtů stylů, které nemohou být ze své povahy asynchronní a bez kterých prohlížeč nemůže vykreslit ani řádku z chystané stránky. 

Když se tento laxní přístup k rychlosti nakombinuje s dalšími *ne-optimalizacemi*, na vykreslení stránky uživatel čeká… a čeká…

CSS Grid nás nezbavuje nutnosti přepínat pozornost z HTML do CSS, ale řeší problémy s nefukčními základními layouty a radikálně zjednodušuje znalosti, které o psaní CSS pro rozvržení stránky musíte mít.

V knížce se proto pokusíme nahradit některé základní scénáře použití mřížky z Bootstrapu pomocí CSS gridu a tímto zahajuji snahu vás přesvědčit, abyste nepoužívali složité frameworky na plnění jednoduchých cílů v kaskádových stylech.

Nebude to snadné. Ostatně – celá citace rozhovoru z úvodu této podkapitoly má znít následovně:

Luke Skywalker: „Umět hnout kamenem je jedna věc, ale tohle je něco jiného“.  
mistr Yoda: „Ne, není to jiné. Jiné je to v tvé hlavě. Musíš se teď odnaučit, co tě dřív učili.“  
Luke Skywalker: „Dobře, já to teda zkusím.“  
mistr Yoda: „Ne, nezkusíš. Uděláš to nebo ne. Už žádné zkusím!“  
