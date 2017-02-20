# Vyhněte se častým chybám

## 1) Pomalu se načítající web

Asi největší hřích dnešních responzivních webů. Rychlost načítání má vliv na úspěšnost webu a ovlivňuje řazení ve výsledcích vyhledávání Google. Mobilní sítě jsou pomalé a jen tak se nezrychlí. Nezapomeňte rychlost webu řešit už při návrhu a konzultovat ji s vývojáři. Už jsme se tomu věnovali [v kapitole o rychlosti](kap-rychlost.md).

## 2) Navigace schovaná do ikony

Responzivní weby často na mobilních obrazovkách schovávají navigace do různých ikon. Z průzkumů ale vyplývá, že ikony bez popisků jsou pro uživatele často nesrozumitelné. Ani samo schovávání navigace není nejlepší nápad. Také si o tom ještě [něco povíme](kap-navigace.md).

## 3) Přizpůsobení jen některým rozlišením

Jak už jsem zmiňoval dříve, dnešní weby se zobrazují v oknech mezi 240 a 2600 pixely. Oba extrémy nejsou příliš časté, ale například podíl obrazovek s obrovským rozlišením roste. Při návrhu a testování je potřeba myslet jak na ta nejmenší zařízení, tak právě i na ohromné displeje.

## 4) Zakázané přiblížení (zoom)

Uživatelé si zvětšují výřezy obrazovky z mnoha důvodů: kvůli špatnému kontrastu na sluníčku, kvůli snadnějšímu výběru textu nebo se prostě jen chtějí podívat na detail fotografie na stránce. Snažte se jim prosím zvětšování nezakázat. Uveďte správnou meta značku pro viewport.

WCAG (doporučení pro přístupné weby) trvají na možnost vše alespoň dvakrát zvětšit. [vrdl.in/cbe5f](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-scale)

## 5) Neošetřené načítání webfontů

Taky vás štve problikávání obsahu stránky při jejím načítání? Použití webfontů je v pořádku, ale je nutné je mít ze strany vývojáře pod kontrolou. Různé prohlížeče totiž načítají webfonty různě. Je potřeba si tedy vybrat způsob načítání, který vyhovuje konkrétnímu webu. Já pro kontrolu nad načítáním využívám knihovnu FontFaceObserver. [fontfaceobserver.com](https://github.com/bramstein/fontfaceobserver)

## 6) Vkládání zbytečných sdílecích tlačítek

„Lajkovací“ nebo sdílecí tlačítka Facebooku a dalších sítí jsou na webech velmi často k ničemu. Komplikují uživatelská rozhraní, zpomalují načítání. Funkce sdílení je navíc součástí všech mobilních operačních systémů. Zvažte, jestli vám umístění tlačítek stojí za to. Případně zvolte alternativní, úspornější řešení.

Například knihovnu Social Likes. [social-likes.js.org/](http://social-likes.js.org)

## 7) Schovávání obsahu za fixně pozicované elementy

Tady mám poněkud radikální postoj. Elementy, které při rolování stránky drží pozici nemají na mobilech co dělat. Zmenšují už tak skromný prostor, kolidují s ovládacími prvky prohlížečů… A ke všemu vás na méně výkonných mobilech nebudou poslouchat a při posunu stránky občas neudrží vámi vysněnou pozici. 

Týká se všech fixně umístěných navigačních lišt, překryvných vrstev s reklamou na newslettery nebo mobilní aplikace a nebo v poslední době populární tlačítka pro otevření chatu.

To by mohlo stačit. Pro další popis i hlubší argumentaci vás pošlu na další své texty:

- Dvoudílná hubící série „Jak zničit mobilní uživatele?“ na Vzhůru dolů. [vrdl.in/lq5b4](http://www.vzhurudolu.cz/blog/47-znicit-mobilistu-1) [vrdl.in/sacjz](http://www.vzhurudolu.cz/blog/48-znicit-mobilistu-2)
- Anglický text „How To Poison The Mobile User“ na Smashing Magazine. [vrdl.in/h8n7i](https://www.smashingmagazine.com/2016/10/how-to-poison-the-mobile-user/)


