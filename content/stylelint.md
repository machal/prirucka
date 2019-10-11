# Stylelint, protože pořádek musí být. I v CSS kódu

[Stylelint](https://stylelint.io/) je nástroj pro automatickou kontrolu CSS. Usnadní vám psaní jednotnějšího a kvalitnějšího kódu. Hlavně na větších projektech, nebo na takových, kde se styly snaží *rozbít* více lidí najednou. Prostě linter.

Sám se ho snažím vnucovat klientům, protože obvykle dělám pro firmy, jejichž CSSka jsou hodně nafouklá a složitá. Ale používám ho i tady na blogu, jehož styly nepravidelně kutíme [ve dvou lidech](https://www.vzhurudolu.cz/o-webu). A právě použití na Vzhůru dolů vezmu jako podklad pro tenhle text.

## S čím Stylelint pomůže

Jako asi každý lintovač buzeruje vývojáře ve třech oblastech:

### Možné chyby v kódu

Například překlepy v názvech vlastností ([property-no-unknown](https://stylelint.io/user-guide/rules/property-no-unknown/)) nebo zapomenuté prázdné deklarace ([block-no-empty](https://stylelint.io/user-guide/rules/block-no-empty/)) nebo komentáře ([comment-no-empty](https://stylelint.io/user-guide/rules/comment-no-empty/)). Další jsou uvedené [v dokumentaci](https://stylelint.io/user-guide/rules/#possible-errors).

<!-- AdSnippet -->

### Omezení různých způsobů zápisu

Například zakázání používání pojmenovaných barev ([color-named](https://stylelint.io/user-guide/rules/color-named/)) nebo omezení počtu desetinných míst v hodnotách. ([number-max-precision](https://stylelint.io/user-guide/rules/number-max-precision/)) [Dokumentace](https://stylelint.io/user-guide/rules/#limit-language-features).

### Stylistika

Takové to, když jeden zapisuje barvy v hexa kódu velkými a druhá malými ([color-hex-case](https://stylelint.io/user-guide/rules/color-hex-case/)) a mnoho dalších. [Dokumentace](https://stylelint.io/user-guide/rules/#stylistic-issues).

## Jak to přesně funguje?

Různými způsoby. My třeba lintování pouštíme ručně přes [plugin pro Grunt](https://github.com/wikimedia/grunt-stylelint):

```bash
$ grunt stylelint
```

Taková věc pak projde definovaný adresář a napíše, jak se váš kód shoduje s konfigurací. Může například vrátit něco takového:

```bash
assets/scss/base/vd-base.scss
  28:23  ✖  Unexpected !important                                 declaration-no-important 
  85:19  ✖  Unexpected quotes around "Capita"                     font-family-name-quotes  
  95:3   ✖  Unexpected vendor-prefix "-webkit-text-size-adjust"   property-no-vendor-prefix
 123:1   ✖  Expected no more than 2 empty lines                   max-empty-lines          
 194:12  ✖  Expected quotes around "text"                         selector-attribute-quotes
```

Jak vidíte, ukazuje mi to možné zásadnější problémy se spravovatelností (přítomnost `!important` v [declaration-no-important](https://stylelint.io/user-guide/rules/declaration-no-important/)), ale taky menší problémy se stylistikou – způsobem psaní (prázdné řádky v [max-empty-lines](https://stylelint.io/user-guide/rules/max-empty-lines/)).

O pravidlech si ještě něco řekneme, vydržte. Teď se chci vrátit k možným způsobům využití a tedy i instalace. Stylelint je Node.js balíček, takže nabízí všechny obvyklé způsoby kamarádění:

* Na [příkazové řádce](https://stylelint.io/user-guide/cli/). 
* [V editorech](stylelint-editory.md): nabízí se Sublime, Atom, VS Code, Vim a Emacs.
* Jako [plugin pro sestavovače](https://stylelint.io/user-guide/complementary-tools/#build-tool-plugins) typu [Grunt](grunt.md), Gulp nebo [Webpack](webpack.md).
* Jako [plugin pro PostCSS](https://stylelint.io/user-guide/postcss-plugin/).

Na příkazové řádce jej občas používám, k tomu se vrátím. 

Využití v editoru trochu spoléhá na aktivitu konkrétních vývojářů v týmu, ale z pohledu efektivity je nejvýhodnější. 

## Použití s Grunt pluginem

Instaluje se spolu se Stylelintem známým způsobem:

```bash
$ npm install stylelint grunt-stylelint --save-dev
```

<div class="related" markdown="1" class="web-only">
- [Grunt.js](grunt.md)
- [Užitečné Grunt pluginy](grunt-pluginy.md)
</div>

Takhle se vám nainstaluje do `package.json`. To víte. Možná ale nevíte, že Stylelint dost často mění pravidla i na úrovni minor (setinkových) aktualizací. Proto sami autoři doporučují používat vlnovku, která zamezí stahování major verzí. Viz `package.json`:

```javascript
"stylelint": "~8.1.1"
```

Konfigurace Grunt pluginu pak v Gruntfile.js nebo někde jinde vypadá asi takto:

```javascript
options: {
  failOnError: false,
  syntax: 'scss'
},
src: [
  'assets/scss/**/*.scss',
  '!assets/scss/lib/**/*.scss'
]
```

Vysvětlím:

* `failOnError: false` – Při nalezení chyby Stylelint standarně skončí hlášením `„Warning: Task "stylelint:src" failed“`, což děsně mate všechny nováčky. Ne, task tímto nehavaroval, jen máte v CSS chyby. Raději si to vypněte uvedenou konfigurací.
* `syntax: 'scss'` – Ano, umí kontrolovat i SCSS nebo LESS soubory. Bez toho bychom se mohli jít klouzat, že ano.
* Všimněte si, že v `src` vylučuji adresář `lib/`. Tam jsou umístěné soubory s knihovnami třetích stran, ale také soubory, které „přebíjejí“ jejich CSS pravidla. Dobře víte, že tady jde veškerá čistota kódu stranou. Prostě se vezmou vidle a… Nelintuje se!

### Jo, i z příkazové řádky to jde

Můžu samozřejmě Stylelint zavolat přímo z příkazové řádky na konkrétní soubor:

```bash
stylelint "slozka/soubor.css"
```

Jen je pak potřeba si Stylelint nainstalovat globálně:

```bash
npm install -g stylelint
```

## Nastavení kontrolních pravidel

Právě [množství pravidel](https://stylelint.io/user-guide/rules/) a jejich nastavení dělá Stylelint vaším vysněným přítelem. Přítelem s vidlemi na ošklivý CSS kód, který leta trápí vaše projekty.

Ale jen se neradujte, bude vás to stát více námahy než z článku vyznívá. 

Pravidel je tak moc, že by bylo prakticky Stylelint z nuly nastavit na nějakou přísnější úroveň kontroly. Naštěstí je tu [standardní konfigurace](https://github.com/stylelint/stylelint-config-standard), která obsahuje rozumnou sadu do začátků.

Nainstalujeme si ji:

```bash
$ npm install stylelint-config-standard --save-dev
```

Konfigurace Stylelintu se obvykle dává do samostatného souboru `.stylelintrc`. Hned na první řádce specifikujeme, že jde o rozšíření standarní konfigurace a následně přidáme naše vlastní pravidla:

```javascript
{
  "extends": "stylelint-config-standard",
  "rules": {
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```

Takhle by mohl vypadat hodně jednoduchý konfigurák pravidel. Ale pro inspiraci ukážu verzi používanou pro vývoj Vzhůru dolů:

```javascript
{
  "extends": "stylelint-config-standard",
  "rules": {
    "at-rule-empty-line-before": null,
    "at-rule-no-unknown": [
      true, {
        "ignoreAtRules": ["if", "else", "mixin", "include", "content", "for"]
      }
    ],
    "block-closing-brace-empty-line-before": null,
    "block-closing-brace-newline-after": null,
    "color-hex-case": [ "lower" ],
    "unit-whitelist": [ "px", "em", "rem", "%", "s", "deg" ],
    "declaration-no-important": null,
    "declaration-empty-line-before": "never",
    "declaration-colon-newline-after": "always-multi-line",
    "no-extra-semicolons": true,
    "max-empty-lines": 2,
    "font-family-name-quotes": "always-where-recommended",
    "function-url-quotes": "never",
    "function-comma-newline-after": null,
    "function-parentheses-space-inside": null,
    "max-nesting-depth": 3,
    "media-feature-name-no-vendor-prefix": true,
    "number-leading-zero": "never",
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": null,
    "selector-list-comma-newline-after": null,
    "selector-attribute-quotes": "always",
    "selector-max-compound-selectors": 3,
    "selector-max-specificity": "0,4,0",
    "selector-max-universal": 1,
    "selector-max-id": 0,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-element-colon-notation": "single",
    "value-no-vendor-prefix": true
  }
}
```

Pár poznámek:

* Některá pravidla ze [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) považuji za zbytečně svazující, proto je na úrovni naší konfigurace vypínáme pomocí `null`.
* Jiná pravidla zde trpím jen se skřípěním zubů. [selector-max-specificity](https://stylelint.io/user-guide/rules/selector-max-specificity/) nastavuje maximální váhu selektoru na 4 třídy. Raději bych měl dvě, ale starší kód mě tíží i na blogu – abyste si nemysleli, že si žiju v růžovém světě.
* Někdy je těžké se Stylelintem domluvit. Například u pravidla [at-rule-no-unknown](https://stylelint.io/user-guide/rules/at-rule-no-unknown/) nesmyslně hlásí i klíčová slova preprocesoru Sass. Lze to říct obecne – Stylelint vám dlouhodobě dost práce ušetří, ale v krátkodobém horizontu očekávejte, že do zkamarádění s ním budete muset vložit dost času.

Celkově vzato mě ale tahle konfigurace vyhovuje. Kód byl poměrně v dobrém stavu už před nasazením Stylelintu a ten teď zvedá laťku.

<!-- AdSnippet -->

Pokud bych ale začal pracovat na vylepšení hodně starého CSS kódu, `.stylelintrc` by bylo lepší začít z nuly a pravidla postupně přidávat. Nasazením `stylelint-config-standard` by mohla vzniknout nutnost úprav tisíců řádků kódu. To umí rychle zkazit i sebevětší chuť do refaktoringu. 

## A ještě pár tipů

### Naklikání konfigurace

Během psaní článku jsem narazil na tenhle krásný vizuální nástroj pro generování konfigurace – [Stylelint Config](https://maximgatilin.github.io/stylelint-config/).

Obsahuje 43 otázek na preferovaný způsob psaní CSS. Sedněte si k tomu s kolegy, o každém pravidle diskutujte a… Dělám si legraci. Prosím, tohle nedělejte! Nejlepší je, když základní pravidla nastaví nejzkušenější člen týmu a diskutuje se o nich málo. Protože není až tak důležité, jaká pravidla si nastavíte, ale že budete mít *jednotná* pravidla.

### Automatická oprava chyb

Pokud vám Stylelint vypíše stovky chyb, je šance, že některé půjdou vyřešit automaticky. Znám tři způsoby, jak to řešit:

* Puštěním Stylelintu [s parametrem --fix](https://stylelint.io/user-guide/cli/#autofixing-errors). Ten toho ale opraví relativně málo.
* Nástroji jako [Prettier](https://prettier.io/) (viz fajn [článek na CSSTricks](https://css-tricks.com/prettier-stylelint-writing-clean-css-keeping-clean-code-two-tool-game/)).
* Ručně stručně pomocí hromadné náhrady v textu. Například u blogu mě to na cca 300 chyb vzalo asi dvě hodiny času.

Je taky dobré vědět, že nemusíte najednou opravit celý zastaralý kód. Šetřete zdraví! 

Vždyť nejvíc vám bude Stylelint pomáhat právě při code review u relativně dobře napsaných komponent. A pokud si Stylelint nastavíte se standardní konfigurací, dobře napsané budou.

Shrňme si to:

* Stylelint má smysl používat na každém projektu.
* Ideální je použití v editorech, alternativně pak na příkazové řádce.
* Start si usnadníte aplikací jen na refaktorovanou část kódu a použitím `stylelint-config-standard`.

O Stylelintu povídám také na mém novém školení [CSS kód: Organizace a údržba](https://www.vzhurudolu.cz/kurzy/css-kod), kde se kromě dalšího dozvíte špeky a zkušenosti z jeho praktického používání.

<!-- AdSnippet -->

