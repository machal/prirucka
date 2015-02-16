# 29 užitečných Grunt pluginů a zároveň důvodů proč konečně zkusit automatizaci

Pozor, ta devětadvacítka je dlouhá jako týden před výplatou. Ale [kdo jednou zkusí](http://www.vzhurudolu.cz/kurzy/grunt-gulp), automatizaci s [Gruntem](grunt.md) (nebo klidně s Gulpem) neopustí. Takže se množství nelekejme a směle do toho.

## CSS

### 1. grunt-autoprefixer: doplňování prefixů

S [prohlížečovými prefixy](http://www.vzhurudolu.cz/prirucka/prefix) dnes už takové peklo neprožíváme. I tak se ale hodí jejich vkládání automatizovat. A s příchodem Autoprefixeru padá potřeba používat CSS3 mixiny v preprocesorech. Oblíbená vlastnost? Nastavení verzí prohlížečů, které chci podporovat. Výchozí jsou 2 verze zpět. Takhle to mám třeba u aktuálního většího projektu: options: `{ browsers: ['last 3 versions', 'ios 6', 'ie 7', 'ie 8', 'ie 9'] }`. [Github](https://github.com/nDmitry/grunt-autoprefixer).

### 2. grunt-pixrem: px fallbacky k rem

Nová CSS [jednotka rem](http://www.vzhurudolu.cz/prirucka/css3-jednotky) je úžasná, ale potřebujete náhradní řešení pro starší prohlížeče. Náhradní řešení? Ano, zní to jako úkol pro automatizaci. [Github](https://github.com/robwierzbowski/grunt-pixrem).

### 3. grunt-criticalcss: vytažení kódu nad zlomem stránky

Vygenerování části CSS kódu, která zobrazuje design nad zlomem stránky. Skvělá věc pro vložení této části jako blok dovnitř `<style>` tagu a ve výsledku rychlé načtení stránky i na mobilech. [Článek](http://www.filamentgroup.com/lab/performance-rwd.html). [Github](https://github.com/filamentgroup/grunt-criticalcss).

### 4. grunt-contrib-cssmin: zmenšení objemu CSS souboru

Minifikovat CSSka umí i preprocesory. `contrib-cssmin` ale dokáže zmenšovat lépe a navíc se hodí nechat preprocesor zkompilovat plnohodnotný stylopis kvůli debugování. [Github](https://github.com/gruntjs/grunt-contrib-cssmin).

### 5. grunt-uncss: odstranění zbytečného CSS

Skvělá věc pokud používáte [Bootstrap](http://www.vzhurudolu.cz/kurzy/bootstrap) a používáte jej špatně. Ale ocení myslím i pokročilí CSSkaři. [Github](https://github.com/addyosmani/grunt-uncss).

### 6. grunt-legacssy: verze CSS bez Media Queries

Užitečné, pokud pro rozchození responzivního CSS ve starších Explorerech nechcete nebo nemůžete použít [Respond.js](https://github.com/scottjehl/Respond). [Github](https://github.com/robinpokorny/grunt-legacssy).

### 7. Kompilace LESSu, SASSu a Stylusu

To už všichni znáte, vím. [contrib-less](https://github.com/gruntjs/grunt-contrib-less), [contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) a [contrib-stylus](https://github.com/gruntjs/grunt-contrib-stylus) pro kompilaci [CSS preprocesorů](http://www.vzhurudolu.cz/blog/12-css-preprocesory-1) jsou naprosto obligátní.  Jen nezapomeňte nastavit mapování zdrojáků ke zkompilovaným asemblerů… ach pardon… CSSkům pomocí [source maps](http://blog.teamtreehouse.com/introduction-source-maps).

### 8. grunt-styleguide: generování dokumentace 

Ale ne ledajaké dokumentace. Styledocco nebo KSS, které tahle úloha využívá, vytvářejí příručky stylů rovnou z CSS nebo zdrojáků napsaných v preprocesorech. [Github](https://github.com/indieisaconcept/grunt-styleguide).

## Javascript

### 9. grunt-contrib-concat: spojování JS souborů

Aby se nám weby načítaly rychle, chceme co nejméně requestů a proto spojujeme Javascripty do jednoho souboru a teprve ten linkujeme z HTML kódu stránky. [Github](https://github.com/gruntjs/grunt-contrib-concat).

### 10. grunt-contrib-uglify: zmenšování JS souborů

Soubory spojené pomocí contrib-concat pak ještě v produkční verzi minifikujeme. V javascriptu je minifikace daleko efektivnější než v CSS a proto zde slovo „minifikace" používám jen pro zjednodušení. Prostě uglify. [Github](https://github.com/gruntjs/grunt-contrib-uglify).

### 11. grunt-contrib-jshint: validace JS kódu

Jakou blbost napíšete do JS kódu zrovna dneska? Občas jsou hlášení `jshint` dost nesrozumitelná, proto pomůže web [jslinterrors.com](http://jslinterrors.com/). [Github](https://github.com/gruntjs/grunt-contrib-jshint). 

## HTML

### 12. grunt-contrib-htmlmin: zmenšení datového objemu HTML

Minifikace HTML – a proč jako? Na mobilním připojení šetříme každý bajt a tak tenhle task u statických webů není od věci. Volba removeComments odstraní z kódu komentáře. To jen aby HTML nezávidělo stylům a javascriptům. [Github](https://github.com/gruntjs/grunt-contrib-htmlmin).

## Obrázky

### 13. grunt-contrib-imagemin: zmenšování obrázků

Minifikuje JPG nebo PNG obrázky, ale s překvapivými výsledky mám odzkoušeno i na [vektorovém SVG](http://www.vzhurudolu.cz/prirucka/svg). [Github](https://github.com/gruntjs/grunt-contrib-imagemin)

### 14. grunt-svg2png: převod SVG do PNG

Pokud používáte SVG, kvůli starším prohlížečům potřebujete [náhradní řešení](http://www.vzhurudolu.cz/prirucka/svg#svg-v-html-jako-code-lt-img-gt-code) v PNG obrázcích. Pak SVG2PNG znáte. Pokud ne, brzy jej poznáte – to si pište. [Github](https://github.com/dbushell/grunt-svg2png).

### 15. grunt-responsive-images: generování zmenšenin obrázků

Nadefinujete varianty – třeba takhle: `options: { sizes: [ { name: "small", width: 200, quality: 80 }, { name: "large", width: 600, quality: 80 } ] }`. Úloha vám pak vytvoří adresáře a do nich umístí zmenšeniny obrázků. Obvykle to sice u webů řeší backend, na statických stránkách je tenhle plugin ovšem k nezaplacení. [Github](https://github.com/andismith/grunt-responsive-images).

### 16. Sprity: grunt-spritesmith nebo grunt-sprite-packer

Generování obrázkových sprajtů – další fantastická příležitost pro automatizátory. Vyzkoušel jsem [grunt-sprite-packer](https://github.com/karfcz/grunt-sprite-packer) (i na SVG sprity!) a mnozí chválí [grunt-spritesmith](https://github.com/Ensighten/grunt-spritesmith).

### 17. Ikony: grunticon nebo grunt-iconizr

Práce se soubory ikon, to jsou sprajty v bleděmodrém. V shortlistu mám [grunticon](https://github.com/filamentgroup/grunticon) a [grunt-iconizr](https://github.com/jkphl/grunt-iconizr). Zatím jsem nevyzkoušel v praxi, takže poraďte v komentářích.

## Workflow

### 18. grunt-contrib-watch: sledování změn v souborech

Čekatel a čmuchal `contrib-watch` je samozřejmě nepostradatelným středobodem celého Grunt vesmíru. Méně známé je třeba nastavení atBegin: true, které při startu úlohy vše provede tak jako by se soubory změnily. [Github](https://github.com/gruntjs/grunt-contrib-watch).

### 19. grunt-browser-sync: živý reload stránky a synchronizace mezi zařízeními

Fantastická věc. Jednak zařizuje reload stránky bez nutnosti mačkat reload tlačítko pomocí injektáže změněných CSSek. Zadruhé vám vyrobí malý webserver pro lokální testování a prozradí adresu, na které je web viditelný z mobilních zařízení. No a pak ještě – lusk! – a máte synchronizované procházení webem na všech připojených zařízeních. Včetně skrolování a odesílání formulářů prosím. Čtyři z pěti responzivních zubařů doporučují! [Web](http://www.browsersync.io/docs/grunt/).

### 20. grunt-contrib-copy: kopírování souborů nebo adresářů

To se jako pisálek můžete snažit sebevíc, ale nedostanete ze sebe nic lepšího než „slouží ke kopírování souborů nebo adresářů". Blé. [Github](https://github.com/gruntjs/grunt-contrib-copy).

### 21. grunt-ftp-deploy: upload projektu na FTP

Šikovná věc, kterou jsem užíval pro deployment malých projektů. Předtím než jsem propadl [FTP v Sublime](http://wbond.net/sublime_packages/sftp). [Github](https://github.com/zonak/grunt-ftp-deploy).

### 22. grunt-pagespeed: statistiky rychlosti načítání stránky

Googlí [Page Speed Insights](https://developers.google.com/speed/docs/insights/about) asi znáte. Vynikající záležitost pro audit načítání stránky. grunt-pagespeek vám do konzole vyplivne [hezký grafík](https://www.slideshare.net/fullscreen/tomasmusiol7/zakladni-nastroje-pro-automatizaci/15). [Github](https://github.com/jrcryer/grunt-pagespeed).

### 23. grunt-modernizr: vlastní build Modernizru

„Myšlenka Modernizru je moc krásná, ale využiju z něj setinovou část." – kolikrát jsem to jen [na školeních](http://www.vzhurudolu.cz/kurzy/webovy-frontend) slyšel! Pokud vás nebaví [ruční klikání](http://modernizr.com/download/), vybrat tu správnou část Modernizru pomůže tahle úloha. [Github](https://github.com/Modernizr/grunt-modernizr).

## Grunt úlohy pro… Grunt

### 24. jit-grunt: zrychlení načítání pluginů

JIT = Just In Time. Znalci v diskuzi pod článkem tvrdí, že dokáže pekelně zrychlit start Gruntu a běh každého tasku. Navíc není potřeba každý plugin ručně načítat pomocí `grunt.loadNpmTasks()`, což je tak trochu gruntovská psychiatrie. Mrkněte na [Github](https://github.com/shootaroo/jit-grunt). 

### 25. load-grunt-tasks: automatické načtení pluginů

Načítat každý plugin pomocí `grunt.loadNpmTasks()` je samozřejmě dementní, ale naštěstí je tu psychiatrická pomoc v podobě tohoto tasku.  [Github](https://github.com/sindresorhus/load-grunt-tasks).

### 26. time-grunt: čas běhu grunt úloh

Instatní odpověď na otázku „Proč to safra trvá tak dlouho?". [Github](https://github.com/sindresorhus/time-grunt).

### 27. grunt-concurrent: běh více úloh najednou

Pomoc s během pomalých úloh jako je kompilování Sass nebo Coffee souborů. [Github](https://github.com/sindresorhus/grunt-concurrent).

### 28. grunt-newer: aplikace úloh jen na změněné soubory

Něco jako `grunt.registerTask('js', ['newer:jshing, 'newer:uglify'])` například použijete když chcete kontrolovat a zmenšit jen změněné javascriptové soubory. [Github](https://github.com/tschaub/grunt-newer)

### 29. grunt-shell: jakýkoliv příkaz do příkazové řádky

Jako příklad autoři uvádění kompilaci Compass `compass compile` nebo získání aktuální větve `git branch`. Může se hodit! [Github](https://github.com/sindresorhus/grunt-shell)

Hotovo. A ani to nebolelo, viďte.

