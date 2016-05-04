# Browsersync

Browsersync je velmi užitečný pomocník pro lokální vývoj webů. Pomáhá hned s několika činnostmi naráz:

1. Živé promítání změn do prohlížeče.
2. Synchronizace interakcí.
3. Vzdálené ladění stránky. 

## 1. Živé promítání změn do prohlížeče

Změny ve zdrojových souborech promítne rovnou do všech připojených prohlížečů. Netřeba obnovovat stránku.

Upravíte CSS nebo HTML soubor a změny se vám hned projeví v prohlížeči. Ano, bez obnovení stránky. To ostatně většina z vás zná z jiných nástrojů jako LiveReload.

Lokální verzi stránky si pak také můžete zobrazit v mobilním prohlížeči; BrowserSync vám poradí, kterou IP adresu vyťukat. A když pracovní verzi stránky používáte – klikáte na odkazy, vyplňujete formuláře, rolujete –, BrowserSync za vás tyto akce provádí na všech připojených zařízeních.

## 2. Synchronizace interakcí

Umí to s klikáním, rolováním stránky nebo taky vyplňováním formulářů. Zařízení prostě připojíte do stejné sítě a na určené adrese se vám zobrazuje stránka ovládaná stejným způsobem jako na primárním zařízení.

## 3. Vzdálené ladění stránky

V prohlížeči dostanete k dispozici jednoduchý nástroj podobný standardním DevTools, který umožňuje ladění HTML, CSS a JS kódu. Používá pro to [technologii Weinre](http://people.apache.org/~pmuellr/weinre/docs/latest/).

## Co dál umí?

- Přiškrcení sítě. Omezení rychlosti připojení kvůli testování.
- Zobrazení obrysů prvků, kvůli testování CSS layoutu. Používá [Pesticide](http://pesticide.io/).

Browsersync je Node.js komponenta, takže je kompatibilní [s Gruntem](grunt.md), Gulpem, ale i dalšími nástroji tohoto ekosystému. Je opensource a zdarma.

## Browsersync a Grunt

*TODO něco z recipes https://browsersync.io/docs/recipes/*

Nástroj je plně kompatibilní s Gruntem (i Gulpem), takže jej stačí nainstalovat a přidat konfiguraci podobnou této:

```javascript
browserSync: {
  dev: {
    bsFiles: {
      src : [
        'dist/css/*.css'
      ]
    },
    options: {
      watchTask: true,
      proxy: 'projekt.localhost'
    }
  }
}
```

Když pak úlohu spustíte, do příkazové řádky vypíše něco takového:

```bash
$ grunt browserSync
Running "browserSync:dev" (browserSync) task
[BS] Proxying: http://projekt.localhost
[BS] Access URLs:
 --------------------------------------
       Local: http://localhost:3000
    External: http://192.168.0.104:3000
 --------------------------------------
          UI: http://localhost:3001
 UI External: http://192.168.0.104:3001
 --------------------------------------
[BS] Watching files...
```

Takto BrowserSync pustí váš projekt na adrese `http://localhost:3000` jako proxy pro vaší lokálně nastavenou URL `projekt.localhost`.

Z mobilních zařízení připojených do stejné sítě je projekt dostupný na adrese `http://192.168.0.104:3000`.

Na stejných adresách a portu 3001 pak je vidět uživatelské rozhraní aplikace BrowserSync.

`watchTask: true` v nastavení úlohy říká, že soubory sledujete ještě `watch` pluginem (při změnách souborů nad nimi provádíte ještě další operace) a BrowserSync mu nesmí stát v cestě.

Více na [browsersync.io](http://www.browsersync.io/).
