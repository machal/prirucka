# Základní pravidla pro rychlé načtení webu

Vytvoření rychlého webu občas vyžaduje širokou škálu dovedností a znalostí. My si teď ale vystačíme s absolutními základy a obecnými pravdami. 

Vždycky totiž musíte zmenšit datový objem prvků stránky, zamezit blokování vykreslování stránky a ideálně ještě zrychlit backend.

Budu tady vycházet z obecných doporučení webu Web Fundamentals od Google a také na ně odkazovat vás, kteří se zajímáte o více informací.

PageSpeed Insights vám prozradí, která ze zmíněných pravidel porušuje váš web. PSI jsem chválil [v textu o nástrojích](rychlost-nastroje.md).

## 1. Zmenšete datový objem

Pravidlo zmešování dat je evergreen. Platí pro každý web, aplikaci, platí pro HTTP/2 i stále ještě převažující první verzi protokolu.

### Obrázky

Snižte datovou velikost obrázků, zvolte pro ně vhodné formáty, posílejte je správným způsobem. Zvažte WebP namísto JPG, používejte [responzivní obrázky](responzivni-obrazky.md), používejte kompresi pokročilými nástroji jako je JPEGmini nebo Kraken. Pro dekorace používejte CSS, nikoliv obrázky. Zmenšování obrázků si zautomatizujte pomocí Gruntu nebo podobného nástroje. Rady od Google: [vrdl.in/od06q](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization).

### Zdrojové kódy 

Zmenšete datovou velikost prvků stránky jako jsou JS, CSS nebo HTML soubory. Použijte UglifyJS, CSSNano a podobné nástroje. Minifikaci kódu si zautomatizujte. Vytvořte si verze knihoven (Bootstrap, jQuery UI…), které obsahují jen používané vlastnosti. Rady od Google: [vrdl.in/kmav0](https://developers.google.com/speed/docs/insights/MinifyResources).

## 2. Zamezte blokování vykreslení

Data můžete ušetřit vždy. Dnešní weby ale větší mívají problémy obvykle jinde: ve špatném postupu posílání souborů do prohlížeče.

### Javascript

Největší problém bývá se špatným posíláním javascriptových souborů. Používejte parametry `async` a `defer`. Externí JS soubory bez těchto parametrů nedávejte do hlavičky nebo těla stránky. [jecas.cz/async-defer](http://jecas.cz/async-defer)

Další rady od Google: [vrdl.in/afzxg](https://developers.google.com/speed/docs/insights/BlockingJS).

### Webové fonty

Když zjistí, že ve stránce jsou webfonty, většina prohlížečů na čas schová obsah stránky. Obvykle je ale u webů vhodnější do načtení webfontů zobrazovat obsah systémovými písmy. Pokud je to i váš případ, doporučím vám knihovnu FontFaceObserver. [fontfaceobserver.com](https://fontfaceobserver.com/)

Další tipy: nepoužívejte zbytečně moc řezů písem. Využívejte úsporný formát WOFF2. Do fontu dejte jen znaky, které na webu opravdu potřebujete.  Dlouhé povídání o rychlosti webfontů od Google: [vrdl.in/91bg5](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization).

### Dejte přednost viditelnému obsahu

To co je na stránce vidět nahoře, se do prohlížeče snažte v externích souborech dostat jako první. Nastavte správné pořadí, využijte vkládání obrázků přímo do HTML nebo CSS. Rady od strýčků a tet z Google: [vrdl.in/aywc5](https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent).

## 3. Zrychlete backend

Tak jasně, i na backendu můžete hodně získat. V celkovém čase potřebném k načtení stránky ovšem server obvykle bývá až obvyklý podezřelý číslo dva.

### Zrychlete serverový čas

Já vím, dobře se to řekne. Ale renderování stránky přes vteřinu je fakt pitomé a určitě na serveru nějaké rezervy máte. Rady od Google: [vrdl.in/ivy17](https://developers.google.com/speed/docs/insights/Server).

### Zapněte si gzip

Zdaleka není samozřejmost. Přitom je to jednoduché. Zkontrolujte si to hlavně na sdíleném hostingu. Rady od Google: [vrdl.in/1g9j8](https://developers.google.com/speed/docs/insights/EnableCompression).

### Zajistěte správné kešování v prohlížeči

To je složitější, ale prvky stránky mají na serverech často zapnuté špatné kešování. Rady od Google: [vrdl.in/l0rhz](https://developers.google.com/speed/docs/insights/LeverageBrowserCaching).

### Vyhněte se zbytečným přesměrováním

Každé přesměrování zpomalí dojem z načítání stránky, proto je pokud možno nedělejte. [vrdl.in/46oba](https://developers.google.com/speed/docs/insights/AvoidRedirects)


## 4. Neběžíte vám server na HTTP/2? Pak ještě minimalizujte počet dotazů na server

V době psaní jsou weby, běžící na HTTP/2, ještě stále vzácné. Proto je k výšeuvedeným základním radám potřeba přidat ještě jednu: minimalizujte počet dotazů na server. Týká se všech externích „assetů“ webu: CSS, JS soubory, obrázky, webfonty a další.

CSS a JS lze spojovat do balíčků. Najděte si nástroje pro vaši platformu. [google.com/search?q=css+js+concat](https://www.google.com/search?q=css+js+concat).

Obrázky zase můžete spojovat do takzvaných „sprajtů“. [jecas.cz/css-sprite](http://jecas.cz/css-sprite)

Na druhé verzi HTTP protokolu to už není potřeba dělat. Díky vychytávce jménem multiplexing je obecně lepší po něm posílat prohlížeči mnoho malých souborů. Více informací o HTTP/2 najdete na Vzhůru dolů: [vrdl.cz/prirucka/http-2](http://www.vzhurudolu.cz/prirucka/http-2).

Vytvořili jsme si mapu problémů, které obvykle zpomalují weby. Máte málo času? Doporučím vám začít s následujícími třemi problémy. Má je skoro každý web a jejich odstranění bude mít největší efekt.

1. Datová velikost, hlavně obrázků a javascriptů (bod 1)
2. Javascript blokující vykreslení (bod 2, první odstavec)
3. Webfonty (bod 2, druhý odstavec)

Nebojte, nudit se nebudete. Oprava i těchto tří problémů vám nějaký ten den práce zabere. 

