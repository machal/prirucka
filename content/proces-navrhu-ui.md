# Proces návrhu uživatelského rozhraní

V knize a na příkladu ukazuji proces tvorby webů, o kterém by mnozí profesionální kolegové řekli, že je „exotický“. Nevyužívám nástroje pro tvorbu předběžných návrhů webů a skoro neotevírám Photoshop a jiné kreslicí programy. Velkou část práce dělám přímo v prohlížeči. Pojďme si říct, jak přesně budeme v knize postupovat a proč vlastně takto specificky.

V procesu návrhu a implementace uživatelského rozhraní se budeme pohybovat v kolečku „Návrh a realizace“ ze zjednodušeného grafu procesu tvorby webu, který znáte z předchozí podkapitoly [o základech procesu tvorby webu](zaklady-procesu.md).  

Navazujeme tedy na kolečko „Průzkumu a definice“. Některé výstupy z této fáze jsme si shrnuli [do User Centered Design Canvasu](design-canvas.md). Dále bychom z ní dostali například přípravu obsahu pro  web, návrh jeho informační architektury, uživatelské scénáře, analýzu klíčových slov a další materiály. 


## Jak obvykle vypadá návrh uživatelského rozhraní?

Nejběžnější proces tvorby rozhraní v dnešních webařských týmech vypadá asi takto:

1. Načrtnou se wireframy
2. Nakreslí se grafika
3. Nakóduje se to

Každou funkci obvykle zastává jiný člověk. Často se jednotliví aktéři ani nepotkají (a na dálku na sebe navzájem nadávají). Konvenčnímu procesu kromě nedostatku mezioborové spolupráce vytýkám také neefektivitu. Například připomínky ke grafice a její globální změny se v dnešních grafických editorech zapracovávají pomalu a složitě.

Z pohledu frontendisty mně na konvenčním procesu také vadí, že se takto vznikající weby do svého přirozeného prostředí – prohlížeče – dostanou příliš pozdě. U designérů a grafiků, ale často už i v krocích před nimi padají rozhodnutí, která nejsou otestovaná prohlížečem a přizpůsobená technologickým možnostem. Kodér pak už jen nadává – však to znáte.

Podívejme se teď na můj postup. Je specifický a v běžném webovém studiu se asi jen tak neujme. Ale není dobrého nebo špatného postupu. Důležitý je vždy výsledek: Jak funguje výsledný produkt, kolik času vám proces zabral a zda pro vás bylo příjemné jím procházet. Následující postup práce je navíc dost jednoduchý na to, aby jej mohli převzít začátečníci. A profesionály třeba v lecčems inspiruje.


## Tři a tři kroky: proces návrhu uživatelského rozhraní

Vytvoříme dokumentovou základnu, pak procházíme jednotlivé komponenty a pomocí skicování, prototypování či jiných vhodných nástrojů je navrhujeme. Potom nebo mezitím můžeme vymyslet rozvržení celé stránky.


### Krok 1: Dokumentová základna

Obsah vložíme do prohlížeče a vyznačíme jej sémantickými HTML značkami. Dostaneme základní, dokumentovou vrstvu stavby webu.

Dále připravíme vizuální design společný pro celý web. Vybereme písma, barvy, stupně velikosti, styl grafiky ikon, ale i dostatečně robustní technickou základnu. Podrobně se dokumentu věnuji [ve třetí kapitole](kap-dokumet.md).


### Krok 2: Komponenty

Komponentu zde berte jako menší nebo větší součást rozhraní webu. Od tlačítka a formulářového pole až po komplexnější skupiny, jako je záložková navigace nebo patička webu. Proces tady ještě rozdělím na tři kroky. Obvykle u mě probíhá takto:

1. *Skicování* 
Rychlý brainstorming nad možnostmi řešení s tužkou, fixy a papírem.
2. *Prototypování*  
Převedení předvybraného řešení do formy testovatelné v prohlížeči. Nad HTML prototypy obvykle dále iteruji a vybrušuji je až do finální podoby.
3. *Aplikace grafického stylu*  
Ten už máme připravený od dokumentové základny. 

Asi z toho vidíte, že proces návrhu a implementace komponent uživatelského rozhraní zabere nejvíce času. O komponentách píšu [v osmé kapitole](kap-ui-proces.md).


### Krok 3: Rozvržení webu

Už během přípravy dokumentové základny a komponent je vhodné vymýšlet systém pro layout webu. Jeho implementací se zabývám [v deváté kapitole](kap-layout.md).


## Proč to v knížce ukazuji právě takto?

Hlavně proto, že se na tom dobře ukazují principy responzivního designu. A že to nevyžaduje složité nástroje a je to vhodné pro začátečníky. Ale řeknu vám i další důvody.

### Rozhraní se brzy dostane do prohlížeče

Výstupy z Photoshopu mohou být dokonalé. Dokonalé a iluzorní. Jak říká klasik: „Péesdéčka“ vypadají přesně tak, jak web *nikdy* vypadat nebude. 

Není to jen proto, že prohlížeče vykreslují jinak. Ve statickém kreslicím nástroji neodzkoušíte responzivitu, interakce, animace a další rozměry webového média. Proto může být velmi obohacující dostat web do prohlížeče už v raných fázích projektu. A už z něj neodcházet.

### Komponenty a znovupoužitelnost

To, že jsme ve webdesignu začali pracovat se stránkami jako nejmenšími prvky, ze kterých skládáme weby, je omyl, který nás bude ještě dlouho mrzet. Stránky jsou prostě pořád příliš komplexní entity na to, aby je bylo možné navrhnout i implementovat dostatečně kvalitně a efektivně.

Neměli bychom navrhovat stránky, ale systémy komponent. Znovu použitelných komponent. Ze „stránkových“ výstupů grafických programů není možné systém vyčíst, i kdyby tam byl. Obvykle tam ale ani žádný není. Systém znovu použitelných komponent pro každý větší web by ovšem šetřil čas i peníze všem.


### Krátké iterace, ne vodopád

Spolupráce designéra a kodéra je obvykle velmi neefektivní. Designér dlouho pracuje na návrzích obsahujících unikátní stránky webu. Provádění změn ve Photoshopu nebo Sketchi ke všemu není nijak příjemné. Kodér je pak zase dlouho převádí do HTML, CSS a Javascriptu.

Je to vodopádový proces, známý z klasických výrobních linek, kde bylo potřeba v každé fázi produkt dokonale vybrousit, aby do té následující vplul bez újmy. Digitální médium ovšem kodérům i designérům nabízí možnost pracovat společně, na menších celcích, než jsou stránky, v kratších iteracích a rychleji. Škoda, že toho tak málo využíváme.

### Nepotřebujete k tomu složité nástroje

Stačí vám prohlížeč, editor kódu, tužka, papír – a hlava. Jedna z cílových skupin knihy jsou začátečníci, ale ani profíky nechci zbytečně zatěžovat  prototypovacími nebo návrhářskými nástroji, které třeba nemusejí používat.


## Kde se to hodí a kde ne?

Uvedené workflow je ovšem náročné na intenzitu mezioborové spolupráce a čas. Myslím, že se hodí pro všechny, kteří zvládnou kódovat a alespoň trochu přitom myslet designérsky. Použil bych jej ve všech podoborech webdesignu, které nejsou závislé na „prodeji PSD“. Proces nebo jeho prvky je možné využít při tvorbě webových aplikací nebo během dlouhodobé práce na produktu. 

U klientské, agenturní práce si jej zatím neumím představit. U většiny zde zapadajících projektů nás čeká ohromný kus práce: Vysvětlit klientům, že to, za co platí, není pár krásných obrázků z Photoshopu. Že by měli chtít platit za systémy komponent. A že weby jsou doma v prohlížečích.


## Zdroje

Pokud by vás téma alternativních pracovních postupů zaujalo, věnujte svou pozornost následujícím odkazům.

- *Přednáška Stephena Haye „Responsive Design Workflow“*   
  Stephen Hay je pro mě asi nejzajímavější zdroj procesů pro tvorbu responzivních webů. Vydal i stejnojmennou knížku. [youtu.be/6e3m9qRj67o](https://youtu.be/6e3m9qRj67o)
- *Přednáška Ryana Singera „Designing from start to finish“*  
  Jako mnohé z vás, i mě velmi inspirovaly procesy v Basecamp.com (dříve 37signals). [vrdl.in/singer](https://www.webexpo.net/prague2017/talk/designing-from-start-to-finish/)
- *Můj text „Design webů v prohlížeči“*  
  Přepis přednášky z WebExpo 2015. Obsahuje zde uvedený postup, aplikovaný při redesignu e-shopu VašeČočky.cz. [vrdl.cz/b/38-design-v-prohlizeci](http://www.vzhurudolu.cz/blog/38-design-v-prohlizeci)
- *Kniha Brada Frosta „Atomic Design“*  
  V textu, který právě čtete, nezvládnu jít takhle do hloubky, ale systémy designu mají ve webdesignu velkou budoucnost, věřte mi. [atomicdesign.bradfrost.com](http://atomicdesign.bradfrost.com/)


Tím se dostáváme k ukázkovému příkladu, kterým se v knize budeme zabývat. Představíme si jej tím, že si pro něj sestavíme UCD Canvas.
