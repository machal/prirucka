# Opusťte desktopové zlozvyky

S pozvolným přechodem většiny uživatelů od myši k dotykovému ovládání přibývá  adeptů na zápis do „Červené knihy ohrožených návrhových vzorů“. Pojďme na krátký výlet do pavilonu designérské ZOO, kde je všechny vystavují.

## 1) Efekt na najetí myši? Už jen jako vylepšení

Jak už jsem zmiňoval, jakékoliv zařízení může být dotykové, proto musíme dotykové ovládání považovat za výchozí stav. No a na dotykových obrazovkách máme s `:hover` efekty po najetí myši smůlu. Ano, v myší ovládaných zařízeních můžeme přidat vylepšující efekt nebo vrstvu s doplňujícími informacemi. Rozhraní by ale mělo být použitelné bez nich.

## 2) Karusely jsou fakt složitý dorozumívací prostředek

Karusel je pro designéra i uživatele docela výzva. Z mnoha studií zpochybňujících jejich efektivitu vyberme tu od Erika Runyona. Ten změřil, že ze všech kliknutí na jeho karusel patřilo téměř 90 % jen prvnímu obrázku. Míra prokliku ostatních obrázků se pohybovala mezi dvěma a třemi procenty. [vrdl.in/50zuo](https://erikrunyon.com/2013/07/carousel-interaction-stats/)

Neznamená to, že všechny karusely jsou špatné. Navrhnout dobrý je ale vážně složité. Osobně po něm sáhnu, až když všechny ostatní možnosti selhávají.

<figure>
<img src="dist/images/original/vdwd/triky-ui-13.jpg" alt="">
<figcaption markdown="1">    
*Stará a nová verze karuselu na RSTS.cz. Starší ještě používala na mobilech nepoužitelnou tečkovou navigaci. Nová (vpravo) je fajn. Díky šipkám se lépe ovládá a grafika je uzpůsobená velikosti displeje*
</figcaption> 
</figure>

Karusely jsou určitě špatné, když:

* je používáte jako zkrášlující prvek – věc, která se vám líbí;
* je používáte jako univerzální schovávač toho, co na webu nechcete a co si „klient vymyslel“;
* zpomalují načtení nebo zobrazení stránky;
* nejsou použitelné na mobilních zařízeních (malé tečky jako navigace atd.);
* nepropagují obsah na dalších „slajdech“.

Hodně bych si rozmýšlel dnes bohužel běžné použití karuselu pro propagaci aktuálních akcí na úvodní stránce webu. Karusely se ale naopak hodí pro seznamy souvisejících položek. U e-shopu jde třeba o fotografie produktu nebo seznam podobného zboží.  

## 3) Akordeony raději než záložky uprostřed stránky

Záložková navigace uvnitř stránky je na mobilech ke zvážení, protože může otevírat obsah, jehož studium vám ony záložky odsune do nahoře skrytých částí stránky.

<figure>
<img src="dist/images/original/vdwd/triky-ui-14.jpg" alt="">
<figcaption markdown="1">    
*CZC.cz má hezky provedený akordeon. Podobný prvek na Mall.cz se ale chová jako  záložky: pokud chci po přečtení obsahu pro „Popis“ otevřít „Parametry“, musím posunovat stránku zpět nahoru*
</figcaption> 
</figure>

I proto mám raději takzvané akordeony. Podporují přirozené plynutí informací shora dolů. Na druhou stranu – akordeony dávají díky výpisu pod sebou informacím (někdy nechtěnou) hierarchii. Jak tedy sami vidíte, při výběru řešení vždy záleží na obsahu, který prezentuje, a celkovém kontextu, ve kterém jej používáte.


## 4) Uměl by si Obr z Altonu na vašem webu vybrat datum?

Vložení data na mobilech může být pěkná otrava. Hlavně pokud web používá některý z pluginů určených pro počítačové weby. A že je používá každý druhý responzivní web!

Na mobilech můžete využít `<input type="date">`, který otevře nativní výběr data, ale ten taky neřeší všechny potřeby uživatelů. Občas je potřeba udělat vlastní komponentu. Vždy mějte v prvé řadě na paměti ovládání palcem. Obr z Altonu se na vás dívá!

Další tipy od Nielsen Norman Group k výběru data jsem sepisoval na blog. [vrdl.cz/b/83-nng-input-date](http://www.vzhurudolu.cz/blog/83-nng-input-date)

## 5) Nespoléhejte na přítomnost globální navigace

Web bez hlavní navigace? Pfff…!  Představte si, že byste to nějakému klientovi navrhli před pěti lety. Dnes ale na velmi malých displejích postrádají globální navigaci téměř všechny weby. Prostě se tam nevejde.

Nezbývá než se s tím smířit a na globální navigaci zase tak moc nestavět při návrhu navigačního schématu pro web. U větších webů hraje na mobilech velkou roli vyhledávání. Může být také vhodné stavět úvodní stránku složitějších webů jako rozcestník. Chybějící hlavní navigaci je ale potřeba mít v hlavě při návrhu každé komponenty a každé stránky webu. Téma ještě více [otevřeme v desáté kapitole](kap-navigace.md).

## 6) Modální okna, lightboxy: pozor na správnou implementaci

Modální okna sama o sobě nejsou špatná. Dokonce bych řekl, že jsou na mobilech velmi užitečná. Jen mám asi smůlu – smůlu na weby, které křížek pro zavírání modálního okna schovávají pod horní hranu okna prohlížeče.

Specifickou odrůdu modálních oken, otravná modální okna, dokonce Google považuje za hodné penalizace. Více se dočtete v článku Pavla Ungra „Google od ledna 2017 penalizuje weby s obtěžujícími popupy“. [vrdl.in/googlepopup](http://blog.bloxxter.cz/google-od-ledna-2017-penalizuje-weby-s-obtezujicimi-popupy/)


Modálními okny a lightboxy ukončíme výčet nejvýznamnějších zástupců „Červené knihy ohrožených návrhových vzorů“. Teď se zamyslíme nad schováváním obsahu na mobilech.

