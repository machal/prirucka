Jak testovat responzivní weby
=============================

Univerzální návod vám nedám. Vaše projekty a cílová skupina mohou být trošku jinde než moje. Pokud se ale spokojíte s popisem toho jak pracuji já, čtěte dál. Dělám hlavně menší až střední prezentační weby a občas řeším technicky náročnější pasáže u větších webů.

Mé testování je třífázové:

1. Vývojářský desktopový prohlížeč
2. Simulátory/emulátory
3. Reálná zařízení

Ještě předtím ale zmíním fázi 0, kterou občas využívám. To je [Codepen](http://codepen.io/machal) fáze. Codepen je pro mě pískoviště kde si zkouším věci, které mohou být technicky složitější. Potenciální průšvihy nebo úkoly, u kterých se špatně odhaduje časová náročnost. V Codepenu je to za chvilku hotové, výsledek je propojený s testovačem Browserstack a snadno se posílá na reálná zařízení, takže na výsledek si sáhnete bez složitého vystavování někam.


Fáze 1: Vývojářský desktopový prohlížeč
----------------------------------

V téhle fázi trávím samozřejmě nejvíce času. Kvůli Developer Tools používám Chrome. Pravidelně se přepínám do Firefoxu a [Browserstacku](http://www.browserstack.com/) kde mám puštěný nejhorší Explorer, který chci na projektu podporovat, což je obvykle osmička. Méně pravidelně pak do Opery, Safari a modernějších Explorerů.

Kvůli testování chování v konkrétních rozlišeních v Chrome používám [Window Resizer](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh), nesmrtelný [Mattův testovač](http://mattkersley.com/responsive/), [responsivepx.com](http://responsivepx.com/), který mi umožní testovat i rozlišení větší než má můj MacBook fyzicky. Nově zkouším ještě [„ish”](http://bradfrostweb.com/demo/ish/), hlavně jeho „Hay mód”. Netestuji jen nejčastější rozlišení, [na breakpointy nevěřím](http://kratce.vzhurudolu.cz/post/46416507703/jake-breakpointy-zvolit-v-responzivnim-webdesignu). Obvykle oknem prohlížeče šoupu dokud se mě to alespoň trochu nelíbí všude. I tohle mi ale asi časem nahradí „ish”.

Fáze 2: Simulátory/emulátory
-----------------------

Když jsem s nakódovaným elementem spokojený, jdu do simulátoru. Na Macu mám k dispozici výborný **iOS simulátor** a Opera Mobile simulátor. Používám hlavně ten první, protože iPhone i iPad jsou obvykle v podílech na návštěvnosti nepřehlédnutelní.

**Android emulátor už nepoužívám**, nahradil mi jej už zmíněný Browserstack. Ušetřil mi tak spoustu času tráveného se správou VirtualBoxu s Windows a různých Android emulátorů.

Oba simulátory jsou samozřejmě úžasné v tom, že je lze přímo propojit s odpovídajícím desktopovým prohlížečem a případné problémy ladit v pohodlném prostředí Safari Web Inspectoru nebo obdobném nástroji v Opeře. O „remote debugging” ale jindy.

**Pozor, simulátory vám nestačí.** Proč?

* Nedá se jim stoprocentně věřit.
* Web si musíte osahat vlastním palcem. Klikání v simulátoru tohle nenahradí.
* Simulátory nenasimulují problémy s výkonností.

Tedy pokud to myslíte s responzivními weby vážně, určitě k ruce potřebujete ještě nějaká reálná zařízení.

Fáze 3: Reálná zařízení
------------------

Jaká koupit? Nejlépe všechna!

Že vám to rozpočet nedovolí? Mě taky ne, takže pro začátek **nakupte to co má ve vaší cílovce silné zastoupení.** Určitě napoví Google Analytics.

### Složení pro firmu

Tohle jsem do testovací sestavy radil nakoupit jedné web-vývojářské firmě:

* Tablety:
  * Android (7") — koupil bych nějaký šrot do dvou tisíc. Hrozně se
prodávají a prohlížeče jsou nechutně pomalé.
  * Win (10") s Win8 jsou fajn.
  * iPad — pokud jen jeden, pak určitě Mini! Všechny prvky rozhraní webu jsou
na něm menší a Mini je dobrý benchmark, jestli je to navržené dobře.
* Telefony:
  * Android (3.5") — doporučuji jeden s Androidem 2.3 (mrkněte radši do
Analytics, mohou tam mít významné zastoupení) a jeden s poslením Androidem 4.x.
  * Windows Phone — prohlížeče ve verzích 7.0, 7.5, 7.8 a 8 se liší. Mrkl bych do statistik, co z toho potřebujete. Tipuji, že osmičky vyrostou.
  * iPhone — cokoliv s poslední verzí iOS. Starší je pro testování lepší,
protože pomalejší. Nejlepší bude nejlevnějším model, který oficiálně prodává Apple.

### Moje sestava

* Telefon iPhone 4 s iOS6 s Retina displejem
* Telefon Vodafone 945 se starým Androidem 2.1 a rozlišením 240x400 pixelů
* Tablet iPad Mini s iOS6
* Tablet Sencor Element 7 s Androidem 4.1, nechutně pomalým prohlížečem a rozlišením 480x800 pixelů

Stačí mě to? Na denodenní testování ano, ale u zásadnějších spuštění projektů kradu telefon ženě, kamarádům a hrozně často na pivo zvu ty co mají zařízení s Windows Phone. A nezapomeňte na guerilla testing — takový DatArt bývá plný zařízení, na kterých si můžete leccos vyzkoušet.

Testujete jinak? Pochlubte se do komentářů a nezapomeňte zmínit váš typ projektů a cílovou skupinu.
