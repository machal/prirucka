# Weby bez CSS: Existuje to vůbec? A jak to testovat?

Je docela dost situací a kontextů, ve kterých se weby vykreslují s jinými než vašimi styly nebo úplně bez nich.

Prima video k tomu natočila Jen Simmons. Jdu je teď shrnout a doplnit vlastními postřehy.

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=C82zB_yaGF8">Jen Simmons: HTML Source Order and When There’s No CSS</a>
</p>

Jen Simmons o tom mluví hlavně v kontextu nových layoutovacích nástrojů – [Flexbox](css3-flexbox.md) a Grid. Díky `order` a [dalším vlastnostem](css3-flexbox-polozky.md) totiž nemusíte při vymýšlený pořadí prvků v HTML brát v potaz layout. Prostě jej plně uzpůsobíte „bezstylovým“ kontextům. Jaké to jsou?


## Kde se weby zobrazují bez CSS nebo s cizím CSS? {#bez-css}

### Přístupnost: lidé používající čtečky {#ctecky}

Prožitek  uživatelů čteček velmi ovlivňuje pořadí prvků v HTML (ale také sémantika a další věci). Psal jsem už také o tom, jak ve čtečkách testovat.

### SEO a vyhledávače {#vyhledavace}

Pořadí prvků v HTML může mít vliv na zobrazení výsledků a snad někde i menší vliv na pořadí ve vyhledávačích.

### Náhledy stránky: Facebook a spol. {#nahledy}

Struktura HTML má vliv i na to, jaké snippety se vám zobrazí po nasdílení stránky na Slacku, Facebooku a dalších sítích.

### Čtecí služby třetích stran: Pocket, Instapaper atd. {#cteci-sluzby}

…nebo taky RSS čtečky jako Feedly a další. Vezmou si vaše HTML a přiřadí si k němu nějaké vlastní CSS.


### Čtecí mód v Safari nebo Firefoxu {#reader-view}

Jinak též „Reader View“. A opět platí: prohlížeč si vezme vaše HTML a přidá k němu své CSS.

### Výpadek CSS {#vypadek}

Nezapomínal bych ani na kontext, který Jen Simmons nezmínila: když vaše stránka dočasně nebo trvale CSS nemá. To, že CSS zapomenete přidat není tak pravděpodobné jako, že třeba vypadne ve starších částech webu.

### Problémy s načtením CSS {#nacitani}

Další nezmíněná situace: Prohlížeč stáhl HTML a čeká na CSS. Jenže se nedočká. Tohle se mi poměrně často stává na Edge v pražském metru nebo během cestování vlakem.

Dle mého mají prohlížeče nastavený nějaký timeout a když se do určité doby CSS nedočkají, zobrazí čisté HTML. Bohužel se mi ale nepovedlo zjistit jak to přesně funguje.
 
### Do budoucna (hlasové čtečky): Siri, Google Assistant

…nebo Cortana či Alexa. Jsem si docela jistý, že půjde o jeden z kontextů používání webů. Pojedete v autě nebo hromadné dopravě a necháte si číst nové články z internetu.


## Co je potřeba mít správně?

- pořadí
- strukturu v HTML
- celkovou HTML sémantiku
- stránka by měla dávat smysl


## Testování webů bez CSS

- Nejlépe samozřejmě ve zmíněných nástojích: Čtecích módech prohlížečů, 
- Ve Firefoxu to je jednoduché. Jděte do nabídky „View“ > „Page Style“ a vyberte „No style“
- V Chrome to snadno jde jen přes rozšíření [Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm). („CSS“ > „Disable All Styles“


Shrňme si to:

- I váš web se pravděpodobně někde zobrazuje bez vašich CSS.
- Nejčastěji je to v různých odečítačích jako je JAWS, čtenářských módech prohlížečů, čtenářských službách typu Pocket, při problémech s načtením stylů nebo do budoucna v hlasových asistentech typu Siri.
- Správně potřebujete v HTML mít: pořadí prvků v kódu, strukturu a sémantiku.
- Otestujete to buď přímo ve zmíněných nástrojích nebo vypnutím stylů ve Firefoxu.


