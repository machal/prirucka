# Grunt.js: plnohodnotný sestavovací nástroj

Grunt si říká „The JavaScript Task Runner“. Není to nic jiného než skript sloužící webovým vývojářům. Automatizuje opakující se nebo nudné úkoly.

Pokud si rádi šetříte práci, je Grunt naprosto návyková záležitost.

![Grunt.js](../dist/images/original/grunt.jpg)

## Jak Grunt funguje?

V praxi to vypadá tak, že si něco spustíte na příkazové řádce, ono vám to hlídá změny v souborech a po jejich provedení vyvolá nějaké akce. Další úlohy, třeba nahrání webu na server, se zase spouštějí ručně.

<div class="related web-only" markdown="1">
- [NPM a Node.js: Rozcestník odkazů](rozcestnik-npm-node.md)
</div>

Jednoduchým příkladem budiž minifikace CSS, JS souborů. Nebo jejich spojování do jednoho kvůli šetření requestů pro zvýšení rychlosti načítání. Nebo zpracování preprocesorového kódu do CSS. Grunt sám o sobě nic neumí, to až stovky existujících pluginů z něj dělají tu velkou věc.

Navíc jeho konfigurační soubor (`Gruntfile.js`) verzujete, takže nastavení úloh sdílíte se všemi členy týmu. Nemusíte se tak například bát, že jeden vývojář kompiluje LESS kód jedním způsobem a druhý jiným. A úlohu, kterou si napíše jeden lenivý vývojář pro šetření práce, okamžitě sdílí celý tým. 

## Jak si Grunt nainstalovat?

Je dobré hned na začátku zmínit, že pro používání Gruntu musíte alespoň trochu kamarádit s příkazovou řádkou. Žádné pokročilé vědomosti ale potřeba nejsou. Kolem příkazové řádky chodím po špičkách, s Gruntem jsem se ale spřátelil docela rychle.

Budete potřebovat [nainstalovaný Node.js](node-instalace.md) a [Node Package Manager (NPM)](npm.md):

Globálně si pomocí NPM nainstalujete rozhraní Gruntu pro příkazovou řádku:

```bash
npm install -g grunt-cli
```

Pak si nainstalujete některý z pluginů, třeba pro kompilaci LESS do CSS:

```bash
npm install grunt-contrib-less --save-dev
```

Z pluginů pak vytváříte Grunt úlohy. Tady je ukázka jednoduchého `Gruntfile.js`:

```javascript
module.exports = function(grunt) {
  "use strict";
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Kompilace z LESS do CSS:

    less: {
      default: {
        files: {
          'dist/css/style.css':
          'src/less/index.less'
        }
      }
    },

    // Vytvoření minifikovaného CSS pro produkci:

    cssmin: {
      css: {
        files: {
          'dist/css/style.min.css':
          'dist/css/style.css'
        }
      }
    },

    // Sledování změn v LESS souborech:

    watch: {
      less: {
        files: 'src/less/**/*.less',
        tasks: ['css']
      }
    }
  });

  // Alias úlohy:

  grunt.registerTask('css', ['less', 'cssmin']);
  grunt.registerTask('default', ['watch']);
};
```

Nejdříve nakonfigurujeme pluginy `less`, `cssmin` a `watch`. Pak z nich vytvoříme „alias úlohy“ `css` a `default`.

Když tedy začínáme práci na projektu, příkazem `grunt` pustíme `default` úlohu a začnou se nám sledovat změny v souborech.

Když už tedy máme `Gruntfile.js` s konfigurací, můžete Gruntu říct, aby vám zobrazil všechny dostupné příkazy: 

```bash
grunt --help
```

To by pro začátek mohlo o Gruntu stačit. Tady jsou odkazy:

- Homepage: [gruntjs.com](http://gruntjs.com/).
- Seznam Grunt pluginů pro inspiraci: [vrdl.cz/p/grunt-pluginy](https://www.vzhurudolu.cz/prirucka/grunt-pluginy).

## Grunt versus Gulp

Konkurenční nástroj – Gulp – umí v zásadě totéž co Grunt, jen je v základu rychlejší a konfigurace úloh provádí pomocí javascriptového kódu. Je proto snadnější v něm věci zobecňovat, a tak je vhodnější pro programátory nebo větší projekty. Grunt je zase přehlednější pro CSS kodéry a začátečníky.

Více na [gulpjs.com](http://gulpjs.com/).
