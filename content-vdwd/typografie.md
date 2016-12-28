# Typografie na webu

Písmo má dvě funkce: 

* **Čteme je.**  
To by nás nemělo překvapit. O to horší je fakt, že jen málo textů je na webu vysázených písmy nebo způsobem, který se čte dobře.
* **Vyvolává v nás dojem.**  
Informaci o tom, co na webu čekat a naše sympatie k němu určuje písmo a nebo jeho kombinace. 

Typografie je poměrně složitý obor a cit pro ni nevzniká lusknutím prstů. Proto níže doporučím pár zdrojů ke studiu a předtím snad jen seznam nejčastějších chyb.

## Časté typografické chyby

![](dist/images/vdwd/original/typografie-16.png)

**1) Děsně dlouhé řádky. **Wikipedie je smutným rekordmanem v délce řádku. Řádek by obecně neměl zabrat více než 75 znaků, aby oči nechtěně nepřeskakovaly na řádky sousedící. Ještě o tom budu psát.

![](dist/images/vdwd/original/typografie-17.png)

**2) Špatný kontrast a další technické parametry. **Novinky.cz jsou nejen vysázené Georgií, patkovým písmem s vynikající čitelností pro delší texty, ale také velmi kontrastní. Na českém webu jsou i výrazně horší weby než Zdroják, ale uvádím ho jako hůře čitelnou možnost díky kombinaci několika faktorů: bezpatkové písmo s horším kontrastem a délkou řádků kolem 120 znaků. Kontrast si můžete zkontrolovat na [contrastchecker.com](http://contrastchecker.com/).

![](dist/images/vdwd/original/typografie-18.png)

**3) Nesprávné znaky.** Každé rozumné písmo má speciální symboly pro uvozovky (nikoliv symbol palce), pomlčky (nikoliv minus) nebo výpustku (nikoliv tečky). Není to žádná typografická buzerace. Prostě se to lépe čte. Podívejte se na typografický tahák od Beneš a Michl (PDF). [http://blog.benes-michl.cz/data/blog/typographic_cheatsheet_1_1.pdf](http://blog.benes-michl.cz/data/blog/typographic_cheatsheet_1_1.pdf)

## Sazba webového dokumentu

### Ideální šířka a výška řádku

Na příkladu Wikipedie jste viděli…

* Velké displeje: 66 znaků je ideál, 45-75 vyhovující - (Bringhurst) předpokládá se vysázení patkovým písmem a do jednoho sloupce. Mění se podle parametrů písma - patkové, nepatkové, kontrast, počet sloupců…
* Na malých displejích není snadné toho dosáhnout, proto se snižuje výška řádku.

![](dist/images/vdwd/original/typografie-19.png)

### Mřížka účaří (Baseline grid)

Mezi webaři je často diskutována a já se vám tady bez mučení se vám přiznám, že patřím do skupiny, která její použití považuje za zbytečnou komplikaci.

*TODO img*

Mřížku účaří jsem opět zdědili z tiskových médií. Hlavně z novin, kde zaručuje, že na nekvalitním papíře nebudou do prostoru mezi řádky prosvítat texty z druhé strany.

Z tisku také víme, že text vysázený v mřížce účaří se lépe čte. Ale na webu je těžké toho dosáhnout: máme tady různé fonty, různě vykreslované na různých platformách. Máme tady média typu obrázky nebo videa. Máme fluidní rozvržení stránky. A jako na potvoru se web zobrazuje v různě velkých obrazovkách. 

Účaří je fajn dodržovat v místech, kde spolu bezprostředně sousedí dva texty. Dodržovat ji v celém rozhraní webů je hotové šílenství, ne-li nemožnost.

### Modulární stupnice velikostí písma (Modular Scale)

Ani tady nepatřím mezi fanoušky, to říkám hned. Modular Scale je způsob jak sjednotit velikosti prvků rozhraní a odstupňovat je nějakým „racionálním" způsobem. Se sjednocením velikostí prvků naprosto souhlasím, ale používané stupnice mě připadají spíše „racionalizující to co se designérům líbí“ než „založené na racionálních základech“.

*TODO img*

V příkladu půjdeme jiným směrem, ale klidně si to zkuste: [http://www.modularscale.com/](http://www.modularscale.com/)

## Tipy a triky pro typografii na webu

* **Patkové pro texty?**  
Občas se to zpochybňuje, ale myslím, že patkové písmo se středně vysokou střední výškou jako Georgia je spolehlivější volba. Patky jednoznačněji definují jednotlivé znaky a nehrozí zpomalení čtení například záměnou „h" a „n“ jako u moderních bezpatkových písem typu Helvetica nebo Roboto.
* **Bezpatkové pro nadpisy a rozhraní?**  
Zase říkám ano. Je to totiž praktičtější. Bezpatková písma jsou užší, takže se do nadpisů nebo prvků rozhraní (jako navigace) prostě vejdou i delší texty. 
* lowercase číslovky z opentype (font-feature-setting) (nepoutají v textu takovou pozornost)
* small caps: např. akronymy nebo mezinadpisy (nepoužívat zprasené kapitálky)
* ligatury (fi, st, Th) viz CSS3 Fonts Module
* fout, foit - web font loader
* text rendering (viz výše) [http://blog.typekit.com/2011/01/26/css-properties-that-affect-type-rendering/](http://blog.typekit.com/2011/01/26/css-properties-that-affect-type-rendering/)
* zalamování textu - hyphens: auto 

## Další zdroje o typografii

* **Kniha „On Web Typography"**  
Skvělá učebnice od Jasona Santa Maria (anglicky): [https://abookapart.com/products/on-web-typography](https://abookapart.com/products/on-web-typography)
* **Přednáška „Praktická typografie pro webové kodéry"**  
Od Dana Srba: [https://youtu.be/bJLGEMQ3rnM](https://youtu.be/bJLGEMQ3rnM)
* **Online kina „The Elements of Typographic Style Applied to the Web"**  
Bible od Roberta Bringhursta a spoluautorů (anglicky): [http://webtypography.net/toc/](http://webtypography.net/toc/)
