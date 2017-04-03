# Základna jako první vrstva 

Vrstvení. Tak bych jedním slovem popsal svůj proces návrhu a implementace webových rozhraní. A základna je ta první z vrstev.

*TODO img*

*Základna obsahuje společné elementy grafického designu: barvy, typografii, velikostní stupnici, grafický styl a další prvky. Z nich pak vychází komponenty uživatelského rozhraní, obohacené o layout a chování.*

Proč zrovna takhle? Vrstvení totiž považuji za jednu ze základních (a skvělých)
vlastností média, kterému říkáme Web. Je to podstata fungování technologií a technologie dávají mantinely. Stavění od základny je fajn ještě z jednoho důvodu. Umožní nám rozfázovat proces návrhu tak, abychom se nezabývali přiliš mnoha problémy najednout.

Vezmeme to postupně. Nejdřív k tomu technologickému pozadí.

## Web je vrstvený z podstaty

To, co vidíte na povrchu, je možné jen díky správnému fungování skrytých vrstev. Technicky řečeno: zobrazení HTML stránky vyžaduje URL adresu, která vyžaduje HTTP protokol, který je zase postavený na vrstvě TCP/IP.

My ale tak hluboko nepůjdeme. Potřebujete znát hlavně vrstvení podle tří hlavních technologií pro tvorbu webu: HTML, CSS, Javascript.

*TODO img*

*HTML slouží k vyznačení toho nejdůležitějšího: obsahu, jeho struktury a významu. CSS nastavuje vzhled a Javascript zase definuje chování stránky.*

### Rozšiřuje to kompatibilitu a možnosti náhradních řešení

Je to skvěle vymyšleno. Když selže Javascript, zobrazí se stylovaný obsah. A když selže i CSS, dostanete alespoň obsah. Vymyšlené to je dobře i z pohledu kompatibility. I ten nejexotičtější nebo prastarý prohlížeč vám při dodržení správného postupu zobrazí strukturovaný obsah. Jeremy Keith takto na WebExpo 2015 citoval Jake Archibalda:

> Když selže výtah, je nepoužitelný. Když ale selžou jezdící schody, stanou se z nich prostě schody. Měli bychom budovat jezdící schody, ne výtahy.

Jeremyho přednáška „Enhance!“ je dostupná online. [vrdl.in/enhance](https://www.webexpo.cz/praha2015/prednaska/enhance/)

### Je to výhodnější pro indexování vyhledávači

I přes to, že se Google v získávání informací o stránce z verze vygenerované Javascriptem stále zlepšuje, kvalitní HTML podklad je spolehlivější zdroj. Nemluvě o tom, že Seznam ke dni psaní neumí obsah generovaný Javascriptem indexovat. Podívejte se na přednášku Jana Tichého „Vyhledávače a Javascript“. [youtu.be/kU_M1elyunw](https://youtu.be/kU_M1elyunw)


### Zpřístupňuje to obsah širší cílové skupině

Přístupnost. Široká škatule, do které patří první i kompatibilita a vyhledávače, ale také usnadnění přístupu hendikepovaným uživatelům. A pozor, nejsou to jen lidé s oční vadou nebo jiným fyzickým omezením. Hendikepovaná může být i zdravá dvacetiletá studentka, které některé rozšíření v prohlížeči zablokuje zrovna váš javascriptový soubor. Tohle je web, takové věci se stávají běžně.

Web má dokument v DNA, ať se nám to líbí nebo ne. Vznikl přeci jako síť vzájemně provázaných dokumentů. Ostatně – někdy se stačí podívat hned na první řádku HTML kódu. Mluví o typu *dokumentu*. Heydon Pickering v knize „Inclusive Design Patterns“ říká:

> `<!DOCTYPE html>` slouží jako důležitá připomínka toho, že i když navrhujete interakčně složité a dynamické rozhraní, stále prostě jen vkládáte obsah do okna prohlížeče.

### A co javascriptové aplikace?

Některé webové aplikace na přítomnost Javascriptu plně spoléhají. V HTML kódu pak často bývá jen odkaz na skript. Až ten obstarává vygenerování obsahu a stylů. Může být a někdy to skoro jinak nejde. Jen je dobré znát nevýhody řešení: horší indexování vyhledávači, variabilitu náhradních řešení a celkovou přístupnost obsahu. 

### Kaskádové (a vrstvené) CSS

Pokud má Web vrstvení v DNA, pak CSS je takový malý vrstvící maniak. Pozor na něj. Následuje nenápadný (a pro kodéry nudný) kousek kódu, který ale dost přesně popisuje důvody, proč vás s těmi vrstvami tak otravuji:

```css
/* Základna */
html     { color: navy  }
table    { margin-bottom: 1em }

/* Komponenta */
.table     { font-size: 80% }
.table-bg  { background: ivory }
```

Pro celý web si barvu písma nastavíme námořnickou modř. Všem tabulkám pak v základně spodní vnější okraj na velikost písma. Tabulky mimochodem mezitím přebraly styl předchozího písma.  V další vrstvě, v komponentách, pak konkrétním skupinám tabulek pojmenovaným `.table` ještě zmenšujeme výchozí velikost písma.

Je to úspornější a efektivnější způsob práce než v případě alternativu, kterou by mohl zvolit kodér bez jasně daných pravidel pro základnu stylu webu:

```css
/* Špatně: komponenty bez společné základny */

.table { 
  color: navy; 
  font-size: 80%; 
  margin-bottom: 1em; 
}

.table-bg  { 
  color: navy; 
  font-size: 80%; 
  margin-bottom: 1em; 
  background: ivory; 
}
```

I když bude výsledek stejný jako v předchozí ukázce, kodér bude z takového řešení brzy nešťastný. Špatně se bude globálně měnit, špatně se bude číst a zpětně upravovat. Ve výsledku bude jen náchylnější k chybám a pomalejší pro práci.

Podobná řešení často dělají kodéři bez jasně definované struktury vizuálního stylu. Designéři jim mohou velmi pomoci, když budou pracovat systémem podobným tomu, který zde ukazuji. 



## Pro designéry: navrhujeme od obsahu, nikoliv od layoutu

Asi většina webů dnes vzniká v kreslícím nástroji jako je Photoshop nebo Sketch. Grafici si otevřou prázdný dokument, plochu jako ruzyňská přistávací dráha. 

Ta svádí k tomu, že první věc, kterou tam udělají, je rozvržení. Layout. Až pak se přes komponenty rozhraní propracují k obsahu a jeho vlastnostem. Poznáváte se? Nedivím se, je to intuitivní proces, který vám nenápadně nadiktoval nástroj, který používáte. 

Když jsem někdy před rokem 2000 dělal své první weby za peníze, zadání bylo jednoduché: vezmi tenhle tištěný katalog a převeď jej do HTML. Vzniklý web měl pevně dané rozměry a všelijak napodoboval vzhled katalogu, který jsem měl položený vedle monitoru s rozlišením 800 na 600 pixelů. Webdesign byl v té době naprosto v područí tiskového designu. 

Responzivní design je ovšem zásadní emancipační vlnou. Teď už víme, že pracujeme na novém médiu. Médiu, které nemá pevné rozměry. Proč tedy napodobovat procesy tiskařů a navrhovat nejprve layout? 

Layout má vznikat až z potřeb obsahu, vycházet z dokumentu. Pojďme to v knížce vzít právě tímto postupem. Vyladit obsah, vymyslet typografii a grafický charakter. Pak teprve navrhnout komponenty typu navigace a až nám obsah začne přetékat z Ruzyně, teprve pak jej zalomit layoutem.


