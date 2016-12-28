# Weby versus aplikace 

Podívejte se, jsem webař, aplikace nedělám. Už si o nich ale se mnou chtělo povídat tolik lidí, že se o ně zajímám alespoň ze strategického pohledu. Pokud vám tedy stačí stručný úvod do tématu, čtěte.

V tomto textu totiž chci říct, že:

* nějaký web potřebujete vždycky;
* nativní aplikace může být skvělý doplněk a ve speciálních případech přímo nezbytnost;
* rozhodování není tak polarizované – existuje velká škála možností mezi webem a aplikací;
* slovo „versus“ není na místě, weby a aplikace se skvěle doplňují.

## Weby vs. nativní aplikace

Hned první problém je v definici. Jednoduše se nám budou definovat jen dva extrémní póly:

* Za **web** považuji software vytvořený technologiemi standardizovanými webovým konsorciem W3.org a přidruženými organizacemi. Jde hlavně o HTML, CSS, Javascript a různá API pro komunikaci aplikace se systémem a zařízením.
* Za **nativní aplikaci** považuji software vytvořený v programovacím jazyce pro konkrétní operační systém. Například na iOS, operačním systému v mobilních zařízeních od Apple, napíšete nativní aplikaci v jazycích Objective-C nebo Swift.

Velký zmatek ale nastane když použijeme slovo „aplikace“ bez přívlastku „webová“. Je to *nativní* aplikace? *Webová* aplikace? Myslím tím *aplikaci* z pohledu uživatelských interakcí jako protiklad statických dokumentů? Vydržte, pokusím se to vše vyjasnit.

## Rozdíly z pohledu uživatele: interakčně jednoduché weby a složité aplikace

Když v souboji „weby versus aplikace“ oba hráče definujeme pohledem uživatele, musíme se zaměřit hlavně na složitost rozhraní a množství interakcí.

* **Weby jsou interakčně jednoduché**. 
Prostě obyčejné dokumenty jako je blog VzhůruDolů.cz nebo prezentační stránky vaší firmy. 
* **Aplikace jsou interakční složité**. 
Vezměme třeba podávání daňového přiznání přes tu (*šílenou*) aplikaci na webu Ministerstva financí, příprava faktury ve Fakturoidu. A víte vy co? Úplně nejlépe si představte extrém – hru Pokémon Go nebo třeba Instagram. To jsou aplikace jako vyšité. Hry jsou vůbec dobrý příklad. I když nemají složité rozhraní, uživatel v nich dělá velké množství netriviálních akcí. Nebo využívají prostředky zařízení tak, že by to weby zvládly jen s obtížemi. Například úprava fotky a přidání filtrů na ni v Instagramu.

V moderním webdesignu ale platí, že skoro každý statický** web obsahuje nějaké aplikační prvky**:

* Když čtete VzhůruDolů.cz, časem se doklikáte k aplikaci pro přípravu kontrolního seznamu před spuštěním webu. A ze statického webu jste se dostali do aplikace. [http://www.vrdl.cz/checklist](http://www.vrdl.cz/checklist)
* Typickým hybridem jsou eshopy. Úvodní stránka a všechny produktové stránky tvoří statický web. Košík a nákupní proces už zase typická aplikace. 

## Ve vyhledávačích bojují hlavně weby

Zajímavé na tomto typu dělení na weby a aplikace také je, že obsah webů chcete typicky dobře indexovat roboty vyhledávačů, takže důležité části generujete už na backendu. 

U aplikací to až tak neplatí. U kontrolního seznamu na VzhůruDolů.cz chci ve vyhledávačích dobře umístěnou stránku, která aplikaci propaguje – statický web. Nepotřebuji – a obvykle ani nechci* –* indexovat samotnou aplikaci.

Proto se i v poslední době aplikace dělají stále více frontendovými technologiemi (Angular, React), kdežto weby stále „postaru backendově“ s pomocí Nette, Symfony nebo jiných frameworků. Javascript na frontendu to pak jen doplňuje.

Teď už nebudeme obecní, přejdeme do světa *mobilních* aplikací a responzivních webů. 

## Mobilní aplikace a problém „Proč dělat web? Stačí nám aplikace!“

Občas je totiž stále slyšet, že „když máme aplikaci, nepotřebujeme web“. Ze všech možných příkladů vyberu web restaurace El Asador v sousední vesnici. Slyšte příběh o tom, jak jsem se v ní nenajedl, i když jsem chtěl. On vlastně asi stačí obrázek:

![Web restaruace El Asador](dist/images/original/vdwd/el-asador.png)

*Obrázek: Web restaurace El Asador na desktopu a mobilech. Příklad za všechny weby, které na mobilech nezdravě upřednostňují aplikaci namísto webu.*

Ano, přes mobil jsem se chtěl podívat na menu a případně zarezervovat stůl. Provozovatelé webu po mě ale chtějí, abych:

* šel do App Store
* v App Store se přihlásil
* stáhl si jejich aplikaci na mobilním připojení (což bude pomalé a bude mě to stát nějaké peníze, *a to bolí!*)
* jejich aplikaci si otevřel
* naučil se aplikaci ovládat…

…a nakonec bych si třeba prohlédl menu a zarezeroval stůl.

Víte, co jsem udělal? Šel se ženou do Lokálu U Zavadilů. Jako vždy.

Na jedné ze svých bolestných zkušeností jsem načrtl, co se hlavou honí uživatelům, když jim nutíte stažení aplikace namísto webu upraveného pro mobily. 

Navíc –  jak vychází z mnoha výzkumů – uživatelé zase tak moc nativních aplikací na mobilech nevyužívají. 

![Uživatelé tráví 88 % svého času jen v pěti aplikacích](dist/images/original/vdwd/forrester-cas.png)

*Obrázek: Podle Forrester Research uživatelé tráví 88 % svého času jen v pěti aplikacích. **[Zdro*j](http://blogs.forrester.com/nicole_dvorak/16-01-28-data_digest_just_a_handful_of_apps_account_for_nearly_all_app_time_on_smartphones)*.*

Pět aplikací? To máme email, Facebook, mapy, volání, SMS, fotky… Počkejte, už jich je šest! Bude tady místo pro restauraci z Hrnčířů? Nejspíš ne, přátelé. 

Do aplikace lidi tak snadno nedostanete. Na web je to jednoduché, chodí vám tam z Google vyhledávání, Facebooku, emailů, chatů… však víte. 

Proto – **web potřebují všichni, aplikaci dokáží prosadit jen někteří.**

Pojďme se ale zamyslet nad situací, že neděláte statický web restaurace, protože tam je to jasné. Přemýšlejme nad situací, že váš software splňuje uživatelskou definici aplikace. 

To teď máte draze vyrobit nativní aplikaci a ještě se smířit s tím, že ji uživatelé nebudou používat? Naštěstí ne.

## Nativní, hybridní, progresivní a univerzální aplikace

### Nativní aplikace

Jak už jsem psal, nativní aplikaci si tady definujeme jako software běžící v prostředí přirozeném pro aktuální platformu. Na iOS ji tedy musíte napsat v jazycích Objective-C nebo Swift. Na Androidu v Javě. Na Windows 10 zase v třeba C#.

Tento přístup se obecně vyplatí velkým hráčům (v ČR banky, mediálky a podobně) nebo ve specifických oborech jako jsou mobilní hry, přehrávání videa atd. Těm nevadí, že je vývoj v různých jazycích pro různé platformy drahý. Využijí výhody tohoto přístupu ve formě snadnějšího zabezpečení nebo vyladění výkonu. Některé aplikace navíc nejde z principu udělat jinak než nativním přístupem – například speciální klávesnice atd.

### Nativní aplikace vytvářené pomocí překladačů

Psaní různých aplikací pro různé platformy se dnes ale neděje tak často. Jak už sem uváděl, je to velmi drahé. Pro obyčejné aplikace je lepší využít některý z překladačů, které mají společný technologický základ, ze kterého se pak generují jednotlivé aplikace pro jednotlivé platformy. Příkladem budiž třeba Xamarin, Cordova a další.

### Hybridní aplikace

Představuje zajímavý sjednocující přístup mezi webem a nativní aplikací – prostředky pro výrobu nativní aplikace vytvoříte jen „obal“, kontejner s hlavními ovládacími prkvy. Do něj vložíte prohlížeč (říkává se mu WebView). V něm pak běží webová aplikace, kterou vytvoříte v HTML/CSS/JS. Výhoda možnosti instalace ikonky na plochu zůstává.

Hybridní je část snad každé větší aplikace. V ČR jmenujme třeba aplikaci Invia.cz (technicky Cordova&React) nebo apky Bubbleology (Ionic) či FlowReader.

Více informací:

[https://pixelfield.cz/blog/hybridni-mobilni-aplikace-kdy-ano-a-kdy-ne/](https://pixelfield.cz/blog/hybridni-mobilni-aplikace-kdy-ano-a-kdy-ne/)

[http://janvaclavik.cz/jak-vyvijet-mobilni-aplikace/](http://janvaclavik.cz/jak-vyvijet-mobilni-aplikace/)

### Progresivní webové aplikace

Nejnovější možný přístup. Tlačí jej Google, Microsoft souhlasil, Apple zatím neví jestli to neudělá po svém. Prostě napíšete webovou aplikaci, která se otevírá v prohlížeči, ale za určitých podmínek může získat výhody nativní aplikace:

* načte se rychle a pracuje offline
* sama se nainstaluje na plochu uživatele
* posílá mu notifikace 

Moc se mě to líbí, protože to dělá příjemný kompromis mezi webem a nativní aplikací a pro minimálně dvě platformy je půjde vyvíjet stejně univerzálně běžnou webovou stránku. A slovo „progresivní“ definuje chování na nepodporovaných platformách – prostě uvidíte běžnou webovou aplikaci.

V Česku jsem během psaní textu příklad nenašel, ale ve světě je jich už hodně: [https://pwa.rocks/](https://pwa.rocks/)

Více informací:

[https://en.wikipedia.org/wiki/Progressive_web_app](https://en.wikipedia.org/wiki/Progressive_web_app)
[https://cloudfour.com/thinks/the-business-case-for-progressive-web-apps/](https://cloudfour.com/thinks/the-business-case-for-progressive-web-apps/)

### Univerzální aplikace

Z pohledu šetření času také velmi atraktivní varianta. Například s pomocí React Native můžete stavět nativní aplikace. Ty ale píšete v jazyce a frameworku, kterým můžete vytvořit i webovou aplikaci. 

Více informací:

[https://facebook.github.io/react-native/](https://facebook.github.io/react-native/)

## Weby versus aplikace: „záběr“ versus „zápřah“

Obecně platí, že weby mají na mobilech skvělý *záběr*. Navštíví je daleko více uživatelů. 

Pokud jste firma, co má věrné uživatele, aplikací jste zase schopní je více *zapřáhnout*. Díky snadnějšímu ovládání a rychlé dostupnosti budou daleko aktivnější než uživatelé webu. 

![Reach (web) vs. Rich (native)](dist/images/original/vdwd/lukew-reach-rich.png)

*Obrázek: „Reach (web) vs. Rich (native) OR why you want both.“ Zdroj: Luke Wroblewski [na Twitteru](https://twitter.com/lukew/status/649255909420503041).*

Podle comScore (The 2015 U.S. Mobile App Report) měl v červnu 2015 americký mobilní Web na 9 milionů unikátních uživatelů, nativní aplikace jen něco přes tři. Jenže v aplikacích strávil průměrný uživatel přes 200 minut času, v prohlížeči něco přes 10 minut.

V angličtině to stručně a pěkně popsal Luke Wroblewski: 

> The Web is for audience reach and native apps are for rich experiences. Both are strategic. Both are valuable.

Takže usmíření na závěr. Web potřebujete skoro vždy, aplikaci někdy. Někdy aplikací uděláte věci co s webem nedokážete. V aplikaci můžete uživatele více zapřáhnout. A existuje spoustu variant jak udělat aplikaci a netrápit se extra kódem pro různé platformy. Tím bychom mohli mít tuto odbočku k aplikacím uzavřenou.

Zdroje:

[http://www.lukew.com/ff/entry.asp?1954](http://www.lukew.com/ff/entry.asp?1954)

[https://twitter.com/lukew/status/649255909420503041](https://twitter.com/lukew/status/649255909420503041)

[http://www.comscore.com/Insights/Presentations-and-Whitepapers/2015/The-2015-US-Mobile-App-Report](http://www.comscore.com/Insights/Presentations-and-Whitepapers/2015/The-2015-US-Mobile-App-Report)

