# NPM a Node.js: Rozcestník odkazů

Node.js, serverový javascript, přinesl díky nástrojům pro příkazovou řádku možnost efektivně pracovat i nám frontendistům a frontendistkám.

Tenhle rozcestník se tedy soustředí na nástroje pro správu frontendových balíčků (NPM, Yarn) a nástroje pro automatizaci: Spouštěče úloh jako Grunt a Gulp nebo sestavovače jako je Webpack.

Tam, kde to jde, dávám přednost češtině. Samozřejmě, že to vždycky nejde.

<!-- TODO: uvod, proc automatizovat, prikazova radka  -->

<div class="row">

<div class="col w-50-sm" markdown="1">

## Node.js a balíčkovače {#node-balickovace}

- [ITNetwork.cz: Úvod do Node.js](node-instalace.md)  
<small>
Co to vlastně Node je?
</small>
- [Instalace Node.js a NPM](node-instalace.md)  
<small>
Jak to provést na Windows, Macu a Linuxu. Hraní s uživatelskými právy a NVM. Tahák pro práci s balíčkovacím systémem.
</small>
- [NPM: Základy a příkazy](npm.md)  
<small>
Instalace, akturalizace, struktura adresářů a základní příkazy pro NPM.
</small>
- [Soubor package.json](package-json.md)  
<small>
Manifest závislostí projektu. Co je obsahem souboru a jak definovat závislosti?
</small>
- [Soubor package-lock.json](package-lock-json.md)  
<small>
„Lockfile“. Soubor, který uchovává přesné informace o instalovaných balíčcích. Neupravuje se, ale je dobré jej znát.
</small>
- [SemVer: Co je sémantické verzování](semver.md)  
<small>
Potřebujete znát také principy sémantického verzování. Jaké informace jsou uložené v číslech verze 1.2.3?
</small>
- [Flavio Copes: Yarn – Introduction](https://flaviocopes.com/yarn/) [EN]  
<small>
Co je Yarn, konkurence NPM? A základy – jak Yarn nainstalovat, spravovat balíčky a tak dále.
</small>
- [Rising Stack: Yarn vs. NPM](https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/) [EN]  
<small>
Yarn ve své době představil řadu inovací, ale jsou pro přechod silné důvody i v roce 2018? Podle autora už moc ne.
</small>
- [Bower](bower.md)  
<small>
Už [mrtvý nástroj](https://www.vzhurudolu.cz/blog/91-bower-mrtvy), který sloužil pro správu frontendových (nikoliv jen javascriptových) balíčků. Je dnes prakticky plně nahrazený nástroji NPM nebo Yarn.
</small>

</div>

<div class="col w-50-sm" markdown="1">

## Nástroje: Sestavovače a spouštěče {#nastroje}

- [Grunt](grunt.md)  
<small>
První spouštěč úloh („task runner“) na příkazové řádce, který je do dnes pro jednodušší použití naprosto v pohodě k užití.
</small>
- [Užitečné pluginy pro Grunt](grunt-pluginy.md)  
<small>
Co všechno je možné pomocí Gruntu dělat: Spojovat CSS, JS souboury, zmenšovat obrázky, prostě usnadnit vývoj.
</small>
- [Sitepoint.com: Introduction to Gulp.js](https://www.sitepoint.com/introduction-gulp-js/) [EN]  
<small>
Gulp je spouštěč úloh na příkazové řádce podobný Gruntu, který se hodí na komplexnější projekty. V článku je pěkný úvod krok za krokem včetně popisu konfigurace.
</small>
- [CSSTricks.com: Why NPM Scripts](https://css-tricks.com/why-npm-scripts/) [EN]  
<small>
Také přímo v NPM si můžete napsat skripty, které usnadňují práci s nástroji příkazové řádky. 
</small>
- [Ackee.cz: Webpack](https://www.ackee.cz/blog/moderni-web-development-webpack/)  
<small>
Webpack je sestavovač, „bundler“: Nástroj pro práci s JS, CSS nebo obrázkovými zdroji a vytváření balíčků pro prohlížeč.
</small>

</div>

</div>

## Další

- [Podcast: S Riki Fridrichem o NPM, Yarnu a dalších nástrojích JS světa](https://www.vzhurudolu.cz/podcast/84-podcast-npm-yarn)  
<small>
Rozhovor o nových nástrojích ekosystému kolem Node.js a javascriptu.
</small>
- [Video: NPM pre lenivých kóderov (Riki Fridrich)](https://www.vzhurudolu.cz/podcast/84-podcast-npm-yarn)  
<small>
Jak efektivně pracovat s NPM.
</small>
- [Podcast Brus kódu: Epizoda 2: S Riki Fridrichem o automatizaci s Grunt.js a CoffeeScriptu](http://bruskodu.cz/epizoda/2/)  
<small>
Jak efektivně pracovat s NPM.
</small>



<!-- AdSnippet -->
