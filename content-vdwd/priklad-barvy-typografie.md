# Příklad: Barvy, písma a grafický styl

## Barevné schéma pro odlišení od konkurence

Pro e-shop potřebujeme alespoň tři základní barvy: 

- *Neutrální* pro text a bezvýrazné prvky uživatelského rozhraní.
- *Primární* pro aktivní prvky, hlavně primární výzvy k akci. Tahle barvy by měla být výrazně odlišná od té neutrální.
- *Doplňková* barva se nám bude hodit pro zvýraznění komunikujících elementů jako jsou informativní a chybová hlášení. 

Z výběru barevného schématu pro zjednodušení nebudeme dělat vědu, i když to samozřejmě také věda je. Měli bychom myslet na cílovou skupinu – v našem případě ženy z velkých měst – a samozřejmě do barev nějak promítnout tématiku eshopu. Mimochodem, dobrý úvod do problematiky barev je v knize Petra Staníčka „Dobrý designér“. [pixy.cz/kniha-dobrydesigner](http://pixy.cz/kniha-dobrydesigner/)

Jak už jsem zmiňoval, pro zjednodušení si pomůžeme databázemi barevných schémat. Hledáme barevné schéma se třemi a více barvami, které ladí s ženskou cílovou skupinou. A také nás výrazně odlišují od konkurence, která vždy spoléhá na zelené asociace s lesem. ForestKid.cz tedy jako uniforma hajného vypadat nebude. 

![Barevné schéma pro příklad](dist/images/original/vdwd/priklad-barvy.jpg)

*Obrázek: Vybrané barevné schéma. Úplně vpravo je neutrální tmavě modrá a nalevo od ní její dva odstíny. Primární barva je „infračervená“ zcela nalevo. Oranžová vedle ní je pak ona doplňková pro komunikující elementy. [coolors.co](https://coolors.co/ef476f-ffd166-06d6a0-118ab2-073b4c)*

## Vybereme písmo: jedno charakteristické a druhé chlebové 

Při výběru typografie opět nejprve zvážíme pro jaké účely budeme písmo potřebovat. V našem případě to zjednodušeně obnáší logo firmy a pak elementy webu: nadpisy, delší texty a navigační prvky uživatelské rozhraní. Vážíme samozřejmě i vhodnost písem pro další média, hlavně tisk.

V době webových fontů není vkládání vlastních písem a jejich kombinace problematická. O technických aspektech píšu v ebooku „Vzhůru do CSS3“ nebo stručněji na Vzhůru dolů. [vrdl.cz/prirucka/css3-font-face](http://www.vzhurudolu.cz/prirucka/css3-font-face)

Problém je kombinovat písma *vhodně*. Tedy tak, aby spolu ladila a zároveň charakterem a nezaměnitelností vytvářela dostatečný kontrast. Jak také ale uvádím v části o [rychlosti načítání](rychlost-nacitani-proc.md), každý řez písma znamená nezanedbatelný úkol k řešení. Proto je nanejvýš vhodné s počtem písem a jejich řezů šetřit.

Osobně výběr obvykle začínám buď od kvalitního systémového písma, ke kterému hledám do páru doplňkové písmo. Systémový font nepředstavuje žádnou datovou zátěž, ale jak už jsem zmínil, široce dostupných systémových písem je opravdu málo. Druhá možnost je najít výrazné a neobvyklé *značkové* písmo a k němu do páru hledat písmo *chlebové*, pro vysázení textů a komponent rozhraní.

Tvář našemu eshopu chci dát právě výrazným písmem, proto padla volba na *Yeseva One*. Je nepřehlédnutelné a dle názoru autora výrazně ženské. Písmo pro eshop s cílovou skupinou maminek jako dělané. Yes, Eva! [fonts.google.com/specimen/Yeseva+One](https://fonts.google.com/specimen/Yeseva+One)

Zbývá nám písmo pro texty a rozhraní. Pro delší texty, které na webu mít jistě budeme (vzpomeňte na plánovaný blog) je vhodnější patkové písmo. Jenže to by pak znamenalo hledat třetí rodinu pro uživatelské rozhraní, kde se patky nehodí kvůli prostorové neúspornosti. Vybraný *PT Sans* je naopak velmi úsporný, taková méně velkorysá Verdana. A má hezkou kurzívu, kterou budeme spolu s tučným řezem potřebovat v delších textech. [fonts.google.com/specimen/PT+Sans](https://fonts.google.com/specimen/PT+Sans)

![Typografie pro příklad](dist/images/original/vdwd/priklad-barvy.jpg)

*Obrázek: vybraná písma Yeseva One a PT Sans.*

Přidáno do našeho projektu to vypadá jako v následujícím CodePenu. [cdpn.io/e/XpbPmm](http://codepen.io/machal/pen/XpbPmm?editors=1100).

## Grafický styl: minimalistický s jednoduchými linkami

Vybrali jsme poměrně výrazný barevný i typografický styl. Navíc si pro náš příklad můžeme dovolit předpoklad, že dokážeme zajistit kvalitní obrazový obsah. E-shop je navíc z principu užitková aplikace. Ikony, tlačítka a další doplňkové grafické elementy by proto neměly poutat příliš pozornosti. Měly by doladit atmosféru a moc nekřičet.

Pro vyhledání grafického stylu použijeme Iconfinder. Hledáme minimalistický styl, dvoubarevné ikonky s obrysem. Nacházíme sady Maxe Gribojedova. [iconfinder.com/enotmaks](https://www.iconfinder.com/enotmaks)

Některé z nich pro naše potřeby tedy zakoupíme a barevně upravíme.

![Ikony pro příklad](dist/images/original/vdwd/priklad-ikony.jpg)

*Obrázek: Upravené ikony Maxe Gribojedova, které využijeme pro komunikaci benefitů e-shopu, ale i další účely.*

