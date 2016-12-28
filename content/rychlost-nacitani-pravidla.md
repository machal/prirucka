# Základní pravidla pro rychlé načtení webu

Vytvoření rychlého webu občas vyžaduje širokou škálu dovedností a znalostí. My si teď ale vystačíme s absolutními základy a obecnými pravdami. 

Vždycky totiž musíte zmenšit datový objem prvků stránky, zamezit blokování vykreslování stránky a ideálně ještě zrychlit backend.

Budu tady vycházet z obecných doporučení od Google a také na ně odkazovat. 

## 1. Zmenšete datový objem

### Obrázky

Snižte datovou velikost obrázků, zvolte pro ně vhodné formáty, posílejte je správným způsobem. Google radí jak optimalizovat obrázky (anglicky): [https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization)

### Zdrojové kódy 

Zmenšete datovou velikost prvků stránky jako jsou CSS, JS nebo HTML soubory. Tady jsou opět základní rady od Google (anglicky): [https://developers.google.com/speed/docs/insights/MinifyResources](https://developers.google.com/speed/docs/insights/MinifyResources)

## 2. Zamezte blokování vykreslení

### Javascript

Největší problém bývá se špatným nastavením Javascriptových souborů. Používejte parametry async a defer. [http://jecas.cz/async-defer](http://jecas.cz/async-defer)

Tady jsou rady od Google (anglicky): [https://developers.google.com/speed/docs/insights/BlockingJS](https://developers.google.com/speed/docs/insights/BlockingJS).

### Webové fonty

Když zjistí, že ve stránce jsou webfonty, většina prohlížečů na čas schová obsah stránky. U většiny webů je ale vhodnější do načtení webfontů zobrazovat obsah systémovými písmy. Pokud je to i váš případ, doporučím vám knihovnu FontFaceObserver. [https://fontfaceobserver.com/](https://fontfaceobserver.com/)

Dlouhé povídání o rychlosti webfontů od Google (anglicky): [https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization)

### Dejte přednost viditelnému obsahu

To co je na stránce vidět nahoře, se do prohlížeče snažte dostat jako první. Nastavte správné pořadí, využijte vkládání obrázků přímo do HTML nebo CSS. Rady od strýčků a tet z Google (anglicky): [https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent](https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent)

## 3. Zrychlete backend

### Zrychlete serverový čas

Já vím, to se dobře řekne. Ale renderování stránky přes vteřinu je fakt pitomé a určitě na serveru nějaké rezervy máte. [https://developers.google.com/speed/docs/insights/Server](https://developers.google.com/speed/docs/insights/Server) (anglicky)

### Zapněte si gzip

Zdaleka není samozřejmost. Přitom je to jednoduché. Zkontrolujte si to hlavně na sdíleném hostingu. [https://developers.google.com/speed/docs/insights/EnableCompression](https://developers.google.com/speed/docs/insights/EnableCompression) (anglicky)

### Zajistěte správné kešování v prohlížeči

To složitější, ale prvky stránky mají na serverech často zapnuté špatné kešování. [https://developers.google.com/speed/docs/insights/LeverageBrowserCaching](https://developers.google.com/speed/docs/insights/LeverageBrowserCaching)  (anglicky)

### Vyhněte se zbytečným přesměrováním

Každé přesměrování zpomalí dojem z načítání stránky, proto je pokud možno nedělejte. [https://developers.google.com/speed/docs/insights/AvoidRedirects](https://developers.google.com/speed/docs/insights/AvoidRedirects)  (anglicky)

Které rady jsou relevantní pro vaší stránku? To vám prozradí právě nástroj PageSpeed Insights od Google. [https://developers.google.com/speed/pagespeed/insights/](https://developers.google.com/speed/pagespeed/insights/)  (anglicky)

## 4. Neběžíte na HTTP/2? Pak ještě minimalizujte počet dotazů na server

V době psaní jsou weby, běžící na HTTP/2, ještě stále vzácné. Proto je k výšeuvedeným základním radám potřeba přidat ještě jednu. Minimalizujte počet dotazů na server. CSS, JS soubory, ale i obrázky.

Najděte si nástroje pro spojování CSS a JS pro vaši platformu: [google.com/search?q=css+js+concat](https://www.google.com/search?q=css+js+concat).

Obrázky můžete spojovat do takzvaných sprajtů: [http://jecas.cz/css-sprite](http://jecas.cz/css-sprite).

Na druhé verzi HTTP protokolu to už není potřeba dělat. Díky vychytávce jménem multiplexing je obecně lepší po něm posílat prohlížeči mnoho malých souborů. Více informací o HTTP/2 najdete na Vzhůru dolů: [vrdl.cz/prirucka/http-2](http://www.vzhurudolu.cz/prirucka/http-2).

Vytvořili jsme si mapu problémů, které obvykle zpomalují weby. Máte málo času? Doporučím vám začít s následujícími třemi problémy. Má je skoro každý web:

1. Datová velikost, hlavně obrázků a javascriptů (bod 1)
2. Javascript blokující vykreslení (bod 2, první odstavec)
3. Webfonty (bod 2, druhý odstavec)

Nebojte, nudit se nebudete. Tyhle tři body u větších webů obvykle nějaký ten týden zaberou. 

