# Základní pravidla pro rychlé načtení webu

Vytvoření rychlého webu vyžaduje širokou škálu dovedností a znalostí. V tomto textu si jen vykolíkujeme základní obrysy. 

Vždycky musíte zmenšit datový objem prvků stránky, zamezit blokování vykreslování stránky a ideálně ještě zrychlit procesy na serveru. Na protokolu HTTP/1 ještě snížit počet dotazů na server.

PageSpeed Insights, které jsem chválil [v textu o nástrojích](rychlost-nastroje.md), vás upozorní, pokud váš web následující doporučení porušuje. 

## 1. Zmenšete datový objem

Pravidlo zmešování dat je evergreen. Platí pro každý web, aplikaci, platí pro HTTP/2 i stále ještě převažující první verzi protokolu.

### Obrázky

Snižte datovou velikost obrázků, zvolte pro ně vhodné formáty.
 
- Používejte [responzivní obrázky](responzivni-obrazky.md). 
- Cokoliv lze vyjádřit vektorem (logotypy, ikony, grafy…), uložte do fomátu SVG. [vrdl.cz/prirucka/svg](http://www.vzhurudolu.cz/prirucka/svg)
- Pro dekorace používejte CSS, nikoliv obrázky. 
- Používejte kompresi pokročilými nástroji jako je JPEGmini, Kraken nebo Guetzli. 
- Zvažte použití formátu WebP namísto JPEG. I když jej umí jen Chrome a Opera, vyplatí se, protože je datově výrazně úspornější (jeho detekci už umíte díky textu [o značce `<picture>`](picture.md)). 

Další rady od Google na téma obrázků jsou zde: [vrdl.in/od06q](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization).

### Zdrojové kódy 

Zmenšete datovou velikost prvků stránky jako jsou JS, CSS nebo HTML soubory. 

- Použijte UglifyJS, CSSNano a podobné nástroje pro automatické zmenšení datového objemu zdrojových kódů. 
- Vytvořte si verze velkých knihoven, které obsahují jen používané vlastnosti. Například Bootstrap je možné datově velmi ořezat. [getbootstrap.com/customize/](http://getbootstrap.com/customize/)

Rady od Google: [vrdl.in/kmav0](https://developers.google.com/speed/docs/insights/MinifyResources).

### Webové fonty

- Každý font má své řezy (tučný, kurzíva…). Nepoužívejte jich zbytečně moc. Více než pět řezů na jedné stránce je na pováženou. Každý řez zatěžuje stránku desítkami kilobajtů dat navíc. 
- Využívejte úsporný formát WOFF2. [vrdl.cz/blog/50-woff2](http://www.vzhurudolu.cz/blog/50-woff2) 
- Do fontu dejte jen znaky, které na webu opravdu potřebujete. Pomůže vám FontSquirrel Webfont Generator. [fontsquirrel.com/tools/webfont-generator](https://www.fontsquirrel.com/tools/webfont-generator)

Dlouhé povídání o rychlosti a webfontech od Google: [vrdl.in/91bg5](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization).

### Lazy loading

Zvažte využití téhle techniky. Odkládá načtení datově zatěžujících komponent až na chvíli, kdy je uživatel opravdu potřebuje. Obvykle na moment narolování stránky na jejich pozici.

Je to použitelné pro javascriptové knihovny, vkládané prvky jako YouTube videa, ale hlavně pro stránky se spoustou obrázků. [vrdl.cz/prirucka/lazy-loading](http://www.vzhurudolu.cz/prirucka/lazy-loading)


## 2. Zamezte blokování vykreslení

Data můžete ušetřit vždy. Dnešní weby ale většinou mívají problémy obvykle jinde: ve špatném postupu posílání souborů do prohlížeče. Prohlížeče nedokáží stránku zobrazit, dokud nenačtou veškerý blokující Javascript a všechny CSS soubory. Na pomalých připojeních to může trvat celou věčnost.

### Javascript

- Používejte parametry `async` a `defer`. Externí JS soubory bez těchto parametrů nedávejte do hlavičky nebo těla stránky. [jecas.cz/async-defer](http://jecas.cz/async-defer)
- Rozdělte si Javascript do skupin. *Kritický* kód jako polyfilly nebo detečkní skripty dávejte přímo do HTML. Externí *nezbytně blokující* vložte pomocí `<script src="">` rovnou do stránky. *Externí neblokující* pak vkládejte pomocí `<script src="" async>`.
- Pozor na vkládané Javascripty třetích stran. Příkladem budiž měřící kódy nebo A/B testovací nástroje. Pokud je zrovna nevyužíváte, vypínejte je. Zkuste přepsat jejich kód, bývá často velmi špatně optimalizovaný: [vrdl.in/3ym50](https://www.souki.cz/jak-si-zabit-eshop-mericim-kodem).

Další rady od Google: [vrdl.in/afzxg](https://developers.google.com/speed/docs/insights/BlockingJS).

### Webové fonty

Když zjistí, že ve stránce jsou webfonty, většina prohlížečů na čas schová obsah stránky. Obvykle je ale u webů vhodnější do načtení webfontů zobrazovat obsah systémovými písmy. Pokud je to i váš případ, doporučím vám knihovnu FontFaceObserver. [fontfaceobserver.com](https://fontfaceobserver.com/)

### CSS

Kritické CSS je implementačně mírně náročnější technika, ale s velkým vlivem na rychlost zobrazení stránky. Jde o automatické rozdělení CSS na dvě části a vložení té kritické přímo do HTML kódu. [vrdl.cz/blog/35-critical-css](http://www.vzhurudolu.cz/blog/35-critical-css)

### Dejte přednost viditelnému obsahu

To co je na stránce vidět nahoře, se do prohlížeče snažte v externích souborech dostat jako první. Nastavte správné pořadí, využijte vkládání obrázků přímo do HTML nebo CSS. Rady od strýčků a tet z Google: [vrdl.in/aywc5](https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent).

## 3. Zrychlete server

No jasně, na serveru můžete hodně získat. V celkovém čase potřebném k načtení stránky sice rychlost serveru hraje menší roli než rychlost frontendu, je ale velmi důležitá. Hledí na ni třeba Google a považuje ji za jeden ze signálů pro pozici stránky ve výsledcích vyhledávání. Serverové technologie nejsou má specializace, proto alespoň velmi stručně.

### Zrychlete serverový čas

Já vím, dobře se to řekne. Ale renderování stránky přes vteřinu je dost pitomé a určitě na serveru nějaké rezervy máte. Rady od Google: [vrdl.in/ivy17](https://developers.google.com/speed/docs/insights/Server).

### Zapněte si gzip

Zdaleka není samozřejmost. Přitom je to jednoduché. Zkontrolujte si to hlavně na sdíleném hostingu. Rady od Google: [vrdl.in/1g9j8](https://developers.google.com/speed/docs/insights/EnableCompression).

### Zajistěte správné kešování v prohlížeči

To je složitější, ale prvky stránky mají na serverech často zapnuté špatné kešovací pravidla. Rady od Google: [vrdl.in/l0rhz](https://developers.google.com/speed/docs/insights/LeverageBrowserCaching).

### Vyhněte se zbytečným přesměrováním

Každé přesměrování zpomalí dojem z načítání stránky, proto je pokud možno nedělejte. [vrdl.in/46oba](https://developers.google.com/speed/docs/insights/AvoidRedirects)


## 4. Neběží vám server na HTTP/2? Pak ještě minimalizujte počet dotazů

V době psaní jsou weby běžící na HTTP/2 ještě stále vzácné. Proto je k uvedeným základním radám potřeba přidat ještě jednu: minimalizujte počet dotazů na server. Týká se všech externích „assetů“ webu: CSS, JS soubory, obrázky, webfonty a další.

- CSS a JS lze spojovat do balíčků. Najděte si nástroje pro vaši platformu. [vrdl.in/7zcde](https://www.google.com/search?q=css+js+concat).
- Obrázky zase můžete spojovat do takzvaných „sprajtů“. [jecas.cz/css-sprite](http://jecas.cz/css-sprite)
- Menší obrázky můžete vložit přímo do HTML nebo CSS pomocí takzvaného „data URI“. [jecas.cz/data-uri](http://jecas.cz/data-uri)

Na druhé verzi HTTP protokolu to už obvykle není potřeba dělat. Díky vychytávce jménem multiplexing je obecně lepší po něm posílat prohlížeči mnoho malých souborů. [vrdl.cz/prirucka/http-2](http://www.vzhurudolu.cz/prirucka/http-2).

Vytvořili jsme si mapu problémů, které obvykle zpomalují weby. Máte málo času? Doporučím vám začít s následujícími třemi problémy. Má je skoro každý web a jejich odstranění bude mít největší efekt.

1. Datová velikost, hlavně obrázků a javascriptů (bod 1)
2. Javascript blokující vykreslení (bod 2, první odstavec)
3. Webfonty (bod 2, druhý odstavec)

Nebojte, nudit se nebudete. I náprava těchto tří problémů vám nějaký ten den práce zabere. Nedělejte to ale jednorázově. Optimalizaci si zautomatizujte a vložte do procesu nahrávání webu na server. 

