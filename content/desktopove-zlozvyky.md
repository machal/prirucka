# Opusťte desktopové zlozvyky

S pozvolným přechodem většiny uživatelů od myši k dotykovému ovládání přibývá  adeptů na zápis do „Červené knihy ohrožených návrhových vzorů“. Pojďme na krátký výlet do pavilonu designérské ZOO, kde je všechny vystavují.

## 1) Efekt na najetí myši? Už jen jako vylepšení

Jak už jsem zmiňoval: jakékoliv zařízení může být dotykové, proto musíme dotykové ovládaní považovat za výchozí stav. No a na dotykových obrazovkách máme s `:hover` efekty po najetí myši smůlu. Ano, v myší ovládaných zařízeních můžeme přidat vylepšující efekt nebo vrstvu s doplňujícími informacemi. Rozhraní by ale mělo být použitelné bez nich.

## 2) Karusely jsou fakt složitý dorozumívací prostředek

Karusel je pro designéra i uživatele docela výzva. Z mnoha studií zpochybňujících jejich efektivitu vyberme tu od Erika Runyona. Ten změřil, že ze všech kliknutí na jeho karusel patřilo téměř 90 % jen prvnímu obrázku. Další se pohybovaly mezi dvěma a třemi procenty. [vrdl.in/50zuo](https://erikrunyon.com/2013/07/carousel-interaction-stats/)

Navrhnout dobrý karusel je vážně složité. Proto po něm osobně sáhnu až když jsem všechny ostatní možnosti selhávají.

<figure>
<img src="dist/images/original/vdwd/triky-ui-13.jpg" alt="">
<figcaption markdown="1">    
*Stará a nová verze karuselu na RSTS.cz. Starší ještě používala na mobilech nepoužitelnou tečkovou navigaci. Nová je vpravo a je fajn. Díky šipkám se lépe ovládá a grafika je uzpůsobená velikosti displeje*
</figcaption> 
</figure>


Jsou karusely obecně špatné? Z pohledu designéra se sluší napsat: „Ono záleží…“

Karusely jsou určitě špatné, když:

* je používáte jako zkrášlující prvek – věc, která se vám líbí;
* je používáte jako univerzální schovavač toho, co na webu nechcete a co si klient vymyslel;
* zpomalují načtení nebo zobrazení stránky;
* nejsou použitelné na mobilních zařízeních (malé tečky jako navigace, závislost);
* nepropagují obsah na dalších „slajdech“ a uživatel na první pohled nepozná, že ho čekají i další obrázky.

Hodně bych si rozmýšlel dnes bohužel běžné použití karuselu pro propagaci aktuálních akcí na úvodní stránce webu. Karusely se ale naopak hodí pro seznamy souvisejících položek. U e-shopu jde třeba o fotografie produktu nebo seznam podobného zboží.  

## 3) Akordeony raději než záložky uprostřed stránky

Jak už jsem psal, dost ve svých rozhraních sázím na to, že uživatelé posunovat stránku shora dolů bez problémů zvládají.

Záložková navigace uvnitř stránky je mobilech ke zvážení, protože může otevírat obsah, jehož studium vám ony záložky odsune do nahoře skrytých částí stránky. 

<figure>
<img src="dist/images/original/vdwd/triky-ui-14.jpg" alt="">
<figcaption markdown="1">    
*CZC.cz má hezky provedený akordeón. Podobný prvek na Mall.cz se ale chová jako  záložky: pokud chci po přečtení obsahu pro „Popis“ otevřít „Parametry“, musím posunovat stránku zpět nahoru*
</figcaption> 
</figure>

I proto mám raději takzvané akordeony. Podporují přirozené plynutí informací shora dolů. Na druhou stranu – akordeony dávají díky výpisu pod sebou informacím (někdy nechtěnou) hierarchi. Jak tedy sami vidíte, při výběru řešení vždy záleží na obsahu, který reprezentuje a celkovém kontextu, ve kterém jej používáte.


## 4) Uměl by si Obr z Altonu na vašem webu vybrat datum?

Vložení datumu na mobilech může být pěkná otrava. Pokud používáte některý z pluginů určených pro desktop. A že je používá každý druhý responzivní web!

Na mobilech můžete využít `<input type="date">`, který otevře nativní výběr data. Občas je ale potřeba udělat vlastní komponentu. Vždy mějte v prvé řadě na paměti ovládání palcem. Obr z Altonu se na vás dívá!

Další tipy od Nielsen Norman Group k výběru datumu jsem sepisoval na blog. [vrdl.cz/blog/83-nng-input-date](http://www.vzhurudolu.cz/blog/83-nng-input-date)

## 5) Nespoléhejte na přítomnost globální navigace

Web bez hlavní navigace? Pfff…!  Představte si, že byste to nějakému klientovi navrhli před pěti lety. Dnes ale na velmi malých displejích postrádají globální navigaci téměř všechny weby. Prostě se tam nevejde.

Nezbývá než se s tím smířit a na globální navigaci tak moc nestavět. U větších webů hraje na mobilech velkou roli vyhledávání. Může být vhodné stavět úvodní stránku složitějších webů také jako rozcestník. Chybějící hlavní navigaci je ale potřeba mít v hlavě při návrhu každé komponenty a každé stránky webu.

## 6) Modální okna, lightboxy: pozor na správnou implementaci

Ty samy o sobě nejsou špatné. Dokonce bych řekl, že jsou na mobilech velmi užitečné. Jen mám asi smůlu. Smůlu na weby, které zavírání modálního okna schovávájí pod horní hranu okna prohlížeče. 

Specifickou odrůdu modálních oken, otravná modální okna, dokonce Google považuje za hodné penalizace. Více je v článku Pavla Ungra „Google od ledna 2017 penalizuje weby s obtěžujícími popupy“.[vrdl.in/googlepopup](http://blog.bloxxter.cz/google-od-ledna-2017-penalizuje-weby-s-obtezujicimi-popupy/)


Modálními okny a lightboxy ukončíme výčet nejvýznamnějších zástupců „Červené knihy ohrožených návrhových vzorů“. 

