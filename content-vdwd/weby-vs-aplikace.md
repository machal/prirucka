# Weby versus aplikace 

Podívejte se, jsem webař, aplikace nedělám. Už si o nich ale se mnou chtělo povídat tolik lidí, že se o ně zajímám alespoň ze strategického pohledu. Pokud vám tedy stačí stručný úvod do tématu, čtěte.

Myslím si, že nějaký web potřebujete vždycky. Nativní aplikace může být skvělý doplněk a ve speciálních případech přímo nezbytnost. A také myslím, že rozhodování není tak polarizované: existuje velká škála možností mezi webem a aplikací. Slovo „versus“ v názvu textu možná dokonce není na místě, weby a aplikace se totiž skvěle doplňují.

## Weby versus nativní aplikace

Hned první problém je v definici. Jednoduše se nám budou definovat jen dva extrémní póly:

Za *web* považuji software vytvořený technologiemi standardizovanými webovým konsorciem W3.org a přidruženými organizacemi. Jde hlavně o HTML, CSS, Javascript a různá API pro komunikaci aplikace se systémem a zařízením. Každá stránka webu, každý jeho stav má adresu zvanou URL, dnes nejčastěji na protokolu `https:`.

Za *nativní aplikaci* považuji software vytvořený v programovacím jazyce pro konkrétní operační systém. Například pro iOS, operační systém mobilních zařízení od Apple, napíšete nativní aplikaci v jazycích Objective-C nebo Swift.

Tohle bylo jednoduché. Horší to je, když použijeme slovo „aplikace“ bez přívlastku „webová“. Je to *nativní* aplikace? *Webová* aplikace? Myslím tím *aplikaci* z pohledu uživatelských interakcí jako protiklad statických dokumentů? Vydržte, pokusím se to vše vyjasnit.


## Rozdíly z pohledu uživatele: interakčně jednoduché weby a složité aplikace

Když v souboji „weby versus aplikace“ oba hráče definujeme pohledem uživatele, musíme se zaměřit hlavně na složitost rozhraní a množství interakcí.

### Weby jsou interakčně jednoduché 

Prostě obyčejné dokumenty jako je blog Vzhůru dolů, deník Aktuálně.cz nebo prezentační stránky vaší firmy. 

### Aplikace jsou interakční složité

Vezměme třeba podávání daňového přiznání přes tu (*šílenou*) aplikaci na webu Finanční správy nebo přípravu faktury v aplikaci Fakturoid. A víte vy co? Úplně nejlépe si představte extrémy: hru Pokémon Go nebo třeba Instagram. To jsou aplikace jako vyšité. 

Hry jsou vůbec dobrý příklad. I když nemají složité rozhraní, uživatel v nich dělá velké množství netriviálních akcí. Nebo využívají prostředky zařízení tak, že by to weby zvládly jen s obtížemi. Například úprava fotky a přidání filtrů na ni v Instagramu.

V moderním webdesignu ale platí, že skoro každý statický web obsahuje nějaké aplikační prvky.

Když čtete blog Vzhůru dolů, časem se doklikáte k aplikaci pro přípravu kontrolního seznamu před spuštěním webu. A ze statického webu jste se dostali do aplikace. [vrdl.cz/checklist](http://www.vrdl.cz/checklist)

Typickým hybridem mezi prezentací a aplikací jsou eshopy. Úvodní stránka a všechny produktové stránky tvoří prezentační, statický web. Košík a nákupní proces jsou zase už typická aplikace. 


## Ve vyhledávačích bojují hlavně weby

Zajímavé na tomto dělení na weby a aplikace z pohledu interakční složitosti také je, že obsah webů chcete typicky dobře indexovat roboty vyhledávačů, takže důležité části generujete už na backendu. 

U aplikací to až tak neplatí. U kontrolního seznamu na Vzhůru dolů chci ve vyhledávačích dobře umístěnou stránku, která aplikaci propaguje, statický web. Nepotřebuji, a obvykle ani nechci, indexovat samotnou aplikaci.

Proto se i v poslední době aplikace dělají stále více frontendovými technologiemi (Angular, React), kdežto weby stále „postaru backendově“ s pomocí Nette, Symfony nebo jiných frameworků. Javascript na frontendu to pak jen doplňuje. Časem se ale tyto dva přístupy začnou nějak sjednocovat.

Teď už nebudeme obecní, přejdeme do světa *mobilních* aplikací a responzivních webů. 


## Mobilní aplikace a problém „Proč dělat web? Stačí nám aplikace!“

Občas je totiž stále slyšet, že „když máme aplikaci, nepotřebujeme web“. Ze všech možných příkladů vyberu web restaurace v sousední vesnici. Slyšte příběh o tom, jak jsem se v El Asador nenajedl, i když jsem chtěl. On vlastně asi stačí obrázek:

![Web restaruace El Asador](dist/images/original/vdwd/el-asador.png)

*Obrázek: Web restaurace El Asador na desktopu a mobilech. Příklad za všechny weby, které na mobilech nezdravě upřednostňují aplikaci namísto webu.*

Ano, přes mobil jsem se chtěl podívat na menu a případně zarezervovat stůl. Provozovatelé webu po mě ale chtějí, abych:

1. šel do App Store
2. v App Store se přihlásil
3. stáhl si jejich aplikaci na mobilním připojení
4. jejich aplikaci si otevřel
5. naučil se aplikaci ovládat
6. a nakonec bych si třeba prohlédl menu a zarezeroval stůl

Víte, co jsem udělal? Šli jsme se ženou do Lokálu U Zavadilů. Jako vždy.

Na jedné ze svých bolestných zkušeností jsem načrtl, co se hlavou honí uživatelům, když jim nutíte stažení aplikace namísto webu upraveného pro mobily. 

Navíc,  jak vychází z průzkumů, uživatelé zase tak moc nativních aplikací na mobilech nevyužívají. 

![Uživatelé tráví 88 % svého času jen v pěti aplikacích](dist/images/original/vdwd/forrester-cas.png)

*Obrázek: Podle Forrester Research uživatelé tráví 88 % svého času na mobilních zařízení jen v pěti aplikacích. [vrdl.in/en8rk](http://blogs.forrester.com/nicole_dvorak/16-01-28-data_digest_just_a_handful_of_apps_account_for_nearly_all_app_time_on_smartphones)*

Pět aplikací? To máme email, Facebook, mapy, volání, SMS, fotky… Počkejte, už jich je šest! Bude tady místo pro restauraci z Hrnčířů? Nejspíš ne, přátelé. 

Do aplikace lidi tak snadno nedostanete. Na web je to jednoduché, chodí vám tam z Google vyhledávání, Facebooku, emailů, chatů… však víte. 

Proto říkám: Web potřebují všichni, nativní aplikaci dokáží prosadit jen někteří.

Pojďme se ale zamyslet nad situací, že neděláte statický web restaurace, protože tam je to jasné. Přemýšlejme nad situací, že váš software splňuje uživatelskou definici aplikace. 

To teď máte draze vyrobit nativní aplikaci a ještě se smířit s tím, že ji uživatelé nebudou používat? Nemusí to být tak hrozné, protože zde máme kompromisní přístupy.

## Nativní, hybridní, progresivní a univerzální aplikace

### Nativní aplikace

Jak už jsem psal, nativní aplikaci si tady definujeme jako software běžící v prostředí přirozeném pro aktuální platformu. Na iOS ji tedy musíte napsat v jazycích Objective-C nebo Swift. Na Androidu v Javě. Na Windows 10 zase v třeba C#.

Tento přístup se obecně vyplatí velkým hráčům: v Česku to jsou banky, mediální domy, operátoři a podobně. Nutné to je ve specifických oborech jako jsou mobilní hry, přehrávání videa a tak dále. Tam nevadí, že je vývoj v různých jazycích pro různé platformy drahý. Využijí výhody tohoto přístupu ve formě snadnějšího zabezpečení, vyladění výkonu nebo využití nativních funkcí platformy. Některé aplikace navíc z principu není možné udělat jinak než nativním přístupem: například speciální klávesnice nebo widgety.

### Nativní aplikace vytvářené pomocí překladačů

Psaní různých aplikací pro různé platformy se dnes ale neděje tak často. Jak už jsem uváděl, je to velmi drahé. Pro obyčejné aplikace je lepší využít některý z překladačů, které mají společný technologický základ, ze kterého se pak generují jednotlivé aplikace pro jednotlivé platformy. Příkladem budiž třeba Xamarin, Cordova a další.

### Hybridní aplikace

Představuje zajímavý sjednocující přístup mezi webem a nativní aplikací. Prostředky pro výrobu nativní aplikace vytvoříte jen „obal“, kontejner s hlavními ovládacími prkvy. Do něj vložíte prohlížečovou komponentu, které se říkává WebView. V ní pak běží webová aplikace, kterou vytvoříte v našich dobře známých jazycích HTML, CSS a Javascriptu. Výhoda možnosti instalace ikonky na plochu, známá od nativních aplikací, zůstává.

Hybridní je část snad každé větší aplikace. V ČR jmenujme ke dni psaní textu třeba aplikaci Invia.cz (technicky Cordova&React) nebo apky Bubbleology (Ionic) či FlowReader.

Více informací o hybridním přístupu hledejte třeba na blogu firmy Pixelfield, „Hybridní mobilní aplikace: kdy ano a kdy ne?“ [vrdl.in/e7j8h](https://pixelfield.cz/blog/hybridni-mobilni-aplikace-kdy-ano-a-kdy-ne/)

### Progresivní webové aplikace

Nejnovější možný přístup. Propaguje jej Google a Microsoft s ním souhlasil. Apple ke dni psaní textu zatím neví, jestli to neudělá nějak po svém. 

Prostě napíšete webovou aplikaci, která se otevírá v prohlížeči, ale za určitých podmínek může získat výhody nativní aplikace:

* načte se rychle a pracuje offline
* sama se nainstaluje na plochu uživatele
* posílá mu notifikace 

Moc se mě to líbí, protože to dělá příjemný kompromis mezi webem a nativní aplikací a pro minimálně dvě platformy je půjde vyvíjet stejně univerzálně běžnou webovou stránku. A slovo „progresivní“ definuje chování na nepodporovaných platformách: prostě tam uvidíte běžnou webovou aplikaci.

V Česku jsem během psaní textu příklad nenašel, ale ve světě je jich už hodně. Na PWA.rock jsou seřazené ty nejlepší. [pwa.rocks](https://pwa.rocks/)

Detaily o progresivních webových aplikacích hledejte u Jasona Grigsbyho v textu „The Business Case for Progressive Web Apps“. [vrdl.in/aklr5](https://cloudfour.com/thinks/the-business-case-for-progressive-web-apps/)

### Univerzální aplikace

Z pohledu šetření času také velmi atraktivní varianta. S pomocí například React Native můžete stavět nativní aplikace. Ty ale píšete ve stejném jazyce a podobném frameworku jakým můžete vytvořit i webovou aplikaci. [facebook.github.io/react-native/](https://facebook.github.io/react-native/)

Univerzální aplikací bychom mohli ukončit slovník dnešních typů aplikací. Pojďme si ještě porovnat weby a aplikace. Pro jaký účel se hodí? 

## Weby versus aplikace: „záběr“ versus „zápřah“

Obecně platí, že weby mají na mobilech skvělý *záběr*. Nemusí se instalovat s rozumnou propagací je navštíví je daleko více uživatelů. Kanálů k propagaci je celá řada: sociální sítě, vyhledávače, bannery… Vlastně všechny kanály známé z dnešního Webu.

Pokud jste firma, co má věrné uživatele, aplikací jste zase schopní je více *zapřáhnout*. Díky snadnějšímu ovládání a rychlé dostupnosti budou daleko aktivnější než uživatelé webu. 

![Reach (web) vs. Rich (native)](dist/images/original/vdwd/lukew-reach-rich.png)

*Obrázek: „Reach (web) vs. Rich (native) OR why you want both.“ Zdroj: Luke Wroblewski na Twitteru. [vrdl.in/8lh4f](https://twitter.com/lukew/status/649255909420503041)*

Zvládnete ještě nějaká čísla? Podle comScore (The 2015 U.S. Mobile App Report) měl v červnu 2015 americký mobilní Web na 9 milionů unikátních uživatelů, nativní aplikace jen něco přes tři. Jenže v aplikacích strávil průměrný uživatel přes 200 minut času, v prohlížeči něco přes 10 minut.

V angličtině to stručně a pěkně popsal Luke Wroblewski: 

> The Web is for audience reach and native apps are for rich experiences. Both are strategic. Both are valuable. [vrdl.in/wsfe8](http://www.lukew.com/ff/entry.asp?1954)

Takže usmíření na závěr. Web potřebujete skoro vždy, aplikaci někdy. Někdy aplikací uděláte věci co s webem nedokážete. V aplikaci můžete uživatele více zapřáhnout. A existuje spoustu variant jak udělat aplikaci a netrápit se extra kódem pro různé platformy.

<p class="ebook-only">
   Tím bychom mohli mít tuto odbočku k aplikacím uzavřenou. V knize se budeme věnovat hlavně responzivním webům, ale pojďme si nejdřív také něco říci o webech mobilních a adaptivních. Ani tady přece zmatení pojmů nedopustíme.
</p>


