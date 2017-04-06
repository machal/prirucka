# Vrstvení

Tak bych jedním slovem popsal svůj proces návrhu a implementace webových rozhraní. První z vrstev je dokumentový základ.

![Dvě vrstvy: základna a komponenty](dist/images/vdwd/zakladna-komponenty.jpg)

*Základna obsahuje společné elementy grafického designu: barvy, typografii, velikostní stupnici, grafický styl a další prvky. Z nich pak vychází komponenty uživatelského rozhraní, obohacené o layout a chování.*

Proč zrovna takhle? Vrstvení totiž považuji za jednu ze základních (a skvělých)
vlastností média, kterému říkáme Web. Je to podstata fungování webových technologií a ty dávají mantinely designu. Stavění od základny je fajn ještě z jednoho důvodu. A pak – umožní nám rozfázovat proces návrhu tak, abychom se nezabývali přiliš mnoha problémy najednou.

Vezmeme to postupně. Nejdřív k tomu technologickému pozadí.


## Web je vrstvený z podstaty

To, co vidíte na povrchu, je možné jen díky správnému fungování skrytých vrstev. Technicky řečeno: zobrazení HTML stránky vyžaduje URL adresu, která vyžaduje HTTP protokol, který je zase postavený na vrstvě TCP/IP. 

My ale tak hluboko nepůjdeme. Potřebujete znát hlavně vrstvení tří hlavních technologií pro tvorbu webu: HTML, CSS a Javascriptu.

![HTML, CSS, Javascript](dist/images/vdwd/html-css-js.jpg)

*HTML slouží k vyznačení toho nejdůležitějšího: obsahu, jeho struktury a významu. CSS nastavuje vzhled a Javascript zase definuje chování stránky.*

Dobře, ale co s tím?

### Rozšiřuje to kompatibilitu a možnosti náhradních řešení

Je to skvěle vymyšleno. Když selže Javascript, zobrazí se stylovaný obsah. A když selže i CSS, dostanete alespoň obsah. 

Nikdy nevíte, kdo a s jakým vybavením přijde zrovna na váš web. Rozdělení obsahu, vzhledu a chování je výhodné i z pohledu kompatibility. I ten nejexotičtější nebo prastarý prohlížeč vám při dodržení správného postupu zobrazí strukturovaný obsah. Jeremy Keith takto na WebExpo 2015 citoval Jake Archibalda:

> Když selže výtah, je nepoužitelný. Když ale selžou jezdící schody, stanou se z nich prostě schody. Měli bychom budovat jezdící schody, ne výtahy.

Jeremyho přednáška „Enhance!“, která se těmito principy detailně zabývá, je dostupná online. [vrdl.in/enhance](https://www.webexpo.cz/praha2015/prednaska/enhance/)

### Je to výhodnější pro indexování vyhledávači

I přes to, že se Google už leccos o obsahu vygenerovaném Javascriptem ví docela dost, kvalitní HTML podklad je spolehlivější zdroj. Nemluvě o tom, že Seznam ke dni psaní neumí obsah generovaný Javascriptem indexovat vůbec. Pokud by vás zajímaly detaily, podívejte se na přednášku Jana Tichého „Vyhledávače a Javascript“. [youtu.be/kU_M1elyunw](https://youtu.be/kU_M1elyunw)


### Zpřístupňuje to obsah širší cílové skupině

Přístupnost. Široká škatule, do které patří první i kompatibilita a vyhledávače, ale také usnadnění přístupu hendikepovaným uživatelům. A pozor, nejsou to jen lidé s oční vadou nebo jiným fyzickým omezením. Momentálně „hendikepovaná“ může být i zdravá dvacetiletá studentka, které některé rozšíření v prohlížeči zablokuje zrovna váš javascriptový soubor. Tohle je web, takové věci se stávají.

Web má dokument v DNA, ať se nám to líbí nebo ne. Vznikl přeci jako síť vzájemně provázaných dokumentů. Ostatně – někdy se stačí podívat hned na první řádku HTML kódu. Mluví o typu *dokumentu*. Heydon Pickering v knize „Inclusive Design Patterns“ říká:

> `<!DOCTYPE html>` slouží jako důležitá připomínka toho, že i když navrhujete interakčně složité a dynamické rozhraní, stále prostě jen vkládáte obsah do okna prohlížeče.

### A co javascriptové aplikace?

Některé webové aplikace na přítomnost Javascriptu plně spoléhají. V HTML kódu pak často bývá jen odkaz na skript a až ten obstarává vygenerování obsahu a stylů. Může být a někdy to skoro jinak nejde. Jen je dobré znát nevýhody řešení: horší indexování vyhledávači, variabilitu náhradních řešení a celkovou přístupnost obsahu. 

### Kaskádové (a vrstvené) CSS

Pokud má Web vrstvení v DNA, pak CSS je takový malý vrstvící maniak. Pozor na něj. Následuje nenápadný (a pro kodéry nudný) kousek kódu, který ale dost přesně popisuje důvody, proč vás s těmi vrstvami tak otravuji. Mají totiž vliv na designérské procesy:

```css
/* Základna */
html     { color: navy  }
table    { margin-bottom: 1em }

/* Komponenta */
.table     { font-size: 80% }
.table-bg  { background: ivory }
```

Pro celý web si jako barvu písma nastavíme námořnickou modř. Všem tabulkám pak v základně spodní vnější okraj na velikost písma. Tabulky mimochodem mezitím přebraly globální barvu písma.  V další vrstvě, v komponentách, pak konkrétním skupinám tabulek pojmenovaným `.table` ještě zmenšujeme výchozí velikost písma. A jejich variaci `.table-bg` ještě barvu slonové kosti.

A všechny ty krásné vizuální vlastnosti pak bude mít komponenta zapsaná v HTML takto:

```html
<table class="table table-bg">
  …
</table>
```

Teď uvedu CSS kód, který by mohl napsat kodér bez jasně daných pravidel pro designérskou základnu webu:

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

I když bude výsledek stejný jako v předchozí ukázce, kodér bude z takového řešení brzy nešťastný. Špatně se mu bude globálně měnit, špatně se mu bude číst a zpětně upravovat. Ve výsledku bude jen náchylnější k chybám a pomalejší pro práci.

Podobná řešení často dělají kodéři bez jasně definované struktury vizuálního stylu. Designéři jim mohou velmi pomoci, když budou pracovat systémem podobným tomu, který zde ukazuji v dalších textech. A když ten systém předají kodérům.


## Designéři, navrhujte od obsahu, nikoliv od layoutu

Asi většina webů dnes vzniká v kreslícím nástroji jako je Photoshop nebo Sketch. Grafici si otevřou prázdný dokument, plochu jako ruzyňská přistávací dráha… 

A první věc, kterou tam udělají, je rozvržení. Layout. Až pak se přes komponenty rozhraní propracují k obsahu a jeho vlastnostem. Poznáváte se? Nedivím se, je to intuitivní proces, který vám nenápadně nadiktoval nástroj, který používáte. 

Kodér, který pak výsledný soubor z Photoshopu zpracovává, musí namísto převodu grafického systému do CSS tupě přepisovat co vidí. Do technologie převádí vnější znaky systému, ne systém samotný.

Zkusme si ukázat postup, který jde tvorbě vrstveného systému na ruku. Například layout můžeme nechat až na konec, jsou důležitější věci k řešení. Když už máme v příkladu vyladěný obsah, vybereme písma, barvy a celkový grafický charakter. Prostě vizuální základnu. Pak teprve navrhneme komponenty typu navigace a až nám obsah začne přetékat z Ruzyně, teprve pak jej zalomíme layoutem.


