# Prohlížeče v Česku: Webdesignérův průvodce pro rok 2018

Vstupem Chrome na desktop a nástupem mobilů začaly nové „Browser Wars“. Od roku 2017 ale rostou i další nové prohlížeče – ty od Samsungu a od Seznamu.

Prohlížečů je prostě dneska jako malých myší a pro webaře může být tohle prostředí trochu nepřehledné. Pojďme na něj zaostřit v tomhle textu.

Obsah: [Statistiky prohlížečů na počítačích](#pocitace) – [Statistiky prohlížečů na mobilech](#mobily) – [Trendy](#trendy) – [Jednotlivé prohlížeče](#prohlizece) – [Renderovací jádra](#jadra) – [Závěrečná doporučení](#doporuceni)

Poznámka: Níže uvedené podíly prohlížečů mám z dat Google Analytics pro weby cestovky Rekrea, která mi nabízí hezký vzorek „průměrné“ české populace. Dále vycházím z Gemiusu a jeho Rankings.cz. Ty ale hůře rozeznávají jednotlivé menší prohlížeče.

## Počítače: Chrome s polovičním podílem kraluje. Je tady ale řada malých  {#pocitace}

<figure>
<img src="../dist/images/original/prohlizece-desktop.jpg?3" alt="Podíl desktopových prohlížečů">
<figcaption markdown="1">
*Podíl desktopových prohlížečů. Zdroj: Google Analytics pro weby cestovky Rekrea v červnu 2018*
</figcaption>
</figure>

*Chrome* samozřejmě ukousl největší část trhu. Dále v textu je ale vidět, že v Česku na desktopech spíše stagnuje a rostou hlavně nové menší prohlížeče.

*Firefox* se drží na druhém místě, ale níže je vidět, že stále klesá. Bohužel.

*Internet Explorer* – ještě stále je tu s námi. U většiny webů jde z 97 % o verzi 11. Dobrá zpráva tedy je, že skoro u žádného českého projektu není potřeba optimalizovat pro verze 8, 9 ani 10.

*Edge*, nový moderní prohlížeč od Microsoftu, roste. Ale pomalu.

*Opera* se dlouho držela kolem čtyřprocentního podílu. S nástupem „nových malých“ ale také začala klesat.

<!-- AdSnippet -->

Tím „novým malým“ je na desktopu myšlený hlavně *Seznam.cz*. A malý je jen prozatím. Sledovat jeho vývoj bude zajímavé, uvidíte.

## Mobilní zařízení: Dominuje Chrome a pod ním se krčí Safari {#mobily}

Jaký je dnes vlastně podíl mobilních zařízení v ČR? [Data z Gemius](https://ranking.gemius.com/cz/ranking/platforms/) k srpnu 2018 ukazují tyto procenta:

- PC: 62 %
- Telefony: 33 %
- Tablety: 5 %

Mobilní zařízení jsou tedy už i v ČR na podílu ke čtyřiceti procentům.

Čísla ze Západu ukazují, že to půjde přes polovinu a výše. Ale vy už jistě dávno neváháte, zda je budoucnost webu v mobilech nebo není.

<figure>
<img src="../dist/images/original/prohlizece-mobily.jpg" alt="">
<figcaption markdown="1">
*Podíl mobilních prohlížečů. Zdroj: Google Analytics pro weby cestovky Rekrea v červnu 2018*
</figcaption>
</figure>

Mezi mobilními prohlížeči tedy vede *Chrome Mobile*.

Druhé je *Safari Mobile*. Mobilní zařízení od Apple jsou samozřejmě slušně rozšířená i v Česku.

Jako třetí ukazují Analytics *Android Webview*, což dle mého je je prohlížení webu v aplikacích jako je Facebook a spol. Technicky by dle všeho mělo jít o Chrome nebo něco postavené na Chromiu. [Dříve](https://www.quirksmode.org/blog/archives/2015/02/android_webview.html) to mohl být také stařičký *Android Browser*, což už snad neplatí. Ten je v Google Analytics uváděný zvlášť se zanedbatelným podílem 1,12 % na mobilních zařízeních.

Nezapomeňte na *Samsung Internet* a *Seznam.cz*. Oba dva jsou velmi podobné Chrome. Za chvíli se dozvíte více.

Když sečteme všechny prohlížeče postavená na jádru Chrome („Chromium“), kromě Safari nemá v ČR na mobilních zařízení žádnou konkurenci. Ostatně ani na světe ne.

## Trendy: Roste mobilní Chrome a nové menší prohlížeče {#trendy}

<figure>
<img src="../dist/images/original/prohlizece-trendy.jpg" alt="">
<figcaption markdown="1">
*Trendy podílu prohlížečů na českém trhu pro ty „velké“ (s větším podílem na trhu) i „malé“. Zdroj: Gemius mezi dubnem 2016 a srpnem 2018, [ranking.gemius.com](https://ranking.gemius.com/)*
</figcaption>
</figure>

Na prvním grafu je hezky vidět, že zatímco *desktopový Chrome* stagnuje, ten mobilní hodně roste.

Podíly *Firefoxu* a *Internet Exploreru* verze 11 bezútěšně klesají. Nyní jsou v Gemiusu 14 a 12 procentech, přičemž toho prvního je trochu škoda a ten druhý klesá na můj vkus trochu pomalu.

A menší prohlížeče? *Opera* neustále mírně klesá. Roste *prohlížeč od Seznamu* – to je v Česku novinka – a *Samsung Browser*, což je novinka globální.

Mimochodem, skoky v grafu si vysvětluji změnami v měření Gemiusu. Je vidět, že prohlížeč od Seznamu začali rozlišovat až poměrně pozdě.

## 10 prohlížečů, se kterými prostě musíte počítat {#prohlizece}

Ke krátkému komentáři pro zajímavost přidávám i skóre [na HTML5test.com](https://html5test.com/). To udává podporu moderních HTML5 technologií. Čím vyšší, tím lepší.

### Chrome {#chrome}

Ten, co všechno sní. Celosvětově má podle Statcounter.com už dvě třetiny podílu. [Wikipedia](https://en.wikipedia.org/wiki/Google_Chrome)  
<small>HTML5test.com: 528/555 (verze 69)</small>

### Firefox {#firefox}

Celosvětově postupně klesá. Teď má na světě podle Statcounter podíl 11 %. Mozille nelze upřít snahu. Firefox chce zrychlit, [zavřela boční projekty](https://twitter.com/jsnajdr/status/785095932782190592) a přichází [s drobnými inovacemi](https://testpilot.firefox.com/experiments). Jenže Google má v případě Chrome z jejich pohledu dost nešťastnou kombinaci *umu* vyrábět výborný prohlížeč a *síly* cokoliv protlačit. [Wikipedia](https://en.wikipedia.org/wiki/Firefox)  
<small>HTML5test.com: 493/555 (verze 62)</small>

<div class="related" markdown="1">
- [Chrome vyhrál a Firefox je za pár let mrtvý?](/blog/89-firefox-mrtvy)
- [Pohádka o pěti procentech](/blog/20-pet-procent)
- [Mobilní prohlížeč kde lidé tráví nejvíc času? Nejspíš se jmenuje Facebook](/blog/19-prohlizec-facebook)
</div>

### Internet Explorer 11 {#IE11}

Oproti starším verzí IE je to relativně moderní kus software. Jenže na dnešní potřeby webařů nestačí. Blokuje nás zejména jeho [(ne)podpora CSS gridu](css-grid.md). Předpokládám, že bude dále klesat ve prospěch Edge a ostatních prohlížečů. Mohl by ale předvádět rychlejší sešup, než dneska vidíme. [Wikipedia](https://en.wikipedia.org/wiki/Internet_Explorer_11)  
<small>HTML5test.com: 312/555</small>

### Edge {#edge}

Moderní prohlížeč od Microsoftu roste méně než bych čekal.
[Wikipedia](https://en.wikipedia.org/wiki/Microsoft_Edge)  
<small>HTML5test.com: 492/555 (verze 17)</small>

### Opera {#opera}

Od verze 15 je Opera postavená na stejném jádru jako Chrome, takže s testováním na ní tolik práce není. [Wikipedia](https://en.wikipedia.org/wiki/Opera_(web_browser))  
<small>HTML5test.com: 515/555 (verze 55)</small>

### Safari {#safari}

Prohlížeč od Apple. Z moderních programů na brouzdání webem je to dnes největší „brzda“. Ještě před pár lety byl WebKit synonymem inovací na webu, pamatujete? Aktualizuje se totiž jen dnes už zastarale až s verzemi operačního systému.
[Wikipedia](https://en.wikipedia.org/wiki/Safari_(web_browser))  
<small>HTML5test.com: 456/555 (verze 11.1)</small>

### Seznam.cz {#seznam}

Opět relativně nový prohlížeč, který ale spokojeně roste. Je od Seznamu, takže bodejď by ne. Postavili ho na jádru Chromium. V době psaní textu má zpoždění oproti aktuální verzi Chrome 3 verze. Ale [podle vyjádření tvůrců v našem podcastu](/podcast/120-podcast-seznam-prohlizec) by se to mělo výhledově změnit. „Zpoždění“ by nemuselo být tak velké. Je k dispozici i pro mobily. Jeho Androidí verze je velice úspěšná – v září 2018 je to prý už druhý nejčastější prohlížeč, přes který lidé přistupují na weby Seznamu. [Web prohlížeče](https://www.seznam.cz/prohlizec)  
<small>HTML5test.com: 520/555 (verze 4.5)</small>

### Chrome Mobile {#chrome-mobile}

Na mobilech zatím jednoznačně kraluje. Jedinou konkurenci má v iOS zařízeních od Apple a v možném nástupu prohlížeče od Samsungu. Na iOS a Apple zařízeních pozor. Je to jen pseudoprohlížeč, tedy jiné rozhraní pro mobilní Safari. Píšu o tom dále v textu. [Chrome Mobile na Wikipedii](https://en.wikipedia.org/wiki/Google_Chrome_for_Android)  
<small>HTML5test.com: 515/555 (verze 63)</small>

### Safari Mobile {#safari-mobile}

Jediné vykreslovací jádro dostupné na iOS. Všechny tamní prohlížeče, včetně Chrome, používají pro renderování stránek Safari. [Wikipedia](https://en.wikipedia.org/wiki/Safari_(web_browser))  
<small>HTML5test.com: 462/555 (verze 11.3)</small>

### Samsung Internet {#samsung-internet}

Relativně nový prohlížeč od Samsungu, který se ve statistkách (včetně Google Analytics) kdysi schovával  pod mobilní Chrome. Moc o něm zatím nevíme, ale Samsung zařízení patří mezi nejprodávanější i v ČR, takže s ním nějak musíme začít počítat. V mobilech má ikonu fialové zeměkoule. [vrdl.cz/b/71-samsung-internet](https://www.vzhurudolu.cz/blog/71-samsung-internet) [Web](https://developer.samsung.com/internet)  
<small>HTML5test.com: 517/555 (verze 6.2)</small>

### Speciální kategorie: WebView a prohlížeče uvnitř aplikací {#webview}

Velká část dnešních zhlédnutí webů na mobilech se neodehrává vědomým spuštěním prohlížeče, ale otevřením stránky kliknutím na odkaz uvnitř aplikací. Ve Facebooku, Twitteru nebo třeba e-mailové apce. Dříve jsem o tom podrobně psal na Vzhůru dolů. [vrdl.cz/b/19-prohlizec-facebook](https://www.vzhurudolu.cz/blog/19-prohlizec-facebook)

<!-- AdSnippet -->

Jakým prohlížečem se pak stránka vykreslí? Vývojáři nativních mobilních aplikací jej znají jako „WebView“ komponentu. Ta obvykle startuje jádro výchozího prohlížeče pro konkrétní operační systém. Na iOS je to vždy mobilní Safari, na dnešních Androidech obvykle Chrome.

I v těchto kontextech doporučuji weby testovat. Prohlížeče tam mívají trochu jiné uspořádání ovládacích prvků a některé funkce neumí.

### Vymírající nebo slabě zastoupené prohlížeče {#vymirajici}

Weby je možné a slušné vyrobit tak, aby se zásadně nerozsypaly ani v méně obvyklých browserech. Rozhodně ale nedoporučuji trvat na plnohodnotném zobrazení v nich. [Náhradních řešení](fallback.md) se pro ně dá vymyslet celá řada.

- *Android Browser*  
  Starší prohlížeč postavený na jádře Webkit. Modrá zeměkoule s nápisem Internet. Týká se Androidů ve verzích 4.x. Často jej upravovali výrobci zařízení, takže ho můžete znát třeba i pod jinými názvy. V téhle rodině prohlížečů je pěkný galimatyáš. Už se doufám ale nevyvíjí. [slides.com/html5test/the-android-browser](https://slides.com/html5test/the-android-browser)  
  <small>HTML5test.com: 356/555 (verze 30)</small>
- *[IE 8](https://en.wikipedia.org/wiki/Internet_Explorer_8)*  
  Už je naštěstí pryč. Občas je možné jej vidět na Windows XP. Brzy snad už jen v muzeu.  
  <small>HTML5test.com: 33/555</small>  
- *[IE 9](https://en.wikipedia.org/wiki/Internet_Explorer_9)*  
  IE9 běží na systémech, kde lze obvykle aktualizovat na novější verzi. Dnes už se skoro nevyskytuje.  
  <small>HTML5test.com: 113/555</small>
- *[IE 10](https://en.wikipedia.org/wiki/Internet_Explorer_10)*  
  Také IE10 běží na systémech, kde lze obvykle aktualizovat na novější verzi. Opět je jeho výskyt spíše vzácností.  
  <small>HTML5test.com: 265/555</small>
- *[Internet Explorery Mobile](https://en.wikipedia.org/wiki/Internet_Explorer_Mobile)*  
  Výchozí prohlížeče na Windows Phone verzí 7 a 8. S koncem platformy postupně mizí.  
  <small>HTML5test.com: 310/555 (verze 11 na Windows Phone 8.1)</small>  
- *[Edge Mobile](https://jecas.cz/edge-mobile)*  
  Výchozí prohlížeč na mobilních Windows 10. S koncem platformy postupně mizí.  
  <small>HTML5test.com: 444/555 (Windows Phone 10) </small>
- *[Opera Mobile](https://www.opera.com/cs/mobile)*  
  Běžná mobilní Opera s jádrem Blink. Podíl je hodně pod jedno procento.  
  <small>HTML5test.com: 481/555 (verze 37)</small>  
- *[Opera Mini](https://www.opera.com/cs/mobile/mini)*  
  Proxy prohlížeč bez vlastního renderovacího jádra co dokáže šetřit datový objem, ale weby renderuje ošklivě. Dříve populární, dnes už v ČR prakticky mrtvý.

## Prohlížeče s menším než pětiprocentním podílem tvoří asi čtvrtinu trhu {#5-procent}

Jak už jsem na Vzhůru dolů psal, pětiprocentní nebo jiná hranice pro podporu prohlížečů, kterou webaři dříve používali, je velmi zrádná.

Prohlížeče pod touto hranicí teď tvoří minimálně 25 % návštěv. Čtěte „pohádku o pěti procentech“. [vrdl.cz/b/20-pet-procent](https://www.vzhurudolu.cz/blog/20-pet-procent)

Podporujte prostě různé prohlížeče různým způsobem a vynakládejte na to energii, které odpovídá byznys hodnotě jejich uživatelů s výhledem do budoucna.

## Renderovací jádra: vede samozřejmě Blink (Chromium) {#jadra}

Velkou většinu zhlédnutí stránek obstarávají prohlížeče založené na jádru *Blink (Chromium)*  (Chrome, Opera, Seznam).

Některé menší prohlížeče mají vlastní jádro – *Gecko* pro Firefox, *WebKit* pro Safari, *EdgeHTML* pro Edge a *Trident* pro odcházející Internet Explorer.

Pro zájemce je více informací [na Wikipedii](https://en.wikipedia.org/wiki/Browser_engine).

## Závěrečná doporučení pro webaře {#doporuceni}

- Zde uvedená obecná čísla berte s rezervou. Sledujte hlavně vlastní [Google Analytics](google-analytics-vyvojari.md).
- Nebojte se nových technologií. [Flexbox](css-flexbox.md) má prakticky plnou podporu, [CSS grid](css-grid.md) podporují všechny prohlížeče kromě IE 11, ten jen částečně. Obojí vám ušetří práci a nabídne nové možnosti. Fallbacky ve starých prohlížečích rozhodně nedělejte plnohodnotné se zobrazením v moderních prohlížečích. Obvykle se vám to nevyplatí.
- Nepodceňujte menší prohlížeče. Obstarávají minimálně čtvrtinu zhlédnutí stránek. Naučte se testovat tak, abyste s tím neměli moc práce. Doporučím zase svůj článek. [vrdl.cz/p/jak-testovat-responzivni-weby](https://www.vzhurudolu.cz/prirucka/jak-testovat-responzivni-weby)

…a raději doslovně pro méně zkušené: Pokud by vás snad napadlo, že web se prohlíží hlavně na Chrome a pak trochu Firefoxu, ošklivě se klamete. Testujte ve všech relevantních prohlížečích, prosím. Díky za pozornost!

<!-- AdSnippet -->
