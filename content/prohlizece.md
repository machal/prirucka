# Prohlížeče v Česku

Vstupem Chrome na desktop a nástupem mobilů začaly nové Browser Wars. Máme tady minimálně 16 prohlížečů. Ano, z tohoto pohledu už kodéři zažívali lepší časy.

Pojďme si tady shrnout aktuální stav trhu prohlížečů v ČR. Čísla v textu jsou vytažená z měření Gemius SA na Rankings.cz a u mobilních zařízení z Google Analytics cestovky Rekrea. Vždy ke konci června 2016.

![Podíly prohlížečů na trhu v ČR](dist/images/original/prohlizece-desktop-kolac.jpg)

Nejprve tři zásadní fakta z poslední doby:

1. **Chrome požírá trh.**    
Už nyní se v Česku dostal přes třetinu zhlédnutých stránek. Ostatní prohlížeče stagnují nebo klesají.
2. **Staré Explorery už skoro vymřely.**    
Každý z Internet Explorerů kromě verze 11 už má podíl pod půl procenta a rychle klesá. Dnes je to poprvé co vám vyloženě nedoporučím pro ně dělat pracnější [fallbacky](fallback.md).
3. **Mobilní zařízení mají přes pětinu celku.**    
A více než polovina zhlédnutí stránek na mobilech je opět z Chrome.


## Desktop: Chrome jako jediný masivně roste. Na desktopu má více než třetinový podíl

![Vývoj podílu desktopových prohlížečů](dist/images/original/prohlizece-desktop.jpg)

Poznámky:

- V uvedeném období přestal klesat Firefox. Držím palce, aby nešlo o výjimku, protože konkurence je pro Chrome potřeba jako sůl.
- Konec starých Internet Explorerů (IE) je tady. Už dlouho se to týká verzí 9 a 10, teď už konečně i osmičky. 
- Edge, nový moderní prohlížeč od Microsoftu, roste. Ale pomalu.
- Opera se dlouho držela kolem čtyřprocentního podílu. V posledním roce ale také začala klesat.
- Podíl Safari na Apple počítačích v ČR k mému překvapení mírně roste. 

## Mobily: pětinový podíl na zhlédnutích stránek a dominance Chrome

![Vývoj podílu mobilních zařízení](dist/images/original/prohlizece-mobily-podil.jpg)

Na pětinovém podílu ze zhlédnutých stránek se mobily samozřejmě nezastaví. Za rok budou mít minimálně čtvrtinu a tak dále. Čísla ze Západu ukazují, že to půjde přes polovinu a výše. Ale vy už jistě dávno neváháte, že budoucnost webu je v mobilech.

![Trh mobilních prohlížečů](dist/images/original/prohlizece-mobily-kolac.jpg)

Podíly mobilních prohlížečů mám z Google Analytics cestovky Rekrea, protože Rankings.cz neumí rozumně rozeznat jednotlivé mobilní prohlížeče.

Data k relativně novému prohlížeči Samsung Internet odhaduji. V Analytics jsou schovaná za čísly mobilního Chrome. [vrdl.cz/blog/71-samsung-internet](http://www.vzhurudolu.cz/blog/71-samsung-internet)

Mezi mobilními prohlížeči tedy vede Chrome Mobile s 18,1 procenty podílu. Druhé je Safari Mobile (5,5 %), třetí Android Browser (3,1 %). Dle mých odhadů následuje Samsung Internet (kolem 3 %), Internet Explorer Mobile (0,7 %) a další méně významné prohlížeče jako Opery a zatím i mobilní Edge. 

Mobilní Chrome samozřejmě v budoucnu statistiky ovládne ještě výrazněji, protože je to nyní hlavní prohlížeč na Androidu. Ano, na té platformě, která dnes vlastně na mobilech nemá masově zaměřenou konkurenci. 

## K jednotlivým prohlížečům: ke dnešku je jich minimálně 16

Ke krátkému komentáři pro zajímavost přidávám i skóre [na HTML5test.com](https://html5test.com/). To udává podporu moderních HTML5 technologií. Čím vyšší, tím lepší.

### 9 prohlížečů, se kterými musíte počítat

- **[Chrome](https://en.wikipedia.org/wiki/Google_Chrome)**  
  Ten, co všechno sní. Celosvětově podle má podle Statcounter.com už k šedesátiprocentnímu podílu.
  <small>HTML5test.com: 492/555 (verze 52)</small>
- **[Firefox](https://en.wikipedia.org/wiki/Firefox)**  
  Celosvětově mírně klesá. Teď má na světě podle Statcounter podíl 14 %. Mozille nelze upřít snahu. Firefox chce zrychlit, [zavřela boční projekty](https://twitter.com/jsnajdr/status/785095932782190592) a přichází [s drobnými inovacemi](https://testpilot.firefox.com/experiments). Jenže Google má v případě Chrome z jejich pohledu dost nešťasnou kombinaci *umu* vyrábět výborný prohlížeč a *síly* cokoliv protlačit.
  <small>HTML5test.com: 461/555 (verze 48)</small>
- **[IE 11](https://en.wikipedia.org/wiki/Internet_Explorer_11)**  
  Podle vývoje za poslední dva roky ubrala relativně moderní jedenácka podíl ostatním prohlížečům od Microsoftu. Přepokládám, že teď začne klesat ve prospěch Edge a ostatních prohlížečů.
  <small>HTML5test.com: 312/555</small>
- **[Edge](https://en.wikipedia.org/wiki/Microsoft_Edge)**  
  Moderní prohlížeč od Microsoftu roste méně než bych čekal.
  <small>HTML5test.com: 460/555 (verze 14)</small>
- **[Opera](https://en.wikipedia.org/wiki/Opera_(web_browser))**
  Od verze 15 je Opera postavená na stejném jádru jako Chrome, takže s testováním na ní tolik práce není. Tedy, ne že by se dalo úplně vynechat. Nějaké rozdíly tam jsou. Opera každopádně mírně klesá. 
  <small>HTML5test.com: 496/555 (verze 40)</small>
- **[Safari](https://en.wikipedia.org/wiki/Safari_(web_browser))**  
  Z moderních prohlížečů je to dnes největší *brzda*. Ještě nedávno byl WebKit synonymem inovací na webu, pamatujete? Aktualizuje se klasicky až s verzemi operačního systému.
  <small>HTML5test.com: 370/555 (verze 9.1)</small>
- **[Chrome Mobile](https://en.wikipedia.org/wiki/Google_Chrome_for_Android)**    
  Na mobilech zatím jednoznačně kraluje. Jedinou konkurenci má v iOS zařízeních od Apple a v možném nástupu prohlížeče od Samsungu. U Chrome na iOS pozor. Je to jen pseudoprohlížeč, tedy jiné rozhraní pro mobilní Safari. Píšu o tom dále.  
  <small>HTML5test.com: 486/555 (verze 52)</small>
- **[Samsung Internet](http://developer.samsung.com/internet)**  
  Nový prohlížeč od Samsungu, který se ve statistkách (včetně Google Analytics) aktuálně schovává  pod mobilní Chrome. Moc o něm nevíme, ale Samsung zařízení patří mezi nejprodávanější i v ČR, takže s ním nějak musíme začít počítat. V mobilech má ikonu fialové zeměkoule. [vrdl.cz/blog/71-samsung-internet](http://www.vzhurudolu.cz/blog/71-samsung-internet) 
- **Android Browser**  
  Starší prohlížeč postavený na Webkit jádře. Modrá zeměkoule s nápisem Internet. Týká se Androidů ve verzích 4.x. Často jej upravovali výrobci zařízení, takže ho můžete znát třeba i pod jinými názvy. V téhle rodině prohlížečů je pěkný galimatyáš. Už se myslím ale nevyvíjí. [slides.com/html5test/the-android-browser](http://slides.com/html5test/the-android-browser)  
  <small>HTML5test.com: 356/555 (verze 30)</small>
- **[Safari Mobile](https://en.wikipedia.org/wiki/Safari_(web_browser))**  
  Jediné vykreslovací jádro dostupné na iOS. Všechny tamní prohlížeče, včetně Chrome, používají pro renderování stránek Safari. 
  <small>HTML5test.com: 378/555 (verze 9.3)</small>

### Speciální kategorie: WebView a prohlížeče uvnitř aplikací

Většina dnešních zhlédnutí webů na mobilech se neodehrává vědomým spuštěním prohlížeče, ale otevřením stránky kliknutím na odkaz uvnitř aplikací. Ve Facebooku, Twitteru nebo třeba e-mailové apce. Dříve jsem o tom podrobně psal na Vzhůru dolů. [vrdl.cz/blog/19-prohlizec-facebook](http://www.vzhurudolu.cz/blog/19-prohlizec-facebook)

Jakým prohlížečem se pak stránka vykreslí? Vývojáři nativních mobilních aplikací jej znají jako WebView komponentu. Ta startuje jádro výchozího prohlížeče pro konkrétní operační systém. Na iOS je to vždy mobilní Safari, na dnešních Androidech obvykle Chrome. 

I v těchto kontextech doporučuji weby testovat. Prohlížeče tam mívají trochu jiné uspořádání ovládacích prvků a některé funkce neumí.

### Vymírající nebo zatím slabě zastoupené prohlížeče

Weby je možné a slušné vyrobit tak, aby se zásadně nerozsypaly ani v méně obvyklých browserech. Rozhodně ale nedoporučuji trvat na plnohodnotném zobrazení v nich. [Náhradních řešení](fallback.md) se pro ně dá vymyslet celá řada.

- **[IE 8](https://en.wikipedia.org/wiki/Internet_Explorer_8)**   
  Děkujeme, ale už opravdu odejdi. Vypadá to, že jeho éra právě končí spolu s Windows XP.  
  <small>HTML5test.com: 33/555</small>  
- **[IE 9](https://en.wikipedia.org/wiki/Internet_Explorer_9)**  
  IE9 běží na systémech, kde lze obvykle aktualizovat na novější verzi.  
  <small>HTML5test.com: 113/555</small>  
- **[IE 10](https://en.wikipedia.org/wiki/Internet_Explorer_10)**  
  Také IE10 běží na systémech, kde lze obvykle aktualizovat na novější verzi. Tipuji, že IE8, 9 i 10 v roce 2017 vymřou úplně.  
  <small>HTML5test.com: 265/555</small>  
- **[Internet Explorery Mobile](https://en.wikipedia.org/wiki/Internet_Explorer_Mobile)**  
  Výchozí prohlížeče na Windows Phone verzí 7 a 8. V Analytics u relevantní projektů pod jednoprocentním podílem trhu.  
  <small>HTML5test.com: 310/555 (verze 11 na Windows Phone 8.1)</small>  
- **[Edge Mobile](http://jecas.cz/edge-mobile)**  
  Výchozí prohlížeč na mobilních Windows 10. V Analytics vidím u cestovky s průměrnou českou návštěvností kolem 0,2 % podílu. Ale poroste.    
  <small>HTML5test.com: 444/555 (Windows Phone 10) </small>   
- **[Opera Mobile](http://www.opera.com/cs/mobile)**
  Běžná mobilní Opera s jádrem Blink. Může mít asi 0,3 % podílu.    
  <small>HTML5test.com: 481/555 (verze 37)</small>  
- **[Opera Mini](http://www.opera.com/cs/mobile/mini)**  
  Proxy prohlížeč bez vlastního renderovacího jádra co dokáže šetřit datový objem, ale weby renderuje ošklivě. Dříve populární, dnes už v ČR zapadá. U cestovky vidím 0,1 % návštěv.


### Prohlížeče s menším než pětiprocentním podílem tvoří asi 15 % trhu

Jak už jsem na Vzhůru dolů psal, pětiprocentní nebo jiná hranice pro podporu prohlížečů je velmi zrádná. Prohlížeče pod touto hranicí teď tvoří kolem šestiny pageviews. Čtěte „pohádku o pěti procentech“. [vrdl.cz/blog/20-pet-procent](http://www.vzhurudolu.cz/blog/20-pet-procent)

Podporujte prostě různé prohlížeče různým způsobem a vynakládejte na to energii, které odpovídá byznys hodnotě jejich uživatelů s výhledem do budoucna.


## Renderovací jádra: vede samozřejmě Blink

K polovině prázdnin 2016 má jádro Blink (Chrome, Opera) podíl na trhu 48 procent. Gecko (Firefox) 20 %, Trident (Internet Explorer) 18,3 %, WebKit/KHTML (Safari) 9,0 % , EdgeHTML (Edge)  3,7 % a už nevyvíjené Presto (Opera 12-) 0,5 %.


## Závěrečná doporučení pro webaře


- **Moje obecná čísla berte s rezervou**. Sledujte hlavně vlastní Google Analytics.
- **Nebojte se nových technologií**. [Flexbox](css3-flexbox.md) má v těchto číslech přibližně 98 % podporu. Totéž SVG. Obojí vám ušetří práci a nabídne nové možnosti. Fallbacky ve starých prohlížečích rozhodně nedělejte plnohodnotné se zobrazením v moderních prohlížečích. Obvykle se vám to nevyplatí.
- **Nepodceňujte menší prohlížeče**. Zařízují sedminu zhlédnutí stránek. Naučte se testovat tak, abyste s tím neměli moc práce. Doporučím zase svůj článek. [vrdl.cz/prirucka/jak-testovat-responzivni-weby](http://www.vzhurudolu.cz/prirucka/jak-testovat-responzivni-weby)
- … a raději doslovně pro méně zkušené: Pokud by vás snad napadlo, že web se prohlíží hlavně na Chrome a pak trochu Firefoxu, ošklivě se klamete. 



