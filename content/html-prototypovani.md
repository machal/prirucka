# HTML prototypy

Když vyslovíme slovo „prototyp“ v hospodě – a nebude přitom zrovna plná webařů –, asi si okolo sedící představí testovací model nějakého výrobku.

Prototyp je obvykle definován jako *raný* vzorek, který byl vytvořen pro *otestování* myšlenkového konceptu nebo pracovního procesu. Na výsledek testu se buď naváže v reálné výrobě, nebo jej zahodíme, poučíme se a zkusíme to jinak.

<!-- AdSnippet -->

Každý dobrý řemeslník věci nejprve promýšlí a pak teprve vyrábí. Produkční výroba ale bývá v některých oborech velmi drahá. Přísloví „třikrát měř, jednou řež“ platí i u webů.

Proto třeba výrobci automobilů, ale právě i webů sahají k nějaké formě zkušebních modelů. Prototypů.

## Dvakrát měř, jednou to zkus na prototypu a pak teprve řež

Díky prototypu si můžeme naživo „osahat“ věci, které nám na „papíře“ dávaly smysl. V našem případě hlavně otestovat složité nebo inovativní prvky uživatelského rozhraní. Nebo si zkusit výrobní postupy, které běžně neděláte.

Prototypování je učení na produktu, který je co nejpodobnější tomu cílovému. Způsobů, jak testovat vymyšlené, je ale ve webdesignu hodně. Já tady budu hájit svou oblíbenou cestu – prototypování přímo v HTML, CSS a Javascriptu.

## Co je to HTML prototyp a jak se liší třeba od Axure?

Exporty do prohlížečové verze dnes nabízí leckteré „klikací“ nástroje – například Axure RP. Exporty jsou ovšem často limitované tím, co zvládá klikací rozhraní. Plnohodnotné HTML, CSS a Javascript nabídnou vždy výrazně větší možnosti vyjádření. 

Pokud vám Axure RP a podobné *wireframovací* nástroje vyhovují, není důvod je měnit. Kromě snadnější práce pro designéra umožňují testovat interakce a další věci. V mnoha týmech mají podobné nástroje nezastupitelnou roli. S HTML prototypováním se nevylučují a mohou se hezky doplňovat. 

HTML prototypy, o kterých tady mluvím, jsou prostě plnohodnotné webové stránky vytvořené technologiemi, které jsou v dnešních prohlížečích po ruce. Jen jsou cíleně zjednodušené – ořezané o některé atributy, které by finální stránka mít měla a prototyp nemusí.

<figure>
<img src="dist/images/original/html-prototypovani-1.jpg" alt="">
<figcaption markdown="1">    
*Jeden z raných HTML prototypů VašeČočky.cz a tatáž stránka na finálním webu, ke které jsme dospěli iterativním procesem*
</figcaption> 
</figure>



## HTML prototypy mají své výhody

Jsou brzy v prohlížeči, mají volitelnou míru věrnosti a mohou být znovu použitelné a snadno udržovatelné.

### Brzy v prohlížeči

Vzpomeňte na slovo „raný“ v definici prototypu. Máme problém, který by se složitě řešil na papíře nebo ve Photoshopu? Pak s tím co nejdříve do reálného prostředí – do prohlížeče!

### Plnohodnotné

Prototypy tvořené webovými technologiemi jsou ze stejného těsta jako hotové weby. Ve vybraných aspektech lze dosáhnout absolutní míry věrnosti s konečným produktem.

### Znovupoužitelné

Výstupy z jiných prototypovacích nástrojů obvykle po skončení práce zahazujeme. V případě HTML prototypů na ně mohou vývojáři i designéři navázat. Je to pořád jedno těsto. Ale znovupoužitelnost je mince o dvou stranách, jak se dočtete dále.

### Snadno udržovatelné

Snadné provádění globálních změn, zbytečné neopakování se… To jsou parametry efektivní práce, kterých je v běžných prototypovacích nástrojích složitější dosáhnout. Co se týká efektivity udržování, je webový kód bezkonkurenční.

HTML prototypy mají samozřejmě také své nevýhody. Ještě chvíli vydržte, povím vám něco o svých zkušenostech s nimi. Nejdříve si ale prototypy pojďme zasadit do kontextu dalších webařských modelovacích nástrojů.

## Prototyp versus drátěný model a maketa

Nástroje používané pro demonstraci a odzkoušení nějaké myšlenky můžeme rozdělit do tří skupin:

### Drátěný model (wireframe)

* Je to vlastně kostra pro webový design. Ukazuje obsah, možnosti jeho rozložení a případně základní interakce. „Dráťák“ je rychle hotový, ale velmi zjednodušuje. Obvykle je to levná volba, ideální pro úvodní fáze projektů.
* Model nízké věrnosti co do podoby s finálním webem.
* Nejméně časově náročný.
* Nástroje: ruční skicování nebo programy jako UXPin nebo Balsamiq Mockups.

### Statická maketa (mockup)

* Na jednu stranu velmi detailní, jiné atributy prototypu ignorující. Typická maketa je výstup z Photoshopu, který obvykle detailně popisuje vizuální design. Interakce nebo chování v různých rozlišeních statická maketa popisuje naopak zcela nedostatečně.
* Model střední až vysoké věrnosti. 
* Časově středně a hodně náročná.
* Nástroje: Photoshop, Sketch.

### Interaktivní prototyp

* Důraz na interaktivitu, a tedy například možnost otestovat uživatelské scénáře. Hezky dokáže otestovat i typické frontendové problémy. Vizuální design ale obvykle moc neřeší.
* Opět střední až vysoká věrnost. 
* Časově ze všech možností nejnáročnější.
* Nástroje: Naše HTML prototypování nebo zčásti Axure RP. 

Zjednodušeně řečeno: HTML prototypování nabízí nejvyšší možnou míru věrnosti, ale za cenu největší pracnosti.


## Výhody pro designéry

Designéři uživatelského rozhraní a weboví grafici mohou ocenit možnost na prototypech testovat následující:

### 1. Responzivnost

Častý problém maket z grafických programů je statický výstup. UI komponentu není možné otestovat na široké škále zařízení nebo jen rozlišení. HTML prototyp to řeší.

### 2. Animace

Nástroje pro tvorbu maket jako Photoshop tady nepomohou. Klikací animační nástroje s výstupem do plnohodnotných CSS animací zatím nemáme. I tohle si můžete v rychlosti otestovat s pomocí svého kodéra.

### 3. Pokročilé interakce

Nemyslím tím jen „kliknu a přejdu na jinou stránku“. V HTML se skvěle prototypují třeba složitější ajaxové interakce, klidně spojené s animací.

### 4. Pokročilé technologie

SVG výplně, výřezy, filtry, efekty… Tady opravdu nevím, jak jinak než přímo v HTML vyzkoušet řešení na nich postavená. 

<!-- AdSnippet -->

Ohromně ale z HTML prototypování mohou těžit vývojáři, kteří mají na starosti zpracování výstupů designérů. Cílem totiž není jen dostat produkt co nejdříve do prohlížeče, ale také vtáhnout vývojáře do dřívějších fází procesu. Tak, aby zavčasu otestovali možné problémy, které na drátěném modelu ani maketě prostě vidět nejsou.

## Frontendisti ošetří své rizikové faktory

Každá správná frontendistka i každý správný frontendista mají prototypování rádi. I pro ně jsem našel pět otázek, na které jim HTML prototyp dokáže dát odpověď. Seznamu, který následuje, občas říkám „Pět obvyklých podezřelých na podkladech od designérů“.

### 1. Rychlost načítání 

Komponenta vypadá hezky, ale – nezpomalí zásadně načítání stránky? Karusel na úvodní stránku do drátěného modelu šoupnete raz dva, že? Jen až během prototypování nebo nedej bože finální implementaci zjistíte, že se kvůli němu úvodní stránka načítá fakt pomalu. To nechcete.


### 2. Výkon v prohlížeči  

Nebude se stránka při posouvání „trhat“? Je myšleno i na výkon při práci s načtenou stránkou? To, že klient je nadšený z krásných paralaxových efektů, které chce na webu pouštět zároveň s videem na pozadí, neznamená, že jeho pocity budou sdílet návštěvníci webu. Prototypem zjistíte, jak je jeho myšlenka problematická co do výkonu v prohlížeči.

### 3. Přístupnost  

Jaký dopad bude komponenta mít na přístupnost zrakově postiženými? I karusel může být přístupný. Ale je přístupný zrovna ten váš? Dobré si to otestovat.

### 4. Zobrazování v exotických prohlížečích 

Jak se bude zobrazovat ve starších a exotičtějších prohlížečích? Půjde snadno vymyslet náhradní řešení pro ně? Úžasné SVG efekty, které grafik někde viděl, jsou fajn. Jak to ale poběží v Exploreru 9, jehož uživatelé jsou třeba pro váš projekt ještě stále důležití?

### 5. Udržovatelnost  

Nezkomplikuje řešení navržené designérem (nebo v horším případě klientem) celkovou udržovatelnost projektu? Pokud vaše argumenty nepadají na úrodnou půdu, udělejte rychlý prototyp, na kterém komplikaci se špatnou udržitelností složité knihovny v rámci vašeho projektu ukážete.

Všimněte si, že kromě čtvrtého a pátého bodu, které jsou ryze technické, spadají všechny ostatní do kompetencí dobrého webového designéra.  

Klikací prototypovací nástroje jako Axure nám pachatele mezi obvyklými podezřelými najít nepomohou. Kód nemáme od začátku pod kontrolou, takže si na nich rizikové faktory neotestujeme. Výstupy z naklikaných prototypů navíc v produkční fázi projektu použít nemůžeme.


## Nevýhody HTML prototypů: časově náročné a vyžadují zkušenější tým

Celou dobu tady o plnohodnotných prototypech básním, takže si teď také pojďme říci, v čem tkví jejich nevýhody:

### Jsou časově náročné, a tedy dražší

Nehodí se tedy pro použití kdekoliv a kdykoliv. Rozumný kompromis budu hledat v dalším textu.

### Vyžadují určitou zkušenost na straně designéra i frontendisty

Hlavně u nezkušených frontendistů se může prototypování zbytečně prodražit. Pokud v týmu máte hlavně juniory, dávejte dvakrát pozor, zda se nezaměřují spíše na nástroje nebo věci, které jste na prototypech testovat nechtěli.

### Vyžadují intenzivní spolupráci designérů a frontendistů

Prostě si spolu musíte sednout a pracovat na prototypech dohromady. V dělených týmech to často nejde.

### Složitější zařazení do workflow větších týmů

Může vám chybět přímé napojení na Axure, Photoshop nebo jiné designérské nástroje. Můžete postrádat možnost diskutovat o konkrétních prvcích rozhraní přímo na webu.

### Těžší rozhodování u znovupoužitelnosti

Někdy se dá znovupoužitelnosti kódu z prototypu dosáhnout, ale pokud s živými prototypy začínáte, raději na tom netrvejte.

Moje vlastní zkušenost: U responzivního redesignu VašeČočky.cz jsem tak moc stál o znovupoužitelnost a kvalitu kódu prototypu, že jsem v některých jeho částech dosahoval závratně hlemýždího tempa přípravy. Někdy je prostě lepší v zájmu zvýšení rychlosti a lepšího zaměření pozornosti prototypový kód zahodit a pro finální řešení jej napsat znovu.


## Kdy HTML prototypování použít a kdy spíše ne? Nemusíte prototypovat celé weby

Ano, HTML prototypování je časově nejnáročnější varianta modelování webu. Na druhou stranu umožňuje otestovat velkou část rizikových faktorů na straně designu, frontendu i vývoje obecně. Kód je možné připravovat už v kvalitě využitelné pro produkční nasazení.

Na svých projektech HTML prototypování používám, kdykoliv je to možné. Mluvím do designu rozhraní i frontend kódování, a jak už jsem ukázal, pro obě části mé profesní osobnosti jsou prototypy výborné. Pro HTML prototypování se ale také často rozhodují týmy pracující dlouhodobě na jednom produktu. Tam se vyplatí.

<!-- AdSnippet -->

V případě agenturní práce pro mnoho klientů doporučuji HTML prototypy dělat tam, kde zkoušíte nové věci nebo ke je rizikovost návrhu vysoká.

Teď jedna odbočka. Podíváme se do blízké budoucnosti návrhu uživatelského rozhraní. Na atomické systémy designu, kde weby netvoříme po stránkách, ale po jednotlivých komponentách. 

## Atomický design má prototypování v krvi

Ještě poznámka k progresivním směrům návrhu uživatelského rozhraní. Systémy atomických designů jsou tvořeny skládáním menších komponent do větších. Návrh a testování se z velké části odehrávají přímo v prohlížeči, v nástroji Pattern Lab, takže z HTML prototypování dělají neoddělitelnou součást pracovního procesu.

O systémech atomického designu jsem psal na Vzhůru dolů. [vrdl.cz/prirucka/pattern-lab](http://www.vzhurudolu.cz/prirucka/pattern-lab)

U systémů atomického designu to bez intenzivní spolupráce designéra s vývojářem nejde. A podobné to je u celého HTML prototypování.


## V jakých nástrojích dělám HTML prototypy: Bootstrap a CodePen

Prototypování je dobré dělat v nástroji, který dokážete ovládat rychle a který vám neklade překážky. Svoje nástroje vám tedy vnucovat nechci.

### Rychlý online editor CodePen

Editor, kde dělám jednoduché a přímočaré prototypy na pár řádků kódu. Je to rovnou online, takže se to dobře sdílí nebo posílá do mobilních zařízení k otestování.

### Frontend knihovna Bootstrap

Většina mých projektů z posledních let vznikla nejprve jako živý prototyp postavený na Bootstrapu. Ten obsahuje dostatečně robustní sadu komponent proto, abych velmi rychle dokázal poskládat prvotní verzi webu k proklikání. S postupným iterativním vývojem webu se pak postupně jeho komponenty nahrazují komponentami navrženými na míru projektu. 

Bootstrap podporuje stavebnicový vývoj. Zároveň dodává řadu principů (prostřednictvím proměnných a mixinů), na kterých pak snadno můžeme stavět své vlastní komponenty.

Video: O HTML prototypování hezky povídal i Adam Kudrna na jedné z akcí Frontendisti.cz. [vrdl.in/2t451](https://youtu.be/A71kFP8I_qY)

<div class="ebook-only" markdown="1">
Nyní si pojďme znalosti o skicování a prototypech promítnout do práce na fotogalerii v našem e-shopu.
</div>
