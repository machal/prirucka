# package-lock.json: Proč potřebujeme „lockfile“?

Co je hernajs ten `package-lock.json`, který se vám objevuje v hlavní složce repozitáře, když používáte balíčkovací manažer NPM?

Jedná se o soubor, který uchovává přesné informace o instalovaných balíčcích. Vedle [package.json](package-json.md) je to klíčový prvek definice závislostí projektu. A stejně jako tenhle jeho brácha by měl být commitovaný do repozitáře. Na rozdíl od něj se ale neupravuje ručně. 

V NPM se `package-lock.json` používá od verze 5. „Lockfile“ je poměrně nová věc, převzatá z konkurenčního nástroje Yarn.

## K čemu to přesně je? {#k-cemu}

Vyjdu [z oficiální dokumentace](https://docs.npmjs.com/files/package-lock.json). `package-lock.json` má následující cíle:

1. Zpřístupnit strom závislostí a jeho změny v čase všem vývojářům v týmu, ale také strojům - mašinám pro deployment, continuous integration…
2. Popsat strom závislostí v daném okamžiku.
3. Poskytnout možnost vrátit se v čase k určité verzi stromu závislostí.
4. Optimalizovat instalační proces tím, že jeho existence NPM dovolí přeskakovat již existující položky.

## Rozdíly mezi package.json a package-lock.json? {#rozdily}

- První definuje předpis, druhý popisuje realitu.
- První neřeší strom závislostí, druhý jej vytváří.
- První se běžně ručně upravuje, u druhého by se to obvykle dělat nemělo.

## Ukázka a popis vlastností  {#ukazka-vlastnosti}

Vezměme, že v `package.json` definuji tuhle závislost:

```json
"devDependencies": {
  "less": "^3.7.0",
}
```

Dle [sémantického verzování](semver.md) tedy chci verzi `3.7.0` a výše s tím, že je možné aktualizovat minor – takže cokoliv kromě prvního čísla.

A teď ten hlavní problém, který „lockfile“ řeší: Je totiž možné, že jeden člen týmu bude mít nainstalovanou verzi `3.7.0` a jiný pak `3.8.1`. Obojí bude vyhovovat předpisu. Vždy podle data, ve kterém si závislosti instalovali – například přes `npm install`.

<!-- AdSnippet -->

`package-lock.json` tohle sjednocuje. Je to soubor, který automaticky vygeneruje NPM, takže do něj asi nemusíte koukat. My si tu ale jeden záznam rozebereme, abychom zkusili pochopit, co se uvnitř odehrává:

```json
"less": {
  "version": "3.8.1",
  "resolved": "https://registry.npmjs.org/less/-/less-3.8.1.tgz",
  "integrity": "sha512-8HFGuWmL3FhQR0aH89escFNBQH/nEiYPP2ltDFdQw2chE28Yx2E3lhAIq9Y2saYwLSwa699s4dBVEfCY8Drf7Q==",
  "dev": true,
  "requires": {
    "clone": "^2.1.2",
    "errno": "^0.1.1"
  },
  "dependencies": {
    "clone": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/clone/-/clone-2.1.2.tgz",
      "integrity": "sha1-G39Ln1kfHo+DZwQBYANFoCiHQ18=",
      "dev": true
    }
  }
}
```

Co tenhle zjednodušený záznam pro balíček preprocesoru LESS ukazuje?

- `version` – verze balíčku.
- `resolved` – adresa, odkud se tahle verze naposledy stahovala.
- `integrity` – bezpečnostní  kód, který ověřuje, zda je balíček stahovaný z adresy bez manipulací nějakého padoucha.
- `dev` – hodnota `true` označuje vývojářské závislosti. Viz `devDependencies` v [package.json](package-json.md).
- `requires` – závislosti specifikované v [package.json](package-json.md).
- `dependencies` – reálně instalované závislosti. (Rozdíly mezi `requires` a `dependencies` popisuje [tahle odpověď na Stack Overflow](https://stackoverflow.com/questions/52926922/package-lock-json-requires-vs-dependencies).)

Už to dává smysl? Více informací o „lockfile“ [je v dokumentaci NPM](https://docs.npmjs.com/files/package-lock.json).

<!-- AdSnippet -->
