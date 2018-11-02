# package.json: Vývojářský manifest projektu

Jedná se o soubor, který využívá NPM a další balíčkovací systémy jako Yarn pro svou konfiguraci.

Asi nejlepší definice `package.json` zní: Manifest projektu.

Všechny ostatní definice budou nepřesné. Tenhle soubor může obsahovat:

- informace o projektu
- seznam software, na kterém je projekt závislý  
- skripty, které mohou vývojáři spouštět  
- specifikaci verzí prohlížečů, pro které se projekt uzpůsobuje

Nic z toho není povinné. Jediná jistota je, že se jedná o soubor ve formátu JSON. Pojďme si to teď všechno projít na ukázkovém `package.json`:

```json
{
  "name": "polaroid-example",
  "author": "Martin Michálek <martin@vzhurudolu.cz> (https://vrdl.cz/martin)",
  "version": "0.5.0",
  "private": true,
  "repository": {
    "type": "git",
    "url": "git://github.com/machal/polaroid-example.git"
  },
  "devDependencies": {
    "autoprefixer": "^9.1.5",
    "browser-sync": "^2.24.7",
    "less": "^3.8.1",
  },
  "dependencies": {
    "fancybox": "^3.0.1",
    "jquery": "^3.3.1"
  },
  "browserslist": [
    "> 1%",
    "last 4 versions"
  ],
  "scripts": {
    "browsersync": "browser-sync start --server --files 'dist/css/*.css, dist/js/*.js'",
    "less": "lessc --source-map src/less/index.less dist/css/index.css",
    "autoprefixer": "postcss -u autoprefixer --grid=true -r dist/css/index.css",
  }
}
```

Pro znalé to není nic složitého. Ale vezměme to postupně.

## Informace o projektu {#informace-o-projektu}

Nejprve ukázka:

```json
"name": "polaroid-example",
"author": "Martin Michálek <martin@vzhurudolu.cz> (https://vrdl.cz/martin)",
"version": "0.5.0",
"private": true,
"repository": {
  "type": "git",
  "url": "git://github.com/machal/polaroid-example.git"
}
```

Nic z následujícího není pro neveřejné projekty povinné, ale pro pořádek se tady hodí mít ty informace, které mohou být užitečné pro další členy týmu:

- `name` – Jméno projektu. Obvykle název repozitáře. Povolené jsou tady jen znaky, které jsou povolené v URL adresách.
- `title` – Titulek projektu. Už bez nutnosti vyhýbat se nepovoleným znakům. Např. `"title": "jQuery"`.
- `author` – Autor projektu. Pokud jsou zde i vedlejší přispěvovatelé, využijte pole `contributors`.
- `homepage` a `bugs` – Adresy pro web projektu a místo, kde se hlásí chyby. Například `"homepage": "https://jquery.com/"`.
- `version` – Verze projektu, která se řídí [SemVer](semver.md).
- `licence` – Jakou licenci projekt využívá. Např. `"license": "MIT"`.
- `keywords` – Klíčová slova pro vyhledávání projektu na npmjs.com, pokud je veřejný. Například `"keywords": [ "jquery", "javascript", "library" ]`.
- `description` – Popis projektu. Např. `"description": "JavaScript library for DOM operations"`.
- `repository` – Adresa repozitáře a jeho typ. Například `"repository": { "type": "git", "url": "https://github.com/jquery/jquery.git" },`.
- `main` – Vstupní bod. Důležité pro javascriptové aplikace. Zde se budou hledat exporty modulů. Příklad: `"main": "src/main.js"`.
- `private` – Zda je adresář soukromý. Může zamezit nechtěnému publikování na npmjs.com, takže je asi dobré to tady mít: `"private": true`.

Pojďme ale na důležitější, nebo asi úplně nejdůležitější sekci `package.json` – závislosti. Vynecháme alkohol, Facebook a veškeré další lidské závislosti. Budeme se totiž bavit o závislostech našeho software na jiných kouscích software.

## Závislosti {#zavislosti}

Stejně jako lidé, `package.json` může mít různé závislosti.

Nejprve ukázka:

```json
"devDependencies": {
  "autoprefixer": "^9.1.5",
  "browser-sync": "^2.24.7",
  "less": "^3.8.1",
},
"dependencies": {
  "fancybox": "^3.0.1",
  "jquery": "^3.3.1"
}
```

### dependencies (normální) {#dependencies}

Možná je lepší říkat *uživatelské* závislosti. Jde o balíčky software, které využijí uživatelé, ale nikoliv vývojáři našeho projektu. Prostě lidé, kteří se nebudou hrabat ve zdrojovém kódu.

Pokud bych dělal veřejný web, budou zde knihovny typu jQuery nebo Bootstrap. Prostě ty, které potřebují uživatelé k plné funkčnosti projektu:

```json
"dependencies": {
  "fancybox": "^3.0.1",
  "jquery": "^3.3.1"
}
```

Pokud bychom naopak pracovali na knihovně užitečné pro další vývojáře, velmi pravděpodobně v `dependencies` nic mít nemusíme. Však se podívejte na tenhle soubor [v Bootstrapu](https://github.com/twbs/bootstrap/blob/v4-dev/package.json) nebo [jQuery](https://github.com/jquery/jquery/blob/master/package.json).

Přidat sem knihovnu můžu ručním zápisem nebo z příkazové řádky jedním z nástrojů, které `package.json` zpracovávají:

```bash
npm install jquery
yarn add jquery
```

### devDependencies (vývojářské) {#dev-dependencies}

Vzhledem k výše uvedenému už asi tušíte, že zde budou balíčky, které budou uživatelům projektu k ničemu. Naopak se z nich zaradují vývojáři, kteří chtějí zápolit se zdrojovým kódem:

```json
"devDependencies": {
  "autoprefixer": "^9.1.5",
  "browser-sync": "^2.24.7",
  "less": "^3.8.1",
}
```

Ano, sem patří Gulp nebo [Grunt](grunt.md) a [jeho pluginy](grunt-pluginy.md). Preprocesory, transpilery, testovače, lintovače a kdoví co všechno. Prostě všechny ty libůstky dnešních vývojářů, které se alespoň trochu týkají Javascriptu nebo jiného zdrojového kódu.

Protože se jedná o speciální typ závislostí, během přidávání z příkazové řádky je potřeba uvádět parametr:

```bash
npm install --dev autoprefixer
yarn add --dev autoprefixer
```

### Další typy závislostí {#dalsi-zavislosti}

Představme si, co by lidstvo dělalo, když by si vymyslelo jen alkohol a na všechny ostatní drogy (jako třeba mobily nebo Facebook) zapomnělo. Nudilo se…?

Stejně je na tom NPM, Yarn a komunita kolem nich. Proto existují i další typy závislostí. Pokud nejste pokročilí uživatelé, nejspíš je nebudete vůbec potřebovat. Stejně je ale uvedu.

- `peerDependencies` - Sousedská nebo stejnoúrovňová závislost. Například Bootstrap je zavislý na jQuery, ale předpokládá, že jej budete chtít používat i v jiných částech vašeho projektu. Proto říká jaké rozmezí verzí jQuery akceptuje a nechává jeho instalaci na vás: `"jquery": "1.9.1 - 3"`. Viz [package.json z Bootstrapu](https://github.com/twbs/bootstrap/blob/v4-dev/package.json).
- `bundledDependencies` – Závislosti pro bundlování. Sada balíčků, které se mají přidat do „bundle“, takže distrubuční verze vašeho software.
- `optionalDependencies` – Volitelné závislosti. Když je váš software závislý na nějakém jiném, ale nechcete, aby NPM odmítalo pokračovat v práci, když jej nedokáže stáhnout a nainstalovat.

Rozsah povolených verzí se u všech typů závislostí řídí pravidly vycházejícími ze [SemVer](semver.md).

Více informací je na [docs.npmjs.com/files/package.json](https://docs.npmjs.com/files/package.json).

## browserslist – Seznam podporovaných prohlížečů {#browserslist}

*TODO*

## scripts – Skripty {#scripts}

*TODO*
