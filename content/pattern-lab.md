# Atomický design a Pattern Lab: návrat do budoucnosti návrhu uživatelských rozhraní

[Pattern Lab](http://patternlab.io/) je nástroj pro návrh, testování a prezentaci atomických systémů  designu. 

Pattern Lab používám na aktuálním projektu a mám takový pocit, že jinak už weby dělat nechci. V tomhle textu budu vysvětlovat proč.

Nejdříve si ale musíme něco povědět o systémech designu. 

## Systémy designu

Myslím to, co asi znáte pod pojmy *style guide* nebo *pattern library*.  Pokud neznáte, je to jako by jste si vytvářeli Bootstrap pro vlastní projekty.

> We’re not designing pages, we’re designing systems of components. 
— Stephen Hay

Systémy usnadňují dodržování jednotnosti designu, zmenšují kód, podporují iterativní vývoj. Usnadní testování a díky dokumentaci třeba i komunikaci v týmu a zaučení nových lidí. Šetří prostě čas a peníze.

<p class="video" markdown="1">
Video: [Úvod do Style Guides](https://www.youtube.com/watch?v=FvTzAwebUjQ) - Martin Staněk o „style guides“, dokumentacích ke komponentám .</p>

## Atomic Design

Pattern Lab je nástroj pro návrh *atomických* designových systémů. [Atomic Design](http://atomicdesign.bradfrost.com/) vymyslel Brad Frost. Je to varianta trendu, kam  webdesign zcela jasně směřuje – k oněm systémům komponent, vlastním Bootstrapům nebo systémům designu. Tím vlastně narážíme na jejich hlavní nevýhodu – děsně moc názvů a variant.

Atomický design přišel s tříděním prvků na stránce do úrovní vycházejících celkem chytře z chemické terminologie. Vezměme to i s příklady z hypotetického eshopu:

1. Atomy (například tlačítko)
2. Molekuly (např. tlačítko spojené s inputem do vyhledávacího pole)
3. Organizmy (např. hlavička stránky)
4. Šablony (např. šablona detailu produktu)
5. Stránky (např. stránka konkrétního produktu)

Zní vám to podivně? Nejste sami. Než jsem si to zkusil na konkrétním projektu, všem okolo jsem říkal, že je to zbytečně složitá hierarchie a že na projektech stačí jedna úroveň komponent. 

Než jsem si to zkusil na konkrétním projektu. 

Teď už mám vyzkoušeno a říkám, že je to kategorizace, která je pro obyčejné weby úplně dokonalá. Omlouvám se tedy všem atomům, molekulám, organizmům a své učitelce chemie na střední.

Hlavním cílem pro zavedení designových systémů totiž je ušetření práce. Jednoúrovňová organizace komponent, obvyklá na jiných mých projektech čas šetří, ale ne tak jako když z atomů skládáte molekuly a z molekul organizmy. Začne pak fungovat efekt skládání LEGO kostek a samozřejmě i kód je pak výrazně jednodušší.

Pokud by vám ale atomické dělení časem přestalo vyhovovat, kategorizaci si můžete sami změnit. Brad Frost k tomu vyloženě vybízí a ukazuje i příklady jiných organizací. Myslím, že to ale nebudete potřebovat.

Tak, a teď si pojďme povídat o nástroji pro tvorbu atomických systémů.

## Pattern Lab: návrh, prezentace, ale hlavně testování

[Pattern Lab](http://patternlab.io/) je pro mě zdrojem největšího nepochopení a frustrace od doby co jsem TODO.

Pattern Lab totiž není nástroj k prezentaci systému designu (jako [AtomicDocs](http://atomicdocs.io/)) a v žádném případě ani ke generování dokumentace k CSS (jako [KSS](http://warpspire.com/kss/) nebo [StyleDocco](https://jacobrask.github.io/styledocco/)). 

Je to nástroj pro *návrh* . Tedy spíše jako Photoshop nebo Sketch než jako zmíněné nástroje. V obvyklých případech vás bude přidání Pattern Labu do vašeho designérského workflow stát určité úsilí. U mě to bylo snadné, protože asi víte, že jsem zblázněný do návrhu rozhraní [přímo v prohlížeči](http://www.vzhurudolu.cz/prednaska/design-webu-v-prohlizeci-149).

Kromě návrhu ale dokáže *testovat*, ověřovat designérské hypotézy přímo v prohlížeči, v různých obsahových nebo uživatelských kontextech. To je, řekl bych, jeho hlavní silná stránka a taky něco, co ze svého Photoshopu ani Sketche prostě nevytáhnete ani stádem koní. Tohle je ta budoucnost, kterou zmiňuji v názvu textu.

Podobně jako výše uvedené nástroje pak sice umí systém designu *prezentovat*, tedy ukazovat lidem mimo nejužší designérský tým. Neřekl bych, že tohle je ale jeho silná stránka. Nicméně má skvělou podporu pro generování jakékoliv dokumentace ze svých podkladů.

<small markdown="1">
Užitečné odkazy k Pattern Lab:
- [Ohromný článek na Smashing Magazine](https://www.smashingmagazine.com/2016/07/building-maintaining-atomic-design-systems-pattern-lab/).
- [Demo Pattern Labu](http://demo.patternlab.io/). Zdrojáky jsou [na Githubu](https://github.com/pattern-lab/starterkit-mustache-demo).
</small>

<p class="video" markdown="1">
Video: [Atomic Design v České televizi](https://www.youtube.com/watch?v=wgsHfAV-6Aw) - Zdeněk Lanc sdílí zkušenosti s předchozí verzí Pattern Labu při redesignu ČT24.</p>

### Testování na vlastních datech

Nejdřív vtip pro designéry:

> Bylo dřív vejce nebo slepice? A obsah nebo design?

Asi budete souhlasit, že obsah a design spolu dost úzce souvisejí. Při práci na designu potřebujete obsah, to designéři vědí. Při testování designu potřebujete všechny varianty obsahu, včetně extrémních. To vědí zase frontend kodéři.

Pattern Lab nabízí úžasnou věc – vkládání obsahu přímo do designu. Pokud už obsah někde máte, necháte si ho nalít do JSON souboru a napojíte na něj Pattern Lab. Lusknutí prstem a v prohlížeči testujete víceméně reálný web. Nebo v našem případě více webů na jednom systému designu:

*TODO Webmium eshops*

### Pseudošablony

Další hezká věc a přitom žádná velká věda. Pattern Lab nabízí možnost vytvořit pseudošablony, varianty šablon s různým typem obsahu, různým rozložením atd. Prostě si všechny možnosti otestujete už přímo v design systému a ne až na běžícím webu.

*TODO Webmium eshops*

## Zkusíte Pattern Lab a atomický design?

Určitě ho zkuste, pokud:

- děláte vlastní produkt nebo spravujete větší web: design systém dlouhodobě využijete a větší počáteční časová investice se vám vrátí
- jste otevření změnám v pracovních postupech: designér i kodér musí velmi intenzivně spolupracovat a vyvíjet věci v malých iteracích

Pattern Lab se nehodí:

- do firem, kde rubete unikátní weby jako Baťa cvičky – obvykle agenturního typu
- na malinké projekty – pokud si to nechcete vyloženě zkusit a víte, že to v budoucnu užijete
- do týmů, kde designér chybí nebo je to externista

Já sám vím, že bez Pattern Labu a atomického designu se mi nové projekty nebude chtít dělat. 

