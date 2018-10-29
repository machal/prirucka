# NPM: Úplné začátky a základní příkazy

NPM (Node Package Manager) je správce javascriptových balíčků. Usnadňuje jejich instalaci a správu. Taková obdoba například [Composeru](https://getcomposer.org/) ze světa PHP.

## Historie a konkurence

Původně šlo o NPM o správu balíčků k serverovému Javascriptu – Node.js. To se časem přeneslo na spouštění různých užitečných nástrojů na příkazové řádce – například pomocí [Gruntu](grunt.md) nebo [Gulpu](https://gulpjs.com/). Nakonec spravuje i frontendový Javascript a dnes už (po [uzavření Boweru](https://www.vzhurudolu.cz/blog/91-bower-mrtvy)) i jakékoliv frontendové balíčky.

<!-- AdSnippet -->

Pokročilejší vývojáři často namísto NPM používají nástroj [Yarn](https://yarnpkg.com/), ale o tom napíšu jindy. Základní použití Yarnu je plus mínus totožné a používá i stejné balíčky a stejnou konfiguraci.

## Instalace a aktualizace

NPM si poprvé stáhnete nejlépe i s celým Node.js. Jděte na následující adresu a stáhněte si LTS (Long Term Support) verzi: [nodejs.org/en/](https://nodejs.org/en/).

Ve zvláštním článku na Vzhůru dolů je více informací [o instalaci Node](node-instalace.md).

Otevřete příkazovou řádku a ověřte, zda je vše v pořádku:

```bash
$ npm --version
6.1.0
```

Vaše verze se může lišit, ale pokud je menší než 5, doporučuji aktualizaci. Když už jednou máte NPM, můžete jej poprosit, aby aktualizoval sám sebe:

```bash
npm install npm@latest -g
```

Přikazujeme kompjůtru, aby `npm` aktualizovalo `install` sebe sama v poslední verzi `@latest`,A aby se nainstaloval globálně pro celý počítač `-g` – NPM chceme používat z jakékoliv složky.

### Nepotřebujete sudo?

Na Macu a Linuxu může být potřeba instalovat s administrátorským oprávněním:

```bash
sudo npm install npm@latest -g
```

Opět odkážu na článek [o instalaci Node](node-instalace.md), kde se tomu věnuji více.

## Architektura projektu

Mrkněme se společně na strukturu souborů a adresářů projektu:

```bash
node_modules/
package.json
package-lock.json
```

- `package.json` v kořenovém adresáři je soubor s konfigurací NPM. Obsahuje informace o projektu a seznam potřebných balíčků. 
- `package-lock.json` uchovává informace o instalovaných verzích balíčků, aby to bylo jednotné pro všechny, kteří na projektu pracují.
- `node_modules/` je složka, do které se instalují. Ta se jako jediná nenahrává do Gitu nebo jiného verzovacícho systému, protože by zbytečně zabírala prostor a celkově dělala nepořádek.

## Základní příkazy

### npm init - vytvoř projekt {#npm-init}

Obvykle projekt vzniká zkopírováním `package.json` z jiného a jeho manuální úpravou. Můžete ale projek odstartovat úplně z nuly:

```bash
npm init
```

Spustí to dotazník, kde budete muset vyplnit název projektu („package name“), jeho verzi, popis, autora a tak dále. Obvykle vám tam stačí nechat výchozí hodnoty – použijte `npm init --yes` a příkaz vás nebude zatěžovat otázkami. 

Vytvoříme tak soubor `package.json`:

```js
{
  "name": "npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Zatím na něm není nicmoc zajímavého. Pojďme si přidat nějaké balíčky, které budeme na projektu používat.

### npm search – vyhledá balíček {#npm-search}

```bash
npm search <název-balíčku>
```

Řekněme, že bychom na projektu chtěli používat knihovnu Bootstrap. Její přesný název si můžete najít dvěmi cestami:

- Přes web: [npmjs.com/search?q=bootstrap](https://www.npmjs.com/search?q=bootstrap)
- Přes NPM: `npm search bootstrap`.

Druhý uvedený nám do příkazové řádky vrátí seznam možností:

```
NAME                      | DESCRIPTION          | AUTHOR          | DATE       | VERSION  | KEYWORDS
bootstrap                 | The most popular…    | =mdo =twbs      | 2018-07-24 | 4.1.3    | css sass mobile-first res
react-bootstrap           | Bootstrap 3…         | =monastic.panic… | 2018-09-06 | 0.32.4   | react ecosystem-react re
@ng-bootstrap/ng-bootstra | Angular powered…     | =ng-bootstrap   | 2018-10-26 | 4.0.0    | angular bootstrap compone
p                         |                      |                 |            |          |
```

Vybereme hned tu první. Pojďme teď Bootstrap nainstalovat.

### npm install – instaluje balíček {#npm-init}

```bash
npm install <název-balíčku>
```

Instalovat Bootstrap můžeme tedy následovně:

```
npm install bootstrap
```

Načež se nám vrátí něco podobného:

```
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN bootstrap@4.1.3 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN bootstrap@4.1.3 requires a peer of popper.js@^1.14.3 but none is installed. You must install peer dependencies yourself.
npm WARN npm@1.0.0 No description
npm WARN npm@1.0.0 No repository field.

+ bootstrap@4.1.3
added 1 package from 2 contributors and audited 1 package in 2.949s
found 0 vulnerabilities
```

Pojďme si to rozebrat:

První je informace, že NPM vytvořilo soubor `package-lock.json` („created a lockfile as package-lock.json“), což je v pořádku. Když si jej prohlédnete, asi budete souhlasit, že tenhle soubor mají spravovat stroje, nikoliv lidé.








## package.json a package.lock.json
- 



