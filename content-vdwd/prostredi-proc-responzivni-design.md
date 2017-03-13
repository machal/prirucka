# Prostředí tvůrce responzivních webů

Čím webdesign prochází a co jej ještě čeká? Podívejme se tady na změny, které se v technologickém světě staly a zřejmě i stanou, a které se nějak projevily do  profesních životů nebohých webařů. 

Všechno se to točí kolem zařízení. Jasně, přišly mobily, ale to není vše. Začít tím ale musíme. 

## Mobily, jsou tady mobily

Proč promeškat příležitost ukázat si graf s rostoucí návštěvností z mobilních zařízení? Jdeme na to.

![Podíl mobilů](dist/images/original/vdwd/statistika-mobily.png)

*Obrázek: Podíl mobilních prohlížečů na celkovém počtu zobrazení stránek k polovině roku 2016. Zdroj: Gemius SA, gemiusTraffic,  Rankings.cz.*

Čísla z velkých českých webů ukazují více než pětinu podílu na shlédnutých stránkách velkých webů v ČR. Tam se mobily a tablety samozřejmě nezastaví. V polovině roku 2017 budou mít minimálně čtvrtinový podíl a tak dále. Čísla ze Západu ukazují, že se podíl mobilů dostane přes polovinu a i pak se bude dále zvyšovat. Aktuální světové statistiky hledejte na [statcounter.com](http://gs.statcounter.com/). 

Data eMarketeru zase ukazují jak moc vyrostl počet hodin v průměru denně dospělými trávených na mobilních zařízeních. Z dvaceti minut v roce 2008 na téměř tři hodiny v roce 2015.

![eMarketer: Čas na mobilech](dist/images/original/vdwd/statistika-cas-emarketer.jpg)

*Obrázek: Podíl času tráveného na mobilních zařízeních (zeleně) roste, ovšem ne na úkor počítačů. Zdroj: eMarketer. [vrdl.in/ikr1p](http://www.slideshare.net/kleinerperkins/internet-trends-v1/14-14Internet_Usage_Engagement_Growth_Solid11)*

Ale vy už dávno víte, že mobily jsou pro Web zásadní, že ano? 

## Pro péči o ty malé úplně zapomínáme na velké

Vlastně se, my webdesignéři, chováme jako správní rodiče. Pipláme se s těmi novými mrňavými chytrými telefony. Jenže jsme zapomněli, že z našich dalších dětí, desktopových monitorů, mezitím vyrostli pěkní čahouni. Nebo vlastně cvalíci, protože se nám roztáhli hlavně do šířky.

Například na web Vzhůru dolů mě v listopadu 2016 přišlo více než 40 % návštěv s rozlišením 1920 pixelů a širšími. Na webech jiného klienta, cestovky Rekrea s populačním vzorkem bližším českému průměru evidujeme kolem 20 % uživatelů cvalíkovitých monitorů. To je stejný podíl jako mají přístupy z mobilů.

I váš web může být na velkých rozlišeních špatně čitelný kvůli nedostatečné velikosti písma. Vezměme v potaz fakt, že od větších monitorů sedíme dále. A nespokojte se s tím, že na velkých displejích tvoří rozhraní webu úzkou nudli uprostřed prázdné plochy okna prohlížeče.

Jednoduchým zvětšováním rozvržení webu pomocí jednotky `rem` se budeme zabývat v kapitole [o typografii](kap-typografie.md).



## Vývoj: tablety klesají, hybridy rostou

Podle odhady agentury Gartner to vypadá, že minimálně do roku 2018 budou klesat prodeje tradičních notebooků a specializovaných desktopových počítačů. Stejně tak ale tabletů. Rostou jen prodeje chytrých telefonů a malých přenosných notebooků. Píšou to v článku „Gartner Forecasts Worldwide Device Shipments to Decline for Second Year in a Row“ na Gartner.com. [vrdl.in/807ya](http://www.gartner.com/newsroom/id/3468817)

Zvyšují se také prodeje hybridních notebooků, které je možné ovládat myší i dotykově. Mezi lety 2014 a 2015 o celých 70 procent. Zdroj hledejte opět na Gartner.com v článku „Gartner Says Worldwide Hybrid Device Shipments on Pace to Reach 21.5 Million Units in 2015, Up 70 Percent from 2014“. [vrdl.in/scx2m](http://www.gartner.com/newsroom/id/3077817)

Neřekl bych ale, že se se středně velkými displeji budeme setkávat méně často. Rostou prodeje větších chytrých telefonů – phabletů – a prodávají se i velmi malé notebooky. Co se týká škály rozlišení obrazovky, musíme holt počítat se všemi, které nás napadnou. Nový je jen kombinovaný způsob ovládání u hybridních notebooků: tabletem a myší. Ale ani to by nás, responzivní webaře, překvapovat nemělo.


## CSS pixel 

Na školeních se stále setkávám se strachem mnohých webových tvůrců z ohromných rozlišení posledních modelů mobilů. Výrobci stále častěji udávají až FullHD plochu pro zobrazování: 1920×1080 pixelů. Netrapme se tím. Prohlížeče pro nás toto rozlišení obrazovky přepočítávají do „CSS pixelů“. Podívejte se na obrázek.

![CSS Pixel](dist/images/original/vdwd/css-pixel.png)

*Obrázek: Poměr mezi hardwarovými pixely udávanými výrobci a CSS pixely, se kterými pracují webový vývojáři u vybraných zařízení.*

Na Vzhůru dolů je pro zájemce o CSS pixel více informací. [vrdl.cz/prirucka/css-pixel](http://www.vzhurudolu.cz/prirucka/css-pixel)

Zjednodušeně z toho vyplývá, že dekorativní grafiku bychom teď měli dělat ve vektorovém SVG a u fotografií zajistit pomocí atributů `srcset` a `sizes` dost variant pro to, aby si prohlížeč mohl pro různě husté rastry vybrat tu správnou. Více si o nich řekneme [v kapitole o obrázcích](kap-media.md).


## Úroda prohlížečů

Když vezmeme celý trh, mezi prohlížeči to vypadá takto: Chrome vede, Explorery verzí 10 a starší už téměř vymřely a hlavně: prohlížečů je dnes děsně moc. 

Na mobilech musíme počítat s Google Chrome a Safari. Menší podíl mají další Chromium odvozeny jako je Samsung Internet nebo Android Browser. Ještě menší pak Internet Explorery či Edge na Windows Phone platformách nebo Opera Mobile. 

Moc se neví, že na iOS je jádro Safari používáno i v Google Chrome a všech dalších prohlížečích. Raději to tedy zmíním už tady.

Sledujte statistiky podílů prohlížečů ve vaší cílové skupině. Na Vzhůru dolů pak najdete aktuální čísla vycházející z velkých českých webů měřených Gemiusem. [vrdl.cz/prirucka/prohlizece](http://www.vzhurudolu.cz/prirucka/prohlizece)


## …a pak do místnosti přišel Google

Divím se, že ještě nemáme stovky variant následující šablony suchého webdesignérského vtipu. Její scénář by vypadal asi takto: 

V místosti sedí tvůrci webů a diskutují o nějakém tématu. Časem se rozdělí na dva nesmiřitelné tábory a zdá se, že domů odejdou bez shody, utvrzení ve svých názorech. 

Ke konci sezení se otevřou dveře a vstoupí Google. Všichni ztichnou a napjatě jej sledují. Google vlídně pozdraví a pomalu a elegantně se usadí na volnou židli. Pak začne mluvit. Tichým a vyrovnaným hlasem řekne svůj názor. Krátce nato se weboví tvůrci zvednou a potichu odejdou. Teď už mají jednotný názor. Ten, který jim přinesl Google. Všichni jdou spolu na pivo, jen Google zamíří domů přemýšlet nad dalšími tématy.

Pro mě vtipná scéna, pro někoho smutný fakt. Co se týká doporučení Google, je to přesně dle slov klasika Járy Cimrmana: „Můžeme s tím nesouhlasit, můžeme proti tomu protestovat, ale je to asi tak jediné, co s tím můžeme dělat.“ 

Ano, *argument Googlem*, respektive odkazování na jeho doporučení funguje. Google je stále nejmocnější dodavatel návštěvníků na naše weby a diskutovat s ním moc smysl nemá. 

Podobné je to s tématy, která budeme rozebírat v této knize. Google byl jednou z prvních velkých firem, které přesně pochopily význam mobilních zařízení pro Web. Proto jsou jeho doporučení v zásadě plně v souladu s tím co vám na následujících stránkách budu tvrdit. Podívejme se na některé jeho kroky a doporučení z poslední doby:

- Google doporučuje stavět web jako responzivní, tedy s jednou URL adresou stránky pro všechny typy zařízení. [vrdl.in/googlerwd](https://developers.google.com/webmasters/mobile-sites/mobile-seo/responsive-design)
- Od ledna 2017 znevýhodňuje weby s obtěžujícími překryvnými vrstvami, které jsou špatně použitelné hlavně na mobilech. Více také na blogu Pavla Ungra: [vrdl.in/googlepopup](http://blog.bloxxter.cz/google-od-ledna-2017-penalizuje-weby-s-obtezujicimi-popupy/).
- V průběhu roku 2017 začne testovat posuzování webů hlavně podle toho jak vypadají na mobilech. Detaily hledejte na Vzhůru dolů: [vrdl.cz/blog/73-google-mobile-first](http://www.vzhurudolu.cz/blog/73-google-mobile-first).

Mohli bychom pokračovat dále. Google chápe Web jako *zejména* mobilní a je tedy poměrně oddaným fanouškem filozofie [Mobile First](mobile-first.md), o které budu psát v druhé polovině knihy.

Osobní poznámka na závěr. Argumenty Googlem ve své praxi používám velmi nerad a také v knížce je budu používat jen jako doplňující. Dávám přednost přímým odkazům na statistiky a průzkumy, které ostatně i lidé z Google pro svá rozhodnutí a doporučení používají.

Tím bychom mohli uzavřít současnost. Na konci této části trochu odlehčím a zkusím si z křišťálové koule zavěštit, kam se prostředí responzivního webu posune v příštích letech.


## Zařízení z budoucnosti: co je po mobilech?

K internetu jsou prý už připojené i stromy v Amazonii, takže lednička s webovým prohlížečem by nás překvapovat neměla. Je to ale použitelné? Máme s tím jako autoři webů počítat? 

Cítím krásnou příležitost se historicky ztrapnit a jdu tedy vývoj odhadnout jen podle svého nejlepšího vědomí. Na jakých zařízeních budou lidé používat prohlížeče a zobrazovat naše weby za pár let?

### Chytré hodiny: NE

Hodinky obvykle prohlížeč instalovaný nemají. Na některých platformách si neoficiální prohlížeče stáhnout můžete. Zkoušel jsem to, ale myslím že je to nepoužitelné a že se to neujme. Plocha je příliš malá na konzumaci obsahu, natož pak rozumné interakce.

### Televize: NE

I pro vaši chytrou domácí televizi byste nejspíš nějaký ten prohlížeč sehnat dokázali. Jsem ale skeptický k uživatelským vstupům. Budoucnost v případě televizí vidím v gestech a hlasovém ovládání. Interakce s běžnými webovými stránkami na televizi snadné nebudou. To ale neznamená, že nemohou vznikat nativní TV aplikace vytvářené pomocí webových technologií.

### Ledničky: spíše NE  

Lednička bývá v domácnostech jedním z center dění, takže si tam nějaký dotykový displej představit umím. Problém je ale s jeho svislou polohou. Ovládání nebude příjemné. Specializované aplikace mohou obstát, ale konzumace a interakce s běžnými weby nebude příjemná. Ne, prohlížeče se v ledničkách, tak jak je známe třeba z tabletů, myslím neujmou. Ale lednička s prohlížečem existuje, to ne že ne. Zvědavce odkážu na článek „Samsung Family Hub Refrigerator Review“ na CNet.com. [vrdl.in/udp4y](https://www.cnet.com/products/samsung-family-hub-refrigerator/)

### Herní konzole: ANO

Myslím ty malé potvůrky do ruky. Jsou to jen převlečené chytré telefony, prohlížeče obsahují a není důvod na nich weby nepoužívat.

### Auta: ANO

S rozmachem poloautomatického řízení poroste význam velkých dotykových obrazovek. Nejspíš v těch místech, kde teď v autě máte výstupy z ventilátorů. Číst si Blesk.cz v dopravní zácpě? Dává mi to dokonalý smysl. Jen doufejme, že ta auta budou fakt chytrá, aby zvládla řídit, protože nás od palubních displejů už nic neodtrhne. Mají to už odzkoušeno v Tesla Motors. Podívejte se na jejich krásný prohlížeč. [vrdl.in/rlwn0](https://www.tesla.com/support/touchscreen-web-browser)

### Na žádnou další displejovou revoluci to tedy nevypadá 

Jedině, že by na trh ještě vstoupily pračky s displejem a prohlížečem. Ale ne, dělám si legraci. Dotykové panely v autech jsou vlastně větší tablety a přenosné herní konzole zase chytré telefony. Žádné velké novinky nás ze strany displejů tedy zřejmě nečekají.

Responzivní weby a aplikace se spíše skrze hardware naučí lépe využívat znalosti o prostředí prohlížeče, zařízení a uživatele. Mohou znát stav baterie, světelní podmínky v okolí zařízení, lépe využít geolokaci a polohu zařízení v reálném světě. Hezky to rozebírá Una Kravets v článku „Rethinking Responsive Design“. [vrdl.in/ozlu9](https://medium.com/@unakravets/rethinking-responsive-d557ef1745bd#.qz3s11y34)

### Sledujte hlasová uživatelská rozhraní

A když už se tak odvážně historicky ztrapňuji, příští velký technologický posun vidím v hlasovém uživatelském rozhraní. 

Sami asi víte, že hlasový vstup se stále zlepšuje i ve stávajících zařízeních. V domácnostech nebo třeba v autech je pro hlasové ovládání naprosto ideální prostředí. Naše předškolní děti, například, ovládají YouTube na tabletu zcela bez zábran hlasem.

Sledujte zařízení jako třeba Google Home. Nebo si na YouTube pusťte představení Amazon Echo. [youtu.be/KkOCeAtKHIc](https://youtu.be/KkOCeAtKHIc)

Tam už moc příležitostí pro tvůrce webových stránek nebude. Omlouvám se. Ale nebojte, mluvící rozhraní ta naše obrazovková ani zdaleka nenahradí. Tuhle knížku ještě neodkládejte, to vážně ne.

Než se z této futurologické odbočky dostaneme zpět k responzivním webům, musíme to vzít přes aplikace. Protože co je dnes web a co aplikace? Co je nativní, hybridní nebo univerzální aplikace? Je v tom děsný zmatek, takže mě prosím dovolte ještě tuhle odbočku.
