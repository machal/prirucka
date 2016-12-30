# Tipy, triky a časté chyby responzivních rozhraní

## Minimální velikost aktivní plochy: navrhněte to raději i pro obra z Altonu

Robert Wadlow byl podle Wikipedie nejvyšším člověkem v historii, pro něhož existují nezvratné důkazy. Přezdívalo se mu Obr z Altonu. Když navrhuji rozhraní, myslím na Obra z Altonu. Hned vysvětlím proč. 

Titěrné aktivní plochy v uživatelském rozhraní jsou častým hříchem responzivních webů. Ano, myší se trefíte skoro na cokoliv.

Průměrný palec sedmnáctileté dívky bude ale menší než palec Roberta Wadlowa. Ten totiž měřil 2,72 m a vážil okolo 220 kg. Proto raději při vymýšlení rozhraní myslím na Obra z Altonu než na mladé dívky, jestli mi rozumíte.

Moderní webařina se najčastěji odkazuje na další výzkum Stevena Hoobera, tentokrát s Patti Shank. Zjistili, že potřebná minimální velikost se různí podle vzdálenosti od kraje obrazovky:

* ve středu obrazovky je 7 čtverečních milimetrů
* na krajích obrazovky je to 11 čtverečních milimetrů

Přiznávám, že ve svých myšlenkách na Obra z Altonu si pravidlo zjednodušuji. Chci aktivní plochu vždy **alespoň jeden čtvereční centimetr**.

![FotoŠkoda.cz](dist/images/original/vdwd/triky-ui-6.png)

*Obrázek: E-shop FotoŠkoda.cz má jeden z těch povedenějších košíků na mobilech. Všechno velké, navigace jednoznačná. Jen prvky v té šedivé ploše s „Pojištěním“ bych ani na pětiapůlpalcovém iPhone palcem netrefil. Na výšku alespoň centimetr, prosím!*

K podobným závěrům došly i velké firmy jako Apple, Microsoft a Google. Hlouběji to rozepisuje Martin Pešout v článku „Velikosti dotykových oblastí pod drobnohledem“. [vrdl.in/7t4b6](http://www.martinpesout.cz/velikosti-dotykovych-oblasti-pod-drobnohledem/)

Za předpokladu, že máte správně nastavenou meta značku pro viewport, to dokonce lze zapsat v CSS tak, aby ve všech dnešních mobilních zařízeních byla plocha přibližně centimetr veliká:

```css
/* 10mm ≅ 63px ≅ 4rem */
.touch { width: 4rem; height: 4rem; }
```

Pokud chcete kód vysvětlit, rozebírám to ve svém článku na Smashing Magazine. [http://vrdl.in/h8n7i](https://www.smashingmagazine.com/2016/10/how-to-poison-the-mobile-user/#5-make-all-tap-targets-nice-and-small)

## Málo kliků a ještě méně (otravných) dotyků

Víte, my webdesignéři, si jako všichni lidé občas věci až moc zjednodušujeme. Díky tomu asi před patnácti lety vzniklo „Pravidlo tří kliků“. Doporučovalo, aby veškeré informace byly na vašem webu dostupné maximálně na tři kliknutí myši. 

„Pravidlo“ bylo naštěstí mnohokrát vyvráceno. Nejlepší odmítací argumentaci najdete v textu „Mýtus 2: Všechny stránky by měly být dostupné na 3 kliky“ na UXGood.cz. [vrdl.in/cz1an](http://www.uxgood.com/ux-myths-cesky-mytus-2-vsechny-stranky-by-mely-byt-dostupne-na-3-kliky/)

> Uživatelům nevadí extra kliknutí navíc, pokud o nich nemusí přemýšlet.

Přesně tak, tři *otravná* kliknutí jsou horší než pět jednoduchých. Jak říká klasik Steve Krug už titulem své zásadní knihy: „Nenuťte uživatele přemýšlet“. Na desktopu máme výzkumy ověřeno, že to platilo a platit bude. A co teprve, když zmenšíme obrazovku!

Uživatelské rozhraní na mobilech není jednoduché. Designér má k dispozici méně prostoru. Uživatel kromě menšího prostoru i zhoršené fyzické podmínky. 

Představte si například, že hledáte dopravní spojení v klidu kanceláře. Máte? A teď ve spěchu v tramvaji, když zjistíte, že má zpoždění. Představte si, že tramvaj je přecpaná, zleva se na vás valí korpulentní dáma v letech a zprava si halasně povídají dva výrostci. Pravou rukou křečovitě visíte oprátce, kterou vám připravil kat tramvaják, který se jako šílený žene za utíkajícím jízdním řádem. Připojení k internetu je tu navíc pomalé. Máte to? Ano, vytvoření dobrého rozhraní pro mobily je vyšší dívčí.

Proto se na mobilech vždy musíme snažit věci zbytečně nekomplikovat a lidem práci maximálně zjednodušovat. Týká se to hlavně míst, kde od nich očekáváte uživatelský vstup nebo složitější interakci. Vzpomeňte si na jeden ze čtyř principů – „tupost“ rozhraní.

Pojďme si teď naložit nějaké praktické tipy, co říkáte?

## 8 tipů pro jednodušší rozhraní na mobilech

![Zetor.cz](dist/images/original/vdwd/triky-ui-7.png)

### 1) Dejte pryč všechny zbytečnosti 

Na obrazovce máme málo místa, proto tam nechte jen to opravdu nejdůležitější. Výběr jazyka viditelný hned v hlavičce webu Zetor.cz na obrázku lze dělat automaticky na serveru nebo přidat do uživatelského nastavení či prostě někam do patičky. Informace, které od uživatele nutně nepotřebujete, po něm nechtějte. Informace, které uživatel nutně nepotřebuje, mu nezobrazujte. 

### 2) Nepodlehněte ikonománii

Mnoho grafiků šetří místo v mobilních rozhraních nadměrným používaným ikon. Ale jak už bylo mnohokrát prokázáno, většina ikon má velmi nejednoznačný význam. Vezměme web EquaBank.cz na dalším obrázku. Pojďme si udělat kvíz: co dělá první, druhá a třetí modrá ikona? První vede do mapové aplikace nebo je to seznam poboček. Najdu tam i bankomaty? Druhá je… to vážně netuším. Třetí budou asi kontakty. Nebo jen telefon? Začne mi telefon hned volat?

Více také na „UX Myth: Icons enhance usability“ na UXMyths.com.[vrdl.in/7qc2n](http://uxmyths.com/post/715009009/myth-icons-enhance-usability)

![K bodu 3](dist/images/original/vdwd/triky-ui-8.png)

### 3) Šetřete rozbalovacími nabídkami 

S rozbalovacími nabídkami (typu `<select>`) je na mobilech tolik potíží, až o nich Luke Wroblewski napsal, že je máme použít jen jako poslední záchranu. Ani na webu FotoSkoda.cz  se nevyhnuli nasypání ohromného seznamu poboček Uloženky do rozbalovací nabídky. Zkuste si tam najít tu, která je nejblíž vašemu bydlišti. Třeba v Praze, kde samozřejmě všechny ulice znát nemůžete. A představte si počet otravných tapnutí, které takovému rozhraní musíte věnovat. To bolí! Web CSOBpoj.cz to má naopak hezky, rozbalovací nabídky vyměnili za přepínače. Podívejte se na obrázek. 

Více také v textu od Luke Wroblewskiho „Dropdowns Should be the UI of Last Resort“. [vrdl.in/gad1e](http://www.lukew.com/ff/entry.asp?1950)

![K bodu 4](dist/images/original/vdwd/triky-ui-9.png)

### 4) Otevírejte pohodlné klávesnice

Web CSOBpoj.cz uživatele nutí vyplnit číselný údaj na alfanumerické klávesnici. SmileBox.cz to má dobře, otevře čistě numerickou. Podívejte se na obrázek. Kdykoliv po uživateli chcete vyplnit telefonní číslo, volte specifický typ formulářového pole. Hodí se pro vkládání telefonů (`<input type="tel">`), emailů, URL adres nebo na vyhledávací pole.

Více na speciální stránce MobileInputTypes.com. [mobileinputtypes.com](http://mobileinputtypes.com/)

A ještě, prosím, telefonní čísla na stránce vždy na mobilních zařízeních uvádějte jako odkazy: [http://vrdl.cz/blog/57-href-tel](http://www.vzhurudolu.cz/blog/57-href-tel)

![](dist/images/original/vdwd/triky-ui-10.png)

### 5) Používejte krokovače a další alternativní formulářové prvky

Opět se vracíme k náhradě nešťastného `<select>`. Krokovač (stepper) pomocí běžného HTML neuděláte, ale za vylepšený uživatelský prožitek pár řádků Javascriptu určitě stojí. Zvažte i další alternativní formulářové prvky. Hledejte je rovnou v angličtině: Radio Group, Button Input,  Slider, Segmented Control.

### 6) Zamilujte si našeptávače 

Jsou velmi dobrým pomocníkem ve vstupních polích, kde je velké množství možných vstupů – hlavně ve vyhledávání, které je na mobilech kvůli nepřítomnosti plnohodnotné navigace velmi důležité. V HTML pro ten účel existuje prvek `<datalist>`. Jeho využití je omezené, ale určitě se na něj s vývojáři podívejte. Běžné našeptávače jsou v podobně pluginů dostupné pro každý moderní javascriptový framework.

![](dist/images/original/vdwd/triky-ui-11.png)

### 7) Nenuťte mobilního uživatele psát

 
Tohle bych na webu SmileBox.cz ještě dotáhl. Mám na mobilu napsat text „kde, kdy a jak“ chci přístroj pronajmout? To, prosím ne. Na mobilu se nepíše. Co takhle tři na pár kliků ovládatelné vstupy? 

### 8) Neprotahujte stránku

Spoléhám na to, že uživatelé stránku posunovat umí. To ano. Neznamená to ale, že stránka by měla být dlouhá jako ponožky Pipi dlouhé punčochy. Hezký objev od UX konzultanta Jana Kvasničky vidíte na obrázku:

![](dist/images/original/vdwd/triky-ui-12.png)

*Obrázek: Pro použití některých stránek bychom potřebovali trošku vyšší telefon. Tady je vidět předkošík na Smarty.cz. Důležité aktivní prvky jsou červně orámované. Zdroj: Jan Kvasnička. [kvasnickajan.cz](http://blog.kvasnickajan.cz)*

Dlouhá stránka kromě této konkrétní nevýhody taky odsunuje spodní část rozhraní – patičku. Jak už jsem psal, s koncem stránky roste pozornost uživatelů, protože je tam bývá sekundární navigace. Příliš dlouhá stránka pak zhoršuje její přístupnost. Prostě se uživatel vyčerpá rolovacím maratonem.

Hledejte alternativní způsoby zobrazení: 

* offcanvas (vysunování obsahu ze strany)
* modální okna nebo karusely (jen pozor na správnou implementaci)
* roztahovací akordeóny (collapse)

Když už jsem zmiňoval Jana Kvasničku, vřele doporučuji jeho text a přednášku „Nejčastější chyby při návrhu mobilního a responzivního webu prakticky“. [vrdl.in/2tghs](http://blog.kvasnickajan.cz/prakticky-pruvodce-nejcastejsimi-chybami-pri-navrhu-mobilniho-a-responzivniho-webu/)

## Opusťte desktopové zlozvyky

### 1) Efekt na najetí myši? Už jen jako vylepšení

Jak už jsem zmiňoval: jakékoliv zařízení může být dotykové, proto musíme dotykové ovládaní považovat za výchozí stav. No a na dotykových obrazovkách máme s `:hover` efekty po najetí myši smůlu. Ano, v myší ovládaných zařízeních můžeme přidat vylepšující efekt nebo vrstvu s doplňujícími informacemi. Rozhraní by ale mělo být použitelné bez nich.

Je zřejmé, že závislost zobrazení důležitého obsahu na najetí myši patří v rozhraních do minulosti. Ale – s pozvolným odchodem desktopu do menšiny – přibývá dalších adeptů na zápis do „Červené knihy ohrožených návrhových vzorů“. Pojďme na krátký výlet do pavilonu designérské ZOO, kde je všechny vystavují.

### 2) Karusely jsou fakt složitý dorozumívací prostředek

Karusel je pro designéra i uživatele docela výzva. Z mnoha studií zpochybňujících jejich efektivitu vyberme tu od Erika Runyona. Ten změřil, že ze všech kliknutí na jeho karusel patřilo téměř 90 % jen prvnímu obrázku. Další se pohybovaly mezi dvěma a třemi procenty. [vrdl.in/50zuo](https://erikrunyon.com/2013/07/carousel-interaction-stats/)

Navrhnout dobrý karusel je prostě složité – proto po něm osobně sáhnu až když jsem vyčerpal jiné možnosti.

![](dist/images/original/vdwd/triky-ui-13.png)

*Obrázek: Stará a nová verze karuselu na RSTS.cz. Starší ještě používala na mobilech nepoužitelnou tečkovou navigaci. Nová je vpravo a je fajn. Díky šipkám se lépe ovládá a grafika je uzpůsobená velikosti displeje.*

Jsou karusely obecně špatné? Jako poloviční designér musím napsat: „Ono záleží…“

Karusely jsou určitě špatné, když:

* je používáte jako zkrášlující prvek – věc, která se vám líbí;
* je používáte jako univerzální schovavač toho, co na webu nechcete a co si klient vymyslel;
* zpomalují načtení nebo zobrazení stránky;
* nejsou použitelné na mobilních zařízeních (malé tečky jako navigace, závislost);
* nepropagují obsah na dalších „slajdech“.

Hodně bych zvažoval dnes běžné použití karuselu pro propagaci aktuálních akcí na úvodní stránce. Karusely se ale naopak hodí pro seznamy souvisejících položek. U e-shopu jde třeba o fotografie produktu nebo seznam podobného zboží.  

### 3) Záložky spíše ne, akordeony ano

Jak už jsem psal, dost ve svých rozhraních sázím na to, že uživatelé posunovat stránku shora dolů prostě zvládají. 

Záložková navigace uvnitř stránky je mobilech riskantní, protože může otevírat obsah, jehož studium vám ony záložky odsune do neznáma. I proto mám mnohem raději takzvané akordeony. Podporují přirozené plynutí informací shora dolů.

![](dist/images/original/vdwd/triky-ui-14.png)

*Obrázek: CZC.cz má hezky provedený akordeón. Podobný prvek na Mall.cz se ale chová jako  záložky: pokud chci po přečtení obsahu pro „Popis“ otevřít „Parametry“, musím posunovat stránku zpět nahoru.*

### 4) Uměl by si Obr z Altonu na vašem webu vybrat datum?

Vložení data na mobilech může být pěkná otrava. Pokud používáte některý z pluginů určených pro desktop. A že je používá každý druhý responzivní web!

Na mobilech můžete využít `<input type="date">`, který otevře nativní výběr data. Občas je ale potřeba udělat vlastní komponentu. Vždy mějte v prvé řadě na paměti ovládání palcem. Obr z Altonu se na vás dívá!

### 5) Nespoléhejte na přítomnost globální navigace

Web bez hlavní navigace? Pfff…!  Představte si, že byste to nějakému klientovi navrhli před pěti lety. Dnes ale na velmi malých displejích postrádají globální navigaci téměř všechny weby. Prostě se tam, potvora, nevejde.

Nezbývá než se s tím smířit a na globální navigaci tak moc nestavět. U větších webů hraje na mobilech velkou roli vyhledávání. Mám také dobrou zkušenost se stavěním úvodní stránky složitějších webů jako rozcestníku – poslední záchrany ztraceného uživatele. Chybějící hlavní navigaci je ale potřeba mít v hlavě při návrhu každé komponenty a každé stránky webu.

### 5) Modální okna, lightboxy: pozor na správnou implementaci

Ty samy o sobě nejsou špatné. Dokonce bych řekl, že jsou na mobilech velmi užitečné. Jen mám asi smůlu. Smůlu na weby, které zavírání modálního okna schovávání pod horní hranu okna prohlížeče. 

Modálními okny a lightboxy ukončíme výčet nejvýznamnějších zástupců „Červené knihy ohrožených návrhových vzorů“. Myslíte, že vyhynou? Doufám, že ve své desktopové podobě ano. Ale ještě víc doufám, že příroda bude mít dostatek soudnosti, aby jejich DNA upravila. Tak aby v nové responzivní době měly šanci přežít.

## Vyhněte se častým chybám

### 1) Pomalu se načítající web

Asi největší hřích dnešních responzivních webů. Rychlost načítání má vliv na úspěšnost webu a ovlivňuje řazení ve výsledcích vyhledávání Google. Mobilní sítě jsou pomalé a jen tak se nezrychlí. Nezapomeňte rychlost webu řešit už při návrhu a konzultovat ji s vývojáři. Tomu se budeme ještě věnovat.

### 2) Navigace schovaná do ikony

Responzivní weby často na mobilních obrazovkách schovávají navigace do různých ikon. Z průzkumů ale vyplývá, že ikony bez popisků jsou pro uživatele často nesrozumitelné. Ani samo schovávání navigace není nejlepší nápad. Také si o tom ještě něco povíme.

### 3) Přizpůsobení jen některým rozlišením

Jak už jsem zmiňoval dříve, dnešní weby se zobrazují v oknech mezi 240 a 2600 pixely. Oba extrémy nejsou příliš časté, ale například podíl obrazovek s obrovským rozlišením roste. Při návrhu a testování je potřeba myslet jak na ta nejmenší zařízení, tak právě i na ohromné displeje.

### 4) Zakázané přiblížení (zoom)

Uživatelé si zvětšují výřezy obrazovky z mnoha důvodů: kvůli špatnému kontrastu na sluníčku, kvůli snadnějšímu výběru textu nebo se prostě jen chtějí podívat na detail fotografie na stránce. Snažte se jim prosím zvětšování nezakázat. Uveďte správnou meta značku pro viewport.

WCAG (doporučení pro přístupné weby) trvají na možnost vše alespoň dvakrát zvětšit. [vrdl.in/cbe5f](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-scale)

### 5) Neošetřené načítání webfontů

Taky vás štve problikávání obsahu stránky při jejím načítání? Použití webfontů je v pořádku, ale je nutné je mít ze strany vývojáře pod kontrolou. Různé prohlížeče totiž načítají webfonty různě. Je potřeba si tedy vybrat způsob načítání, který vyhovuje konkrétnímu webu. Já pro kontrolu nad načítáním využívám knihovnu FontFaceObserver. [fontfaceobserver.com](https://github.com/bramstein/fontfaceobserver)

### 6) Vkládání zbytečných sdílecích tlačítek

„Lajkovací“ nebo sdílecí tlačítka Facebooku a dalších sítí jsou na webech velmi často k ničemu. Komplikují uživatelská rozhraní, zpomalují načítání. Funkce sdílení je navíc součástí všech mobilních operačních systémů. Zvažte, jestli vám umístění tlačítek stojí za to. Případně zvolte alternativní, úspornější řešení.

Například knihovnu Social Likes. [social-likes.js.org/](http://social-likes.js.org)

### 7) Schovávání obsahu za fixně pozicované elementy

Tady mám poněkud radikální postoj. Elementy, které při rolování stránky drží pozici nemají na mobilech co dělat. Zmenšují už tak skromný prostor, kolidují s ovládacími prvky prohlížečů… A ke všemu vás na méně výkonných mobilech nebudou poslouchat a při posunu stránky občas neudrží vámi vysněnou pozici. 

Týká se všech fixně umístěných navigačních lišt, překryvných vrstev s reklamou na newslettery nebo mobilní aplikace a nebo v poslední době populární tlačítka pro otevření chatu.

To by mohlo stačit. Hlubší argumentaci ke zde zmíněným chybám najdete ve dvoudílné hubící sérii „Jak zničit mobilní uživatele?“ na Vzhůru dolů. [vrdl.in/lq5b4](http://www.vzhurudolu.cz/blog/47-znicit-mobilistu-1)


