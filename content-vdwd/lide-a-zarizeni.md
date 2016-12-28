# Lidé a zařízení: jak je ovládají a jak se chovají?

Než se vrhneme na samotné uživatelské rozhraní, podívejme se na naše milé uživatele. Jak vlastně ta nová zařízení drží, jak je ohmatávají… jaké polohy používají? Vítejte u mobilní, tabletové a desktopové kamasútry!

Dozvíte se, že dotykovost je nový standard. A také, že důležité prvky v rozhraní mají být na mobilech veprostřed a na větších dotykových zařízeních u pravého kraje. Pojďme na to.

## Všechno je dotykové

Na začátek si dovolím parafrázovat myšlenku Joshe Clarka z jeho skvělé knihy „Designing for Touch“:

> Zařízení jakéhokoliv typu může být dotykové. Proto musíme předpokládat, že dotykové bude.

Přesně tak, přátelé, pojďme považovat dotykové ovládaní za výchozí stav.

V době kdy píšu tento text ještě „dotykáče“ mezi zařízeními přistupujícími na vaše weby nemusejí hrát první housle.  Jenže, jak už jsem psal dříve, to se brzy změní. 

Blíží se doba, kdy dotyková zařízení snědí počítačové myši i s kabelem. 

Ani skupina uživatelů klasických počítačů,  zejména notebooků, není nedotčená. Máme tady hybridní zařízení, dotykové stroje s klávesnicí a myší. A jejich prodeje rostou.

### Není lepší mít dvě verze rozhraní: pro myšovitá a dotyková zařízení?

Není. 

* Bylo by to totiž děsně **neefektivní**. Představte si, že děláte dvě verze uživatelského rozhraní vaší aplikace. Nevadí vám to? A teď si představte, že to máte všechno platit.
* Z principu je navíc téměř **nemožné detekovat dotyková zařízení**. Kdyby se lidé dělili na *dotykující* a *myšujíc*í, možné by to jakž takž bylo. Jenže lidstvo je děsně zlomyslná parta. Je tu ona rostoucí skupina hybridních zařízení, *dotykujících* a *myšujících* zároveň.

Výjimečně nastává situace, kdy se nějaká detekce hodí. Třeba když chcete pro desktopové rozhraní otevřít prvek po najetí myši. Pak použijte detekční knihovnu Modernizr, která *myšovitá* umí najít. Obecně se tomu ale snažte vyhnout, protože i tato detekce je z mnoha důvodů nespolehlivá. 

## Lidé váš web vidí na více zařízeních

A zase je to tady! Místo toho, aby se nám lidstvo rozumně rozškatulkovalo do dvou táborů – *mobilisté* a *desktopisté* – dělají nám v celé věci nepořádek. Představte si, že většina z nich je v obou táborech najednou. Jako by se z nich stala nějaká přerostlá neutrina. Uf!

No tak dobře, teď vážně. Opravdu neexistuje nic jako oddělené tábory mobilních a desktopových uživatelů. Vezměme například studii uživatelů v USA ze začátku roku 2016 od Google:

* 57 % jich využívá více než jedno zařízení;
* 20 % jich dokonce využívá další zařízení, i když zrovna sedí u počítače;
* 39 % lidí vyhledává jen na mobilech, 28 % na různých zařízeních, 32 % jen na počítači;
* 27 % využívá jen mobil a jen 14 % pouze desktop.

Google to měřil na svých amerických uživatelích mezi 18 a 49 lety v prvním čtvrtletí 2016. [https://www.thinkwithgoogle.com/articles/device-use-marketer-tips.html](https://www.thinkwithgoogle.com/articles/device-use-marketer-tips.html)

Není samozřejmě bez zajímavosti, že uživatelé v průzkumu strávili v průměru 75 minut denně u tabletů, 120 u počítače a celých 170 minut pohledem do mobilu. Když držíme mobily, nechodíme snad ani na záchod! Nebo si je prostě na záchod bereme, že ano.

## Zařízení nejčastěji držíme jednou rukou a ovládáme palcem

V roce 2013 se Steven Hoober sebral a šel se podívat, jak lidé na ulicích drží své mobilní telefony. Asi vás to nepřekvapí, ale my lidé jsme se nesjednotili ani ve způsobu držení těch malých svítících krabiček. 

Hooberovy výsledky:

* 49 % lidí mobilní zařízení v jedné ruce a šátralo po něm palcem,
* 36 % lidí dávalo přednost „kolébkovému“ chvatu – držení v jedné ruce a ovládání prstem druhé ruky,
* 15 % drželo krabičky obouruč a ovládalo dvěma palci.

Hoober ale o držení mobilů zjistil i další věci, které se v zásadě dají zobecnit i pro další dotyková  zařízení:

* **Držíme telefony různě podle kontextu a pozice.** 
Ano, i úchopově přelétaví jsme. Chudáci mobilní telefony. A co teprve tablety!
* **Dvě třetiny dotyků při držení v jedné ruce se provádí pravačkou. 
**A to i přes to, že leváci tvoří jen asi desetinu, nikoliv zbylou třetinu, populace. I my, praváci, si prostě občas sáhneme levým palcem. Tím méně přesným, mimochodem.
* **75 % všech interakcí bylo děláno palcem. 
**U jednorukého držení to asi smysl dává, ale palce to vyhrály i u kolébkového chvatu. 

Takže my lidé jsme vlastně jen složité mechanismy pro přenášení a ovládání palců, přátelé. 

Tady je zdrojový výzkum Steven Hoobera: [http://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php](http://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php#top)

Prodávají se stále větší chytré telefony, takže bychom při návrhu rozhraní měli myslet na to, že palcem je u nich dosažitelná daleko menší část obrazovky.

![Palce na mobilech](dist/images/vdwd/original/palce-mobily.png)

*Obrázek: Mobily jsou větší, ale plocha ovládatelná palcem se zmenšuje. Větší zařízení totiž také mívají silnější šasi. Zelená je palcem dosažitelná snadno, žlutá hůř a červená skoro vůbec.*

Čím více dole a čím více veprostřed aktivní prvek je, tím lépe. Spodní hrana prohlížeče ale pro umístění důležitých prvků dobré místo nepředstavuje. K tomu se ještě vrátím. Na mobilech tedy důležité prvky jako primární výzvy k akci umísťujte alespoň co nejvíce doprostřed. 

Na menších mobilech tedy dělají palce kolem 75 % všech interakcí. Na velkých mobilech kolem 60 % jak uvádí Josh Clark ve vynikajícím článku na A List Apart, ze kterého budu dále vycházet.

[http://alistapart.com/article/how-we-hold-our-gadgets](http://alistapart.com/article/how-we-hold-our-gadgets)

To bychom měli mobily. Jak je to u větších zařízení?

U tabletů značně záleží na jejich velikosti. Josh Clark ve výše odkazovaném článku zmiňuje, že ty menší sedmi- a osmi-palcové drží většina uživatelů ještě v ruce a ovládá palci. Větší tablety si zase pokládáme na stůl nebo do klína. 

Na časté otázky jestli lidé tablety častěji používají na výšku nebo na šířku odpovím tak, že to vychází na remízu. Větší tablety používá mírná většina lidí na šířku. Menší na výšku, protože se nám pak lépe drží v ruce.

### Malé tablety (7" a 8") držíme častěji obouruč a ovládáme palci

Znovu se zde budu odkazovat na data, která sesbíral Josh Clark. Malé tablety držíme v ruce, ale zóny pohodlného ovládání palci vypadají zcela jinak. 

![Palce na tabletu](dist/images/vdwd/original/palce-tablet.png)

*Obrázek: Na malých tabletech držených obouruč jsou palci nejlépe dosažitelné okraje od středu nahoru. Spodní okraj a střed je naopak dosažitelné nejhůře.*

Primární výzvy k akci bychom tedy měli umísťovat ke kraji. Nejlépe pravému, vzhledem k přesile praváků v populaci. 

Zóny pohodlného ovládání na malých tabletech jsou dost v kontrastu s dnes běžným umísťováním málo důležitých prvků na fixní pozice ke krajím obrazovky. Ano, vy lišty z Heureka.cz nebo výzvy ke kliknutí na online chaty, dívám se právě na vás!

### Hybridní zařízení a notebooky s dotykovou obrazovkou

I mě jako člověka nadšeného do dotykových zařízení překvapilo, že celých 77 % uživatelů notebooků s dotykovou obrazovkou používá častěji doteky než ovládání myší. Vyšlo to alespoň ze studie Intelu, odkazované v Clarkově zmiňovaném článků.

O tom, zda lidé budou vůbec někdy chtít ovládat zařízení stojící na stole doteky se dlouho vedly spory. Skeptici namítali, že ovládání ukazováčkem člověka nutí držet paže před sebou a to že není pohodlné. Když si vzpomenete na onen vysoký podíl ovládání doteky, budete se asi divit, když prohlásím, že skeptici měli pravdu.

Lidé totiž dotykové obrazovky notebooků  a podobných zařízení nepoužívají ukazováčkem, ale znovu palcem. Únavě paží zabraňují tak, že si ruce opřou o stůl pod hranou displeje. Ukazováčkem obrazovky ohmatávají jen uživatelé méně zkušení, kteří většinou časem přejdou znovu na palce. 

![Palce na notebooku](dist/images/vdwd/original/palce-notebook.png)

*Obrázek: u notebooků s dotykovou obrazovkou a hybridních zařízení jsou palcem nejlépe dostupné plochy spodních rohů.*

I u těchto zařízení jsou tedy nejsnáze dosažitelné kraje uživatelského rozhraní. Jen nezapomeňte, že je u nich uživatelům potřeba nechat trochu volného místa pro rolování stránky.

V jednom se tedy dotyky na všechna zařízení shodují. Většinou před ostatními prsty upřednostňujeme ovládání palcem. Palce jsou přesné a pro mobilní zařízení univerzálně použitelné prsty. 
