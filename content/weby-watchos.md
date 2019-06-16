# Weby na chytrých hodinkách Apple Watch

Mezi zařízeními, které nějak zobrazují weby, už určitou dobu figurují i chytré hodinky. Ale má smysl se jimi v responzivním designu zabývat? Ano, má, minimálně těmi od Apple.

## Budou lidé weby používat na chytrých hodinkách? {#budoucnost}

Občas dostanu obrázek webu Vzhůru dolů z nějakých hodinek, ale bral jsem to spíše za kuriozitu a masovému používání nevěřil.

<div class="web-only" markdown="1">
Do první verze knížky [Vzhůru do (responzivního) designu“](https://www.vzhurudolu.cz/kniha-responzivni-design) jsem ostatně napsal:
</div>

<div class="ebook-only" markdown="1">
Do první verze téhle knížky jsem ostatně napsal:
</div>

> Myslím, že je to nepoužitelné, a masovému přijetí nevěřím. Plocha je pro weby příliš malá na konzumaci obsahu, natož pak rozumnou interakci s ním.

Jenže hodinky se zvětšují a způsob jejich ovládání je stále pohodlnější. Stále sice platí, že nevěřím, že používání webů na hodinkách bude *masovou* záležitostí, ale v tom ostatním jsem se pravděpodobně mýlil.

<!-- AdSnippet -->

Do hry už vstoupil i Apple s hodinkami Watch, respektive operačním systémem na nich – watchOS.

Píšu o tom proto, že Apple je známý tím, že kroky nemívá nepodložené reálnými testy uživatelů a jejich chování. To je něco jiného, než když menší výrobce hodinek do systému *narve* prohlížeč, protože – no proč ne, že?

Počínaje tímto krokem Apple (platí od roku 2018 a watchOS verze 5) je potřeba věřit tomu, že lidé weby na hodinkách nějak používat budou. Rozdíl oproti mobilům nebo desktopu bude pravděpodobně v intenzitě toho používání. V textu vycházím hlavně z prezentace „Designing Web Content for watchOS“ přímo od Applu. [vrdl.in/webwatchos](http://vrdl.in/webwatchos)

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=clATaBexIEc">MacRumors: How to Browse the Internet on Apple Watch</a> ~ Jak funguje prohlížení webu přes hodinky od Apple.
</p>

Ale čtěte dále, všechno se dozvíte.

## Pohledem uživatele {#uzivatelsky}

Prohlížeč na WatchOS není nainstalovaný jako samostatná aplikace. Jde tam spíše o možnost otevírat sdílené odkazy:

- V aplikacích Mail a Messages vám může přijít odkaz na web.
- Odkaz pak můžete otevřít v prohlížeči, přičemž stránka je v něm uměle upravena.

Stránku je možné základním způsobem používat:

- posouvat stránku dotykem nebo tlačítkem „korunky“,
- dvojitým tapnutím přiblížit obsah,
- posunovat se vpřed a vzad v historii prohlížení (gesto švihnutí od kraje obrazovky),
- číst ve čtenářském režimu (Reader Mode),
- používat jednoduché formuláře.

## Technicky {#technicky}

- Prohlížeč je Safari, postavený na Webkitu.
- Některé vlastnosti jsou vypnuté: zmiňuje se hlavně video, Service worker, webové fonty…

### Výchozí stav prohlížení: vynucený initial-scale {#vychozi-stav}

Pokud to dobře chápu, prohlížeč se snaží weby za každou cenu zobrazit v šířce viewportu 320px. Nejspíš proto, že Apple nevěří, že jsou naše díla připravená na menší rozlišení. Dobře dělá.

Technicky to funguje následovně:

- Vynutí hodnotu vlastnosti `initial-scale` [meta značky pro viewport](viewport-meta.md) na `0.49`.
- Prohlížeč pak hlásí rozlišení 320 × 357 (v CSS pixelech).

<figure>
<img src="../dist/images/original/watchos-weby-shrink.jpg" alt="shrink-to-fit na watchos">
<figcaption markdown="1">
*Jak fungují výchozí adaptace webů na watchOS 5. Zdroj: Apple*
</figcaption>
</figure>

### Vypnutí výchozího stavu a meta značka disabled-adaptations {#disabled-adaptations}

V případě, že jste si jistí, že váš web zvládne i menší rozlišení, lze vynucenou adaptaci vypnout:

```html
<meta name="disabled-adaptations" content="watch">
```

V takovém případě nebude Safari na watchOS provádět výchozí adaptace a pracovat s běžným rozlišením v CSS pixelech:

- 272 × 340 px pro 38mm hodinky Apple Watch
- 312 × 390 px pro 42mm hodinky Apple Watch

Pojďme se podívat i na další použité technologie. Není to vlastně nic nového a je dobře, že Apple zůstal u standardního a jinde zavedeného kódu.

<!-- AdSnippet -->

Následující kousky kódu vám doporučuji přidat na všechny veřejně dostupné obsahové weby. „Riziko“ zobrazení na chytrých hodinkách totiž od letoška poroste.

### Open Graph pro náhled obrázku {#open-graph}

Abyste dosáhli hezkého náhledu odkazu v aplikacích pro práci s e-maily a chatování, přidejte tyhle dvě meta značky:

```html
<meta property="og:title" content="Titulek stránky">
<meta property="og:image" content="https://www.example.com/nahledovy-obrazek.jpg">
```

Předpokládám ale, že je už na webu máte, a to kvůli zobrazení náhledů na sociálních sítích nebo v chatovacích aplikacích.

### Formuláře {#formulare}

Mile mě překvapilo, že na hodinkách od Applu je možné dělat také interakce s formuláři. Když se ale podíváte na následující obrázek, dává to smysl. Uživatelský vstup je vyřešený vážně hezky:

<figure>
<img src="../dist/images/original/watchos-weby-forms.jpg" alt="Formuláře na watchos">
<figcaption markdown="1">
*Formulářové prvky na watchOS 5. Zdroj: Apple*
</figcaption>
</figure>

Jako webmasteři jen musíte použít správné typy pro značku `<input>` nebo nativní prvek pro výběr `<select>`:

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

Na delších textových stránkách se Safari na watchOS automaticky přepíná do „Reader Mode“. V něm vnucuje stylování stránce tak, aby se dobře četla. To opět není nic nového, protože podobný režim má Safari na všech zařízeních. Jen ho nevnucuje.

Webmasteři mohou pro lepší uživatelský prožitek udělat následující:

- Zavřít hlavní obsah do značky `<article>`.
- K sémantickým informacím o článcích přidat atributy `itemprop`. Vypadá to, že uznávané jsou hodnoty `title`, `author`, `subheading` nebo `pubdate`.
- Používat sémanticky správné HTML značky pro obsah: `<strong>`, `<em>`, `<blockquote>`, `<figure>` a `<figcaption>`.

<!-- AdSnippet -->
