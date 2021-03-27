# Autoprefixer

Autoprefixer je, jak z názvu vyplývá, automatizační nástroj, který přidává [prohlížečové prefixy](prefix.md) do CSS kódu.

Například z následujícího kódu…

```css
.box {
  hyphens: auto;
}
```

…udělá tento kód:

```css
.box {
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
```

Tím pádem budou kódu rozumět všechny prohlížeče, i když vlastnost `hyphens` neznají a podporují jen prefixované varianty.

## Jak Autoprefixer funguje? {#jak-funguje}

Autoprefixer je balíček, který si můžete do projektu nainstalovat jako plugin pro PostCSS.

Nástroj [PostCSS](postcss.md) slouží k jakémukoliv automatickému zpracovávání CSS kódu.

<!-- AdSnippet -->

Používat Autoprefixer můžete mnoha různými způsoby, o těch bude další část textu. Nejprve ale k nastavení.

## Nastavení pomocí Browserlist {#browserlist}

Browserlist je způsob, jak Autoprefixeru a podobným nástrojům (jako Babel pro JavaScript) určit, které prohlížeče na projektu podporujete.

Nejlepším způsobem, jak poskytnou toto nastavení, je soubor `.browserslistrc` v kořenovém adresáři projektu. Alternativně můžete přidat klíč `browserslist` do [souboru `package.json`](package-json.md) nebo přímo v nastavení Autoprefixeru.

Výchozí nastavení vypadá asi takto:

```text
last 1 version, >1%
```

Pak tento kód…

```css
.box {
  display: flex;
}
```

…bude mít totožný zápis i po zásahu Autoprefixeru. Zápisem `last 1 version, >1%` jsme řekli, že budeme podporovat jen poslední verzi prohlížečů a takovou verzi, která má ve světě rozšíření více než jedno procento.

Pojďme ale změnit zápis konfigurace takto:

```text
> 1%, IE 11, IE 10
```

Pak bude výsledek jiný:

```css
.box {
  display: -ms-flexbox;
  display: flex;
}
```

V konfiguraci Browserlistu je `IE 10`, takže Autoprefixer přidá zápis pro tento stařičký prohlížeč: `display:-ms-flexbox`.

## Použití Autoprefixeru {#pouziti}

Možnosti využití je celá řada, podívejme se na ně.

### Online {#pouziti-online}

Pokud si chcete jen hrát nebo přidat pár prefixů, využijte online pískoviště. [autoprefixer.github.io](https://autoprefixer.github.io/)

### Příkazová řádka {#pouziti-cli}

Využijte balíček postcss-cli. [github.com/postcss/postcss-cli](https://github.com/postcss/postcss-cli).

```terminal
npm install postcss-cli autoprefixer
npx postcss *.css --use autoprefixer -d build/
```

### Gulp {#pouziti-gulp}

Využijte balíček gulp-postcss. [github.com/postcss/gulp-postcss](https://github.com/postcss/gulp-postcss)

```js
gulp.task('autoprefixer', () => {
  const autoprefixer = require('autoprefixer')
  const sourcemaps = require('gulp-sourcemaps')
  const postcss = require('gulp-postcss')

  return gulp.src('./src/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dest'))
})
```

### Webpack {#pouziti-webpack}

Ve [Webpacku](webpack.md) můžete využít postcss-loader. [github.com/webpack-contrib/postcss-loader](https://github.com/webpack-contrib/postcss-loader)

`webpack.config.js`:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  }
}
```

`postcss.config.js`:

```js
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

Použití Autoprefixeru s dalšími nástroji a více nápovědy najdete na oficiálním webu. [github.com/postcss/autoprefixer](https://github.com/postcss/autoprefixer)

<!-- AdSnippet -->
