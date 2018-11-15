Font Face: tipy a triky
=======================

## Pozor na falešnou kurzívu a tučný řez

Přidáváte do stránky vlastní soubory s webovými fonty (tzn. nepoužíváte cloudová řešení typu Google Fonts)? Je dobré vědět, že pokud font chcete používat v různých šířkách a variantách, musíte na to myslet v CSS deklaracích a zároveň mít připravené soubory s patřičnými řezy.

Týká se to hlavně kurzívy a tučného řezu. Pokud byste totiž deklarovali font takto…

```css
@font-face {
  font-family: 'WebFont';
  src: url('webfont.woff');
}

.element {
  font-family: 'WebFont', Georgia, sans-serif;
}
```

… a pak ho aplikovali na toto HTML, …

```html
<p>Příliš žluťoučký <b>kůň</b>
úpěl ďábelské <em>ódy</em>.</p>
```

… slovo „kůň” by se na první pohled správně vykreslilo tučně, stejně jako slovo „ódy” kurzívou fontu `WebFont`. Jenže ouha, šlo by o falešnou kurzívu a tučný řez, který se prohlížeč pokusil vytvořit z běžného řezu písma.

Pokud všechny tři řezy potřebujete, jediná správná cesta je dodat prohlížeči tři řezy – „normální“, kurzívu a tučný řez — a v CSS deklaraci mu oznámit, který soubor ke které variantě patří.

Zjednodušeně by to mohlo vypadat takto:

```css
@font-face {
  font-family: 'WebFont';
  src: url('webfont.woff');
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: 'WebFont';
  src: url('webfont-bold.woff');
  font-style: normal;
  font-weight: bold;
}

@font-face {
  font-family: 'WebFont';
  src: url('webfont-italic.woff');
  font-style: italic;
  font-weight: normal;
}
```

Více na [css-snippets.com/web-fonts-faux-bold-and-italic](http://css-snippets.com/web-fonts-faux-bold-and-italic/).


## Načítání fontů z jiných domén

Kvůli bezpečnostnímu pravidlu o servírování fontů ze stejného původu (Same Origin Policy) je v některých prohlížečích zakázáno načítat soubory s fonty z jiné domény. Například Explorer vám do konzole nahlásí:

```
CSS3117: @font-face failed cross-origin request.
Resource access is restricted.
```

Řešením je správně nastavit `.htaccess` na doméně, z níž servírujete soubory s písmy:

```
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

Nastavení pro jiné servery než Apache hledejte v `server-configs` repozitářích u HTML5Boilerplate — [github.com/h5bp](https://github.com/h5bp).

Dobré zmínit, že načítání z jiných domén mírně zdrží zobrazení fontů kvůli dalšímu DNS lookupu.

## Fontokuk

Chamurappiho užitečný nástroj na testování přítomnosti (nejen) českých znaků v souborech v písmech. Vyberete font z operačního systému, z Google Fonts nebo přilinkujete vlastní a také vyberete text, který v něm chcete vysázet. Ten vám pak Fontokuk vykreslí ve vybraném písmu – [fontokuk.webylon.info](http://fontokuk.webylon.info).

## Ikonfonty

Zajímavý způsob využití webových fontů představují tzv. „ikonfonty“. Namísto běžných znaků jsou v nich uložené ikonky.

Výhodou je vektorový formát, který vám umožní mít jednu verzi ikony pro všechny velikosti rodičovského prvku nebo pro všechny možné varianty vysokokapacitních displejů.

Aplikace IcoMoon vám vygeneruje fonty s ikonami na míru – [icomoon.io](http://icomoon.io).

Hezké využití ikonfontů je vektorová mapa Česka – [cezetmap.cz](http://cezetmap.cz).

Než se do používání ikonfontů pustíte, zvažte, zda pro vás není lepší použít rovnou vektorový formát SVG – [vrdl.cz/p/ikonfonty-vs-svg](https://www.vzhurudolu.cz/prirucka/ikonfonty-vs-svg).
