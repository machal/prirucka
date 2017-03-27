# Prostředí tvůrce responzivních webů

Čím webdesign prochází a co jej ještě čeká? Podívejme se tady na změny, které se v technologickém světě staly a zřejmě i stanou, a které se nějak projevily do profesních životů nás, nebohých webařů. 

To, že přišly mobily, není jediná změna. Začít s ní ale musíme. 


## Mobily, jsou tady mobily

Proč promeškat příležitost ukázat si graf s rostoucí návštěvností z mobilních zařízení? Jdeme na to.

![Podíl mobilů](dist/images/original/vdwd/statistika-mobily.png)

*Obrázek: Podíl mobilních prohlížečů na celkovém počtu zobrazení stránek k polovině roku 2016. Zdroj: Gemius SA, gemiusTraffic,  Rankings.cz.*

Čísla z Rankings.cz ukazovaly asi pětinu podílu na shlédnutých stránkách velkých webů v ČR. Tam se mobily a tablety samozřejmě nezastaví. 

Na vyspělejším Západě se podíl mobilů dostal přes polovinu dále se zvyšuje. Aktuální světové statistiky hledejte na [statcounter.com](http://gs.statcounter.com/). 

Ani mezi českými weby už dnes nejsou výjimečné kousky s nadpoloviční návštěvností z mobilních zařízení. Než sledovat obecné statistiky, dívejte se vždy na vlastní čísla. Návod, jak je vytáhnout, mám v článku o Google Analytics na Vzhůru dolů. [vrdl.in/gamobily](http://www.vzhurudolu.cz/prirucka/google-analytics-vyvojari#prohlizece-operacni-systemy-mobilni-zarizeni)

V další statistice zase můžeme vidět, jak moc vyrostl počet hodin lidmi denně  trávených na mobilních zařízeních. Z dvaceti minut v roce 2008 na téměř tři hodiny v roce 2015.

![eMarketer: Čas na mobilech](dist/images/original/vdwd/statistika-cas-emarketer.jpg)

*Obrázek: Podíl času tráveného na mobilních zařízeních roste, ovšem ne na úkor počítačů. V roce 2015 to bylo už 51 % z průměrných 5,6 hodin denně. Zdroj: eMarketer. [vrdl.in/ikr1p](http://www.slideshare.net/kleinerperkins/internet-trends-v1/14-14Internet_Usage_Engagement_Growth_Solid11)*

Potřebujete kolegy nebo klienty přesvědčit ještě dalšími čísly? Rád vám doporučím knížku „Going Responsive“ od Karen McGrane. [vrdl.in/goingrwd](https://abookapart.com/products/going-responsive) 

Ale vy už dávno víte, že mobily jsou pro Web zásadní, že ano? 


## Pro péči o ty malé úplně zapomínáme na velké

Vlastně se, my webdesignéři, chováme jako správní rodiče. Pipláme se s těmi roztomilými mrňavými telefony. Jenže jsme zapomněli, že z našich dalších dětí, desktopových monitorů, mezitím vyrostli pěkní čahouni. Nebo vlastně cvalíci, protože se nám roztáhli hlavně do šířky.

![Vzhůru dolů: podíl velkých a malých displejů](dist/images/original/vdwd/vzhurudolu-podil-velkych.jpg)

*Obrázek: Na blog Vzhůru dolů mě v lednu 2017 přišlo 42 % procent návštěv s rozlišením obrazovky 1920 pixelů a širšími. Z tabletů a mobilů jen 15 %.* 

Na webech jiného klienta, cestovky Rekrea s populačním vzorkem bližším českému průměru evidujeme kolem 20 % uživatelů cvalíkovitých monitorů. To je stejný podíl jako mají přístupy z mobilů.

I váš web může být na velkých rozlišeních špatně čitelný kvůli nedostatečné velikosti písma nebo prostě jen nevyužívá potenciál širokého okna. Nespokojme se s tím, že na velkých displejích tvoří rozhraní webu úzkou nudli uprostřed prázdné plochy okna prohlížeče.

Jedním z možných řešení, jednoduchým zvětšováním rozvržení webu pomocí jednotky `rem`, se budeme zabývat v kapitole [o typografii](kap-typografie.md).



## Vývoj: tablety klesají, hybridy rostou

Podle odhadů agentury Gartner to vypadá, že minimálně do roku 2018 budou klesat prodeje tradičních notebooků a desktopových počítačů. Stejně tak ale tabletů. Rostou jen prodeje chytrých telefonů a malých přenosných notebooků. [vrdl.in/807ya](http://www.gartner.com/newsroom/id/3468817)

Neřekl bych ale, že se budeme se středně velkými displeji setkávat méně často. Rostou prodeje větších chytrých telefonů – phabletů – a prodávají se právě i ty velmi malé notebooky. 

Gartner také ukazuje, jak se zvyšují prodeje hybridních notebooků, které je možné ovládat myší i dotykově. Mezi lety 2014 a 2015 o celých 70 procent. [vrdl.in/scx2m](http://www.gartner.com/newsroom/id/3077817)

Co se týká škály rozlišení obrazovky, musíme holt počítat se všemi, které nás napadnou. Nový je také kombinovaný způsob ovládání u hybridních notebooků: tabletem a myší. Ale ani to by nás, responzivní webaře, překvapovat nemělo.


## CSS pixel 

Na školeních se stále setkávám se strachem mnohých webových tvůrců z ohromných rozlišení posledních modelů mobilů. Výrobci dnes udávají až FullHD plochu pro zobrazování, což je 1920×1080 pixelů. Někdy jen na čtyřpalcovém displeji. Netrapme se tím. Nás, webových tvůrců, se toto rozlišení netýká. Prohlížeče jej pro nás přepočítávají do „CSS rozlišení“. 

V tabulce na příkladu několika zařízení ukazuji přepočet mezi hardwarovými a CSS rozlišením:

| Zařízení | HW rozlišení| CSS rozlišení |
| -------- | ----------  | ------------- |
| iPhone 4 | 640×960 | 320×480 |
| Google Nexus 7 | 800×1280 | 604×966 |
| HTC One | 1080×1920 | 360×640 |
| Xiaomi Mi3 | 1080×1920 | 270×480 |

Vykreslení „CSS pixelů“ do harwarového rastru pak obstarají samy prohlížeče.

![CSS Pixel](dist/images/original/vdwd/css-pixel.png)

*Obrázek: Poměr mezi hardwarovými pixely udávanými výrobci a CSS pixely, se kterými pracují webový vývojáři u vybraných zařízení.*

Na Vzhůru dolů je pro zájemce o CSS pixel více informací. [vrdl.cz/prirucka/css-pixel](http://www.vzhurudolu.cz/prirucka/css-pixel)

Zjednodušeně z toho vyplývá, že dekorativní grafiku bychom teď měli dělat ve vektorových formátech a u fotografií zajistit prohlížeči dost variant pro to, aby si mohl pro různě husté rastry vybrat tu správnou. Více si o nich řekneme [v kapitole o obrázcích](kap-media.md).


## Úroda prohlížečů

Když vezmeme celý trh, mezi prohlížeči to vypadá takto: Chrome vede, Explorery verzí 10 a starší už téměř vymřely a hlavně: prohlížečů je dnes docela hodně. 

![Prohlížeče na desktopu](dist/images/original/vdwd/prohlizece-desktop.jpg)

*Obrázek: Podíly desktopových prohlížečů k červnu 2016. Zdroj: velké české weby měřené Gemius SA, gemiusTraffic, Rankings.cz.*

Na mobilech musíme počítat s Google Chrome a Safari. Menší podíl mají další Chromium odvozeniny jako je Samsung Internet nebo Android Browser. U Samsungu ale čísla jen odhaduji, spolehlivé měření zatím nemáme. Ještě menší podíl pak vykazují Internet Explorery či Edge na Windows Phone platformách nebo Opera Mobile. 

![Prohlížeče na mobilech](dist/images/original/vdwd/prohlizece-mobily.jpg)

*Obrázek: Podíly mobilních prohlížečů k červnu 2016. Zdroj: Google Analytics CK Rekrea.*

Moc se neví, že na iOS je jádro Safari používáno i v Google Chrome a všech dalších prohlížečích. Raději to tedy zmíním už tady. Vykreslování tedy není potřeba na iOS kontrolovat ve Chrome i Safari.

Sledujte statistiky podílů prohlížečů ve vaší cílové skupině. Na Vzhůru dolů pak najdete aktuální čísla vycházející z velkých českých webů měřených Gemiusem. [vrdl.cz/prirucka/prohlizece](http://www.vzhurudolu.cz/prirucka/prohlizece)


## …a pak do místnosti přišel Google

Divím se, že ještě nemáme stovky variant následující šablony suchého webdesignérského vtipu. Její scénář by vypadal asi takto: 

V místosti sedí tvůrci webů a diskutují o nějakém tématu. Časem se rozdělí na dva nesmiřitelné tábory a zdá se, že domů odejdou bez shody, utvrzení ve svých názorech. 

Ke konci sezení se otevřou dveře a vstoupí Google. Všichni ztichnou a napjatě jej sledují. Google vlídně pozdraví a pomalu a elegantně se usadí na volnou židli. Pak začne mluvit. Tichým a vyrovnaným hlasem řekne svůj názor. Krátce nato se weboví tvůrci zvednou a potichu odejdou. Teď už mají jednotný názor. Ten, který jim přinesl Google. Všichni jdou spolu na pivo, jen Google zamíří domů přemýšlet nad dalšími tématy. Pro mě vtipná scéna, pro někoho smutný fakt. 

Ano, *argument Googlem*, respektive odkazování na jeho doporučení, funguje. Google je stále nejmocnější dodavatel návštěvníků na naše weby a diskutovat s ním moc smysl nemá. 

Podobné je to s tématy, která budeme rozebírat v této knize. Google byl jednou z prvních velkých firem, které přesně pochopily význam mobilních zařízení pro Web. Proto jsou jeho doporučení v zásadě plně v souladu s tím co vám na následujících stránkách budu tvrdit. Podívejme se na některé jeho kroky a doporučení z poslední doby:

- Radí stavět web jako responzivní, tedy s jednou URL adresou stránky pro všechny typy zařízení. [vrdl.in/googlerwd](https://developers.google.com/webmasters/mobile-sites/mobile-seo/responsive-design)
- Od ledna 2017 znevýhodňuje weby s obtěžujícími překryvnými vrstvami, které jsou špatně použitelné hlavně na mobilech. [vrdl.in/googlepopup](http://blog.bloxxter.cz/google-od-ledna-2017-penalizuje-weby-s-obtezujicimi-popupy/)
- V průběhu roku 2017 začne testovat posuzování webů hlavně podle toho jak vypadají na mobilech. [vrdl.cz/blog/73-google-mobile-first](http://www.vzhurudolu.cz/blog/73-google-mobile-first)

Mohli bychom pokračovat dále. Google chápe Web jako *zejména* mobilní a je tedy poměrně oddaným fanouškem filozofie návrhu nejprve od mobilů ([Mobile First](mobile-first.md)), o které budu psát v druhé polovině knihy.

Co se týká doporučení Google, je to přesně dle slov klasika Járy Cimrmana: „Můžeme s tím nesouhlasit, můžeme proti tomu protestovat, ale je to asi tak jediné, co s tím můžeme dělat.“ 

Osobní poznámka na závěr. Argumenty Googlem ve své praxi používám velmi nerad a také v knížce je budu používat jen jako doplňující. Dávám přednost přímým odkazům na statistiky a průzkumy, které ostatně i lidé z Google pro svá rozhodnutí a doporučení používají.

Na konci této části trochu odlehčím a zkusím si z křišťálové koule zavěštit, kam se prostředí responzivního webu posune v příštích letech.


## Zařízení z budoucnosti: co je po mobilech?

K internetu jsou prý už připojené i stromy v Amazonii, takže lednička s webovým prohlížečem by nás překvapovat neměla. Je to ale použitelné? Máme s tím jako autoři webů počítat? 

Na jakých zařízeních budou lidé používat prohlížeče a zobrazovat naše weby za pár let? Cítím krásnou příležitost se historicky ztrapnit a jdu vývoj odhadnout jen podle svého nejlepšího vědomí.

### Chytré hodinky: NE

Hodinky obvykle prohlížeč instalovaný nemají. Na některých platformách si neoficiální prohlížeče stáhnout můžete. Zkoušel jsem to, ale myslím že je to nepoužitelné a že se to masově neujme. Plocha pro weby je příliš malá na konzumaci obsahu, natož pak rozumné interakce.

### Televize: NE

I vaše chytrá domácí televizi nejspíš nějaký ten prohlížeč obsahuje. Moc je ale lidé nepoužívají. Zakopaný pes ale vězí v uživatelském ovládání. Budoucnost v případě televizí vidím v gestech a hlasovém ovládání. Interakce s běžnými webovými stránkami na televizi budou do té doby nepohodlné. To ale neznamená, že nevznikají nativní TV aplikace vytvářené pomocí webových technologií. Ostatně, i HbbTV aplikace jsou vyrobené webovými technologiemi. [vrdl.in/hbbtv](http://www.hbbtv-developer.com/site/wiki/index.php/Hello_world) 

### Ledničky: NE  

Lednička bývá v domácnostech jedním z center dění, takže si tam nějaký dotykový displej představit umím. Jenže jaká je jeho přidaná hodnota oproti přenosnému telefonu nebo tabletu? Problém je také s jeho svislou polohou. Ovládání nebude příjemné. Specializované aplikace mohou obstát, ale konzumace a interakce s běžnými weby uživatele bavit nebude. Ne, prohlížeče se v ledničkách, tak jak je známe třeba z tabletů, myslím neujmou. Ale lednička s prohlížečem existuje, to ne že ne. Zvědavce odkážu na článek „Samsung Family Hub Refrigerator Review“ na CNet.com. [vrdl.in/udp4y](https://www.cnet.com/products/samsung-family-hub-refrigerator/)

### Kapesní herní konzole: ANO

Myslím ty malé potvůrky do ruky. Jsou to jen převlečené chytré telefony, prohlížeče obsahují a není důvod na nich weby nepoužívat.

### Auta: ANO

S rozmachem (polo)automatického řízení poroste význam velkých dotykových obrazovek. Nejspíš v těch místech, kde teď v autě máte výstupy z ventilátorů. Číst si Blesk.cz v dopravní zácpě? Dává mi to dokonalý smysl. Jen doufejme, že ta auta budou fakt chytrá, aby zvládla řídit, protože nás od palubních displejů už nic neodtrhne. Mají to už odzkoušeno v Tesla Motors. Podívejte se na jejich krásný prohlížeč. [vrdl.in/rlwn0](https://www.tesla.com/support/touchscreen-web-browser)

### Na žádnou další revoluci to teď nevypadá? 

Jedině, že by na trh ještě vstoupily pračky s displejem a prohlížečem. Ale ne, dělám si legraci. 

Dotykové panely v autech jsou vlastně větší tablety a přenosné herní konzole zase chytré telefony. Vypadá to tedy, že velké novinky nás ze strany displejů v nejbližší době nečekají? 

Ale když se podíváme na vývoj zařízení pro virtuální realitu, nemůžeme si být jistí, že se nějaké užití pro webové stránky nenajde i tam.

Responzivní weby a aplikace se spíše skrze hardware naučí lépe využívat znalosti o prostředí prohlížeče, zařízení a uživatele. Mohou znát stav baterie, světelné podmínky v okolí zařízení, lépe využít geolokaci a polohu zařízení v reálném světě. Hezky to rozebírá Una Kravets v článku „Rethinking Responsive Design“. [vrdl.in/ozlu9](https://medium.com/@unakravets/rethinking-responsive-d557ef1745bd#.qz3s11y34)

### Sledujte hlasová uživatelská rozhraní

A když už se tak odvážně historicky ztrapňuji, příští velký technologický posun vidím v hlasovém uživatelském rozhraní. 

Sami asi víte, že hlasový vstup se stále zlepšuje i ve stávajících zařízeních. V domácnostech nebo třeba v autech je pro hlasové ovládání naprosto ideální prostředí. Moje předškolní děti například ovládají hlasem YouTube na tabletu zcela bez potíží.

Sledujte zařízení jako třeba Google Home. Nebo si na YouTube pusťte představení Amazon Echo. [youtu.be/KkOCeAtKHIc](https://youtu.be/KkOCeAtKHIc)

Tam už moc příležitostí pro designéry rozhraní webových stránek nebude. Omlouvám se. Ale nebojte, mluvící rozhraní ta naše obrazovková ani zdaleka nenahradí. Tuhle knížku ještě neodkládejte, to vážně ne. Weby budou dále sloužit jako zdroj informací. I pro tyhle mluvící potvory.

Než se z této futurologické odbočky dostaneme zpět k responzivním webům, musíme to vzít přes aplikace. Protože co je dnes web a co aplikace? Co je nativní, hybridní nebo univerzální aplikace? Je v tom děsný zmatek, takže mi prosím dovolte ještě tuhle odbočku.
