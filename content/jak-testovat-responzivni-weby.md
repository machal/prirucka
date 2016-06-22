# Testování responzivních webů

Mé testování je třífázové:

1. Prototypování 
2. Vývojářský desktopový prohlížeč
3. Simulátory a emulátory
4. Reálná zařízení


## Prototypování

Ještě než začnu něco pořádně kódovat, procházím nultou kodérskou fází. Prototypování pomocí [Codepenu](http://codepen.io/machal). 

Codepen je pro mě pískoviště kde si zkouším věci, které mohou být technicky složitější. Potenciální průšvihy nebo úkoly, u kterých se špatně odhaduje časová náročnost. Týká se to jak návrhu řešení rozhraní, tak i vyloženě kodérských oříšků. 

V Codepenu je to za chvilku hotové, výsledek můžu rychle otestovat ve všech možných prohlížečích a zařízeních. A nemusím to složitě vystavovat někam.

## Vývojářský desktopový prohlížeč

V téhle fázi trávím samozřejmě nejvíce času. Kvůli DevTools používám Chrome. 

Občas se podívám do ostatních desktopů – Firefoxu, Explorerů a Edge. Méně často do Opery nebo Safari, ty moje weby zobrazují velice podobně jako Chrome.

Protože se ale bavíme hlavně o mobilních zařízeních, v Chrome mám puštěný [Device Mode](http://www.vzhurudolu.cz/blog/41-devtools-tipy#emulace-zarizeni-s-device-mode). 

Neznám lepší nástroj na emulaci všeho možného na mobilních zařízeních a díky tomu v Chrome trávím během procesu návrhu i kódování webu nejvíce času. Já vím, že něco *podobného* existuje ve Firefoxu (Responsive Design View - `Ctrl/Cmd+Alt+M`) a dokonce v Edge (`F12` / Záložka „Emulation“), ale je to děsně slabý. Dávám to sem hlavně proto, abyste si nemysleli, že moc nadržuji Googlu. Při testování v Chrome si navíc poladíte nejpopulárnější desktopový i mobilní prohlížeč. Na mobilní Firefox a Edge bychom neměli zapomínat, ale jejich podíl na trhu je bohužel fakt minimální.

Jo a pozor – netestuji jen nejčastější rozlišení, [na breakpointy nevěřím](http://kratce.vzhurudolu.cz/post/46416507703/jake-breakpointy-zvolit-v-responzivnim-webdesignu). Obvykle oknem prohlížeče šoupu dokud se mě to alespoň trochu nelíbí ve *všech*  rozlišeních. 

V další fázi ale potřebujeme kvůli testovat v reálnějším prostředí než je desktopový Chrome. Ano, jde o jiná vykreslovací nebo javascriptová jádra. Pomůže Browserstack nebo simulátory.

## Browserstack

Browserstack je parádní nástroj, ušetřil mi hrozně moc času. Rovnou upozorním, že za [Live verzi, kterou používám](https://www.browserstack.com/accounts/subscriptions), zaplatíte kolem pěti set korun na osobu měsíčně. Tak, a to bychom měli výčet nevýhod.

Bezplatná alternativa existuje, ale fakt moc bolí. Simulátory a emulátory nejsou multiplatformní a žerou děsně moc času při instlalaci, správě i spouštění. Však si to přečtěte v další části textu.

Browserstack naproti tomu:

- běží v prohlížeči a je naprosto multiplatformní,
- nabízí daleko svižnější čas startu i přepínání mezi prohlížeči,
- nevyžaduje vaši pozornost při instalaci a aktualizaci,
- umožňuje testování webu v lokálním prostředí (užasné v kombinaci s [Browsersync](browsersync.md)),
- kromě emulátorů nabízí také testování na reálnýh zařízení,
- ke všem prohlížečům jsou k dispozici rozumné vývojářské nástroje,

…takže už možná chápete, proč nakonec pětistovka měsíčně nemusí vůbec bolet.

Když byste chtěli levnější alternativu, mrkněte se na [CrossBrowserTesting.com](https://crossbrowsertesting.com). Jsou tam jen emulátory a je to pomalejší, ale zase sakumprdum za přibližně 700 Kč, ale včetně generování screenshotů a spouštění Selenium testů, které jsou u Browserstacku za další peníze.

Následující část čtěte jen pokud chcete moc šetřit a máte vysokou odolnost proti bolesti. V opačném případě skočte rovnou na testování na reálných zařízeních.

## Simulátory a emulátory (nedoporučuji)

Mobilní Chrome jakžtakž odpovídá tomu desktopovému, takže potřebujete otestovat hlavně Android Browser a pak mobilní Safari. Občas také mobilní Operu, Firefox nebo Explorer. Mrkněte do statistik, jak si u vás tyhle prohlížeče stojí. 

- **Mobilní Safari:** [Simulatorem](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/iOS_Simulator_Guide/Introduction/Introduction.html) je možné na Macu testovat iOS (nebo také watchOS a tvOS, ale tam není žádný prohlížeč), takže mobilní Safari. Nicméně pokud jste na Windowsech nebo Linuxu, s emulací mobilního Safari si neškrtnete.
- **Android Browser:** [Android Emulatorem](https://developer.android.com/studio/run/emulator.html) jste si dříve mohli pustit verzi Androidu s aktuálním Android Browserem. Vůbec si nejsem jistý, jestli to pořád jde. Dřív byl Android Emulator děsně pomalý a teď koukám, že je navíc docela věda ho nainstalovat.
- **Mobilní Opery:** Emulator aktuální verze mobilní Opery neexistuje, ale má jádro velice podobně Chrome. Je ale dobré web vidět [v Opeře Mini](https://dev.opera.com/articles/installing-opera-mini-on-your-computer/), kterou lze nainstalovat na desktop.
- **Mobilní Firefox:** Jakžtakž je asi možné emulovat [v tom desktopovém](http://stackoverflow.com/questions/16651911/how-can-i-simulate-mobile-devices-and-debug-in-firefox-browser).


## Pozor, simulátory ani Browserstack vám nestačí! 

Proč?

* Web si musíte osahat vlastním palcem. Klikání myší v simulátoru tohle nenahradí.
* Simulátory nenasimulují problémy s výkonností.
* Občas se stane, že v reálném zařízení se věci vykreslují jinak než v simulátoru.

Tedy pokud to myslíte s responzivními weby vážně, určitě k ruce potřebujete ještě nějaká reálná zařízení.

## Reálná zařízení

Jaká koupit? Nejlépe všechna!

Že vám to rozpočet nedovolí? Mě taky ne, takže pro začátek **nakupte to co má ve vaší cílovce silné zastoupení.** Určitě napoví Google Analytics.

Pro inspiraci – seznam zařízení, na kterých testuji svou práci. Budu je řadit podle toho jak důležitá mě připadají pro testování dnešních webů.

Telefony:

* iPhone 6 Plus s iOS9 jako zástupce supermoderních phabletů. 
* Samsung Galaxy S III Mini s Androidem 4, Chrome a Android Browserem.
* Nokia Lumia 520 pro testování Exploreru na Windows Phone 8.1.
* iPhone 4 s iOS7 jako zástupce pomalu vykreslujícího iKřápu.
* Vodafone 945 se starým Androidem 2.1 a rozlišením 240x400 pixelů. Ano, vaše weby občas testuju na nejhorší smartphone jaký si umíte představit. ;)


Tablety:

* iPad Mini s iOS8. Fyzicky nejmenší tablet z těch, které jde reálně použít na nějakou jednodušší práci. Velmi prodávaný. Určitě doporučuji, hlavně kvůli otestování dostatečné velikosti. Rozlišení 1024×768 na sedmi palcích.
* Tablet Lenovo TAB 2. Klasický desetipalec s Androidem 5. 
* Sencor Element 7 s Androidem 4.1, nechutně pomalým prohlížečem a rozlišením 480x800 pixelů. 

A nezapomeňte na guerilla testing — takový DatArt bývá plný zařízení, na kterých si můžete leccos vyzkoušet.
