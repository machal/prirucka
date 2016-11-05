# Atomický design a Pattern Lab: návrat do budoucnosti návrhu uživatelských rozhraní

> We’re not designing pages, we’re designing systems of components. 
— Stephen Hay

[Pattern Lab](http://patternlab.io/) je nástroj pro návrh, testování a prezentaci atomických designových systémů. 

Používám jej na aktuálním projektu a mám takový pocit, že jinak už větší weby dělat nechci. V tomhle textu budu vysvětlovat proč.

Nejprve si ale musíme povědět něco o systémech designu. 


## Designové systémy

Myslím to, co asi znáte pod pojmy *style guide* nebo *pattern library*. Neznáte? Je to jako by jste si udělali pro větší projekt vlastní knihovnu odpovídající typu Bootstrap.

Budu se tady odkazovat na svůj aktuální projekt, přípravu atomického designu pro nový [Webmium Eshop](http://www.webmium.cz/eshopy).

![Webmium - systém atomického designu](dist/images/original/atomicky-design-webmium.jpg)

Systémy jsou super:

- usnadňují dodržování jednotnosti designu
- zmenšují a zpěhledňují kód
- podporují iterativní vývoj po malých kouscích
- usnadní testování 
- díky dokumentaci i komunikaci v týmu a zaučení nových lidí 

Designové systémy prostě šetří čas a peníze.

<p class="video" markdown="1">
Video: [Úvod do Style Guides](https://www.youtube.com/watch?v=FvTzAwebUjQ) - Martin Staněk o „style guides“, dokumentacích k systémům designu.
</p>

Style guides, systémy komponent, vlastní Bootstrapy, UI knihovny, knihovny návrhových vzorů, CSS frameworky… Ano, narážím na hlavní nevýhodu design systémů – zatím mají děsně moc názvů a variant. Ať tomu budeme říkat jakkoliv, webdesign jde z mého pohledu jasně tímhle směrem.

Jedním z nejnadějnějších myšlenkových frameworků pro tvorbu designových systémů je Atomic Design.

## Atomický design 

[Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/). Proč do atomického designu vkládám takovou naději? Stojí za ním chlapík jménem Brad Frost. Nic vám to neříká? Nevadí. Je to velká hvězda frontend designu, která má vliv a teď navíc o atomickém designu [píše knížku](http://atomicdesign.bradfrost.com/). Ano, sázet při výběru nástroje na jméno tvůrce není stoprocentně spolehlivé. Brad ale v tuhle chvíli nemá konkurenci a ta knížka to pojistí, uvidíte.

![Atomic Design](dist/images/original/atomic-design.jpg)

V atomickém designu přišel s tříděním prvků na stránce do úrovní vycházejících celkem chytře z chemické terminologie. Vezměme to i s příklady z hypotetického eshopu:

1. Atomy (například tlačítko)
2. Molekuly (např. tlačítko s inputem spojené do vyhledávacího pole)
3. Organizmy (např. hlavička stránky)
4. Šablony (např. šablona detailu produktu)
5. Stránky (např. stránka konkrétního produktu)

Zní vám to podivně? Nejste sami. Než jsem si to zkusil na konkrétním projektu, všem okolo jsem říkal, že je to zbytečně složitá hierarchie a že na projektech stačí jedna úroveň komponent. 

Než jsem si to zkusil na konkrétním projektu. 

Teď už mám vyzkoušeno a říkám, že je to kategorizace, která je pro obyčejné weby úplně dokonalá. Omlouvám se tedy všem atomům, molekulám, organizmům a své učitelce chemie na střední.

Hlavním důvodem pro zavedení designových systémů je — ušetření práce. 
Jednoúrovňová organizace komponent, obvyklá na jiných mých projektech čas šetří, ale ne tak jako když z atomů skládáte molekuly a z molekul organizmy. Kód se pak opakuje výrazně méně a začne fungovat onen efekt skládání LEGO kostek.

Pokud by vám ale atomické dělení přestalo vyhovovat, kategorizaci si můžete sami změnit. Brad Frost k tomu vyloženě vybízí a ukazuje i příklady jiných organizací. Myslím, že to ale nebudete potřebovat.

<p class="video" markdown="1">
Video: [Atomic Design v České televizi](https://www.youtube.com/watch?v=wgsHfAV-6Aw) - Zdeněk Lanc sdílí zkušenosti s předchozí verzí Pattern Labu při redesignu ČT24.</p>

Tak, a teď si pojďme povídat o nástroji pro práci na atomických systémech.

## Pattern Lab: návrh, prezentace, ale hlavně testování atomického designu

Na začátek se musím přiznat, že [Pattern Lab](http://patternlab.io/) je pro mě zdrojem největšího nepochopení a frustrace od doby co jsem se snažil ve Francii domluvit anglicky.

Pattern Lab totiž není:

- nástroj k prezentaci systému designu (jako [AtomicDocs](http://atomicdocs.io/)) 
- ani nástroj ke generování dokumentace k CSS (jako [KSS](http://warpspire.com/kss/) nebo [StyleDocco](https://jacobrask.github.io/styledocco/)). 

Je to nástroj pro *návrh*. Tedy spíše v kategorii Photoshop nebo Sketch. V obvyklých případech vás bude přidání Pattern Labu do vašeho designérského workflow stát určité úsilí. U mě to bylo snadné, protože asi víte, že jsem zblázněný do návrhu rozhraní [přímo v prohlížeči](http://www.vzhurudolu.cz/prednaska/design-webu-v-prohlizeci-149). 

Kromě návrhu ale dokáže *testovat*, ověřovat designérské hypotézy přímo v prohlížeči, v různých obsahových nebo uživatelských kontextech. To je, řekl bych, jeho hlavní silná stránka. To spíše z Francouze vytáhnete anglickou větu než ze svého Photoshopu či Sketche testovatelný prototyp. Tady je ta budoucnost, kterou zmiňuji v názvu textu.

Podobně jako výše uvedené nástroje pak sice umí systém designu *prezentovat*, tedy ukazovat lidem mimo nejužší designérský tým. Neřekl bych, že tohle je ale jeho silná stránka. Je ošklivý, sami vidíte. Nicméně má skvělou podporu pro generování jakékoliv dokumentace z materiálů co do něj nasázíte. Je to Markdown, Mustache šablony a nějaké CSS soubory.

<small markdown="1">
Užitečné odkazy k Pattern Lab:
- [Ohromný článek na Smashing Magazine](https://www.smashingmagazine.com/2016/07/building-maintaining-atomic-design-systems-pattern-lab/).
- [Demo Pattern Labu](http://demo.patternlab.io/). Zdrojáky jsou [na Githubu](https://github.com/pattern-lab/starterkit-mustache-demo).
</small>


### Testování na reálném obsahu

Nejdřív otázka pro designéry:

> Bylo dřív vejce nebo slepice? A obsah nebo design?

Asi budete souhlasit, že obsah a design spolu dost úzce souvisejí. Při práci na designu potřebujete obsah, to designéři vědí. Jenže ono je to někdy i naopak. Při testování designu potřebujete všechny varianty obsahu, včetně extrémních. To vědí zase frontend kodéři.

Pattern Lab nabízí úžasnou věc – vkládání reálného obsahu přímo do designu. Pokud už obsah někde máte, necháte si ho nalít do JSON souboru a napojíte na něj Pattern Lab. Lusknutí prstem a v prohlížeči testujete víceméně reálný web. Nebo v našem případě více webů na jednom systému designu:

![Varianty Webmium](dist/images/original/atomicky-design-webmium-eshopy.jpg)


### Pseudošablony: testování variant obsahu

Další hezká věc a přitom žádná velká věda. Pattern Lab nabízí možnost vytvořit pseudošablony, varianty šablon s různým typem obsahu, různým rozložením atd. Prostě si všechny možnosti otestujete už přímo v design systému a ne až na běžícím webu.

### Pattern Lab není nutnost, ale…

Asi byste atomický systém dokázali implementovat bez Pattern Labu. Ale moc to nedoporučuji. Můžete ho navrhnout v Photoshopu, ale bude vám chybět možnost okamžitého otestování. Můžete ho zkusit napsat přímo v kódu, ale bude vám chybět nástroj pro snadný návrh a prezentaci.

Ale ani v případě mé práce pro Webmium není Pattern Lab jediný nástroj. Grafické materiály dostávám v běžných celostránkových souborech z Photoshopu. S grafikem máme docela soulad, takže můžu prohlásit, že i takhle může atomický systém vznikat. Jen musíte vědět, že to co poskládáte z atomického designu nebude perfektně sedět s pé-es-déčky. Nicméně doufám, že v pixel-perfect návrhy už dávno nevěříte.

## Zkusíte Pattern Lab a atomický design?

Určitě ho zkuste, pokud:

- děláte vlastní produkt nebo spravujete větší web: design systém dlouhodobě využijete a větší počáteční časová investice se vám vrátí;
- jste otevření změnám v pracovních postupech: designér i kodér musí velmi intenzivně spolupracovat a vyvíjet věci v malých iteracích.

Pattern Lab se nehodí:

- do firem, kde rubete unikátní weby jako Baťa cvičky – obvykle agenturního typu;
- na malinké projekty – pokud si to nechcete vyloženě zkusit a víte, že to v budoucnu užijete;
- do týmů, ve kterých chybí zkušený designér nebo kodér – spolupráce je tam dost důležitá (lze spojit do jedné osoby [frontend designéra](http://www.vzhurudolu.cz/blog/62-frontend-pozice#frontend-designer)).

## Návrat do budoucnosti?

Tím, že jsme si do projektů zavedli vodopádový systém (grafik předává složitá celostránková PSDéčka atd.), udělali jsme si z webdesignu dost složitý obor. 

Díky nástupu mobilních zařízení se zjednodušují uživatelská rozhraní, což je skvělé, ale nestačí to. Nástup designových systémů vnímám jako další ohromně zjednodušující a pročišťující proces. Proto *návrat*. Návrat do pravěku webdesignu, kdy příprava webu nebyla tak komplexní činností.

A proč návrat *do budoucnosti*? [Na WebExpo 2015](https://webexpo.cz/praha2015/prednaska/designovani-webu-v-prohlizeci/) jsem říkal, že nám chybí nástroje pro rozumný návrh rozhraní. A že v budoucnu určitě přijdou. Pattern Lab je pro mě jedním z nich. 

Do světa bez atomického designu, Pattern Labu nebo podobných nástrojů se už vracet nechci. 

