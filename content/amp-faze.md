# Rychlost AMP stránky ve fázích distribuce

AMP se občas vytýká, že ve skutečnosti tak rychlé není. V řadě konkrétních případů to může být pravda, ale při zobrazení [v AMP Vieweru](https://drive.google.com/open?id=1K0kr6Z2EuRUBbf_K3J8WsETmv0n5V210MStIyzxqCSc) s přednačtením hledá tato technologie konkurenci opravdu jen těžko.

Jak už víme, než se AMP dostane do této ideální distribuční formy, prochází různými jinými umístěními, nebo také fázemi distribuce. Pojďme si je teď všechny projít a podívat se, jak jsou v nich konkrétní stránky rychlé.

<figure>
<img src="../dist/images/original/vdamp/amp-faze.png"  height="540"  width="1920" alt="">
<figcaption markdown="1">
_Obrázek: Pět fází distribuce AMP stránky._
</figcaption>
</figure>

Testovat budeme dvě stránky:

* _Článek na Vzhůru dolů_  
Tady vycházíme už z poměrně slušně optimalizované stránky, navíc s velmi malým množstvím JavaScriptu. Další zajímavostí je to, že AMP i non-AMP verze článků na Vzhůru dolů vypadají prakticky stejně.
* _Článek z Reflex.cz_  
Pro použití AMP jde o daleko příhodnější a typičtější případ: Nijak zvlášť rychlá stránka, navíc zatížená reklamou, velký vydavatel… Přesně pro tyto typy stránek bylo AMP původně určeno. V tomto případě není vzhled obou verzí jednotný, ale to je pro tyto weby také typické.

<figure>
<img src="../dist/images/original/vdamp/amp-faze-vd-reflex.png" alt="">
<figcaption markdown="1">
_Obrázek: Non-AMP verze obou článků na Vzhůru dolů a Reflexu._
</figcaption>
</figure>

Pojďme na testy a jejich výsledky.

## 1) Původní stránka na hostingu

Testovat budeme tyto dvě URL adresy:

```url
https://www.vzhurudolu.cz/prirucka/http-2

https://www.reflex.cz/clanek/rozhovory/95433/chybejici-goly-cesky-hokej-ma-problem-jinde-rika-trener-milos-riha.html
```

Poslouží nám jako základní míra, kterou použijeme pro další srovnání. Naměřené metriky rychlosti vykreslování uvidíme vždy v jednoduché tabulce. V tomto případě je stav následující:

|   |První vykreslení|Index rychlosti|První interaktivita|
|-- |---------------:|--------------:|------------------:|
|Vzhůru dolů|5,6 s| 6,9 s| 1,5 s|
|Reflex     |8,2 s|19,8 s|25,0 s|

Mezi námi je jistě mnoho takových, kterým uvedené metriky nic neříkají. Nevadí, vše vysvětlíme. Jde o události, které vznikají během vykreslování stránky:

* _První vykreslení (Start Render)_ – moment, kdy prohlížeč začne zobrazovat první pixely stránky.
* _Index rychlosti (Speed Index)_ – chvíle, v níž je hotové vykreslení první obrazovky, tedy oblasti nad zlomem stránky.
* _První interaktivita (First Interactive)_ – moment, kdy je možné stránku používat, aniž by docházelo ke zpožděným reakcím.

Porovnávaných metrik by mohlo být mnohem více, ale tyhle tři docela slušně popisují uživatelský prožitek člověka čekajícího na obsah testované stránky. Zájemce o hlubší porozumění metrikám rychlosti webů odkážeme opět na Vzhůru dolů. [vrdl.cz/p/metriky-rychlosti](https://www.vzhurudolu.cz/prirucka/metriky-rychlosti)

Pořádek dělá přátele, takže dodejme, že měříme nástrojem WebpageTest.org na emulaci mobilu Nexus 5 a při rychlosti připojení „3G Fast“. Všechny zdrojové testy a jejich výsledky jsou k dispozici na [vrdl.in/ampwpt](https://docs.google.com/document/d/1zz3MtDQ-EhGRWyRA5EQWgyPXbtDF5o5gTpCtjyxhZDI).

Nyní se podíváme na AMP verzi stránek, ale stále zůstaneme na běžném hostingu.

## 2) AMP stránka na hostingu

AMP verze obou stránek jsou umístěné na následujících adresách:

```url
https://www.vzhurudolu.cz/amp/prirucka/http-2
https://www.reflex.cz/clanek/rozhovory/95433/chybejici-goly-cesky-hokej-ma-problem-jinde-rika-trener-milos-riha.html?amp=1
```

Ptáte se, jak vypadají?

<figure>
<img src="../dist/images/original/vdamp/amp-faze-vd-reflex-amp.png" alt="">
<figcaption markdown="1">
_Obrázek: AMP verze obou článků._
</figcaption>
</figure>

A jak se změnila čísla?

||První vykreslení|Index rychlosti|První interaktivita|
|----|---:|---:|---:|
|Vzhůru dolů|5,6 s|8,6 s|3,7 s|
|Reflex|2,8 s|3,2 s|2,8 s|

### Vzhůru dolů

Nejprve si okomentujme výsledky pro Vzhůru dolů: _První vykreslení_ zůstalo na stejné úrovni, _Index rychlosti_ a _První interaktivita_ se zhoršily. Proč?

Je potřeba si uvědomit dvě věci:

1. Už původní verze článku je velice minimalistická z pohledu použití JavaScriptu. Vystačí si s knihovnou jQuery a dvěma, třemi pluginy. Dohromady nějakých 50 kB kódu.
2. Každá AMP stránka vyžaduje vložení AMP knihovny, ve které prohlížeč stahuje a spouští téměř 80 kB kódu, a to nepočítáme javascriptový kód pro jednotlivé komponenty.

K druhému bodu je potřeba říci, že nutnost vkládání komponent je aktuálně jedním z problémů AMP. Autoři ovšem pracují na jeho odstranění. O projektu „Bento“ najdete více v textu [o kanonických AMP stránkách](https://docs.google.com/document/d/1dMX8R881Xds7cpCCyYfAZm_tp-lz3rmEFZiKjZdxVOs/edit#) třetí kapitoly.

Dobré to tady pro AMP úplně není. Trápilo by nás to ale, jen pokud bychom pomocí AMP vytvářeli i klasickou verzi webu. Varianta stránky AMP umístěné na hostingu totiž není určená pro lidské návštěvníky, ale jen pro zpracování roboty a nahrání do [AMP Cache](https://docs.google.com/document/d/155OVlQsp8SBCFOT5qmvwnpgbN42TJ4FtqE5ZVs59thI).

### Reflex

Metriky AMP stránky z webu Reflexu asi nepotřebují komentáře. Došlo k násobnému zlepšení ve všech metrikách. Dodejme však, že AMP stránka vypadá jinak než ta původní.

## 3) AMP stránka na AMP Cache

Podívat se na verzi stránek umístěnou právě na tomto místě bude zajímavé:

```url
https://www-vzhurudolu-cz.cdn.ampproject.org/v/s/www.vzhurudolu.cz/amp/prirucka/http-2

https://www-reflex-cz.cdn.ampproject.org/v/s/www.reflex.cz/clanek/rozhovory/95433/chybeji...lem-jinde-rika-trener-milos-riha.html
```

A čísla?

||První vykreslení|Index rychlosti|První interaktivita|
|----|---:|---:|---:|
|Vzhůru dolů|5,5 s|6,4 s|3,1 s|
|Reflex|3,2 s|3,3 s|3,2 s|

Na [AMP Cache](https://docs.google.com/document/d/155OVlQsp8SBCFOT5qmvwnpgbN42TJ4FtqE5ZVs59thI/edit#heading=h.bv7h5ckbspk7) už proběhly automatické úpravy kódu stránky a prvků, které jsou v ní vložené, jako například obrázky.

Celkový obrázek metrik zůstává zhruba na stejné úrovni jako na hostingu, některé se zlepšily, jiné zhoršily… Ale víte co? Na tom ještě pořád nesejde, stále nejsme u cíle a ani na této adrese by stránku uživatelé navštěvovat neměli.

## 4) AMP stránka v AMP Vieweru

[AMP Viewer](https://drive.google.com/open?id=1K0kr6Z2EuRUBbf_K3J8WsETmv0n5V210MStIyzxqCSc) má za úkol zobrazit weby z AMP Cache, přidat informační lištu s adresou původního webu a ovládacími prvky. Dále by měl pomoci s vykreslením a přednačtením stránky. Adresy našich stránek jsou nyní následující: \

```url
https://www.google.com/amp/s/www.vzhurudolu.cz/amp/prirucka/http-2

https://www.google.com/amp/s/www.reflex.cz/clanek/rozhovory/95433/chybejici-goly-cesky-hokej-ma-problem-jinde-rika-trener-milos-riha.html%3famp=1
```

Ukažme si také čísla:

||První vykreslení|Index rychlosti|První interaktivita|
|----|---:|---:|---:|
|Vzhůru dolů|5,6 s|7,5 s|1,8 s|
|Reflex|1,1 s|4,0 s|2,1 s|

Jak je tady vidět, metrika _První interaktivita_ během optimalizací prováděných v jednotlivých krocích klesá. Naopak se zde zhoršil _Index rychlosti_, zobrazení hotové první obrazovky. Příčinou je nutnost vykreslení celé stránky v `<iframe>` a přidání lišty informující o původní adrese webu. Technologie „Signed HTTP Exchanges“ (viz předchozí text o [AMP Cache](https://docs.google.com/document/d/155OVlQsp8SBCFOT5qmvwnpgbN42TJ4FtqE5ZVs59thI)) ale tento problém pravděpodobně odstraní.

V AMP Vieweru už mohou uživatelé na AMP stránku narazit. Další krok – přednačtení – totiž nemusí „klapnout“, takže se stránka v nejhorším případě opravdu může vykreslovat s těmito hodnotami.

Na webu Reflexu došlo v tomto kroku k hezkým zlepšením metrik _První vykreslení_ a _První interaktivita_.

V případě Vzhůru dolů jsme si ve srovnání s původní běžnou non-AMP stránkou zase tak moc nepomohli, že? Není to u AMP úplně obvyklé, ale je to zároveň skvělá příležitost upozornit na jednu důležitou věc – optimalizaci.

### Také AMP stránku je potřeba optimalizovat

Právě _optimalizace_ je totiž něco, čím v době měření AMP verze Vzhůru dolů ještě neprošla. Rovněž AMP verzi webu je třeba nakódovat „optimálně“. V článku „Optimize your hosted AMP pages“ jsou například tipy na prioritizaci důležitých zdrojů pomocí značky `<link rel="preload">`. [vrdl.in/ampopt](https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/optimize_amp)

### Skoro vždy je AMP už ve Vieweru rychlejší než původní stránka

Znovu zde zdůrazněme výjimečnost měřené stránky ze Vzhůru dolů. Známý americký autor Tim Kadlec ale testoval 50 článků velkých světových webů, odpovídajících spíše webu Reflexu, a jejich AMP verzí a došel k následujícím mediánům _Indexu rychlosti_:

* Původní články: 8 152 ms
* AMP na hostingu: 6 171 ms
* AMP v AMP Vieweru: 3 277  ms

AMP byl prostě ve studii vždycky rychlejší než běžná stránka od stejných autorů. AMP hostovaný na AMP Cache od Googlu ještě více.

A to autor neměřil přednačtenou verzi webu, do čehož se za chvíli pustíme my. Zaměřil se na velké a komplexní weby, u kterých by byla optimalizace rychlosti stávajícího řešení opravdu výzvou. To jsou ovšem projekty, kam právě AMP cílí nejvíce. Více je v Timově textu „How Fast Is Amp Really?“. [vrdl.in/amptim](https://timkadlec.com/remembers/2018-03-19-how-fast-is-amp-really)

Většina zobrazení AMP stránek by měla pocházet z ideální fáze distribuce. Pojďme se na ni podívat.

## 5) AMP stránka v AMP Vieweru s přednačtením

Adresa bude stejná jako v předchozím případě:

```url
https://www.google.com/amp/s/www.vzhurudolu.cz/amp/prirucka/http-2

https://www.google.com/amp/s/www.reflex.cz/clanek/rozhovory/95433/chybejici-goly-cesky-hokej-ma-problem-jinde-rika-trener-milos-riha.html%3famp=1
```

Zde ovšem předpokládáme, že AMP Viewer stihl stránku přednačíst, což se děje ve většině případů. Čísla jsou pak na zcela jiné úrovni:

||První vykreslení|Index rychlosti|První interaktivita|
|----|---:|---:|---:|
|Vzhůru dolů|0,1 s|0,2 s|> 0,1 s|
|Reflex|0,1 s|0,2 s|> 0,1 s|

Ano, tohle je ten důvod, proč AMP použít. K takovým hodnotám jednoduše není možné přiblížit se s běžnou stránkou.

Vyjádřeme si ještě rychlost vykreslení stránky ve třech nejzajímavějších fázích distribuce pomocí obrázku.

<figure>
<img src="../dist/images/original/vdamp/amp-faze-filmstrip.png" alt="">
<figcaption markdown="1">
_Obrázek: Porovnání rychlosti vykreslení tří různých forem článku na Reflex.cz. Zdroj: WebpageTest.org [vrdl.in/ampwptf](https://www.webpagetest.org/video/compare.php?tests=190516_FD_f125772934ff0cc7283623273a2dc9fb%2C190516_6B_4b9564a1c50c3e7bc5215cbaca235066%2C190516_WW_596910a9028eae6491f55ed6ff4d8239&thumbSize=200&ival=1000&end=visual)_
</figcaption>
</figure>

Pokud by vás snad napadlo, že takhle rychlá by mohla být každá přednačtená stránka, máte pravdu. Jenže přednačítat běžné weby zkrátka možné není. O bezpečnostních a výkonnostních rizicích budeme mluvit ještě v textu [o častých mýtech](https://docs.google.com/document/d/1ay0dVSsOg0Xb7F6CH9GUXzHx3GQMp7nnnS0zGnUn_RM/edit#).

Všechny zdrojové testy jsou k dispozici na [vrdl.in/ampwpt](https://docs.google.com/document/d/1zz3MtDQ-EhGRWyRA5EQWgyPXbtDF5o5gTpCtjyxhZDI).

Přednačtení prostě potřebuje umístění v AMP Vieweru a ten potřebuje umístění v AMP Cache a ta potřebuje použití validního AMP.

AMP stránka tedy _může_ být v určitých fázích pomalejší než ta původní, obvykle ale nebude. Technologie AMP ovšem tvoří nutný předpoklad pro bezkonkurenčně rychlé zobrazení stránky. Snad je to po tomhle rozboru jednotlivých fází distribuce jasnější.
