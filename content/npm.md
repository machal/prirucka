# NPM: Úplné začátky a základní příkazy

NPM (Node Package Manager) je správce javascriptových balíčků. Usnadňuje jejich instalaci a následnou údržbu. Jde tedy o obdobu například [Composeru](https://getcomposer.org/) ze světa PHP.

Čím se v tomhle článku pro začínající, mírně pokročilé a v NPM plavající pokročilé budeme zabývat?

- [Historie a konkurence](#historie-konkurence)
- [Instalace a aktualizace](#instalace-aktualizace)
- [Struktura souborů a adresář](#soubory-adresare)
- [Základní příkazy](#prikazy)

## Historie a konkurence {#historie-konkurence}

Původně NPM vymysleli pro správu balíčků k serverovému Javascriptu – Node.js. To se časem přeneslo na spouštění různých užitečných nástrojů na příkazové řádce – například pomocí [Gruntu](grunt.md) nebo [Gulpu](https://gulpjs.com/).

Nakonec ale NPM spravuje i frontendový Javascript a dnes už (po [uzavření Boweru](https://www.vzhurudolu.cz/blog/91-bower-mrtvy)) i jakékoliv frontendové balíčky.

<!-- AdSnippet -->

Pokročilejší vývojáři často namísto NPM používají nástroj [Yarn](https://yarnpkg.com/), ale o tom napíšu jindy. Základní použití Yarnu je plus minus podobné a používá i totožné balíčky a stejnou konfiguraci.

Samozřejmě je zde i řada alternativ pro ty z vás, kteří se nechcete zabývat příkazovou řádkou. Alespoň pro úkoly spojené s automatizací vývojářské práce. Pro vývojáře nepracující v týmu je zde například [Prepros](https://prepros.io/) a na Macu populární [Codekit](https://codekitapp.com/).

## Instalace a aktualizace {#instalace-aktualizace}

NPM si nainstalujte i s celým Node.js. Jděte na následující adresu a stáhněte si LTS (Long Term Support) verzi: [nodejs.org/en/](https://nodejs.org/en/).

Ve zvláštním článku na Vzhůru dolů je [o instalaci Node](node-instalace.md) více informací.

Otevřete příkazovou řádku a ověřte, zda je vše v pořádku:

```bash
$ npm --version
```

Mělo by to vrátit:

```bash
6.1.0
```

Vaše verze se může lišit, ale pokud je menší než 5, doporučuji aktualizaci. Když už jednou máte NPM, můžete tenhle nástroj poprosit, aby aktualizoval sám sebe:

```bash
npm install npm@latest -g
```

Přikazujeme tím nástroji `npm`, aby aktualizoval (`install`) sebe sama do poslední verze (`@latest`). A aby se instalovalo globálně pro celý počítač (`-g`). NPM totiž chceme v příkazové řádce používat z jakékoliv složky.

### Nepotřebujete sudo? {#sudo}

Na Macu a Linuxu může být potřeba instalovat s administrátorským oprávněním (`sudo`):

```bash
sudo npm install npm@latest -g
```

Opět odkážu na článek [o instalaci Node](node-instalace.md), kde se tomu věnuji více.

## Struktura souborů a adresářů {#soubory-adresare}

Mrkněme se společně na strukturu souborů a adresářů projektu:

```text
node_modules/
package.json
package-lock.json
```

- `node_modules/` je složka, do které se instalují balíčky. Ta se jako jediná nenahrává do Gitu nebo jiného verzovacího systému, protože by zbytečně zabírala prostor a celkově dělala ohromný nepořádek. 
- `package.json` v kořenovém adresáři je soubor s konfigurací NPM. Obsahuje informace o projektu a seznam potřebných balíčků. Více [ve zvláštním textu](package-json.md).
- `package-lock.json` uchovává informace o instalovaných verzích balíčků, aby to bylo jednotné pro všechny, kteří na projektu pracují. I tady píšu [více ve zvláštním textu](package-json-lock.md).

<div class="related web-only" markdown="1">
- [NPM a Node.js: Rozcestník odkazů](rozcestnik-npm-node.md)
</div>

Pojďme se teď podívat ale na hlavní část článku – základní příkazy, které se mohou hodit opravdu každému webovému vývojáři a webové vývojářce.

## Základní příkazy {#prikazy}

| Příkaz                          | Co dělá                       |
|:--------------------------------|:------------------------------|
| [npm init](#npm-init)           | Vytvoří projekt               |
| [npm search](#npm-search)       | Vyhledá balíčky               |
| [npm install](#npm-install)     | Instaluje balíčky             |
| [npm uninstall](#npm-uninstall) | Odinstaluje balíčky           |
| [npm list](#npm-list)           | Výpis stromu závislostí       |
| [npm outdated](#npm-outdated)   | Seznam balíčků k aktualizaci  |
| [npm update](#npm-update)       | Aktualizuje verzi balíčků     |
| [npm help](#npm-help)           | Nápověda                      |

## npm init: Vytvoří projekt {#npm-init}

Projekt může vznikat zkopírováním souboru package.json z jiného a jeho manuální úpravou. Můžete ale odstartovat úplně z nuly:

```bash
npm init
```

Spustí to dotazník, kde budete muset vyplnit název projektu („package name“), jeho verzi, popis, autora a tak dále. Může vám stačit ponechat výchozí hodnoty – použijte `npm init --yes` a příkaz vás nebude zatěžovat otázkami.

Vytvoříme tak soubor package.json:

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

Zatím na něm není nic moc zajímavého. Pojďme si přidat nějaké balíčky, které budeme na projektu používat.

## npm search: Vyhledá balíček {#npm-search}

```bash
npm search <název-balíčku>
```

Řekněme, že bychom na projektu chtěli mít knihovnu Bootstrap. Její přesný název si můžeme najít dvěma cestami:

- Přes web: [npmjs.com/search?q=bootstrap](https://www.npmjs.com/search?q=bootstrap)
- Přes NPM: `npm search bootstrap`.

Druhý uvedený nám do příkazové řádky vrátí seznam možností:

```bash
NAME                       | DESCRIPTION          | AUTHOR           | DATE       | VERSION  | KEYWORDS
bootstrap                  | The most popular…    | =mdo =twbs       | 2018-07-24 | 4.1.3    | css sass mobile-first res
react-bootstrap            | Bootstrap 3…         | =monastic.panic… | 2018-09-06 | 0.32.4   | react ecosystem-react re
@ng-bootstrap/ng-bootstrap | Angular powered…     | =ng-bootstrap    | 2018-10-26 | 4.0.0    | angular bootstrap compone
```

Vybereme hned tu první. Pojďme teď Bootstrap nainstalovat.

## npm install: Instaluje balíček {#npm-install}

```bash
npm install (<název-balíčku>)
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

NPM upozorňuje („WARN“), že nám v souboru package.json chybí obsah v polích „description“ a „repository“. Na soukromém uzavřeném projektu nám to nemusí vadit, ale obecně je lepší si tyto políčka vyplnit.

<!-- AdSnippet -->

Dále je zde informace, že NPM vytvořilo soubor package-lock.json („created a lockfile as package-lock.json“), což je v pořádku. Když si ten soubor prohlédnete, asi budete souhlasit, že jej mají spravovat stroje, nikoliv lidé.

Nakonec nám NPM poskytuje laskavé upozornění („WARN“): Aby Bootstrap správně fungoval, potřebuje následující balíčky: jQuery a Popper.

### Odbočka: „Peer“ závislosti

Jelikož jde o takzvané „peer dependencies“, tedy závislost balíčků na stejné úrovni, neinstaluje je balíčkovací systém sám, ale musíme o udělat my. Více o závislostech píšu [v textu o package.json](package-json.md).

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

Kromě informace o nainstalovaných balíčcích (např. „jquery“) a jejich verzích („3.3.1“) je zde také zpráva, že NPM v balíčcích nenalezlo žádné bezpečnostní zranitelnosti („found 0 vulnerabilities“), takže můžeme být klidní.

Důležité je vědět, že existuje možnost použít příkaz bez názvu balíčku:

```bash
npm install
```

V takovém případě se stáhnou a uloží nové verze balíčků podle předpisu z definičního souboru package.json.

## npm uninstall: Odstraní balíček {#npm-uninstall}

Samozřejmě je zde i možnost odstraňovat balíčky  z projektu:

```bash
npm uninstall popper.js
```

NPM pak provede následující:

1. Odstraní adresář popper.js z node_modules.
2. Odmaže jeho výskyt z package.json a package-lock.json

Na tom nic složitého není, takže pojďme na další příklad.

## npm list: Výpis stromu závislostí {#npm-list}

Funguje to asi takhle:

```bash
npm list --depth=<číslo>
```

`<číslo>` udává hloubku výpisu. To je dost zásadní, protože  `npm list` by nám vypsal ohromnou strukturu všech závislostí. Spokojíme se s prvními dvěma úrovněmi:

```bash
npm list --depth=0
```

Dostaneme:

```bash
├── bootstrap@4.1.3
├── jquery@3.3.1
└── popper.js@1.14.4
```

To je vlastně totéž co aktuálně obsahuje adresář node_modules/. A totéž co sekce závislostí v našem milém souboru package.json:

```json
"dependencies": {
  "bootstrap": "^4.1.3",
  "jquery": "^3.3.1",
  "popper.js": "^1.14.4"
}
```

Co znamenají ty stříšky? Možnost aktualizovat minor a patch verze, tedy druhé a třetí číslo.
Více o způsobu verzování a nastavování závislostí v package.json najdete v článku o [SemVer, sémantickém verzování](semver.md).

## npm outdated: Seznam balíčků k aktualizaci {#npm-outdated}

Představme si, že máme v souboru package.json následující:

```json
"dependencies": {
  "bootstrap": "~3.3.6",
}
```

A položíme dotaz na zastaralé verze balíčků:

```bash
npm outdated
```

Výstup:

```bash
Package                     Current  Wanted   Latest  Location
bootstrap                     3.3.6   3.3.7    4.1.3
```

Říká nám to, že aktuálně máme nainstalovánu verzi 3.3.6 („Current“), přičemž podle předpisu z package.json můžeme pomocí příkazu `npm install` aktualizovat na verzi 3.3.6 („Wanted“).

Zároveň ale je dobré vědět, že nejnovější verze Bootstrapu je 4.1.3 („Latest“). Ta se ale v našem případě nestáhne, dokud to doslovně nepovolíme v package.json - například takto:

```json
"dependencies": {
  "bootstrap": "^4.1.3",
}
```

Vidíte, že jsem zápis změnil na stříšku, což obecně doporučuji. Více je [v textu o SemVer](semver.md).

## npm update: Aktualizace verzí balíčků {#npm-update}

```bash
npm update (<název-balíčku>)
```

Tenhle příkaz slouží k aktualizaci instalované verze jednoho nebo úplně všech balíčků na nejnovější verzi vyhovující předpisu ze souboru package.json. To je věc, kterou už u nainstalovaných balíčků nedělá `npm install`.

Jen pro pořádek dodávám, že:

- `npm update` nahraje nové verze všech lokálních balíčků.
- `npm update -g` aktualizuje všechny globální balíčky.

Tenhle příkaz záměrně uvádím až na konci textu, protože pro začátečníky bude matoucí koexistence s `npm install`. Velmi často se bez `npm update` můžete obejít.

### Příklad použití

V předchozím textu jsme bez tohoto příkazu mohli žít, protože jsme si vystačili s následujícím procesem:

- `npm install` nainstaluje balíčky.
- `npm outdated` hlídá nové verze.
- Aktualizaci verzí děláme úpravou package.json a novým spuštěním `npm install`.

Tohle nám ale nemusí vyhovovat. Prostě to můžeme chtít udělat příkazem. Vezměme, že se v našem příkladu změnila verze balíčku Popper.js:

```bash
npm outdated
```

Vrací:

```bash
Package    Current  Wanted  Latest  Location
popper.js   1.14.4  1.14.5  1.14.5  npm
```

Když bychom chtěli aktualizovat a dali `npm install`, ten se spokojí s instalovanou verzí, protože vyhovuje předpisu v package.json.

Proto pojďme aktualizovat balíčky:

```bash
npm update
```

Vrátí:

```bash
+ popper.js@1.14.5
updated 1 package and audited 4 packages in 1.366s
found 0 vulnerabilities
```

Stáhne tedy novou verzi, uloží ji do adresáře node_modules/ a co je důležité – změní soubor package-lock.json. Ten, jak už víme, obsahuje informace o reálně instalovaných verzích balíčků. Změny v něm pak commitneme do repozitáře a máme aktualizováno.

### install vs. update - rozdíly {#install-vs-update}

Rozdílů mezi oběma příkazy je ale více:

- `npm install` neaktualizuje nové verze definované pomocí SemVer předpisu [v package.json](package-json.md). Výjimkou jsou verze definované jako napří. `*` nebo `latest`. Ty pak aktualizuje i příkaz `install`.
- `npm install` na rozdíl od `update` umí instalovat nové balíčky.

## npm help: Nápověda {#npm-help}

Nápovědu můžete získat různými způsoby:

- `npm help` – nápověda k nápovědě.
- `npm <příkaz> --help` (např. `npm install --help`) – stručná nápověda k příkazu.
- `npm help <příkaz>` (např. `npm help install`) – detailní nápověda k příkazu.)

Jo – a je dobré vědět, že z nápovědy na příkazové řádce se dá vylézt pomocí klávesy `q`.

To je prozatím vše. Ať se vám s NPM pracuje dobře.

Více informací:

- [Dokumentace NPM](https://docs.npmjs.com/)
- Soubory: [package.json](package-json.md) a [package-lock.json](package-lock-json.md)
- Školení [Nástroje Javascriptu](https://www.vzhurudolu.cz/kurzy/nastroje-javascriptu)

<!-- AdSnippet -->
