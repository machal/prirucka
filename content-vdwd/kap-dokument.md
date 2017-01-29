# Design dokumentu

„Dokumentu?! V době, kdy prakticky skroo vše co běží v prohlížeči je aplikace a ne dokument? V době složitých uživatelských rozhraní?“ mohli byste namítnout. Jenže já bych s vámi s dovolením nesouhlasil. 

Dokument je základ všeho, co na webu stavíte.

Blogy se vizuálně od dokumentů moc nevzdalují, eshopy už trochu více. Čistokrevné aplikace jako redakční systémy, různé kalkulačky nebo dashboardy už docela hodně. To víte, protože jsme se tím do podrobna zabývali [v kapitole o webech a aplikacích](weby-vs-aplikace.md).

Nic to ale nemění na tom, že někde dole, pod velmi složitým rozhraním a komplexní javascriptovou aplikací *může* být prosté strukturované HTML se styly. Je to unikátní vlastnost Webu, která mimojiné umožňuje zachovávat vynikající zpětnou i dopřednou kompatibilitu. 

### Stavění na dokumentu je technologicky stabilnější

Samozřejmě, některé webové aplikace je neefektivní na statickém HTML dokumentu stavět. Současný technologický stav webdesignu to také nečiní efektivním. Serverová rozšíření frontendových frameworků jako je Angular nebo React nejsou ve webových týmech moc časté a taky jsou prostě příliš čerstvé.

Velmi často je ale stavění na dokumentu výhodné. A to hned z několika důvodů:

#### Rozšiřuje to kompatibilitu a možnosti náhradních řešení

Selže javascriptová aplikační vrstva? I ten nejexotičtější nebo prastarý prohlížeč vám stále zobrazí stylovaný HTML dokument. Podívejte se na přednášku „Enhance!“ od Jeremy Keithe. [vrdl.in/enhance](https://www.webexpo.cz/praha2015/prednaska/enhance/)

#### Je výhodnější pro indexování vyhledávači

I přes to, že se Google v získávání informací o stránce z verze vygenerované Javascriptem stále zlepšuje, kvalitní HTML podklad je spolehlivější zdroj. Nemluvě o tom, že Seznam ke dni psaní textu o Javasriptu nic neví. Podívejte se na přednášku Jana Tichého „Vyhledávače a Javascript“. [youtu.be/kU_M1elyunw](https://youtu.be/kU_M1elyunw)

#### Zpřístupňuje obsah širší cílové skupině

Přístupnost. Široká škatule, do které patří první i kompatibilita a vyhledávače, ale také usnadnění přístupu hendikepovaným uživatelům. A pozor, nejsou to jen lidé s oční vadou nebo jiným fyzickým omezením. Hendikepovaná může být i zdravá dvacetiletá studentka, které nějaké rozšíření v prohlížeči zablokuje zrovna váš javascriptový soubor. Tohle je web, takové věci se stávají běžně.


### Navrhujeme od obsahu, nikoliv od layoutu

Naprostá většina webů dnes vzniká v kreslícím nástroji jako je Photoshop. Grafici si otevřeou prázdný dokument, plochu jako ruzyňská přistávací dráha. 

Ta svádí k tomu, že první věc, kterou tam chcete udělat je rozvržení, layout. Až pak se přes komponenty rozhraní propracujeme k obsahu a jeho vlastnostem. Poznáváte se? Nedivím se, je to intuitivní proces, který vám nenápadně nadiktoval nástroj, který používáte. Já se s ním ale ztotožnit nedokážu.

Když jsem někdy před rokem 2000 dělal své první weby za peníze, zadání bylo jednoduché: vezmi tenhle tištěný katalog a převeď jej do HTML. Vzniklý web měl pevně dané rozměry a všelijak napodoboval vzhled tištěného výrobku. Webdesign byl v té době naprosto v područí tiskového designu. 

Responzivní design je ovšem zásadní emancipační vlnou. Teď už víme, že pracujeme na novém médiu. Médiu co nemá pevné rozměry. Proč tedy napodobovat procesy tiskařů a navrhovat nejprve layout? Layout má vznikat až z potřeb obsahu, vycházet z dokumentu. Hezky to popisuje Mark Boulton v blogpostu „A New Canon“. [markboulton.co.uk/journal/anewcanon](http://www.markboulton.co.uk/journal/anewcanon)

Pojďme to v knížce vzít naopak. Vyladit obsah, vymyslet typografii a grafický charakter. Pak teprve navrhnout komponenty typu navigace a až nám obsah začne přetékat z Ruzyně, teprve pak jej zalomit layoutem? 

Ostatně, stačí se podívat hned na první řádku HTML kódu. Mluví o typu *dokumentu*. Heydon Pickering v knize „Inclusive Design Patterns“ říká:

> `<!DOCTYPE html>` slouží jako důležitá připomínka toho, že i když navrhujete interakčně složité a dynamické rozhraní, stále prostě jen vkládáte obsah do okna prohlížeče.
 
Dobrá tedy, vezmeme to v této kapitole postupně. Začínajícím designérům a vývojářům nejprve sdělím nutné základy [grafického designu](graficky-design.md), zamyslíme nad [typografií](typografie.md) obecně, ale také dopady responzivního webdesignu na ni. Poprvé se v knize ponoříme do lehkých technikálií: od [jednotek](jednotky.md), které na webu můžeme používat, přes způsob jak postavit [dokumentovou základnu webu](dokument-nastroje.md). Na konci kapitoly bude náš milý e-shop mít jakýs takýs [grafický charakter](priklad-dokument.md). Těšíte se tak jako já?


