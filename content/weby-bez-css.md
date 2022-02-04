# Weby bez CSS: Existuje to vůbec? A jak to testovat?

Je docela dost situací a kontextů, ve kterých se weby vykreslují s jinými než vašimi styly nebo úplně bez nich. Prima video k tomu natočila [Jen Simmons](https://www.youtube.com/watch?v=C82zB_yaGF8).

Pojďme teď téma shrnout a doplnit vlastními postřehy.

Jen Simmons o problematice mluví hlavně v kontextu nových layoutovacích nástrojů – [Flexboxu](css-flexbox.md) a gridu. Díky [`order`](css-order.md) a [dalším vlastnostem](css3-flexbox-polozky.md) totiž už nemusíte při vymýšlení pořadí prvků v HTML brát v potaz layout. Prostě pořadí plně uzpůsobíte „bezstylovým“ kontextům. Jaké známe?


## 8 bezstylových kontextů {#bez-css}

### 1) Přístupnost: lidé používající čtečky {#ctecky}

Prožitek  uživatelů čteček velmi ovlivňuje pořadí prvků v HTML (ale také [struktura dokumentu](html5-struktura.md), použití sémantických značek a další věci). Psal jsem už také o tom, [jak ve čtečkách testovat](testovani-odecitace.md).

### 2) SEO a vyhledávače {#vyhledavace}

Pořadí prvků v HTML může mít vliv na zobrazení výsledků a snad někde i menší vliv na pořadí ve vyhledávačích.

### 3) Náhledy stránky: Facebook a spol. {#nahledy}

Struktura HTML má vliv i na to, jak bude vypadat náhled, který se zobrazí po nasdílení stránky na Slacku, Facebooku a dalších komunikačních sítích.

<!-- AdSnippet -->

### 4) Čtecí služby třetích stran: Pocket, Instapaper atd. {#cteci-sluzby}

…nebo taky RSS čtečky jako Feedly a další. Vezmou si vaše HTML a přiřadí si k němu nějaké vlastní CSS.


### 5) Čtecí mód v Safari nebo Firefoxu {#reader-view}

Jinak též „Reader View“. A opět platí: prohlížeč si vezme vaše HTML a přidá k němu své CSS.

### 6) Výpadek CSS {#vypadek}

Nezapomínal bych ani na kontext, který Jen Simmons nezmínila: když vaše stránka dočasně nebo trvale CSS nemá. To, že styly zapomenete přidat není tak pravděpodobné jako to že vypadnou ve starších částech webu.

<!-- AdSnippet -->

Další možnost rozbití CSS uvádí [Bohumil Jahoda na Ječas.cz](http://jecas.cz/bez-css): syntaktická chyba. Stačí hned v první deklaraci zapomenout na ukončovací  závorku:

```css
h1 { color: green;
    
/* a teď už je všechno neplatné */
h1 { … }
```

### 7) Problémy s načtením CSS {#nacitani}

Další nezmíněná situace: Prohlížeč stáhl HTML a čeká na CSS. Jenže se nedočká. 

Tohle se mi poměrně často stává na Edge připojení v pražském metru nebo během cestování vlakem. Dojde k tomu, když během stahování CSS zmáčknete tlačítko „Stop“ v rozhraní prohlížeče.

Jenže někdy zjistíte, že jste jako uživatel webu bez stylů zároveň považován za škodnou:

<blockquote class="twitter-tweet" data-lang="en"><p lang="cs" dir="ltr">Když se vám <a href="https://twitter.com/FINMAG_cz?ref_src=twsrc%5Etfw">@FINMAG_cz</a> náhodně zobrazí bez CSS, zjistíte že vás automaticky považují za uživatele AdBlocku. A já jsem přitom slušnej kluk a Finmag mám rád. <a href="https://t.co/2AUXkeCgmd">pic.twitter.com/2AUXkeCgmd</a></p>&mdash; Martin Michálek (@machal) <a href="https://twitter.com/machal/status/970314002780835841?ref_src=twsrc%5Etfw">March 4, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

 
### 8) Hlasoví asistenti: Siri, Google Assistant

…nebo Cortana či Alexa. Jsem si docela jistý, že půjde o jeden z kontextů používání webů. Pojedete v autě nebo hromadné dopravě a necháte si číst nové články z internetu. Velmi blízká budoucnost.



## Co je potřeba mít správně?

1. Pořadí prvků ve stránce   
2. [Strukturu v HTML](html5-struktura.md) 
3. Celkovou [HTML](https://www.vzhurudolu.cz/html) sémantiku

To důležité by v HTML mělo být nahoře. Častým problémem je například komplexní navigace umístěná v kódu ještě před obsahem.


## Testování webů bez CSS

- Nejlépe samozřejmě ve zmíněných nástojích: Čtecích módech prohlížečů, čtečkách pro zrakově postižené a tak dále. 
- Ve Firefoxu to je jednoduché. Jděte do nabídky „View“ > „Page Style“ a vyberte „No style“.
- V Chromu to snadno jde jen přes rozšíření [Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm). („CSS“ > „Disable All Styles“).


Shrňme si to:

- I váš web se pravděpodobně někde zobrazuje bez vlastních CSS.
- Nejčastěji je to v různých odečítačích jako je JAWS, čtenářských módech prohlížečů, čtenářských službách typu Pocket, při problémech s načtením stylů nebo do budoucna v hlasových asistentech typu Siri.
- Dohlédněte na to, abyste v HTML měli správně hlavně pořadí prvků, strukturu a sémantiku.
- Otestujete to buď přímo ve zmíněných nástrojích nebo vypnutím stylů ve Firefoxu.

<!-- AdSnippet -->
