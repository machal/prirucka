# Typografie na webu

Pojďme si projít základní množinu znalostí o využití písma na webu, zmínit pár častých chyb a dvakrát podtrhnout hlavní pravidlo pro stavbu responzivního rozvržení stránky. Předtím ale ještě zmíním jeden účel písma, na který se často zapomíná. 

## Písmo v nás vyvolává emoce

Ještě předtím než se začteme, řekne nam typ písma (spolu s dalšími prostředky grafického designu) informaci o tom, co od webu očekávat. Jsem na webu seriózního magazínu, užitného webu typu e-shopu nebo na stránkách Déčka, určeného pro děti? Asi je jasné, že tohle všechno je možné sdělit pouhou volbou písma. Je toho ale mnohem více.

Typografie je poměrně složitý obor a cit pro ni nevzniká lusknutím prstů. Myslím si nicméně, že základní úroveň znalosti typografie patří do výbavy každého webového řemeslníka, designérů i vývojářů. Zájemcům dále doporučím pár zdrojů ke studiu.

Typografie nemá exaktní pravidla, a v takové situaci mě pro potřeby předání základní úrovně typografických znalostí připadá lepší začít z druhého konce. 


## Časté typografické chyby

![](dist/images/original/typografie-16.png)

**1) Děsně dlouhé řádky.** Wikipedie je smutným rekordmanem v délce řádku. Řádek by obecně neměl zabrat více než 75 znaků, aby oči nechtěně nepřeskakovaly na řádky sousedící. Ještě o tom budu psát.

![](dist/images/original/typografie-17.png)

**2) Špatný kontrast a další technické parametry.** Novinky.cz jsou nejen vysázené Georgií, patkovým písmem s vynikající čitelností pro delší texty, ale také velmi kontrastní barvou. Na českém webu jsou i výrazně horší weby než Zdroják, ale uvádím ho jako hůře čitelnou možnost díky kombinaci několika faktorů: bezpatkové písmo s horším kontrastem a délkou řádků kolem 120 znaků.  
Tip na nástroj: kontrast si můžete zkontrolovat na [contrastchecker.com](http://contrastchecker.com/).

![](dist/images/original/typografie-18.png)

**3) Nesprávné znaky.** Každé rozumné písmo má speciální symboly pro uvozovky (nikoliv symbol palce), pomlčky (nikoliv minus) nebo výpustku (nikoliv tečky). Není to žádná buzerace typografických snobů. Prostě se to lépe čte.   
Tip na nástroj: Typografický tahák od Beneš a Michl. [http://vrdl.in/am9wu](http://blog.benes-michl.cz/data/blog/typographic_cheatsheet_1_1.pdf) (PDF)

## Ideální šířka a výška řádku

Teď zpozorněte, protože zmíním jeden ze základních designérských principů dnešního (responzivního) webdesginu.

Na příkladu Wikipedie jsem ukazoval, jak se může dlouhý řádek negativně projevit do celkové čitelnosti textu a webu.

Už od dob zásadní typografické příručky Roberta Bringhurst platí následující:

- 66 je ideální počet znaků na jedné řádce,
- 45-75 je pak vyhovující rozmezí.

Jako zdroj používám Bringhurstovy pravidla shrnuté na webu „The Elements of Typographic Style Applied to the Web“. [webtypography.net/2.1.2](http://webtypography.net/2.1.2)

Samozřejmě – na malých displejích toho není možné dosáhnout. Doproručení pak říkají s ubývajícím počtem znaků na řádce snižovat i jeho výšku, protože oči častěji přecházejí z jedné řádky na druhou. Praktické řešení v CSS pak ukazoval Marko Dugonjić na své přednášce „Responsive Web Typography“ na WebExpo 2014. [vrdl.in/rwdtypo](https://speakerdeck.com/maratz/responsive-web-typography-at-webexpo)


```css
/* Méně než 45 znaků */
body { line-height: 1.4 }
p    { margin-bottom: 1.4em }

/* 45-60 znaků */
body { line-height: 1.45 }
p    { margin-bottom: 1.45em }

/* 60-75 znaků */
body { line-height: 1.5 }
p    { margin-bottom: 1.5em }
```

Toto nastavení předpokládá vysázení patkovým písmem a do jednoho sloupce. Drobně se samozřejme může měnit podle parametrů písma. Jinak to bude pro nepatkové písmo, jiný kontrast, specifický charakter písma nebo počet sloupců. Nejlépe nám správnou volbu potvrdí poctivé uživatelské testování, ale pro začátek stačí nastavení písem poctivě testovat na různých zařízeních a různých lidech v okolí.

Nicméně, délka řádku je první designérské pravidlo, na které bychom při návrhu rozhraní měli myslet. Postup návrhu pak ideálně vypadá tak, že zvolíme písmo, získáme obsah a až na těchto dvou nerozlučných přátelích postavíme systém pro layout stránky.

<div class="ebook-only" markdown="1">
Máte pravdu, sem se odkazuji, když [na začátku kapitoly](kap-dokument.md) mluvím o potřebě návrhu rozhraní směrem od obsahu, nikoliv od rozvržení. I v našem příkladu vyjdeme při vymýšlení layoutu z optimální délky čtené řádky.
</div>

## Další zdroje o typografii

* *Kniha „On Web Typography“*
Skvělá učebnice typografie od Jasona Santa Maria. [vrdl.in/76nb2](https://abookapart.com/products/on-web-typography)
* *Přednáška „Praktická typografie pro webové kodéry“*  
Dana Srb se hezky rozpovídal na jedné z akcí Frontendisti.cz. Velmi praktické. [youtu.be/bJLGEMQ3rnM](https://youtu.be/bJLGEMQ3rnM)
* *Online kniha „The Elements of Typographic Style Applied to the Web“*  
Bible od Roberta Bringhursta a spoluautorů. [webtypography.net](http://webtypography.net/toc/)

<div class="ebook-only" markdown="1">
Jasně, vnímáte mě dobře. Typografii mám za nejzákladnější stavební kámen návrhu skoro každého webu. Než se dostaneme k dalším zdrojům ke studiu, pojďme si ještě zmínit dva typografické principy rozšířené mezi designéry, které na webu naopak prožívám velmi málo a nepoužívám skoro vůbec. Mřížku účaří a modulární stupnici velikostí.
</div>

