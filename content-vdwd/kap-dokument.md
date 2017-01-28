<p class="new-page" markdown="1">
![Kapitola 3](dist/images/original/numbers/003.jpg)
</p>

# Design dokumentu

„Dokumentu?! V době, kdy prakticky vše co běží v prohlížeči je skoro vždy aplikace a ne dokument? V době složitých uživatelských rozhraní? V době javascriptových webových aplikací, kdy v HTML zdrojáku skoro nic není?“ mohli byste namítnout. Jenže já bych s vámi s dovolením nesouhlasil. 

Dokument je základ všeho co na webu stavíte.  

Blogy se vizuálně od dokumentů moc nevzdalují, eshopy už trochu více. Čistokrevné aplikace jako redakční systémy, různé kalkulačky nebo dashboardy už docela hodně.

Nic to ale nemění na tom, že někde dole, pod sebesložitějším rozhraním a sebepropracovanější javascriptovou aplikací *může* být prosté strukturované HTML se styly. Je to unikátní vlastnost webu, která mimojiné umožňuje zachovávat vynikající zpětnou i dopřednou kompatibilitu. 


## Technologicky je stavění na dokumentu stabilnější

Samozřejmě, některé webové aplikace je neefektivní na HTML dokumentu stavět. Současný technologický stav webdesignu to také nečiní efektivním. Serverová rozšíření frontendových frameworků jako je Angular nebo React nejsou ve webových týmech moc časté a taky jsou prostě příliš čerstvé.

Velmi často je ale stavění na dokumentu výhodné. A to hned z několika důvodů:

1. **Kompatibilita a náhradní řešení.** Selže javascriptová aplikační vrstva? I ten nejexotičtější prohlížeč vám stále zobrazí stylovaný HTML dokument. Podívejte se na přednášku „Enhance!“ od Jeremy Keithe. [vrdl.in/enhance](https://www.webexpo.cz/praha2015/prednaska/enhance/)
2. **Vyhledávače.** I přes to, že se Google v získávání informací o stránce z verze vygenerované Javascriptem stále zlepšuje, kvalitní HTML podklad je spolehlivější zdroj. Nemluvě o tom, že Seznam ke dni psaní textu o Javasriptu nic neví. Podívejte se na přednášku Jana Tichého „Vyhledávače a Javascript“. [youtu.be/kU_M1elyunw](https://youtu.be/kU_M1elyunw)
3. **Přístupnost.** Široká škatule, do které patří první dva body, ale také usnadnění přístupu hendikepovaným uživatelům. A pozor, nejsou to jen lidé s oční vadou nebo jiným fyzickým omezením. Hendikepovaná může být i zdravá dvacetiletá studentka, které nějaké rozšíření v prohlížeči zablokuje zrovna váš javascriptový soubor. Tohle je web, musíme se s tím smířit.



## Navrhujeme od obsahu, nikoliv od layoutu

Naprostá většina webů dnes vzniká v kreslícím nástroji jako je Photoshop. Otevřeme prázdný dokument, plochu jako ruzyňská přistávací dráha. Ta svádí k tomu, že první věc, kterou tam chceme udělat je rozvržení, layout. Až pak se přes komponenty rozhraní propracujeme k obsahu a jeho vlastnostem. Poznáváte se? Nedivím se, je to intuitivní proces, který vám nenápadně nadiktoval nástroj, který používáte. Já se s ním ale ztotožnit nedokážu.

Když jsem někdy před rokem 2000 dělal své první weby za peníze, zadání bylo jednoduché: vezmi tenhle tištěný katalog a převeď jej do HTML. Vzniklý web měl pevně dané rozměry a všelijak napodoboval vzhled katalogu. Webdesign byl v té době naprosto v područí tiskového designu. Responzivní design je ovšem zásadní emancipační vlnou. Teď už víme, že pracujeme na novém médiu. Médiu co nemá pevné rozměry. Proč tedy napodobovat procesy tiskařů a navrhovat nejprve layout? Hezky to popisuje Mark Boulton v blogpostu „A New Canon“. [markboulton.co.uk/journal/anewcanon](http://www.markboulton.co.uk/journal/anewcanon)

Pojďme to vzít naopak. Vyladit obsah, vymyslet typografii a grafický charakter. Pak teprve navrhnout komponenty typu navigace a až nám obsah začne přetékat z  Ruzyně, teprve pak jej zalomit layoutem?

Přesně takhle to budu ukazovat v knížce. 

Ostatně, stačí se podívat hned na první řádku HTML kódu. Mluví o typu *dokumentu*.

> `<!DOCTYPE html>` slouží jako důležitá připomínka toho, že i když navrhujete interakčně složité a dynamické rozhraní, stále prostě jen vkládáte obsah do okna prohlížeče.
 
Heydon Pickering v knize „Inclusive Design Patterns“.


## Jak to nacpat do agenturního workflow?

Vsadím levou botu, že byť jste dosud byli zvyklí pracovat jinak, některým z vás se postup práce ukazovaný v knížce zalíbí. A vsadím pravou, že budete narážet na železné zvyky v pracovních postupech vašeho týmu. 

Pokud pracujete sami a na vlastních projektech, budete to mít jednoduché. Co když ale děláte v týmu a ještě k tomu svou práci velmi brzy prezentujete klientům právě v podobě Photoshopové grafiky? Možná sami tušíte, že je to nesmyslný postup. Nezbude vám než v knize nastíněný proces zkoušet na menších projektech nebo částech projektů. 

A přitom samozřejmě vzdělávat kolegy, šéfy a klienty. To je velmi důležitá součást práce autorů v tak mladém médiu jako webový design je. Z toho pohledu jsou vaše argumentační schopnosti naprosto zásadní.

Ještě jeden odkaz než začneme. Pro vybroušení zde zmíňovaného procesu, ale také argumentace směrem k ostatním členům týmu nemůžu nedoporučit knihu Responsive Design Workflow od Stephna Haye. [responsivedesignworkflow.com](http://responsivedesignworkflow.com)




