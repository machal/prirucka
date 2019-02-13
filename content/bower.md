# Bower

Bower je správce frontend balíčků.

*Upozornění: Bower je od poloviny roku 2017 označen jako „deprecated“, proto jej nedoporučuji používat na nové projekty. Více [na blogu](https://www.vzhurudolu.cz/blog/91-bower-mrtvy).*

<!-- AdSnippet -->

jQuery, Bootstrap, HTML5shiv, Fancybox, jQueryUI, Angular, Normalize.css, Modernizr, Fastclick… weby se skládají z frameworků, knihoven, pluginů. Prostě balíčků. No a [Bower](http://bower.io/) za vás obstará jejich stahování, instalaci, ukládání a taky správu vzájemných závislostí.

## Instalace balíčků

Pojďme to rovnou ukázat na reálním příkladu. Vím, že chci použít plugin `jquery-smooth-scroll`, takže si jej najdu v seznamu:

```bash
$ bower search jquery-smooth-scroll
Search results:
  jquery-smooth-scroll git://github.com/kswedberg/jquery-smooth-scroll.git
  jquery-smooth-scrolling git://github.com/mathiasbynens/jquery-smooth-scrolling.git
  …
```

Fajn. Balíček co chci se jmenuje `jquery-smooth-scroll`. Jdeme si ho nainstalovat:

```bash
bower install jquery-smooth-scroll --save
```

Bower jej začne stahovat z repozitářů. A protože plugin má ve svém Bower konfiguráku (`bower.json`) informaci, že závisí na jQuery, Bower stáhne i tuto knihovnu.

<div class="related web-only" markdown="1">
- [NPM a Node.js: Rozcestník odkazů](rozcestnik-npm-node.md)
</div>

Obsahy repozitářů obou knihoven se pak uloží do adresáře `bower_components/`.

## Adresář `bower_components/`

Sem to všechno Bower ukládá. Adresář obvykle máme v `.gitignore`, abychom do našeho repozitáře necommitovali změny v knihovnách.

<!-- AdSnippet -->

Pro lokální vývoj obvykle natahuji knihovny do HTML kódu přímo z `bower_components/`, ale balíčky pro produkci si kompiluji, minifikuji a všelijak jinak upravuji pomocí [Gruntu](grunt.md).

Pro vás ale samozřejmě může být výhodné jiné workflow. A adresář, kam se budou Bower balíčky ukládat, si můžete přenastavit.

## Aktualizace balíčků

Magický příkaz:

```bash
$ bower update
```

Zajistí, aby se mi z veřejných repozitářů stáhly nové verze balíčků. Pokud tedy zrovna `jquery-smooth-scroll` bude v příští verzi potřebovat jinou verzi jQuery, zaktualizuje se mi i ta.

<!-- AdSnippet -->

A ještě se naučíme jeden příkaz:

```bash
$ bower list
```

`list` slouží k vypsání aktuální struktury balíčků na našem projektu. U VzhuruDolu.cz třeba aktuálně takto:

```bash
vzhuru-dolu /Users/machal/Sites/vzhurudolu/www
├── jquery#1.9.1 (latest is 2.1.1)
├─┬ jquery.smooth-scroll#1.4.13 (latest is 1.5.0)
│ └── jquery#1.9.1 (2.1.1 available)
└─┬ social-likes#2.0.13 (latest is 3.0.4)
  └── jquery#1.9.1 (2.1.1 available)
```

Více o Boweru se dozvíte na [školení s Riki Fridrichem](https://www.vzhurudolu.cz/kurzy/grunt-gulp).
