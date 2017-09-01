# Příklad: Barvy, písma a grafický styl

Teď chvilku prakticky. Vybereme barevné schéma a sadu písem.

## Barevné schéma pro odlišení od konkurence

Pro e-shop potřebujeme alespoň tři základní barvy: 

- *Neutrální* pro text a bezvýrazné prvky uživatelského rozhraní.
- *Primární* pro aktivní prvky, hlavně primární výzvy k akci. Tahle barva by měla být výrazně odlišná od té neutrální.
- *Doplňková* barva se nám bude hodit pro zvýraznění komunikujících elementů, jako jsou informativní a chybová hlášení. 

Z výběru barevného schématu pro zjednodušení nebudeme dělat vědu, přestože i barvy samozřejmě věda jsou. Měli bychom myslet na cílovou skupinu – v našem případě ženy z velkých měst – a samozřejmě do barev nějak promítnout tematiku e-shopu

Hledáme barevné schéma se třemi a více barvami, které ladí s ženskou cílovou skupinou. A také nás výrazně odlišují od konkurence, která vždy spoléhá na zelené asociace s lesem. ForestKid.cz tedy jako uniforma hajného vypadat nebude. 

<figure>
<img src="dist/images/original/vdwd/priklad-barvy.jpg" alt="">
<figcaption markdown="1">    
*Vybrané barevné schéma. [coolors.co](https://coolors.co/ef476f-ffd166-06d6a0-118ab2-073b4c)*
</figcaption> 
</figure> 



Jak vidíte z obrázku, barevné schéma je… hodně barevné:

- Zcela nalevo je „infračervená“, barva pro primární výzvy k akci.
- Druhá zleva je „žlutooranžová“, doplňková barva pro komunikující elementy, jako jsou informativní hlášení.
- Uprostřed je „karibsky zelená“, doplňková barva pro text, kterou můžeme použít například pro nadpisy sloupců tabulek.
- Následují dva odstíny modré neutrální barvy pro text a neaktivní prvky stránky. 


## Vybereme písmo: jedno charakteristické a druhé obsahové 

Při výběru typografie opět nejprve zvážíme, pro jaké účely budeme písmo potřebovat. V našem případě to zjednodušeně obnáší logo firmy a pak elementy webu: nadpisy, delší texty a navigační prvky uživatelského rozhraní. Posoudíme samozřejmě i vhodnost písem pro další média, hlavně tisk.

Osobně výběr obvykle začínám buď od kvalitního systémového písma, ke kterému hledám do páru doplňkové písmo. Systémový font nepředstavuje žádnou datovou zátěž, ale jak už jsem zmínil, široce dostupných systémových písem je opravdu málo. 

Druhá možnost je najít výrazné a neobvyklé *značkové* písmo a k němu do páru hledat písmo *obsahové*, pro vysázení textů a komponent rozhraní. Tvář našemu e-shopu chci dát právě výrazným písmem, proto padla volba na *Yeseva One*. Je nepřehlédnutelné a také „výrazně ženské“, jak píše jeho autor. Písmo pro e-shop s cílovou skupinou maminek jako dělané. Yes, Eva! [fonts.google.com/specimen/Yeseva+One](https://fonts.google.com/specimen/Yeseva+One)

Zbývá nám písmo pro texty a rozhraní. Pro delší texty, které na webu mít jistě budeme (vzpomeňte na plánovaný blog), je vhodnější patkové písmo. Jenže to by pak znamenalo hledat třetí rodinu pro uživatelské rozhraní, kde se patky nehodí kvůli prostorové neúspornosti. Vybraný *PT Sans* je naopak velmi úsporný, taková méně velkorysá Verdana. A má hezkou kurzívu, kterou budeme spolu s tučným řezem potřebovat v delších textech. [fonts.google.com/specimen/PT+Sans](https://fonts.google.com/specimen/PT+Sans)

<figure>
<img src="dist/images/original/vdwd/priklady-typografie.jpg" alt="">
<figcaption markdown="1">    
*Vybraná písma Yeseva One a PT Sans*
</figcaption> 
</figure> 

Přidáno do našeho projektu to vypadá jako v následujícím CodePenu. [cdpn.io/e/XpbPmm](https://codepen.io/machal/pen/XpbPmm?editors=1100)

## Grafický styl: minimalistický s jednoduchými linkami

Vybrali jsme poměrně výrazný barevný i typografický styl. Navíc si pro náš příklad můžeme dovolit předpoklad, že dokážeme zajistit kvalitní obrazový obsah. 

E-shop je navíc z principu užitková aplikace. Ikony, tlačítka a další doplňkové grafické elementy by proto neměly poutat příliš pozornosti. Měly by doladit atmosféru a moc nekřičet.

Pro vyhledání grafického stylu jsem využil Iconfinder. Hledal jsem minimalistický styl, dvoubarevné ikonky s obrysem. A našel sady Maxe Gribojedova. 

Některé z nich jsem tedy pro naše potřeby zakoupil a barevně upravil.

<figure>
<img src="dist/images/original/vdwd/priklad-ikony.jpg" alt="">
<figcaption markdown="1">    
*Upravené ikony Maxe Gribojedova, které využijeme pro komunikaci benefitů e-shopu. [iconfinder.com/enotmaks](https://www.iconfinder.com/enotmaks)*
</figcaption> 
</figure> 

Je to hotové. Teď se vrhneme na kódování. Musíme si předtím povědět, jak je to v responzivním webdesignu s CSS jednotkami.

