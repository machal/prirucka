# Rozlišení obrazovky ve webdesignu

Rozlišení displeje z pohledu webaře moc zajímavé není, protože weby vykreslujeme a přizpůsobujeme [velikosti okna prohlížeče](velikost-okna-css-js.md). Nicméně – občas se to hodí a možnosti jak rozlišení změřit pochopitelně máme.

<!-- AdSnippet -->

Obsah: [Je to vůbec k něčemu?](#k-necemu) – [Zjištění JavaScriptem](#JS) – [Zjištění v CSS](#CSS) – [Statistiky rozlišení obrazovky](#statistiky) – [Full HD, 2K, 4K a další označení](#zkratky)

## Je to vůbec k něčemu? {#k-necemu}

Jak už jsem zmiňoval, zase tak zajímavé rozlišení displejů pro webaře není. Když jsem se na Twitteru ptal, zda takovou věc někdo potřeboval v praxi, dostal jsem jen pár příkladů. Většinou to lidé používali pro identifikaci uživatele:

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="cs" dir="ltr">Jaká lidé používají rozlišení obrazovky, to nás nezajímalo. Ale rozlišení jsne společně s otiskem prohlížeče používali k rozpoznávání různých zařízení, kterými se tentýž člověk připojoval k účtu. Mohli jsme tak sledovat jeho chování cross-device. A to už bylo hodně zajímavé.</p>&mdash; Jan Štráfelda (@Strafelda) <a href="https://twitter.com/Strafelda/status/1030391422522929152?ref_src=twsrc%5Etfw">August 17, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

…no a pak také pro různé prastaré obskurnosti:

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="und" dir="ltr">Počítajú sa hacky cca pred 20 rokmi (Netscape Navigator 4), kedy sme stránky zobrazovali vo fullscreene pomocou tzv. chromeless window a jeho roztiahnutia na celú obrazovku?</p>&mdash; Riki Fridrich (@fczbkk) <a href="https://twitter.com/fczbkk/status/1030120275277492226?ref_src=twsrc%5Etfw">August 16, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Pro jistotu připomínám, že v [responzivním designu](https://www.vzhurudolu.cz/responzivni-design) je rozlišení obrazovky k ničemu. Vždy potřebujete znát [velikost okna](velikost-okna-css-js.md), protože právě tomu se design webu musí přizpůsobovat.

## Zjištění JavaScriptem {#JS}

### Rozlišení obrazovky

Rozlišení obrazovky zjistíme:

```javascript
screen.width
screen.height
```

U těchto hodnot pozor, budou vám na různých zařízeních vracet různá čísla. Například:

- prohlížeče na iOS 9 a 10 vracejí vždy hodnoty pro kratší stranu (portrait), 
- Android 4 vrací hardwarové rozlišení,
- Edge 14 vrací něco jako `clientWidth` a `clientHeight`, jen s rozměry posuvníku.

Zdroj: [Tabulka kompatibility Petra Paula Kocha](https://www.quirksmode.org/mobile/tableViewport.html).

### Dostupné rozlišení

Rozlišení obrazovky *dostupné* pro okna aplikací, obvykle tedy bez hlavního panelu operačního systému, zjistíme takto:

```javascript
screen.availWidth
screen.availHeight
```

Na desktopu bývají obvykle hodnoty `availWidth` nebo `availHeight` trochu menší, na mobilech mívají obě kategorie – plné i dostupné rozlišení – stejné hodnoty. 

Vyzkoušejte si to na CodePenu: [cdpn.io/e/gjNpYg](https://codepen.io/machal/pen/gjNpYg)

### Pozor, vše je v CSS pixelech

Připomínám, že veškerá čísla dostanete v [CSS pixelech](css-pixel.md), nikoliv v hardwarovém rozlišení. Pokud byste chtěli hardwarové pixely, musíte násobit přepočítací hodnotou `devicePixelRatio`. Například:

```javascript
window.screen.width * window.devicePixelRatio
```

## Zjištění v CSS {#CSS}

[Media Queries](css3-media-queries.md) nabízí dotazy na šířku a výšku rozlišení obrazovky – `min-device-width` a `min-device-height`.

To jen pro pořádek. V CSS to ale je ještě méně užitečné než v JavaScriptu. Daleko zajímavější je cílit na velikost okna.

Při psaní článku jsem navíc zjistil, že se W3C tyto vlastnosti chystá odstranit ze specifikace. S tím se plně ztotožňuji. Můj zdroj je [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/device-width).


## Statistiky rozlišení obrazovky {#statistiky}

Web je plný statistik rozlišení displejů. Za červenec 2018 například [Gemius uvádí](http://ranking.gemius.com/cz/ranking/resolutions/) následující pořadí:

| Rozlišení    | Podíl     |
|:-------------|:----------|
| 360 × 640    |   20.80 % |
| 1366 × 768   |   15.63 % |
| 1920 × 1080  |   13.47 % |
| 1280 × 1024  |   4.58 %  |
| 1600 × 900   |   3.51 %  |

Nelze si nevšimnout, že zde chybí téměř polovina uživatelů. Ano, rozlišení obrazovky je dnes opravdu hodně a do krátkého tabulkového shrnutí se vám to nevejde.

<!-- AdSnippet -->


## Full HD, 2K, 4K a další označení  {#zkratky}

Tohle je často předmětem diskuzí, proto zde ještě pro pořádek zmíním zkratky, kterými se některá rozlišení označují:

| Rozlišení    | Zkratka   |
|:-------------|:----------|
| 1024 × 768   | XGA/XVGA  |
| 1280 × 720   | HD        |
| 1920 × 1080  | Full HD   |
| 2048 × 1080  | 2K        |
| 3840 × 2160  | 4K        |

Zdrojem mi byla [Wikipedie](https://cs.wikipedia.org/wiki/Rozli%C5%A1en%C3%AD) a [Mobilmania](https://www.mobilmania.cz/clanky/konec-zmatku-v-rozliseni-displeju-prehled/sc-3-a-1319962/default.aspx) kde těch krásných zkratek najdete ještě daleko více.

Platí to i pro rozlišení videa nebo pro televize, ale to už je trochu mimo náš obor, tedy pokud nás nezajímají [HbbTV a chytré televize](https://www.vzhurudolu.cz/podcast/105-podcast-hbbtv).

To je k rozlišení obrazovky vše. Daleko zajímavější je sledovat, [s jak velkými okny prohlížeče](velikost-okna-css-js.md) uživatelé na vaše weby přistupují. 

<!-- AdSnippet -->
