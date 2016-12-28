# Proč řešit rychlost načítání webu?

„Never underestimate the importance of fast" prohlásil v roce 2010 Eric Schmidt, tehdejší šéf Google.

Nemusíte být Google. Rychlejší načtení vylepší uživatelský prožitek a pomůže cílům snad každého webu.

## My lidé to prostě rychlé chceme

Pojďme si přiznat, že uživatelé jsou jen lidé. Na jejich vnímání rychlosti uživatelského rozhraní dělal v šedesátých letech pokusy Robert B. Miller. Výsledky v devadesátých letech převzal Jacob Nielsen. Zkoumána byla trpělivost lidí při čekání na reakci rozhraní po provedení uživatelské akce:

* do 100 ms – považujeme za okamžitou reakci,
* do jedné vteřiny – poznáme prodlevu, ale nepřerušíme úkol,
* nad deset vteřin – ztrácíme pozornost a máme tendenci začít plnit jiný úkol.

Více je v článku „Response Times: The 3 Important Limits": [nngroup.com/articles/response-times-3-important-limits/](https://www.nngroup.com/articles/response-times-3-important-limits/)

## Rychlost načtení stránky má vliv na úspěšnost webu

Říkají to alespoň studie a testy, které o tom byly publikovány.

Wallmart si například spočítal, že každé zrychlení načtení stránky o vteřinu jim zvýší konverze o dva procentní body. [http://www.slideshare.net/devonauerswald/walmart-pagespeedslide/46](http://www.slideshare.net/devonauerswald/walmart-pagespeedslide/46).

Další analýzy dokazují, že se zrychlení webu pozitivně promítá do všech klíčových ukazatelů – konverzního poměru, počtu zobrazených stránek, počtu návštěv nebo třeba spokojenosti zákazníků. Všechny studie ze světa najdete na WPO stats. [wpostats.com](https://wpostats.com/)

 

Případovou studii ale máme už i z českého prostředí. Srovname.cz jsem pomáhal se zrychlením důležitých vstupních stránek. Poměrně jednoduchými kroky jsme na mobilních zařízeních zvýšili konverzní poměr o čtvrtinu. [vrdl.cz/blog/58-rychlost-srovname-cz](http://www.vzhurudolu.cz/blog/58-rychlost-srovname-cz)

## Ovlivňuje také řazení Adwords inzerátů a přirozených výsledků v Google vyhledávání

Nezapomeňte, že rychlost načítání je jedním z řadících parametrů AdWords kampaní. [http://adwords.blogspot.cz/2008/06/landing-page-load-time-now-affects.html](http://adwords.blogspot.cz/2008/06/landing-page-load-time-now-affects.html)

Google říká, že rychlost webu má vliv na zobrazování ve výsledcích vyhledávání. Na pořadí ve výsledcích má přímý vliv hlavně rychlost vygenerování stránky na serveru.

Rychlost tak ovlivňuje nejen konverze, ale i pravděpodobnost, že se na web člověk vůbec dostane.

[https://moz.com/blog/how-website-speed-actually-impacts-search-ranking](https://moz.com/blog/how-website-speed-actually-impacts-search-ranking)

## Mobilní sítě se nikdy nevyrovnají pevnému připojení

Ani zvyšování přenosové rychlosti na 3G/4G sítích rychlost načítání webů na mobilech nevyrovná s připojením v kancelářích a domácnostech. Proč? Klíčový problém je latence, tedy doba, kterou v průměru trvá spojení mezi serverem a klientem.

Mrkněte se na tuhle tabulku. Je inspirovaná knihou Ilji Grigorika, High Performance Browser Networking.

Připojení | Max. rychlost Mbit/s |  Latence ms
------------ | ------------------------ | --------------
2G/EDGE  |  0,1 - 0,4  |  300 - 1000
3G  |   0,5 - 5  |  100 - 500
4G/LTE  |   1 - 50  |   < 100
Wifi  |   1 - 50  |   < 10

Vysvětlení je nasnadě - architektura mobilního internetového připojení je daleko složitější než toho pevného. Hlavně proto, že data jdou vzduchem.

Ano, Česko je už sice moc hezky pokryto LTE sítěmi, jenže tuhle rychlost zdaleka nemají a jen tak nebudou mít v mobilu všichni. [lte.ctu.cz/pokryti/](http://lte.ctu.cz/pokryti/)

Takže ano, rychlost načtení je dobré řešit – pravděpodobně vám na web pomůže dostat více lidí a také vylepší klíčové ukazatele hodnocení jeho úspěšnosti. Co dál? Přečíst si [článek o nástrojích](http://www.vzhurudolu.cz/prirucka/rychlost-nastroje) pro analýzu rychlosti.
