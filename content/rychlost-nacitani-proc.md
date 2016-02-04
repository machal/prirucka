# Proč řešit rychlost načítání webu?

Vylepší to uživatelský prožitek a pomůže cílům webu.

## Lidé to prostě rychlé chtějí

Uživatelé jsou jen lidé. A na těch dělal v šedesátých letech pokusy jistý pan Miller, od kterého to pak v devadesátých letech převzal jistý [pan Nielsen](https://www.nngroup.com/articles/response-times-3-important-limits/). Zkoumána byla trpělivost lidí při čekání na reakci rozhraní po provedení jejich akce:

- do 100 ms –  považujeme za okamžitou reakci
- do jedné vteřiny – poznáme prodlevu, ale nepřerušíme úkol
- nad deset vteřin – ztrácíme pozornost a máme tendenci začít plnit jiný úkol

Další zajímavá čísla v souvislosti s lidskými vjemovými schopnostmi najdete třeba [v doporučeních Google](https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/rail#focus-on-the-user) pro autory webů.


## Mobilní sítě se nikdy nevyrovnají pevnému připojení

Ani zvyšování přenosové rychlosti na 3G/4G sítích rychlost načítání webů nevyrovnají s připojením v kancelářích a domácnostech. Proč? Klíčový problém je *latence*, tedy doba, kterou v průměru trvá spojení mezi serverem a klientem. 

Mrkněte na tuhle tabulku. Je inspirovaná knihou Ilji Grigorika [High Performance Browser Networking](http://shop.oreilly.com/product/0636920028048.do):


Připojení | Max. rychlost Mbit/s |  Latence ms
------------ | ------------------------ | --------------
2G/EDGE  |  0,1 - 0,4  |  300 - 1000
3G  |   0,5 - 5  |  100 - 500
4G/LTE  |   1 - 50  |   < 100
Wifi  |   1 - 50  |   < 10

Vysvětlení je nasnadě - architektura mobilního internetového připojení je daleko složitější než toho pevného. Více toho jde vzduchem, připojujeme se do béteesek, které mohou být různě vytížené atd.

Ano, Česko je už sice moc hezky [pokryto LTE sítěmi](http://lte.ctu.cz/pokryti/), jenže tuhle rychlost zdaleka nemají a jen tak nebudou mít v mobilu všichni.

## Rychlost načtení stránky má zároveň velký vliv na úspěšnost webu

Říkají to alespoň studie a testy, které o tom byly publikovány.

Wallmart si například spočítal, že každé zrychlení načtení stránky o vteřinu [jim zvýší konverze o dva procentní body](http://www.slideshare.net/devonauerswald/walmart-pagespeedslide/46).

Případovky ukázaly, že se zrychlení webu pozitivně promítá do všech klíčových ukazatelů – [konverzního poměru](https://wpostats.com/tags/conversions/), [počtu zobrazených stránek](https://wpostats.com/tags/page%20views/), [počtu návštěv](https://wpostats.com/tags/reach/) nebo třeba [spokojenosti zákazníků](https://wpostats.com/tags/satisfaction/). Všechny studie ze světa najdete na [WPO stats](https://wpostats.com/), hezkou [infografiku tady](https://hostingfacts.com/slow-website-infographic/).

V Česku sice zatím nevím o takhle hezkých případovkách, lidé jsou ale všude stejní, že ano? Inspirovat se ale můžete u případů, kdy se kladení důrazu na rychlé načtení vyplácí jako součást širší internetové strategie. [Velmi úspěšný redesign Respektu](http://www.slideshare.net/MichalIschia/cesta-za-pedplatitelem-respektu-aneb-jak-vyut-redesign/15) dávám jako první příklad. Rychlost hodně řeší také třeba vývojáři [ve Slevomatu](https://www.youtube.com/watch?v=Jz7htHPjsu4). Pokud máte konkrétní čísla z Česka, neváhejte mě konktaktovat.

## Na rychlosti závisí hodnocení Adwords inzerátů nebo řazení v Google vyhledávání

Nezapomeňte, že rychlost načítání je jedním z řadících parametrů [AdWords kampaní](http://adwords.blogspot.cz/2008/06/landing-page-load-time-now-affects.html). 

Google říká, že rychlost webu má [vliv na výsledky vyhledávání](https://googlewebmastercentral.blogspot.cz/2010/04/using-site-speed-in-web-search-ranking.html). Na pořadí ve výsledcích má přímý vliv hlavně [rychlost vygenerování stránky](https://moz.com/blog/how-website-speed-actually-impacts-search-ranking) na serveru. 

Rychlost tak ovlivňuje nejen konverze, ale i pravděpodobnost, že se na web člověk vůbec dostane.
