# package-lock.json

Soubor, který uchovává přesné informace o instalovaných balíčcích NPM. Je to užitečné pro sjednocení verzí u různých vývojářů pracujících na jednom projektu.

Vezměme že v `package.json` definuji tuhle závislost:

```json
"devDependencies": {
  "less": "^3.7.0",
}
```

Dle [sémantického verzování](semver.md) tedy chci verzi `3.7.0` a výše s tím, že je možné aktualizovat „minor“ verze. Je tedy možné, že jeden člen týmu bude mít nainstalovanou verzi `3.7.0` a jiný pak `3.8.1`. Vždy podle data, kdy si závislosti instalovali.

`package-lock.json` tohle sjednocuje. Zápis pro balíček LESS bude vypadat následovně:

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

takže se nemůže stát, že někdo má verzi balíčku 4.15.4 a jiný 4.15.5, když “express”: “^4.15.4”

Vedle [package.json](package-json.md) je to klíčový soubor pro definice závilostí projektu. A stejně jako tenhle jeho brácha by měl být commitovaný do repozitáře. V NPM se používá od verze 5.

Rozdíly mezi `package.json` a `package-lock.json`? 

- První obsahuje předpis, tedy ideální stav, druhý realitu.
- První neřeší strom závislostí, druhý jej přesně popisuje.
- První se může ručně upravovat, u druhého by se to obvykle dělat nemělo.





* 
* od verze npm 5
* od verze 5.1 - pokud ale balíček existuje jen v package.json je v package.json v jiné verzi, má přednost package.json a 


Více informací [je v dokumentaci NPM](https://docs.npmjs.com/files/package-lock.json).
