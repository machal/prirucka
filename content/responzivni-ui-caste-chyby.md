# Vyhněte se častým chybám

Shrňme si tady problémy, kterým se důsledněji věnuji v jiných kapitolách, ale které mají společné jmenovatele v četnosti výskytu na českém a slovenském webu.


## 1) Pomalu se načítající web

Asi největší hřích dnešních responzivních webů. Rychlost načítání má vliv na úspěšnost webu a ovlivňuje řazení ve výsledcích vyhledávání Google. Mobilní sítě jsou pomalé a jen tak se nezrychlí. Nezapomeňte rychlost webu řešit už při návrhu a konzultovat ji v širším týmu. Už jsme se tomu věnovali [v kapitole o rychlosti](kap-rychlost.md).

## 2) Navigace schovaná do ikony i tam, kde to není nutné

Responzivní weby často na mobilních obrazovkách schovávají navigace do různých ikon. Z průzkumů ale vyplývá, že ikony bez popisků jsou pro uživatele často nesrozumitelné. Ani samo schovávání navigace není nejlepší nápad. Také si o tom ještě [něco povíme](kap-navigace.md).

## 3) Přizpůsobení jen některým rozlišením

Jak už jsem [zmiňoval dříve](zmeny-velke-displeje.md), dnešní weby se zobrazují v oknech mezi 240 a 2600 pixely. Oba extrémy nejsou příliš časté, ale například podíl obrazovek s velkým rozlišením roste. Při návrhu a testování je potřeba myslet jak na ta nejmenší zařízení, tak právě i na velké stolní displeje.

## 4) Zakázané přiblížení (zoom)

Uživatelé si zvětšují výřezy obrazovky z mnoha důvodů: kvůli špatnému kontrastu na sluníčku, kvůli snadnějšímu výběru textu nebo se jen chtějí podívat na detail fotografie na stránce. Je to stejně přirozené jako posun stránky nahoru a dolů a občas to potřebují udělat snad všichni uživatelé.

Rozhodně si nenamlouvejte, že jste web „optimalizovali“ pro mobily a že zoomování potřeba není. Uveďte [správnou meta značku pro viewport](viewport-meta.md).

Norma WCAG (doporučení pro přístupné weby) trvá na tom, že vše musí být možné alespoň dvakrát zvětšit. [vrdl.in/cbe5f](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-scale)

Prohlížeč Safari na operačním systému iOS verze 10 a novějších už naštěstí „zákaz zoomování“ ignoruje.

## 5) Neošetřené načítání webfontů

Taky vás štve problikávání obsahu stránky při jejím načítání? Použití webfontů je v pořádku, ale vývojář musí mít vše pod kontrolou. Různé prohlížeče totiž načítají webfonty různě. Je potřeba si tedy vybrat způsob načítání, který vyhovuje konkrétnímu webu. Pro převzetí kontroly nad načítáním doporučuji malou knihovnu FontFaceObserver. [fontfaceobserver.com](https://github.com/bramstein/fontfaceobserver)

## 6) Vkládání zbytečných sdílecích tlačítek

„Lajkovací“ nebo sdílecí tlačítka Facebooku a dalších sítí jsou na webech velmi často k ničemu. Komplikují uživatelská rozhraní a zpomalují načítání. Funkce sdílení je navíc součástí všech mobilních operačních systémů. Zvažte, jestli vám umístění tlačítek stojí za to. Případně zvolte alternativní, úspornější řešení. Například knihovnu Social Likes. [social-likes.js.org](http://social-likes.js.org)

## 7) Fixně pozicované navigační a propagační elementy

Tady mám poněkud radikální postoj. Navigační a propagační elementy, které při rolování stránky drží pozici, dělají na mobilech více škody než užitku. 

Týká se to všech fixně umístěných navigačních lišt i překryvných vrstev s reklamou na newslettery a mobilní aplikace. Nebo v poslední době těch nešťastných tlačítek pro otevření chatu.

Ptáte se proč? 

### Zmenšují už tak skromný prostor

Telefony s menšími rozlišeními, jako 320 × 480 nebo dokonce 240 × 320 pixelů, stále žijí. Problém to ale bude prakticky na každém čtyřpalcovém displeji.

### Kolidují s ovládacími prvky prohlížečů

Fixně pozicovanou horní navigaci často překrývá vysunovací lišta s adresním řádkem prohlížeče. Prvky fixně umístěné dole zase kolidují s výsuvnou spodní lištou prohlížeče Safari na iOS. [vrdl.in/houb1](https://www.eventbrite.com/engineering/mobile-safari-why/)

### Komplikují posun obrazovky 

Postranní fixní lišty zase nevinným palcům vezmou prázdné okraje, kterými jinak spokojeně rolují stránku. Kolikrát se vám stalo, že jste takovou lištu při rolování omylem otevřeli? Mému palci mnohokrát, mohl by vám vyprávět.

### Rozbijí přiblíženou stránku 

Jak už jsem psal – zakazovat zoomování považuji za chybu. Co ale udělají vaše fixně pozicované elementy pokaždé, když si uživatel stránku přiblíží? No jasně, rozbijí layout.


### Jsou problematické na méně výkonných zařízeních

Na starších a méně výkonných mobilech vás `position: fixed` nebude poslouchat a při posunu stránky občas neudrží vámi vysněnou pozici. 

Často se argumentuje tím, že fixně pozicovaná navigace umožní uživateli ovládat web na obzvlášť dlouhých stránkách. Na to už jsem namítal, že stránky na mobilech *obzvlášť dlouhé* prostě být nemají, však víte. Na rozumně dlouhých stránkách je návrat zpět nahoru snadný díky možnosti rychlého posunu stránky (tzv. „momentum scrolling“). Tou jsou vybaveny všechny mobilní prohlížeče.

Pro další popis i hlubší argumentaci vás pošlu na další své texty:

- Dvoudílná série „Jak zničit mobilní uživatele?“ na Vzhůru dolů. [vrdl.in/lq5b4](http://www.vzhurudolu.cz/blog/47-znicit-mobilistu-1) a [vrdl.in/sacjz](http://www.vzhurudolu.cz/blog/48-znicit-mobilistu-2)
- Můj text „How To Poison The Mobile User“ na Smashing Magazine. [vrdl.in/h8n7i](https://www.smashingmagazine.com/2016/10/how-to-poison-the-mobile-user/)


