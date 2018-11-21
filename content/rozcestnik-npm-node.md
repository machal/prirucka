# NPM a Node.js: Rozcestník odkazů

Node.js, serverový javascript, přinesl díky nástrojům pro příkazovou řádku možnost efektivně pracovat i nám frontendistům a frontendistkám.

Tenhle rozcestník se tedy soustředí na nástroje pro automatizaci. Tam, kde to jde, dávám přednost češtině. Samozřejmě, že vždycky to nejde.

Proč to vlastně všechno potřebujete?
- Protože si velmi usnadníte práci. Výstupem je totiž automatizace procesů vývojáře, např. minifikace JS souborů nebo převod z preprocesoru do čistého CSS.
- Protože vše sdílíte v týmu: Konfiguraci závislostí projektu, nastavení sestavovačů nebo spouštěčů…

<div class="row">

<div class="col w-50-sm" markdown="1">

## Node.js a balíčkovače {#node-balickovace}

Základní stavební kameny: Node.js a nástroje pro správu frontendových balíčků (NPM, Yarn).

- [Úvod do příkazové řádky](https://naucse.python.cz/lessons/beginners/cmdline/) [Zdroj: Nauč se Python]  
<small>
Terminál je věc, kterou je potřeba umět alespoň trochu ovládat.
</small>
- [Úvod do Node.js](https://www.itnetwork.cz/javascript/nodejs/uvod-do-nodejs) [ITNetwork.cz]  
<small>
Co to vlastně Node je? Javascript běžící na příkazové řadce.
</small>
- [Instalace Node.js a NPM](node-instalace.md)  
<small>
Jak to provést na Windows, Macu a Linuxu. Hraní s uživatelskými právy a NVM. Tahák pro práci s balíčkovacím systémem.
</small>
- [NPM: Základy a příkazy](npm.md)  
<small>
Instalace, aktualizace, struktura adresářů a základní příkazy pro NPM.
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
- [Yarn](https://flaviocopes.com/yarn/) [Flavio Copes, EN]  
<small>
Co je Yarn, konkurence NPM? A základy – jak Yarn nainstalovat, spravovat balíčky a tak dále.
</small>
- [Yarn vs. NPM](https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/) [Rising Stack, EN]  
<small>
Yarn ve své době představil řadu inovací, ale jsou pro přechod silné důvody i v roce 2018? Podle autora už moc ne.
</small>
- [Bower](bower.md)  
<small>
Už [mrtvý nástroj](https://www.vzhurudolu.cz/blog/91-bower-mrtvy), který sloužil pro správu frontendových (nikoliv jen javascriptových) balíčků. Je dnes prakticky plně nahrazený nástroji NPM nebo Yarn.
</small>

</div>

<div class="col w-50-sm" markdown="1">

## Sestavovače a spouštěče {#nastroje}

Spouštěče úloh na příkazové řádce jako Grunt a Gulp nebo sestavovače jako je Webpack.

- [Grunt](grunt.md)  
<small>
První spouštěč úloh („task runner“) na příkazové řádce, který je do dnes pro jednodušší použití naprosto v pohodě k užití.
</small>
- [Užitečné pluginy pro Grunt](grunt-pluginy.md)  
<small>
Co všechno je možné pomocí Gruntu dělat: Spojovat CSS, JS souboury, zmenšovat obrázky, prostě usnadnit vývoj.
</small>
- [Gulp.js](https://www.sitepoint.com/introduction-gulp-js/) [Sitepoint.com, EN]  
<small>
Gulp je spouštěč úloh na příkazové řádce podobný Gruntu, který se hodí na komplexnější projekty. V článku je pěkný úvod krok za krokem včetně popisu konfigurace.
</small>
- [Devstack postavený na Gulpu](https://github.com/actum/gulp-dev-stack) [Actum, EN]  
<small>
Jeden z devstacků (nastavení vývojářského workflow), který je dobře zdokumentovaný a je možné jej využít pro inspiraci.
</small>
- [NPM skripty](https://css-tricks.com/why-npm-scripts/) [CSSTricks.com, EN]  
<small>
Také přímo v NPM si můžete napsat skripty, které usnadňují práci s nástroji příkazové řádky. 
</small>
- [Webpack](https://www.ackee.cz/blog/moderni-web-development-webpack/) [Ackee.cz]  
<small>
Webpack je sestavovač, „bundler“: Nástroj pro práci s JS, CSS nebo obrázkovými zdroji a vytváření balíčků pro prohlížeč.
</small>

</div>

</div>

## Další {#dalsi}


- [Podcast: S Riki Fridrichem o NPM, Yarnu a dalších nástrojích JS světa](https://www.vzhurudolu.cz/podcast/84-podcast-npm-yarn)  
<small>
Rozhovor o nových nástrojích ekosystému kolem Node.js a javascriptu.
</small>
- [Video: NPM pre lenivých kóderov](https://www.youtube.com/watch?v=USC3o2FLts0) [Riki Fridrich]   
<small>
Jak efektivně pracovat s NPM.
</small>
- [Stavění dev stacku pro React](https://www.dzejes.cz/) [Vojtěch Mikšů]  
<small>
Starší texty, které ale mohou leckoho nakopnout správným směrem. Používá se zde NPM, Babel nebo Webpack.
</small>
- [Seriál o Node.js](https://www.zdrojak.cz/serialy/node-js-s-javascriptem-na-serveru/) [Zdroják]  
<small>
Opět je to starší a zabývá se to backendovým Node, ale první díly budou užitečné i pro frontendisty.
</small>

Zapomněl jsem na něco? Neváhejte mi napsat do komentářů nebo na sociální sítě.

<!-- AdSnippet -->
