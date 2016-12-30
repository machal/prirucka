# Prostředí dnešních webů: proč vlastně potřebujeme responzivní design?

Čím webdesign prochází a co jej ještě čeká? Podívejme se tady na změny v posledních pěti letech a pokusme se odhadnout co bude dál. 

Všechno se to točí kolem zařízení. Jasně, přišly mobily, ale to není vše. Začít tím ale musíme. Budeme se snad na weby dívat v televizích, hodinkách nebo ovládacím panelu ledničky?

## Mobily, jsou tady mobily

Proč promeškat příležitost ukázat graf s rostoucí návštěvností z mobilních zařízení? Jdeme na to.

![Podíl mobilů](dist/images/original/vdwd/statistika-mobily.png)

*Obrázek: Podíl mobilních prohlížečů na celkovém počtu zobrazení stránek. Zdroj: velké české weby měřené Gemius SA, gemiusTraffic,  Rankings.cz.*

Čísla z Rankings.cz ukazují více než pětinu podílu na shlédnutých stránkách velkých webů v ČR. Tam se mobily a tablety samozřejmě nezastaví. Za rok budou mít minimálně čtvrtinu a tak dále. Čísla ze Západu ukazují, že to půjde přes polovinu a dál, viz [statcounter.com](http://gs.statcounter.com/). Ale vy už dávno víte, že budoucnost je v mobilech, že ano?

## Pro péči o ty malé úplně zapomínáme na velké

Vlastně se, my webdesignéři, chováme jako správní rodiče. Pipláme se s těmi novými mrňavými chytrými telefony. Jenže jsme zapomněli, že z našich dalších dětí – desktopových monitorů – mezitím vyrostli pěkní čahouni. Nebo vlastně cvalíci, protože se nám roztáhli spíše do šířky.

* Na VzhůruDolů.cz mě v listopadu 2016 přišlo více 40 % návštěv s rozlišením 1920 a širším.
* Na webech cestovky Rekrea s běžnějších českou návštěvností evidujeme uživatelů cvalíkovitých monitorů kolem 20 %. Stejně jako z mobilů.

Nespokojte se s tím, že váš web je na velkých rozlišeních špatně čitelný kvůli nedostatečné velikosti písma nebo že rozhraní tvoří úzkou nudli uprostřed prázdné plochy okna prohlížeče.

## Vývoj: tablety klesají, hybridy rostou

Podle odhady agentury Gartner to vypadá, že minimálně do roku 2018 budou klesat prodeje tradičních notebooků a specializovaných desktopových počítačů. Stejně tak ale tabletů. Rostou jen prodeje chytrých telefonů a malých přenosných notebooků. [vrdl.in/807ya](http://www.gartner.com/newsroom/id/3468817)

Zvyšují se také prodeje hybridních notebooků, které je možné ovládat myší i dotykově. Mezi lety 2014 a 2015 o celých 70 procent. [vrdl.in/scx2m](http://www.gartner.com/newsroom/id/3077817)

## CSS pixel 

Mnozí webaři jsou vystrašení ohromnými rozlišení posledních modelů mobilů. Někdy až FullHD (1920×1080). Netrapme se tím. Prohlížeče pro nás hardwarové rozlišení přepočítávají do „CSS pixelů“. Podívejte se na obrázek.

![CSS Pixel](dist/images/original/vdwd/css-pixel.png)

*Obrázek: poměr mezi hardwarovými pixely udávanými výrobci a CSS pixely, se kterými pracují webový vývojáři u vybraných zařízení.*

Na Vzhůru dolů je pro zájemce více informací o CSS pixelu. [vrdl.cz/prirucka/css-pixel](http://www.vzhurudolu.cz/prirucka/css-pixel)

Zjednodušeně z toho vyplývá, že dekorativní grafiku bychom teď měli dělat ve vektorovém SVG a u fotografií zajistit pomocí techniky srcset/sizes dost variant pro to, aby si prohlížeč mohl vybrat. Více v kapitole o obrázcích.

## Úroda prohlížečů

Když vezmeme celý trh, mezi prohlížeči to vypadá takto: Chrome vede, Explorery verzí 10 a starší už téměř vymřely a hlavně – prohlížečů je dnes děsně moc. 

Na mobilech musíme počítat s těmito prohlížeči: 

* Google Chrome
* Mobile Safari (na iOS je toto jádro používáno i v Google Chrome)
* Dalšími Chromium odvozeninami jako je Samsung Internet.
* Dalšími menšími: Internet Explorerem nebo Edge na Windows Phone platformách nebo Operou Mobile. 

Sledujte své statistiky. Na Vzhůru dolů najdete aktuální čísla vycházející z Rankings.cz:  [vrdl.cz/prirucka/prohlizece](http://www.vzhurudolu.cz/prirucka/prohlizece)

## Zařízení z budoucnosti: co je po mobilech?

K internetu jsou prý už připojené i stromy v Amazonii, takže lednička s webovým prohlížečem by nás překvapovat neměla. Je to ale použitelné? 

Cítím krásnou příležitost se historicky ztrapnit a jdu tedy vývoj odhadnout jen podle svého nejlepšího vědomí. Na jakých zařízeních budou lidé používat prohlížeče a zobrazovat naše weby?

### Chytré hodiny: NE

Na některých platformách si neoficiální prohlížeče stáhnout můžete. Zkoušel jsem to, ale myslím že to je nepoužitelné a že se to neujme.

### Televize: NE

I pro vaši chytrou telku byste nejspíš nějaký ten prohlížeč sehnat dokázali. Jsem ale skeptický k ovládání na dálku. Budoucnost vidím v gestech a hlasovém ovládání a pro běžné webové stránky to nebude. Pro nativní aplikace dělané webovými technologiemi ale ano.

### Ledničky: NE  

Nenapadá mě rozumný případ využití. Doma už navíc máme tablety, proč si připlácet za další displej? Ale lednička s prohlížečem existuje, to ne že ne. [https://www.cnet.com/products/samsung-family-hub-refrigerator/](https://www.cnet.com/products/samsung-family-hub-refrigerator/)

### Herní konzole: ANO

Myslím konzole do ruky. To jsou jen převlečené chytré telefony.

### Auta: ANO

S rozmachem poloautomatického řízení poroste význam velkých dotykových obrazovek. Nejspíš v těch místech, kde teď v autě máte výstupy z ventilátorů. Číst si Blesk.cz v dopravní zácpě? Dává mi to dokonalý smysl. Jen doufejme, že ta auta budou fakt chytrá, aby zvládla řídit, protože nás od palubních displejů už nic neodtrhne. Už odzkoušeno v Tesla Motors. Podívejte se na jejich krásný prohlížeč. [vrdl.in/rlwn0](https://www.tesla.com/support/touchscreen-web-browser)

Na žádnou další velkou displejovou revoluci to tedy, přátelé, v nejbližších letech nevidím. Jedině, že by do toho ještě vstoupily pračky. Ale ne, dělám si legraci. Dotykové panely v autech jsou vlastně větší tablety a přenosné herní konzole zase chytré telefony. 

Responzivní weby a aplikace se spíše naučí lépe využívat znalostí o prostředí prohlížeče, zařízení a uživatele: stavu baterie, světelných podmínek v okolí zařízení, geolokace a polohy zařízení v reálném světě obecně. Hezky to rozebírá Una Kravets v článku „Rethinking Responsive Design“. [vrdl.in/ozlu9](https://medium.com/@unakravets/rethinking-responsive-d557ef1745bd#.qz3s11y34)

A když už se tak odvážně historicky ztrapňuji, příští velký technologický posun vidím v hlasovém uživatelském rozhraní. Sledujte Google Home. Nebo si na YouTube pusťte předstadstavení Amazon Echo. [https://youtu.be/KkOCeAtKHIc](https://youtu.be/KkOCeAtKHIc)

Tam už moc příležitostí pro tvůrce webových stránek nebude. Omlouvám se. Ale nebojte, mluvící rozhraní ta obrazovková ani zdaleka nenahradí. Tuhle knížku ještě neodkládejte, to vážně ne.
