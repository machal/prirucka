# Buildování: Prepros, Grunt, Gulp

Skoro vždy se nám na frontendu hodí provádění nějakých operací nad zdrojovými kódy. CSS chceme kompilovat z preprocesoru, pak ještě třeba minifikovat. Javascriptové soubory chceme zmenšit a spojit. Obrázky chceme datově optimalizovat a slepit do jedné „CSS sprite“. 

Zdrojové soubory tedy v HTML kódu nelinkujeme prohlížečům přímo. Nahradily je optimalizované distribuční verze. No a pro vytvoření distribučních verzí potřebujeme sestavovací (buildovací) nástroje.

Sestavovací nástroje pro webový frontend jsou dvojího typu:

- zjednodušené – snadněji se používají, ale mají omezený rozsah funkcí (Prepros, CodeKit a další)
- plnohodnotné – rozsahem funkcí téměř neomezené, ale začátečníci nebo neprogramátoři se do nich dostávají hůř (Grunt, Gulp a další)

## Prepros

Zástupce zjednodušených buildovacích nástrojů. Obvykle doporučuji začít s ním, protože je multiplatformní a pro jeho ovládání je jen potřeba umět klikat.

![Prepros](dist/images/original/prepros.jpg)

Kromě všech základních úkolů nad CSS, Javascripty a obrázky umí aktualizovat weby přes FTP a provádět synchronizované prohlížení webu na více zařízeních.

## Grunt

Je dobré hned na začátku zmínit, že pro používání Gruntu musíte alespoň trochu kamarádit s příkazovou řádkou. Žádné pokročilé vědomosti potřeba nejsou. Kolem příkazové řádky chodím po špičkách, s Gruntem jsem ale spřátelil docela rychle.

Grunt si globálně nainstalujete pomocí NPM (Node Package Manager)…

```bash
npm install -g grunt-cli
```

… a pak si nainstalujete některý z pluginů, třeba pro kompilaci LESS do CSS:

```bash
npm install grunt-contrib-less --save-dev
```

Z pluginů pak vytváříte Grunt úlohy. Dělá se to souborem `Gruntfile.js`. Tady je jeho velmi zjednodušený základ:

```javascript
module.exports = function(grunt) {
  "use strict";
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      default: {
        files: {
          'dist/css/style.css':
          'src/less/index.less'
        }
      }
    },

    cssmin: {
      css: {
        files: {
          'dist/css/style.min.css':
          'dist/css/style.css'
        }
      }
    },

    watch: {
      less: {
        files: 'src/less/**/*.less',
        tasks: ['css']
      }
    }
  });

  grunt.registerTask('css', ['less', 'cssmin']);
  grunt.registerTask('default', ['watch']);
};
```

Nejdříve nakonfigurujeme pluginy `less`, `cssmin` a `watch`, pak z nich vytvoříme „alias úlohy“ `css` a `default`, ke kterým pak můžeme přidávat frontu dalších úloh.

Když tedy začínáme práci na projektu, příkazem `grunt` pustíme `default` úlohu a začnou se nám sledovat změny v souborech.

Více na [gruntjs.com](http://gruntjs.com/).

Seznam Grunt pluginů je pro inspiraci na [vrdl.cz/prirucka/grunt-pluginy](http://www.vzhurudolu.cz/prirucka/grunt-pluginy).

## Gulp

Gulp umí v zásadě totéž co Grunt, jen je v základu rychlejší a konfigurace úloh provádí pomocí javascriptového kódu. Je proto snadnější v něm věci zobecňovat a je tedy vhodnější pro programátory nebo větší projekty.

Více na [gulpjs.com](http://gulpjs.com/).
