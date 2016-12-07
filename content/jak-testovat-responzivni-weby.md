# Testování responzivních webů

Jak si poradit s dnešní škálou prohlížečů a zařízení? A jak s nepřítomností pořádných vývojářských nástrojů na mobilech? Svatý grál neznám, ale pár tipů ze své praxe bych měl.

Mé testování je čtyřfázové:

1. Prototypování 
2. Vývojářský desktopový prohlížeč
3. Alternativní prohlížeče v BrowserStacku 
4. Reálná zařízení

## Prototypování

Ještě než začnu něco pořádně kódovat, procházím nultou kodérskou fází. Prototypování pomocí [Codepenu](http://codepen.io/machal). 

Codepen je pro mě pískoviště, kde experimentuji s problémy, které mohou být technicky složitější nebo náročné na odhad časové náročnosti.  V Codepenu je to za chvilku hotové a výsledek můžu rychle otestovat ve všech možných [prohlížečích](prohlizece.md). 

## Chrome DevTools: vývojářský desktopový prohlížeč

V téhle fázi trávím samozřejmě nejvíce času. Kvůli DevTools používám Chrome. 

Občas se podívám do ostatních desktopů – Firefoxu, Explorerů a Edge. Méně často do Opery nebo Safari, které – alespoň u mých webů – zobrazují velice podobně jako Chrome.

Protože se ale bavíme hlavně o mobilních zařízeních, v Chrome mám puštěný [Device Mode](http://www.vzhurudolu.cz/blog/41-devtools-tipy#emulace-zarizeni-s-device-mode). Neznám lepší nástroj na emulaci všeho možného mobilního a díky tomu v Chrome trávím během procesu návrhu i kódování webu nejvíce času. 

Já vím, že něco *podobného* existuje ve Firefoxu (Responsive Design View - `Ctrl/Cmd+Alt+M`), nebo v Safari a dokonce v Edge (`F12` / Záložka „Emulation“). Alternativy jsou ale děsně slabé. Zmiňuji je hlavně proto, abyste si nemysleli, že jsem zamilovaný do Google. Při testování v Chrome si navíc poladíte nejpopulárnější desktopový i mobilní prohlížeč. Ano, Firefox i Edge mají mobilní bráchy, na které bychom neměli zapomínat, ale jejich podíl na trhu je bohužel minimální.

V Chrome se dívám hlavně na vizuální část responzivního webu. Obvykle oknem prohlížeče šoupu dokud se mě to alespoň trochu nelíbí ve *všech*  rozlišeních. 

V další fázi potřebuji testovat v reálnějším prostředí. Ano, jde o jiná vykreslovací nebo javascriptová jádra. Pomůže BrowserStack nebo simulátory.

## BrowserStack: alternativní prohlížeče

BrowserStack je parádní nástroj, ušetřil mi hrozně moc času. Rovnou upozorním, že za [Live verzi, kterou používám](https://www.browserstack.com/accounts/subscriptions), zaplatíte kolem pěti set korun na osobu měsíčně. Tak, a to bychom měli výčet nevýhod.

Bezplatná alternativa existuje, ale fakt moc bolí. Simulátory a emulátory nejsou multiplatformní a žerou děsně moc času při instlalaci, správě i spouštění. Však si to přečtěte v další části textu.

BrowserStack naproti tomu:

- běží v prohlížeči a je naprosto multiplatformní,
- nabízí daleko svižnější čas startu i přepínání mezi prohlížeči,
- nevyžaduje vaši pozornost při instalaci a aktualizaci,
- umožňuje testování webu v lokálním prostředí (užasné v kombinaci s [Browsersync](browsersync.md)),
- kromě emulátorů nabízí také testování na reálných zařízeních,
- ke všem prohlížečům jsou k dispozici rozumné vývojářské nástroje,

…takže už možná chápete, proč ta pětistovka měsíčně nemusí vůbec bolet.

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=VN8CFG-YajE">BrowserStack</a> ~ Jak testovat web ve všech prohlížečích a nemuset řešit virtuály a emulátory.
</p>

Když byste chtěli levnější alternativu, mrkněte se na [CrossBrowserTesting.com](https://crossbrowsertesting.com). Jsou tam jen emulátory a je to pomalejší. Stojí to  přibližně sedm stovek, ale *sakumprdum* i s generováním screenshotů a spouštěním Selenium testů, které jsou u BrowserStacku za další peníze.

Následující část čtěte jen pokud chcete moc šetřit a máte vysokou odolnost proti bolesti. V opačném případě přejděte k testování na reálných zařízeních.

## Simulátory a emulátory (levná alternativa k BrowserStack, kterou nedoporučuji)

Mobilní Chrome jakžtakž odpovídá tomu desktopovému, takže potřebujete otestovat hlavně Android Browser a pak mobilní Safari. Občas také mobilní Operu, Firefox nebo Explorer. Mrkněte do statistik, jak si u vás tyhle prohlížeče stojí. 

- **Mobilní Safari:** [Simulatorem](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/iOS_Simulator_Guide/Introduction/Introduction.html) je možné na Macu testovat iOS (nebo také watchOS a tvOS, ale tam není žádný prohlížeč), takže mobilní Safari. Nicméně pokud jste na Windowsech nebo Linuxu, emulaci mobilního Safari nespustíte.
- **Android Browser:** [Android Emulatorem](https://developer.android.com/studio/run/emulator.html) jste si dříve mohli pustit verzi Androidu s aktuálním Android Browserem. Vůbec si nejsem jistý, jestli to pořád jde. Dřív byl Android Emulator děsně pomalý a teď koukám, že je navíc docela věda ho nainstalovat.
- **Mobilní Explorer:** Spustíte [v emulátoru od Microsoftu](https://msdn.microsoft.com/en-us/library/windows/apps/ff402563%28v=vs.105%29.aspx). Samozřejmě jen na Windows.
- **Mobilní Opery:** Emulator aktuální verze mobilní Opery neexistuje, ale má jádro velice podobné Chrome. Je ale dobré web vidět [v Opeře Mini](https://dev.opera.com/articles/installing-opera-mini-on-your-computer/), kterou lze nainstalovat na desktop.
- **Mobilní Firefox:** Jakžtakž je asi možné emulovat [v tom desktopovém](http://stackoverflow.com/questions/16651911/how-can-i-simulate-mobile-devices-and-debug-in-firefox-browser).

### Pozor, simulátory ani BrowserStack vám nestačí! 

Proč?

* Web si musíte osahat vlastním palcem. Klikání myší v simulátoru tohle nenahradí.
* Simulátory nenasimulují problémy s výkonností.
* Občas se stane, že v reálném zařízení se věci vykreslují jinak než v simulátoru.

Pokud to myslíte s responzivními weby vážně, určitě k ruce potřebujete ještě nějaká reálná zařízení.

## Testování na fyzických zařízeních

### Jaká zařízení si pro testování pořídit?

Nejlépe všechna! Že vám to rozpočet nedovolí? Mě taky ne, takže do začátku vás může inspirovat seznam zařízení, na kterých testuji svou práci. Budu je řadit podle toho jak důležitá mě připadají pro testování dnešních webů.

Telefony:

* iPhone 6 Plus s iOS 9 jako zástupce moderních phabletů. 
* Samsung Galaxy S III Mini s Androidem 4, Chrome a Android Browserem. Průměrný starší Android.
* Nokia Lumia 520 pro testování Exploreru na Windows Phone 8.1. Levný Windows Phone.
* iPhone 4 s iOS 7 jako zástupce starých a pomalu vykreslujících iKřápů.
* Vodafone 945 se starým Androidem 2.1 a rozlišením 240x400 pixelů. Ano, i vaše weby občas testuju na nejhorší smartphone jaký si umíte představit. 

Tablety:

* iPad Mini s iOS 8. Fyzicky nejmenší tablet z těch, které jde reálně použít. Velmi prodávaný. Určitě doporučuji pořídit, hlavně kvůli otestování dostatečné velikosti aktivních prvků v uživatelském rozhraní. Rozlišení 1024×768 na sedmi palcích. Garantuji, že se váš grafik zapotí.
* Tablet Lenovo TAB 2. Klasický desetipalec s Androidem 5. 
* Sencor Element 7 s Androidem 4.1, nechutně pomalým prohlížečem a rozlišením 480x800 pixelů. 

A nezapomeňte na *guerilla* testování — takové prodejny Alzy nebo Datartu bývají plné zařízení, na kterých si můžete leccos vyzkoušet. Z pohledu designéra je zajímavé každé nové zařízení, takže když byste se kolem mě s nějakým takovým vyskytli, pravděpodobně vám ho na chvíli ukradnu a budu na něm své weby testovat.

### Browsersync a multiplatformní vývojářské nástroje

[Browsersync](browsersync.md) je obecně velmi přínosný nástroj pro testování responzivních webů. Teď nás ale zajímá hlavně jeho schopnost poskytnout *něco jako DevTools*, ovšem multiplatformně. Obsahuje nástroj jménem Weinre, se kterým je [ladění webů na mobilech](browsersync.md#ladění-webu-na-mobilních-zařízeních) velmi příjemné. 

![Browsersync v kombinaci s BrowserStack](dist/images/original/browsersync-browserstack.jpg)

Browsersync a Weinre umožňují kombinovat platformy. Takže třeba Firefox na Macu propojit s Explorerem na Windows Phone. 

Jeho nevýhodou je, že Weinre jsou jen *něco* jako DevTools. Plnohodnotým vývojářským nástrojům dnešních prohlížečů konkurovat nemohou. Občas se jsou potřeba právě ty. Pak nezbývá než se smířit s tím, že to nepůjde multiplatformně a propojit mobilní prohlížeč s jeho desktopovým bratrem.

### Propojení bratrských prohlížečů

- **Mobilní Chrome** s jeho desktopovým sourozencem propojíte od Androidu verze 4. Mobilní zařízení stačí propojit USB kabelem a pak ještě nastavit pár věcí [podle tohoto návodu](https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/remote-debugging).
- **Mobilní Safari** s desktopovým Safari propojíte samozřejmě jen na Macu. Musíte si také nainstalovat [Xcode](https://developer.apple.com/xcode/), což obecně doporučuji pokud na Macu děláte jakoukoliv vývojařinu. Po propojení zařízení kabelem se pak podívejte do nové položky v menu Safari – Developer. V druhé sekci jsou připojená zařízení. Tady je [podrobnější návod](https://blog.idrsolutions.com/2015/02/remote-debugging-ios-safari-on-os-x-windows-and-linux/).
- **Mobilní Explorer/Edge** je možné pomocí Visual Studio nějak propojit s desktopovým Edge. I tady případné zájemce [pošlu na návod](https://blogs.msdn.microsoft.com/visualstudioalm/2014/04/04/diagnosing-mobile-website-issues-on-windows-phone-8-1-with-visual-studio/).

To bychom měli. V textu jsem ukázal hodně možností, ale z pohledu efektivity práce vám doporučím vyzkoušet můj postup. Ještě jednou zopakujme podstatné.

1. V celém procesu mi pomáhá [Browsersync](browsersync.md).
2. Prototypuji pomocí Codepen.io. 
3. Běžné ladění responzivních webů dělám v Chrome DevTools Device Toolbar.
4. Pro ladění ve zobrazovacíh jádrech jiných prohlížečů používám BrowserStack.
5. Případné problémy v reálných zařízeních řeším obvykle pomocí Weinre, což je také součást Browsersync.
