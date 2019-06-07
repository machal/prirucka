# Omezení složitosti webdesignu

_Webmaster obecný_ už dávno vymřel. V záplavě specialistek a specialistů na marketing, design, grafiku, frontendový a backendový vývoj, servery a kdovíco ještě je stále vzácnější najít někoho s přesahem do vedlejších oborů. A zcela nemožné je najít někoho, kdo rozumí všemu, a může tedy převzít odpovědnost za celek.

V posledním roce se Martin v roli poradce přes rychlost webů nachomýtl k několika nepěkným zásekům:

* Nasazení chatu u jednoho e-shopu způsobilo, že všechny stránky webu začaly stahovat o 0,8 MB dat více.
* E-shop stahoval 3 MB souborů s písmy, která má většina uživatelů už nainstalovaná v operačním systému.
* „Zapnutí“ rychlého protokolu HTTP/2 na webu korporace trvalo přes rok, na správné nastavení kešování souborů stále ještě čekáme.
* Nasazení řešení pro sběr e-mailů u většího e-shopu zhoršilo skóre rychlosti v nástroji Lighthouse o 20 bodů. Řešení třetí strany například stahovalo čtyři soubory s webovými fonty, které pak na stránce nebyly použity.

A takto bychom mohli pokračovat. Ne vždy šlo o nekompetentnost zúčastněných. Prostě si většinou neuvědomili, na co všechno může mít jejich volba vliv. Anebo je organizační struktura týmu tvořícího web natolik složitá, že jim s tím nemohl nikdo pomoci.

Pokud by vás zajímaly detaily: O jednom z uvedených případů a o způsobech, jak podobným situacím předcházet, píše Martin v textu „Konzultujte vždy prosím nasazení nových komponent pro web s vývojáři (Případ FreshChat)“ na Vzhůru dolů. [vrdl.cz/b/123-freshchat](https://www.vzhurudolu.cz/blog/123-freshchat)

Problémy na straně rychlosti webu prostě často vznikají tím, že do detailního chápání technických i analytických aspektů rychlosti dohlédne jen velmi málo účastníků procesu jeho výroby.

Kvalitní týmy samozřejmě dokážou řešit rychlost i u běžných webů. Pravidelně měří, používají kvalitní nástroje, mají vzdělané vývojáře, designéry i marketéry… AMP rozhodně není jedinou možnou odpovědí na komplexitu webdesignu. Ve velké části týmů může ale pomoci.

Vzpomeňte si, co jsme psali o validaci AMP stránek. Nekontroluje se jen správnost kódu, ale také vliv na rychlost. Komponenty jsou navržené tak, aby fungovaly rychle. A žádné jiné používat nelze.

Hranice, ve kterých se zde pohybujete, snižují možnost, že něco uděláte špatně. Samozřejmě – i AMP stránku je možné v oblasti rychlosti pokazit, ale ne tak fatálně jako u běžných webů. Umístění na AMP Cache a přednačtení navíc většinu chyb odpustí.

„AMP je rychlý web pro blbý,“ komentoval to ostatně marketér Pavel Ungr v jedné naší diskuzi. Jasně – je to nadsázka, ale ve výsledku dost trefná.

Zůstaňme ještě chvíli v obecné rovině a podívejme se na další velký problém rychlosti dnešních webů: skripty třetích stran. Zejména pak analytické nástroje a reklama.
