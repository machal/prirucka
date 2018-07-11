# Testování a ladění webů na zařízeních

Jak si poradit s dnešní škálou prohlížečů a zařízení? A jak s nepřítomností pořádných vývojářských nástrojů na mobilech? Svatý grál neznám, ale pár tipů ze své praxe bych měl.

Mé testování je čtyřfázové:

1. Prototypování 
2. Vývojářský desktopový prohlížeč
3. Alternativní prohlížeče pomocí nástroje BrowserStack 
4. Reálná zařízení

## 1) Prototypování (na CodePenu)


<span class="ebook-only" markdown="1">O prototypování jsem už psal [ve zvláštní kapitole](html-prototypovani.md).</span> Ještě než začnu něco finálně implementovat, procházím touto první, prototypovací fází. Na prototypu si vyzkouším nejkritičtější designérské i kodérské problémy. Používám CodePen, kde je to za chvilku hotové a výsledek můžu rychle otestovat ve všech možných prohlížečích. Dále pak Bootstrap nebo prostě HTML, CSS a Javascript.


## 2) Vývojářský desktopový prohlížeč (s Chrome DevTools)

V téhle fázi trávím samozřejmě nejvíce času. Kvůli DevTools používám Chrome. 

Občas se podívám do ostatních desktopových prohlížečů: Firefoxu, Explorerů, Safari a Edge. Méně často do Opery, která obvykle renderuje stejně jako Chrome.

Protože se ale bavíme hlavně o mobilních zařízeních, v Chrome mám puštěný Device Mode. Neznám lepší nástroj na emulaci všeho možného mobilního a díky tomu v Chrome trávím během procesu návrhu i kódování webu nejvíce času. 

Najdete ho pod nenápadnou ikonkou mobilu nalevo od hlavního menu. Nebo pod zkratkou `Ctrl/Cmd+Shift+M`, když máte DevTools otevřené (`Ctrl/Cmd+Shift+I`).

Obsahuje přednastavené profily zařízení, emulaci pomalého mobilního internetu, emulaci uživatelského zoomování a další vychytávky.

### Alternativy v ostatních prohlížečích

Něco *podobného* existuje ve Firefoxu (Responsive Design View – `Ctrl/Cmd+Alt+M`) nebo v Safari, a dokonce v Edge (`F12` / Záložka „Emulation“). Alternativy jsou ale dle mých zkušeností slabší.

Při testování v Chrome si navíc odladíte nejpopulárnější desktopový i mobilní prohlížeč. Ano, Firefox i Edge mají mobilní bratry, na které bychom neměli zapomínat, ale jejich podíl je malý na to, abyste z nich mohli udělat primární zařízení pro jednodušší testování mobilů.

V Chrome obvykle oknem prohlížeče hýbu a upravuji kód, dokud se mně design alespoň trochu nelíbí ve *všech* rozlišeních. 

V další fázi potřebuji testovat v reálnějším prostředí. Ano, jde o jiná vykreslovací nebo javascriptová jádra. Pomůže BrowserStack nebo simulátory.

## 3) Alternativní prohlížeče (pomocí BrowserStacku)

BrowserStack je výborný nástroj, který mi ušetřil spoustu času. Rovnou upozorním, že za live verzi, kterou používám, zaplatíte kolem pěti set korun na osobu měsíčně. Tak, a tím bychom vyčerpali výčet jeho nevýhod.

Bezplatná alternativa existuje, ale je složitější. Simulátory a emulátory nejsou multiplatformní a zaberou moc času při instalaci, správě i spouštění.

BrowserStack naproti tomu:

- běží v prohlížeči a je naprosto multiplatformní,
- nabízí svižnější čas startu i přepínání mezi prohlížeči,
- nevyžaduje vaši pozornost při instalaci a aktualizaci, 
- poskytuje možnost testování na reálných zařízeních.

Takže už možná chápete, proč ta pětistovka měsíčně nemusí vůbec bolet. [browserstack.com](https://www.browserstack.com/)

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=VN8CFG-YajE">BrowserStack</a> ~ Jak testovat web ve všech prohlížečích a nemuset řešit virtuály a emulátory.
</p>

Kdybyste chtěli levnější alternativu, mrkněte se na [CrossBrowserTesting.com](https://crossbrowsertesting.com). Jsou tam jen emulátory a je to pomalejší. Stojí to přibližně sedm stovek, ale v této ceně je i generování screenshotů a spouštění Selenium testů, které jsou u BrowserStacku za další peníze.

Následující část čtěte, jen pokud hodně chcete šetřit a máte vysokou odolnost proti bolesti. V opačném případě přejděte k testování na reálných zařízeních.

### Simulátory a emulátory (levná alternativa k BrowserStacku, kterou nedoporučuji)

Mobilní Chrome jakžtakž odpovídá tomu desktopovému, takže potřebujete otestovat hlavně mobilní Safari.

Simulátorem je možné na Macu testovat iOS (nebo také watchOS a tvOS), ale také mobilní Safari. [vrdl.in/sgo6c](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/iOS_Simulator_Guide/Introduction/Introduction.html)

## 4) Testování na fyzických zařízeních

Pozor, simulátory ani BrowserStack vám nestačí! Proč?

* Web si musíte osahat vlastním palcem. Klikání myší v simulátoru tohle nenahradí.
* Simulátory nenasimulují problémy s výkonností.
* Občas se stane, že v reálném zařízení se věci vykreslují jinak než v simulátoru.

Pokud to myslíte s responzivními weby vážně, určitě k ruce potřebujete ještě nějaká reálná zařízení.

Jaká zařízení si pro testování pořídit? Nejlépe všechna! Že vám to rozpočet nedovolí? Mně taky ne, takže do začátku vás může inspirovat seznam zařízení, na kterých testuji svou práci. Budu je řadit podle toho, jak důležitá mi připadají pro testování dnešních webů.

Budete potřebovat hlavně smartphony i tablety z obou nejrozšířenějších platforem (Android a iOS). Nezapomínejte prosím ani na starší zařízení. Jsou menší a méně výkonná. Uživatelská základna je velmi fragmentovaná. Nevěřte tomu, že všichni vaši uživatelé vlastní poslední „ajfoun“.

Telefony:

* iPhone 6 Plus s iOS 10 jako zástupce moderních phabletů. 
* Samsung Galaxy S III Mini s Androidem 4, Chrome a Android Browserem. Podprůměrný starý Android.
* iPhone 4 s iOS 7 jako zástupce starých a pomalu vykreslujících iOS zařízení.
* Vodafone 945 se starým Androidem 2.1 a rozlišením 240 × 400 pixelů. Ano, i na vaše weby se možná občas dívám přes jeden z nejhorších mobilů, jaké si umíte představit.

Tablety:

* iPad Mini s iOS 8. Jeden z menších tabletů, přitom plnohodnotně použitelný (a u nás doma používaný). Také velmi prodávaný. Určitě doporučuji pořídit, hlavně kvůli otestování dostatečné velikosti aktivních prvků v uživatelském rozhraní. Rozlišení 1024 × 768 na sedmi palcích: Garantuji, že se váš grafik zapotí.
* Tablet Lenovo TAB 2. Klasický desetipalec s nejnovějším Androidem. 
* Sencor Element 7 s Androidem 4.1, nechutně pomalým prohlížečem a rozlišením 480 × 800 pixelů. A také displejem prasklým od našeho mladšího chlapečka. To je prosím simulace těžkých podmínek pro prohlížení webu.

A nezapomeňte na *guerilla* testování – takové prodejny Alzy nebo Datartu bývají plné zařízení, na kterých si můžete leccos vyzkoušet. Z pohledu designéra je zajímavé každé nové zařízení, takže kdybyste se kolem mě s nějakým takovým vyskytli, pravděpodobně vám ho na chvíli ukradnu a budu na něm své weby testovat.

### Browsersync a multiplatformní „DevTools“

Browsersync je obecně velmi přínosný nástroj pro testování responzivních webů. Teď nás ale zajímá hlavně jeho schopnost poskytnout *něco jako DevTools*, ovšem multiplatformně. Obsahuje nástroj jménem Weinre, se kterým je ladění webů na mobilech velmi příjemné. [vrdl.cz/p/browsersync](https://www.vzhurudolu.cz/prirucka/browsersync)

<figure>
<img src="dist/images/original/browsersync-browserstack.jpg" alt="">
<figcaption markdown="1">    
*Browsersync v kombinaci s BrowserStack. Browsersync a Weinre umožňují kombinovat platformy. Takže třeba Firefox na Macu propojit s Explorerem na Windows Phone*
</figcaption> 
</figure>


 

Weinre jsou ale jen *něco* jako DevTools.  Plnohodnotným vývojářským nástrojům dnešních prohlížečů konkurovat nemohou.


### Propojení bratrských prohlížečů

- *Mobilní Chrome*   
S jeho desktopovým sourozencem propojíte od Androidu verze 4. Mobilní zařízení stačí propojit USB kabelem a pak ještě nastavit pár věcí podle následujícího návodu. [vrdl.in/7ztbj](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/)
- *Mobilní Safari*  
S desktopovým Safari propojíte samozřejmě jen na Macu. Musíte si také nainstalovat Xcode, což obecně doporučuji, pokud na Macu děláte jakoukoliv vývojařinu. Po propojení zařízení kabelem se pak podívejte do nové položky v menu prohlížeče Safari, která se bude jmenovat „Developer“. V druhé sekci jsou připojená zařízení. Následuje podrobnější návod.  [vrdl.in/u60bs](https://blog.idrsolutions.com/2015/02/remote-debugging-ios-safari-on-os-x-windows-and-linux/)

<div class="web-only" markdown="1">
Bylo toho hodně, takže ještě jednou zopakuji to podstatné.

1. Věci, které se mohou pokazit, raději předem prototypuji. Nejčastěji pomocí CodePen.io. 
2. Běžné ladění responzivních webů dělám v Chrome DevTools a jeho Device Mode.
3. Pro kontrolu ve zobrazovacích jádrech jiných prohlížečů používám BrowserStack.
4. Nakonec používám reálná zažízení. Případné problémy řeším pomocí propojení s desktopovým prohlížečem nebo nástroji Weinre a Browsersync.
</div>
