# Tipy pro rychlé načtení webu

Vytvoření rychlého webu vyžaduje širokou škálu dovedností a znalostí. V tomto textu si jen vykolíkujeme základní obrysy. 

Vždycky musíte zmenšit datový objem prvků stránky, zamezit blokování vykreslování stránky a ideálně ještě zrychlit procesy na serveru. Na protokolu HTTP/1 ještě snížit počet dotazů na server.

Nástroj PageSpeed Insights, který jsem chválil [v textu o nástrojích](rychlost-nastroje.md), vás upozorní, pokud váš web následující doporučení porušuje. 


## 1. Zmenšete datový objem

Pravidlo zmenšování dat je evergreen. Platí pro každý web, aplikaci, platí pro HTTP/2 i stále ještě převažující první verzi protokolu HTTP.

### Obrázky

Snižte datovou velikost obrázků, zvolte pro ně vhodné formáty.
 
1. Používejte responzivní obrázky. Píšu o nich v příští kapitole, o [médiích](responzivni-obrazky.md). 
2. Cokoliv, co lze vyjádřit vektorem (logotypy, ikony, grafy…), uložte do formátu SVG. [vrdl.cz/p/svg](https://www.vzhurudolu.cz/prirucka/svg)
3. Pro dekorace používejte CSS, nikoliv obrázky. 
4. Používejte kompresi pokročilými nástroji, jako je Kraken.io, JPEGmini.com nebo Guetzli. 
5. Zvažte použití formátu [WebP](webp.md) namísto JPEG. I když jej umí jen Chrome a Opera, vyplatí se, protože je datově výrazně úspornější (jeho detekci se naučíte v textu [o značce `<picture>`](picture.md)) z následující kapitoly.

Další rady od Google na téma obrázků jsou zde: [vrdl.in/od06q](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization)

### Webové fonty

- Každý font má své řezy (tučný, kurzíva…). Nepoužívejte jich zbytečně moc. Více než pět na jedné stránce je na pováženou. Každý řez zatěžuje stránku desítkami kilobajtů dat navíc. 
- Využívejte úsporný formát WOFF2. [vrdl.cz/b/50-woff2](https://www.vzhurudolu.cz/blog/50-woff2) 
- Do fontu dejte jen znaky, které na webu opravdu potřebujete. Vlastnost podporují i Google Fonts. [vrdl.in/9763d](https://developers.google.com/fonts/docs/getting_started#specifying_script_subsets)

Povídání o rychlosti a webfontech od Google: [vrdl.in/91bg5](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization)

### Zdrojové kódy 

Zmenšete datovou velikost prvků stránky jako jsou JS, CSS nebo HTML soubory. 

- Použijte UglifyJS, CSSNano a podobné nástroje pro automatické zmenšení datového objemu zdrojových kódů. 
- Vytvořte si verze velkých knihoven, které obsahují jen používané vlastnosti. Například Bootstrap je možné datově velmi ořezat. [getbootstrap.com/customize/](http://getbootstrap.com/customize/)

Rady od Google: [vrdl.in/kmav0](https://developers.google.com/speed/docs/insights/MinifyResources)


### Lazy loading

Technika, která odkládá načtení datově zatěžujících komponent až na chvíli, kdy je uživatel opravdu potřebuje. Obvykle na moment narolování stránky na jejich pozici. Zvažte využití téhle užitečné techniky. 

Je použitelná pro javascriptové knihovny, vkládané prvky jako videa z YouTube, ale hlavně pro stránky se spoustou obrázků. [vrdl.cz/p/lazy-loading](https://www.vzhurudolu.cz/prirucka/lazy-loading)


## 2. Zamezte blokování vykreslení

Data můžete ušetřit vždy. Dnešní weby ale mívají velké problémy v jiné oblasti: ve špatném způsobu posílání souborů do prohlížeče. 

Prohlížeče nedokážou stránku zobrazit, dokud nestáhnou a nezpracují veškerý blokující Javascript (bez parametrů `async` nebo `defer`) a všechny CSS soubory. Na pomalých připojeních to může trvat celou věčnost. Uživatel se pak dívá na bílou obrazovku, i když se mu už spousta prvků stránky načetla.

### Javascript

- Používejte parametry `async` a `defer`. Prohlížeči říkají, že na jejich stažení nemusí čekat a stránku může zobrazit už bez nich. Externí JS soubory bez těchto parametrů nedávejte do hlavičky (`<head>`) nebo těla (`<html>`) stránky. [jecas.cz/async-defer](http://jecas.cz/async-defer)
- Rozdělte si Javascript do skupin. *Kritický* kód jako polyfilly nebo detekční skripty vkládejte přímo do HTML. Externí *nezbytně blokující* vložte pomocí `<script src="">` rovnou do stránky. *Externí neblokující* pak vkládejte pomocí `<script src="" async>`.
- Pozor na vkládané Javascripty třetích stran. Příkladem budiž měřící kódy nebo A/B testovací nástroje. Pokud je zrovna nevyužíváte, vypínejte je. Zkuste přepsat jejich kód, bývá často velmi špatně optimalizovaný: [vrdl.in/3ym50](https://www.souki.cz/jak-si-zabit-eshop-mericim-kodem)

Další rady od Google: [vrdl.in/afzxg](https://developers.google.com/speed/docs/insights/BlockingJS)

### Webové fonty

Když prohlížeče zjistí, že jsou ve stránce webové fonty, většinou na čas schovají obsah stránky. Obvykle je ale u webů vhodnější do načtení webfontů zobrazovat obsah alespoň pomocí systémových písem. Pokud je to i váš případ, doporučím vám knihovnu FontFaceObserver. Zajistí, abyste měli načítání fontů pod kontrolou vy jako autoři. A sjednotí různá chování různých prohlížečů. [fontfaceobserver.com](https://fontfaceobserver.com/)

### CSS

Kritické CSS je implementačně mírně náročnější technika, ale s velkým vlivem na rychlost zobrazení stránky. Jde o automatické rozdělení CSS na dvě části a vložení té kritické přímo do HTML kódu. [vrdl.cz/b/35-critical-css](https://www.vzhurudolu.cz/blog/35-critical-css)

### Dejte přednost viditelnému obsahu

To, co je na stránce vidět nahoře, se do prohlížeče snažte v externích souborech dostat jako první. Nastavte správné pořadí – využijte vkládání obrázků přímo do HTML nebo CSS. Rady od strýčků a tet z Google: [vrdl.in/aywc5](https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent)


## 3. Zrychlete server

Na serveru můžete hodně získat. V celkovém čase potřebném k načtení stránky sice rychlost serveru hraje menší roli než zpracování frontendu, je ale velmi důležitá. Jak už jsem psal: Hledí na ni Google a považuje ji za jeden ze signálů pro pozici stránky ve výsledcích vyhledávání. Serverové technologie nejsou součástí mé specializace, proto alespoň velmi stručně.

### Zrychlete serverový čas

Já vím, dobře se to řekne. Ale renderování stránky přes vteřinu je velmi nepříjemné a určitě na serveru nějaké rezervy máte. Rady od Google: [vrdl.in/ivy17](https://developers.google.com/speed/docs/insights/Server)

### Zapněte si gzip

Zdaleka není samozřejmost. Přitom je to jednoduché. Zkontrolujte si to hlavně na sdíleném hostingu. Rady od Google: [vrdl.in/1g9j8](https://developers.google.com/speed/docs/insights/EnableCompression)

### Zajistěte správné kešování v prohlížeči

To je složitější, ale prvky stránky mají na serverech často zapnutá špatná kešovací pravidla. Rady od Google: [vrdl.in/l0rhz](https://developers.google.com/speed/docs/insights/LeverageBrowserCaching)

### Vyhněte se zbytečným přesměrováním

Každé přesměrování zpomalí dojem z načítání stránky, proto je pokud možno nedělejte. [vrdl.in/46oba](https://developers.google.com/speed/docs/insights/AvoidRedirects)


## 4. Neběží vám server na HTTP/2? Pak ještě minimalizujte počet dotazů

Ve dnech, kdy toto píšu, jsou weby běžící na HTTP/2 ještě stále vzácné. Pro weby servírované pomocí HTTP/1 je proto k uvedeným základním radám potřeba přidat ještě jednu: Minimalizujte počet dotazů na server. Týká se všech externích prvků webu – souborů s CSS a JS kódem, obrázků, webfontů a dalších.

- CSS a JS lze spojovat do balíčků. Najděte si nástroje pro vaši platformu. [vrdl.in/7zcde](https://www.google.com/search?q=css+js+concat)
- Obrázky zase můžete spojovat do takzvaných „sprajtů“. [jecas.cz/css-sprite](http://jecas.cz/css-sprite)
- Menší obrázky můžete vložit přímo do HTML nebo CSS pomocí takzvaného „data URI“. [jecas.cz/data-uri](http://jecas.cz/data-uri)

Na druhé verzi HTTP protokolu to už obvykle není potřeba dělat. Díky vychytávce jménem *multiplexing* je obecně lepší posílat prohlížeči mnoho malých souborů. Více o HTTP/2, včetně seznamu podporujících hostingů, najdete na Vzhůru dolů. [vrdl.cz/p/http-2](https://www.vzhurudolu.cz/prirucka/http-2)

To bychom měli. Vytvořili jsme si tady základní mapu problémů, které obvykle zpomalují weby. Máte málo času? Doporučím vám začít s následujícími třemi. Trpí jimi skoro každý web a jejich odstranění bude mít největší efekt.

1. Datová velikost, hlavně obrázků a Javascriptů (bod 1)
2. Javascript blokující vykreslení (bod 2, první odstavec)
3. Webfonty (bod 2, druhý odstavec)

Nebojte, nudit se nebudete. I náprava těchto tří problémů vám nějaký ten den práce zabere. 


Jen to, prosím vás, nedělejte jednorázově. Optimalizaci si zautomatizujte a vložte do procesu nahrávání webu na server. Metriky pak kontrolujte průběžně, ideálně opět automaticky.

<div class="web-only" markdown="1">
V další kapitole se na zoubky podíváme mediím ve stránce. V jejím závěru přidáme do fiktivního e-shopu obrázky tak, abychom zohledňovali právě i rychlost načítání.
</div>
