# Postprocesing: Autoprefixer, Pixrem a další

Postprocesing neboli následné zpracování CSS kódu je zajímavý trend v CSS světě.

Obvykle slouží k doplňování kódu tvořícího fallback pro starší prohlížeče, ale za pár let může zčásti nahradit CSS preprocesory. Nejlépe si to ukážeme na příkladech nástrojů pro následné zpracování.

## Autoprefixer: doplňování prefixovaných deklarací

Kód píšete podle W3C syntaxe …

```bash
transform: scale(1.1);
```

… a Autoprefixer pak do vašeho CSS souboru doplní prefixované varianty:

```bash
-webkit-transform: scale(1.1);
-ms-transform: scale(1.1);
transform: scale(1.1);
```

Standardně doplňuje prefixy pro poslední dvě verze prohlížečů. To ale můžete snadno změnit. Tady je potřeba konfigurace grunt-autoprefixer, plugin pro Grunt, který nastavuje širší podporu prefixovaných variant CSS vlastností:

```javascript
autoprefixer: {
  options: {
    browsers: [
      'last 3 versions', 'ios 6',
      'ie 7', 'ie 8', 'ie 9'
    ]
  },
  style: {
      src: 'dist/css/style.css',
      dest: 'dist/css/style.css'
  }
}
```

Více na [github.com/postcss/autoprefixer](https://github.com/postcss/autoprefixer).

## pixrem

Pokud se rozhodnete využívat jednotku `rem`, což vřele doporučuji, vznikne vám nejspíš problém se zpětnou kompatibilitou ve starších prohlížečích.

Pixrem pluginu sdělíte přepočet mezi `rem` a pixely a do CSS kódu takhle pěkně doplníte fallbacky:

```css
.box {
  margin-bottom: 24px;
  margin-bottom: 1.5rem;
}
```

Více na [github.com/robwierzbowski/grunt-pixrem](https://github.com/robwierzbowski/grunt-pixrem).

## legaccsy

Plugin Robina Pokorného, jenž umí vytvořit verzi CSS souboru bez Media Queries pro starší prohlížeče, které dotazům na média nerozumí. Záchrana pro IE8 nebo IE9.

Více na [github.com/robinpokorny/grunt-legacssy](https://github.com/robinpokorny/grunt-legacssy).

## postcss

Jak už jsem na více místech zmínil, postcss může časem v některých aspektech nahradit LESS, SASS a další preprocesory. Filozofie je jednoduchá – CSS kód píšete v syntaxi, kterou navrhuje W3C, ale prohlížeče ji zatím neumějí. Postcss vám kód zkompiluje do dnešního CSS.

Budete se možná divit, ale po letech mrtvolného spánku se dnes standard CSS vyvíjí i v rovině syntaxe jazyka.

V postcss tedy tenhle kód používající CSS proměnné a pojmenovaná média…

```css
:root {
  --fontSize: 1.2rem;
}

@custom-media --viewport-medium (width <= 600px);

@media only screen and (--viewport-medium) {
  body { font-size: calc(var(--fontSize) * 1.2); }
}
```

… zkompiluje do tohoto dobře známého kódu:

```css
@media only screen and (max-width: 600px) {
  body { font-size: 1.44rem; }
}
```

Postcss má krásný slogan:

> Use tomorrow’s CSS syntax, today.

Více na [cssnext.io](http://cssnext.io/).
