# Rozlišení displeje a jak jej zjistit?

Rozlišení obrazovky z pohledu webaře moc zajímavé není, protože weby vykreslujeme do okna prohlížeče. Nicméně – možnosti, jak toto změřit pochopitelně máme.


## Zjištění JavaScriptem {#JS}

- `screen.width` a `screen.height` vrací rozlišení obrazovky.
- `screen.availWidth` a `screen.availHeight` vrací *dostupné* rozlišení obrazovky, tedy bez hlavního panelu operačního systému. 

Na desktopu bývají obvykle hodnoty `availWidth` nebo `availHeight` trochu menší, na mobilech mívají obě kategorie – rozlišení i dostupné rozlišení – stejné hodnoty. Vyzkoušejte si to na CodePenu: https://codepen.io/machal/pen/gjNpYg

Připomínám, že veškerá čísla dostanete v [CSS pixelech](css-pixel.md), nikoliv v hardwarovém rozlišení. Pokud byste chtěli to, musíte násobit přepočítací hodnotou `devicePixelRatio`. Například:

```javascript
window.screen.width * window.devicePixelRatio
```

## Zjištění v CSS {#CSS}

[Media Queries](css3-media-queries.md) nabízí dotazy na šířku a výšku rozlišení obrazovky – `min-device-width` a `min-device-height`.

To jen pro pořádek. Ale v CSS je to snad ještě méně užitečné než v JavaScriptu. Daleko zajímavější je cílit na velikost okna.

Při psaní článku jsem navíc zjistil, že se W3C tyto vlastnosti chystá odstranit ze specifikace. S tím se plně ztotožňuji. Zdroj je [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/device-width).


## Statistiky rozlišení obrazovky {#statistiky}

Jak už jsem zmiňoval, zase tak zajímavé rozlišení displejů pro webaře není. 

Jedno z pravidel dobrého [responzivního designu](https://www.vzhurudolu.cz/responzivni-design) je – navrhujte stránku tak aby fungovala od nějakých 320 (raději ale 240) až do alespoň 2500 CSS pixelů.

Web je ale plný statistik rozlišení displejů. Za červenec 2018 napříkld [Gemius uvádí](http://ranking.gemius.com/cz/ranking/resolutions/) následující pořadí:

| Rozlišení    | Podíl     |
|:------------:|:---------:|
| 360 × 640    |   20.80 % |
| 1366 × 768   |   15.63 % |
| 1920 × 1080  |   13.47 % |
| 1280 × 1024  |   4.58 %  |
| 1600 × 900   |   3.51 %  |

Nelze si nevšimnout, že zde chybí téměř polovina uživatelů. Ano, rozlišení obrazovky je dnes opravdu hodně a do krátkého tabulkového shrnutí se vám to nevejde.

Navíc – daleko zajímavější je sledovat, s jak velkými okny prohlížeče uživatelé na vaše weby přistupují. Na to si počkejte do dalšího článku.


## Full HD, 2K, 4K a další označení  {#zkratky}

Tohle je často předmětem hovorů, proto zde ještě pro pořádek zmíním zkratky, kterými se některá rozlišení označují:

| Rozlišení    | Zkratka   |
|:------------:|:---------:|
| 1024 × 768   | XGA/XVGA  |
| 1366 × 768   | HD Ready  |
| 1280 × 720   | HD        |
| 1920 × 1080  | Full HD   |
| 2048 × 1080  | 2K        |
| 3840 × 2160  | 4K        |

Zdrojem mi byla [Wikipedie](https://cs.wikipedia.org/wiki/Rozli%C5%A1en%C3%AD), kde těch krásných zkratek najdete ještě daleko více.

Platí to i pro rozlišení videa nebo pro televize, ale to už je trochu mimo náš obor, tedy pokud nás nezajímají [HbbTV a chytré televize](https://www.vzhurudolu.cz/podcast/105-podcast-hbbtv).
