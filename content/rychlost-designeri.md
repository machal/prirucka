# Úvod do rychlosti načítání webu pro designéry, marketéry a majitele webů

Shrneme si proč to chtít rychlé. Povíme si o nejdůležitějších nástrojích a technikách. Jak můžete rychlost ovlivnit vy? A jak se zrychlováním začít?

<!-- AdSnippet -->

Hned na začátku si vám dovolím dát čtyři rady:

1. Řešte rychlost už na začátku
2. Zaveďte rychlostní limity
3. Analyzujte rychlost průběžně
4. Spolupracujte s vývojáři

Teď už se ale pojďme podívat na konkrétní postup. Úplně nejdříve ale – proč to vlastně chtít rychlé?

## Proč vlastně chtít rychlý web?

- Protože to má prokazatelně vliv snad na všechny metriky úspěšnosti webu. Konverze, počet zobrazených stránek, spokojenost návštěvníků.
- Má to taky vliv na AdWords inzerátů a přirozených výsledků Google. 
- Mobilní sítě nebudou tak rychlé, jak bychom chtěli. Bodejď by byly, když to lítá vzduchem.

<blockquote class="twitter-tweet" data-lang="en"><p lang="cs" dir="ltr">Pravděpodobnost odchodu ze stránky v závislosti na rychlosti webu dle Google ukazuje <a href="https://twitter.com/machal">@machal</a> na <a href="https://twitter.com/hashtag/uxcrosummit?src=hash">#uxcrosummit</a> <a href="https://t.co/wUntZFW7rM">pic.twitter.com/wUntZFW7rM</a></p>&mdash; Pavel Ungr 🔍 🇨🇿 (@PavelUngr) <a href="https://twitter.com/PavelUngr/status/857895259254206464">April 28, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Více jsem psal v článku [„Proč řešit rychlost načítání webu?“](rychlost-nacitani-proc.md).


## Nástroje a metriky

Jako designéři a marketéři nemusíte jít moc do hloubky. Pro začátek stačí Analytics a PageSpeed Insights.

### Nástroje pro analýzu rychlosti

- *Google Analytics*  
 Ty vám řeknou alespoň čas celkového načtení stránky. Prima je, že rovnou vidíte různé kontexty: jak pomalé je to v jednotlivých prohlížečích nebo jak se liší jednotlivé stránky. Fajn začátek. Jo, vývojáři, vy si v Analytics nainstalujte [Technical Performance Dashboard](http://www.vzhurudolu.cz/prirucka/google-analytics-vyvojari#vse-v-jednom-skvely-technical-performace-dashboard).
- *PageSpeed Insights*    
  Prostě si tam občas dejte adresu webu a držte se jeho doporučení. Plné skóre 100/100 honit nemusíte. Je to zbytečné a většinou nereálné. 90 na jedničku stačí. Mrkněte na  [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights). 
- *WebpageTest*  
Je skvělý, ale spíše pro pokročilé testování. Ukažte ho svým vývojářům. 

Nástroje pro analýzu rychlosti mám rozepsané [ve zvláštním článku](rychlost-nastroje.md).

### Metriky

Pokud byste chtěli jít do hloubky, doporučím vám metriky z WebpageTestu, které se vyplatí sledovat. Ideálně si je zařaďte mezi svoje KPI.

- *First Byte (TTFB)*   
Jak rychlý je server.  
Čím nižší, tím lepší. Ideál na 3G: pod půl vteřiny.
- *Speed Index (SI)*   
Jak rychle se vykresluje obsah.   
Čím vyšší, tím horší. Ideál do 2 000.
- *Time to Interactive (TTI)*   
Kdy je stránka připravená na uživatelské vstupy.  
Nižší je lepší. Ideál: nízké jednotky vteřin.
- *Page Load*   
Čas, kdy je staženo vše ze stránky.  
Nižší je lepší. Ideál je do pěti vteřin.

S ideálními hodnotami to dost zjednodušuji – záleží od projektu. A taky na jaké rychlosti připojení to měříte. Já tady počítám „3Gfast“ z WebpageTestu. 

Je dobré vědět, že se měření dělají hlavně pro vstupní stránky a pro nové uživatele. Lidé, kteří váš web navštívili už dříve během posledního měsíce, mají „zpomalující“ části stránky nejspíše nakešované v prohlížeči.

Pokud byste to chtěli ještě více zjednodušit, sledujte hlavně [Speed Index](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index).

<!-- AdSnippet -->

Měření a „optimalizace“ se nemá dělat jednorázově. Musíte to měřit pravidelně. Všechny měřící služby mají nějaké API, takže si to můžete nechat zařadit do interních měřících nástrojů. Nebo využijte hotové řešení jako je [SpeedCurve.com](https://speedcurve.com/).


## Jak můžete pomoci vývojářům?

Rychlost načítání je brána jako technická metrika. Ano, může být. Jenže rozhodnutí designérů, marketérů a majitelů webů na ni může mít ohromný vliv. 

Proto je dobré přijmout něco jako „kulturu rychlosti“ – zvažování dopadů vašich rozhodnutí právě na rychlost načítání.

### 1. Myslete na rychlost už v začátku projektu

Nemám rád slovo slovo „optimalizace“, používané často ve spojení s webovými projekty. Abyste totiž museli „optimalizovat“, musíte to nejdříve pořádně pokazit.

Myslete na rychlost už když projekt nebo změny v projektu plánujete. Stejně jako myslíte na marketing, přístupnosti, cílové skupiny a stejně jako když stanovujete KPI.

### 2. Nastavte si rychlostní limity (Performance Budget)

Rychlostní limity (také Speed Budget nebo Performance Budget) jsou maximální hodnoty metrik, kterých chcete u svého projektu dosahovat.

Předpokládám, že děláte nějakou analýzu konkurence. Změřte si také jejich rychlostní metriky.

<figure markdown="1">

| Web           | First Byte |  Speed Index |  Page Load |
|:--------------|-----------:| ------------:|-----------:|
| mujweb.cz     | 1,205 s    | 10 542       | 12,5 s     |
| konkurent1.cz | 0,355 s    | 4 535        | 8,5 s      |
| konkurent2.cz | 1,105 s    | 8 500        | 9,5        | 

<figcaption markdown="1">    
*Ukázkové srovnání s konkurencí u existujícího webu. Hledáte konkurenta, který má ve vašem oboru nejlepší rychlostní metriky*
</figcaption> 
</figure>

Je prokázáno, že lidé jsou schopní rozeznat dvacetiprocentní a vyšší rozdíl v rychlosti načítání. Proto si pro vlastní web nastavte právě takto vylepšené cíle:

|                    | First Byte |  Speed Index |  Page Load |
|:-------------------|-----------:| ------------:|-----------:|
| Cíl pro mujweb.cz  | 0,26 s     | 3 600        |  6,8 s     |

Více je v článku [„How To Make A Performance Budget“](http://v3.danielmall.com/articles/how-to-make-a-performance-budget/) od Dana Malla.

<blockquote class="twitter-tweet" data-lang="en"><p lang="cs" dir="ltr">Je dobré mít o 20 % rychlejší načítání webu než konkurence. Je to rozdíl, který uživatelé poznaji. <a href="https://twitter.com/machal">@machal</a> <a href="https://twitter.com/hashtag/uxcrosummit?src=hash">#uxcrosummit</a> <a href="https://t.co/vXK0HvXiCH">pic.twitter.com/vXK0HvXiCH</a></p>&mdash; Michal Voják (@MichalVojak) <a href="https://twitter.com/MichalVojak/status/857898785661480961">April 28, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


### 3. Klíč pro zavedení kultury rychlost je ve spolupráci s vývojáři

Říkám to pořád a tady to jen zopakuji: Zvěte vývojáře už na úvodní schůzky, kde přemýšlíte o řešení. Ukazujte jim wireframy, rozpracovanou grafiku. Ptejte se, jaké budou mít návrhy dopad na rychlost načítání.

Ne vždy vám to vývojáři dokáží říct hned. Vyhraďte si nějaký čas na prototypování řešení zaměřené na potenciálně rizikové části návrhů.

## Časté problémy v podkladech od designérů

Tedy ne, že by byli vývojáři bez viny… Na jejich problémy se podíváme v další částí textu. Teď k problémům, které mohou přicházet od designérů.

### Video nebo obrovské obrázky na pozadí stránky

Začínám jasným problémem. Ano, i tyto dva problémy z kateroie *zločiny proti rychlosti* jde ze strany vývojáře ošetřit. Alespoň třeba na smartphonech. Všechno jde, když se chce. Nebo když je na to rozpočet. Takže, pokud na takových návrzích budete trvat, připravte si více peněz a vývojářům dejte více času.

### Děsně moc řezů písma

Opravdu je jich potřeba více než pět? Každý řez písma (ne rodina písma!) navíc znamená, že stránka stahuje o pár desítek kilobajtů dat navíc. 

Webfonty jsou samozřejmě v pořádku, ale použití každého řezu zvažujte.

### Vkládané objekty: Facebook, Youtube a další

Dejte si pozor na vkládaný kód třetích stran. Obvykle nebývá moc dobře ošetřený co se rychlosti týče. Každé „lajkovací“, sdílecí tlačítko, video z Youtube, Slideshare prezentace vyžaduje stažení nemalého objemu dat a pošle nemalý počet dotazů na server.

I vkládané objekty je možné vývojářsky ošetřit: Přepsáním vkládacího kódu, jeho správnými nastavením nebo pokročilými technikami jako je [lazy loading](lazy-loading.md). Opět ale počítejte s vyšší potřebou čas a peněz pro vývojáře.


### Měřící a A/B testovací služby: pokud je zrovna nepoužíváte, vypínejte je

Služby jako HotJar, Optimizely, Google Tag Manager dokáží v rukou laika napáchat velká zpomalení webu.

Tyto skripty mají dva negativní dopady:

- *Stahují nemalý objem dat*   
Například stará verze Optimizely stahovala kromě vlastního skriptu i další  verzi jQuery.
- *Brzdí zobrazení stránky*  
Tomu se například u A/B testovacích stránek moc nedá vyhnout, ale způsob vykreslení stránky se dá optimalizovat. 

Během přípravy textu mi například Optimizely zpomalovaly zobrazení Mall.cz o vteřinu a půl.

Doporučuji udělat dva kroky:

1. A/B testovací skripty do stránky nevkládat, když zrovna netestujete.
2. Nechat si je posoudit nebo případně přepsat od vývojářů. Více v článku [od Petra Soukupa](https://www.souki.cz/jak-si-zabit-eshop-mericim-kodem).

## Praktické tipy

Pojďme se teď podívat na pár praktických tipů, jak web zrychlit. Nemám tady ambici poskytnout kompletní přehled. Jde o věci, které mohou mít velký dopad s malém energie. Designéři, marketéři či provozovatelé mohou s malou výpomocí od vývojáři dosáhnout významných změn.


### Datový objem: Ušetřit jde hlavně na obrázcích a Javascriptu

- Kde můžete použít vektory, použijte [SVG obrázky](svg.md).
- Zvažte použití formátu WebP. Je to lépe komprimovaná háhrada JPEG. Umí jej sice jen Chrome a Opera, ale není těžké servírovat WebP i JPEG najednou. Více je v článku [o HTML značce Picture](picture.md).
- Když už využíváte JPEG, zvažte náhradu open source řešení pro změnšování datového objemu obrázků. Doporučuji například [Kraken.io](https://kraken.io/).

Chcete příklad z praxe? Když kolegové z VašeČočky.cz nasadili WebP obrázky, ušetřili 30 % datového objemu  úvodní stránky (1250 kB → 950 kB ) a o pětinu snížili čas pro Page Load  (19,8 s → 16,8 s).

### Javascript: Odstraňte blokování parsování

Máte něco takového v HTML hlavičce?

```html
<head>
  <script src="knihovna-1.js"></script>
  <script src="knihovna-2.js"></script>
  <script src="knihovna-3.js"></script>
  <script src="knihovna-4.js"></script>
</head>
```

Pokud ano, pravděpodobně vám to web na pomalých připojeních doslova zabíjí. Skripty bez parametru `async` nebo `defer` musí prohlížeč postupně stáhnout a spustit. Vzniká tak zpomalující vodopád.

Lepší by bylo soubory spojit do jednoho, ten zmenšit a servírovat *asynchronně*:

```html
<head>
  <script src="all.min.js" async></script>
</head>
```

Tolik stručně. Problematika přikládání skriptů do stránky je ale netriviální. Probíráme ji mimojiné na mém [školení rychlosti načítání webů](http://www.vzhurudolu.cz/kurzy/rychlost-nacitani).

### Přejděte na HTTP/2

HTTP/2 je nová, rychlejší verze protokolu. Je zpětně kompatibilní, takže s ní nemají problémy ani starší prohlížeče. A všechny moderní ji už umí.

Už jen pouhé zapnutí HTTP/2 na serveru vám pravděpodobně web alespoň trohu zrychlí. Obraťte se na svůj hosting nebo serverové administrátory.

Jen pozor, pravděpodobně bude po přechodu potřebné poupravit i způsob servírování frontendových prvků stránky. Více naleznete v mém textu [o HTTP/2](http-2.md).

### Webfonty

Po obrázcích a Javascriptu bývají webové fonty třetím největším datovým hříšníkem. To ještě není tak hrozné jako to, že každý prohlížeč s webfonty zachází trochu jinak:

- Chrome a Opera: Na tři vteřiny schová obsah a mezitím se pokouší stáhnout soubory s webfonty. Pokud to nestihne, vykreslí web systémovými písmy.
- Safari: Systémová písma nepoužívá. Čeká na webfonty. Klidně donekonečna. (Majitelé iPhonů to znají jako „syndrom stránky bez textů“. Hlavně ti, kteří jezdí pražským metrem, kde je slabý signál je ve stanicích.)
- Edge a Explorer: Stránku vykreslí systémovým písmem. Až se načtou webfonty, vykreslí je pomocí webfontů.

„Designovým“ webům nejvíce vyhovuje chování Safari, „užitkovým“ zase chování Edge. Chrome a Opera štvou všechny.

Je ale nutné, aby vývojář převzal kontrolu a způsob servírování sjednotil napříč všemi přohlížeči. Osobně k tomu používám knihovnu [FontFaceObserver](https://fontfaceobserver.com/).

Příklad z praxe? Kolegové z VašeČočky.cz snížili nasazením FontFaceObserveru hodnotu metriky Start Render Time  na polovinu (13,2 s → 6,6 s).


### Zvažte nasazení technologie AMP

[Accelerated Mobile Pages Project](https://www.ampproject.org/) je technologie pro tvorbu speciální verze stránek od Google.

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=i2_lAEzmOPo">AMP HTML (Accelerated Mobile Pages) demo</a> ~ AMP verze stránky se vám z výsledků vyhledávání Google zobrazí prakticky okamžitě. I na EDGE připojení.
</p>

Zatím je určená hlavně pro statické weby – formát typu články. [V plánech](https://www.ampproject.org/roadmap/) se ale objevují zmínky i o e-commerce.

O AMP jsem už dříve [psal na blogu](http://www.vzhurudolu.cz/blog/40-amp).


### Psychologie: používejte zástupné symboly, skeletony…

Je prokázáno, že lidé daleko lépe vnímají proce načítání stránky, pokud se během něj nemusejí dívat na prázdné okno prohlíže nebo jen točící se indikátor načítání.

<blockquote class="twitter-tweet" data-lang="en"><p lang="cs" dir="ltr">Skeletony (zástupná konstrukce): &quot;Ono se to načte třeba stejně rychle, ale ten pocit z toho je jiný.&quot; A vo to nám de ;) <a href="https://twitter.com/hashtag/UX?src=hash">#UX</a> <a href="https://twitter.com/hashtag/UXCROsummit?src=hash">#UXCROsummit</a> <a href="https://t.co/Zt3j7tvGxB">pic.twitter.com/Zt3j7tvGxB</a></p>&mdash; BoB Marvan (@BoBMarvan) <a href="https://twitter.com/BoBMarvan/status/857903734877302784">April 28, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Zástupné symboly a skeletony znáte z prostředí velkých aplikací – Facebooku nebo LinkedIn. 

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">The new <a href="https://twitter.com/LinkedIn">@LinkedIn</a> design utilizing “Skeleton Screens” for loading. cc <a href="https://twitter.com/lukew">@lukew</a> <a href="https://twitter.com/hashtag/ux?src=hash">#ux</a> <a href="https://twitter.com/hashtag/design?src=hash">#design</a> <a href="https://t.co/OqHIN041yD">pic.twitter.com/OqHIN041yD</a></p>&mdash; Joe Johnston (@merhl) <a href="https://twitter.com/merhl/status/829075715488415744">February 7, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

U javascriptových aplikací se skeletony nasazují lépe než u běžných webů, protože prohlížeče nemají vestavěné techniky pro práci s nimi. 


## Můžu vám pomoci?

- Pro vývojáři organizuji celodenní [školení rychlosti načítání webů](http://www.vzhurudolu.cz/kurzy/rychlost-nacitani).
- Poskytuji poradenství pro optimalizaci rychlosti webů. Neváhejte se [na mě obrátit](http://www.vzhurudolu.cz/martin#kontakt). 




