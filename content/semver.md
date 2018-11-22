# SemVer: Sémantické verzování

SemVer je specifikace, jejímž cílem je sjednocení způsobu verzování software.

<div class="related web-only" markdown="1">
- [NPM a Node.js: Rozcestník odkazů](rozcestnik-npm-node.md)
</div>

Autorům prostě předepisuje, jakým způsobem označovat nové verze jejich programů.

## Major.Minor.Patch

Vezměme, že software vyjde v této verzi:

```text
1.2.3
```

(…a že autoři dodržují SemVer, což není úplná samozřejmost.)

### Major: 1.y.z

První číslovka je určená pro *major* verze, které mohou do software přinášet zlomové změny – v našem příkladu je to číslo `1` na první pozici.

Specifikace ale mluví o výjimce pro verze začínající nulou: Major verze s hodnotou 0 (`0.y.z`) je určena pro počáteční vývoj. Cokoliv se může změnit a API v tomto formátu by nemělo být považováno za stabilní.

### Minor: x.2.z

Číslovka za tečkou označuje *minor* verzi. Ta může přinášet tyto změny:

- přidání zpětně kompatibilní funkcionality,
- odebrání funkcionality (jako zastaralé) i pokud neovlivňuje samotný API kód.

Jde prostě o změny, které jsou z pohledu uživatele programu zpětně kompatibilní. V příkladu nahoře je to číslovka `2` na druhé pozici.

### Patch: x.y.3

Třetí číslovka je *patch*. Ta se mění při opravách chyb. V ukázce výše je to číslovka `3` na třetí pozici.

Nicmoc složitého na tom není. Specifikace je v českém překladu dostupná zde: [semver.org/lang/cs/](https://semver.org/lang/cs/)

Protože jsme ale na blogu, který se věnuje převážně webového frontendovému vývoji, musíme se podívat, jaký má SemVer vliv na vyžadování verzí v konfiguraci [NPM](npm.md) – [package.json](package-json.md).

## SemVer a package.json {#package-json}

Vytáhněme si kousek tohoto konfiguračního souboru: 

```json
"dependencies": {
  "bootstrap": "^4.1.3",
  "jquery": "~3.3.1",
  "popper.js": "1.14.4"
}
```

Speciálními znaky u čísel verzí říkám, jakým způsobem je dovoleno tyhle balíčky aktualizovat (např. při vyžádání pomocí `npm install`):

- `^` – stříška (caret) umožňuje stahovat libovolné „minor“ verze. Zde u Bootstrapu klidně stáhne verzi `4.2.0`, ale už ne třeba `5.0.0`.
- `~` – vlnovka (tilde) stahuje jen nové „patch“ verze. Takže jsme NPM dovolili stáhnout například verzi `3.3.11`, ale už ne `3.4.0`.
- Bez speciálních znaků uvedená verze u Popper.js znamená: Chci přesně tuhle verzi a basta.

U běžných frontendových balíčků je možné dávat stříšku. Pokud ten software dobře neznáte nebo chcete být opatrní, pak doporučuji vlnovku.

<!-- AdSnippet -->

Existují zde ale i další možnosti:

- `latest` – chcete vždycky poslední verzi tohoto software.
- `*`  – balíček se aktualizuje zcela libovolně, nezáleží vám na verzi. To samé udělá prázdná definice, např.  `"bootstrap": ""`.
- `>`, `<` – větší než, menší než. Možné je i „větší nebo rovno“ a tak dále. Nebo rozmezí: `">=1.2.7 <1.3.0"`.
- `1.2.x` – stejné jako vlnovka. Aktualizuje se jen *patch* verze.

Více možností a příkladů je v dokumentaci NPM: [docs.npmjs.com/files/package.json](https://docs.npmjs.com/files/package.json#dependencies)

## SemVer v NPM

Výchozí typ závislostí je stříška, tedy možnost aktualizace minor verzí: `^4.1.3`.

Pár užitečných příkazů:

- `npm update` nebo `npm install` stáhne nové verze podle deklarace v package.json.
- `npm outdated` zobrazí seznam dostupných aktualizací. Velmi užitečné.
- `npm install <balicek>@1.2.3` stáhne a uloží balíček ve specifikované verzi.
- `npm install <balicek> --save-exact` stáhne a uloží balíček. Do package.json jej vloží v přesné verzi, např. `"balicek": "1.12.1"`.
- `npm config set save-prefix '~'` změní výchozí specifikaci závislostí ze stříšky na vlnovku. Pokud k tomu nemáte silné důvody, rozhodně nedoporučuji dělat.
