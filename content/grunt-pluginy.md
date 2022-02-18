# 29 užitečných pluginů pro Grunt

Pozor, vybraná devětadvacítka je dlouhá jako týden před výplatou. Berte ji ale jako zdroj inspirace, pokud Grunt nevyužíváte naplno nebo teprve začínáte. Takže se množství nelekejme a směle do toho.

<!-- AdSnippet -->

Předpokládám, že o [Gruntu](grunt.md) už něco víte a že máte lokálně nainstalovaný [Node.js](node-instalace.md).


## CSS

Pro práci s CSS se může hodit PostCSS a jeho pluginy. Pro pokročilejší pak preprocesory jako Sass nebo LESS.

### PostCSS

[PostCSS](postcss.md) můžete využít jako jediný nástroj pro zpracování CSS nebo jako doplněk k preprocesoru. Je to plugin co umožňuje běh řadě dalších pluginů. Ty v textu následují. [Github](https://github.com/nDmitry/grunt-postcss)

### Autoprefixer: doplňování prefixů

S [prohlížečovými prefixy](prefix.md) dnes už takové peklo neprožíváme. I tak se ale hodí jejich vkládání automatizovat. [Github](https://github.com/postcss/autoprefixer).

### PixRem: `px` fallbacky k `rem`

Nová CSS [jednotka `rem`](css3-jednotky.md) je úžasná, ale potřebujete náhradní řešení pro starší prohlížeče. Náhradní řešení? Ano, zní to jako úkol pro automatizaci. [Github](https://github.com/robwierzbowski/node-pixrem).

### Stylelint: kontrola stylů

Moc pěkná a velmi dobře konfigurovatelná kontrola CSS oproti vašim týmovým standardům. [Web](https://stylelint.io/). [Výchozí konfigurace](https://github.com/stylelint/stylelint-config-standard).

### CriticalCSS: vytažení kódu nad zlomem stránky

Vygenerování [kritického CSS](https://www.vzhurudolu.cz/blog/35-critical-css), které zobrazuje design nad zlomem stránky. Skvělá věc pro vložení této části jako blok dovnitř `<style>` tagu. Ve výsledku zařídí rychlé zobrazení stránky i na mobilech. [Github](https://github.com/filamentgroup/grunt-criticalcss).

### CSSnano: zmenšení objemu CSS souboru

Minifikovat céeseska umí i jiné nástroje. CSSnano je ale navržený pro PostCSS, což chceme. Navíc je velmi konfigurovatelný. [Web](http://cssnano.co/).

<!-- AdSnippet -->

### Styleguide: generování dokumentace ze stylů

Styledocco nebo KSS, které tahle úloha využívá, vytvářejí příručky stylů rovnou z CSS nebo zdrojáků napsaných v preprocesorech. [Github](https://github.com/indieisaconcept/grunt-styleguide).

### Kompilace LESSu, SASSu a Stylusu

To už všichni znáte, vím. [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less), [grunt-sass](https://github.com/sindresorhus/grunt-sass) a [grunt-contrib-stylus](https://github.com/gruntjs/grunt-contrib-stylus) pro kompilaci [CSS preprocesorů](https://www.vzhurudolu.cz/blog/12-css-preprocesory-1) jsou naprosto obligátní. 

<div class="related web-only" markdown="1">
- [NPM a Node.js: Rozcestník odkazů](rozcestnik-npm-node.md)
</div>


## Javascript

Vývojáři javascriptových aplikací budou používat daleko více nástrojů. Zmíním tady alespoň ty základní pro práci na prezentačních webech.

### Concat: spojování JS souborů

Aby se nám weby načítaly rychle, chceme co nejméně requestů a proto spojujeme Javascripty do jednoho souboru a teprve ten linkujeme z HTML kódu stránky. [Github](https://github.com/gruntjs/grunt-contrib-concat).

### Uglify: zmenšování JS souborů

Soubory spojené pomocí contrib-concat pak ještě v produkční verzi minifikujeme. V Javascriptu je minifikace daleko efektivnější než v CSS a proto zde slovo „minifikace“ používám jen pro zjednodušení. Prostě uglify. [Github](https://github.com/gruntjs/grunt-contrib-uglify).

### JSHint: validace JS kódu

Jakou blbost napíšete do JS kódu zrovna dneska? [Github](https://github.com/gruntjs/grunt-contrib-jshint).

### Sestavování vlastní verzí knihoven

Posílat v produkčním kódu jen to co uživatel opravdu potřebuje je správné. Sestavovače jsou dostupné pro spoustu větších knihoven. Například [jQuery](https://www.npmjs.com/package/grunt-jquery-builder), [Bootstrap](https://www.npmjs.com/package/grunt-bootstrap) nebo [Modernizr](https://github.com/Modernizr/grunt-modernizr).



## HTML

To jen aby HTML nezávidělo stylům a javascriptům.

### HTMLmin: zmenšení datového objemu HTML

Na pomalém připojení šetříme každý bajt a tak tahle úloha není u statických webů od věci. Volba `removeComments` odstraní z kódu komentáře.  [Github](https://github.com/gruntjs/grunt-contrib-htmlmin).


## Obrázky

Práce s obrázky se automatizuje výborně. Můžete zmenšovat datový objem, generovat varianty nebo sprajty. 

### ImageMin: zmenšování obrázků

Minifikuje obrázky všeho typu. Mám odzkoušeno i na [vektorovém SVG](svg.md). [Github](https://github.com/gruntjs/grunt-contrib-imagemin)

### SVG2PNG: převod SVG do PNG

Pokud používáte SVG, kvůli starším prohlížečům můžete potřebovat náhradní řešení v PNG obrázcích. [Github](https://github.com/dbushell/grunt-svg2png).

### Responsive Images: generování zmenšenin obrázků

Generuje varianty například [pro `srcset` atribut](srcset-sizes.md). Nadefinujete velikosti, třeba takhle: `options: { sizes: [ { name: "small", width: 200, quality: 80 }, { name: "large", width: 600, quality: 80 } ] }`. Úloha vám pak vytvoří adresáře a do nich umístí zmenšeniny obrázků. Obvykle to sice u webů řeší backend, na statických stránkách je tenhle plugin ovšem k nezaplacení. [Github](https://github.com/andismith/grunt-responsive-images).

### Sprajty: grunt-spritesmith nebo grunt-sprite-packer

Generování obrázkových sprajtů je další fantastická příležitost pro automatizátory. Vyzkoušel jsem [grunt-sprite-packer](https://github.com/karfcz/grunt-sprite-packer) (i na SVG sprity) a mnozí chválí [grunt-spritesmith](https://github.com/Ensighten/grunt-spritesmith).


## Workflow

Grunt pluginy, které samy o sobě nic nedělají. Obvykle ale šetří čas nebo nahrazují jiné nástroje. 

### Watch: sledování změn v souborech

Čekatel a čmuchal `contrib-watch` je samozřejmě nepostradatelným středobodem celého Grunt vesmíru. Méně známé je třeba nastavení atBegin: true, které při startu úlohy vše provede tak jako by se soubory změnily. [Github](https://github.com/gruntjs/grunt-contrib-watch).

### BrowserSync: živý reload stránky a synchronizace mezi zařízeními

Fantastická věc. [Browsersync](browsersync.md) zařizuje reload stránky bez nutnosti mačkat reload tlačítko pomocí injektáže změněných CSSek. Zadruhé vám vyrobí malý webserver pro lokální testování a prozradí adresu, na které je web viditelný z mobilních zařízení. 

No a pak ještě – lusk! – a máte synchronizované procházení webem na všech připojených zařízeních. Včetně skrolování a odesílání formulářů prosím. Čtyři z pěti responzivních webařů doporučují! [Web](http://www.browsersync.io/docs/grunt/).

Podívejte se na video „Browsersync: živý náhled webu a synchronizace prohlížení“.

YouTube: [youtu.be/2DTP8MuW9rw](https://www.youtube.com/watch?v=2DTP8MuW9rw)

### Copy: kopírování souborů nebo adresářů

To se jako pisálek můžete snažit sebevíc, ale nedostanete ze sebe nic lepšího než „slouží ke kopírování souborů nebo adresářů". Blé. [Github](https://github.com/gruntjs/grunt-contrib-copy).

### FTPdeploy: upload projektu na FTP

Šikovná věc, kterou jsem užíval pro deployment malých projektů. Předtím než jsem propadl [FTP v Sublime](http://wbond.net/sublime_packages/sftp). [Github](https://github.com/zonak/grunt-ftp-deploy).

### PageSpeed: statistiky rychlosti načítání stránky

Googlí [Page Speed Insights](https://developers.google.com/speed/docs/insights/about) asi znáte. Vynikající záležitost pro audit načítání stránky. grunt-pagespeek vám do konzole vyplivne [hezký grafík](https://www.slideshare.net/fullscreen/tomasmusiol7/zakladni-nastroje-pro-automatizaci/15). [Github](https://github.com/jrcryer/grunt-pagespeed).

### Shell: jakýkoliv příkaz do příkazové řádky

Jako příklad autoři uvádění kompilaci Compass `compass compile` nebo získání aktuální větve `git branch`. Může se hodit! [Github](https://github.com/sindresorhus/grunt-shell)



## Grunt úlohy pro Grunt

Zrychlení běhu nebo ošetření místy zbytečné ukecanosti Gruntu nebo aplikace úloh jen na změněné soubory.

### jit-grunt: zrychlení načítání pluginů

JIT = Just In Time. Znalci v diskuzi pod článkem tvrdí, že dokáže pekelně zrychlit start Gruntu a běh každého tasku. Navíc není potřeba každý plugin ručně načítat pomocí `grunt.loadNpmTasks()`, což je tak trochu gruntovská psychiatrie. Mrkněte na [Github](https://github.com/shootaroo/jit-grunt).

<!-- AdSnippet -->

### load-grunt-tasks: automatické načtení pluginů

Načítat každý plugin pomocí `grunt.loadNpmTasks()` je samozřejmě dementní, ale naštěstí je tu psychiatrická pomoc v podobě tohoto tasku.  [Github](https://github.com/sindresorhus/load-grunt-tasks).

### time-grunt: čas běhu grunt úloh

Instatní odpověď na otázku „Proč to safra trvá tak dlouho?". [Github](https://github.com/sindresorhus/time-grunt).

### grunt-concurrent: běh více úloh najednou

Pomoc s během pomalých úloh jako je kompilování Sass nebo Coffee souborů. [Github](https://github.com/sindresorhus/grunt-concurrent).

### grunt-newer: aplikace úloh jen na změněné soubory

Něco jako `grunt.registerTask('js', ['newer:jshing, 'newer:uglify'])` například použijete když chcete kontrolovat a zmenšit jen změněné javascriptové soubory. [Github](https://github.com/tschaub/grunt-newer)



Hotovo. Máte další tipy? Poraďte do komentářů. 

