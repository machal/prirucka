# package.json: Manifest závislostí projektu

Dneska o tomhle populárním souboru, o NPM skriptech a taky o závislostech.

Asi nejlepší definice `package.json` zní: Manifest závislostí projektu. Jedná se o soubor, který využívá [NPM](npm.md) a další balíčkovací systémy jako Yarn pro svou konfiguraci. 

Spolu s `package-lock.json` patří k základní výbavě každého projektu, který používá jeden ze zmíněných balíčkovacích manažerů. O tomhle jeho parťákovi ale někdy příště.

<!-- AdSnippet -->

Tenhle soubor může obsahovat různé meta informace o projektu:

- [Název, popis nebo verzi projektu](#informace-o-projektu)
- [Závislosti projektu](#zavislosti)
- [Podporované prohlížeče](#browserlist)
- [Skripty pro usnadnění práce vývojářů](#scripts)

Žádná položka není povinná. Jediná výjimka je název a verze a to jen u veřejných projektů.  Jistota je, že se jedná o soubor ve formátu JSON. Pojďme si to teď všechno projít na ukázkovém `package.json`:

```json
{
  "name": "polaroid-example",
  "author": "Martin Michálek <martin@vzhurudolu.cz> (https://vrdl.cz/martin)",
  "version": "1.0.0",
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

Pro znalé to není nic nového ani složitého. Ale vezměme to postupně a ukažme i méně známé věci.

## Informace o projektu {#informace-o-projektu}

Nejprve ukázka:

```json
"name": "polaroid-example",
"author": "Martin Michálek <martin@vzhurudolu.cz> (https://vrdl.cz/martin)",
"version": "1.0.0",
"private": true,
"repository": {
  "type": "git",
  "url": "git://github.com/machal/polaroid-example.git"
}
```

Kromě názvu a verze není nic pro neveřejné projekty povinné, ale pro pořádek se tady hodí mít ty informace, které mohou být užitečné pro další členy týmu:

- `name` – Jméno projektu. Obvykle název repozitáře. Povolené jsou tady jen znaky, které můžeme uvádět v URL adresách. Je to povinná položka.
- `title` – Titulek projektu. Už bez nutnosti vyhýbat se nepovoleným znakům. Např. `"title": "jQuery"`.
- `author` – Autor projektu. Pokud jsou zde i vedlejší přispěvovatelé, využijte pole `contributors`.
- `homepage` a `bugs` – Adresy pro web projektu a místo, kam se hlásí chyby. Například `"homepage": "https://jquery.com/"`.
- `version` – Verze projektu, která se řídí [SemVer](semver.md). Opět povinná položka.
- `licence` – Jakou licenci projekt využívá. Např. `"license": "MIT"`.
- `keywords` – Klíčová slova pro nalezení projektu na [npmjs.com](https://www.npmjs.com/), pokud je veřejný. Například `"keywords": [ "jquery", "javascript", "library" ]`.
- `description` – Popis projektu. Např. `"description": "JavaScript library for DOM operations"`.
- `repository` – Adresa repozitáře a jeho typ. Například `"repository": { "type": "git", "url": "https://github.com/jquery/jquery.git" }`.
- `main` – Vstupní bod. Důležité pro javascriptové aplikace. Zde se budou hledat exporty modulů. Příklad: `"main": "src/main.js"`.
- `private` – Zda je adresář soukromý. Může zamezit nechtěnému publikování ve veřejném repozitáři na npmjs.com, takže je asi dobré tohle uvádět: `"private": true`.

Pojďme ale na důležitější, nebo asi úplně nejdůležitější sekci `package.json` – závislosti. Vynecháme přitom překvapivě alkohol, drogy a veškeré další lidské nešvary. Budeme se totiž bavit o závislostech našeho software na  software jiných autorů a autorek.

## Závislosti {#zavislosti}

Stejně jako lidé, váš projekt může mít závislosti různých typů.

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

Pokud bych dělal veřejný web, budou zde knihovny typu jQuery nebo jQuery pluginy. Prostě ty, které potřebují uživatelé k plné funkčnosti projektu. Příklad:

```json
"dependencies": {
  "fancybox": "^3.0.1",
  "jquery": "^3.3.1"
}
```

Pokud bychom naopak pracovali na knihovně užitečné pro další vývojáře, velmi pravděpodobně v `dependencies` nic mít nebudeme. Však se podívejte na dotčený soubor [v repozitáři Bootstrapu](https://github.com/twbs/bootstrap/blob/v4-dev/package.json) nebo [totéž u jQuery](https://github.com/jquery/jquery/blob/master/package.json). Sekce uživatelských závislostí nic neobsahují.

Přidat sem knihovnu můžu ručním zápisem nebo z příkazové řádky jedním z nástrojů, které `package.json` zpracovávají:

```bash
npm install jquery
yarn add jquery
```

### devDependencies (vývojářské) {#dev-dependencies}

Vzhledem k výše uvedenému už asi tušíte, že zde budou balíčky, které jsou uživatelům projektu k ničemu. Naopak se z nich zaradují vývojáři, kteří chtějí zápolit se zdrojovým kódem:

```json
"devDependencies": {
  "autoprefixer": "^9.1.5",
  "browser-sync": "^2.24.7",
  "less": "^3.8.1",
}
```

Ano, tady budou naše interní nástroje – například Gulp nebo [Grunt](grunt.md) a [jeho pluginy](grunt-pluginy.md). Preprocesory, postprocesory, transpilery, testovače, lintovače a kdoví co všechno. Prostě ony libůstky dnešních vývojářů, které se alespoň trochu týkají Javascriptu nebo jiného návazného zdrojového kódu.

Protože se jedná o speciální typ závislostí, během přidávání z příkazové řádky je potřeba uvádět parametr:

```bash
npm install autoprefixer --save-dev
yarn add autoprefixer --dev
```

### Další typy závislostí {#dalsi-zavislosti}

Představme si, co by lidstvo dělalo, když by si vymyslelo jen alkohol a na všechny ostatní drogy (jako třeba mobily nebo Facebook) zapomnělo. Nudilo se…?

<!-- AdSnippet -->

Stejně je na tom NPM, Yarn a komunita kolem nich. Proto existují i další typy závislostí. Pokud nejste pokročilí uživatelé, nejspíš je nebudete vůbec potřebovat. Stejně je ale uvedu.

- `peerDependencies` - Sousedská nebo stejnoúrovňová závislost. Například Bootstrap je zavislý na jQuery, ale předpokládá, že jej budete chtít používat i v jiných částech vašeho projektu. Proto říká jaké rozmezí verzí jQuery akceptuje a nechává jeho instalaci na vás: `"jquery": "1.9.1 - 3"`. Viz [package.json z Bootstrapu](https://github.com/twbs/bootstrap/blob/v4-dev/package.json).
- `bundledDependencies` – Závislosti pro bundlování. Sada balíčků, které se mají přidat do „bundle“, takže distrubuční verze vašeho software.
- `optionalDependencies` – Volitelné závislosti. Když je váš software závislý na nějakém jiném, ale nechcete, aby NPM odmítalo pokračovat v práci, když jej nedokáže stáhnout a nainstalovat.

Rozsah povolených verzí se u všech typů závislostí řídí pravidly vycházejícími ze [SemVer](semver.md).

Více informací je na [docs.npmjs.com/files/package.json](https://docs.npmjs.com/files/package.json).

Dál se už budu zabývat položkami, které v manifestu mít můžete, ale nemusíte.

## browserslist – Seznam podporovaných prohlížečů {#browserslist}

Obsahuje deklaraci prohlížečů, které na projektu podporuji:

```json
"browserslist": [
  "> 1%",
  "last 4 versions"
]
```

Tady říkáme, že chceme podporovat všechny [prohlížeče](prohlizece.md), které mají více než jednoprocentní podíl na globálním trhu a zároveň nás zajímají poslední čtyři verze. Tuhle deklaraci tam mám kvůli [prohlížeči od Seznam.cz](https://www.vzhurudolu.cz/podcast/120-podcast-seznam-prohlizec), který má v době psaní textu právě toto zpoždění oproti Chrome, ze kterého vychází.

K čemu je to dobré? Z browserlistu vychází nástroje pro automatické uzpůsobování kódu starším prohlížečům. V CSS je to Autoprefixer, v JS pak Babel.

Více informací je na [github.com/browserslist/browserslist](https://github.com/browserslist/browserslist).

## scripts – Skripty {#scripts}

NPM skripty mě zbyly na závěr a není ani předmětem tohodle textu se v nich příliš hrabat. 

Jedno vám ale musím říct – tohle je skvělá věc a spoustě z nás nahradí současná řešení automatizace pomocí [Gruntu](grunt.md), ale hlavně Gulpu. Než o tom napíšu více, spokojme se s ukázkou a stručným popisem:

```json
"scripts": {
  "browsersync": "browser-sync start --server --files 'dist/css/*.css, dist/js/*.js'",
  "less": "lessc --source-map src/less/index.less dist/css/index.css",
  "autoprefixer": "postcss -u autoprefixer --grid=true -r dist/css/index.css",
}
```

Asi je vidět, že zde volám totéž, co bych mohl udělat na příkazové řádce. NPM se umí podívat do složky `node_modules/` a zavolat rozhraní instalovaných balíčků napřímo.

Když se zaměříme na komplikaci LESSu, v příkazové řádce by to vypadalo následovně:

```bash
lessc --source-map src/less/index.less dist/css/index.css
```

NPM skripty umožňují udělat zkratku pomocí `npm run`

```bash
npm run less
```

Tolik ve stručnosti k NPM skriptům. Řekněme, že jde o ochutnávku, protože tahle vlastnost `package.json` je samozřejmě o dost propracovanější. Zájemce ale navedu na CSS Tricks: [css-tricks.com/why-npm-scripts](https://css-tricks.com/why-npm-scripts/).

Ukončím zde i povídání o `package.json`. Shrňme si ale ty nejpodstatnější položky:

- Informace o projektu: Povinné jsou `name` a `version`. Hodí se vyplnit také `description`, `repository` a `licence`.
- Rozlišujte uživatelské závislosti `dependencies` od těch vývojářských `devDependencies`.
- Používejte `browserslist`.
- Vy zkušenější se zajímejte o NPM skripty.

Je dobré ještě zmínit, že další položky si do manifestu závislostí můžeme přidávat sami.

Pokud by vás zajímaly detailní informace nad rámec tohoto textu, jděte na oficiální dokumentaci [docs.npmjs.com/files/package.json](https://docs.npmjs.com/files/package.json).

<!-- AdSnippet -->
