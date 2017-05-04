# Vrstvení

Tak bych jedním slovem popsal svůj proces návrhu a implementace webových rozhraní. První z vrstev je dokumentový základ.

<figure>
<img src="dist/images/original/vdwd/zakladna-komponenty.jpg" alt="">
<figcaption markdown="1">    
*Dokumentová vrstva obsahuje společné elementy grafického designu: barvy, typografii, velikostní stupnici, grafický styl a další prvky. Z nich pak vychází komponenty uživatelského rozhraní, obohacené o layout a chování*
</figcaption> 
</figure> 

Na obrázku vidíte opravdu jen nejzákladnější dělení. Dokument obsahuje mnoho dalších vrstev, což si ukážeme ke konci kapitoly. A komponenty? I ty můžeme dělit do mnoha hierarchií, bylo by to ale už nad rámec téhle knížky.

Musíme se ale shodnout na vrstvení. To totiž považuji za jednu ze základních (a skvělých!)
vlastností média, kterému říkáme web. Je to podstata fungování webových technologií a ty dávají mantinely designu. Stavění od základny je fajn ještě z jednoho důvodu – umožní nám rozfázovat proces návrhu tak, abychom se nezabývali příliš mnoha problémy najednou. A abychom nezačínali od konce.


## Web je vrstvený z podstaty

To, že vidíme nějakou webovou stránku, je možné jen díky správnému fungování skrytých vrstev. Technicky řečeno: zobrazení HTML stránky vyžaduje URL adresu, která vyžaduje HTTP protokol, který je zase postavený na vrstvě TCP/IP. 

My ale tak hluboko nepůjdeme. Potřebujeme znát hlavně vrstvení tří hlavních technologií pro tvorbu webu: HTML, CSS a Javascriptu.

<figure>
<img src="dist/images/original/vdwd/html-css-js.jpg" alt="">
<figcaption markdown="1">    
*HTML slouží k vyznačení toho nejdůležitějšího: obsahu, jeho struktury a významu. CSS nastavuje vzhled a Javascript zase definuje chování stránky*
</figcaption> 
</figure> 



Dobře, ale co s tím?

### Vrstvení zlepšuje kompatibilitu

Je to skvěle vymyšlené. Když selže Javascript, zobrazí se stylovaný obsah. A když selže i CSS, dostanete alespoň obsah. 

Nikdy nevíte, kdo a s jakým vybavením přijde zrovna na váš web. Rozdělení obsahu, vzhledu a chování je výhodné i z pohledu kompatibility. I ten nejexotičtější nebo prastarý prohlížeč vám při dodržení správného postupu zobrazí strukturovaný obsah. Jeremy Keith takto na WebExpo 2015 citoval Jake Archibalda:

> Když selže výtah, je nepoužitelný. Když ale selžou jezdící schody, stanou se z nich prostě schody. Měli bychom budovat jezdící schody, ne výtahy.

Jeremyho přednáška „Enhance!“, která se těmito principy detailně zabývá, je dostupná online. [vrdl.in/enhance](https://www.webexpo.cz/praha2015/prednaska/enhance/)

### Weby závislé na Javascriptu? Opatrně s tím

Některé webové aplikace na přítomnost Javascriptu plně spoléhají. V HTML kódu pak často bývá jen odkaz na skript a až ten obstarává vygenerování obsahu a stylů. Všechny vrstvy zajišťuje Javascript. I obsah a prezentace jsou na něm závislé. 

Někde je to z pohledu efektivity výhodné, někdy to dokonce ani jinak nejde. Jen je dobré znát nevýhody takového řešení. V Javascriptu stačí jedna chyba, a nefunguje vám žádná z vrstev. Jako další nepříjemný bonus „dostanete“ horší indexování vyhledávači a horší celkovou přístupnost obsahu. 


### Vrstvení je výhodnější pro indexování vyhledávači

I přes to, že se Google už o obsahu vygenerovaném Javascriptem leccos naučil, kvalitní HTML podklad je spolehlivější zdroj. Nemluvě o tom, že další roboti (třeba ten Seznamu nebo Facebooku) ke dni psaní neumí obsah generovaný Javascriptem indexovat vůbec. 

Pokud by vás zajímaly detaily o poněkud nedokonalém indexování javascriptových stránek, podívejte se na přednášku Jana Tichého „Vyhledávače a Javascript“. [youtu.be/kU_M1elyunw](https://youtu.be/kU_M1elyunw)


### Vrstvení zpřístupňuje obsah širší cílové skupině

Přístupnost. Široká škatule, do které patří i kompatibilita a vyhledávače, ale také usnadnění přístupu hendikepovaným uživatelům. A pozor, nejsou to jen lidé s oční vadou nebo jiným fyzickým omezením. Momentálně „hendikepovaná“ může být i zdravá dvacetiletá studentka, které některé rozšíření v prohlížeči zablokuje zrovna váš javascriptový soubor. Tohle je web – takové věci se stávají.

Studie prokázaly, že přístupný web se lépe používá *všem* návštěvníkům. Ať vás proto nenapadne přístupnost podceňovat. Nepřístupný nebo hůře přístupný web vás může připravit o celou řadu návštěvníků a možných zákazníků. 

Někdy se stačí podívat hned na první řádku HTML kódu. Mluví o typu *dokumentu*. Heydon Pickering v knize „Inclusive Design Patterns“ říká:

> `<!DOCTYPE html>` slouží jako důležitá připomínka toho, že i když navrhujete interakčně složité a dynamické rozhraní, stále prostě jen vkládáte obsah do okna prohlížeče.


## Vrstvené CSS: kodér potřebuje vidět systém, ne vnější znaky systému

Pokud má web vrstvení v DNA, pak CSS je takový malý vrstvící maniak. Pozor na něj. Následuje nenápadný kousek kódu, který ale dost přesně popisuje důvody, proč vás s těmi vrstvami tak otravuji. Mají totiž vliv na designérské procesy:

```css
/* Dokument */
html     { color: navy  }
table    { margin-bottom: 1em }

/* Komponenty */
.table     { font-size: 80% }
.table-bg  { background: ivory }
```

Pro celý web si jako barvu písma nastavíme námořnickou modř. Všem tabulkám pak v dokumentové základně nastavíme spodní vnější okraj na velikost písma. Tabulky mimochodem mezitím přebraly globální barvu písma.  V další vrstvě, v komponentách, pak konkrétním skupinám tabulek pojmenovaným `.table` ještě zmenšujeme výchozí velikost písma. A jejich variaci `.table-bg` ještě barvu dáme slonové kosti.

A všechny ty krásné vizuální vlastnosti pak bude mít komponenta zapsaná v HTML takto:

```html
<table class="table table-bg">
  …
</table>
```

Komponenta `table` prostě zdědila styly z dokumentu a je drobně upravená modifikací `table-bg`.

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

I když bude výsledek stejný jako v předchozí ukázce, kodér bude z takového řešení brzy nešťastný. Sami vidíte, že je tam spousta opakujícího se kódu.
Takové řešení se bude špatně měnit i špatně číst a zpětně upravovat. Ve výsledku bude jen náchylnější k chybám a bude zpomalovat práci.

Kodér tedy potřebuje systém, a to systém vrstvený a skládaný. Dostane ho ale od designéra?


## Designéři, navrhujte od dokumentu, nikoliv od layoutu

Asi většina webů dnes vzniká v kreslicím nástroji, jako je Photoshop nebo Sketch. Grafici si otevřou prázdný dokument, plochu jako ruzyňská přistávací dráha…

A první věc, kterou tam udělají, je rozvržení. Layout. Až pak se přes komponenty rozhraní propracují k obsahu a jeho vlastnostem. Poznáváte se? Nedivím se, je to intuitivní proces, který vám nenápadně nadiktoval nástroj, který používáte. 

Kodér, který pak výsledný soubor z Photoshopu zpracovává, musí namísto převodu grafického systému do CSS tupě přepisovat, co vidí. Do technologie převádí vnější znaky systému, ne systém samotný.

Zkusme si v knížce ukázat postup, který jde tvorbě vrstveného systému na ruku. Když už máme v příkladu vyladěný obsah, vybereme písma, barvy a celkový grafický charakter. Prostě vizuální základnu. Pak teprve navrhneme komponenty typu navigace, a až nám obsah začne přetékat „z Ruzyně“, teprve pak jej zalomíme layoutem.


