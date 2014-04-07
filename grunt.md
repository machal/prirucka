# Grunt.js

[Grunt](http://gruntjs.com/) *[grŭnt]* si říká „The JavaScript Task Runner“ a má v logu divočáka. Ale není to nic jiného než robot sloužící webovým vývojářům. Automatizuje opakující se nebo nudné úkoly.

V praxi to vypadá tak, že si něco spustíte na příkazové řádce, ono vám to hlídá změny v souborech a po jejich provedení vyvolá nějaké akce. Další úlohy se zase spouštějí ručně, třeba nahrání webu na server.

Jednoduchým příkladem budiž minifikace CSS, JS souborů. Nebo jejich spojování do jednoho kvůli šetření requestů pro zvýšení rychlosti načítání. Nebo zpracování [preprocesorového](/blog/12-css-preprocesory-1) kódu do CSS či kompilace CoffeeScriptu do JavaScriptu. Zdá se vám to málo? Pak vězte, že [úloh jsou stovky](http://gruntjs.com/plugins) – a je docela snadné si napsat vlastní.

Důvody proč mám Grunt rád nejlíp ukáže seznam úloh co využívám nebo se na to v nejbližší době chystám. 

## Grunt úlohy co využívám

* Kompilace LESS, SASS, Stylus do CSS. To by ale nedávalo smysl bez automatického sledování změn pomocí pomocí [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch). Nesmím zapomenout na generování [Source Maps](http://roots.io/using-less-source-maps/).
* Minifikace CSSek pomocí [cssmin](https://github.com/gruntjs/grunt-contrib-cssmin) a Javascriptů pomocí [uglify](https://github.com/gruntjs/grunt-contrib-uglify).
* Spojování souborů pomocí [concat](https://github.com/gruntjs/grunt-contrib-concat).
* Automatický reload prohlížeče pomocí [livereload](https://github.com/gruntjs/grunt-contrib-watch#optionslivereload) funkce watch úlohy. Daleko lepší je to ovšem pomocí injektáže změněného kódu bez reloadu. [grunt-browser-sync](https://github.com/shakyshane/grunt-browser-sync) je boží!
* Menší projekty nahrávám na FTP pomocí [ftp-deploy](https://github.com/zonak/grunt-ftp-deploy). V Gruntu můžete tasky spojovat, takže můj vlastní `grunt deploy` spojí, minifikuje JS/CSS a nahraje soubory na FTP.
* Pomocí [grunt-styledocco](https://www.npmjs.org/package/grunt-styledocco) generuji u větších projektů dokumentaci k LESS komponentám. 
* [legacssy](https://github.com/robinpokorny/grunt-legacssy) Robina Pokorného za mě řeší fallback fallback pro IE8 když kód píšu mobile first.
* Hrozně se mi líbí [grunticon](http://blog.iconfinder.com/get-started-with-grunticon/), který řeší kompletní workflow (minifikaci, fallbacky v PNG i generování CSS kódu), pokud chcete ikonky ve vektorech. Chystám se vyzkoušet.
* [autoprefixer](http://css-tricks.com/autoprefixer/) zase doplňuje [CSS3 prefixy](http://www.vzhurudolu.cz/prirucka/prefix), takže jsou vždy aktuální (podle CanIUse.com) a není potřeba využívat neaktuálních CSS3 mixinů. 

To jde, ne? A to si myslím, že jsem jen mírně pokročilý uživatel Gruntu a čeká mě ještě hooodně objevování.


## Proč Grunt?

Pokud si rádi šetříte práci, je Grunt naprosto návyková záležitost. 

Dobré je ale zmínit, že pro používání Gruntu musíte alespoň trochu kamarádit s příkazovou řádkou. Žádné pokročilé vědomosti potřeba nejsou. Autor  článku kolem příkazové řádky chodí po špičkách, ale s Gruntem se zkamarádil docela rychle.

Grunt má alternativy v podobě GUI robotů typu CodeKit, Prepros nebo Koala. Jenže ty umí fakt jen ty základní úlohy typu kompilace, minifikace, spojování. Maximálně ještě tvorbu [Source Maps](http://roots.io/using-less-source-maps/).

Grunt je robot nevykleštěný. Umí toho daleko víc. Navíc jeho konfigurák (`Gruntfile.js`) verzujete, takže nastavení úloh sdílíte se všemi členy týmu. Nemusíte se tak bát, že jeden vývojář kompiluje LESS kód jedním způsobem a druhý jiným. A úlohu, kterou si napíše jeden lenivý vývojář pro šetření práce, sdílí celý tým.

## Jak si Grunt rozjet?

Popíšu to velice zjednodušeně. Více je [v dokumentaci Gruntu](http://gruntjs.com/getting-started).

1. První co potřebujete je [instalace Node.js](http://nodejs.org/). Pak byste měli mít k dispozici instalátor Node balíčků, [npm](https://www.npmjs.org/).
* Druhý krok je nainstalovat (jako administrátor) samotný Grunt: `npm install -g grunt-cli`
* Jednotlivé Grunt úlohy ([pluginy](http://gruntjs.com/plugins)) se pak instalují jako další Node balíčky už do konkrétního adresáře. Třeba kompilátor LESSu takhle: `npm install grunt-contrib-less --save-dev`
* V adresáři projektu se vám takhle vytvoří konfigurák se seznamem Node balíčků, které používáte — `packages.json`.
* Teď už stačí jen nakonfigurovat Grunt úkoly. Dělá se to souborem `Gruntfile.js`, který byste si měli napsat sami. [Tady je popsaný víc](http://gruntjs.com/sample-gruntfile)
* Když už tedy máte nainstalovaný Node, nainstalovaný Grunt, nainstalované Node balíčky pro Grunt úlohy a `Gruntfile` s konfigurací, můžete se Gruntu říct, aby vám zobrazil všechny dostupné příkazy: `grunt --help`.






