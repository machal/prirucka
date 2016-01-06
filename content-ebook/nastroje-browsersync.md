# Živý náhled v prohlížeči: BrowserSync

BrowserSync je velmi užitečný pomocník pro lokální vývoj webů. Umožňuje synchronizovat změny v souborech s náhledem v prohlížeči a také na připojených zařízeních synchronizovat prohlížení webu.

Upravíte CSS nebo HTML soubor a změny se vám hned projeví v prohlížeči. Ano, bez obnovení stránky. To ostatně většina z vás zná z jiných nástrojů.

Lokální verzi stránky si pak také můžete zobrazit v mobilním prohlížeči; BrowserSync vám poradí, kterou IP adresu vyťukat. A když pracovní verzi stránky používáte – klikáte na odkazy, vyplňujete formuláře, rolujete –, BrowserSync za vás tyto akce provádí na všech připojených zařízeních.

## BrowserSync a Grunt

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
