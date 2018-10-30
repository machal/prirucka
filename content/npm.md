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

```json
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

```bash
NAME                      | DESCRIPTION          | AUTHOR          | DATE       | VERSION  | KEYWORDS
bootstrap                 | The most popular…    | =mdo =twbs      | 2018-07-24 | 4.1.3    | css sass mobile-first res
react-bootstrap           | Bootstrap 3…         | =monastic.panic… | 2018-09-06 | 0.32.4   | react ecosystem-react re
@ng-bootstrap/ng-bootstra | Angular powered…     | =ng-bootstrap   | 2018-10-26 | 4.0.0    | angular bootstrap compone
p                         |                      |                 |            |          |
```

Vybereme hned tu první. Pojďme teď Bootstrap nainstalovat.

### npm install – instaluje balíček {#npm-install}

```bash
npm install <název-balíčku>
```

Instalovat Bootstrap můžeme tedy následovně:

```bash
npm install bootstrap
```

Načež se nám vrátí něco podobného:

```bash
npm WARN npm@1.0.0 No description
npm WARN npm@1.0.0 No repository field.
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN bootstrap@4.1.3 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN bootstrap@4.1.3 requires a peer of popper.js@^1.14.3 but none is installed. You must install peer dependencies yourself.

+ bootstrap@4.1.3
added 1 package from 2 contributors and audited 1 package in 2.949s
found 0 vulnerabilities
```

Pojďme si to rozebrat:

NPM upozorňuje („WARN“), že nám v `package.json` chybí obsah v polích „description“ a „repository“. Na soukromém uzavřeném projektu nám to však nemusí vadit.

Dále je zde informace, že NPM vytvořilo soubor `package-lock.json` („created a lockfile as package-lock.json“), což je v pořádku. Když si ten soubor prohlédnete, asi budete souhlasit, že jej mají spravovat stroje, nikoliv lidé.

Dále nám NPM poskytuje laskavé upozornění („WARN“): Aby Bootstrap správně fungoval, potřebuje následující balíčky: jQuery a Popper. 

### Odbočka první: „Peer“ závislosti

Jelikož jde o takzvané „peer dependencies“, tedy závislost balíčků na stejné úrovni, neinstaluje je balíčkovací systém sám, ale musíme o udělat my. 

Takže vzhůru do toho:

```bash
npm install jquery popper
```

Dostaneme pak něco takového:

```bash
+ jquery@3.3.1
+ popper.js@1.14.4
added 1 package from 2 contributors, updated 1 package and audited 7615 packages in 6.813s
found 0 vulnerabilities
```

Kromě informace o nanstalovaných balíčcích (např. „jquery“) a jejich verzích („3.3.1“) je zde také zpráva o tom, že NPM v balíčcích nenalezlo žádné bezpečnostní zranitelnosti („found 0 vulnerabilities“), takže můžeme být klidní.

Důležité je vědět, že existuje možnost použít příkaz bez názvu balíčku:

```bash
npm install
```

V takovém případě se stáhnou a uloží balíčky podle předpisu z definičního souboru `package.json`.

## npm uninstall – odstranění závislosti {#npm-list}

Samozřejmě je zde i možnost odstraňovat balíčky  z projektu:

```bash
npm uninstall popper.js
```

NPM pak provede následující:

1. Odstraní adresář `popper.js` z `node_modules`.
2. Odmaže jeho výskyt z `package.json` a `package-lock.json`

Na tom nic složitého není, takže pojďme na další příklad.

## npm list – výpis stromu závislostí {#npm-list}

Funguje to asi takhle:

```bash
npm list --depth=<číslo>
```

`<číslo>` udává hloubku výpisu. To je dost zásadní, protože pouký `npm list` by nám vypsal ohromnou strukturu všech závislostí. Spokojíme se s prvními dvěma úrovněmi:

```bash
npm list --depth=0
```

Dostaneme:

```bash
├── bootstrap@4.1.3
├── jquery@3.3.1
└── popper.js@1.14.4
```

To je vlastně totéž, co aktuálně obsahuje adresář `node_modules/`. A také sekce závislostí v našem `package.json`:

```json
"dependencies": {
  "bootstrap": "^4.1.3",
  "jquery": "^3.3.1",
  "popper.js": "^1.14.4"
}
```

### Odbočka druhá: Semver, sémantické verzování

Všimněte si, že instalované verze začínají stříškou `^`. Ano, hádáte správně, něco to znamená.

Vycházíme zde ze sémantického verzování, který říká: 

- první číslovka je určená pro *major* verze, které mohou do software přinášet zlomové změny (např. u Bootstrapu v našem výpise je to `4`)
- druhá označuje *minor* verze pro nové funkčnosti, které jsou zpětně kompatibilní (u Bootstrapu číslo `1`)
- třetí pak *patch*, číslovka která se mění při opravách chyb (u Bootstrapu číslo `3`)

A co tedy ta stříška? Jde o znak určující, jak moc dovolujeme danému balíčku, aby jej NPM aktualizovalo:

- `^` stříška (caret) umožňuje aktualizovat „minor“ verze
- `~` vlnovka (tilde) aktualizuje jen nové „patch“ verze
- balíčky bez speciálního znaku se udržují v dané verzi bez možnosti samostatné aktualizace
- balíčky označené `*` se aktualizují zcela libovoně, včeetně „major“ verze (což ale moc nedoporučuji dělat)

### Odbočka třetí: Typy závislostí

Jde o závislosti v pravém slova smyslu – balíčky, které z nějakých důvodů potřebují ty, které jsme dobrovolně nainstalovali. No a ještě pak ty, které potřebují ony závislosti. A závislosti závislostí.  

Narozdíl od „peer“ balíčků se nás na jejich instalaci vůbec neptají, protože si existenci bez nich neumějí představit.

Jste zvědaví a rádi byste zjistili, které balíčky máte nainstalované?

## npm outdated - vypíše balíčky, které je potřeba aktualizovat {#npm-outdated}

Představme si, že v `package.json` máme následující:

```json
"dependencies": {
  "bootstrap": "~3.3.6",
}
```

Pak dotaz na zastaralé balíčky vypadá takto:

```bash
npm outdated
```

Výstup:

```bash
Package                     Current  Wanted   Latest  Location
bootstrap                     3.3.6   3.3.7    4.1.3
```

Říká nám to, že aktuálně máme nainstalovánu verzi 3.3.6 („Current“), přičemž podle předpisu z `package.json` můžeme pomocí příkazu `npm install` aktualizovat na verzi 3.3.6 („Wanted“). 

Zároveň ale je dobré vědět, že nejnovější verze Bootstrapu je 4.1.3 („Latest“). Ale ta se nestáhne, dokud to doslovně nepovolíme `package.json`.

## npm udate - aktualizace balíčku {#npm-update}

















## package.json a package.lock.json
- 



