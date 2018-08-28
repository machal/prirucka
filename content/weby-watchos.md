# Weby na chytrých hodinkách: watchOS

Mezi zařízeními, které nějak zobrazují weby, už nějakou dobu hrají roli chytré hodinky. 

## Budou lidé weby používat na chytrých hodinkách? {#budoucnost}

Občas dostanu obrázek webu Vzhůru dolů z nějakých hodinek, ale bral jsem to spíše za kuriozitu a masovému používaní nevěřil.

*TODO obrázek*

Do původní verze knížky „Vzhůru do (responzivního) designu“ jsem ostatně napsal:

> Myslím, že je to nepoužitelné, a masovému přijetí nevěřím. Plocha je pro weby příliš malá na konzumaci obsahu, natož pak rozumnou interakci s ním.

Jenže hodinky se zvětšují a způsob jejich ovládání je stále pohodlnější. Stále platí, že nevěřím, že používaní webů na hodinkách bude *masovou* záležitostí. 

Ve všem ostatním jsem se však pravděpodobně mýlil. Do hry už vstoupil i Apple s hodinkami Watch, respektive operačním systémem na nich – watchOS. 

Píšu o tom proto, že Apple je známý tím, že kroky nemívá podložené reálnými testy uživatelů a jejich chování. Pojďme se tím zabývat. To je něco jiného, než když menší výrobce hodinek do systému *narve* prohlížeč, protože — no proč ne, že? U Apple je potřeba brát to vážně.

Novinka platí od roku 2018 a watchOS verze 5.


## Pohledem uživatele {#uzivatelsky}

Pokud se nepletu, prohlížeč není nainstalovaný jako samostatná aplikace. Jde spíše o možnost otevírat sdílené odkazy:

- V aplikacích Mail a Messages vám může přijít odkaz na web. 
- Odkaz pak můžete otevřít v prohlížeči, stránka je v něm uměle upravena.

Stránku je možné základním způsobem používat: 
- posunovat dotykem nebo "crown"
- dvojitým tapnutím zoomovat
- posunovat se vpřed a vzad v historii prohlížení (firm press, edge swipe).
- číst v Reader Mode
- používat jednoduché formuláře


## Technicky {#technicky}

- Prohlížeč je Safari, postavený na Webkitu.
- Některé vlastnosti jsou vypnuté: zmiňuje se hlavně video, Service worker, webové fonty… 

### Výchozí stav prohlížení: vynucený initial scale {#vychozi-stav}

Pokud to dobře chápu, prohlížeč se snaží weby za každou cenu zobrazit v šířce viewportu 320px. Nejspíš proto, že Apple nevěří, že jsou naše weby dobře připravené na menší rozlišení. A dobře dělá. Technicky to funguje následovně:

- Vynutí hodnotu vlastnosti `initial-scale` meta značky pro viewport na `0,49`
- Prohlížeč hlásí rozlišení 320×357 (v CSS pixelech)

*TODO obrázek (Photos)*

### Vypnutí výchozího stavu a meta značka disabled-adaptations {#disabled-adaptations}

V případě, že si jste jistí, že váš web zvládne i menší rozlišení, lze vynucenou adaptaci vypnout:

```html
<meta name="disabled-adaptations" content="watch">
```
V takovém případě bude Safari na watchOS ignorovat výchozí adaptace a pracovat s běžným rozlišením v CSS pixelech: 

- 272×340px pro 38mm hodinky Apple Watch
- 312×390px pro 42mm hodinky Apple Watch

Pojďme se podívat i na další použité technologie. Není to vlastně nic nového a je dobře, že Apple zůstal u standardních a jinde použitých technnologií.  

Následující vám doporučuji přidat na všechny veřejně dostupné obsahové weby.

### Open Graph pro náhled obrázku {#open-graph}

Abyste dosáhli hezkého náhledu odkazu v aplikacích pro e-mailování a chatování, přidejte tyhle dvě meta značky:

```html
<meta property="og:title" content="Titulek stránky">
<meta property="og:image" content="https://www.example.com/nahledovy-obrazek.jpg">
```

Předpokládám ale, že tyhle meta značky už na webu máte, kvůli náhledům na sociálních sítích nebo chatovacích aplikacích.

### Formuláře {#formulare}

Velmi mě překvapilo, že na hodinkách od Apple bude možné dělat také interakce s formuláři. Když se ale podíváte na následující obrázek, dává to smysl. Uživatelský vstup je vyřešení vážně hezky:

*TODO obrázek (Photos)*

Musíte jen použít správné typy pro značku `<input>` nebo nativní `<select>`:

```html
<input type="tel">
<input type="email">
<input type="date">
<select>
```

Opět předpokládám, že to pro vás není nic nového a přidáváte to do každého formuláře, neboť to je přístupné řešení pro všechny možné platformy.

Apple navíc doporučuje přidávat popisek `aria-label` (také standardizovaný), aby uživatel viděl, jaké políčko vyplňuje, když se mu ovládací prvky zobrazí přes celou šířku stránky:

```html
<input type="email" aria-label="E-mailová adresa">
```

### Mód čtení {#reader-mode}

Na delších textových stránkách se Safari na watchOS automaticky přepíná do „Reader Mode“, ve kterém vnucuje stylování stránky tak, aby se dobře četla. To opět není nic nového, podobný režim má Safari na všech zařízeních.

Webmasteři mohou udělat následující:

- Zavřít hlavní obsah do značky `<article>`.
- K sématickým informacím o článcích přidat atributy `itemprop`. Vypadá to, že uznávané jsou hodnoty `title`, `author`, `subheading` nebo `pubdate`.
- Používat sémanticky správné HTML značky pro obsah: `<strong>`, `<em>`, `<blockquote>`, `<figure>` a `<figcaption>`.

Více informací:

- https://www.apple.com/watchos-preview/
- https://erikrunyon.com/2018/06/designing-web-content-for-watchos/

