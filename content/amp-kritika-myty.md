# Další kritika AMP a časté mýty

Hlavnímu bodu kritiky, milostné trojici AMP, Googlu a webových standardů, jsme věnovali celou předchozí část. Všechny ostatní body kritiky shrneme do devíti bodů.

## 1) Není AMP nefér výhodou ve vyhledávání na Googlu?

Můžete to tak vnímat. AMP vám sice samo o sobě nezaručí lepší pozice a vyšší návštěvnost, stránky vyrobené touhle technologií jsou ovšem v přirozených výsledcích vyznačené symbolem AMP loga. Je tedy pravděpodobné, že dříve či později na ně začnou lidé více klikat.

Vyšší míra prokliku pak může znamenat lepší pozice, protože jde o jeden ze signálů, podle nichž Google řadí výsledky.

<figure>
<img src="../dist/images/original/vdamp/amp-kritika-tri.png" alt="">
<figcaption markdown="1">
_Obrázek: Výsledky vyhledávání Googlu. Zvýšený výskyt AMP je možné sledovat hlavně v místech, která se týkají aktuálních událostí._
</figcaption>
</figure>

Jak je navíc patrné z obrázku a také některých studií, AMP stránky pravděpodobně dostávají přednost v oblasti Hlavních události (Top Stories). Tady kritice rozumíme, ale hned v dalším bodě uvidíte, že i zde se chystá náprava.

Nejprve ovšem nezanedbatelný argument – úplně stejné je to u Rich Snippets (strukturovaných úryvků) vyznačovaných i v běžných stránkách pomocí JSON-LD. Nebo u rychlosti jakéhokoliv běžného, nikoliv AMP webu. I tyto atributy vám mohou pomoci k vyšší návštěvnosti z výsledků vyhledávání.

Lidé stojí o kvalitní a rychlý uživatelský prožitek, proto Google vždy nějak upřednostňoval weby, které mu dokážou něco takového garantovat. Je ovšem otázka, zda je možné dosáhnout skutečné _garance_ rychlosti i u běžných webů.

## 2) Proč nemůže Google označovat a přednačítat i běžné weby, které jsou rychlé?

Google k tomuto neposkytuje žádné oficiální stanovisko, takže se budeme muset pustit do vlastních úvah.

Obecně je to otázka důvěry a rizika. Přidat _nějakou_ ikonku a _nějak_ přednačíst lze každou stránku. Pokud by ale Google přednačítal každou stránku, neexistují technické prostředky, kterými by se mohl chránit před nebezpečným nebo třeba jen pomalým kódem. O co se třeba jedná?

V první řadě o JavaScript. Jakmile je ve hře, nelze se na nic spolehnout. Stránky by se mohly chovat pokaždé jinak. Přímo ve výsledcích vyhledávání, aniž by na ně uživatel klikl, by mohly sledovat citlivá data, či se dokonce pokoušet využít bezpečnostních chyb.

### Bezpečnost

Možných rizik při umístění běžných webů na doméně Googlu není málo. Zde jsme o vyjádření poprosili bezpečnostního experta Michala Špačka: „Umístění normálních webů na doménu Google.com by napomohlo útokům Cross-Site Scripting (XSS), které přesně takto fungují: na cizí doménu dostane útočník svůj JavaScript. Ten se pak spustí v kontextu dané stránky (anglický výraz _origin_ je přesnější, ale do češtiny špatně přeložitelný) a může mít přístup ke cookies a dalším věcem, které zvenčí dostupné nejsou.“

### Výkon

V neposlední řadě by také weby s vlastním JavaScriptem mohly nechtěně zaměstnat procesor (nebo chtěně třeba těžením kryptoměn), až by se ta jednoduchá, čistá stránka s výsledky vyhledávání Googlu stala nepoužitelně pomalou. Koho by asi uživatelé vinili?

<figure>
<img src="../dist/images/original/vdamp/crux.png" alt="">
<figcaption markdown="1">
_Obrázek: První vykreslení obsahu je u skutečných uživatelů na Vzhůru dolů slušné. Google by si mohl začít myslet, že jde o rychlý web. Co když tu rychlost ale z minuty na minutu pokazíme? Zdroj: Chrome UX Report Dashboard_
</figcaption>
</figure>

### Jak poznat rychle se vykreslující stránku?

Pak je tu otázka, jak poznat, že je stránka rychlá. Jistě, Google má svá data o rychlosti většiny webů u reálných uživatelů z Chrome UX Reportu. Víme také, že Google nějak  zohledňuje rychlost při řazení výsledků. Problém je v tom, že se na to nedá spolehnout. Web, který je v jedné minutě rychlý, může být v minutě druhé velmi pomalý. Kvůli problémům na serveru, kvůli nedostupnosti souboru, který kriticky potřebuje k vykreslení stránky, kvůli chybě marketéra v Google Tag Manageru… Rozpoznat AMP je naproti tomu hračka. A validní AMP dokáže jistou rychlost garantovat.

A dále: Všechny tyto metriky nám ukazují rychlost načítání nebo vykreslování, ale neříkají nic o rychlosti během dalšího používání, například u animací. Abychom dokázali měřit uživatelský prožitek při používání stránky, potřebujeme nové metriky a nástroje. Validní AMP stránka to však opět určitým způsobem (zákazem JavaScriptu) garantuje.

Posledním trumfem AMP stránek při přednačítání je, že umí spolupracovat s AMP Viewerem způsobem, který by nebyl možný u běžných stránek. Viewer si díky statickému layoutu AMP stránek umí vypočíst, která část bude viditelná, a stáhnout zdroje jen pro ni. Se stažením zbytku pak čeká až na skutečný přechod uživatele na tuto stránku. Díky tomu je přednačtení extrémně úsporné a Google může přednačíst více stránek, čímž zvýší šance, že bude přednačtená ta správná.

Šéf vývoje AMP Malte Ubl k tomu říká: „Hádání je o dost jednodušší, když můžete hádat vícekrát.“ Více je v článku „Why AMP HTML does not take full advantage of the preload scanner“.  [vrdl.in/ampscan](https://medium.com/@cramforce/why-amp-html-does-not-take-full-advantage-of-the-preload-scanner-7e7f788aa94e)

### Výhody AMP s běžným webem? Ano, vypadá to, že to půjde

A teď důležitá věc. Autoři AMP z Googlu se už v roce 2018 nechali slyšet, že s rozvojem webových standardů vycházejících z této technologie by velmi rádi dopřáli stejné výhody i běžným webovým stránkám.

„Cílem Googlu je rozšířit podporu na místech, jako je karusel Top Stories, také pro obsah, který zhruba odpovídá AMP. Ale takový, který za prvé splňuje určitá kritéria rychlosti a uživatelské zkušenosti a za druhé také implementuje sadu připravovaných webových standardů.“

AMP tedy bude podle Googlu tou nejjednodušší, ale jen jednou z možných cest, jak zařídit současné výhody této technologie. Píše se to v textu „Standardizing lessons learned from AMP“. [vrdl.in/ampless](https://blog.amp.dev/2018/03/08/standardizing-lessons-learned-from-amp/)

## 3) AMP zase tak rychlé není. Zrychlíme responzivní web a je to

Ano, zrychlení webu vždycky pomůže, ale na uživatelskou zkušenost člověka přicházejícího z výsledků vyhledávání na AMP stránku se nikdy nedostanete. Nic nenahradí hostování na Googlu a přednačtení stránky. A to dostanete jen u AMP.

<figure>
<div class="rwd-scrollable"  markdown="1">
|                    |Běžný web|AMP po přednačtení|
|--------------------|--------:|-----------------:|
|Lékárna.cz (produkt)|   7 s|0,21 s|
|Vzhůru dolů (článek)| 4,4 s|0,24 s|
</div>  
<figcaption markdown="1">
*Tabulka: Přidáním třídy můžeme nastavit vzhled tlačítka na jakýkoliv element*
</figcaption>
</figure>

Samozřejmě se může stát, že mimo tento optimální způsob zobrazení stránky s přednačtením bude AMP verze pomalejší než původní web. Ale pro přednačtení je potřeba mít dvě věci – validní AMP stránku umístěnou v AMP Cache. Nic z toho zatím není běžným webům dostupné. Více jsme se tomu věnovali v textu [o rychlosti AMP stránek v různých fázích distribuce](amp-faze.md).

## 4) AMP je práce navíc, spravovat dvě verze je drahé

Autoři technologie v jednom ze svých materiálů píší, že 80 % týmů, které kontaktovali, vyrobilo AMP verzi během týdne a méně. To je docela rychlé. Může to tak být i u vás, ale nemusí.

Pro každého vývojáře je výroba a správa dvou verzí otrava. Někteří máme ještě v neblahé paměti opletačky s údržbou desktopových a „m tečka“ webů. Stejně jako u responzivních webů vám proto i tady radíme: Pokud můžete, vyrobte jen jednu verzi. Udělejte AMP stránku, je to běžný web, který můžete publikovat všemi současnými kanály.

<figure>
<img src="../dist/images/original/vdamp/amp-vzhuru-dolu.png" alt="">
<figcaption markdown="1">
_Obrázek: Vzhůru dolů má také AMP verzi. Ve skutečnosti je ovšem naprostá většina kódu pro obě stránky shodná._
</figcaption>
</figure>

Je samozřejmě pravděpodobné, že současný stav věcí na vašich projektech tuhle ideální variantu znemožňuje. Weby mohou být už hotové, navíc technologicky komplexní nebo používající hodně interaktivních javascriptových prvků a tak dále.

Různými přístupy k tvorbě AMP se zabýváme [ve třetí kapitole](3-uvod.md). Z pohledu správy je nejefektivnější právě přístup [AMP-only (pouze AMP)](amp-implementace-jen-amp.md), ale je dobré vědět i o existenci kompromisních variant. Zmiňme ještě řadu [pluginů do populárních redakčních systémů](amp-implementace-pluginy.md), jako je WordPress. Ty mohou pomoci.

Možnosti pro zvýšení efektivity výroby a správy AMP verze tady prostě jsou. Přesto je nutné říct to na rovinu: Pokud chcete AMP pojmout kvalitně a plnohodnotně, u většiny projektů se neobejdete bez nemalého úsilí a většinou také výrazné změny myšlení v celém širším týmu, přinejmenším v dlouhodobém horizontu.

## 5) AMP je jenom pro statický obsah

Slovo „Pages“, dříve používané v názvu technologie, zní dost jednoznačně, že? Původním záměrem AMP opravdu bylo vyřešit problém s pomalým načítáním článků. Nějak se to ale vymklo – protože od textu je to jen kousek třeba k takovému detailu produktu v e-shopu, kde už nějakou interaktivitu očekáváme. Technologie s bleskem v logu dnes už tyhle věci umí podchytit.

<figure>
<img src="../dist/images/original/vdamp/amp-eshopy.jpg" alt="">
<figcaption markdown="1">
_Obrázek: Některé z e-shopů, které mají alespoň částečnou AMP verzi. Prostředky ze strany AMP tady jsou._
</figcaption>
</figure>

Dave Besbris na AMP Conf 2018 prohlásil, že přes 60 % stránek vyrobených touto technologií odkazovaných z výsledků vyhledávání Googlu nejsou zpravodajské weby. [youtu.be/TX3sFXHwXjo](https://youtu.be/TX3sFXHwXjo)

Chcete důkaz? Podívejte se do druhé kapitoly, jaká kouzla [umí dynamické komponenty z AMP](amp-komponenty-dynamicke.md).

## 6) AMP je jenom pro mobily

Také to „Mobile“ v názvu technologie zní jednoznačně, že?

Jenže limitování technologie na mobily by popíralo aktuální stav věcí. Vždyť v AMP se dají tvořit celé responzivní weby a my vám to v textech ještě ke všemu doporučujeme.

AMP je však zamýšleno jako „mobile first“. Odcitujme Paula Bakause, jednoho z propagátorů technologie:

„Podstata AMP není omezená na mobily. AMP je navrženo tak, aby bylo přívětivé pro mobilní zařízení s pomalým hardwarem a internetovými připojeními. Zvýšení výkonu, které s AMP získáte u smartphonů, bude mnohem větší než u počítačů. AMP však není mobilní – je ,mobile first‘.“

Více informací je v textu „About that ‘mobile’ in Accelerated Mobile Pages“. [vrdl.in/ampmobile](https://paulbakaus.com/2016/07/01/about-that-mobile-in-accelerated-mobile-pages/)

Buďme ale féroví – plné výhody distribuce v AMP Cache a přednačtení ocení zatím opravdu jen mobilní uživatelé.

## 7) AMP omezuje grafickou kreativitu a stránky jsou si navzájem velmi podobné

Ve srovnání s běžným webem jsou tvůrci skutečně limitováni. Musejí využívat karusely, lightboxy, navigace a další komponenty pouze z nabídky AMP. Na lákavé jQuery pluginy prostě tentokrát musejí zapomenout. Velikost CSS je omezená na 50 kilobajtů, JavaScript je zcela zakázaný.

Limitace to je, ale nelze říct, že by zabíjela kreativitu. K dispozici zde máme všechny podstatné příměsi  grafického designu.

Nový je zde výraznější tlak na to, aby se designéři, designérky, grafici a grafičky naučili framework a jeho omezení. Možná si říkáte, že to už tady bylo například s frameworkem Bootstrap. Z naší zkušenosti se ale často na omezení ze strany vizuálních tvůrců (a často ani vývojářů a vývojářek) moc ohledy nebraly.

Jenže AMP stránka je buď validní, nebo ne. V druhém případě nedostane benefity symbolizované ikonou blesku. Proto je zde tlak na dodržení možností frameworku daleko silnější.

Může se zdát, že některé AMP stránky jsou si podobné. Obvykle je to využitím [pluginů do redakčních systémů](amp-implementace-pluginy.md), které umožňují rychlé vytvoření AMP verzí stránek pouhým zmáčknutím tlačítka. Výstupní šablony je často možné si jen barevně upravit, jinak jsou jedna druhé podobné.

Tento způsob tvorby AMP obsahu ale obecně nepovažujeme za šťastný, protože vede k uživatelskému prožitku odlišnému od původního webu.

## 8) Centralizovaná distribuce

AMP stránky používají jednotné knihovny servírované z jednoho místa. I tohle mnozí kritizují:

```html
<script async src="https://cdn.ampproject.org/v0.js"></script>
```

Co když dojde k hackerskému útoku? Co když distribuční cesta k takovýmto souborům prostě selže? Tady je potřeba si uvědomit, že soubory z nějakého CDN dnes stahuje každý druhý web. V této úrovni se tedy nejedná o nový problém – nové je pouze množství webů, které využívají komponentu z jednoho zdroje.

Předmětem kritiky je samozřejmě i společná adresa začínající `https://www.google.com/amp/s/…` Lidé si představují, jak by bylo pro autoritářské režimy na světě snadné omezit přístupy na tyto adresy a novináři by měli po ptákách. Ano, možné to je, ale v textu [o AMP Cache](amp-cache.md) jsme zmínili, že „problém s URL“ se možná brzy dočká svého řešení.

Kritika centralizovanosti je postavená na křehkosti takovéhoto systému: Jeden dodavatel frameworku, omezený počet distribučních sítí (AMP keší). Je ovšem nutné zmínit to, že každá AMP stránka má svou kanonickou verzi. I ve chvíli teoretického výpadku celé AMP sítě dál běží původní weby. AMP je tedy vlastně „progressive enhancement“, nepovinné vylepšení distribuce webů.

## 9) Uzavřenost ekosystému komponent třetích stran

Když jsme se zamýšleli, co na AMP vadí nám, kromě nehezkých URL a exkluzivního výskytu v některých místech vyhledávání Googlu bychom do party vybrali ještě jednu málo známou věc – místy nesystémovou tvorbu komponent.

V některých oblastech se přidávání obsahu nebo funkčnosti od externích dodavatelů řídí vcelku jasnými pravidly. Pokud chci servírovat reklamu do AMP stránek, musím je splnit. Pokud chci dodat analytický nástroj, opět je musím splnit.

Až se ale časem podíváme na komponenty pro mediální obsah, uvidíte, že kromě obecných (`amp-img`, `amp-video`) existují i komponenty pro konkrétní externí dodavatele (`amp-youtube`, `amp-vimeo`). A to je škoda.

AMP pak totiž působí dojmem uzavřenosti, exkluzivity pro velké dodavatele kódu třetích stran. Bylo by skvělé, kdyby se časem povedlo – podobně jako u reklamy – nastavit jednotná pravidla, ta automaticky kontrolovat a otevřít ekosystém všem, kteří jej dodržují. Namísto zmíněných komponent pro YouTube a Vimeo by tak mohla vzniknout obecná komponenta (například `amp-video-embed`), která by byla dostupná komukoliv, kdo dodržuje přísná pravidla pro rychlost a způsob servírování videí z externích serverů.

## Shrňme si všechny body kritiky

1. Použití technologie není nefér výhoda v běžných výsledcích vyhledávání, ale trochu nefér to možná je v karuselu Top Stories.
2. Google pravděpodobně nemůže přednačítat běžné weby.
3. Při dodržení doporučené distribuční cesty bude AMP stránka vždy rychlejší než ta bez AMP.
4. Nemusíte spravovat dvě oddělené verze webu.
5. AMP není určena jen pro statický obsah.
6. Není jen pro mobily.
7. AMP stránky nemusí vypadat stejně.
8. Centralizovaná distribuce jisté riziko obnáší, ale AMP je „progressive enhancement“ běžného webu.
9. Uzavřenost ekosystému kolem AMP může být problematická, protože ne každá komponenta se do AMP dostane.

Tady se už ale pojďme rozloučit s kritikou a zároveň s první kapitolou.

Své znalosti si ještě můžete prověřit v testu a pak už si povíme něco o možnostech implementace AMP.
