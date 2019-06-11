# Kritika AMP vzhledem ke standardům 

Chyby, které autoři AMP udělali hned na začátku, přivedly část odborné veřejnosti v lednu 2018 k  publikování otevřeného dopisu, jenž vyjadřuje rozladění z projektu.

Pod „A letter about Google AMP“ se podepsaly osobnosti jako Ethan Marcotte, autor pojmu „responzivní design“, nebo Steve Souders, citovaný expert na rychlost webů. V textu píší autoři zhruba toto:

* Z AMP jsme znepokojení, protože vede návštěvnost na servery a domény Googlu, čímž posiluje dominanci této firmy na webu.
* Problém je hlavně to, že adaptací technologie mohou webové stránky získat nefér výhodu – např. umístěním v doporučených článcích výsledků vyhledávání. Při zobrazení AMP verze webu navíc uživatel zůstává na Googlu.
* Autoři doporučují zajistit podobné výhody i běžným webům splňujícím určitá kritéria. Nezobrazovat cizí obsah na doméně Google.

Závěr zní: „Web není Google a neměl by být jen Google.“  Více je na [ampletter.org](http://ampletter.org/).

## Oprava je nutná a proveditelná. Jenže kdy přijde?

S problémem i doporučeními lze souhlasit. Zakopaný pes ale vězí v časovém horizontu, ve kterém bude možné doporučení realizovat při zachování současné funkčnosti a plnění cílů AMP. Rychle to prostě nepůjde.

Co naopak rychle přišlo, byla reakce od autorů AMP. Vedoucí osobnosti projektu začaly více vysvětlovat. David Besbris například v už zmíněném textu na The Verge říká:

> „Vždycky jsme chtěli udělat z technologií za AMP webové standardy a vždycky jsme to říkali, ale ne moc jasně.“

Mimochodem, to, že technologie vznikají na „pískovištích“ mimo standardizační organizace, je poměrně běžné. Vezměme například velkou inovaci ve vkládání obrázků do HTML stránek pomocí atributů `srcset` a `sizes` nebo značky `<picture>`. Celý vývoj obstarala komunitní skupina RICG (Responsive Images Community Group) a standard byl postupně přebírán prohlížeči a až v závěru přiřazen do oficiálních standardů W3C.

Responzivní obrázky byly také v počátku dostupné pomocí polyfillu, javascriptové knihovny, která nabízela jejich funkčnost v prohlížečích bez nativní podpory. Jmenovala se Picturefill, vzpomínáte? AMP se dá z tohoto úhlu pohledu rovněž vnímat jako polyfill. Jak záhy uvidíte, autoři hodlají postupně některé prvky této technologie nahrazovat nově vzniklými standardy.

## Nestandardní technologie? Srovnejte s konkurencí

Je také dobré si uvědomit, že autoři měli celou řadu možností, jak technologii pojmout. Automatická distribuce obsahu na CDN je jasná. Jak se ale bude zapisovat samotný kód pro obsah?

Soudíme, že díky volbě HTML, CSS a JS je proprietárnost na daleko nižší úrovni než u konkurenčních řešení Facebooku (Instant Articles) nebo Applu (Apple News). Jejich autoři se prakticky vůbec neobtěžovali navazovat na webové standardy nebo je snad i vylepšovat, což je přesně to, co AMP dělá.

## Už ne jen Google: Nový model řízení

V prosinci 2018 představili autoři nový model řízení. AMP tak přechází z režimu jednoho šéfa (zatím samozřejmě z Googlu) do režimu řízení pomocí výborů a pracovních skupin.

V poradním výboru sedí kromě Googlu například lidé z Akamai, Automattic (hlavní autoři WordPressu), The Paciello Group (experti na přístupnost) nebo AliExpressu.

Ve výboru pro technické vedení pak mají zastoupení společnosti Pinterest, Twitter, Microsoft a pochopitelně zase i ten Google. Celkově to ale zní otevřeněji a ne až tak centralizovaně, že?

Více najdou zájemci v blogpostu „AMP Project’s new governance model now in effect“. [vrdl.in/ampgov](https://amphtml.wordpress.com/2018/11/30/amp-projects-new-governance-model-now-in-effect/)

## Webové standardy vznikající na popud týmu projektu AMP

K polovině roku 2019 tým za AMP navrhl nebo spolupracuje například na těchto webových standardech:

* Feature Policy
* Performance Timeline
* Paint Timing
* Web Packaging
* Iframe promotion

První tři jsou už dokonce zahrnuté pod W3C. Všechny nějak vylepšují nebo měří rychlost webu. A nejsou jediné. Zajímavá je v této souvislosti stránka „Overview of web standards and features related to AMP“. [vrdl.in/ampstan](https://github.com/ampproject/amphtml/blob/master/contributing/web-standards-related-to-amp.md)

## Aktualizace WebKitu

Stejně jako všem ostatním, i vývojářům AMP komplikuje práci nejednotná podpora určitých HTML, CSS nebo JS vlastností v prohlížečích. Zaujal nás seznam věcí, které opravili nebo nechali opravit ve WebKitu, jádru, na kterém je postavený prohlížeč Safari od Applu.

Je tam zmíněna například úprava sandboxingu pro HTML prvek `<iframe>` nebo oprava problému s vypínáním animovaných přechodů v CSS pomocí JavaScriptu.

Více si přečtete v blogpostu „Contributing to WebKit for a more predictable web platform“. [vrdl.in/ampwebkit](https://amphtml.wordpress.com/2018/12/06/contributing-to-webkit-for-a-more-predictable-web-platform/)

Podle našeho názoru jde tedy o ne úplně šťastný začátek, ale docela dobrý vývoj. Co si myslíte vy?
