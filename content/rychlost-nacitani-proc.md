# Proč řešit rychlost načítání webu?

V Google mají jasno. Tohle prohlásil v roce 2010 Eric Schmidt, tehdejší šéf firmy:

> Never underestimate the importance of fast.

Ale nemusíte být Google. Rychlejší načtení vylepší uživatelský prožitek a pomůže tak cílům každého webu.

## My lidé to zkrátka rychlé chceme

Uživatelé jsou prostě jen lidé. Jejich trpělivost při čekání na reakci rozhraní po provedení akce není nekonečná.

* Do 100 milisekund: považujeme za okamžitou reakci.
* Do jedné vteřiny: poznáme prodlevu, ale nepřerušíme úkol.
* Nad deset vteřin: ztrácíme pozornost a máme tendenci začít plnit jiný úkol.

Více se dozvíte v článku „Response Times: The 3 Important Limits“ od Jacoba Nielsena. [vrdl.in/4o3d7](https://www.nngroup.com/articles/response-times-3-important-limits/)

<!-- AdSnippet -->

## Rychlost načtení stránky má vliv na úspěšnost webu

Říkají to alespoň studie a testy, které o tom byly publikovány.

Walmart si například spočítal, že každé zrychlení načtení stránky o vteřinu  zvýší konverze jejich webu o dva procentní body. To nebude úplně špatný výdělek, že ano? [vrdl.in/ziud9](http://www.slideshare.net/devonauerswald/walmart-pagespeedslide/46)

I v Česku rychlost zabírá. Portálu Srovname.cz jsem osobně pomáhal se zrychlením důležitých vstupních stránek. Poměrně jednoduchými kroky jsme na mobilních zařízeních zvýšili konverzní poměr o čtvrtinu. [vrdl.cz/b/58-rychlost-srovname-cz](https://www.vzhurudolu.cz/blog/58-rychlost-srovname-cz)

Další analýzy dokazují, že se zrychlení webu pozitivně promítá do všech klíčových ukazatelů: konverzního poměru, počtu zobrazených stránek, počtu návštěv nebo třeba spokojenosti zákazníků. Mnoho studií ze světa najdete na WPO stats. [wpostats.com](https://wpostats.com/)


## Rychlost ovlivňuje řazení inzerátů AdWords a přirozených výsledků ve vyhledávání přes Google

Ano, [rychlost načítání](rychlost-nacteni.md) je jedním z řadicích parametrů AdWords kampaní. Už od roku 2008. Na oficiálním blogu AdWords se píše:

>  Pokud výrazně vylepšíte čas načtení vaší cílové stránky, měli byste vidět lepší Quality Score a nižší nabídky pro minimální cenu za proklik (CPC).

Cituji z článku „Landing page load time now affects keywords' Quality Scores“. [vrdl.in/9w2xd](http://adwords.blogspot.cz/2008/06/landing-page-load-time-now-affects.html)

Google říká, že rychlost webu má vliv na zobrazování ve výsledcích vyhledávání. Na pořadí ve výsledcích má přímý vliv hlavně rychlost vygenerování stránky na serveru. Zájemce odkážu na detailní popis na Moz.com. [vrdl.in/zhrkp](https://moz.com/blog/how-website-speed-actually-impacts-search-ranking)

Od poloviny rok 2018 je také rychlost nově řadícím signálem v mobilních výsledcích vyhledávání. Google to píše v blogpostu „Using page speed in mobile search ranking“. [vrdl.in/f7b80](https://webmasters.googleblog.com/2018/01/using-page-speed-in-mobile-search.html)

Rychlost tedy ovlivňuje nejen konverze, ale i pravděpodobnost, že se na web člověk vůbec dostane. 


## Rychlost mobilních sítí se nikdy nevyrovná pevnému připojení

Ani zvyšování přenosové rychlosti na 3G/4G sítích nesrovná načítání webů na mobilech s připojením v kancelářích a domácnostech. Proč? Klíčový problém je latence, tedy doba, kterou v průměru trvá spojení mezi serverem a klientem.

Mrkněte se na tuhle tabulku. Je inspirovaná knihou Ilji Grigorika, High Performance Browser Networking.

<figure markdown="1">

| Připojení    | Max. rychlost Mbit/s  | Latence ms |
|:-------------|----------------------:|-----------:|
| 2G/EDGE      | 0,1–0,4               | 300–1000   |
| 3G           | 0,5–5                 | 100–500    |
| 4G/LTE       | 1–50                  | &lt; 100   |
| WiFi         | 1–50                  | &lt; 10    |

<figcaption markdown="1">    
  *Latence je průměrné zpoždění mezi požadavkem serveru a odpovědí prohlížeče. Doručení každého ze souborů, které web potřebuje, latence zdrží*
</figcaption> 

</figure>

Zatímco ideální přenosová rychlost mobilního připojení se může rovnat pomalejším „wifinám“, zpoždění (latence) pro zaslání každého ze souborů bude vždy horší. Vysvětlení je nasnadě – architektura mobilního internetového připojení je daleko složitější než u toho pevného. Data jdou vzduchem, že ano.

Česko je už sice hezky pokryto LTE sítěmi, jenže sítě čtvrté generace zdaleka nemají a jen tak nebudou mít v mobilu všichni. [lte.ctu.cz/pokryti/](http://lte.ctu.cz/pokryti/)

Takže: ano, rychlost načtení je dobré řešit. Pravděpodobně vám na web pomůže dostat více lidí a také vylepší klíčové ukazatele hodnocení jeho úspěšnosti. 

<div class="web-only" markdown="1">
Co dál? Přečíst si [článek o nástrojích](https://www.vzhurudolu.cz/prirucka/rychlost-nastroje) pro analýzu rychlosti.
</div>

<div class="ebook-only" markdown="1">
Rychlost je důležitá. Jak ji ale dostat do vašich projektů?
</div>

<!-- AdSnippet -->
