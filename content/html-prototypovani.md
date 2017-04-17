# Živé webové prototypy

Když vyslovíme slovo „prototyp“ v hospodě – a nebude přitom zrovna plná webařů – asi si okolosedící představí testovací model nějakého výrobku. 

Prototyp je obvykle definován jako *raný* vzorek, který byl vytvořen pro *otestování* myšlenkového konceptu nebo pracovního procesu v začátcích práce na produktu. Na výsledek testu se buď naváže v reálné výrobě nebo se z něj poučíme a zkusíme to jinak.

<!-- AdSnippet -->

Každý dobrý řemeslník věci nejprve promýšlí a pak teprve vyrábí. Produkční výroba ale bývá v některých oborech velmi drahá. Přísloví „třikrát měř, jednou řež“ platí i u webů.

Proto třeba výrobci automobilů, ale právě i webů, sahají k nějaké formě zkušebních modelů. Prototypů. 

## Dvakrát měř, jednou to zkus na prototypu a pak teprve řež

Díky prototypu si můžeme naživo „osahat“ věci, které nám na „papíře“ dávaly smysl. V našem případě hlavně otestovat složité nebo inovativní prvky uživatelského rozhraní. Nebo zkusit si výrobní postupy, které běžně neděláte. 

Prototypování je učení na produktu, který je co nejpodobnější tomu cílovému. Způsobů jak testovat vymyšlené je ale ve webdesignu hodně. Já tady budu hájit svou oblíbenou cestu – prototypování přímo v HTML, CSS a Javascriptu.

## Co je to HTML prototyp a jak se liší třeba od Axure?

Exporty do prohlížečové verze dnes nabízí leckteré „klikací“ nástroje – například Axure RP. Exporty jsou ovšem limitované tím, co zvládá klikací rozhraní. Plnohodnotné HTML, CSS a Javascript nabídnou vždy výrazně větší možnosti vyjádření. Ale mají i jiné výhody, za chvíli se k nim dostaneme.

Pokud vám Axure RP a podobné *wireframovací* nástroje vyhovují, není důvod je měnit. Kromě snadnější práce pro designéra umožňují testovat interakce a další věci. V mnoha týmech mají podobné nástroje nezastupitelnou roli. S HTML prototypováním se nevylučují a mohou se hezky doplňovat. [axure.com](https://www.axure.com/)

HTML prototypy, o kterých tady mluvím, jsou prostě plnohodnotné webové stránky vytvořené technologiemi, které jsou v dnešních prohlížečích po ruce. Jen jsou cíleně zjednodušené – ořezané o některé atributy, které by finální stránka mít měla a prototyp nemusí.

<figure>
<img src="dist/images/original/html-prototypovani-1.png" alt="">
<figcaption markdown="1">    
*Jeden z raných HTML prototypů VašeČočky.cz a finální stránka webu*
</figcaption> 
</figure>



## HTML prototypy mají své výhody

Mohou totiž být…

### Brzy v prohlížeči

Vzpomeňte na slovo „raný“ v definici prototypu. Máme problém složitý k vymýšlení na papíře nebo v Photoshopu? Pak co nejdříve do reálného prostředí s tím – do prohlížeče! Výrobci aut také s testem na silnicích nečekají až sjedou první hotová auta z výrobních linek.

### Plnohodnotné

Prototypy tvořené webovými technologiemi jsou ze stejného těsta jako hotové weby. Ve vybraných aspektech je dosáhnout absolutní míry věrnosti s konečným produktem.

### Znovupoužitelné

Výstupy z jiných prototypovacích nástrojů obvykle po skončení práce zahazujeme. V případě HTML prototypů na ně mohou vývojáři i designéři navázat. Je to pořád jedno těsto. Ale znovupoužitelnost je mince o dvou stranách, dočtete se dále.

### Snadno udržovatelné

Snadné provádění globálních změn, zbytečné neopakování se… Parametry efektivní práce, kterých je v běžných prototypovacích nástrojích složitější dosáhnout. Co se týká efektivity udržování, je webový kód bezkonkureční. 

HTML prototypy mají samozřejmě také své nevýhody. Ještě chvíli vydržte, povím vám něco o svých zkušenostech s nimi. Nejdříve si ale prototypy pojďme zasadit do kontextu dalších webařských modelovacích nástrojů.

## Prototyp versus drátěný model a maketa

Nástroje, používané pro demonstraci a odzkoušení nějaké myšlenky použít,  můžeme rozdělit do tří skupin:

### Drátěný model (wireframe)

* Je to vlastně kostra pro webový design. Ukazuje obsah, možnosti jeho rozložení a případně základní interakce. „Dráťák“ je rychle hotový, ale velmi zjednodušuje. Obvykle je to levná volba, ideální pro úvodní fáze projektů.
* Model nízké věrnosti s finálním webem. 
* Nejméně časově náročné.
* Nástroje: ruční skicování nebo programy jako UXPin nebo Balsamiq Mockups.

### Statická maketa (mockup)

* Na jednu stranu velmi detailní, jiné atributy prototypu ignorující. Typická maketa je výstup z Photoshopu, který obvykle detailně popisuje vizuální design, ale interakce nebo chování v různých rozlišeních naopak zcela nedostatečně.
* Model střední až vysoké věrnosti. 
* Časově středně a hodně náročné.
* Nástroje: Photoshop, Sketch.

### Interaktivní prototyp

* Důraz na interaktivitu a tedy například možnost otestovat uživatelské scénáře. Hezky dokáže otestovat i typické frontendové problémy. Vizuální design ale obvykle moc neřeší. 
* Opět střední až vysoká věrnost. 
* Časově ze všech možností nejnáročněší.
* Nástroje: Naše HTML prototypování nebo zčásti Axure RP. 

Zjednodušeně řečeno: HTML prototypování nabízí nejvyšší možnou míru věrnosti, ale za cenu největší pracnosti.


## Výhody pro designéry

Designéři uživatelského rozhraní a weboví grafici mohou ocenit možnost na prototypech testovat následující:

### 1. Responzivnost

Častý problém maket z grafických programů je statický výstup. UI komponentu není možné otestovat na všech rozlišeních. Rychlý HTML prototyp to řeší.

### 2. Testování na uživatelích

Uživatelsky můžete testovat klidně i papírové skici nebo výstupy z Axure a Photoshopu. Jen HTML prototypy vám ale nabízejí volitelnou míru věrnosti konkrétního instrumentu uživatelského rozhraní.

### 3. Animace

Nástroje pro tvorbu maket jako Photoshop tady nepomohou. Klikací animační nástroje s výstupem do plnohodnotných CSS animací zatím nemáme. I tohle si můžete v rychlosti otestovat s pomocí svého kodéra.

### 4. Pokročilé interakce

Nemyslím tím jen „kliknu a přejdu na jinou stránku“. V HTML se skvěle prototypují třeba ajaxové interakce, klidně spojené s animací.

### 5. Pokročilé technologie

SVG výplně, výřezy, filtry, efekty… tady opravdu nevím, jak jinak než přímo v HTML si to zkusit. [vrdl.cz/prirucka/svg-inspirace](http://www.vzhurudolu.cz/prirucka/svg-inspirace)

<!-- AdSnippet -->

Ohromě ale z HTML prototypování mohou těžit vývojáři, kteří mají na starost zpracování výstupů designérů. Cílem totiž není jen dostat produkt co nejdříve do prohlížeče, ale také vtáhnout vývojáře do dřívějších fází procesu. Tak, aby zavčasu otestovali možné problémy, které na drátěném modelu ani maketě prostě vidět nejsou.

## Frontendisti ošetří své rizikové faktory

Každá správná frontendistka, každý správný frontendista mají prototypování rádi. I pro ně jsem našel pět otázek, na které jim HTML prototyp dokáže dát odpověď. Seznamu, který následuje, občas říkám „Pět obvyklých podezřelých na podkladech od designérů“. 

### 1. Rychlost načítání 

Komponenta vypadá hezky, ale – nezpomalí zásadně načítání stránky? Karusel na úvodní stránku do drátěného modelu šoupnete raz dva, že? Jen až během prototypování nebo nedejbože finální implementaci zjistíte, že se díky němu úvodní stránka načítá fakt pomalu. To nechcete.


### 2. Výkon v prohlížeči  

Nebude se stránka při posouvání „trhat“? Je myšleno i na výkon při práci s načtenou stránkou? To, že klient je nadšený z krásných paralaxových efektů, které chce na webu pouštět zároveň s videem na pozadí, neznamená, že jeho pocity budou sdílet návštěvníci webu. Prototypem zjistíte, jak je jeho myšlenka problematická co do výkonu v prohlížeči.

### 3. Přístupnost  

Jaký dopad bude komponenta mít na přístupnost zrakově postiženými? I karusel může být přístupný. Ale je přístupný zrovna ten váš? Dobré si to otestovat.

### 4. Zobrazování v exotických prohlížečích 

Jak se bude zobrazovat ve starších a exotičtějších prohlížečích? Půjde snadno vymyslet náhradní řešení pro ně? Úžasné SVG efekty, které grafik někde viděl, jsou fajn. Jak to ale poběží třeba v Exploreru 9, jehož uživatelé jsou třeba pro váš projekt ještě stále důležití? 

### 5. Udržovatelnost  

Nezkomplikuje řešení navržené designérem (nebo v horším případě klientem) celkovou udržovatelnost projektu? Pokud vaše argumenty nepadají na úrodnou půdu, udělejte rychlý prototyp, na které komplikaci se špatnou udržitelností složité knihovny v rámci vašeho projektu ukážete. 

Všimněte si, že kromě čtvrtého a pátého bodu, které jsou ryze technické, spadají všechny ostatní do kompetencí dobrého webového designéra.  

Klikací prototypovací nástroje jako Axure nám pachatele mezi obvyklými podezřelými najít nepomohou. Kód nemáme od začátku pod kontrolou, takže si na nich rizikové faktory neotestujeme. Výstupy z naklikaných prototypů navíc v produkční fázi projektu použít nemůžeme.


## Nevýhody HTML prototypů: časově náročné a vyžadují zkušenější tým

Celou dobu tady o plnohodnotných prototypech básním, takže si teď pojďme říci, v čem tkví jejich problémy:

### Jsou časově náročné a tedy dražší

Nehodí se tedy pro použití kdekoliv a kdykoliv. Rozumný kompromis budu hledat v dalším textu.

### Vyžadují určitou zkušenost na straně designéra i frontendisty

Hlavně u nezkušených frontendistů se může protypování zbytečně prodražit. Pokud v týmu máte hlavně juniory, dávejte dvakrát pozor, zda se nezaměřují spíše na nástroje nebo věci, které jste na prototypech testovat nechtěli.

### Vyžadují intenzivní spolupráci designérů a frontendistů

Prostě si spolu musíte sednout a pracovat na prototypech dohromady. V dělených týmech to moc nejde.

### Složitější zařazení do workflow větších týmů

Může vám chybět přímé napojení na Axure, Photoshop nebo jiné designérské nástroje. Můžete postrádat možnost diskutování konkrétních prvků rozhraní přímo na webu.

### Těžší rozhodování u znovupoužitelnosti

Někdy se dá znovupoužitelnost kódu z prototypu dosáhnout, ale pokud s živými prototypy začínáte, raději na tom netrvejte.

Moje vlastní zkušenost: U responzivního redesignu VašeČočky.cz jsem tak moc stál o znovupoužitelnost kódu prototypu, že jsem v některých jeho částech  dosahoval závratně hlemýždího tempa přípravy. Někdy je prostě pro zvýšení rychlosti lepší prototypový kód zahodit a pro finální web napsat znovu. 



## Kdy HTML prototypování použít a kdy spíše ne? Nemusíte prototypovat celé weby

Ano, HTML prototypování je časově nejnáročnější varianta modelování webu. Na druhou stranu umožňuje otestovat velkou části rizikových faktorů na straně designu, frontendu i vývoje obecně. Kód je možné připravovat už v kvalitě, využitelné pro produkční nasazení.

Na svých projektech HTML prototypování používám kdykoliv je to možné. Mluvím do designu rozhraní i frontend kódování a jak už jsem ukázal, pro obě části mé profesní osobnosti jsou prototypy výborné. Pro HTML prototypování se ale také rozhodují často týmy pracující dlouhodobě na jednom produktu. Tam se vyplatí. 

<!-- AdSnippet -->

V případě agenturní práce pro mnoho klientů doporučuji HTML prototypy dělat tam, kde zkoušíte nové věci nebo je rizikovost návrhu vysoká. 

Teď jedna odbočka. Podíváme se do blízké budoucnosti návrhu uživatelského rozhraní. Na atomické systémy designu, kde weby netvoříme po stránkách, ale po jednotlivých komponentách. 

## Atomický design má prototypování v krvi

Ještě poznámka k progresivním směrům návrhu uživatelského rozhraní. Systémy atomických designů jsou tvořeny skládáním menších komponent do větších. Návrh a testování se z velké části odehrává přímo v prohlížeči, v nástroji Pattern Lab, takže z HTML prototypování dělají neoddělitelnou součást pracovního procesu. 

O systémech atomického designu jsem psal na Vzhůru dolů. [vrdl.cz/prirucka/pattern-lab](http://www.vzhurudolu.cz/prirucka/pattern-lab)

U systémů atomického designu to bez intenzivní spolupráce designéra s vývojářem nejde. A podobné to je u celého HTML prototypování.


## V jakých nástrojích dělám HTML prototypy: Bootstrap a CodePen

Prototypování je dobré dělat v nástroji, který zvládáte ovládat rychle a který vám neklade překážky. Moje nástroje vám tedy vnucovat nechci. 

### Rychlý online editor CodePen

Editor, kde dělám jednoduché a přímočaré prototypy na pár řádků kódu. Je to rovnou online, takže se to dobře sdílí nebo posílá do mobilních zařízení k otestování.

### Frontend knihovna Bootstrap

Většina mých projektů z posledních let vznikla nejprve jako živý prototyp postavený na Bootstrapu. Ten obsahuje dostatečně robustní sadu komponent proto, abych velmi rychle dokázal poskládat prvotní verzi webu k proklikání. S postupným iterativním vývojem webu se pak postupně jeho komponenty nahrazují komponentami navrženými na míru projektu. 

Bootstrap podporuje stavebnicový vývoj. Zároveň dodává řadu principů (prostřednictvím proměných a mixinů), na kterých pak snadno můžeme stavět své vlastní komponenty. 

Čtěte „Jak správně navázat na typografické principy Bootstrapu?“ na Vzhůru dolů. [vrdl.cz/prirucka/bootstrap-typografie](http://www.vzhurudolu.cz/prirucka/bootstrap-typografie)

O HTML prototypování hezky povídal i Adam Kudrna na jedné z akcí Frontendisti.cz. [https://youtu.be/A71kFP8I_qY](https://youtu.be/A71kFP8I_qY)

