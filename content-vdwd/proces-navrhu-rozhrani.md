# Tři a tři kroky: proces návrhu uživatelského rozhraní

Už víte, že „Vzhůru do (responzivního) webdesignu“ je hlavně o návrhu a imlementaci webového uživatelského rozhraní. Teď přišel čas říct, jaký zde používám pracovní postup.


## Krok 1: Dokumentová základna

Připravíme si vizuální design společný pro celý web. Vybereme písma, barvy, stupně velikosti, styl grafiky ikon, ale i dostatečně robustní technickou základnu. Podrobně se dokumentu věnuji [ve třetí kapitole](kap-dokumet.md).


## Krok 2: Komponenty

Co je to ta *komponenta*? Menší nebo větší součástka rozhraní webu. Od tlačítka a formulářového pole až po komplexnější skupiny jako je záložková navigace nebo patička webu. Proces tady ještě rozdělím na tři kroky. Obvykle to u mě probíhá takto:

- *Skicování.* Rychlý předvýběr řešení. 
- *HTML prototypy.* Převedení předvybraného řešení do formy testovatelné v prohlížeči. Nad HTML prototypy dále iteruji a vybrušuji je. 
- *Aplikace grafického stylu* webu, připraveného už v dokumentové základně, na komponentu. 

Asi z toho vidíte, že proces návrhu a implementace komponent uživatelského rozhraní zabere nejvíce času. O komponentách píšu [v kapitole 8](kap-ui-proces.md).


## Krok 3: Rozvržení webu

Už během přípravy dokumentové základny a komponent je vhodné vymýšlet systém pro layout webu. Jeho implementací se zabývám [v kapitole o 9](kap-layout.md).

## Alternativní pracovní postupy

I tento můj proces se mění podle potřeby. Řeknu dva příklady. Když je třeba úkol jednoduchý, vynechávám skicování. Někdy se zase pro layout webu hodí využít hotovou knihovnu a tak je rozvržení vymyšlené dřív než vizuální design v dokumentové základně.

Většina webařů asi pracuje konvečním způsobem: načrtnou se drátěné modely (wireframy), pak vše grafik nakreslí v Photoshopu, kodér nakóduje šablony a programátor naprogramuje funkční část. [V osmé kapitole](kap-ui-proces.md) zmíním některé z nevýhod konvenčních procesů.

Teď už k našemu fiktivního i Pro potřeby projektu, který za chvíli otevřeme se nám pak bude hodit nástroj, který průzkum umí shrnout na jeden list papíru.
