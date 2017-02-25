# Mobilní navigace: potřebujeme hamburgery?

Hlavní navigační oblasti webů jsme zvyklí dělat složité. Tak složité, že se na mobilní obrazovky nevejdou. Proto je tam schováváme a opatřujeme vypínačem. 

<!-- AdSnippet -->

Jenže ono to schovávání není zase tak dobrý nápad. Pojďte, vezmeme to zgruntu a pozastavíme se také u ikony hamburgeru, oblíbeného tématu diskuzí. Je dobrá nebo špatná?

Nejdřív ale dovolte jednu zásadní otázku.

## Proč jsme vlastně navigace neschovávali už v době čistě desktopových webů?

Protože nejsme hloupí. Selským rozumem vzato, navigace musí na webech plnit minimálně tři úkoly:

1. *Mapa:* uživatel by měl z navigace snadno pochopit strukturu webu a najít co hledá.
2. *Ukazatel:* uživatel by měl vědět, kde se na mapě aktuálně nachází.
3. *Reklama na oblasti mapy:* zájmem provozovatele webu je, aby uživatel nepřišel o nic zajímavého. A právě to patří do hlavní navigace zejména.

Zeptejme se teď sami sebe: Jak dobře tyto tři úkoly plní schovaná navigace? Že je neplní vůbec? Bingo!

![Dobré a špatné hamburgery](dist/images/original/hamburger-variants.jpg)

Dobře, pro ideální svět stručných navigací na velkých displejích bychom měli vyřešeno. Prostě je na mobilech neschovávat. Jenže mnozí z nás navrhují weby se složitými navigacemi a mnozí uživatelé mají zařízení s velmi malými displeji. 



## Jak uvažovat při návrhu hlavní navigace?

### 1. Navrhněte navigaci tak, aby byla co nejjednodušší 

Ano, už při vymýšlení struktury webu aktivujte [Mobile First](mobile-first.md) režim. Na dvacet šest položek v hlavní navigace a druhou i třetí úroveň prostě zapomeňte. Zachrání vám to kejhák při návrhu designu webu.

### 2. Navrhněte web jako by tam navigace nebyla 

Je jasné, že na těch nejmenších displejích budeme muset skoro vždy minimálně část navigace schovat. Proto se musíme naučit vymýšlet weby bez ní. Navigační schéma prostě duplikujte v obsahu, do úvodní stránky dejte něco jako mapu webu.

### 3. Pokud to jde, na mobilu ji prostě zobrazte celou

Zní to trochu polopaticky, jenže svět je plný webů s navigací o čtyřech položkách, které používají hamburger jen proto, že to je „in“. Pokud je rozlišení dostatečně široké, prostě navigaci zobrazte. 

Jestliže navigaci nedokážete zobrazit celou, zvažte [jiné návrhové vzory](responzivni-navigace.md) než prosté zapínání a vypínání. Až pokud žádná z těchto možností nezabrala, volte návrhový vzor s vypínačem navigace. Ano, ten, kterému podle vzhledu ikony říkáme „hamburger“. 


## Webdesign ikonu hamburgeru potřebuje

Ikona hamburgeru a schovávání navigace je v poslední době pod palbou kritiky. Příkladem budiž článek „Proč hamburger menu nefunguje“ od Bohumila Jahody. [jecas.cz/hamburger-menu](http://jecas.cz/hamburger-menu) 

Tvrdím, že na některých webech se mu nedá vyhnout a že ji webdesign jako obor potřebuje.

<!-- AdSnippet -->

O ikonách je známo, že trvá nějakou dobu než se mezi zavedou. Lidé se nenarodili ani se znalostí ikon pro *play*, *pause* a *stop* na hudebních přehrávačích. 

> Jedním z hlavních důvodů, proč jsme schopni symboly (*play*, *pause* a *stop*) používat bez textového značení je skutečnost, že si svou cestu mezi komunikační zkratky naší kultury našly díky neustálému opakování na magnetofonech a videopřehrávačích.

Píše to Andy Budd v článku „In defence of the hamburger menu“. [vrdl.in/28gc0](http://www.andybudd.com/archives/2016/01/in_defence_of_the_hamburger_menu/)

Ikona hamburgeru je nová a pro autory webů je výhodné, abychom jej, stejně jako ikonu pro *play* uživatele naučili.


## Otevírá hamburger opravdu obsah, který reprezentuje?

Každá ikona je zjednodušenou abstrakcí obsahu, který následuje po její aktivaci. V případě ikony hamburgeru jde o seznam položek řazených pod sebou. Odpovídá to ale třeba víceúrovňové navigaci nebo třeba celé liště sekundárního obsahu, na který se dostanete kliknutím na hamburger například u jinak výborného webu Respektu? 

![Špatný symbol pro zobrazení sekundárního obsahu](dist/images/original/hamburger-abstraction.jpg)

Pokud nechceme naše milé uživatele úplně dezorientovat, měli bychom navigaci hamburgeru používat jako abstrakci typu obsahu, který skutečně reprezentuje. [vrdl.cz/blog/47-znicit-mobilistu-1](http://www.vzhurudolu.cz/blog/47-znicit-mobilistu-1)


## Dobře míněné rady pro správný návrh ikony otevírající navigaci

Takže: některé weby navigaci zobrazí celou i na mobilech a některé použijí chytřejší navigační vzor jako je prioritizace položek. 

Zbývá nám tu množina webů, u kterých je schovávání navigace nebo její části prostě nevyhnutelné. Takže ano, hamburger je dobrý, protože jej někdy dost nutně potřebujeme. Je dobré ale při návrhu myslet na následující:

1. Ikonu nezneužívejte pro typ obsahu, který nepředstavuje.
2. Ikonu opatřete textovým popiskem „Menu“. Nebo prostě popiskem, který přesně popisuje obsah, například „Kategorie“ nebo „Recepty“. [vrdl.in/o7dzl](https://twitter.com/adlo/status/720266123774713856)
3. Ikona by měla mít vzhled tlačítka. [exisweb.net/menu-eats-hamburger](http://exisweb.net/menu-eats-hamburger)

