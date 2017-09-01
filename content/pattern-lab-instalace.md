# Jak nasadit Pattern Lab a nepřijít přitom o rozum?

[Pattern Lab](http://patternlab.io/) je nástroj pro tvorbu a prezentaci knihoven uživatelských rozhraní. Prostě toho co asi znáte pod pojmy *style guide* nebo *pattern library*. 

Používám ho na aktuálním projekt a jsem stále více přesvědčený, že je hlavně pro vymýšlení a testovaní UI knihovny je to skvělý nástroj. Jenže — postup jeho rozchození je děsný porod. Proto tenhle čistě technický návod. Doufám, že vám to ušetří nehezké nervy, které jsem s Pattern Labem měl já.

## Pattern Lab využijte jako výchozí šablonu pro váš projekt

První rada zní – nesnažte se Pattern Lab háčkovat do existujícího projektu. Ne že by to nešlo, ale brzy vám dojdou kapesníčky pro otírání potu z čela. Když chvilku vydržíte, vysvětlím to.

## Jakou vybrat verzi? Nejlépe základní PHP

První ošemetnost je ve výběru verze: základní dělení je na PHP a Node verzi, jenže pak máme ještě Gulp & Grunt  a edice podle vybraného šablonovacího jazyka.

Já si vybral základní PHP verzi s Mustache šablonami. Jednak mě PHP na rozdíl od Node běží na všech produkčních serverech projektů. Důležitější je, že nekoliduje s mým Grunt workflow (kopírování, SASS, PostCSS, srandy kolem JS…). S původně vybranou Grunt verzí jsem se velice brzy dostal do problému dvou Grunfile.js.

### Instalace základní PHP verze

1. Instalujte Composer
2. V rodičovském adresáři vašeho projektu pak pusťte:  
```
composer create-project pattern-lab/edition-mustache-standard patternlab2-example && cd $_
```
3. Vyberte instalaci Mustache starterkitu. (Volba `1`).
4. Spusťte server, který sleduje změny v souborech knihovny:
```
php core/console --server --with-watch
```
5. Na `http://localhost:8080` byste pak měli vidět dokumentaci instalovanou pomocí starterkitu.

## Struktura adresářů je fajn, neupravujte ji

K tomu jsem samozřejmě musel dojít až bolestnou zkušeností.  Chtěl jsem totiž Pattern Lab uzpůsobit [struktuře svých projektů](https://www.vzhurudolu.cz/blog/29-organizace-css-2014). Chyba!

Pattern Lab totiž neslouží k vytváření webu, ale hlavně **k návrhu a prezentaci UI knihovny.** 

Držte se jeho struktury. Zdá se mi lepší mít web v jiném repozitáři. Hotové styly, skripty, fonty a obrázky není problém exportovat z Pattern Labu do repozitáře webu.

### Struktura adresářů Pattern Labu:

Vypadá asi takto:

```
├── public
└── source
 ├── _annotations
 ├── _data
 ├── _meta
 ├── _patterns
 ├── css
 ├── fonts
 ├── images
 └── js
```
- `public` – Adresář, který nemusíte řešit, protože tam Pattern Lab kompiluje hotovou dokumentaci. Je v něm soubor `index.html`, který si otevřete v prohlížeči, pokud se to nepovedlo předchozím postupem.
- `source` – Zdroje vaší knihovny.
  - `_annotations` – [Poznámky](http://patternlab.io/docs/pattern-adding-annotations.html) k elementům. Markdown soubory, kde můžete psát návod jak s elementy pracovat.
  - `_data` – [Obsah](http://patternlab.io/docs/data-overview.html) pro šablony viditelné v Pattern Labu. Vychytávka je, že Pattern Lab můžete automaticky plnit reálným obsahem, pokud pracujete na už existujícím webu.
  - `_meta` – [HTML hlavička a patička](http://patternlab.io/docs/pattern-header-footer.html) pro šablony zde zobrazované.
  - `_patterns` – Nejdůležitější adresář, obsahující [samotné prvky knihovny](http://patternlab.io/docs/pattern-organization.html). Je dobré vědět, že organizace už nemusí odpovídat [Atomic Designu](http://bradfrost.com/blog/post/atomic-web-design/).
  - `css`, `fonts`, `images`, `js` – Sem pište nebo kompilujte assety. 

## Moje struktura SCSS souborů

Abych všechny soubory jednotlivých komponent v jednom adresáři, mám například takovouto strukturu:

```
└── source
 └── _patterns
  └── atoms
   └── forms
    ├── button.mustache
    ├── button.md
    └── button.scss             
```
Mám tady jak soubory s textem o používání tlačítek (`button.md`), soubor se vzorovým HTML (`button.mustache`), tak soubor se styly. Javascripty by patřily také sem. 

  
## Mé workflow

- Pomocí PHP skriptu sleduji změny v šablonách, ale už nechci, aby PHP obstarávalo běh serveru a hlídalo změny v assetech:  
```
php core/console --watch --patternsonly
```
- V druhém okně mě běží Grunt s BrowserSyncem, který právě onen server obstarává, hlídá změny v CSS, JS assetech a posílá změny naživo do prohlížeče.
  

### Demo:

- http://demo.patternlab.io/?p=atoms-brand-colors
- https://github.com/pattern-lab/starterkit-mustache-demo/tree/master/dist

## Co se servisními SCSS soubory ?

Předpokládám, že v SCSS máte také soubory, které přímo negenerují UI komponenty. Do `css` adresáře s nimi. Pokud byste je nechali v `_patterns`, buď by se vám zobrazily v rozhraní knihovny (PHP verze) nebo vám na nich zdechne Node verze Pattern Labu:

```
Running "patternlab" task
[TypeError: Cannot read property 'length' of null]
```

## Styly pro rozhraní knihovny

Náhledy barev atd. Musí být ve vašem `css` adresáři v souboru `pattern-scaffolding.css`.


## Další užitečné zdroje

- [Ohromný článek na Smashing Magazine](https://www.smashingmagazine.com/2016/07/building-maintaining-atomic-design-systems-pattern-lab/).
- [Demo Pattern Labu](http://demo.patternlab.io/). Zdrojáky jsou [na Githubu](https://github.com/pattern-lab/starterkit-mustache-demo).
