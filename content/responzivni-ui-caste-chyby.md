# Vyhněte se častým chybám

## 1) Pomalu se načítající web

Asi největší hřích dnešních responzivních webů. Rychlost načítání má vliv na úspěšnost webu a ovlivňuje řazení ve výsledcích vyhledávání Google. Mobilní sítě jsou pomalé a jen tak se nezrychlí. Nezapomeňte rychlost webu řešit už při návrhu a konzultovat ji s vývojáři. Už jsme se tomu věnovali [v kapitole o rychlosti](kap-rychlost.md).

## 2) Navigace schovaná do ikony

Responzivní weby často na mobilních obrazovkách schovávají navigace do různých ikon. Z průzkumů ale vyplývá, že ikony bez popisků jsou pro uživatele často nesrozumitelné. Ani samo schovávání navigace není nejlepší nápad. Také si o tom ještě [něco povíme](kap-navigace.md).

## 3) Přizpůsobení jen některým rozlišením

Jak už jsem zmiňoval dříve, dnešní weby se zobrazují v oknech mezi 240 a 2600 pixely. Oba extrémy nejsou příliš časté, ale například podíl obrazovek s obrovským rozlišením roste. Při návrhu a testování je potřeba myslet jak na ta nejmenší zařízení, tak právě i na ohromné displeje.

## 4) Zakázané přiblížení (zoom)

Uživatelé si zvětšují výřezy obrazovky z mnoha důvodů: kvůli špatnému kontrastu na sluníčku, kvůli snadnějšímu výběru textu nebo se jen chtějí podívat na detail fotografie na stránce. Snažte se jim prosím zvětšování nezakázat. Uveďte [správnou meta značku pro viewport](viewport-meta.md).

WCAG (doporučení pro přístupné weby) trvají na možnost vše alespoň dvakrát zvětšit. [vrdl.in/cbe5f](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-scale)

Prohlížeč Safari na iOS 10 a novějších už naštěstí zákaz zoomování ignoruje.

## 5) Neošetřené načítání webfontů

Taky vás štve problikávání obsahu stránky při jejím načítání? Použití webfontů je v pořádku, ale je nutné je mít ze strany vývojáře pod kontrolou. Různé prohlížeče totiž načítají webfonty různě. Je potřeba si tedy vybrat způsob načítání, který vyhovuje konkrétnímu webu. Já pro kontrolu nad načítáním využívám knihovnu FontFaceObserver. [fontfaceobserver.com](https://github.com/bramstein/fontfaceobserver)

## 6) Vkládání zbytečných sdílecích tlačítek

„Lajkovací“ nebo sdílecí tlačítka Facebooku a dalších sítí jsou na webech velmi často k ničemu. Komplikují uživatelská rozhraní, zpomalují načítání. Funkce sdílení je navíc součástí všech mobilních operačních systémů. Zvažte, jestli vám umístění tlačítek stojí za to. Případně zvolte alternativní, úspornější řešení.

Například knihovnu Social Likes. [social-likes.js.org/](http://social-likes.js.org)

## 7) Fixně pozicované navigační a propagační elementy

Tady mám poněkud radikální postoj. Navigační a propagační elementy, které při rolování stránky drží pozici, dělají na mobilech více škody než užitku. 

Týká se všech fixně umístěných navigačních lišt, překryvných vrstev s reklamou na newslettery a mobilní aplikace. Nebo v poslední době těch nešťastných tlačítek pro otevření chatu.

Ptáte se proč? 

**Zmenšují už tak skromný prostor.** Telefony s menšími rozlišeními, jako 320 × 480 nebo dokonce 240 × 320 pixelů, stále žijí. Problém to ale bude prakticky na každém čtyřpalcovém displeji.

**Kolidují s ovládacími prvky prohlížečů.** Fixně pozicovaná horní navigace bývá překrývána vysunovací lištou s adresním řádkem prohlížeče. Prvky fixně umístěné dole zase kolidují s výsuvnou spodní lištou prohlížeče Safari na iOS. [vrdl.in/houb1](https://www.eventbrite.com/engineering/mobile-safari-why/)

**Komplikují posun obrazovky.** Postranní fixní lišty zase nevinným palcům vezmou prázdné okraje, kterými jinak spokojeně rolují stránku. Kolikrát se vám stalo, že jste takovou lištu při rolování omylem otevřeli? Mému palci mnohokrát, mohl by vám vyprávět.

**Rozbijí přiblíženou stránku.** Jak už jsem psal – zakazovat zoomování považuji za chybu. Co ale udělají vaše fixně pozicované elementy pokaždé, když si uživatel stránku přiblíží? No jasně, rozbijí layout.

A ke všemu vás **na méně výkonných mobilech nebudou poslouchat** a při posunu stránky občas neudrží vámi vysněnou pozici. 

Často se argumentuje tím, že fixně pozicovaná navigace umožní uživateli ovládat web na obzvlášť dlouhých stránách. Na to už jsem namítal, že stránky na mobilech *obzvlášť dlouhé* prostě být nemají, však víte. Na obou hlavních mobilních platformách navíc existuje možnost vrátit se na vršek stránky pomocí tapnutí na horní lištu operačního systému.

Pro další popis i hlubší argumentaci vás pošlu na další své texty:

- Dvoudílná série „Jak zničit mobilní uživatele?“ na Vzhůru dolů. [vrdl.in/lq5b4](http://www.vzhurudolu.cz/blog/47-znicit-mobilistu-1) [vrdl.in/sacjz](http://www.vzhurudolu.cz/blog/48-znicit-mobilistu-2)
- Anglický text „How To Poison The Mobile User“ na Smashing Magazine. [vrdl.in/h8n7i](https://www.smashingmagazine.com/2016/10/how-to-poison-the-mobile-user/)


