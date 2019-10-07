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

<!-- TODO dopracovat tutoriál -->

<!-- TODO slovník pojmů -->

