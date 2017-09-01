# Instalace ekosystému Node.js pro použití na frontendu

Node.js na frontendu potřebujeme hlavně kvůli usnadnění vývojářské práce a správě vývojářských závislostí.

## Nástroje, které si nainstalujeme

- Node.js – běh Javascriptu na příkazové řádce.
- NPM (Node Package Manager)  – správce javascriptových balíčků.
- [Grunt](grunt.md) – sestavovač nebo buildovač; nástroj pro běh vývojářských úloh.

Někdo si může oblíbit i další nástroje tohoto ekosystému, třeba Bower, správce frontend balíčků. Nebo například automatizátor Yeoman, Gulp nebo WebPack. Mohou být velmi užitečné, ale pro zjednodušení se jim tady nebudeme věnovat.

![Node.js](dist/images/original/node-js.svg)

Budeme pracovat s příkazovou řádkou, takže se hodí znát její základy: 

- Návod pro Windows: „Starting to use the Command Prompt“. [vrdl.in/6w1a0](http://dosprompt.info/basics.asp)
- Návod pro Linux &amp; Mac: „How to Use Terminal: The Basics“. [vrdl.in/uo3m2](http://mac.appstorm.net/how-to/utilities-how-to/how-to-use-terminal-the-basics/)

## Node.js a NPM

NPM (Node Package Manager) je balíčkovací systém Node.js. Ten musíte stáhnout a nainstalovat jako první. 

Jednoduchý postup instalace pro všechny platformy je popsaný na webu Node.js: [nodejs.org/en/download](https://nodejs.org/en/download/). 

Podívejme se ale i na lepší postupy.

### Postup pro Windows

1. Nainstalujte Git do příkazové řádky. V kroku „Adjusting your PATH environment“ zkontrolujte zatržení „Run Git from the Windows Command Prompt“. [git-scm.com/downloads](http://git-scm.com/downloads)
2. Nainstalujeme Node.js. [nodejs.org/en/download](https://nodejs.org/en/download/)

### Postup pro Mac OS a Linux: NVM, nebo hraní s uživatelskými právy 

- Ideální varianta – pomocí NVM (Node Version Manager). Nainstalovat jej není úplně přímočaré, ale má to dvě výhody. Na vývojářské mašině vám může souběžně běžet více verzí Node a NPM najednou. A pak – ušetříte si opruz s administrátorskými právy z méně optimálních variant. [github.com/creationix/nvm](https://github.com/creationix/nvm)
- Druhá možnost je buď hrát si s uživatelskými oprávněními ve výchozím NPM adresáři nebo ho umístit jinam. [vrdl.in/4hlaw](https://docs.npmjs.com/getting-started/fixing-npm-permissions)
- Třetí, úplně nejhorší varianta pak je spouštění instalace balíčků v administrátorském režimu (`sudo npm install …`) pokaždé, když vám NPM zahlásí problém s právy (`npm ERR! Attempt to unlock …`). Autor NPM o tomhle postupu údajně prohlásil, že je bezpečný jako nechat se stříhat motorovou pilou. Což sedí.

Máte nainstalováno? Jestli vše funguje, zjistíte příkazem pro zobrazení verze NPM:

```bash
npm -v
```

Všechny ostatní nástroje se pak instalují jako Node balíčky.

## Grunt, Bower a další Node balíčky

Budete používat [sestavovač Grunt](grunt.md)? V příkazové řádce potřebujete globálně nainstalovat balíček `grunt-cli`:

```bash
npm install -g grunt-cli
```

A co frontend balíčkovač Bower? To už je jednoduché. Opět jej nainstalujeme globálně:

```bash
npm install -g bower
```

Úplně stejným způsobem si pak můžete nainstalovat Grunt pluginy, alternativní sestavovač Gulp nebo třeba Webpack.

## Grunt pluginy

```bash
npm install <nazev-pluginu> --save-dev
```

Všimněte si, že už neinstalujeme globálně – bez přepínače `-g`. Ano, Grunt pluginy nebo třeba Bower balíčky instalujeme ke konkrétnímu projektu. Zároveň je chceme uložit do konfiguračních souborů balíčkovacího systému (`packages.json`).

Pro inspiraci: Moje tipy na Grunt pluginy. [vrdl.cz/p/grunt-pluginy](https://www.vzhurudolu.cz/prirucka/grunt-pluginy) 

Jste na Windows? Pak pozor, některé Grunt pluginy vyžadují poněkud speciální péči. Například tyto dva:

- PhantomJS, na kterém závisí třeba plugin pro generování kritického CSS. [vrdl.in/fa8jb](http://attester.ariatemplates.com/usage/phantom.html)
- ImageMagick, který zase potřebují pluginy pro práci s obrázky jako grunt-contrib-imagemin. [vrdl.in/ti9jp](http://www.imagemagick.org/script/binary-releases.php)


## Bower balíčky

```bash
bower install <nazev-pluginu> --save
```

`--save-dev` přepínač uloží plugin do vývojářských závislostí. U začátečníků se používá hlavně v souvislosti s Gruntem a jeho pluginy. Ty instalujeme pomocí NPM.

Pokud bychom instalovali jQuery, půjde o uživatelskou závislost. Použijeme `--save` přepínač. Pro takové závislosti se více hodí Bower.

## Tahák pro práci s balíčkovacími systémy

Bower i NPM mají naštěstí podobné příkazy:

```bash

# Vyhledávání balíčku v centrálním repozitáři:
npm/bower search jquery-ui

# Zobrazit detaily o balíčku:
npm view jquery-ui
bower info jquery-ui

# Instalace všech balíčků projektu:
npm/bower install
# Instalace balíčku a přidání do uživatelských závislostí:
npm/bower install jquery-ui --save
# Instalace balíčku a přidání do vývojářských závislostí:
npm/bower install jquery-ui --save-dev
# Instalace specifické verze balíčku:
npm/bower install jquery-ui@1.11.x

# Aktualizace všech balíčků:
npm/bower update

# Výpis stromu závislostí:
npm/bower list
# Výpis stromu závislostí a verze konkrétního balíčku:
npm/bower list jquery-ui

# Odstranění balíčku:
npm/bower uninstall jquery-ui

# Smazání cache. Hodí se v případě reinstalace sady balíčků:
npm cache clean

# Zobrazení balíčků, které je potřeba aktualizovat:
npm outdated
bower list

# Nápověda:
npm help

```

## Vyzkoušejte si to

Nainstalováno? Pokud nemáte nic lepšího po ruce, vezměte příklad ze školení Dnešní webová kodéřina a postupujte podle návodu. [git.io/vMqaj](https://github.com/machal/polaroid-example#instalace-projektu)

