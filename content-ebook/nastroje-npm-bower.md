# Správa balíčků: NPM a Bower

Dva balíčkovací systémy? Začátečníkům to dělá docela problémy. V následujícím textu se také dozvíte, k čemu se více hodí NPM a k čemu Bower.

V kontextu vývoje UI se přes ně instalují dva typy balíčků:

- komponenty webu – např. Bootstrap nebo jQuery a jeho pluginy (obvykle obstará Bower)
- software pro interní potřebu vývojáře – např. Grunt pluginy vylepšující naše workflow (obvykle obstará NPM)

## Proč vlastně balíčkovací systém?

Kodéři tradičně žádný balíčkovací systém nepoužívali, pojďme si proto říct argumenty na jeho podporu.

Především je to **snadnější instalace** – napíšu `bower install jquery` a do adresáře `bower_components` se mi nainstaluje aktuální verze jQuery.

S tím souvisí i **jednodušší aktualizace** – když vyjde nová verze jQuery, napíšu jen `bower update jquery` a mám ji v projektu.

To celé pak **zlepšuje spravovatelnost projektu** – NPM i Bower komponenty se ukládají do zvláštních adresářů, které neverzujeme. Závislosti projektu máme verzované jen v konfiguračních souborech NPM nebo Boweru. Díky tomu máme jednodušší repozitář a jeho historii.

## Node Packaging Manager, NPM.js

Balíčkovací systém pro jazyk Javascript. Tak jako PHP svět má svůj Composer, Javascript má svůj NPM.

V mém workflow slouží hlavně k instalaci knihoven, které využívám pro interní potřebu – typicky ony Grunt pluginy. Přístupů k balíčkování je ale více, a tak je dobré vědět, že knihovny využívané webem jako jQuery lze pomocí NPM nainstalovat také.

Používá konfigurák `package.json` a standardně vše instaluje do adresáře `node_modules`.

Více na [npmjs.org](http://npmjs.org).

## Bower

Bower je balíčkovací systém pro frontend. Komponenty, které s jeho pomocí spravuji, jdou nad rámec Javascriptu. Obsahují často také CSS nebo obrázky.

Jak vyplývá z předchozího, Bower v mém případě spravuje závislosti projektu. Nejen tedy obligátní jQuery balíčky, ale také polyfilly typu Respond.js nebo Picturefill a další knihovny, jako je Bootstrap.

Používá konfigurák `bower.json` a standardně vše instaluje do adresáře `bower_components`.

Více na [bower.io](http://bower.io).

## Pár užitečných příkazů

Bower naštěstí převzal syntaxi NPM, takže práce s ním je velmi podobná.

Vyhledání knihovny:

```bash
npm|bower search jquery
```

Instalace jQuery:

```bash
npm|bower install jquery
```

Můžete použít přepínač `--save-dev`, který vám knihovnu rovnou uloží do vývojářských závislostí v konfigurácích `bower.json` nebo `package.json`. V případě jQuery jde ale o uživatelskou závislost, proto byste při vývoji webu použili nejspíše `--save` přepínač.

Pojďme dál. Aktualizace jQuery:

```bash
npm|bower update jquery
```

Instalaci i aktualizace je možné dělat pro celý projekt najednou. Bower i NPM porovnají konfigurační soubor s aktuálně vydanými verzemi závislostí:

```bash
npm|bower install|update
```

## Bower versus NPM

Pojďme si tedy zopakovat rozdíly v účelu:

- NPM je balíčkovací systém pro jazyk Javascript. Ve workflow kodéra slouží typicky pro software interní potřeby.
- Bower je balíčkovací systém pro frontend. Typicky se používá pro komponenty webu.

Kromě účelu se oba balíčkovače liší i ve způsobu ukládání závislostí:

- NPM instaluje balíčky, na kterých je instalovaný balíček závislý, pro každý balíček zvlášť. Ve složce, kam závislosti ukládá, tedy bývá více verzí jednoho balíčku. Například pro Grunt pluginy to dává naprostý smysl, každý balíček potřebuje trochu jinou verzi jiného balíčku.
- Bower naopak závislosti instaluje vždy jen jednou. Opět to v jeho kontextu dává smysl, jQuery chcete na webu mít jen v jedné verzi.

U průměrného projektu tedy bude složka `bower_components` datově vždy výrazně menší než složka `node_modules`.


