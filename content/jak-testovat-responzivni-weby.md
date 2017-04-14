# Testování a ladění webů na zařízeních

Jak si poradit s dnešní škálou prohlížečů a zařízení? A jak s nepřítomností pořádných vývojářských nástrojů na mobilech? Svatý grál neznám, ale pár tipů ze své praxe bych měl.

Mé testování je čtyřfázové:

1. Prototypování 
2. Vývojářský desktopový prohlížeč
3. Alternativní prohlížeče pomocí nástroje BrowserStack 
4. Reálná zařízení

## Prototypování

Ještě než začnu něco pořádně kódovat, procházím touto nultou, prototypovací fází. 

<div class="ebook-only" markdown="1">
  O prototypování jsem už psal [ve zvláštní kapitole](html-prototypovani.md), takže jen velmi stručně o tom, jak používám službu Codepen.
</div>

Codepen je pro mě pískoviště, kde experimentuji s problémy, které mohou být technicky složitější nebo náročné na odhad časové náročnosti. V Codepenu je to za chvilku hotové a výsledek můžu rychle otestovat ve všech možných prohlížečích. 

## Chrome DevTools: vývojářský desktopový prohlížeč

V téhle fázi trávím samozřejmě nejvíce času. Kvůli DevTools používám Chrome. 

Občas se podívám do ostatních desktopů: Firefoxu, Explorerů a Edge. Méně často do Opery nebo Safari, které – alespoň u mých webů – zobrazují velice podobně jako Chrome.

Protože se ale bavíme hlavně o mobilních zařízeních, v Chrome mám puštěný Device Mode. Neznám lepší nástroj na emulaci všeho možného mobilního a díky tomu v Chrome trávím během procesu návrhu i kódování webu nejvíce času. Psal jsem o něm na blogu. [vrdl.in/ms0nh](http://www.vzhurudolu.cz/blog/41-devtools-tipy#emulace-zarizeni-s-device-mode)

Já vím, že něco *podobného* existuje ve Firefoxu (Responsive Design View - `Ctrl/Cmd+Alt+M`), nebo v Safari a dokonce v Edge (`F12` / Záložka „Emulation“). Alternativy jsou ale dle mých zkušenosti slabší. Při testování v Chrome si navíc odladíte nejpopulárnější desktopový i mobilní prohlížeč. Ano, Firefox i Edge mají mobilní bráchy, na které bychom neměli zapomínat, ale jejich podíl je malý na to, abyste z nich mohli udělat primární zařízení pro jednodušší testování mobilů.

V Chrome obvykle oknem prohlížeče hýbu a upravuji kód dokud se mě design  alespoň trochu nelíbí ve *všech*  rozlišeních. 

V další fázi potřebuji testovat v reálnějším prostředí. Ano, jde o jiná vykreslovací nebo javascriptová jádra. Pomůže BrowserStack nebo simulátory.

## BrowserStack: alternativní prohlížeče

BrowserStack je výborný nástroj, ušetřil mi hrozně moc času. Rovnou upozorním, že za Live verzi, kterou používám, zaplatíte kolem pěti set korun na osobu měsíčně. Tak, a to bychom měli výčet nevýhod.

Bezplatná alternativa existuje, ale je složitější. Simulátory a emulátory nejsou multiplatformní a zaberou moc času při instalaci, správě i spouštění.

BrowserStack naproti tomu:

- běží v prohlížeči a je naprosto multiplatformní,
- nabízí svižnější čas startu i přepínání mezi prohlížeči,
- nevyžaduje vaši pozornost při instalaci a aktualizaci, 
- poskytuje možnost testování na reálných zařízeních

…takže už možná chápete, proč ta pětistovka měsíčně nemusí vůbec bolet. [browserstack.com](https://www.browserstack.com/)

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=VN8CFG-YajE">BrowserStack</a> ~ Jak testovat web ve všech prohlížečích a nemuset řešit virtuály a emulátory.
</p>

Když byste chtěli levnější alternativu, mrkněte se na [CrossBrowserTesting.com](https://crossbrowsertesting.com). Jsou tam jen emulátory a je to pomalejší. Stojí to  přibližně sedm stovek, ale i s generováním screenshotů a spouštěním Selenium testů, které jsou u BrowserStacku za další peníze.

Následující část čtěte jen pokud chcete moc šetřit a máte vysokou odolnost proti bolesti. V opačném případě přejděte k testování na reálných zařízeních.

## Simulátory a emulátory (levná alternativa k BrowserStack, kterou nedoporučuji)

Mobilní Chrome jakžtakž odpovídá tomu desktopovému, takže potřebujete otestovat hlavně Android Browser a pak mobilní Safari. Občas také mobilní Operu, Firefox nebo Explorer. Mrkněte do statistik, jak si u vás tyhle prohlížeče stojí. 

- **Mobilní Safari:** Simulátorem je možné na Macu testovat iOS (nebo také watchOS a tvOS, ale tam není žádný prohlížeč), takže mobilní Safari. Nicméně pokud jste na Windowsech nebo Linuxu, emulaci mobilního Safari nespustíte. [vrdl.in/sgo6c](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/iOS_Simulator_Guide/Introduction/Introduction.html)
- **Android Browser:** Android emulátorem jste si dříve mohli pustit verzi Androidu s aktuálním Android Browserem. Dřív byl Android Emulator pomalý a teď je navíc docela věda ho nainstalovat. [vrdl.in/1m26i](https://developer.android.com/studio/run/emulator.html)
- **Mobilní Explorer:** Spustíte v emulátoru od Microsoftu. Samozřejmě jen na Windows. [vrdl.in/s72hb](https://msdn.microsoft.com/en-us/library/windows/apps/ff402563%28v=vs.105%29.aspx)
- **Mobilní Opery:** Emulator aktuální verze mobilní Opery neexistuje, ale má jádro velice podobné Chrome. Je ale dobré web vidět v Opeře Mini, kterou lze nainstalovat na desktop. [vrdl.in/xba60](https://dev.opera.com/articles/installing-opera-mini-on-your-computer/)

## Testování na fyzických zařízeních

Pozor, simulátory ani BrowserStack vám nestačí! Proč?

* Web si musíte osahat vlastním palcem. Klikání myší v simulátoru tohle nenahradí.
* Simulátory nenasimulují problémy s výkonností.
* Občas se stane, že v reálném zařízení se věci vykreslují jinak než v simulátoru.

Pokud to myslíte s responzivními weby vážně, určitě k ruce potřebujete ještě nějaká reálná zařízení.

Jaká zařízení si pro testování pořídit? Nejlépe všechna! Že vám to rozpočet nedovolí? Mě taky ne, takže do začátku vás může inspirovat seznam zařízení, na kterých testuji svou práci. Budu je řadit podle toho, jak důležitá mě připadají pro testování dnešních webů.

Telefony:

* iPhone 6 Plus s iOS 10 jako zástupce moderních phabletů. 
* Samsung Galaxy S III Mini s Androidem 4, Chrome a Android Browserem. Podprůměrný starší Android.
* Nokia Lumia 520 pro testování Exploreru na Windows Phone 8.1. Levný Windows Phone.
* iPhone 4 s iOS 7 jako zástupce starých a pomalu vykreslujících iOS zařízení.
* Vodafone 945 se starým Androidem 2.1 a rozlišením 240x400 pixelů. Ano, i na vaše weby se možná občas dívám přes jeden z nejhorších mobilů jaký si umíte představit. 

Tablety:

* iPad Mini s iOS 8. Jeden z menších tabletů, přitom plnohodnotně použitelný (a u nás doma používaný). Také velmi prodávaný. Určitě doporučuji pořídit, hlavně kvůli otestování dostatečné velikosti aktivních prvků v uživatelském rozhraní. Rozlišení 1024 × 768 na sedmi palcích: garantuji, že se váš grafik zapotí.
* Tablet Lenovo TAB 2. Klasický desetipalec s Androidem 5. 
* Sencor Element 7 s Androidem 4.1, nechutně pomalým prohlížečem a rozlišením 480x800 pixelů. A také displejem prasklým od našeho mladšího chlapečka. To je prosím simulace těžkých podmínek pro prohlížení webu.

A nezapomeňte na *guerilla* testování — takové prodejny Alzy nebo Datartu bývají plné zařízení, na kterých si můžete leccos vyzkoušet. Z pohledu designéra je zajímavé každé nové zařízení, takže když byste se kolem mě s nějakým takovým vyskytli, pravděpodobně vám ho na chvíli ukradnu a budu na něm své weby testovat.

### Browsersync a multiplatformní vývojářské nástroje

Browsersync je obecně velmi přínosný nástroj pro testování responzivních webů. Teď nás ale zajímá hlavně jeho schopnost poskytnout *něco jako DevTools*, ovšem multiplatformně. Obsahuje nástroj jménem Weinre, se kterým je ladění webů na mobilech velmi příjemné. [vrdl.cz/prirucka/browsersync](http://www.vzhurudolu.cz/prirucka/browsersync)

![Browsersync v kombinaci s BrowserStack](dist/images/original/browsersync-browserstack.jpg)

Browsersync a Weinre umožňuje kombinovat platformy. Takže třeba Firefox na Macu propojit s Explorerem na Windows Phone. 

Weinre jsou ale jen *něco* jako DevTools. Plnohodnotým vývojářským nástrojům dnešních prohlížečů konkurovat nemohou. 


### Propojení bratrských prohlížečů

- **Mobilní Chrome** s jeho desktopovým sourozencem propojíte od Androidu verze 4. Mobilní zařízení stačí propojit USB kabelem a pak ještě nastavit pár věcí podle následujícího návodu. [vrdl.in/7ztbj](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/)
- **Mobilní Safari** s desktopovým Safari propojíte samozřejmě jen na Macu. Musíte si také nainstalovat Xcode, což obecně doporučuji pokud na Macu děláte jakoukoliv vývojařinu. Po propojení zařízení kabelem se pak podívejte do nové položky v menu prohlížeče Safari, která se bude jmenovat „Developer“. V druhé sekci jsou připojená zařízení. Následuje podrobnější návod. [http://vrdl.in/u60bs](https://blog.idrsolutions.com/2015/02/remote-debugging-ios-safari-on-os-x-windows-and-linux/)
- **Mobilní Explorer/Edge** je možné pomocí Visual Studio nějak propojit s desktopovým Edge. I tady případné zájemce pošlu na návod.[vrdl.in/l4uxy](https://blogs.msdn.microsoft.com/visualstudioalm/2014/04/04/diagnosing-mobile-website-issues-on-windows-phone-8-1-with-visual-studio/).

To bychom měli. Bylo toho hodě, takže ještě jednou zopakuji to podstatné.

1. Věci, které se mohou pokazit, raději předem prototypuji. Nejčastěji pomocí Codepen.io. 
2. Běžné ladění responzivních webů dělám v Chrome DevTools a jeho Device Mode.
3. Pro kontrolu ve zobrazovacích jádrech jiných prohlížečů používám BrowserStack.
4. Nakonec používám reálná zažízení. Případné problémy řeším pomocí propojení s desktopovým prohlížečem nebo nástroji Weinre a Browsersync.
