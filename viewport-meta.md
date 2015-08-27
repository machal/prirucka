# Meta tag Viewport

Zjednodušeně (ale lidsky) řečeno slouží k informování prohlížeče, zda a jak jste web připravili pro mobilní zařízení. 

![TODO img](image_1.png)

Začnu bez vysvětlování správným výchozím meta viewport zápisem:

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

K tomu si do CSS doplňte:

```
@-ms-viewport { width: device-width; }
```

Tohle vám u drtivé většiny responzivních webů bude stačit. Pokud ale máte 5 minut času, pojďme si říct proč meta viewport zapisovat právě takhle. 

## `<meta name="viewport" content="…">`

Tahle nestandardizovaná meta značka obsahuje instrukce, které prohlížeč použije pro výchozí nastavení viewportu a úroveň zoomu.

Do atributu content je možné dávat různé vlastnosti a jejich hodnoty.

### `width`

Nastaví šířku layoutového viewportu v pixelech. Nejčastěji využívaná hodnota device-width pak nastaví šířku layoutového viewportu (plocha do které se zobrazuje stránka) na šířku ideálního viewportu (výřez, přes který na stránku koukáte).Pokud použijete hodnotu, např. `width=400`, nastavíte šířku layoutového viewportu na 400 pixelů. To snad nebudete muset dělat. 

### `initial-scale`

Nastaví výchozí zoom, ale také šířku layoutového viewportu. Ve výsledku dělá zápis `initial-scale=1` totéž jako `width=device-width`. 

### `user-scalable`

Hodnota `no` zakazuje uživateli jakkoliv zoomovat. Prosím, nepoužívejte ji. Zoomování je na mobilních zařízení [fakt potřeba](http://ux.stackexchange.com/a/37513). Ať už jde o zvětšení hůř navržené stránky, zvětšení textu v horších podmínkách nebo prostě jen touhu vidět detaily z nějakého obrázku — přibližování a oddalování prostě potřebují všichni uživatelé. 

### `minimum-scale`/`maximum-scale`

Minimální a maximální možný zoom. Netuším, k čemu by mohlo být dobré. Pokud máte praktické využití, napište mi je do komentářů, pěkně prosím.

## Proč `width=device-width` a zároveň `initial-scale=1`?

Hodnota `width=device-width` je instrukce pro sjednocení [viewportu layoutu s ideálním viewportem](veiwport-mobily.md). 

Lidsky řečeno – mobilní prohlížeč vaši stránku nevykreslí do přednastaveného viewportu (u většiny mobilních prohlížečů 980 pixelů), ale použije [ideální viewport pro dané zařízení](http://www.quirksmode.org/mobile/metaviewport/#link7) (např. pro Android prohlížeč na Samsungu Galaxy S4 je to 360 pixelů v režimu portrait).

`width=device-width` má ovšem jednu známou nevýhodu – Safari na iOS pak jako ideální viewport v režimu zobrazení na šířku použije ideální viewport pro výšku. Ano, přesně tohle je příčinou toho problému se „zvětšováním" stránky v landscape režimu na iOS.

Je zde jedna záchrana – použít namísto toho zápis `initial-scale=1`. Světe div se, na všech mobilních zařízeních má ten samý efekt jako `width=device-width`. Světe div se podruhé, Safari na iOS už v landscape režimu renderuje do ideálního landscape viewportu. 

A světe, teď se nemůžeš divit, má to svoje nevýhody. Internet Explorer se na mobilních Windows 8 totiž začne chovat úplně stejně špatně jako mobilní Safari.

Nevadí. Problémy vyřešíme tím, že použijeme obě hodnoty — `width=device-width, initial-scale=1`.

## Zavináčové pravidlo @viewport v CSS

Zdá se to logické. Instrukce pro způsob zobrazování, ke kterým meta tag viewport patří, by bylo lepší zapisovat v CSS, že ano? Se zápisem `@viewport { }` [přišla Opera](https://dev.opera.com/articles/an-introduction-to-meta-viewport-and-viewport/), která ovšem následně zběhla k renderovacímu jádru Blink, takže jej už zase neumí. Používá jej sice mobilní Internet Explorer, ovšem jen jako doplněk k „meta viewport".

Pokud totiž použijeme zápis `width=device-width, initial-scale=1`, mobilní Explorer si jako ideální viewport z nějakých (fakt prapodivných) důvodů [nastaví kratší rozměr ideálního viewportu na ](https://www.facebook.com/groups/frontendisti/permalink/1580597372151781/)[320 pixelů](https://www.facebook.com/groups/frontendisti/permalink/1580597372151781/). Například na mojí testovací Lumii na 320x486 pixelů.  Ve skutečnosti je její ideální viewport 480×800 pixelů.

Zápis `@-ms-viewport { width: device-width; }` přidaný do CSS pak slouží k nastavení viewportu na ideální hodnoty. Chudinka Lumia pak stránky začne zobrazovat ve svém ideálním viewportu 480×800 pixelů.

Hotovo. Svět je složitý, já vím. Pokud si s viewporty chcete sami hrát, tady jsou moje testy na Codepenu: [bez meta viewport i @viewport](http://s.codepen.io/machal/debug/PwJyQV), [s meta viewport i @viewport](http://s.codepen.io/machal/debug/pfijm), [s meta viewport, ale bez @viewport](http://s.codepen.io/machal/debug/Eawbrr).
