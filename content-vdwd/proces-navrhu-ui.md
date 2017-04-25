# Proces návrhu uživatelského rozhraní

V knize a na příkladu ukazuji proces tvorby webů, o kterém by mnozí profesionální kolegové řekli, že je „exotický“. Nevyužívám nástroje pro tvorbu předběžných návrhů webů, skoro neotevírám Photoshop a jiné kreslící programy. Velkou část práce dělám přímo v prohlížeči. Pojďme s říct, jak přesně budeme v knize postupovat a proč vlastně takto specificky.

V procesu návrhu a implementace uživatelského rozhraní se budeme pohybovat v části „Návrh a realizace“, který znáte z předchozí podkapitoly [o základech procesu tvorby webu](zaklady-procesu.md).  

Navazujeme tedy na kolečko „Průzkumu a definice“. Některé výstupy z tého fáze jsem si shrnuli [do User Centered Design Canvasu](design-canvas.md). Dále bychom z ní dostali například přípravu obsahu pro  web, návrh jeho informační architektury, uživatelské scénáře, analýzu klíčových slov a další materiály. 


## Jak to dělají jinde?

Nejobvyklejší proces tvorby rozhraní v dnešních webařských týmech vypadá asi takto:

1. Načrtnou se wireframy
2. Nakreslí se grafika
3. Nakóduje se to

Každou funkci obvykle zastává jiný člověk. Často se jednotliví aktéři ani nepotkají (a na dálku na sebe navzájem nadávají). Tomuto konvenčnímu procesu kromě nedostatku mezioborové spolupráce vytýkám také neefektivitu a z pohledu frontendisty také to, že se takto vzniklé weby do svého přirozeného prostředí – prohlížeče – dostanou příliš pozdě. 

Podívejme se teď na můj postup. Je specifický a v běžném webovém studiu se asi jen tak neujme. Ale není dobrého nebo špatného postupu. Důležitý je vždy výsledek: Jak funguje výsledný produkt, kolik času vám proces zabral a zda pro vás bylo příjemné jej prožít. Mé postupy práce jsou ovšem dost jednoduché na to, aby je mohli převzít začátečníci. A profesionály třeba v lecčems inspirují.


## Tři a tři kroky: proces návrhu uživatelského rozhraní

Vytvoříme dokumentovou základnu, pak procházíme jednotlivé komponenty a pomocí skicování, protopování či jiných vhodných nástrojů je navrhujeme. Potom nebo mezitím můžeme navrhnout rozvržení celé stránky.


### Krok 1: Dokumentová základna

Obsah vložíme do prohlížeče, vyznačíme jej sémantickými HTML značkami. Dostaneme základní, dokumentovou vrstvu stavby webu.

Dále připravíme vizuální design společný pro celý web. Vybereme písma, barvy, stupně velikosti, styl grafiky ikon, ale i dostatečně robustní technickou základnu. Podrobně se dokumentu věnuji [ve třetí kapitole](kap-dokumet.md).


### Krok 2: Komponenty

Co je to ta *komponenta*? Menší nebo větší součástka rozhraní webu. Od tlačítka a formulářového pole až po komplexnější skupiny jako je záložková navigace nebo patička webu. Proces tady ještě rozdělím na tři kroky. Obvykle to u mě probíhá takto:

1. *Skicování* 
   Rychlý brainstorming nad možnostmi řešení. 
2. *Prototypování* 
   Převedení předvybraného řešení do formy testovatelné v prohlížeči. Nad HTML prototypy dále iteruji a vybrušuji je. 
3. *Aplikace grafického stylu* 
   Ten už máme připravený od dokumentové základny. 

Asi z toho vidíte, že proces návrhu a implementace komponent uživatelského rozhraní zabere nejvíce času. O komponentách píšu [v kapitole 8](kap-ui-proces.md).


### Krok 3: Rozvržení webu

Už během přípravy dokumentové základny a komponent je vhodné vymýšlet systém pro layout webu. Jeho implementací se zabývám [v kapitole o 9](kap-layout.md).


## Proč to v knížce ukazuji právě takto?

Protože je to jednoduché a hezky to ukazuje jeden z hlavních principů tvorby vizuálního webového rozhraní – *vrstvení*.

### Je to rychle v prohlížeči

Výstupy z Photoshopu mohou být dokonalé. Dokonalé a iluzorní. Jak říká klasik: „Péesdéčka“ vypadají přesně tak jak web *nikdy* vypadat nebude. Není to jen proto, že prohlížeče vykreslují jinak. Ve statickém kreslícím nástroji neodzkoušíte responzivitu, interakce, animace a další rozměry webového média. Proto může být velmi obohacující dostat web do prohlížeče už v ranných fázích projektu a už z něj neodcházet.

### Je to zaměřené na komponenty a znovupoužitelnost

To, že jsme ve webdesignu začali pracovat se stránkami jako nejmenšími prvky, ze kterých skládáme weby, je omyl, který nás bude ještě dlouho mrzet. Stránky jsou prostě pořád moc komplexní entity, aby je bylo možné efektivně navrhnout i implementovat. 

Neměli bychom navrhovat stránky, ale systémy komponent. Znovupoužitelných komponent. Ze „stránkových“ výstupů grafických programů není možné systém vyčíst, i kdyby tam byl. Obvykle tam ale ani žádný není. Systém znovupoužitelných komponent by ovšem šetři čas i peníze všem.


### Je to zaměřeno na krátké iterace, ne na vodopád

Spolupráce designéra a kodéra je obvykle velmi neefektivní. Designér dlouho pracuje na unikátních stránkových návrzích. Kodér je pak dlouho převádí do HTML, CSS a Javascriptu. Je to vodopádový proces, známý z klasických výrobních linek, kde bylo potřeba každou fázi dokonale vybrousit, aby ta následující mohla pokračovat. Digitální médium ovšem kodérům i designérům nabízí možnost pracovat společně, v krátkých iteracích a rychleji.

### Nepotřebujete k tomu složité nástroje

Stačí vám prohlížeč, editor kódu, tužka, papír – a hlava. Jedna z cílových skupin knihy jsou začátečníci, ale ani profíky nechci zatěžovat komplexními prototypovacími nebo návrhářskými nástroji. 


## Kde se to hodí a kde ne?

Uvedené workflow je náročné na intenzitu mezioborové spolupráce a čas. Myslím, že se hodí pro všechny, kteří zvládnou kódovat a alespoň trochu přitom myslet designérsky. Použil bych jej ve všech podoborech webdesignu, které nejsou závislé na „prodeji PSD“. Jeho prvky je možné využít při tvorbě webových aplikací nebo práci na produktu. 

U klientské, agenturní práce si jej zatím neumím představit. U většiny zde lokalizovaných projektů nás čeká ohromný kus práce: Vysvětlit klientům, že to za co platí není pár krásných obrázků z Photoshopu, ale že webdesign je jako obor daleko komplexnější.


## Zdroje

- *Přednáška Stephena Heye „Responsive Design Workflow“*   
  Stephen Hey je pro mě asi nejzajímavější zdroj procesů pro tvorbu responzivních webů. Kromě přednášky vydal i knížku. [youtu.be/6e3m9qRj67o](https://youtu.be/6e3m9qRj67o)
- *Přednáška Ryana Singera „Designing from start to finish“*  
  Jako mnohé z vás, i mě velmi inspirovaly i procesy v Basecamp.com (dříve 37signals). [vrdl.in/singer](https://www.webexpo.net/prague2017/talk/designing-from-start-to-finish/)
- *Můj text „Design webů v prohlížeči“*  
  Přepis přednášky z WebExpo 2015. Zde uvedený postup v praxi aplikovaný pře redesignu VašeČočky.cz. [vrdl.cz/blog/38-design-v-prohlizeci](http://www.vzhurudolu.cz/blog/38-design-v-prohlizeci)

