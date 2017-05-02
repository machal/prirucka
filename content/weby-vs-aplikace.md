# Weby versus aplikace 

Podívejte se, jsem webař, aplikace nedělám. Už si o nich ale se mnou chtělo povídat tolik lidí, že se o ně zajímám alespoň ze strategického pohledu. Pokud vám tedy stačí stručný úvod do tématu, čtěte.

<!-- AdSnippet -->

Rovnou říkám, že rozhodování není tak polarizované: existuje velká škála možností mezi webem a aplikací. Slovo „versus“ v názvu textu možná dokonce není na místě, weby a aplikace se totiž mohou skvěle doplňovat.


## Weby versus nativní aplikace

Hned první problém je v definici. Jednoduše se nám budou definovat jen dva extrémní póly:

Za *web* považuji software vytvořený technologiemi standardizovanými webovým konsorciem W3.org a přidruženými organizacemi. Jde hlavně o HTML, CSS, Javascript a různá API pro komunikaci aplikace se systémem a zařízením. 

Za *nativní aplikaci* považuji software vytvořený v programovacím jazyce pro konkrétní operační systém. Například pro iOS, operační systém mobilních zařízení od Apple, napíšete nativní aplikaci v jazycích Objective-C nebo Swift.

Tohle bylo jednoduché. Aplikace ale nemáme jen „nativní“.


## Nativní, hybridní, progresivní a univerzální aplikace

Nejprve stručně:

- *Nativní* aplikace je psaná na míru konkrétnímu operačnímu systému.
- *Hybridní* aplikace je kombinací nativního přístupu s univerzálním webem.
- *Progresivní* webová aplikace je web, který umí některé vlastnosti nativních aplikací.
- *Univerzální* aplikace je obecný pojem pro přístup návrhu a vývoje tak, aby se dělal jen jednou a obsloužil všechna zařízení.

### Nativní aplikace

Jak už jsem psal, nativní aplikaci si tady definujeme jako software běžící v prostředí přirozeném pro aktuální platformu. Na iOS ji tedy musíte napsat v jazycích Objective-C nebo Swift. Na Androidu v Javě. Na Windows 10 zase v třeba C#.

Tento přístup se obecně vyplatí hráčům s velkou cílovou skupinou: v Česku to jsou například banky, mediální domy nebo operátoři. Nutné to je ve specifických oborech jako jsou mobilní hry, přehrávání videa a tak dále. V těch nevadí, že je vývoj v různých jazycích pro různé platformy drahý. Využijí výhody tohoto přístupu ve formě snadnějšího zabezpečení, vyladění výkonu nebo využití nativních funkcí platformy. Některé aplikace navíc z principu není možné udělat jinak než nativním přístupem: například speciální klávesnice nebo widgety.

Je sice možné nechat si nativní aplikaci prohledávat Googlem (App Indexing), ale obecně se pro prezentaci statických informací hodí méně než weby.

### Nativní aplikace vytvářené pomocí překladačů

Psaní různých aplikací pro různé platformy se dnes ale neděje tak často. Jak už jsem uváděl, je to velmi drahé. Pro obyčejné aplikace je lepší využít některý z překladačů. Každý z nich má jednotný technologický základ, ze kterého se pak generují aplikace pro jednotlivé platformy. Příkladem může být třeba rodina nástrojů Xamarin. [xamarin.com](https://www.xamarin.com/)

### Hybridní aplikace

Představuje zajímavý sjednocující přístup mezi webem a nativní aplikací. Prostředky pro výrobu nativní aplikace vytvoříte jen „obal“, kontejner s hlavními ovládacími prvky. Do něj vložíte prohlížečovou komponentu, které se říkává WebView. V ní pak běží webová aplikace, kterou vytvoříte v našich dobře známých jazycích HTML, CSS a Javascriptu. Výhoda možnosti instalace ikonky na plochu, známá od nativních aplikací, zůstává.

Hybridní je část snad každé větší aplikace. V ČR jmenujme ke dni psaní textu třeba aplikaci Invia.cz (technicky řešenou pomocí dua technologií Cordova a React).

Více informací o hybridním přístupu hledejte třeba na blogu firmy Pixelfield, „Hybridní mobilní aplikace: kdy ano a kdy ne?“ [vrdl.in/e7j8h](https://pixelfield.cz/blog/hybridni-mobilni-aplikace-kdy-ano-a-kdy-ne/)

### Progresivní webové aplikace

Nejnovější přístup. Propaguje jej Google a Microsoft s ním souhlasil. Apple ke dni psaní textu zatím neví, jestli to neudělá nějak po svém. 

Zkrátka napíšete webovou aplikaci, která se otevírá v prohlížeči, ale za určitých podmínek může získat výhody nativní aplikace:

* načte se rychle a pracuje offline
* sama se nainstaluje na plochu uživatele
* má možnost posílat mu notifikace 

Moc se mě to líbí, protože to dělá příjemný kompromis mezi webem a nativní aplikací a pro minimálně dvě platformy je půjde vyvíjet stejně univerzálně běžnou webovou stránku. A slovo „progresivní“ definuje chování na nepodporovaných platformách: prostě tam uvidíte běžnou webovou aplikaci.

V Česku jsem během psaní textu příklad nenašel, ale ve světě je jich už hodně. Na PWA.rock jsou seřazené ty nejlepší. [pwa.rocks](https://pwa.rocks/)

Detaily o progresivních webových aplikacích hledejte u Jasona Grigsbyho v textu „The Business Case for Progressive Web Apps“. [vrdl.in/aklr5](https://cloudfour.com/thinks/the-business-case-for-progressive-web-apps/)

### Univerzální aplikace

Z pohledu šetření času také velmi atraktivní varianta. Na různých platformách znamená spojení „univerzální aplikace“ různé věci. Jde ale o jediné: Na všech zařízeních a platformách tvořit rozhraní z jednoho místa. Netrávit tedy čas designérů a vývojářů vývojem pro konkrétní zařízení nebo platformy.

Například s pomocí React Native můžete stavět nativní aplikace. Ty ale píšete ve stejném jazyce a podobném frameworku jakým můžete vytvořit i webovou aplikaci. [facebook.github.io/react-native/](https://facebook.github.io/react-native/)

Uživatelé Windows si pod pojmem „univerzální aplikace“ představí spíše aplikace pro Universal Windows Platform. V tomto kontextu jde o apky stavěné tak, aby zároveň běžely na počítačových i mobilních zařízeních. [vrdl.in/s9ywc](https://wmmania.cz/clanek/univerzalni-aplikace-pro-windows/)

<!-- AdSnippet -->

Univerzální aplikací bychom mohli ukončit slovník dnešních typů aplikací. Pojďme si ještě porovnat weby a aplikace. Pro jaký účel se hodí? 


## Jen nativní aplikace vám nestačí

Občas je totiž stále slyšet, že „když máme aplikaci, nepotřebujeme web“. To ale není pravda. Ze všech možných příkladů vyberu web restaurace v sousední vesnici. Slyšte příběh o tom, jak jsem se v El Asador nenajedl, i když jsem chtěl. On vlastně asi stačí obrázek:

![Web restaruace El Asador](dist/images/original/vdwd/el-asador.png)

*Web restaurace El Asador na desktopu a mobilech. Příklad za všechny weby, které na mobilech nezdravě upřednostňují reklamu na aplikaci namísto informací samotných*

Ano, přes mobil jsem se chtěl podívat na menu a případně zarezervovat stůl. Provozovatelé webu po mě ale chtějí, abych:

1. šel do App Store
2. v App Store se přihlásil
3. stáhl si jejich aplikaci na mobilním připojení
4. jejich aplikaci si otevřel
5. naučil se aplikaci ovládat
6. a nakonec bych si třeba prohlédl menu a zarezeroval stůl

Víte, co jsem udělal? Šli jsme se ženou do Lokálu U Zavadilů. Jako vždy.

Je tu ještě jedna věc. Z průzkumů vychází, že uživatelé zase tak moc nativních aplikací na mobilech nevyužívají a snížila se jejich ochota instalovat si aplikace nové.

![Uživatelé tráví 88 % svého času jen v pěti aplikacích](dist/images/original/vdwd/forrester-cas.png)

*Podle Forrester Research uživatelé tráví 88 % svého času na mobilních zařízení jen v pěti aplikacích. [vrdl.in/en8rk](http://blogs.forrester.com/nicole_dvorak/16-01-28-data_digest_just_a_handful_of_apps_account_for_nearly_all_app_time_on_smartphones)*

Pět aplikací? To máme e-mail, Facebook, mapy, volání, fotky, prohlížeč… Počkejte, už jich je šest! Bude tady místo pro restauraci z Hrnčířů? Nejspíš ne. 

Do aplikace lidi tak snadno nedostanete. Na web je to jednoduché, chodí vám tam z Google vyhledávání, Facebooku, e-mailů, chatů… však víte. 

Proto říkám: web potřebují všichni, nativní aplikaci dokáží prosadit jen někteří.

Pojďme se ale zamyslet nad situací, že neděláte statický web restaurace, protože tam je to jasné. Přemýšlejme nad situací, že váš software splňuje uživatelskou definici aplikace: je interakčně složitý. 

<!-- AdSnippet -->

To teď máte draze vyrobit nativní aplikaci a ještě se smířit s tím, že ji uživatelé nebudou používat? Nemusí to být tak hrozné, protože zde máme kompromisní přístupy.




## Weby versus aplikace: „záběr“ versus „zápřah“

Obecně platí, že weby mají na mobilech skvělý *záběr*. Nemusí se instalovat a s rozumnou propagací je navštíví daleko více uživatelů. Kanálů k propagaci je celá řada: sociální sítě, vyhledávače, bannery… Vlastně všechny kanály známé z dnešního Webu.

Pokud jste firma, co má věrné uživatele, aplikací jste zase schopní je více *zapřáhnout*. Díky snadnějšímu ovládání a rychlé dostupnosti budou daleko aktivnější než uživatelé webu. 

![Reach (web) vs. Rich (native)](dist/images/original/vdwd/lukew-reach-rich.png)

*„Reach (web) vs. Rich (native) OR why you want both.“ Zdroj: Luke Wroblewski na Twitteru. [vrdl.in/8lh4f](https://twitter.com/lukew/status/649255909420503041)*

Zvládnete ještě nějaká čísla? Podle comScore (The 2015 U.S. Mobile App Report) měl v červnu 2015 americký mobilní web na 9 milionů unikátních uživatelů, nativní aplikace jen něco přes tři. Jenže v aplikacích strávil průměrný uživatel přes 200 minut času, v prohlížeči něco přes 10 minut.

V angličtině to stručně a pěkně popsal Luke Wroblewski: 

> The Web is for audience reach and native apps are for rich experiences. Both are strategic. Both are valuable. [vrdl.in/wsfe8](http://www.lukew.com/ff/entry.asp?1954)

Takže usmíření na závěr: 

- Web potřebujete skoro vždy, aplikaci občas. 
- Někdy aplikací uděláte věci, která s webem udělat nedokážete, vzpomeňte na hry nebo Instagram. 
- V aplikaci můžete uživatele více zapřáhnout. 
- Existuje spoustu variant jak udělat aplikaci a netrápit se extra kódem pro různé platformy.

<div class="text-small" markdown="1">
  Text byl původně součástí připravované knihy [Vzhůru do (responzivního) webdesignu](http://www.vzhurudolu.cz/ebook-responzivni). Za připomínky k článku děkuji [Honzovi Sládkovi](https://www.mangoweb.cz/en/tym/honzas), [Jirkovi Sekerovi](https://twitter.com/signalizer?lang=cs), [Honzovi Kvasničkovi](http://www.kvasnickajan.cz/), [Janu Polzerovi](https://www.polzer.cz/), [Tomáši Musiolovi](https://www.musiol.cz/) a dalším.
</div>
