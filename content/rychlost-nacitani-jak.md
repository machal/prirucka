# Jak vylepšit rychlost načítání webu

## Proč ji řešit? Uživatelský prožitek, ale také obchod

Mobilní sítě jsou pomalé a ani zvyšování přenosové rychlosti na 3G/4G sítích rychlost načítání webů nevyrovnají s pevným připojením.

Testy a průzkumy zároveň ukazují, že rychlost načtení stránky má velký vliv na konverze webu.

[Amazon zase zjistil](https://speakerdeck.com/mangoweb/na-rychosti-zalezi-frontendisti-3-6-2015#7), že o jednu vteřinu pomalejší stránka způsobí o 11 % méně shlédnutí stránky, o 16 % horší spokojenost zákazníků a o 7 % nižší konverze. Podobné výsledky měla rozsáhlá [studie Kissmetrics](https://blog.kissmetrics.com/loading-time/?wide=1).

Uživatel by na vykreslení stránky neměl čekat více než jednotky vteřin ani na mobilním EDGE připojení.

A nejde jen o mobily. Nezapomeňte, že rychlost načítání je jedním z řadících parametrů pro výsledky vyhledávání Google nebo AdWords kampaní. Ovlivňuje tak nejen konverze, ale i pravděpodobnost, že se na web člověk vůbec dostane.

## Rychlost načtení vs. rychlost zobrazení webu

Pojďme odlišit dva pojmy – moment načtení stránky nastane ve chvíli kdy do prohlížeče doputuje poslední byte ze všech jejich komponent včetně obrázků. Technici znají jako událost `window.load`.

Chvíle zobrazení webu ale může přijít daleko dříve. Prohlížeč může stále načítat komponenty stránky, ale uživateli je ji schopen zobrazit. Ke zkrácení čekání na moment zobrazení slouží především [Critical CSS](https://www.vzhurudolu.cz/blog/35-critical-css) a další pokročilé techniky.

Teď už dost teoretického a byznysového pozadí. Pusťme se do práce.

## Jak zkrátit čekání na moment načtení?

Obecně vzato – snižujeme [datový objem](http://jecas.cz/datova-velikost), počet dotazů na server. Pak se snažíme ovlivnit pořadí, v jakém načítá komponenty stránky prohlížeč. A nakonec prohlížeč trošku hackujeme. Do doby než se všichni naučí [HTTP/2](http://www.zdrojak.cz/clanky/front-end-vyvojari-pozor-na-http2/).

### 1) Fotky: vyrobte více variant

Obrázky jsou problematickou zátěží hlavně na mobilech. Pokud z nějakého důvodu musíte malým i velkým displejům posílat jedinou verzi obrázku, zvažte alespoň použití [zkomprimovaných obrázků](https://www.filamentgroup.com/lab/compressive-images.html).

Ideální variantou ovšem je poskytnou prohlížeči více variant obrázků. Podívejte se na technolii [srcset/sizes](srcset-sizes.md), potažmo polyfill [Picturefill](picturefill.md).

Jako všechny komponenty stránky, i obsahové obrázky můžete samozřejmě zmenšovat. Například pomocí [JPEGMini](http://www.jpegmini.com/) nebo třeba imagemin či [jiných Grunt pluginů](https://www.vzhurudolu.cz/prirucka/grunt-pluginy#obrazky).

### 2) Ikony, loga: použijte vektory

Cokoliv co lze vyjádřit vektorem, vyjádřete vektorem. Ideálně pomocí [SVG](svg.md), alternativně [ikonfonty](ikonfonty-vs-svg.md).

### 3) Javascript: rozdělte na kritický a zbytný

V JS kódu je obvykle druhý největší datový objem. Určitě jej spojte do větších celků (*concat*) a ty minifikujte (*uglify*).

Neplatí to univerzálně, ale často je výhodné JS rozdělit minimálně do dvou různých celků:

- Kritický Javascript – např. [polyfilly](https://github.com/machal/rwd-space-news-example-finished/blob/master/index.php#L34), [skripty pro detekci vlastností](https://github.com/machal/rwd-space-news-example-finished/blob/master/index.php#L25) a další. Pokud jej není moc, vkládejte do hlavičky dokumentu jako kód vkládaný přímo do stránky. V případě, že je to datový tlouštík, vložte jej do stránky jako externí zdroj, ale zajistěte jeho neblokující povahu: `<script src="critical.js" defer async>`.
- Zbytný Javascript – JS kód, bez kterého se stránka může zobrazit a chvíli tak vydrží. Např. jQuery a knihovny UI komponent (karusely, lightboxy a další obludy, pokud je využíváte). Ten prostě vložte nakonec dokumentu. Před `</html>`, aby vám neblokoval vykreslování.

### 4) CSS: kritický CSS

Podobně jako u Javascriptu – spojte do jediného souboru, zmenšete jeho datový objem. CSS vám blokují začátek vykreslování, proto si z nich nechte [vygenerovat kritickou část](https://www.vzhurudolu.cz/blog/35-critical-css).

Přebíráte strašně starý projekt s mraky nepoužívaného CSS? Zkuste [uncsskovat](https://github.com/addyosmani/grunt-uncss).

### 5) Zapněte si kompresi na serveru, nastavte správné kešovací hlavičky

Vím, Gzip je obligátní rada, ale furt se na to zapomíná. Fakt. :-)

Tady je [parádní seznam nastavení](https://github.com/h5bp/server-configs) pro všechny možné servery. Zapne vám kompresi konečně pro všechny typy souborů.

## Narvěte rychlost načítání do svého týmového DNA

Výše uvedené není nic nového, vím. Hlavně pro vás, zkušenější. Mám ale odsledováno, že i dobře optimalizovaná stránka časem na rychlosti ztratí. Nebo, že znalostmi nabušený frontendista narazí na hradbu programátorů, správců serverů, grafiků nebo šéfů projektu kroutících hlavami:

„Támhle je potřeba přidat pět jQuery pluginů, protože to tak produkťák chce.“

„Tady je zase nutné přidat celé jQueryUI (ach bože!), protože grafik v PéeSDé použil 4 jeho komponenty.“

A je to celé v čudu.

Ne, frontendista nemůže být na rychlost načítání sám. O její důležitosti musí být přesvědčený celý tým.

Mohlo by pomoci zařadit aktuální rychlost načítání do dashboardu, co všichni sledují. Hned vedle konverzního poměru. Fakt.

Její vyhodnocování se dá zautomatizovat. Nástroje jako [PageSpeeed Insights](https://developers.google.com/speed/pagespeed/insights/) nebo [WebpageTest](http://www.webpagetest.org/) mají svá API. Tak jako programátoři pouští před publikováním verze unit testy, pouštějte testy rychlosti načítání.
