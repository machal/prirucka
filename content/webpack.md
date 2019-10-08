# Webpack

<!-- TODO co to je, jaks se to liší od dostupných  nástrojů, obrázek -->

## Tutoriál

### Krok 1: Předpoklady

Začneme úplně od nuly. Vezměme, že máme tohle jednoduché HTML uložené v `index.html`:

```html
<!-- index.html: -->
<!DOCTYPE html>
<html>
  <head>
    <title>Webpack Demo</title>
    <meta charset="utf-8" />
  </head>
  <body>
    <div id="app"></div>
    <script src="dist/main.js"></script>
  </body>
</html>
```

Dále jsme si uložili testovací javascriptový soubor, konkrétně do `src/index.js`:

```js
// src/index.js:
console.log("hello world!");
```

### Krok 2: Instalujeme Webpack

Pokud máme nainstalovaný balíčkovač [NPM](npm.md), můžeme teď [inicializovat náš projekt](npm.md#npm-init):

```bash
npm init --yes
```

Oním `--yes` dáváme instrukci, aby NPM ponechalo výchozí hodnoty. Výsledkem je připravené konfiguráky [package.json](package-json.md) a [package-lock.json](package-lock-json.md). 

Ty zatím s Webpackem nemají nic společného. Nainstalujeme si jej až teď:

```bash
npm install --save-dev webpack webpack-cli
```

Balíček `webpack` asi netřeba rozebírat. Ten druhý – `webpack-cli` – slouží k ovládání Webpacku z příkazové řádky. 

NPM by nám mělo vrátit tohle:

```bash
+ webpack-cli@3.3.9
+ webpack@4.41.0
added 453 packages from 237 contributors and audited 5286 packages in 98.758s
found 0 vulnerabilities
```

### Krok 3: Spouštíme Webpack

Teď už máme splněné minimální požadavky na běh Webpacku. Je nainstalovaný a existuje soubor, který může zpracovávat.

Můžeme si jej tedy spustit v adresáři s projektem:

```bash
npx webpack
```

Pokud neznáte příkaz [npx](https://www.npmjs.com/package/npx): Ten spustí NPM balíček, který nemáte nainstalovaný globálně. Pokud ale budete Webpack používat intenzivně, doporučuji jednorázovou globální instalaci: `npm install webpack-cli -g`. Pak je možné nástroj pouštět ze všech adresářů jednoduchým příkazem `webpack`.

Vrátí něco jako:

```bash
Hash: 4fa48f2cc331e12d15a4
Version: webpack 4.41.0
Time: 360ms
Built at: 2019-10-04 06:33:56
  Asset       Size  Chunks             Chunk Names
main.js  957 bytes       0  [emitted]  main
Entrypoint main = main.js
[0] ./src/index.js 28 bytes {0} [built]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

Asi jste si všimli, že jsme Webpacku neposkytli žádnou konfiguraci. V tomhle případě běží ve výchozím módu. Co přesně udělal?

- Podíval se do adresáře `src/`, zda nenajde soubor `index.js`. A ano, byl tam.
- Sestavil si interní strom závislostí, v tomto případě opravdu spíše bonsai závislostí.
- Výstup uložil do `dist/main.js`.
- Vypočítal hash, unikátní kód pro toto sestavení (`4fa48f2cc331e12d15a4`), a spolu s ním nám vyplivl nějaké statistiky.
- Seřval nás, že si máme nastavit mód práce. Ve výchozím režimu pracuje jako pro produkční prostředí.

### Krok 4: Kompilujeme Sass

Vezměme, že máme dva jednoduché SCSS soubory, na kterých si ukážeme, jak ve Webpacku funguje kompilace kódu z preprocesoru Sass do CSS:

```scss
// src/styles.scss:

html {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

@import "_component.scss";

// src/_component.scss:

.component {
  font-size: 2rem;
  padding: 1rem;
}
```

V dalším kroku si přidáme balíčky a jejich konfiguraci, které nám umožní kompilovat soubory. Nejprve instalace balíčků:

```bash
npm install css-loader sass-loader node-sass style-loader --save-dev
```

Co jsme nainstalovali?

- [node-sass](https://github.com/sass/node-sass) - kompilátor pro Sass
- [sass-loader](https://github.com/webpack-contrib/sass-loader) - Webpack „loader“ pro Sass
- [css-loader](https://github.com/webpack-contrib/css-loader) – převaděč direktiv `@import` z CSS do importů, kterým rozumí JavaScript
- [style-loader](https://github.com/webpack-contrib/style-loader) – vkládání CSS do DOMu

Do konfigurace `webpack.config.js` pak přidáme nový modul:

```js
module: {
  rules: [
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  ]
}  
```

Můžeme si teď zkusmo pustit příkaz `webpack`. Jenže se nic nestane.

Tohle je právě jeden z rozdílů mezi [Gruntem](grunt.js), Gulpem a Webpackem. Webpack je JS-centrický, vše se u něj točí kolem javascriptových balíčků.

To, co jsme vytvořili, je CSS balíček připravený pro distribuci uvnitř JS balíčku. 

Vytvořené CSS můžeme importovat do `index.js`:

```js
import "./styles.scss";
console.log("hello world!");
```

Po dalším spuštění Webpacku se nám vložní dovnitř distrubučního JS balíčku nějak následovně:

```js
function(e, t, n) {
  (e.exports = n(3)(!1)).push([
    e.i,
    "html{font-family:Verdana, Geneva, Tahoma, sans-serif}.component{font-size:2rem;padding:1rem}\n",
    ""
  ]);
},
```

Takhle to můžete chtít, ale u běžných webů asi nechcete. Musíte tedy zařídit ukládání do souboru.

### Krok 5: Ukládáme CSS do souboru

Nainstalujeme si plugin pro extrakci CSS do souboru – [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin):

```bash
npm install --save-dev mini-css-extract-plugin
```

A nyní jej zadrátujeme do konfigurace Webpacku. Vzhledem k tomu, že jde o poslední krok, tady je celý finální `webpack.config.js`:

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./src/index.js", "./src/styles.scss"],
  output: {
    filename: "main-configured.js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
};
```

Podívejme se, co jsme od minulé verze změnili:

- Načteme a použijeme náš extrakční plugin: `require("mini-css-extract-plugin")`.
- Do položky `entry` pro vstupní soubory jsme přidali SCSS soubor: `["./src/index.js", "./src/styles.scss"]`.
- V pravidle pro `.scss` soubory jsme odstranili `style-loader`, protože už nestojíme o vkládání CSS do DOMu. Naopak jsme přidali použití nového pluginu `loader: MiniCssExtractPlugin.loader`.

Pro vstřebání úplných základů by to mohlo stačit, nechci to komplikovat. 

Dále bychom mohli zapracovat například prohnání výsledného CSS Autoprefixerem, přidání HMR (Hot Module Reloadingu) – automatického obnovování stylů v prohlížeči, detekci produkčního a vývojového prostředí a spoustu dalších věcí.

## Slovník pojmů k Webpacku {#pojmy}

### Entry (vstup) {#pojmy-entry}

Zdrojové soubory, nad kterými bude Webpack provádět své operace. Výchozí je `index.js` v adresáři `src`. Je možné zde použít jeden soubor…

```js
entry: {
  entry: "./src/file.js"
}
```

…objekt:

```js
entry: {
  app: "./src/app.js",
  adminApp: "./src/admin.js"
}
```

…nebo třeba pole:

```js
entry: ["./src/index.js", "./src/styles.scss"],
```

### Output (výstup) {#pojmy-output}

Výstupní soubor nebo soubory, kam se má ukládat. Výchozí je `main.js` v adresáři `dist/`.

Můžete to ale nastavit mnoha způsoby:

```js
const path = require("path");

module.exports = {
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public"),
  }
};
```

### Loader {#pojmy-loader}

Loadery jsou určeny pro otevření a zpracování souborů. 

Takový [html-loader](https://webpack.js.org/loaders/html-loader/) umí zpracovávat HTML kód. V příkladu výše jsme používali [css-loader](https://webpack.js.org/loaders/css-loader/) a [sass-loader](https://webpack.js.org/loaders/sass-loader/), jejichž účel už znáte.

### Plugin {#pojmy-plugin}

Pluginem se ve Webpacku rozumí cokoliv, co má širší funkčnost než jen zpracování souborů. Pluginy se typicky integrují do procesu sestavování a nějak jej ovlivňují.

Plugin [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) z našeho příkladu zařídil ukládání stylů do zvláštního CSS souboru.

### Modul {#pojmy-module}

Modulem se rozumí kousek kódu, který slouží jako samostatná komponenta. 

Nemusí jím být jen soubor volaný [zápisem `import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) v JavaScriptu, ale cokoliv podobného i v jiných jazycích, například `@import` v LESSu či Sassu nebo obrázek stahovaný v `<img src="…">`.

### Dependency graph (strom závislostí) {#pojmy-dependency-graph}

Webpack si interně vede strom závislostí, tedy vztahy jednotlivých souborů. Netýká se to opět jen těch javascriptových, ale jakýchkoliv jiných, které se v aplikaci používají.

### Hot Module Replacement {#pojmy-hot-module-replacement}

Tahle funkce Webpacku by se dala přeložit jako „rychlá náhrada modulů“. Jde o to, že vám při vývoji aplikace vyměňuje naživo v prohlížeči jen ty kousky kódu, které jste upravili. 
Zároveň to vkládá všechny změny kódu rovnou do verze běžící v prohlížeči. Nemusíte tedy obnovovat stránku a je to krásně rychlé. Více informací je na [Webpack.js.org](https://webpack.js.org/concepts/hot-module-replacement/).
