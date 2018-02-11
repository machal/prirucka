# Lidé a zařízení: jak je ovládají a jak se chovají?

<div class="ebook-only" markdown="1">
Jak vlastně lidé ta nová zařízení drží, jak je osahávají? Vítejte u mobilní, tabletové a desktopové Kámasútry!
</div>

Asi víte, že dotykovost je nový standard. Ale dozvíte se také, že prvky, které mají být snadno dosažitelné, je dobré na mobilech umísťovat na vodorovný střed a na větších zařízeních k pravému kraji. Pojďme na to.

## Všechno je dotykové

Na začátek si dovolím parafrázovat myšlenku Joshe Clarka z jeho skvělé knihy „Designing for Touch“:

> Zařízení jakéhokoliv typu může být dotykové. Proto musíme předpokládat, že dotykové bude.

Přesně tak, milí čtenáři, pojďme považovat dotykové ovládání za výchozí stav.

<!-- AdSnippet -->

V době, kdy píšu tento text, ještě „dotykáče“ mezi zařízeními přistupujícími na vaše weby nemusejí hrát první housle. Jenže jak už jsem psal dříve, to se brzy změní. Statistiky neúprosně ukazují, že dotyková zařízení jednou snědí počítačové myši i s kabelem.

Ani skupina uživatelů klasických počítačů, zejména notebooků, není nedotčená. Máme tady hybridní zařízení, tedy dotykové stroje s klávesnicí a myší. A jejich prodeje rostou.

### Proč nemít dvě verze rozhraní – pro „myšovitá“ a dotyková zařízení?

Bylo by to totiž neefektivní a je dost těžké ta zařízení detekovat.

Nejprve k efektivitě. Představte si, že děláte dvě verze uživatelského rozhraní vaší aplikace. Nevadí vám to? A teď si představte, že to máte všechno platit. <span class="ebook-only" markdown="1">Pro nastartování představivosti doporučuji podkapitolu [o webech mobilních, responzivních, adaptivních](mobilni-responzivni-adaptivni.md).</span> 

Možná si vzpomenete, že jsem proti speciální mobilní verzi webu argumentoval náročností práce i údržby pro designéry i vývojáře. Ale týká se vlastně všech řemesel souvisejících s webem: uživatelského a technického testování, správy obsahu a dalších. Práce na dvou rozhraních je všechny zpomalí a prodraží.

Z principu je navíc téměř nemožné detekovat dotyková zařízení. Kdyby se lidé dělili na *dotykující* a *myšující*, možné by to jakž takž bylo. Jenže lidstvo je tak trochu zlomyslná parta. Je tu ona rostoucí skupina hybridních zařízení, *dotykujících* a *myšujících* zároveň.

Výjimečně nastává situace, kdy se nějaká detekce hodí. Třeba když chcete pro desktopové rozhraní otevřít prvek po najetí myši. Pak použijte detekční knihovnu Modernizr, která *myšovitá* umí najít. 

Obecně se tomu ale snažte vyhnout, protože i tato detekce je nespolehlivá. Uvedu dva z mnoha důvodů. Starší dotyková zařízení například jen technicky emulovala klikání myší, takže je jako dotyková detekovat nelze. A pak tu máme hybridní zařízení. Technicky se jich zeptáte: „Umíš doteky?“ „Ano, umím,“ odpoví. Jenže co když uživatel právě ovládá vaše rozhraní myší? Více o tomto problému najdete v dokumentaci Modernizru, hledejte „touchevents“.  [modernizr.com/docs](https://modernizr.com/docs) 

## Lidé váš web vidí na více zařízeních

A zase je to tady! Místo toho, aby se nám lidstvo rozumně rozškatulkovalo do dvou táborů – *mobilisté* a *desktopisté* – dělají nám v celé věci nepořádek. Představte si, že většina z nich je v obou táborech najednou. Uf!

No tak dobře, teď vážně. Opravdu neexistuje nic jako oddělené tábory mobilních a desktopových uživatelů. Vezměme například studii uživatelů v USA ze začátku roku 2016 od Google:

* 57 % jich využívá více než jedno zařízení;
* 20 % jich dokonce využívá další zařízení, i když zrovna sedí u počítače;
* 39 % lidí vyhledává jen na mobilech, 28 % na různých zařízeních, 32 % jen na počítači;
* 27 % využívá jen mobil a jen 14 % pouze desktop.

Google to měřil na svých amerických uživatelích mezi 18 a 49 lety v prvním čtvrtletí roku 2016.  [vrdl.in/gdum](https://www.thinkwithgoogle.com/articles/device-use-marketer-tips.html)

Není bez zajímavosti, že uživatelé v průzkumu strávili v průměru 75 minut denně u tabletů, 120 minut u počítače a celých 170 minut pohledem do mobilu. Když držíme mobily, nechodíme snad ani na záchod! Nebo si je na záchod bereme, že ano.

## Zařízení nejčastěji držíme jednou rukou a ovládáme palcem

V roce 2013 se Steven Hoober sebral a šel se podívat, jak lidé na ulicích drží své mobilní telefony. Asi vás to nepřekvapí, ale my lidé jsme se nesjednotili ani ve způsobu držení těch malých svítících krabiček. 

<figure>
<img src="dist/images/original/mobily-drzeni.jpg" alt="">
<figcaption markdown="1">    
*Výsledek výzkumu Stevena Hoobera: 49 % lidí drželo mobilní zařízení v jedné ruce a šátralo po něm palcem. 36 % lidí dávalo přednost „kolébkovému“ chvatu (držení v jedné ruce a ovládání prstem druhé ruky) a 15 % drželo krabičky obouruč a ovládalo dvěma palci*
</figcaption> 
</figure>

Hoober ale o držení mobilů zjistil i další věci, které se v zásadě dají zobecnit i pro další dotyková  zařízení:

### Držíme telefony různě podle kontextu a pozice

Ano, i úchopově přelétaví jsme. Chudáci mobilní telefony. A co teprve tablety!

### Dvě třetiny dotyků při držení v jedné ruce se provádí pravačkou

A to i přes to, že leváci tvoří jen asi desetinu, nikoliv zbylou třetinu populace. I my praváci si tedy občas sáhneme levým palcem. Tím méně přesným, mimochodem.

### 75 % všech interakcí bylo děláno palcem

U jednorukého držení to asi smysl dává, ale palce to vyhrály i u kolébkového chvatu. 

Takže my lidé jsme vlastně jen složité mechanismy pro přenášení a ovládání palců. Zdrojový výzkum Stevena Hoobera „How Do Users Really Hold Mobile Devices“ najdete na UXMatters.com. [vrdl.in/m326o](http://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php#top)

### Pozor na malou plochu pohodlně dosažitelných oblastí obrazovky

Prodávají se stále větší chytré telefony, takže bychom při návrhu rozhraní měli myslet na to, že palcem je u nich dosažitelná daleko menší část obrazovky.

<figure>
<img src="dist/images/original/vdwd/palce-mobily.jpg" alt="">
<figcaption markdown="1">    
*Mobily jsou větší, ale plocha ovládatelná palcem se zmenšuje. Větší zařízení totiž také mívají silnější šasi. Uprostřed zvýrazněná zelená je palcem dosažitelná snadno, žlutá hůř a zbylá červená skoro vůbec*
</figcaption> 
</figure>

Pokud má být prvek rozhraní snadno dosažitelný, bude nejlepší, když jej na mobilech umístíte co nejvíc dolů a co nejvíc doprostřed. Spodní hrana prohlížeče ale pro umístění důležitých prvků dobré místo nepředstavuje. K tomu se ještě vrátím v povídání o fixním pozicování elementů.

Na menších mobilech tedy dělají palce kolem 75 % všech interakcí. Na velkých mobilech kolem 60 %. Uvádí to Josh Clark ve vynikajícím článku „How We Hold Our Gadgets“ na A List Apart, ze kterého budu dále vycházet. [vrdl.in/hold](http://alistapart.com/article/how-we-hold-our-gadgets)

<!-- AdSnippet -->

To bychom měli mobily. Jak je to u větších zařízení?

U tabletů značně záleží na jejich velikosti. Josh Clark ve výše odkazovaném článku zmiňuje, že ty menší sedmi- a osmipalcové drží většina uživatelů ještě v ruce a ovládá palci. Větší tablety si zase pokládáme na stůl nebo do klína. 

Na otázku, jestli lidé tablety častěji používají na výšku, nebo na šířku, odpovím tak, že to vychází na remízu. Větší tablety používá mírná většina lidí na šířku. Menší na výšku, protože se nám pak lépe drží v ruce.

### Malé tablety (7" a 8") držíme častěji obouruč a ovládáme palci

Znovu se zde budu odkazovat na data, která sesbíral Josh Clark. Malé tablety držíme v ruce, ale zóny pohodlného ovládání palci vypadají zcela jinak.

<figure>
<img src="dist/images/original/vdwd/palce-tablet.jpg" alt="">
<figcaption markdown="1">    
*Na malých tabletech držených obouruč jsou palci nejlépe dosažitelné okraje od středu nahoru. Spodní okraj a střed jsou naopak dosažitelné nejhůře*
</figcaption> 
</figure> 

Aktivní prvky, které mají být snadno dosažitelné, bychom tedy měli umísťovat ke kraji. Nejlépe pravému, vzhledem k přesile praváků v populaci. 

Zóny pohodlného ovládání na malých tabletech jsou dost v kontrastu s dnes běžným umísťováním málo důležitých prvků na fixní pozice ke krajím obrazovky. Ano, vy lišty z Heureka.cz nebo výzvy ke kliknutí na online chaty, dívám se právě na vás!

### Hybridní zařízení a notebooky s dotykovou obrazovkou: i tady překvapivě vedou palce

I mě, jako člověka nadšeného do dotykových zařízení, překvapilo, že celých 77 % uživatelů notebooků s dotykovou obrazovkou používá častěji doteky než ovládání myší. Vyšlo to alespoň ze studie Intelu, odkazované v Clarkově článku.

O tom, zda lidé budou vůbec někdy chtít ovládat zařízení stojící na stole doteky, se dlouho vedly spory. Skeptici namítali, že ovládání ukazováčkem člověka nutí držet paže před sebou a to že není pohodlné. Když si vzpomenete na onen vysoký podíl ovládání doteky, budete se asi divit, když prohlásím, že skeptici měli pravdu.

<!-- AdSnippet -->

Lidé totiž dotykové obrazovky notebooků a podobných zařízení neovládají ukazováčkem, ale znovu palcem. Únavě paží zabraňují tak, že si ruce opřou o stůl pod hranou displeje. Ukazováčkem ohmatávají obrazovky jen uživatelé méně zkušení, kteří většinou časem přejdou znovu na palce.

<figure>
<img src="dist/images/original/vdwd/palce-notebook.jpg" alt="">
<figcaption markdown="1">    
*U notebooků s dotykovou obrazovkou a hybridních zařízení jsou palcem nejlépe dostupné plochy spodních rohů*
</figcaption> 
</figure> 

I u těchto zařízení jsou tedy nejsnáze dosažitelné kraje uživatelského rozhraní. Jen nezapomeňte, že je u nich uživatelům potřeba nechat trochu volného místa pro rolování stránky.

V jednom se tedy dotyky na všechna zařízení shodují. Většinou před ostatními prsty upřednostňujeme ovládání palcem. Palce jsou přesné a pro mobilní zařízení univerzálně použitelné prsty. 

<div class="f-6 web-only" markdown="1">
  *Text je součástí kapitoly „Návrh rozhraní v éře mobilů“ knihy [Vzhůru do (responzivního) webdesignu](https://www.vzhurudolu.cz/ebook-responzivni).*
</div>
