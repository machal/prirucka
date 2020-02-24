# Jak AMP chrání rychlost před webaři. A co je jeho největší přínos?

Za pomalé weby nemohou technologie, ale zase jenom lidé. 

<!-- AdSnippet -->

## Někteří webaři jsou totiž rychlostní mimoni {#mimoni}

Představím vám tři z nich:

### Mimoňský designér

Nečetl [článek](https://www.vzhurudolu.cz/prirucka/rychlost-designeri), takže v návrhu použije osmnáct řezů písma, do pozadí stránky vloží pětiminutové video, stránka bude samý obrázek a vše se animuje. A hlavně se vůbec nebude bavit se zbytkem týmu. Rychlost je přece věcí vývojáře. Prostě to nadizajnuje. 

### Mimoňský vývojář

Nebyl [na školení](https://www.vzhurudolu.cz/kurzy/rychlost-nacitani), nečte. Ostatně – nic vědět nepotřebuje. Psát kód umí, tak kam by chodil a co by četl…? Podklady od designéra vezme tak jak jsou. Proč by se s designérem bavil? Optimalizaci neřeší, rychlost netestuje. Do stránky vloží dvacet tři  jQuery knihoven, na které je zvyklý. 

### Mimoňský markeťák

Rychlost neřeší. Proč by měl? To je přece úkol vývojáře. Do stránky vloží čtyři monitorovací a A/B testovací skripty. Poběží pořád a na všech stránkách. I když se zrovna nic netestuje. Přidá chatovací lištu a vývojáře poprosí o plugin pro marketingový splash screen, který viděl na Alze.

<figure>
<img src="../dist/images/original/amp-webari.jpg" alt="">
<figcaption markdown="1">    
*Tři rychlostní mimoni: grafik, marketér a vývojář*
</figcaption> 
</figure>

Je asi jasné, že tihle tři rychlost webu společnými silami zabijí. Problémy se kupí až se nakupí.

Ale zároveň je jasné, že jsem si vybral sice reálné, ale poněkud extrémní hrdiny. V normálních webařských týmech nejsou všichni takoví, že?

<div class="related" markdown="1">
- [AMP opravuje a zároveň rozbíjí World Wide Web](https://www.vzhurudolu.cz/blog/40-amp)
</div>

Dobře, ale vysvětlete mi, proč má většina českých webů, které jsem testoval, [Speed Index](metriky-rychlosti.md#SI) na hodnotách přes dvacet tisíc bodů? I když za nimi stojí často jednotlivci, jejichž práce si vážím.

Je to prostě proto, že většina týmů nemá rychlost v procesech. Nenavrhují, nevyvíjejí a nedělají marketing s ohledem na cílové [rychlostní metriky](metriky-rychlosti.md).

Milí čtenáři, rychlost [má vliv na úspěšnost webu](rychlost-nacitani-proc.md), takže si [nastavte rychlostní limity](rychlost-designeri.md), ty kontrolujte a na jejich dodržování vyčleňujte peníze a lidi. 

Takhle jednoduché to je.

<!-- AdSnippet -->

Jenže – než se to všichni naučíme, bude to trvat dlouhá léta. Google ale dobře ví, jak by náhlý pokrok v rychlosti načítání vylepšil uživatelský prožitek webů. A myslím, že už to s námi nemohl vydržet.

## I proto Google přišel s AMP {#google-amp}

AMP neslibuje jen rychlejší zobrazení. On slibuje zobrazení okamžité. Proto je potřeba být velmi přísný a AMP přísný je. Jen namátkou:

* Žádné vlastní UI komponenty
* Žádný vlastní Javascript
* Žádné vlastní měřící skripty
* Žádné vlastní reklamy
* Velikost CSS maximálně 75 kB

…a taky AMP přidal několik vychytávek navíc:

* Umístění stránky na CDN u Google
* Přednačtení od Google

Výsledek není vůbec marný. Takový nějaký efekt to má:

<div class="rwd-media">
<iframe width="560" height="315" src="https://www.youtube.com/embed/elHr8-MPUwA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>


## Hlavní kouzlo? Přednačtení 

Zatímco totiž koukáte na výsledky vyhledávání Google, prohlížeč nelení a stahuje AMP stránky ve výsledcích zobrazené. 

Zkoušel jsem otestovat dva z českých AMP webů – blog váženého klienta [Bella Rose](https://atmosfera.bellarose.cz/) a [recepty na Cuketka.cz](https://recepty.cuketka.cz/):

<figure>
<img src="../dist/images/original/amp-bella-cuketka.jpg" alt="">
<figcaption markdown="1">    
*Nahoře Bella Rose a jejich původní článek na blogu, pak jeho umístění v Google hledání a nakonec AMP verze téhož, řešená WordPress pluginem. Totéž dole u pana Cuketky.*
</figcaption> 
</figure>

A teď pár čísel:

<figure>

<div class="rwd-scrollable"  markdown="1"> 
|                       | Bella Rose | Cuketka |
|:----------------------|-----------:|--------:|
| Web                   | [22 885](http://www.webpagetest.org/result/180502_2Z_22212723941f351cbc1d9153613e24d6/)     | [12 971](http://www.webpagetest.org/result/180502_TG_44d1a396f62dadef61c4bf7acee38168/)  |
| AMP                   | [9 467](http://www.webpagetest.org/result/180502_6V_0feb0e79557ed9e72cd0516bcf0cb543/)      | [15 722](http://www.webpagetest.org/result/180502_YR_661ab2c8975b7e263926e8a70b18a172/)  |
| AMP na Google         | [6 951](http://www.webpagetest.org/result/180503_XS_75b445657bab9f10380e132ed37e039a/)      | [11 660](http://www.webpagetest.org/result/180503_6G_9a8543860735ed43c9d5014f5c792de1/)  |
| AMP na Google preload | [274](http://www.webpagetest.org/result/180503_5G_94e1f712366d153b550b726caf968f66/)        | [163](http://www.webpagetest.org/result/180502_18_0d526b6b029a87f2ca85e7f12dfc9406/)     |
</div>  

<figcaption markdown="1">    
*Tabulka: Srování Speed Indexů různých verzí detailů článků. Běžný web, pak AMP verze na hostingu u běžného webu, AMP na CDN cache u Google. To poslední je měřeno s dostatečným časem na přednačtení. V odkazech na číslech jsou zdrojové testy z WebpageTest.org*
</figcaption> 

</figure>


Když jsem poprvé viděl Speed Indexy přednačtených AMP stránek, spadla mi čelist. 

Je sice pravda, že ne vždy se musí AMP stránka stihnout přednačíst. Speed Index se bude pohybovat vždycky mezi hodnotami na předposledním a posledním řádku.

A na hodnoty s přednačtením se s běžným webem nemáte šanci dostat.

Mimochodem – všimněte si, že u pana Cuketky je Speed Index AMP stránky vyšší než u běžného webu. Není to optimální, ale v kontextu preloadované AMP stránky je to vlastně úplně jedno.


## Web je pomalý díky možnostem. AMP je rychlý díky omezením {#rychly-diky-omezenim}

Co tedy AMP vyřešil oproti běžnému webu?

|               | Web | AMP |
|---------------|:---:|:---:|
| HTML, CSS, JS | -  | -  |
| Rychlý server | -  | -  |
| Přednačtení   | -  | ✔   |
| Webaři        | -  | ✔   |

Tabulka je trochu zjednodušená, ale takhle to vidím:

### Nevyřešil: HTML/CSS/JS a webové technologie

I na „normálním“ webu můžete použít lazyloading obrázků, zakázat si vymýšlet vlastní UI komponenty a přidávat desítky JS knihoven.

### Nevyřešil: Rychlý server

AMP vám jej nabídne (stránky si Google stáhne přímo na svou CDN cache), ale není důvod si podobně skvěle zoptimalizovat servírování vašeho „normálního webu“.

### Vyřešil: Přednačtení

Prostě proto, že Google vám jej ve výsledcích vyledávání nabídne jen u AMP stránek. Filozoficky vzato, je fakt škoda, že vám totéž nenabídne u rychlých běžných webů. Ale to by bylo na dlouhou diskuzi, takže snad jindy.

### Vyřešil: Mimoňské webaře

Jejich kreativita je omezená a zlozvykům je zabráněno. Procesy vylepšovat netřeba. S AMPem jde udělat pomalou stránku, ale ne zas tak šíleně hlemýždí jako u „normálních webů“. Tim Kadlec ukázal, že [AMP stránka je obvykle rychlejší](https://timkadlec.com/remembers/2018-03-19-how-fast-is-amp-really/) než normální stránka od stejného týmu.

## „AMP je rychlý web pro blbý“ {#pro-blby}

Tohle mi napsal [Pavel Ungr](http://www.pavelungr.cz/), když se koukal na můj materiál pro jeho [SEOloger](https://nazivo.seologer.cz/). A je to tak. 

Ano, je nutné se bavit i o jeho nevýhodách. Namátkou:

- jak proprietární technologie [škodí otevřenému Webu](https://www.vzhurudolu.cz/blog/40-amp),
- jak nehezké je, že Google neumožní přednačtení i rychlým běžným webům,
- jak se zatím těžko hledá hranice, kde AMP nasadit a kde ne…

Jedno je ale jisté. S AMPem udělají rychlou stránku úplně všichni. 

<!-- AdSnippet -->

