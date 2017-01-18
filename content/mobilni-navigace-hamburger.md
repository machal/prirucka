# Jak na mobilní navigaci a proč potřebujeme hamburgery?

Hlavní navigace webů jsme zvyklí dělat tak, že se nám na mobilní obrazovky nevejdou. Proto je schováváme a opatřujeme vypínačem. To je stav mysli většiny dnešních webařů. 

Jenže ono to schovávání není tak dobrý nápad. Pojďte, vezmeme to zgruntu a pozastavíme se také u ikony hamburgeru, oblíbeného tématu diskuzí. Je dobrá nebo špatná?

Nejdřív ale dovolte jednu zásadní otázku.

## Proč jsme vlastně navigace neschovávali už v době čistě desktopových webů?

Protože nejsme blbí. Víme, že navigace musí na webech plnit minimálně tři úkoly:

1. *Mapa* – uživatel by měl z navigace snadno pochopit strukturu webu a najít co hledá.
2. *Ukazatel*  – uživatel by měl vědět, kde na mapě se aktuálně nachází.
3. *Reklama na obsah* – zájmem provozovatele webu je, aby uživatel nepřišel o nic zajímavého.

Jak dobře plní tyto tři úkoly schovaná navigace? Že je neplní vůbec? Bingo!

<!-- TODO nahradit obrazkem: -->
<blockquote class="twitter-tweet" data-lang="en"><p lang="cs" dir="ltr">Schováváte vždy navigaci webu do hamburger ikony? A co je na ni tak nedůležitého, že je potřeba ji schovat?</p>&mdash; Martin Michálek (@machal) <a href="https://twitter.com/machal/status/686878575400714240">January 12, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Dobře, pro ideální svět stručných navigací na velkých displejích bychom měli vyřešeno. Prostě je na mobilech neschovávat. 

![Dobré a špatné hamburgery](dist/images/original/hamburger-variants.jpg)

Jenže tady máme i weby se složitými navigacemi a zařízení s velmi malými displeji. 

## Jak uvažovat při návrhu hlavní navigace?

**Navrhněte navigaci tak, aby byla co nejjednodušší.** Ano, už při vymýšlení struktury webu aktivujte [Mobile First](mobile-first.md) režim. Na dvacet šest položek v hlavní navigace a druhou i třetí úroveň prostě zapomeňte. Zachrání vám to kejhák při návrhu designu webu.

**Navrhněte web, jako by tam navigace nebyla.** Je jasné, že na těch nejmenších displejích budeme muset skoro vždy minimálně část navigace schovat. Proto se musíme naučit vymýšlet weby bez ní. Navigační schéma prostě duplikujte v obsahu, do úvodní stránky dejte něco jako mapu webu.

Pokud jde navigace zobrazit celá, **prostě ji zobrazte celou i na mobilech**. Zní to trochu blbě, jenže svět je plný webů s navigací o čtyřech položkách, které používají hamburger jen proto, že to je *in*. Pokud je rozlišení dostatečně široké, prostě navigaci zobrazte. 

Jestliže navigaci nedokážete zobrazit celou, zvažte jiné návrhové vzory než prosté zapínání a vypínání. Doporučuji vzor s prioritizací položek. [css-tricks.com/the-priority-navigation-pattern/](https://css-tricks.com/the-priority-navigation-pattern/).

Až pokud žádné z těchto možností nezabrala, volte návrhový vzor s vypínačem navigace. Ano, ten, kterému podle vzhledu ikony říkáme *hamburger*. 

Číst ale nepřestávejte. Volbou hamburgeru se otevírá nová sada průšvihů, které můžete nechtěně napáchat.

## Hamburger je potížista, ale potřebujeme ho

Ikona hamburgeru a schovávání navigace je v poslední době pod palbou kritiky. [jecas.cz/hamburger-menu](http://jecas.cz/hamburger-menu) 

Tvrdím, že na některých webech se mu nedá vyhnout a že ji webdesign jako obor potřebuje.

O ikonách je známo, že trvá nějakou dobu než se mezi lidmi zavedou. Lidé se nenarodili ani se znalostí ikon pro *play*, *pause* a *stop* na hudebních přehrávačích. 

> Jedním z hlavních důvodů, proč jsme schopni symboly (*play*, *pause* a *stop*) používat bez textového značení je skutečnost, že si svou cestu mezi komunikační zkratky naší kultury našly díky neustálému opakování na magnetofonech a videopřehrávačích.

– Andy Budd, In defence of the hamburger menu. [vrdl.in/28gc0](http://www.andybudd.com/archives/2016/01/in_defence_of_the_hamburger_menu/)

Hamburger nový je a situaci nám ještě komplikují operační systémy a nativní aplikace na nich. Ty pro otevření navigace používají různé ikony hamburger, kebab, masové kuličky…). Uživatelé zatím moc neví co si pod nimi představit. [vrdl.in/jve94](https://twitter.com/lukew/status/591296890030915585)

Napsal jsem, že ikonu pro schování navigace ve webdesignu potřebujeme. Proto ji  prostě musíme mezi lidi dostat. Nejlépe pomocí textových popisků.

Je také dobré v době minimalizmu a flat designu zmínit, že ikona by kromě textového popisku měla mít vzhled tlačítka. [exisweb.net/menu-eats-hamburger](http://exisweb.net/menu-eats-hamburger)

## Otevírá hamburger opravdu obsah, který reprezentuje?

Každá ikona je zjednodušenou abstrakcí toho co aktivuje. V případě hamburgeru je to seznam horizontálních položek. To velmi dobře odpovídá jednoduché navigaci s položkami řazenými pod sebe.  Odpovídá to ale třeba víceúrovňové navigaci nebo třeba celé liště sekundárního obsahu, na který se dostanete kliknutím na hamburger například u jinak výborného webu Respektu? 

![Špatný symbol pro zobrazení sekundárního obsahu](dist/images/original/hamburger-abstraction.jpg)

Pokud nechceme naše milé uživatele úplně zničit, měli bychom hamburger používat jako abstrakci typu obsahu, který skutečně reprezentuje. [vrdl.cz/blog/47-znicit-mobilistu-1](http://www.vzhurudolu.cz/blog/47-znicit-mobilistu-1)

Jak v této souvislosti dodal Adam Fendrych i textový popisek „Menu“ je někdy dobré nahradit pojmenováním, které přesně popisuje obsah. Například „Kategorie“ nebo „Recepty“. [vrdl.in/o7dzl](https://twitter.com/adlo/status/720266123774713856)


## Co dělat, když hamburger použít musím?

Takže – některé weby navigaci zobrazí celou i na mobilech, některé se bez navigace zcela obejdou a některé použijí chytřejší navigační vzor jako je prioritizace položek. 

Zbývá nám tu množina webů, u kterých je schovávání navigace nebo její části prostě nevyhnutelné. Minimálně na opravdu malých displejích, vezměme třeba šířky 240 pixelů. A nějakou ikonu k tomu potřebovat budeme.

Takže ano, hamburger je dobrý! Je dobré ale splnit tyto podmínky:

1. Ikonu nezneužíváme pro typ obsahu, který nepředstavuje.
2. Ikonu opatříme popiskem „Menu“. Hlavně u webů, které cílí mimo geekovské kruhy. 
3. Navigaci neschováváme na těch šířkách displeje, kde by ještě šla zobrazit celá nebo její podstatná část.
4. Zařídíme, aby plocha kolem hamburgeru vypadala jako tlačítko.
